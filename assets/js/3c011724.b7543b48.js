/*! For license information please see 3c011724.b7543b48.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8515],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,u){for(var i,l,a=o(e),c=1;c<arguments.length;c++){for(var f in i=Object(arguments[c]))r.call(i,f)&&(a[f]=i[f]);if(t){l=t(i);for(var s=0;s<l.length;s++)n.call(i,l[s])&&(a[l[s]]=i[l[s]])}}return a}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=k.prototype;var w=j.prototype=new O;w.constructor=j,n(w,k.prototype),w.isPureReactComponent=!0;var x={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:i,ref:l,props:o,_owner:x.current}}function B(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var _=/\/+/g,C=[];function N(e,t,r,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case u:case i:l=!0}}if(l)return r(n,e,""===t?"."+$(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=t+$(o=e[a],a);l+=T(o,c,r,n)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=b&&e[b]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),a=0;!(o=e.next()).done;)l+=T(o=o.value,c=t+$(o,a++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function q(e,t,r){return null==e?0:T(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(B(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(_,"$&/")+"/"),q(e,D,t=N(t,u,n,o)),R(t)}var M={current:null};function I(){var e=M.current;if(null===e)throw Error(h(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,y=p["".concat(a,".").concat(d)]||p[d]||s[d]||u;return r?n.createElement(y,i(i({ref:t},f),{},{components:r})):n.createElement(y,i({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<u;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6497:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return f},default:function(){return p}});var n=r(7462),o=r(3366),u=(r(7378),r(4137)),i=["components"],l={id:"remote-build-execution",title:"Remote Build Execution",sidebar_label:"Remote Build Execution"},a=void 0,c={unversionedId:"remote-build-execution",id:"remote-build-execution",title:"Remote Build Execution",description:"BuildBuddy provides a highly scalable remote build execution service. It's available both as a fully managed cloud service or on-prem.",source:"@site/../docs/remote-build-execution.md",sourceDirName:".",slug:"/remote-build-execution",permalink:"/docs/remote-build-execution",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/remote-build-execution.md",tags:[],version:"current",lastUpdatedBy:"Siggi",lastUpdatedAt:1615320644,formattedLastUpdatedAt:"3/9/2021",frontMatter:{id:"remote-build-execution",title:"Remote Build Execution",sidebar_label:"Remote Build Execution"},sidebar:"someSidebar",previous:{title:"Build Metadata Guide",permalink:"/docs/guide-metadata"},next:{title:"Remote Build Execution Setup",permalink:"/docs/rbe-setup"}},f=[{value:"Getting started",id:"getting-started",children:[],level:2},{value:"Features",id:"features",children:[],level:2}],s={toc:f};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"BuildBuddy provides a highly scalable remote build execution service. It's available both as a fully managed cloud service or on-prem."),(0,u.kt)("h2",{id:"getting-started"},"Getting started"),(0,u.kt)("p",null,"To get started with BuildBuddy Cloud Remote Build Execution, check out our ",(0,u.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"getting started docs"),"."),(0,u.kt)("p",null,"If you're interested in BuildBuddy On-prem Remote Build Execution, ",(0,u.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/request-quote"},"request a quote"),"."),(0,u.kt)("h2",{id:"features"},"Features"),(0,u.kt)("p",null,"Supported features include:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Custom Docker image support"),(0,u.kt)("li",{parentName:"ul"},"Three-tier artifact caching"),(0,u.kt)("li",{parentName:"ul"},"Stateless, horizontally scalable architecture"),(0,u.kt)("li",{parentName:"ul"},"Automatic executor scaling"),(0,u.kt)("li",{parentName:"ul"},"mTLS authentication"),(0,u.kt)("li",{parentName:"ul"},"Build without bytes")))}p.isMDXComponent=!0}}]);