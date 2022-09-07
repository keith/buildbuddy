package migration_cache

import (
	"context"
	"io"
	"math/rand"

	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/util/flagutil"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"golang.org/x/sync/errgroup"

	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
)

var (
	cacheMigrationConfig = flagutil.New("cache.migration", MigrationConfig{}, "Config to specify the details of a cache migration")
)

type MigrationCache struct {
	src                  interfaces.Cache
	dest                 interfaces.Cache
	doubleReadPercentage float64

	eg       *errgroup.Group
	quitChan chan struct{}

	copyChan chan *repb.Digest
}

func Register(env environment.Env) error {
	if cacheMigrationConfig.Src == nil || cacheMigrationConfig.Dest == nil {
		return nil
	}
	log.Infof("Registering Migration Cache")

	srcCache, err := (*cacheMigrationConfig.Src).CacheFromConfig(env)
	if err != nil {
		return err
	}
	destCache, err := (*cacheMigrationConfig.Dest).CacheFromConfig(env)
	if err != nil {
		return err
	}
	mc := NewMigrationCache(cacheMigrationConfig, srcCache, destCache)

	if env.GetCache() != nil {
		log.Warningf("Overriding configured cache with migration_cache. If running a migration, all cache configs" +
			" should be nested under the cache.migration block.")
	}
	env.SetCache(mc)

	mc.Start(env.GetServerContext())
	env.GetHealthChecker().RegisterShutdownFunction(func(ctx context.Context) error {
		return mc.Stop()
	})

	return nil
}

func NewMigrationCache(migrationConfig *MigrationConfig, srcCache interfaces.Cache, destCache interfaces.Cache) *MigrationCache {
	return &MigrationCache{
		src:      srcCache,
		dest:     destCache,
		copyChan: make(chan *repb.Digest, migrationConfig.CopyChanBufferSize),
		eg:       &errgroup.Group{},
	}
}

func (mc *MigrationCache) WithIsolation(ctx context.Context, cacheType interfaces.CacheType, remoteInstanceName string) (interfaces.Cache, error) {
	return nil, status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) Contains(ctx context.Context, d *repb.Digest) (bool, error) {
	return false, status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) Metadata(ctx context.Context, d *repb.Digest) (*interfaces.CacheMetadata, error) {
	return nil, status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) FindMissing(ctx context.Context, digests []*repb.Digest) ([]*repb.Digest, error) {
	return nil, status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) GetMulti(ctx context.Context, digests []*repb.Digest) (map[*repb.Digest][]byte, error) {
	return nil, status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) SetMulti(ctx context.Context, kvs map[*repb.Digest][]byte) error {
	return status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) Delete(ctx context.Context, d *repb.Digest) error {
	return status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) Reader(ctx context.Context, d *repb.Digest, offset, limit int64) (io.ReadCloser, error) {
	return nil, status.UnimplementedError("not yet implemented")
}

func (mc *MigrationCache) Writer(ctx context.Context, d *repb.Digest) (io.WriteCloser, error) {
	return nil, status.UnimplementedError("not yet implemented")
}

// TODO(Maggie): Add copying logic
func (mc *MigrationCache) Get(ctx context.Context, d *repb.Digest) ([]byte, error) {
	eg, gctx := errgroup.WithContext(ctx)
	var srcErr, dstErr error
	var srcBuf []byte

	eg.Go(func() error {
		srcBuf, srcErr = mc.src.Get(gctx, d)
		return srcErr
	})

	// Double read some proportion to guarantee that data is consistent between caches
	doubleRead := rand.Float64() <= mc.doubleReadPercentage
	if doubleRead {
		eg.Go(func() error {
			_, dstErr = mc.dest.Get(gctx, d)
			return nil // we don't care about the return error from this cache
		})
	}

	if err := eg.Wait(); err != nil {
		return nil, err
	}

	if doubleRead {
		if srcErr != dstErr {
			// Don't log if data not found in dest cache, bc it may not have been copied yet
			if !status.IsNotFoundError(dstErr) {
				log.Warningf("Double read of %q failed. src err %s, dest err %s", d, srcErr, dstErr)
			}
		}
	}

	// Enqueue non-blocking copying
	select {
	case mc.copyChan <- d:
	default:
		log.Warningf("Migration copy chan is full. We may need to increase the buffer size. Dropping attempt to copy digest %v", d)
	}

	// Return data from source cache
	return srcBuf, srcErr
}

func (mc *MigrationCache) Set(ctx context.Context, d *repb.Digest, data []byte) error {
	eg, gctx := errgroup.WithContext(ctx)
	var srcErr, dstErr error

	// Double write data to both caches
	eg.Go(func() error {
		srcErr = mc.src.Set(gctx, d, data)
		return srcErr
	})

	eg.Go(func() error {
		dstErr = mc.dest.Set(gctx, d, data)
		return nil // don't fail if there's an error from this cache
	})

	if err := eg.Wait(); err != nil {
		// If error during write to source cache (source of truth), must delete from destination cache
		deleteErr := mc.dest.Delete(ctx, d)
		if deleteErr != nil && !status.IsNotFoundError(deleteErr) {
			log.Warningf("Migration double write err: src write of digest %v failed, but could not delete from dest cache: %s", d, deleteErr)
		}
		return err
	}

	if dstErr != nil {
		log.Warningf("Migration double write err: failure writing digest %v to dest cache: %s", d, dstErr)
	}

	return srcErr
}

func (mc *MigrationCache) CopyDataInBackground(ctx context.Context) {
	for {
		select {
		case <-mc.quitChan:
			return
		case digestToCopy := <-mc.copyChan:
			alreadyCopied, err := mc.dest.Contains(ctx, digestToCopy)
			if err != nil {
				log.Warningf("Migration copy err: Could not call Contains on dest cache: %s", err)
				continue
			}

			if !alreadyCopied {
				srcData, err := mc.src.Get(ctx, digestToCopy)
				if err != nil {
					log.Warningf("Migration copy err: Could not fetch digest %v from src cache: %s", digestToCopy, err)
					continue
				}

				err = mc.dest.Set(ctx, digestToCopy, srcData)
				if err != nil {
					log.Warningf("Migration copy err: Could not write data for digest %v to dest cache: %s", digestToCopy, err)
				}
			}
		}
	}
}

func (mc *MigrationCache) Start(ctx context.Context) error {
	mc.quitChan = make(chan struct{}, 0)
	mc.eg.Go(func() error {
		mc.CopyDataInBackground(ctx)
		return nil
	})
	return nil
}

func (mc *MigrationCache) Stop() error {
	log.Info("Migration cache beginning shut down")
	close(mc.quitChan)
	if err := mc.eg.Wait(); err != nil {
		return err
	}
	return nil
}
