"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1403],{4137:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return p}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),a=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):u(u({},t),e)),i},c=function(e){var t=a(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=a(i),p=o,m=b["".concat(d,".").concat(p)]||b[p]||s[p]||r;return i?n.createElement(m,u(u({ref:t},c),{},{components:i})):n.createElement(m,u({ref:t},c))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,u=new Array(r);u[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var a=2;a<r;a++)u[a]=i[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,i)}b.displayName="MDXCreateElement"},5501:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c}});var n=i(7462),o=i(3366),r=(i(7294),i(4137)),u=["components"],l={id:"rbe-github-actions",title:"RBE with GitHub Actions",sidebar_label:"RBE with GitHub Actions"},d=void 0,a={unversionedId:"rbe-github-actions",id:"rbe-github-actions",title:"RBE with GitHub Actions",description:"Using BuildBuddy with Github Actions is an easy way to get started using BuildBuddy with a CI system. For an even easier way to get started, see the BuildBuddy Workflows Setup Guide.",source:"@site/../docs/rbe-github-actions.md",sourceDirName:".",slug:"/rbe-github-actions",permalink:"/docs/rbe-github-actions",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-github-actions.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1679516534,formattedLastUpdatedAt:"3/22/2023",frontMatter:{id:"rbe-github-actions",title:"RBE with GitHub Actions",sidebar_label:"RBE with GitHub Actions"},sidebar:"someSidebar",previous:{title:"RBE with MicroVMs",permalink:"/docs/rbe-microvms"},next:{title:"RBE Executor Pools",permalink:"/docs/rbe-pools"}},c=[{value:"Setup instructions",id:"setup-instructions",children:[{value:"Workflow file",id:"workflow-file",children:[],level:3},{value:"Updating your .bazelrc",id:"updating-your-bazelrc",children:[],level:3},{value:"Github secrets",id:"github-secrets",children:[],level:3}],level:2},{value:"More",id:"more",children:[{value:"Github commit statuses",id:"github-commit-statuses",children:[],level:3},{value:"Visibility",id:"visibility",children:[],level:3},{value:"Remote build execution",id:"remote-build-execution",children:[],level:3}],level:2}],s={toc:c};function b(e){var t=e.components,i=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Using BuildBuddy with Github Actions is an easy way to get started using BuildBuddy with a CI system. For an even easier way to get started, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflows-setup"},"BuildBuddy Workflows Setup Guide"),"."),(0,r.kt)("h2",{id:"setup-instructions"},"Setup instructions"),(0,r.kt)("p",null,"There are three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a workflow file"),(0,r.kt)("li",{parentName:"ol"},"Update your ",(0,r.kt)("inlineCode",{parentName:"li"},".bazelrc")),(0,r.kt)("li",{parentName:"ol"},"Set up a GitHub Secret containing your BuildBuddy API key")),(0,r.kt)("h3",{id:"workflow-file"},"Workflow file"),(0,r.kt)("p",null,"All you have to do is create a file ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/main.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'name: CI\n\non:\n  push:\n    branches:\n      - master\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n    - name: Checkout\n      uses: actions/checkout@v3\n\n    - name: Install bazelisk\n      run: |\n        curl -LO "https://github.com/bazelbuild/bazelisk/releases/download/v1.1.0/bazelisk-linux-amd64"\n        mkdir -p "${GITHUB_WORKSPACE}/bin/"\n        mv bazelisk-linux-amd64 "${GITHUB_WORKSPACE}/bin/bazel"\n        chmod +x "${GITHUB_WORKSPACE}/bin/bazel"\n    - name: Build\n      run: |\n        "${GITHUB_WORKSPACE}/bin/bazel" build \\\n            --config=ci \\\n            --remote_header=x-buildbuddy-api-key=${{ secrets.BUILDBUDDY_ORG_API_KEY }} \\\n            //...\n    - name: Test\n      run: |\n        "${GITHUB_WORKSPACE}/bin/bazel" test \\\n            --config=ci \\\n            --remote_header=x-buildbuddy-api-key=${{ secrets.BUILDBUDDY_ORG_API_KEY }} \\\n            //...\n\n')),(0,r.kt)("h3",{id:"updating-your-bazelrc"},"Updating your .bazelrc"),(0,r.kt)("p",null,"You'll then need to add the following configuration to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build:ci --build_metadata=ROLE=CI\nbuild:ci --bes_results_url=https://app.buildbuddy.io/invocation/\nbuild:ci --bes_backend=grpcs://remote.buildbuddy.io\n")),(0,r.kt)("h3",{id:"github-secrets"},"Github secrets"),(0,r.kt)("p",null,"Finally, you'll need to create a GitHub Secret containing your BuildBuddy API Key."),(0,r.kt)("p",null,"You can get your BuildBuddy API key by logging in to your ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io"},"BuildBuddy account")," and visiting your ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/docs/setup/"},"Quickstart page"),"."),(0,r.kt)("p",null,"Add your BuildBuddy API Key as GitHub Secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILDBUDDY_ORG_API_KEY"),". For more information on setting up Github Secrets, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"click here"),"."),(0,r.kt)("h2",{id:"more"},"More"),(0,r.kt)("h3",{id:"github-commit-statuses"},"Github commit statuses"),(0,r.kt)("p",null,"If you'd like BuildBuddy to publish commit statuses to your repo, you can do so by ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io"},"logging in")," and clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Link Github Account")," in the user menu in the top right."),(0,r.kt)("h3",{id:"visibility"},"Visibility"),(0,r.kt)("p",null,"By default, authenticated builds are only visible to members of your BuildBuddy organization. If you'd like your BuildBuddy results pages to be visible to members outside of your organization, you can add the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build:ci --build_metadata=VISIBILITY=PUBLIC\n")),(0,r.kt)("h3",{id:"remote-build-execution"},"Remote build execution"),(0,r.kt)("p",null,"If you'd like to use BuildBuddy's Remote Build Execution capabilities in your CI workflow, you can add the following lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build:remote --remote_cache=grpcs://remote.buildbuddy.io\nbuild:remote --remote_executor=grpcs://remote.buildbuddy.io\nbuild:remote --remote_upload_local_results\nbuild:remote --host_platform=@buildbuddy_toolchain//:platform\nbuild:remote --platforms=@buildbuddy_toolchain//:platform\nbuild:remote --crosstool_top=@buildbuddy_toolchain//:toolchain\nbuild:remote --jobs=100\n\nbuild:ci --config=remote\n")),(0,r.kt)("p",null,"And the following lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},"WORKSPACE")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'http_archive(\n    name = "io_buildbuddy_buildbuddy_toolchain",\n    sha256 = "e899f235b36cb901b678bd6f55c1229df23fcbc7921ac7a3585d29bff2bf9cfd",\n    strip_prefix = "buildbuddy-toolchain-fd351ca8f152d66fc97f9d98009e0ae000854e8f",\n    urls = ["https://github.com/buildbuddy-io/buildbuddy-toolchain/archive/fd351ca8f152d66fc97f9d98009e0ae000854e8f.tar.gz"],\n)\n\nload("@io_buildbuddy_buildbuddy_toolchain//:deps.bzl", "buildbuddy_deps")\n\nbuildbuddy_deps()\n\nload("@io_buildbuddy_buildbuddy_toolchain//:rules.bzl", "buildbuddy")\n\nbuildbuddy(name = "buildbuddy_toolchain")\n')),(0,r.kt)("p",null,"If you're using Java, or have a complex project - you'll likely need to configure the toolchain flags a bit. For more information, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"Remote Build Execution guide"),"."))}b.isMDXComponent=!0}}]);