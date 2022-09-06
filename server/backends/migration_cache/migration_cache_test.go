package migration_cache_test

import (
	"bytes"
	"context"
	"errors"
	"testing"

	"github.com/buildbuddy-io/buildbuddy/server/backends/disk_cache"
	"github.com/buildbuddy-io/buildbuddy/server/backends/migration_cache"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/remote_cache/digest"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testauth"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testdigest"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testenv"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testfs"
	"github.com/buildbuddy-io/buildbuddy/server/util/prefix"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/stretchr/testify/require"

	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
)

var (
	emptyUserMap = testauth.TestUsers()
)

func getTestEnv(t *testing.T, users map[string]interfaces.UserInfo) *testenv.TestEnv {
	te := testenv.GetTestEnv(t)
	te.SetAuthenticator(testauth.NewTestAuthenticator(users))
	return te
}

func getAnonContext(t *testing.T, env environment.Env) context.Context {
	ctx, err := prefix.AttachUserPrefixToContext(context.Background(), env)
	if err != nil {
		t.Errorf("error attaching user prefix: %v", err)
	}
	return ctx
}

// errorCache lets us mock errors to test error handling
type errorCache struct {
	interfaces.Cache
}

func (c *errorCache) Set(ctx context.Context, d *repb.Digest, data []byte) error {
	return errors.New("error cache set err")
}

func (c *errorCache) Get(ctx context.Context, d *repb.Digest) ([]byte, error) {
	return nil, errors.New("error cache get err")
}

func TestSet_DoubleWrite(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	maxSizeBytes := int64(1000)
	rootDirSrc := testfs.MakeTempDir(t)
	rootDirDest := testfs.MakeTempDir(t)

	srcCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}
	destCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirDest}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}
	mc := migration_cache.NewMigrationCache(srcCache, destCache, 0)

	d, buf := testdigest.NewRandomDigestBuf(t, 100)
	err = mc.Set(ctx, d, buf)
	require.NoError(t, err)

	// Verify data was written to both caches
	srcData, err := srcCache.Get(ctx, d)
	require.NoError(t, err)
	require.NotNil(t, srcData)

	destData, err := destCache.Get(ctx, d)
	require.NoError(t, err)
	require.NotNil(t, destData)

	require.True(t, bytes.Equal(srcData, destData))
}

func TestSet_DestWriteErr(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	rootDirSrc := testfs.MakeTempDir(t)

	srcCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, int64(1000))
	if err != nil {
		t.Fatal(err)
	}
	destCache := &errorCache{}
	mc := migration_cache.NewMigrationCache(srcCache, destCache, 0)

	d, buf := testdigest.NewRandomDigestBuf(t, 100)
	err = mc.Set(ctx, d, buf)
	require.NoError(t, err)

	// Verify data was successfully written to src cache
	srcData, err := srcCache.Get(ctx, d)
	require.NoError(t, err)
	require.Equal(t, buf, srcData)
}

func TestSet_SrcWriteErr(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	rootDirSrc := testfs.MakeTempDir(t)

	srcCache := &errorCache{}
	destCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, int64(1000))
	if err != nil {
		t.Fatal(err)
	}
	mc := migration_cache.NewMigrationCache(srcCache, destCache, 0)

	d, buf := testdigest.NewRandomDigestBuf(t, 100)
	err = mc.Set(ctx, d, buf)
	require.Error(t, err)

	// Verify data was deleted from the dest cache
	destData, err := destCache.Get(ctx, d)
	require.Error(t, err)
	require.True(t, status.IsNotFoundError(err))
	require.Nil(t, destData)
}

func TestSet_SrcAndDestWriteErr(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)

	srcCache := &errorCache{}
	destCache := &errorCache{}
	mc := migration_cache.NewMigrationCache(srcCache, destCache, 0)

	d, buf := testdigest.NewRandomDigestBuf(t, 100)
	err := mc.Set(ctx, d, buf)
	require.Error(t, err)
}

