package compactgraph

import (
	"bufio"
	"cmp"
	"fmt"
	"io"
	"path"
	"slices"
	"sort"
	"strings"
	"sync"

	"github.com/buildbuddy-io/buildbuddy/proto/spawn_diff"
	"github.com/klauspost/compress/zstd"
	"golang.org/x/exp/maps"
	"google.golang.org/protobuf/encoding/protodelim"

	spawnproto "github.com/buildbuddy-io/buildbuddy/proto/spawn"
)

// CompactGraph represents the compact execution log as a directed acyclic graph of spawns.
type CompactGraph struct {
	// The keys are the output paths of all spawns in the graph and each spawn contains references to other execution
	// log entries, such as input files, directories, and input sets. The edges between spawns are tracked implicitly by
	// matching the output paths of the spawns to the input paths of the referenced entries.
	spawns map[string]*Spawn
	tools  map[string]*RunfilesTree
	// symlinkResolutions maps the paths of artifacts that are known to be symlinks to their target paths (through arbitrary
	// levels of indirection).
	symlinkResolutions map[string]string
	settings           globalSettings
}

type globalSettings struct {
	hashFunction               string
	workspaceRunfilesDirectory string
	legacyExternalRunfiles     bool
	hasEmptyFiles              bool
}

// ReadCompactLog reads a compact execution log from the given reader and returns the graph of spawns, the hash function
// used to compute the file digests, and an error if any.
func ReadCompactLog(in io.Reader) (*CompactGraph, error) {
	d, err := zstd.NewReader(in)
	if err != nil {
		return nil, err
	}
	defer d.Close()
	r := bufio.NewReader(d)

	var entry spawnproto.ExecLogEntry
	cg := CompactGraph{}
	cg.spawns = make(map[string]*Spawn)
	cg.tools = make(map[string]*RunfilesTree)
	previousInputs := make(map[uint32]Input)
	previousInputs[0] = emptyInputSet
	unmarshalOpts := protodelim.UnmarshalOptions{MaxSize: -1}
	for {
		err = unmarshalOpts.UnmarshalFrom(r, &entry)
		if err == io.EOF {
			break
		}
		if err != nil {
			return nil, err
		}
		switch entry.Type.(type) {
		case *spawnproto.ExecLogEntry_Invocation_:
			if entry.GetInvocation().GetSiblingRepositoryLayout() {
				panic("--experimental_sibling_repository_layout is not supported")
			}
			cg.settings.hashFunction = entry.GetInvocation().HashFunctionName
			cg.settings.workspaceRunfilesDirectory = entry.GetInvocation().WorkspaceRunfilesDirectory
		case *spawnproto.ExecLogEntry_File_:
			file := protoToFile(entry.GetFile(), cg.settings.hashFunction)
			previousInputs[entry.Id] = file
		case *spawnproto.ExecLogEntry_UnresolvedSymlink_:
			symlink := protoToSymlink(entry.GetUnresolvedSymlink())
			previousInputs[entry.Id] = symlink
		case *spawnproto.ExecLogEntry_Directory_:
			dir := protoToDirectory(entry.GetDirectory(), cg.settings.hashFunction)
			previousInputs[entry.Id] = dir
		case *spawnproto.ExecLogEntry_InputSet_:
			inputSet := protoToInputSet(entry.GetInputSet(), previousInputs)
			previousInputs[entry.Id] = inputSet
		case *spawnproto.ExecLogEntry_Spawn_:
			spawn, outputPaths, toolRunfilesTrees := protoToSpawn(entry.GetSpawn(), previousInputs)
			if spawn != nil {
				for _, p := range outputPaths {
					cg.spawns[p] = spawn
				}
				for toolRunfilesTree := range toolRunfilesTrees {
					cg.tools[toolRunfilesTree.Path()] = toolRunfilesTree
				}
			}
		case *spawnproto.ExecLogEntry_SymlinkAction_:
			symlinkAction := entry.GetSymlinkAction()
			target := symlinkAction.InputPath
			if resolvedTarget, ok := cg.symlinkResolutions[target]; ok {
				target = resolvedTarget
			}
			if cg.symlinkResolutions == nil {
				cg.symlinkResolutions = make(map[string]string)
			}
			cg.symlinkResolutions[symlinkAction.OutputPath] = target
		case *spawnproto.ExecLogEntry_SymlinkEntrySet_:
			symlinkEntrySet := protoToSymlinkEntrySet(entry.GetSymlinkEntrySet(), previousInputs)
			previousInputs[entry.Id] = symlinkEntrySet
		case *spawnproto.ExecLogEntry_RunfilesTree_:
			runfilesTreeProto := entry.GetRunfilesTree()
			cg.settings.legacyExternalRunfiles = cg.settings.legacyExternalRunfiles || runfilesTreeProto.LegacyExternalRunfiles
			cg.settings.hasEmptyFiles = cg.settings.hasEmptyFiles || len(runfilesTreeProto.EmptyFiles) > 0
			runfilesTree := protoToRunfilesTree(runfilesTreeProto, previousInputs, cg.settings.hashFunction)
			previousInputs[entry.Id] = runfilesTree
		default:
			panic(fmt.Sprintf("unexpected entry type: %T", entry.Type))
		}
	}
	return &cg, nil
}

