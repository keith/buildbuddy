package protoutil_test

import (
	"fmt"
	"math/rand"
	"testing"
	"time"

	"github.com/go-faker/faker/v4"
	"github.com/stretchr/testify/require"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/durationpb"
	"google.golang.org/protobuf/types/known/timestamppb"

	capb "github.com/buildbuddy-io/buildbuddy/proto/cache"
	rfpb "github.com/buildbuddy-io/buildbuddy/proto/raft"
	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
	rspb "github.com/buildbuddy-io/buildbuddy/proto/resource"
	"github.com/buildbuddy-io/buildbuddy/server/util/protoutil"
	statuspb "google.golang.org/genproto/googleapis/rpc/status"
	gcodes "google.golang.org/grpc/codes"
)

type protoMessage interface {
	MarshalVT() ([]byte, error)
	UnmarshalVT([]byte) error
	SizeVT() int
	proto.Message
}

func generateFileMetadata(t testing.TB) []protoMessage {
	res := make([]protoMessage, 0, 100)
	for i := 0; i < 100; i++ {
		md := &rfpb.FileMetadata{}
		err := faker.FakeData(md)
		require.NoError(t, err, "unable to fake data for fileMetadata")
		res = append(res, md)
	}
	return res
}

func generateScoreCard(t testing.TB) []protoMessage {
	besUpload := &capb.ScoreCard_Result{
		ActionId:    "bes-upload",
		Digest:      &repb.Digest{Hash: "aaa", SizeBytes: 1_000},
		CacheType:   rspb.CacheType_CAS,
		RequestType: capb.RequestType_WRITE,
		Status:      &statuspb.Status{Code: int32(gcodes.OK)},
		StartTime:   timestamppb.New(time.Unix(100, 0)),
		Duration:    durationpb.New(300 * time.Millisecond),
	}
	acMiss := &capb.ScoreCard_Result{
		ActionId:       "abc",
		ActionMnemonic: "GoCompile",
		TargetId:       "//foo",
		Digest:         &repb.Digest{Hash: "abc", SizeBytes: 111},
		CacheType:      rspb.CacheType_AC,
		RequestType:    capb.RequestType_READ,
		Status:         &statuspb.Status{Code: int32(gcodes.NotFound)},
		StartTime:      timestamppb.New(time.Unix(300, 0)),
		Duration:       durationpb.New(100 * time.Millisecond),
	}
	casUpload := &capb.ScoreCard_Result{
		ActionId:       "abc",
		ActionMnemonic: "GoCompile",
		TargetId:       "//foo",
		Digest:         &repb.Digest{Hash: "ccc", SizeBytes: 10_000},
		CacheType:      rspb.CacheType_CAS,
		RequestType:    capb.RequestType_WRITE,
		Status:         &statuspb.Status{Code: int32(gcodes.OK)},
		StartTime:      timestamppb.New(time.Unix(200, 0)),
		Duration:       durationpb.New(200 * time.Millisecond),
	}
	casDownload := &capb.ScoreCard_Result{
		ActionId:       "edf",
		ActionMnemonic: "GoLink",
		TargetId:       "//bar",
		Digest:         &repb.Digest{Hash: "fff", SizeBytes: 100_000},
		CacheType:      rspb.CacheType_CAS,
		RequestType:    capb.RequestType_READ,
		Status:         &statuspb.Status{Code: int32(gcodes.OK)},
		StartTime:      timestamppb.New(time.Unix(400, 0)),
		Duration:       durationpb.New(150 * time.Millisecond),
	}

	res := []protoMessage{
		besUpload,
		acMiss,
		casUpload,
		casDownload,
	}
	return res
}

func generateBytes(t testing.TB, protos []protoMessage) [][]byte {
	res := make([][]byte, 0, len(protos))
	for _, pb := range protos {
		buf, err := proto.Marshal(pb)
		require.NoError(t, err, "unable to marshal")
		res = append(res, buf)
	}
	return res
}

type marshalFunc func(v protoMessage) ([]byte, error)
type unmarshalFunc func([]byte) error

func benchmarkMarshal(b *testing.B, marshalFn marshalFunc, data []protoMessage) {
	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		pb := data[rand.Intn(len(data))]
		b.SetBytes(int64(pb.SizeVT()))
		_, err := marshalFn(pb)
		if err != nil {
			b.Fatal(err)
		}
	}

}

func benchmarkUnmarshal(b *testing.B, unmarshalFn unmarshalFunc, data [][]byte) {
	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		buf := data[rand.Intn(len(data))]
		b.SetBytes(int64(len(buf)))
		err := unmarshalFn(buf)
		if err != nil {
			b.Fatal(err)
		}
	}

}

func BenchmarkMarshal(b *testing.B) {
	data := map[string][]protoMessage{
		"fileMetadata": generateFileMetadata(b),
		"scoreCard":    generateScoreCard(b),
	}

	marshalFns := map[string]marshalFunc{
		"proto": func(v protoMessage) ([]byte, error) {
			return proto.Marshal(v)
		},
		"protoutil": func(v protoMessage) ([]byte, error) {
			return v.MarshalVT()
		},
	}

	for name, fn := range marshalFns {
		for pbName, msgs := range data {
			b.Run(fmt.Sprintf("name=%s/pbName=%s", name, pbName), func(b *testing.B) {
				benchmarkMarshal(b, fn, msgs)
			})
		}
	}
}

type unmarshalFnAndData struct {
	data [][]byte
	fns  map[string]unmarshalFunc
}

func BenchmarkUnmarshal(b *testing.B) {
	mds := generateFileMetadata(b)
	scoreCards := generateScoreCard(b)
	tests := map[string]unmarshalFnAndData{
		"fileMetadata": unmarshalFnAndData{
			data: generateBytes(b, mds),
			fns: map[string]unmarshalFunc{
				"proto": func(buf []byte) error {
					v := &rfpb.FileMetadata{}
					return proto.Unmarshal(buf, v)
				},
				"protoutil": func(buf []byte) error {
					v := &rfpb.FileMetadata{}
					return protoutil.Unmarshal(buf, v)
				},
			},
		},
		"scoreCard": unmarshalFnAndData{
			data: generateBytes(b, scoreCards),
			fns: map[string]unmarshalFunc{
				"proto": func(buf []byte) error {
					v := &capb.ScoreCard_Result{}
					return proto.Unmarshal(buf, v)
				},
				"protoutil": func(buf []byte) error {
					v := &capb.ScoreCard_Result{}
					return v.UnmarshalVT(buf)
				},
			},
		},
	}

	for pbName, tc := range tests {
		for name, fn := range tc.fns {
			b.Run(fmt.Sprintf("name=%s/pbName=%s", name, pbName), func(b *testing.B) {
				benchmarkUnmarshal(b, fn, tc.data)
			})
		}
	}
}
