"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[700],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72257:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],l={id:"workflows-config",title:"Workflows configuration",sidebar_label:"Workflows configuration"},s=void 0,u={unversionedId:"workflows-config",id:"workflows-config",title:"Workflows configuration",description:"Once you've linked your repo to BuildBuddy via",source:"@site/../docs/workflows-config.md",sourceDirName:".",slug:"/workflows-config",permalink:"/docs/workflows-config",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-config.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1691160210,formattedLastUpdatedAt:"Aug 4, 2023",frontMatter:{id:"workflows-config",title:"Workflows configuration",sidebar_label:"Workflows configuration"},sidebar:"someSidebar",previous:{title:"Workflows setup",permalink:"/docs/workflows-setup"},next:{title:"CLI Overview",permalink:"/docs/cli"}},d={},p=[{value:"Configuring workflow actions and triggers",id:"configuring-workflow-actions-and-triggers",level:2},{value:"Example config",id:"example-config",level:3},{value:"Bazel configuration",id:"bazel-configuration",level:2},{value:"Bazel version",id:"bazel-version",level:3},{value:"bazelrc",id:"bazelrc",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Dynamic bazel flags",id:"dynamic-bazel-flags",level:3},{value:"Linux image configuration",id:"linux-image-configuration",level:2},{value:"Mac configuration",id:"mac-configuration",level:2},{value:"buildbuddy.yaml schema",id:"buildbuddyyaml-schema",level:2},{value:"<code>BuildBuddyConfig</code>",id:"buildbuddyconfig",level:3},{value:"<code>Action</code>",id:"action",level:3},{value:"<code>Triggers</code>",id:"triggers",level:3},{value:"<code>PushTrigger</code>",id:"pushtrigger",level:3},{value:"<code>PullRequestTrigger</code>",id:"pullrequesttrigger",level:3},{value:"<code>ResourceRequests</code>",id:"resourcerequests",level:3}],c={toc:p},m="wrapper";function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you've linked your repo to BuildBuddy via\n",(0,r.kt)("a",{parentName:"p",href:"/docs/workflows-setup"},"BuildBuddy workflows"),", BuildBuddy will automatically\nrun ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel test //...")," on each push to your repo, reporting results to the\nBuildBuddy UI."),(0,r.kt)("p",null,"But you may wish to configure multiple test commands with different test\ntag filters, or run the same tests on multiple different platform\nconfigurations (running some tests on Linux, and some on macOS, for\nexample)."),(0,r.kt)("p",null,"This page describes how to configure your workflows beyond the default\nconfiguration."),(0,r.kt)("h2",{id:"configuring-workflow-actions-and-triggers"},"Configuring workflow actions and triggers"),(0,r.kt)("p",null,"BuildBuddy workflows can be configured using a file called\n",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml"),", which can be placed at the root of your git repo."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," consists of multiple ",(0,r.kt)("strong",{parentName:"p"},"actions"),". Each action describes\na list of bazel commands to be run in order, as well as the set of git\nevents that should trigger these commands."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," only takes effect after you\n",(0,r.kt)("a",{parentName:"p",href:"workflows-setup#enable-workflows-for-a-repo"},"enable workflows for the repo"),".")),(0,r.kt)("h3",{id:"example-config"},"Example config"),(0,r.kt)("p",null,"You can copy this example config as a starting point for your own ",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - name: "Test all targets"\n    triggers:\n      push:\n        branches:\n          - "main" # <-- replace "main" with your main branch name\n      pull_request:\n        branches:\n          - "*"\n    bazel_commands:\n      - "test //..."\n')),(0,r.kt)("p",null,"This config is equivalent to the default config that we use if you\ndo not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," file at the root of your repo."),(0,r.kt)("h2",{id:"bazel-configuration"},"Bazel configuration"),(0,r.kt)("h3",{id:"bazel-version"},"Bazel version"),(0,r.kt)("p",null,"BuildBuddy runs each bazel command in your workflow with a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"bazelisk"),"-compatible wrapper so\nthat your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelversion")," file is respected."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelversion")," is missing, the latest version of Bazel is used. We\nalways recommend including a ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelversion")," in your repo to prevent\nproblems caused by using conflicting versions of Bazel in different build\nenvironments."),(0,r.kt)("h3",{id:"bazelrc"},"bazelrc"),(0,r.kt)("p",null,"BuildBuddy runs each bazel command directly in your workspace, which means\nthat your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," is respected. If you have lots of flags, we recommend\nadding them to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," instead of adding them to your ",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml"),"."),(0,r.kt)("p",null,"BuildBuddy also provides a ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build/docs/bazelrc"},(0,r.kt)("inlineCode",{parentName:"a"},"bazelrc")),"\nfile which passes these default options to each bazel invocation listed in\n",(0,r.kt)("inlineCode",{parentName:"p"},"bazel_commands"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--bes_backend")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"--bes_results_url"),", so that the results from each\nBazel command are viewable with BuildBuddy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--remote_header=x-buildbuddy-api-key=YOUR_API_KEY"),", so that invocations\nare authenticated by default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--build_metadata=ROLE=CI"),", so that workflow invocations are tagged as\nCI invocations, and so that workflow tests are viewable in the test grid")),(0,r.kt)("p",null,"BuildBuddy's ",(0,r.kt)("inlineCode",{parentName:"p"},"bazelrc")," takes lower precedence than your workspace\n",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc"),". You can view the exact flags provided by this bazelrc by\ninspecting the command line details in the invocation page (look for\n",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.bazelrc"),")."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"BuildBuddy remote cache and remote execution (RBE) are not enabled by\ndefault for workflows, and require additional configuration. The\nconfiguration steps are the same as when running Bazel locally. See the\n",(0,r.kt)("strong",{parentName:"p"},"Quickstart")," page in the BuildBuddy UI.")),(0,r.kt)("h3",{id:"secrets"},"Secrets"),(0,r.kt)("p",null,"Trusted workflow executions can access ",(0,r.kt)("a",{parentName:"p",href:"secrets"},"secrets")," using\nenvironment variables."),(0,r.kt)("p",null,"Environment variables are expanded inline in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel_commands")," list.\nFor example, if we have a secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"REGISTRY_TOKEN")," and we want to set\nthe remote header ",(0,r.kt)("inlineCode",{parentName:"p"},"x-buildbuddy-platform.container-registry-password")," to\nthe value of that secret, we can get the secret value using\n",(0,r.kt)("inlineCode",{parentName:"p"},"$REGISTRY_TOKEN"),", as in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# ...\nbazel_commands:\n  - "test ... --remote_header=x-buildbuddy-platform.container-registry-password=$REGISTRY_TOKEN"\n')),(0,r.kt)("p",null,"To access the environment variables within ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," actions, you\nmay need to explicitly expose the environment variable to the actions by\nusing a bazel flag like\n",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build/reference/command-line-reference#flag--action_env"},(0,r.kt)("inlineCode",{parentName:"a"},"--action_env")),"\nor\n",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build/reference/command-line-reference#flag--test_env"},(0,r.kt)("inlineCode",{parentName:"a"},"--test_env")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# ...\nbazel_commands:\n  - "test ... --test_env=REGISTRY_TOKEN"\n')),(0,r.kt)("h3",{id:"dynamic-bazel-flags"},"Dynamic bazel flags"),(0,r.kt)("p",null,"Sometimes, you may wish to set a bazel flag using a shell command. For\nexample, you might want to set image pull credentials using a command like\n",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," that requests an image pull token on the fly."),(0,r.kt)("p",null,"To do this, we recommend using a setup script that generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"bazelrc"),"\nfile."),(0,r.kt)("p",null,"For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"/buildbuddy.yaml"),", you would write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nbazel_commands:\n  - bazel run :generate_ci_bazelrc\n  - bazel --bazelrc=ci.bazelrc test //...\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"/BUILD"),", you'd declare an ",(0,r.kt)("inlineCode",{parentName:"p"},"sh_binary")," target for your setup script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'sh_binary(name = "generate_ci_bazelrc", srcs = ["generate_ci_bazelrc.sh"])\n')),(0,r.kt)("p",null,"Then in ",(0,r.kt)("inlineCode",{parentName:"p"},"/generate_ci_bazelrc.sh"),", you'd generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"ci.bazelrc")," file in\nthe workspace root (make sure to make this file executable with ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/usr/bin/env bash\nset -e\n# Change to the WORKSPACE directory\ncd "$BUILD_WORKSPACE_DIRECTORY"\n# Run a command to request image pull credentials:\nREGISTRY_PASSWORD=$(some-command)\n# Write the credentials to ci.bazelrc in the workspace root directory:\necho >ci.bazelrc "\nbuild --remote_header=x-buildbuddy-platform.container-registry-password=${REGISTRY_PASSWORD}\n"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_ci_bazelrc.sh")," script can access workflow secrets using\nenvironment variables."),(0,r.kt)("p",{parentName:"admonition"},"For Linux workflows, the script can also install system dependencies using\n",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get")," if needed, although if possible we recommend using Bazel to\nbuild or fetch these dependencies.")),(0,r.kt)("h2",{id:"linux-image-configuration"},"Linux image configuration"),(0,r.kt)("p",null,"By default, workflows run on an Ubuntu 18.04-based image. You can use\na newer, Ubuntu 20.04-based image using the ",(0,r.kt)("inlineCode",{parentName:"p"},"container_image")," action\nsetting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - name: "Test all targets"\n    container_image: "ubuntu-20.04" # <-- add this line\n    bazel_commands:\n      - "bazel test //..."\n')),(0,r.kt)("p",null,"The supported values for ",(0,r.kt)("inlineCode",{parentName:"p"},"container_image")," are ",(0,r.kt)("inlineCode",{parentName:"p"},'"ubuntu-18.04"')," (default)\nor ",(0,r.kt)("inlineCode",{parentName:"p"},'"ubuntu-20.04"'),"."),(0,r.kt)("p",null,"By default, workflow VMs have the following resources available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3 CPU"),(0,r.kt)("li",{parentName:"ul"},"8 GB of RAM"),(0,r.kt)("li",{parentName:"ul"},"20 GB of disk space")),(0,r.kt)("p",null,"These values are configurable using ",(0,r.kt)("a",{parentName:"p",href:"#resourcerequests"},"resource requests"),"."),(0,r.kt)("h2",{id:"mac-configuration"},"Mac configuration"),(0,r.kt)("p",null,"By default, workflows will execute on BuildBuddy's Linux executors,\nbut it is also possible to run workflows on macOS by using self-hosted\nexecutors."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up one or more Mac executors that will be dedicated to running\nworkflows, following the steps in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/enterprise-mac-rbe"},"Enterprise\nMac RBE Setup")," guide."),(0,r.kt)("p",{parentName:"li"},"Then, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy-executor.plist")," file, find the\n",(0,r.kt)("inlineCode",{parentName:"p"},"EnvironmentVariables")," section and set ",(0,r.kt)("inlineCode",{parentName:"p"},"MY_POOL")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"workflows"),". You'll\nalso need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"SYS_MEMORY_BYTES")," to allow enough memory to be\nused for workflows (a minimum of 8GB is required)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        ...\n        <key>EnvironmentVariables</key>\n        <dict>\n            ...\n            \x3c!-- Set the required executor pool name for workflows --\x3e\n            <key>MY_POOL</key>\n            <string>workflows</string>\n            \x3c!-- Allocate 16GB of memory to workflows (8GB minimum) --\x3e\n            <key>SYS_MEMORY_BYTES</key>\n            <string>16000000000</string>\n        </dict>\n        ...\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you haven't already, ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflows-setup#enable-workflows-for-a-repo"},"enable workflows for your\nrepo"),", then create a\nfile called ",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," at the root of your repo. See the\n",(0,r.kt)("a",{parentName:"p",href:"#example-config"},"Example config")," for a starting point.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},'os: "darwin"')," on the workflow action that you would like to build\non macOS. For Apple silicon (ARM-based) Macs, add ",(0,r.kt)("inlineCode",{parentName:"p"},'arch: "arm64"')," as\nwell. Note: if you copy another action as a starting point, be sure to\ngive the new action a unique name:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - name: "Test all targets (Mac)"\n    os: "darwin" # <-- add this line\n    arch: "arm64" # <-- add this line for Apple silicon (ARM-based) Macs only\n    triggers:\n      push:\n        branches:\n          - "main"\n      pull_request:\n        branches:\n          - "*"\n    bazel_commands:\n      - "test //... --bes_backend=remote.buildbuddy.io --bes_results_url=https://app.buildbuddy.io/invocation/"\n')),(0,r.kt)("p",null,"That's it! Whenever any of the configured triggers are matched, one of\nthe Mac executors in the ",(0,r.kt)("inlineCode",{parentName:"p"},"workflows")," pool should execute the\nworkflow, and BuildBuddy will publish the results to your branch."),(0,r.kt)("h2",{id:"buildbuddyyaml-schema"},"buildbuddy.yaml schema"),(0,r.kt)("h3",{id:"buildbuddyconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"BuildBuddyConfig")),(0,r.kt)("p",null,"The top-level BuildBuddy workflow config, which specifies bazel commands\nthat can be run on a repo, as well as the events that trigger those commands."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"actions"))," (",(0,r.kt)("a",{parentName:"li",href:"#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action"))," list): List of actions that can be triggered by BuildBuddy.\nEach action corresponds to a separate check on GitHub.\nIf multiple actions are matched for a given event, the actions are run in\norder. If an action fails, subsequent actions will still be executed.")),(0,r.kt)("h3",{id:"action"},(0,r.kt)("inlineCode",{parentName:"h3"},"Action")),(0,r.kt)("p",null,"A named group of Bazel commands that run when triggered."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"name"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): A name unique to this config, which shows up as the name of the check\nin GitHub."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"triggers"))," (",(0,r.kt)("a",{parentName:"li",href:"#triggers"},(0,r.kt)("inlineCode",{parentName:"a"},"Triggers")),"): The triggers that should cause this action to be run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"os"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): The operating system on which to run the workflow.\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},'"linux"'),". ",(0,r.kt)("inlineCode",{parentName:"li"},'"darwin"')," (macOS) is also supported, but\nrequires using self-hosted Mac executors running on a dedicated\n",(0,r.kt)("inlineCode",{parentName:"li"},"workflows")," pool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"arch"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): The CPU architecture of the workflow runner.\nDefaults to ",(0,r.kt)("inlineCode",{parentName:"li"},'"amd64"'),". ",(0,r.kt)("inlineCode",{parentName:"li"},'"arm64"')," is also supported when running under\n",(0,r.kt)("inlineCode",{parentName:"li"},'os: "darwin"'),", but requires using self-hosted Apple silicon (ARM-based)\nMac executors running on a dedicated ",(0,r.kt)("inlineCode",{parentName:"li"},"workflows")," pool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pool"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): The executor pool name for running workflows.\nThis option has no effect unless ",(0,r.kt)("inlineCode",{parentName:"li"},"self_hosted: true")," is also specified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"self_hosted"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),"): Whether to run the workflow on\nself-hosted executors. The executor's default isolation type will be\nused to run workflows. Unless ",(0,r.kt)("inlineCode",{parentName:"li"},"pool")," is also specified, the configured\npool name for the self-hosted workflow executors must be ",(0,r.kt)("inlineCode",{parentName:"li"},'"workflows"'),".\nThis option is ignored for macOS workflows, since macOS workflows are\nalways required to be self-hosted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"container_image"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): The Linux container image to use\n(has no effect for Mac workflows). Supported values are ",(0,r.kt)("inlineCode",{parentName:"li"},'"ubuntu-18.04"'),"\nand ",(0,r.kt)("inlineCode",{parentName:"li"},'"ubuntu-20.04"'),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},'"ubuntu-18.04"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"resource_requests"))," (",(0,r.kt)("a",{parentName:"li",href:"#resourcerequests"},(0,r.kt)("inlineCode",{parentName:"a"},"ResourceRequests")),"):\nthe requested resources for this action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"user"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): User to run the workflow as. For Linux workflows,\nthe user ",(0,r.kt)("inlineCode",{parentName:"li"},"buildbuddy")," can be specified here to ensure that the action\nruns as a non-root user, to accomodate certain Bazel actions that refuse\nto run as root (like ",(0,r.kt)("inlineCode",{parentName:"li"},"rules_hermetic_python"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"git_clean_exclude"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," list): List of directories within the\nworkspace that are excluded when running ",(0,r.kt)("inlineCode",{parentName:"li"},"git clean")," across actions that\nare executed in the same runner instance. This is an advanced option and\nis not recommended for most users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bazel_workspace_dir"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): A subdirectory within the repo\ncontaining the bazel workspace for this action. By default, this is\nassumed to be the repo root directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bazel_commands"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," list): Bazel commands to be run in order.\nIf a command fails, subsequent ones are not run, and the action is\nreported as failed. Otherwise, the action is reported as succeeded.\nEnvironment variables are expanded, which means that the bazel command\nline can reference ",(0,r.kt)("a",{parentName:"li",href:"/docs/secrets"},"secrets")," if the workflow execution\nis trusted.")),(0,r.kt)("h3",{id:"triggers"},(0,r.kt)("inlineCode",{parentName:"h3"},"Triggers")),(0,r.kt)("p",null,"Defines whether an action should run when a branch is pushed to the repo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"push"))," (",(0,r.kt)("a",{parentName:"li",href:"#push-trigger"},(0,r.kt)("inlineCode",{parentName:"a"},"PushTrigger")),"): Configuration for push events associated with the repo.\nThis is mostly useful for reporting commit statuses that show up on the\nhome page of the repo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pull_request"))," (",(0,r.kt)("a",{parentName:"li",href:"#pull-request-trigger"},(0,r.kt)("inlineCode",{parentName:"a"},"PullRequestTrigger")),"):\nConfiguration for pull request events associated with the repo.\nThis is required if you want to use BuildBuddy to report the status of\nthis action on pull requests, and optionally prevent pull requests from\nbeing merged if the action fails.")),(0,r.kt)("h3",{id:"pushtrigger"},(0,r.kt)("inlineCode",{parentName:"h3"},"PushTrigger")),(0,r.kt)("p",null,"Defines whether an action should execute when a branch is pushed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"branches"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," list): The branches that, when pushed to, will\ntrigger the action. This field accepts a simple wildcard character\n(",(0,r.kt)("inlineCode",{parentName:"li"},'"*"'),") as a possible value, which will match any branch.")),(0,r.kt)("h3",{id:"pullrequesttrigger"},(0,r.kt)("inlineCode",{parentName:"h3"},"PullRequestTrigger")),(0,r.kt)("p",null,"Defines whether an action should execute when a pull request (PR) branch is\npushed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"branches"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," list): The ",(0,r.kt)("em",{parentName:"li"},"target")," branches of a pull request.\nFor example, if this is set to ",(0,r.kt)("inlineCode",{parentName:"li"},'[ "v1", "v2" ]'),", then the associated\naction is only run when a PR wants to merge a branch ",(0,r.kt)("em",{parentName:"li"},"into")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"v1"),"\nbranch or the ",(0,r.kt)("inlineCode",{parentName:"li"},"v2")," branch. This field accepts a simple wildcard\ncharacter (",(0,r.kt)("inlineCode",{parentName:"li"},'"*"'),") as a possible value, which will match any branch.")),(0,r.kt)("h3",{id:"resourcerequests"},(0,r.kt)("inlineCode",{parentName:"h3"},"ResourceRequests")),(0,r.kt)("p",null,"Defines the requested resources for a workflow action."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"memory"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),"): Requested amount of memory for the\nworkflow action. Can be specified as an exact number of bytes, or a\nnumeric string containing an IEC unit abbreviation. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"8GB"),"\nrepresents ",(0,r.kt)("inlineCode",{parentName:"li"},"8 * (1024)^3")," bytes of memory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"cpu"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),"): Requested amount of CPU for the\nworkflow action. Can be specified as a number of CPU cores, or a numeric\nstring containing an ",(0,r.kt)("inlineCode",{parentName:"li"},"m")," suffix to represent thousandths of a CPU core.\nFor example: ",(0,r.kt)("inlineCode",{parentName:"li"},"8000m")," represents 8 CPU cores."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"disk"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),"): Requested amount of disk space for the\nworkflow action. Can be specified as a number of bytes, or a numeric\nstring containing an IEC unit abbreviation. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"8GB")," represents\n",(0,r.kt)("inlineCode",{parentName:"li"},"8 * (1024)^3")," bytes of disk space.")))}k.isMDXComponent=!0}}]);