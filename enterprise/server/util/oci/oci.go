package oci

import (
	"context"
	"fmt"
	"net/http"
	"runtime"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/remote_execution/platform"
	"github.com/buildbuddy-io/buildbuddy/server/util/flag"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/docker/distribution/reference"
	"github.com/google/go-containerregistry/pkg/authn"
	"github.com/google/go-containerregistry/pkg/v1"
	"github.com/google/go-containerregistry/pkg/v1/remote"
	"github.com/google/go-containerregistry/pkg/v1/remote/transport"
	"github.com/google/go-containerregistry/pkg/v1/types"

	rgpb "github.com/buildbuddy-io/buildbuddy/proto/registry"
	ctrname "github.com/google/go-containerregistry/pkg/name"
)

var (
	registries = flag.Slice("executor.container_registries", []Registry{}, "")
)

// The OCI spec only supports "shares" for specifying CPU weights, which are
// based on cgroup v1 CPU shares. These are transformed to cgroup2 weights
// internally by crun using a simple linear mapping. These are the min/max
// values for "shares". See
// https://github.com/containers/crun/blob/main/crun.1.md#cpu-controller
const (
	cpuSharesMin = 2
	cpuSharesMax = 262_144
)

// Min/max values for cgroup2 CPU weight.
const (
	cpuWeightMin = 1
	cpuWeightMax = 10_000
)

type Registry struct {
	Hostnames []string `yaml:"hostnames" json:"hostnames"`
	Username  string   `yaml:"username" json:"username"`
	Password  string   `yaml:"password" json:"password" config:"secret"`
}

type Credentials struct {
	Username string
	Password string
}

func CredentialsFromProto(creds *rgpb.Credentials) (Credentials, error) {
	return credentials(creds.GetUsername(), creds.GetPassword())
}

// Extracts the container registry Credentials from the provided platform
// properties, falling back to credentials specified in
// --executor.container_registries if the platform properties credentials are
// absent.
func CredentialsFromProperties(props *platform.Properties) (Credentials, error) {
	imageRef := props.ContainerImage
	if imageRef == "" {
		return Credentials{}, nil
	}

	creds, err := credentials(props.ContainerRegistryUsername, props.ContainerRegistryPassword)
	if err != nil {
		return Credentials{}, fmt.Errorf("Received invalid container-registry-username / container-registry-password combination: %w", err)
	} else if !creds.IsEmpty() {
		return creds, nil
	}

	// If no credentials were provided, fallback to any specified by
	// --executor.container_registries.
	if len(*registries) == 0 {
		return Credentials{}, nil
	}

	ref, err := reference.ParseNormalizedNamed(imageRef)
	if err != nil {
		log.Debugf("Failed to parse image ref %q: %s", imageRef, err)
		return Credentials{}, nil
	}
	refHostname := reference.Domain(ref)
	for _, cfg := range *registries {
		for _, cfgHostname := range cfg.Hostnames {
			if refHostname == cfgHostname {
				return Credentials{
					Username: cfg.Username,
					Password: cfg.Password,
				}, nil
			}
		}
	}

	return Credentials{}, nil
}

func credentials(username, password string) (Credentials, error) {
	if username == "" && password != "" {
		return Credentials{}, status.InvalidArgumentError(
			"malformed credentials: password present with no username")
	} else if username != "" && password == "" {
		return Credentials{}, status.InvalidArgumentError(
			"malformed credentials: username present with no password")
	} else {
		return Credentials{
			Username: username,
			Password: password,
		}, nil
	}
}

func (c Credentials) ToProto() *rgpb.Credentials {
	return &rgpb.Credentials{
		Username: c.Username,
		Password: c.Password,
	}
}

func (c Credentials) IsEmpty() bool {
	return c == Credentials{}
}

func (c Credentials) String() string {
	if c.IsEmpty() {
		return ""
	}
	return c.Username + ":" + c.Password
}

func (c Credentials) Equals(o Credentials) bool {
	return c.Username == o.Username && c.Password == o.Password
}

func Resolve(ctx context.Context, imageName string, platform *rgpb.Platform, credentials Credentials) (v1.Image, error) {
	imageRef, err := ctrname.ParseReference(imageName)
	if err != nil {
		return nil, status.InvalidArgumentErrorf("invalid image %q", imageName)
	}

	remoteOpts := []remote.Option{
		remote.WithContext(ctx),
		remote.WithPlatform(
			v1.Platform{
				Architecture: platform.GetArch(),
				OS:           platform.GetOs(),
				Variant:      platform.GetVariant(),
			},
		),
	}
	if !credentials.IsEmpty() {
		remoteOpts = append(remoteOpts, remote.WithAuth(&authn.Basic{
			Username: credentials.Username,
			Password: credentials.Password,
		}))
	}

	remoteDesc, err := remote.Get(imageRef, remoteOpts...)
	if err != nil {
		if t, ok := err.(*transport.Error); ok && t.StatusCode == http.StatusUnauthorized {
			return nil, status.PermissionDeniedErrorf("could not retrieve image manifest: %s", err)
		}
		return nil, status.UnavailableErrorf("could not retrieve manifest from remote: %s", err)
	}

	// Image() should resolve both images and image indices to an appropriate image
	img, err := remoteDesc.Image()
	if err != nil {
		switch remoteDesc.MediaType {
		// This is an "image index", a meta-manifest that contains a list of
		// {platform props, manifest hash} properties to allow client to decide
		// which manifest they want to use based on platform.
		case types.OCIImageIndex, types.DockerManifestList:
			return nil, status.UnknownErrorf("could not get image in image index from descriptor: %s", err)
		case types.OCIManifestSchema1, types.DockerManifestSchema2:
			return nil, status.UnknownErrorf("could not get image from descriptor: %s", err)
		default:
			return nil, status.UnknownErrorf("descriptor has unknown media type %q, oci error: %s", remoteDesc.MediaType, err)
		}
	}
	return img, nil
}

// RuntimePlatform returns the platform on which the program is being executed,
// as reported by the go runtime.
func RuntimePlatform() *rgpb.Platform {
	return &rgpb.Platform{
		Arch: runtime.GOARCH,
		Os:   runtime.GOOS,
	}
}

// CPUSharesToWeight converts "OCI" CPU share units (which are based on cgroup
// v1 CPU shares) to cgroup2 CPU weight units.
func CPUSharesToWeight(shares int64) int64 {
	// Clamp to min/max allowed values
	shares = min(shares, cpuSharesMax)
	shares = max(shares, cpuSharesMin)
	// Apply linear mapping
	return (cpuWeightMin + ((shares-cpuSharesMin)*(cpuWeightMax-cpuWeightMin))/cpuSharesMax)
}

// CPUMillisToShares converts a milliCPU value to an appropriate value of OCI
// CPU shares.
func CPUMillisToShares(cpuMillis int64) int64 {
	// The max value is ~260000, so directly using cpuMillis should work well as
	// the CPU share value. Just clamp to ensure it's within bounds.
	cpuShares := cpuMillis
	cpuShares = min(cpuShares, cpuSharesMax)
	cpuShares = max(cpuShares, cpuSharesMin)
	return cpuShares
}
