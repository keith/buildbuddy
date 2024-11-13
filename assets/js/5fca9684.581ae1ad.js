"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5863],{29848:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>r});var t=a(74848),d=a(28453);const n={id:"guide-metadata",title:"Build Metadata Guide",sidebar_label:"Build Metadata Guide"},o=void 0,s={id:"guide-metadata",title:"Build Metadata Guide",description:"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build.",source:"@site/../docs/guide-metadata.md",sourceDirName:".",slug:"/guide-metadata",permalink:"/docs/guide-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/guide-metadata.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1731515112e3,frontMatter:{id:"guide-metadata",title:"Build Metadata Guide",sidebar_label:"Build Metadata Guide"},sidebar:"someSidebar",previous:{title:"Authentication Guide",permalink:"/docs/guide-auth"},next:{title:"Customer-managed Encryption Keys",permalink:"/docs/cache-encryption-keys"}},l={},r=[{value:"Repository URL",id:"repository-url",level:2},{value:"Build metadata",id:"build-metadata",level:3},{value:"Workspace info",id:"workspace-info",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Git Branch",id:"git-branch",level:2},{value:"Build metadata",id:"build-metadata-1",level:3},{value:"Workspace info",id:"workspace-info-1",level:3},{value:"Environment variables",id:"environment-variables-1",level:3},{value:"Commit SHA",id:"commit-sha",level:2},{value:"Build metadata",id:"build-metadata-2",level:3},{value:"Workspace info",id:"workspace-info-2",level:3},{value:"Environment variables",id:"environment-variables-2",level:3},{value:"Role",id:"role",level:2},{value:"Test groups",id:"test-groups",level:2},{value:"Visibility",id:"visibility",level:2},{value:"User",id:"user",level:2},{value:"Build metadata",id:"build-metadata-3",level:3},{value:"Workspace info",id:"workspace-info-3",level:3},{value:"Host",id:"host",level:2},{value:"Build metadata",id:"build-metadata-4",level:3},{value:"Workspace info",id:"workspace-info-4",level:3},{value:"Pattern",id:"pattern",level:2},{value:"Build metadata",id:"build-metadata-5",level:3},{value:"Workspace info",id:"workspace-info-5",level:3},{value:"Custom Links",id:"custom-links",level:2},{value:"Tags",id:"tags",level:2},{value:"Environment variable redacting",id:"environment-variable-redacting",level:2},{value:"Examples",id:"examples",level:3}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Additional metadata can be sent up with your Bazel invocation to give BuildBuddy more information about your build."}),"\n",(0,t.jsx)(i.h2,{id:"repository-url",children:"Repository URL"}),"\n",(0,t.jsx)(i.p,{children:"BuildBuddy allows you to group invocations by the repository on which they were run. In order to perform this grouping, BuildBuddy needs the repository's git url. There are three ways of providing this information to BuildBuddy:"}),"\n",(0,t.jsx)(i.h3,{id:"build-metadata",children:"Build metadata"}),"\n",(0,t.jsxs)(i.p,{children:["The first method is simple - just provide the repo URL with Bazel's build_metadata flag with the key ",(0,t.jsx)(i.code,{children:"REPO_URL"}),". You can do this by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --build_metadata=REPO_URL=https://github.com/buildbuddy-io/buildbuddy.git\n"})}),"\n",(0,t.jsx)(i.h3,{id:"workspace-info",children:"Workspace info"}),"\n",(0,t.jsx)(i.p,{children:"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."}),"\n",(0,t.jsxs)(i.p,{children:["First, you'll need to point your ",(0,t.jsx)(i.code,{children:"workspace_status_command"})," flag at a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file at the root of your workspace. You can do this by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --workspace_status_command=$(pwd)/workspace_status.sh\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then you'll need to add a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file to the root of your workspace. You can copy the contents of ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh",children:"this one"}),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."]}),"\n",(0,t.jsx)(i.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsxs)(i.p,{children:["BuildBuddy will automatically pull your repo URL from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, Bitrise, or BuildKite. The environment variables currently supported are ",(0,t.jsx)(i.code,{children:"GITHUB_REPOSITORY"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_REPOSITORY_URL"}),", ",(0,t.jsx)(i.code,{children:"TRAVIS_REPO_SLUG"}),", ",(0,t.jsx)(i.code,{children:"GIT_URL"}),", ",(0,t.jsx)(i.code,{children:"CI_REPOSITORY_URL"}),", ",(0,t.jsx)(i.code,{children:"REPO_URL"}),", ",(0,t.jsx)(i.code,{children:"GIT_REPOSITORY_URL"}),", and ",(0,t.jsx)(i.code,{children:"BUILDKITE_REPO"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"git-branch",children:"Git Branch"}),"\n",(0,t.jsx)(i.p,{children:"BuildBuddy allows you to group invocations by the git branch on which they were run. In order to perform this grouping, BuildBuddy needs the branch name. There are three ways of providing this information to BuildBuddy:"}),"\n",(0,t.jsx)(i.h3,{id:"build-metadata-1",children:"Build metadata"}),"\n",(0,t.jsxs)(i.p,{children:["You can provide the current git branch with Bazel's build_metadata flag with the key ",(0,t.jsx)(i.code,{children:"BRANCH_NAME"}),". You can do this by adding the flag to your bazel invocations:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"--build_metadata=BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Note: you cannot add this particular flag to your ",(0,t.jsx)(i.code,{children:".bazelrc"})," file because it does not support parameter substitution. If you're looking for a solution that supports your ",(0,t.jsx)(i.code,{children:".bazelrc"})," file, try the Workspace info method below."]}),"\n",(0,t.jsx)(i.h3,{id:"workspace-info-1",children:"Workspace info"}),"\n",(0,t.jsx)(i.p,{children:"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."}),"\n",(0,t.jsxs)(i.p,{children:["First, you'll need to point your ",(0,t.jsx)(i.code,{children:"workspace_status_command"})," flag at a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file at the root of your workspace. You can do this by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --workspace_status_command=$(pwd)/workspace_status.sh\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then you'll need to add a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file to the root of your workspace. You can copy the contents of ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh",children:"this one"}),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."]}),"\n",(0,t.jsx)(i.h3,{id:"environment-variables-1",children:"Environment variables"}),"\n",(0,t.jsxs)(i.p,{children:["BuildBuddy will automatically pull your git branch from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, Bitrise, or BuildKite. The environment variables currently supported are ",(0,t.jsx)(i.code,{children:"GITHUB_REF"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_HEAD_REF"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"BITRISE_GIT_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"TRAVIS_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"GIT_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"CI_COMMIT_BRANCH"}),", and ",(0,t.jsx)(i.code,{children:"CI_MERGE_REQUEST_SOURCE_BRANCH_NAME"}),". Note that ",(0,t.jsx)(i.code,{children:"GITHUB_REF"})," will be ignored when it refers to a tag, or overridden by ",(0,t.jsx)(i.code,{children:"GITHUB_HEAD_REF"})," for pull requests."]}),"\n",(0,t.jsx)(i.h2,{id:"commit-sha",children:"Commit SHA"}),"\n",(0,t.jsx)(i.h3,{id:"build-metadata-2",children:"Build metadata"}),"\n",(0,t.jsxs)(i.p,{children:["You can provide the current commit SHA with Bazel's build_metadata flag with the key ",(0,t.jsx)(i.code,{children:"COMMIT_SHA"}),". You can do this by adding the flag to your bazel invocations:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"--build_metadata=COMMIT_SHA=$(git rev-parse HEAD)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Note: you cannot add this particular flag to your ",(0,t.jsx)(i.code,{children:".bazelrc"})," file because it does not support parameter substitution. If you're looking for a solution that supports your ",(0,t.jsx)(i.code,{children:".bazelrc"})," file, try the Workspace info method below."]}),"\n",(0,t.jsx)(i.h3,{id:"workspace-info-2",children:"Workspace info"}),"\n",(0,t.jsx)(i.p,{children:"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."}),"\n",(0,t.jsxs)(i.p,{children:["First, you'll need to point your ",(0,t.jsx)(i.code,{children:"workspace_status_command"})," flag at a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file at the root of your workspace. You can do this by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --workspace_status_command=$(pwd)/workspace_status.sh\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then you'll need to add a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file to the root of your workspace. You can copy the contents of ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh",children:"this one"}),". This will populate your repo url, git branch, commit sha, and other build metadata automatically for every invocation."]}),"\n",(0,t.jsx)(i.h3,{id:"environment-variables-2",children:"Environment variables"}),"\n",(0,t.jsxs)(i.p,{children:["BuildBuddy will automatically pull your commit SHA from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, Bitrise, or BuildKite. The environment variables currently supported are ",(0,t.jsx)(i.code,{children:"GITHUB_SHA"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_SHA1"}),", ",(0,t.jsx)(i.code,{children:"TRAVIS_COMMIT"}),", ",(0,t.jsx)(i.code,{children:"BITRISE_GIT_COMMIT"}),", ",(0,t.jsx)(i.code,{children:"VOLATILE_GIT_COMMIT"}),", ",(0,t.jsx)(i.code,{children:"CI_COMMIT_SHA"}),", ",(0,t.jsx)(i.code,{children:"COMMIT_SHA"})," and ",(0,t.jsx)(i.code,{children:"BUILDKITE_COMMIT"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"role",children:"Role"}),"\n",(0,t.jsx)(i.p,{children:"The role metadata field allows you to specify whether this invocation was done on behalf of a CI (continuous integration) system. If set, this enables features like Github commit status reporting (if a Github account is linked)."}),"\n",(0,t.jsxs)(i.p,{children:["For CI builds, you can add the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"})," and run your CI builds with the ",(0,t.jsx)(i.code,{children:"--config=ci"})," flag:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build:ci --build_metadata=ROLE=CI\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This role will automatically be populated if the environment variable ",(0,t.jsx)(i.code,{children:"CI"})," is set, which it is in most CI systems like Github Actions, CircleCI, Travis, Gitlab CI, BuildKite, Bitrise, and others."]}),"\n",(0,t.jsx)(i.h2,{id:"test-groups",children:"Test groups"}),"\n",(0,t.jsx)(i.p,{children:"If using Github commit status reporting, you can use the test groups metadata field to specify how tests are grouped in your Github commit statuses. Test groups are specified as a comma separated list of test path prefixes that should be grouped together."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --build_metadata=TEST_GROUPS=//foo/bar,//foo/baz\n"})}),"\n",(0,t.jsx)(i.h2,{id:"visibility",children:"Visibility"}),"\n",(0,t.jsx)(i.p,{children:"The visibility metadata field determines who is allowed to view your build results. By default, unauthenticated builds are publicly visible to anyone with a link, while authenticated builds are only available to members of your organization."}),"\n",(0,t.jsxs)(i.p,{children:["You can override these default settings and make authenticated builds visible to anyone with a link by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --build_metadata=VISIBILITY=PUBLIC\n"})}),"\n",(0,t.jsx)(i.h2,{id:"user",children:"User"}),"\n",(0,t.jsx)(i.p,{children:"By default a build's user is determined by the system on which Bazel is run."}),"\n",(0,t.jsxs)(i.p,{children:["BuildBuddy will automatically pull your username from environment variables if you're using a common CI platform like Github Actions, CircleCI, Travis, Jenkins, Gitlab CI, Bitrise, or BuildKite. The environment variables currently supported are ",(0,t.jsx)(i.code,{children:"USER"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_ACTOR"}),", ",(0,t.jsx)(i.code,{children:"GITLAB_USER_NAME"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_BUILD_CREATOR"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_USERNAME"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"You can override this using build metadata or workspace info."}),"\n",(0,t.jsx)(i.h3,{id:"build-metadata-3",children:"Build metadata"}),"\n",(0,t.jsxs)(i.p,{children:["You can provide your user with Bazel's build_metadata flag with the key ",(0,t.jsx)(i.code,{children:"USER"}),". You can do this by adding the flag to your bazel invocations:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"--build_metadata=USER=yourname\n"})}),"\n",(0,t.jsx)(i.h3,{id:"workspace-info-3",children:"Workspace info"}),"\n",(0,t.jsx)(i.p,{children:"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."}),"\n",(0,t.jsxs)(i.p,{children:["First, you'll need to point your ",(0,t.jsx)(i.code,{children:"workspace_status_command"})," flag at a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file at the root of your workspace. You can do this by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --workspace_status_command=$(pwd)/workspace_status.sh\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then you'll need to add a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file to the root of your workspace that prints ",(0,t.jsx)(i.code,{children:"USER yourname"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"host",children:"Host"}),"\n",(0,t.jsx)(i.p,{children:"By default a build's host is determined by the system on which Bazel is run."}),"\n",(0,t.jsx)(i.p,{children:"You can override this using build metadata or workspace info."}),"\n",(0,t.jsx)(i.h3,{id:"build-metadata-4",children:"Build metadata"}),"\n",(0,t.jsxs)(i.p,{children:["You can provide your user with Bazel's build_metadata flag with the key ",(0,t.jsx)(i.code,{children:"HOST"}),". You can do this by adding the flag to your bazel invocations:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"--build_metadata=HOST=yourhost\n"})}),"\n",(0,t.jsx)(i.h3,{id:"workspace-info-4",children:"Workspace info"}),"\n",(0,t.jsx)(i.p,{children:"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."}),"\n",(0,t.jsxs)(i.p,{children:["First, you'll need to point your ",(0,t.jsx)(i.code,{children:"workspace_status_command"})," flag at a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file at the root of your workspace. You can do this by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --workspace_status_command=$(pwd)/workspace_status.sh\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then you'll need to add a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file to the root of your workspace that prints ",(0,t.jsx)(i.code,{children:"HOST yourhost"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"pattern",children:"Pattern"}),"\n",(0,t.jsx)(i.p,{children:"By default a build's pattern is determined by bazel command that is run."}),"\n",(0,t.jsx)(i.p,{children:"If the bazel command is:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"bazel build //...\n"})}),"\n",(0,t.jsx)(i.p,{children:"The pattern would be:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"//...\n"})}),"\n",(0,t.jsx)(i.p,{children:"You can override this using build metadata or workspace info."}),"\n",(0,t.jsx)(i.p,{children:"This is generally only needed for advanced use cases where you want to display a more user friendly or information rich pattern in the UI than was originally used on the command line."}),"\n",(0,t.jsx)(i.h3,{id:"build-metadata-5",children:"Build metadata"}),"\n",(0,t.jsxs)(i.p,{children:["You can provide a custom pattern with Bazel's build_metadata flag with the key ",(0,t.jsx)(i.code,{children:"PATTERN"}),". You can do this by adding the flag to your bazel invocations:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"--build_metadata=PATTERN=yourpattern\n"})}),"\n",(0,t.jsx)(i.h3,{id:"workspace-info-5",children:"Workspace info"}),"\n",(0,t.jsx)(i.p,{children:"The second method is a little more involved, but allows you to populate multiple pieces of metadata at once."}),"\n",(0,t.jsxs)(i.p,{children:["First, you'll need to point your ",(0,t.jsx)(i.code,{children:"workspace_status_command"})," flag at a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file at the root of your workspace. You can do this by adding the following line to your ",(0,t.jsx)(i.code,{children:".bazelrc"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title=".bazelrc"',children:"build --workspace_status_command=$(pwd)/workspace_status.sh\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then you'll need to add a ",(0,t.jsx)(i.code,{children:"workspace_status.sh"})," file to the root of your workspace that prints ",(0,t.jsx)(i.code,{children:"PATTERN yourpattern"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"custom-links",children:"Custom Links"}),"\n",(0,t.jsxs)(i.p,{children:["You can add custom links to the BuildBuddy overview page using the ",(0,t.jsx)(i.code,{children:"BUILDBUDDY_LINKS"})," build metadata flag. These links must be comma separated, and in the form ",(0,t.jsx)(i.code,{children:"[link text](https://linkurl.com)"}),". Urls must begin with either ",(0,t.jsx)(i.code,{children:"http://"})," or ",(0,t.jsx)(i.code,{children:"https://"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'--build_metadata=BUILDBUDDY_LINKS="[Search Github](https://github.com/search),[GCP Dashboard](https://console.cloud.google.com/home/dashboard)"\n'})}),"\n",(0,t.jsx)(i.h2,{id:"tags",children:"Tags"}),"\n",(0,t.jsxs)(i.p,{children:["You can add multiple free-text tags to a build by passing a comma-separated string to the ",(0,t.jsx)(i.code,{children:"TAGS"})," build metadata flag."]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'--build_metadata=TAGS="foo,bar,baz"\n'})}),"\n",(0,t.jsx)(i.p,{children:"You can filter by these tags on build history pages and the trends page. Note that when filtering by tags, you will not see in-progress and disconnected builds."}),"\n",(0,t.jsx)(i.h2,{id:"environment-variable-redacting",children:"Environment variable redacting"}),"\n",(0,t.jsxs)(i.p,{children:["By default, all environment variables are redacted by BuildBuddy except for ",(0,t.jsx)(i.code,{children:"USER"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_ACTOR"}),", ",(0,t.jsx)(i.code,{children:"GITLAB_USER_NAME"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_BUILD_CREATOR"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_USERNAME"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_REPOSITORY"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_SHA"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_RUN_ID"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_BUILD_URL"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_JOB_ID"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_REPOSITORY_URL"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_REPOSITORY"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_REPO"}),", ",(0,t.jsx)(i.code,{children:"TRAVIS_REPO_SLUG"}),", ",(0,t.jsx)(i.code,{children:"GIT_REPOSITORY_URL"}),", ",(0,t.jsx)(i.code,{children:"GIT_URL"}),", ",(0,t.jsx)(i.code,{children:"CI_REPOSITORY_URL"}),", ",(0,t.jsx)(i.code,{children:"REPO_URL"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_SHA1"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_SHA"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_COMMIT"}),", ",(0,t.jsx)(i.code,{children:"TRAVIS_COMMIT"}),", ",(0,t.jsx)(i.code,{children:"BITRISE_GIT_COMMIT"}),", ",(0,t.jsx)(i.code,{children:"GIT_COMMIT"}),", ",(0,t.jsx)(i.code,{children:"CI_COMMIT_SHA"}),", ",(0,t.jsx)(i.code,{children:"COMMIT_SHA"}),", ",(0,t.jsx)(i.code,{children:"CI"}),", ",(0,t.jsx)(i.code,{children:"CI_RUNNER"}),", ",(0,t.jsx)(i.code,{children:"CIRCLE_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_HEAD_REF"}),", ",(0,t.jsx)(i.code,{children:"BUILDKITE_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"BITRISE_GIT_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"CI_MERGE_REQUEST_SOURCE_BRANCH_NAME"}),", ",(0,t.jsx)(i.code,{children:"TRAVIS_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"GIT_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"CI_COMMIT_BRANCH"}),", ",(0,t.jsx)(i.code,{children:"GITHUB_REF"}),", which are displayed in the BuildBuddy UI."]}),"\n",(0,t.jsxs)(i.p,{children:["Redacted environment variables are displayed in the BuildBuddy UI as ",(0,t.jsx)(i.code,{children:"<REDACTED>"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["You can optionally allow other environment variables to be displayed using the ",(0,t.jsx)(i.code,{children:"ALLOW_ENV"})," metadata flag."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"ALLOW_ENV"})," metadata param accepts a comma separated list of allowed environment variables and supports trailing wildcards."]}),"\n",(0,t.jsx)(i.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(i.p,{children:["Don't redact the ",(0,t.jsx)(i.code,{children:"PATH"})," environment variable:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"build --build_metadata=ALLOW_ENV=PATH\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Don't redact the ",(0,t.jsx)(i.code,{children:"PATH"})," environment or any environment variable beginning with ",(0,t.jsx)(i.code,{children:"BAZEL_"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"build --build_metadata=ALLOW_ENV=PATH,BAZEL_*\n"})}),"\n",(0,t.jsx)(i.p,{children:"Don't redact any environment variables."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"build --build_metadata=ALLOW_ENV=*\n"})})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,a)=>{a.d(i,{R:()=>o,x:()=>s});var t=a(96540);const d={},n=t.createContext(d);function o(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);