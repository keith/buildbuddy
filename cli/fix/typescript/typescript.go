package typescript

import (
	"encoding/json"
	"flag"
	"io/ioutil"
	"log"
	"path"
	"regexp"
	"sort"
	"strings"

	"github.com/bazelbuild/bazel-gazelle/config"
	"github.com/bazelbuild/bazel-gazelle/label"
	"github.com/bazelbuild/bazel-gazelle/language"
	"github.com/bazelbuild/bazel-gazelle/repo"
	"github.com/bazelbuild/bazel-gazelle/resolve"
	"github.com/bazelbuild/bazel-gazelle/rule"

	sitter "github.com/smacker/go-tree-sitter"
	"github.com/smacker/go-tree-sitter/typescript/tsx"
)

const (
	languageName        = "ts"
	tsProjectRuleName   = "ts_project"
	tsProjectImportPath = "@npm//@bazel/typescript:index.bzl"
	srcAttribute        = "srcs"
	depsAttribute       = "deps"
	npmImportPrefix     = "@npm//"
	tsTypesImportPrefix = "@types/"
	tslibImport         = "tslib"
	packageFileName     = "package.json"
	tsFileExtension     = ".ts"
	tsxFileExtension    = ".tsx"
)

var dynamicImportPattern = regexp.MustCompile("(?ms)import\\s*\\(\\s*(['\"`]([^'\"`]+)['\"`])\\s*\\)")
var tslibPattern = regexp.MustCompile(`(async|await|\.\.\.|import \* as)`)

type TS struct {
	parser *sitter.Parser
}

func NewLanguage() language.Language {
	parser := sitter.NewParser()
	parser.SetLanguage(tsx.GetLanguage())
	return &TS{
		parser: parser,
	}
}

func (*TS) Name() string {
	return languageName
}

// Kinds returns a map of maps rule names (kinds) and information on how to
// match and merge attributes that may be found in rules of those kinds. All
// kinds of rules generated for this language may be found here.
func (t *TS) Kinds() map[string]rule.KindInfo {
	return map[string]rule.KindInfo{
		tsProjectRuleName: {
			MatchAny: false,
			NonEmptyAttrs: map[string]bool{
				srcAttribute: true,
			},
			MergeableAttrs: map[string]bool{
				srcAttribute: true,
			},
			ResolveAttrs: map[string]bool{
				depsAttribute: true,
			},
		},
	}
}

// Loads returns .bzl files and symbols they define. Every rule generated by
// GenerateRules, now or in the past, should be loadable from one of these
// files.
func (t *TS) Loads() []rule.LoadInfo {
	return []rule.LoadInfo{
		rule.LoadInfo{
			Name:    tsProjectImportPath,
			Symbols: []string{tsProjectRuleName},
		},
	}
}

// GenerateRules extracts build metadata from source files in a directory.
// GenerateRules is called in each directory where an update is requested
// in depth-first post-order.
//
// args contains the arguments for GenerateRules. This is passed as a
// struct to avoid breaking implementations in the future when new
// fields are added.
//
// A GenerateResult struct is returned. Optional fields may be added to this
// type in the future.
//
// Any non-fatal errors this function encounters should be logged using
// log.Print.
func (t *TS) GenerateRules(args language.GenerateArgs) language.GenerateResult {
	rules := make([]*rule.Rule, 0)
	imports := make([]interface{}, 0)

	for _, baseName := range args.RegularFiles {
		if !strings.HasSuffix(baseName, tsFileExtension) && !strings.HasSuffix(baseName, tsxFileExtension) {
			continue
		}
		r := rule.NewRule(tsProjectRuleName, strings.Split(baseName, ".")[0])
		r.SetAttr(srcAttribute, []string{baseName})
		rules = append(rules, r)
		filePath := path.Join(args.Dir, baseName)

		data, err := ioutil.ReadFile(filePath)
		if err != nil {
			log.Fatalf("Error reading %s: %v", filePath, err)
		}
		ruleImports := make([]string, 0)
		tree := t.parser.Parse(nil, data)
		for i := 0; i < int(tree.RootNode().ChildCount()); i++ {
			child := tree.RootNode().Child(i)
			if child.Type() == "import_statement" {
				ruleImports = append(ruleImports, child.NamedChild(1).Child(1).Content(data))
			}
		}

		// TODO(siggisim): See if we can grab dynamic imports and tslib usage using treesitter in an efficient way.
		for _, match := range dynamicImportPattern.FindAllSubmatch(data, -1) {
			ruleImports = append(ruleImports, string(match[2]))
		}
		if tslibPattern.Match(data) {
			ruleImports = append(ruleImports, tslibImport)
		}
		imports = append(imports, ruleImports)
	}

	return language.GenerateResult{
		Gen:     rules,
		Empty:   []*rule.Rule{},
		Imports: imports,
	}
}

// Fix repairs deprecated usage of language-specific rules in f. This is
// called before the file is indexed. Unless c.ShouldFix is true, fixes
// that delete or rename rules should not be performed.
func (t *TS) Fix(c *config.Config, f *rule.File) {

}

