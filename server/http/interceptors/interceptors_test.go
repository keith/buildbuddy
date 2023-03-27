package interceptors

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestRedirectIfNotForwardedHTTPS(t *testing.T) {
	originalVal := *upgradeInsecure
	t.Cleanup(func() {
		*upgradeInsecure = originalVal
	})
	*upgradeInsecure = true

	tests := []struct {
		name            string
		route           string
		expectedCode    int
		expectedHeaders http.Header
		sslServerAddr   string
		setup           func(*http.Request)
	}{
		{
			"https request",
			"/foo",
			http.StatusOK,
			http.Header{},
			"example.com",
			func(req *http.Request) {
				req.Header.Set("X-Forwarded-Proto", "https")
			},
		},
		{
			"http request with X-Forwarded-Proto header",
			"/foo",
			http.StatusMovedPermanently,
			http.Header{
				"Location": []string{"https://example.com/foo"},
			},
			"example.com",
			func(req *http.Request) {
				req.Header.Set("X-Forwarded-Proto", "http")
			},
		},
		{
			"http request without X-Forwarded-Proto header",
			"/foo",
			http.StatusMovedPermanently,
			http.Header{
				"Location": []string{"https://example.com/foo"},
			},
			"example.com",
			func(req *http.Request) {
				req.Header.Del("X-Forwarded-Proto")
			},
		},
		{
			"healthcheck request without X-Forwarded-Proto header",
			"/health",
			http.StatusOK,
			http.Header{},
			"example.com",
			func(req *http.Request) {
				req.Header.Del("X-Forwarded-Proto")
				req.Header.Set("User-Agent", "GoogleHC/1.0")
			},
		},
		{
			"custom ssl address",
			"/foo",
			http.StatusMovedPermanently,
			http.Header{
				"Location": []string{"https://0.0.0.0:8081/foo"},
			},
			"0.0.0.0:8081",
			func(req *http.Request) {
				req.Header.Set("X-Forwarded-Proto", "http")
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			req := httptest.NewRequest("GET", tt.route, nil)
			if tt.setup != nil {
				tt.setup(req)
			}

			rr := httptest.NewRecorder()
			handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				fmt.Fprint(w, r.Header)
			})
			RedirectIfNotForwardedHTTPS(handler, tt.sslServerAddr).ServeHTTP(rr, req)

			require.Equal(t, tt.expectedCode, rr.Code)

			for headerName, expectedValues := range tt.expectedHeaders {
				assert.Equal(t, expectedValues, rr.Header().Values(headerName))
			}
		})
	}
}
