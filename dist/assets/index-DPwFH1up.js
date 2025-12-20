(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function ug(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Hf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function Yv(){if(ax)return Mo;ax=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var rx;function jv(){return rx||(rx=1,Hf.exports=Yv()),Hf.exports}var V=jv(),Gf={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function Zv(){if(sx)return rt;sx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,b={};function v(U,ae,Se){this.props=U,this.context=ae,this.refs=b,this.updater=Se||T}v.prototype.isReactComponent={},v.prototype.setState=function(U,ae){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ae,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function B(){}B.prototype=v.prototype;function N(U,ae,Se){this.props=U,this.context=ae,this.refs=b,this.updater=Se||T}var F=N.prototype=new B;F.constructor=N,R(F,v.prototype),F.isPureReactComponent=!0;var X=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function w(U,ae,Se){var Ae=Se.ref;return{$$typeof:o,type:U,key:ae,ref:Ae!==void 0?Ae:null,props:Se}}function C(U,ae){return w(U.type,ae,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function ee(U){var ae={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Se){return ae[Se]})}var le=/\/+/g;function pe(U,ae){return typeof U=="object"&&U!==null&&U.key!=null?ee(""+U.key):ae.toString(36)}function de(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(ae){U.status==="pending"&&(U.status="fulfilled",U.value=ae)},function(ae){U.status==="pending"&&(U.status="rejected",U.reason=ae)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function z(U,ae,Se,Ae,Oe){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var se=!1;if(U===null)se=!0;else switch(ne){case"bigint":case"string":case"number":se=!0;break;case"object":switch(U.$$typeof){case o:case t:se=!0;break;case _:return se=U._init,z(se(U._payload),ae,Se,Ae,Oe)}}if(se)return Oe=Oe(U),se=Ae===""?"."+pe(U,0):Ae,X(Oe)?(Se="",se!=null&&(Se=se.replace(le,"$&/")+"/"),z(Oe,ae,Se,"",function(ke){return ke})):Oe!=null&&(k(Oe)&&(Oe=C(Oe,Se+(Oe.key==null||U&&U.key===Oe.key?"":(""+Oe.key).replace(le,"$&/")+"/")+se)),ae.push(Oe)),1;se=0;var Te=Ae===""?".":Ae+":";if(X(U))for(var Pe=0;Pe<U.length;Pe++)Ae=U[Pe],ne=Te+pe(Ae,Pe),se+=z(Ae,ae,Se,ne,Oe);else if(Pe=y(U),typeof Pe=="function")for(U=Pe.call(U),Pe=0;!(Ae=U.next()).done;)Ae=Ae.value,ne=Te+pe(Ae,Pe++),se+=z(Ae,ae,Se,ne,Oe);else if(ne==="object"){if(typeof U.then=="function")return z(de(U),ae,Se,Ae,Oe);throw ae=String(U),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return se}function Z(U,ae,Se){if(U==null)return U;var Ae=[],Oe=0;return z(U,Ae,"","",function(ne){return ae.call(Se,ne,Oe++)}),Ae}function j(U){if(U._status===-1){var ae=U._result;ae=ae(),ae.then(function(Se){(U._status===0||U._status===-1)&&(U._status=1,U._result=Se)},function(Se){(U._status===0||U._status===-1)&&(U._status=2,U._result=Se)}),U._status===-1&&(U._status=0,U._result=ae)}if(U._status===1)return U._result.default;throw U._result}var ge=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},ve={map:Z,forEach:function(U,ae,Se){Z(U,function(){ae.apply(this,arguments)},Se)},count:function(U){var ae=0;return Z(U,function(){ae++}),ae},toArray:function(U){return Z(U,function(ae){return ae})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return rt.Activity=g,rt.Children=ve,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(U,ae,Se){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=R({},U.props),Oe=U.key;if(ae!=null)for(ne in ae.key!==void 0&&(Oe=""+ae.key),ae)!te.call(ae,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ae.ref===void 0||(Ae[ne]=ae[ne]);var ne=arguments.length-2;if(ne===1)Ae.children=Se;else if(1<ne){for(var se=Array(ne),Te=0;Te<ne;Te++)se[Te]=arguments[Te+2];Ae.children=se}return w(U.type,Oe,Ae)},rt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},rt.createElement=function(U,ae,Se){var Ae,Oe={},ne=null;if(ae!=null)for(Ae in ae.key!==void 0&&(ne=""+ae.key),ae)te.call(ae,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Oe[Ae]=ae[Ae]);var se=arguments.length-2;if(se===1)Oe.children=Se;else if(1<se){for(var Te=Array(se),Pe=0;Pe<se;Pe++)Te[Pe]=arguments[Pe+2];Oe.children=Te}if(U&&U.defaultProps)for(Ae in se=U.defaultProps,se)Oe[Ae]===void 0&&(Oe[Ae]=se[Ae]);return w(U,ne,Oe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:h,render:U}},rt.isValidElement=k,rt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:j}},rt.memo=function(U,ae){return{$$typeof:p,type:U,compare:ae===void 0?null:ae}},rt.startTransition=function(U){var ae=O.T,Se={};O.T=Se;try{var Ae=U(),Oe=O.S;Oe!==null&&Oe(Se,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,ge)}catch(ne){ge(ne)}finally{ae!==null&&Se.types!==null&&(ae.types=Se.types),O.T=ae}},rt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},rt.use=function(U){return O.H.use(U)},rt.useActionState=function(U,ae,Se){return O.H.useActionState(U,ae,Se)},rt.useCallback=function(U,ae){return O.H.useCallback(U,ae)},rt.useContext=function(U){return O.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,ae){return O.H.useDeferredValue(U,ae)},rt.useEffect=function(U,ae){return O.H.useEffect(U,ae)},rt.useEffectEvent=function(U){return O.H.useEffectEvent(U)},rt.useId=function(){return O.H.useId()},rt.useImperativeHandle=function(U,ae,Se){return O.H.useImperativeHandle(U,ae,Se)},rt.useInsertionEffect=function(U,ae){return O.H.useInsertionEffect(U,ae)},rt.useLayoutEffect=function(U,ae){return O.H.useLayoutEffect(U,ae)},rt.useMemo=function(U,ae){return O.H.useMemo(U,ae)},rt.useOptimistic=function(U,ae){return O.H.useOptimistic(U,ae)},rt.useReducer=function(U,ae,Se){return O.H.useReducer(U,ae,Se)},rt.useRef=function(U){return O.H.useRef(U)},rt.useState=function(U){return O.H.useState(U)},rt.useSyncExternalStore=function(U,ae,Se){return O.H.useSyncExternalStore(U,ae,Se)},rt.useTransition=function(){return O.H.useTransition()},rt.version="19.2.1",rt}var ox;function fh(){return ox||(ox=1,Gf.exports=Zv()),Gf.exports}var kt=fh();const Kv=ug(kt);var Vf={exports:{}},Eo={},kf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function Qv(){return lx||(lx=1,(function(o){function t(z,Z){var j=z.length;z.push(Z);e:for(;0<j;){var ge=j-1>>>1,ve=z[ge];if(0<l(ve,Z))z[ge]=Z,z[j]=ve,j=ge;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],j=z.pop();if(j!==Z){z[0]=j;e:for(var ge=0,ve=z.length,U=ve>>>1;ge<U;){var ae=2*(ge+1)-1,Se=z[ae],Ae=ae+1,Oe=z[Ae];if(0>l(Se,j))Ae<ve&&0>l(Oe,Se)?(z[ge]=Oe,z[Ae]=j,ge=Ae):(z[ge]=Se,z[ae]=j,ge=ae);else if(Ae<ve&&0>l(Oe,j))z[ge]=Oe,z[Ae]=j,ge=Ae;else break e}}return Z}function l(z,Z){var j=z.sortIndex-Z.sortIndex;return j!==0?j:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,S=3,y=!1,T=!1,R=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function F(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function X(z){if(R=!1,F(z),!T)if(i(m)!==null)T=!0,L||(L=!0,ee());else{var Z=i(p);Z!==null&&de(X,Z.startTime-z)}}var L=!1,O=-1,te=5,w=-1;function C(){return b?!0:!(o.unstable_now()-w<te)}function k(){if(b=!1,L){var z=o.unstable_now();w=z;var Z=!0;try{e:{T=!1,R&&(R=!1,B(O),O=-1),y=!0;var j=S;try{t:{for(F(z),g=i(m);g!==null&&!(g.expirationTime>z&&C());){var ge=g.callback;if(typeof ge=="function"){g.callback=null,S=g.priorityLevel;var ve=ge(g.expirationTime<=z);if(z=o.unstable_now(),typeof ve=="function"){g.callback=ve,F(z),Z=!0;break t}g===i(m)&&r(m),F(z)}else r(m);g=i(m)}if(g!==null)Z=!0;else{var U=i(p);U!==null&&de(X,U.startTime-z),Z=!1}}break e}finally{g=null,S=j,y=!1}Z=void 0}}finally{Z?ee():L=!1}}}var ee;if(typeof N=="function")ee=function(){N(k)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,pe=le.port2;le.port1.onmessage=k,ee=function(){pe.postMessage(null)}}else ee=function(){v(k,0)};function de(z,Z){O=v(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var j=S;S=Z;try{return z()}finally{S=j}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=S;S=z;try{return Z()}finally{S=j}},o.unstable_scheduleCallback=function(z,Z,j){var ge=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ge+j:ge):j=ge,z){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=j+ve,z={id:_++,callback:Z,priorityLevel:z,startTime:j,expirationTime:ve,sortIndex:-1},j>ge?(z.sortIndex=j,t(p,z),i(m)===null&&z===i(p)&&(R?(B(O),O=-1):R=!0,de(X,j-ge))):(z.sortIndex=ve,t(m,z),T||y||(T=!0,L||(L=!0,ee()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var Z=S;return function(){var j=S;S=Z;try{return z.apply(this,arguments)}finally{S=j}}}})(Xf)),Xf}var cx;function Jv(){return cx||(cx=1,kf.exports=Qv()),kf.exports}var Wf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function $v(){if(ux)return Dn;ux=1;var o=fh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Dn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.1",Dn}var fx;function eS(){if(fx)return Wf.exports;fx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wf.exports=$v(),Wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function tS(){if(dx)return Eo;dx=1;var o=Jv(),t=fh(),i=eS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case X:return"Suspense";case L:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case N:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case te:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var de=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},ge=[],ve=-1;function U(e){return{current:e}}function ae(e){0>ve||(e.current=ge[ve],ge[ve]=null,ve--)}function Se(e,n){ve++,ge[ve]=e.current,e.current=n}var Ae=U(null),Oe=U(null),ne=U(null),se=U(null);function Te(e,n){switch(Se(ne,n),Se(Oe,e),Se(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rm(n),e=Cm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Ae),Se(Ae,e)}function Pe(){ae(Ae),ae(Oe),ae(ne)}function ke(e){e.memoizedState!==null&&Se(se,e);var n=Ae.current,a=Cm(n,e.type);n!==a&&(Se(Oe,e),Se(Ae,a))}function lt(e){Oe.current===e&&(ae(Ae),ae(Oe)),se.current===e&&(ae(se),vo._currentValue=j)}var tn,dt;function Tt(e){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+e+dt}var I=!1;function ht(e,n){if(!e||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(oe){var ie=oe}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(oe){ie=oe}e.call(xe.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var P=x.split(`
`),J=E.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===J.length)for(s=P.length-1,c=J.length-1;1<=s&&0<=c&&P[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==J[c]){var fe=`
`+P[s].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Tt(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return Tt("Activity");default:return""}}function Ot(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ge=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,je=o.unstable_cancelCallback,at=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,qe=o.unstable_LowPriority,Ne=o.unstable_IdlePriority,Qe=o.log,We=o.unstable_setDisableYieldValue,ye=null,Ee=null;function Ye(e){if(typeof Qe=="function"&&We(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ye,e)}catch{}}var Ve=Math.clz32?Math.clz32:H,ze=Math.log,nt=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(ze(e)/nt|0)|0}var De=256,Ce=262144,we=4194304;function Me(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Me(s):(x&=E,x!==0?c=Me(x):a||(a=E&~e,a!==0&&(c=Me(a))))):(E=s&~f,E!==0?c=Me(E):x!==0?c=Me(x):a||(a=s&~e,a!==0&&(c=Me(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Fe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xn(e,n,a,s,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=x&~a;0<a;){var fe=31-Ve(a),xe=1<<fe;E[fe]=0,P[fe]=-1;var ie=J[fe];if(ie!==null)for(J[fe]=null,fe=0;fe<ie.length;fe++){var oe=ie[fe];oe!==null&&(oe.lane&=-536870913)}a&=~xe}s!==0&&Vo(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Vo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ve(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ds(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ve(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Us(e,n){var a=n&-n;return a=(a&42)!==0?1:pi(a),(a&(e.suspendedLanes|n))!==0?0:a}function pi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ns(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Qm(e.type))}function Ls(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var Wn=Math.random().toString(36).slice(2),on="__reactFiber$"+Wn,hn="__reactProps$"+Wn,Li="__reactContainer$"+Wn,Cr="__reactEvents$"+Wn,Lc="__reactListeners$"+Wn,Oc="__reactHandles$"+Wn,ko="__reactResources$"+Wn,Ja="__reactMarker$"+Wn;function Os(e){delete e[on],delete e[hn],delete e[Cr],delete e[Lc],delete e[Oc]}function pa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zm(e);e!==null;){if(a=e[on])return a;e=zm(e)}return n}e=a,a=e.parentNode}return null}function A(e){if(e=e[on]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function re(e){var n=e[ko];return n||(n=e[ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(e){e[Ja]=!0}var Y=new Set,Re={};function Ue(e,n){Be(e,n),Be(e+"Capture",n)}function Be(e,n){for(Re[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ge.call(tt,e)?!0:Ge.call($e,e)?!1:Ie.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ct(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Et(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Rt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=Nt(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function bt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Nt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function Yt(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,s,c,f,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+St(n)):e.value!==""+St(n)&&(e.value=""+St(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,x,St(n)):a!=null?Sn(e,x,St(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+St(E):e.removeAttribute("name")}function jt(e,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+St(a):"",n=n!=null?""+St(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Wt(e)}function Sn(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+St(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+St(a):""}function En(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(de(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=St(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Wt(e)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Th(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Eh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Eh(e,f,n[f])}function zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return Xg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Pc=null;function Bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function Ah(e){var n=A(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[hn]||null;if(!c)throw Error(r(90));Oi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&bt(s)}break e;case"textarea":bn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pn(e,!!a.multiple,n,!1)}}}var Fc=!1;function Rh(e,n,a){if(Fc)return e(n,a);Fc=!0;try{var s=e(n);return s}finally{if(Fc=!1,(wr!==null||Dr!==null)&&(Ul(),wr&&(n=wr,e=Dr,Dr=wr=null,Ah(n),e)))for(n=0;n<e.length;n++)Ah(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[hn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Bi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Ic=!1}var xa=null,Hc=null,Wo=null;function Ch(){if(Wo)return Wo;var e,n=Hc,a=n.length,s,c="value"in xa?xa.value:xa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Wo=c.slice(e,1<s?1-s:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function wh(){return!1}function Pn(e){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Pn($a),Bs=g({},$a,{view:0,detail:0}),Wg=Pn(Bs),Gc,Vc,Fs,Zo=g({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(Gc=e.screenX-Fs.screenX,Vc=e.screenY-Fs.screenY):Vc=Gc=0,Fs=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),Dh=Pn(Zo),qg=g({},Zo,{dataTransfer:0}),Yg=Pn(qg),jg=g({},Bs,{relatedTarget:0}),kc=Pn(jg),Zg=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=Pn(Zg),Qg=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jg=Pn(Qg),$g=g({},$a,{data:0}),Uh=Pn($g),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=n_[e])?!!n[e]:!1}function Xc(){return i_}var a_=g({},Bs,{key:function(e){if(e.key){var n=e_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r_=Pn(a_),s_=g({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=Pn(s_),o_=g({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),l_=Pn(o_),c_=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=Pn(c_),f_=g({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d_=Pn(f_),h_=g({},$a,{newState:0,oldState:0}),p_=Pn(h_),m_=[9,13,27,32],Wc=Bi&&"CompositionEvent"in window,Is=null;Bi&&"documentMode"in document&&(Is=document.documentMode);var x_=Bi&&"TextEvent"in window&&!Is,Lh=Bi&&(!Wc||Is&&8<Is&&11>=Is),Oh=" ",zh=!1;function Ph(e,n){switch(e){case"keyup":return m_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function g_(e,n){switch(e){case"compositionend":return Bh(n);case"keypress":return n.which!==32?null:(zh=!0,Oh);case"textInput":return e=n.data,e===Oh&&zh?null:e;default:return null}}function __(e,n){if(Ur)return e==="compositionend"||!Wc&&Ph(e,n)?(e=Ch(),Wo=Hc=xa=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lh&&n.locale!=="ko"?null:n.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!v_[e.type]:n==="textarea"}function Ih(e,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Fl(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function S_(e){bm(e,0)}function Ko(e){var n=W(e);if(bt(n))return e}function Hh(e,n){if(e==="change")return n}var Gh=!1;if(Bi){var qc;if(Bi){var Yc="oninput"in document;if(!Yc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),Yc=typeof Vh.oninput=="function"}qc=Yc}else qc=!1;Gh=qc&&(!document.documentMode||9<document.documentMode)}function kh(){Hs&&(Hs.detachEvent("onpropertychange",Xh),Gs=Hs=null)}function Xh(e){if(e.propertyName==="value"&&Ko(Gs)){var n=[];Ih(n,Gs,e,Bc(e)),Rh(S_,n)}}function b_(e,n,a){e==="focusin"?(kh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Xh)):e==="focusout"&&kh()}function y_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Gs)}function M_(e,n){if(e==="click")return Ko(n)}function E_(e,n){if(e==="input"||e==="change")return Ko(n)}function T_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:T_;function Vs(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ge.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function Wh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qh(e,n){var a=Wh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wh(a)}}function Yh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var A_=Bi&&"documentMode"in document&&11>=document.documentMode,Nr=null,Zc=null,ks=null,Kc=!1;function Zh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Nr==null||Nr!==vn(s)||(s=Nr,"selectionStart"in s&&jc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Fl(Zc,"onSelect"),0<s.length&&(n=new jo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Nr)))}function er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Qc={},Kh={};Bi&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function tr(e){if(Qc[e])return Qc[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kh)return Qc[e]=n[a];return e}var Qh=tr("animationend"),Jh=tr("animationiteration"),$h=tr("animationstart"),R_=tr("transitionrun"),C_=tr("transitionstart"),w_=tr("transitioncancel"),ep=tr("transitionend"),tp=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function mi(e,n){tp.set(e,n),Ue(n,[e])}var Qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Or=0,$c=0;function Jo(){for(var e=Or,n=$c=Or=0;n<e;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&np(a,c,f)}}function $o(e,n,a,s){ii[Or++]=e,ii[Or++]=n,ii[Or++]=a,ii[Or++]=s,$c|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function eu(e,n,a,s){return $o(e,n,a,s),el(e)}function nr(e,n){return $o(e,null,null,n),el(e)}function np(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ve(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function el(e){if(50<fo)throw fo=0,uf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function D_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,s){return new D_(e,n,a,s)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ip(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tl(e,n,a,s,c,f){var x=0;if(s=e,typeof e=="function")tu(e)&&(x=1);else if(typeof e=="string")x=zv(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Yn(31,a,n,c),e.elementType=w,e.lanes=f,e;case R:return ir(a.children,c,f,n);case b:x=8,c|=24;break;case v:return e=Yn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case X:return e=Yn(13,a,n,c),e.elementType=X,e.lanes=f,e;case L:return e=Yn(19,a,n,c),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break e;case B:x=9;break e;case F:x=11;break e;case O:x=14;break e;case te:x=16,s=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Yn(x,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ir(e,n,a,s){return e=Yn(7,e,s,n),e.lanes=a,e}function nu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function ap(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function iu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},rp.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var Pr=[],Br=0,nl=null,Xs=0,ri=[],si=0,ga=null,Ti=1,Ai="";function Ii(e,n){Pr[Br++]=Xs,Pr[Br++]=nl,nl=e,Xs=n}function sp(e,n,a){ri[si++]=Ti,ri[si++]=Ai,ri[si++]=ga,ga=e;var s=Ti;e=Ai;var c=32-Ve(s)-1;s&=~(1<<c),a+=1;var f=32-Ve(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ti=1<<32-Ve(n)+c|a<<c|s,Ai=f+e}else Ti=1<<f|a<<c|s,Ai=e}function au(e){e.return!==null&&(Ii(e,1),sp(e,1,0))}function ru(e){for(;e===nl;)nl=Pr[--Br],Pr[Br]=null,Xs=Pr[--Br],Pr[Br]=null;for(;e===ga;)ga=ri[--si],ri[si]=null,Ai=ri[--si],ri[si]=null,Ti=ri[--si],ri[si]=null}function op(e,n){ri[si++]=Ti,ri[si++]=Ai,ri[si++]=ga,Ti=n.id,Ai=n.overflow,ga=e}var Tn=null,Zt=null,yt=!1,_a=null,oi=!1,su=Error(r(519));function va(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ai(n,e)),su}function lp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[on]=e,n[hn]=s,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)gt(po[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),jt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),En(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Tm(n.textContent,a)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||va(e,!0)}function cp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Tn=Tn.return}}function Fr(e){if(e!==Tn)return!1;if(!yt)return cp(e),yt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Tf(e.type,e.memoizedProps)),a=!a),a&&Zt&&va(e),cp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=Om(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=Om(e)}else n===27?(n=Zt,La(e.type)?(e=Df,Df=null,Zt=e):Zt=n):Zt=Tn?ci(e.stateNode.nextSibling):null;return!0}function ar(){Zt=Tn=null,yt=!1}function ou(){var e=_a;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),_a=null),e}function Ws(e){_a===null?_a=[e]:_a.push(e)}var lu=U(null),rr=null,Hi=null;function Sa(e,n,a){Se(lu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=lu.current,ae(lu)}function cu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function uu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),cu(f.return,a,e),s||(x=null);break e}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),cu(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ir(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;qn(c.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(c===se.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}c=c.return}e!==null&&uu(n,e,a,s),n.flags|=262144}function il(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return up(rr,e)}function al(e,n){return rr===null&&sr(e),up(e,n)}function up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var U_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},N_=o.unstable_scheduleCallback,L_=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new U_,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&N_(L_,function(){e.controller.abort()})}var Ys=null,du=0,Hr=0,Gr=null;function O_(e,n){if(Ys===null){var a=Ys=[];du=0,Hr=xf(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,n.then(fp,fp),n}function fp(){if(--du===0&&Ys!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ys;Ys=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function z_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var dp=z.S;z.S=function(e,n){Z0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&O_(e,n),dp!==null&&dp(e,n)};var or=U(null);function hu(){var e=or.current;return e!==null?e:qt.pooledCache}function rl(e,n){n===null?Se(or,or.current):Se(or,n.pool)}function hp(){var e=hu();return e===null?null:{parent:ln._currentValue,pool:e}}var Vr=Error(r(460)),pu=Error(r(474)),sl=Error(r(542)),ol={then:function(){}};function pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=qt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e}throw cr=n,Vr}}function lr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cr=a,Vr):a}}var cr=null;function xp(){if(cr===null)throw Error(r(459));var e=cr;return cr=null,e}function gp(e){if(e===Vr||e===sl)throw Error(r(483))}var kr=null,js=0;function ll(e){var n=js;return js+=1,kr===null&&(kr=[]),mp(kr,e,n)}function Zs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function cl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _p(e){function n(q,G){if(e){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function a(q,G){if(!e)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Fi(q,G),q.index=0,q.sibling=null,q}function f(q,G,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=67108866,G):K):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function x(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function E(q,G,K,he){return G===null||G.tag!==6?(G=nu(K,q.mode,he),G.return=q,G):(G=c(G,K),G.return=q,G)}function P(q,G,K,he){var Ke=K.type;return Ke===R?fe(q,G,K.props.children,he,K.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===te&&lr(Ke)===G.type)?(G=c(G,K.props),Zs(G,K),G.return=q,G):(G=tl(K.type,K.key,K.props,null,q.mode,he),Zs(G,K),G.return=q,G)}function J(q,G,K,he){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=iu(K,q.mode,he),G.return=q,G):(G=c(G,K.children||[]),G.return=q,G)}function fe(q,G,K,he,Ke){return G===null||G.tag!==7?(G=ir(K,q.mode,he,Ke),G.return=q,G):(G=c(G,K),G.return=q,G)}function xe(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=nu(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return K=tl(G.type,G.key,G.props,null,q.mode,K),Zs(K,G),K.return=q,K;case T:return G=iu(G,q.mode,K),G.return=q,G;case te:return G=lr(G),xe(q,G,K)}if(de(G)||ee(G))return G=ir(G,q.mode,K,null),G.return=q,G;if(typeof G.then=="function")return xe(q,ll(G),K);if(G.$$typeof===N)return xe(q,al(q,G),K);cl(q,G)}return null}function ie(q,G,K,he){var Ke=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ke!==null?null:E(q,G,""+K,he);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===Ke?P(q,G,K,he):null;case T:return K.key===Ke?J(q,G,K,he):null;case te:return K=lr(K),ie(q,G,K,he)}if(de(K)||ee(K))return Ke!==null?null:fe(q,G,K,he,null);if(typeof K.then=="function")return ie(q,G,ll(K),he);if(K.$$typeof===N)return ie(q,G,al(q,K),he);cl(q,K)}return null}function oe(q,G,K,he,Ke){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return q=q.get(K)||null,E(G,q,""+he,Ke);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case y:return q=q.get(he.key===null?K:he.key)||null,P(G,q,he,Ke);case T:return q=q.get(he.key===null?K:he.key)||null,J(G,q,he,Ke);case te:return he=lr(he),oe(q,G,K,he,Ke)}if(de(he)||ee(he))return q=q.get(K)||null,fe(G,q,he,Ke,null);if(typeof he.then=="function")return oe(q,G,K,ll(he),Ke);if(he.$$typeof===N)return oe(q,G,K,al(G,he),Ke);cl(G,he)}return null}function He(q,G,K,he){for(var Ke=null,Ct=null,Xe=G,ut=G=0,vt=null;Xe!==null&&ut<K.length;ut++){Xe.index>ut?(vt=Xe,Xe=null):vt=Xe.sibling;var wt=ie(q,Xe,K[ut],he);if(wt===null){Xe===null&&(Xe=vt);break}e&&Xe&&wt.alternate===null&&n(q,Xe),G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt,Xe=vt}if(ut===K.length)return a(q,Xe),yt&&Ii(q,ut),Ke;if(Xe===null){for(;ut<K.length;ut++)Xe=xe(q,K[ut],he),Xe!==null&&(G=f(Xe,G,ut),Ct===null?Ke=Xe:Ct.sibling=Xe,Ct=Xe);return yt&&Ii(q,ut),Ke}for(Xe=s(Xe);ut<K.length;ut++)vt=oe(Xe,q,ut,K[ut],he),vt!==null&&(e&&vt.alternate!==null&&Xe.delete(vt.key===null?ut:vt.key),G=f(vt,G,ut),Ct===null?Ke=vt:Ct.sibling=vt,Ct=vt);return e&&Xe.forEach(function(Fa){return n(q,Fa)}),yt&&Ii(q,ut),Ke}function et(q,G,K,he){if(K==null)throw Error(r(151));for(var Ke=null,Ct=null,Xe=G,ut=G=0,vt=null,wt=K.next();Xe!==null&&!wt.done;ut++,wt=K.next()){Xe.index>ut?(vt=Xe,Xe=null):vt=Xe.sibling;var Fa=ie(q,Xe,wt.value,he);if(Fa===null){Xe===null&&(Xe=vt);break}e&&Xe&&Fa.alternate===null&&n(q,Xe),G=f(Fa,G,ut),Ct===null?Ke=Fa:Ct.sibling=Fa,Ct=Fa,Xe=vt}if(wt.done)return a(q,Xe),yt&&Ii(q,ut),Ke;if(Xe===null){for(;!wt.done;ut++,wt=K.next())wt=xe(q,wt.value,he),wt!==null&&(G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return yt&&Ii(q,ut),Ke}for(Xe=s(Xe);!wt.done;ut++,wt=K.next())wt=oe(Xe,q,ut,wt.value,he),wt!==null&&(e&&wt.alternate!==null&&Xe.delete(wt.key===null?ut:wt.key),G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return e&&Xe.forEach(function(qv){return n(q,qv)}),yt&&Ii(q,ut),Ke}function Gt(q,G,K,he){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:e:{for(var Ke=K.key;G!==null;){if(G.key===Ke){if(Ke=K.type,Ke===R){if(G.tag===7){a(q,G.sibling),he=c(G,K.props.children),he.return=q,q=he;break e}}else if(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===te&&lr(Ke)===G.type){a(q,G.sibling),he=c(G,K.props),Zs(he,K),he.return=q,q=he;break e}a(q,G);break}else n(q,G);G=G.sibling}K.type===R?(he=ir(K.props.children,q.mode,he,K.key),he.return=q,q=he):(he=tl(K.type,K.key,K.props,null,q.mode,he),Zs(he,K),he.return=q,q=he)}return x(q);case T:e:{for(Ke=K.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(q,G.sibling),he=c(G,K.children||[]),he.return=q,q=he;break e}else{a(q,G);break}else n(q,G);G=G.sibling}he=iu(K,q.mode,he),he.return=q,q=he}return x(q);case te:return K=lr(K),Gt(q,G,K,he)}if(de(K))return He(q,G,K,he);if(ee(K)){if(Ke=ee(K),typeof Ke!="function")throw Error(r(150));return K=Ke.call(K),et(q,G,K,he)}if(typeof K.then=="function")return Gt(q,G,ll(K),he);if(K.$$typeof===N)return Gt(q,G,al(q,K),he);cl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(q,G.sibling),he=c(G,K),he.return=q,q=he):(a(q,G),he=nu(K,q.mode,he),he.return=q,q=he),x(q)):a(q,G)}return function(q,G,K,he){try{js=0;var Ke=Gt(q,G,K,he);return kr=null,Ke}catch(Xe){if(Xe===Vr||Xe===sl)throw Xe;var Ct=Yn(29,Xe,null,q.mode);return Ct.lanes=he,Ct.return=q,Ct}finally{}}}var ur=_p(!0),vp=_p(!1),ba=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ut&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=el(e),np(e,null,a),n}return $o(e,s,n,a),el(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ds(e,a)}}function gu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _u=!1;function Qs(){if(_u){var e=Gr;if(e!==null)throw e}}function Js(e,n,a,s){_u=!1;var c=e.updateQueue;ba=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,J=P.next;P.next=null,x===null?f=J:x.next=J,x=P;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,E=fe.lastBaseUpdate,E!==x&&(E===null?fe.firstBaseUpdate=J:E.next=J,fe.lastBaseUpdate=P))}if(f!==null){var xe=c.baseState;x=0,fe=J=P=null,E=f;do{var ie=E.lane&-536870913,oe=ie!==E.lane;if(oe?(_t&ie)===ie:(s&ie)===ie){ie!==0&&ie===Hr&&(_u=!0),fe!==null&&(fe=fe.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var He=e,et=E;ie=n;var Gt=a;switch(et.tag){case 1:if(He=et.payload,typeof He=="function"){xe=He.call(Gt,xe,ie);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=et.payload,ie=typeof He=="function"?He.call(Gt,xe,ie):He,ie==null)break e;xe=g({},xe,ie);break e;case 2:ba=!0}}ie=E.callback,ie!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:E.tag,payload:E.payload,callback:E.callback,next:null},fe===null?(J=fe=oe,P=xe):fe=fe.next=oe,x|=ie;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;oe=E,E=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);fe===null&&(P=xe),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=fe,f===null&&(c.shared.lanes=0),Ca|=x,e.lanes=x,e.memoizedState=xe}}function Sp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sp(a[e],n)}var Xr=U(null),ul=U(0);function yp(e,n){e=Ki,Se(ul,e),Se(Xr,n),Ki=e|n.baseLanes}function vu(){Se(ul,Ki),Se(Xr,Xr.current)}function Su(){Ki=ul.current,ae(Xr),ae(ul)}var jn=U(null),li=null;function Ea(e){var n=e.alternate;Se(nn,nn.current&1),Se(jn,e),li===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(li=e)}function bu(e){Se(nn,nn.current),Se(jn,e),li===null&&(li=e)}function Mp(e){e.tag===22?(Se(nn,nn.current),Se(jn,e),li===null&&(li=e)):Ta()}function Ta(){Se(nn,nn.current),Se(jn,jn.current)}function Zn(e){ae(jn),li===e&&(li=null),ae(nn)}var nn=U(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cf(a)||wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,st=null,It=null,cn=null,dl=!1,Wr=!1,fr=!1,hl=0,$s=0,qr=null,P_=0;function Jt(){throw Error(r(321))}function yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Mu(e,n,a,s,c,f){return Vi=f,st=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?s0:Fu,fr=!1,f=a(s,c),fr=!1,Wr&&(f=Tp(n,a,s,c)),Ep(e),f}function Ep(e){z.H=no;var n=It!==null&&It.next!==null;if(Vi=0,cn=It=st=null,dl=!1,$s=0,qr=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&il(e)&&(un=!0))}function Tp(e,n,a,s){st=e;var c=0;do{if(Wr&&(qr=null),$s=0,Wr=!1,25<=c)throw Error(r(301));if(c+=1,cn=It=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=o0,f=n(a,s)}while(Wr);return f}function B_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(It!==null?It.memoizedState:null)!==e&&(st.flags|=1024),n}function Eu(){var e=hl!==0;return hl=0,e}function Tu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Au(e){if(dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dl=!1}Vi=0,cn=It=st=null,Wr=!1,$s=hl=0,qr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?st.memoizedState=cn=e:cn=cn.next=e,cn}function an(){if(It===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=It.next;var n=cn===null?st.memoizedState:cn.next;if(n!==null)cn=n,It=e;else{if(e===null)throw st.alternate===null?Error(r(467)):Error(r(310));It=e,e={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},cn===null?st.memoizedState=cn=e:cn=cn.next=e}return cn}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=$s;return $s+=1,qr===null&&(qr=[]),e=mp(qr,e,n),n=st,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?s0:Fu),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===N)return An(e)}throw Error(r(438,String(e)))}function Ru(e){var n=null,a=st.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=st.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),st.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=an();return Cu(n,It,e)}function Cu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=x=null,P=null,J=n,fe=!1;do{var xe=J.lane&-536870913;if(xe!==J.lane?(_t&xe)===xe:(Vi&xe)===xe){var ie=J.revertLane;if(ie===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),xe===Hr&&(fe=!0);else if((Vi&ie)===ie){J=J.next,ie===Hr&&(fe=!0);continue}else xe={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=xe,x=f):P=P.next=xe,st.lanes|=ie,Ca|=ie;xe=J.action,fr&&a(f,xe),f=J.hasEagerState?J.eagerState:a(f,xe)}else ie={lane:xe,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=ie,x=f):P=P.next=ie,st.lanes|=xe,Ca|=xe;J=J.next}while(J!==null&&J!==n);if(P===null?x=f:P.next=E,!qn(f,e.memoizedState)&&(un=!0,fe&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function wu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);qn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ap(e,n,a){var s=st,c=an(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!qn((It||c).memoizedState,a);if(x&&(c.memoizedState=a,un=!0),c=c.queue,Nu(wp.bind(null,s,c,e),[e]),c.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,Yr(9,{destroy:void 0},Cp.bind(null,s,c,a,n),null),qt===null)throw Error(r(349));f||(Vi&127)!==0||Rp(s,n,a)}return a}function Rp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=st.updateQueue,n===null?(n=pl(),st.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Cp(e,n,a,s){n.value=a,n.getSnapshot=s,Dp(n)&&Up(e)}function wp(e,n,a){return a(function(){Dp(n)&&Up(e)})}function Dp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Up(e){var n=nr(e,2);n!==null&&Gn(n,e,2)}function Du(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),fr){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function Np(e,n,a,s){return e.baseState=a,Cu(e,It,typeof s=="function"?s:ki)}function F_(e,n,a,s,c){if(vl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var E=a(c,s),P=z.S;P!==null&&P(x,E),Op(e,n,E)}catch(J){Uu(e,n,J)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=a(c,s),Op(e,n,f)}catch(J){Uu(e,n,J)}}function Op(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){zp(e,n,s)},function(s){return Uu(e,n,s)}):zp(e,n,a)}function zp(e,n,a){n.status="fulfilled",n.value=a,Pp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lp(e,a)))}function Uu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Pp(n),n=n.next;while(n!==s)}e.action=null}function Pp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Bp(e,n){return n}function Fp(e,n){if(yt){var a=qt.formState;if(a!==null){e:{var s=st;if(yt){if(Zt){t:{for(var c=Zt,f=oi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ci(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=ci(c.nextSibling),s=c.data==="F!";break e}}va(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:n},a.queue=s,a=i0.bind(null,st,s),s.dispatch=a,s=Du(!1),f=Bu.bind(null,st,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=F_.bind(null,st,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Ip(e){var n=an();return Hp(n,It,e)}function Hp(e,n,a){if(n=Cu(e,n,Bp)[0],e=xl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(x){throw x===Vr?sl:x}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(st.flags|=2048,Yr(9,{destroy:void 0},I_.bind(null,c,a),null)),[s,f,e]}function I_(e,n){e.action=n}function Gp(e){var n=an(),a=It;if(a!==null)return Hp(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Yr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=st.updateQueue,n===null&&(n=pl(),st.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Vp(){return an().memoizedState}function gl(e,n,a,s){var c=Ln();st.flags|=e,c.memoizedState=Yr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(e,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;It!==null&&s!==null&&yu(s,It.memoizedState.deps)?c.memoizedState=Yr(n,f,a,s):(st.flags|=e,c.memoizedState=Yr(1|n,f,a,s))}function kp(e,n){gl(8390656,8,e,n)}function Nu(e,n){_l(2048,8,e,n)}function H_(e){st.flags|=4;var n=st.updateQueue;if(n===null)n=pl(),st.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Xp(e){var n=an().memoizedState;return H_({ref:n,nextImpl:e}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Wp(e,n){return _l(4,2,e,n)}function qp(e,n){return _l(4,4,e,n)}function Yp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jp(e,n,a){a=a!=null?a.concat([e]):null,_l(4,4,Yp.bind(null,n,e),a)}function Lu(){}function Zp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&yu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Kp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&yu(n,s[1]))return s[0];if(s=e(),fr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s}function Ou(e,n,a){return a===void 0||(Vi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Q0(),st.lanes|=e,Ca|=e,a)}function Qp(e,n,a,s){return qn(a,n)?a:Xr.current!==null?(e=Ou(e,a,s),qn(e,n)||(un=!0),e):(Vi&42)===0||(Vi&1073741824)!==0&&(_t&261930)===0?(un=!0,e.memoizedState=a):(e=Q0(),st.lanes|=e,Ca|=e,n)}function Jp(e,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=z.T,E={};z.T=E,Bu(e,!1,n,a);try{var P=c(),J=z.S;if(J!==null&&J(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var fe=z_(P,s);to(e,n,fe,Jn(e))}else to(e,n,s,Jn(e))}catch(xe){to(e,n,{then:function(){},status:"rejected",reason:xe},Jn())}finally{Z.p=f,x!==null&&E.types!==null&&(x.types=E.types),z.T=x}}function G_(){}function zu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=$p(e).queue;Jp(e,c,n,j,a===null?G_:function(){return e0(e),a(s)})}function $p(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function e0(e){var n=$p(e);n.next===null&&(n=e.alternate.memoizedState),to(e,n.next.queue,{},Jn())}function Pu(){return An(vo)}function t0(){return an().memoizedState}function n0(){return an().memoizedState}function V_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=ya(a);var s=Ma(n,e,a);s!==null&&(Gn(s,n,a),Ks(s,n,a)),n={cache:fu()},e.payload=n;return}n=n.return}}function k_(e,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?a0(n,a):(a=eu(e,n,a,s),a!==null&&(Gn(a,e,s),r0(a,n,s)))}function i0(e,n,a){var s=Jn();to(e,n,a,s)}function to(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))a0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,qn(E,x))return $o(e,n,c,0),qt===null&&Jo(),!1}catch{}finally{}if(a=eu(e,n,c,s),a!==null)return Gn(a,e,s),r0(a,n,s),!0}return!1}function Bu(e,n,a,s){if(s={lane:2,revertLane:xf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(n)throw Error(r(479))}else n=eu(e,a,s,2),n!==null&&Gn(n,e,2)}function vl(e){var n=e.alternate;return e===st||n!==null&&n===st}function a0(e,n){Wr=dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function r0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ds(e,a)}}var no={readContext:An,use:ml,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};no.useEffectEvent=Jt;var s0={readContext:An,use:ml,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:kp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gl(4194308,4,Yp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gl(4194308,4,e,n)},useInsertionEffect:function(e,n){gl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(fr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(fr){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=k_.bind(null,st,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Du(e);var n=e.queue,a=i0.bind(null,st,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(e,n){var a=Ln();return Ou(a,e,n)},useTransition:function(){var e=Du(!1);return e=Jp.bind(null,st,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=st,c=Ln();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(_t&127)!==0||Rp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,kp(wp.bind(null,s,f,e),[e]),s.flags|=2048,Yr(9,{destroy:void 0},Cp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=qt.identifierPrefix;if(yt){var a=Ai,s=Ti;a=(s&~(1<<32-Ve(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=P_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Pu,useFormState:Fp,useActionState:Fp,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,st,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ru,useCacheRefresh:function(){return Ln().memoizedState=V_.bind(null,st)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:An,use:ml,useCallback:Zp,useContext:An,useEffect:Nu,useImperativeHandle:jp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Kp,useReducer:xl,useRef:Vp,useState:function(){return xl(ki)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=an();return Qp(a,It.memoizedState,e,n)},useTransition:function(){var e=xl(ki)[0],n=an().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Ap,useId:t0,useHostTransitionStatus:Pu,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,n){var a=an();return Np(a,It,e,n)},useMemoCache:Ru,useCacheRefresh:n0};Fu.useEffectEvent=Xp;var o0={readContext:An,use:ml,useCallback:Zp,useContext:An,useEffect:Nu,useImperativeHandle:jp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Kp,useReducer:wu,useRef:Vp,useState:function(){return wu(ki)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=an();return It===null?Ou(a,e,n):Qp(a,It.memoizedState,e,n)},useTransition:function(){var e=wu(ki)[0],n=an().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Ap,useId:t0,useHostTransitionStatus:Pu,useFormState:Gp,useActionState:Gp,useOptimistic:function(e,n){var a=an();return It!==null?Np(a,It,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:n0};o0.useEffectEvent=Xp;function Iu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ya(s);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=Ma(e,s,a),n!==null&&(Gn(n,e,a),Ks(n,e,a))}};function l0(e,n,a,s,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function c0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Hu.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function u0(e){Qo(e)}function f0(e){console.error(e)}function d0(e){Qo(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function h0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Gu(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function p0(e){return e=ya(e),e.tag=3,e}function m0(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){h0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){h0(n,a,s),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function X_(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Nl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),hf(e,s,c)),!1;case 22:return a.flags|=65536,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),hf(e,s,c)),!1}throw Error(r(435,a.tag))}return hf(e,s,c),Nl(),!1}if(yt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==su&&(e=Error(r(422),{cause:s}),Ws(ai(e,a)))):(s!==su&&(n=Error(r(423),{cause:s}),Ws(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ai(s,a),c=Gu(e.stateNode,s,c),gu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),uo===null?uo=[f]:uo.push(f),$t!==4&&($t=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Gu(a.stateNode,s,e),gu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=p0(c),m0(c,e,a,s),gu(a,c),!1}a=a.return}while(a!==null);return!1}var Vu=Error(r(461)),un=!1;function Rn(e,n,a,s){n.child=e===null?vp(n,null,a,s):ur(n,e.child,a,s)}function x0(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return sr(n),s=Mu(e,n,a,x,f,c),E=Eu(),e!==null&&!un?(Tu(e,n,c),Xi(e,n,c)):(yt&&E&&au(n),n.flags|=1,Rn(e,n,s,c),n.child)}function g0(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_0(e,n,f,s,c)):(e=tl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ku(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(x,s)&&e.ref===n.ref)return Xi(e,n,c)}return n.flags|=1,e=Fi(f,s),e.ref=n.ref,e.return=n,n.child=e}function _0(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(un=!1,n.pendingProps=s=f,Ku(e,c))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Xi(e,n,c)}return ku(e,n,a,s,c)}function v0(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return S0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,f!==null?f.cachePool:null),f!==null?yp(n,f):vu(),Mp(n);else return s=n.lanes=536870912,S0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(rl(n,f.cachePool),yp(n,f),Ta(),n.memoizedState=null):(e!==null&&rl(n,null),vu(),Ta());return Rn(e,n,c,a),n.child}function io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function S0(e,n,a,s,c){var f=hu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&rl(n,null),vu(),Mp(n),e!==null&&Ir(e,n,s,!0),n.childLanes=c,null}function bl(e,n){return n=Ml({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function b0(e,n,a){return ur(n,e.child,null,a),e=bl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function W_(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(yt){if(s.mode==="hidden")return e=bl(n,s),n.lanes=536870912,io(null,e);if(bu(n),(e=Zt)?(e=Lm(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ap(e),a.return=n,n.child=a,Tn=n,Zt=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return bl(n,s)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(bu(n),c)if(n.flags&256)n.flags&=-257,n=b0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Ir(e,n,a,!1),c=(a&e.childLanes)!==0,un||c){if(s=qt,s!==null&&(x=Us(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,nr(e,x),Gn(s,e,x),Vu;Nl(),n=b0(e,n,a)}else e=f.treeContext,Zt=ci(x.nextSibling),Tn=n,yt=!0,_a=null,oi=!1,e!==null&&op(n,e),n=bl(n,s),n.flags|=4096;return n}return e=Fi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ku(e,n,a,s,c){return sr(n),a=Mu(e,n,a,s,void 0,c),s=Eu(),e!==null&&!un?(Tu(e,n,c),Xi(e,n,c)):(yt&&s&&au(n),n.flags|=1,Rn(e,n,a,c),n.child)}function y0(e,n,a,s,c,f){return sr(n),n.updateQueue=null,a=Tp(n,s,a,c),Ep(e),s=Eu(),e!==null&&!un?(Tu(e,n,f),Xi(e,n,f)):(yt&&s&&au(n),n.flags|=1,Rn(e,n,a,f),n.child)}function M0(e,n,a,s,c){if(sr(n),n.stateNode===null){var f=zr,x=a.contextType;typeof x=="object"&&x!==null&&(f=An(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Hu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},mu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?An(x):zr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Iu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Hu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,P=dr(a,E);f.props=P;var J=f.context,fe=a.contextType;x=zr,typeof fe=="object"&&fe!==null&&(x=An(fe));var xe=a.getDerivedStateFromProps;fe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==x)&&c0(n,f,s,x),ba=!1;var ie=n.memoizedState;f.state=ie,Js(n,s,f,c),Qs(),J=n.memoizedState,E||ie!==J||ba?(typeof xe=="function"&&(Iu(n,a,xe,s),J=n.memoizedState),(P=ba||l0(n,a,P,s,ie,J,x))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=x,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,xu(e,n),x=n.memoizedProps,fe=dr(a,x),f.props=fe,xe=n.pendingProps,ie=f.context,J=a.contextType,P=zr,typeof J=="object"&&J!==null&&(P=An(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xe||ie!==P)&&c0(n,f,s,P),ba=!1,ie=n.memoizedState,f.state=ie,Js(n,s,f,c),Qs();var oe=n.memoizedState;x!==xe||ie!==oe||ba||e!==null&&e.dependencies!==null&&il(e.dependencies)?(typeof E=="function"&&(Iu(n,a,E,s),oe=n.memoizedState),(fe=ba||l0(n,a,fe,s,ie,oe,P)||e!==null&&e.dependencies!==null&&il(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,oe,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,oe,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=oe),f.props=s,f.state=oe,f.context=P,s=fe):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ur(n,e.child,null,c),n.child=ur(n,null,a,c)):Rn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Xi(e,n,c),e}function E0(e,n,a,s){return ar(),n.flags|=256,Rn(e,n,a,s),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:hp()}}function qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function T0(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(yt){if(c?Ea(n):Ta(),(e=Zt)?(e=Lm(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ap(e),a.return=n,n.child=a,Tn=n,Zt=null)):e=null,e===null)throw va(n);return wf(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ta(),c=n.mode,E=Ml({mode:"hidden",children:E},c),s=ir(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Wu(a),s.childLanes=qu(e,x,a),n.memoizedState=Xu,io(null,s)):(Ea(n),Yu(n,E))}var P=e.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=ju(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),E=s.fallback,c=n.mode,s=Ml({mode:"visible",children:s.children},c),E=ir(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ur(n,e.child,null,a),s=n.child,s.memoizedState=Wu(a),s.childLanes=qu(e,x,a),n.memoizedState=Xu,n=io(null,s));else if(Ea(n),wf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var J=x.dgst;x=J,s=Error(r(419)),s.stack="",s.digest=x,Ws({value:s,source:null,stack:null}),n=ju(e,n,a)}else if(un||Ir(e,n,a,!1),x=(a&e.childLanes)!==0,un||x){if(x=qt,x!==null&&(s=Us(x,a),s!==0&&s!==P.retryLane))throw P.retryLane=s,nr(e,s),Gn(x,e,s),Vu;Cf(E)||Nl(),n=ju(e,n,a)}else Cf(E)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Zt=ci(E.nextSibling),Tn=n,yt=!0,_a=null,oi=!1,e!==null&&op(n,e),n=Yu(n,s.children),n.flags|=4096);return n}return c?(Ta(),E=s.fallback,c=n.mode,P=e.child,J=P.sibling,s=Fi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,J!==null?E=Fi(J,E):(E=ir(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=e.child.memoizedState,E===null?E=Wu(a):(c=E.cachePool,c!==null?(P=ln._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=hp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=qu(e,x,a),n.memoizedState=Xu,io(e.child,s)):(Ea(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Yu(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function ju(e,n,a){return ur(n,e.child,null,a),e=Yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function A0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),cu(e.return,n,a)}function Zu(e,n,a,s,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function R0(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=nn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,Se(nn,x),Rn(e,n,s,a),s=yt?Xs:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A0(e,a,n);else if(e.tag===19)A0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&fl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Zu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&fl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Zu(n,!0,a,null,f,s);break;case"together":Zu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&il(e)))}function q_(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Sa(n,ln,e.memoizedState.cache),ar();break;case 27:case 5:ke(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T0(e,n,a):(Ea(n),e=Xi(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ir(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return R0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(nn,nn.current),s)break;return null;case 22:return n.lanes=0,v0(e,n,a,n.pendingProps);case 24:Sa(n,ln,e.memoizedState.cache)}return Xi(e,n,a)}function C0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Ku(e,a)&&(n.flags&128)===0)return un=!1,q_(e,n,a);un=(e.flags&131072)!==0}else un=!1,yt&&(n.flags&1048576)!==0&&sp(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=lr(n.elementType),n.type=e,typeof e=="function")tu(e)?(s=dr(e,s),n.tag=1,n=M0(null,n,e,s,a)):(n.tag=0,n=ku(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===F){n.tag=11,n=x0(null,n,e,s,a);break e}else if(c===O){n.tag=14,n=g0(null,n,e,s,a);break e}}throw n=pe(e)||e,Error(r(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=dr(s,n.pendingProps),M0(e,n,s,c,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,xu(e,n),Js(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Sa(n,ln,s),s!==f.cache&&uu(n,[ln],a,!0),Qs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=E0(e,n,s,a);break e}else if(s!==c){c=ai(Error(r(424)),n),Ws(c),n=E0(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=ci(e.firstChild),Tn=n,yt=!0,_a=null,oi=!0,a=vp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ar(),s===c){n=Xi(e,n,a);break e}Rn(e,n,s,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=Im(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,e=n.pendingProps,s=Il(ne.current).createElement(a),s[on]=n,s[hn]=e,Cn(s,a,e),$(s),n.stateNode=s):n.memoizedState=Im(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ke(n),e===null&&yt&&(s=n.stateNode=Pm(n.type,n.pendingProps,ne.current),Tn=n,oi=!0,c=Zt,La(n.type)?(Df=c,Zt=ci(s.firstChild)):Zt=c),Rn(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&yt&&((c=s=Zt)&&(s=yv(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,Tn=n,Zt=ci(s.firstChild),oi=!1,c=!0):c=!1),c||va(n)),ke(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,Tf(c,f)?s=null:x!==null&&Tf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Mu(e,n,B_,null,null,a),vo._currentValue=c),yl(e,n),Rn(e,n,s,a),n.child;case 6:return e===null&&yt&&((e=a=Zt)&&(a=Mv(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Tn=n,Zt=null,e=!0):e=!1),e||va(n)),null;case 13:return T0(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ur(n,null,s,a):Rn(e,n,s,a),n.child;case 11:return x0(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Sa(n,n.type,s.value),Rn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,sr(n),c=An(c),s=s(c),n.flags|=1,Rn(e,n,s,a),n.child;case 14:return g0(e,n,n.type,n.pendingProps,a);case 15:return _0(e,n,n.type,n.pendingProps,a);case 19:return R0(e,n,a);case 31:return W_(e,n,a);case 22:return v0(e,n,a,n.pendingProps);case 24:return sr(n),s=An(ln),e===null?(c=hu(),c===null&&(c=qt,f=fu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},mu(n),Sa(n,ln,c)):((e.lanes&a)!==0&&(xu(e,n),Js(n,null,null,a),Qs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,ln,s)):(s=f.cache,Sa(n,ln,s),s!==c.cache&&uu(n,[ln],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function Qu(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(tm())e.flags|=8192;else throw cr=ol,pu}else e.flags&=-16777217}function w0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xm(n))if(tm())e.flags|=8192;else throw cr=ol,pu}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ft():536870912,e.lanes|=n,Qr|=n)}function ao(e,n){if(!yt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Y_(e,n,a){var s=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(ln),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ou())),Kt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Wi(n),f!==null?(Kt(n),w0(n,f)):(Kt(n),Qu(n,c,null,s,a))):f?f!==e.memoizedState?(Wi(n),Kt(n),w0(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Wi(n),Kt(n),Qu(n,c,e,s,a)),null;case 27:if(lt(n),a=ne.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}e=Ae.current,Fr(n)?lp(n):(e=Pm(c,s,a),n.stateNode=e,Wi(n))}return Kt(n),null;case 5:if(lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(f=Ae.current,Fr(n))lp(n);else{var x=Il(ne.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[on]=n,f[hn]=s;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Cn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Wi(n)}}return Kt(n),Qu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ne.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Tm(e.nodeValue,a)),e||va(n,!0)}else e=Il(e).createTextNode(s),e[on]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Fr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Kt(n),null);case 4:return Pe(),e===null&&Sf(n.stateNode.containerInfo),Kt(n),null;case 10:return Gi(n.type),Kt(n),null;case 19:if(ae(nn),s=n.memoizedState,s===null)return Kt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=fl(e),f!==null){for(n.flags|=128,ao(s,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ip(a,e),a=a.sibling;return Se(nn,nn.current&1|2),yt&&Ii(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&M()>wl&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(e=fl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!yt)return Kt(n),null}else 2*M()-s.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=M(),e.sibling=null,a=nn.current,Se(nn,c?a&1|2:a&1),yt&&Ii(n,s.treeForkCount),e):(Kt(n),null);case 22:case 23:return Zn(n),Su(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ae(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(ln),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function j_(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(ln),Pe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(nn),null;case 4:return Pe(),null;case 10:return Gi(n.type),null;case 22:case 23:return Zn(n),Su(),e!==null&&ae(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(ln),null;case 25:return null;default:return null}}function D0(e,n){switch(ru(n),n.tag){case 3:Gi(ln),Pe();break;case 26:case 27:case 5:lt(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:ae(nn);break;case 10:Gi(n.type);break;case 22:case 23:Zn(n),Su(),e!==null&&ae(or);break;case 24:Gi(ln)}}function ro(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){Pt(n,n.return,E)}}function Aa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var P=a,J=E;try{J()}catch(fe){Pt(c,P,fe)}}}s=s.next}while(s!==f)}}catch(fe){Pt(n,n.return,fe)}}function U0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{bp(n,a)}catch(s){Pt(e,e.return,s)}}}function N0(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Pt(e,n,s)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Pt(e,n,c)}}function Ri(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pt(e,n,c)}else a.current=null}function L0(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pt(e,e.return,c)}}function Ju(e,n,a){try{var s=e.stateNode;xv(s,e.type,a,n),s[hn]=n}catch(c){Pt(e,e.return,c)}}function O0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ef(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ef(e,n,a),e=e.sibling;e!==null;)ef(e,n,a),e=e.sibling}function Tl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tl(e,n,a),e=e.sibling;e!==null;)Tl(e,n,a),e=e.sibling}function z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,s,a),n[on]=e,n[hn]=a}catch(f){Pt(e,e.return,f)}}var qi=!1,fn=!1,tf=!1,P0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Z_(e,n){if(e=e.containerInfo,Mf=ql,e=jh(e),jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,E=-1,P=-1,J=0,fe=0,xe=e,ie=null;t:for(;;){for(var oe;xe!==a||c!==0&&xe.nodeType!==3||(E=x+c),xe!==f||s!==0&&xe.nodeType!==3||(P=x+s),xe.nodeType===3&&(x+=xe.nodeValue.length),(oe=xe.firstChild)!==null;)ie=xe,xe=oe;for(;;){if(xe===e)break t;if(ie===a&&++J===c&&(E=x),ie===f&&++fe===s&&(P=x),(oe=xe.nextSibling)!==null)break;xe=ie,ie=xe.parentNode}xe=oe}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:e,selectionRange:a},ql=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var He=dr(a.type,c);e=s.getSnapshotBeforeUpdate(He,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){Pt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function B0(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&ro(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Pt(a,a.return,x)}else{var c=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Pt(a,a.return,x)}}s&64&&U0(a),s&512&&so(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bp(e,n)}catch(x){Pt(a,a.return,x)}}break;case 27:n===null&&s&4&&z0(a);case 26:case 5:ji(e,a),n===null&&s&4&&L0(a),s&512&&so(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&H0(e,a);break;case 13:ji(e,a),s&4&&G0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=av.bind(null,a),Ev(e,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||fn,c=qi;var f=fn;qi=s,(fn=n)&&!f?Zi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),qi=c,fn=f}break;case 30:break;default:ji(e,a)}}function F0(e){var n=e.alternate;n!==null&&(e.alternate=null,F0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Os(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Bn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)I0(e,n,a),a=a.sibling}function I0(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:fn||Ri(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ri(a,n);var s=Qt,c=Bn;La(a.type)&&(Qt=a.stateNode,Bn=!1),Yi(e,n,a),xo(a.stateNode),Qt=s,Bn=c;break;case 5:fn||Ri(a,n);case 6:if(s=Qt,c=Bn,Qt=null,Yi(e,n,a),Qt=s,Bn=c,Qt!==null)if(Bn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Pt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Pt(a,n,f)}break;case 18:Qt!==null&&(Bn?(e=Qt,Um(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):Um(Qt,a.stateNode));break;case 4:s=Qt,c=Bn,Qt=a.stateNode.containerInfo,Bn=!0,Yi(e,n,a),Qt=s,Bn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),fn||Aa(4,a,n),Yi(e,n,a);break;case 1:fn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&N0(a,n,s)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:fn=(s=fn)||a.memoizedState!==null,Yi(e,n,a),fn=s;break;default:Yi(e,n,a)}}function H0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){Pt(n,n.return,a)}}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){Pt(n,n.return,a)}}function K_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new P0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new P0),n;default:throw Error(r(435,e.tag))}}function Al(e,n){var a=K_(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=rv.bind(null,e,s);s.then(c,c)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,x=n,E=x;e:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){Qt=E.stateNode,Bn=!1;break e}break;case 5:Qt=E.stateNode,Bn=!1;break e;case 3:case 4:Qt=E.stateNode.containerInfo,Bn=!0;break e}E=E.return}if(Qt===null)throw Error(r(160));I0(f,x,c),Qt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)V0(n,e),n=n.sibling}var xi=null;function V0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),In(e),s&4&&(Aa(3,e,e.return),ro(3,e),Aa(5,e,e.return));break;case 1:Fn(n,e),In(e),s&512&&(fn||a===null||Ri(a,a.return)),s&64&&qi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=xi;if(Fn(n,e),In(e),s&512&&(fn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ja]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,s,a),f[on]=e,$(f),s=f;break e;case"link":var x=Vm("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break t}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Vm("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break t}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=e,$(f),s=f}e.stateNode=s}else km(c,e.type,e.stateNode);else e.stateNode=Gm(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?km(c,e.type,e.stateNode):Gm(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),In(e),s&512&&(fn||a===null||Ri(a,a.return)),a!==null&&s&4&&Ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),In(e),s&512&&(fn||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Ei(c,"")}catch(He){Pt(e,e.return,He)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Ju(e,c,a!==null?a.memoizedProps:c)),s&1024&&(tf=!0);break;case 6:if(Fn(n,e),In(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(He){Pt(e,e.return,He)}}break;case 3:if(Vl=null,c=xi,xi=Hl(n.containerInfo),Fn(n,e),xi=c,In(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(He){Pt(e,e.return,He)}tf&&(tf=!1,k0(e));break;case 4:s=xi,xi=Hl(e.stateNode.containerInfo),Fn(n,e),In(e),xi=s;break;case 12:Fn(n,e),In(e);break;case 31:Fn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Al(e,s)));break;case 13:Fn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=M()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Al(e,s)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=qi,fe=fn;if(qi=J||c,fn=fe||P,Fn(n,e),fn=fe,qi=J,In(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||qi||fn||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=P.stateNode;var xe=P.memoizedProps.style,ie=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;E.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(He){Pt(P,P.return,He)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(He){Pt(P,P.return,He)}}}else if(n.tag===18){if(a===null){P=n;try{var oe=P.stateNode;c?Nm(oe,!0):Nm(P.stateNode,!1)}catch(He){Pt(P,P.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Al(e,a))));break;case 19:Fn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Al(e,s)));break;case 30:break;case 21:break;default:Fn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(O0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=$u(e);Tl(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ei(x,""),a.flags&=-33);var E=$u(e);Tl(e,E,x);break;case 3:case 4:var P=a.stateNode.containerInfo,J=$u(e);ef(e,J,P);break;default:throw Error(r(161))}}catch(fe){Pt(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function k0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;k0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B0(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),hr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&N0(n,n.return,a),hr(n);break;case 27:xo(n.stateNode);case 26:case 5:Ri(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Zi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ro(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Pt(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Sp(P[c],E)}catch(J){Pt(s,s.return,J)}}a&&x&64&&U0(f),so(f,f.return);break;case 27:z0(f);case 26:case 5:Zi(c,f,a),a&&s===null&&x&4&&L0(f),so(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&x&4&&H0(c,f);break;case 13:Zi(c,f,a),a&&x&4&&G0(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),so(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function gi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)X0(e,n,a,s),n=n.sibling}function X0(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(e,n,a,s),c&2048&&ro(9,n);break;case 1:gi(e,n,a,s);break;case 3:gi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(c&2048){gi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Pt(n,n.return,P)}}else gi(e,n,a,s);break;case 31:gi(e,n,a,s);break;case 13:gi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?gi(e,n,a,s):oo(e,n):f._visibility&2?gi(e,n,a,s):(f._visibility|=2,jr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&nf(x,n);break;case 24:gi(e,n,a,s),c&2048&&af(n.alternate,n);break;default:gi(e,n,a,s)}}function jr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,E=a,P=s,J=x.flags;switch(x.tag){case 0:case 11:case 15:jr(f,x,E,P,c),ro(8,x);break;case 23:break;case 22:var fe=x.stateNode;x.memoizedState!==null?fe._visibility&2?jr(f,x,E,P,c):oo(f,x):(fe._visibility|=2,jr(f,x,E,P,c)),c&&J&2048&&nf(x.alternate,x);break;case 24:jr(f,x,E,P,c),c&&J&2048&&af(x.alternate,x);break;default:jr(f,x,E,P,c)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&nf(s.alternate,s);break;case 24:oo(a,s),c&2048&&af(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Zr(e,n,a){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)W0(e,n,a),e=e.sibling}function W0(e,n,a){switch(e.tag){case 26:Zr(e,n,a),e.flags&lo&&e.memoizedState!==null&&Pv(a,xi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,a);break;case 3:case 4:var s=xi;xi=Hl(e.stateNode.containerInfo),Zr(e,n,a),xi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Zr(e,n,a),lo=s):Zr(e,n,a));break;default:Zr(e,n,a)}}function q0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,j0(s,e)}q0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Y0(e),e=e.sibling}function Y0(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rl(e)):co(e);break;default:co(e)}}function Rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,j0(s,e)}q0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}e=e.sibling}}function j0(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else e:for(a=e;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(F0(s),s===a){yn=null;break e}if(c!==null){c.return=f,yn=c;break e}yn=f}}}var Q_={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(ln).controller.signal}},J_=typeof WeakMap=="function"?WeakMap:Map,Ut=0,qt=null,xt=null,_t=0,zt=0,Kn=null,Ra=!1,Kr=!1,rf=!1,Ki=0,$t=0,Ca=0,pr=0,sf=0,Qn=0,Qr=0,uo=null,Hn=null,of=!1,Cl=0,Z0=0,wl=1/0,Dl=null,wa=null,mn=0,Da=null,Jr=null,Qi=0,lf=0,cf=null,K0=null,fo=0,uf=null;function Jn(){return(Ut&2)!==0&&_t!==0?_t&-_t:z.T!==null?xf():Ns()}function Q0(){if(Qn===0)if((_t&536870912)===0||yt){var e=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function Gn(e,n,a){(e===qt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ua(e,_t,Qn,!1)),wn(e,a),((Ut&2)===0||e!==qt)&&(e===qt&&((Ut&2)===0&&(pr|=a),$t===4&&Ua(e,_t,Qn,!1)),Ci(e))}function J0(e,n,a){if((Ut&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Fe(e,n),c=s?tv(e,n):df(e,n,!0),f=s;do{if(c===0){Kr&&!s&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!$_(a)){c=df(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var E=e;c=uo;var P=E.current.memoizedState.isDehydrated;if(P&&($r(E,x).flags|=256),x=df(E,x,!1),x!==2){if(rf&&!P){E.errorRecoveryDisabledLanes|=f,pr|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){$r(e,0),Ua(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(s,n,Qn,!Ra);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Cl+300-M(),10<c)){if(Ua(s,n,Qn,!Ra),_e(s,0,!0)!==0)break e;Qi=n,s.timeoutHandle=wm($0.bind(null,s,a,Hn,Dl,of,n,Qn,pr,Qr,Ra,f,"Throttled",-0,0),c);break e}$0(s,a,Hn,Dl,of,n,Qn,pr,Qr,Ra,f,null,-0,0)}}break}while(!0);Ci(e)}function $0(e,n,a,s,c,f,x,E,P,J,fe,xe,ie,oe){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},W0(n,f,xe);var He=(f&62914560)===f?Cl-M():(f&4194048)===f?Z0-M():0;if(He=Bv(xe,He),He!==null){Qi=f,e.cancelPendingCommit=He(om.bind(null,e,n,f,a,s,c,x,E,P,fe,xe,null,ie,oe)),Ua(e,f,x,!J);return}}om(e,n,f,a,s,c,x,E,P)}function $_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,s){n&=~sf,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Ve(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Vo(e,a,n)}function Ul(){return(Ut&6)===0?(ho(0),!1):!0}function ff(){if(xt!==null){if(zt===0)var e=xt.return;else e=xt,Hi=rr=null,Au(e),kr=null,js=0,e=xt;for(;e!==null;)D0(e.alternate,e),e=e.return;xt=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qi=0,ff(),qt=e,xt=a=Fi(e.current,null),_t=n,zt=0,Kn=null,Ra=!1,Kr=Fe(e,n),rf=!1,Qr=Qn=sf=pr=Ca=$t=0,Hn=uo=null,of=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Ve(s),f=1<<c;n|=e[c],s&=~f}return Ki=n,Jo(),a}function em(e,n){st=null,z.H=no,n===Vr||n===sl?(n=xp(),zt=3):n===pu?(n=xp(),zt=4):zt=n===Vu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,xt===null&&($t=1,Sl(e,ai(n,e.current)))}function tm(){var e=jn.current;return e===null?!0:(_t&4194048)===_t?li===null:(_t&62914560)===_t||(_t&536870912)!==0?e===li:!1}function nm(){var e=z.H;return z.H=no,e===null?no:e}function im(){var e=z.A;return z.A=Q_,e}function Nl(){$t=4,Ra||(_t&4194048)!==_t&&jn.current!==null||(Kr=!0),(Ca&134217727)===0&&(pr&134217727)===0||qt===null||Ua(qt,_t,Qn,!1)}function df(e,n,a){var s=Ut;Ut|=2;var c=nm(),f=im();(qt!==e||_t!==n)&&(Dl=null,$r(e,n)),n=!1;var x=$t;e:do try{if(zt!==0&&xt!==null){var E=xt,P=Kn;switch(zt){case 8:ff(),x=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var J=zt;if(zt=0,Kn=null,es(e,E,P,J),a&&Kr){x=0;break e}break;default:J=zt,zt=0,Kn=null,es(e,E,P,J)}}ev(),x=$t;break}catch(fe){em(e,fe)}while(!0);return n&&e.shellSuspendCounter++,Hi=rr=null,Ut=s,z.H=c,z.A=f,xt===null&&(qt=null,_t=0,Jo()),x}function ev(){for(;xt!==null;)am(xt)}function tv(e,n){var a=Ut;Ut|=2;var s=nm(),c=im();qt!==e||_t!==n?(Dl=null,wl=M()+500,$r(e,n)):Kr=Fe(e,n);e:do try{if(zt!==0&&xt!==null){n=xt;var f=Kn;t:switch(zt){case 1:zt=0,Kn=null,es(e,n,f,1);break;case 2:case 9:if(pp(f)){zt=0,Kn=null,rm(n);break}n=function(){zt!==2&&zt!==9||qt!==e||(zt=7),Ci(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:pp(f)?(zt=0,Kn=null,rm(n)):(zt=0,Kn=null,es(e,n,f,7));break;case 5:var x=null;switch(xt.tag){case 26:x=xt.memoizedState;case 5:case 27:var E=xt;if(x?Xm(x):E.stateNode.complete){zt=0,Kn=null;var P=E.sibling;if(P!==null)xt=P;else{var J=E.return;J!==null?(xt=J,Ll(J)):xt=null}break t}}zt=0,Kn=null,es(e,n,f,5);break;case 6:zt=0,Kn=null,es(e,n,f,6);break;case 8:ff(),$t=6;break e;default:throw Error(r(462))}}nv();break}catch(fe){em(e,fe)}while(!0);return Hi=rr=null,z.H=s,z.A=c,Ut=a,xt!==null?0:(qt=null,_t=0,Jo(),$t)}function nv(){for(;xt!==null&&!at();)am(xt)}function am(e){var n=C0(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Ll(e):xt=n}function rm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=y0(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=y0(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Au(n);default:D0(a,n),n=xt=ip(n,Ki),n=C0(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Ll(e):xt=n}function es(e,n,a,s){Hi=rr=null,Au(n),kr=null,js=0;var c=n.return;try{if(X_(e,c,n,a,_t)){$t=1,Sl(e,ai(a,e.current)),xt=null;return}}catch(f){if(c!==null)throw xt=c,f;$t=1,Sl(e,ai(a,e.current)),xt=null;return}n.flags&32768?(yt||s===1?e=!0:Kr||(_t&536870912)!==0?e=!1:(Ra=e=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),sm(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){sm(n,Ra);return}e=n.return;var a=Y_(n.alternate,n,Ki);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);$t===0&&($t=5)}function sm(e,n){do{var a=j_(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);$t=6,xt=null}function om(e,n,a,s,c,f,x,E,P){e.cancelPendingCommit=null;do Ol();while(mn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=$c,Xn(e,a,f,x,E,P),e===qt&&(xt=qt=null,_t=0),Jr=n,Da=e,Qi=a,lf=f,cf=c,K0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sv(ce,function(){return dm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=Z.p,Z.p=2,x=Ut,Ut|=4;try{Z_(e,n,a)}finally{Ut=x,Z.p=c,z.T=s}}mn=1,lm(),cm(),um()}}function lm(){if(mn===1){mn=0;var e=Da,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var c=Ut;Ut|=4;try{V0(n,e);var f=Ef,x=jh(e.containerInfo),E=f.focusedElem,P=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Yh(E.ownerDocument.documentElement,E)){if(P!==null&&jc(E)){var J=P.start,fe=P.end;if(fe===void 0&&(fe=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(fe,E.value.length);else{var xe=E.ownerDocument||document,ie=xe&&xe.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),He=E.textContent.length,et=Math.min(P.start,He),Gt=P.end===void 0?et:Math.min(P.end,He);!oe.extend&&et>Gt&&(x=Gt,Gt=et,et=x);var q=qh(E,et),G=qh(E,Gt);if(q&&G&&(oe.rangeCount!==1||oe.anchorNode!==q.node||oe.anchorOffset!==q.offset||oe.focusNode!==G.node||oe.focusOffset!==G.offset)){var K=xe.createRange();K.setStart(q.node,q.offset),oe.removeAllRanges(),et>Gt?(oe.addRange(K),oe.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),oe.addRange(K))}}}}for(xe=[],oe=E;oe=oe.parentNode;)oe.nodeType===1&&xe.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xe.length;E++){var he=xe[E];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}ql=!!Mf,Ef=Mf=null}finally{Ut=c,Z.p=s,z.T=a}}e.current=n,mn=2}}function cm(){if(mn===2){mn=0;var e=Da,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=Z.p;Z.p=2;var c=Ut;Ut|=4;try{B0(e,n.alternate,n)}finally{Ut=c,Z.p=s,z.T=a}}mn=3}}function um(){if(mn===4||mn===3){mn=0,D();var e=Da,n=Jr,a=Qi,s=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,Jr=Da=null,fm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wa=null),Qa(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ye,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=e.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{z.T=n,Z.p=c}}(Qi&3)!==0&&Ol(),Ci(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===uf?fo++:(fo=0,uf=e):fo=0,ho(0)}}function fm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function Ol(){return lm(),cm(),um(),dm()}function dm(){if(mn!==5)return!1;var e=Da,n=lf;lf=0;var a=Qa(Qi),s=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=cf,cf=null;var f=Da,x=Qi;if(mn=0,Jr=Da=null,Qi=0,(Ut&6)!==0)throw Error(r(331));var E=Ut;if(Ut|=4,Y0(f.current),X0(f,f.current,x,a),Ut=E,ho(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ye,f)}catch{}return!0}finally{Z.p=c,z.T=s,fm(e,n)}}function hm(e,n,a){n=ai(a,n),n=Gu(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(wn(e,2),Ci(e))}function Pt(e,n,a){if(e.tag===3)hm(e,e,a);else for(;n!==null;){if(n.tag===3){hm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))){e=ai(a,e),a=p0(2),s=Ma(n,a,2),s!==null&&(m0(a,s,n,e),wn(s,2),Ci(s));break}}n=n.return}}function hf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new J_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(rf=!0,c.add(a),e=iv.bind(null,e,n,a),n.then(e,e))}function iv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>M()-Cl?(Ut&2)===0&&$r(e,0):sf|=a,Qr===_t&&(Qr=0)),Ci(e)}function pm(e,n){n===0&&(n=Ft()),e=nr(e,n),e!==null&&(wn(e,n),Ci(e))}function av(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),pm(e,a)}function rv(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),pm(e,a)}function sv(e,n){return Xt(e,n)}var zl=null,ts=null,pf=!1,Pl=!1,mf=!1,Na=0;function Ci(e){e!==ts&&e.next===null&&(ts===null?zl=ts=e:ts=ts.next=e),Pl=!0,pf||(pf=!0,lv())}function ho(e,n){if(!mf&&Pl){mf=!0;do for(var a=!1,s=zl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ve(42|e)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_m(s,f))}else f=_t,f=_e(s,s===qt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Fe(s,f)||(a=!0,_m(s,f));s=s.next}while(a);mf=!1}}function ov(){mm()}function mm(){Pl=pf=!1;var e=0;Na!==0&&_v()&&(e=Na);for(var n=M(),a=null,s=zl;s!==null;){var c=s.next,f=xm(s,n);f===0?(s.next=null,a===null?zl=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(Pl=!0)),s=c}mn!==0&&mn!==5||ho(e),Na!==0&&(Na=0)}function xm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ve(f),E=1<<x,P=c[x];P===-1?((E&a)===0||(E&s)!==0)&&(c[x]=it(E,n)):P<=n&&(e.expiredLanes|=E),f&=~E}if(n=qt,a=_t,a=_e(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&je(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Fe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&je(s),Qa(a)){case 2:case 8:a=be;break;case 32:a=ce;break;case 268435456:a=Ne;break;default:a=ce}return s=gm.bind(null,e),a=Xt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&je(s),e.callbackPriority=2,e.callbackNode=null,2}function gm(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ol()&&e.callbackNode!==a)return null;var s=_t;return s=_e(e,e===qt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(J0(e,s,n),xm(e,M()),e.callbackNode!=null&&e.callbackNode===a?gm.bind(null,e):null)}function _m(e,n){if(Ol())return null;J0(e,n,!0)}function lv(){Sv(function(){(Ut&6)!==0?Xt(me,ov):mm()})}function xf(){if(Na===0){var e=Hr;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),Na=e}return Na}function vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function Sm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cv(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=vm((c[hn]||null).action),x=s.submitter;x&&(n=(n=x[hn]||null)?vm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new jo("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Na!==0){var P=x?Sm(c,x):new FormData(c);zu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=x?Sm(c,x):new FormData(c),zu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var gf=0;gf<Jc.length;gf++){var _f=Jc[gf],uv=_f.toLowerCase(),fv=_f[0].toUpperCase()+_f.slice(1);mi(uv,"on"+fv)}mi(Qh,"onAnimationEnd"),mi(Jh,"onAnimationIteration"),mi($h,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(R_,"onTransitionRun"),mi(C_,"onTransitionStart"),mi(w_,"onTransitionCancel"),mi(ep,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function bm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],P=E.instance,J=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(fe){Qo(fe)}c.currentTarget=null,f=P}else for(x=0;x<s.length;x++){if(E=s[x],P=E.instance,J=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(fe){Qo(fe)}c.currentTarget=null,f=P}}}}function gt(e,n){var a=n[Cr];a===void 0&&(a=n[Cr]=new Set);var s=e+"__bubble";a.has(s)||(ym(n,e,2,!1),a.add(s))}function vf(e,n,a){var s=0;n&&(s|=4),ym(a,e,s,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Bl]){e[Bl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(dv.has(a)||vf(a,!1,e),vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,vf("selectionchange",!1,n))}}function ym(e,n,a,s){switch(Qm(n)){case 2:var c=Hv;break;case 8:c=Gv;break;default:c=zf}a=c.bind(null,n,a,e),c=void 0,!Ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function bf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=pa(E),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){s=f=x;continue e}E=E.parentNode}}s=s.return}Rh(function(){var J=f,fe=Bc(a),xe=[];e:{var ie=tp.get(e);if(ie!==void 0){var oe=jo,He=e;switch(e){case"keypress":if(qo(a)===0)break e;case"keydown":case"keyup":oe=r_;break;case"focusin":He="focus",oe=kc;break;case"focusout":He="blur",oe=kc;break;case"beforeblur":case"afterblur":oe=kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=l_;break;case Qh:case Jh:case $h:oe=Kg;break;case ep:oe=u_;break;case"scroll":case"scrollend":oe=Wg;break;case"wheel":oe=d_;break;case"copy":case"cut":case"paste":oe=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Nh;break;case"toggle":case"beforetoggle":oe=p_}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),q=et?ie!==null?ie+"Capture":null:ie;et=[];for(var G=J,K;G!==null;){var he=G;if(K=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||K===null||q===null||(he=zs(G,q),he!=null&&et.push(mo(G,he,K))),Gt)break;G=G.return}0<et.length&&(ie=new oe(ie,He,null,a,fe),xe.push({event:ie,listeners:et}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",ie&&a!==Pc&&(He=a.relatedTarget||a.fromElement)&&(pa(He)||He[Li]))break e;if((oe||ie)&&(ie=fe.window===fe?fe:(ie=fe.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(He=a.relatedTarget||a.toElement,oe=J,He=He?pa(He):null,He!==null&&(Gt=u(He),et=He.tag,He!==Gt||et!==5&&et!==27&&et!==6)&&(He=null)):(oe=null,He=J),oe!==He)){if(et=Dh,he="onMouseLeave",q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(et=Nh,he="onPointerLeave",q="onPointerEnter",G="pointer"),Gt=oe==null?ie:W(oe),K=He==null?ie:W(He),ie=new et(he,G+"leave",oe,a,fe),ie.target=Gt,ie.relatedTarget=K,he=null,pa(fe)===J&&(et=new et(q,G+"enter",He,a,fe),et.target=K,et.relatedTarget=Gt,he=et),Gt=he,oe&&He)t:{for(et=hv,q=oe,G=He,K=0,he=q;he;he=et(he))K++;he=0;for(var Ke=G;Ke;Ke=et(Ke))he++;for(;0<K-he;)q=et(q),K--;for(;0<he-K;)G=et(G),he--;for(;K--;){if(q===G||G!==null&&q===G.alternate){et=q;break t}q=et(q),G=et(G)}et=null}else et=null;oe!==null&&Mm(xe,ie,oe,et,!1),He!==null&&Gt!==null&&Mm(xe,Gt,He,et,!0)}}e:{if(ie=J?W(J):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var Ct=Hh;else if(Fh(ie))if(Gh)Ct=E_;else{Ct=y_;var Xe=b_}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?J&&zc(J.elementType)&&(Ct=Hh):Ct=M_;if(Ct&&(Ct=Ct(e,J))){Ih(xe,Ct,a,fe);break e}Xe&&Xe(e,ie,J),e==="focusout"&&J&&ie.type==="number"&&J.memoizedProps.value!=null&&Sn(ie,"number",ie.value)}switch(Xe=J?W(J):window,e){case"focusin":(Fh(Xe)||Xe.contentEditable==="true")&&(Nr=Xe,Zc=J,ks=null);break;case"focusout":ks=Zc=Nr=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Zh(xe,a,fe);break;case"selectionchange":if(A_)break;case"keydown":case"keyup":Zh(xe,a,fe)}var ut;if(Wc)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ur?Ph(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Lh&&a.locale!=="ko"&&(Ur||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ur&&(ut=Ch()):(xa=fe,Hc="value"in xa?xa.value:xa.textContent,Ur=!0)),Xe=Fl(J,vt),0<Xe.length&&(vt=new Uh(vt,e,null,a,fe),xe.push({event:vt,listeners:Xe}),ut?vt.data=ut:(ut=Bh(a),ut!==null&&(vt.data=ut)))),(ut=x_?g_(e,a):__(e,a))&&(vt=Fl(J,"onBeforeInput"),0<vt.length&&(Xe=new Uh("onBeforeInput","beforeinput",null,a,fe),xe.push({event:Xe,listeners:vt}),Xe.data=ut)),cv(xe,e,J,a,fe)}bm(xe,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(e,a),c!=null&&s.unshift(mo(e,c,f)),c=zs(e,n),c!=null&&s.push(mo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function hv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,P=E.alternate,J=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||J===null||(P=J,c?(J=zs(a,f),J!=null&&x.unshift(mo(a,J,P))):c||(J=zs(a,f),J!=null&&x.push(mo(a,J,P)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function Em(e){return(typeof e=="string"?e:""+e).replace(pv,`
`).replace(mv,"")}function Tm(e,n){return n=Em(n),Em(e)===n}function Ht(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ei(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ei(e,""+s);break;case"className":Et(e,"class",s);break;case"tabIndex":Et(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Et(e,a,s);break;case"style":Th(e,s,f);break;case"data":if(n!=="object"){Et(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),ct(e,"popover",s);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ct(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kg.get(a)||a,ct(e,a,s))}}function yf(e,n,a,s,c,f){switch(a){case"style":Th(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ei(e,s):(typeof s=="number"||typeof s=="bigint")&&Ei(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ct(e,a,s)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,f,x,a,null)}}c&&Ht(e,n,"srcSet",a.srcSet,a,null),s&&Ht(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var E=f=x=c=null,P=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var fe=a[s];if(fe!=null)switch(s){case"name":c=fe;break;case"type":x=fe;break;case"checked":P=fe;break;case"defaultChecked":J=fe;break;case"value":f=fe;break;case"defaultValue":E=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Ht(e,n,s,fe,a,null)}}jt(e,f,E,P,J,x,c,!1);return;case"select":gt("invalid",e),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ht(e,n,c,E,a,null)}n=f,a=x,e.multiple=!!s,n!=null?pn(e,!!s,n,!1):a!=null&&pn(e,!!s,a,!0);return;case"textarea":gt("invalid",e),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ht(e,n,x,E,a,null)}En(e,s,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ht(e,n,P,s,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)gt(po[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,J,s,a,null)}return;default:if(zc(n)){for(fe in a)a.hasOwnProperty(fe)&&(s=a[fe],s!==void 0&&yf(e,n,fe,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ht(e,n,E,s,a,null))}function xv(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,P=null,J=null,fe=null;for(oe in a){var xe=a[oe];if(a.hasOwnProperty(oe)&&xe!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":P=xe;default:s.hasOwnProperty(oe)||Ht(e,n,oe,null,s,xe)}}for(var ie in s){var oe=s[ie];if(xe=a[ie],s.hasOwnProperty(ie)&&(oe!=null||xe!=null))switch(ie){case"type":f=oe;break;case"name":c=oe;break;case"checked":J=oe;break;case"defaultChecked":fe=oe;break;case"value":x=oe;break;case"defaultValue":E=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==xe&&Ht(e,n,ie,oe,s,xe)}}Oi(e,x,E,P,J,fe,f,c);return;case"select":oe=x=E=ie=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":oe=P;default:s.hasOwnProperty(f)||Ht(e,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ie=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==P&&Ht(e,n,c,f,s,P)}n=E,a=x,s=oe,ie!=null?pn(e,!!a,ie,!1):!!s!=!!a&&(n!=null?pn(e,!!a,n,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":oe=ie=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ht(e,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":ie=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ht(e,n,x,c,s,f)}bn(e,ie,oe);return;case"option":for(var He in a)if(ie=a[He],a.hasOwnProperty(He)&&ie!=null&&!s.hasOwnProperty(He))switch(He){case"selected":e.selected=!1;break;default:Ht(e,n,He,null,s,ie)}for(P in s)if(ie=s[P],oe=a[P],s.hasOwnProperty(P)&&ie!==oe&&(ie!=null||oe!=null))switch(P){case"selected":e.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ht(e,n,P,ie,s,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ie=a[et],a.hasOwnProperty(et)&&ie!=null&&!s.hasOwnProperty(et)&&Ht(e,n,et,null,s,ie);for(J in s)if(ie=s[J],oe=a[J],s.hasOwnProperty(J)&&ie!==oe&&(ie!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Ht(e,n,J,ie,s,oe)}return;default:if(zc(n)){for(var Gt in a)ie=a[Gt],a.hasOwnProperty(Gt)&&ie!==void 0&&!s.hasOwnProperty(Gt)&&yf(e,n,Gt,void 0,s,ie);for(fe in s)ie=s[fe],oe=a[fe],!s.hasOwnProperty(fe)||ie===oe||ie===void 0&&oe===void 0||yf(e,n,fe,ie,s,oe);return}}for(var q in a)ie=a[q],a.hasOwnProperty(q)&&ie!=null&&!s.hasOwnProperty(q)&&Ht(e,n,q,null,s,ie);for(xe in s)ie=s[xe],oe=a[xe],!s.hasOwnProperty(xe)||ie===oe||ie==null&&oe==null||Ht(e,n,xe,ie,s,oe)}function Am(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Am(x)){for(x=0,E=c.responseEnd,s+=1;s<a.length;s++){var P=a[s],J=P.startTime;if(J>E)break;var fe=P.transferSize,xe=P.initiatorType;fe&&Am(xe)&&(P=P.responseEnd,x+=fe*(P<E?1:(E-J)/(P-J)))}if(--s,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mf=null,Ef=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function Rm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Tf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Af=null;function _v(){var e=window.event;return e&&e.type==="popstate"?e===Af?!1:(Af=e,!0):(Af=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,Sv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(e){return Dm.resolve(null).then(e).catch(bv)}:wm;function bv(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function Um(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")xo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Ja]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&xo(e.ownerDocument.body);a=c}while(a);rs(n)}function Nm(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Rf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function yv(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function Mv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function Lm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Cf(e){return e.data==="$?"||e.data==="$~"}function wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ev(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Df=null;function Om(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Pm(e,n,a){switch(n=Il(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Os(e)}var ui=new Map,Bm=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=Z.d;Z.d={f:Tv,r:Av,D:Rv,C:Cv,L:wv,m:Dv,X:Nv,S:Uv,M:Lv};function Tv(){var e=Ji.f(),n=Ul();return e||n}function Av(e){var n=A(e);n!==null&&n.tag===5&&n.type==="form"?e0(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function Fm(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=Yt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Bm.has(c)||(Bm.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Cn(n,"link",e),$(n),s.head.appendChild(n)))}}function Rv(e){Ji.D(e),Fm("dns-prefetch",e,null)}function Cv(e,n){Ji.C(e,n),Fm("preconnect",e,n)}function wv(e,n,a){Ji.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Yt(a.imageSizes)+'"]')):c+='[href="'+Yt(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}ui.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),Cn(n,"link",e),$(n),s.head.appendChild(n)))}}function Dv(e,n){Ji.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Yt(s)+'"][href="'+Yt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!ui.has(f)&&(e=g({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),Cn(s,"link",e),$(s),a.head.appendChild(s)}}}function Uv(e,n,a){Ji.S(e,n,a);var s=ns;if(s&&e){var c=re(s).hoistableStyles,f=is(e);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(go(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Uf(e,a);var P=x=s.createElement("link");$(P),Cn(P,"link",e),P._p=new Promise(function(J,fe){P.onload=J,P.onerror=fe}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Gl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Nv(e,n){Ji.X(e,n);var a=ns;if(a&&e){var s=re(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=g({src:e,async:!0},n),(n=ui.get(c))&&Nf(e,n),f=a.createElement("script"),$(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Lv(e,n){Ji.M(e,n);var a=ns;if(a&&e){var s=re(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ui.get(c))&&Nf(e,n),f=a.createElement("script"),$(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Im(e,n,a,s){var c=(c=ne.current)?Hl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=re(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=re(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(go(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||Ov(c,e,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=re(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+Yt(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function Hm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ov(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),$(n),e.head.appendChild(n))}function as(e){return'[src="'+Yt(e)+'"]'}function _o(e){return"script[async]"+e}function Gm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(s)return n.instance=s,$(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),$(s),Cn(s,"style",c),Gl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,$(f),f;s=Hm(a),(c=ui.get(c))&&Uf(s,c),f=(e.ownerDocument||e).createElement("link"),$(f);var x=f;return x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),Cn(f,"link",s),n.state.loading|=4,Gl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,$(c),c):(s=a,(c=ui.get(f))&&(s=g({},a),Nf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),$(c),Cn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Gl(s,a.precedence,e));return n.instance}function Gl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function Vm(e,n,a){if(Vl===null){var s=new Map,c=Vl=new Map;c.set(a,s)}else c=Vl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ja]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function km(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function zv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Xm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pv(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=is(s.href),f=n.querySelector(go(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,$(f);return}f=n.ownerDocument||n,s=Hm(s),(c=ui.get(c))&&Uf(s,c),f=f.createElement("link"),$(f);var x=f;x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),Cn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lf=0;function Bv(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Lf===0&&(Lf=62500*gv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Lf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(Fv,e),Xl=null,kl.call(e))}function Fv(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var s=a.get(null);else{a=new Map,Xl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var vo={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Iv(e,n,a,s,c,f,x,E,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Wm(e,n,a,s,c,f,x,E,P,J,fe,xe){return e=new Iv(e,n,a,x,P,J,fe,xe,E),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},mu(f),e}function qm(e){return e?(e=zr,e):zr}function Ym(e,n,a,s,c,f){c=qm(c),s.context===null?s.context=c:s.pendingContext=c,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ma(e,s,n),a!==null&&(Gn(a,e,n),Ks(a,e,n))}function jm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Of(e,n){jm(e,n),(e=e.alternate)&&jm(e,n)}function Zm(e){if(e.tag===13||e.tag===31){var n=nr(e,67108864);n!==null&&Gn(n,e,67108864),Of(e,67108864)}}function Km(e){if(e.tag===13||e.tag===31){var n=Jn();n=pi(n);var a=nr(e,n);a!==null&&Gn(a,e,n),Of(e,n)}}var ql=!0;function Hv(e,n,a,s){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,zf(e,n,a,s)}finally{Z.p=f,z.T=c}}function Gv(e,n,a,s){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,zf(e,n,a,s)}finally{Z.p=f,z.T=c}}function zf(e,n,a,s){if(ql){var c=Pf(s);if(c===null)bf(e,n,s,Yl,a),Jm(e,s);else if(kv(c,e,n,a,s))s.stopPropagation();else if(Jm(e,s),n&4&&-1<Vv.indexOf(e)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Me(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var P=1<<31-Ve(x);E.entanglements[1]|=P,x&=~P}Ci(f),(Ut&6)===0&&(wl=M()+500,ho(0))}}break;case 31:case 13:E=nr(f,2),E!==null&&Gn(E,f,2),Ul(),Of(f,2)}if(f=Pf(s),f===null&&bf(e,n,s,Yl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else bf(e,n,s,null,a)}}function Pf(e){return e=Bc(e),Bf(e)}var Yl=null;function Bf(e){if(Yl=null,e=pa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function Qm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case me:return 2;case be:return 8;case ce:case qe:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Ff=!1,Oa=null,za=null,Pa=null,So=new Map,bo=new Map,Ba=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jm(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function yo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&Zm(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function kv(e,n,a,s,c){switch(n){case"focusin":return Oa=yo(Oa,e,n,a,s,c),!0;case"dragenter":return za=yo(za,e,n,a,s,c),!0;case"mouseover":return Pa=yo(Pa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,yo(So.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,yo(bo.get(f)||null,e,n,a,s,c)),!0}return!1}function $m(e){var n=pa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ls(e.priority,function(){Km(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ls(e.priority,function(){Km(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Pf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Pc=s,a.target.dispatchEvent(s),Pc=null}else return n=A(a),n!==null&&Zm(n),e.blockedOn=a,!1;n.shift()}return!0}function ex(e,n,a){jl(e)&&a.delete(n)}function Xv(){Ff=!1,Oa!==null&&jl(Oa)&&(Oa=null),za!==null&&jl(za)&&(za=null),Pa!==null&&jl(Pa)&&(Pa=null),So.forEach(ex),bo.forEach(ex)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Xv)))}var Kl=null;function tx(e){Kl!==e&&(Kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Bf(s||a)===null)continue;break}var f=A(a);f!==null&&(e.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function rs(e){function n(P){return Zl(P,e)}Oa!==null&&Zl(Oa,e),za!==null&&Zl(za,e),Pa!==null&&Zl(Pa,e),So.forEach(n),bo.forEach(n);for(var a=0;a<Ba.length;a++){var s=Ba[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)$m(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[hn]||null;if(typeof f=="function")x||tx(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[hn]||null)E=x.formAction;else if(Bf(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),tx(a)}}}function nx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function If(e){this._internalRoot=e}Ql.prototype.render=If.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();Ym(a,s,e,n,null,null)},Ql.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ym(e.current,2,null,e,null,null),Ul(),n[Li]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ns();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&$m(e)}};var ix=t.version;if(ix!=="19.2.1")throw Error(r(527,ix,"19.2.1"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Wv={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{ye=Jl.inject(Wv),Ee=Jl}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=u0,f=f0,x=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Wm(e,1,!1,null,null,a,s,null,c,f,x,nx),e[Li]=n.current,Sf(e),new If(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=u0,x=f0,E=d0,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Wm(e,1,!0,n,a??null,s,c,P,f,x,E,nx),n.context=qm(null),a=n.current,s=Jn(),s=pi(s),c=ya(s),c.callback=null,Ma(a,c,s),a=s,n.current.lanes=a,wn(n,a),Ci(n),e[Li]=n.current,Sf(e),new Ql(n)},Eo.version="19.2.1",Eo}var hx;function nS(){if(hx)return Vf.exports;hx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vf.exports=tS(),Vf.exports}var iS=nS();const aS=ug(iS),rS=[{id:"p1",title:"LANDING PAGES",description:"Conversion-focused landing pages. Clean UI. Lightning-fast. Responsive everywhere.",techStack:["REACT JS","JAVASCRIPT","HTML","CSS"],imageUrl:"/images/Landing page thumbnail.jpg",year:"2024",liveDemo:"https://github.com/Chandru231?tab=repositories"},{id:"p2",title:"Bus Timing Finder",description:"Bus Timing Finder is an application that helps users quickly find accurate bus schedules and routes to plan their travel efficiently.",techStack:["REACT JS","JAVASCRIPT","HTML","CSS"],imageUrl:"/images/Bus-Timing-thumbnail.jpg",year:"2023",liveDemo:"https://mybus-timings.vercel.app/"},{id:"p3",title:"Movie App",description:"Movie App is an application that allows users to search movies, view details, ratings, and explore trending and popular films easily.",techStack:["REACT JS","JAVASCRIPT","HTML","CSS"],imageUrl:"./images/Movie-app-thumbnail.jpg",year:"2023",liveDemo:"https://moviee-app-ruby.vercel.app/"},{id:"p4",title:"Type Speed Application",description:"Type Speed Application is a tool that helps users test and improve their typing speed and accuracy through timed typing exercises.",techStack:["REACT JS","JAVASCRIPT","HTML","CSS"],imageUrl:"./images/Typing-Speed thumbnail.jpg",year:"2022",liveDemo:"https://type-speed-application.vercel.app/"}];/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),px=o=>{const t=oS(o);return t.charAt(0).toUpperCase()+t.slice(1)},fg=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),lS=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=kt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},m)=>kt.createElement("svg",{ref:m,...cS,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:fg("lucide",l),...!u&&!lS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,_])=>kt.createElement(p,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=(o,t)=>{const i=kt.forwardRef(({className:r,...l},u)=>kt.createElement(uS,{ref:u,iconNode:t,className:fg(`lucide-${sS(px(o))}`,`lucide-${o}`,r),...l}));return i.displayName=px(o),i};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Tc=Za("arrow-down",fS);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],hS=Za("arrow-up-right",dS);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],mS=Za("arrow-up",pS);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],gS=Za("code-xml",xS);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],vS=Za("corner-down-right",_S);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],dh=Za("github",SS);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],hh=Za("linkedin",bS);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],MS=Za("terminal",yS),en=({children:o,delay:t=0,className:i="",variant:r="clip",direction:l="bottom"})=>{const u=kt.useRef(null),[d,h]=kt.useState(!1),[m,p]=kt.useState(!1);kt.useEffect(()=>{const y=new IntersectionObserver(([T])=>{T.isIntersecting&&(setTimeout(()=>{h(!0),setTimeout(()=>{p(!0)},1e3)},t),y.disconnect())},{threshold:.1});return u.current&&y.observe(u.current),()=>y.disconnect()},[t]);const _=r==="clip",g=()=>{switch(l){case"left":return"translateX(-100px)";case"right":return"translateX(100px)";case"top":return"translateY(-100%)";case"bottom":default:return"translateY(110%)"}},S=()=>{switch(l){case"left":case"right":return"translateX(0)";case"top":case"bottom":default:return"translateY(0)"}};return V.jsx("div",{ref:u,className:`reveal-container ${i} ${d?"is-visible":""}`,style:{overflow:_?m?"visible":"hidden":"visible"},children:V.jsx("div",{className:"reveal-text",style:_?{transform:d?S():g(),transition:"transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)"}:{transform:d?S():g(),opacity:d?1:0,transition:"transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease-out"},children:o})})},ES=()=>V.jsx("div",{className:"bg-[#050505] text-white py-32 relative overflow-hidden",children:V.jsxs("div",{className:"max-w-[1600px] mx-auto px-4 md:px-8 relative z-10",children:[V.jsxs("div",{className:"text-center mb-24",children:[V.jsx(en,{children:V.jsxs("div",{className:"inline-flex items-center gap-3 mb-6",children:[V.jsx("div",{className:"w-12 h-px bg-brutal-orange"}),V.jsx("span",{className:"font-mono text-[10px] tracking-[0.3em] text-brutal-orange uppercase",children:"My Work"}),V.jsx("div",{className:"w-12 h-px bg-brutal-orange"})]})}),V.jsx(en,{delay:100,children:V.jsxs("h2",{className:"font-display text-6xl md:text-8xl leading-[0.9]",children:["SELECTED ",V.jsx("span",{className:"text-brutal-orange",children:"WORKS"})]})})]}),V.jsx("div",{className:"flex flex-col gap-32",children:rS.map((o,t)=>V.jsx(en,{className:"w-full",children:V.jsx("div",{className:"group relative",children:V.jsxs("div",{className:"grid md:grid-cols-12 gap-8 items-start",children:[V.jsx("div",{className:"hidden md:block md:col-span-2 font-mono text-[10px] text-gray-500 sticky top-32 text-right pr-8 border-r border-white/10 h-full min-h-[200px]",children:V.jsxs("div",{className:"mb-4 text-white font-bold text-xl",children:["0",t+1]})}),V.jsxs("div",{className:"md:col-span-10 grid md:grid-cols-2 gap-12 items-center",children:[V.jsx("div",{className:"relative order-1",children:V.jsxs("div",{className:"relative border border-white/20 bg-[#0a0a0a] p-1 group-hover:border-brutal-orange/50 transition-colors duration-500",children:[V.jsx("div",{className:"absolute -top-1 -left-1 w-3 h-3 border-l border-t border-white group-hover:border-brutal-orange transition-colors"}),V.jsx("div",{className:"absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-white group-hover:border-brutal-orange transition-colors"}),V.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden bg-gray-900",children:[V.jsx("div",{className:"absolute inset-0 z-20 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"}),V.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"}),V.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-brutal-orange/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"}),V.jsx("div",{className:"absolute -bottom-4 -right-4 w-32 h-32 bg-brutal-orange/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"}),V.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"})]})]})}),V.jsx("div",{className:"order-2 flex flex-col justify-center",children:V.jsxs(en,{delay:100,children:[V.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[V.jsx("span",{className:"font-mono text-xs text-brutal-orange px-2 py-1 border border-brutal-orange/30 rounded-sm",children:"WEB_APP"}),V.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),V.jsx("h3",{className:"font-display text-5xl md:text-7xl mb-6 text-white group-hover:text-brutal-orange transition-colors duration-300",children:o.title}),V.jsx("p",{className:"font-mono text-sm text-gray-400 leading-relaxed mb-8 max-w-md",children:o.description}),V.jsx("div",{className:"grid grid-cols-2 gap-y-2 gap-x-8 mb-8 font-mono text-xs text-gray-500 border-l-2 border-white/10 pl-4",children:o.techStack.map(i=>V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx(vS,{size:10,className:"text-brutal-orange"}),i]},i))}),V.jsx("div",{className:"flex gap-6",children:V.jsxs("a",{href:o.liveDemo,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-brutal-orange transition-colors uppercase tracking-wider group/link",children:["Live Demo ",V.jsx(hS,{size:14,className:"group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"})]})})]})})]})]})})},o.id))})]})}),TS=()=>{const[o,t]=kt.useState(!1),i=["WORK","ABOUT","CONTACT"];kt.useEffect(()=>{const d=h=>{h.key==="Escape"&&o&&t(!1)};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[o]),kt.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]);const r=kt.useCallback(()=>t(!0),[]),l=kt.useCallback(()=>t(!1),[]),u=kt.useCallback((d,h)=>{d.preventDefault(),l(),setTimeout(()=>{const m=document.querySelector(h);m&&m.scrollIntoView({behavior:"smooth"})},100)},[l]);return V.jsxs(V.Fragment,{children:[V.jsxs("button",{onClick:o?l:r,className:"md:hidden fixed top-6 right-6 z-[100] w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-[#050505]/80 backdrop-blur-sm border border-white/10 rounded-lg hover:border-brutal-orange/50 transition-all group","aria-label":o?"Close menu":"Open menu","aria-expanded":o,children:[V.jsx("span",{className:`block w-5 h-0.5 bg-white group-hover:bg-brutal-orange transition-all duration-300 origin-center ${o?"rotate-45 translate-y-2":""}`}),V.jsx("span",{className:`block w-5 h-0.5 bg-white group-hover:bg-brutal-orange transition-all duration-300 ${o?"opacity-0 scale-0":"opacity-100 scale-100"}`}),V.jsx("span",{className:`block w-5 h-0.5 bg-white group-hover:bg-brutal-orange transition-all duration-300 origin-center ${o?"-rotate-45 -translate-y-2":""}`})]}),V.jsxs("div",{className:`md:hidden fixed inset-0 z-[90] ${o?"pointer-events-auto":"pointer-events-none"}`,children:[V.jsx("div",{className:`absolute inset-0 bg-[#050505]/98 backdrop-blur-3xl transition-opacity duration-300 ${o?"opacity-100":"opacity-0"}`,onClick:l}),V.jsx("div",{className:`absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brutal-orange/10 rounded-full blur-[100px] transition-opacity duration-500 ${o?"opacity-100":"opacity-0"}`}),V.jsxs("div",{className:"relative h-full flex flex-col justify-center items-center gap-8",children:[i.map((d,h)=>V.jsx("a",{href:`#${d.toLowerCase()}`,onClick:m=>u(m,`#${d.toLowerCase()}`),className:`font-display text-7xl text-white hover:text-brutal-orange transition-all duration-300 tracking-tighter transform hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(255,51,0,0.6)] ${o?"translate-y-0 opacity-100":"translate-y-12 opacity-0"}`,style:{transitionDelay:o?`${h*80+100}ms`:"0ms",transitionTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)"},children:d},d)),V.jsx("div",{className:`w-20 h-px bg-white/20 my-4 transition-all duration-500 ${o?"opacity-100 scale-x-100":"opacity-0 scale-x-0"}`,style:{transitionDelay:o?"350ms":"0ms"}}),V.jsxs("div",{className:`flex gap-6 transition-all duration-500 ${o?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,style:{transitionDelay:o?"400ms":"0ms"},children:[V.jsx("a",{href:"https://github.com/Chandru231",target:"_blank",rel:"noopener noreferrer",className:"p-4 border border-white/20 rounded-xl text-gray-400 hover:text-brutal-orange hover:border-brutal-orange hover:bg-brutal-orange/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,51,0,0.4)] transition-all duration-300","aria-label":"GitHub",children:V.jsx(dh,{size:24})}),V.jsx("a",{href:"https://www.linkedin.com/in/chandru-m-9149b1391",target:"_blank",rel:"noopener noreferrer",className:"p-4 border border-white/20 rounded-xl text-gray-400 hover:text-brutal-orange hover:border-brutal-orange hover:bg-brutal-orange/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,51,0,0.4)] transition-all duration-300","aria-label":"LinkedIn",children:V.jsx(hh,{size:24})})]}),V.jsxs("div",{className:`flex items-center gap-2 mt-4 transition-all duration-500 ${o?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,style:{transitionDelay:o?"500ms":"0ms"},children:[V.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),V.jsx("span",{className:"font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase",children:"Available for work"})]})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="181",AS=0,mx=1,RS=2,dg=1,CS=2,ra=3,ja=0,kn=1,sa=2,ca=0,Ss=1,xx=2,gx=3,_x=4,wS=5,yr=100,DS=101,US=102,NS=103,LS=104,OS=200,zS=201,PS=202,BS=203,yd=204,Md=205,FS=206,IS=207,HS=208,GS=209,VS=210,kS=211,XS=212,WS=213,qS=214,Ed=0,Td=1,Ad=2,ys=3,Rd=4,Cd=5,wd=6,Dd=7,hg=0,YS=1,jS=2,Ya=0,ZS=1,KS=2,QS=3,JS=4,$S=5,eb=6,tb=7,pg=300,Ms=301,Es=302,Ud=303,Nd=304,wc=306,Ld=1e3,oa=1001,Od=1002,ti=1003,nb=1004,$l=1005,hi=1006,qf=1007,Er=1008,fa=1009,mg=1010,xg=1011,No=1012,mh=1013,Ar=1014,la=1015,Rs=1016,xh=1017,gh=1018,Lo=1020,gg=35902,_g=35899,vg=1021,Sg=1022,Mi=1023,Oo=1026,zo=1027,bg=1028,_h=1029,vh=1030,Sh=1031,bh=1033,Sc=33776,bc=33777,yc=33778,Mc=33779,zd=35840,Pd=35841,Bd=35842,Fd=35843,Id=36196,Hd=37492,Gd=37496,Vd=37808,kd=37809,Xd=37810,Wd=37811,qd=37812,Yd=37813,jd=37814,Zd=37815,Kd=37816,Qd=37817,Jd=37818,$d=37819,eh=37820,th=37821,nh=36492,ih=36494,ah=36495,rh=36283,sh=36284,oh=36285,lh=36286,ib=3200,ab=3201,rb=0,sb=1,Wa="",di="srgb",Ts="srgb-linear",Ac="linear",Vt="srgb",ss=7680,vx=519,ob=512,lb=513,cb=514,yg=515,ub=516,fb=517,db=518,hb=519,Sx=35044,bx="300 es",Di=2e3,Rc=2001;function Mg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function pb(){const o=Cc("canvas");return o.style.display="block",o}const yx={};function Mx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ot(...o){const t="THREE."+o.shift();console.warn(t,...o)}function rn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Po(...o){const t=o.join(" ");t in yx||(yx[t]=!0,ot(...o))}function mb(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=Math.PI/180,ch=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function xb(o,t){return(o%t+t)%t}function jf(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,i=0){Lt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=u[d+0],y=u[d+1],T=u[d+2],R=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=y,t[i+2]=T,t[i+3]=R;return}if(g!==R||m!==S||p!==y||_!==T){let b=m*S+p*y+_*T+g*R;b<0&&(S=-S,y=-y,T=-T,R=-R,b=-b);let v=1-h;if(b<.9995){const B=Math.acos(b),N=Math.sin(B);v=Math.sin(v*B)/N,h=Math.sin(h*B)/N,m=m*v+S*h,p=p*v+y*h,_=_*v+T*h,g=g*v+R*h}else{m=m*v+S*h,p=p*v+y*h,_=_*v+T*h,g=g*v+R*h;const B=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=B,p*=B,_*=B,g*=B}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[d],S=u[d+1],y=u[d+2],T=u[d+3];return t[i]=h*T+_*g+m*y-p*S,t[i+1]=m*T+_*S+p*g-h*y,t[i+2]=p*T+_*y+h*S-m*g,t[i+3]=_*T-h*g-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(u/2),S=m(r/2),y=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"YXZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"ZXY":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"ZYX":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"YZX":this._x=S*_*g+p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g-S*y*T;break;case"XZY":this._x=S*_*g-p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g+S*y*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+h+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(t=0,i=0,r=0){ue.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ex.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ex.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*_,this.y=r+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Zf.copy(this).projectOnVector(t),this.sub(Zf)}reflect(t){return this.sub(Zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new ue,Ex=new Fo;class ft{constructor(t,i,r,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],y=r[5],T=r[8],R=l[0],b=l[3],v=l[6],B=l[1],N=l[4],F=l[7],X=l[2],L=l[5],O=l[8];return u[0]=d*R+h*B+m*X,u[3]=d*b+h*N+m*L,u[6]=d*v+h*F+m*O,u[1]=p*R+_*B+g*X,u[4]=p*b+_*N+g*L,u[7]=p*v+_*F+g*O,u[2]=S*R+y*B+T*X,u[5]=S*b+y*N+T*L,u[8]=S*v+y*F+T*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,S=h*m-_*u,y=p*u-d*m,T=i*g+r*S+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(h*r-l*d)*R,t[3]=S*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-h*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(d*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new ft,Tx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ax=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gb(){const o={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Vt&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ts]:{primaries:t,whitePoint:r,transfer:Ac,toXYZ:Tx,fromXYZ:Ax,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:Vt,toXYZ:Tx,fromXYZ:Ax,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Dt=gb();function ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class _b{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Cc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Cc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ua(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vb=0;class yh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Qf(l[d].image)):u.push(Qf(l[d]))}else u=Qf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_b.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let Sb=0;const Jf=new ue;class zn extends Cs{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=oa,l=oa,u=hi,d=Er,h=Mi,m=fa,p=zn.DEFAULT_ANISOTROPY,_=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Bo(),this.name="",this.source=new yh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jf).x}get height(){return this.source.getSize(Jf).y}get depth(){return this.source.getSize(Jf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ld:t.x=t.x-Math.floor(t.x);break;case oa:t.x=t.x<0?0:1;break;case Od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ld:t.y=t.y-Math.floor(t.y);break;case oa:t.y=t.y<0?0:1;break;case Od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=pg;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],S=m[1],y=m[5],T=m[9],R=m[2],b=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-R)<.01&&Math.abs(T-b)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+R)<.1&&Math.abs(T+b)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,F=(y+1)/2,X=(v+1)/2,L=(_+S)/4,O=(g+R)/4,te=(T+b)/4;return N>F&&N>X?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=L/r,u=O/r):F>X?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=L/l,u=te/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=O/u,l=te/u),this.set(r,l,u,i),this}let B=Math.sqrt((b-T)*(b-T)+(g-R)*(g-R)+(S-_)*(S-_));return Math.abs(B)<.001&&(B=1),this.x=(b-T)/B,this.y=(g-R)/B,this.z=(S-_)/B,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bb extends Cs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new zn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends bb{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Eg extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=new ue(1/0,1/0,1/0),i=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,_i):_i.fromBufferAttribute(u,d),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ec.copy(r.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),tc.subVectors(this.max,Ao),ls.subVectors(t.a,Ao),cs.subVectors(t.b,Ao),us.subVectors(t.c,Ao),Ia.subVectors(cs,ls),Ha.subVectors(us,cs),mr.subVectors(ls,us);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-mr.y,mr.x,0];return!$f(i,ls,cs,us,tc)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,ls,cs,us,tc))?!1:(nc.crossVectors(Ia,Ha),i=[nc.x,nc.y,nc.z],$f(i,ls,cs,us,tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],_i=new ue,ec=new Io,ls=new ue,cs=new ue,us=new ue,Ia=new ue,Ha=new ue,mr=new ue,Ao=new ue,tc=new ue,nc=new ue,xr=new ue;function $f(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xr.fromArray(o,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),_=r.dot(xr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Mb=new Io,Ro=new ue,ed=new ue;class Mh{constructor(t=new ue,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Mb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(ed)),this.expandByPoint(Ro.copy(t.center).sub(ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new ue,td=new ue,ic=new ue,Ga=new ue,nd=new ue,ac=new ue,id=new ue;class Eb{constructor(t=new ue,i=new ue(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){td.copy(t).add(i).multiplyScalar(.5),ic.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(td);const u=t.distanceTo(i)*.5,d=-this.direction.dot(ic),h=Ga.dot(this.direction),m=-Ga.dot(ic),p=Ga.lengthSq(),_=Math.abs(1-d*d);let g,S,y,T;if(_>0)if(g=d*m-h,S=d*h-m,T=u*_,g>=0)if(S>=-T)if(S<=T){const R=1/_;g*=R,S*=R,y=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S<=-T?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p):S<=T?(g=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(td).addScaledVector(ic,S),y}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,u){nd.subVectors(i,t),ac.subVectors(r,t),id.crossVectors(nd,ac);let d=this.direction.dot(id),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(ac.crossVectors(Ga,ac));if(m<0)return null;const p=h*this.direction.dot(nd.cross(Ga));if(p<0||m+p>d)return null;const _=-h*Ga.dot(id);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(t,i,r,l,u,d,h,m,p,_,g,S,y,T,R,b){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,g,S,y,T,R,b)}set(t,i,r,l,u,d,h,m,p,_,g,S,y,T,R,b){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=T,v[11]=R,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),d=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=d*_,y=d*g,T=h*_,R=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+T*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=T+y*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,y=m*g,T=p*_,R=p*g;i[0]=S+R*h,i[4]=T*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=y*h-T,i[6]=R+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,y=m*g,T=p*_,R=p*g;i[0]=S-R*h,i[4]=-d*g,i[8]=T+y*h,i[1]=y+T*h,i[5]=d*_,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,y=d*g,T=h*_,R=h*g;i[0]=m*_,i[4]=T*p-y,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=y*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,y=d*p,T=h*m,R=h*p;i[0]=m*_,i[4]=R-S*g,i[8]=T*g+y,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+T,i[10]=S-R*g}else if(t.order==="XZY"){const S=d*m,y=d*p,T=h*m,R=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+R,i[5]=d*_,i[9]=y*g-T,i[2]=T*g-y,i[6]=h*_,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tb,t,Ab)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Va.crossVectors(r,$n),Va.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Va.crossVectors(r,$n)),Va.normalize(),rc.crossVectors($n,Va),l[0]=Va.x,l[4]=rc.x,l[8]=$n.x,l[1]=Va.y,l[5]=rc.y,l[9]=$n.y,l[2]=Va.z,l[6]=rc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],y=r[13],T=r[2],R=r[6],b=r[10],v=r[14],B=r[3],N=r[7],F=r[11],X=r[15],L=l[0],O=l[4],te=l[8],w=l[12],C=l[1],k=l[5],ee=l[9],le=l[13],pe=l[2],de=l[6],z=l[10],Z=l[14],j=l[3],ge=l[7],ve=l[11],U=l[15];return u[0]=d*L+h*C+m*pe+p*j,u[4]=d*O+h*k+m*de+p*ge,u[8]=d*te+h*ee+m*z+p*ve,u[12]=d*w+h*le+m*Z+p*U,u[1]=_*L+g*C+S*pe+y*j,u[5]=_*O+g*k+S*de+y*ge,u[9]=_*te+g*ee+S*z+y*ve,u[13]=_*w+g*le+S*Z+y*U,u[2]=T*L+R*C+b*pe+v*j,u[6]=T*O+R*k+b*de+v*ge,u[10]=T*te+R*ee+b*z+v*ve,u[14]=T*w+R*le+b*Z+v*U,u[3]=B*L+N*C+F*pe+X*j,u[7]=B*O+N*k+F*de+X*ge,u[11]=B*te+N*ee+F*z+X*ve,u[15]=B*w+N*le+F*Z+X*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],S=t[10],y=t[14],T=t[3],R=t[7],b=t[11],v=t[15];return T*(+u*m*g-l*p*g-u*h*S+r*p*S+l*h*y-r*m*y)+R*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*_-u*m*_)+b*(+i*p*g-i*h*y-u*d*g+r*d*y+u*h*_-r*p*_)+v*(-l*h*_-i*m*g+i*h*S+l*d*g-r*d*S+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],S=t[10],y=t[11],T=t[12],R=t[13],b=t[14],v=t[15],B=g*b*p-R*S*p+R*m*y-h*b*y-g*m*v+h*S*v,N=T*S*p-_*b*p-T*m*y+d*b*y+_*m*v-d*S*v,F=_*R*p-T*g*p+T*h*y-d*R*y-_*h*v+d*g*v,X=T*g*m-_*R*m-T*h*S+d*R*S+_*h*b-d*g*b,L=i*B+r*N+l*F+u*X;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return t[0]=B*O,t[1]=(R*S*u-g*b*u-R*l*y+r*b*y+g*l*v-r*S*v)*O,t[2]=(h*b*u-R*m*u+R*l*p-r*b*p-h*l*v+r*m*v)*O,t[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*y-r*m*y)*O,t[4]=N*O,t[5]=(_*b*u-T*S*u+T*l*y-i*b*y-_*l*v+i*S*v)*O,t[6]=(T*m*u-d*b*u-T*l*p+i*b*p+d*l*v-i*m*v)*O,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*y+i*m*y)*O,t[8]=F*O,t[9]=(T*g*u-_*R*u-T*r*y+i*R*y+_*r*v-i*g*v)*O,t[10]=(d*R*u-T*h*u+T*r*p-i*R*p-d*r*v+i*h*v)*O,t[11]=(_*h*u-d*g*u-_*r*p+i*g*p+d*r*y-i*h*y)*O,t[12]=X*O,t[13]=(_*R*l-T*g*l+T*r*S-i*R*S-_*r*b+i*g*b)*O,t[14]=(T*h*l-d*R*l-T*r*m+i*R*m+d*r*b-i*h*b)*O,t[15]=(d*g*l-_*h*l+_*r*m-i*g*m-d*r*S+i*h*S)*O,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,S=u*p,y=u*_,T=u*g,R=d*_,b=d*g,v=h*g,B=m*p,N=m*_,F=m*g,X=r.x,L=r.y,O=r.z;return l[0]=(1-(R+v))*X,l[1]=(y+F)*X,l[2]=(T-N)*X,l[3]=0,l[4]=(y-F)*L,l[5]=(1-(S+v))*L,l[6]=(b+B)*L,l[7]=0,l[8]=(T+N)*O,l[9]=(b-B)*O,l[10]=(1-(S+R))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/u,_=1/d,g=1/h;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,i.setFromRotationMatrix(vi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Di,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(r-l),S=(i+t)/(i-t),y=(r+l)/(r-l);let T,R;if(m)T=u/(d-u),R=d*u/(d-u);else if(h===Di)T=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Rc)T=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Di,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),S=-(i+t)/(i-t),y=-(r+l)/(r-l);let T,R;if(m)T=1/(d-u),R=d/(d-u);else if(h===Di)T=-2/(d-u),R=-(d+u)/(d-u);else if(h===Rc)T=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new ue,vi=new xn,Tb=new ue(0,0,0),Ab=new ue(1,1,1),Va=new ue,rc=new ue,$n=new ue,Rx=new xn,Cx=new Fo;class da{constructor(t=0,i=0,r=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Rx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cx.setFromEuler(this),this.setFromQuaternion(Cx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class Tg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rb=0;const wx=new ue,ds=new Fo,ta=new xn,sc=new ue,Co=new ue,Cb=new ue,wb=new Fo,Dx=new ue(1,0,0),Ux=new ue(0,1,0),Nx=new ue(0,0,1),Lx={type:"added"},Db={type:"removed"},hs={type:"childadded",child:null},ad={type:"childremoved",child:null};class ni extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new ue,i=new da,r=new Fo,l=new ue(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new ft}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Dx,t)}rotateY(t){return this.rotateOnAxis(Ux,t)}rotateZ(t){return this.rotateOnAxis(Nx,t)}translateOnAxis(t,i){return wx.copy(t).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Dx,t)}translateY(t){return this.translateOnAxis(Ux,t)}translateZ(t){return this.translateOnAxis(Nx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?sc.copy(t):sc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Co,sc,this.up):ta.lookAt(sc,Co,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(ta),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(rn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lx),hs.child=t,this.dispatchEvent(hs),hs.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Db),ad.child=t,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lx),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,Cb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,wb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),S=d(t.skeletons),y=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new ue(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new ue,na=new ue,rd=new ue,ia=new ue,ps=new ue,ms=new ue,Ox=new ue,sd=new ue,od=new ue,ld=new ue,cd=new sn,ud=new sn,fd=new sn;class yi{constructor(t=new ue,i=new ue,r=new ue){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Si.subVectors(l,i),na.subVectors(r,i),rd.subVectors(t,i);const d=Si.dot(Si),h=Si.dot(na),m=Si.dot(rd),p=na.dot(na),_=na.dot(rd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,y=(p*m-h*_)*S,T=(d*_-h*m)*S;return u.set(1-y-T,T,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return cd.setScalar(0),ud.setScalar(0),fd.setScalar(0),cd.fromBufferAttribute(t,i),ud.fromBufferAttribute(t,r),fd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(cd,u.x),d.addScaledVector(ud,u.y),d.addScaledVector(fd,u.z),d}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),na.subVectors(t,i),Si.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Si.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(u,r),sd.subVectors(t,r);const m=ps.dot(sd),p=ms.dot(sd);if(m<=0&&p<=0)return i.copy(r);od.subVectors(t,l);const _=ps.dot(od),g=ms.dot(od);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(ps,d);ld.subVectors(t,u);const y=ps.dot(ld),T=ms.dot(ld);if(T>=0&&y<=T)return i.copy(u);const R=y*p-m*T;if(R<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(ms,h);const b=_*T-y*g;if(b<=0&&g-_>=0&&y-T>=0)return Ox.subVectors(u,l),h=(g-_)/(g-_+(y-T)),i.copy(l).addScaledVector(Ox,h);const v=1/(b+R+S);return d=R*v,h=S*v,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},oc={h:0,s:0,l:0};function dd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Bt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=xb(t,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=dd(d,u,t+1/3),this.g=dd(d,u,t),this.b=dd(d,u,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const r=Ag[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Dt.workingToColorSpace(Nn.copy(this),t),Math.round(Mt(Nn.r*255,0,255))*65536+Math.round(Mt(Nn.g*255,0,255))*256+Math.round(Mt(Nn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=di){Dt.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(oc);const r=jf(ka.h,oc.h,i),l=jf(ka.s,oc.s,i),u=jf(ka.l,oc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Bt;Bt.NAMES=Ag;let Ub=0;class Dc extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Ss,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Md,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yd&&(r.blendSrc=this.blendSrc),this.blendDst!==Md&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Rg extends Dc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new ue,lc=new Lt;let Nb=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Sx,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(t),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sx&&(t.usage=this.usage),t}}class Cg extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class wg extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Tr extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Lb=0;const fi=new xn,hd=new ni,xs=new ue,ei=new Io,wo=new Io,Mn=new ue;class Ka extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mg(t)?wg:Cg)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,r){return fi.makeTranslation(t,i,r),this.applyMatrix4(fi),this}scale(t,i,r){return fi.makeScale(t,i,r),this.applyMatrix4(fi),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ei.min,wo.min),ei.expandByPoint(Mn),Mn.addVectors(ei.max,wo.max),ei.expandByPoint(Mn)):(ei.expandByPoint(wo.min),ei.expandByPoint(wo.max))}ei.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Mn.fromBufferAttribute(h,p),m&&(xs.fromBufferAttribute(t,p),Mn.add(xs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let te=0;te<r.count;te++)h[te]=new ue,m[te]=new ue;const p=new ue,_=new ue,g=new ue,S=new Lt,y=new Lt,T=new Lt,R=new ue,b=new ue;function v(te,w,C){p.fromBufferAttribute(r,te),_.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),S.fromBufferAttribute(u,te),y.fromBufferAttribute(u,w),T.fromBufferAttribute(u,C),_.sub(p),g.sub(p),y.sub(S),T.sub(S);const k=1/(y.x*T.y-T.x*y.y);isFinite(k)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(k),b.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(k),h[te].add(R),h[w].add(R),h[C].add(R),m[te].add(b),m[w].add(b),m[C].add(b))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let te=0,w=B.length;te<w;++te){const C=B[te],k=C.start,ee=C.count;for(let le=k,pe=k+ee;le<pe;le+=3)v(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const N=new ue,F=new ue,X=new ue,L=new ue;function O(te){X.fromBufferAttribute(l,te),L.copy(X);const w=h[te];N.copy(w),N.sub(X.multiplyScalar(X.dot(w))).normalize(),F.crossVectors(L,w);const k=F.dot(m[te])<0?-1:1;d.setXYZW(te,N.x,N.y,N.z,k)}for(let te=0,w=B.length;te<w;++te){const C=B[te],k=C.start,ee=C.count;for(let le=k,pe=k+ee;le<pe;le+=3)O(t.getX(le+0)),O(t.getX(le+1)),O(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new ue,u=new ue,d=new ue,h=new ue,m=new ue,p=new ue,_=new ue,g=new ue;if(t)for(let S=0,y=t.count;S<y;S+=3){const T=t.getX(S+0),R=t.getX(S+1),b=t.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,b),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),h.add(_),m.add(_),p.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let y=0,T=0;for(let R=0,b=m.length;R<b;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*_;for(let v=0;v<_;v++)S[T++]=p[y++]}return new Ui(S,_,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ka,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=t(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zx=new xn,gr=new Eb,cc=new Mh,Px=new ue,uc=new ue,fc=new ue,dc=new ue,pd=new ue,hc=new ue,Bx=new ue,pc=new ue;class ha extends ni{constructor(t=new Ka,i=new Rg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(pd.fromBufferAttribute(g,t),d?hc.addScaledVector(pd,_):hc.addScaledVector(pd.sub(i),_))}i.add(hc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(u),gr.copy(t.ray).recast(t.near),!(cc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(cc,Px)===null||gr.origin.distanceToSquared(Px)>(t.far-t.near)**2))&&(zx.copy(u).invert(),gr.copy(t.ray).applyMatrix4(zx),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,R=S.length;T<R;T++){const b=S[T],v=d[b.materialIndex],B=Math.max(b.start,y.start),N=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let F=B,X=N;F<X;F+=3){const L=h.getX(F),O=h.getX(F+1),te=h.getX(F+2);l=mc(this,v,t,r,p,_,g,L,O,te),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let b=T,v=R;b<v;b+=3){const B=h.getX(b),N=h.getX(b+1),F=h.getX(b+2);l=mc(this,d,t,r,p,_,g,B,N,F),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,R=S.length;T<R;T++){const b=S[T],v=d[b.materialIndex],B=Math.max(b.start,y.start),N=Math.min(m.count,Math.min(b.start+b.count,y.start+y.count));for(let F=B,X=N;F<X;F+=3){const L=F,O=F+1,te=F+2;l=mc(this,v,t,r,p,_,g,L,O,te),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let b=T,v=R;b<v;b+=3){const B=b,N=b+1,F=b+2;l=mc(this,d,t,r,p,_,g,B,N,F),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function Ob(o,t,i,r,l,u,d,h){let m;if(t.side===kn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ja,h),m===null)return null;pc.copy(h),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,uc),o.getVertexPosition(m,fc),o.getVertexPosition(p,dc);const _=Ob(o,t,i,r,uc,fc,dc,Bx);if(_){const g=new ue;yi.getBarycoord(Bx,uc,fc,dc,g),l&&(_.uv=yi.getInterpolatedAttribute(l,h,m,p,g,new Lt)),u&&(_.uv1=yi.getInterpolatedAttribute(u,h,m,p,g,new Lt)),d&&(_.normal=yi.getInterpolatedAttribute(d,h,m,p,g,new ue),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ue,materialIndex:0};yi.getNormal(uc,fc,dc,S.normal),_.face=S,_.barycoord=g}return _}class Ho extends Ka{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let S=0,y=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(_,3)),this.setAttribute("uv",new Tr(g,2));function T(R,b,v,B,N,F,X,L,O,te,w){const C=F/O,k=X/te,ee=F/2,le=X/2,pe=L/2,de=O+1,z=te+1;let Z=0,j=0;const ge=new ue;for(let ve=0;ve<z;ve++){const U=ve*k-le;for(let ae=0;ae<de;ae++){const Se=ae*C-ee;ge[R]=Se*B,ge[b]=U*N,ge[v]=pe,p.push(ge.x,ge.y,ge.z),ge[R]=0,ge[b]=0,ge[v]=L>0?1:-1,_.push(ge.x,ge.y,ge.z),g.push(ae/O),g.push(1-ve/te),Z+=1}}for(let ve=0;ve<te;ve++)for(let U=0;U<O;U++){const ae=S+U+de*ve,Se=S+U+de*(ve+1),Ae=S+(U+1)+de*(ve+1),Oe=S+(U+1)+de*ve;m.push(ae,Se,Oe),m.push(Se,Ae,Oe),j+=6}h.addGroup(y,j,w),y+=j,S+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const r=As(o[i]);for(const l in r)t[l]=r[l]}return t}function zb(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Dg(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const Pb={clone:As,merge:On};var Bb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Dc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bb,this.fragmentShader=Fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=zb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ug extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new ue,Fx=new Lt,Ix=new Lt;class bi extends Ug{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ch*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ch*2*Math.atan(Math.tan(Yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,Fx,Ix),i.subVectors(Ix,Fx)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class Ib extends ni{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(gs,_s,t,i);l.layers=this.layers,this.add(l);const u=new bi(gs,_s,t,i);u.layers=this.layers,this.add(u);const d=new bi(gs,_s,t,i);d.layers=this.layers,this.add(d);const h=new bi(gs,_s,t,i);h.layers=this.layers,this.add(h);const m=new bi(gs,_s,t,i);m.layers=this.layers,this.add(m);const p=new bi(gs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,S,y),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Ng extends zn{constructor(t=[],i=Ms,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hb extends Rr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Ng(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ho(5,5,5),u=new Ni({name:"CubemapFromEquirect",uniforms:As(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ca});u.uniforms.tEquirect.value=i;const d=new ha(l,u),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=hi),new Ib(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class xc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gb={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const b=i.getJointPose(R,r),v=this._getHandJoint(p,R);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&S>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Gb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Vb extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class kb extends zn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ti,_=ti,g,S){super(null,d,h,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new ue,Xb=new ue,Wb=new ft;class br{constructor(t=new ue(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=xd.subVectors(r,i).cross(Xb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(xd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Wb.getNormalMatrix(t),l=this.coplanarPoint(xd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Mh,qb=new Lt(.5,.5),gc=new ue;class Lg{constructor(t=new br,i=new br,r=new br,l=new br,u=new br,d=new br){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Di,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],y=u[7],T=u[8],R=u[9],b=u[10],v=u[11],B=u[12],N=u[13],F=u[14],X=u[15];if(l[0].setComponents(p-d,y-_,v-T,X-B).normalize(),l[1].setComponents(p+d,y+_,v+T,X+B).normalize(),l[2].setComponents(p+h,y+g,v+R,X+N).normalize(),l[3].setComponents(p-h,y-g,v-R,X-N).normalize(),r)l[4].setComponents(m,S,b,F).normalize(),l[5].setComponents(p-m,y-S,v-b,X-F).normalize();else if(l[4].setComponents(p-m,y-S,v-b,X-F).normalize(),i===Di)l[5].setComponents(p+m,y+S,v+b,X+F).normalize();else if(i===Rc)l[5].setComponents(m,S,b,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=qb.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gc.x=l.normal.x>0?t.max.x:t.min.x,gc.y=l.normal.y>0?t.max.y:t.min.y,gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Og extends zn{constructor(t,i,r=Ar,l,u,d,h=ti,m=ti,p,_=Oo,g=1){if(_!==Oo&&_!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zg extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Go extends Ka{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=t/h,S=i/m,y=[],T=[],R=[],b=[];for(let v=0;v<_;v++){const B=v*S-d;for(let N=0;N<p;N++){const F=N*g-u;T.push(F,-B,0),R.push(0,0,1),b.push(N/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let B=0;B<h;B++){const N=B+p*v,F=B+p*(v+1),X=B+1+p*(v+1),L=B+1+p*v;y.push(N,F,L),y.push(F,X,L)}this.setIndex(y),this.setAttribute("position",new Tr(T,3)),this.setAttribute("normal",new Tr(R,3)),this.setAttribute("uv",new Tr(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yb extends Dc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jb extends Dc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pg extends Ug{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Zb extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Hx(o,t,i,r){const l=Kb(r);switch(i){case vg:return o*t;case bg:return o*t/l.components*l.byteLength;case _h:return o*t/l.components*l.byteLength;case vh:return o*t*2/l.components*l.byteLength;case Sh:return o*t*2/l.components*l.byteLength;case Sg:return o*t*3/l.components*l.byteLength;case Mi:return o*t*4/l.components*l.byteLength;case bh:return o*t*4/l.components*l.byteLength;case Sc:case bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Pd:case Fd:return Math.max(o,16)*Math.max(t,8)/4;case zd:case Bd:return Math.max(o,8)*Math.max(t,8)/2;case Id:case Hd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case jd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case $d:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case th:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case nh:case ih:case ah:return Math.ceil(o/4)*Math.ceil(t/4)*16;case rh:case sh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case oh:case lh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Kb(o){switch(o){case fa:case mg:return{byteLength:1,components:1};case No:case xg:case Rs:return{byteLength:2,components:1};case xh:case gh:return{byteLength:2,components:4};case Ar:case mh:case la:return{byteLength:4,components:1};case gg:case _g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bg(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Qb(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<g.length;y++){const T=g[S],R=g[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++S,g[S]=R)}g.length=S+1;for(let y=0,T=g.length;y<T;y++){const R=g[y];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$b=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,by=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,My=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ky=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Jb,alphahash_pars_fragment:$b,alphamap_fragment:ey,alphamap_pars_fragment:ty,alphatest_fragment:ny,alphatest_pars_fragment:iy,aomap_fragment:ay,aomap_pars_fragment:ry,batching_pars_vertex:sy,batching_vertex:oy,begin_vertex:ly,beginnormal_vertex:cy,bsdfs:uy,iridescence_fragment:fy,bumpmap_pars_fragment:dy,clipping_planes_fragment:hy,clipping_planes_pars_fragment:py,clipping_planes_pars_vertex:my,clipping_planes_vertex:xy,color_fragment:gy,color_pars_fragment:_y,color_pars_vertex:vy,color_vertex:Sy,common:by,cube_uv_reflection_fragment:yy,defaultnormal_vertex:My,displacementmap_pars_vertex:Ey,displacementmap_vertex:Ty,emissivemap_fragment:Ay,emissivemap_pars_fragment:Ry,colorspace_fragment:Cy,colorspace_pars_fragment:wy,envmap_fragment:Dy,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Ny,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Xy,envmap_vertex:Oy,fog_vertex:zy,fog_pars_vertex:Py,fog_fragment:By,fog_pars_fragment:Fy,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Vy,lights_pars_begin:ky,lights_toon_fragment:Wy,lights_toon_pars_fragment:qy,lights_phong_fragment:Yy,lights_phong_pars_fragment:jy,lights_physical_fragment:Zy,lights_physical_pars_fragment:Ky,lights_fragment_begin:Qy,lights_fragment_maps:Jy,lights_fragment_end:$y,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:aM,map_pars_fragment:rM,map_particle_fragment:sM,map_particle_pars_fragment:oM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:uM,morphcolor_vertex:fM,morphnormal_vertex:dM,morphtarget_pars_vertex:hM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:xM,normal_pars_fragment:gM,normal_pars_vertex:_M,normal_vertex:vM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:bM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:EM,opaque_fragment:TM,packing:AM,premultiplied_alpha_fragment:RM,project_vertex:CM,dithering_fragment:wM,dithering_pars_fragment:DM,roughnessmap_fragment:UM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:LM,shadowmap_pars_vertex:OM,shadowmap_vertex:zM,shadowmask_pars_fragment:PM,skinbase_vertex:BM,skinning_pars_vertex:FM,skinning_vertex:IM,skinnormal_vertex:HM,specularmap_fragment:GM,specularmap_pars_fragment:VM,tonemapping_fragment:kM,tonemapping_pars_fragment:XM,transmission_fragment:WM,transmission_pars_fragment:qM,uv_pars_fragment:YM,uv_pars_vertex:jM,uv_vertex:ZM,worldpos_vertex:KM,background_vert:QM,background_frag:JM,backgroundCube_vert:$M,backgroundCube_frag:e3,cube_vert:t3,cube_frag:n3,depth_vert:i3,depth_frag:a3,distanceRGBA_vert:r3,distanceRGBA_frag:s3,equirect_vert:o3,equirect_frag:l3,linedashed_vert:c3,linedashed_frag:u3,meshbasic_vert:f3,meshbasic_frag:d3,meshlambert_vert:h3,meshlambert_frag:p3,meshmatcap_vert:m3,meshmatcap_frag:x3,meshnormal_vert:g3,meshnormal_frag:_3,meshphong_vert:v3,meshphong_frag:S3,meshphysical_vert:b3,meshphysical_frag:y3,meshtoon_vert:M3,meshtoon_frag:E3,points_vert:T3,points_frag:A3,shadow_vert:R3,shadow_frag:C3,sprite_vert:w3,sprite_frag:D3},Le={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},wi={basic:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:On([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:On([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:On([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:On([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:On([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:On([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:On([Le.common,Le.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:On([Le.lights,Le.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};wi.physical={uniforms:On([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const _c={r:0,b:0,g:0},vr=new da,U3=new xn;function N3(o,t,i,r,l,u,d){const h=new Bt(0);let m=u===!0?0:1,p,_,g=null,S=0,y=null;function T(N){let F=N.isScene===!0?N.background:null;return F&&F.isTexture&&(F=(N.backgroundBlurriness>0?i:t).get(F)),F}function R(N){let F=!1;const X=T(N);X===null?v(h,m):X&&X.isColor&&(v(X,1),F=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(N,F){const X=T(F);X&&(X.isCubeTexture||X.mapping===wc)?(_===void 0&&(_=new ha(new Ho(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:As(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,O,te){this.matrixWorld.copyPosition(te.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),vr.copy(F.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(U3.makeRotationFromEuler(vr)),_.material.toneMapped=Dt.getTransfer(X.colorSpace)!==Vt,(g!==X||S!==X.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new ha(new Go(2,2),new Ni({name:"BackgroundMaterial",uniforms:As(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(X.colorSpace)!==Vt,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||S!==X.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,F){N.getRGB(_c,Dg(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,F,d)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,F=1){h.set(N),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(h,m)},render:R,addToRenderList:b,dispose:B}}function L3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,k,ee,le,pe){let de=!1;const z=g(le,ee,k);u!==z&&(u=z,p(u.object)),de=y(C,le,ee,pe),de&&T(C,le,ee,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,F(C,k,ee,le),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,k,ee){const le=ee.wireframe===!0;let pe=r[C.id];pe===void 0&&(pe={},r[C.id]=pe);let de=pe[k.id];de===void 0&&(de={},pe[k.id]=de);let z=de[le];return z===void 0&&(z=S(m()),de[le]=z),z}function S(C){const k=[],ee=[],le=[];for(let pe=0;pe<i;pe++)k[pe]=0,ee[pe]=0,le[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:le,object:C,attributes:{},index:null}}function y(C,k,ee,le){const pe=u.attributes,de=k.attributes;let z=0;const Z=ee.getAttributes();for(const j in Z)if(Z[j].location>=0){const ve=pe[j];let U=de[j];if(U===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),ve===void 0||ve.attribute!==U||U&&ve.data!==U.data)return!0;z++}return u.attributesNum!==z||u.index!==le}function T(C,k,ee,le){const pe={},de=k.attributes;let z=0;const Z=ee.getAttributes();for(const j in Z)if(Z[j].location>=0){let ve=de[j];ve===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor));const U={};U.attribute=ve,ve&&ve.data&&(U.data=ve.data),pe[j]=U,z++}u.attributes=pe,u.attributesNum=z,u.index=le}function R(){const C=u.newAttributes;for(let k=0,ee=C.length;k<ee;k++)C[k]=0}function b(C){v(C,0)}function v(C,k){const ee=u.newAttributes,le=u.enabledAttributes,pe=u.attributeDivisors;ee[C]=1,le[C]===0&&(o.enableVertexAttribArray(C),le[C]=1),pe[C]!==k&&(o.vertexAttribDivisor(C,k),pe[C]=k)}function B(){const C=u.newAttributes,k=u.enabledAttributes;for(let ee=0,le=k.length;ee<le;ee++)k[ee]!==C[ee]&&(o.disableVertexAttribArray(ee),k[ee]=0)}function N(C,k,ee,le,pe,de,z){z===!0?o.vertexAttribIPointer(C,k,ee,pe,de):o.vertexAttribPointer(C,k,ee,le,pe,de)}function F(C,k,ee,le){R();const pe=le.attributes,de=ee.getAttributes(),z=k.defaultAttributeValues;for(const Z in de){const j=de[Z];if(j.location>=0){let ge=pe[Z];if(ge===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),ge!==void 0){const ve=ge.normalized,U=ge.itemSize,ae=t.get(ge);if(ae===void 0)continue;const Se=ae.buffer,Ae=ae.type,Oe=ae.bytesPerElement,ne=Ae===o.INT||Ae===o.UNSIGNED_INT||ge.gpuType===mh;if(ge.isInterleavedBufferAttribute){const se=ge.data,Te=se.stride,Pe=ge.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<j.locationSize;ke++)v(j.location+ke,se.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<j.locationSize;ke++)b(j.location+ke);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let ke=0;ke<j.locationSize;ke++)N(j.location+ke,U/j.locationSize,Ae,ve,Te*Oe,(Pe+U/j.locationSize*ke)*Oe,ne)}else{if(ge.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)v(j.location+se,ge.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let se=0;se<j.locationSize;se++)b(j.location+se);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let se=0;se<j.locationSize;se++)N(j.location+se,U/j.locationSize,Ae,ve,U*Oe,U/j.locationSize*se*Oe,ne)}}else if(z!==void 0){const ve=z[Z];if(ve!==void 0)switch(ve.length){case 2:o.vertexAttrib2fv(j.location,ve);break;case 3:o.vertexAttrib3fv(j.location,ve);break;case 4:o.vertexAttrib4fv(j.location,ve);break;default:o.vertexAttrib1fv(j.location,ve)}}}}B()}function X(){te();for(const C in r){const k=r[C];for(const ee in k){const le=k[ee];for(const pe in le)_(le[pe].object),delete le[pe];delete k[ee]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const ee in k){const le=k[ee];for(const pe in le)_(le[pe].object),delete le[pe];delete k[ee]}delete r[C.id]}function O(C){for(const k in r){const ee=r[k];if(ee[C.id]===void 0)continue;const le=ee[C.id];for(const pe in le)_(le[pe].object),delete le[pe];delete ee[C.id]}}function te(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:te,resetDefaultState:w,dispose:X,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:b,disableUnusedAttributes:B}}function O3(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];i.update(y,r,1)}function m(p,_,g,S){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)d(p[T],_[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let T=0;for(let R=0;R<g;R++)T+=_[R]*S[R];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function z3(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Mi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const te=O===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==fa&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==la&&!te)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ot("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:F,vertexTextures:X,maxSamples:L}}function P3(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new br,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||l;return l=S,r=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,y){const T=g.clippingPlanes,R=g.clipIntersection,b=g.clipShadows,v=o.get(g);if(!l||T===null||T.length===0||u&&!b)u?_(null):p();else{const B=u?0:r,N=B*4;let F=v.clippingState||null;m.value=F,F=_(T,S,N,y);for(let X=0;X!==N;++X)F[X]=i[X];v.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,S,y,T){const R=g!==null?g.length:0;let b=null;if(R!==0){if(b=m.value,T!==!0||b===null){const v=y+R*4,B=S.matrixWorldInverse;h.getNormalMatrix(B),(b===null||b.length<v)&&(b=new Float32Array(v));for(let N=0,F=y;N!==R;++N,F+=4)d.copy(g[N]).applyMatrix4(B,h),d.normal.toArray(b,F),b[F+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,b}}function B3(o){let t=new WeakMap;function i(d,h){return h===Ud?d.mapping=Ms:h===Nd&&(d.mapping=Es),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ud||h===Nd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Hb(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const qa=4,Gx=[.125,.215,.35,.446,.526,.582],Mr=20,F3=256,Do=new Pg,Vx=new Bt;let gd=null,_d=0,vd=0,Sd=!1;const I3=new ue;class kx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=I3}=u;gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gd,_d,vd),this._renderer.xr.enabled=Sd,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ms||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Rs,format:Mi,colorSpace:Ts,depthBuffer:!1},l=Xx(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xx(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H3(u)),this._blurMaterial=V3(u,t,i),this._ggxMaterial=G3(u,t,i)}return l}_compileMaterial(t){const i=new ha(new Ka,t);this._renderer.compile(i,Do)}_sceneToCubeUV(t,i,r,l,u){const m=new bi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Vx),g.toneMapping=Ya,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ha(new Ho,new Rg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,b=R.material;let v=!1;const B=t.background;B?B.isColor&&(b.color.copy(B),t.background=null,v=!0):(b.color.copy(Vx),v=!0);for(let N=0;N<6;N++){const F=N%3;F===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[N],u.y,u.z)):F===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[N]));const X=this._cubeSize;vs(l,F*X,N>2?X:0,X,X),g.setRenderTarget(l),v&&g.render(R,m),g.render(t,m)}g.toneMapping=y,g.autoClear=S,t.background=B}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ms||t.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;vs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Do)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=.05+p*.95,y=g*S,{_lodMax:T}=this,R=this._sizeLods[r],b=3*R*(r>T-qa?r-T+qa:0),v=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,vs(u,b,v,3*R,2*R),l.setRenderTarget(u),l.render(h,Do),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,vs(t,b,v,3*R,2*R),l.setRenderTarget(t),l.render(h,Do)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Mr-1),R=u/T,b=isFinite(u)?1+Math.floor(_*R):Mr;b>Mr&&ot(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Mr}`);const v=[];let B=0;for(let O=0;O<Mr;++O){const te=O/R,w=Math.exp(-te*te/2);v.push(w),O===0?B+=w:O<b&&(B+=2*w)}for(let O=0;O<v.length;O++)v[O]=v[O]/B;S.envMap.value=t.texture,S.samples.value=b,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=T,S.mipInt.value=N-r;const F=this._sizeLods[l],X=3*F*(l>N-qa?l-N+qa:0),L=4*(this._cubeSize-F);vs(i,X,L,3*F,2*F),m.setRenderTarget(i),m.render(g,Do)}}function H3(o){const t=[],i=[],r=[];let l=o;const u=o-qa+1+Gx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-qa?m=Gx[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,R=3,b=2,v=1,B=new Float32Array(R*T*y),N=new Float32Array(b*T*y),F=new Float32Array(v*T*y);for(let L=0;L<y;L++){const O=L%3*2/3-1,te=L>2?0:-1,w=[O,te,0,O+2/3,te,0,O+2/3,te+1,0,O,te,0,O+2/3,te+1,0,O,te+1,0];B.set(w,R*T*L),N.set(S,b*T*L);const C=[L,L,L,L,L,L];F.set(C,v*T*L)}const X=new Ka;X.setAttribute("position",new Ui(B,R)),X.setAttribute("uv",new Ui(N,b)),X.setAttribute("faceIndex",new Ui(F,v)),r.push(new ha(X,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Xx(o,t,i){const r=new Rr(o,t,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vs(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function G3(o,t,i){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function V3(o,t,i){const r=new Float32Array(Mr),l=new ue(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Wx(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function qx(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k3(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Ud||m===Nd,_=m===Ms||m===Es;if(p||_){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new kx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new kx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function X3(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("WebGLRenderer: "+r+" extension not supported."),l}}}function W3(o,t,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(t.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,T=g.attributes.position;let R=0;if(y!==null){const B=y.array;R=y.version;for(let N=0,F=B.length;N<F;N+=3){const X=B[N+0],L=B[N+1],O=B[N+2];S.push(X,L,L,O,O,X)}}else if(T!==void 0){const B=T.array;R=T.version;for(let N=0,F=B.length/3-1;N<F;N+=3){const X=N+0,L=N+1,O=N+2;S.push(X,L,L,O,O,X)}}else return;const b=new(Mg(S)?wg:Cg)(S,1);b.version=R;const v=u.get(g);v&&t.remove(v),u.set(g,b)}function _(g){const S=u.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function q3(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function p(S,y,T){T!==0&&(o.drawElementsInstanced(r,y,u,S*d,T),i.update(y,r,T))}function _(S,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,T);let b=0;for(let v=0;v<T;v++)b+=y[v];i.update(b,r,1)}function g(S,y,T,R){if(T===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<S.length;v++)p(S[v]/d,y[v],R[v]);else{b.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,R,0,T);let v=0;for(let B=0;B<T;B++)v+=y[B]*R[B];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function Y3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:rn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function j3(o,t,i){const r=new WeakMap,l=new sn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let C=function(){te.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const T=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let F=0;T===!0&&(F=1),R===!0&&(F=2),b===!0&&(F=3);let X=h.attributes.position.count*F,L=1;X>t.maxTextureSize&&(L=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const O=new Float32Array(X*L*4*g),te=new Eg(O,X,L,g);te.type=la,te.needsUpdate=!0;const w=F*4;for(let k=0;k<g;k++){const ee=v[k],le=B[k],pe=N[k],de=X*L*4*k;for(let z=0;z<ee.count;z++){const Z=z*w;T===!0&&(l.fromBufferAttribute(ee,z),O[de+Z+0]=l.x,O[de+Z+1]=l.y,O[de+Z+2]=l.z,O[de+Z+3]=0),R===!0&&(l.fromBufferAttribute(le,z),O[de+Z+4]=l.x,O[de+Z+5]=l.y,O[de+Z+6]=l.z,O[de+Z+7]=0),b===!0&&(l.fromBufferAttribute(pe,z),O[de+Z+8]=l.x,O[de+Z+9]=l.y,O[de+Z+10]=l.z,O[de+Z+11]=pe.itemSize===4?l.w:1)}}S={count:g,texture:te,size:new Lt(X,L)},r.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let b=0;b<p.length;b++)T+=p[b];const R=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function Z3(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Fg=new zn,Yx=new Og(1,1),Ig=new Eg,Hg=new yb,Gg=new Ng,jx=[],Zx=[],Kx=new Float32Array(16),Qx=new Float32Array(9),Jx=new Float32Array(4);function ws(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=jx[l];if(u===void 0&&(u=new Float32Array(l),jx[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Nc(o,t){let i=Zx[t];i===void 0&&(i=new Int32Array(t),Zx[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function K3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Q3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function J3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function $3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function e1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Jx.set(r),o.uniformMatrix2fv(this.addr,!1,Jx),_n(i,r)}}function t1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Qx.set(r),o.uniformMatrix3fv(this.addr,!1,Qx),_n(i,r)}}function n1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Kx.set(r),o.uniformMatrix4fv(this.addr,!1,Kx),_n(i,r)}}function i1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function a1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function r1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function s1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function o1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function l1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function c1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function u1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function f1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yx.compareFunction=yg,u=Yx):u=Fg,i.setTexture2D(t||u,l)}function d1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Hg,l)}function h1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Gg,l)}function p1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Ig,l)}function m1(o){switch(o){case 5126:return K3;case 35664:return Q3;case 35665:return J3;case 35666:return $3;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return a1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function x1(o,t){o.uniform1fv(this.addr,t)}function g1(o,t){const i=ws(t,this.size,2);o.uniform2fv(this.addr,i)}function _1(o,t){const i=ws(t,this.size,3);o.uniform3fv(this.addr,i)}function v1(o,t){const i=ws(t,this.size,4);o.uniform4fv(this.addr,i)}function S1(o,t){const i=ws(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function b1(o,t){const i=ws(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function y1(o,t){const i=ws(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function M1(o,t){o.uniform1iv(this.addr,t)}function E1(o,t){o.uniform2iv(this.addr,t)}function T1(o,t){o.uniform3iv(this.addr,t)}function A1(o,t){o.uniform4iv(this.addr,t)}function R1(o,t){o.uniform1uiv(this.addr,t)}function C1(o,t){o.uniform2uiv(this.addr,t)}function w1(o,t){o.uniform3uiv(this.addr,t)}function D1(o,t){o.uniform4uiv(this.addr,t)}function U1(o,t,i){const r=this.cache,l=t.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Fg,u[d])}function N1(o,t,i){const r=this.cache,l=t.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Hg,u[d])}function L1(o,t,i){const r=this.cache,l=t.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Gg,u[d])}function O1(o,t,i){const r=this.cache,l=t.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Ig,u[d])}function z1(o){switch(o){case 5126:return x1;case 35664:return g1;case 35665:return _1;case 35666:return v1;case 35674:return S1;case 35675:return b1;case 35676:return y1;case 5124:case 35670:return M1;case 35667:case 35671:return E1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return C1;case 36295:return w1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return O1}}class P1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=m1(i.type)}}class B1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=z1(i.type)}}class F1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function $x(o,t){o.seq.push(t),o.map[t.id]=t}function I1(o,t,i){const r=o.name,l=r.length;for(bd.lastIndex=0;;){const u=bd.exec(r),d=bd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){$x(i,p===void 0?new P1(h,o,t):new B1(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new F1(h),$x(i,g)),i=g}}}class Ec{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);I1(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function eg(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const H1=37297;let G1=0;function V1(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const tg=new ft;function k1(o){Dt._getMatrix(tg,Dt.workingColorSpace,o);const t=`mat3( ${tg.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(o)){case Ac:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ng(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+V1(o.getShaderSource(t),h)}else return u}function X1(o,t){const i=k1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function W1(o,t){let i;switch(t){case ZS:i="Linear";break;case KS:i="Reinhard";break;case QS:i="Cineon";break;case JS:i="ACESFilmic";break;case eb:i="AgX";break;case tb:i="Neutral";break;case $S:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new ue;function q1(){Dt.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),t=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function j1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Z1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Uo(o){return o!==""}function ig(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ag(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(o){return o.replace(K1,J1)}const Q1=new Map;function J1(o,t){let i=pt[t];if(i===void 0){const r=Q1.get(t);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return uh(i)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(o){return o.replace($1,eE)}function eE(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function sg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tE(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===dg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===CS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function nE(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:t="ENVMAP_TYPE_CUBE";break;case wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function aE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case hg:t="ENVMAP_BLENDING_MULTIPLY";break;case YS:t="ENVMAP_BLENDING_MIX";break;case jS:t="ENVMAP_BLENDING_ADD";break}return t}function rE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function sE(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=tE(i),p=nE(i),_=iE(i),g=aE(i),S=rE(i),y=Y1(i),T=j1(u),R=l.createProgram();let b,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),v.length>0&&(v+=`
`)):(b=[sg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),v=[sg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ya?W1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,X1("linearToOutputTexel",i.outputColorSpace),q1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=uh(d),d=ig(d,i),d=ag(d,i),h=uh(h),h=ig(h,i),h=ag(h,i),d=rg(d),h=rg(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===bx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=B+b+d,F=B+v+h,X=eg(l,l.VERTEX_SHADER,N),L=eg(l,l.FRAGMENT_SHADER,F);l.attachShader(R,X),l.attachShader(R,L),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(k){if(o.debug.checkShaderErrors){const ee=l.getProgramInfoLog(R)||"",le=l.getShaderInfoLog(X)||"",pe=l.getShaderInfoLog(L)||"",de=ee.trim(),z=le.trim(),Z=pe.trim();let j=!0,ge=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,X,L);else{const ve=ng(l,X,"vertex"),U=ng(l,L,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+ve+`
`+U)}else de!==""?ot("WebGLProgram: Program Info Log:",de):(z===""||Z==="")&&(ge=!1);ge&&(k.diagnostics={runnable:j,programLog:de,vertexShader:{log:z,prefix:b},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(X),l.deleteShader(L),te=new Ec(l,R),w=Z1(l,R)}let te;this.getUniforms=function(){return te===void 0&&O(this),te};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,H1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=G1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=X,this.fragmentShader=L,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new cE(t),i.set(t,r)),r}}class cE{constructor(t){this.id=oE++,this.code=t,this.usedTimes=0}}function uE(o,t,i,r,l,u,d){const h=new Tg,m=new lE,p=new Set,_=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,C,k,ee,le){const pe=ee.fog,de=le.geometry,z=w.isMeshStandardMaterial?ee.environment:null,Z=(w.isMeshStandardMaterial?i:t).get(w.envMap||z),j=Z&&Z.mapping===wc?Z.image.height:null,ge=T[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const ve=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=ve!==void 0?ve.length:0;let ae=0;de.morphAttributes.position!==void 0&&(ae=1),de.morphAttributes.normal!==void 0&&(ae=2),de.morphAttributes.color!==void 0&&(ae=3);let Se,Ae,Oe,ne;if(ge){const At=wi[ge];Se=At.vertexShader,Ae=At.fragmentShader}else Se=w.vertexShader,Ae=w.fragmentShader,m.update(w),Oe=m.getVertexShaderID(w),ne=m.getFragmentShaderID(w);const se=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Pe=le.isInstancedMesh===!0,ke=le.isBatchedMesh===!0,lt=!!w.map,tn=!!w.matcap,dt=!!Z,Tt=!!w.aoMap,I=!!w.lightMap,ht=!!w.bumpMap,mt=!!w.normalMap,Ot=!!w.displacementMap,Ge=!!w.emissiveMap,Xt=!!w.metalnessMap,je=!!w.roughnessMap,at=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,Q=w.iridescence>0,me=w.sheen>0,be=w.transmission>0,ce=at&&!!w.anisotropyMap,qe=D&&!!w.clearcoatMap,Ne=D&&!!w.clearcoatNormalMap,Qe=D&&!!w.clearcoatRoughnessMap,We=Q&&!!w.iridescenceMap,ye=Q&&!!w.iridescenceThicknessMap,Ee=me&&!!w.sheenColorMap,Ye=me&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,ze=!!w.specularColorMap,nt=!!w.specularIntensityMap,H=be&&!!w.transmissionMap,De=be&&!!w.thicknessMap,Ce=!!w.gradientMap,we=!!w.alphaMap,Me=w.alphaTest>0,_e=!!w.alphaHash,Fe=!!w.extensions;let it=Ya;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(it=o.toneMapping);const Ft={shaderID:ge,shaderType:w.type,shaderName:w.name,vertexShader:Se,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Oe,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ke,batchingColor:ke&&le._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&le.instanceColor!==null,instancingMorph:Pe&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:se===null?o.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ts,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:tn,envMap:dt,envMapMode:dt&&Z.mapping,envMapCubeUVHeight:j,aoMap:Tt,lightMap:I,bumpMap:ht,normalMap:mt,displacementMap:S&&Ot,emissiveMap:Ge,normalMapObjectSpace:mt&&w.normalMapType===sb,normalMapTangentSpace:mt&&w.normalMapType===rb,metalnessMap:Xt,roughnessMap:je,anisotropy:at,anisotropyMap:ce,clearcoat:D,clearcoatMap:qe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Qe,dispersion:M,iridescence:Q,iridescenceMap:We,iridescenceThicknessMap:ye,sheen:me,sheenColorMap:Ee,sheenRoughnessMap:Ye,specularMap:Ve,specularColorMap:ze,specularIntensityMap:nt,transmission:be,transmissionMap:H,thicknessMap:De,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:Me,alphaHash:_e,combine:w.combine,mapUv:lt&&R(w.map.channel),aoMapUv:Tt&&R(w.aoMap.channel),lightMapUv:I&&R(w.lightMap.channel),bumpMapUv:ht&&R(w.bumpMap.channel),normalMapUv:mt&&R(w.normalMap.channel),displacementMapUv:Ot&&R(w.displacementMap.channel),emissiveMapUv:Ge&&R(w.emissiveMap.channel),metalnessMapUv:Xt&&R(w.metalnessMap.channel),roughnessMapUv:je&&R(w.roughnessMap.channel),anisotropyMapUv:ce&&R(w.anisotropyMap.channel),clearcoatMapUv:qe&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&R(w.sheenRoughnessMap.channel),specularMapUv:Ve&&R(w.specularMap.channel),specularColorMapUv:ze&&R(w.specularColorMap.channel),specularIntensityMapUv:nt&&R(w.specularIntensityMap.channel),transmissionMapUv:H&&R(w.transmissionMap.channel),thicknessMapUv:De&&R(w.thicknessMap.channel),alphaMapUv:we&&R(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(mt||at),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!de.attributes.uv&&(lt||we),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Te,skinning:le.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(B(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function B(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function F(w){const C=T[w.type];let k;if(C){const ee=wi[C];k=Pb.clone(ee.uniforms)}else k=w.uniforms;return k}function X(w,C){let k;for(let ee=0,le=_.length;ee<le;ee++){const pe=_[ee];if(pe.cacheKey===C){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new sE(o,C,w,u),_.push(k)),k}function L(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function O(w){m.remove(w)}function te(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:F,acquireProgram:X,releaseProgram:L,releaseShaderCache:O,programs:_,dispose:te}}function fE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function dE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function og(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function lg(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(g,S,y,T,R,b){let v=o[t];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:T,renderOrder:g.renderOrder,z:R,group:b},o[t]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=R,v.group=b),t++,v}function h(g,S,y,T,R,b){const v=d(g,S,y,T,R,b);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,S,y,T,R,b){const v=d(g,S,y,T,R,b);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||dE),r.length>1&&r.sort(S||og),l.length>1&&l.sort(S||og)}function _(){for(let g=t,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function hE(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new lg,o.set(r,[d])):l>=u.length?(d=new lg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function pE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ue,color:new Bt};break;case"SpotLight":i={position:new ue,direction:new ue,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ue,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ue,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return o[t.id]=i,i}}}function mE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let xE=0;function gE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _E(o){const t=new pE,i=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const l=new ue,u=new xn,d=new xn;function h(p){let _=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,T=0,R=0,b=0,v=0,B=0,N=0,F=0,X=0,L=0,O=0;p.sort(gE);for(let w=0,C=p.length;w<C;w++){const k=p[w],ee=k.color,le=k.intensity,pe=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ee.r*le,g+=ee.g*le,S+=ee.b*le;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],le);O++}else if(k.isDirectionalLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,j=i.get(k);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=de,r.directionalShadowMatrix[y]=k.shadow.matrix,B++}r.directional[y]=z,y++}else if(k.isSpotLight){const z=t.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(ee).multiplyScalar(le),z.distance=pe,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[R]=z;const Z=k.shadow;if(k.map&&(r.spotLightMap[X]=k.map,X++,Z.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[R]=Z.matrix,k.castShadow){const j=i.get(k);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=de,F++}R++}else if(k.isRectAreaLight){const z=t.get(k);z.color.copy(ee).multiplyScalar(le),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[b]=z,b++}else if(k.isPointLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const Z=k.shadow,j=i.get(k);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=k.shadow.matrix,N++}r.point[T]=z,T++}else if(k.isHemisphereLight){const z=t.get(k);z.skyColor.copy(k.color).multiplyScalar(le),z.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[v]=z,v++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const te=r.hash;(te.directionalLength!==y||te.pointLength!==T||te.spotLength!==R||te.rectAreaLength!==b||te.hemiLength!==v||te.numDirectionalShadows!==B||te.numPointShadows!==N||te.numSpotShadows!==F||te.numSpotMaps!==X||te.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=b,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=F+X-L,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,te.directionalLength=y,te.pointLength=T,te.spotLength=R,te.rectAreaLength=b,te.hemiLength=v,te.numDirectionalShadows=B,te.numPointShadows=N,te.numSpotShadows=F,te.numSpotMaps=X,te.numLightProbes=O,r.version=xE++)}function m(p,_){let g=0,S=0,y=0,T=0,R=0;const b=_.matrixWorldInverse;for(let v=0,B=p.length;v<B;v++){const N=p[v];if(N.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(b),g++}else if(N.isSpotLight){const F=r.spot[y];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(b),F.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(b),y++}else if(N.isRectAreaLight){const F=r.rectArea[T];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(b),d.identity(),u.copy(N.matrixWorld),u.premultiply(b),d.extractRotation(u),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),T++}else if(N.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(b),S++}else if(N.isHemisphereLight){const F=r.hemi[R];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(b),R++}}}return{setup:h,setupView:m,state:r}}function cg(o){const t=new _E(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function vE(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new cg(o),t.set(l,[h])):u>=d.length?(h=new cg(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yE(o,t,i){let r=new Lg;const l=new Lt,u=new Lt,d=new sn,h=new Yb({depthPacking:ab}),m=new jb,p={},_=i.maxTextureSize,g={[ja]:kn,[kn]:ja,[sa]:sa},S=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:SE,fragmentShader:bE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ka;T.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ha(T,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dg;let v=this.type;this.render=function(L,O,te){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(ca),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const le=v!==ra&&this.type===ra,pe=v===ra&&this.type!==ra;for(let de=0,z=L.length;de<z;de++){const Z=L[de],j=Z.shadow;if(j===void 0){ot("WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const ge=j.getFrameExtents();if(l.multiply(ge),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ge.x),l.x=u.x*ge.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ge.y),l.y=u.y*ge.y,j.mapSize.y=u.y)),j.map===null||le===!0||pe===!0){const U=this.type!==ra?{minFilter:ti,magFilter:ti}:{};j.map!==null&&j.map.dispose(),j.map=new Rr(l.x,l.y,U),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const ve=j.getViewportCount();for(let U=0;U<ve;U++){const ae=j.getViewport(U);d.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),ee.viewport(d),j.updateMatrices(Z,U),r=j.getFrustum(),F(O,te,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ra&&B(j,te),j.needsUpdate=!1}v=this.type,b.needsUpdate=!1,o.setRenderTarget(w,C,k)};function B(L,O){const te=t.update(R);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Rr(l.x,l.y)),S.uniforms.shadow_pass.value=L.map.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(O,null,te,S,R,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(O,null,te,y,R,null)}function N(L,O,te,w){let C=null;const k=te.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)C=k;else if(C=te.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ee=C.uuid,le=O.uuid;let pe=p[ee];pe===void 0&&(pe={},p[ee]=pe);let de=pe[le];de===void 0&&(de=C.clone(),pe[le]=de,O.addEventListener("dispose",X)),C=de}if(C.visible=O.visible,C.wireframe=O.wireframe,w===ra?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,te.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=o.properties.get(C);ee.light=te}return C}function F(L,O,te,w,C){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===ra)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld);const le=t.update(L),pe=L.material;if(Array.isArray(pe)){const de=le.groups;for(let z=0,Z=de.length;z<Z;z++){const j=de[z],ge=pe[j.materialIndex];if(ge&&ge.visible){const ve=N(L,ge,w,C);L.onBeforeShadow(o,L,O,te,le,ve,j),o.renderBufferDirect(te,null,le,ve,L,j),L.onAfterShadow(o,L,O,te,le,ve,j)}}}else if(pe.visible){const de=N(L,pe,w,C);L.onBeforeShadow(o,L,O,te,le,de,null),o.renderBufferDirect(te,null,le,de,L,null),L.onAfterShadow(o,L,O,te,le,de,null)}}const ee=L.children;for(let le=0,pe=ee.length;le<pe;le++)F(ee[le],O,te,w,C)}function X(L){L.target.removeEventListener("dispose",X);for(const te in p){const w=p[te],C=L.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const ME={[Ed]:Td,[Ad]:wd,[Rd]:Dd,[ys]:Cd,[Td]:Ed,[wd]:Ad,[Dd]:Rd,[Cd]:ys};function EE(o,t){function i(){let H=!1;const De=new sn;let Ce=null;const we=new sn(0,0,0,0);return{setMask:function(Me){Ce!==Me&&!H&&(o.colorMask(Me,Me,Me,Me),Ce=Me)},setLocked:function(Me){H=Me},setClear:function(Me,_e,Fe,it,Ft){Ft===!0&&(Me*=it,_e*=it,Fe*=it),De.set(Me,_e,Fe,it),we.equals(De)===!1&&(o.clearColor(Me,_e,Fe,it),we.copy(De))},reset:function(){H=!1,Ce=null,we.set(-1,0,0,0)}}}function r(){let H=!1,De=!1,Ce=null,we=null,Me=null;return{setReversed:function(_e){if(De!==_e){const Fe=t.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),De=_e;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return De},setTest:function(_e){_e?se(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(_e){Ce!==_e&&!H&&(o.depthMask(_e),Ce=_e)},setFunc:function(_e){if(De&&(_e=ME[_e]),we!==_e){switch(_e){case Ed:o.depthFunc(o.NEVER);break;case Td:o.depthFunc(o.ALWAYS);break;case Ad:o.depthFunc(o.LESS);break;case ys:o.depthFunc(o.LEQUAL);break;case Rd:o.depthFunc(o.EQUAL);break;case Cd:o.depthFunc(o.GEQUAL);break;case wd:o.depthFunc(o.GREATER);break;case Dd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=_e}},setLocked:function(_e){H=_e},setClear:function(_e){Me!==_e&&(De&&(_e=1-_e),o.clearDepth(_e),Me=_e)},reset:function(){H=!1,Ce=null,we=null,Me=null,De=!1}}}function l(){let H=!1,De=null,Ce=null,we=null,Me=null,_e=null,Fe=null,it=null,Ft=null;return{setTest:function(At){H||(At?se(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(At){De!==At&&!H&&(o.stencilMask(At),De=At)},setFunc:function(At,wn,Xn){(Ce!==At||we!==wn||Me!==Xn)&&(o.stencilFunc(At,wn,Xn),Ce=At,we=wn,Me=Xn)},setOp:function(At,wn,Xn){(_e!==At||Fe!==wn||it!==Xn)&&(o.stencilOp(At,wn,Xn),_e=At,Fe=wn,it=Xn)},setLocked:function(At){H=At},setClear:function(At){Ft!==At&&(o.clearStencil(At),Ft=At)},reset:function(){H=!1,De=null,Ce=null,we=null,Me=null,_e=null,Fe=null,it=null,Ft=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],T=null,R=!1,b=null,v=null,B=null,N=null,F=null,X=null,L=null,O=new Bt(0,0,0),te=0,w=!1,C=null,k=null,ee=null,le=null,pe=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=Z>=2);let ge=null,ve={};const U=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),Se=new sn().fromArray(U),Ae=new sn().fromArray(ae);function Oe(H,De,Ce,we){const Me=new Uint8Array(4),_e=o.createTexture();o.bindTexture(H,_e),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<Ce;Fe++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,we,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(De+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return _e}const ne={};ne[o.TEXTURE_2D]=Oe(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=Oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=Oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=Oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),se(o.DEPTH_TEST),d.setFunc(ys),ht(!1),mt(mx),se(o.CULL_FACE),Tt(ca);function se(H){_[H]!==!0&&(o.enable(H),_[H]=!0)}function Te(H){_[H]!==!1&&(o.disable(H),_[H]=!1)}function Pe(H,De){return g[H]!==De?(o.bindFramebuffer(H,De),g[H]=De,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=De),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=De),!0):!1}function ke(H,De){let Ce=y,we=!1;if(H){Ce=S.get(De),Ce===void 0&&(Ce=[],S.set(De,Ce));const Me=H.textures;if(Ce.length!==Me.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,Fe=Me.length;_e<Fe;_e++)Ce[_e]=o.COLOR_ATTACHMENT0+_e;Ce.length=Me.length,we=!0}}else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,we=!0);we&&o.drawBuffers(Ce)}function lt(H){return T!==H?(o.useProgram(H),T=H,!0):!1}const tn={[yr]:o.FUNC_ADD,[DS]:o.FUNC_SUBTRACT,[US]:o.FUNC_REVERSE_SUBTRACT};tn[NS]=o.MIN,tn[LS]=o.MAX;const dt={[OS]:o.ZERO,[zS]:o.ONE,[PS]:o.SRC_COLOR,[yd]:o.SRC_ALPHA,[VS]:o.SRC_ALPHA_SATURATE,[HS]:o.DST_COLOR,[FS]:o.DST_ALPHA,[BS]:o.ONE_MINUS_SRC_COLOR,[Md]:o.ONE_MINUS_SRC_ALPHA,[GS]:o.ONE_MINUS_DST_COLOR,[IS]:o.ONE_MINUS_DST_ALPHA,[kS]:o.CONSTANT_COLOR,[XS]:o.ONE_MINUS_CONSTANT_COLOR,[WS]:o.CONSTANT_ALPHA,[qS]:o.ONE_MINUS_CONSTANT_ALPHA};function Tt(H,De,Ce,we,Me,_e,Fe,it,Ft,At){if(H===ca){R===!0&&(Te(o.BLEND),R=!1);return}if(R===!1&&(se(o.BLEND),R=!0),H!==wS){if(H!==b||At!==w){if((v!==yr||F!==yr)&&(o.blendEquation(o.FUNC_ADD),v=yr,F=yr),At)switch(H){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xx:o.blendFunc(o.ONE,o.ONE);break;case gx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _x:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:rn("WebGLState: Invalid blending: ",H);break}else switch(H){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case gx:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _x:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",H);break}B=null,N=null,X=null,L=null,O.set(0,0,0),te=0,b=H,w=At}return}Me=Me||De,_e=_e||Ce,Fe=Fe||we,(De!==v||Me!==F)&&(o.blendEquationSeparate(tn[De],tn[Me]),v=De,F=Me),(Ce!==B||we!==N||_e!==X||Fe!==L)&&(o.blendFuncSeparate(dt[Ce],dt[we],dt[_e],dt[Fe]),B=Ce,N=we,X=_e,L=Fe),(it.equals(O)===!1||Ft!==te)&&(o.blendColor(it.r,it.g,it.b,Ft),O.copy(it),te=Ft),b=H,w=!1}function I(H,De){H.side===sa?Te(o.CULL_FACE):se(o.CULL_FACE);let Ce=H.side===kn;De&&(Ce=!Ce),ht(Ce),H.blending===Ss&&H.transparent===!1?Tt(ca):Tt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const we=H.stencilWrite;h.setTest(we),we&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?se(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function mt(H){H!==AS?(se(o.CULL_FACE),H!==k&&(H===mx?o.cullFace(o.BACK):H===RS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),k=H}function Ot(H){H!==ee&&(z&&o.lineWidth(H),ee=H)}function Ge(H,De,Ce){H?(se(o.POLYGON_OFFSET_FILL),(le!==De||pe!==Ce)&&(o.polygonOffset(De,Ce),le=De,pe=Ce)):Te(o.POLYGON_OFFSET_FILL)}function Xt(H){H?se(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function je(H){H===void 0&&(H=o.TEXTURE0+de-1),ge!==H&&(o.activeTexture(H),ge=H)}function at(H,De,Ce){Ce===void 0&&(ge===null?Ce=o.TEXTURE0+de-1:Ce=ge);let we=ve[Ce];we===void 0&&(we={type:void 0,texture:void 0},ve[Ce]=we),(we.type!==H||we.texture!==De)&&(ge!==Ce&&(o.activeTexture(Ce),ge=Ce),o.bindTexture(H,De||ne[H]),we.type=H,we.texture=De)}function D(){const H=ve[ge];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function me(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function be(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ne(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Qe(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function We(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(H){Se.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function Ye(H){Ae.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Ae.copy(H))}function Ve(H,De){let Ce=p.get(De);Ce===void 0&&(Ce=new WeakMap,p.set(De,Ce));let we=Ce.get(H);we===void 0&&(we=o.getUniformBlockIndex(De,H.name),Ce.set(H,we))}function ze(H,De){const we=p.get(De).get(H);m.get(De)!==we&&(o.uniformBlockBinding(De,we,H.__bindingPointIndex),m.set(De,we))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ge=null,ve={},g={},S=new WeakMap,y=[],T=null,R=!1,b=null,v=null,B=null,N=null,F=null,X=null,L=null,O=new Bt(0,0,0),te=0,w=!1,C=null,k=null,ee=null,le=null,pe=null,Se.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:se,disable:Te,bindFramebuffer:Pe,drawBuffers:ke,useProgram:lt,setBlending:Tt,setMaterial:I,setFlipSided:ht,setCullFace:mt,setLineWidth:Ot,setPolygonOffset:Ge,setScissorTest:Xt,activeTexture:je,bindTexture:at,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:Q,texImage2D:We,texImage3D:ye,updateUBOMapping:Ve,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Qe,texSubImage2D:me,texSubImage3D:be,compressedTexSubImage2D:ce,compressedTexSubImage3D:qe,scissor:Ee,viewport:Ye,reset:nt}}function TE(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,M){return y?new OffscreenCanvas(D,M):Cc("canvas")}function R(D,M,Q){let me=1;const be=at(D);if((be.width>Q||be.height>Q)&&(me=Q/Math.max(be.width,be.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(me*be.width),qe=Math.floor(me*be.height);g===void 0&&(g=T(ce,qe));const Ne=M?T(ce,qe):g;return Ne.width=ce,Ne.height=qe,Ne.getContext("2d").drawImage(D,0,0,ce,qe),ot("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ce+"x"+qe+")."),Ne}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function b(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(D,M,Q,me,be=!1){if(D!==null){if(o[D]!==void 0)return o[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===o.RED&&(Q===o.FLOAT&&(ce=o.R32F),Q===o.HALF_FLOAT&&(ce=o.R16F),Q===o.UNSIGNED_BYTE&&(ce=o.R8)),M===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.R8UI),Q===o.UNSIGNED_SHORT&&(ce=o.R16UI),Q===o.UNSIGNED_INT&&(ce=o.R32UI),Q===o.BYTE&&(ce=o.R8I),Q===o.SHORT&&(ce=o.R16I),Q===o.INT&&(ce=o.R32I)),M===o.RG&&(Q===o.FLOAT&&(ce=o.RG32F),Q===o.HALF_FLOAT&&(ce=o.RG16F),Q===o.UNSIGNED_BYTE&&(ce=o.RG8)),M===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ce=o.RG16UI),Q===o.UNSIGNED_INT&&(ce=o.RG32UI),Q===o.BYTE&&(ce=o.RG8I),Q===o.SHORT&&(ce=o.RG16I),Q===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),Q===o.UNSIGNED_INT&&(ce=o.RGB32UI),Q===o.BYTE&&(ce=o.RGB8I),Q===o.SHORT&&(ce=o.RGB16I),Q===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ce=o.RGBA32UI),Q===o.BYTE&&(ce=o.RGBA8I),Q===o.SHORT&&(ce=o.RGBA16I),Q===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const qe=be?Ac:Dt.getTransfer(me);Q===o.FLOAT&&(ce=o.RGBA32F),Q===o.HALF_FLOAT&&(ce=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ce=qe===Vt?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function F(D,M){let Q;return D?M===null||M===Ar||M===Lo?Q=o.DEPTH24_STENCIL8:M===la?Q=o.DEPTH32F_STENCIL8:M===No&&(Q=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===Lo?Q=o.DEPTH_COMPONENT24:M===la?Q=o.DEPTH_COMPONENT32F:M===No&&(Q=o.DEPTH_COMPONENT16),Q}function X(D,M){return b(D)===!0||D.isFramebufferTexture&&D.minFilter!==ti&&D.minFilter!==hi?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function L(D){const M=D.target;M.removeEventListener("dispose",L),te(M),M.isVideoTexture&&_.delete(M)}function O(D){const M=D.target;M.removeEventListener("dispose",O),C(M)}function te(D){const M=r.get(D);if(M.__webglInit===void 0)return;const Q=D.source,me=S.get(Q);if(me){const be=me[M.__cacheKey];be.usedTimes--,be.usedTimes===0&&w(D),Object.keys(me).length===0&&S.delete(Q)}r.remove(D)}function w(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const Q=D.source,me=S.get(Q);delete me[M.__cacheKey],d.memory.textures--}function C(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let be=0;be<M.__webglFramebuffer[me].length;be++)o.deleteFramebuffer(M.__webglFramebuffer[me][be]);else o.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)o.deleteFramebuffer(M.__webglFramebuffer[me]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=D.textures;for(let me=0,be=Q.length;me<be;me++){const ce=r.get(Q[me]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),r.remove(Q[me])}r.remove(D)}let k=0;function ee(){k=0}function le(){const D=k;return D>=l.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function pe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function de(D,M){const Q=r.get(D);if(D.isVideoTexture&&Xt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const me=D.image;if(me===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Q,D,M);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+M)}function z(D,M){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){ne(Q,D,M);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+M)}function Z(D,M){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){ne(Q,D,M);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+M)}function j(D,M){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){se(Q,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+M)}const ge={[Ld]:o.REPEAT,[oa]:o.CLAMP_TO_EDGE,[Od]:o.MIRRORED_REPEAT},ve={[ti]:o.NEAREST,[nb]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[hi]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},U={[ob]:o.NEVER,[hb]:o.ALWAYS,[lb]:o.LESS,[yg]:o.LEQUAL,[cb]:o.EQUAL,[db]:o.GEQUAL,[ub]:o.GREATER,[fb]:o.NOTEQUAL};function ae(D,M){if(M.type===la&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===hi||M.magFilter===qf||M.magFilter===$l||M.magFilter===Er||M.minFilter===hi||M.minFilter===qf||M.minFilter===$l||M.minFilter===Er)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,ge[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ge[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ge[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,ve[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ti||M.minFilter!==$l&&M.minFilter!==Er||M.type===la&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Se(D,M){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",L));const me=M.source;let be=S.get(me);be===void 0&&(be={},S.set(me,be));const ce=pe(M);if(ce!==D.__cacheKey){be[ce]===void 0&&(be[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),be[ce].usedTimes++;const qe=be[D.__cacheKey];qe!==void 0&&(be[D.__cacheKey].usedTimes--,qe.usedTimes===0&&w(M)),D.__cacheKey=ce,D.__webglTexture=be[ce].texture}return Q}function Ae(D,M,Q){return Math.floor(Math.floor(D/Q)/M)}function Oe(D,M,Q,me){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,Q,me,M.data);else{ce.sort((ye,Ee)=>ye.start-Ee.start);let qe=0;for(let ye=1;ye<ce.length;ye++){const Ee=ce[qe],Ye=ce[ye],Ve=Ee.start+Ee.count,ze=Ae(Ye.start,M.width,4),nt=Ae(Ee.start,M.width,4);Ye.start<=Ve+1&&ze===nt&&Ae(Ye.start+Ye.count-1,M.width,4)===ze?Ee.count=Math.max(Ee.count,Ye.start+Ye.count-Ee.start):(++qe,ce[qe]=Ye)}ce.length=qe+1;const Ne=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),We=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let ye=0,Ee=ce.length;ye<Ee;ye++){const Ye=ce[ye],Ve=Math.floor(Ye.start/4),ze=Math.ceil(Ye.count/4),nt=Ve%M.width,H=Math.floor(Ve/M.width),De=ze,Ce=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,nt,H,De,Ce,Q,me,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ne),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,We)}}function ne(D,M,Q){let me=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=o.TEXTURE_3D);const be=Se(D,M),ce=M.source;i.bindTexture(me,D.__webglTexture,o.TEXTURE0+Q);const qe=r.get(ce);if(ce.version!==qe.__version||be===!0){i.activeTexture(o.TEXTURE0+Q);const Ne=Dt.getPrimaries(Dt.workingColorSpace),Qe=M.colorSpace===Wa?null:Dt.getPrimaries(M.colorSpace),We=M.colorSpace===Wa||Ne===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ye=R(M.image,!1,l.maxTextureSize);ye=je(M,ye);const Ee=u.convert(M.format,M.colorSpace),Ye=u.convert(M.type);let Ve=N(M.internalFormat,Ee,Ye,M.colorSpace,M.isVideoTexture);ae(me,M);let ze;const nt=M.mipmaps,H=M.isVideoTexture!==!0,De=qe.__version===void 0||be===!0,Ce=ce.dataReady,we=X(M,ye);if(M.isDepthTexture)Ve=F(M.format===zo,M.type),De&&(H?i.texStorage2D(o.TEXTURE_2D,1,Ve,ye.width,ye.height):i.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Ee,Ye,null));else if(M.isDataTexture)if(nt.length>0){H&&De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,nt[0].width,nt[0].height);for(let Me=0,_e=nt.length;Me<_e;Me++)ze=nt[Me],H?Ce&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,ze.width,ze.height,Ee,Ye,ze.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,ze.width,ze.height,0,Ee,Ye,ze.data);M.generateMipmaps=!1}else H?(De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,ye.width,ye.height),Ce&&Oe(M,ye,Ee,Ye)):i.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Ee,Ye,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ve,nt[0].width,nt[0].height,ye.depth);for(let Me=0,_e=nt.length;Me<_e;Me++)if(ze=nt[Me],M.format!==Mi)if(Ee!==null)if(H){if(Ce)if(M.layerUpdates.size>0){const Fe=Hx(ze.width,ze.height,M.format,M.type);for(const it of M.layerUpdates){const Ft=ze.data.subarray(it*Fe/ze.data.BYTES_PER_ELEMENT,(it+1)*Fe/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,it,ze.width,ze.height,1,Ee,Ft)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,ze.width,ze.height,ye.depth,Ee,ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,ze.width,ze.height,ye.depth,0,ze.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ce&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,ze.width,ze.height,ye.depth,Ee,Ye,ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,ze.width,ze.height,ye.depth,0,Ee,Ye,ze.data)}else{H&&De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,nt[0].width,nt[0].height);for(let Me=0,_e=nt.length;Me<_e;Me++)ze=nt[Me],M.format!==Mi?Ee!==null?H?Ce&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,ze.width,ze.height,Ee,ze.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Ve,ze.width,ze.height,0,ze.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ce&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,ze.width,ze.height,Ee,Ye,ze.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,ze.width,ze.height,0,Ee,Ye,ze.data)}else if(M.isDataArrayTexture)if(H){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ve,ye.width,ye.height,ye.depth),Ce)if(M.layerUpdates.size>0){const Me=Hx(ye.width,ye.height,M.format,M.type);for(const _e of M.layerUpdates){const Fe=ye.data.subarray(_e*Me/ye.data.BYTES_PER_ELEMENT,(_e+1)*Me/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,ye.width,ye.height,1,Ee,Ye,Fe)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Ye,ye.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,Ee,Ye,ye.data);else if(M.isData3DTexture)H?(De&&i.texStorage3D(o.TEXTURE_3D,we,Ve,ye.width,ye.height,ye.depth),Ce&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Ye,ye.data)):i.texImage3D(o.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,Ee,Ye,ye.data);else if(M.isFramebufferTexture){if(De)if(H)i.texStorage2D(o.TEXTURE_2D,we,Ve,ye.width,ye.height);else{let Me=ye.width,_e=ye.height;for(let Fe=0;Fe<we;Fe++)i.texImage2D(o.TEXTURE_2D,Fe,Ve,Me,_e,0,Ee,Ye,null),Me>>=1,_e>>=1}}else if(nt.length>0){if(H&&De){const Me=at(nt[0]);i.texStorage2D(o.TEXTURE_2D,we,Ve,Me.width,Me.height)}for(let Me=0,_e=nt.length;Me<_e;Me++)ze=nt[Me],H?Ce&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ee,Ye,ze):i.texImage2D(o.TEXTURE_2D,Me,Ve,Ee,Ye,ze);M.generateMipmaps=!1}else if(H){if(De){const Me=at(ye);i.texStorage2D(o.TEXTURE_2D,we,Ve,Me.width,Me.height)}Ce&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Ye,ye)}else i.texImage2D(o.TEXTURE_2D,0,Ve,Ee,Ye,ye);b(M)&&v(me),qe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function se(D,M,Q){if(M.image.length!==6)return;const me=Se(D,M),be=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Q);const ce=r.get(be);if(be.version!==ce.__version||me===!0){i.activeTexture(o.TEXTURE0+Q);const qe=Dt.getPrimaries(Dt.workingColorSpace),Ne=M.colorSpace===Wa?null:Dt.getPrimaries(M.colorSpace),Qe=M.colorSpace===Wa||qe===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let _e=0;_e<6;_e++)!We&&!ye?Ee[_e]=R(M.image[_e],!0,l.maxCubemapSize):Ee[_e]=ye?M.image[_e].image:M.image[_e],Ee[_e]=je(M,Ee[_e]);const Ye=Ee[0],Ve=u.convert(M.format,M.colorSpace),ze=u.convert(M.type),nt=N(M.internalFormat,Ve,ze,M.colorSpace),H=M.isVideoTexture!==!0,De=ce.__version===void 0||me===!0,Ce=be.dataReady;let we=X(M,Ye);ae(o.TEXTURE_CUBE_MAP,M);let Me;if(We){H&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,Ye.width,Ye.height);for(let _e=0;_e<6;_e++){Me=Ee[_e].mipmaps;for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];M.format!==Mi?Ve!==null?H?Ce&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,it.width,it.height,Ve,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,nt,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,it.width,it.height,Ve,ze,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,nt,it.width,it.height,0,Ve,ze,it.data)}}}else{if(Me=M.mipmaps,H&&De){Me.length>0&&we++;const _e=at(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ye){H?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee[_e].width,Ee[_e].height,Ve,ze,Ee[_e].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,nt,Ee[_e].width,Ee[_e].height,0,Ve,ze,Ee[_e].data);for(let Fe=0;Fe<Me.length;Fe++){const Ft=Me[Fe].image[_e].image;H?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,Ft.width,Ft.height,Ve,ze,Ft.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,nt,Ft.width,Ft.height,0,Ve,ze,Ft.data)}}else{H?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ve,ze,Ee[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,nt,Ve,ze,Ee[_e]);for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];H?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,Ve,ze,it.image[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,nt,Ve,ze,it.image[_e])}}}b(M)&&v(o.TEXTURE_CUBE_MAP),ce.__version=be.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Te(D,M,Q,me,be,ce){const qe=u.convert(Q.format,Q.colorSpace),Ne=u.convert(Q.type),Qe=N(Q.internalFormat,qe,Ne,Q.colorSpace),We=r.get(M),ye=r.get(Q);if(ye.__renderTarget=M,!We.__hasExternalTextures){const Ee=Math.max(1,M.width>>ce),Ye=Math.max(1,M.height>>ce);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,ce,Qe,Ee,Ye,M.depth,0,qe,Ne,null):i.texImage2D(be,ce,Qe,Ee,Ye,0,qe,Ne,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,be,ye.__webglTexture,0,Ot(M)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,be,ye.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pe(D,M,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const me=M.depthTexture,be=me&&me.isDepthTexture?me.type:null,ce=F(M.stencilBuffer,be),qe=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=Ot(M);Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ne,ce,M.width,M.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,D)}else{const me=M.textures;for(let be=0;be<me.length;be++){const ce=me[be],qe=u.convert(ce.format,ce.colorSpace),Ne=u.convert(ce.type),Qe=N(ce.internalFormat,qe,Ne,ce.colorSpace),We=Ot(M);Q&&Ge(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Qe,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,Qe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de(M.depthTexture,0);const be=me.__webglTexture,ce=Ot(M);if(M.depthTexture.format===Oo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0);else if(M.depthTexture.format===zo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function lt(D){const M=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const be=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",be)};me.addEventListener("dispose",be),M.__depthDisposeCallback=be}M.__boundDepthTexture=me}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const me=D.texture.mipmaps;me&&me.length>0?ke(M.__webglFramebuffer[0],D):ke(M.__webglFramebuffer,D)}else if(Q){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=o.createRenderbuffer(),Pe(M.__webglDepthbuffer[me],D,!1);else{const be=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,ce)}}else{const me=D.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Pe(M.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(D,M,Q){const me=r.get(D);M!==void 0&&Te(me.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&lt(D)}function dt(D){const M=D.texture,Q=r.get(D),me=r.get(M);D.addEventListener("dispose",O);const be=D.textures,ce=D.isWebGLCubeRenderTarget===!0,qe=be.length>1;if(qe||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=M.version,d.memory.textures++),ce){Q.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[Ne]=[];for(let Qe=0;Qe<M.mipmaps.length;Qe++)Q.__webglFramebuffer[Ne][Qe]=o.createFramebuffer()}else Q.__webglFramebuffer[Ne]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ne=0;Ne<M.mipmaps.length;Ne++)Q.__webglFramebuffer[Ne]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Ne=0,Qe=be.length;Ne<Qe;Ne++){const We=r.get(be[Ne]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Ge(D)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ne=0;Ne<be.length;Ne++){const Qe=be[Ne];Q.__webglColorRenderbuffer[Ne]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ne]);const We=u.convert(Qe.format,Qe.colorSpace),ye=u.convert(Qe.type),Ee=N(Qe.internalFormat,We,ye,Qe.colorSpace,D.isXRRenderTarget===!0),Ye=Ot(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ne])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Pe(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),ae(o.TEXTURE_CUBE_MAP,M);for(let Ne=0;Ne<6;Ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)Te(Q.__webglFramebuffer[Ne][Qe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Qe);else Te(Q.__webglFramebuffer[Ne],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);b(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Ne=0,Qe=be.length;Ne<Qe;Ne++){const We=be[Ne],ye=r.get(We);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,ye.__webglTexture),ae(Ee,We),Te(Q.__webglFramebuffer,D,We,o.COLOR_ATTACHMENT0+Ne,Ee,0),b(We)&&v(Ee)}i.unbindTexture()}else{let Ne=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ne,me.__webglTexture),ae(Ne,M),M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)Te(Q.__webglFramebuffer[Qe],D,M,o.COLOR_ATTACHMENT0,Ne,Qe);else Te(Q.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ne,0);b(M)&&v(Ne),i.unbindTexture()}D.depthBuffer&&lt(D)}function Tt(D){const M=D.textures;for(let Q=0,me=M.length;Q<me;Q++){const be=M[Q];if(b(be)){const ce=B(D),qe=r.get(be).__webglTexture;i.bindTexture(ce,qe),v(ce),i.unbindTexture()}}}const I=[],ht=[];function mt(D){if(D.samples>0){if(Ge(D)===!1){const M=D.textures,Q=D.width,me=D.height;let be=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=r.get(D),Ne=M.length>1;if(Ne)for(let We=0;We<M.length;We++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Qe=D.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let We=0;We<M.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Ne){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const ye=r.get(M[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,Q,me,0,0,Q,me,be,o.NEAREST),m===!0&&(I.length=0,ht.length=0,I.push(o.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(ce),ht.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ne)for(let We=0;We<M.length;We++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const ye=r.get(M[We]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,ye,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Ot(D){return Math.min(l.maxSamples,D.samples)}function Ge(D){const M=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xt(D){const M=d.render.frame;_.get(D)!==M&&(_.set(D,M),D.update())}function je(D,M){const Q=D.colorSpace,me=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Ts&&Q!==Wa&&(Dt.getTransfer(Q)===Vt?(me!==Mi||be!==fa)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",Q)),M}function at(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=tn,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ge}function AE(o,t){function i(r,l=Wa){let u;const d=Dt.getTransfer(l);if(r===fa)return o.UNSIGNED_BYTE;if(r===xh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===gh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===gg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===_g)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===mg)return o.BYTE;if(r===xg)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===mh)return o.INT;if(r===Ar)return o.UNSIGNED_INT;if(r===la)return o.FLOAT;if(r===Rs)return o.HALF_FLOAT;if(r===vg)return o.ALPHA;if(r===Sg)return o.RGB;if(r===Mi)return o.RGBA;if(r===Oo)return o.DEPTH_COMPONENT;if(r===zo)return o.DEPTH_STENCIL;if(r===bg)return o.RED;if(r===_h)return o.RED_INTEGER;if(r===vh)return o.RG;if(r===Sh)return o.RG_INTEGER;if(r===bh)return o.RGBA_INTEGER;if(r===Sc||r===bc||r===yc||r===Mc)if(d===Vt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Pd||r===Bd||r===Fd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===zd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id||r===Hd||r===Gd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Id||r===Hd)return d===Vt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Gd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh||r===th)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Vd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$d)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===th)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nh||r===ih||r===ah)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===nh)return d===Vt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ih)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ah)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rh||r===sh||r===oh||r===lh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===rh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===sh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const RE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new zg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ni({vertexShader:RE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ha(new Go(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends Cs{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,y=null,T=null;const R=typeof XRWebGLBinding<"u",b=new wE,v={},B=i.getContextAttributes();let N=null,F=null;const X=[],L=[],O=new Lt;let te=null;const w=new bi;w.viewport=new sn;const C=new bi;C.viewport=new sn;const k=[w,C],ee=new Zb;let le=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let se=X[ne];return se===void 0&&(se=new md,X[ne]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ne){let se=X[ne];return se===void 0&&(se=new md,X[ne]=se),se.getGripSpace()},this.getHand=function(ne){let se=X[ne];return se===void 0&&(se=new md,X[ne]=se),se.getHandSpace()};function de(ne){const se=L.indexOf(ne.inputSource);if(se===-1)return;const Te=X[se];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,p||d),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<X.length;ne++){const se=L[ne];se!==null&&(L[ne]=null,X[ne].disconnect(se))}le=null,pe=null,b.reset();for(const ne in v)delete v[ne];t.setRenderTarget(N),y=null,S=null,g=null,l=null,F=null,Oe.stop(),r.isPresenting=!1,t.setPixelRatio(te),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",z),l.addEventListener("inputsourceschange",Z),B.xrCompatible!==!0&&await i.makeXRCompatible(),te=t.getPixelRatio(),t.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Pe=null,ke=null;B.depth&&(ke=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=B.stencil?zo:Oo,Pe=B.stencil?Lo:Ar);const lt={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(lt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),F=new Rr(S.textureWidth,S.textureHeight,{format:Mi,type:fa,depthTexture:new Og(S.textureWidth,S.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Te={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Rr(y.framebufferWidth,y.framebufferHeight,{format:Mi,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Z(ne){for(let se=0;se<ne.removed.length;se++){const Te=ne.removed[se],Pe=L.indexOf(Te);Pe>=0&&(L[Pe]=null,X[Pe].disconnect(Te))}for(let se=0;se<ne.added.length;se++){const Te=ne.added[se];let Pe=L.indexOf(Te);if(Pe===-1){for(let lt=0;lt<X.length;lt++)if(lt>=L.length){L.push(Te),Pe=lt;break}else if(L[lt]===null){L[lt]=Te,Pe=lt;break}if(Pe===-1)break}const ke=X[Pe];ke&&ke.connect(Te)}}const j=new ue,ge=new ue;function ve(ne,se,Te){j.setFromMatrixPosition(se.matrixWorld),ge.setFromMatrixPosition(Te.matrixWorld);const Pe=j.distanceTo(ge),ke=se.projectionMatrix.elements,lt=Te.projectionMatrix.elements,tn=ke[14]/(ke[10]-1),dt=ke[14]/(ke[10]+1),Tt=(ke[9]+1)/ke[5],I=(ke[9]-1)/ke[5],ht=(ke[8]-1)/ke[0],mt=(lt[8]+1)/lt[0],Ot=tn*ht,Ge=tn*mt,Xt=Pe/(-ht+mt),je=Xt*-ht;if(se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(je),ne.translateZ(Xt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ke[10]===-1)ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const at=tn+Xt,D=dt+Xt,M=Ot-je,Q=Ge+(Pe-je),me=Tt*dt/D*at,be=I*dt/D*at;ne.projectionMatrix.makePerspective(M,Q,me,be,at,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,se){se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let se=ne.near,Te=ne.far;b.texture!==null&&(b.depthNear>0&&(se=b.depthNear),b.depthFar>0&&(Te=b.depthFar)),ee.near=C.near=w.near=se,ee.far=C.far=w.far=Te,(le!==ee.near||pe!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),le=ee.near,pe=ee.far),ee.layers.mask=ne.layers.mask|6,w.layers.mask=ee.layers.mask&3,C.layers.mask=ee.layers.mask&5;const Pe=ne.parent,ke=ee.cameras;U(ee,Pe);for(let lt=0;lt<ke.length;lt++)U(ke[lt],Pe);ke.length===2?ve(ee,w,C):ee.projectionMatrix.copy(w.projectionMatrix),ae(ne,ee,Pe)};function ae(ne,se,Te){Te===null?ne.matrix.copy(se.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(se.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ch*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(ne){m=ne,S!==null&&(S.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ee)},this.getCameraTexture=function(ne){return v[ne]};let Se=null;function Ae(ne,se){if(_=se.getViewerPose(p||d),T=se,_!==null){const Te=_.views;y!==null&&(t.setRenderTargetFramebuffer(F,y.framebuffer),t.setRenderTarget(F));let Pe=!1;Te.length!==ee.cameras.length&&(ee.cameras.length=0,Pe=!0);for(let dt=0;dt<Te.length;dt++){const Tt=Te[dt];let I=null;if(y!==null)I=y.getViewport(Tt);else{const mt=g.getViewSubImage(S,Tt);I=mt.viewport,dt===0&&(t.setRenderTargetTextures(F,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(F))}let ht=k[dt];ht===void 0&&(ht=new bi,ht.layers.enable(dt),ht.viewport=new sn,k[dt]=ht),ht.matrix.fromArray(Tt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(I.x,I.y,I.width,I.height),dt===0&&(ee.matrix.copy(ht.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Pe===!0&&ee.cameras.push(ht)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const dt=g.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&b.init(dt,l.renderState)}if(ke&&ke.includes("camera-access")&&R){t.state.unbindTexture(),g=r.getBinding();for(let dt=0;dt<Te.length;dt++){const Tt=Te[dt].camera;if(Tt){let I=v[Tt];I||(I=new zg,v[Tt]=I);const ht=g.getCameraImage(Tt);I.sourceTexture=ht}}}}for(let Te=0;Te<X.length;Te++){const Pe=L[Te],ke=X[Te];Pe!==null&&ke!==void 0&&ke.update(Pe,se,p||d)}Se&&Se(ne,se),se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:se}),T=null}const Oe=new Bg;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const Sr=new da,UE=new xn;function NE(o,t){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function r(b,v){v.color.getRGB(b.fogColor.value,Dg(o)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,B,N,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(b,v):v.isMeshToonMaterial?(u(b,v),g(b,v)):v.isMeshPhongMaterial?(u(b,v),_(b,v)):v.isMeshStandardMaterial?(u(b,v),S(b,v),v.isMeshPhysicalMaterial&&y(b,v,F)):v.isMeshMatcapMaterial?(u(b,v),T(b,v)):v.isMeshDepthMaterial?u(b,v):v.isMeshDistanceMaterial?(u(b,v),R(b,v)):v.isMeshNormalMaterial?u(b,v):v.isLineBasicMaterial?(d(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,B,N):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===kn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===kn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const B=t.get(v),N=B.envMap,F=B.envMapRotation;N&&(b.envMap.value=N,Sr.copy(F),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),b.envMapRotation.value.setFromMatrix4(UE.makeRotationFromEuler(Sr)),b.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,B,N){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*B,b.scale.value=N*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function _(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function g(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function S(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function y(b,v,B){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=B.texture,b.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,v){v.matcap&&(b.matcap.value=v.matcap)}function R(b,v){const B=t.get(v).light;b.referencePosition.value.setFromMatrixPosition(B.matrixWorld),b.nearDistance.value=B.shadow.camera.near,b.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function LE(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const F=N.program;r.uniformBlockBinding(B,F)}function p(B,N){let F=l[B.id];F===void 0&&(T(B),F=_(B),l[B.id]=F,B.addEventListener("dispose",b));const X=N.program;r.updateUBOMapping(B,X);const L=t.render.frame;u[B.id]!==L&&(S(B),u[B.id]=L)}function _(B){const N=g();B.__bindingPointIndex=N;const F=o.createBuffer(),X=B.__size,L=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,X,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,F),F}function g(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],F=B.uniforms,X=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let L=0,O=F.length;L<O;L++){const te=Array.isArray(F[L])?F[L]:[F[L]];for(let w=0,C=te.length;w<C;w++){const k=te[w];if(y(k,L,w,X)===!0){const ee=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let de=0;de<le.length;de++){const z=le[de],Z=R(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ee+pe,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,pe),pe+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,N,F,X){const L=B.value,O=N+"_"+F;if(X[O]===void 0)return typeof L=="number"||typeof L=="boolean"?X[O]=L:X[O]=L.clone(),!0;{const te=X[O];if(typeof L=="number"||typeof L=="boolean"){if(te!==L)return X[O]=L,!0}else if(te.equals(L)===!1)return te.copy(L),!0}return!1}function T(B){const N=B.uniforms;let F=0;const X=16;for(let O=0,te=N.length;O<te;O++){const w=Array.isArray(N[O])?N[O]:[N[O]];for(let C=0,k=w.length;C<k;C++){const ee=w[C],le=Array.isArray(ee.value)?ee.value:[ee.value];for(let pe=0,de=le.length;pe<de;pe++){const z=le[pe],Z=R(z),j=F%X,ge=j%Z.boundary,ve=j+ge;F+=ge,ve!==0&&X-ve<Z.storage&&(F+=X-ve),ee.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=F,F+=Z.storage}}}const L=F%X;return L>0&&(F+=X-L),B.__size=F,B.__cache={},this}function R(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",B),N}function b(B){const N=B.target;N.removeEventListener("dispose",b);const F=d.indexOf(N.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const OE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let aa=null;function zE(){return aa===null&&(aa=new kb(OE,32,32,vh,Rs),aa.minFilter=hi,aa.magFilter=hi,aa.wrapS=oa,aa.wrapT=oa,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class PE{constructor(t={}){const{canvas:i=pb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const T=new Set([bh,Sh,_h]),R=new Set([fa,Ar,No,Lo,xh,gh]),b=new Uint32Array(4),v=new Int32Array(4);let B=null,N=null;const F=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1;this._outputColorSpace=di;let te=0,w=0,C=null,k=-1,ee=null;const le=new sn,pe=new sn;let de=null;const z=new Bt(0);let Z=0,j=i.width,ge=i.height,ve=1,U=null,ae=null;const Se=new sn(0,0,j,ge),Ae=new sn(0,0,j,ge);let Oe=!1;const ne=new Lg;let se=!1,Te=!1;const Pe=new xn,ke=new ue,lt=new sn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Tt(){return C===null?ve:1}let I=r;function ht(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ph}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",_e,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),I===null){const W="webgl2";if(I=ht(W,A),I===null)throw ht(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let mt,Ot,Ge,Xt,je,at,D,M,Q,me,be,ce,qe,Ne,Qe,We,ye,Ee,Ye,Ve,ze,nt,H,De;function Ce(){mt=new X3(I),mt.init(),nt=new AE(I,mt),Ot=new z3(I,mt,t,nt),Ge=new EE(I,mt),Ot.reversedDepthBuffer&&S&&Ge.buffers.depth.setReversed(!0),Xt=new Y3(I),je=new fE,at=new TE(I,mt,Ge,je,Ot,nt,Xt),D=new B3(L),M=new k3(L),Q=new Qb(I),H=new L3(I,Q),me=new W3(I,Q,Xt,H),be=new Z3(I,me,Q,Xt),Ye=new j3(I,Ot,at),We=new P3(je),ce=new uE(L,D,M,mt,Ot,H,We),qe=new NE(L,je),Ne=new hE,Qe=new vE(mt),Ee=new N3(L,D,M,Ge,be,y,m),ye=new yE(L,be,Ot),De=new LE(I,Xt,Ot,Ge),Ve=new O3(I,mt,Xt),ze=new q3(I,mt,Xt),Xt.programs=ce.programs,L.capabilities=Ot,L.extensions=mt,L.properties=je,L.renderLists=Ne,L.shadowMap=ye,L.state=Ge,L.info=Xt}Ce();const we=new DE(L,I);this.xr=we,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(j,ge,!1))},this.getSize=function(A){return A.set(j,ge)},this.setSize=function(A,W,re=!0){if(we.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,ge=W,i.width=Math.floor(A*ve),i.height=Math.floor(W*ve),re===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(j*ve,ge*ve).floor()},this.setDrawingBufferSize=function(A,W,re){j=A,ge=W,ve=re,i.width=Math.floor(A*re),i.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(le)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,W,re,$){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,W,re,$),Ge.viewport(le.copy(Se).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(Ae)},this.setScissor=function(A,W,re,$){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,W,re,$),Ge.scissor(pe.copy(Ae).multiplyScalar(ve).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){Ge.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,re=!0){let $=0;if(A){let Y=!1;if(C!==null){const Re=C.texture.format;Y=T.has(Re)}if(Y){const Re=C.texture.type,Ue=R.has(Re),Be=Ee.getClearColor(),Ie=Ee.getClearAlpha(),$e=Be.r,tt=Be.g,Ze=Be.b;Ue?(b[0]=$e,b[1]=tt,b[2]=Ze,b[3]=Ie,I.clearBufferuiv(I.COLOR,0,b)):(v[0]=$e,v[1]=tt,v[2]=Ze,v[3]=Ie,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}W&&($|=I.DEPTH_BUFFER_BIT),re&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Ee.dispose(),Ne.dispose(),Qe.dispose(),je.dispose(),D.dispose(),M.dispose(),be.dispose(),H.dispose(),De.dispose(),ce.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ds),we.removeEventListener("sessionend",Us),pi.stop()};function Me(A){A.preventDefault(),Mx("WebGLRenderer: Context Lost."),O=!0}function _e(){Mx("WebGLRenderer: Context Restored."),O=!1;const A=Xt.autoReset,W=ye.enabled,re=ye.autoUpdate,$=ye.needsUpdate,Y=ye.type;Ce(),Xt.autoReset=A,ye.enabled=W,ye.autoUpdate=re,ye.needsUpdate=$,ye.type=Y}function Fe(A){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const W=A.target;W.removeEventListener("dispose",it),Ft(W)}function Ft(A){At(A),je.remove(A)}function At(A){const W=je.get(A).programs;W!==void 0&&(W.forEach(function(re){ce.releaseProgram(re)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,$,Y,Re){W===null&&(W=tn);const Ue=Y.isMesh&&Y.matrixWorld.determinant()<0,Be=Lc(A,W,re,$,Y);Ge.setMaterial($,Ue);let Ie=re.index,$e=1;if($.wireframe===!0){if(Ie=me.getWireframeAttribute(re),Ie===void 0)return;$e=2}const tt=re.drawRange,Ze=re.attributes.position;let ct=tt.start*$e,Et=(tt.start+tt.count)*$e;Re!==null&&(ct=Math.max(ct,Re.start*$e),Et=Math.min(Et,(Re.start+Re.count)*$e)),Ie!==null?(ct=Math.max(ct,0),Et=Math.min(Et,Ie.count)):Ze!=null&&(ct=Math.max(ct,0),Et=Math.min(Et,Ze.count));const Rt=Et-ct;if(Rt<0||Rt===1/0)return;H.setup(Y,$,Be,re,Ie);let St,Nt=Ve;if(Ie!==null&&(St=Q.get(Ie),Nt=ze,Nt.setIndex(St)),Y.isMesh)$.wireframe===!0?(Ge.setLineWidth($.wireframeLinewidth*Tt()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(Y.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*Tt()),Y.isLineSegments?Nt.setMode(I.LINES):Y.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else Y.isPoints?Nt.setMode(I.POINTS):Y.isSprite&&Nt.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Je=Y._multiDrawStarts,Wt=Y._multiDrawCounts,bt=Y._multiDrawCount,vn=Ie?Q.get(Ie).bytesPerElement:1,ma=je.get($).currentProgram.getUniforms();for(let Yt=0;Yt<bt;Yt++)ma.setValue(I,"_gl_DrawID",Yt),Nt.render(Je[Yt]/vn,Wt[Yt])}else if(Y.isInstancedMesh)Nt.renderInstances(ct,Rt,Y.count);else if(re.isInstancedBufferGeometry){const Je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wt=Math.min(re.instanceCount,Je);Nt.renderInstances(ct,Rt,Wt)}else Nt.render(ct,Rt)};function wn(A,W,re){A.transparent===!0&&A.side===sa&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,hn(A,W,re),A.side=ja,A.needsUpdate=!0,hn(A,W,re),A.side=sa):hn(A,W,re)}this.compile=function(A,W,re=null){re===null&&(re=A),N=Qe.get(re),N.init(W),X.push(N),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),A!==re&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),N.setupLights();const $=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Be=Re[Ue];wn(Be,re,Y),$.add(Be)}else wn(Re,re,Y),$.add(Re)}),N=X.pop(),$},this.compileAsync=function(A,W,re=null){const $=this.compile(A,W,re);return new Promise(Y=>{function Re(){if($.forEach(function(Ue){je.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){Y(A);return}setTimeout(Re,10)}mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Xn=null;function Vo(A){Xn&&Xn(A)}function Ds(){pi.stop()}function Us(){pi.start()}const pi=new Bg;pi.setAnimationLoop(Vo),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){Xn=A,we.setAnimationLoop(A),A===null?pi.stop():pi.start()},we.addEventListener("sessionstart",Ds),we.addEventListener("sessionend",Us),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,W,C),N=Qe.get(A,X.length),N.init(W),X.push(N),Pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ne.setFromProjectionMatrix(Pe,Di,W.reversedDepth),Te=this.localClippingEnabled,se=We.init(this.clippingPlanes,Te),B=Ne.get(A,F.length),B.init(),F.push(B),we.enabled===!0&&we.isPresenting===!0){const Re=L.xr.getDepthSensingMesh();Re!==null&&Qa(Re,W,-1/0,L.sortObjects)}Qa(A,W,0,L.sortObjects),B.finish(),L.sortObjects===!0&&B.sort(U,ae),dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,dt&&Ee.addToRenderList(B,A),this.info.render.frame++,se===!0&&We.beginShadows();const re=N.state.shadowsArray;ye.render(re,A,W),se===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=B.opaque,Y=B.transmissive;if(N.setupLights(),W.isArrayCamera){const Re=W.cameras;if(Y.length>0)for(let Ue=0,Be=Re.length;Ue<Be;Ue++){const Ie=Re[Ue];Ls($,Y,A,Ie)}dt&&Ee.render(A);for(let Ue=0,Be=Re.length;Ue<Be;Ue++){const Ie=Re[Ue];Ns(B,A,Ie,Ie.viewport)}}else Y.length>0&&Ls($,Y,A,W),dt&&Ee.render(A),Ns(B,A,W);C!==null&&w===0&&(at.updateMultisampleRenderTarget(C),at.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(L,A,W),H.resetDefaultState(),k=-1,ee=null,X.pop(),X.length>0?(N=X[X.length-1],se===!0&&We.setGlobalState(L.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?B=F[F.length-1]:B=null};function Qa(A,W,re,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){$&&lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);const Ue=be.update(A),Be=A.material;Be.visible&&B.push(A,Ue,Be,re,lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){const Ue=be.update(A),Be=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),lt.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),lt.copy(Ue.boundingSphere.center)),lt.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(Be)){const Ie=Ue.groups;for(let $e=0,tt=Ie.length;$e<tt;$e++){const Ze=Ie[$e],ct=Be[Ze.materialIndex];ct&&ct.visible&&B.push(A,Ue,ct,re,lt.z,Ze)}}else Be.visible&&B.push(A,Ue,Be,re,lt.z,null)}}const Re=A.children;for(let Ue=0,Be=Re.length;Ue<Be;Ue++)Qa(Re[Ue],W,re,$)}function Ns(A,W,re,$){const{opaque:Y,transmissive:Re,transparent:Ue}=A;N.setupLightsView(re),se===!0&&We.setGlobalState(L.clippingPlanes,re),$&&Ge.viewport(le.copy($)),Y.length>0&&Wn(Y,W,re),Re.length>0&&Wn(Re,W,re),Ue.length>0&&Wn(Ue,W,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ls(A,W,re,$){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[$.id]===void 0&&(N.state.transmissionRenderTarget[$.id]=new Rr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Rs:fa,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Re=N.state.transmissionRenderTarget[$.id],Ue=$.viewport||le;Re.setSize(Ue.z*L.transmissionResolutionScale,Ue.w*L.transmissionResolutionScale);const Be=L.getRenderTarget(),Ie=L.getActiveCubeFace(),$e=L.getActiveMipmapLevel();L.setRenderTarget(Re),L.getClearColor(z),Z=L.getClearAlpha(),Z<1&&L.setClearColor(16777215,.5),L.clear(),dt&&Ee.render(re);const tt=L.toneMapping;L.toneMapping=Ya;const Ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),N.setupLightsView($),se===!0&&We.setGlobalState(L.clippingPlanes,$),Wn(A,re,$),at.updateMultisampleRenderTarget(Re),at.updateRenderTargetMipmap(Re),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Et=0,Rt=W.length;Et<Rt;Et++){const St=W[Et],{object:Nt,geometry:Je,material:Wt,group:bt}=St;if(Wt.side===sa&&Nt.layers.test($.layers)){const vn=Wt.side;Wt.side=kn,Wt.needsUpdate=!0,on(Nt,re,$,Je,Wt,bt),Wt.side=vn,Wt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Re),at.updateRenderTargetMipmap(Re))}L.setRenderTarget(Be,Ie,$e),L.setClearColor(z,Z),Ze!==void 0&&($.viewport=Ze),L.toneMapping=tt}function Wn(A,W,re){const $=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Re=A.length;Y<Re;Y++){const Ue=A[Y],{object:Be,geometry:Ie,group:$e}=Ue;let tt=Ue.material;tt.allowOverride===!0&&$!==null&&(tt=$),Be.layers.test(re.layers)&&on(Be,W,re,Ie,tt,$e)}}function on(A,W,re,$,Y,Re){A.onBeforeRender(L,W,re,$,Y,Re),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(L,W,re,$,A,Re),Y.transparent===!0&&Y.side===sa&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,L.renderBufferDirect(re,W,$,Y,A,Re),Y.side=ja,Y.needsUpdate=!0,L.renderBufferDirect(re,W,$,Y,A,Re),Y.side=sa):L.renderBufferDirect(re,W,$,Y,A,Re),A.onAfterRender(L,W,re,$,Y,Re)}function hn(A,W,re){W.isScene!==!0&&(W=tn);const $=je.get(A),Y=N.state.lights,Re=N.state.shadowsArray,Ue=Y.state.version,Be=ce.getParameters(A,Y.state,Re,W,re),Ie=ce.getProgramCacheKey(Be);let $e=$.programs;$.environment=A.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(A.isMeshStandardMaterial?M:D).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",it),$e=new Map,$.programs=$e);let tt=$e.get(Ie);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Ue)return Cr(A,Be),tt}else Be.uniforms=ce.getUniforms(A),A.onBeforeCompile(Be,L),tt=ce.acquireProgram(Be,Ie),$e.set(Ie,tt),$.uniforms=Be.uniforms;const Ze=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Cr(A,Be),$.needsLights=ko(A),$.lightsStateVersion=Ue,$.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function Li(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ec.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Cr(A,W){const re=je.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Lc(A,W,re,$,Y){W.isScene!==!0&&(W=tn),at.resetTextureUnits();const Re=W.fog,Ue=$.isMeshStandardMaterial?W.environment:null,Be=C===null?L.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ts,Ie=($.isMeshStandardMaterial?M:D).get($.envMap||Ue),$e=$.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,tt=!!re.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!re.morphAttributes.position,ct=!!re.morphAttributes.normal,Et=!!re.morphAttributes.color;let Rt=Ya;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Rt=L.toneMapping);const St=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Nt=St!==void 0?St.length:0,Je=je.get($),Wt=N.state.lights;if(se===!0&&(Te===!0||A!==ee)){const bn=A===ee&&$.id===k;We.setState($,A,bn)}let bt=!1;$.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Wt.state.version||Je.outputColorSpace!==Be||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==Ie||$.fog===!0&&Je.fog!==Re||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ct||Je.morphColors!==Et||Je.toneMapping!==Rt||Je.morphTargetsCount!==Nt)&&(bt=!0):(bt=!0,Je.__version=$.version);let vn=Je.currentProgram;bt===!0&&(vn=hn($,W,Y));let ma=!1,Yt=!1,Oi=!1;const jt=vn.getUniforms(),Sn=Je.uniforms;if(Ge.useProgram(vn.program)&&(ma=!0,Yt=!0,Oi=!0),$.id!==k&&(k=$.id,Yt=!0),ma||ee!==A){Ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),jt.setValue(I,"projectionMatrix",A.projectionMatrix),jt.setValue(I,"viewMatrix",A.matrixWorldInverse);const En=jt.map.cameraPosition;En!==void 0&&En.setValue(I,ke.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&jt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&jt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),ee!==A&&(ee=A,Yt=!0,Oi=!0)}if(Y.isSkinnedMesh){jt.setOptional(I,Y,"bindMatrix"),jt.setOptional(I,Y,"bindMatrixInverse");const bn=Y.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),jt.setValue(I,"boneTexture",bn.boneTexture,at))}Y.isBatchedMesh&&(jt.setOptional(I,Y,"batchingTexture"),jt.setValue(I,"batchingTexture",Y._matricesTexture,at),jt.setOptional(I,Y,"batchingIdTexture"),jt.setValue(I,"batchingIdTexture",Y._indirectTexture,at),jt.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&jt.setValue(I,"batchingColorTexture",Y._colorsTexture,at));const pn=re.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ye.update(Y,re,vn),(Yt||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,jt.setValue(I,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Ie,Sn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(Sn.envMapIntensity.value=W.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=zE()),Yt&&(jt.setValue(I,"toneMappingExposure",L.toneMappingExposure),Je.needsLights&&Oc(Sn,Oi),Re&&$.fog===!0&&qe.refreshFogUniforms(Sn,Re),qe.refreshMaterialUniforms(Sn,$,ve,ge,N.state.transmissionRenderTarget[A.id]),Ec.upload(I,Li(Je),Sn,at)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ec.upload(I,Li(Je),Sn,at),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&jt.setValue(I,"center",Y.center),jt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),jt.setValue(I,"normalMatrix",Y.normalMatrix),jt.setValue(I,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let En=0,Ei=bn.length;En<Ei;En++){const zi=bn[En];De.update(zi,vn),De.bind(zi,vn)}}return vn}function Oc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ko(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,W,re){const $=je.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),je.get(A.texture).__webglTexture=W,je.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:re,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const re=je.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Ja=I.createFramebuffer();this.setRenderTarget=function(A,W=0,re=0){C=A,te=W,w=re;let $=!0,Y=null,Re=!1,Ue=!1;if(A){const Ie=je.get(A);if(Ie.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Ie.__webglFramebuffer===void 0)at.setupRenderTarget(A);else if(Ie.__hasExternalTextures)at.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&je.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const tt=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?Y=tt[W][re]:Y=tt[W],Re=!0):A.samples>0&&at.useMultisampledRTT(A)===!1?Y=je.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?Y=tt[re]:Y=tt,le.copy(A.viewport),pe.copy(A.scissor),de=A.scissorTest}else le.copy(Se).multiplyScalar(ve).floor(),pe.copy(Ae).multiplyScalar(ve).floor(),de=Oe;if(re!==0&&(Y=Ja),Ge.bindFramebuffer(I.FRAMEBUFFER,Y)&&$&&Ge.drawBuffers(A,Y),Ge.viewport(le),Ge.scissor(pe),Ge.setScissorTest(de),Re){const Ie=je.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,re)}else if(Ue){const Ie=W;for(let $e=0;$e<A.textures.length;$e++){const tt=je.get(A.textures[$e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$e,tt.__webglTexture,re,Ie)}}else if(A!==null&&re!==0){const Ie=je.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,re)}k=-1},this.readRenderTargetPixels=function(A,W,re,$,Y,Re,Ue,Be=0){if(!(A&&A.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie){Ge.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const $e=A.textures[Be],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ze)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&re>=0&&re<=A.height-Y&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Be),I.readPixels(W,re,$,Y,nt.convert(tt),nt.convert(Ze),Re))}finally{const $e=C!==null?je.get(C).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,$,Y,Re,Ue,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie)if(W>=0&&W<=A.width-$&&re>=0&&re<=A.height-Y){Ge.bindFramebuffer(I.FRAMEBUFFER,Ie);const $e=A.textures[Be],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.bufferData(I.PIXEL_PACK_BUFFER,Re.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Be),I.readPixels(W,re,$,Y,nt.convert(tt),nt.convert(Ze),0);const Et=C!==null?je.get(C).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,Et);const Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await mb(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Re),I.deleteBuffer(ct),I.deleteSync(Rt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,re=0){const $=Math.pow(2,-re),Y=Math.floor(A.image.width*$),Re=Math.floor(A.image.height*$),Ue=W!==null?W.x:0,Be=W!==null?W.y:0;at.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,Ue,Be,Y,Re),Ge.unbindTexture()};const Os=I.createFramebuffer(),pa=I.createFramebuffer();this.copyTextureToTexture=function(A,W,re=null,$=null,Y=0,Re=null){Re===null&&(Y!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Y,Y=0):Re=0);let Ue,Be,Ie,$e,tt,Ze,ct,Et,Rt;const St=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(re!==null)Ue=re.max.x-re.min.x,Be=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,tt=re.min.y,Ze=re.isBox3?re.min.z:0;else{const pn=Math.pow(2,-Y);Ue=Math.floor(St.width*pn),Be=Math.floor(St.height*pn),A.isDataArrayTexture?Ie=St.depth:A.isData3DTexture?Ie=Math.floor(St.depth*pn):Ie=1,$e=0,tt=0,Ze=0}$!==null?(ct=$.x,Et=$.y,Rt=$.z):(ct=0,Et=0,Rt=0);const Nt=nt.convert(W.format),Je=nt.convert(W.type);let Wt;W.isData3DTexture?(at.setTexture3D(W,0),Wt=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(at.setTexture2DArray(W,0),Wt=I.TEXTURE_2D_ARRAY):(at.setTexture2D(W,0),Wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const bt=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ma=I.getParameter(I.UNPACK_SKIP_PIXELS),Yt=I.getParameter(I.UNPACK_SKIP_ROWS),Oi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const jt=A.isDataArrayTexture||A.isData3DTexture,Sn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const pn=je.get(A),bn=je.get(W),En=je.get(pn.__renderTarget),Ei=je.get(bn.__renderTarget);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let zi=0;zi<Ie;zi++)jt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(A).__webglTexture,Y,Ze+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(W).__webglTexture,Re,Rt+zi)),I.blitFramebuffer($e,tt,Ue,Be,ct,Et,Ue,Be,I.DEPTH_BUFFER_BIT,I.NEAREST);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||je.has(A)){const pn=je.get(A),bn=je.get(W);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,Os),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa);for(let En=0;En<Ie;En++)jt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,Y,Ze+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,Y),Sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,Re,Rt+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,Re),Y!==0?I.blitFramebuffer($e,tt,Ue,Be,ct,Et,Ue,Be,I.COLOR_BUFFER_BIT,I.NEAREST):Sn?I.copyTexSubImage3D(Wt,Re,ct,Et,Rt+En,$e,tt,Ue,Be):I.copyTexSubImage2D(Wt,Re,ct,Et,$e,tt,Ue,Be);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Sn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Wt,Re,ct,Et,Rt,Ue,Be,Ie,Nt,Je,St.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Wt,Re,ct,Et,Rt,Ue,Be,Ie,Nt,St.data):I.texSubImage3D(Wt,Re,ct,Et,Rt,Ue,Be,Ie,Nt,Je,St):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Re,ct,Et,Ue,Be,Nt,Je,St.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Re,ct,Et,St.width,St.height,Nt,St.data):I.texSubImage2D(I.TEXTURE_2D,Re,ct,Et,Ue,Be,Nt,Je,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ma),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),Re===0&&W.generateMipmaps&&I.generateMipmap(Wt),Ge.unbindTexture()},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&at.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?at.setTextureCube(A,0):A.isData3DTexture?at.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?at.setTexture2DArray(A,0):at.setTexture2D(A,0),Ge.unbindTexture()},this.resetState=function(){te=0,w=0,C=null,Ge.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const BE=({topColor:o="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:r=.3,interactive:l=!1,className:u="",glowAmount:d=.005,pillarWidth:h=3,pillarHeight:m=.4,noiseIntensity:p=.5,mixBlendMode:_="screen",pillarRotation:g=0})=>{const S=kt.useRef(null),y=kt.useRef(null),T=kt.useRef(null),R=kt.useRef(null),b=kt.useRef(null),v=kt.useRef(null),B=kt.useRef(null),N=kt.useRef(new Lt(0,0)),F=kt.useRef(0),[X,L]=kt.useState(!0);return kt.useEffect(()=>{const O=document.createElement("canvas");O.getContext("webgl")||O.getContext("experimental-webgl")||(L(!1),console.warn("WebGL is not supported in this browser"))},[]),kt.useEffect(()=>{if(!S.current||!X)return;const O=S.current,te=O.clientWidth,w=O.clientHeight,C=new Vb;b.current=C;const k=new Pg(-1,1,1,-1,0,1);v.current=k;let ee;try{ee=new PE({antialias:!1,alpha:!0,powerPreference:"high-performance",precision:"lowp",stencil:!1,depth:!1})}catch(se){console.error("Failed to create WebGL renderer:",se),L(!1);return}ee.setSize(te,w),ee.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.appendChild(ee.domElement),T.current=ee;const le=se=>{const Te=new Bt(se);return new ue(Te.r,Te.g,Te.b)},pe=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,de=`
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uPillarRotation;
      varying vec2 vUv;

      const float PI = 3.141592653589793;
      const float EPSILON = 0.001;
      const float E = 2.71828182845904523536;
      const float HALF = 0.5;

      mat2 rot(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      // Procedural noise function
      float noise(vec2 coord) {
        float G = E;
        vec2 r = (G * sin(G * coord));
        return fract(r.x * r.y * (1.0 + coord.x));
      }

      // Apply layered wave deformation to position
      vec3 applyWaveDeformation(vec3 pos, float timeOffset) {
        float frequency = 1.0;
        float amplitude = 1.0;
        vec3 deformed = pos;
        
        for(float i = 0.0; i < 4.0; i++) {
          deformed.xz *= rot(0.4);
          float phase = timeOffset * i * 2.0;
          vec3 oscillation = cos(deformed.zxy * frequency - phase);
          deformed += oscillation * amplitude;
          frequency *= 2.0;
          amplitude *= HALF;
        }
        return deformed;
      }

      // Polynomial smooth blending between two values
      float blendMin(float a, float b, float k) {
        float scaledK = k * 4.0;
        float h = max(scaledK - abs(a - b), 0.0);
        return min(a, b) - h * h * 0.25 / scaledK;
      }

      float blendMax(float a, float b, float k) {
        return -blendMin(-a, -b, k);
      }

      void main() {
        vec2 fragCoord = vUv * uResolution;
        vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;
        
        // Apply 2D rotation to UV coordinates
        float rotAngle = uPillarRotation * PI / 180.0;
        uv *= rot(rotAngle);

        vec3 origin = vec3(0.0, 0.0, -10.0);
        vec3 direction = normalize(vec3(uv, 1.0));

        float maxDepth = 50.0;
        float depth = 0.1;

        mat2 rotX = rot(uTime * 0.3);
        if(uInteractive && length(uMouse) > 0.0) {
          rotX = rot(uMouse.x * PI * 2.0);
        }

        vec3 color = vec3(0.0);
        
        for(float i = 0.0; i < 100.0; i++) {
          vec3 pos = origin + direction * depth;
          pos.xz *= rotX;

          // Apply vertical scaling and wave deformation
          vec3 deformed = pos;
          deformed.y *= uPillarHeight;
          deformed = applyWaveDeformation(deformed + vec3(0.0, uTime, 0.0), uTime);
          
          // Calculate distance field using cosine pattern
          vec2 cosinePair = cos(deformed.xz);
          float fieldDistance = length(cosinePair) - 0.2;
          
          // Radial boundary constraint
          float radialBound = length(pos.xz) - uPillarWidth;
          fieldDistance = blendMax(radialBound, fieldDistance, 1.0);
          fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

          vec3 gradient = mix(uBottomColor, uTopColor, smoothstep(15.0, -15.0, pos.y));
          color += gradient * pow(1.0 / fieldDistance, 1.0);

          if(fieldDistance < EPSILON || depth > maxDepth) break;
          depth += fieldDistance;
        }

        // Normalize by pillar width to maintain consistent glow regardless of size
        float widthNormalization = uPillarWidth / 3.0;
        color = tanh(color * uGlowAmount / widthNormalization);
        
        // Add noise postprocessing
        float rnd = noise(gl_FragCoord.xy);
        color -= rnd / 15.0 * uNoiseIntensity;
        
        gl_FragColor = vec4(color * uIntensity, 1.0);
      }
    `,z=new Ni({vertexShader:pe,fragmentShader:de,uniforms:{uTime:{value:0},uResolution:{value:new Lt(te,w)},uMouse:{value:N.current},uTopColor:{value:le(o)},uBottomColor:{value:le(t)},uIntensity:{value:i},uInteractive:{value:l},uGlowAmount:{value:d},uPillarWidth:{value:te<768?h*4:h},uPillarHeight:{value:m},uNoiseIntensity:{value:p},uPillarRotation:{value:g}},transparent:!0,depthWrite:!1,depthTest:!1});R.current=z;const Z=new Go(2,2);B.current=Z;const j=new ha(Z,z);C.add(j);let ge=null;const ve=se=>{if(!l||ge)return;ge=window.setTimeout(()=>{ge=null},16);const Te=O.getBoundingClientRect(),Pe=(se.clientX-Te.left)/Te.width*2-1,ke=-((se.clientY-Te.top)/Te.height)*2+1;N.current.set(Pe,ke)};l&&O.addEventListener("mousemove",ve,{passive:!0});let U=performance.now();const Se=1e3/60,Ae=se=>{if(!R.current||!T.current||!b.current||!v.current)return;const Te=se-U;Te>=Se&&(F.current+=.016*r,R.current.uniforms.uTime.value=F.current,T.current.render(b.current,v.current),U=se-Te%Se),y.current=requestAnimationFrame(Ae)};y.current=requestAnimationFrame(Ae);let Oe=null;const ne=()=>{Oe&&clearTimeout(Oe),Oe=window.setTimeout(()=>{if(!T.current||!R.current||!S.current)return;const se=S.current.clientWidth,Te=S.current.clientHeight;T.current.setSize(se,Te),R.current.uniforms.uResolution.value.set(se,Te);const Pe=se<768;R.current.uniforms.uPillarWidth.value=Pe?h*4:h},150)};return window.addEventListener("resize",ne,{passive:!0}),()=>{window.removeEventListener("resize",ne),l&&O.removeEventListener("mousemove",ve),y.current&&cancelAnimationFrame(y.current),T.current&&(T.current.dispose(),T.current.forceContextLoss(),O.contains(T.current.domElement)&&O.removeChild(T.current.domElement)),R.current&&R.current.dispose(),B.current&&B.current.dispose(),T.current=null,R.current=null,b.current=null,v.current=null,B.current=null,y.current=null}},[o,t,i,r,l,d,h,m,p,g,X]),X?V.jsx("div",{ref:S,className:`w-full h-full absolute top-0 left-0 ${u}`,style:{mixBlendMode:_}}):V.jsx("div",{className:`w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/10 text-gray-500 text-sm ${u}`,style:{mixBlendMode:_},children:"WebGL not supported"})},FE=()=>V.jsx("div",{className:"py-8 px-6 md:px-16",children:V.jsxs("div",{className:"max-w-[1600px] mx-auto flex items-center justify-between relative",children:[V.jsx("div",{className:"font-display text-2xl md:text-2xl tracking-tighter",children:"CHANDRU"}),V.jsx("nav",{className:"absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 py-6 z-20",children:["WORK","ABOUT","CONTACT"].map((o,t)=>V.jsx(en,{delay:600+t*100,children:V.jsxs("a",{href:`#${o.toLowerCase()}`,className:"relative px-6 py-2.5 rounded-full font-mono text-[10px] tracking-widest text-gray-400 hover:text-brutal-orange transition-colors duration-300 group",children:[V.jsxs("div",{className:"absolute inset-0 rounded-full border border-transparent group-hover:border-white/20 group-hover:bg-white/5 group-hover:backdrop-blur-xl group-hover:shadow-[0_0_30px_rgba(255,80,0,0.4),_inset_0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 overflow-hidden pointer-events-none",children:[V.jsx("div",{className:"absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),V.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-brutal-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),V.jsx("span",{className:"relative z-10",children:o})]})},o))}),V.jsx(en,{delay:900,children:V.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[V.jsx("a",{href:"https://github.com/Chandru231",target:"_blank",rel:"noopener noreferrer",className:"p-2.5 text-gray-500 hover:text-brutal-orange transition-colors",children:V.jsx(dh,{size:16})}),V.jsx("a",{href:"https://www.linkedin.com/in/chandru-m-9149b1391",target:"_blank",rel:"noopener noreferrer",className:"p-2.5 text-gray-500 hover:text-brutal-orange transition-colors",children:V.jsx(hh,{size:16})})]})})]})}),IE=()=>V.jsxs("section",{className:"relative h-screen w-full bg-[#050505] overflow-hidden",children:[V.jsx(BE,{topColor:"#cc2233",bottomColor:"#ee6644",intensity:1.4,rotationSpeed:.9,interactive:!0,glowAmount:.002,pillarWidth:5.3,pillarHeight:.4,noiseIntensity:.5,mixBlendMode:"screen",pillarRotation:25}),V.jsx("div",{className:"absolute inset-0 z-[1] backdrop-blur-[3px] pointer-events-none"}),V.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-10 mix-blend-overlay"}),V.jsx("div",{className:"absolute inset-0 z-10 pointer-events-none",style:{background:"radial-gradient(ellipse at center, transparent 20%, #050505 75%)"}}),V.jsxs("div",{className:"relative z-20 h-full flex flex-col",children:[V.jsx(FE,{}),V.jsx("div",{className:"flex-1 flex items-center justify-center px-6 md:px-16 overflow-visible",children:V.jsxs("div",{className:"text-center overflow-visible",children:[V.jsx(en,{delay:300,variant:"fade",direction:"left",children:V.jsx("h1",{className:"font-display leading-[0.85] mb-6 overflow-visible",children:V.jsx("span",{className:"block text-[18vw] md:text-[11.8vw] lg:text-[9.8vw] text-white tracking-[0.15em] md:tracking-[0.13em] pt-4",style:{textShadow:"0 10px 30px rgba(0,0,0,0.7), 0 20px 60px rgba(0,0,0,0.5), 0 0 100px rgba(0,0,0,0.4)"},children:"CHANDRU"})})}),V.jsx(en,{delay:400,variant:"fade",direction:"right",children:V.jsx("h1",{className:"font-display leading-[0.85] mb-6 overflow-visible",children:V.jsx("span",{className:"block text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] mt-4 tracking-[0.1em]",style:{color:"#ff3300",textShadow:"0 0 20px rgba(255,51,0,0.8), 0 0 40px rgba(255,51,0,0.4), 0 2px 10px rgba(0,0,0,0.9)"},children:"FRONTEND DEVELOPER"})})}),V.jsx(en,{delay:400,children:V.jsxs("p",{className:"font-mono text-sm md:text-base text-gray-300 max-w-lg mx-auto mb-10",children:["Crafting ",V.jsx("span",{style:{color:"#ff3300",textShadow:"0 0 15px rgba(255,51,0,0.6), 0 2px 6px rgba(0,0,0,0.8)"},children:"immersive"})," digital experiences with precision and performance"]})}),V.jsx(en,{delay:500,children:V.jsxs("div",{className:"flex items-center justify-center gap-6",children:[V.jsxs("a",{href:"#work",className:"group px-8 py-4 bg-brutal-orange text-black font-mono text-[10px] tracking-widest uppercase flex items-center gap-3 hover:shadow-[0_0_40px_rgba(255,51,0,0.4)] transition-all",children:["EXPLORE WORK",V.jsx(Tc,{size:14,className:"rotate-[-90deg] group-hover:translate-x-1 transition-transform"})]}),V.jsxs("a",{href:"/resume.pdf",download:!0,className:"px-8 py-4 border border-white/20 text-white font-mono text-[10px] tracking-widest uppercase hover:border-brutal-orange hover:text-brutal-orange transition-all flex items-center gap-3",children:["RESUME",V.jsx(Tc,{size:14,className:"group-hover:translate-y-1 transition-transform"})]})]})})]})})]})]}),HE=()=>V.jsx("section",{id:"about",className:"py-32 px-6 md:px-16 border-t border-white/10 bg-[#080808] relative",children:V.jsxs("div",{className:"max-w-[1400px] mx-auto",children:[V.jsx("div",{className:"text-center mb-20",children:V.jsx(en,{delay:200,children:V.jsxs("h2",{className:"font-display text-6xl md:text-8xl leading-[0.9] mb-8",children:["WHO I ",V.jsx("span",{className:"text-brutal-orange",children:"AM"})]})})}),V.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center mb-24",children:[V.jsx(en,{delay:300,children:V.jsxs("p",{className:"text-xl md:text-2xl leading-relaxed text-gray-300",children:["I'm ",V.jsx("span",{className:"text-white font-semibold",children:"Chandru"}),", a passionate frontend developer who crafts ",V.jsx("span",{className:"text-brutal-orange",children:"pixel-perfect"})," interfaces and immersive web experiences. I believe in clean code, bold design, and pushing the boundaries of what's possible on the web."]})}),V.jsxs("div",{className:"space-y-6",children:[V.jsx(en,{delay:400,children:V.jsxs("div",{className:"flex items-center gap-6 p-6 border border-white/10 hover:border-brutal-orange/50 transition-colors",children:[V.jsx("div",{className:"text-4xl font-display text-brutal-orange",children:"1"}),V.jsxs("div",{children:[V.jsx("div",{className:"text-white font-semibold",children:"Years Experience as a Freelancer"}),V.jsx("div",{className:"text-gray-500 text-sm font-mono",children:"Building for the web"})]})]})}),V.jsx(en,{delay:500,children:V.jsxs("div",{className:"flex items-center gap-6 p-6 border border-white/10 hover:border-brutal-orange/50 transition-colors",children:[V.jsx("div",{className:"text-4xl font-display text-brutal-orange",children:"20+"}),V.jsxs("div",{children:[V.jsx("div",{className:"text-white font-semibold",children:"Projects Completed"}),V.jsx("div",{className:"text-gray-500 text-sm font-mono",children:"From concept to launch"})]})]})})]})]}),V.jsxs("div",{className:"text-center",children:[V.jsx(en,{delay:600,children:V.jsx("div",{className:"mb-12",children:V.jsx("span",{className:"font-mono text-xs tracking-widest text-gray-500",children:"TECH STACK"})})}),V.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:["React","JavaScript","HTML","CSS","Tailwind CSS","Node.js"].map((o,t)=>V.jsx(en,{delay:700+t*50,children:V.jsx("span",{className:"px-6 py-3 border border-white/20 font-mono text-sm hover:border-brutal-orange hover:text-brutal-orange transition-colors inline-block",children:o})},o))})]})]})}),GE=()=>V.jsx("footer",{className:"pt-24 pb-12 border-t border-white/10 text-left",children:V.jsxs(en,{delay:500,children:[V.jsxs("div",{className:"grid md:grid-cols-4 gap-12 md:gap-8 mb-12",children:[V.jsxs("div",{className:"md:col-span-1",children:[V.jsx("div",{className:"font-display text-3xl mb-4 tracking-tight",children:"CHANDRU"}),V.jsx("p",{className:"font-mono text-xs text-gray-500 leading-relaxed max-w-[200px]",children:"Frontend Developer based in the digital void. Crafting interfaces that bleed and breathe."})]}),V.jsxs("div",{children:[V.jsx("div",{className:"font-mono text-[10px] text-brutal-orange mb-6 uppercase tracking-widest",children:"System_Nav"}),V.jsx("ul",{className:"space-y-3 font-mono text-xs text-gray-400",children:["WORK","ABOUT","CONTACT"].map(o=>V.jsx("li",{children:V.jsxs("a",{href:`#${o.toLowerCase()}`,className:"hover:text-white hover:translate-x-1 transition-all inline-block",children:["// ",o]})},o))})]}),V.jsxs("div",{children:[V.jsx("div",{className:"font-mono text-[10px] text-brutal-orange mb-6 uppercase tracking-widest",children:"Resources"}),V.jsxs("ul",{className:"space-y-3 font-mono text-xs text-gray-400",children:[V.jsx("li",{children:V.jsxs("a",{href:"/resume.pdf",className:"hover:text-white transition-colors flex items-center gap-2",children:[V.jsx(Tc,{size:12})," RESUME.PDF"]})}),V.jsx("li",{children:V.jsxs("a",{href:"#",className:"hover:text-white transition-colors flex items-center gap-2",children:[V.jsx(gS,{size:12})," SOURCE_CODE"]})}),V.jsx("li",{children:V.jsxs("a",{href:"#",className:"hover:text-white transition-colors flex items-center gap-2",children:[V.jsx(MS,{size:12})," CHANGELOG"]})})]})]}),V.jsx("div",{className:"flex flex-col justify-between",children:V.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"group flex items-center gap-3 font-mono text-xs text-white hover:text-brutal-orange transition-colors",children:["BACK_TO_TOP",V.jsx("div",{className:"p-2 border border-white/20 group-hover:border-brutal-orange bg-white/5 transition-colors",children:V.jsx(mS,{size:14,className:"group-hover:-translate-y-1 transition-transform"})})]})})]}),V.jsx("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4 pt-0 font-mono text-[10px] text-gray-600 uppercase tracking-wider",children:V.jsx("div",{children:"© 2025 CHANDRU."})})]})}),VE=()=>V.jsx("section",{id:"contact",className:"py-32 px-6 md:px-16 border-t border-white/10 bg-[#050505] relative",children:V.jsxs("div",{className:"max-w-[1400px] mx-auto text-center",children:[V.jsx(en,{children:V.jsxs("div",{className:"inline-flex items-center gap-3 mb-6",children:[V.jsx("div",{className:"w-12 h-px bg-brutal-orange"}),V.jsx("span",{className:"font-mono text-[10px] tracking-[0.3em] text-brutal-orange uppercase",children:"Get In Touch"}),V.jsx("div",{className:"w-12 h-px bg-brutal-orange"})]})}),V.jsx(en,{delay:100,children:V.jsxs("h2",{className:"font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8",children:["LET'S ",V.jsx("span",{className:"text-brutal-orange",children:"WORK"}),V.jsx("br",{}),"TOGETHER"]})}),V.jsx(en,{delay:200,children:V.jsx("p",{className:"text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12",children:"Have a project in mind? Let's create something amazing together."})}),V.jsx(en,{delay:300,children:V.jsxs("a",{href:"mailto:chandrum.dev@gmail.com",className:"inline-flex items-center gap-3 px-10 py-5 bg-brutal-orange text-black font-mono text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,51,0,0.4)] transition-all mb-16",children:["Say Hello",V.jsx(Tc,{size:16,className:"rotate-[-90deg]"})]})}),V.jsx(en,{delay:400,children:V.jsxs("div",{className:"flex justify-center gap-6 mb-20",children:[V.jsx("a",{href:"https://github.com/Chandru231",target:"_blank",rel:"noopener noreferrer",className:"p-4 border border-white/20 hover:border-brutal-orange hover:text-brutal-orange transition-colors",children:V.jsx(dh,{size:24})}),V.jsx("a",{href:"https://www.linkedin.com/in/chandru-m-9149b1391",target:"_blank",rel:"noopener noreferrer",className:"p-4 border border-white/20 hover:border-brutal-orange hover:text-brutal-orange transition-colors",children:V.jsx(hh,{size:24})})]})}),V.jsx(GE,{})]})}),kE=()=>V.jsxs("div",{className:"bg-[#050505] text-white font-sans selection:bg-brutal-orange selection:text-black overflow-x-hidden",children:[V.jsx(TS,{}),V.jsxs("main",{children:[V.jsx(IE,{}),V.jsx("section",{id:"work",children:V.jsx(ES,{})}),V.jsx(HE,{}),V.jsx(VE,{})]})]}),Vg=document.getElementById("root");if(!Vg)throw new Error("Could not find root element to mount to");const XE=aS.createRoot(Vg);XE.render(V.jsx(Kv.StrictMode,{children:V.jsx(kE,{})}));