func Diff(old, new *CompactGraph) ([]*spawn_diff.SpawnDiff, error) {
	if old.settings != new.settings {
		var settingDiffs []string
		if old.settings.hashFunction != new.settings.hashFunction {
			settingDiffs = append(settingDiffs, fmt.Sprintf("  --digest_function: %s -> %s\n", old.settings.hashFunction, new.settings.hashFunction))
		}
		if old.settings.workspaceRunfilesDirectory != new.settings.workspaceRunfilesDirectory {
			oldUsesLegacyExeclog := old.settings.workspaceRunfilesDirectory == ""
			newUsesLegacyExeclog := new.settings.workspaceRunfilesDirectory == ""
			oldUsesBzlmod := old.settings.workspaceRunfilesDirectory == "_main"
			newUsesBzlmod := new.settings.workspaceRunfilesDirectory == "_main"
			if oldUsesLegacyExeclog != newUsesLegacyExeclog {
				settingDiffs = append(settingDiffs, fmt.Sprintf("  Bazel 7.4.0 or higher: %t -> %t\n", !oldUsesLegacyExeclog, !newUsesLegacyExeclog))
			} else if oldUsesBzlmod != newUsesBzlmod {
				settingDiffs = append(settingDiffs, fmt.Sprintf("  --enable_bzlmod: %t -> %t\n", oldUsesBzlmod, newUsesBzlmod))
			} else {
				settingDiffs = append(settingDiffs, fmt.Sprintf("  WORKSPACE name: %s -> %s\n", old.settings.workspaceRunfilesDirectory, new.settings.workspaceRunfilesDirectory))
			}
		}
		if old.settings.legacyExternalRunfiles != new.settings.legacyExternalRunfiles {
			settingDiffs = append(settingDiffs, fmt.Sprintf("  --legacy_external_runfiles: %t -> %t\n", old.settings.legacyExternalRunfiles, new.settings.legacyExternalRunfiles))
		}
		if old.settings.hasEmptyFiles != new.settings.hasEmptyFiles {
			settingDiffs = append(settingDiffs, fmt.Sprintf("  --incompatible_default_to_explicit_init_py: %t -> %t\n", !old.settings.hasEmptyFiles, !new.settings.hasEmptyFiles))
		}
		return nil, fmt.Errorf("global settings changed:\n%s", strings.Join(settingDiffs, "\n"))
	}

	var spawnDiffs []*spawn_diff.SpawnDiff

	oldPrimaryOutputs := old.primaryOutputs()
	newPrimaryOutputs := new.primaryOutputs()

	oldOnlyPrimaryOutputs := setDifference(oldPrimaryOutputs, newPrimaryOutputs)
	oldOnlyTopLevelOutputs := old.findRootSet(oldOnlyPrimaryOutputs)
	for _, p := range oldOnlyPrimaryOutputs {
		sd := newDiff(old.spawns[p])
		_, topLevel := oldOnlyTopLevelOutputs[p]
		sd.Diff = &spawn_diff.SpawnDiff_OldOnly{OldOnly: &spawn_diff.OldOnly{
			TopLevel: topLevel,
		}}
		spawnDiffs = append(spawnDiffs, sd)
	}
	newOnlyPrimaryOutputs := setDifference(newPrimaryOutputs, oldPrimaryOutputs)
	newOnlyTopLevelOutputs := new.findRootSet(newOnlyPrimaryOutputs)
	for _, p := range newOnlyPrimaryOutputs {
		sd := newDiff(new.spawns[p])
		_, topLevel := newOnlyTopLevelOutputs[p]
		sd.Diff = &spawn_diff.SpawnDiff_NewOnly{NewOnly: &spawn_diff.NewOnly{
			TopLevel: topLevel,
		}}
		spawnDiffs = append(spawnDiffs, sd)
	}

	commonOutputs := setIntersection(oldPrimaryOutputs, newPrimaryOutputs)
	oldResolveSymlinks := old.resolveSymlinksFunc()
	newResolveSymlinks := new.resolveSymlinksFunc()
	type diffResult struct {
		spawnDiff   *spawn_diff.SpawnDiff
		localChange bool
		affectedBy  []string
	}
	diffResults := sync.Map{}
	diffWG := sync.WaitGroup{}
	for _, output := range commonOutputs {
		diffWG.Add(1)
		go func() {
			defer diffWG.Done()
			oldSpawn := old.spawns[output]
			newSpawn := new.spawns[output]
			spawnDiff, localChange, affectedBy := diffSpawns(oldSpawn, newSpawn, oldResolveSymlinks, newResolveSymlinks)
			diffResults.Store(output, &diffResult{
				spawnDiff:   spawnDiff,
				localChange: localChange,
				affectedBy:  affectedBy,
			})
		}()
	}

	commonToolRunfilesTrees := setIntersection(maps.Keys(old.tools), maps.Keys(new.tools))
	for _, toolRunfilesTree := range commonToolRunfilesTrees {
		diffWG.Add(1)
		go func() {
			defer diffWG.Done()
			pathsDiff, contentsDiff := diffRunfilesTrees(old.tools[toolRunfilesTree], new.tools[toolRunfilesTree], oldResolveSymlinks, newResolveSymlinks)
			if pathsDiff == nil && contentsDiff == nil {
				return
			}
			spawnDiff := spawn_diff.SpawnDiff{
				Mnemonic:      "RunfilesTree",
				PrimaryOutput: toolRunfilesTree,
			}
			if s, ok := new.spawns[strings.TrimSuffix(toolRunfilesTree, ".runfiles")]; ok {
				spawnDiff.TargetLabel = s.TargetLabel
			} else {
				spawnDiff.TargetLabel = "<unknown target>"
			}
			spawnDiff.Diff = &spawn_diff.SpawnDiff_Modified{Modified: &spawn_diff.Modified{}}
			if pathsDiff != nil {
				spawnDiff.GetModified().Diffs = append(spawnDiff.GetModified().Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_InputPaths{InputPaths: pathsDiff}})
			}
			if contentsDiff != nil {
				spawnDiff.GetModified().Diffs = append(spawnDiff.GetModified().Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_InputContents{InputContents: contentsDiff}})
			}
			diffResults.Store(toolRunfilesTree, &diffResult{spawnDiff: &spawnDiff})
		}()
	}
	diffWG.Wait()

	// Sort the common outputs topologically according to the new graph structure.
	newOutputsSorted := new.sortedPrimaryOutputs()
	commonOutputsSet := make(map[string]struct{})
	for _, output := range commonOutputs {
		commonOutputsSet[output] = struct{}{}
	}
	var commonOutputsSorted []string
	for _, x := range newOutputsSorted {
		if _, ok := commonOutputsSet[x]; ok {
			commonOutputsSorted = append(commonOutputsSorted, x)
		}
	}

	// Visit spawns in topological order and attribute their diffs to transitive dependencies if possible.
	for _, output := range commonOutputsSorted {
		resultEntry, _ := diffResults.Load(output)
		result := resultEntry.(*diffResult)
		spawn := new.spawns[output]
		foundTransitiveCause := false
		for _, affectedBy := range result.affectedBy {
			if otherResultEntry, ok := diffResults.Load(affectedBy); ok {
				foundTransitiveCause = true
				otherDiff := otherResultEntry.(*diffResult).spawnDiff
				if otherDiff.GetModified().TransitivelyInvalidated == nil {
					otherDiff.GetModified().TransitivelyInvalidated = make(map[string]uint32)
				}
				for k, v := range result.spawnDiff.GetModified().TransitivelyInvalidated {
					otherDiff.GetModified().TransitivelyInvalidated[k] += v
				}
				otherDiff.GetModified().TransitivelyInvalidated[spawn.Mnemonic]++
			}
		}
		if len(result.spawnDiff.GetModified().Diffs) > 0 && (result.localChange || !foundTransitiveCause) {
			spawnDiffs = append(spawnDiffs, result.spawnDiff)
		}
	}

	return spawnDiffs, nil
}

