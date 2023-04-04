(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Hc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const GT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",ZT=Hc(GT);function pi(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Be(s)?JT(s):pi(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Be(t))return t;if(Oe(t))return t}}const QT=/;(?![^(]*\))/g,YT=/:([^]+)/,XT=/\/\*.*?\*\//gs;function JT(t){const e={};return t.replace(XT,"").split(QT).forEach(n=>{if(n){const s=n.split(YT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function jn(t){let e="";if(Be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=jn(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function dU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Be(e)&&(t.class=jn(e)),n&&(t.style=pi(n)),t}const eE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tE=Hc(eE);function Fg(t){return!!t||t===""}function nE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Es(t[s],e[s]);return n}function Es(t,e){if(t===e)return!0;let n=Kf(t),s=Kf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=so(t),s=so(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?nE(t,e):!1;if(n=Oe(t),s=Oe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Es(t[o],e[o]))return!1}}return String(t)===String(e)}function Kc(t,e){return t.findIndex(n=>Es(n,e))}const Bg=t=>Be(t)?t:t==null?"":W(t)||Oe(t)&&(t.toString===$g||!oe(t.toString))?JSON.stringify(t,Vg,2):String(t),Vg=(t,e)=>e&&e.__v_isRef?Vg(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:wr(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!W(e)&&!jg(e)?String(e):e,xe={},Pr=[],un=()=>{},sE=()=>!1,rE=/^on[^a-z]/,$o=t=>rE.test(t),zh=t=>t.startsWith("onUpdate:"),Ke=Object.assign,Wh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iE=Object.prototype.hasOwnProperty,Ee=(t,e)=>iE.call(t,e),W=Array.isArray,Lr=t=>mi(t)==="[object Map]",wr=t=>mi(t)==="[object Set]",Kf=t=>mi(t)==="[object Date]",oE=t=>mi(t)==="[object RegExp]",oe=t=>typeof t=="function",Be=t=>typeof t=="string",so=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Gh=t=>Oe(t)&&oe(t.then)&&oe(t.catch),$g=Object.prototype.toString,mi=t=>$g.call(t),aE=t=>mi(t).slice(8,-1),jg=t=>mi(t)==="[object Object]",Zh=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$i=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cE=/-(\w)/g,$t=zc(t=>t.replace(cE,(e,n)=>n?n.toUpperCase():"")),uE=/\B([A-Z])/g,zt=zc(t=>t.replace(uE,"-$1").toLowerCase()),Wc=zc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fa=zc(t=>t?`on${Wc(t)}`:""),Wr=(t,e)=>!Object.is(t,e),Mr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ec=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let zf;const lE=()=>zf||(zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class qg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Hg(t){return new qg(t)}function Kg(t,e=Pt){e&&e.active&&e.effects.push(t)}function zg(){return Pt}function hE(t){Pt&&Pt.cleanups.push(t)}const Qh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wg=t=>(t.w&Is)>0,Gg=t=>(t.n&Is)>0,dE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Is},fE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Wg(r)&&!Gg(r)?r.delete(t):e[n++]=r,r.w&=~Is,r.n&=~Is}e.length=n}},tc=new WeakMap;let Li=0,Is=1;const Fl=30;let on;const er=Symbol(""),Bl=Symbol("");class Gc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kg(this,s)}run(){if(!this.active)return this.fn();let e=on,n=ms;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=on,on=this,ms=!0,Is=1<<++Li,Li<=Fl?dE(this):Wf(this),this.fn()}finally{Li<=Fl&&fE(this),Is=1<<--Li,on=this.parent,ms=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){on===this?this.deferStop=!0:this.active&&(Wf(this),this.onStop&&this.onStop(),this.active=!1)}}function Wf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function fU(t,e){t.effect&&(t=t.effect.fn);const n=new Gc(t);e&&(Ke(n,e),e.scope&&Kg(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function pU(t){t.effect.stop()}let ms=!0;const Zg=[];function gi(){Zg.push(ms),ms=!1}function yi(){const t=Zg.pop();ms=t===void 0?!0:t}function Ot(t,e,n){if(ms&&on){let s=tc.get(t);s||tc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Qh()),Qg(r)}}function Qg(t,e){let n=!1;Li<=Fl?Gg(t)||(t.n|=Is,n=!Wg(t)):n=!t.has(on),n&&(t.add(on),on.deps.push(t))}function qn(t,e,n,s,r,i){const o=tc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Zh(n)&&a.push(o.get("length")):(a.push(o.get(er)),Lr(t)&&a.push(o.get(Bl)));break;case"delete":W(t)||(a.push(o.get(er)),Lr(t)&&a.push(o.get(Bl)));break;case"set":Lr(t)&&a.push(o.get(er));break}if(a.length===1)a[0]&&Vl(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Vl(Qh(c))}}function Vl(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Gf(s);for(const s of n)s.computed||Gf(s)}function Gf(t,e){(t!==on||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function pE(t,e){var n;return(n=tc.get(t))===null||n===void 0?void 0:n.get(e)}const mE=Hc("__proto__,__v_isRef,__isVue"),Yg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(so)),gE=Zc(),yE=Zc(!1,!0),vE=Zc(!0),_E=Zc(!0,!0),Zf=wE();function wE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=_e(this);for(let i=0,o=this.length;i<o;i++)Ot(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(_e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gi();const s=_e(this)[e].apply(this,n);return yi(),s}}),t}function bE(t){const e=_e(this);return Ot(e,"has",t),e.hasOwnProperty(t)}function Zc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ry:sy:e?ny:ty).get(s))return s;const o=W(s);if(!t){if(o&&Ee(Zf,r))return Reflect.get(Zf,r,i);if(r==="hasOwnProperty")return bE}const a=Reflect.get(s,r,i);return(so(r)?Yg.has(r):mE(r))||(t||Ot(s,"get",r),e)?a:Ze(a)?o&&Zh(r)?a:a.value:Oe(a)?t?iy(a):vi(a):a}}const TE=Xg(),EE=Xg(!0);function Xg(t=!1){return function(n,s,r,i){let o=n[s];if(Gr(o)&&Ze(o)&&!Ze(r))return!1;if(!t&&(!nc(r)&&!Gr(r)&&(o=_e(o),r=_e(r)),!W(n)&&Ze(o)&&!Ze(r)))return o.value=r,!0;const a=W(n)&&Zh(s)?Number(s)<n.length:Ee(n,s),c=Reflect.set(n,s,r,i);return n===_e(i)&&(a?Wr(r,o)&&qn(n,"set",s,r):qn(n,"add",s,r)),c}}function IE(t,e){const n=Ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qn(t,"delete",e,void 0),s}function CE(t,e){const n=Reflect.has(t,e);return(!so(e)||!Yg.has(e))&&Ot(t,"has",e),n}function SE(t){return Ot(t,"iterate",W(t)?"length":er),Reflect.ownKeys(t)}const Jg={get:gE,set:TE,deleteProperty:IE,has:CE,ownKeys:SE},ey={get:vE,set(t,e){return!0},deleteProperty(t,e){return!0}},AE=Ke({},Jg,{get:yE,set:EE}),kE=Ke({},ey,{get:_E}),Yh=t=>t,Qc=t=>Reflect.getPrototypeOf(t);function ya(t,e,n=!1,s=!1){t=t.__v_raw;const r=_e(t),i=_e(e);n||(e!==i&&Ot(r,"get",e),Ot(r,"get",i));const{has:o}=Qc(r),a=s?Yh:n?Xh:ro;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function va(t,e=!1){const n=this.__v_raw,s=_e(n),r=_e(t);return e||(t!==r&&Ot(s,"has",t),Ot(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function _a(t,e=!1){return t=t.__v_raw,!e&&Ot(_e(t),"iterate",er),Reflect.get(t,"size",t)}function Qf(t){t=_e(t);const e=_e(this);return Qc(e).has.call(e,t)||(e.add(t),qn(e,"add",t,t)),this}function Yf(t,e){e=_e(e);const n=_e(this),{has:s,get:r}=Qc(n);let i=s.call(n,t);i||(t=_e(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Wr(e,o)&&qn(n,"set",t,e):qn(n,"add",t,e),this}function Xf(t){const e=_e(this),{has:n,get:s}=Qc(e);let r=n.call(e,t);r||(t=_e(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&qn(e,"delete",t,void 0),i}function Jf(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&qn(t,"clear",void 0,void 0),n}function wa(t,e){return function(s,r){const i=this,o=i.__v_raw,a=_e(o),c=e?Yh:t?Xh:ro;return!t&&Ot(a,"iterate",er),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function ba(t,e,n){return function(...s){const r=this.__v_raw,i=_e(r),o=Lr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Yh:e?Xh:ro;return!e&&Ot(i,"iterate",c?Bl:er),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:this}}function RE(){const t={get(i){return ya(this,i)},get size(){return _a(this)},has:va,add:Qf,set:Yf,delete:Xf,clear:Jf,forEach:wa(!1,!1)},e={get(i){return ya(this,i,!1,!0)},get size(){return _a(this)},has:va,add:Qf,set:Yf,delete:Xf,clear:Jf,forEach:wa(!1,!0)},n={get(i){return ya(this,i,!0)},get size(){return _a(this,!0)},has(i){return va.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:wa(!0,!1)},s={get(i){return ya(this,i,!0,!0)},get size(){return _a(this,!0)},has(i){return va.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ba(i,!1,!1),n[i]=ba(i,!0,!1),e[i]=ba(i,!1,!0),s[i]=ba(i,!0,!0)}),[t,n,e,s]}const[NE,xE,OE,DE]=RE();function Yc(t,e){const n=e?t?DE:OE:t?xE:NE;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ee(n,r)&&r in s?n:s,r,i)}const PE={get:Yc(!1,!1)},LE={get:Yc(!1,!0)},ME={get:Yc(!0,!1)},UE={get:Yc(!0,!0)},ty=new WeakMap,ny=new WeakMap,sy=new WeakMap,ry=new WeakMap;function FE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BE(t){return t.__v_skip||!Object.isExtensible(t)?0:FE(aE(t))}function vi(t){return Gr(t)?t:Xc(t,!1,Jg,PE,ty)}function VE(t){return Xc(t,!1,AE,LE,ny)}function iy(t){return Xc(t,!0,ey,ME,sy)}function mU(t){return Xc(t,!0,kE,UE,ry)}function Xc(t,e,n,s,r){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=BE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function gs(t){return Gr(t)?gs(t.__v_raw):!!(t&&t.__v_isReactive)}function Gr(t){return!!(t&&t.__v_isReadonly)}function nc(t){return!!(t&&t.__v_isShallow)}function oy(t){return gs(t)||Gr(t)}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function Zr(t){return Xa(t,"__v_skip",!0),t}const ro=t=>Oe(t)?vi(t):t,Xh=t=>Oe(t)?iy(t):t;function Jh(t){ms&&on&&(t=_e(t),Qg(t.dep||(t.dep=Qh())))}function Jc(t,e){t=_e(t);const n=t.dep;n&&Vl(n)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function Ur(t){return ay(t,!1)}function $E(t){return ay(t,!0)}function ay(t,e){return Ze(t)?t:new jE(t,e)}class jE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_e(e),this._value=n?e:ro(e)}get value(){return Jh(this),this._value}set value(e){const n=this.__v_isShallow||nc(e)||Gr(e);e=n?e:_e(e),Wr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ro(e),Jc(this))}}function gU(t){Jc(t)}function ys(t){return Ze(t)?t.value:t}const qE={get:(t,e,n)=>ys(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ze(r)&&!Ze(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function cy(t){return gs(t)?t:new Proxy(t,qE)}class HE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>Jh(this),()=>Jc(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function yU(t){return new HE(t)}function KE(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=WE(t,n);return e}class zE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pE(_e(this._object),this._key)}}function WE(t,e,n){const s=t[e];return Ze(s)?s:new zE(t,e,n)}var uy;class GE{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[uy]=!1,this._dirty=!0,this.effect=new Gc(e,()=>{this._dirty||(this._dirty=!0,Jc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=_e(this);return Jh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}uy="__v_isReadonly";function ZE(t,e,n=!1){let s,r;const i=oe(t);return i?(s=t,r=un):(s=t.get,r=t.set),new GE(s,r,i||!r,n)}function vU(t,...e){}function _U(t,e){}function vs(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){_i(i,e,n)}return r}function Zt(t,e,n,s){if(oe(t)){const i=vs(t,e,n,s);return i&&Gh(i)&&i.catch(o=>{_i(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Zt(t[i],e,n,s));return r}function _i(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vs(c,null,10,[t,o,a]);return}}QE(t,n,r,s)}function QE(t,e,n,s=!0){console.error(t)}let io=!1,$l=!1;const pt=[];let _n=0;const Fr=[];let Dn=null,Hs=0;const ly=Promise.resolve();let ed=null;function jo(t){const e=ed||ly;return t?e.then(this?t.bind(this):t):e}function YE(t){let e=_n+1,n=pt.length;for(;e<n;){const s=e+n>>>1;oo(pt[s])<t?e=s+1:n=s}return e}function eu(t){(!pt.length||!pt.includes(t,io&&t.allowRecurse?_n+1:_n))&&(t.id==null?pt.push(t):pt.splice(YE(t.id),0,t),hy())}function hy(){!io&&!$l&&($l=!0,ed=ly.then(fy))}function XE(t){const e=pt.indexOf(t);e>_n&&pt.splice(e,1)}function dy(t){W(t)?Fr.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?Hs+1:Hs))&&Fr.push(t),hy()}function ep(t,e=io?_n+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function sc(t){if(Fr.length){const e=[...new Set(Fr)];if(Fr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((n,s)=>oo(n)-oo(s)),Hs=0;Hs<Dn.length;Hs++)Dn[Hs]();Dn=null,Hs=0}}const oo=t=>t.id==null?1/0:t.id,JE=(t,e)=>{const n=oo(t)-oo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function fy(t){$l=!1,io=!0,pt.sort(JE);const e=un;try{for(_n=0;_n<pt.length;_n++){const n=pt[_n];n&&n.active!==!1&&vs(n,null,14)}}finally{_n=0,pt.length=0,sc(),io=!1,ed=null,(pt.length||Fr.length)&&fy()}}let ki,Ta=[];function e0(t,e){var n,s;ki=t,ki?(ki.enabled=!0,Ta.forEach(({event:r,args:i})=>ki.emit(r,...i)),Ta=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{e0(i,e)}),setTimeout(()=>{ki||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ta=[])},3e3)):Ta=[]}function t0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||xe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||xe;d&&(r=n.map(p=>Be(p)?p.trim():p)),h&&(r=n.map(Ja))}let a,c=s[a=Fa(e)]||s[a=Fa($t(e))];!c&&i&&(c=s[a=Fa(zt(e))]),c&&Zt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Zt(u,t,6,r)}}function py(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=u=>{const l=py(u,e,!0);l&&(a=!0,Ke(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Oe(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Ke(o,i),Oe(t)&&s.set(t,o),o)}function tu(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,zt(e))||Ee(t,e))}let ut=null,nu=null;function ao(t){const e=ut;return ut=t,nu=t&&t.type.__scopeId||null,e}function n0(t){nu=t}function s0(){nu=null}const wU=t=>wi;function wi(t,e=ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&fp(-1);const i=ao(e);let o;try{o=t(...r)}finally{ao(i),s._d&&fp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ba(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:w}=t;let I,v;const m=ao(t);try{if(n.shapeFlag&4){const b=r||s;I=Lt(l.call(b,b,h,i,p,d,y)),v=c}else{const b=e;I=Lt(b.length>1?b(i,{attrs:c,slots:a,emit:u}):b(i,null)),v=e.props?c:i0(c)}}catch(b){Ki.length=0,_i(b,t,1),I=Me(It)}let _=I;if(v&&w!==!1){const b=Object.keys(v),{shapeFlag:k}=_;b.length&&k&7&&(o&&b.some(zh)&&(v=o0(v,o)),_=Hn(_,v))}return n.dirs&&(_=Hn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),I=_,ao(m),I}function r0(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ur(s)){if(s.type!==It||s.children==="v-if"){if(e)return;e=s}}else return}return e}const i0=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},o0=(t,e)=>{const n={};for(const s in t)(!zh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function a0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?tp(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!tu(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?tp(s,o,u):!0:!!o;return!1}function tp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!tu(n,i))return!0}return!1}function td({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const my=t=>t.__isSuspense,c0={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){t==null?u0(e,n,s,r,i,o,a,c,u):l0(t,e,n,s,r,o,a,c,u)},hydrate:h0,create:nd,normalize:d0},bU=c0;function co(t,e){const n=t.props&&t.props[e];oe(n)&&n()}function u0(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=t.suspense=nd(t,r,s,e,h,n,i,o,a,c);u(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(co(t,"onPending"),co(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),Br(d,t.ssFallback)):d.resolve()}function l0(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:y,pendingBranch:w,isInFallback:I,isHydrating:v}=h;if(w)h.pendingBranch=d,an(d,w)?(c(w,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():I&&(c(y,p,n,s,r,null,i,o,a),Br(h,p))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=w):u(w,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),I?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(y,p,n,s,r,null,i,o,a),Br(h,p))):y&&an(d,y)?(c(y,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&an(d,y))c(y,d,n,s,r,h,i,o,a),Br(h,d);else if(co(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:_}=h;m>0?setTimeout(()=>{h.pendingId===_&&h.fallback(p)},m):m===0&&h.fallback(p)}}function nd(t,e,n,s,r,i,o,a,c,u,l=!1){const{p:h,m:d,um:p,n:y,o:{parentNode:w,remove:I}}=u,v=t.props?ec(t.props.timeout):void 0,m={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(_=!1){const{vnode:b,activeBranch:k,pendingBranch:D,pendingId:N,effects:E,parentComponent:$,container:K}=m;if(m.isHydrating)m.isHydrating=!1;else if(!_){const ce=k&&D.transition&&D.transition.mode==="out-in";ce&&(k.transition.afterLeave=()=>{N===m.pendingId&&d(D,K,q,0)});let{anchor:q}=m;k&&(q=y(k),p(k,$,m,!0)),ce||d(D,K,q,0)}Br(m,D),m.pendingBranch=null,m.isInFallback=!1;let Y=m.parent,V=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...E),V=!0;break}Y=Y.parent}V||dy(E),m.effects=[],co(b,"onResolve")},fallback(_){if(!m.pendingBranch)return;const{vnode:b,activeBranch:k,parentComponent:D,container:N,isSVG:E}=m;co(b,"onFallback");const $=y(k),K=()=>{m.isInFallback&&(h(null,_,N,$,D,null,E,a,c),Br(m,_))},Y=_.transition&&_.transition.mode==="out-in";Y&&(k.transition.afterLeave=K),m.isInFallback=!0,p(k,D,null,!0),Y||K()},move(_,b,k){m.activeBranch&&d(m.activeBranch,_,b,k),m.container=_},next(){return m.activeBranch&&y(m.activeBranch)},registerDep(_,b){const k=!!m.pendingBranch;k&&m.deps++;const D=_.vnode.el;_.asyncDep.catch(N=>{_i(N,_,0)}).then(N=>{if(_.isUnmounted||m.isUnmounted||m.pendingId!==_.suspenseId)return;_.asyncResolved=!0;const{vnode:E}=_;Gl(_,N,!1),D&&(E.el=D);const $=!D&&_.subTree.el;b(_,E,w(D||_.subTree.el),D?null:y(_.subTree),m,o,c),$&&I($),td(_,E.el),k&&--m.deps===0&&m.resolve()})},unmount(_,b){m.isUnmounted=!0,m.activeBranch&&p(m.activeBranch,n,_,b),m.pendingBranch&&p(m.pendingBranch,n,_,b)}};return m}function h0(t,e,n,s,r,i,o,a,c){const u=e.suspense=nd(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(),l}function d0(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=np(s?n.default:n),t.ssFallback=s?np(n.fallback):Me(It)}function np(t){let e;if(oe(t)){const n=cr&&t._c;n&&(t._d=!1,qe()),t=t(),n&&(t._d=!0,e=Nt,Dy())}return W(t)&&(t=r0(t)),t=Lt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function gy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):dy(t)}function Br(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,td(s,r))}function Va(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function ln(t,e,n=!1){const s=He||ut;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&oe(e)?e.call(s.proxy):e}}function TU(t,e){return qo(t,null,e)}function f0(t,e){return qo(t,null,{flush:"post"})}function EU(t,e){return qo(t,null,{flush:"sync"})}const Ea={};function Vr(t,e,n){return qo(t,e,n)}function qo(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=xe){const a=zg()===(He==null?void 0:He.scope)?He:null;let c,u=!1,l=!1;if(Ze(t)?(c=()=>t.value,u=nc(t)):gs(t)?(c=()=>t,s=!0):W(t)?(l=!0,u=t.some(_=>gs(_)||nc(_)),c=()=>t.map(_=>{if(Ze(_))return _.value;if(gs(_))return zs(_);if(oe(_))return vs(_,a,2)})):oe(t)?e?c=()=>vs(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Zt(t,a,3,[d])}:c=un,e&&s){const _=c;c=()=>zs(_())}let h,d=_=>{h=v.onStop=()=>{vs(_,a,4)}},p;if(Xr)if(d=un,e?n&&Zt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const _=sI();p=_.__watcherHandles||(_.__watcherHandles=[])}else return un;let y=l?new Array(t.length).fill(Ea):Ea;const w=()=>{if(v.active)if(e){const _=v.run();(s||u||(l?_.some((b,k)=>Wr(b,y[k])):Wr(_,y)))&&(h&&h(),Zt(e,a,3,[_,y===Ea?void 0:l&&y[0]===Ea?[]:y,d]),y=_)}else v.run()};w.allowRecurse=!!e;let I;r==="sync"?I=w:r==="post"?I=()=>at(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),I=()=>eu(w));const v=new Gc(c,I);e?n?w():y=v.run():r==="post"?at(v.run.bind(v),a&&a.suspense):v.run();const m=()=>{v.stop(),a&&a.scope&&Wh(a.scope.effects,v)};return p&&p.push(m),m}function p0(t,e,n){const s=this.proxy,r=Be(t)?t.includes(".")?yy(s,t):()=>s[t]:t.bind(s,s);let i;oe(e)?i=e:(i=e.handler,n=e);const o=He;Cs(this);const a=qo(r,i.bind(s),n);return o?Cs(o):_s(),a}function yy(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function zs(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))zs(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)zs(t[n],e);else if(wr(t)||Lr(t))t.forEach(n=>{zs(n,e)});else if(jg(t))for(const n in t)zs(t[n],e);return t}function vy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ru(()=>{t.isMounted=!0}),id(()=>{t.isUnmounting=!0}),t}const Kt=[Function,Array],m0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},setup(t,{slots:e}){const n=Jn(),s=vy();let r;return()=>{const i=e.default&&sd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==It){o=w;break}}const a=_e(t),{mode:c}=a;if(s.isLeaving)return nl(o);const u=sp(o);if(!u)return nl(o);const l=uo(u,a,s,n);Qr(u,l);const h=n.subTree,d=h&&sp(h);let p=!1;const{getTransitionKey:y}=u.type;if(y){const w=y();r===void 0?r=w:w!==r&&(r=w,p=!0)}if(d&&d.type!==It&&(!an(u,d)||p)){const w=uo(d,a,s,n);if(Qr(d,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},nl(o);c==="in-out"&&u.type!==It&&(w.delayLeave=(I,v,m)=>{const _=wy(s,d);_[String(d.key)]=d,I._leaveCb=()=>{v(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=m})}return o}}},_y=m0;function wy(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function uo(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:w,onAppear:I,onAfterAppear:v,onAppearCancelled:m}=e,_=String(t.key),b=wy(n,t),k=(E,$)=>{E&&Zt(E,s,9,$)},D=(E,$)=>{const K=$[1];k(E,$),W(E)?E.every(Y=>Y.length<=1)&&K():E.length<=1&&K()},N={mode:i,persisted:o,beforeEnter(E){let $=a;if(!n.isMounted)if(r)$=w||a;else return;E._leaveCb&&E._leaveCb(!0);const K=b[_];K&&an(t,K)&&K.el._leaveCb&&K.el._leaveCb(),k($,[E])},enter(E){let $=c,K=u,Y=l;if(!n.isMounted)if(r)$=I||c,K=v||u,Y=m||l;else return;let V=!1;const ce=E._enterCb=q=>{V||(V=!0,q?k(Y,[E]):k(K,[E]),N.delayedLeave&&N.delayedLeave(),E._enterCb=void 0)};$?D($,[E,ce]):ce()},leave(E,$){const K=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return $();k(h,[E]);let Y=!1;const V=E._leaveCb=ce=>{Y||(Y=!0,$(),ce?k(y,[E]):k(p,[E]),E._leaveCb=void 0,b[K]===t&&delete b[K])};b[K]=t,d?D(d,[E,V]):V()},clone(E){return uo(E,e,n,s)}};return N}function nl(t){if(Ho(t))return t=Hn(t),t.children=null,t}function sp(t){return Ho(t)?t.children?t.children[0]:void 0:t}function Qr(t,e){t.shapeFlag&6&&t.component?Qr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Je?(o.patchFlag&128&&r++,s=s.concat(sd(o.children,e,a))):(e||o.type!==It)&&s.push(a!=null?Hn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Jt(t){return oe(t)?{setup:t,name:t.name}:t}const tr=t=>!!t.type.__asyncLoader;function IU(t){oe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,u,l=0;const h=()=>(l++,c=null,d()),d=()=>{let p;return c||(p=c=e().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),a)return new Promise((w,I)=>{a(y,()=>w(h()),()=>I(y),l+1)});throw y}).then(y=>p!==c&&c?c:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),u=y,y)))};return Jt({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return u},setup(){const p=He;if(u)return()=>sl(u,p);const y=m=>{c=null,_i(m,p,13,!s)};if(o&&p.suspense||Xr)return d().then(m=>()=>sl(m,p)).catch(m=>(y(m),()=>s?Me(s,{error:m}):null));const w=Ur(!1),I=Ur(),v=Ur(!!r);return r&&setTimeout(()=>{v.value=!1},r),i!=null&&setTimeout(()=>{if(!w.value&&!I.value){const m=new Error(`Async component timed out after ${i}ms.`);y(m),I.value=m}},i),d().then(()=>{w.value=!0,p.parent&&Ho(p.parent.vnode)&&eu(p.parent.update)}).catch(m=>{y(m),I.value=m}),()=>{if(w.value&&u)return sl(u,p);if(I.value&&s)return Me(s,{error:I.value});if(n&&!v.value)return Me(n)}}})}function sl(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=Me(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ho=t=>t.type.__isKeepAlive,g0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Jn(),s=n.ctx;if(!s.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:l,o:{createElement:h}}}=s,d=h("div");s.activate=(m,_,b,k,D)=>{const N=m.component;u(m,_,b,0,a),c(N.vnode,m,_,b,N,a,k,m.slotScopeIds,D),at(()=>{N.isDeactivated=!1,N.a&&Mr(N.a);const E=m.props&&m.props.onVnodeMounted;E&&kt(E,N.parent,m)},a)},s.deactivate=m=>{const _=m.component;u(m,d,null,1,a),at(()=>{_.da&&Mr(_.da);const b=m.props&&m.props.onVnodeUnmounted;b&&kt(b,_.parent,m),_.isDeactivated=!0},a)};function p(m){rl(m),l(m,n,a,!0)}function y(m){r.forEach((_,b)=>{const k=Ql(_.type);k&&(!m||!m(k))&&w(b)})}function w(m){const _=r.get(m);!o||!an(_,o)?p(_):o&&rl(o),r.delete(m),i.delete(m)}Vr(()=>[t.include,t.exclude],([m,_])=>{m&&y(b=>Mi(m,b)),_&&y(b=>!Mi(_,b))},{flush:"post",deep:!0});let I=null;const v=()=>{I!=null&&r.set(I,il(n.subTree))};return ru(v),rd(v),id(()=>{r.forEach(m=>{const{subTree:_,suspense:b}=n,k=il(_);if(m.type===k.type&&m.key===k.key){rl(k);const D=k.component.da;D&&at(D,b);return}p(m)})}),()=>{if(I=null,!e.default)return null;const m=e.default(),_=m[0];if(m.length>1)return o=null,m;if(!ur(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let b=il(_);const k=b.type,D=Ql(tr(b)?b.type.__asyncResolved||{}:k),{include:N,exclude:E,max:$}=t;if(N&&(!D||!Mi(N,D))||E&&D&&Mi(E,D))return o=b,_;const K=b.key==null?k:b.key,Y=r.get(K);return b.el&&(b=Hn(b),_.shapeFlag&128&&(_.ssContent=b)),I=K,Y?(b.el=Y.el,b.component=Y.component,b.transition&&Qr(b,b.transition),b.shapeFlag|=512,i.delete(K),i.add(K)):(i.add(K),$&&i.size>parseInt($,10)&&w(i.values().next().value)),b.shapeFlag|=256,o=b,my(_.type)?_:b}}},CU=g0;function Mi(t,e){return W(t)?t.some(n=>Mi(n,e)):Be(t)?t.split(",").includes(e):oE(t)?t.test(e):!1}function y0(t,e){by(t,"a",e)}function v0(t,e){by(t,"da",e)}function by(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(su(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ho(r.parent.vnode)&&_0(s,e,n,r),r=r.parent}}function _0(t,e,n,s){const r=su(e,t,s,!0);od(()=>{Wh(s[e],r)},n)}function rl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function il(t){return t.shapeFlag&128?t.ssContent:t}function su(t,e,n=He,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gi(),Cs(n);const a=Zt(e,n,t,o);return _s(),yi(),a});return s?r.unshift(i):r.push(i),i}}const Xn=t=>(e,n=He)=>(!Xr||t==="sp")&&su(t,(...s)=>e(...s),n),w0=Xn("bm"),ru=Xn("m"),b0=Xn("bu"),rd=Xn("u"),id=Xn("bum"),od=Xn("um"),T0=Xn("sp"),E0=Xn("rtg"),I0=Xn("rtc");function C0(t,e=He){su("ec",t,e)}function SU(t,e){const n=ut;if(n===null)return t;const s=au(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=xe]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&zs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function vn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(gi(),Zt(c,n,8,[t.el,a,t,e]),yi())}}const ad="components",S0="directives";function ji(t,e){return ud(ad,t,!0,e)||t}const Ty=Symbol();function cd(t){return Be(t)?ud(ad,t,!1)||t:t||Ty}function AU(t){return ud(S0,t)}function ud(t,e,n=!0,s=!1){const r=ut||He;if(r){const i=r.type;if(t===ad){const a=Ql(i,!1);if(a&&(a===e||a===$t(e)||a===Wc($t(e))))return i}const o=rp(r[t]||i[t],e)||rp(r.appContext[t],e);return!o&&s?i:o}}function rp(t,e){return t&&(t[e]||t[$t(e)]||t[Wc($t(e))])}function ip(t,e,n,s){let r;const i=n&&n[s];if(W(t)||Be(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function kU(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(W(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.key?(...r)=>{const i=s.fn(...r);return i&&(i.key=s.key),i}:s.fn)}return t}function A0(t,e,n={},s,r){if(ut.isCE||ut.parent&&tr(ut.parent)&&ut.parent.isCE)return e!=="default"&&(n.name=e),Me("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),qe();const o=i&&Ey(i(n)),a=bn(Je,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ey(t){return t.some(e=>ur(e)?!(e.type===It||e.type===Je&&!Ey(e.children)):!0)?t:null}function k0(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Fa(s)]=t[s];return n}const jl=t=>t?Uy(t)?au(t)||t.proxy:jl(t.parent):null,qi=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jl(t.parent),$root:t=>jl(t.root),$emit:t=>t.emit,$options:t=>ld(t),$forceUpdate:t=>t.f||(t.f=()=>eu(t.update)),$nextTick:t=>t.n||(t.n=jo.bind(t.proxy)),$watch:t=>p0.bind(t)}),ol=(t,e)=>t!==xe&&!t.__isScriptSetup&&Ee(t,e),ql={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ol(s,e))return o[e]=1,s[e];if(r!==xe&&Ee(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Ee(u,e))return o[e]=3,i[e];if(n!==xe&&Ee(n,e))return o[e]=4,n[e];Hl&&(o[e]=0)}}const l=qi[e];let h,d;if(l)return e==="$attrs"&&Ot(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xe&&Ee(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Ee(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ol(r,e)?(r[e]=n,!0):s!==xe&&Ee(s,e)?(s[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==xe&&Ee(t,o)||ol(e,o)||(a=i[0])&&Ee(a,o)||Ee(s,o)||Ee(qi,o)||Ee(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},R0=Ke({},ql,{get(t,e){if(e!==Symbol.unscopables)return ql.get(t,e,t)},has(t,e){return e[0]!=="_"&&!ZT(e)}});let Hl=!0;function N0(t){const e=ld(t),n=t.proxy,s=t.ctx;Hl=!1,e.beforeCreate&&op(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:w,deactivated:I,beforeDestroy:v,beforeUnmount:m,destroyed:_,unmounted:b,render:k,renderTracked:D,renderTriggered:N,errorCaptured:E,serverPrefetch:$,expose:K,inheritAttrs:Y,components:V,directives:ce,filters:q}=e;if(u&&x0(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const De in o){const Re=o[De];oe(Re)&&(s[De]=Re.bind(n))}if(r){const De=r.call(n,n);Oe(De)&&(t.data=vi(De))}if(Hl=!0,i)for(const De in i){const Re=i[De],tn=oe(Re)?Re.bind(n,n):oe(Re.get)?Re.get.bind(n,n):un,Bs=!oe(Re)&&oe(Re.set)?Re.set.bind(n):un,nn=Mt({get:tn,set:Bs});Object.defineProperty(s,De,{enumerable:!0,configurable:!0,get:()=>nn.value,set:At=>nn.value=At})}if(a)for(const De in a)Iy(a[De],s,n,De);if(c){const De=oe(c)?c.call(n):c;Reflect.ownKeys(De).forEach(Re=>{Va(Re,De[Re])})}l&&op(l,t,"c");function be(De,Re){W(Re)?Re.forEach(tn=>De(tn.bind(n))):Re&&De(Re.bind(n))}if(be(w0,h),be(ru,d),be(b0,p),be(rd,y),be(y0,w),be(v0,I),be(C0,E),be(I0,D),be(E0,N),be(id,m),be(od,b),be(T0,$),W(K))if(K.length){const De=t.exposed||(t.exposed={});K.forEach(Re=>{Object.defineProperty(De,Re,{get:()=>n[Re],set:tn=>n[Re]=tn})})}else t.exposed||(t.exposed={});k&&t.render===un&&(t.render=k),Y!=null&&(t.inheritAttrs=Y),V&&(t.components=V),ce&&(t.directives=ce)}function x0(t,e,n=un,s=!1){W(t)&&(t=Kl(t));for(const r in t){const i=t[r];let o;Oe(i)?"default"in i?o=ln(i.from||r,i.default,!0):o=ln(i.from||r):o=ln(i),Ze(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function op(t,e,n){Zt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Iy(t,e,n,s){const r=s.includes(".")?yy(n,s):()=>n[s];if(Be(t)){const i=e[t];oe(i)&&Vr(r,i)}else if(oe(t))Vr(r,t.bind(n));else if(Oe(t))if(W(t))t.forEach(i=>Iy(i,e,n,s));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Vr(r,i,t)}}function ld(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>rc(c,u,o,!0)),rc(c,e,o)),Oe(e)&&i.set(e,c),c}function rc(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&rc(t,i,n,!0),r&&r.forEach(o=>rc(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=O0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const O0={data:ap,props:js,emits:js,methods:js,computed:js,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:js,directives:js,watch:P0,provide:ap,inject:D0};function ap(t,e){return e?t?function(){return Ke(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function D0(t,e){return js(Kl(t),Kl(e))}function Kl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function js(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function P0(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function L0(t,e,n,s=!1){const r={},i={};Xa(i,iu,1),t.propsDefaults=Object.create(null),Cy(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:VE(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function M0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=_e(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(tu(t.emitsOptions,d))continue;const p=e[d];if(c)if(Ee(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const y=$t(d);r[y]=zl(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{Cy(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!Ee(e,h)&&((l=zt(h))===h||!Ee(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=zl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Ee(e,h))&&(delete i[h],u=!0)}u&&qn(t,"set","$attrs")}function Cy(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if($i(c))continue;const u=e[c];let l;r&&Ee(r,l=$t(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:tu(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=_e(n),u=a||xe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=zl(r,c,h,u[h],t,!Ee(u,h))}}return o}function zl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Ee(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&oe(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Cs(r),s=u[n]=c.call(null,e),_s())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===zt(n))&&(s=!0))}return s}function Sy(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const l=h=>{c=!0;const[d,p]=Sy(h,e,!0);Ke(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Oe(t)&&s.set(t,Pr),Pr;if(W(i))for(let l=0;l<i.length;l++){const h=$t(i[l]);cp(h)&&(o[h]=xe)}else if(i)for(const l in i){const h=$t(l);if(cp(h)){const d=i[l],p=o[h]=W(d)||oe(d)?{type:d}:Object.assign({},d);if(p){const y=hp(Boolean,p.type),w=hp(String,p.type);p[0]=y>-1,p[1]=w<0||y<w,(y>-1||Ee(p,"default"))&&a.push(h)}}}const u=[o,a];return Oe(t)&&s.set(t,u),u}function cp(t){return t[0]!=="$"}function up(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lp(t,e){return up(t)===up(e)}function hp(t,e){return W(e)?e.findIndex(n=>lp(n,t)):oe(e)&&lp(e,t)?0:-1}const Ay=t=>t[0]==="_"||t==="$stable",hd=t=>W(t)?t.map(Lt):[Lt(t)],U0=(t,e,n)=>{if(e._n)return e;const s=wi((...r)=>hd(e(...r)),n);return s._c=!1,s},ky=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ay(r))continue;const i=t[r];if(oe(i))e[r]=U0(r,i,s);else if(i!=null){const o=hd(i);e[r]=()=>o}}},Ry=(t,e)=>{const n=hd(e);t.slots.default=()=>n},F0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_e(e),Xa(e,"_",n)):ky(e,t.slots={})}else t.slots={},e&&Ry(t,e);Xa(t.slots,iu,1)},B0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=xe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,ky(e,r)),o=e}else e&&(Ry(t,e),o={default:1});if(i)for(const a in r)!Ay(a)&&!(a in o)&&delete r[a]};function Ny(){return{app:null,config:{isNativeTag:sE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V0=0;function $0(t,e){return function(s,r=null){oe(s)||(s=Object.assign({},s)),r!=null&&!Oe(r)&&(r=null);const i=Ny(),o=new Set;let a=!1;const c=i.app={_uid:V0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:iI,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&oe(u.install)?(o.add(u),u.install(c,...l)):oe(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Me(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,au(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ic(t,e,n,s,r=!1){if(W(t)){t.forEach((d,p)=>ic(d,e&&(W(e)?e[p]:e),n,s,r));return}if(tr(s)&&!r)return;const i=s.shapeFlag&4?au(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Be(u)?(l[u]=null,Ee(h,u)&&(h[u]=null)):Ze(u)&&(u.value=null)),oe(c))vs(c,a,12,[o,l]);else{const d=Be(c),p=Ze(c);if(d||p){const y=()=>{if(t.f){const w=d?Ee(h,c)?h[c]:l[c]:c.value;r?W(w)&&Wh(w,i):W(w)?w.includes(i)||w.push(i):d?(l[c]=[i],Ee(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,Ee(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,at(y,n)):y()}}}let ts=!1;const Ia=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ca=t=>t.nodeType===8;function j0(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,l=(v,m)=>{if(!m.hasChildNodes()){n(null,v,m),sc(),m._vnode=v;return}ts=!1,h(m.firstChild,v,null,null,null),sc(),m._vnode=v,ts&&console.error("Hydration completed but contains mismatches.")},h=(v,m,_,b,k,D=!1)=>{const N=Ca(v)&&v.data==="[",E=()=>w(v,m,_,b,k,N),{type:$,ref:K,shapeFlag:Y,patchFlag:V}=m;let ce=v.nodeType;m.el=v,V===-2&&(D=!1,m.dynamicChildren=null);let q=null;switch($){case Yr:ce!==3?m.children===""?(c(m.el=r(""),o(v),v),q=v):q=E():(v.data!==m.children&&(ts=!0,v.data=m.children),q=i(v));break;case It:ce!==8||N?q=E():q=i(v);break;case $r:if(N&&(v=i(v),ce=v.nodeType),ce===1||ce===3){q=v;const Ae=!m.children.length;for(let be=0;be<m.staticCount;be++)Ae&&(m.children+=q.nodeType===1?q.outerHTML:q.data),be===m.staticCount-1&&(m.anchor=q),q=i(q);return N?i(q):q}else E();break;case Je:N?q=y(v,m,_,b,k,D):q=E();break;default:if(Y&1)ce!==1||m.type.toLowerCase()!==v.tagName.toLowerCase()?q=E():q=d(v,m,_,b,k,D);else if(Y&6){m.slotScopeIds=k;const Ae=o(v);if(e(m,Ae,null,_,b,Ia(Ae),D),q=N?I(v):i(v),q&&Ca(q)&&q.data==="teleport end"&&(q=i(q)),tr(m)){let be;N?(be=Me(Je),be.anchor=q?q.previousSibling:Ae.lastChild):be=v.nodeType===3?Ko(""):Me("div"),be.el=v,m.component.subTree=be}}else Y&64?ce!==8?q=E():q=m.type.hydrate(v,m,_,b,k,D,t,p):Y&128&&(q=m.type.hydrate(v,m,_,b,Ia(o(v)),k,D,t,h))}return K!=null&&ic(K,null,b,m),q},d=(v,m,_,b,k,D)=>{D=D||!!m.dynamicChildren;const{type:N,props:E,patchFlag:$,shapeFlag:K,dirs:Y}=m,V=N==="input"&&Y||N==="option";if(V||$!==-1){if(Y&&vn(m,null,_,"created"),E)if(V||!D||$&48)for(const q in E)(V&&q.endsWith("value")||$o(q)&&!$i(q))&&s(v,q,null,E[q],!1,void 0,_);else E.onClick&&s(v,"onClick",null,E.onClick,!1,void 0,_);let ce;if((ce=E&&E.onVnodeBeforeMount)&&kt(ce,_,m),Y&&vn(m,null,_,"beforeMount"),((ce=E&&E.onVnodeMounted)||Y)&&gy(()=>{ce&&kt(ce,_,m),Y&&vn(m,null,_,"mounted")},b),K&16&&!(E&&(E.innerHTML||E.textContent))){let q=p(v.firstChild,m,v,_,b,k,D);for(;q;){ts=!0;const Ae=q;q=q.nextSibling,a(Ae)}}else K&8&&v.textContent!==m.children&&(ts=!0,v.textContent=m.children)}return v.nextSibling},p=(v,m,_,b,k,D,N)=>{N=N||!!m.dynamicChildren;const E=m.children,$=E.length;for(let K=0;K<$;K++){const Y=N?E[K]:E[K]=Lt(E[K]);if(v)v=h(v,Y,b,k,D,N);else{if(Y.type===Yr&&!Y.children)continue;ts=!0,n(null,Y,_,null,b,k,Ia(_),D)}}return v},y=(v,m,_,b,k,D)=>{const{slotScopeIds:N}=m;N&&(k=k?k.concat(N):N);const E=o(v),$=p(i(v),m,E,_,b,k,D);return $&&Ca($)&&$.data==="]"?i(m.anchor=$):(ts=!0,c(m.anchor=u("]"),E,$),$)},w=(v,m,_,b,k,D)=>{if(ts=!0,m.el=null,D){const $=I(v);for(;;){const K=i(v);if(K&&K!==$)a(K);else break}}const N=i(v),E=o(v);return a(v),n(null,m,E,N,_,b,Ia(E),k),N},I=v=>{let m=0;for(;v;)if(v=i(v),v&&Ca(v)&&(v.data==="["&&m++,v.data==="]")){if(m===0)return i(v);m--}return v};return[l,h]}const at=gy;function q0(t){return xy(t)}function H0(t){return xy(t,j0)}function xy(t,e){const n=lE();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=un,insertStaticContent:y}=t,w=(f,g,T,S=null,R=null,L=null,j=!1,P=null,U=!!g.dynamicChildren)=>{if(f===g)return;f&&!an(f,g)&&(S=B(f),At(f,R,L,!0),f=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:x,ref:te,shapeFlag:G}=g;switch(x){case Yr:I(f,g,T,S);break;case It:v(f,g,T,S);break;case $r:f==null&&m(g,T,S,j);break;case Je:V(f,g,T,S,R,L,j,P,U);break;default:G&1?k(f,g,T,S,R,L,j,P,U):G&6?ce(f,g,T,S,R,L,j,P,U):(G&64||G&128)&&x.process(f,g,T,S,R,L,j,P,U,Te)}te!=null&&R&&ic(te,f&&f.ref,L,g||f,!g)},I=(f,g,T,S)=>{if(f==null)s(g.el=a(g.children),T,S);else{const R=g.el=f.el;g.children!==f.children&&u(R,g.children)}},v=(f,g,T,S)=>{f==null?s(g.el=c(g.children||""),T,S):g.el=f.el},m=(f,g,T,S)=>{[f.el,f.anchor]=y(f.children,g,T,S,f.el,f.anchor)},_=({el:f,anchor:g},T,S)=>{let R;for(;f&&f!==g;)R=d(f),s(f,T,S),f=R;s(g,T,S)},b=({el:f,anchor:g})=>{let T;for(;f&&f!==g;)T=d(f),r(f),f=T;r(g)},k=(f,g,T,S,R,L,j,P,U)=>{j=j||g.type==="svg",f==null?D(g,T,S,R,L,j,P,U):$(f,g,R,L,j,P,U)},D=(f,g,T,S,R,L,j,P)=>{let U,x;const{type:te,props:G,shapeFlag:ne,transition:ue,dirs:ye}=f;if(U=f.el=o(f.type,L,G&&G.is,G),ne&8?l(U,f.children):ne&16&&E(f.children,U,null,S,R,L&&te!=="foreignObject",j,P),ye&&vn(f,null,S,"created"),N(U,f,f.scopeId,j,S),G){for(const Ne in G)Ne!=="value"&&!$i(Ne)&&i(U,Ne,null,G[Ne],L,f.children,S,R,z);"value"in G&&i(U,"value",null,G.value),(x=G.onVnodeBeforeMount)&&kt(x,S,f)}ye&&vn(f,null,S,"beforeMount");const Pe=(!R||R&&!R.pendingBranch)&&ue&&!ue.persisted;Pe&&ue.beforeEnter(U),s(U,g,T),((x=G&&G.onVnodeMounted)||Pe||ye)&&at(()=>{x&&kt(x,S,f),Pe&&ue.enter(U),ye&&vn(f,null,S,"mounted")},R)},N=(f,g,T,S,R)=>{if(T&&p(f,T),S)for(let L=0;L<S.length;L++)p(f,S[L]);if(R){let L=R.subTree;if(g===L){const j=R.vnode;N(f,j,j.scopeId,j.slotScopeIds,R.parent)}}},E=(f,g,T,S,R,L,j,P,U=0)=>{for(let x=U;x<f.length;x++){const te=f[x]=P?os(f[x]):Lt(f[x]);w(null,te,g,T,S,R,L,j,P)}},$=(f,g,T,S,R,L,j)=>{const P=g.el=f.el;let{patchFlag:U,dynamicChildren:x,dirs:te}=g;U|=f.patchFlag&16;const G=f.props||xe,ne=g.props||xe;let ue;T&&Vs(T,!1),(ue=ne.onVnodeBeforeUpdate)&&kt(ue,T,g,f),te&&vn(g,f,T,"beforeUpdate"),T&&Vs(T,!0);const ye=R&&g.type!=="foreignObject";if(x?K(f.dynamicChildren,x,P,T,S,ye,L):j||Re(f,g,P,null,T,S,ye,L,!1),U>0){if(U&16)Y(P,g,G,ne,T,S,R);else if(U&2&&G.class!==ne.class&&i(P,"class",null,ne.class,R),U&4&&i(P,"style",G.style,ne.style,R),U&8){const Pe=g.dynamicProps;for(let Ne=0;Ne<Pe.length;Ne++){const Qe=Pe[Ne],sn=G[Qe],Sr=ne[Qe];(Sr!==sn||Qe==="value")&&i(P,Qe,sn,Sr,R,f.children,T,S,z)}}U&1&&f.children!==g.children&&l(P,g.children)}else!j&&x==null&&Y(P,g,G,ne,T,S,R);((ue=ne.onVnodeUpdated)||te)&&at(()=>{ue&&kt(ue,T,g,f),te&&vn(g,f,T,"updated")},S)},K=(f,g,T,S,R,L,j)=>{for(let P=0;P<g.length;P++){const U=f[P],x=g[P],te=U.el&&(U.type===Je||!an(U,x)||U.shapeFlag&70)?h(U.el):T;w(U,x,te,null,S,R,L,j,!0)}},Y=(f,g,T,S,R,L,j)=>{if(T!==S){if(T!==xe)for(const P in T)!$i(P)&&!(P in S)&&i(f,P,T[P],null,j,g.children,R,L,z);for(const P in S){if($i(P))continue;const U=S[P],x=T[P];U!==x&&P!=="value"&&i(f,P,x,U,j,g.children,R,L,z)}"value"in S&&i(f,"value",T.value,S.value)}},V=(f,g,T,S,R,L,j,P,U)=>{const x=g.el=f?f.el:a(""),te=g.anchor=f?f.anchor:a("");let{patchFlag:G,dynamicChildren:ne,slotScopeIds:ue}=g;ue&&(P=P?P.concat(ue):ue),f==null?(s(x,T,S),s(te,T,S),E(g.children,T,te,R,L,j,P,U)):G>0&&G&64&&ne&&f.dynamicChildren?(K(f.dynamicChildren,ne,T,R,L,j,P),(g.key!=null||R&&g===R.subTree)&&dd(f,g,!0)):Re(f,g,T,te,R,L,j,P,U)},ce=(f,g,T,S,R,L,j,P,U)=>{g.slotScopeIds=P,f==null?g.shapeFlag&512?R.ctx.activate(g,T,S,j,U):q(g,T,S,R,L,j,U):Ae(f,g,U)},q=(f,g,T,S,R,L,j)=>{const P=f.component=My(f,S,R);if(Ho(f)&&(P.ctx.renderer=Te),Fy(P),P.asyncDep){if(R&&R.registerDep(P,be),!f.el){const U=P.subTree=Me(It);v(null,U,g,T)}return}be(P,f,g,T,R,L,j)},Ae=(f,g,T)=>{const S=g.component=f.component;if(a0(f,g,T))if(S.asyncDep&&!S.asyncResolved){De(S,g,T);return}else S.next=g,XE(S.update),S.update();else g.el=f.el,S.vnode=g},be=(f,g,T,S,R,L,j)=>{const P=()=>{if(f.isMounted){let{next:te,bu:G,u:ne,parent:ue,vnode:ye}=f,Pe=te,Ne;Vs(f,!1),te?(te.el=ye.el,De(f,te,j)):te=ye,G&&Mr(G),(Ne=te.props&&te.props.onVnodeBeforeUpdate)&&kt(Ne,ue,te,ye),Vs(f,!0);const Qe=Ba(f),sn=f.subTree;f.subTree=Qe,w(sn,Qe,h(sn.el),B(sn),f,R,L),te.el=Qe.el,Pe===null&&td(f,Qe.el),ne&&at(ne,R),(Ne=te.props&&te.props.onVnodeUpdated)&&at(()=>kt(Ne,ue,te,ye),R)}else{let te;const{el:G,props:ne}=g,{bm:ue,m:ye,parent:Pe}=f,Ne=tr(g);if(Vs(f,!1),ue&&Mr(ue),!Ne&&(te=ne&&ne.onVnodeBeforeMount)&&kt(te,Pe,g),Vs(f,!0),G&&me){const Qe=()=>{f.subTree=Ba(f),me(G,f.subTree,f,R,null)};Ne?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Qe()):Qe()}else{const Qe=f.subTree=Ba(f);w(null,Qe,T,S,f,R,L),g.el=Qe.el}if(ye&&at(ye,R),!Ne&&(te=ne&&ne.onVnodeMounted)){const Qe=g;at(()=>kt(te,Pe,Qe),R)}(g.shapeFlag&256||Pe&&tr(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&f.a&&at(f.a,R),f.isMounted=!0,g=T=S=null}},U=f.effect=new Gc(P,()=>eu(x),f.scope),x=f.update=()=>U.run();x.id=f.uid,Vs(f,!0),x()},De=(f,g,T)=>{g.component=f;const S=f.vnode.props;f.vnode=g,f.next=null,M0(f,g.props,S,T),B0(f,g.children,T),gi(),ep(),yi()},Re=(f,g,T,S,R,L,j,P,U=!1)=>{const x=f&&f.children,te=f?f.shapeFlag:0,G=g.children,{patchFlag:ne,shapeFlag:ue}=g;if(ne>0){if(ne&128){Bs(x,G,T,S,R,L,j,P,U);return}else if(ne&256){tn(x,G,T,S,R,L,j,P,U);return}}ue&8?(te&16&&z(x,R,L),G!==x&&l(T,G)):te&16?ue&16?Bs(x,G,T,S,R,L,j,P,U):z(x,R,L,!0):(te&8&&l(T,""),ue&16&&E(G,T,S,R,L,j,P,U))},tn=(f,g,T,S,R,L,j,P,U)=>{f=f||Pr,g=g||Pr;const x=f.length,te=g.length,G=Math.min(x,te);let ne;for(ne=0;ne<G;ne++){const ue=g[ne]=U?os(g[ne]):Lt(g[ne]);w(f[ne],ue,T,null,R,L,j,P,U)}x>te?z(f,R,L,!0,!1,G):E(g,T,S,R,L,j,P,U,G)},Bs=(f,g,T,S,R,L,j,P,U)=>{let x=0;const te=g.length;let G=f.length-1,ne=te-1;for(;x<=G&&x<=ne;){const ue=f[x],ye=g[x]=U?os(g[x]):Lt(g[x]);if(an(ue,ye))w(ue,ye,T,null,R,L,j,P,U);else break;x++}for(;x<=G&&x<=ne;){const ue=f[G],ye=g[ne]=U?os(g[ne]):Lt(g[ne]);if(an(ue,ye))w(ue,ye,T,null,R,L,j,P,U);else break;G--,ne--}if(x>G){if(x<=ne){const ue=ne+1,ye=ue<te?g[ue].el:S;for(;x<=ne;)w(null,g[x]=U?os(g[x]):Lt(g[x]),T,ye,R,L,j,P,U),x++}}else if(x>ne)for(;x<=G;)At(f[x],R,L,!0),x++;else{const ue=x,ye=x,Pe=new Map;for(x=ye;x<=ne;x++){const Dt=g[x]=U?os(g[x]):Lt(g[x]);Dt.key!=null&&Pe.set(Dt.key,x)}let Ne,Qe=0;const sn=ne-ye+1;let Sr=!1,jf=0;const Ai=new Array(sn);for(x=0;x<sn;x++)Ai[x]=0;for(x=ue;x<=G;x++){const Dt=f[x];if(Qe>=sn){At(Dt,R,L,!0);continue}let yn;if(Dt.key!=null)yn=Pe.get(Dt.key);else for(Ne=ye;Ne<=ne;Ne++)if(Ai[Ne-ye]===0&&an(Dt,g[Ne])){yn=Ne;break}yn===void 0?At(Dt,R,L,!0):(Ai[yn-ye]=x+1,yn>=jf?jf=yn:Sr=!0,w(Dt,g[yn],T,null,R,L,j,P,U),Qe++)}const qf=Sr?K0(Ai):Pr;for(Ne=qf.length-1,x=sn-1;x>=0;x--){const Dt=ye+x,yn=g[Dt],Hf=Dt+1<te?g[Dt+1].el:S;Ai[x]===0?w(null,yn,T,Hf,R,L,j,P,U):Sr&&(Ne<0||x!==qf[Ne]?nn(yn,T,Hf,2):Ne--)}}},nn=(f,g,T,S,R=null)=>{const{el:L,type:j,transition:P,children:U,shapeFlag:x}=f;if(x&6){nn(f.component.subTree,g,T,S);return}if(x&128){f.suspense.move(g,T,S);return}if(x&64){j.move(f,g,T,Te);return}if(j===Je){s(L,g,T);for(let G=0;G<U.length;G++)nn(U[G],g,T,S);s(f.anchor,g,T);return}if(j===$r){_(f,g,T);return}if(S!==2&&x&1&&P)if(S===0)P.beforeEnter(L),s(L,g,T),at(()=>P.enter(L),R);else{const{leave:G,delayLeave:ne,afterLeave:ue}=P,ye=()=>s(L,g,T),Pe=()=>{G(L,()=>{ye(),ue&&ue()})};ne?ne(L,ye,Pe):Pe()}else s(L,g,T)},At=(f,g,T,S=!1,R=!1)=>{const{type:L,props:j,ref:P,children:U,dynamicChildren:x,shapeFlag:te,patchFlag:G,dirs:ne}=f;if(P!=null&&ic(P,null,T,f,!0),te&256){g.ctx.deactivate(f);return}const ue=te&1&&ne,ye=!tr(f);let Pe;if(ye&&(Pe=j&&j.onVnodeBeforeUnmount)&&kt(Pe,g,f),te&6)A(f.component,T,S);else{if(te&128){f.suspense.unmount(T,S);return}ue&&vn(f,null,g,"beforeUnmount"),te&64?f.type.remove(f,g,T,R,Te,S):x&&(L!==Je||G>0&&G&64)?z(x,g,T,!1,!0):(L===Je&&G&384||!R&&te&16)&&z(U,g,T),S&&Cr(f)}(ye&&(Pe=j&&j.onVnodeUnmounted)||ue)&&at(()=>{Pe&&kt(Pe,g,f),ue&&vn(f,null,g,"unmounted")},T)},Cr=f=>{const{type:g,el:T,anchor:S,transition:R}=f;if(g===Je){ga(T,S);return}if(g===$r){b(f);return}const L=()=>{r(T),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(f.shapeFlag&1&&R&&!R.persisted){const{leave:j,delayLeave:P}=R,U=()=>j(T,L);P?P(f.el,L,U):U()}else L()},ga=(f,g)=>{let T;for(;f!==g;)T=d(f),r(f),f=T;r(g)},A=(f,g,T)=>{const{bum:S,scope:R,update:L,subTree:j,um:P}=f;S&&Mr(S),R.stop(),L&&(L.active=!1,At(j,f,g,T)),P&&at(P,g),at(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},z=(f,g,T,S=!1,R=!1,L=0)=>{for(let j=L;j<f.length;j++)At(f[j],g,T,S,R)},B=f=>f.shapeFlag&6?B(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ee=(f,g,T)=>{f==null?g._vnode&&At(g._vnode,null,null,!0):w(g._vnode||null,f,g,null,null,null,T),ep(),sc(),g._vnode=f},Te={p:w,um:At,m:nn,r:Cr,mt:q,mc:E,pc:Re,pbc:K,n:B,o:t};let $e,me;return e&&([$e,me]=e(Te)),{render:ee,hydrate:$e,createApp:$0(ee,$e)}}function Vs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dd(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=os(r[i]),a.el=o.el),n||dd(o,a)),a.type===Yr&&(a.el=o.el)}}function K0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const z0=t=>t.__isTeleport,Hi=t=>t&&(t.disabled||t.disabled===""),dp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Wl=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},W0={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:p,querySelector:y,createText:w,createComment:I}}=u,v=Hi(e.props);let{shapeFlag:m,children:_,dynamicChildren:b}=e;if(t==null){const k=e.el=w(""),D=e.anchor=w("");p(k,n,s),p(D,n,s);const N=e.target=Wl(e.props,y),E=e.targetAnchor=w("");N&&(p(E,N),o=o||dp(N));const $=(K,Y)=>{m&16&&l(_,K,Y,r,i,o,a,c)};v?$(n,D):N&&$(N,E)}else{e.el=t.el;const k=e.anchor=t.anchor,D=e.target=t.target,N=e.targetAnchor=t.targetAnchor,E=Hi(t.props),$=E?n:D,K=E?k:N;if(o=o||dp(D),b?(d(t.dynamicChildren,b,$,r,i,o,a),dd(t,e,!0)):c||h(t,e,$,K,r,i,o,a,!1),v)E||Sa(e,n,k,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Y=e.target=Wl(e.props,y);Y&&Sa(e,Y,null,u,0)}else E&&Sa(e,D,N,u,1)}Oy(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=t;if(h&&i(l),(o||!Hi(d))&&(i(u),a&16))for(let p=0;p<c.length;p++){const y=c[p];r(y,e,n,!0,!!y.dynamicChildren)}},move:Sa,hydrate:G0};function Sa(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=i===2;if(h&&s(o,e,n),(!h||Hi(l))&&c&16)for(let d=0;d<u.length;d++)r(u[d],e,n,2);h&&s(a,e,n)}function G0(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=Wl(e.props,c);if(l){const h=l._lpa||l.firstChild;if(e.shapeFlag&16)if(Hi(e.props))e.anchor=u(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(h,e,l,n,s,r,i)}Oy(e)}return e.anchor&&o(e.anchor)}const RU=W0;function Oy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Je=Symbol(void 0),Yr=Symbol(void 0),It=Symbol(void 0),$r=Symbol(void 0),Ki=[];let Nt=null;function qe(t=!1){Ki.push(Nt=t?null:[])}function Dy(){Ki.pop(),Nt=Ki[Ki.length-1]||null}let cr=1;function fp(t){cr+=t}function Py(t){return t.dynamicChildren=cr>0?Nt||Pr:null,Dy(),cr>0&&Nt&&Nt.push(t),t}function Wt(t,e,n,s,r,i){return Py(Os(t,e,n,s,r,i,!0))}function bn(t,e,n,s,r){return Py(Me(t,e,n,s,r,!0))}function ur(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}function NU(t){}const iu="__vInternal",Ly=({key:t})=>t??null,$a=({ref:t,ref_key:e,ref_for:n})=>t!=null?Be(t)||Ze(t)||oe(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function Os(t,e=null,n=null,s=0,r=null,i=t===Je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ly(e),ref:e&&$a(e),scopeId:nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ut};return a?(fd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),cr>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const Me=Z0;function Z0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ty)&&(t=It),ur(t)){const a=Hn(t,e,!0);return n&&fd(a,n),cr>0&&!i&&Nt&&(a.shapeFlag&6?Nt[Nt.indexOf(t)]=a:Nt.push(a)),a.patchFlag|=-2,a}if(tI(t)&&(t=t.__vccOpts),e){e=Q0(e);let{class:a,style:c}=e;a&&!Be(a)&&(e.class=jn(a)),Oe(c)&&(oy(c)&&!W(c)&&(c=Ke({},c)),e.style=pi(c))}const o=Be(t)?1:my(t)?128:z0(t)?64:Oe(t)?4:oe(t)?2:0;return Os(t,e,n,s,r,o,i,!0)}function Q0(t){return t?oy(t)||iu in t?Ke({},t):t:null}function Hn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ou(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ly(a),ref:e&&e.ref?n&&r?W(r)?r.concat($a(e)):[r,$a(e)]:$a(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ko(t=" ",e=0){return Me(Yr,null,t,e)}function xU(t,e){const n=Me($r,null,t);return n.staticCount=e,n}function al(t="",e=!1){return e?(qe(),bn(It,null,t)):Me(It,null,t)}function Lt(t){return t==null||typeof t=="boolean"?Me(It):W(t)?Me(Je,null,t.slice()):typeof t=="object"?os(t):Me(Yr,null,String(t))}function os(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function fd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),fd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(iu in e)?e._ctx=ut:r===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[Ko(e)]):n=8);t.children=e,t.shapeFlag|=n}function ou(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=jn([e.class,s.class]));else if(r==="style")e.style=pi([e.style,s.style]);else if($o(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){Zt(t,e,7,[n,s])}const Y0=Ny();let X0=0;function My(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Y0,i={uid:X0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sy(s,r),emitsOptions:py(s,r),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:s.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=t0.bind(null,i),t.ce&&t.ce(i),i}let He=null;const Jn=()=>He||ut,Cs=t=>{He=t,t.scope.on()},_s=()=>{He&&He.scope.off(),He=null};function Uy(t){return t.vnode.shapeFlag&4}let Xr=!1;function Fy(t,e=!1){Xr=e;const{props:n,children:s}=t.vnode,r=Uy(t);L0(t,n,r,e),F0(t,s);const i=r?J0(t,e):void 0;return Xr=!1,i}function J0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zr(new Proxy(t.ctx,ql));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Vy(t):null;Cs(t),gi();const i=vs(s,t,0,[t.props,r]);if(yi(),_s(),Gh(i)){if(i.then(_s,_s),e)return i.then(o=>{Gl(t,o,e)}).catch(o=>{_i(o,t,0)});t.asyncDep=i}else Gl(t,i,e)}else By(t,e)}function Gl(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=cy(e)),By(t,n)}let oc,Zl;function OU(t){oc=t,Zl=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,R0))}}const DU=()=>!oc;function By(t,e,n){const s=t.type;if(!t.render){if(!e&&oc&&!s.render){const r=s.template||ld(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ke(Ke({isCustomElement:i,delimiters:a},o),c);s.render=oc(r,u)}}t.render=s.render||un,Zl&&Zl(t)}Cs(t),gi(),N0(t),yi(),_s()}function eI(t){return new Proxy(t.attrs,{get(e,n){return Ot(t,"get","$attrs"),e[n]}})}function Vy(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=eI(t))},slots:t.slots,emit:t.emit,expose:e}}function au(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cy(Zr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)},has(e,n){return n in e||n in qi}}))}function Ql(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function tI(t){return oe(t)&&"__vccOpts"in t}const Mt=(t,e)=>ZE(t,e,Xr);function PU(){return null}function LU(){return null}function MU(t){}function UU(t,e){return null}function FU(){return $y().slots}function BU(){return $y().attrs}function $y(){const t=Jn();return t.setupContext||(t.setupContext=Vy(t))}function VU(t,e){const n=W(t)?t.reduce((s,r)=>(s[r]={},s),{}):t;for(const s in e){const r=n[s];r?W(r)||oe(r)?n[s]={type:r,default:e[s]}:r.default=e[s]:r===null&&(n[s]={default:e[s]})}return n}function $U(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function jU(t){const e=Jn();let n=t();return _s(),Gh(n)&&(n=n.catch(s=>{throw Cs(e),s})),[n,()=>Cs(e)]}function pd(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!W(e)?ur(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ur(n)&&(n=[n]),Me(t,e,n))}const nI=Symbol(""),sI=()=>ln(nI);function qU(){}function HU(t,e,n,s){const r=n[s];if(r&&rI(r,t))return r;const i=e();return i.memo=t.slice(),n[s]=i}function rI(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(Wr(n[s],e[s]))return!1;return cr>0&&Nt&&Nt.push(t),!0}const iI="3.2.47",oI={createComponentInstance:My,setupComponent:Fy,renderComponentRoot:Ba,setCurrentRenderingInstance:ao,isVNode:ur,normalizeVNode:Lt},KU=oI,zU=null,WU=null,aI="http://www.w3.org/2000/svg",Ks=typeof document<"u"?document:null,pp=Ks&&Ks.createElement("template"),cI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ks.createElementNS(aI,t):Ks.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ks.createTextNode(t),createComment:t=>Ks.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ks.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{pp.innerHTML=s?`<svg>${t}</svg>`:t;const a=pp.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lI(t,e,n){const s=t.style,r=Be(n);if(n&&!r){if(e&&!Be(e))for(const i in e)n[i]==null&&Yl(s,i,"");for(const i in n)Yl(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const mp=/\s*!important$/;function Yl(t,e,n){if(W(n))n.forEach(s=>Yl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hI(t,e);mp.test(n)?t.setProperty(zt(s),n.replace(mp,""),"important"):t[s]=n}}const gp=["Webkit","Moz","ms"],cl={};function hI(t,e){const n=cl[e];if(n)return n;let s=$t(e);if(s!=="filter"&&s in t)return cl[e]=s;s=Wc(s);for(let r=0;r<gp.length;r++){const i=gp[r]+s;if(i in t)return cl[e]=i}return e}const yp="http://www.w3.org/1999/xlink";function dI(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yp,e.slice(6,e.length)):t.setAttributeNS(yp,e,n);else{const i=tE(e);n==null||i&&!Fg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fI(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Fg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Pn(t,e,n,s){t.addEventListener(e,n,s)}function pI(t,e,n,s){t.removeEventListener(e,n,s)}function mI(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=gI(e);if(s){const u=i[e]=_I(s,r);Pn(t,a,u,c)}else o&&(pI(t,a,o,c),i[e]=void 0)}}const vp=/(?:Once|Passive|Capture)$/;function gI(t){let e;if(vp.test(t)){e={};let s;for(;s=t.match(vp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zt(t.slice(2)),e]}let ul=0;const yI=Promise.resolve(),vI=()=>ul||(yI.then(()=>ul=0),ul=Date.now());function _I(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Zt(wI(s,n.value),e,5,[s])};return n.value=t,n.attached=vI(),n}function wI(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const _p=/^on[a-z]/,bI=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?uI(t,s,r):e==="style"?lI(t,n,s):$o(e)?zh(e)||mI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):TI(t,e,s,r))?fI(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dI(t,e,s,r))};function TI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&_p.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_p.test(e)&&Be(n)?!1:e in t}function EI(t,e){const n=Jt(t);class s extends md{constructor(i){super(n,i,e)}}return s.def=n,s}const GU=t=>EI(t,HI),II=typeof HTMLElement<"u"?HTMLElement:class{};class md extends II{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,jo(()=>{this._connected||(Rp(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const e=(s,r=!1)=>{const{props:i,styles:o}=s;let a;if(i&&!W(i))for(const c in i){const u=i[c];(u===Number||u&&u.type===Number)&&(c in this._props&&(this._props[c]=ec(this._props[c])),(a||(a=Object.create(null)))[$t(c)]=!0)}this._numberProps=a,r&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=W(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map($t))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(i){this._setProp(r,i)}})}_setAttr(e){let n=this.getAttribute(e);const s=$t(e);this._numberProps&&this._numberProps[s]&&(n=ec(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,r=!0){n!==this._props[e]&&(this._props[e]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(zt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(zt(e),n+""):n||this.removeAttribute(zt(e))))}_update(){Rp(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Me(this._def,Ke({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{s(i,o),zt(i)!==i&&s(zt(i),o)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof md){n.parent=r._instance,n.provides=r._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function ZU(t="$style"){{const e=Jn();if(!e)return xe;const n=e.type.__cssModules;if(!n)return xe;const s=n[t];return s||xe}}function QU(t){const e=Jn();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>Jl(i,r))},s=()=>{const r=t(e.proxy);Xl(e.subTree,r),n(r)};f0(s),ru(()=>{const r=new MutationObserver(s);r.observe(e.subTree.el.parentNode,{childList:!0}),od(()=>r.disconnect())})}function Xl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Xl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Jl(t.el,e);else if(t.type===Je)t.children.forEach(n=>Xl(n,e));else if(t.type===$r){let{el:n,anchor:s}=t;for(;n&&(Jl(n,e),n!==s);)n=n.nextSibling}}function Jl(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const ns="transition",Ri="animation",jy=(t,{slots:e})=>pd(_y,Hy(t),e);jy.displayName="Transition";const qy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},CI=jy.props=Ke({},_y.props,qy),$s=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},wp=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function Hy(t){const e={};for(const V in t)V in qy||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,y=SI(r),w=y&&y[0],I=y&&y[1],{onBeforeEnter:v,onEnter:m,onEnterCancelled:_,onLeave:b,onLeaveCancelled:k,onBeforeAppear:D=v,onAppear:N=m,onAppearCancelled:E=_}=e,$=(V,ce,q)=>{is(V,ce?l:a),is(V,ce?u:o),q&&q()},K=(V,ce)=>{V._isLeaving=!1,is(V,h),is(V,p),is(V,d),ce&&ce()},Y=V=>(ce,q)=>{const Ae=V?N:m,be=()=>$(ce,V,q);$s(Ae,[ce,be]),bp(()=>{is(ce,V?c:i),On(ce,V?l:a),wp(Ae)||Tp(ce,s,w,be)})};return Ke(e,{onBeforeEnter(V){$s(v,[V]),On(V,i),On(V,o)},onBeforeAppear(V){$s(D,[V]),On(V,c),On(V,u)},onEnter:Y(!1),onAppear:Y(!0),onLeave(V,ce){V._isLeaving=!0;const q=()=>K(V,ce);On(V,h),zy(),On(V,d),bp(()=>{V._isLeaving&&(is(V,h),On(V,p),wp(b)||Tp(V,s,I,q))}),$s(b,[V,q])},onEnterCancelled(V){$(V,!1),$s(_,[V])},onAppearCancelled(V){$(V,!0),$s(E,[V])},onLeaveCancelled(V){K(V),$s(k,[V])}})}function SI(t){if(t==null)return null;if(Oe(t))return[ll(t.enter),ll(t.leave)];{const e=ll(t);return[e,e]}}function ll(t){return ec(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function bp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let AI=0;function Tp(t,e,n,s){const r=t._endId=++AI,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Ky(t,e);if(!o)return s();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function Ky(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),r=s(`${ns}Delay`),i=s(`${ns}Duration`),o=Ep(r,i),a=s(`${Ri}Delay`),c=s(`${Ri}Duration`),u=Ep(a,c);let l=null,h=0,d=0;e===ns?o>0&&(l=ns,h=o,d=i.length):e===Ri?u>0&&(l=Ri,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?ns:Ri:null,d=l?l===ns?i.length:c.length:0);const p=l===ns&&/\b(transform|all)(,|$)/.test(s(`${ns}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:p}}function Ep(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ip(n)+Ip(t[s])))}function Ip(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function zy(){return document.body.offsetHeight}const Wy=new WeakMap,Gy=new WeakMap,Zy={name:"TransitionGroup",props:Ke({},CI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Jn(),s=vy();let r,i;return rd(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!DI(r[0].el,n.vnode.el,o))return;r.forEach(NI),r.forEach(xI);const a=r.filter(OI);zy(),a.forEach(c=>{const u=c.el,l=u.style;On(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,is(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=_e(t),a=Hy(o);let c=o.tag||Je;r=i,i=e.default?sd(e.default()):[];for(let u=0;u<i.length;u++){const l=i[u];l.key!=null&&Qr(l,uo(l,a,s,n))}if(r)for(let u=0;u<r.length;u++){const l=r[u];Qr(l,uo(l,a,s,n)),Wy.set(l,l.el.getBoundingClientRect())}return Me(c,null,i)}}},kI=t=>delete t.mode;Zy.props;const RI=Zy;function NI(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function xI(t){Gy.set(t,t.el.getBoundingClientRect())}function OI(t){const e=Wy.get(t),n=Gy.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function DI(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Ky(s);return r.removeChild(s),i}const Ss=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Mr(e,n):e};function PI(t){t.target.composing=!0}function Cp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const eh={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ss(r);const i=s||r.props&&r.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ja(a)),t._assign(a)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",PI),Pn(t,"compositionend",Cp),Pn(t,"change",Cp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ss(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ja(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Qy={deep:!0,created(t,e,n){t._assign=Ss(n),Pn(t,"change",()=>{const s=t._modelValue,r=Jr(t),i=t.checked,o=t._assign;if(W(s)){const a=Kc(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(wr(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Xy(t,i))})},mounted:Sp,beforeUpdate(t,e,n){t._assign=Ss(n),Sp(t,e,n)}};function Sp(t,{value:e,oldValue:n},s){t._modelValue=e,W(e)?t.checked=Kc(e,s.props.value)>-1:wr(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Es(e,Xy(t,!0)))}const Yy={created(t,{value:e},n){t.checked=Es(e,n.props.value),t._assign=Ss(n),Pn(t,"change",()=>{t._assign(Jr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Ss(s),e!==n&&(t.checked=Es(e,s.props.value))}},LI={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=wr(e);Pn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ja(Jr(o)):Jr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ss(s)},mounted(t,{value:e}){Ap(t,e)},beforeUpdate(t,e,n){t._assign=Ss(n)},updated(t,{value:e}){Ap(t,e)}};function Ap(t,e){const n=t.multiple;if(!(n&&!W(e)&&!wr(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Jr(i);if(n)W(e)?i.selected=Kc(e,o)>-1:i.selected=e.has(o);else if(Es(Jr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jr(t){return"_value"in t?t._value:t.value}function Xy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const MI={created(t,e,n){Aa(t,e,n,null,"created")},mounted(t,e,n){Aa(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Aa(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Aa(t,e,n,s,"updated")}};function Jy(t,e){switch(t){case"SELECT":return LI;case"TEXTAREA":return eh;default:switch(e){case"checkbox":return Qy;case"radio":return Yy;default:return eh}}}function Aa(t,e,n,s,r){const o=Jy(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}function UI(){eh.getSSRProps=({value:t})=>({value:t}),Yy.getSSRProps=({value:t},e)=>{if(e.props&&Es(e.props.value,t))return{checked:!0}},Qy.getSSRProps=({value:t},e)=>{if(W(t)){if(e.props&&Kc(t,e.props.value)>-1)return{checked:!0}}else if(wr(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},MI.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Jy(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const FI=["ctrl","shift","alt","meta"],BI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>FI.some(n=>t[`${n}Key`]&&!e.includes(n))},VI=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=BI[e[r]];if(i&&i(n,e))return}return t(n,...s)},$I={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},YU=(t,e)=>n=>{if(!("key"in n))return;const s=zt(n.key);if(e.some(r=>r===s||$I[r]===s))return t(n)},jI={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ni(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ni(t,!0),s.enter(t)):s.leave(t,()=>{Ni(t,!1)}):Ni(t,e))},beforeUnmount(t,{value:e}){Ni(t,e)}};function Ni(t,e){t.style.display=e?t._vod:"none"}function qI(){jI.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const ev=Ke({patchProp:bI},cI);let zi,kp=!1;function tv(){return zi||(zi=q0(ev))}function nv(){return zi=kp?zi:H0(ev),kp=!0,zi}const Rp=(...t)=>{tv().render(...t)},HI=(...t)=>{nv().hydrate(...t)},sv=(...t)=>{const e=tv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=rv(s);if(!r)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},XU=(...t)=>{const e=nv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=rv(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function rv(t){return Be(t)?document.querySelector(t):t}let Np=!1;const JU=()=>{Np||(Np=!0,UI(),qI())};var KI=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let iv;const cu=t=>iv=t,ov=Symbol();function th(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wi||(Wi={}));function zI(){const t=Hg(!0),e=t.run(()=>Ur({}));let n=[],s=[];const r=Zr({install(i){cu(r),r._a=i,i.provide(ov,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!KI?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const av=()=>{};function xp(t,e,n,s=av){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&zg()&&hE(r),r}function Ar(t,...e){t.slice().forEach(n=>{n(...e)})}function nh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];th(r)&&th(s)&&t.hasOwnProperty(n)&&!Ze(s)&&!gs(s)?t[n]=nh(r,s):t[n]=s}return t}const WI=Symbol();function GI(t){return!th(t)||!t.hasOwnProperty(WI)}const{assign:as}=Object;function ZI(t){return!!(Ze(t)&&t.effect)}function QI(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const l=KE(n.state.value[t]);return as(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Zr(Mt(()=>{cu(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=cv(t,u,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{as(d,h)})},c}function cv(t,e,n={},s,r,i){let o;const a=as({actions:{}},n),c={deep:!0};let u,l,h=Zr([]),d=Zr([]),p;const y=s.state.value[t];!i&&!y&&(s.state.value[t]={}),Ur({});let w;function I(N){let E;u=l=!1,typeof N=="function"?(N(s.state.value[t]),E={type:Wi.patchFunction,storeId:t,events:p}):(nh(s.state.value[t],N),E={type:Wi.patchObject,payload:N,storeId:t,events:p});const $=w=Symbol();jo().then(()=>{w===$&&(u=!0)}),l=!0,Ar(h,E,s.state.value[t])}const v=av;function m(){o.stop(),h=[],d=[],s._s.delete(t)}function _(N,E){return function(){cu(s);const $=Array.from(arguments),K=[],Y=[];function V(Ae){K.push(Ae)}function ce(Ae){Y.push(Ae)}Ar(d,{args:$,name:N,store:k,after:V,onError:ce});let q;try{q=E.apply(this&&this.$id===t?this:k,$)}catch(Ae){throw Ar(Y,Ae),Ae}return q instanceof Promise?q.then(Ae=>(Ar(K,Ae),Ae)).catch(Ae=>(Ar(Y,Ae),Promise.reject(Ae))):(Ar(K,q),q)}}const b={_p:s,$id:t,$onAction:xp.bind(null,d),$patch:I,$reset:v,$subscribe(N,E={}){const $=xp(h,N,E.detached,()=>K()),K=o.run(()=>Vr(()=>s.state.value[t],Y=>{(E.flush==="sync"?l:u)&&N({storeId:t,type:Wi.direct,events:p},Y)},as({},c,E)));return $},$dispose:m},k=vi(b);s._s.set(t,k);const D=s._e.run(()=>(o=Hg(),o.run(()=>e())));for(const N in D){const E=D[N];if(Ze(E)&&!ZI(E)||gs(E))i||(y&&GI(E)&&(Ze(E)?E.value=y[N]:nh(E,y[N])),s.state.value[t][N]=E);else if(typeof E=="function"){const $=_(N,E);D[N]=$,a.actions[N]=E}}return as(k,D),as(_e(k),D),Object.defineProperty(k,"$state",{get:()=>s.state.value[t],set:N=>{I(E=>{as(E,N)})}}),s._p.forEach(N=>{as(k,o.run(()=>N({store:k,app:s._a,pinia:s,options:a})))}),y&&i&&n.hydrate&&n.hydrate(k.$state,y),u=!0,l=!0,k}function YI(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const u=Jn();return a=a||u&&ln(ov,null),a&&cu(a),a=iv,a._s.has(s)||(i?cv(s,e,r,a):QI(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rr=typeof window<"u";function XI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function hl(t,e){const n={};for(const s in e){const r=e[s];n[s]=dn(r)?r.map(t):t(r)}return n}const Gi=()=>{},dn=Array.isArray,JI=/\/$/,eC=t=>t.replace(JI,"");function dl(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=rC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function tC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ei(e.matched[s],n.matched[r])&&uv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sC(t[n],e[n]))return!1;return!0}function sC(t,e){return dn(t)?Dp(t,e):dn(e)?Dp(e,t):t===e}function Dp(t,e){return dn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function rC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var lo;(function(t){t.pop="pop",t.push="push"})(lo||(lo={}));var Zi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zi||(Zi={}));function iC(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eC(t)}const oC=/^[^#]+#/;function aC(t,e){return t.replace(oC,"#")+e}function cC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const uu=()=>({left:window.pageXOffset,top:window.pageYOffset});function uC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=cC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pp(t,e){return(history.state?history.state.position-e:-1)+t}const sh=new Map;function lC(t,e){sh.set(t,e)}function hC(t){const e=sh.get(t);return sh.delete(t),e}let dC=()=>location.protocol+"//"+location.host;function lv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Op(c,"")}return Op(n,t)+s+r}function fC(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=lv(t,location),y=n.value,w=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}I=w?d.position-w.position:0}else s(p);r.forEach(v=>{v(n.value,y,{delta:I,type:lo.pop,direction:I?I>0?Zi.forward:Zi.back:Zi.unknown})})};function c(){o=n.value}function u(d){r.push(d);const p=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(ke({},d.state,{scroll:uu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Lp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?uu():null}}function pC(t){const{history:e,location:n}=window,s={value:lv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:dC()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=ke({},e.state,Lp(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ke({},r.value,e.state,{forward:c,scroll:uu()});i(l.current,l,!0);const h=ke({},Lp(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function mC(t){t=iC(t);const e=pC(t),n=fC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ke({location:"",base:t,go:s,createHref:aC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gC(t){return typeof t=="string"||t&&typeof t=="object"}function hv(t){return typeof t=="string"||typeof t=="symbol"}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dv=Symbol("");var Mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mp||(Mp={}));function ti(t,e){return ke(new Error,{type:t,[dv]:!0},e)}function xn(t,e){return t instanceof Error&&dv in t&&(e==null||!!(t.type&e))}const Up="[^/]+?",yC={sensitive:!1,strict:!1,start:!0,end:!0},vC=/[.+*?^${}()[\]/\\]/g;function _C(t,e){const n=ke({},yC,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(vC,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:w,optional:I,regexp:v}=d;i.push({name:y,repeatable:w,optional:I});const m=v||Up;if(m!==Up){p+=10;try{new RegExp(`(${m})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${y}" (${m}): `+b.message)}}let _=w?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(_=I&&u.length<2?`(?:/${_})`:"/"+_),I&&(_+="?"),r+=_,p+=20,I&&(p+=-8),w&&(p+=-20),m===".*"&&(p+=-50)}l.push(p)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:y,repeatable:w,optional:I}=p,v=y in u?u[y]:"";if(dn(v)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const m=dn(v)?v.join("/"):v;if(!m)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=m}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function wC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=wC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Fp(s))return 1;if(Fp(r))return-1}return r.length-s.length}function Fp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TC={type:0,value:""},EC=/[a-zA-Z0-9_]/;function IC(t){if(!t)return[[]];if(t==="/")return[[TC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:EC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function CC(t,e,n){const s=_C(IC(t.path),n),r=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function SC(t,e){const n=[],s=new Map;e=$p({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const p=!d,y=AC(l);y.aliasOf=d&&d.record;const w=$p(e,l),I=[y];if("alias"in l){const _=typeof l.alias=="string"?[l.alias]:l.alias;for(const b of _)I.push(ke({},y,{components:d?d.record.components:y.components,path:b,aliasOf:d?d.record:y}))}let v,m;for(const _ of I){const{path:b}=_;if(h&&b[0]!=="/"){const k=h.record.path,D=k[k.length-1]==="/"?"":"/";_.path=h.record.path+(b&&D+b)}if(v=CC(_,h,w),d?d.alias.push(v):(m=m||v,m!==v&&m.alias.push(v),p&&l.name&&!Vp(v)&&o(l.name)),y.children){const k=y.children;for(let D=0;D<k.length;D++)i(k[D],v,d&&d.children[D])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return m?()=>{o(m)}:Gi}function o(l){if(hv(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&bC(l,n[h])>=0&&(l.record.path!==n[h].record.path||!fv(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Vp(l)&&s.set(l.record.name,l)}function u(l,h){let d,p={},y,w;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw ti(1,{location:l});w=d.record.name,p=ke(Bp(h.params,d.keys.filter(m=>!m.optional).map(m=>m.name)),l.params&&Bp(l.params,d.keys.map(m=>m.name))),y=d.stringify(p)}else if("path"in l)y=l.path,d=n.find(m=>m.re.test(y)),d&&(p=d.parse(y),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(m=>m.re.test(h.path)),!d)throw ti(1,{location:l,currentLocation:h});w=d.record.name,p=ke({},h.params,l.params),y=d.stringify(p)}const I=[];let v=d;for(;v;)I.unshift(v.record),v=v.parent;return{name:w,path:y,params:p,matched:I,meta:RC(I)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Bp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function AC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Vp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RC(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function $p(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fv(t,e){return e.children.some(n=>n===t||fv(t,n))}const pv=/#/g,NC=/&/g,xC=/\//g,OC=/=/g,DC=/\?/g,mv=/\+/g,PC=/%5B/g,LC=/%5D/g,gv=/%5E/g,MC=/%60/g,yv=/%7B/g,UC=/%7C/g,vv=/%7D/g,FC=/%20/g;function gd(t){return encodeURI(""+t).replace(UC,"|").replace(PC,"[").replace(LC,"]")}function BC(t){return gd(t).replace(yv,"{").replace(vv,"}").replace(gv,"^")}function rh(t){return gd(t).replace(mv,"%2B").replace(FC,"+").replace(pv,"%23").replace(NC,"%26").replace(MC,"`").replace(yv,"{").replace(vv,"}").replace(gv,"^")}function VC(t){return rh(t).replace(OC,"%3D")}function $C(t){return gd(t).replace(pv,"%23").replace(DC,"%3F")}function jC(t){return t==null?"":$C(t).replace(xC,"%2F")}function ac(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(mv," "),o=i.indexOf("="),a=ac(o<0?i:i.slice(0,o)),c=o<0?null:ac(i.slice(o+1));if(a in e){let u=e[a];dn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function jp(t){let e="";for(let n in t){const s=t[n];if(n=VC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(s)?s.map(i=>i&&rh(i)):[s&&rh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=dn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const KC=Symbol(""),qp=Symbol(""),yd=Symbol(""),_v=Symbol(""),ih=Symbol("");function xi(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cs(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ti(4,{from:n,to:e})):h instanceof Error?a(h):gC(h)?a(ti(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function fl(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(zC(a)){const u=(a.__vccOpts||a)[e];u&&r.push(cs(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=XI(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&cs(d,n,s,i,o)()}))}}return r}function zC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hp(t){const e=ln(yd),n=ln(_v),s=Mt(()=>e.resolve(ys(t.to))),r=Mt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(ei.bind(null,l));if(d>-1)return d;const p=Kp(c[u-2]);return u>1&&Kp(l)===p&&h[h.length-1].path!==p?h.findIndex(ei.bind(null,c[u-2])):d}),i=Mt(()=>r.value>-1&&QC(n.params,s.value.params)),o=Mt(()=>r.value>-1&&r.value===n.matched.length-1&&uv(n.params,s.value.params));function a(c={}){return ZC(c)?e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(Gi):Promise.resolve()}return{route:s,href:Mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const WC=Jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hp,setup(t,{slots:e}){const n=vi(Hp(t)),{options:s}=ln(yd),r=Mt(()=>({[zp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[zp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),GC=WC;function ZC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QC(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!dn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Kp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zp=(t,e,n)=>t??e??n,YC=Jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ln(ih),r=Mt(()=>t.route||s.value),i=ln(qp,0),o=Mt(()=>{let u=ys(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Mt(()=>r.value.matched[o.value]);Va(qp,Mt(()=>o.value+1)),Va(KC,a),Va(ih,r);const c=Ur();return Vr(()=>[c.value,a.value,t.name],([u,l,h],[d,p,y])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!ei(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Wp(n.default,{Component:d,route:u});const p=h.props[l],y=p?p===!0?u.params:typeof p=="function"?p(u):p:null,I=pd(d,ke({},y,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Wp(n.default,{Component:I,route:u})||I}}});function Wp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wv=YC;function XC(t){const e=SC(t.routes,t),n=t.parseQuery||qC,s=t.stringifyQuery||jp,r=t.history,i=xi(),o=xi(),a=xi(),c=$E(ss);let u=ss;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=hl.bind(null,A=>""+A),h=hl.bind(null,jC),d=hl.bind(null,ac);function p(A,z){let B,ee;return hv(A)?(B=e.getRecordMatcher(A),ee=z):ee=A,e.addRoute(ee,B)}function y(A){const z=e.getRecordMatcher(A);z&&e.removeRoute(z)}function w(){return e.getRoutes().map(A=>A.record)}function I(A){return!!e.getRecordMatcher(A)}function v(A,z){if(z=ke({},z||c.value),typeof A=="string"){const f=dl(n,A,z.path),g=e.resolve({path:f.path},z),T=r.createHref(f.fullPath);return ke(f,g,{params:d(g.params),hash:ac(f.hash),redirectedFrom:void 0,href:T})}let B;if("path"in A)B=ke({},A,{path:dl(n,A.path,z.path).path});else{const f=ke({},A.params);for(const g in f)f[g]==null&&delete f[g];B=ke({},A,{params:h(A.params)}),z.params=h(z.params)}const ee=e.resolve(B,z),Te=A.hash||"";ee.params=l(d(ee.params));const $e=tC(s,ke({},A,{hash:BC(Te),path:ee.path})),me=r.createHref($e);return ke({fullPath:$e,hash:Te,query:s===jp?HC(A.query):A.query||{}},ee,{redirectedFrom:void 0,href:me})}function m(A){return typeof A=="string"?dl(n,A,c.value.path):ke({},A)}function _(A,z){if(u!==A)return ti(8,{from:z,to:A})}function b(A){return N(A)}function k(A){return b(ke(m(A),{replace:!0}))}function D(A){const z=A.matched[A.matched.length-1];if(z&&z.redirect){const{redirect:B}=z;let ee=typeof B=="function"?B(A):B;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=m(ee):{path:ee},ee.params={}),ke({query:A.query,hash:A.hash,params:"path"in ee?{}:A.params},ee)}}function N(A,z){const B=u=v(A),ee=c.value,Te=A.state,$e=A.force,me=A.replace===!0,f=D(B);if(f)return N(ke(m(f),{state:typeof f=="object"?ke({},Te,f.state):Te,force:$e,replace:me}),z||B);const g=B;g.redirectedFrom=z;let T;return!$e&&nC(s,ee,B)&&(T=ti(16,{to:g,from:ee}),Bs(ee,ee,!0,!1)),(T?Promise.resolve(T):$(g,ee)).catch(S=>xn(S)?xn(S,2)?S:tn(S):De(S,g,ee)).then(S=>{if(S){if(xn(S,2))return N(ke({replace:me},m(S.to),{state:typeof S.to=="object"?ke({},Te,S.to.state):Te,force:$e}),z||g)}else S=Y(g,ee,!0,me,Te);return K(g,ee,S),S})}function E(A,z){const B=_(A,z);return B?Promise.reject(B):Promise.resolve()}function $(A,z){let B;const[ee,Te,$e]=JC(A,z);B=fl(ee.reverse(),"beforeRouteLeave",A,z);for(const f of ee)f.leaveGuards.forEach(g=>{B.push(cs(g,A,z))});const me=E.bind(null,A,z);return B.push(me),kr(B).then(()=>{B=[];for(const f of i.list())B.push(cs(f,A,z));return B.push(me),kr(B)}).then(()=>{B=fl(Te,"beforeRouteUpdate",A,z);for(const f of Te)f.updateGuards.forEach(g=>{B.push(cs(g,A,z))});return B.push(me),kr(B)}).then(()=>{B=[];for(const f of A.matched)if(f.beforeEnter&&!z.matched.includes(f))if(dn(f.beforeEnter))for(const g of f.beforeEnter)B.push(cs(g,A,z));else B.push(cs(f.beforeEnter,A,z));return B.push(me),kr(B)}).then(()=>(A.matched.forEach(f=>f.enterCallbacks={}),B=fl($e,"beforeRouteEnter",A,z),B.push(me),kr(B))).then(()=>{B=[];for(const f of o.list())B.push(cs(f,A,z));return B.push(me),kr(B)}).catch(f=>xn(f,8)?f:Promise.reject(f))}function K(A,z,B){for(const ee of a.list())ee(A,z,B)}function Y(A,z,B,ee,Te){const $e=_(A,z);if($e)return $e;const me=z===ss,f=Rr?history.state:{};B&&(ee||me?r.replace(A.fullPath,ke({scroll:me&&f&&f.scroll},Te)):r.push(A.fullPath,Te)),c.value=A,Bs(A,z,B,me),tn()}let V;function ce(){V||(V=r.listen((A,z,B)=>{if(!ga.listening)return;const ee=v(A),Te=D(ee);if(Te){N(ke(Te,{replace:!0}),ee).catch(Gi);return}u=ee;const $e=c.value;Rr&&lC(Pp($e.fullPath,B.delta),uu()),$(ee,$e).catch(me=>xn(me,12)?me:xn(me,2)?(N(me.to,ee).then(f=>{xn(f,20)&&!B.delta&&B.type===lo.pop&&r.go(-1,!1)}).catch(Gi),Promise.reject()):(B.delta&&r.go(-B.delta,!1),De(me,ee,$e))).then(me=>{me=me||Y(ee,$e,!1),me&&(B.delta&&!xn(me,8)?r.go(-B.delta,!1):B.type===lo.pop&&xn(me,20)&&r.go(-1,!1)),K(ee,$e,me)}).catch(Gi)}))}let q=xi(),Ae=xi(),be;function De(A,z,B){tn(A);const ee=Ae.list();return ee.length?ee.forEach(Te=>Te(A,z,B)):console.error(A),Promise.reject(A)}function Re(){return be&&c.value!==ss?Promise.resolve():new Promise((A,z)=>{q.add([A,z])})}function tn(A){return be||(be=!A,ce(),q.list().forEach(([z,B])=>A?B(A):z()),q.reset()),A}function Bs(A,z,B,ee){const{scrollBehavior:Te}=t;if(!Rr||!Te)return Promise.resolve();const $e=!B&&hC(Pp(A.fullPath,0))||(ee||!B)&&history.state&&history.state.scroll||null;return jo().then(()=>Te(A,z,$e)).then(me=>me&&uC(me)).catch(me=>De(me,A,z))}const nn=A=>r.go(A);let At;const Cr=new Set,ga={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:I,getRoutes:w,resolve:v,options:t,push:b,replace:k,go:nn,back:()=>nn(-1),forward:()=>nn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ae.add,isReady:Re,install(A){const z=this;A.component("RouterLink",GC),A.component("RouterView",wv),A.config.globalProperties.$router=z,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(c)}),Rr&&!At&&c.value===ss&&(At=!0,b(r.location).catch(Te=>{}));const B={};for(const Te in ss)B[Te]=Mt(()=>c.value[Te]);A.provide(yd,z),A.provide(_v,vi(B)),A.provide(ih,c);const ee=A.unmount;Cr.add(A),A.unmount=function(){Cr.delete(A),Cr.size<1&&(u=ss,V&&V(),V=null,c.value=ss,At=!1,be=!1),ee()}}};return ga}function kr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function JC(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ei(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ei(u,c))||r.push(c))}return[n,s,r]}const eS=t=>(n0("data-v-029362bf"),t=t(),s0(),t),tS=eS(()=>Os("div",{id:"modal"},null,-1)),nS=Jt({__name:"App",setup(t){return(e,n)=>(qe(),Wt(Je,null,[Me(ys(wv)),tS],64))}});const sS=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},rS=sS(nS,[["__scopeId","data-v-029362bf"]]),iS="modulepreload",oS=function(t){return"/"+t},Gp={},ka=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=oS(i),i in Gp)return;Gp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":iS,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},aS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},cS=function(t){const e=bv(t);return Tv.encodeByteArray(e,!0)},cc=function(t){return cS(t).replace(/\./g,"")},Ev=function(t){try{return Tv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=()=>uS().__FIREBASE_DEFAULTS__,hS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ev(t[1]);return e&&JSON.parse(e)},lu=()=>{try{return lS()||hS()||dS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iv=t=>{var e,n;return(n=(e=lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cv=t=>{const e=Iv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fS=()=>{var t;return(t=lu())===null||t===void 0?void 0:t.config},Sv=t=>{var e;return(e=lu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cc(JSON.stringify(n)),cc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function gS(){var t;const e=(t=lu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vS(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rv(){try{return typeof indexedDB=="object"}catch{return!1}}function Nv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function _S(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="FirebaseError";class en extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wS,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?bS(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new en(r,a,s)}}function bS(t,e){return t.replace(TS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const TS=/\{\$([^}]+)}/g;function ES(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Zp(i)&&Zp(o)){if(!ho(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function IS(t,e){const n=new CS(t,e);return n.subscribe.bind(n)}class CS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");SS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pl),r.error===void 0&&(r.error=pl),r.complete===void 0&&(r.complete=pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=1e3,kS=2,RS=4*60*60*1e3,NS=.5;function Qp(t,e=AS,n=kS){const s=e*Math.pow(n,t),r=Math.round(NS*s*(Math.random()-.5)*2);return Math.min(RS,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DS(e))try{this.getOrInitializeService({instanceIdentifier:qs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qs){return this.instances.has(e)}getOptions(e=qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:OS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qs){return this.component?this.component.multipleInstances?e:qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OS(t){return t===qs?void 0:t}function DS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const LS={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},MS=Ie.INFO,US={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},FS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=US[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hu{constructor(e){this.name=e,this._logLevel=MS,this._logHandler=FS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const BS=(t,e)=>e.some(n=>t instanceof n);let Yp,Xp;function VS(){return Yp||(Yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $S(){return Xp||(Xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xv=new WeakMap,oh=new WeakMap,Ov=new WeakMap,ml=new WeakMap,vd=new WeakMap;function jS(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ws(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xv.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function qS(t){if(oh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oh.set(t,e)}let ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ov.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HS(t){ah=t(ah)}function KS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gl(this),e,...n);return Ov.set(s,e.sort?e.sort():[e]),ws(s)}:$S().includes(t)?function(...e){return t.apply(gl(this),e),ws(xv.get(this))}:function(...e){return ws(t.apply(gl(this),e))}}function zS(t){return typeof t=="function"?KS(t):(t instanceof IDBTransaction&&qS(t),BS(t,VS())?new Proxy(t,ah):t)}function ws(t){if(t instanceof IDBRequest)return jS(t);if(ml.has(t))return ml.get(t);const e=zS(t);return e!==t&&(ml.set(t,e),vd.set(e,t)),e}const gl=t=>vd.get(t);function Dv(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const WS=["get","getKey","getAll","getAllKeys","count"],GS=["put","add","delete","clear"],yl=new Map;function Jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yl.get(e))return yl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=GS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||WS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return yl.set(e,i),i}HS(t=>({...t,get:(e,n,s)=>Jp(e,n)||t.get(e,n,s),has:(e,n)=>!!Jp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function QS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",em="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new hu("@firebase/app"),YS="@firebase/app-compat",XS="@firebase/analytics-compat",JS="@firebase/analytics",eA="@firebase/app-check-compat",tA="@firebase/app-check",nA="@firebase/auth",sA="@firebase/auth-compat",rA="@firebase/database",iA="@firebase/database-compat",oA="@firebase/functions",aA="@firebase/functions-compat",cA="@firebase/installations",uA="@firebase/installations-compat",lA="@firebase/messaging",hA="@firebase/messaging-compat",dA="@firebase/performance",fA="@firebase/performance-compat",pA="@firebase/remote-config",mA="@firebase/remote-config-compat",gA="@firebase/storage",yA="@firebase/storage-compat",vA="@firebase/firestore",_A="@firebase/firestore-compat",wA="firebase",bA="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="[DEFAULT]",TA={[ch]:"fire-core",[YS]:"fire-core-compat",[JS]:"fire-analytics",[XS]:"fire-analytics-compat",[tA]:"fire-app-check",[eA]:"fire-app-check-compat",[nA]:"fire-auth",[sA]:"fire-auth-compat",[rA]:"fire-rtdb",[iA]:"fire-rtdb-compat",[oA]:"fire-fn",[aA]:"fire-fn-compat",[cA]:"fire-iid",[uA]:"fire-iid-compat",[lA]:"fire-fcm",[hA]:"fire-fcm-compat",[dA]:"fire-perf",[fA]:"fire-perf-compat",[pA]:"fire-rc",[mA]:"fire-rc-compat",[gA]:"fire-gcs",[yA]:"fire-gcs-compat",[vA]:"fire-fst",[_A]:"fire-fst-compat","fire-js":"fire-js",[wA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map,lh=new Map;function EA(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(lh.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;lh.set(e,t);for(const n of uc.values())EA(n,t);return!0}function Ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bs=new br("app","Firebase",IA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=bA;function Pv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:uh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw bs.create("bad-app-name",{appName:String(r)});if(n||(n=fS()),!n)throw bs.create("no-options");const i=uc.get(r);if(i){if(ho(n,i.options)&&ho(s,i.config))return i;throw bs.create("duplicate-app",{appName:r})}const o=new PS(r);for(const c of lh.values())o.addComponent(c);const a=new CA(n,s,o);return uc.set(r,a),a}function du(t=uh){const e=uc.get(t);if(!e&&t===uh)return Pv();if(!e)throw bs.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let r=(s=TA[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}fn(new Xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="firebase-heartbeat-database",AA=1,fo="firebase-heartbeat-store";let vl=null;function Lv(){return vl||(vl=Dv(SA,AA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fo)}}}).catch(t=>{throw bs.create("idb-open",{originalErrorMessage:t.message})})),vl}async function kA(t){try{return(await Lv()).transaction(fo).objectStore(fo).get(Mv(t))}catch(e){if(e instanceof en)lr.warn(e.message);else{const n=bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function tm(t,e){try{const s=(await Lv()).transaction(fo,"readwrite");return await s.objectStore(fo).put(e,Mv(t)),s.done}catch(n){if(n instanceof en)lr.warn(n.message);else{const s=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(s.message)}}}function Mv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1024,NA=30*24*60*60*1e3;class xA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=NA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nm(),{heartbeatsToSend:n,unsentEntries:s}=OA(this._heartbeatsCache.heartbeats),r=cc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nm(){return new Date().toISOString().substring(0,10)}function OA(t,e=RA){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),sm(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rv()?Nv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sm(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){fn(new Xt("platform-logger",e=>new ZS(e),"PRIVATE")),fn(new Xt("heartbeat",e=>new xA(e),"PRIVATE")),xt(ch,em,t),xt(ch,em,"esm2017"),xt("fire-js","")}PA("");var LA="firebase",MA="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(LA,MA,"app");function _d(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Uv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UA=Uv,Fv=new br("auth","Firebase",Uv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new hu("@firebase/auth");function ja(t,...e){rm.logLevel<=Ie.ERROR&&rm.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw wd(t,...e)}function En(t,...e){return wd(t,...e)}function Bv(t,e,n){const s=Object.assign(Object.assign({},UA()),{[e]:n});return new br("auth","Firebase",s).create(e,{appName:t.name})}function FA(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&An(t,"argument-error"),Bv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fv.create(t,...e)}function ie(t,e,...n){if(!t)throw wd(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function Kn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Map;function Mn(t){Kn(t instanceof Function,"Expected a class definition");let e=im.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,im.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e){const n=Ds(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ho(i,e??{}))return r;An(r,"already-initialized")}return n.initialize({options:e})}function VA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $A(){return om()==="http:"||om()==="https:"}function om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($A()||kv()||"connection"in navigator)?navigator.onLine:!0}function qA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=mS()||yS()}get(){return jA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=new Wo(3e4,6e4);function zA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fu(t,e,n,s,r={}){return $v(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=zo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Vv.fetch()(jv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function $v(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},HA),e);try{const r=new GA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ra(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bv(t,l,u);An(t,l)}}catch(r){if(r instanceof en)throw r;An(t,"network-request-failed")}}async function WA(t,e,n,s,r={}){const i=await fu(t,e,n,s,r);return"mfaPendingCredential"in i&&An(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jv(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?bd(t.config,r):`${t.config.apiScheme}://${r}`}class GA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(En(this.auth,"network-request-failed")),KA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ra(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=En(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e){return fu(t,"POST","/v1/accounts:delete",e)}async function QA(t,e){return fu(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YA(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=Td(s);ie(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Qi(_l(r.auth_time)),issuedAtTime:Qi(_l(r.iat)),expirationTime:Qi(_l(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _l(t){return Number(t)*1e3}function Td(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ev(n);return r?JSON.parse(r):(ja("Failed to decode base64 JWT payload"),null)}catch(r){return ja("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function XA(t){const e=Td(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof en&&JA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function JA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t){var e;const n=t.auth,s=await t.getIdToken(),r=await po(t,QA(n,{idToken:s}));ie(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sk(i.providerUserInfo):[],a=nk(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qv(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function tk(t){const e=Ve(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nk(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function sk(t){return t.map(e=>{var{providerId:n}=e,s=_d(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e){const n=await $v(t,{},async()=>{const s=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=jv(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await rk(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new mo;return s&&(ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ie(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=_d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ek(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YA(this,e)}reload(){return tk(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await po(this,ZA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:_,emailVerified:b,isAnonymous:k,providerData:D,stsTokenManager:N}=n;ie(_&&N,e,"internal-error");const E=mo.fromJSON(this.name,N);ie(typeof _=="string",e,"internal-error"),rs(h,e.name),rs(d,e.name),ie(typeof b=="boolean",e,"internal-error"),ie(typeof k=="boolean",e,"internal-error"),rs(p,e.name),rs(y,e.name),rs(w,e.name),rs(I,e.name),rs(v,e.name),rs(m,e.name);const $=new nr({uid:_,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:w,stsTokenManager:E,createdAt:v,lastLoginAt:m});return D&&Array.isArray(D)&&($.providerData=D.map(K=>Object.assign({},K))),I&&($._redirectEventId=I),$}static async _fromIdTokenResponse(e,n,s=!1){const r=new mo;r.updateFromServerResponse(n);const i=new nr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await lc(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hv.type="NONE";const am=Hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=qa(this.userKey,r.apiKey,i),this.fullPersistenceKey=qa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new jr(Mn(am),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Mn(am);const o=qa(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=nr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new jr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zv(e))return"Blackberry";if(Qv(e))return"Webos";if(Ed(e))return"Safari";if((e.includes("chrome/")||zv(e))&&!e.includes("edge/"))return"Chrome";if(Gv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Kv(t=vt()){return/firefox\//i.test(t)}function Ed(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zv(t=vt()){return/crios\//i.test(t)}function Wv(t=vt()){return/iemobile/i.test(t)}function Gv(t=vt()){return/android/i.test(t)}function Zv(t=vt()){return/blackberry/i.test(t)}function Qv(t=vt()){return/webos/i.test(t)}function pu(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ik(t=vt()){var e;return pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ok(){return vS()&&document.documentMode===10}function Yv(t=vt()){return pu(t)||Gv(t)||Qv(t)||Zv(t)||/windows phone/i.test(t)||Wv(t)}function ak(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e=[]){let n;switch(t){case"Browser":n=cm(vt());break;case"Worker":n=`${cm(vt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new um(this),this.idTokenSubscription=new um(this),this.beforeStateQueue=new ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ie(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function mu(t){return Ve(t)}class um{constructor(e){this.auth=e,this.observer=null,this.addObserver=IS(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lk(t,e,n){const s=mu(t);ie(s._canInitEmulator,s,"emulator-config-failed"),ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Jv(e),{host:o,port:a}=hk(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||dk()}function Jv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hk(t){const e=Jv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:lm(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:lm(o)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e){return WA(t,"POST","/v1/accounts:signInWithIdp",zA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="http://localhost";class hr extends e_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=_d(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new hr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:fk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends Id{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Go{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ls.credential(n,s)}catch{return null}}}ls.GOOGLE_SIGN_IN_METHOD="google.com";ls.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Go{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Go{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await nr._fromIdTokenResponse(e,s,r),o=hm(s);return new ni({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=hm(s);return new ni({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends en{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new hc(e,n,s,r)}}function t_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,i,e,s):i})}async function pk(t,e,n=!1){const s=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ni._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await po(t,t_(s,r,e,t),n);ie(i.idToken,s,"internal-error");const o=Td(i.idToken);ie(o,s,"internal-error");const{sub:a}=o;return ie(t.uid===a,s,"user-mismatch"),ni._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&An(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e,n=!1){const s="signIn",r=await t_(t,s,e),i=await ni._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function yk(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function vk(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function _k(t,e,n,s){return Ve(t).onAuthStateChanged(e,n,s)}function eF(t){return Ve(t).signOut()}const dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(){const t=vt();return Ed(t)||pu(t)}const bk=1e3,Tk=10;class s_ extends n_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wk()&&ak(),this.fallbackToPolling=Yv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ok()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Tk):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const Ek=s_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r_.type="SESSION";const i_=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new gu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Ik(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Cd("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function Sk(t){In().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function Ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rk(){return o_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="firebaseLocalStorageDb",Nk=1,fc="firebaseLocalStorage",c_="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yu(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function xk(){const t=indexedDB.deleteDatabase(a_);return new Zo(t).toPromise()}function dh(){const t=indexedDB.open(a_,Nk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fc,{keyPath:c_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fc)?e(s):(s.close(),await xk(),e(await dh()))})})}async function dm(t,e,n){const s=yu(t,!0).put({[c_]:e,value:n});return new Zo(s).toPromise()}async function Ok(t,e){const n=yu(t,!1).get(e),s=await new Zo(n).toPromise();return s===void 0?null:s.value}function fm(t,e){const n=yu(t,!0).delete(e);return new Zo(n).toPromise()}const Dk=800,Pk=3;class u_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Pk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gu._getInstance(Rk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ak(),!this.activeServiceWorker)return;this.sender=new Ck(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dh();return await dm(e,dc,"1"),await fm(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ok(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=yu(r,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u_.type="LOCAL";const Lk=u_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Uk(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=En("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Mk().appendChild(s)})}function Fk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e){return e?Mn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends e_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bk(t){return gk(t.auth,new Sd(t),t.bypassAuthState)}function Vk(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),mk(n,new Sd(t),t.bypassAuthState)}async function $k(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),pk(n,new Sd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bk;case"linkViaPopup":case"linkViaRedirect":return $k;case"reauthViaPopup":case"reauthViaRedirect":return Vk;default:An(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new Wo(2e3,1e4);async function tF(t,e,n){const s=mu(t);FA(t,e,Id);const r=l_(s,n);return new Ws(s,"signInViaPopup",e,r).executeNotNull()}class Ws extends h_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jk.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="pendingRedirect",Ha=new Map;class Hk extends h_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ha.get(this.auth._key());if(!e){try{const s=await Kk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ha.set(this.auth._key(),e)}return this.bypassAuthState||Ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kk(t,e){const n=Gk(e),s=Wk(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function zk(t,e){Ha.set(t._key(),e)}function Wk(t){return Mn(t._redirectPersistence)}function Gk(t){return qa(qk,t.config.apiKey,t.name)}async function Zk(t,e,n=!1){const s=mu(t),r=l_(s,e),o=await new Hk(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=10*60*1e3;class Yk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!d_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(En(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qk&&this.cachedEventUids.clear(),this.cachedEventUids.has(pm(e))}saveEventToCache(e){this.cachedEventUids.add(pm(e)),this.lastProcessedEventTime=Date.now()}}function pm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e={}){return fu(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tR=/^https?/;async function nR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jk(t);for(const n of e)try{if(sR(n))return}catch{}An(t,"unauthorized-domain")}function sR(t){const e=hh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tR.test(n))return!1;if(eR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new Wo(3e4,6e4);function mm(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iR(t){return new Promise((e,n)=>{var s,r,i;function o(){mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mm(),n(En(t,"network-request-failed"))},timeout:rR.get()})}if(!((r=(s=In().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=In().gapi)===null||i===void 0)&&i.load)o();else{const a=Fk("iframefcb");return In()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},Uk(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function oR(t){return Ka=Ka||iR(t),Ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new Wo(5e3,15e3),cR="__/auth/iframe",uR="emulator/auth/iframe",lR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dR(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bd(e,uR):`https://${t.config.authDomain}/${cR}`,s={apiKey:e.apiKey,appName:t.name,v:bi},r=hR.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${zo(s).slice(1)}`}async function fR(t){const e=await oR(t),n=In().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:dR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=In().setTimeout(()=>{i(o)},aR.get());function c(){In().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mR=500,gR=600,yR="_blank",vR="http://localhost";class gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _R(t,e,n,s=mR,r=gR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pR),{width:s.toString(),height:r.toString(),top:i,left:o}),u=vt().toLowerCase();n&&(a=zv(u)?yR:n),Kv(u)&&(e=e||vR,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(ik(u)&&a!=="_self")return wR(e||"",a),new gm(null);const h=window.open(e||"",a,l);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new gm(h)}function wR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="__/auth/handler",TR="emulator/auth/handler";function ym(t,e,n,s,r,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bi,eventId:r};if(e instanceof Id){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ES(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Go){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ER(t)}?${zo(a).slice(1)}`}function ER({config:t}){return t.emulator?bd(t,TR):`https://${t.authDomain}/${bR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="webStorageSupport";class IR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i_,this._completeRedirectFn=Zk,this._overrideRedirectResult=zk}async _openPopup(e,n,s,r){var i;Kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ym(e,n,s,hh(),r);return _R(e,o,Cd())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Sk(ym(e,n,s,hh(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Kn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await fR(e),s=new Yk(e);return n.register("authEvent",r=>(ie(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wl,{type:wl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wl];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yv()||Ed()||pu()}}const CR=IR;var vm="@firebase/auth",_m="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kR(t){fn(new Xt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{ie(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ie(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xv(t)},l=new uk(a,c,u);return VA(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fn(new Xt("auth-internal",e=>{const n=mu(e.getProvider("auth").getImmediate());return(s=>new SR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(vm,_m,AR(t)),xt(vm,_m,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=5*60,NR=Sv("authIdTokenMaxAge")||RR;let wm=null;const xR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>NR)return;const r=n==null?void 0:n.token;wm!==r&&(wm=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function OR(t=du()){const e=Ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BA(t,{popupRedirectResolver:CR,persistence:[Lk,Ek,i_]}),s=Sv("authTokenSyncURL");if(s){const i=xR(s);vk(n,i,()=>i(n.currentUser)),yk(n,o=>i(o))}const r=Iv("auth");return r&&lk(n,`http://${r}`),n}kR("Browser");const f_="@firebase/installations",Ad="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=1e4,m_=`w:${Ad}`,g_="FIS_v2",DR="https://firebaseinstallations.googleapis.com/v1",PR=60*60*1e3,LR="installations",MR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},dr=new br(LR,MR,UR);function y_(t){return t instanceof en&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_({projectId:t}){return`${DR}/projects/${t}/installations`}function __(t){return{token:t.token,requestStatus:2,expiresIn:BR(t.expiresIn),creationTime:Date.now()}}async function w_(t,e){const s=(await e.json()).error;return dr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function b_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function FR(t,{refreshToken:e}){const n=b_(t);return n.append("Authorization",VR(e)),n}async function T_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function BR(t){return Number(t.replace("s","000"))}function VR(t){return`${g_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=v_(t),r=b_(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:g_,appId:t.appId,sdkVersion:m_},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await T_(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:__(u.authToken)}}else throw await w_("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=/^[cdef][\w-]{21}$/,fh="";function HR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=KR(t);return qR.test(n)?n:fh}catch{return fh}}function KR(t){return jR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new Map;function C_(t,e){const n=vu(t);S_(n,e),zR(n,e)}function S_(t,e){const n=I_.get(t);if(n)for(const s of n)s(e)}function zR(t,e){const n=WR();n&&n.postMessage({key:t,fid:e}),GR()}let Gs=null;function WR(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=t=>{S_(t.data.key,t.data.fid)}),Gs}function GR(){I_.size===0&&Gs&&(Gs.close(),Gs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="firebase-installations-database",QR=1,fr="firebase-installations-store";let bl=null;function kd(){return bl||(bl=Dv(ZR,QR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fr)}}})),bl}async function pc(t,e){const n=vu(t),r=(await kd()).transaction(fr,"readwrite"),i=r.objectStore(fr),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&C_(t,e.fid),e}async function A_(t){const e=vu(t),s=(await kd()).transaction(fr,"readwrite");await s.objectStore(fr).delete(e),await s.done}async function _u(t,e){const n=vu(t),r=(await kd()).transaction(fr,"readwrite"),i=r.objectStore(fr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&C_(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rd(t){let e;const n=await _u(t.appConfig,s=>{const r=YR(s),i=XR(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===fh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function YR(t){const e=t||{fid:HR(),registrationStatus:0};return k_(e)}function XR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(dr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=JR(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eN(t)}:{installationEntry:e}}async function JR(t,e){try{const n=await $R(t,e);return pc(t.appConfig,n)}catch(n){throw y_(n)&&n.customData.serverCode===409?await A_(t.appConfig):await pc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eN(t){let e=await bm(t.appConfig);for(;e.registrationStatus===1;)await E_(100),e=await bm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Rd(t);return s||n}return e}function bm(t){return _u(t,e=>{if(!e)throw dr.create("installation-not-found");return k_(e)})}function k_(t){return tN(t)?{fid:t.fid,registrationStatus:0}:t}function tN(t){return t.registrationStatus===1&&t.registrationTime+p_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN({appConfig:t,heartbeatServiceProvider:e},n){const s=sN(t,n),r=FR(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:m_,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await T_(()=>fetch(s,a));if(c.ok){const u=await c.json();return __(u)}else throw await w_("Generate Auth Token",c)}function sN(t,{fid:e}){return`${v_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(t,e=!1){let n;const s=await _u(t.appConfig,i=>{if(!R_(i))throw dr.create("not-registered");const o=i.authToken;if(!e&&oN(o))return i;if(o.requestStatus===1)return n=rN(t,e),i;{if(!navigator.onLine)throw dr.create("app-offline");const a=cN(i);return n=iN(t,a),a}});return n?await n:s.authToken}async function rN(t,e){let n=await Tm(t.appConfig);for(;n.authToken.requestStatus===1;)await E_(100),n=await Tm(t.appConfig);const s=n.authToken;return s.requestStatus===0?Nd(t,e):s}function Tm(t){return _u(t,e=>{if(!R_(e))throw dr.create("not-registered");const n=e.authToken;return uN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function iN(t,e){try{const n=await nN(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await pc(t.appConfig,s),n}catch(n){if(y_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await A_(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pc(t.appConfig,s)}throw n}}function R_(t){return t!==void 0&&t.registrationStatus===2}function oN(t){return t.requestStatus===2&&!aN(t)}function aN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PR}function cN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uN(t){return t.requestStatus===1&&t.requestTime+p_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t){const e=t,{installationEntry:n,registrationPromise:s}=await Rd(e);return s?s.catch(console.error):Nd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e=!1){const n=t;return await dN(n),(await Nd(n,e)).token}async function dN(t){const{registrationPromise:e}=await Rd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){if(!t||!t.options)throw Tl("App Configuration");if(!t.name)throw Tl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tl(t){return dr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="installations",pN="installations-internal",mN=t=>{const e=t.getProvider("app").getImmediate(),n=fN(e),s=Ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},gN=t=>{const e=t.getProvider("app").getImmediate(),n=Ds(e,N_).getImmediate();return{getId:()=>lN(n),getToken:r=>hN(n,r)}};function yN(){fn(new Xt(N_,mN,"PUBLIC")),fn(new Xt(pN,gN,"PRIVATE"))}yN();xt(f_,Ad);xt(f_,Ad,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",vN="firebase_id",_N="origin",wN=60*1e3,bN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",x_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new hu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function TN(t,e){const n=document.createElement("script");n.src=`${x_}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function EN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function IN(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await O_(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){jt.error(a)}t("config",r,i)}async function CN(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await O_(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){jt.error(i)}}function SN(t,e,n,s){async function r(i,o,a){try{i==="event"?await CN(t,e,n,o,a):i==="config"?await IN(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){jt.error(c)}}return r}function AN(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=SN(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function kN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(x_)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Qt=new br("analytics","Analytics",RN);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=30,xN=1e3;class ON{constructor(e={},n=xN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const D_=new ON;function DN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PN(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:DN(s)},i=bN.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function LN(t,e=D_,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Qt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new FN;return setTimeout(async()=>{a.abort()},n!==void 0?n:wN),P_({appId:s,apiKey:r,measurementId:i},o,a,e)}async function P_(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=D_){var i;const{appId:o,measurementId:a}=t;try{await MN(s,e)}catch(c){if(a)return jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await PN(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!UN(u)){if(r.deleteThrottleMetadata(o),a)return jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Qp(n,r.intervalMillis,NN):Qp(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),jt.debug(`Calling attemptFetch again in ${l} millis`),P_(t,h,s,r)}}function MN(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function UN(t){if(!(t instanceof en)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class FN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function BN(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(){if(Rv())try{await Nv()}catch(t){return jt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return jt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $N(t,e,n,s,r,i,o){var a;const c=LN(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&jt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>jt.error(p)),e.push(c);const u=VN().then(p=>{if(p)return s.getId()}),[l,h]=await Promise.all([c,u]);kN(i)||TN(i,l.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[_N]="firebase",d.update=!0,h!=null&&(d[vN]=h),r("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.app=e}_delete(){return delete Yi[this.app.options.appId],Promise.resolve()}}let Yi={},Em=[];const Im={};let El="dataLayer",qN="gtag",Cm,L_,Sm=!1;function HN(){const t=[];if(kv()&&t.push("This is a browser extension environment."),_S()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});jt.warn(n.message)}}function KN(t,e,n){HN();const s=t.options.appId;if(!s)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Yi[s]!=null)throw Qt.create("already-exists",{id:s});if(!Sm){EN(El);const{wrappedGtag:i,gtagCore:o}=AN(Yi,Em,Im,El,qN);L_=i,Cm=o,Sm=!0}return Yi[s]=$N(t,Em,Im,e,Cm,El,n),new jN(t)}function zN(t=du()){t=Ve(t);const e=Ds(t,mc);return e.isInitialized()?e.getImmediate():WN(t)}function WN(t,e={}){const n=Ds(t,mc);if(n.isInitialized()){const r=n.getImmediate();if(ho(e,n.getOptions()))return r;throw Qt.create("already-initialized")}return n.initialize({options:e})}function GN(t,e,n,s){t=Ve(t),BN(L_,Yi[t.app.options.appId],e,n,s).catch(r=>jt.error(r))}const Am="@firebase/analytics",km="0.9.3";function ZN(){fn(new Xt(mc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return KN(s,r,n)},"PUBLIC")),fn(new Xt("analytics-internal",t,"PRIVATE")),xt(Am,km),xt(Am,km,"esm2017");function t(e){try{const n=e.getProvider(mc).getImmediate();return{logEvent:(s,r,i)=>GN(n,s,r,i)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}ZN();var QN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,xd=xd||{},ae=QN||self;function gc(){}function wu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YN(t){return Object.prototype.hasOwnProperty.call(t,Il)&&t[Il]||(t[Il]=++XN)}var Il="closure_uid_"+(1e9*Math.random()>>>0),XN=0;function JN(t,e,n){return t.call.apply(t.bind,arguments)}function ex(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=JN:gt=ex,gt.apply(null,arguments)}function Na(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ps(){this.s=this.s,this.o=this.o}var tx=0;Ps.prototype.s=!1;Ps.prototype.na=function(){!this.s&&(this.s=!0,this.M(),tx!=0)&&YN(this)};Ps.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const M_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Od(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Rm(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(wu(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var nx=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",gc,e),ae.removeEventListener("test",gc,e)}catch{}return t}();function yc(t){return/^[\s\xa0]*$/.test(t)}var Nm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Cl(t,e){return t<e?-1:t>e?1:0}function bu(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return bu().indexOf(t)!=-1}function Dd(t){return Dd[" "](t),t}Dd[" "]=gc;function sx(t){var e=ox;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var rx=wn("Opera"),si=wn("Trident")||wn("MSIE"),U_=wn("Edge"),ph=U_||si,F_=wn("Gecko")&&!(bu().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),ix=bu().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function B_(){var t=ae.document;return t?t.documentMode:void 0}var vc;e:{var Sl="",Al=function(){var t=bu();if(F_)return/rv:([^\);]+)(\)|;)/.exec(t);if(U_)return/Edge\/([\d\.]+)/.exec(t);if(si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ix)return/WebKit\/(\S+)/.exec(t);if(rx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Al&&(Sl=Al?Al[1]:""),si){var kl=B_();if(kl!=null&&kl>parseFloat(Sl)){vc=String(kl);break e}}vc=Sl}var ox={};function ax(){return sx(function(){let t=0;const e=Nm(String(vc)).split("."),n=Nm("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Cl(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Cl(r[2].length==0,i[2].length==0)||Cl(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var mh;if(ae.document&&si){var xm=B_();mh=xm||parseInt(vc,10)||void 0}else mh=void 0;var cx=mh;function go(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F_){e:{try{Dd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ux[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&go.X.h.call(this)}}ht(go,yt);var ux={2:"touch",3:"pen",4:"mouse"};go.prototype.h=function(){go.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),lx=0;function hx(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++lx,this.ba=this.ea=!1}function Tu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Pd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function V_(t){const e={};for(const n in t)e[n]=t[n];return e}const Om="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $_(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Om.length;i++)n=Om[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Eu(t){this.src=t,this.g={},this.h=0}Eu.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yh(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new hx(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function gh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=M_(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Tu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yh(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Ld="closure_lm_"+(1e6*Math.random()|0),Rl={};function j_(t,e,n,s,r){if(s&&s.once)return H_(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)j_(t,e[i],n,s,r);return null}return n=Fd(n),t&&t[Yo]?t.N(e,n,Qo(s)?!!s.capture:!!s,r):q_(t,e,n,!1,s,r)}function q_(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Qo(r)?!!r.capture:!!r,a=Ud(t);if(a||(t[Ld]=a=new Eu(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=dx(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)nx||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(z_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dx(){function t(n){return e.call(t.src,t.listener,n)}const e=fx;return t}function H_(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)H_(t,e[i],n,s,r);return null}return n=Fd(n),t&&t[Yo]?t.O(e,n,Qo(s)?!!s.capture:!!s,r):q_(t,e,n,!0,s,r)}function K_(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)K_(t,e[i],n,s,r);else s=Qo(s)?!!s.capture:!!s,n=Fd(n),t&&t[Yo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yh(i,n,s,r),-1<n&&(Tu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ud(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yh(e,n,s,r)),(n=-1<t?e[t]:null)&&Md(n))}function Md(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Yo])gh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(z_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ud(e))?(gh(n,t),n.h==0&&(n.src=null,e[Ld]=null)):Tu(t)}}}function z_(t){return t in Rl?Rl[t]:Rl[t]="on"+t}function fx(t,e){if(t.ba)t=!0;else{e=new go(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Md(t),t=n.call(s,e)}return t}function Ud(t){return t=t[Ld],t instanceof Eu?t:null}var Nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fd(t){return typeof t=="function"?t:(t[Nl]||(t[Nl]=function(e){return t.handleEvent(e)}),t[Nl])}function ot(){Ps.call(this),this.i=new Eu(this),this.P=this,this.I=null}ht(ot,Ps);ot.prototype[Yo]=!0;ot.prototype.removeEventListener=function(t,e,n,s){K_(this,t,e,n,s)};function lt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var r=e;e=new yt(s,t),$_(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=xa(o,s,!0,e)&&r}if(o=e.g=t,r=xa(o,s,!0,e)&&r,r=xa(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=xa(o,s,!1,e)&&r}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Tu(n[s]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ot.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function xa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&gh(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Bd=ae.JSON.stringify;function px(){var t=Z_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mx{constructor(){this.h=this.g=null}add(e,n){const s=W_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var W_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gx,t=>t.reset());class gx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yx(t){ae.setTimeout(()=>{throw t},0)}function G_(t,e){vh||vx(),_h||(vh(),_h=!0),Z_.add(t,e)}var vh;function vx(){var t=ae.Promise.resolve(void 0);vh=function(){t.then(_x)}}var _h=!1,Z_=new mx;function _x(){for(var t;t=px();){try{t.h.call(t.g)}catch(n){yx(n)}var e=W_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_h=!1}function Iu(t,e){ot.call(this),this.h=t||1,this.g=e||ae,this.j=gt(this.lb,this),this.l=Date.now()}ht(Iu,ot);Q=Iu.prototype;Q.ca=!1;Q.R=null;Q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),lt(this,"tick"),this.ca&&(Vd(this),this.start()))}};Q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Q.M=function(){Iu.X.M.call(this),Vd(this),delete this.g};function $d(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function Q_(t){t.g=$d(()=>{t.g=null,t.i&&(t.i=!1,Q_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wx extends Ps{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Q_(this)}M(){super.M(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yo(t){Ps.call(this),this.h=t,this.g={}}ht(yo,Ps);var Dm=[];function Y_(t,e,n,s){Array.isArray(n)||(n&&(Dm[0]=n.toString()),n=Dm);for(var r=0;r<n.length;r++){var i=j_(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function X_(t){Pd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Md(e)},t),t.g={}}yo.prototype.M=function(){yo.X.M.call(this),X_(this)};yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cu(){this.g=!0}Cu.prototype.Aa=function(){this.g=!1};function bx(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Tx(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Dr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ix(t,n)+(s?" "+s:"")})}function Ex(t,e){t.info(function(){return"TIMEOUT: "+e})}Cu.prototype.info=function(){};function Ix(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Bd(n)}catch{return e}}var Tr={},Pm=null;function Su(){return Pm=Pm||new ot}Tr.Pa="serverreachability";function J_(t){yt.call(this,Tr.Pa,t)}ht(J_,yt);function vo(t){const e=Su();lt(e,new J_(e))}Tr.STAT_EVENT="statevent";function ew(t,e){yt.call(this,Tr.STAT_EVENT,t),this.stat=e}ht(ew,yt);function Et(t){const e=Su();lt(e,new ew(e,t))}Tr.Qa="timingevent";function tw(t,e){yt.call(this,Tr.Qa,t),this.size=e}ht(tw,yt);function Xo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var Au={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function jd(){}jd.prototype.h=null;function Lm(t){return t.h||(t.h=t.i())}function sw(){}var Jo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function qd(){yt.call(this,"d")}ht(qd,yt);function Hd(){yt.call(this,"c")}ht(Hd,yt);var wh;function ku(){}ht(ku,jd);ku.prototype.g=function(){return new XMLHttpRequest};ku.prototype.i=function(){return{}};wh=new ku;function ea(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new yo(this),this.O=Cx,t=ph?125:void 0,this.T=new Iu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rw}function rw(){this.i=null,this.g="",this.h=!1}var Cx=45e3,bh={},_c={};Q=ea.prototype;Q.setTimeout=function(t){this.O=t};function Th(t,e,n){t.K=1,t.v=Nu(zn(e)),t.s=n,t.P=!0,iw(t,null)}function iw(t,e){t.F=Date.now(),ta(t),t.A=zn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),fw(n.i,"t",s),t.C=0,n=t.l.H,t.h=new rw,t.g=Pw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new wx(gt(t.La,t,t.g),t.N)),Y_(t.S,t.g,"readystatechange",t.ib),e=t.H?V_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vo(),bx(t.j,t.u,t.A,t.m,t.U,t.s)}Q.ib=function(t){t=t.target;const e=this.L;e&&Un(t)==3?e.l():this.La(t)};Q.La=function(t){try{if(t==this.g)e:{const l=Un(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ph||this.g&&(this.h.h||this.g.fa()||Bm(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?vo(3):vo(2)),Ru(this);var n=this.g.aa();this.Y=n;t:if(ow(this)){var s=Bm(this.g);t="";var r=s.length,i=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zs(this),Xi(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Tx(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yc(a)){var u=a;break t}}u=null}if(n=u)Dr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Eh(this,n);else{this.i=!1,this.o=3,Et(12),Zs(this),Xi(this);break e}}this.P?(aw(this,l,o),ph&&this.i&&l==3&&(Y_(this.S,this.T,"tick",this.hb),this.T.start())):(Dr(this.j,this.m,o,null),Eh(this,o)),l==4&&Zs(this),this.i&&!this.I&&(l==4?Nw(this.l,this):(this.i=!1,ta(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Et(12)):(this.o=0,Et(13)),Zs(this),Xi(this)}}}catch{}finally{}};function ow(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function aw(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Sx(t,n),r==_c){e==4&&(t.o=4,Et(14),s=!1),Dr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==bh){t.o=4,Et(15),Dr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Dr(t.j,t.m,r,null),Eh(t,r);ow(t)&&r!=_c&&r!=bh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Et(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yd(e),e.K=!0,Et(11))):(Dr(t.j,t.m,n,"[Invalid Chunked Response]"),Zs(t),Xi(t))}Q.hb=function(){if(this.g){var t=Un(this.g),e=this.g.fa();this.C<e.length&&(Ru(this),aw(this,t,e),this.i&&t!=4&&ta(this))}};function Sx(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?_c:(n=Number(e.substring(n,s)),isNaN(n)?bh:(s+=1,s+n>e.length?_c:(e=e.substr(s,n),t.C=s+n,e)))}Q.cancel=function(){this.I=!0,Zs(this)};function ta(t){t.V=Date.now()+t.O,cw(t,t.O)}function cw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xo(gt(t.gb,t),e)}function Ru(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}Q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ex(this.j,this.A),this.K!=2&&(vo(),Et(17)),Zs(this),this.o=2,Xi(this)):cw(this,this.V-t)};function Xi(t){t.l.G==0||t.I||Nw(t.l,t)}function Zs(t){Ru(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Vd(t.T),X_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Eh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ih(n.h,t))){if(!t.J&&Ih(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Tc(n),Du(n);else break e;Qd(n),Et(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xo(gt(n.cb,n),6e3));if(1>=gw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Qs(n,11)}else if((t.J||n.g==t)&&Tc(n),!yc(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Kd(i,i.h),i.h=null))}if(s.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Fe(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Dw(s,s.H?s.ka:null,s.V),o.J){yw(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ru(a),ta(a)),s.g=o}else kw(s);0<n.i.length&&Pu(n)}else u[0]!="stop"&&u[0]!="close"||Qs(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Qs(n,7):Zd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}vo(4)}catch{}}function Ax(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wu(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function kx(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function uw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kx(t),s=Ax(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var lw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function sr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof sr){this.h=e!==void 0?e:t.h,wc(this,t.j),this.s=t.s,this.g=t.g,bc(this,t.m),this.l=t.l,e=t.i;var n=new _o;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mm(this,n),this.o=t.o}else t&&(n=String(t).match(lw))?(this.h=!!e,wc(this,n[1]||"",!0),this.s=Ui(n[2]||""),this.g=Ui(n[3]||"",!0),bc(this,n[4]),this.l=Ui(n[5]||"",!0),Mm(this,n[6]||"",!0),this.o=Ui(n[7]||"")):(this.h=!!e,this.i=new _o(null,this.h))}sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fi(e,Um,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fi(e,Um,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fi(n,n.charAt(0)=="/"?Ox:xx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fi(n,Px)),t.join("")};function zn(t){return new sr(t)}function wc(t,e,n){t.j=n?Ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mm(t,e,n){e instanceof _o?(t.i=e,Lx(t.i,t.h)):(n||(e=Fi(e,Dx)),t.i=new _o(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function Nu(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Nx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Um=/[#\/\?@]/g,xx=/[#\?:]/g,Ox=/[#\?]/g,Dx=/[#\?@]/g,Px=/#/g;function _o(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ls(t){t.g||(t.g=new Map,t.h=0,t.i&&Rx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=_o.prototype;Q.add=function(t,e){Ls(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hw(t,e){Ls(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dw(t,e){return Ls(t),e=Ti(t,e),t.g.has(e)}Q.forEach=function(t,e){Ls(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};Q.oa=function(){Ls(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};Q.W=function(t){Ls(this);let e=[];if(typeof t=="string")dw(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Q.set=function(t,e){return Ls(this),this.i=null,t=Ti(this,t),dw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function fw(t,e,n){hw(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),Od(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Lx(t,e){e&&!t.j&&(Ls(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(hw(this,s),fw(this,r,n))},t)),t.j=e}var Mx=class{constructor(e,n){this.h=e,this.g=n}};function pw(t){this.l=t||Ux,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ga&&ae.g.Ga()&&ae.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ux=10;function mw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gw(t){return t.h?1:t.g?t.g.size:0}function Ih(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Kd(t,e){t.g?t.g.add(e):t.h=e}function yw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pw.prototype.cancel=function(){if(this.i=vw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Od(t.i)}function zd(){}zd.prototype.stringify=function(t){return ae.JSON.stringify(t,void 0)};zd.prototype.parse=function(t){return ae.JSON.parse(t,void 0)};function Fx(){this.g=new zd}function Bx(t,e,n){const s=n||"";try{uw(t,function(r,i){let o=r;Qo(r)&&(o=Bd(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Vx(t,e){const n=new Cu;if(ae.Image){const s=new Image;s.onload=Na(Oa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Na(Oa,n,s,"TestLoadImage: error",!1,e),s.onabort=Na(Oa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Na(Oa,n,s,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Oa(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function na(t){this.l=t.ac||null,this.j=t.jb||!1}ht(na,jd);na.prototype.g=function(){return new xu(this.l,this.j)};na.prototype.i=function(t){return function(){return t}}({});function xu(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Wd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(xu,ot);var Wd=0;Q=xu.prototype;Q.open=function(t,e){if(this.readyState!=Wd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wo(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ae).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sa(this)),this.readyState=Wd};Q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_w(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function _w(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sa(this):wo(this),this.readyState==3&&_w(this)}};Q.Va=function(t){this.g&&(this.response=this.responseText=t,sa(this))};Q.Ua=function(t){this.g&&(this.response=t,sa(this))};Q.ga=function(){this.g&&sa(this)};function sa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wo(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $x=ae.JSON.parse;function ze(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ww,this.K=this.L=!1}ht(ze,ot);var ww="",jx=/^https?$/i,qx=["POST","PUT"];Q=ze.prototype;Q.Ka=function(t){this.L=t};Q.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wh.g(),this.C=this.u?Lm(this.u):Lm(wh),this.g.onreadystatechange=gt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Fm(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ae.FormData&&t instanceof ae.FormData,!(0<=M_(qx,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ew(this),0<this.B&&((this.K=Hx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.qa,this)):this.A=$d(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Fm(this,i)}};function Hx(t){return si&&ax()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Q.qa=function(){typeof xd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function Fm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bw(t),Ou(t)}function bw(t){t.D||(t.D=!0,lt(t,"complete"),lt(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),Ou(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ou(this,!0)),ze.X.M.call(this)};Q.Ha=function(){this.s||(this.F||this.v||this.l?Tw(this):this.fb())};Q.fb=function(){Tw(this)};function Tw(t){if(t.h&&typeof xd<"u"&&(!t.C[1]||Un(t)!=4||t.aa()!=2)){if(t.v&&Un(t)==4)$d(t.Ha,0,t);else if(lt(t,"readystatechange"),Un(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(lw)[1]||null;if(!r&&ae.self&&ae.self.location){var i=ae.self.location.protocol;r=i.substr(0,i.length-1)}s=!jx.test(r?r.toLowerCase():"")}n=s}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<Un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",bw(t)}}finally{Ou(t)}}}}function Ou(t,e){if(t.g){Ew(t);const n=t.g,s=t.C[0]?gc:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ew(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}Q.aa=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};Q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$x(e)}};function Bm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ww:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Ea=function(){return this.m};Q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Iw(t){let e="";return Pd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Gd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Iw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function Oi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cw(t){this.Ca=0,this.i=[],this.j=new Cu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Oi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Oi("baseRetryDelayMs",5e3,t),this.bb=Oi("retryDelaySeedMs",1e4,t),this.$a=Oi("forwardChannelMaxRetries",2,t),this.ta=Oi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new pw(t&&t.concurrentRequestLimit),this.Fa=new Fx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Q=Cw.prototype;Q.ma=8;Q.G=1;function Zd(t){if(Sw(t),t.G==3){var e=t.U++,n=zn(t.F);Fe(n,"SID",t.I),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),ra(t,n),e=new ea(t,t.j,e,void 0),e.K=2,e.v=Nu(zn(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon&&(n=ae.navigator.sendBeacon(e.v.toString(),"")),!n&&ae.Image&&(new Image().src=e.v,n=!0),n||(e.g=Pw(e.l,null),e.g.da(e.v)),e.F=Date.now(),ta(e)}Ow(t)}function Du(t){t.g&&(Yd(t),t.g.cancel(),t.g=null)}function Sw(t){Du(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Tc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function Pu(t){mw(t.h)||t.m||(t.m=!0,G_(t.Ja,t),t.C=0)}function Kx(t,e){return gw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xo(gt(t.Ja,t,e),xw(t,t.C)),t.C++,!0)}Q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ea(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=V_(i),$_(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Aw(this,r,e),n=zn(this.F),Fe(n,"RID",t),Fe(n,"CVER",22),this.D&&Fe(n,"X-HTTP-Session-Id",this.D),ra(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Iw(i)))+"&"+e:this.o&&Gd(n,this.o,i)),Kd(this.h,r),this.Ya&&Fe(n,"TYPE","init"),this.O?(Fe(n,"$req",e),Fe(n,"SID","null"),r.Z=!0,Th(r,n,null)):Th(r,n,e),this.G=2}}else this.G==3&&(t?Vm(this,t):this.i.length==0||mw(this.h)||Vm(this))};function Vm(t,e){var n;e?n=e.m:n=t.U++;const s=zn(t.F);Fe(s,"SID",t.I),Fe(s,"RID",n),Fe(s,"AID",t.T),ra(t,s),t.o&&t.s&&Gd(s,t.o,t.s),n=new ea(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Aw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Kd(t.h,n),Th(n,s,e)}function ra(t,e){t.ia&&Pd(t.ia,function(n,s){Fe(e,s,n)}),t.l&&uw({},function(n,s){Fe(e,s,n)})}function Aw(t,e,n){n=Math.min(t.i.length,n);var s=t.l?gt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Bx(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function kw(t){t.g||t.u||(t.Z=1,G_(t.Ia,t),t.A=0)}function Qd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xo(gt(t.Ia,t),xw(t,t.A)),t.A++,!0)}Q.Ia=function(){if(this.u=null,Rw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xo(gt(this.eb,this),t)}};Q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Et(10),Du(this),Rw(this))};function Yd(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function Rw(t){t.g=new ea(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=zn(t.sa);Fe(e,"RID","rpc"),Fe(e,"SID",t.I),Fe(e,"CI",t.L?"0":"1"),Fe(e,"AID",t.T),Fe(e,"TYPE","xmlhttp"),ra(t,e),t.o&&t.s&&Gd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nu(zn(e)),n.s=null,n.P=!0,iw(n,t)}Q.cb=function(){this.v!=null&&(this.v=null,Du(this),Qd(this),Et(19))};function Tc(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function Nw(t,e){var n=null;if(t.g==e){Tc(t),Yd(t),t.g=null;var s=2}else if(Ih(t.h,e))n=e.D,yw(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Su(),lt(s,new tw(s,n)),Pu(t)}else kw(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Kx(t,e)||s==2&&Qd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Qs(t,5);break;case 4:Qs(t,10);break;case 3:Qs(t,6);break;default:Qs(t,2)}}}function xw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Qs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=gt(t.kb,t);n||(n=new sr("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||wc(n,"https"),Nu(n)),Vx(n.toString(),s)}else Et(2);t.G=0,t.l&&t.l.va(e),Ow(t),Sw(t)}Q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ow(t){if(t.G=0,t.la=[],t.l){const e=vw(t.h);(e.length!=0||t.i.length!=0)&&(Rm(t.la,e),Rm(t.la,t.i),t.h.i.length=0,Od(t.i),t.i.length=0),t.l.ua()}}function Dw(t,e,n){var s=n instanceof sr?zn(n):new sr(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),bc(s,s.m);else{var r=ae.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new sr(null,void 0);s&&wc(i,s),e&&(i.g=e),r&&bc(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Fe(s,n,e),Fe(s,"VER",t.ma),ra(t,s),s}function Pw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ze(new na({jb:!0})):new ze(t.ra),e.Ka(t.H),e}function Lw(){}Q=Lw.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Ra=function(){};function Ec(){if(si&&!(10<=Number(cx)))throw Error("Environmental error: no available transport.")}Ec.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){ot.call(this),this.g=new Cw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ei(this)}ht(qt,ot);qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Et(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Dw(t,null,t.V),Pu(t)};qt.prototype.close=function(){Zd(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bd(t),t=n);e.i.push(new Mx(e.ab++,t)),e.G==3&&Pu(e)};qt.prototype.M=function(){this.g.l=null,delete this.j,Zd(this.g),delete this.g,qt.X.M.call(this)};function Mw(t){qd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht(Mw,qd);function Uw(){Hd.call(this),this.status=1}ht(Uw,Hd);function Ei(t){this.g=t}ht(Ei,Lw);Ei.prototype.xa=function(){lt(this.g,"a")};Ei.prototype.wa=function(t){lt(this.g,new Mw(t))};Ei.prototype.va=function(t){lt(this.g,new Uw)};Ei.prototype.ua=function(){lt(this.g,"b")};Ec.prototype.createWebChannel=Ec.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;Au.NO_ERROR=0;Au.TIMEOUT=8;Au.HTTP_ERROR=6;nw.COMPLETE="complete";sw.EventType=Jo;Jo.OPEN="a";Jo.CLOSE="b";Jo.ERROR="c";Jo.MESSAGE="d";ot.prototype.listen=ot.prototype.N;ze.prototype.listenOnce=ze.prototype.O;ze.prototype.getLastError=ze.prototype.Oa;ze.prototype.getLastErrorCode=ze.prototype.Ea;ze.prototype.getStatus=ze.prototype.aa;ze.prototype.getResponseJson=ze.prototype.Sa;ze.prototype.getResponseText=ze.prototype.fa;ze.prototype.send=ze.prototype.da;ze.prototype.setWithCredentials=ze.prototype.Ka;var zx=function(){return new Ec},Wx=function(){return Su()},xl=Au,Gx=nw,Zx=Tr,$m={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Qx=na,Da=sw,Yx=ze;const jm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new hu("@firebase/firestore");function qm(){return pr.logLevel}function X(t,...e){if(pr.logLevel<=Ie.DEBUG){const n=e.map(Xd);pr.debug(`Firestore (${Ii}): ${t}`,...n)}}function Wn(t,...e){if(pr.logLevel<=Ie.ERROR){const n=e.map(Xd);pr.error(`Firestore (${Ii}): ${t}`,...n)}}function Ch(t,...e){if(pr.logLevel<=Ie.WARN){const n=e.map(Xd);pr.warn(`Firestore (${Ii}): ${t}`,...n)}}function Xd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function Ue(t,e){t||re()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class Jx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eO{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new Fw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new dt(e)}}class tO{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ue(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nO{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new tO(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rO{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.A=n.token,new sO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=iO(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Se(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new nt(0,0))}static max(){return new he(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,s){n===void 0?n=0:n>e.length&&re(),s===void 0?s=e.length-n:s>e.length-n&&re(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends bo{construct(e,n,s){return new Le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const oO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends bo{construct(e,n,s){return new mt(e,n,s)}static isValidIdentifier(e){return oO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Le.fromString(e))}static fromName(e){return new J(Le.fromString(e).popFirst(5))}static empty(){return new J(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Le(e.slice()))}}function aO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=he.fromTimestamp(s===1e9?new nt(n+1,0):new nt(n,s));return new As(r,J.empty(),e)}function cO(t){return new As(t.readTime,t.key,-1)}class As{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new As(he.min(),J.empty(),-1)}static max(){return new As(he.max(),J.empty(),-1)}}function uO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==lO)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,s)=>{n(e)})}static reject(e){return new O((n,s)=>{s(e)})}static waitFor(e){return new O((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=O.resolve(!1);for(const s of e)n=n.next(r=>r?O.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new O((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new O((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function oa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Jd.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class To{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new To("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function fO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const pO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=pO.exec(t);if(Ue(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $w(t){const e=t.mapValue.fields.__previous_value__;return ef(e)?$w(e):e}function Eo(t){const e=ks(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ef(t)?4:mO(t)?9007199254740991:10:re()}function kn(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=ks(s.timestampValue),o=ks(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ii(s.bytesValue).isEqual(ii(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Xe(s.geoPointValue.latitude)===Xe(r.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Xe(s.integerValue)===Xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Xe(s.doubleValue),o=Xe(r.doubleValue);return i===o?Ic(i)===Ic(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Hm(i)!==Hm(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!kn(i[a],o[a])))return!1;return!0}(t,e);default:return re()}}function Io(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function oi(t,e){if(t===e)return 0;const n=mr(t),s=mr(e);if(n!==s)return Se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Xe(r.integerValue||r.doubleValue),a=Xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Km(t.timestampValue,e.timestampValue);case 4:return Km(Eo(t),Eo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ii(r),a=ii(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=Se(o[c],a[c]);if(u!==0)return u}return Se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Se(Xe(r.latitude),Xe(i.latitude));return o!==0?o:Se(Xe(r.longitude),Xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=oi(o[c],a[c]);if(u)return u}return Se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Pa.mapValue&&i===Pa.mapValue)return 0;if(r===Pa.mapValue)return 1;if(i===Pa.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=Se(a[l],u[l]);if(h!==0)return h;const d=oi(o[a[l]],c[u[l]]);if(d!==0)return d}return Se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function Km(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=ks(t),s=ks(e),r=Se(n.seconds,s.seconds);return r!==0?r:Se(n.nanos,s.nanos)}function ai(t){return Sh(t)}function Sh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=ks(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Sh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Sh(s.fields[a])}`;return i+"}"}(t.mapValue):re();var e,n}function Cc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ah(t){return!!t&&"integerValue"in t}function tf(t){return!!t&&"arrayValue"in t}function zm(t){return!!t&&"nullValue"in t}function Wm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function za(t){return!!t&&"mapValue"in t}function Ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ji(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.position=e,this.inclusive=n}}function Gm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=J.comparator(J.fromName(o.referenceValue),n.key):s=oi(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Zm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{}class et extends jw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new yO(e,n,s):n==="array-contains"?new wO(e,s):n==="in"?new bO(e,s):n==="not-in"?new TO(e,s):n==="array-contains-any"?new EO(e,s):new et(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new vO(e,s):new _O(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oi(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pn extends jw{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new pn(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qw(t){return t.op==="and"}function Hw(t){return gO(t)&&qw(t)}function gO(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function kh(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+ai(t.value);if(Hw(t))return t.filters.map(e=>kh(e)).join(",");{const e=t.filters.map(n=>kh(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.field.isEqual(s.field)&&kn(n.value,s.value)}(t,e):t instanceof pn?function(n,s){return s instanceof pn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Kw(i,s.filters[o]),!0):!1}(t,e):void re()}function zw(t){return t instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${ai(e.value)}`}(t):t instanceof pn?function(e){return e.op.toString()+" {"+e.getFilters().map(zw).join(" ,")+"}"}(t):"Filter"}class yO extends et{constructor(e,n,s){super(e,n,s),this.key=J.fromName(s.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class vO extends et{constructor(e,n){super(e,"in",n),this.keys=Ww("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _O extends et{constructor(e,n){super(e,"not-in",n),this.keys=Ww("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ww(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>J.fromName(s.referenceValue))}class wO extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tf(n)&&Io(n.arrayValue,this.value)}}class bO extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class TO extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class EO extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Io(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n="asc"){this.field=e,this.dir=n}}function IO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ct.RED,this.left=r??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ct(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qm(this.data.getIterator())}getIteratorFrom(e){return new Qm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Qm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new st(mt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(n)}setAll(e){let n=mt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ji(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];za(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Er(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Rt(Ji(this.value))}}function Gw(t){const e=[];return Er(t.fields,(n,s)=>{const r=new mt([n]);if(za(s)){const i=Gw(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,he.min(),he.min(),he.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,r){return new ft(e,1,n,he.min(),s,r,0)}static newNoDocument(e,n){return new ft(e,2,n,he.min(),he.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,he.min(),he.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ym(t,e=null,n=[],s=[],r=null,i=null,o=null){return new CO(t,e,n,s,r,i,o)}function nf(t){const e=de(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>kh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ai(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ai(s)).join(",")),e.ft=n}return e.ft}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zm(t.startAt,e.startAt)&&Zm(t.endAt,e.endAt)}function Rh(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function SO(t,e,n,s,r,i,o,a){return new Ms(t,e,n,s,r,i,o,a)}function rf(t){return new Ms(t)}function Xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function of(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Mu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function af(t){return t.collectionGroup!==null}function rr(t){const e=de(t);if(e.dt===null){e.dt=[];const n=Mu(e),s=of(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Hr(n)),e.dt.push(new Hr(mt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Hr(mt.keyField(),i))}}}return e.dt}function Gn(t){const e=de(t);if(!e._t)if(e.limitType==="F")e._t=Ym(e.path,e.collectionGroup,rr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of rr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Hr(i.field,o))}const s=e.endAt?new ci(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ci(e.startAt.position,e.startAt.inclusive):null;e._t=Ym(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Nh(t,e){e.getFirstInequalityField(),Mu(t);const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uu(t,e){return sf(Gn(t),Gn(e))&&t.limitType===e.limitType}function Zw(t){return`${nf(Gn(t))}|lt:${t.limitType}`}function xh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>zw(s)).join(", ")}]`),Lu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ai(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ai(s)).join(",")),`Target(${n})`}(Gn(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):J.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of rr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Gm(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,rr(n),s)||n.endAt&&!function(r,i,o){const a=Gm(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,rr(n),s))}(t,e)}function AO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qw(t){return(e,n)=>{let s=!1;for(const r of rr(t)){const i=kO(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function kO(t,e,n){const s=t.field.isKeyField()?J.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?oi(a,c):re()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function Xw(t){return{integerValue:""+t}}function RO(t,e){return fO(e)?Xw(e):Yw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this._=void 0}}function NO(t,e,n){return t instanceof Ac?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Co?eb(t,e):t instanceof So?tb(t,e):function(s,r){const i=Jw(s,r),o=Jm(i)+Jm(s.gt);return Ah(i)&&Ah(s.gt)?Xw(o):Yw(s.yt,o)}(t,e)}function xO(t,e,n){return t instanceof Co?eb(t,e):t instanceof So?tb(t,e):n}function Jw(t,e){return t instanceof kc?Ah(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ac extends Bu{}class Co extends Bu{constructor(e){super(),this.elements=e}}function eb(t,e){const n=nb(e);for(const s of t.elements)n.some(r=>kn(r,s))||n.push(s);return{arrayValue:{values:n}}}class So extends Bu{constructor(e){super(),this.elements=e}}function tb(t,e){let n=nb(e);for(const s of t.elements)n=n.filter(r=>!kn(r,s));return{arrayValue:{values:n}}}class kc extends Bu{constructor(e,n){super(),this.yt=e,this.gt=n}}function Jm(t){return Xe(t.integerValue||t.doubleValue)}function nb(t){return tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OO(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Co&&s instanceof Co||n instanceof So&&s instanceof So?ri(n.elements,s.elements,kn):n instanceof kc&&s instanceof kc?kn(n.gt,s.gt):n instanceof Ac&&s instanceof Ac}(t.transform,e.transform)}class DO{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vu{}function sb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cf(t.key,Yt.none()):new aa(t.key,t.data,Yt.none());{const n=t.data,s=Rt.empty();let r=new st(mt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Us(t.key,s,new Bt(r.toArray()),Yt.none())}}function PO(t,e,n){t instanceof aa?function(s,r,i){const o=s.value.clone(),a=tg(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Us?function(s,r,i){if(!Wa(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=tg(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(rb(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,s){return t instanceof aa?function(r,i,o,a){if(!Wa(r.precondition,i))return o;const c=r.value.clone(),u=ng(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Us?function(r,i,o,a){if(!Wa(r.precondition,i))return o;const c=ng(r.fieldTransforms,a,i),u=i.data;return u.setAll(rb(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Wa(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function LO(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Jw(s.transform,r||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,i))}return n||null}function eg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ri(n,s,(r,i)=>OO(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends Vu{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Us extends Vu{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function tg(t,e,n){const s=new Map;Ue(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,xO(o,a,n[r]))}return s}function ng(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,NO(i,o,e))}return s}class cf extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MO extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,we;function FO(t){switch(t){default:return re();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function ib(t){if(t===void 0)return Wn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Ye.OK:return C.OK;case Ye.CANCELLED:return C.CANCELLED;case Ye.UNKNOWN:return C.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return C.INTERNAL;case Ye.UNAVAILABLE:return C.UNAVAILABLE;case Ye.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ye.NOT_FOUND:return C.NOT_FOUND;case Ye.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ye.ABORTED:return C.ABORTED;case Ye.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ye.DATA_LOSS:return C.DATA_LOSS;default:return re()}}(we=Ye||(Ye={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Vw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=new rt(J.comparator);function Zn(){return BO}const ob=new rt(J.comparator);function Bi(...t){let e=ob;for(const n of t)e=e.insert(n.key,n);return e}function ab(t){let e=ob;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ys(){return to()}function cb(){return to()}function to(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const VO=new rt(J.comparator),$O=new st(J.comparator);function ve(...t){let e=$O;for(const n of t)e=e.add(n);return e}const jO=new st(Se);function ub(){return jO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ca.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new $u(he.min(),r,ub(),Zn(),ve())}}class ca{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ca(s,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class lb{constructor(e,n){this.targetId=e,this.Et=n}}class hb{constructor(e,n,s=_t.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class sg{constructor(){this.At=0,this.Rt=ig(),this.bt=_t.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ve(),n=ve(),s=ve();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:re()}}),new ca(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=ig()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class qO{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Zn(),this.qt=rg(),this.Ut=new st(Se)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Rh(i))if(s===0){const o=new J(i.path);this.Qt(n,o,ft.newNoDocument(o,he.min()))}else Ue(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Rh(a.target)){const c=new J(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ft.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ve();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new $u(e,n,this.Ut,this.Lt,s);return this.Lt=Zn(),this.qt=rg(),this.Ut=new st(Se),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new sg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new st(Se),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new sg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function rg(){return new rt(J.comparator)}function ig(){return new rt(J.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zO=(()=>({and:"AND",or:"OR"}))();class WO{constructor(e,n){this.databaseId=e,this.wt=n}}function Rc(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function db(t,e){return t.wt?e.toBase64():e.toUint8Array()}function GO(t,e){return Rc(t,e.toTimestamp())}function Cn(t){return Ue(!!t),he.fromTimestamp(function(e){const n=ks(e);return new nt(n.seconds,n.nanos)}(t))}function uf(t,e){return function(n){return new Le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fb(t){const e=Le.fromString(t);return Ue(yb(e)),e}function Oh(t,e){return uf(t.databaseId,e.path)}function Ol(t,e){const n=fb(e);if(n.get(1)!==t.databaseId.projectId)throw new F(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(pb(n))}function Dh(t,e){return uf(t.databaseId,e)}function ZO(t){const e=fb(t);return e.length===4?Le.emptyPath():pb(e)}function Ph(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pb(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function og(t,e,n){return{name:Oh(t,e),fields:n.value.mapValue.fields}}function QO(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(Ue(u===void 0||typeof u=="string"),_t.fromBase64String(u||"")):(Ue(u===void 0||u instanceof Uint8Array),_t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?C.UNKNOWN:ib(c.code);return new F(u,c.message||"")}(o);n=new hb(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ol(t,s.document.name),i=Cn(s.document.updateTime),o=s.document.createTime?Cn(s.document.createTime):he.min(),a=new Rt({mapValue:{fields:s.document.fields}}),c=ft.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Ga(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ol(t,s.document),i=s.readTime?Cn(s.readTime):he.min(),o=ft.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ol(t,s.document),i=s.removedTargetIds||[];n=new Ga([],i,r,null)}else{if(!("filter"in e))return re();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new UO(r),o=s.targetId;n=new lb(o,i)}}return n}function YO(t,e){let n;if(e instanceof aa)n={update:og(t,e.key,e.value)};else if(e instanceof cf)n={delete:Oh(t,e.key)};else if(e instanceof Us)n={update:og(t,e.key,e.data),updateMask:o1(e.fieldMask)};else{if(!(e instanceof MO))return re();n={verify:Oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ac)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Co)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof So)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof kc)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw re()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:GO(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:re()}(t,e.precondition)),n}function XO(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Cn(s.updateTime):Cn(r);return i.isEqual(he.min())&&(i=Cn(r)),new DO(i,s.transformResults||[])}(n,e))):[]}function JO(t,e){return{documents:[Dh(t,e.path)]}}function e1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Dh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return gb(pn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Nr(l.field),direction:s1(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Lu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function t1(t){let e=ZO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ue(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=mb(l);return h instanceof pn&&Hw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Hr(xr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Lu(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ci(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ci(d,h)}(n.endAt)),SO(e,r,o,i,a,"F",c,u)}function n1(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return re()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xr(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xr(e.unaryFilter.field);return et.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xr(e.unaryFilter.field);return et.create(i,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(e){return et.create(xr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return pn.create(e.compositeFilter.filters.map(n=>mb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(e.compositeFilter.op))}(t):re()}function s1(t){return HO[t]}function r1(t){return KO[t]}function i1(t){return zO[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function xr(t){return mt.fromServerFormat(t.fieldPath)}function gb(t){return t instanceof et?function(e){if(e.op==="=="){if(Wm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NAN"}};if(zm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NAN"}};if(zm(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(e.field),op:r1(e.op),value:e.value}}}(t):t instanceof pn?function(e){const n=e.getFilters().map(s=>gb(s));return n.length===1?n[0]:{compositeFilter:{op:i1(e.op),filters:n}}}(t):re()}function o1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&PO(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=eo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=eo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=cb();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=sb(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,s)=>eg(n,s))&&ri(this.baseMutations,e.baseMutations,(n,s)=>eg(n,s))}}class lf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ue(e.mutations.length===s.length);let r=VO;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new lf(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,s,r,i=he.min(),o=he.min(),a=_t.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.ie=e}}function l1(t){const e=t1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.Je=new d1}addToCollectionParentIndex(e,n){return this.Je.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(As.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(As.min())}updateCollectionGroup(e,n,s){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class d1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new st(Le.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new st(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ui(0)}static vn(){return new ui(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&eo(s.mutation,r,Bt.empty(),nt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ve()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ve()){const r=Ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Bi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ve()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Zn();const o=to(),a=to();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Us)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),eo(l.mutation,u,l.mutation.getFieldMask(),nt.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new p1(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=to();let r=new rt((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Bt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ve()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=cb();l.forEach(d=>{if(!i.has(d)){const p=sb(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return O.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return J.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):af(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):O.resolve(Ys());let a=-1,c=i;return o.next(u=>O.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?O.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ve())).next(l=>({batchId:a,changes:ab(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(s=>{let r=Bi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Bi();return this.indexManager.getCollectionParents(e,r).next(o=>O.forEach(o,a=>{const c=function(u,l){return new Ms(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ft.newInvalidDocument(u)))});let o=Bi();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&eo(u.mutation,c,Bt.empty(),nt.now()),Fu(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return O.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Cn(s.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:l1(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.overlays=new rt(J.comparator),this.es=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return O.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),O.resolve()}getOverlaysForCollection(e,n,s){const r=Ys(),i=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return O.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new rt((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Ys(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ys(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return O.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new c1(n,s));let i=this.es.get(n);i===void 0&&(i=ve(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.ns=new st(it.ss),this.rs=new st(it.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new it(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new it(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new J(new Le([])),s=new it(n,e),r=new it(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new J(new Le([])),s=new it(n,e),r=new it(n,e+1);let i=ve();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class it{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return J.comparator(e.key,n.key)||Se(e._s,n._s)}static os(e,n){return Se(e._s,n._s)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new st(it.ss)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new a1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new it(n,0),r=new it(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new st(Se);return n.forEach(r=>{const i=new it(r,0),o=new it(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),O.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;J.isDocumentKey(i)||(i=i.child(""));const o=new it(new J(i),0);let a=new st(Se);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),O.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ue(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return O.forEach(n.mutations,r=>{const i=new it(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new it(n,0),r=this.gs.firstAfterOrEqual(s);return O.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.Es=e,this.docs=new rt(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let s=Zn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ft.newInvalidDocument(r))}),O.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Zn();const o=n.path,a=new J(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uO(cO(l),s)<=0||(r.has(l.key)||Fu(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,s,r){re()}As(e,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new w1(this)}getSize(e){return O.resolve(this.size)}}class w1 extends f1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),O.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.persistence=e,this.Rs=new Ci(n=>nf(n),sf),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.bs=0,this.Ps=new hf,this.targetCount=0,this.vs=ui.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),O.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ui(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Dn(n),O.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),O.waitFor(i).next(()=>r)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return O.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),O.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),O.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return O.resolve(s)}containsKey(e,n){return O.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Jd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new b1(this),this.indexManager=new h1,this.remoteDocumentCache=function(s){return new _1(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new u1(n),this.Ns=new g1(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new y1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new v1(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){X("MemoryPersistence","Starting transaction:",e);const r=new E1(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return O.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class E1 extends hO{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Fs=new hf,this.$s=null}static Bs(e){return new df(e)}get Ls(){if(this.$s)return this.$s;throw re()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),O.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),O.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Ls,s=>{const r=J.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,he.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return O.or([()=>O.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ve(),r=ve();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ff(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Xm(n))return O.resolve(null);let s=Gn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Sc(n,null,"F"),s=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ve(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Sc(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Xm(n)||r.isEqual(he.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(qm()<=Ie.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xh(n)),this.Bi(e,o,n,aO(r,-1)))})}Fi(e,n){let s=new st(Qw(e));return n.forEach((r,i)=>{Fu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return qm()<=Ie.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",xh(n)),this.Ni.getDocumentsMatchingQuery(e,n,As.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new rt(Se),this.Ui=new Ci(i=>nf(i),sf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function S1(t,e,n,s){return new C1(t,e,n,s)}async function vb(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ve();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function A1(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=O.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const w=c.docVersions.get(p);Ue(w!==null),y.version.compareTo(w)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ve();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function _b(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function k1(t,e){const n=de(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(_t.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(y,w,I){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=Zn(),u=ve();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(R1(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(he.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function R1(t,e,n){let s=ve(),r=ve();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Zn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function N1(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function x1(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,O.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new ir(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Lh(t,e,n){const s=de(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!oa(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function ag(t,e,n){const s=de(t);let r=he.min(),i=ve();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=de(a),h=l.Ui.get(u);return h!==void 0?O.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Gn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:he.min(),n?i:ve())).next(a=>(O1(s,AO(e),a),{documents:a,Hi:i})))}function O1(t,e,n){let s=t.Ki.get(e)||he.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class cg{constructor(){this.activeTargetIds=ub()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class D1{constructor(){this.Lr=new cg,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new cg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);X("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(X("RestConnection","Received: ",c),c),c=>{throw Ch("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ii,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=L1[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Yx;a.setWithCredentials(!0),a.listenOnce(Gx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xl.NO_ERROR:const u=a.getResponseJson();X("Connection","XHR received:",JSON.stringify(u)),i(u);break;case xl.TIMEOUT:X("Connection",'RPC "'+e+'" timed out'),o(new F(C.DEADLINE_EXCEEDED,"Request time out"));break;case xl.HTTP_ERROR:const l=a.getStatus();if(X("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(w)>=0?w:C.UNKNOWN}(d.status);o(new F(p,d.message))}else o(new F(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(C.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{X("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=zx(),o=Wx(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Qx({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");X("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new M1({Hr:y=>{h?X("Connection","Not sending because WebChannel is closed:",y):(l||(X("Connection","Opening WebChannel transport."),u.open(),l=!0),X("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),p=(y,w,I)=>{y.listen(w,v=>{try{I(v)}catch(m){setTimeout(()=>{throw m},0)}})};return p(u,Da.EventType.OPEN,()=>{h||X("Connection","WebChannel transport opened.")}),p(u,Da.EventType.CLOSE,()=>{h||(h=!0,X("Connection","WebChannel transport closed"),d.io())}),p(u,Da.EventType.ERROR,y=>{h||(h=!0,Ch("Connection","WebChannel transport errored:",y),d.io(new F(C.UNAVAILABLE,"The operation could not be completed")))}),p(u,Da.EventType.MESSAGE,y=>{var w;if(!h){const I=y.data[0];Ue(!!I);const v=I,m=v.error||((w=v[0])===null||w===void 0?void 0:w.error);if(m){X("Connection","WebChannel received error:",m);const _=m.status;let b=function(D){const N=Ye[D];if(N!==void 0)return ib(N)}(_),k=m.message;b===void 0&&(b=C.INTERNAL,k="Unknown error status: "+_+" with message "+m.message),h=!0,d.io(new F(b,k)),u.close()}else X("Connection","WebChannel received:",I),d.ro(I)}}),p(o,Zx.STAT_EVENT,y=>{y.stat===$m.PROXY?X("Connection","Detected buffering proxy"):y.stat===$m.NOPROXY&&X("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Dl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){return new WO(t,!0)}class wb{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&X("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new wb(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new F(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class F1 extends bb{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=QO(this.yt,e),s=function(r){if(!("targetChange"in r))return he.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?he.min():i.readTime?Cn(i.readTime):he.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Ph(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Rh(a)?{documents:JO(r,a)}:{query:e1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=db(r,i.resumeToken):i.snapshotVersion.compareTo(he.min())>0&&(o.readTime=Rc(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=n1(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Ph(this.yt),n.removeTarget=e,this.Bo(n)}}class B1 extends bb{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=XO(e.writeResults,e.commitTime),s=Cn(e.commitTime);return this.listener.Zo(s,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ph(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>YO(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new F(C.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(C.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(C.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class $1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Wn(n),this.ou=!1):X("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Ir(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=de(a);c._u.add(4),await ua(c),c.gu.set("Unknown"),c._u.delete(4),await qu(c)}(this))})}),this.gu=new $1(s,r)}}async function qu(t){if(Ir(t))for(const e of t.wu)await e(!0)}async function ua(t){for(const e of t.wu)await e(!1)}function Tb(t,e){const n=de(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),gf(n)?mf(n):Si(n).ko()&&pf(n,e))}function Eb(t,e){const n=de(t),s=Si(n);n.du.delete(e),s.ko()&&Ib(n,e),n.du.size===0&&(s.ko()?s.Fo():Ir(n)&&n.gu.set("Unknown"))}function pf(t,e){t.yu.Ot(e.targetId),Si(t).zo(e)}function Ib(t,e){t.yu.Ot(e),Si(t).Ho(e)}function mf(t){t.yu=new qO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Si(t).start(),t.gu.uu()}function gf(t){return Ir(t)&&!Si(t).No()&&t.du.size>0}function Ir(t){return de(t)._u.size===0}function Cb(t){t.yu=void 0}async function q1(t){t.du.forEach((e,n)=>{pf(t,e)})}async function H1(t,e){Cb(t),gf(t)?(t.gu.hu(e),mf(t)):t.gu.set("Unknown")}async function K1(t,e,n){if(t.gu.set("Online"),e instanceof hb&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Nc(t,s)}else if(e instanceof Ga?t.yu.Kt(e):e instanceof lb?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(he.min()))try{const s=await _b(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(_t.EMPTY_BYTE_STRING,c.snapshotVersion)),Ib(r,a);const u=new ir(c.target,a,1,c.sequenceNumber);pf(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){X("RemoteStore","Failed to raise snapshot:",s),await Nc(t,s)}}async function Nc(t,e,n){if(!oa(e))throw e;t._u.add(1),await ua(t),t.gu.set("Offline"),n||(n=()=>_b(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await qu(t)})}function Sb(t,e){return e().catch(n=>Nc(t,n,e))}async function Hu(t){const e=de(t),n=Rs(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;z1(e);)try{const r=await N1(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,W1(e,r)}catch(r){await Nc(e,r)}Ab(e)&&kb(e)}function z1(t){return Ir(t)&&t.fu.length<10}function W1(t,e){t.fu.push(e);const n=Rs(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ab(t){return Ir(t)&&!Rs(t).No()&&t.fu.length>0}function kb(t){Rs(t).start()}async function G1(t){Rs(t).eu()}async function Z1(t){const e=Rs(t);for(const n of t.fu)e.Xo(n.mutations)}async function Q1(t,e,n){const s=t.fu.shift(),r=lf.from(s,e,n);await Sb(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Hu(t)}async function Y1(t,e){e&&Rs(t).Yo&&await async function(n,s){if(r=s.code,FO(r)&&r!==C.ABORTED){const i=n.fu.shift();Rs(n).Mo(),await Sb(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hu(n)}var r}(t,e),Ab(t)&&kb(t)}async function lg(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const s=Ir(n);n._u.add(3),await ua(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await qu(n)}async function X1(t,e){const n=de(t);e?(n._u.delete(2),await qu(n)):e||(n._u.add(2),await ua(n),n.gu.set("Unknown"))}function Si(t){return t.pu||(t.pu=function(e,n,s){const r=de(e);return r.su(),new F1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:q1.bind(null,t),Zr:H1.bind(null,t),Wo:K1.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),gf(t)?mf(t):t.gu.set("Unknown")):(await t.pu.stop(),Cb(t))})),t.pu}function Rs(t){return t.Iu||(t.Iu=function(e,n,s){const r=de(e);return r.su(),new B1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:G1.bind(null,t),Zr:Y1.bind(null,t),tu:Z1.bind(null,t),Zo:Q1.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Hu(t)):(await t.Iu.stop(),t.fu.length>0&&(X("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new yf(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),oa(t))return new F(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||J.comparator(n.key,s.key):(n,s)=>J.comparator(n.key,s.key),this.keyedMap=Bi(),this.sortedSet=new rt(this.comparator)}static emptySet(e){return new Kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Kr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.Tu=new rt(J.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):re():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class li{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new li(e,n,Kr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.Au=void 0,this.listeners=[]}}class eD{constructor(){this.queries=new Ci(e=>Zw(e),Uu),this.onlineState="Unknown",this.Ru=new Set}}async function Rb(t,e){const n=de(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new J1),r)try{i.Au=await n.onListen(s)}catch(o){const a=vf(o,`Initialization of query '${xh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&_f(n)}async function Nb(t,e){const n=de(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function tD(t,e){const n=de(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&_f(n)}function nD(t,e,n){const s=de(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function _f(t){t.Ru.forEach(e=>{e.next()})}class xb{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new li(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.key=e}}class Db{constructor(e){this.key=e}}class sD{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ve(),this.mutatedKeys=ve(),this.Gu=Qw(e),this.Qu=new Kr(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new hg,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=Fu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?y!==w&&(s.track({type:3,doc:p}),I=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),I=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),I=!0):d&&!p&&(s.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new li(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new hg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ve(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Db(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ob(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ve();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return li.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class rD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class iD{constructor(e){this.key=e,this.nc=!1}}class oD{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ci(a=>Zw(a),Uu),this.rc=new Map,this.oc=new Set,this.uc=new rt(J.comparator),this.cc=new Map,this.ac=new hf,this.hc={},this.lc=new Map,this.fc=ui.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function aD(t,e){const n=yD(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await x1(n.localStore,Gn(e));n.isPrimaryClient&&Tb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await cD(n,e,s,a==="current",o.resumeToken)}return r}async function cD(t,e,n,s,r){t._c=(h,d,p)=>async function(y,w,I,v){let m=w.view.Wu(I);m.$i&&(m=await ag(y.localStore,w.query,!1).then(({documents:k})=>w.view.Wu(k,m)));const _=v&&v.targetChanges.get(w.targetId),b=w.view.applyChanges(m,y.isPrimaryClient,_);return fg(y,w.targetId,b.Xu),b.snapshot}(t,h,d,p);const i=await ag(t.localStore,e,!0),o=new sD(e,i.Hi),a=o.Wu(i.documents),c=ca.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);fg(t,n,u.Xu);const l=new rD(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function uD(t,e){const n=de(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Uu(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Lh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Eb(n.remoteStore,s.targetId),Mh(n,s.targetId)}).catch(ia)):(Mh(n,s.targetId),await Lh(n.localStore,s.targetId,!0))}async function lD(t,e,n){const s=vD(t);try{const r=await function(i,o){const a=de(i),c=nt.now(),u=o.reduce((d,p)=>d.add(p.key),ve());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Zn(),y=ve();return a.Gi.getEntries(d,u).next(w=>{p=w,p.forEach((I,v)=>{v.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{l=w;const I=[];for(const v of o){const m=LO(v,l.get(v.key).overlayedDocument);m!=null&&I.push(new Us(v.key,m,Gw(m.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(w=>{h=w;const I=w.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,I)})}).then(()=>({batchId:h.batchId,changes:ab(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new rt(Se)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await la(s,r.changes),await Hu(s.remoteStore)}catch(r){const i=vf(r,"Failed to persist write");n.reject(i)}}async function Pb(t,e){const n=de(t);try{const s=await k1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ue(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ue(o.nc):r.removedDocuments.size>0&&(Ue(o.nc),o.nc=!1))}),await la(n,s,e)}catch(s){await ia(s)}}function dg(t,e,n){const s=de(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=de(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&_f(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hD(t,e,n){const s=de(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new rt(J.comparator);o=o.insert(i,ft.newNoDocument(i,he.min()));const a=ve().add(i),c=new $u(he.min(),new Map,new st(Se),o,a);await Pb(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),wf(s)}else await Lh(s.localStore,e,!1).then(()=>Mh(s,e,n)).catch(ia)}async function dD(t,e){const n=de(t),s=e.batch.batchId;try{const r=await A1(n.localStore,e);Mb(n,s,null),Lb(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await la(n,r)}catch(r){await ia(r)}}async function fD(t,e,n){const s=de(t);try{const r=await function(i,o){const a=de(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Ue(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Mb(s,e,n),Lb(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await la(s,r)}catch(r){await ia(r)}}function Lb(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Mb(t,e,n){const s=de(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Mh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Ub(t,s)})}function Ub(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Eb(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),wf(t))}function fg(t,e,n){for(const s of n)s instanceof Ob?(t.ac.addReference(s.key,e),pD(t,s)):s instanceof Db?(X("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Ub(t,s.key)):re()}function pD(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(X("SyncEngine","New document in limbo: "+n),t.oc.add(s),wf(t))}function wf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new J(Le.fromString(e)),s=t.fc.next();t.cc.set(s,new iD(n)),t.uc=t.uc.insert(n,s),Tb(t.remoteStore,new ir(Gn(rf(n.path)),s,2,Jd.at))}}async function la(t,e,n){const s=de(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=ff.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=de(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>O.forEach(c,h=>O.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>O.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!oa(l))throw l;X("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,y)}}}(s.localStore,i))}async function mD(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const s=await vb(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new F(C.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await la(n,s.ji)}}function gD(t,e){const n=de(t),s=n.cc.get(e);if(s&&s.nc)return ve().add(s.key);{let r=ve();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function yD(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hD.bind(null,e),e.sc.Wo=tD.bind(null,e.eventManager),e.sc.wc=nD.bind(null,e.eventManager),e}function vD(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fD.bind(null,e),e}class _D{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ju(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return S1(this.persistence,new I1,e.initialUser,this.yt)}yc(e){return new T1(df.Bs,this.yt)}gc(e){return new D1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>dg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mD.bind(null,this.syncEngine),await X1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new eD}createDatastore(e){const n=ju(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new U1(r));var r;return function(i,o,a,c){return new V1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>dg(this.syncEngine,a,0),o=ug.C()?new ug:new P1,new j1(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new oD(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=de(e);X("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ua(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t,e,n){if(!n)throw new F(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bD(t,e,n,s){if(e===!0&&s===!0)throw new F(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pg(t){if(!J.isDocumentKey(t))throw new F(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mg(t){if(J.isDocumentKey(t))throw new F(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ku(t);throw new F(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function TD(t,e){if(e<=0)throw new F(C.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Map;class yg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xx;switch(n.type){case"gapi":const s=n.client;return new nO(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gg.get(e);n&&(X("ComponentProvider","Removing Datastore"),gg.delete(e),n.terminate())}(this),Promise.resolve()}}function ED(t,e,n,s={}){var r;const i=(t=Ht(t,zu))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ch("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=dt.MOCK_USER;else{o=Av(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new dt(c)}t._authCredentials=new Jx(new Fw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class gn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gn(this.firestore,e,this._query)}}class Ts extends gn{constructor(e,n,s){super(e,n,rf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new J(e))}withConverter(e){return new Ts(this.firestore,e,this._path)}}function Bb(t,e,...n){if(t=Ve(t),Fb("collection","path",e),t instanceof zu){const s=Le.fromString(e,...n);return mg(s),new Ts(t,null,s)}{if(!(t instanceof Ct||t instanceof Ts))throw new F(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return mg(s),new Ts(t.firestore,null,s)}}function xc(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Bw.R()),Fb("doc","path",e),t instanceof zu){const s=Le.fromString(e,...n);return pg(s),new Ct(t,null,new J(s))}{if(!(t instanceof Ct||t instanceof Ts))throw new F(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return pg(s),new Ct(t.firestore,t instanceof Ts?t.converter:null,new J(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=dt.UNAUTHENTICATED,this.clientId=Bw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{X("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(X("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=vf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function CD(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await vb(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function SD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AD(t);X("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>lg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>lg(e.remoteStore,i)),t.onlineComponents=e}async function AD(t){return t.offlineComponents||(X("FirestoreClient","Using default OfflineComponentProvider"),await CD(t,new _D)),t.offlineComponents}async function $b(t){return t.onlineComponents||(X("FirestoreClient","Using default OnlineComponentProvider"),await SD(t,new wD)),t.onlineComponents}function kD(t){return $b(t).then(e=>e.syncEngine)}async function jb(t){const e=await $b(t),n=e.eventManager;return n.onListen=aD.bind(null,e.syncEngine),n.onUnlisten=uD.bind(null,e.syncEngine),n}function RD(t,e,n={}){const s=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Vb({next:h=>{i.enqueueAndForget(()=>Nb(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new F(C.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new F(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new xb(rf(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Rb(r,l)}(await jb(t),t.asyncQueue,e,n,s)),s.promise}function qb(t,e,n={}){const s=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Vb({next:h=>{i.enqueueAndForget(()=>Nb(r,l)),h.fromCache&&a.source==="server"?c.reject(new F(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new xb(o,u,{includeMetadataChanges:!0,Nu:!0});return Rb(r,l)}(await jb(t),t.asyncQueue,e,n,s)),s.promise}class ND{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new wb(this,"async_queue_retry"),this.Wc=()=>{const n=Dl();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Dl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Fn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!oa(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Wn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=yf.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&re()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Fs extends zu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new ND,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hb(this),this._firestoreClient.terminate()}}function xD(t,e){const n=typeof t=="object"?t:du(),s=typeof t=="string"?t:e||"(default)",r=Ds(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Cv("firestore");i&&ED(r,...i)}return r}function Wu(t){return t._firestoreClient||Hb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hb(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new dO(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ID(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(_t.fromBase64String(e))}catch(n){throw new F(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hi(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=/^__.*__$/;class DD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Us(e,this.data,this.fieldMask,n,this.fieldTransforms):new aa(e,this.data,n,this.fieldTransforms)}}class Kb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Ef{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Oc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(zb(this.sa)&&OD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class PD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ju(e)}da(e,n,s,r=!1){return new Ef({sa:e,methodName:n,fa:s,path:mt.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ha(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new PD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wb(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);If("Data must be an object, but it was:",o,s);const a=Zb(s,o);let c,u;if(i.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Uh(e,h,n);if(!o.contains(d))throw new F(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Yb(l,d)||l.push(d)}c=new Bt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new DD(new Rt(a),c,u)}class Zu extends bf{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zu}}function LD(t,e,n,s){const r=t.da(1,e,n);If("Data must be an object, but it was:",r,s);const i=[],o=Rt.empty();Er(s,(c,u)=>{const l=Cf(e,c,n);u=Ve(u);const h=r.ca(l);if(u instanceof Zu)i.push(l);else{const d=da(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Bt(i);return new Kb(o,a,r.fieldTransforms)}function MD(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Uh(e,s,n)],c=[r];if(i.length%2!=0)throw new F(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Uh(e,i[d])),c.push(i[d+1]);const u=[],l=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!Yb(u,a[d])){const p=a[d];let y=c[d];y=Ve(y);const w=o.ca(p);if(y instanceof Zu)u.push(p);else{const I=da(y,w);I!=null&&(u.push(p),l.set(p,I))}}const h=new Bt(u);return new Kb(l,h,o.fieldTransforms)}function Gb(t,e,n,s=!1){return da(n,t.da(s?4:3,e))}function da(t,e){if(Qb(t=Ve(t)))return If("Unsupported field value:",e,t),Zb(t,e);if(t instanceof bf)return function(n,s){if(!zb(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=da(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RO(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=nt.fromDate(n);return{timestampValue:Rc(s.yt,r)}}if(n instanceof nt){const r=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rc(s.yt,r)}}if(n instanceof Tf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hi)return{bytesValue:db(s.yt,n._byteString)};if(n instanceof Ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:uf(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ku(n)}`)}(t,e)}function Zb(t,e){const n={};return Vw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(s,r)=>{const i=da(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Qb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Tf||t instanceof hi||t instanceof Ct||t instanceof bf)}function If(t,e,n){if(!Qb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ku(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Uh(t,e,n){if((e=Ve(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Cf(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const UD=new RegExp("[~\\*/\\[\\]]");function Cf(t,e,n){if(e.search(UD)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(C.INVALID_ARGUMENT,a+t+c)}function Yb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Af("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FD extends Sf{data(){return super.data()}}function Af(t,e){return typeof e=="string"?Cf(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{}class fa extends kf{}function VD(t,e,...n){let s=[];e instanceof kf&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Nf).length,o=r.filter(a=>a instanceof Rf).length;if(i>1||i>0&&o>0)throw new F(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Rf extends fa{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Rf(e,n,s)}_apply(e){const n=this._parse(e);return Jb(e._query,n),new gn(e.firestore,e.converter,Nh(e._query,n))}_parse(e){const n=ha(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_g(l,u);const d=[];for(const p of l)d.push(vg(a,r,p));h={arrayValue:{values:d}}}else h=vg(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_g(l,u),h=Gb(o,i,l,u==="in"||u==="not-in");return et.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Nf extends kf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Nf(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Jb(i,a),i=Nh(i,a)}(e._query,n),new gn(e.firestore,e.converter,Nh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xf extends fa{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xf(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new F(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Hr(r,i);return function(a,c){if(of(a)===null){const u=Mu(a);u!==null&&eT(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new gn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ms(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function $D(t,e="asc"){const n=e,s=Af("orderBy",t);return xf._create(s,n)}class Of extends fa{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Of(e,n,s)}_apply(e){return new gn(e.firestore,e.converter,Sc(e._query,this._limit,this._limitType))}}function jD(t){return TD("limit",t),Of._create("limit",t,"F")}class Df extends fa{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Df(e,n,s)}_apply(e){const n=Xb(e,this.type,this._docOrFields,this._inclusive);return new gn(e.firestore,e.converter,function(s,r){return new Ms(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function qD(...t){return Df._create("startAt",t,!0)}class Pf extends fa{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Pf(e,n,s)}_apply(e){const n=Xb(e,this.type,this._docOrFields,this._inclusive);return new gn(e.firestore,e.converter,function(s,r){return new Ms(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function HD(...t){return Pf._create("endAt",t,!0)}function Xb(t,e,n,s){if(n[0]=Ve(n[0]),n[0]instanceof Sf)return function(r,i,o,a,c){if(!a)throw new F(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of rr(r))if(l.field.isKeyField())u.push(Cc(i,a.key));else{const h=a.data.field(l.field);if(ef(h))throw new F(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new F(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new ci(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=ha(t.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new F(C.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const y=u[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new F(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!af(i)&&y.indexOf("/")!==-1)throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const w=i.path.child(Le.fromString(y));if(!J.isDocumentKey(w))throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const I=new J(w);d.push(Cc(o,I))}else{const w=Gb(a,c,y);d.push(w)}}return new ci(d,l)}(t._query,t.firestore._databaseId,r,e,n,s)}}function vg(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new F(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!af(e)&&n.indexOf("/")!==-1)throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Le.fromString(n));if(!J.isDocumentKey(s))throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Cc(t,new J(s))}if(n instanceof Ct)return Cc(t,n._key);throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ku(n)}.`)}function _g(t,e){if(!Array.isArray(t)||t.length===0)throw new F(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(C.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Jb(t,e){if(e.isInequality()){const s=Mu(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=of(t);i!==null&&eT(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function eT(t,e,n){if(!n.isEqual(e))throw new F(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class KD{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){const s={};return Er(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Tf(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=$w(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=ks(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Le.fromString(e);Ue(yb(s));const r=new To(s.get(1),s.get(3)),i=new J(s.popFirst(5));return r.isEqual(n)||Wn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nT extends Sf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Af("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Za extends nT{data(e={}){return super.data(e)}}class sT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Vi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Za(this._firestore,this._userDataWriter,s.key,s,new Vi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Za(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Za(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:zD(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){t=Ht(t,Ct);const e=Ht(t.firestore,Fs);return RD(Wu(e),t._key).then(n=>ZD(e,t,n))}class Lf extends KD{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function sF(t){t=Ht(t,gn);const e=Ht(t.firestore,Fs),n=Wu(e),s=new Lf(e);return BD(t._query),qb(n,t._query).then(r=>new sT(e,s,t,r))}function rF(t){t=Ht(t,gn);const e=Ht(t.firestore,Fs),n=Wu(e),s=new Lf(e);return qb(n,t._query,{source:"server"}).then(r=>new sT(e,s,t,r))}function WD(t,e,n){t=Ht(t,Ct);const s=Ht(t.firestore,Fs),r=tT(t.converter,e,n);return Qu(s,[Wb(ha(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Yt.none())])}function GD(t,e,n,...s){t=Ht(t,Ct);const r=Ht(t.firestore,Fs),i=ha(r);let o;return o=typeof(e=Ve(e))=="string"||e instanceof Gu?MD(i,"updateDoc",t._key,e,n,s):LD(i,"updateDoc",t._key,e),Qu(r,[o.toMutation(t._key,Yt.exists(!0))])}function iF(t){return Qu(Ht(t.firestore,Fs),[new cf(t._key,Yt.none())])}function oF(t,e){const n=Ht(t.firestore,Fs),s=xc(t),r=tT(t.converter,e);return Qu(n,[Wb(ha(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Yt.exists(!1))]).then(()=>s)}function Qu(t,e){return function(n,s){const r=new Fn;return n.asyncQueue.enqueueAndForget(async()=>lD(await kD(n),s,r)),r.promise}(Wu(t),e)}function ZD(t,e,n){const s=n.docs.get(e._key),r=new Lf(t);return new nT(t,r,e._key,s,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ii=n})(bi),fn(new Xt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Fs(new eO(n.getProvider("auth-internal")),new rO(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new To(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),xt(jm,"3.8.3",t),xt(jm,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebasestorage.googleapis.com",iT="storageBucket",QD=2*60*1e3,YD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends en{constructor(e,n,s=0){super(Pl(e),`Firebase Storage: ${n} (${Pl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Pl(t){return"storage/"+t}function Mf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ge(We.UNKNOWN,t)}function XD(t){return new Ge(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function JD(t){return new Ge(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(We.UNAUTHENTICATED,t)}function tP(){return new Ge(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nP(t){return new Ge(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sP(){return new Ge(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rP(){return new Ge(We.CANCELED,"User canceled the upload/download.")}function iP(t){return new Ge(We.INVALID_URL,"Invalid URL '"+t+"'.")}function oP(t){return new Ge(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function aP(){return new Ge(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+iT+"' property when initializing the app?")}function cP(){return new Ge(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uP(){return new Ge(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lP(t){return new Ge(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fh(t){return new Ge(We.INVALID_ARGUMENT,t)}function oT(){return new Ge(We.APP_DELETED,"The Firebase app was deleted.")}function hP(t){return new Ge(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function no(t,e){return new Ge(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Di(t){throw new Ge(We.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(s.path==="")return s;throw oP(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(b){b.path_=decodeURIComponent(b.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),y={bucket:1,path:3},w=n===rT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",v=new RegExp(`^https?://${w}/${r}/${I}`,"i"),_=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let b=0;b<_.length;b++){const k=_[b],D=k.regex.exec(e);if(D){const N=D[k.indices.bucket];let E=D[k.indices.path];E||(E=""),s=new Vt(N,E),k.postModify(s);break}}if(s==null)throw iP(e);return s}}class dP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){r=setTimeout(()=>{r=null,t(p,c())},I)}function d(){i&&clearTimeout(i)}function p(I,...v){if(u){d();return}if(I){d(),l.call(null,I,...v);return}if(c()||o){d(),l.call(null,I,...v);return}s<64&&(s*=2);let _;a===1?(a=2,_=0):_=(s+Math.random())*1e3,h(_)}let y=!1;function w(I){y||(y=!0,d(),!u&&(r!==null?(I||(a=2),clearTimeout(r),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function pP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return t!==void 0}function gP(t){return typeof t=="object"&&!Array.isArray(t)}function Uf(t){return typeof t=="string"||t instanceof String}function bg(t){return Ff()&&t instanceof Blob}function Ff(){return typeof Blob<"u"&&!gS()}function Tg(t,e,n,s){if(s<e)throw Fh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Fh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function aT(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(or||(or={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ma(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===or.NO_ERROR,c=i.getStatus();if(!a||yP(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===or.ABORT;s(!1,new Ma(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ma(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());mP(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Mf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?oT():rP();o(c)}else{const c=sP();o(c)}};this.canceled_?n(!1,new Ma(!1,null,!0)):this.backoffId_=fP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ma{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function _P(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function EP(t,e,n,s,r,i,o=!0){const a=aT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return bP(u,e),_P(u,n),wP(u,i),TP(u,s),new vP(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function CP(...t){const e=IP();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Ff())return new Blob(t);throw new Ge(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){if(typeof atob>"u")throw lP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ll{constructor(e,n){this.data=e,this.contentType=n||null}}function kP(t,e){switch(t){case Tn.RAW:return new Ll(cT(e));case Tn.BASE64:case Tn.BASE64URL:return new Ll(uT(t,e));case Tn.DATA_URL:return new Ll(NP(e),xP(e))}throw Mf()}function cT(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function RP(t){let e;try{e=decodeURIComponent(t)}catch{throw no(Tn.DATA_URL,"Malformed data URL.")}return cT(e)}function uT(t,e){switch(t){case Tn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw no(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Tn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw no(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=AP(e)}catch(r){throw r.message.includes("polyfill")?r:no(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class lT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw no(Tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=OP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function NP(t){const e=new lT(t);return e.base64?uT(Tn.BASE64,e.rest):RP(e.rest)}function xP(t){return new lT(t).contentType}function OP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){let s=0,r="";bg(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(bg(this.data_)){const s=this.data_,r=SP(s,e,n);return r===null?null:new fs(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new fs(s,!0)}}static getBlob(...e){if(Ff()){const n=e.map(s=>s instanceof fs?s.data_:s);return new fs(CP.apply(null,n))}else{const n=e.map(o=>Uf(o)?kP(Tn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new fs(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t){let e;try{e=JSON.parse(t)}catch{return null}return gP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function PP(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function dT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e){return e}class bt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||LP}}let Ua=null;function MP(t){return!Uf(t)||t.length<2?t:dT(t)}function fT(){if(Ua)return Ua;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(i,o){return MP(o)}const n=new bt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new bt("size");return r.xform=s,t.push(r),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),Ua=t,Ua}function UP(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Vt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function FP(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return UP(s,t),s}function pT(t,e,n){const s=hT(e);return s===null?null:FP(t,s,n)}function BP(t,e,n,s){const r=hT(e);if(r===null||!Uf(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Bf(d,n,s),y=aT({alt:"media",token:u});return p+y})[0]}function VP(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class mT{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){if(!t)throw Mf()}function $P(t,e){function n(s,r){const i=pT(t,r,e);return gT(i!==null),i}return n}function jP(t,e){function n(s,r){const i=pT(t,r,e);return gT(i!==null),BP(i,r,t.host,t._protocol)}return n}function yT(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=tP():r=eP():n.getStatus()===402?r=JD(t.bucket):n.getStatus()===403?r=nP(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function qP(t){const e=yT(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=XD(t.path)),i.serverResponse=r.serverResponse,i}return n}function HP(t,e,n){const s=e.fullServerUrl(),r=Bf(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new mT(r,i,jP(t,n),o);return a.errorHandler=qP(e),a}function KP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zP(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=KP(null,e)),s}function WP(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let b=0;b<2;b++)_=_+Math.random().toString().slice(2);return _}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=zP(e,s,r),l=VP(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=fs.getBlob(h,s,d);if(p===null)throw cP();const y={name:u.fullPath},w=Bf(i,t.host,t._protocol),I="POST",v=t.maxUploadRetryTime,m=new mT(w,I,$P(t,n),v);return m.urlParams=y,m.headers=o,m.body=p.uploadData(),m.errorHandler=yT(e),m}class GP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Di("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Di("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Di("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Di("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Di("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ZP extends GP{initXhr(){this.xhr_.responseType="text"}}function vT(){return new ZP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gr(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dT(this._location.path)}get storage(){return this._service}get parent(){const e=DP(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new gr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hP(e)}}function QP(t,e,n){t._throwIfRoot("uploadBytes");const s=WP(t.storage,t._location,fT(),new fs(e,!0),n);return t.storage.makeRequestWithTokens(s,vT).then(r=>({metadata:r,ref:t}))}function YP(t){t._throwIfRoot("getDownloadURL");const e=HP(t.storage,t._location,fT());return t.storage.makeRequestWithTokens(e,vT).then(n=>{if(n===null)throw uP();return n})}function XP(t,e){const n=PP(t._location.path,e),s=new Vt(t._location.bucket,n);return new gr(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){return/^[A-Za-z]+:\/\//.test(t)}function eL(t,e){return new gr(t,e)}function _T(t,e){if(t instanceof Vf){const n=t;if(n._bucket==null)throw aP();const s=new gr(n,n._bucket);return e!=null?_T(s,e):s}else return e!==void 0?XP(t,e):t}function tL(t,e){if(e&&JP(e)){if(t instanceof Vf)return eL(t,e);throw Fh("To use ref(service, url), the first argument must be a Storage instance.")}else return _T(t,e)}function Eg(t,e){const n=e==null?void 0:e[iT];return n==null?null:Vt.makeFromBucketSpec(n,t)}function nL(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Av(r,t.app.options.projectId))}class Vf{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=rT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QD,this._maxUploadRetryTime=YD,this._requests=new Set,r!=null?this._bucket=Vt.makeFromBucketSpec(r,this._host):this._bucket=Eg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=Eg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new dP(oT());{const o=EP(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ig="@firebase/storage",Cg="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="storage";function aF(t,e,n){return t=Ve(t),QP(t,e,n)}function cF(t){return t=Ve(t),YP(t)}function sL(t,e){return t=Ve(t),tL(t,e)}function rL(t=du(),e){t=Ve(t);const s=Ds(t,wT).getImmediate({identifier:e}),r=Cv("storage");return r&&iL(s,...r),s}function iL(t,e,n,s={}){nL(t,e,n,s)}function oL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Vf(n,s,r,e,bi)}function aL(){fn(new Xt(wT,oL,"PUBLIC").setMultipleInstances(!0)),xt(Ig,Cg,""),xt(Ig,Cg,"esm2017")}aL();const cL={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d",measurementId:"G-0EWRT6BT1Y"},Yu=Pv(cL);zN(Yu);const Ao=xD(Yu),Gt=OR(Yu),Xu="profiles",Sg=()=>{if(!Gt.currentUser)throw new Error("Auth required");return xc(Ao,Xu,Gt.currentUser.uid)},uL=t=>Bb(Ao,Xu,t,"timeline"),uF=()=>{if(!Gt.currentUser)throw new Error("Auth required");return uL(Gt.currentUser.uid)},lF=t=>sL(rL(Yu),t),hF=t=>VD(Bb(Ao,Xu),$D("userUri"),jD(5),qD(t),HD(`${t}`)),lL=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],Bh=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,Vh=t=>t[Bh(0,t.length-1)],Ag=t=>{const e=[];for(let n=0;n<t;n++)e.push(Vh(lL));return e.join(" ")},hL=t=>{const e=t.slice(1);return e?`#${(Number(`0x1${e}`)^16777215).toString(16).substr(1).toUpperCase()}`:""},dL=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}],fL="/assets/undraw_online_resume_re_ru7s-458e1bd5.svg",pL={Instagram:{link:""},Facebook:{link:""},YouTube:{link:""},Spotify:{link:""},Twitter:{link:""},GitHub:{link:""},LinkedIn:{link:""},TikTok:{link:""}},mL=()=>{const{author:t,quotes:e}=Vh(dL);return`"${Vh(e)}"    - ${t}`},gL=t=>{if(!t)throw new Error("Unauthorized profile creation attempt");return{userUid:t.uid,displayName:(t==null?void 0:t.displayName)??"",coverImg:fL,photoURL:(t==null?void 0:t.photoURL)??"",bgColor:"#FFE5E5",fontColor:"#000000",fontFamily:"merienda",shortBio:`${Ag(Bh(1,3))} What/Where ${Ag(Bh(1,3))}`,longBio:mL(),socialLinks:pL}};var Ce;(function(t){t.assertEqual=r=>r;function e(r){}t.assertIs=e;function n(r){throw new Error}t.assertNever=n,t.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},t.getValidEnumValues=r=>{const i=t.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of i)o[a]=r[a];return t.objectValues(o)},t.objectValues=r=>t.objectKeys(r).map(function(i){return r[i]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},t.find=(r,i)=>{for(const o of r)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=s,t.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(Ce||(Ce={}));const H=Ce.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ps=t=>{switch(typeof t){case"undefined":return H.undefined;case"string":return H.string;case"number":return isNaN(t)?H.nan:H.number;case"boolean":return H.boolean;case"function":return H.function;case"bigint":return H.bigint;case"symbol":return H.symbol;case"object":return Array.isArray(t)?H.array:t===null?H.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?H.promise:typeof Map<"u"&&t instanceof Map?H.map:typeof Set<"u"&&t instanceof Set?H.set:typeof Date<"u"&&t instanceof Date?H.date:H.object;default:return H.unknown}},M=Ce.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),yL=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Bn extends Error{constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(n(o));else{let a=s,c=0;for(;c<o.path.length;){const u=o.path[c];c===o.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(o))):a[u]=a[u]||{_errors:[]},a=a[u],c++}}};return r(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ce.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},s=[];for(const r of this.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(e(r))):s.push(e(r));return{formErrors:s,fieldErrors:n}}get formErrors(){return this.flatten()}}Bn.create=t=>new Bn(t);const ko=(t,e)=>{let n;switch(t.code){case M.invalid_type:t.received===H.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case M.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ce.jsonStringifyReplacer)}`;break;case M.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ce.joinValues(t.keys,", ")}`;break;case M.invalid_union:n="Invalid input";break;case M.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ce.joinValues(t.options)}`;break;case M.invalid_enum_value:n=`Invalid enum value. Expected ${Ce.joinValues(t.options)}, received '${t.received}'`;break;case M.invalid_arguments:n="Invalid function arguments";break;case M.invalid_return_type:n="Invalid function return type";break;case M.invalid_date:n="Invalid date";break;case M.invalid_string:typeof t.validation=="object"?"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ce.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case M.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(t.minimum)}`:n="Invalid input";break;case M.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(t.maximum)}`:n="Invalid input";break;case M.custom:n="Invalid input";break;case M.invalid_intersection_types:n="Intersection results could not be merged";break;case M.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case M.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ce.assertNever(t)}return{message:n}};let bT=ko;function vL(t){bT=t}function Dc(){return bT}const Pc=t=>{const{data:e,path:n,errorMaps:s,issueData:r}=t,i=[...n,...r.path||[]],o={...r,path:i};let a="";const c=s.filter(u=>!!u).slice().reverse();for(const u of c)a=u(o,{data:e,defaultError:a}).message;return{...r,path:i,message:r.message||a}},_L=[];function Z(t,e){const n=Pc({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Dc(),ko].filter(s=>!!s)});t.common.issues.push(n)}class St{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const s=[];for(const r of n){if(r.status==="aborted")return le;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,n){const s=[];for(const r of n)s.push({key:await r.key,value:await r.value});return St.mergeObjectSync(e,s)}static mergeObjectSync(e,n){const s={};for(const r of n){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return le;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const le=Object.freeze({status:"aborted"}),TT=t=>({status:"dirty",value:t}),wt=t=>({status:"valid",value:t}),$h=t=>t.status==="aborted",jh=t=>t.status==="dirty",Lc=t=>t.status==="valid",Mc=t=>typeof Promise<"u"&&t instanceof Promise;var ge;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(ge||(ge={}));class Rn{constructor(e,n,s,r){this.parent=e,this.data=n,this._path=s,this._key=r}get path(){return this._path.concat(this._key)}}const kg=(t,e)=>{if(Lc(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,error:new Bn(t.common.issues)}};function fe(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:s,description:r}=t;if(e&&(n||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:s??a.defaultError}:{message:n??a.defaultError},description:r}}class pe{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return ps(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:ps(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new St,ctx:{common:e.parent.common,data:e.data,parsedType:ps(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Mc(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const s=this.safeParse(e,n);if(s.success)return s.data;throw s.error}safeParse(e,n){var s;const r={common:{issues:[],async:(s=n==null?void 0:n.async)!==null&&s!==void 0?s:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ps(e)},i=this._parseSync({data:e,path:r.path,parent:r});return kg(r,i)}async parseAsync(e,n){const s=await this.safeParseAsync(e,n);if(s.success)return s.data;throw s.error}async safeParseAsync(e,n){const s={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ps(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(Mc(r)?r:Promise.resolve(r));return kg(s,i)}refine(e,n){const s=r=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(r):n;return this._refinement((r,i)=>{const o=e(r),a=()=>i.addIssue({code:M.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof n=="function"?n(s,r):n),!1))}_refinement(e){return new mn({schema:this,typeName:se.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Vn.create(this,this._def)}nullable(){return _r.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return hn.create(this,this._def)}promise(){return fi.create(this,this._def)}or(e){return Do.create([this,e],this._def)}and(e){return Po.create(this,e,this._def)}transform(e){return new mn({...fe(this._def),schema:this,typeName:se.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Bo({...fe(this._def),innerType:this,defaultValue:n,typeName:se.ZodDefault})}brand(){return new IT({typeName:se.ZodBranded,type:this,...fe(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new $c({...fe(this._def),innerType:this,catchValue:n,typeName:se.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return pa.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const wL=/^c[^\s-]{8,}$/i,bL=/^[a-z][a-z0-9]*$/,TL=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,EL=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/,IL=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class Qn extends pe{constructor(){super(...arguments),this._regex=(e,n,s)=>this.refinement(r=>e.test(r),{validation:n,code:M.invalid_string,...ge.errToObj(s)}),this.nonempty=e=>this.min(1,ge.errToObj(e)),this.trim=()=>new Qn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==H.string){const i=this._getOrReturnCtx(e);return Z(i,{code:M.invalid_type,expected:H.string,received:i.parsedType}),le}const s=new St;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),Z(r,{code:M.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),Z(r,{code:M.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?Z(r,{code:M.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&Z(r,{code:M.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")EL.test(e.data)||(r=this._getOrReturnCtx(e,r),Z(r,{validation:"email",code:M.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")TL.test(e.data)||(r=this._getOrReturnCtx(e,r),Z(r,{validation:"uuid",code:M.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")wL.test(e.data)||(r=this._getOrReturnCtx(e,r),Z(r,{validation:"cuid",code:M.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")bL.test(e.data)||(r=this._getOrReturnCtx(e,r),Z(r,{validation:"cuid2",code:M.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),Z(r,{validation:"url",code:M.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),Z(r,{validation:"regex",code:M.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),Z(r,{code:M.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),Z(r,{code:M.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?IL(i).test(e.data)||(r=this._getOrReturnCtx(e,r),Z(r,{code:M.invalid_string,validation:"datetime",message:i.message}),s.dirty()):Ce.assertNever(i);return{status:s.value,value:e.data}}_addCheck(e){return new Qn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ge.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ge.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ge.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ge.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ge.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...ge.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...ge.errToObj(n)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...ge.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...ge.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...ge.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...ge.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...ge.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Qn.create=t=>{var e;return new Qn({checks:[],typeName:se.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...fe(t)})};function CL(t,e){const n=(t.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=n>s?n:s,i=parseInt(t.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return i%o/Math.pow(10,r)}class Ns extends pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==H.number){const i=this._getOrReturnCtx(e);return Z(i,{code:M.invalid_type,expected:H.number,received:i.parsedType}),le}let s;const r=new St;for(const i of this._def.checks)i.kind==="int"?Ce.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),Z(s,{code:M.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),Z(s,{code:M.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),Z(s,{code:M.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?CL(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),Z(s,{code:M.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),Z(s,{code:M.not_finite,message:i.message}),r.dirty()):Ce.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ge.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ge.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ge.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ge.toString(n))}setLimit(e,n,s,r){return new Ns({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:ge.toString(r)}]})}_addCheck(e){return new Ns({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ge.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ge.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ge.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ge.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ge.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ge.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:ge.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ce.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(n===null||s.value>n)&&(n=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Ns.create=t=>new Ns({checks:[],typeName:se.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...fe(t)});class Ro extends pe{_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==H.bigint){const s=this._getOrReturnCtx(e);return Z(s,{code:M.invalid_type,expected:H.bigint,received:s.parsedType}),le}return wt(e.data)}}Ro.create=t=>{var e;return new Ro({typeName:se.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...fe(t)})};class No extends pe{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==H.boolean){const s=this._getOrReturnCtx(e);return Z(s,{code:M.invalid_type,expected:H.boolean,received:s.parsedType}),le}return wt(e.data)}}No.create=t=>new No({typeName:se.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...fe(t)});class yr extends pe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==H.date){const i=this._getOrReturnCtx(e);return Z(i,{code:M.invalid_type,expected:H.date,received:i.parsedType}),le}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return Z(i,{code:M.invalid_date}),le}const s=new St;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),Z(r,{code:M.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),Z(r,{code:M.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):Ce.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new yr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:ge.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:ge.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}yr.create=t=>new yr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:se.ZodDate,...fe(t)});class Uc extends pe{_parse(e){if(this._getType(e)!==H.symbol){const s=this._getOrReturnCtx(e);return Z(s,{code:M.invalid_type,expected:H.symbol,received:s.parsedType}),le}return wt(e.data)}}Uc.create=t=>new Uc({typeName:se.ZodSymbol,...fe(t)});class xo extends pe{_parse(e){if(this._getType(e)!==H.undefined){const s=this._getOrReturnCtx(e);return Z(s,{code:M.invalid_type,expected:H.undefined,received:s.parsedType}),le}return wt(e.data)}}xo.create=t=>new xo({typeName:se.ZodUndefined,...fe(t)});class Oo extends pe{_parse(e){if(this._getType(e)!==H.null){const s=this._getOrReturnCtx(e);return Z(s,{code:M.invalid_type,expected:H.null,received:s.parsedType}),le}return wt(e.data)}}Oo.create=t=>new Oo({typeName:se.ZodNull,...fe(t)});class di extends pe{constructor(){super(...arguments),this._any=!0}_parse(e){return wt(e.data)}}di.create=t=>new di({typeName:se.ZodAny,...fe(t)});class ar extends pe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return wt(e.data)}}ar.create=t=>new ar({typeName:se.ZodUnknown,...fe(t)});class Yn extends pe{_parse(e){const n=this._getOrReturnCtx(e);return Z(n,{code:M.invalid_type,expected:H.never,received:n.parsedType}),le}}Yn.create=t=>new Yn({typeName:se.ZodNever,...fe(t)});class Fc extends pe{_parse(e){if(this._getType(e)!==H.undefined){const s=this._getOrReturnCtx(e);return Z(s,{code:M.invalid_type,expected:H.void,received:s.parsedType}),le}return wt(e.data)}}Fc.create=t=>new Fc({typeName:se.ZodVoid,...fe(t)});class hn extends pe{_parse(e){const{ctx:n,status:s}=this._processInputParams(e),r=this._def;if(n.parsedType!==H.array)return Z(n,{code:M.invalid_type,expected:H.array,received:n.parsedType}),le;if(r.exactLength!==null){const o=n.data.length>r.exactLength.value,a=n.data.length<r.exactLength.value;(o||a)&&(Z(n,{code:o?M.too_big:M.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&n.data.length<r.minLength.value&&(Z(n,{code:M.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&n.data.length>r.maxLength.value&&(Z(n,{code:M.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new Rn(n,o,n.path,a)))).then(o=>St.mergeArray(s,o));const i=[...n.data].map((o,a)=>r.type._parseSync(new Rn(n,o,n.path,a)));return St.mergeArray(s,i)}get element(){return this._def.type}min(e,n){return new hn({...this._def,minLength:{value:e,message:ge.toString(n)}})}max(e,n){return new hn({...this._def,maxLength:{value:e,message:ge.toString(n)}})}length(e,n){return new hn({...this._def,exactLength:{value:e,message:ge.toString(n)}})}nonempty(e){return this.min(1,e)}}hn.create=(t,e)=>new hn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:se.ZodArray,...fe(e)});var Bc;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Bc||(Bc={}));function Or(t){if(t instanceof je){const e={};for(const n in t.shape){const s=t.shape[n];e[n]=Vn.create(Or(s))}return new je({...t._def,shape:()=>e})}else return t instanceof hn?hn.create(Or(t.element)):t instanceof Vn?Vn.create(Or(t.unwrap())):t instanceof _r?_r.create(Or(t.unwrap())):t instanceof Nn?Nn.create(t.items.map(e=>Or(e))):t}class je extends pe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ce.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==H.object){const u=this._getOrReturnCtx(e);return Z(u,{code:M.invalid_type,expected:H.object,received:u.parsedType}),le}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Yn&&this._def.unknownKeys==="strip"))for(const u in r.data)o.includes(u)||a.push(u);const c=[];for(const u of o){const l=i[u],h=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new Rn(r,h,r.path,u)),alwaysSet:u in r.data})}if(this._def.catchall instanceof Yn){const u=this._def.unknownKeys;if(u==="passthrough")for(const l of a)c.push({key:{status:"valid",value:l},value:{status:"valid",value:r.data[l]}});else if(u==="strict")a.length>0&&(Z(r,{code:M.unrecognized_keys,keys:a}),s.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const l of a){const h=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new Rn(r,h,r.path,l)),alwaysSet:l in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const u=[];for(const l of c){const h=await l.key;u.push({key:h,value:await l.value,alwaysSet:l.alwaysSet})}return u}).then(u=>St.mergeObjectSync(s,u)):St.mergeObjectSync(s,c)}get shape(){return this._def.shape()}strict(e){return ge.errToObj,new je({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,s)=>{var r,i,o,a;const c=(o=(i=(r=this._def).errorMap)===null||i===void 0?void 0:i.call(r,n,s).message)!==null&&o!==void 0?o:s.defaultError;return n.code==="unrecognized_keys"?{message:(a=ge.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new je({...this._def,unknownKeys:"strip"})}passthrough(){return new je({...this._def,unknownKeys:"passthrough"})}extend(e){return new je({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new je({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>Bc.mergeShapes(this._def.shape(),e._def.shape()),typeName:se.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new je({...this._def,catchall:e})}pick(e){const n={};return Ce.objectKeys(e).forEach(s=>{e[s]&&this.shape[s]&&(n[s]=this.shape[s])}),new je({...this._def,shape:()=>n})}omit(e){const n={};return Ce.objectKeys(this.shape).forEach(s=>{e[s]||(n[s]=this.shape[s])}),new je({...this._def,shape:()=>n})}deepPartial(){return Or(this)}partial(e){const n={};return Ce.objectKeys(this.shape).forEach(s=>{const r=this.shape[s];e&&!e[s]?n[s]=r:n[s]=r.optional()}),new je({...this._def,shape:()=>n})}required(e){const n={};return Ce.objectKeys(this.shape).forEach(s=>{if(e&&!e[s])n[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof Vn;)i=i._def.innerType;n[s]=i}}),new je({...this._def,shape:()=>n})}keyof(){return ET(Ce.objectKeys(this.shape))}}je.create=(t,e)=>new je({shape:()=>t,unknownKeys:"strip",catchall:Yn.create(),typeName:se.ZodObject,...fe(e)});je.strictCreate=(t,e)=>new je({shape:()=>t,unknownKeys:"strict",catchall:Yn.create(),typeName:se.ZodObject,...fe(e)});je.lazycreate=(t,e)=>new je({shape:t,unknownKeys:"strip",catchall:Yn.create(),typeName:se.ZodObject,...fe(e)});class Do extends pe{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.options;function r(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new Bn(a.ctx.common.issues));return Z(n,{code:M.invalid_union,unionErrors:o}),le}if(n.common.async)return Promise.all(s.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const c of s){const u={...n,common:{...n.common,issues:[]},parent:null},l=c._parseSync({data:n.data,path:n.path,parent:u});if(l.status==="valid")return l;l.status==="dirty"&&!i&&(i={result:l,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new Bn(c));return Z(n,{code:M.invalid_union,unionErrors:a}),le}}get options(){return this._def.options}}Do.create=(t,e)=>new Do({options:t,typeName:se.ZodUnion,...fe(e)});const Qa=t=>t instanceof Mo?Qa(t.schema):t instanceof mn?Qa(t.innerType()):t instanceof Uo?[t.value]:t instanceof xs?t.options:t instanceof Fo?Object.keys(t.enum):t instanceof Bo?Qa(t._def.innerType):t instanceof xo?[void 0]:t instanceof Oo?[null]:null;class Ju extends pe{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.object)return Z(n,{code:M.invalid_type,expected:H.object,received:n.parsedType}),le;const s=this.discriminator,r=n.data[s],i=this.optionsMap.get(r);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(Z(n,{code:M.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),le)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,s){const r=new Map;for(const i of n){const o=Qa(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,i)}}return new Ju({typeName:se.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:r,...fe(s)})}}function qh(t,e){const n=ps(t),s=ps(e);if(t===e)return{valid:!0,data:t};if(n===H.object&&s===H.object){const r=Ce.objectKeys(e),i=Ce.objectKeys(t).filter(a=>r.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=qh(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===H.array&&s===H.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=qh(o,a);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return n===H.date&&s===H.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Po extends pe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=(i,o)=>{if($h(i)||$h(o))return le;const a=qh(i.value,o.value);return a.valid?((jh(i)||jh(o))&&n.dirty(),{status:n.value,value:a.data}):(Z(s,{code:M.invalid_intersection_types}),le)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}Po.create=(t,e,n)=>new Po({left:t,right:e,typeName:se.ZodIntersection,...fe(n)});class Nn extends pe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==H.array)return Z(s,{code:M.invalid_type,expected:H.array,received:s.parsedType}),le;if(s.data.length<this._def.items.length)return Z(s,{code:M.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),le;!this._def.rest&&s.data.length>this._def.items.length&&(Z(s,{code:M.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...s.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new Rn(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>St.mergeArray(n,o)):St.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new Nn({...this._def,rest:e})}}Nn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Nn({items:t,typeName:se.ZodTuple,rest:null,...fe(e)})};class Lo extends pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==H.object)return Z(s,{code:M.invalid_type,expected:H.object,received:s.parsedType}),le;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in s.data)r.push({key:i._parse(new Rn(s,a,s.path,a)),value:o._parse(new Rn(s,s.data[a],s.path,a))});return s.common.async?St.mergeObjectAsync(n,r):St.mergeObjectSync(n,r)}get element(){return this._def.valueType}static create(e,n,s){return n instanceof pe?new Lo({keyType:e,valueType:n,typeName:se.ZodRecord,...fe(s)}):new Lo({keyType:Qn.create(),valueType:e,typeName:se.ZodRecord,...fe(n)})}}class Vc extends pe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==H.map)return Z(s,{code:M.invalid_type,expected:H.map,received:s.parsedType}),le;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,c],u)=>({key:r._parse(new Rn(s,a,s.path,[u,"key"])),value:i._parse(new Rn(s,c,s.path,[u,"value"]))}));if(s.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const u=await c.key,l=await c.value;if(u.status==="aborted"||l.status==="aborted")return le;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const u=c.key,l=c.value;if(u.status==="aborted"||l.status==="aborted")return le;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}}}}Vc.create=(t,e,n)=>new Vc({valueType:e,keyType:t,typeName:se.ZodMap,...fe(n)});class vr extends pe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==H.set)return Z(s,{code:M.invalid_type,expected:H.set,received:s.parsedType}),le;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(Z(s,{code:M.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),n.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(Z(s,{code:M.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const u=new Set;for(const l of c){if(l.status==="aborted")return le;l.status==="dirty"&&n.dirty(),u.add(l.value)}return{status:n.value,value:u}}const a=[...s.data.values()].map((c,u)=>i._parse(new Rn(s,c,s.path,u)));return s.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new vr({...this._def,minSize:{value:e,message:ge.toString(n)}})}max(e,n){return new vr({...this._def,maxSize:{value:e,message:ge.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}vr.create=(t,e)=>new vr({valueType:t,minSize:null,maxSize:null,typeName:se.ZodSet,...fe(e)});class zr extends pe{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.function)return Z(n,{code:M.invalid_type,expected:H.function,received:n.parsedType}),le;function s(a,c){return Pc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Dc(),ko].filter(u=>!!u),issueData:{code:M.invalid_arguments,argumentsError:c}})}function r(a,c){return Pc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Dc(),ko].filter(u=>!!u),issueData:{code:M.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof fi?wt(async(...a)=>{const c=new Bn([]),u=await this._def.args.parseAsync(a,i).catch(d=>{throw c.addIssue(s(a,d)),c}),l=await o(...u);return await this._def.returns._def.type.parseAsync(l,i).catch(d=>{throw c.addIssue(r(l,d)),c})}):wt((...a)=>{const c=this._def.args.safeParse(a,i);if(!c.success)throw new Bn([s(a,c.error)]);const u=o(...c.data),l=this._def.returns.safeParse(u,i);if(!l.success)throw new Bn([r(u,l.error)]);return l.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new zr({...this._def,args:Nn.create(e).rest(ar.create())})}returns(e){return new zr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,s){return new zr({args:e||Nn.create([]).rest(ar.create()),returns:n||ar.create(),typeName:se.ZodFunction,...fe(s)})}}class Mo extends pe{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Mo.create=(t,e)=>new Mo({getter:t,typeName:se.ZodLazy,...fe(e)});class Uo extends pe{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return Z(n,{received:n.data,code:M.invalid_literal,expected:this._def.value}),le}return{status:"valid",value:e.data}}get value(){return this._def.value}}Uo.create=(t,e)=>new Uo({value:t,typeName:se.ZodLiteral,...fe(e)});function ET(t,e){return new xs({values:t,typeName:se.ZodEnum,...fe(e)})}class xs extends pe{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),s=this._def.values;return Z(n,{expected:Ce.joinValues(s),received:n.parsedType,code:M.invalid_type}),le}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),s=this._def.values;return Z(n,{received:n.data,code:M.invalid_enum_value,options:s}),le}return wt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return xs.create(e)}exclude(e){return xs.create(this.options.filter(n=>!e.includes(n)))}}xs.create=ET;class Fo extends pe{_parse(e){const n=Ce.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==H.string&&s.parsedType!==H.number){const r=Ce.objectValues(n);return Z(s,{expected:Ce.joinValues(r),received:s.parsedType,code:M.invalid_type}),le}if(n.indexOf(e.data)===-1){const r=Ce.objectValues(n);return Z(s,{received:s.data,code:M.invalid_enum_value,options:r}),le}return wt(e.data)}get enum(){return this._def.values}}Fo.create=(t,e)=>new Fo({values:t,typeName:se.ZodNativeEnum,...fe(e)});class fi extends pe{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==H.promise&&n.common.async===!1)return Z(n,{code:M.invalid_type,expected:H.promise,received:n.parsedType}),le;const s=n.parsedType===H.promise?n.data:Promise.resolve(n.data);return wt(s.then(r=>this._def.type.parseAsync(r,{path:n.path,errorMap:n.common.contextualErrorMap})))}}fi.create=(t,e)=>new fi({type:t,typeName:se.ZodPromise,...fe(e)});class mn extends pe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===se.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=this._def.effect||null;if(r.type==="preprocess"){const o=r.transform(s.data);return s.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:s.path,parent:s})):this._def.schema._parseSync({data:o,path:s.path,parent:s})}const i={addIssue:o=>{Z(s,o),o.fatal?n.abort():n.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="refinement"){const o=a=>{const c=r.refinement(a,i);if(s.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?le:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?le:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!Lc(o))return o;const a=r.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>Lc(o)?Promise.resolve(r.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);Ce.assertNever(r)}}mn.create=(t,e,n)=>new mn({schema:t,typeName:se.ZodEffects,effect:e,...fe(n)});mn.createWithPreprocess=(t,e,n)=>new mn({schema:e,effect:{type:"preprocess",transform:t},typeName:se.ZodEffects,...fe(n)});class Vn extends pe{_parse(e){return this._getType(e)===H.undefined?wt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Vn.create=(t,e)=>new Vn({innerType:t,typeName:se.ZodOptional,...fe(e)});class _r extends pe{_parse(e){return this._getType(e)===H.null?wt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}_r.create=(t,e)=>new _r({innerType:t,typeName:se.ZodNullable,...fe(e)});class Bo extends pe{_parse(e){const{ctx:n}=this._processInputParams(e);let s=n.data;return n.parsedType===H.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Bo.create=(t,e)=>new Bo({innerType:t,typeName:se.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...fe(e)});class $c extends pe{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n,common:{...n.common,issues:[]}}});return Mc(s)?s.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue()})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue()}}removeCatch(){return this._def.innerType}}$c.create=(t,e)=>new $c({innerType:t,typeName:se.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...fe(e)});class jc extends pe{_parse(e){if(this._getType(e)!==H.nan){const s=this._getOrReturnCtx(e);return Z(s,{code:M.invalid_type,expected:H.nan,received:s.parsedType}),le}return{status:"valid",value:e.data}}}jc.create=t=>new jc({typeName:se.ZodNaN,...fe(t)});const SL=Symbol("zod_brand");class IT extends pe{_parse(e){const{ctx:n}=this._processInputParams(e),s=n.data;return this._def.type._parse({data:s,path:n.path,parent:n})}unwrap(){return this._def.type}}class pa extends pe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?le:i.status==="dirty"?(n.dirty(),TT(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?le:r.status==="dirty"?(n.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,n){return new pa({in:e,out:n,typeName:se.ZodPipeline})}}const CT=(t,e={},n)=>t?di.create().superRefine((s,r)=>{if(!t(s)){const i=typeof e=="function"?e(s):e,o=typeof i=="string"?{message:i}:i;r.addIssue({code:"custom",...o,fatal:n})}}):di.create(),AL={object:je.lazycreate};var se;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(se||(se={}));const kL=(t,e={message:`Input not instance of ${t.name}`})=>CT(n=>n instanceof t,e,!0),ST=Qn.create,AT=Ns.create,RL=jc.create,NL=Ro.create,kT=No.create,xL=yr.create,OL=Uc.create,DL=xo.create,PL=Oo.create,LL=di.create,ML=ar.create,UL=Yn.create,FL=Fc.create,BL=hn.create,VL=je.create,$L=je.strictCreate,jL=Do.create,qL=Ju.create,HL=Po.create,KL=Nn.create,zL=Lo.create,WL=Vc.create,GL=vr.create,ZL=zr.create,QL=Mo.create,YL=Uo.create,XL=xs.create,JL=Fo.create,eM=fi.create,Rg=mn.create,tM=Vn.create,nM=_r.create,sM=mn.createWithPreprocess,rM=pa.create,iM=()=>ST().optional(),oM=()=>AT().optional(),aM=()=>kT().optional(),cM={string:t=>Qn.create({...t,coerce:!0}),number:t=>Ns.create({...t,coerce:!0}),boolean:t=>No.create({...t,coerce:!0}),bigint:t=>Ro.create({...t,coerce:!0}),date:t=>yr.create({...t,coerce:!0})},uM=le;var tt=Object.freeze({__proto__:null,defaultErrorMap:ko,setErrorMap:vL,getErrorMap:Dc,makeIssue:Pc,EMPTY_PATH:_L,addIssueToContext:Z,ParseStatus:St,INVALID:le,DIRTY:TT,OK:wt,isAborted:$h,isDirty:jh,isValid:Lc,isAsync:Mc,get util(){return Ce},ZodParsedType:H,getParsedType:ps,ZodType:pe,ZodString:Qn,ZodNumber:Ns,ZodBigInt:Ro,ZodBoolean:No,ZodDate:yr,ZodSymbol:Uc,ZodUndefined:xo,ZodNull:Oo,ZodAny:di,ZodUnknown:ar,ZodNever:Yn,ZodVoid:Fc,ZodArray:hn,get objectUtil(){return Bc},ZodObject:je,ZodUnion:Do,ZodDiscriminatedUnion:Ju,ZodIntersection:Po,ZodTuple:Nn,ZodRecord:Lo,ZodMap:Vc,ZodSet:vr,ZodFunction:zr,ZodLazy:Mo,ZodLiteral:Uo,ZodEnum:xs,ZodNativeEnum:Fo,ZodPromise:fi,ZodEffects:mn,ZodTransformer:mn,ZodOptional:Vn,ZodNullable:_r,ZodDefault:Bo,ZodCatch:$c,ZodNaN:jc,BRAND:SL,ZodBranded:IT,ZodPipeline:pa,custom:CT,Schema:pe,ZodSchema:pe,late:AL,get ZodFirstPartyTypeKind(){return se},coerce:cM,any:LL,array:BL,bigint:NL,boolean:kT,date:xL,discriminatedUnion:qL,effect:Rg,enum:XL,function:ZL,instanceof:kL,intersection:HL,lazy:QL,literal:YL,map:WL,nan:RL,nativeEnum:JL,never:UL,null:PL,nullable:nM,number:AT,object:VL,oboolean:aM,onumber:oM,optional:tM,ostring:iM,pipeline:rM,preprocess:sM,promise:eM,record:zL,set:GL,strictObject:$L,string:ST,symbol:OL,transformer:Rg,tuple:KL,undefined:DL,union:jL,unknown:ML,void:FL,NEVER:uM,ZodIssueCode:M,quotelessJson:yL,ZodError:Bn});const lM=tt.enum(["Unknown","Facebook","Instagram","YouTube","Spotify","Twitter","LinkedIn","GitHub","TikTok"]),hM=tt.object({link:tt.string()}),Ng=tt.object({userUid:tt.string(),userUri:tt.string().optional(),displayName:tt.string(),photoURL:tt.string(),coverImg:tt.string(),shortBio:tt.string(),bgColor:tt.string(),fontColor:tt.string().optional(),fontFamily:tt.string().optional(),longBio:tt.string(),socialLinks:tt.record(lM,hM)});var dM=Object.defineProperty,xg=Object.getOwnPropertySymbols,fM=Object.prototype.hasOwnProperty,pM=Object.prototype.propertyIsEnumerable,Og=(t,e,n)=>e in t?dM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,RT=(t,e)=>{for(var n in e||(e={}))fM.call(e,n)&&Og(t,n,e[n]);if(xg)for(var n of xg(e))pM.call(e,n)&&Og(t,n,e[n]);return t},el=t=>typeof t=="function",tl=t=>typeof t=="string",NT=t=>tl(t)&&t.trim().length>0,mM=t=>typeof t=="number",Xs=t=>typeof t>"u",Vo=t=>typeof t=="object"&&t!==null,gM=t=>Sn(t,"tag")&&NT(t.tag),xT=t=>window.TouchEvent&&t instanceof TouchEvent,OT=t=>Sn(t,"component")&&DT(t.component),yM=t=>el(t)||Vo(t),DT=t=>!Xs(t)&&(tl(t)||yM(t)||OT(t)),Dg=t=>Vo(t)&&["height","width","right","left","top","bottom"].every(e=>mM(t[e])),Sn=(t,e)=>(Vo(t)||el(t))&&e in t,vM=(t=>()=>t++)(0);function Ml(t){return xT(t)?t.targetTouches[0].clientX:t.clientX}function Pg(t){return xT(t)?t.targetTouches[0].clientY:t.clientY}var _M=t=>{Xs(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},ma=t=>OT(t)?ma(t.component):gM(t)?Jt({render(){return t}}):typeof t=="string"?t:_e(ys(t)),wM=t=>{if(typeof t=="string")return t;const e=Sn(t,"props")&&Vo(t.props)?t.props:{},n=Sn(t,"listeners")&&Vo(t.listeners)?t.listeners:{};return{component:ma(t),props:e,listeners:n}},bM=()=>typeof window<"u",$f=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},TM=t=>["on","off","emit"].every(e=>Sn(t,e)&&el(t[e])),Ut;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Ut||(Ut={}));var qc;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(qc||(qc={}));var Ft;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Ft||(Ft={}));var cn="Vue-Toastification",rn={type:{type:String,default:Ut.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},PT={type:rn.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Ya={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:rn.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Hh={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},LT={transition:{type:[Object,String],default:`${cn}__bounce`}},EM={position:{type:String,default:qc.TOP_RIGHT},draggable:rn.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:rn.trueBoolean,pauseOnHover:rn.trueBoolean,closeOnClick:rn.trueBoolean,timeout:Hh.timeout,hideProgressBar:Hh.hideProgressBar,toastClassName:rn.classNames,bodyClassName:rn.classNames,icon:PT.customIcon,closeButton:Ya.component,closeButtonClassName:Ya.classNames,showCloseButtonOnHover:Ya.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new $f}},IM={id:{type:[String,Number],required:!0,default:0},type:rn.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},CM={container:{type:[Object,Function],default:()=>document.body},newestOnTop:rn.trueBoolean,maxToasts:{type:Number,default:20},transition:LT.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:rn.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},$n={CORE_TOAST:EM,TOAST:IM,CONTAINER:CM,PROGRESS_BAR:Hh,ICON:PT,TRANSITION:LT,CLOSE_BUTTON:Ya},MT=Jt({name:"VtProgressBar",props:$n.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${cn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function SM(t,e){return qe(),Wt("div",{style:pi(t.style),class:jn(t.cpClass)},null,6)}MT.render=SM;var AM=MT,UT=Jt({name:"VtCloseButton",props:$n.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?ma(this.component):"button"},classes(){const t=[`${cn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),kM=Ko(" × ");function RM(t,e){return qe(),bn(cd(t.buttonComponent),ou({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:wi(()=>[kM]),_:1},16,["aria-label","class"])}UT.render=RM;var NM=UT,FT={},xM={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},OM=Os("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),DM=[OM];function PM(t,e){return qe(),Wt("svg",xM,DM)}FT.render=PM;var LM=FT,BT={},MM={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},UM=Os("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),FM=[UM];function BM(t,e){return qe(),Wt("svg",MM,FM)}BT.render=BM;var Lg=BT,VT={},VM={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},$M=Os("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),jM=[$M];function qM(t,e){return qe(),Wt("svg",VM,jM)}VT.render=qM;var HM=VT,$T={},KM={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},zM=Os("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),WM=[zM];function GM(t,e){return qe(),Wt("svg",KM,WM)}$T.render=GM;var ZM=$T,jT=Jt({name:"VtIcon",props:$n.ICON,computed:{customIconChildren(){return Sn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return tl(this.customIcon)?this.trimValue(this.customIcon):Sn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return Sn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:DT(this.customIcon)?ma(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Ut.DEFAULT]:Lg,[Ut.INFO]:Lg,[Ut.SUCCESS]:LM,[Ut.ERROR]:ZM,[Ut.WARNING]:HM}[this.type]},iconClasses(){const t=[`${cn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return NT(t)?t.trim():e}}});function QM(t,e){return qe(),bn(cd(t.component),{class:jn(t.iconClasses)},{default:wi(()=>[Ko(Bg(t.customIconChildren),1)]),_:1},8,["class"])}jT.render=QM;var YM=jT,qT=Jt({name:"VtToast",components:{ProgressBar:AM,CloseButton:NM,Icon:YM},inheritAttrs:!1,props:Object.assign({},$n.CORE_TOAST,$n.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${cn}__toast`,`${cn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${cn}__toast--rtl`),t},bodyClasses(){return[`${cn}__toast-${tl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Dg(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:Sn,getVueComponentFromObj:ma,closeToast(){this.eventBus.emit(Ft.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:Ml(t),y:Pg(t)},this.dragStart=Ml(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Ml(t),y:Pg(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Dg(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),XM=["role"];function JM(t,e){const n=ji("Icon"),s=ji("CloseButton"),r=ji("ProgressBar");return qe(),Wt("div",{class:jn(t.classes),style:pi(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(qe(),bn(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):al("v-if",!0),Os("div",{role:t.accessibility.toastRole||"alert",class:jn(t.bodyClasses)},[typeof t.content=="string"?(qe(),Wt(Je,{key:0},[Ko(Bg(t.content),1)],2112)):(qe(),bn(cd(t.getVueComponentFromObj(t.content)),ou({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},k0(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,XM),t.closeButton?(qe(),bn(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:VI(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):al("v-if",!0),t.timeout?(qe(),bn(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):al("v-if",!0)],38)}qT.render=JM;var eU=qT,HT=Jt({name:"VtTransition",props:$n.TRANSITION,emits:["leave"],methods:{hasProp:Sn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function tU(t,e){return qe(),bn(RI,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:wi(()=>[A0(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}HT.render=tU;var nU=HT,KT=Jt({name:"VueToastification",devtools:{hide:!0},components:{Toast:eU,VtTransition:nU},props:Object.assign({},$n.CORE_TOAST,$n.CONTAINER,$n.TRANSITION),data(){return{count:0,positions:Object.values(qc),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Ft.ADD,this.addToast),t.on(Ft.CLEAR,this.clearToasts),t.on(Ft.DISMISS,this.dismissToast),t.on(Ft.UPDATE,this.updateToast),t.on(Ft.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){el(t)&&(t=await t()),_M(this.$el),t.appendChild(this.$el)},setToast(t){Xs(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=wM(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Xs(e)&&!Xs(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Xs(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${cn}__container`,t].concat(this.defaults.containerClassName)}}});function sU(t,e){const n=ji("Toast"),s=ji("VtTransition");return qe(),Wt("div",null,[(qe(!0),Wt(Je,null,ip(t.positions,r=>(qe(),Wt("div",{key:r},[Me(s,{transition:t.defaults.transition,class:jn(t.getClasses(r))},{default:wi(()=>[(qe(!0),Wt(Je,null,ip(t.getPositionToasts(r),i=>(qe(),bn(n,ou({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}KT.render=sU;var rU=KT,Mg=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new $f;e&&jo(()=>{const i=sv(rU,RT({},t)),o=i.mount(document.createElement("div")),a=t.onMounted;if(Xs(a)||a(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${cn}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const a=Object.assign({},{id:vM(),type:Ut.DEFAULT},o,{content:i});return n.emit(Ft.ADD,a),a.id};s.clear=()=>n.emit(Ft.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Ft.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Ft.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const u=Object.assign({},a,{content:o});n.emit(Ft.UPDATE,{id:i,options:u,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Ut.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Ut.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Ut.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Ut.WARNING})),s},iU=()=>{const t=()=>console.warn(`[${cn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function Kh(t){return bM()?TM(t)?Mg({eventBus:t},!1):Mg(t,!0):iU()}var zT=Symbol("VueToastification"),WT=new $f,oU=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=Kh(RT({eventBus:WT},e));t.provide(zT,n)},aU=t=>{if(t)return Kh(t);const e=Jn()?ln(zT,void 0):void 0;return e||Kh(WT)},cU=oU;const Pi=aU(),Ug=YI("profile",{state:()=>({profile:null}),getters:{isOwnProfile({profile:t}){var e,n;return(e=Gt.currentUser)!=null&&e.uid?((n=Gt.currentUser)==null?void 0:n.uid)===(t==null?void 0:t.userUid):!1},invertedBgColor:({profile:t})=>t!=null&&t.bgColor?hL(t.bgColor):"black"},actions:{updateProfile(t){if(!this.profile||!this.isOwnProfile)throw new Error("Unathorized");const e=Object.keys(t).reduce((n,s)=>JSON.stringify(t[s])===JSON.stringify(this.profile?this.profile[s]:void 0)?n:{...n,[s]:t[s]},{});this.profile={...this.profile,...t},!(Object.keys(e).length<1)&&GD(Sg(),e).then(()=>Pi("Changes saved")).catch(()=>Pi("Error saving changes"))},async loadProfile(t){try{const e=xc(Ao,Xu,t),n=await wg(e);if(!n.exists()){this.profile=null;return}this.profile=Ng.parse(n.data())}catch{Pi("Error loading profile"),this.profile=null}},async loadPNS(t){const e=xc(Ao,"ib_dns",t),n=await wg(e);if(!n.exists()){this.profile=null;return}const{uid:s}=n.data();if(!s){this.profile=null;return}return this.loadProfile(s)},async createOwnProfile(){var t;try{if(!((t=Gt.currentUser)!=null&&t.uid))return;const e=Ng.parse(gL(Gt.currentUser));await WD(Sg(),e),this.profile=e,Pi("Profile created");return}catch{Pi("Error creating profile")}}}}),Js=XC({history:mC("/"),routes:[{path:"/",name:"Login",component:()=>ka(()=>import("./Login-fb0402f7.js"),["assets/Login-fb0402f7.js","assets/Login-793940d9.css"]),beforeEnter:async(t,e,n)=>{var s;(s=Gt.currentUser)!=null&&s.uid&&(await Js.replace(`/u/${Gt.currentUser.uid}`),window.location.reload()),n()}},{path:"/u/:profileUid",name:"Profile",props:!1,component:()=>ka(()=>import("./Profile-6aace29a.js"),["assets/Profile-6aace29a.js","assets/Profile-0d93f356.css"]),beforeEnter:async(t,e,n)=>{var i,o,a;const s=Ug(),r=t.params.profileUid;await s.loadProfile(r),s.profile||(r===((i=Gt.currentUser)==null?void 0:i.uid)?await s.createOwnProfile():await Js.replace("/404")),(o=s.profile)!=null&&o.userUri&&await Js.replace(`/profile/${(a=s.profile)==null?void 0:a.userUri}`),n()}},{path:"/profile/:profileURI",name:"PNS Profile",props:!1,component:()=>ka(()=>import("./Profile-6aace29a.js"),["assets/Profile-6aace29a.js","assets/Profile-0d93f356.css"]),beforeEnter:async(t,e,n)=>{var i;const s=Ug(),r=t.params.profileURI;r!==((i=s.profile)==null?void 0:i.userUri)&&await s.loadPNS(r),s.profile||await Js.replace("/404"),n()}},{path:"/:pathMatch(.*)",name:"Error404",component:()=>ka(()=>import("./Error404-82039d50.js"),["assets/Error404-82039d50.js","assets/Error404-4d995ba2.css"])}]});const uU=tt.object({uid:tt.string(),displayName:tt.string().nullable(),photoURL:tt.string().nullable()}).nullable(),lU=zI(),hU={timeout:2e3,maxToasts:2};let Ul;_k(Gt,t=>{const e=uU.parse(t);Ul?e!=null&&e.uid?Js.replace(`/u/${e.uid}`):Js.replace("/"):(Ul=sv(rS),Ul.use(Js).use(lU).use(cU,hU).mount("#app"))});export{EI as $,Wc as A,_y as B,It as C,Hn as D,qg as E,us as F,ls as G,WU as H,Mt as I,sv as J,CU as K,bn as L,al as M,H0 as N,$U as O,q0 as P,XU as Q,Gc as R,$r as S,ds as T,kU as U,md as V,Ko as W,Me as X,yU as Y,IU as Z,sS as _,qe as a,nI as a$,LU as a0,MU as a1,PU as a2,GU as a3,ki as a4,fU as a5,Hg as a6,Jn as a7,zg as a8,sd as a9,C0 as aA,I0 as aB,E0 as aC,hE as aD,T0 as aE,od as aF,rd as aG,Va as aH,cy as aI,dy as aJ,vi as aK,iy as aL,OU as aM,Rp as aN,ip as aO,A0 as aP,ji as aQ,AU as aR,cd as aS,zU as aT,uo as aU,fp as aV,e0 as aW,Qr as aX,VE as aY,mU as aZ,$E as a_,Q0 as aa,pd as ab,_i as ac,HI as ad,qU as ae,JU as af,ln as ag,rI as ah,oy as ai,gs as aj,Gr as ak,Ze as al,DU as am,nc as an,ur as ao,Zr as ap,VU as aq,ou as ar,jo as as,jn as at,dU as au,y0 as av,w0 as aw,id as ax,b0 as ay,v0 as az,Os as b,KU as b0,pU as b1,Fa as b2,k0 as b3,_e as b4,WE as b5,KE as b6,NU as b7,gU as b8,BU as b9,hF as bA,Ug as bB,eF as bC,Js as bD,lF as bE,aF as bF,cF as bG,tt as bH,lM as bI,aU as bJ,uL as bK,rF as bL,VD as bM,$D as bN,oF as bO,uF as bP,Ut as bQ,iF as bR,ZU as ba,QU as bb,sI as bc,FU as bd,vy as be,Qy as bf,MI as bg,Yy as bh,LI as bi,eh as bj,jI as bk,iI as bl,vU as bm,Vr as bn,TU as bo,f0 as bp,EU as bq,jU as br,wi as bs,UU as bt,SU as bu,YU as bv,HU as bw,VI as bx,wU as by,sF as bz,Wt as c,Jt as d,xU as e,Gt as f,Vh as g,s0 as h,Je as i,bU as j,RU as k,Yr as l,jy as m,pi as n,ru as o,n0 as p,dL as q,Ur as r,tF as s,Bg as t,ys as u,RI as v,_U as w,Zt as x,vs as y,$t as z};
