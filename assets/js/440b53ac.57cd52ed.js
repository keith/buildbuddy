"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7847],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),k=r,h=p["".concat(u,".").concat(k)]||p[k]||d[k]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2677:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),i=["components"],l={id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},u=void 0,s={unversionedId:"workflows-setup",id:"workflows-setup",title:"Workflows setup",description:"Workflows automatically build and test your code with",source:"@site/../docs/workflows-setup.md",sourceDirName:".",slug:"/workflows-setup",permalink:"/docs/workflows-setup",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-setup.md",tags:[],version:"current",lastUpdatedBy:"Brentley Jones",lastUpdatedAt:1679502689,formattedLastUpdatedAt:"3/22/2023",frontMatter:{id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},sidebar:"someSidebar",previous:{title:"Workflows introduction",permalink:"/docs/workflows-introduction"},next:{title:"Workflows configuration",permalink:"/docs/workflows-config"}},c=[{value:"Enable workflows for a repo",id:"enable-workflows-for-a-repo",children:[{value:"Method 1: Link a GitHub account",id:"method-1-link-a-github-account",children:[],level:3},{value:"Method 2: Use a personal access token",id:"method-2-use-a-personal-access-token",children:[],level:3}],level:2},{value:"Running workflows",id:"running-workflows",children:[],level:2},{value:"Configuring your workflow",id:"configuring-your-workflow",children:[],level:2},{value:"Setting up branch protection rules",id:"setting-up-branch-protection-rules",children:[],level:2},{value:"Building in the workflow runner environment",id:"building-in-the-workflow-runner-environment",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Workflows automatically build and test your code with\nBuildBuddy whenever a commit is pushed to your GitHub repo."),(0,a.kt)("p",null,"When combined with GitHub's branch protection rules, workflows can help prevent\nunwanted code (that doesn't build or pass tests) from being merged into the main branch."),(0,a.kt)("p",null,"Best of all, workflows let you run any Bazel commands you would like,\nso you can leverage all the same BuildBuddy features that you get when\nrunning Bazel locally, like the results UI, remote caching, remote execution."),(0,a.kt)("h2",{id:"enable-workflows-for-a-repo"},"Enable workflows for a repo"),(0,a.kt)("p",null,"There are two ways to enable workflows for a GitHub repository."),(0,a.kt)("h3",{id:"method-1-link-a-github-account"},"Method 1: Link a GitHub account"),(0,a.kt)("p",null,"BuildBuddy allows linking a GitHub account to your organization. When\nlinking repositories using your linked GitHub account, workflows will be\nauthorized using the GitHub access token associated with your linked\naccount."),(0,a.kt)("p",null,"If you have multiple members in your BuildBuddy organization, we recommend\nlinking a ",(0,a.kt)("strong",{parentName:"p"},"machine account")," rather than a personal account, since the\ntoken granted to the account may be accessed by other members of the\norganization."),(0,a.kt)("p",null,"The linked account must be an ",(0,a.kt)("strong",{parentName:"p"},"owner")," of any repositories that you would\nlike to link to BuildBuddy."),(0,a.kt)("p",null,"To link a GitHub account:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the ",(0,a.kt)("strong",{parentName:"li"},"Settings")," page in the BuildBuddy app."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"GitHub link")," tab."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Link GitHub account")," and follow the instructions to link an\naccount."),(0,a.kt)("li",{parentName:"ol"},"Once you've linked your account, click ",(0,a.kt)("strong",{parentName:"li"},"Workflows")," in the BuildBuddy\napp and select a repo to be linked to BuildBuddy.")),(0,a.kt)("p",null,"If you don't see the desired repo in the list, click ",(0,a.kt)("strong",{parentName:"p"},"Enter details\nmanually,")," and enter the repository URL. Leave the access token field\nblank to use the token associated with your linked account."),(0,a.kt)("h3",{id:"method-2-use-a-personal-access-token"},"Method 2: Use a personal access token"),(0,a.kt)("p",null,"You can also link a single GitHub repository by providing a personal access\ntoken to be used only for workflow executions for that repository."),(0,a.kt)("p",null,"If you have multiple members in your BuildBuddy organization, we recommend\ngenerating the access token using a ",(0,a.kt)("strong",{parentName:"p"},"machine account")," rather than your\npersonal account, since the token granted to the account may be accessed\nby other members of the organization."),(0,a.kt)("p",null,"The account used to generate the token must be an ",(0,a.kt)("strong",{parentName:"p"},"owner")," of the\nrepository that you are attempting to link."),(0,a.kt)("p",null,"To link a repository using a personal access token:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure that you are logged into GitHub using the desired account."),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens")),(0,a.kt)("li",{parentName:"ol"},"Generate a new ",(0,a.kt)("strong",{parentName:"li"},"classic")," token, granting all ",(0,a.kt)("strong",{parentName:"li"},"repo")," permissions\nas well as all ",(0,a.kt)("strong",{parentName:"li"},"admin:repo_hook")," permissions."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Workflows")," in the BuildBuddy app."),(0,a.kt)("li",{parentName:"ol"},"If you have a GitHub account already linked to your organization, you\nwill see a list of repositories accessible to the linked account. Click\n",(0,a.kt)("strong",{parentName:"li"},"Enter details manually")," to bypass this selection."),(0,a.kt)("li",{parentName:"ol"},"Enter the repository URL and personal access token, then click\n",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("h2",{id:"running-workflows"},"Running workflows"),(0,a.kt)("p",null,"Once a repository is linked, BuildBuddy will automatically run ",(0,a.kt)("inlineCode",{parentName:"p"},"bazel test //..."),' whenever a commit is pushed to your repo. It will report commit\nstatuses to GitHub, which you can see on the repo\'s home page or in pull\nrequest branches. The "Details" links in these statuses point to the\nBuildBuddy UI, where you can see the result of the workflow run.'),(0,a.kt)("h2",{id:"configuring-your-workflow"},"Configuring your workflow"),(0,a.kt)("p",null,"To learn how to change the default configuration, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/workflows-config"},"workflows configuration"),"."),(0,a.kt)("h2",{id:"setting-up-branch-protection-rules"},"Setting up branch protection rules"),(0,a.kt)("p",null,"After you have created a workflow and you've pushed at least one commit\nto the repo, you can configure your repo so that branches cannot be\nmerged unless the workflow succeeds."),(0,a.kt)("p",null,"To do this, go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Branches")," and find ",(0,a.kt)("strong",{parentName:"p"},"Branch protection rules"),".\nThen, you click ",(0,a.kt)("strong",{parentName:"p"},"Add rule")," (or edit an existing rule)."),(0,a.kt)("p",null,"Select the box ",(0,a.kt)("strong",{parentName:"p"},"Require status checks to pass before merging")," and enable\nthe check corresponding to the BuildBuddy workflow (by default, this should\nbe ",(0,a.kt)("strong",{parentName:"p"},"Test all targets"),")."),(0,a.kt)("p",null,"After you save your changes, pull requests will not be mergeable unless\nthe tests pass on BuildBuddy."),(0,a.kt)("h2",{id:"building-in-the-workflow-runner-environment"},"Building in the workflow runner environment"),(0,a.kt)("p",null,"BuildBuddy workflows execute using a Firecracker MicroVM on an Ubuntu\n18.04-based image, with some commonly used tools and libraries\npre-installed."),(0,a.kt)("p",null,"If you would like to test whether your build will succeed on\nBuildBuddy workflows without having to set up and trigger the workflow,\nyou can get a good approximation of the workflow VM environment by running\nthe image locally with Docker, cloning your Git repo, and invoking\n",(0,a.kt)("inlineCode",{parentName:"p"},"bazel")," to run your tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Start a new shell inside the workflows Ubuntu 18.04 environment (requires docker)\ndocker run --rm -it "gcr.io/flame-public/buildbuddy-ci-runner:latest"\n\n# Clone your repo and test it\ngit clone https://github.com/acme-inc/acme\ncd acme\nbazel test //...\n')),(0,a.kt)("p",null,"The Dockerfile we use to build the image (at ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD"),") is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/enterprise/dockerfiles/ci_runner_image/Dockerfile"},"here"),"."),(0,a.kt)("p",null,"If you plan to use the Ubuntu 20.04 image (requires ",(0,a.kt)("a",{parentName:"p",href:"workflows-config#linux-image-configuration"},"advanced configuration"),"), use\n",(0,a.kt)("inlineCode",{parentName:"p"},'"gcr.io/flame-public/rbe-ubuntu20-04-workflows:latest"')," in the command\nabove."))}p.isMDXComponent=!0}}]);