func TestGetSet(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	maxSizeBytes := int64(1_000_000_000) // 1GB
	rootDirSrc := testfs.MakeTempDir(t)
	rootDirDest := testfs.MakeTempDir(t)

	srcCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}
	destCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirDest}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}
	mc := migration_cache.NewMigrationCache(srcCache, destCache, 0)

	testSizes := []int64{
		1, 10, 100, 1000, 10000, 1000000, 10000000,
	}
	for _, testSize := range testSizes {
		d, buf := testdigest.NewRandomDigestBuf(t, testSize)
		err = mc.Set(ctx, d, buf)
		if err != nil {
			t.Fatalf("Error setting %q in cache: %s", d.GetHash(), err.Error())
		}
		// Get() the bytes from the cache.
		rbuf, err := mc.Get(ctx, d)
		if err != nil {
			t.Fatalf("Error getting %q from cache: %s", d.GetHash(), err.Error())
		}

		// Compute a digest for the bytes returned.
		d2, err := digest.Compute(bytes.NewReader(rbuf))
		if d.GetHash() != d2.GetHash() {
			t.Fatalf("Returned digest %q did not match set value: %q", d2.GetHash(), d.GetHash())
		}
	}
}

func TestGet_DoubleRead(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	maxSizeBytes := int64(1000)
	rootDirSrc := testfs.MakeTempDir(t)
	rootDirDest := testfs.MakeTempDir(t)

	srcCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}
	destCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirDest}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}

	doubleReadPercentage := 1.0
	mc := migration_cache.NewMigrationCache(srcCache, destCache, doubleReadPercentage)

	d, buf := testdigest.NewRandomDigestBuf(t, 100)
	err = mc.Set(ctx, d, buf)
	require.NoError(t, err)

	data, err := mc.Get(ctx, d)
	require.NoError(t, err)
	require.True(t, bytes.Equal(buf, data))
}

func TestGet_DoubleReadDiff(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	maxSizeBytes := int64(1000)
	rootDirSrc := testfs.MakeTempDir(t)
	rootDirDest := testfs.MakeTempDir(t)

	srcCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}
	destCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirDest}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}

	doubleReadPercentage := 1.0
	mc := migration_cache.NewMigrationCache(srcCache, destCache, doubleReadPercentage)

	// Set different data in each cache
	d1, buf1 := testdigest.NewRandomDigestBuf(t, 100)
	d2, buf2 := testdigest.NewRandomDigestBuf(t, 100)
	require.NotEqual(t, d1, d2)

	err = srcCache.Set(ctx, d1, buf1)
	require.NoError(t, err)
	err = destCache.Set(ctx, d1, buf2)
	require.NoError(t, err)

	// Should return data saved to src cache
	data, err := mc.Get(ctx, d1)
	require.NoError(t, err)
	require.True(t, bytes.Equal(buf1, data))
}

func TestGet_DestReadErr(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	maxSizeBytes := int64(1000)
	rootDirSrc := testfs.MakeTempDir(t)

	srcCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}
	destCache := &errorCache{}

	doubleReadPercentage := 1.0
	mc := migration_cache.NewMigrationCache(srcCache, destCache, doubleReadPercentage)

	d, buf := testdigest.NewRandomDigestBuf(t, 100)
	err = mc.Set(ctx, d, buf)
	require.NoError(t, err)

	// Should return data from src cache without error
	data, err := mc.Get(ctx, d)
	require.NoError(t, err)
	require.True(t, bytes.Equal(buf, data))
}

func TestGet_SrcReadErr(t *testing.T) {
	te := getTestEnv(t, emptyUserMap)
	ctx := getAnonContext(t, te)
	maxSizeBytes := int64(1000)
	rootDirSrc := testfs.MakeTempDir(t)

	srcCache := &errorCache{}
	destCache, err := disk_cache.NewDiskCache(te, &disk_cache.Options{RootDirectory: rootDirSrc}, maxSizeBytes)
	if err != nil {
		t.Fatal(err)
	}

	doubleReadPercentage := 1.0
	mc := migration_cache.NewMigrationCache(srcCache, destCache, doubleReadPercentage)

	// Write data to dest cache only
	d, buf := testdigest.NewRandomDigestBuf(t, 100)
	err = destCache.Set(ctx, d, buf)
	require.NoError(t, err)

	// Should return error
	data, err := mc.Get(ctx, d)
	require.Error(t, err)
	require.Nil(t, data)
}