// Resolver

// Imports returns a list of ImportSpecs that can be used to import the rule
// r. This is used to populate RuleIndex.
//
// If nil is returned, the rule will not be indexed. If any non-nil slice is
// returned, including an empty slice, the rule will be indexed.
func (t *TS) Imports(c *config.Config, r *rule.Rule, f *rule.File) []resolve.ImportSpec {
	srcs := r.AttrStrings(srcAttribute)
	importSpecs := make([]resolve.ImportSpec, len(srcs))
	for i, src := range srcs {
		filePath := path.Join(f.Pkg, src)
		importSpecs[i] = resolve.ImportSpec{
			Lang: t.Name(),
			Imp:  strings.ToLower(filePath),
		}
	}
	return importSpecs
}

// Embeds returns a list of labels of rules that the given rule embeds. If
// a rule is embedded by another importable rule of the same language, only
// the embedding rule will be indexed. The embedding rule will inherit
// the imports of the embedded rule.
func (t *TS) Embeds(r *rule.Rule, from label.Label) []label.Label {
	return []label.Label{}
}

// Resolve translates imported libraries for a given rule into Bazel
// dependencies. Information about imported libraries is returned for each
// rule generated by language.GenerateRules in
// language.GenerateResult.Imports. Resolve generates a "deps" attribute (or
// the appropriate language-specific equivalent) for each import according to
// language-specific rules and heuristics.
func (t *TS) Resolve(c *config.Config, ix *resolve.RuleIndex, rc *repo.RemoteCache, r *rule.Rule, imports interface{}, from label.Label) {
	importStrings := imports.([]string)
	typeImports := []string{}

	config := c.Exts[languageName].(tsConfig)

	for i, importString := range importStrings {
		if isNPMImport(importString) {
			components := strings.Split(importString, "/")
			importStrings[i] = npmImportPrefix + components[0]
			if strings.HasPrefix(components[0], "@") {
				importStrings[i] = importStrings[i] + "/" + components[1]
			}
			typeString := tsTypesImportPrefix + components[0]
			if _, ok := config.PackageJSON.DevDependencies[typeString]; ok {
				typeImports = append(typeImports, npmImportPrefix+typeString)
			}
			continue
		}

		segments := strings.Split(path.Join(from.Pkg, importString), "/")
		p := strings.Join(segments[:len(segments)-1], "/") + ":" + segments[len(segments)-1]
		importStrings[i] = "//" + p
	}

	importStrings = append(importStrings, typeImports...)

	sort.Strings(importStrings)

	if len(importStrings) > 0 {
		r.SetAttr(depsAttribute, importStrings)
	}
}

func isNPMImport(importString string) bool {
	if strings.HasPrefix(importString, ".") {
		return false
	}
	if strings.HasPrefix(importString, "/") {
		return false
	}
	if strings.HasPrefix(importString, "~") {
		return false
	}
	return true
}

// Configurer

// RegisterFlags registers command-line flags used by the extension. This
// method is called once with the root configuration when Gazelle
// starts. RegisterFlags may set an initial values in Config.Exts. When flags
// are set, they should modify these values.
func (t *TS) RegisterFlags(fs *flag.FlagSet, cmd string, c *config.Config) {

}

// CheckFlags validates the configuration after command line flags are parsed.
// This is called once with the root configuration when Gazelle starts.
// CheckFlags may set default values in flags or make implied changes.
func (t *TS) CheckFlags(fs *flag.FlagSet, c *config.Config) error {
	return nil
}

// KnownDirectives returns a list of directive keys that this Configurer can
// interpret. Gazelle prints errors for directives that are not recoginized by
// any Configurer.
func (t *TS) KnownDirectives() []string {
	return []string{}
}

// Configure modifies the configuration using directives and other information
// extracted from a build file. Configure is called in each directory.
//
// c is the configuration for the current directory. It starts out as a copy
// of the configuration for the parent directory.
//
// rel is the slash-separated relative path from the repository root to
// the current directory. It is "" for the root directory itself.
//
// f is the build file for the current directory or nil if there is no
// existing build file.
func (t *TS) Configure(c *config.Config, rel string, f *rule.File) {
	if _, exists := c.Exts[languageName]; !exists {
		c.Exts[languageName] = tsConfig{}
	}
	tsConfig := c.Exts[languageName].(tsConfig)
	packagePath := path.Join(c.RepoRoot, rel, packageFileName)
	data, err := ioutil.ReadFile(packagePath)
	if err != nil {
		return
	}
	if err := json.Unmarshal(data, &tsConfig.PackageJSON); err != nil {
		log.Fatalf("failed to parse %s: %v", packagePath, err)
	}
	c.Exts[languageName] = tsConfig
}

type tsConfig struct {
	PackageJSON struct {
		Dependencies    map[string]string `json:"dependencies"`
		DevDependencies map[string]string `json:"devDependencies"`
	}
}
