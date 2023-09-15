"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[941],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),o=["components"],i={id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},c=void 0,l={unversionedId:"secrets",id:"secrets",title:"Secrets",description:"Secrets are encrypted environment variables associated with your",source:"@site/../docs/secrets.md",sourceDirName:".",slug:"/secrets",permalink:"/docs/secrets",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/secrets.md",tags:[],version:"current",lastUpdatedBy:"Vadim Berezniker",lastUpdatedAt:1694807209,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},sidebar:"someSidebar",previous:{title:"RBE Platforms",permalink:"/docs/rbe-platforms"},next:{title:"RBE with MicroVMs",permalink:"/docs/rbe-microvms"}},d={},u=[{value:"Why use secrets?",id:"why-use-secrets",level:2},{value:"Defining secrets",id:"defining-secrets",level:2},{value:"Getting secret values",id:"getting-secret-values",level:2},{value:"Bazel actions",id:"bazel-actions",level:3},{value:"Workflows",id:"workflows",level:3},{value:"Short-lived secrets",id:"short-lived-secrets",level:2},{value:"Security notes",id:"security-notes",level:2}],p={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Secrets are encrypted environment variables associated with your\nBuildBuddy organization. Secrets can be used in actions executed with\n",(0,s.kt)("a",{parentName:"p",href:"remote-build-execution"},"remote execution")," as well as ",(0,s.kt)("a",{parentName:"p",href:"workflows-introduction"},"BuildBuddy\nWorkflows"),"."),(0,s.kt)("p",null,"BuildBuddy encrypts secrets with a\n",(0,s.kt)("a",{parentName:"p",href:"https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"},"libsodium sealed box"),".\nSecrets are encrypted before they are sent to BuildBuddy's\nservers, and stay encrypted until they are used."),(0,s.kt)("h2",{id:"why-use-secrets"},"Why use secrets?"),(0,s.kt)("p",null,"Builds that are executed remotely on BuildBuddy's servers may occasionally\nneed access to an API key or other credentials. For example, you may want\nto ",(0,s.kt)("a",{parentName:"p",href:"rbe-platforms#passing-credentials-for-docker-images"},"pass credentials for a Docker image"),"."),(0,s.kt)("p",null,"Storing these sensitive parameters as plain environment variables is\nundesirable because those keys would be stored unencrypted in BuildBuddy's\nAction Cache. While BuildBuddy's cache requires authorization and is secured\nusing TLS, storing so many copies of the secret in cache increases attack\nsurface and increases the chance of accidentally exposing your own\ncredentials."),(0,s.kt)("p",null,"Secrets solve this problem by allowing sensitive keys to be stored in\nencrypted format separately from the actions themselves."),(0,s.kt)("h2",{id:"defining-secrets"},"Defining secrets"),(0,s.kt)("p",null,"Secrets can be added to your organization using the Secrets page in\n",(0,s.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/settings/org/secrets"},"settings"),"."),(0,s.kt)("p",null,"Secrets can be edited or deleted using the Secrets page. Once a secret\nis saved, its currently stored value cannot be viewed using the Secrets\npage."),(0,s.kt)("h2",{id:"getting-secret-values"},"Getting secret values"),(0,s.kt)("h3",{id:"bazel-actions"},"Bazel actions"),(0,s.kt)("p",null,"To opt a specific action into secrets, you can define the remote exec\nproperty ",(0,s.kt)("inlineCode",{parentName:"p"},"include-secrets=true"),". We recommend doing this per-action to\navoid exposing secrets to actions that do not need them."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'foo_library(\n    # ...\n    exec_properties = {\n        "include-secrets": "true",\n    }\n)\n')),(0,s.kt)("h3",{id:"workflows"},"Workflows"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"workflows-introduction"},"BuildBuddy workflows")," do not need additional\nconfiguration to use secrets; they receive secrets by default as long as\nthe workflow is being triggered on behalf of a trusted collaborator in the\nrepository."),(0,s.kt)("p",null,"Workflow secrets are accessed via environment variables, in the same way\nas normal Bazel actions shown above."),(0,s.kt)("h2",{id:"short-lived-secrets"},"Short-lived secrets"),(0,s.kt)("p",null,"For secrets that have a short Time To Live (TTL), BuildBuddy supports setting\nenvironment variables via special headers passed at the Bazel command line.\nHeaders are more secure than setting environment variables with Bazel,\nas they are not stored in the remote cache."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# For simple secrets\n--remote_exec_header=x-buildbuddy-platform.env-overrides=VAR_A=value_a,VAR_B=val_b\n\n## At execution time:\n> echo $VAR_A\nvalue_a\n> echo $VAR_B\nval_b\n\n---\n\n# For more complex secrets\n\n## First encode the secrets using base64,\n## making sure to include the entire \'KEY=VALUE\' pair\n> echo -n \'VAR_C={"a": 1, "b", 2}\' | base64\n> echo -n \'VAR_D=asdfa!@#C,+{}\' | base64\n\n## then use the base64-encoded strings in the `env-overrides-base64` header, comma separated.\n--remote_exec_header=x-buildbuddy-platform.env-overrides-base64=VkFSX0M9eyJhIjogMSwgImIiLCAyfQ==,VkFSX0Q9YXNkZmEhQCNDLCt7fQ==\n\n## At execution time:\n> echo $VAR_C\n{"a": 1, "b", 2}\n> echo $VAR_D\nasdfa!@#C,+{}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If multiple values are given with the same variable name, the last value will be used.\nIf a variable is specified in both ",(0,s.kt)("inlineCode",{parentName:"p"},"env-overrides")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"env-overrides-base64"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"env-overrides-base64")," will take priority.")),(0,s.kt)("p",null,"These secrets will be set as environment variables at action execution time,\noverriding the default environment variables on your container image as well as\nthe environment variables set by Bazel as part of the action configuration."),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Secrets may be cached as part of action results if not properly handled.\nAvoid printing secret values to the console or storing them in action outputs.")),(0,s.kt)("p",null,"Secrets that are passed through ",(0,s.kt)("inlineCode",{parentName:"p"},"env-overrides")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"env-overrides-base64")," headers\nare not subjected to ",(0,s.kt)("inlineCode",{parentName:"p"},"include-secrets")," control documented above."),(0,s.kt)("h2",{id:"security-notes"},"Security notes"),(0,s.kt)("p",null,"Secrets are encrypted on the client-side using\n",(0,s.kt)("a",{parentName:"p",href:"https://doc.libsodium.org/"},"libsodium"),", which is based on\n",(0,s.kt)("a",{parentName:"p",href:"http://nacl.cr.yp.to/"},"NaCl"),"."),(0,s.kt)("p",null,"The public key used to encrypt secrets is unique to each organization. The\nprivate key used to decrypt secrets is stored encrypted and only decrypted\nwhen used to unseal secrets."),(0,s.kt)("p",null,"Secrets are only stored in their encrypted form and are decrypted\non-demand for actions that opt in to receiving secrets."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Avoid printing secret values to your build logs or action outputs.")))}h.isMDXComponent=!0}}]);