// findRootSet returns the subset of outputs that are not inputs to any other spawn in the subgraph corresponding to
// the given outputs.
func (cg *CompactGraph) findRootSet(outputs []string) map[string]struct{} {
	rootsSet := make(map[string]struct{}, len(outputs))
	for _, output := range outputs {
		rootsSet[output] = struct{}{}
	}

	// Visit all nodes in the graph and remove those with incoming edges from the set of roots.
	var toVisit []any
	visited := make(map[any]struct{})
	markForVisit := func(n any) {
		if _, seen := visited[n]; !seen {
			toVisit = append(toVisit, n)
			visited[n] = struct{}{}
		}
	}
	for _, output := range outputs {
		markForVisit(cg.spawns[output])
	}
	for len(toVisit) > 0 {
		var node any
		node, toVisit = toVisit[0], toVisit[1:]
		switch n := node.(type) {
		case *File:
			delete(rootsSet, n.Path())
		case *Directory:
			delete(rootsSet, n.Path())
		}
		cg.visitSuccessors(node, markForVisit)
	}
	return rootsSet
}

// sortedPrimaryOutputs returns the primary output paths of the spawns in topological order.
func (cg *CompactGraph) sortedPrimaryOutputs() []string {
	var toVisit []any
	for _, spawn := range cg.spawns {
		toVisit = append(toVisit, spawn)
	}
	sort.Slice(toVisit, func(i, j int) bool {
		return toVisit[i].(*Spawn).PrimaryOutputPath() < toVisit[j].(*Spawn).PrimaryOutputPath()
	})

	ordered := make([]string, 0, len(cg.spawns))
	state := make(map[any]bool)
	for len(toVisit) > 0 {
		n := toVisit[len(toVisit)-1]
		toVisit = toVisit[:len(toVisit)-1]
		if done, seen := state[n]; seen {
			if !done {
				state[n] = true
				if spawn, ok := n.(*Spawn); ok {
					ordered = append(ordered, spawn.PrimaryOutputPath())
				}
			}
			continue
		}
		state[n] = false
		toVisit = append(toVisit, n)
		cg.visitSuccessors(n, func(input any) {
			toVisit = append(toVisit, input)
		})
	}
	slices.Reverse(ordered)
	return ordered
}

