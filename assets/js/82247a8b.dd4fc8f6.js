(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(7),a=(t(0),t(152)),o={id:"config",title:"Configuring BuildBuddy",sidebar_label:"Overview"},l={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"Configuring BuildBuddy",description:"BuildBuddy on-prem is configured using a yaml formatted configuration file.",source:"@site/../docs/config.md",slug:"/config",permalink:"/docs/config",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Prometheus Metrics",permalink:"/docs/prometheus-metrics"},next:{title:"Sample Configuration Files",permalink:"/docs/config-samples"}},c=[{value:"Command line flag",id:"command-line-flag",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Option types",id:"option-types",children:[]},{value:"Sample configuration files",id:"sample-configuration-files",children:[]},{value:"Configuration options",id:"configuration-options",children:[]},{value:"Flags",id:"flags",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}],u={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/on-prem"},"BuildBuddy on-prem")," is configured using a ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"yaml")," formatted configuration file."),Object(a.b)("h2",{id:"command-line-flag"},"Command line flag"),Object(a.b)("p",null,"On startup, BuildBuddy reads this config file which is specified using the ",Object(a.b)("inlineCode",{parentName:"p"},"--config_file")," flag. The config file is periodically re-read, although some options like enabling or disabling a cache require a restart to take effect."),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"If you're running BuildBuddy in a Docker image - you can use Docker's ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag")," to map a custom local config file to ",Object(a.b)("inlineCode",{parentName:"p"},"/config.yaml")," in the Docker image."),Object(a.b)("p",null,"Be sure to replace ",Object(a.b)("inlineCode",{parentName:"p"},"PATH_TO_YOUR_LOCAL_CONFIG ")," with the path to your custom config file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 -v /PATH_TO_YOUR_LOCAL_CONFIG/config.yaml:/config.yaml gcr.io/flame-public/buildbuddy-app-onprem:latest\n")),Object(a.b)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"--network=host")," ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",Object(a.b)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),Object(a.b)("h2",{id:"option-types"},"Option types"),Object(a.b)("p",null,"There are two types of config options: ",Object(a.b)("em",{parentName:"p"},"Required"),", and ",Object(a.b)("em",{parentName:"p"},"Optional"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Required")," - BuildBuddy will not run without these."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Optional")," - They configure optional functionality. BuildBuddy will happily run without them.")),Object(a.b)("h2",{id:"sample-configuration-files"},"Sample configuration files"),Object(a.b)("p",null,"We maintain a list of ",Object(a.b)("a",{parentName:"p",href:"/docs/config-samples"},"sample configuration files")," that you can copy and paste to get up and running quickly."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-samples#running-locally-disk-only"},"Running locally (disk only)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-samples#running-with-mysql-and-in-memory-cache"},"Running with MySQL and in-memory cache"))),Object(a.b)("h2",{id:"configuration-options"},"Configuration options"),Object(a.b)("p",null,"Here's a full list of BuildBuddy's configuration sections:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Required")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-app"},"App")," - basic app-level configuration options."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-storage"},"Storage")," - options that determine where BuildBuddy stores build results."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-database"},"Database")," - options that determine where BuildBuddy stores build metadata.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Optional")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-cache"},"Cache")," - configuration options for BuildBuddy's built-in Remote Build Cache."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-integrations"},"Integrations")," - configure integrations with other services."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-ssl"},"SSL")," - configure SSL/TLS certificates and setup."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-github"},"Github")," - configure your Github integration."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-misc"},"Misc")," - miscellaneous configuration options.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Enterprise only")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-auth"},"Auth")," - configure authentication providers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-api"},"API")," - configure BuildBuddy API."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/config-org"},"Org")," - configure BuildBuddy Organization.")),Object(a.b)("h2",{id:"flags"},"Flags"),Object(a.b)("p",null,"In addition to the config file, some BuildBuddy options (like port number) can only be configured via command line flags."),Object(a.b)("p",null,"More information on these flags, see our ",Object(a.b)("a",{parentName:"p",href:"/docs/config-flags"},"flags documentation"),"."),Object(a.b)("h2",{id:"environment-variables"},"Environment variables"),Object(a.b)("p",null,"Environment variables in the config file are expanded at runtime.\nYou only need to reference your environment variables like this ",Object(a.b)("inlineCode",{parentName:"p"},"${ENV_VARIABLE}"),"."))}p.isMDXComponent=!0},152:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(t),s=i,f=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return t?r.a.createElement(f,l(l({ref:n},u),{},{components:t})):r.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);