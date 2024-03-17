package index

import (
	"bufio"
	"bytes"
	"encoding/binary"
	"fmt"
	"math"
	"regexp"
	"runtime"
	"strconv"
	"sync"

	"github.com/RoaringBitmap/roaring/roaring64"
	"github.com/buildbuddy-io/buildbuddy/codesearch/types"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/cockroachdb/pebble"
	"github.com/google/uuid"
	"github.com/xiam/sexpr/ast"
	"github.com/xiam/sexpr/parser"
	"golang.org/x/exp/slices"
	"golang.org/x/sync/errgroup"
)

var fieldNameRegex = regexp.MustCompile(`^([a-zA-Z0-9_]+)$`)

const npost = 64 << 20 / 8 // 64 MB worth of post entries

type postingLists map[string][]uint64

type Writer struct {
	db  *pebble.DB
	log log.Logger

	repo              string
	segmentID         uuid.UUID
	tokenizer         *TrigramTokenizer
	fieldPostingLists map[string]postingLists
	batch             *pebble.Batch
}

func NewWriter(db *pebble.DB, repo string) (*Writer, error) {
	id, err := uuid.NewV7()
	if err != nil {
		return nil, err
	}
	subLog := log.NamedSubLogger(fmt.Sprintf("writer:%s (%s)", repo, id.String()))
	return &Writer{
		db:                db,
		log:               subLog,
		repo:              repo,
		segmentID:         id,
		tokenizer:         NewTrigramTokenizer(types.TextField),
		fieldPostingLists: make(map[string]postingLists),
		batch:             db.NewBatch(),
	}, nil
}

func BytesToUint64(buf []byte) uint64 {
	return binary.LittleEndian.Uint64(buf)
}

func Uint64ToBytes(i uint64) []byte {
	buf := make([]byte, 8)
	binary.LittleEndian.PutUint64(buf, i)
	return buf
}

type indexKeyType string

const (
	docField     indexKeyType = "doc"
	ngramField   indexKeyType = "gra"
	deleteField  indexKeyType = "del"
	keySeparator              = ":"
)

type key struct {
	repo      string
	keyType   indexKeyType
	data      []byte
	field     string
	segmentID string
}

func (k *key) FromBytes(b []byte) error {
	segments := bytes.Split(b, []byte(keySeparator))
	if len(segments) < 5 {
		return status.InternalErrorf("invalid key %q (<5 segments)", b)
	}
	k.repo = string(segments[0])
	k.keyType = indexKeyType(segments[1])
	k.data = segments[2]
	k.field = string(segments[3])
	k.segmentID = string(segments[4])
	return nil
}
func (k *key) DocID() uint64 {
	if k.keyType != docField {
		return 0
	}
	d, err := strconv.ParseUint(string(k.data), 10, 64)
	if err == nil {
		return d
	}
	return 0
}
func (k *key) NGram() []byte {
	if k.keyType != ngramField {
		return nil
	}
	return k.data
}

func (w *Writer) storedFieldKey(docID uint64, field string) []byte {
	return []byte(fmt.Sprintf("%s:doc:%d:%s:%s", w.repo, docID, field, w.segmentID.String()))
}

func (w *Writer) postingListKey(ngram string, field string) []byte {
	return []byte(fmt.Sprintf("%s:gra:%s:%s:%s", w.repo, ngram, field, w.segmentID.String()))
}

func (w *Writer) deleteKey(docID uint64) []byte {
	return []byte(fmt.Sprintf("%s:doc:%d:%s:%s", w.repo, docID, "", w.segmentID.String()))
}

func (w *Writer) DeleteDocument(docID uint64) error {
	docidKey := w.deleteKey(docID)
	w.batch.Set(docidKey, Uint64ToBytes(docID), nil)
	return nil
}

func (w *Writer) AddDocument(doc types.Document) error {
	// **Always store DocID.**
	docidKey := w.storedFieldKey(doc.ID(), types.DocIDField)
	w.batch.Set(docidKey, Uint64ToBytes(doc.ID()), nil)

	for _, fieldName := range doc.Fields() {
		if !fieldNameRegex.MatchString(fieldName) {
			return status.InvalidArgumentErrorf("Invalid field name %q", fieldName)
		}
		field := doc.Field(fieldName)
		if _, ok := w.fieldPostingLists[field.Name()]; !ok {
			w.fieldPostingLists[field.Name()] = make(postingLists, 0)
		}
		postingLists := w.fieldPostingLists[field.Name()]

		// TODO(tylerw): lookup the tokenizer to use for this field. It
		// may not always be tritokenizer.
		w.tokenizer.Reset(bufio.NewReader(bytes.NewReader(field.Contents())))
		for {
			tok, err := w.tokenizer.Next()
			if err != nil {
				break
			}
			ngram := string(tok.Ngram())
			postingLists[ngram] = append(postingLists[ngram], doc.ID())
		}

		if field.Stored() {
			storedFieldKey := w.storedFieldKey(doc.ID(), field.Name())
			w.batch.Set(storedFieldKey, field.Contents(), nil)
		}
	}
	return nil
}