func (cg *CompactGraph) visitSuccessors(node any, visitor func(input any)) {
	switch n := node.(type) {
	case *File:
	case *Directory:
		if !isSourcePath(n.Path()) {
			spawn, ok := cg.spawns[n.Path()]
			if ok {
				visitor(spawn)
			}
		}
	case *InputSet:
		for _, input := range n.directEntries {
			visitor(input)
		}
		for _, transitiveSet := range n.transitiveSets {
			visitor(transitiveSet)
		}
	case *SymlinkEntrySet:
		targets := maps.Values(n.directEntries)
		slices.SortFunc(targets, func(a, b Input) int {
			return cmp.Compare(a.Path(), b.Path())
		})
		for _, target := range targets {
			visitor(target)
		}
		for _, transitiveSet := range n.transitiveSets {
			visitor(transitiveSet)
		}
	case *RunfilesTree:
		visitor(n.Artifacts)
		visitor(n.Symlinks)
		visitor(n.RootSymlinks)
		visitor(n.RepoMappingManifest)
	case *Spawn:
		visitor(n.Tools)
		visitor(n.Inputs)
	}
}

func (cg *CompactGraph) primaryOutputs() []string {
	var primaryOutputs []string
	for p, spawn := range cg.spawns {
		if spawn.PrimaryOutputPath() == p {
			primaryOutputs = append(primaryOutputs, p)
		}
	}
	slices.Sort(primaryOutputs)
	return primaryOutputs
}

