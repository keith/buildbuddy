"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1835],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=p(a),c=i,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[s]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66733:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return s}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),l=["components"],r={id:"guide-metadata",title:"Build Metadata Guide",sidebar_label:"Build Metadata Guide"},d=void 0,p={unversionedId:"guide-metadata",id:"guide-metadata",title:"Build Metadata Guide",description:"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build.",source:"@site/../docs/guide-metadata.md",sourceDirName:".",slug:"/guide-metadata",permalink:"/docs/guide-metadata",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/guide-metadata.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1699043009,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{id:"guide-metadata",title:"Build Metadata Guide",sidebar_label:"Build Metadata Guide"},sidebar:"someSidebar",previous:{title:"Authentication Guide",permalink:"/docs/guide-auth"},next:{title:"Customer-managed Encryption Keys",permalink:"/docs/cache-encryption-keys"}},u={},s=[{value:"Repository URL",id:"repository-url",level:2},{value:"Build metadata",id:"build-metadata",level:3},{value:"Workspace info",id:"workspace-info",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Git Branch",id:"git-branch",level:2},{value:"Build metadata",id:"build-metadata-1",level:3},{value:"Workspace info",id:"workspace-info-1",level:3},{value:"Environment variables",id:"environment-variables-1",level:3},{value:"Commit SHA",id:"commit-sha",level:2},{value:"Build metadata",id:"build-metadata-2",level:3},{value:"Workspace info",id:"workspace-info-2",level:3},{value:"Environment variables",id:"environment-variables-2",level:3},{value:"Role",id:"role",level:2},{value:"Test groups",id:"test-groups",level:2},{value:"Visibility",id:"visibility",level:2},{value:"User",id:"user",level:2},{value:"Build metadata",id:"build-metadata-3",level:3},{value:"Workspace info",id:"workspace-info-3",level:3},{value:"Host",id:"host",level:2},{value:"Build metadata",id:"build-metadata-4",level:3},{value:"Workspace info",id:"workspace-info-4",level:3},{value:"Pattern",id:"pattern",level:2},{value:"Build metadata",id:"build-metadata-5",level:3},{value:"Workspace info",id:"workspace-info-5",level:3},{value:"Custom Links",id:"custom-links",level:2},{value:"Tags",id:"tags",level:2},{value:"Environment variable redacting",id:"environment-variable-redacting",level:2},{value:"Examples",id:"examples",level:3}],m={toc:s},c="wrapper";function k(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build."),(0,o.kt)("h2",{id:"repository-url"},"Repository URL"),(0,o.kt)("p",null,"BuildBuddy allows you to group invocations by the repository on which they were run. In order to perform this grouping, BuildBuddy needs the repository's git url. There are three ways of providing this information to BuildBuddy:"),(0,o.kt)("h3",{id:"build-metadata"},"Build metadata"),(0,o.kt)("p",null,"The first method is simple - just provide the repo URL with Bazel's build_metadata flag with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"REPO_URL"),". You can do this by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --build_metadata=REPO_URL=https://github.com/buildbuddy-io/buildbuddy.git\n")),(0,o.kt)("h3",{id:"workspace-info"},"Workspace info"),(0,o.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,o.kt)("p",null,"First, you'll need to point your ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,o.kt)("p",null,"Then you'll need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"BuildBuddy will automatically pull your repo URL from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCLE_REPOSITORY_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TRAVIS_REPO_SLUG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GIT_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CI_REPOSITORY_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REPO_URL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_REPO"),"."),(0,o.kt)("h2",{id:"git-branch"},"Git Branch"),(0,o.kt)("p",null,"BuildBuddy allows you to group invocations by the git branch on which they were run. In order to perform this grouping, BuildBuddy needs the branch name. There are three ways of providing this information to BuildBuddy:"),(0,o.kt)("h3",{id:"build-metadata-1"},"Build metadata"),(0,o.kt)("p",null,"You can provide the current git branch with Bazel's build_metadata flag with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"BRANCH_NAME"),". You can do this by adding the flag to your bazel invocations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--build_metadata=BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)\n")),(0,o.kt)("p",null,"Note: you cannot add this particular flag to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," file because it does not support parameter substitution. If you're looking for a solution that supports your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," file, try the Workspace info method below."),(0,o.kt)("h3",{id:"workspace-info-1"},"Workspace info"),(0,o.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,o.kt)("p",null,"First, you'll need to point your ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,o.kt)("p",null,"Then you'll need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."),(0,o.kt)("h3",{id:"environment-variables-1"},"Environment variables"),(0,o.kt)("p",null,"BuildBuddy will automatically pull your git branch from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_REF"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_HEAD_REF"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCLE_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TRAVIS_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GIT_BRANCH"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_BRANCH"),". Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_REF")," will be ignored when it refers to a tag, or overridden by ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_HEAD_REF")," for pull requests."),(0,o.kt)("h2",{id:"commit-sha"},"Commit SHA"),(0,o.kt)("h3",{id:"build-metadata-2"},"Build metadata"),(0,o.kt)("p",null,"You can provide the current commit SHA with Bazel's build_metadata flag with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMIT_SHA"),". You can do this by adding the flag to your bazel invocations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--build_metadata=COMMIT_SHA=$(git rev-parse HEAD)\n")),(0,o.kt)("p",null,"Note: you cannot add this particular flag to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," file because it does not support parameter substitution. If you're looking for a solution that supports your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," file, try the Workspace info method below."),(0,o.kt)("h3",{id:"workspace-info-2"},"Workspace info"),(0,o.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,o.kt)("p",null,"First, you'll need to point your ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,o.kt)("p",null,"Then you'll need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace. You can copy the contents of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."),(0,o.kt)("h3",{id:"environment-variables-2"},"Environment variables"),(0,o.kt)("p",null,"BuildBuddy will automatically pull your commit SHA from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, or BuildKite. The environment variables currently supported are ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCLE_SHA1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TRAVIS_COMMIT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"VOLATILE_GIT_COMMIT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_SHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMIT_SHA")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_COMMIT"),"."),(0,o.kt)("h2",{id:"role"},"Role"),(0,o.kt)("p",null,"The role metadata field allows you to specify whether this invocation was done on behalf of a CI (continuous integration) system. If set, this enables features like Github commit status reporting (if a Github account is linked)."),(0,o.kt)("p",null,"For CI builds, you can add the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," and run your CI builds with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config=ci")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build:ci --build_metadata=ROLE=CI\n")),(0,o.kt)("p",null,"This role will automatically be populated if the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"CI")," is set, which it is in most CI systems like Github Actions, CircleCI, Travis, Gitlab CI, BuildKite, and others."),(0,o.kt)("h2",{id:"test-groups"},"Test groups"),(0,o.kt)("p",null,"If using Github commit status reporting, you can use the test groups metadata field to specify how tests are grouped in your Github commit statuses. Test groups are specified as a comma separated list of test path prefixes that should be grouped together."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --build_metadata=TEST_GROUPS=//foo/bar,//foo/baz\n")),(0,o.kt)("h2",{id:"visibility"},"Visibility"),(0,o.kt)("p",null,"The visibility metadata field determines who is allowed to view your build results. By default, unauthenticated builds are publicly visible to anyone with a link, while authenticated builds are only available to members of your organization."),(0,o.kt)("p",null,"You can override these default settings and make authenticated builds visible to anyone with a link by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --build_metadata=VISIBILITY=PUBLIC\n")),(0,o.kt)("h2",{id:"user"},"User"),(0,o.kt)("p",null,"By default a build's user is determined by the system on which Bazel is run."),(0,o.kt)("p",null,"You can override this using build metadata or workspace info."),(0,o.kt)("h3",{id:"build-metadata-3"},"Build metadata"),(0,o.kt)("p",null,"You can provide your user with Bazel's build_metadata flag with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"USER"),". You can do this by adding the flag to your bazel invocations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--build_metadata=USER=yourname\n")),(0,o.kt)("h3",{id:"workspace-info-3"},"Workspace info"),(0,o.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,o.kt)("p",null,"First, you'll need to point your ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,o.kt)("p",null,"Then you'll need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",(0,o.kt)("inlineCode",{parentName:"p"},"USER yourname"),"."),(0,o.kt)("h2",{id:"host"},"Host"),(0,o.kt)("p",null,"By default a build's host is determined by the system on which Bazel is run."),(0,o.kt)("p",null,"You can override this using build metadata or workspace info."),(0,o.kt)("h3",{id:"build-metadata-4"},"Build metadata"),(0,o.kt)("p",null,"You can provide your user with Bazel's build_metadata flag with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST"),". You can do this by adding the flag to your bazel invocations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--build_metadata=HOST=yourhost\n")),(0,o.kt)("h3",{id:"workspace-info-4"},"Workspace info"),(0,o.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,o.kt)("p",null,"First, you'll need to point your ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,o.kt)("p",null,"Then you'll need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST yourhost"),"."),(0,o.kt)("h2",{id:"pattern"},"Pattern"),(0,o.kt)("p",null,"By default a build's pattern is determined by bazel command that is run."),(0,o.kt)("p",null,"If the bazel command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bazel build //...\n")),(0,o.kt)("p",null,"The pattern would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//...\n")),(0,o.kt)("p",null,"You can override this using build metadata or workspace info."),(0,o.kt)("p",null,"This is generally only needed for advanced use cases where you want to display a more user friendly or information rich pattern in the UI than was originally used on the command line."),(0,o.kt)("h3",{id:"build-metadata-5"},"Build metadata"),(0,o.kt)("p",null,"You can provide a custom pattern with Bazel's build_metadata flag with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"PATTERN"),". You can do this by adding the flag to your bazel invocations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--build_metadata=PATTERN=yourpattern\n")),(0,o.kt)("h3",{id:"workspace-info-5"},"Workspace info"),(0,o.kt)("p",null,"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."),(0,o.kt)("p",null,"First, you'll need to point your ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status_command")," flag at a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file at the root of your workspace. You can do this by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --workspace_status_command=$(pwd)/workspace_status.sh\n")),(0,o.kt)("p",null,"Then you'll need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace_status.sh")," file to the root of your workspace that prints ",(0,o.kt)("inlineCode",{parentName:"p"},"PATTERN yourpattern"),"."),(0,o.kt)("h2",{id:"custom-links"},"Custom Links"),(0,o.kt)("p",null,"You can add custom links to the BuildBuddy overview page using the ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDBUDDY_LINKS")," build metadata flag. These links must be comma separated, and in the form ",(0,o.kt)("inlineCode",{parentName:"p"},"[link text](https://linkurl.com)"),". Urls must begin with either ",(0,o.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--build_metadata=BUILDBUDDY_LINKS="[Search Github](https://github.com/search),[GCP Dashboard](https://console.cloud.google.com/home/dashboard)"\n')),(0,o.kt)("h2",{id:"tags"},"Tags"),(0,o.kt)("p",null,"You can add multiple free-text tags to a build by passing a comma-separated string to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TAGS")," build metadata flag."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--build_metadata=TAGS="foo,bar,baz"\n')),(0,o.kt)("p",null,"You can filter by these tags on build history pages and the trends page. Note that when filtering by tags, you will not see in-progress and disconnected builds."),(0,o.kt)("h2",{id:"environment-variable-redacting"},"Environment variable redacting"),(0,o.kt)("p",null,"By default, all environment variables are redacted by BuildBuddy except for ",(0,o.kt)("inlineCode",{parentName:"p"},"USER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_ACTOR")," ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_RUN_ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_BUILD_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_JOB_ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCLE_REPOSITORY_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_REPOSITORY"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_REPO"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TRAVIS_REPO_SLUG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GIT_URL"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"CI_REPOSITORY_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REPO_URL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCLE_SHA1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_SHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_COMMIT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TRAVIS_COMMIT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GIT_COMMIT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_SHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMIT_SHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CI_RUNNER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCLE_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_HEAD_REF"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDKITE_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TRAVIS_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GIT_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CI_COMMIT_BRANCH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_REF"),", which are displayed in the BuildBuddy UI."),(0,o.kt)("p",null,"Redacted environment variables are displayed in the BuildBuddy UI as ",(0,o.kt)("inlineCode",{parentName:"p"},"<REDACTED>"),"."),(0,o.kt)("p",null,"You can optionally allow other environment variables to be displayed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALLOW_ENV")," metadata flag."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ALLOW_ENV")," metadata param accepts a comma separated list of allowed environment variables and supports trailing wildcards."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Don't redact the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=PATH\n")),(0,o.kt)("p",null,"Don't redact the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment or any environment variable beginning with ",(0,o.kt)("inlineCode",{parentName:"p"},"BAZEL_")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=PATH,BAZEL_*\n")),(0,o.kt)("p",null,"Don't redact any environment variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --build_metadata=ALLOW_ENV=*\n")))}k.isMDXComponent=!0}}]);