func (w *Writer) Flush() error {
	mu := sync.Mutex{}
	flushBatch := func() error {
		if w.batch.Empty() {
			return nil
		}
		if err := w.batch.Commit(pebble.Sync); err != nil {
			return err
		}
		w.log.Debugf("flushed batch")
		w.batch = w.db.NewBatch()
		return nil
	}
	eg := new(errgroup.Group)
	eg.SetLimit(runtime.GOMAXPROCS(0))
	writePLs := func(key []byte, ids []uint64) error {
		buf := new(bytes.Buffer)
		pl := roaring64.BitmapOf(ids...)
		if _, err := pl.WriteTo(buf); err != nil {
			return err
		}
		mu.Lock()
		defer mu.Unlock()
		w.log.Debugf("Set %q", string(key))
		if err := w.batch.Set(key, buf.Bytes(), nil); err != nil {
			return err
		}
		if w.batch.Len() >= npost {
			if err := flushBatch(); err != nil {
				return err
			}
		}
		return nil
	}
	for fieldName, postingLists := range w.fieldPostingLists {
		for ngram, docIDs := range postingLists {
			writePLs(w.postingListKey(ngram, fieldName), docIDs)
		}
	}
	return flushBatch()
}

type Reader struct {
	db  pebble.Reader
	log log.Logger

	repo string
}

func NewReader(db pebble.Reader, repo string) *Reader {
	subLog := log.NamedSubLogger(fmt.Sprintf("reader-%s", repo))
	return &Reader{
		db:   db,
		log:  subLog,
		repo: repo,
	}
}

func (r *Reader) storedFieldKey(docID uint64, field string) []byte {
	return []byte(fmt.Sprintf("%s:doc:%d:%s", r.repo, docID, field))
}

func (r *Reader) deletedDocPrefix(docID uint64) []byte {
	return []byte(fmt.Sprintf("%s:del:%d::", r.repo, docID))
}

func (r *Reader) allDocIDs() (*roaring64.Bitmap, error) {
	iter := r.db.NewIter(&pebble.IterOptions{
		LowerBound: r.storedFieldKey(0, types.DocIDField),
		UpperBound: r.storedFieldKey(math.MaxUint64, types.DocIDField),
	})
	defer iter.Close()
	resultSet := roaring64.New()
	k := key{}
	for iter.First(); iter.Valid(); iter.Next() {
		if err := k.FromBytes(iter.Key()); err != nil {
			return nil, err
		}
		if k.keyType == docField && k.field == types.DocIDField {
			resultSet.Add(BytesToUint64(iter.Value()))
		}
		continue
	}
	return resultSet, nil
}

func (r *Reader) GetStoredDocument(docID uint64) (types.Document, error) {
	docIDStart := r.storedFieldKey(docID, "")
	iter := r.db.NewIter(&pebble.IterOptions{
		LowerBound: docIDStart,
		UpperBound: r.storedFieldKey(docID, "\xff"),
	})
	defer iter.Close()

	fields := make(map[string]types.NamedField, 0)
	k := key{}
	for iter.First(); iter.Valid(); iter.Next() {
		if err := k.FromBytes(iter.Key()); err != nil {
			return nil, err
		}
		if k.keyType != docField || k.field == types.DocIDField {
			// Skip docID -- we already have it from args.
			continue
		}
		fieldVal := make([]byte, len(iter.Value()))
		copy(fieldVal, iter.Value())
		fields[k.field] = types.NewNamedField(types.TextField, k.field, fieldVal, true /*=stored*/)
	}
	doc := types.NewMapDocument(docID, fields)
	return doc, nil
}

func (r *Reader) GetStoredFieldValue(docID uint64, field string) ([]byte, error) {
	docIDStart := r.storedFieldKey(docID, field)
	iter := r.db.NewIter(&pebble.IterOptions{
		LowerBound: docIDStart,
		UpperBound: r.storedFieldKey(docID, "\xff"),
	})
	defer iter.Close()

	k := key{}
	for iter.First(); iter.Valid(); iter.Next() {
		if err := k.FromBytes(iter.Key()); err != nil {
			return nil, err
		}
		if k.keyType == docField && k.field == field {
			fieldVal := make([]byte, len(iter.Value()))
			copy(fieldVal, iter.Value())
			return fieldVal, nil
		}
	}
	return nil, status.NotFoundErrorf("doc %d (field %q) not found", docID, field)
}