func (cg *CompactGraph) resolveSymlinksFunc() func(string) string {
	return func(p string) string {
		// Symlinks are resolved deeply before being stored in the map, so a single lookup is sufficient.
		if resolved, ok := cg.symlinkResolutions[p]; ok {
			return resolved
		}
		return p
	}
}

func diffSpawns(old, new *Spawn, oldResolveSymlinks, newResolveSymlinks func(string) string) (diff *spawn_diff.SpawnDiff, localChange bool, affectedBy []string) {
	diff = newDiff(new)
	m := &spawn_diff.Modified{}
	diff.Diff = &spawn_diff.SpawnDiff_Modified{Modified: m}

	if !maps.Equal(old.Env, new.Env) {
		localChange = true
		envDiff := &spawn_diff.DictDiff{
			OldChanged: make(map[string]string),
			NewChanged: make(map[string]string),
		}
		for key, value := range old.Env {
			if newValue, ok := new.Env[key]; !ok || value != newValue {
				envDiff.OldChanged[key] = value
			}
		}
		for key, value := range new.Env {
			if oldValue, ok := old.Env[key]; !ok || value != oldValue {
				envDiff.NewChanged[key] = value
			}
		}
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_Env{Env: envDiff}})
	}
	toolPathsDiff, toolContentsDiff := diffInputSets(old.Tools, new.Tools, oldResolveSymlinks, newResolveSymlinks)
	if toolPathsDiff != nil {
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_ToolPaths{ToolPaths: toolPathsDiff}})
	}
	if toolContentsDiff != nil {
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_ToolContents{ToolContents: toolContentsDiff}})
	}
	inputPathsDiff, inputContentsDiff := diffInputSets(old.Inputs, new.Inputs, oldResolveSymlinks, newResolveSymlinks)
	if inputPathsDiff != nil {
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_InputPaths{InputPaths: inputPathsDiff}})
	}
	if inputContentsDiff != nil {
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_InputContents{InputContents: inputContentsDiff}})
	}
	argsChanged := !slices.Equal(old.Args, new.Args)
	if argsChanged {
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_Args{
			Args: &spawn_diff.ListDiff{
				Old: old.Args,
				New: new.Args,
			},
		}})
	}
	paramFilePathsDiff, paramFileContentsDiff := diffInputSets(old.ParamFiles, new.ParamFiles, oldResolveSymlinks, newResolveSymlinks)
	if paramFilePathsDiff != nil {
		localChange = true
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_ParamFilePaths{ParamFilePaths: paramFilePathsDiff}})
	}
	if paramFileContentsDiff != nil {
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_ParamFileContents{ParamFileContents: paramFileContentsDiff}})
	}

	// We assume that changes in the spawn's arguments are caused by changes to the spawn's input or tool paths if any.
	// This may not always be correct (e.g. adding a copt or adding a dep), but we still show the diff in this case
	// unless a transitive target is changed.
	if (argsChanged || paramFilePathsDiff != nil || paramFileContentsDiff != nil) && inputPathsDiff == nil && toolPathsDiff == nil {
		// Split XML generation receives the test duration as an argument, which is clearly non-hermetic and should not
		// be considered at all if the test action reran.
		if new.Mnemonic == testRunnerXmlGeneration {
			m.Expected = true
		} else {
			localChange = true
		}
	}
	for _, fileDiff := range append(toolContentsDiff.GetFileDiffs(), inputContentsDiff.GetFileDiffs()...) {
		var p string
		switch fd := fileDiff.New.(type) {
		case *spawn_diff.FileDiff_NewFile:
			p = fd.NewFile.Path
		case *spawn_diff.FileDiff_NewSymlink:
			p = fd.NewSymlink.Path
		case *spawn_diff.FileDiff_NewDirectory:
			p = fd.NewDirectory.Path
		}
		if isSourcePath(p) {
			localChange = true
		} else {
			affectedBy = append(affectedBy, p)
		}
	}
	if new.Mnemonic == testRunnerXmlGeneration && argsChanged && len(affectedBy) == 0 {
		// The arguments for the split XML generation contain the duration of the test, which is non-hermetic. We
		// attribute it to the main test action, which has the test log as primary output.
		testLog := path.Dir(new.PrimaryOutputPath()) + "/test.log"
		affectedBy = append(affectedBy, testLog)
	}

	// TODO: Report changes in the set of inputs if neither the contents nor the arguments changed.

	var oldOutputPaths []string
	for _, output := range old.Outputs {
		oldOutputPaths = append(oldOutputPaths, output.Path())
	}
	slices.Sort(oldOutputPaths)
	var newOutputPaths []string
	for _, output := range new.Outputs {
		newOutputPaths = append(newOutputPaths, output.Path())
	}
	slices.Sort(newOutputPaths)
	if !slices.Equal(oldOutputPaths, newOutputPaths) {
		localChange = true
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_OutputPaths{
			OutputPaths: &spawn_diff.StringSetDiff{
				OldOnly: setDifference(oldOutputPaths, newOutputPaths),
				NewOnly: setDifference(newOutputPaths, oldOutputPaths),
			},
		}})
	}

	// Do not report changes in the outputs of a spawn whose inputs changed.
	if len(m.Diffs) > 0 {
		return
	}

	if new.ExitCode != old.ExitCode {
		// This action is flaky, always report it.
		localChange = true
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_ExitCode{
			ExitCode: &spawn_diff.IntDiff{
				Old: old.ExitCode,
				New: new.ExitCode,
			},
		}})
		// Don't report changes in the outputs of a flaky action.
		return
	}

	var outputContentsDiffs []*spawn_diff.FileDiff
	for i, oldOutput := range old.Outputs {
		// oldOutput.Path() == new.Outputs[i].Path() by construction, so we can pass either as the unresolved path.
		fileDiff := diffContents(oldOutput, new.Outputs[i], oldOutput.Path(), oldResolveSymlinks, newResolveSymlinks)
		if fileDiff != nil {
			outputContentsDiffs = append(outputContentsDiffs, fileDiff)
		}
	}
	if len(outputContentsDiffs) > 0 {
		// This action is non-hermetic, always report it.
		localChange = true
		if new.Mnemonic == "TestRunner" {
			// Test action outputs are usually non-reproducible due to timestamps in the test.log and test.xml files.
			m.Expected = true
		}
		m.Diffs = append(m.Diffs, &spawn_diff.Diff{Diff: &spawn_diff.Diff_OutputContents{
			OutputContents: &spawn_diff.FileSetDiff{FileDiffs: outputContentsDiffs},
		}})
	}

	return
}

