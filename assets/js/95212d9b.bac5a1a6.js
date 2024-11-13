"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8889],{72529:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(74848),r=s(28453);const o={id:"workflows-config",title:"Workflows configuration",sidebar_label:"Workflows configuration"},t=void 0,l={id:"workflows-config",title:"Workflows configuration",description:"Once you've linked your repo to BuildBuddy via",source:"@site/../docs/workflows-config.md",sourceDirName:".",slug:"/workflows-config",permalink:"/docs/workflows-config",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-config.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1731515112e3,frontMatter:{id:"workflows-config",title:"Workflows configuration",sidebar_label:"Workflows configuration"},sidebar:"someSidebar",previous:{title:"Workflows setup",permalink:"/docs/workflows-setup"},next:{title:"Remote bazel introduction",permalink:"/docs/remote-bazel-introduction"}},d={},c=[{value:"Configuring workflow actions and triggers",id:"configuring-workflow-actions-and-triggers",level:2},{value:"Example config",id:"example-config",level:3},{value:"Running bash commands",id:"running-bash-commands",level:3},{value:"Bazel configuration",id:"bazel-configuration",level:2},{value:"Bazel version",id:"bazel-version",level:3},{value:"bazelrc",id:"bazelrc",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Merge queue support",id:"merge-queue-support",level:2},{value:"Linux image configuration",id:"linux-image-configuration",level:2},{value:"Mac configuration",id:"mac-configuration",level:2},{value:"Attaching Bazel artifacts to workflows",id:"attaching-bazel-artifacts-to-workflows",level:2},{value:"buildbuddy.yaml schema",id:"buildbuddyyaml-schema",level:2},{value:"<code>BuildBuddyConfig</code>",id:"buildbuddyconfig",level:3},{value:"<code>Action</code>",id:"action",level:3},{value:"<code>Triggers</code>",id:"triggers",level:3},{value:"<code>PushTrigger</code>",id:"pushtrigger",level:3},{value:"<code>PullRequestTrigger</code>",id:"pullrequesttrigger",level:3},{value:"<code>ResourceRequests</code>",id:"resourcerequests",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Once you've linked your repo to BuildBuddy via\n",(0,i.jsx)(n.a,{href:"/docs/workflows-setup",children:"BuildBuddy workflows"}),", BuildBuddy will automatically\nrun ",(0,i.jsx)(n.code,{children:"bazel test //..."})," on each push to your repo, reporting results to the\nBuildBuddy UI."]}),"\n",(0,i.jsx)(n.p,{children:"But you may wish to configure multiple test commands with different test\ntag filters, or run the same tests on multiple different platform\nconfigurations (running some tests on Linux, and some on macOS, for\nexample)."}),"\n",(0,i.jsx)(n.p,{children:"This page describes how to configure your workflows beyond the default\nconfiguration."}),"\n",(0,i.jsx)(n.h2,{id:"configuring-workflow-actions-and-triggers",children:"Configuring workflow actions and triggers"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy workflows can be configured using a file called\n",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"}),", which can be placed at the root of your git repo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"buildbuddy.yaml"})," consists of multiple ",(0,i.jsx)(n.strong,{children:"actions"}),". Each action describes\na list of commands to be run in order, as well as the set of git\nevents that should trigger these commands."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The configuration in ",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"})," only takes effect after you\n",(0,i.jsx)(n.a,{href:"workflows-setup#enable-workflows-for-a-repo",children:"enable workflows for the repo"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"example-config",children:"Example config"}),"\n",(0,i.jsxs)(n.p,{children:["You can copy this example config as a starting point for your own ",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:'actions:\n  - name: "Test all targets"\n    triggers:\n      push:\n        branches:\n          - "main" # <-- replace "main" with your main branch name\n      pull_request:\n        branches:\n          - "*"\n    steps:\n      - run: "bazel test //..."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This config is equivalent to the default config that we use if you\ndo not have a ",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"})," file at the root of your repo."]}),"\n",(0,i.jsx)(n.h3,{id:"running-bash-commands",children:"Running bash commands"}),"\n",(0,i.jsx)(n.p,{children:"Each step can run arbitrary bash code, which may be useful for running Bazel commands\nconditionally, or for installing system dependencies\nthat aren't available in BuildBuddy's available workflow images."}),"\n",(0,i.jsxs)(n.p,{children:["Because workflows are run in ",(0,i.jsx)(n.a,{href:"./rbe-microvms",children:"snapshotted microVMs"}),", system\ndependencies will be persisted across workflow runs. However, we recommend\nfetching dependencies with Bazel whenever possible, rather than relying\non system dependencies."]}),"\n",(0,i.jsx)(n.p,{children:"To specify multiple bash commands, you can either specify a block of bash code within a single step:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:"# ...\nsteps:\n  - run: |\n      sudo apt-get update && sudo apt-get install -y my-lib\n      bazel test //...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or you can specify one command per step. Note that each step is run in a separate\nbash process, so locally initialized variables will not persist across steps:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:"# ...\nsteps:\n  - run: sudo apt-get update && sudo apt-get install -y my-lib\n  - run: bazel test //...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bazel-configuration",children:"Bazel configuration"}),"\n",(0,i.jsx)(n.h3,{id:"bazel-version",children:"Bazel version"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy runs each bazel command in your workflow with a\n",(0,i.jsx)(n.a,{href:"https://github.com/bazelbuild/bazelisk",children:"bazelisk"}),"-compatible wrapper so\nthat your ",(0,i.jsx)(n.code,{children:".bazelversion"})," file is respected."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:".bazelversion"})," is missing, the latest version of Bazel is used. We\nalways recommend including a ",(0,i.jsx)(n.code,{children:".bazelversion"})," in your repo to prevent\nproblems caused by using conflicting versions of Bazel in different build\nenvironments."]}),"\n",(0,i.jsx)(n.h3,{id:"bazelrc",children:"bazelrc"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy runs each bazel command directly in your workspace, which means\nthat your ",(0,i.jsx)(n.code,{children:".bazelrc"})," is respected. If you have lots of flags, we recommend\nadding them to your ",(0,i.jsx)(n.code,{children:".bazelrc"})," instead of adding them to your ",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy also provides a ",(0,i.jsx)(n.a,{href:"https://bazel.build/docs/bazelrc",children:(0,i.jsx)(n.code,{children:"bazelrc"})}),"\nfile which passes these default options to each bazel invocation listed in\n",(0,i.jsx)(n.code,{children:"steps"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--bes_backend"})," and ",(0,i.jsx)(n.code,{children:"--bes_results_url"}),", so that the results from each\nBazel command are viewable with BuildBuddy"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--remote_header=x-buildbuddy-api-key=YOUR_API_KEY"}),", so that invocations\nare authenticated by default"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--build_metadata=ROLE=CI"}),", so that workflow invocations are tagged as\nCI invocations, and so that workflow tests are viewable in the test grid"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy's ",(0,i.jsx)(n.code,{children:"bazelrc"})," takes lower precedence than your workspace\n",(0,i.jsx)(n.code,{children:".bazelrc"}),". You can view the exact flags provided by this bazelrc by\ninspecting the command line details in the invocation page (look for\n",(0,i.jsx)(n.code,{children:"buildbuddy.bazelrc"}),")."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["BuildBuddy remote cache and remote execution (RBE) are not enabled by\ndefault for workflows, and require additional configuration. The\nconfiguration steps are the same as when running Bazel locally. See the\n",(0,i.jsx)(n.strong,{children:"Quickstart"})," page in the BuildBuddy UI."]})}),"\n",(0,i.jsx)(n.h3,{id:"secrets",children:"Secrets"}),"\n",(0,i.jsxs)(n.p,{children:["Trusted workflow executions can access ",(0,i.jsx)(n.a,{href:"secrets",children:"secrets"})," using\nenvironment variables."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if we have a secret named ",(0,i.jsx)(n.code,{children:"REGISTRY_TOKEN"})," and we want to set\nthe remote header ",(0,i.jsx)(n.code,{children:"x-buildbuddy-platform.container-registry-password"})," to\nthe value of that secret, we can get the secret value using\n",(0,i.jsx)(n.code,{children:"$REGISTRY_TOKEN"}),", as in the following example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:'# ...\nsteps:\n  - run: "bazel test ... --remote_exec_header=x-buildbuddy-platform.container-registry-password=$REGISTRY_TOKEN"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To access the environment variables within ",(0,i.jsx)(n.code,{children:"build"})," or ",(0,i.jsx)(n.code,{children:"test"})," actions, you\nmay need to explicitly expose the environment variable to the actions by\nusing a bazel flag like\n",(0,i.jsx)(n.a,{href:"https://bazel.build/reference/command-line-reference#flag--action_env",children:(0,i.jsx)(n.code,{children:"--action_env"})}),"\nor\n",(0,i.jsx)(n.a,{href:"https://bazel.build/reference/command-line-reference#flag--test_env",children:(0,i.jsx)(n.code,{children:"--test_env"})}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:'# ...\nsteps:\n  - run: "bazel test ... --test_env=REGISTRY_TOKEN"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"merge-queue-support",children:"Merge queue support"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy workflows are compatible with GitHub's ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue",children:"merge queues"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To ensure that workflows are run as part of merge queue CI, configure\na push trigger that runs whenever GitHub pushes its temporary merge queue\nbranch, as described in ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue",children:"Triggering merge group checks with third-party CI providers"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:'- action: Test\n  triggers:\n    push:\n      # Run when a merge queue branch is pushed or the main branch is\n      # pushed.\n      branches: ["main", "gh-readonly-queue/*"]\n  # ...\n'})}),"\n",(0,i.jsx)(n.h2,{id:"linux-image-configuration",children:"Linux image configuration"}),"\n",(0,i.jsxs)(n.p,{children:["By default, workflows run on an Ubuntu 18.04-based image. You can use\na newer, Ubuntu 20.04-based image using the ",(0,i.jsx)(n.code,{children:"container_image"})," action\nsetting:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:'actions:\n  - name: "Test all targets"\n    container_image: "ubuntu-20.04" # <-- add this line\n    steps:\n      - run: "bazel test //..."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The supported values for ",(0,i.jsx)(n.code,{children:"container_image"})," are ",(0,i.jsx)(n.code,{children:'"ubuntu-18.04"'})," (default)\nor ",(0,i.jsx)(n.code,{children:'"ubuntu-20.04"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:"By default, workflow VMs have the following resources available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"3 CPU"}),"\n",(0,i.jsx)(n.li,{children:"8 GB of RAM"}),"\n",(0,i.jsx)(n.li,{children:"20 GB of disk space"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These values are configurable using ",(0,i.jsx)(n.a,{href:"#resourcerequests",children:"resource requests"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"mac-configuration",children:"Mac configuration"}),"\n",(0,i.jsx)(n.p,{children:"By default, workflows will execute on BuildBuddy's Linux executors,\nbut it is also possible to run workflows on macOS by using self-hosted\nexecutors."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set up one or more Mac executors that will be dedicated to running\nworkflows, following the steps in the ",(0,i.jsx)(n.a,{href:"/docs/enterprise-mac-rbe",children:"Enterprise\nMac RBE Setup"})," guide."]}),"\n",(0,i.jsxs)(n.p,{children:["Then, in your ",(0,i.jsx)(n.code,{children:"buildbuddy-executor.plist"})," file, find the\n",(0,i.jsx)(n.code,{children:"EnvironmentVariables"})," section and set ",(0,i.jsx)(n.code,{children:"MY_POOL"})," to ",(0,i.jsx)(n.code,{children:"workflows"}),". You'll\nalso need to set ",(0,i.jsx)(n.code,{children:"SYS_MEMORY_BYTES"})," to allow enough memory to be\nused for workflows (a minimum of 8GB is required)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="buildbuddy-executor.plist"',children:"        ...\n        <key>EnvironmentVariables</key>\n        <dict>\n            ...\n            \x3c!-- Set the required executor pool name for workflows --\x3e\n            <key>MY_POOL</key>\n            <string>workflows</string>\n            \x3c!-- Allocate 16GB of memory to workflows (8GB minimum) --\x3e\n            <key>SYS_MEMORY_BYTES</key>\n            <string>16000000000</string>\n        </dict>\n        ...\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you haven't already, ",(0,i.jsx)(n.a,{href:"/docs/workflows-setup#enable-workflows-for-a-repo",children:"enable workflows for your\nrepo"}),", then create a\nfile called ",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"})," at the root of your repo. See the\n",(0,i.jsx)(n.a,{href:"#example-config",children:"Example config"})," for a starting point."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:'os: "darwin"'})," on the workflow action that you would like to build\non macOS. For Apple silicon (ARM-based) Macs, add ",(0,i.jsx)(n.code,{children:'arch: "arm64"'})," as\nwell. Note: if you copy another action as a starting point, be sure to\ngive the new action a unique name:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:'actions:\n  - name: "Test all targets (Mac)"\n    os: "darwin" # <-- add this line\n    arch: "arm64" # <-- add this line for Apple silicon (ARM-based) Macs only\n    triggers:\n      push:\n        branches:\n          - "main"\n      pull_request:\n        branches:\n          - "*"\n    steps:\n      - run: "bazel test //..."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["That's it! Whenever any of the configured triggers are matched, one of\nthe Mac executors in the ",(0,i.jsx)(n.code,{children:"workflows"})," pool should execute the\nworkflow, and BuildBuddy will publish the results to your branch."]}),"\n",(0,i.jsx)(n.h2,{id:"attaching-bazel-artifacts-to-workflows",children:"Attaching Bazel artifacts to workflows"}),"\n",(0,i.jsxs)(n.p,{children:["Bazel supports several flags such as ",(0,i.jsx)(n.code,{children:"--remote_grpc_log"})," that allow\nwriting additional debug logs and metadata files associated with an\ninvocation."]}),"\n",(0,i.jsxs)(n.p,{children:["To provide easy access to these files, BuildBuddy supports a special\ndirectory called the ",(0,i.jsx)(n.strong,{children:"workflow artifacts directory"}),". If you write files\nto this directory, BuildBuddy will automatically upload those files and\nshow them in the UI for the workflow. You can get the path to the workflow\nartifacts directory using the environment variable\n",(0,i.jsx)(n.code,{children:"$BUILDBUDDY_ARTIFACTS_DIRECTORY"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.code,{children:"buildbuddy.yaml"})," configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="buildbuddy.yaml"',children:'actions:\n  - name: "Test"\n    # ...\n    steps:\n      - run: "bazel test //... --remote_grpc_log=$BUILDBUDDY_ARTIFACTS_DIRECTORY/grpc.log"\n'})}),"\n",(0,i.jsx)(n.p,{children:"BuildBuddy creates a new artifacts directory for each Bazel command, and\nrecursively uploads all files in the directory after the command exits."}),"\n",(0,i.jsx)(n.h2,{id:"buildbuddyyaml-schema",children:"buildbuddy.yaml schema"}),"\n",(0,i.jsx)(n.h3,{id:"buildbuddyconfig",children:(0,i.jsx)(n.code,{children:"BuildBuddyConfig"})}),"\n",(0,i.jsx)(n.p,{children:"The top-level BuildBuddy workflow config, which specifies bazel commands\nthat can be run on a repo, as well as the events that trigger those commands."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"actions"})})," (",(0,i.jsx)(n.a,{href:"#action",children:(0,i.jsx)(n.code,{children:"Action"})})," list): List of actions that can be triggered by BuildBuddy.\nEach action corresponds to a separate check on GitHub.\nIf multiple actions are matched for a given event, the actions are run in\norder. If an action fails, subsequent actions will still be executed."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"action",children:(0,i.jsx)(n.code,{children:"Action"})}),"\n",(0,i.jsx)(n.p,{children:"A named group of Bazel commands that run when triggered."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"name"})})," (",(0,i.jsx)(n.code,{children:"string"}),"): A name unique to this config, which shows up as the name of the check\nin GitHub."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"triggers"})})," (",(0,i.jsx)(n.a,{href:"#triggers",children:(0,i.jsx)(n.code,{children:"Triggers"})}),"): The triggers that should cause this action to be run."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"os"})})," (",(0,i.jsx)(n.code,{children:"string"}),"): The operating system on which to run the workflow.\nDefaults to ",(0,i.jsx)(n.code,{children:'"linux"'}),". ",(0,i.jsx)(n.code,{children:'"darwin"'})," (macOS) is also supported, but\nrequires using self-hosted Mac executors running on a dedicated\n",(0,i.jsx)(n.code,{children:"workflows"})," pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"arch"})})," (",(0,i.jsx)(n.code,{children:"string"}),"): The CPU architecture of the workflow runner.\nDefaults to ",(0,i.jsx)(n.code,{children:'"amd64"'}),". ",(0,i.jsx)(n.code,{children:'"arm64"'})," is also supported when running under\n",(0,i.jsx)(n.code,{children:'os: "darwin"'}),", but requires using self-hosted Apple silicon (ARM-based)\nMac executors running on a dedicated ",(0,i.jsx)(n.code,{children:"workflows"})," pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"pool"})})," (",(0,i.jsx)(n.code,{children:"string"}),"): The executor pool name for running workflows.\nThis option has no effect unless ",(0,i.jsx)(n.code,{children:"self_hosted: true"})," is also specified."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"self_hosted"})})," (",(0,i.jsx)(n.code,{children:"boolean"}),"): Whether to run the workflow on\nself-hosted executors. The executor's default isolation type will be\nused to run workflows. Unless ",(0,i.jsx)(n.code,{children:"pool"})," is also specified, the configured\npool name for the self-hosted workflow executors must be ",(0,i.jsx)(n.code,{children:'"workflows"'}),".\nThis option is ignored for macOS workflows, since macOS workflows are\nalways required to be self-hosted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"container_image"})})," (",(0,i.jsx)(n.code,{children:"string"}),"): The Linux container image to use\n(has no effect for Mac workflows). Supported values are ",(0,i.jsx)(n.code,{children:'"ubuntu-18.04"'}),"\nand ",(0,i.jsx)(n.code,{children:'"ubuntu-20.04"'}),". Defaults to ",(0,i.jsx)(n.code,{children:'"ubuntu-18.04"'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"resource_requests"})})," (",(0,i.jsx)(n.a,{href:"#resourcerequests",children:(0,i.jsx)(n.code,{children:"ResourceRequests"})}),"):\nthe requested resources for this action."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"user"})})," (",(0,i.jsx)(n.code,{children:"string"}),"): User to run the workflow as. This can be set to\n",(0,i.jsx)(n.code,{children:'"root"'})," to run the workflow as root, but it is recommended to keep the\ndefault value, which is a non-root user provisioned in the CI\nenvironment (usually named ",(0,i.jsx)(n.code,{children:'"buildbuddy"'}),"). Note: some legacy workflows\nmight still have ",(0,i.jsx)(n.code,{children:'"root"'})," as the default user, but we are in the process\nof migrating all users to non-root by default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"env"})})," (",(0,i.jsx)(n.code,{children:"map"})," with string values): Map of static environment variables and their values."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"git_fetch_filters"})})," (",(0,i.jsx)(n.code,{children:"string"})," list): list of ",(0,i.jsxs)(n.a,{href:"https://git-scm.com/docs/git-clone#Documentation/git-clone.txt-code--filtercodeemltfilter-specgtem",children:[(0,i.jsx)(n.code,{children:"--filter"})," option"]}),"\nvalues to the ",(0,i.jsx)(n.code,{children:"git fetch"})," command used when fetching the git commits\nto build. Defaults to ",(0,i.jsx)(n.code,{children:'["blob:none"]'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"git_fetch_depth"})})," (",(0,i.jsx)(n.code,{children:"int"}),"): ",(0,i.jsxs)(n.a,{href:"https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---depthltdepthgt",children:[(0,i.jsx)(n.code,{children:"--depth"})," option"]})," value used when\nfetching the git commits to build. When using this option in combination\nwith a ",(0,i.jsx)(n.code,{children:"pull_request"})," trigger, it's recommended to set\n",(0,i.jsx)(n.code,{children:"merge_with_base: false"})," in the ",(0,i.jsx)(n.code,{children:"pull_request"})," trigger, since the\nlimited fetch depth might prevent the merge-base commit from being\nfetched. Defaults to ",(0,i.jsx)(n.code,{children:"0"})," (unset)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"git_clean_exclude"})})," (",(0,i.jsx)(n.code,{children:"string"})," list): List of directories within the\nworkspace that are excluded when running ",(0,i.jsx)(n.code,{children:"git clean"})," across actions that\nare executed in the same runner instance. This is an advanced option and\nis not recommended for most users."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"bazel_workspace_dir"})})," (",(0,i.jsx)(n.code,{children:"string"}),"): A subdirectory within the repo\ncontaining the bazel workspace for this action. By default, this is\nassumed to be the repo root directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"steps"})})," (list): Bash commands to be run in order.\nIf a command fails, subsequent ones are not run, and the action is\nreported as failed. Otherwise, the action is reported as succeeded.\nEnvironment variables are expanded, which means that the commands\ncan reference ",(0,i.jsx)(n.a,{href:"/docs/secrets",children:"secrets"})," if the workflow execution\nis trusted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"timeout"})})," (",(0,i.jsx)(n.code,{children:"duration"})," string, e.g. '30m', '1h'): If set, workflow actions that have been\nrunning for longer than this duration will be canceled automatically. This\nonly applies to a single invocation, and does not include multiple retry attempts."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"triggers",children:(0,i.jsx)(n.code,{children:"Triggers"})}),"\n",(0,i.jsx)(n.p,{children:"Defines whether an action should run when a branch is pushed to the repo."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"push"})})," (",(0,i.jsx)(n.a,{href:"#push-trigger",children:(0,i.jsx)(n.code,{children:"PushTrigger"})}),"): Configuration for push events associated with the repo.\nThis is mostly useful for reporting commit statuses that show up on the\nhome page of the repo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"pull_request"})})," (",(0,i.jsx)(n.a,{href:"#pull-request-trigger",children:(0,i.jsx)(n.code,{children:"PullRequestTrigger"})}),"):\nConfiguration for pull request events associated with the repo.\nThis is required if you want to use BuildBuddy to report the status of\nthis action on pull requests, and optionally prevent pull requests from\nbeing merged if the action fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pushtrigger",children:(0,i.jsx)(n.code,{children:"PushTrigger"})}),"\n",(0,i.jsx)(n.p,{children:"Defines whether an action should execute when a branch is pushed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"branches"})})," (",(0,i.jsx)(n.code,{children:"string"})," list): The branches that, when pushed to, will\ntrigger the action. This field accepts a simple wildcard character\n(",(0,i.jsx)(n.code,{children:'"*"'}),") as a possible value, which will match any branch, as well as\n",(0,i.jsx)(n.code,{children:'"gh-readonly-queue/*"'}),", which matches GitHub's merge queue branches."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pullrequesttrigger",children:(0,i.jsx)(n.code,{children:"PullRequestTrigger"})}),"\n",(0,i.jsx)(n.p,{children:"Defines whether an action should execute when a pull request (PR) branch is\npushed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"branches"})})," (",(0,i.jsx)(n.code,{children:"string"})," list): The ",(0,i.jsx)(n.em,{children:"base"})," branches of a pull request.\nFor example, if this is set to ",(0,i.jsx)(n.code,{children:'[ "v1", "v2" ]'}),", then the associated\naction is only run when a PR wants to merge a branch ",(0,i.jsx)(n.em,{children:"into"})," the ",(0,i.jsx)(n.code,{children:"v1"}),"\nbranch or the ",(0,i.jsx)(n.code,{children:"v2"})," branch. This field accepts a simple wildcard\ncharacter (",(0,i.jsx)(n.code,{children:'"*"'}),") as a possible value, which will match any branch."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"merge_with_base"})})," (",(0,i.jsx)(n.code,{children:"boolean"}),", default: ",(0,i.jsx)(n.code,{children:"true"}),"): Whether to merge the\nbase branch into the PR branch before running the workflow action. This\ncan help ensure that the changes in the PR branch do not conflict with\nthe main branch. However, the action will not be continuously re-run as\nchanges are pushed to the base branch. For stronger protection against\nbreaking the main branch, you may wish to use ",(0,i.jsx)(n.a,{href:"#merge-queue-support",children:"merge\nqueues"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resourcerequests",children:(0,i.jsx)(n.code,{children:"ResourceRequests"})}),"\n",(0,i.jsx)(n.p,{children:"Defines the requested resources for a workflow action."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"memory"})})," (",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"number"}),"): Requested amount of memory for the\nworkflow action. Can be specified as an exact number of bytes, or a\nnumeric string containing an IEC unit abbreviation. For example: ",(0,i.jsx)(n.code,{children:"8GB"}),"\nrepresents ",(0,i.jsx)(n.code,{children:"8 * (1024)^3"})," bytes of memory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"cpu"})})," (",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"number"}),"): Requested amount of CPU for the\nworkflow action. Can be specified as a number of CPU cores, or a numeric\nstring containing an ",(0,i.jsx)(n.code,{children:"m"})," suffix to represent thousandths of a CPU core.\nFor example: ",(0,i.jsx)(n.code,{children:"8000m"})," represents 8 CPU cores."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"disk"})})," (",(0,i.jsx)(n.code,{children:"string"})," or ",(0,i.jsx)(n.code,{children:"number"}),"): Requested amount of disk space for the\nworkflow action. Can be specified as a number of bytes, or a numeric\nstring containing an IEC unit abbreviation. For example: ",(0,i.jsx)(n.code,{children:"8GB"})," represents\n",(0,i.jsx)(n.code,{children:"8 * (1024)^3"})," bytes of disk space."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(96540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);