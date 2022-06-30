/*! For license information please see b6e40593.35e0b7c0.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[361],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var u,i,a=o(e),f=1;f<arguments.length;f++){for(var l in u=Object(arguments[f]))r.call(u,l)&&(a[l]=u[l]);if(t){i=t(u);for(var s=0;s<i.length;s++)n.call(u,i[s])&&(a[i[s]]=u[i[s]])}}return a}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var x=w.prototype=new j;x.constructor=w,n(x,O.prototype),x.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:c,type:e,key:u,ref:i,props:o,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g,$=[];function T(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function U(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case u:i=!0}}if(i)return r(n,e,""===t?"."+L(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=t+L(o=e[a],a);i+=U(o,f,r,n)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=m&&e[m]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),a=0;!(o=e.next()).done;)i+=U(o=o.value,f=t+L(o,a++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function A(e,t,r){return null==e?0:U(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?R(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function R(e,t,r,n,o){var c="";null!=r&&(c=(""+r).replace(C,"$&/")+"/"),A(e,M,t=T(t,c,n,o)),D(t)}var N={current:null};function H(){var e=N.current;if(null===e)throw Error(h(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),f=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=f(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(r),d=o,y=p["".concat(a,".").concat(d)]||p[d]||s[d]||c;return r?n.createElement(y,u(u({ref:t},l),{},{components:r})):n.createElement(y,u({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,u=new Array(c);u[0]=p;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var f=2;f<c;f++)u[f]=r[f];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7360:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return f},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),c=(r(7378),r(4137)),u=["components"],i={id:"architecture-self-hosted-executor",title:"Life of a Self Hosted Executor",sidebar_label:"Life of a Self Hosted Executor"},a=void 0,f={unversionedId:"architecture-self-hosted-executor",id:"architecture-self-hosted-executor",title:"Life of a Self Hosted Executor",description:"",source:"@site/../docs/architecture-self-hosted-executor.md",sourceDirName:".",slug:"/architecture-self-hosted-executor",permalink:"/docs/architecture-self-hosted-executor",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/architecture-self-hosted-executor.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1639759702,formattedLastUpdatedAt:"12/17/2021",frontMatter:{id:"architecture-self-hosted-executor",title:"Life of a Self Hosted Executor",sidebar_label:"Life of a Self Hosted Executor"},sidebar:"someSidebar",previous:{title:"Life of a Remote Execution",permalink:"/docs/architecture-remote-execution"},next:{title:"Overview",permalink:"/docs/config"}},l=[],s={toc:l};function p(e){var t=e.components,i=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(3098).Z})))}p.isMDXComponent=!0},3098:function(e,t,r){t.Z=r.p+"assets/images/architecture-self-hosted-executor-c5f77163d58cd258cb577dabd0adf1db.png"}}]);