func diffInputSets(old, new *InputSet, oldResolveSymlinks, newResolveSymlinks func(string) string) (pathsDiff *spawn_diff.StringSetDiff, contentsDiff *spawn_diff.FileSetDiff) {
	pathsCertainlyUnchanged := slices.Equal(old.ShallowPathHash(), new.ShallowPathHash())
	contentsCertainlyUnchanged := slices.Equal(old.ShallowContentHash(), new.ShallowContentHash())
	if pathsCertainlyUnchanged && contentsCertainlyUnchanged {
		return nil, nil
	}

	oldInputs := old.Flatten()
	newInputs := new.Flatten()

	if !pathsCertainlyUnchanged && !slices.EqualFunc(oldInputs, newInputs, func(a, b Input) bool { return a.Path() == b.Path() }) {
		oldPaths := make([]string, len(oldInputs))
		for i, input := range oldInputs {
			oldPaths[i] = input.Path()
		}
		newPaths := make([]string, len(newInputs))
		for i, input := range newInputs {
			newPaths[i] = input.Path()
		}
		return &spawn_diff.StringSetDiff{
			OldOnly: setDifference(oldPaths, newPaths),
			NewOnly: setDifference(newPaths, oldPaths),
		}, nil
	}

	if !contentsCertainlyUnchanged {
		var fileDiffs []*spawn_diff.FileDiff
		for i, oldInput := range oldInputs {
			// oldInput.Path() == newInputs[i].Path() by construction, so we can pass either as the unresolved path.
			fileDiff := diffContents(oldInput, newInputs[i], oldInput.Path(), oldResolveSymlinks, newResolveSymlinks)
			if fileDiff != nil {
				fileDiffs = append(fileDiffs, fileDiff)
			}
		}
		if len(fileDiffs) > 0 {
			return nil, &spawn_diff.FileSetDiff{FileDiffs: fileDiffs}
		}
	}
	return nil, nil
}

