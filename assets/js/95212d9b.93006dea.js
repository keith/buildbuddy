/*! For license information please see 95212d9b.93006dea.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[700],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),u=1;u<arguments.length;u++){for(var c in i=Object(arguments[u]))n.call(i,c)&&(s[c]=i[c]);if(t){l=t(i);for(var d=0;d<l.length;d++)r.call(i,l[d])&&(s[l[d]]=i[l[d]])}}return s}},1535:function(e,t,n){var r=n(2525),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,c=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,k="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}function N(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=w.prototype;var C=v.prototype=new N;C.constructor=v,r(C,w.prototype),C.isPureReactComponent=!0;var x={current:null},B=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function z(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)B.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,j=[];function q(e,t,n,r){if(j.length){var a=j.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function T(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return n(r,e,""===t?"."+M(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=t+M(a=e[s],s);l+=T(a,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=k&&e[k]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),s=0;!(a=e.next()).done;)l+=T(a=a.value,u=t+M(a,s++),n,r);else if("object"===a)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function E(e,t,n){return null==e?0:T(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),E(e,A,t=q(t,o,r,a)),P(t)}var I={current:null};function D(){var e=I.current;if(null===e)throw Error(g(321));return e}},7378:function(e,t,n){n(1535)},4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8735:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7378),n(4137)),i=["components"],l={id:"workflows-config",title:"Workflows configuration",sidebar_label:"Workflows configuration"},s=void 0,u={unversionedId:"workflows-config",id:"workflows-config",title:"Workflows configuration",description:"Once you've linked your repo to BuildBuddy via",source:"@site/../docs/workflows-config.md",sourceDirName:".",slug:"/workflows-config",permalink:"/docs/workflows-config",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-config.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1668091772,formattedLastUpdatedAt:"11/10/2022",frontMatter:{id:"workflows-config",title:"Workflows configuration",sidebar_label:"Workflows configuration"},sidebar:"someSidebar",previous:{title:"Workflows setup",permalink:"/docs/workflows-setup"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c=[{value:"Configuring workflow actions and triggers",id:"configuring-workflow-actions-and-triggers",children:[{value:"Example config",id:"example-config",children:[],level:3}],level:2},{value:"Bazel configuration",id:"bazel-configuration",children:[{value:"Bazel version",id:"bazel-version",children:[],level:3},{value:"bazelrc",id:"bazelrc",children:[],level:3}],level:2},{value:"Mac configuration",id:"mac-configuration",children:[],level:2},{value:"buildbuddy.yaml schema",id:"buildbuddyyaml-schema",children:[{value:"<code>BuildBuddyConfig</code>",id:"buildbuddyconfig",children:[],level:3},{value:"<code>Action</code>",id:"action",children:[],level:3},{value:"<code>Triggers</code>",id:"triggers",children:[],level:3},{value:"<code>PushTrigger</code>",id:"pushtrigger",children:[],level:3},{value:"<code>PullRequestTrigger</code>",id:"pullrequesttrigger",children:[],level:3},{value:"<code>ResourceRequests</code>",id:"resourcerequests",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you've linked your repo to BuildBuddy via\n",(0,o.kt)("a",{parentName:"p",href:"/docs/workflows-setup"},"BuildBuddy workflows"),", BuildBuddy will automatically\nrun ",(0,o.kt)("inlineCode",{parentName:"p"},"bazel test //...")," on each push to your repo, reporting results to the\nBuildBuddy UI."),(0,o.kt)("p",null,"But you may wish to configure multiple test commands with different test\ntag filters, or run the same tests on multiple different platform\nconfigurations (running some tests on Linux, and some on macOS, for\nexample)."),(0,o.kt)("p",null,"This page describes how to configure your workflows beyond the default\nconfiguration."),(0,o.kt)("h2",{id:"configuring-workflow-actions-and-triggers"},"Configuring workflow actions and triggers"),(0,o.kt)("p",null,"BuildBuddy workflows can be configured using a file called\n",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml"),", which can be placed at the root of your git repo."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," consists of multiple ",(0,o.kt)("strong",{parentName:"p"},"actions"),". Each action describes\na list of bazel commands to be run in order, as well as the set of git\nevents that should trigger these commands."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," only takes effect after you\n",(0,o.kt)("a",{parentName:"p",href:"workflows-setup#enable-workflows-for-a-repo"},"enable workflows for the repo"),"."))),(0,o.kt)("h3",{id:"example-config"},"Example config"),(0,o.kt)("p",null,"You can copy this example config as a starting point for your own ",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - name: "Test all targets"\n    triggers:\n      push:\n        branches:\n          - "main" # <-- replace "main" with your main branch name\n      pull_request:\n        branches:\n          - "*"\n    bazel_commands:\n      - "test //..."\n')),(0,o.kt)("p",null,"This config is roughly equivalent to the default config that we use if you\ndo not have a ",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml"),"."),(0,o.kt)("h2",{id:"bazel-configuration"},"Bazel configuration"),(0,o.kt)("h3",{id:"bazel-version"},"Bazel version"),(0,o.kt)("p",null,"BuildBuddy runs each bazel command in your workflow with a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"bazelisk"),"-compatible wrapper so\nthat your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelversion")," file is respected."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelversion")," is missing, the latest version of Bazel is used. We\nalways recommend including a ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelversion")," in your repo to prevent\nproblems caused by using conflicting versions of Bazel in different build\nenvironments."),(0,o.kt)("h3",{id:"bazelrc"},"bazelrc"),(0,o.kt)("p",null,"BuildBuddy runs each bazel command directly in your workspace, which means\nthat your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," is respected. If you have lots of flags, we recommend\nadding them to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," instead of adding them to your ",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml"),"."),(0,o.kt)("p",null,"BuildBuddy also provides a ",(0,o.kt)("a",{parentName:"p",href:"https://bazel.build/docs/bazelrc"},(0,o.kt)("inlineCode",{parentName:"a"},"bazelrc")),"\nfile which passes these default options to each bazel invocation listed in\n",(0,o.kt)("inlineCode",{parentName:"p"},"bazel_commands"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--bes_backend")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--bes_results_url"),", so that the results from each\nBazel command are viewable with BuildBuddy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--remote_header=x-buildbuddy-api-key=YOUR_API_KEY"),", so that invocations\nare authenticated by default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--build_metadata=ROLE=CI"),", so that workflow invocations are tagged as\nCI invocations, and so that workflow tests are viewable in the test grid")),(0,o.kt)("p",null,"BuildBuddy's ",(0,o.kt)("inlineCode",{parentName:"p"},"bazelrc")," takes lower precedence than your workspace\n",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc"),". You can view the exact flags provided by this bazelrc by\ninspecting the command line details in the invocation page (look for\n",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.bazelrc"),")."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"BuildBuddy remote cache and remote execution (RBE) are not enabled by\ndefault for workflows, and require additional configuration. The\nconfiguration steps are the same as when running Bazel locally. See the\n",(0,o.kt)("strong",{parentName:"p"},"Quickstart")," page in the BuildBuddy UI."))),(0,o.kt)("h2",{id:"mac-configuration"},"Mac configuration"),(0,o.kt)("p",null,"By default, workflows will execute on BuildBuddy's Linux executors,\nbut it is also possible to run workflows on macOS by using self-hosted\nexecutors."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up one or more Mac executors that will be dedicated to running\nworkflows, following the steps in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/enterprise-mac-rbe"},"Enterprise\nMac RBE Setup")," guide."),(0,o.kt)("p",{parentName:"li"},"Then, in your ",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy-executor.plist")," file, find the\n",(0,o.kt)("inlineCode",{parentName:"p"},"EnvironmentVariables")," section and set ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_POOL")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"workflows"),". You'll\nalso need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"SYS_MEMORY_BYTES")," to allow enough memory to be\nused for workflows (a minimum of 8GB is required)."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        ...\n        <key>EnvironmentVariables</key>\n        <dict>\n            ...\n            \x3c!-- Set the required executor pool name for workflows --\x3e\n            <key>MY_POOL</key>\n            <string>workflows</string>\n            \x3c!-- Allocate 16GB of memory to workflows (8GB minimum) --\x3e\n            <key>SYS_MEMORY_BYTES</key>\n            <string>16000000000</string>\n        </dict>\n        ...\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you haven't already, ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflows-setup#enable-workflows-for-a-repo"},"enable workflows for your\nrepo"),", then create a\nfile called ",(0,o.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," at the root of your repo. See the\n",(0,o.kt)("a",{parentName:"p",href:"#example-config"},"Example config")," for a starting point.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},'os: "darwin"')," on the workflow action that you would like to build\non macOS. For Apple silicon (ARM-based) Macs, add ",(0,o.kt)("inlineCode",{parentName:"p"},'arch: "arm64"')," as\nwell. Note: if you copy another action as a starting point, be sure to\ngive the new action a unique name:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'actions:\n  - name: "Test all targets (Mac)"\n    os: "darwin" # <-- add this line\n    arch: "arm64" # <-- add this line for Apple silicon (ARM-based) Macs only\n    triggers:\n      push:\n        branches:\n          - "main"\n      pull_request:\n        branches:\n          - "*"\n    bazel_commands:\n      - "test //... --bes_backend=remote.buildbuddy.io --bes_results_url=https://app.buildbuddy.io/invocation/"\n')),(0,o.kt)("p",null,"That's it! Whenever any of the configured triggers are matched, one of\nthe Mac executors in the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflows")," pool should execute the\nworkflow, and BuildBuddy will publish the results to your branch."),(0,o.kt)("h2",{id:"buildbuddyyaml-schema"},"buildbuddy.yaml schema"),(0,o.kt)("h3",{id:"buildbuddyconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"BuildBuddyConfig")),(0,o.kt)("p",null,"The top-level BuildBuddy workflow config, which specifies bazel commands\nthat can be run on a repo, as well as the events that trigger those commands."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"actions"))," (",(0,o.kt)("a",{parentName:"li",href:"#action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action"))," list): List of actions that can be triggered by BuildBuddy.\nEach action corresponds to a separate check on GitHub.\nIf multiple actions are matched for a given event, the actions are run in\norder. If an action fails, subsequent actions will still be executed.")),(0,o.kt)("h3",{id:"action"},(0,o.kt)("inlineCode",{parentName:"h3"},"Action")),(0,o.kt)("p",null,"A named group of Bazel commands that run when triggered."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"name"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string"),"): A name unique to this config, which shows up as the name of the check\nin GitHub."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"triggers"))," (",(0,o.kt)("a",{parentName:"li",href:"#triggers"},(0,o.kt)("inlineCode",{parentName:"a"},"Triggers")),"): The triggers that should cause this action to be run."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"os"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string"),"): The operating system on which to run the workflow.\nDefaults to ",(0,o.kt)("inlineCode",{parentName:"li"},'"linux"'),". ",(0,o.kt)("inlineCode",{parentName:"li"},'"darwin"')," (macOS) is also supported, but\nrequires using self-hosted Mac executors running on a dedicated\n",(0,o.kt)("inlineCode",{parentName:"li"},"workflows")," pool."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"arch"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string"),"): The CPU architecture of the workflow runner.\nDefaults to ",(0,o.kt)("inlineCode",{parentName:"li"},'"amd64"'),". ",(0,o.kt)("inlineCode",{parentName:"li"},'"arm64"')," is also supported when running under\n",(0,o.kt)("inlineCode",{parentName:"li"},'os: "darwin"'),", but requires using self-hosted Apple silicon (ARM-based)\nMac executors running on a dedicated ",(0,o.kt)("inlineCode",{parentName:"li"},"workflows")," pool."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"resource_requests"))," (",(0,o.kt)("a",{parentName:"li",href:"#resourcerequests"},(0,o.kt)("inlineCode",{parentName:"a"},"ResourceRequests")),"):\nthe requested resources for this action."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"user"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string"),"): User to run the workflow as. For Linux workflows,\nthe user ",(0,o.kt)("inlineCode",{parentName:"li"},"buildbuddy")," can be specified here to ensure that the action\nruns as a non-root user, to accomodate certain Bazel actions that refuse\nto run as root (like ",(0,o.kt)("inlineCode",{parentName:"li"},"rules_hermetic_python"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"git_clean_exclude"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string")," list): List of directories within the\nworkspace that are excluded when running ",(0,o.kt)("inlineCode",{parentName:"li"},"git clean")," across actions that\nare executed in the same runner instance. This is an advanced option and\nis not recommended for most users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"bazel_workspace_dir"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string"),"): A subdirectory within the repo\ncontaining the bazel workspace for this action. By default, this is\nassumed to be the repo root directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"bazel_commands"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string")," list): Bazel commands to be run in order.\nIf a command fails, subsequent ones are not run, and the action is\nreported as failed. Otherwise, the action is reported as succeeded.\nEnvironment variables are expanded, which means that the bazel command\nline can reference ",(0,o.kt)("a",{parentName:"li",href:"/docs/secrets"},"secrets")," if the workflow execution\nis trusted.")),(0,o.kt)("h3",{id:"triggers"},(0,o.kt)("inlineCode",{parentName:"h3"},"Triggers")),(0,o.kt)("p",null,"Defines whether an action should run when a branch is pushed to the repo."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"push"))," (",(0,o.kt)("a",{parentName:"li",href:"#push-trigger"},(0,o.kt)("inlineCode",{parentName:"a"},"PushTrigger")),"): Configuration for push events associated with the repo.\nThis is mostly useful for reporting commit statuses that show up on the\nhome page of the repo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"pull_request"))," (",(0,o.kt)("a",{parentName:"li",href:"#pull-request-trigger"},(0,o.kt)("inlineCode",{parentName:"a"},"PullRequestTrigger")),"):\nConfiguration for pull request events associated with the repo.\nThis is required if you want to use BuildBuddy to report the status of\nthis action on pull requests, and optionally prevent pull requests from\nbeing merged if the action fails.")),(0,o.kt)("h3",{id:"pushtrigger"},(0,o.kt)("inlineCode",{parentName:"h3"},"PushTrigger")),(0,o.kt)("p",null,"Defines whether an action should execute when a branch is pushed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"branches"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string")," list): The branches that, when pushed to, will\ntrigger the action. This field accepts a simple wildcard character\n(",(0,o.kt)("inlineCode",{parentName:"li"},'"*"'),") as a possible value, which will match any branch.")),(0,o.kt)("h3",{id:"pullrequesttrigger"},(0,o.kt)("inlineCode",{parentName:"h3"},"PullRequestTrigger")),(0,o.kt)("p",null,"Defines whether an action should execute when a pull request (PR) branch is\npushed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"branches"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string")," list): The ",(0,o.kt)("em",{parentName:"li"},"target")," branches of a pull request.\nFor example, if this is set to ",(0,o.kt)("inlineCode",{parentName:"li"},'[ "v1", "v2" ]'),", then the associated\naction is only run when a PR wants to merge a branch ",(0,o.kt)("em",{parentName:"li"},"into")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"v1"),"\nbranch or the ",(0,o.kt)("inlineCode",{parentName:"li"},"v2")," branch. This field accepts a simple wildcard\ncharacter (",(0,o.kt)("inlineCode",{parentName:"li"},'"*"'),") as a possible value, which will match any branch.")),(0,o.kt)("h3",{id:"resourcerequests"},(0,o.kt)("inlineCode",{parentName:"h3"},"ResourceRequests")),(0,o.kt)("p",null,"Defines the requested resources for a workflow action."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"memory"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),"): Requested amount of memory for the\nworkflow action. Can be specified as an exact number of bytes, or a\nnumeric string containing an IEC unit abbreviation. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"8GB"),"\nrepresents ",(0,o.kt)("inlineCode",{parentName:"li"},"8 * (1024)^3")," bytes of memory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"cpu"))," (",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),"): Requested amount of CPU for the\nworkflow action. Can be specified as a number of CPU cores, or a numeric\nstring containing an ",(0,o.kt)("inlineCode",{parentName:"li"},"m")," suffix to represent thousandths of a CPU core.\nFor example: ",(0,o.kt)("inlineCode",{parentName:"li"},"8000m")," represents 8 CPU cores.")))}p.isMDXComponent=!0}}]);