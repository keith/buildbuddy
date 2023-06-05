"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2026],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},u=void 0,c={unversionedId:"config",id:"config",title:"Configuring BuildBuddy",description:"BuildBuddy on-prem is configured using a yaml formatted configuration file.",source:"@site/../docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config.md",tags:[],version:"current",lastUpdatedBy:"Vadim Berezniker",lastUpdatedAt:1685987114,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Life of a Self Hosted Executor",permalink:"/docs/architecture-self-hosted-executor"},next:{title:"Samples",permalink:"/docs/config-samples"}},p={},d=[{value:"Command line flag",id:"command-line-flag",level:2},{value:"Docker",id:"docker",level:2},{value:"Option types",id:"option-types",level:2},{value:"Sample configuration files",id:"sample-configuration-files",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Flags",id:"flags",level:2},{value:"Environment variables",id:"environment-variables",level:2}],s={toc:d},f="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)(f,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/on-prem"},"BuildBuddy on-prem")," is configured using a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"yaml")," formatted configuration file."),(0,a.kt)("h2",{id:"command-line-flag"},"Command line flag"),(0,a.kt)("p",null,"On startup, BuildBuddy reads this config file which is specified using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--config_file")," flag. The config file is periodically re-read, although some options like enabling or disabling a cache require a restart to take effect."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"If you're running BuildBuddy in a Docker image - you can use Docker's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag")," to map a custom local config file to ",(0,a.kt)("inlineCode",{parentName:"p"},"/config.yaml")," in the Docker image."),(0,a.kt)("p",null,"Be sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH_TO_YOUR_LOCAL_CONFIG ")," with the path to your custom config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 -v /PATH_TO_YOUR_LOCAL_CONFIG/config.yaml:/config.yaml gcr.io/flame-public/buildbuddy-app-onprem:latest\n")),(0,a.kt)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network=host")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),(0,a.kt)("h2",{id:"option-types"},"Option types"),(0,a.kt)("p",null,"There are two types of config options: ",(0,a.kt)("em",{parentName:"p"},"Required"),", and ",(0,a.kt)("em",{parentName:"p"},"Optional"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required")," - BuildBuddy will not run without these."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional")," - They configure optional functionality. BuildBuddy will happily run without them.")),(0,a.kt)("h2",{id:"sample-configuration-files"},"Sample configuration files"),(0,a.kt)("p",null,"We maintain a list of ",(0,a.kt)("a",{parentName:"p",href:"/docs/config-samples"},"sample configuration files")," that you can copy and paste to get up and running quickly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-samples#running-locally-disk-only"},"Running locally (disk only)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-samples#running-with-mysql-and-in-memory-cache"},"Running with MySQL and in-memory cache"))),(0,a.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,a.kt)("p",null,"Here's a full list of BuildBuddy's configuration sections:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Required")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-app"},"App")," - basic app-level configuration options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-storage"},"Storage")," - options that determine where BuildBuddy stores build results."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-database"},"Database")," - options that determine where BuildBuddy stores build metadata.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-cache"},"Cache")," - configuration options for BuildBuddy's built-in Remote Build Cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-integrations"},"Integrations")," - configure integrations with other services."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-ssl"},"SSL")," - configure SSL/TLS certificates and setup."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-github"},"Github")," - configure your Github integration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-misc"},"Misc")," - miscellaneous configuration options.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enterprise only")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-auth"},"Auth")," - configure authentication providers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-api"},"API")," - configure BuildBuddy API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/config-org"},"Org")," - configure BuildBuddy Organization.")),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("p",null,"In addition to the config file, some BuildBuddy options (like port number) can only be configured via command line flags."),(0,a.kt)("p",null,"More information on these flags, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/config-flags"},"flags documentation"),"."),(0,a.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"Environment variables in the config file are expanded at runtime.\nYou only need to reference your environment variables like this ",(0,a.kt)("inlineCode",{parentName:"p"},"${ENV_VARIABLE}"),"."))}m.isMDXComponent=!0}}]);