// postingList looks up the set of docIDs matching the provided ngram.
// If `field` is set to a non-empty value, matches are restricted to just the
// specified field. Otherwise, all fields are searched.
// If `restrict` is set to a non-empty value, matches will only be returned if
// they are both found and also are present in the restrict set.
func (r *Reader) postingList(ngram []byte, restrict *roaring64.Bitmap, field string) (*roaring64.Bitmap, error) {
	minKey := []byte(fmt.Sprintf("%s:gra:%s", r.repo, ngram))
	if field != types.AllFields {
		minKey = []byte(fmt.Sprintf("%s:gra:%s:%s", r.repo, ngram, field))
	}
	maxKey := append(minKey, byte('\xff'))
	iter := r.db.NewIter(&pebble.IterOptions{
		LowerBound: minKey,
		UpperBound: maxKey,
	})
	defer iter.Close()

	resultSet := roaring64.New()
	postingList := roaring64.New()

	k := key{}
	for iter.First(); iter.Valid(); iter.Next() {
		if err := k.FromBytes(iter.Key()); err != nil {
			return nil, err
		}
		if k.keyType != ngramField {
			continue
		}
		if _, err := postingList.ReadFrom(bytes.NewReader(iter.Value())); err != nil {
			return nil, err
		}
		r.log.Infof("%q matched tok %q [%d]", ngram, iter.Key(), postingList.GetCardinality())
		resultSet = roaring64.Or(resultSet, postingList)
		postingList.Clear()
	}
	if !restrict.IsEmpty() {
		resultSet.And(restrict)
	}
	return resultSet, nil
}

const (
	QNone = ":none"
	QAll  = ":all"

	QAnd = ":and"
	QOr  = ":or"
	QEq  = ":eq"
)

var allowedAtoms = []string{QNone, QAll, QEq, QAnd, QOr}

func qOp(expr *ast.Node) (string, error) {
	if !expr.IsVector() || len(expr.List()) < 1 {
		return "", status.InvalidArgumentErrorf("%q not q-expr with op", expr)
	}
	firstNode := expr.List()[0]
	if firstNode.Type() != ast.NodeTypeAtom {
		return "", status.InvalidArgumentErrorf("%q not atom", expr)
	}
	atomString, ok := firstNode.Value().(string)
	if !ok {
		return "", status.InvalidArgumentErrorf("Query atom: %q not string", expr.Value())
	}
	if !slices.Contains(allowedAtoms, atomString) {
		return "", status.InvalidArgumentErrorf("Unknown query atom: %q", firstNode.Value())
	}
	return atomString, nil
}

func (r *Reader) removeDeletedDocIDs(docids *roaring64.Bitmap) error {
	if docids.GetCardinality() == 0 {
		return nil
	}
	iter := r.db.NewIter(&pebble.IterOptions{
		LowerBound: r.deletedDocPrefix(0),
		UpperBound: r.deletedDocPrefix(math.MaxUint64),
	})
	defer iter.Close()

	arr := docids.ToArray()
	lastDocKeyPrefix := r.deletedDocPrefix(arr[len(arr)-1])
	for _, docID := range arr {
		deletedDocKeyPrefix := r.deletedDocPrefix(docID)
		valid := iter.SeekGE(deletedDocKeyPrefix)
		if !valid || bytes.Compare(iter.Key(), lastDocKeyPrefix) > 1 {
			return nil
		}
		if bytes.HasPrefix(iter.Key(), deletedDocKeyPrefix) {
			docids.Remove(docID)
		}
	}
	return nil
}

func (r *Reader) RawQuery(squery []byte) ([]uint64, error) {
	root, err := parser.Parse(squery)
	if err != nil {
		return nil, err
	}
	// Unwrap the expression tree if it's wrapped in an outer list.
	if root.Type() == ast.NodeTypeList && len(root.List()) == 1 {
		root = root.List()[0]
	}
	bm, err := r.postingQuery(root, roaring64.NewBitmap())
	if err != nil {
		return nil, err
	}
	err = r.removeDeletedDocIDs(bm)
	return bm.ToArray(), err
}

func (r *Reader) postingQuery(q *ast.Node, restrict *roaring64.Bitmap) (*roaring64.Bitmap, error) {
	op, err := qOp(q)
	if err != nil {
		return nil, err
	}
	switch op {
	case QNone:
		return nil, nil
	case QAll:
		if restrict != nil {
			return restrict, nil
		}
		return r.allDocIDs()
	case QAnd:
		list := restrict
		for _, subQuery := range q.List()[1:] {
			list, err = r.postingQuery(subQuery, list)
			if err != nil {
				return nil, err
			}
		}
		return list, nil
	case QOr:
		var list = new(roaring64.Bitmap)
		for _, subQuery := range q.List()[1:] {
			l, err := r.postingQuery(subQuery, restrict)
			if err != nil {
				return nil, err
			}
			list.Or(l)
		}
		return list, nil
	case QEq:
		children := q.List()
		if len(children) != 3 {
			return nil, status.InvalidArgumentErrorf("%s expression should have 3 elements: %q (has %d)", QEq, children, len(children))
		}
		field, ok := children[1].Value().(string)
		if !ok {
			return nil, status.InvalidArgumentErrorf("field name %q must be a string", children[1])
		}
		ngram, ok := children[2].Value().(string)
		if !ok {
			return nil, status.InvalidArgumentErrorf("ngram %q must be a string/bytes", children[2])
		}
		// TODO(tylerw): consider if this is the right place
		// for this to happen.
		if s, err := strconv.Unquote(ngram); err == nil {
			ngram = s
		}
		return r.postingList([]byte(ngram), restrict, field)
	default:
		return nil, status.FailedPreconditionErrorf("Unknown query op: %q", op)
	}

}