// diffRunfilesTrees returns a diff of the runfiles trees if the paths or contents of the inputs differ, or nil if they
// are equal.
// Only call this function if old.Path() == new.Path().
func diffRunfilesTrees(old, new *RunfilesTree, oldResolveSymlinks, newResolveSymlinks func(string) string) (pathsDiff *spawn_diff.StringSetDiff, contentsDiff *spawn_diff.FileSetDiff) {
	pathsCertainlyUnchanged := slices.Equal(old.ShallowPathHash(), new.ShallowPathHash())
	contentsCertainlyUnchanged := slices.Equal(old.ShallowContentHash(), new.ShallowContentHash())
	if pathsCertainlyUnchanged && contentsCertainlyUnchanged {
		return nil, nil
	}

	oldMapping := old.ComputeMapping()
	newMapping := new.ComputeMapping()

	if !pathsCertainlyUnchanged {
		var oldOnly, newOnly []string
		for p, _ := range oldMapping {
			if _, ok := newMapping[p]; !ok {
				oldOnly = append(oldOnly, p)
			}
		}
		for p, _ := range newMapping {
			if _, ok := oldMapping[p]; !ok {
				newOnly = append(newOnly, p)
			}
		}
		if len(oldOnly) > 0 || len(newOnly) > 0 {
			slices.Sort(oldOnly)
			slices.Sort(newOnly)
			return &spawn_diff.StringSetDiff{
				OldOnly: oldOnly,
				NewOnly: newOnly,
			}, nil
		}
	}

	if !contentsCertainlyUnchanged {
		var fileDiffs []*spawn_diff.FileDiff
		for p, oldInput := range oldMapping {
			newInput := newMapping[p]
			fileDiff := diffContents(oldInput, newInput, p, oldResolveSymlinks, newResolveSymlinks)
			if fileDiff != nil {
				fileDiffs = append(fileDiffs, fileDiff)
			}
		}
		if len(fileDiffs) > 0 {
			slices.SortFunc(fileDiffs, func(a, b *spawn_diff.FileDiff) int {
				return cmp.Compare(a.LogicalPath, b.LogicalPath)
			})
			return nil, &spawn_diff.FileSetDiff{FileDiffs: fileDiffs}
		}
	}

	return nil, nil
}

