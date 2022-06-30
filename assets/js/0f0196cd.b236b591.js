/*! For license information please see 0f0196cd.b236b591.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9333],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,l=o(e),u=1;u<arguments.length;u++){for(var p in a=Object(arguments[u]))r.call(a,p)&&(l[p]=a[p]);if(t){c=t(a);for(var f=0;f<c.length;f++)n.call(a,c[f])&&(l[c[f]]=a[c[f]])}}return l}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function k(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=k.prototype;var w=j.prototype=new O;w.constructor=j,n(w,k.prototype),w.isPureReactComponent=!0;var S={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:S.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g,E=[];function D(e,t,r,n){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case a:c=!0}}if(c)return r(n,e,""===t?"."+U(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+U(o=e[l],l);c+=R(o,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=b&&e[b]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=R(o=o.value,u=t+U(o,l++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function T(e,t,r){return null==e?0:R(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function B(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(C,"$&/")+"/"),T(e,q,t=D(t,i,n,o)),A(t)}var M={current:null};function I(){var e=M.current;if(null===e)throw Error(h(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,y=s["".concat(l,".").concat(d)]||s[d]||f[d]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4859:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(7462),o=r(3366),i=(r(7378),r(4137)),a=["components"],c={id:"config-app",title:"App Configuration",sidebar_label:"App"},l=void 0,u={unversionedId:"config-app",id:"config-app",title:"App Configuration",description:"Section",source:"@site/../docs/config-app.md",sourceDirName:".",slug:"/config-app",permalink:"/docs/config-app",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-app.md",tags:[],version:"current",lastUpdatedBy:"Siggi",lastUpdatedAt:1615320644,formattedLastUpdatedAt:"3/9/2021",frontMatter:{id:"config-app",title:"App Configuration",sidebar_label:"App"},sidebar:"someSidebar",previous:{title:"Samples",permalink:"/docs/config-samples"},next:{title:"Database",permalink:"/docs/config-database"}},p=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example section",id:"example-section",children:[],level:2}],f={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"section"},"Section"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app:")," The app section contains app-level options. ",(0,i.kt)("strong",{parentName:"p"},"Required")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build_buddy_url")," Configures the external URL where your BuildBuddy instance can be found. (Does not actually change the server address or port, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/config-flags"},"flags docs")," for information on how to configure ports)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"events_api_url")," Overrides the default build event protocol gRPC address shown by BuildBuddy on the configuration screen. (Does not actually change the server address)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cache_api_url")," Overrides the default remote cache protocol gRPC address shown by BuildBuddy on the configuration screen. (Does not actually change the server address)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"remote_execution_api_url")," Overrides the default remote execution protocol gRPC address shown by BuildBuddy on the configuration screen. (Does not actually change the server address)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default_to_dense_mode")," Enables Dense UI mode by default."))),(0,i.kt)("h2",{id:"example-section"},"Example section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://buildbuddy.acme.corp"\n')))}s.isMDXComponent=!0}}]);