// diffContents returns a file diff if the contents of the old and new inputs differ, or nil if they are equal.
func diffContents(old, new Input, logicalPath string, oldResolveSymlinks, newResolveSymlinks func(string) string) *spawn_diff.FileDiff {
	if slices.Equal(old.ShallowContentHash(), new.ShallowContentHash()) {
		return nil
	}
	//if oldRunfilesTree, ok := old.(*RunfilesTree); ok {
	// Diffing exits early if one of the logs has been created by a Bazel version without support for RunfilesTree
	// entries, so we can safely assume that both inputs at the path <executable>.runfiles are RunfilesTree entries.
	// This ignores the pathological (no pun intended) case in which one of the files is not executable and has a
	// sibling file manually named <executable>.runfiles.
	//newRunfilesTree := new.(*RunfilesTree)
	//return diffRunfilesTrees(oldRunfilesTree, newRunfilesTree, oldResolveSymlinks, newResolveSymlinks)
	//}
	fileDiff := &spawn_diff.FileDiff{
		LogicalPath: logicalPath,
	}
	switch oldProto := old.Proto().(type) {
	case *spawnproto.ExecLogEntry_File:
		oldProto.Path = oldResolveSymlinks(oldProto.Path)
		fileDiff.Old = &spawn_diff.FileDiff_OldFile{OldFile: oldProto}
	case *spawnproto.ExecLogEntry_UnresolvedSymlink:
		oldProto.Path = oldResolveSymlinks(oldProto.Path)
		fileDiff.Old = &spawn_diff.FileDiff_OldSymlink{OldSymlink: oldProto}
	case *spawnproto.ExecLogEntry_Directory:
		oldProto.Path = oldResolveSymlinks(oldProto.Path)
		fileDiff.Old = &spawn_diff.FileDiff_OldDirectory{OldDirectory: oldProto}
	case string:
		fileDiff.Old = &spawn_diff.FileDiff_OldInvalidOutput{OldInvalidOutput: oldProto}
	}
	switch newProto := new.Proto().(type) {
	case *spawnproto.ExecLogEntry_File:
		newProto.Path = newResolveSymlinks(newProto.Path)
		fileDiff.New = &spawn_diff.FileDiff_NewFile{NewFile: newProto}
	case *spawnproto.ExecLogEntry_UnresolvedSymlink:
		newProto.Path = newResolveSymlinks(newProto.Path)
		fileDiff.New = &spawn_diff.FileDiff_NewSymlink{NewSymlink: newProto}
	case *spawnproto.ExecLogEntry_Directory:
		newProto.Path = newResolveSymlinks(newProto.Path)
		fileDiff.New = &spawn_diff.FileDiff_NewDirectory{NewDirectory: newProto}
	case string:
		fileDiff.New = &spawn_diff.FileDiff_NewInvalidOutput{NewInvalidOutput: newProto}
	}
	return fileDiff
}

func newDiff(s *Spawn) *spawn_diff.SpawnDiff {
	return &spawn_diff.SpawnDiff{
		PrimaryOutput: s.PrimaryOutputPath(),
		TargetLabel:   s.TargetLabel,
		Mnemonic:      s.Mnemonic,
	}
}

// setDifference computes the sorted slice a \ b for sorted slices a and b.
func setDifference(a, b []string) []string {
	var difference []string
	i, j := 0, 0
	for i < len(a) && j < len(b) {
		switch {
		case a[i] < b[j]:
			difference = append(difference, a[i])
			i++
		case a[i] > b[j]:
			j++
		default:
			i++
			j++
		}
	}
	difference = append(difference, a[i:]...)
	return difference
}

// setIntersection computes the sorted slice a ∩ b for sorted slices a and b.
func setIntersection(a, b []string) []string {
	var intersection []string
	i, j := 0, 0
	for i < len(a) && j < len(b) {
		switch {
		case a[i] < b[j]:
			i++
		case a[i] > b[j]:
			j++
		default:
			intersection = append(intersection, a[i])
			i++
			j++
		}
	}
	return intersection
}
