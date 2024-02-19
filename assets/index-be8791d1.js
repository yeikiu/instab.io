(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Wh(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const De={},Mr=[],rn=()=>{},oT=()=>!1,aT=/^on[^a-z]/,Bc=t=>aT.test(t),Gh=t=>t.startsWith("onUpdate:"),Ke=Object.assign,Zh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cT=Object.prototype.hasOwnProperty,we=(t,e)=>cT.call(t,e),Z=Array.isArray,Lr=t=>Mo(t)==="[object Map]",Vc=t=>Mo(t)==="[object Set]",Yf=t=>Mo(t)==="[object Date]",le=t=>typeof t=="function",Ve=t=>typeof t=="string",Zi=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Jg=t=>Ne(t)&&le(t.then)&&le(t.catch),ey=Object.prototype.toString,Mo=t=>ey.call(t),lT=t=>Mo(t).slice(8,-1),ty=t=>Mo(t)==="[object Object]",Qh=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oa=Wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uT=/-(\w)/g,kn=jc(t=>t.replace(uT,(e,n)=>n?n.toUpperCase():"")),hT=/\B([A-Z])/g,li=jc(t=>t.replace(hT,"-$1").toLowerCase()),qc=jc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=jc(t=>t?`on${qc(t)}`:""),Qi=(t,e)=>!Object.is(t,e),Pa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ny=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let Xf;const Lu=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lo(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ve(s)?mT(s):Lo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ve(t))return t;if(Ne(t))return t}}const dT=/;(?![^(]*\))/g,fT=/:([^]+)/,pT=/\/\*[^]*?\*\//g;function mT(t){const e={};return t.replace(pT,"").split(dT).forEach(n=>{if(n){const s=n.split(fT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bs(t){let e="";if(Ve(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const s=bs(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yT=Wh(gT);function sy(t){return!!t||t===""}function vT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Hc(t[s],e[s]);return n}function Hc(t,e){if(t===e)return!0;let n=Yf(t),s=Yf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Zi(t),s=Zi(e),n||s)return t===e;if(n=Z(t),s=Z(e),n||s)return n&&s?vT(t,e):!1;if(n=Ne(t),s=Ne(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Hc(t[o],e[o]))return!1}}return String(t)===String(e)}function _T(t,e){return t.findIndex(n=>Hc(n,e))}const ry=t=>Ve(t)?t:t==null?"":Z(t)||Ne(t)&&(t.toString===ey||!le(t.toString))?JSON.stringify(t,iy,2):String(t),iy=(t,e)=>e&&e.__v_isRef?iy(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Vc(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!Z(e)&&!ty(e)?String(e):e;let Pt;class oy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ay(t){return new oy(t)}function wT(t,e=Pt){e&&e.active&&e.effects.push(t)}function cy(){return Pt}function ET(t){Pt&&Pt.cleanups.push(t)}const Yh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ly=t=>(t.w&Cs)>0,uy=t=>(t.n&Cs)>0,TT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cs},IT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ly(r)&&!uy(r)?r.delete(t):e[n++]=r,r.w&=~Cs,r.n&=~Cs}e.length=n}},Za=new WeakMap;let Si=0,Cs=1;const Uu=30;let tn;const er=Symbol(""),Fu=Symbol("");class Xh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wT(this,s)}run(){if(!this.active)return this.fn();let e=tn,n=gs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tn,tn=this,gs=!0,Cs=1<<++Si,Si<=Uu?TT(this):Jf(this),this.fn()}finally{Si<=Uu&&IT(this),Cs=1<<--Si,tn=this.parent,gs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(Jf(this),this.onStop&&this.onStop(),this.active=!1)}}function Jf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gs=!0;const hy=[];function ui(){hy.push(gs),gs=!1}function hi(){const t=hy.pop();gs=t===void 0?!0:t}function Ot(t,e,n){if(gs&&tn){let s=Za.get(t);s||Za.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Yh()),dy(r)}}function dy(t,e){let n=!1;Si<=Uu?uy(t)||(t.n|=Cs,n=!ly(t)):n=!t.has(tn),n&&(t.add(tn),tn.deps.push(t))}function Kn(t,e,n,s,r,i){const o=Za.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?Qh(n)&&a.push(o.get("length")):(a.push(o.get(er)),Lr(t)&&a.push(o.get(Fu)));break;case"delete":Z(t)||(a.push(o.get(er)),Lr(t)&&a.push(o.get(Fu)));break;case"set":Lr(t)&&a.push(o.get(er));break}if(a.length===1)a[0]&&$u(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$u(Yh(c))}}function $u(t,e){const n=Z(t)?t:[...t];for(const s of n)s.computed&&ep(s);for(const s of n)s.computed||ep(s)}function ep(t,e){(t!==tn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function bT(t,e){var n;return(n=Za.get(t))==null?void 0:n.get(e)}const CT=Wh("__proto__,__v_isRef,__isVue"),fy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zi)),ST=Jh(),AT=Jh(!1,!0),kT=Jh(!0),tp=RT();function RT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ve(this);for(let i=0,o=this.length;i<o;i++)Ot(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ui();const s=ve(this)[e].apply(this,n);return hi(),s}}),t}function NT(t){const e=ve(this);return Ot(e,"has",t),e.hasOwnProperty(t)}function Jh(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?KT:vy:e?yy:gy).get(s))return s;const o=Z(s);if(!t){if(o&&we(tp,r))return Reflect.get(tp,r,i);if(r==="hasOwnProperty")return NT}const a=Reflect.get(s,r,i);return(Zi(r)?fy.has(r):CT(r))||(t||Ot(s,"get",r),e)?a:ze(a)?o&&Qh(r)?a:a.value:Ne(a)?t?_y(a):di(a):a}}const xT=py(),OT=py(!0);function py(t=!1){return function(n,s,r,i){let o=n[s];if(Kr(o)&&ze(o)&&!ze(r))return!1;if(!t&&(!Qa(r)&&!Kr(r)&&(o=ve(o),r=ve(r)),!Z(n)&&ze(o)&&!ze(r)))return o.value=r,!0;const a=Z(n)&&Qh(s)?Number(s)<n.length:we(n,s),c=Reflect.set(n,s,r,i);return n===ve(i)&&(a?Qi(r,o)&&Kn(n,"set",s,r):Kn(n,"add",s,r)),c}}function DT(t,e){const n=we(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Kn(t,"delete",e,void 0),s}function PT(t,e){const n=Reflect.has(t,e);return(!Zi(e)||!fy.has(e))&&Ot(t,"has",e),n}function MT(t){return Ot(t,"iterate",Z(t)?"length":er),Reflect.ownKeys(t)}const my={get:ST,set:xT,deleteProperty:DT,has:PT,ownKeys:MT},LT={get:kT,set(t,e){return!0},deleteProperty(t,e){return!0}},UT=Ke({},my,{get:AT,set:OT}),ed=t=>t,zc=t=>Reflect.getPrototypeOf(t);function da(t,e,n=!1,s=!1){t=t.__v_raw;const r=ve(t),i=ve(e);n||(e!==i&&Ot(r,"get",e),Ot(r,"get",i));const{has:o}=zc(r),a=s?ed:n?sd:Yi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function fa(t,e=!1){const n=this.__v_raw,s=ve(n),r=ve(t);return e||(t!==r&&Ot(s,"has",t),Ot(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function pa(t,e=!1){return t=t.__v_raw,!e&&Ot(ve(t),"iterate",er),Reflect.get(t,"size",t)}function np(t){t=ve(t);const e=ve(this);return zc(e).has.call(e,t)||(e.add(t),Kn(e,"add",t,t)),this}function sp(t,e){e=ve(e);const n=ve(this),{has:s,get:r}=zc(n);let i=s.call(n,t);i||(t=ve(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Qi(e,o)&&Kn(n,"set",t,e):Kn(n,"add",t,e),this}function rp(t){const e=ve(this),{has:n,get:s}=zc(e);let r=n.call(e,t);r||(t=ve(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Kn(e,"delete",t,void 0),i}function ip(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&Kn(t,"clear",void 0,void 0),n}function ma(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ve(o),c=e?ed:t?sd:Yi;return!t&&Ot(a,"iterate",er),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ga(t,e,n){return function(...s){const r=this.__v_raw,i=ve(r),o=Lr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ed:e?sd:Yi;return!e&&Ot(i,"iterate",c?Fu:er),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ts(t){return function(...e){return t==="delete"?!1:this}}function FT(){const t={get(i){return da(this,i)},get size(){return pa(this)},has:fa,add:np,set:sp,delete:rp,clear:ip,forEach:ma(!1,!1)},e={get(i){return da(this,i,!1,!0)},get size(){return pa(this)},has:fa,add:np,set:sp,delete:rp,clear:ip,forEach:ma(!1,!0)},n={get(i){return da(this,i,!0)},get size(){return pa(this,!0)},has(i){return fa.call(this,i,!0)},add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear"),forEach:ma(!0,!1)},s={get(i){return da(this,i,!0,!0)},get size(){return pa(this,!0)},has(i){return fa.call(this,i,!0)},add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear"),forEach:ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ga(i,!1,!1),n[i]=ga(i,!0,!1),e[i]=ga(i,!1,!0),s[i]=ga(i,!0,!0)}),[t,n,e,s]}const[$T,BT,VT,jT]=FT();function td(t,e){const n=e?t?jT:VT:t?BT:$T;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(we(n,r)&&r in s?n:s,r,i)}const qT={get:td(!1,!1)},HT={get:td(!1,!0)},zT={get:td(!0,!1)},gy=new WeakMap,yy=new WeakMap,vy=new WeakMap,KT=new WeakMap;function WT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GT(t){return t.__v_skip||!Object.isExtensible(t)?0:WT(lT(t))}function di(t){return Kr(t)?t:nd(t,!1,my,qT,gy)}function ZT(t){return nd(t,!1,UT,HT,yy)}function _y(t){return nd(t,!0,LT,zT,vy)}function nd(t,e,n,s,r){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=GT(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ys(t){return Kr(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Kr(t){return!!(t&&t.__v_isReadonly)}function Qa(t){return!!(t&&t.__v_isShallow)}function wy(t){return ys(t)||Kr(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function Kc(t){return Wa(t,"__v_skip",!0),t}const Yi=t=>Ne(t)?di(t):t,sd=t=>Ne(t)?_y(t):t;function Ey(t){gs&&tn&&(t=ve(t),dy(t.dep||(t.dep=Yh())))}function Ty(t,e){t=ve(t);const n=t.dep;n&&$u(n)}function ze(t){return!!(t&&t.__v_isRef===!0)}function rd(t){return Iy(t,!1)}function QT(t){return Iy(t,!0)}function Iy(t,e){return ze(t)?t:new YT(t,e)}class YT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:Yi(e)}get value(){return Ey(this),this._value}set value(e){const n=this.__v_isShallow||Qa(e)||Kr(e);e=n?e:ve(e),Qi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Yi(e),Ty(this))}}function vs(t){return ze(t)?t.value:t}const XT={get:(t,e,n)=>vs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ze(r)&&!ze(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function by(t){return ys(t)?t:new Proxy(t,XT)}function JT(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=tI(t,n);return e}class eI{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return bT(ve(this._object),this._key)}}function tI(t,e,n){const s=t[e];return ze(s)?s:new eI(t,e,n)}class nI{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xh(e,()=>{this._dirty||(this._dirty=!0,Ty(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ve(this);return Ey(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sI(t,e,n=!1){let s,r;const i=le(t);return i?(s=t,r=rn):(s=t.get,r=t.set),new nI(s,r,i||!r,n)}function _s(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Uo(i,e,n)}return r}function Gt(t,e,n,s){if(le(t)){const i=_s(t,e,n,s);return i&&Jg(i)&&i.catch(o=>{Uo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Gt(t[i],e,n,s));return r}function Uo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){_s(c,null,10,[t,o,a]);return}}rI(t,n,r,s)}function rI(t,e,n,s=!0){console.error(t)}let Xi=!1,Bu=!1;const pt=[];let _n=0;const Ur=[];let Un=null,qs=0;const Cy=Promise.resolve();let id=null;function Wc(t){const e=id||Cy;return t?e.then(this?t.bind(this):t):e}function iI(t){let e=_n+1,n=pt.length;for(;e<n;){const s=e+n>>>1;Ji(pt[s])<t?e=s+1:n=s}return e}function od(t){(!pt.length||!pt.includes(t,Xi&&t.allowRecurse?_n+1:_n))&&(t.id==null?pt.push(t):pt.splice(iI(t.id),0,t),Sy())}function Sy(){!Xi&&!Bu&&(Bu=!0,id=Cy.then(Ry))}function oI(t){const e=pt.indexOf(t);e>_n&&pt.splice(e,1)}function Ay(t){Z(t)?Ur.push(...t):(!Un||!Un.includes(t,t.allowRecurse?qs+1:qs))&&Ur.push(t),Sy()}function op(t,e=Xi?_n+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function ky(t){if(Ur.length){const e=[...new Set(Ur)];if(Ur.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((n,s)=>Ji(n)-Ji(s)),qs=0;qs<Un.length;qs++)Un[qs]();Un=null,qs=0}}const Ji=t=>t.id==null?1/0:t.id,aI=(t,e)=>{const n=Ji(t)-Ji(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ry(t){Bu=!1,Xi=!0,pt.sort(aI);const e=rn;try{for(_n=0;_n<pt.length;_n++){const n=pt[_n];n&&n.active!==!1&&_s(n,null,14)}}finally{_n=0,pt.length=0,ky(),Xi=!1,id=null,(pt.length||Ur.length)&&Ry()}}function cI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||De;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||De;d&&(r=n.map(f=>Ve(f)?f.trim():f)),h&&(r=n.map(Ga))}let a,c=s[a=Da(e)]||s[a=Da(kn(e))];!c&&i&&(c=s[a=Da(li(e))]),c&&Gt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gt(l,t,6,r)}}function Ny(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!le(t)){const c=l=>{const u=Ny(l,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ne(t)&&s.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):Ke(o,i),Ne(t)&&s.set(t,o),o)}function Gc(t,e){return!t||!Bc(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,li(e))||we(t,e))}let nt=null,Zc=null;function Ya(t){const e=nt;return nt=t,Zc=t&&t.type.__scopeId||null,e}function lI(t){Zc=t}function uI(){Zc=null}function Fo(t,e=nt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&wp(-1);const i=Ya(e);let o;try{o=t(...r)}finally{Ya(i),s._d&&wp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Zl(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let T,S;const A=Ya(t);try{if(n.shapeFlag&4){const _=r||s;T=Jt(u.call(_,_,h,i,f,d,g)),S=c}else{const _=e;T=Jt(_.length>1?_(i,{attrs:c,slots:a,emit:l}):_(i,null)),S=e.props?c:dI(c)}}catch(_){Fi.length=0,Uo(_,t,1),T=st(ln)}let F=T;if(S&&v!==!1){const _=Object.keys(S),{shapeFlag:D}=F;_.length&&D&7&&(o&&_.some(Gh)&&(S=fI(S,o)),F=ar(F,S))}return n.dirs&&(F=ar(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),T=F,Ya(A),T}function hI(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(no(s)){if(s.type!==ln||s.children==="v-if"){if(e)return;e=s}}else return}return e}const dI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bc(n))&&((e||(e={}))[n]=t[n]);return e},fI=(t,e)=>{const n={};for(const s in t)(!Gh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function pI(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ap(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Gc(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ap(s,o,l):!0:!!o;return!1}function ap(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Gc(n,i))return!0}return!1}function ad({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mI=t=>t.__isSuspense,gI={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?yI(e,n,s,r,i,o,a,c,l):vI(t,e,n,s,r,o,a,c,l)},hydrate:_I,create:cd,normalize:wI},z2=gI;function eo(t,e){const n=t.props&&t.props[e];le(n)&&n()}function yI(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),d=t.suspense=cd(t,r,s,e,h,n,i,o,a,c);l(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(eo(t,"onPending"),eo(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Fr(d,t.ssFallback)):d.resolve(!1,!0)}function vI(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:T,isHydrating:S}=h;if(v)h.pendingBranch=d,Fn(d,v)?(c(v,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():T&&(c(g,f,n,s,r,null,i,o,a),Fr(h,f))):(h.pendingId++,S?(h.isHydrating=!1,h.activeBranch=v):l(v,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(g,f,n,s,r,null,i,o,a),Fr(h,f))):g&&Fn(d,g)?(c(g,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(g&&Fn(d,g))c(g,d,n,s,r,h,i,o,a),Fr(h,d);else if(eo(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:A,pendingId:F}=h;A>0?setTimeout(()=>{h.pendingId===F&&h.fallback(f)},A):A===0&&h.fallback(f)}}function cd(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:d,um:f,n:g,o:{parentNode:v,remove:T}}=l;let S;const A=TI(t);A&&e!=null&&e.pendingBranch&&(S=e.pendingId,e.deps++);const F=t.props?ny(t.props.timeout):void 0,_={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(D=!1,ee=!1){const{vnode:te,activeBranch:k,pendingBranch:P,pendingId:Q,effects:de,parentComponent:j,container:pe}=_;if(_.isHydrating)_.isHydrating=!1;else if(!D){const me=k&&P.transition&&P.transition.mode==="out-in";me&&(k.transition.afterLeave=()=>{Q===_.pendingId&&d(P,pe,Ie,0)});let{anchor:Ie}=_;k&&(Ie=g(k),f(k,j,_,!0)),me||d(P,pe,Ie,0)}Fr(_,P),_.pendingBranch=null,_.isInFallback=!1;let Ue=_.parent,et=!1;for(;Ue;){if(Ue.pendingBranch){Ue.effects.push(...de),et=!0;break}Ue=Ue.parent}et||Ay(de),_.effects=[],A&&e&&e.pendingBranch&&S===e.pendingId&&(e.deps--,e.deps===0&&!ee&&e.resolve()),eo(te,"onResolve")},fallback(D){if(!_.pendingBranch)return;const{vnode:ee,activeBranch:te,parentComponent:k,container:P,isSVG:Q}=_;eo(ee,"onFallback");const de=g(te),j=()=>{_.isInFallback&&(h(null,D,P,de,k,null,Q,a,c),Fr(_,D))},pe=D.transition&&D.transition.mode==="out-in";pe&&(te.transition.afterLeave=j),_.isInFallback=!0,f(te,k,null,!0),pe||j()},move(D,ee,te){_.activeBranch&&d(_.activeBranch,D,ee,te),_.container=D},next(){return _.activeBranch&&g(_.activeBranch)},registerDep(D,ee){const te=!!_.pendingBranch;te&&_.deps++;const k=D.vnode.el;D.asyncDep.catch(P=>{Uo(P,D,0)}).then(P=>{if(D.isUnmounted||_.isUnmounted||_.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:Q}=D;Zu(D,P,!1),k&&(Q.el=k);const de=!k&&D.subTree.el;ee(D,Q,v(k||D.subTree.el),k?null:g(D.subTree),_,o,c),de&&T(de),ad(D,Q.el),te&&--_.deps===0&&_.resolve()})},unmount(D,ee){_.isUnmounted=!0,_.activeBranch&&f(_.activeBranch,n,D,ee),_.pendingBranch&&f(_.pendingBranch,n,D,ee)}};return _}function _I(t,e,n,s,r,i,o,a,c){const l=e.suspense=cd(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function wI(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=cp(s?n.default:n),t.ssFallback=s?cp(n.fallback):st(ln)}function cp(t){let e;if(le(t)){const n=Wr&&t._c;n&&(t._d=!1,$e()),t=t(),n&&(t._d=!0,e=zt,Qy())}return Z(t)&&(t=hI(t)),t=Jt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function EI(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Ay(t)}function Fr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,ad(s,r))}function TI(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function K2(t,e){return ld(t,null,e)}const ya={};function Di(t,e,n){return ld(t,e,n)}function ld(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=De){var a;const c=cy()===((a=Xe)==null?void 0:a.scope)?Xe:null;let l,u=!1,h=!1;if(ze(t)?(l=()=>t.value,u=Qa(t)):ys(t)?(l=()=>t,s=!0):Z(t)?(h=!0,u=t.some(_=>ys(_)||Qa(_)),l=()=>t.map(_=>{if(ze(_))return _.value;if(ys(_))return Ks(_);if(le(_))return _s(_,c,2)})):le(t)?e?l=()=>_s(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Gt(t,c,3,[f])}:l=rn,e&&s){const _=l;l=()=>Ks(_())}let d,f=_=>{d=A.onStop=()=>{_s(_,c,4)}},g;if(so)if(f=rn,e?n&&Gt(e,c,3,[l(),h?[]:void 0,f]):l(),r==="sync"){const _=gb();g=_.__watcherHandles||(_.__watcherHandles=[])}else return rn;let v=h?new Array(t.length).fill(ya):ya;const T=()=>{if(A.active)if(e){const _=A.run();(s||u||(h?_.some((D,ee)=>Qi(D,v[ee])):Qi(_,v)))&&(d&&d(),Gt(e,c,3,[_,v===ya?void 0:h&&v[0]===ya?[]:v,f]),v=_)}else A.run()};T.allowRecurse=!!e;let S;r==="sync"?S=T:r==="post"?S=()=>kt(T,c&&c.suspense):(T.pre=!0,c&&(T.id=c.uid),S=()=>od(T));const A=new Xh(l,S);e?n?T():v=A.run():r==="post"?kt(A.run.bind(A),c&&c.suspense):A.run();const F=()=>{A.stop(),c&&c.scope&&Zh(c.scope.effects,A)};return g&&g.push(F),F}function II(t,e,n){const s=this.proxy,r=Ve(t)?t.includes(".")?xy(s,t):()=>s[t]:t.bind(s,s);let i;le(e)?i=e:(i=e.handler,n=e);const o=Xe;Gr(this);const a=ld(r,i.bind(s),n);return o?Gr(o):tr(),a}function xy(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ks(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ze(t))Ks(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Ks(t[n],e);else if(Vc(t)||Lr(t))t.forEach(n=>{Ks(n,e)});else if(ty(t))for(const n in t)Ks(t[n],e);return t}function W2(t,e){const n=nt;if(n===null)return t;const s=tl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=De]=e[i];o&&(le(o)&&(o={mounted:o,updated:o}),o.deep&&Ks(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function $s(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ui(),Gt(c,n,8,[t.el,a,t,e]),hi())}}function bI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return My(()=>{t.isMounted=!0}),Uy(()=>{t.isUnmounting=!0}),t}const qt=[Function,Array],CI={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt};function SI(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Vu(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:v,onAppear:T,onAfterAppear:S,onAppearCancelled:A}=e,F=String(t.key),_=SI(n,t),D=(k,P)=>{k&&Gt(k,s,9,P)},ee=(k,P)=>{const Q=P[1];D(k,P),Z(k)?k.every(de=>de.length<=1)&&Q():k.length<=1&&Q()},te={mode:i,persisted:o,beforeEnter(k){let P=a;if(!n.isMounted)if(r)P=v||a;else return;k._leaveCb&&k._leaveCb(!0);const Q=_[F];Q&&Fn(t,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),D(P,[k])},enter(k){let P=c,Q=l,de=u;if(!n.isMounted)if(r)P=T||c,Q=S||l,de=A||u;else return;let j=!1;const pe=k._enterCb=Ue=>{j||(j=!0,Ue?D(de,[k]):D(Q,[k]),te.delayedLeave&&te.delayedLeave(),k._enterCb=void 0)};P?ee(P,[k,pe]):pe()},leave(k,P){const Q=String(t.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return P();D(h,[k]);let de=!1;const j=k._leaveCb=pe=>{de||(de=!0,P(),pe?D(g,[k]):D(f,[k]),k._leaveCb=void 0,_[Q]===t&&delete _[Q])};_[Q]=t,d?ee(d,[k,j]):j()},clone(k){return Vu(k,e,n,s)}};return te}function ju(t,e){t.shapeFlag&6&&t.component?ju(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oy(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&r++,s=s.concat(Oy(o.children,e,a))):(e||o.type!==ln)&&s.push(a!=null?ar(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Dn(t,e){return le(t)?(()=>Ke({name:t.name},e,{setup:t}))():t}const Pi=t=>!!t.type.__asyncLoader,Dy=t=>t.type.__isKeepAlive;function AI(t,e){Py(t,"a",e)}function kI(t,e){Py(t,"da",e)}function Py(t,e,n=Xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Qc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Dy(r.parent.vnode)&&RI(s,e,n,r),r=r.parent}}function RI(t,e,n,s){const r=Qc(e,t,s,!0);Fy(()=>{Zh(s[e],r)},n)}function Qc(t,e,n=Xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ui(),Gr(n);const a=Gt(e,n,t,o);return tr(),hi(),a});return s?r.unshift(i):r.push(i),i}}const Jn=t=>(e,n=Xe)=>(!so||t==="sp")&&Qc(t,(...s)=>e(...s),n),NI=Jn("bm"),My=Jn("m"),xI=Jn("bu"),Ly=Jn("u"),Uy=Jn("bum"),Fy=Jn("um"),OI=Jn("sp"),DI=Jn("rtg"),PI=Jn("rtc");function MI(t,e=Xe){Qc("ec",t,e)}const ud="components";function Mi(t,e){return By(ud,t,!0,e)||t}const $y=Symbol.for("v-ndc");function hd(t){return Ve(t)?By(ud,t,!1)||t:t||$y}function By(t,e,n=!0,s=!1){const r=nt||Xe;if(r){const i=r.type;if(t===ud){const a=fb(i,!1);if(a&&(a===e||a===kn(e)||a===qc(kn(e))))return i}const o=lp(r[t]||i[t],e)||lp(r.appContext[t],e);return!o&&s?i:o}}function lp(t,e){return t&&(t[e]||t[kn(e)]||t[qc(kn(e))])}function up(t,e,n,s){let r;const i=n&&n[s];if(Z(t)||Ve(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function LI(t,e,n={},s,r){if(nt.isCE||nt.parent&&Pi(nt.parent)&&nt.parent.isCE)return e!=="default"&&(n.name=e),st("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),$e();const o=i&&Vy(i(n)),a=En(at,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Vy(t){return t.some(e=>no(e)?!(e.type===ln||e.type===at&&!Vy(e.children)):!0)?t:null}function UI(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Da(s)]=t[s];return n}const qu=t=>t?ev(t)?tl(t)||t.proxy:qu(t.parent):null,Li=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qu(t.parent),$root:t=>qu(t.root),$emit:t=>t.emit,$options:t=>dd(t),$forceUpdate:t=>t.f||(t.f=()=>od(t.update)),$nextTick:t=>t.n||(t.n=Wc.bind(t.proxy)),$watch:t=>II.bind(t)}),Ql=(t,e)=>t!==De&&!t.__isScriptSetup&&we(t,e),FI={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ql(s,e))return o[e]=1,s[e];if(r!==De&&we(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&we(l,e))return o[e]=3,i[e];if(n!==De&&we(n,e))return o[e]=4,n[e];Hu&&(o[e]=0)}}const u=Li[e];let h,d;if(u)return e==="$attrs"&&Ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&we(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,we(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ql(r,e)?(r[e]=n,!0):s!==De&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==De&&we(t,o)||Ql(e,o)||(a=i[0])&&we(a,o)||we(s,o)||we(Li,o)||we(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hp(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hu=!0;function $I(t){const e=dd(t),n=t.proxy,s=t.ctx;Hu=!1,e.beforeCreate&&dp(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:T,beforeDestroy:S,beforeUnmount:A,destroyed:F,unmounted:_,render:D,renderTracked:ee,renderTriggered:te,errorCaptured:k,serverPrefetch:P,expose:Q,inheritAttrs:de,components:j,directives:pe,filters:Ue}=e;if(l&&BI(l,s,null),o)for(const Ie in o){const Ce=o[Ie];le(Ce)&&(s[Ie]=Ce.bind(n))}if(r){const Ie=r.call(n,n);Ne(Ie)&&(t.data=di(Ie))}if(Hu=!0,i)for(const Ie in i){const Ce=i[Ie],Pn=le(Ce)?Ce.bind(n,n):le(Ce.get)?Ce.get.bind(n,n):rn,es=!le(Ce)&&le(Ce.set)?Ce.set.bind(n):rn,gn=Mt({get:Pn,set:es});Object.defineProperty(s,Ie,{enumerable:!0,configurable:!0,get:()=>gn.value,set:At=>gn.value=At})}if(a)for(const Ie in a)jy(a[Ie],s,n,Ie);if(c){const Ie=le(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ce=>{Ma(Ce,Ie[Ce])})}u&&dp(u,t,"c");function me(Ie,Ce){Z(Ce)?Ce.forEach(Pn=>Ie(Pn.bind(n))):Ce&&Ie(Ce.bind(n))}if(me(NI,h),me(My,d),me(xI,f),me(Ly,g),me(AI,v),me(kI,T),me(MI,k),me(PI,ee),me(DI,te),me(Uy,A),me(Fy,_),me(OI,P),Z(Q))if(Q.length){const Ie=t.exposed||(t.exposed={});Q.forEach(Ce=>{Object.defineProperty(Ie,Ce,{get:()=>n[Ce],set:Pn=>n[Ce]=Pn})})}else t.exposed||(t.exposed={});D&&t.render===rn&&(t.render=D),de!=null&&(t.inheritAttrs=de),j&&(t.components=j),pe&&(t.directives=pe)}function BI(t,e,n=rn){Z(t)&&(t=zu(t));for(const s in t){const r=t[s];let i;Ne(r)?"default"in r?i=on(r.from||s,r.default,!0):i=on(r.from||s):i=on(r),ze(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function dp(t,e,n){Gt(Z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function jy(t,e,n,s){const r=s.includes(".")?xy(n,s):()=>n[s];if(Ve(t)){const i=e[t];le(i)&&Di(r,i)}else if(le(t))Di(r,t.bind(n));else if(Ne(t))if(Z(t))t.forEach(i=>jy(i,e,n,s));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&Di(r,i,t)}}function dd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Xa(c,l,o,!0)),Xa(c,e,o)),Ne(e)&&i.set(e,c),c}function Xa(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Xa(t,i,n,!0),r&&r.forEach(o=>Xa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=VI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const VI={data:fp,props:pp,emits:pp,methods:Ai,computed:Ai,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Ai,directives:Ai,watch:qI,provide:fp,inject:jI};function fp(t,e){return e?t?function(){return Ke(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function jI(t,e){return Ai(zu(t),zu(e))}function zu(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Ai(t,e){return t?Ke(Object.create(null),t,e):e}function pp(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Ke(Object.create(null),hp(t),hp(e??{})):e}function qI(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=It(t[s],e[s]);return n}function qy(){return{app:null,config:{isNativeTag:oT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let HI=0;function zI(t,e){return function(s,r=null){le(s)||(s=Ke({},s)),r!=null&&!Ne(r)&&(r=null);const i=qy(),o=new Set;let a=!1;const c=i.app={_uid:HI++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:yb,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&le(l.install)?(o.add(l),l.install(c,...u)):le(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=st(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,tl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){to=c;try{return l()}finally{to=null}}};return c}}let to=null;function Ma(t,e){if(Xe){let n=Xe.provides;const s=Xe.parent&&Xe.parent.provides;s===n&&(n=Xe.provides=Object.create(s)),n[t]=e}}function on(t,e,n=!1){const s=Xe||nt;if(s||to){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:to._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&le(e)?e.call(s&&s.proxy):e}}function KI(){return!!(Xe||nt||to)}function WI(t,e,n,s=!1){const r={},i={};Wa(i,Xc,1),t.propsDefaults=Object.create(null),Hy(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ZT(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function GI(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ve(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Gc(t.emitsOptions,d))continue;const f=e[d];if(c)if(we(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const g=kn(d);r[g]=Ku(c,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{Hy(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!we(e,h)&&((u=li(h))===h||!we(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ku(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!we(e,h))&&(delete i[h],l=!0)}l&&Kn(t,"set","$attrs")}function Hy(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Oa(c))continue;const l=e[c];let u;r&&we(r,u=kn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Gc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ve(n),l=a||De;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ku(r,c,h,l[h],t,!we(l,h))}}return o}function Ku(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&le(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Gr(r),s=l[n]=c.call(null,e),tr())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===li(n))&&(s=!0))}return s}function zy(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!le(t)){const u=h=>{c=!0;const[d,f]=zy(h,e,!0);Ke(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ne(t)&&s.set(t,Mr),Mr;if(Z(i))for(let u=0;u<i.length;u++){const h=kn(i[u]);mp(h)&&(o[h]=De)}else if(i)for(const u in i){const h=kn(u);if(mp(h)){const d=i[u],f=o[h]=Z(d)||le(d)?{type:d}:Ke({},d);if(f){const g=vp(Boolean,f.type),v=vp(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||we(f,"default"))&&a.push(h)}}}const l=[o,a];return Ne(t)&&s.set(t,l),l}function mp(t){return t[0]!=="$"}function gp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yp(t,e){return gp(t)===gp(e)}function vp(t,e){return Z(e)?e.findIndex(n=>yp(n,t)):le(e)&&yp(e,t)?0:-1}const Ky=t=>t[0]==="_"||t==="$stable",fd=t=>Z(t)?t.map(Jt):[Jt(t)],ZI=(t,e,n)=>{if(e._n)return e;const s=Fo((...r)=>fd(e(...r)),n);return s._c=!1,s},Wy=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ky(r))continue;const i=t[r];if(le(i))e[r]=ZI(r,i,s);else if(i!=null){const o=fd(i);e[r]=()=>o}}},Gy=(t,e)=>{const n=fd(e);t.slots.default=()=>n},QI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),Wa(e,"_",n)):Wy(e,t.slots={})}else t.slots={},e&&Gy(t,e);Wa(t.slots,Xc,1)},YI=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=De;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Wy(e,r)),o=e}else e&&(Gy(t,e),o={default:1});if(i)for(const a in r)!Ky(a)&&!(a in o)&&delete r[a]};function Wu(t,e,n,s,r=!1){if(Z(t)){t.forEach((d,f)=>Wu(d,e&&(Z(e)?e[f]:e),n,s,r));return}if(Pi(s)&&!r)return;const i=s.shapeFlag&4?tl(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,we(h,l)&&(h[l]=null)):ze(l)&&(l.value=null)),le(c))_s(c,a,12,[o,u]);else{const d=Ve(c),f=ze(c);if(d||f){const g=()=>{if(t.f){const v=d?we(h,c)?h[c]:u[c]:c.value;r?Z(v)&&Zh(v,i):Z(v)?v.includes(i)||v.push(i):d?(u[c]=[i],we(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,we(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,kt(g,n)):g()}}}const kt=EI;function XI(t){return JI(t)}function JI(t,e){const n=Lu();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=rn,insertStaticContent:g}=t,v=(p,m,y,w=null,b=null,C=null,B=!1,O=null,M=!!m.dynamicChildren)=>{if(p===m)return;p&&!Fn(p,m)&&(w=I(p),At(p,b,C,!0),p=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:R,ref:Y,shapeFlag:z}=m;switch(R){case Yc:T(p,m,y,w);break;case ln:S(p,m,y,w);break;case Yl:p==null&&A(m,y,w,B);break;case at:j(p,m,y,w,b,C,B,O,M);break;default:z&1?D(p,m,y,w,b,C,B,O,M):z&6?pe(p,m,y,w,b,C,B,O,M):(z&64||z&128)&&R.process(p,m,y,w,b,C,B,O,M,U)}Y!=null&&b&&Wu(Y,p&&p.ref,C,m||p,!m)},T=(p,m,y,w)=>{if(p==null)s(m.el=a(m.children),y,w);else{const b=m.el=p.el;m.children!==p.children&&l(b,m.children)}},S=(p,m,y,w)=>{p==null?s(m.el=c(m.children||""),y,w):m.el=p.el},A=(p,m,y,w)=>{[p.el,p.anchor]=g(p.children,m,y,w,p.el,p.anchor)},F=({el:p,anchor:m},y,w)=>{let b;for(;p&&p!==m;)b=d(p),s(p,y,w),p=b;s(m,y,w)},_=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=d(p),r(p),p=y;r(m)},D=(p,m,y,w,b,C,B,O,M)=>{B=B||m.type==="svg",p==null?ee(m,y,w,b,C,B,O,M):P(p,m,b,C,B,O,M)},ee=(p,m,y,w,b,C,B,O)=>{let M,R;const{type:Y,props:z,shapeFlag:X,transition:ie,dirs:ge}=p;if(M=p.el=o(p.type,C,z&&z.is,z),X&8?u(M,p.children):X&16&&k(p.children,M,null,w,b,C&&Y!=="foreignObject",B,O),ge&&$s(p,null,w,"created"),te(M,p,p.scopeId,B,w),z){for(const Re in z)Re!=="value"&&!Oa(Re)&&i(M,Re,null,z[Re],C,p.children,w,b,ut);"value"in z&&i(M,"value",null,z.value),(R=z.onVnodeBeforeMount)&&vn(R,w,p)}ge&&$s(p,null,w,"beforeMount");const xe=(!b||b&&!b.pendingBranch)&&ie&&!ie.persisted;xe&&ie.beforeEnter(M),s(M,m,y),((R=z&&z.onVnodeMounted)||xe||ge)&&kt(()=>{R&&vn(R,w,p),xe&&ie.enter(M),ge&&$s(p,null,w,"mounted")},b)},te=(p,m,y,w,b)=>{if(y&&f(p,y),w)for(let C=0;C<w.length;C++)f(p,w[C]);if(b){let C=b.subTree;if(m===C){const B=b.vnode;te(p,B,B.scopeId,B.slotScopeIds,b.parent)}}},k=(p,m,y,w,b,C,B,O,M=0)=>{for(let R=M;R<p.length;R++){const Y=p[R]=O?as(p[R]):Jt(p[R]);v(null,Y,m,y,w,b,C,B,O)}},P=(p,m,y,w,b,C,B)=>{const O=m.el=p.el;let{patchFlag:M,dynamicChildren:R,dirs:Y}=m;M|=p.patchFlag&16;const z=p.props||De,X=m.props||De;let ie;y&&Bs(y,!1),(ie=X.onVnodeBeforeUpdate)&&vn(ie,y,m,p),Y&&$s(m,p,y,"beforeUpdate"),y&&Bs(y,!0);const ge=b&&m.type!=="foreignObject";if(R?Q(p.dynamicChildren,R,O,y,w,ge,C):B||Ce(p,m,O,null,y,w,ge,C,!1),M>0){if(M&16)de(O,m,z,X,y,w,b);else if(M&2&&z.class!==X.class&&i(O,"class",null,X.class,b),M&4&&i(O,"style",z.style,X.style,b),M&8){const xe=m.dynamicProps;for(let Re=0;Re<xe.length;Re++){const We=xe[Re],Xt=z[We],Sr=X[We];(Sr!==Xt||We==="value")&&i(O,We,Xt,Sr,b,p.children,y,w,ut)}}M&1&&p.children!==m.children&&u(O,m.children)}else!B&&R==null&&de(O,m,z,X,y,w,b);((ie=X.onVnodeUpdated)||Y)&&kt(()=>{ie&&vn(ie,y,m,p),Y&&$s(m,p,y,"updated")},w)},Q=(p,m,y,w,b,C,B)=>{for(let O=0;O<m.length;O++){const M=p[O],R=m[O],Y=M.el&&(M.type===at||!Fn(M,R)||M.shapeFlag&70)?h(M.el):y;v(M,R,Y,null,w,b,C,B,!0)}},de=(p,m,y,w,b,C,B)=>{if(y!==w){if(y!==De)for(const O in y)!Oa(O)&&!(O in w)&&i(p,O,y[O],null,B,m.children,b,C,ut);for(const O in w){if(Oa(O))continue;const M=w[O],R=y[O];M!==R&&O!=="value"&&i(p,O,R,M,B,m.children,b,C,ut)}"value"in w&&i(p,"value",y.value,w.value)}},j=(p,m,y,w,b,C,B,O,M)=>{const R=m.el=p?p.el:a(""),Y=m.anchor=p?p.anchor:a("");let{patchFlag:z,dynamicChildren:X,slotScopeIds:ie}=m;ie&&(O=O?O.concat(ie):ie),p==null?(s(R,y,w),s(Y,y,w),k(m.children,y,Y,b,C,B,O,M)):z>0&&z&64&&X&&p.dynamicChildren?(Q(p.dynamicChildren,X,y,b,C,B,O),(m.key!=null||b&&m===b.subTree)&&pd(p,m,!0)):Ce(p,m,y,Y,b,C,B,O,M)},pe=(p,m,y,w,b,C,B,O,M)=>{m.slotScopeIds=O,p==null?m.shapeFlag&512?b.ctx.activate(m,y,w,B,M):Ue(m,y,w,b,C,B,M):et(p,m,M)},Ue=(p,m,y,w,b,C,B)=>{const O=p.component=cb(p,w,b);if(Dy(p)&&(O.ctx.renderer=U),lb(O),O.asyncDep){if(b&&b.registerDep(O,me),!p.el){const M=O.subTree=st(ln);S(null,M,m,y)}return}me(O,p,m,y,b,C,B)},et=(p,m,y)=>{const w=m.component=p.component;if(pI(p,m,y))if(w.asyncDep&&!w.asyncResolved){Ie(w,m,y);return}else w.next=m,oI(w.update),w.update();else m.el=p.el,w.vnode=m},me=(p,m,y,w,b,C,B)=>{const O=()=>{if(p.isMounted){let{next:Y,bu:z,u:X,parent:ie,vnode:ge}=p,xe=Y,Re;Bs(p,!1),Y?(Y.el=ge.el,Ie(p,Y,B)):Y=ge,z&&Pa(z),(Re=Y.props&&Y.props.onVnodeBeforeUpdate)&&vn(Re,ie,Y,ge),Bs(p,!0);const We=Zl(p),Xt=p.subTree;p.subTree=We,v(Xt,We,h(Xt.el),I(Xt),p,b,C),Y.el=We.el,xe===null&&ad(p,We.el),X&&kt(X,b),(Re=Y.props&&Y.props.onVnodeUpdated)&&kt(()=>vn(Re,ie,Y,ge),b)}else{let Y;const{el:z,props:X}=m,{bm:ie,m:ge,parent:xe}=p,Re=Pi(m);if(Bs(p,!1),ie&&Pa(ie),!Re&&(Y=X&&X.onVnodeBeforeMount)&&vn(Y,xe,m),Bs(p,!0),z&&Se){const We=()=>{p.subTree=Zl(p),Se(z,p.subTree,p,b,null)};Re?m.type.__asyncLoader().then(()=>!p.isUnmounted&&We()):We()}else{const We=p.subTree=Zl(p);v(null,We,y,w,p,b,C),m.el=We.el}if(ge&&kt(ge,b),!Re&&(Y=X&&X.onVnodeMounted)){const We=m;kt(()=>vn(Y,xe,We),b)}(m.shapeFlag&256||xe&&Pi(xe.vnode)&&xe.vnode.shapeFlag&256)&&p.a&&kt(p.a,b),p.isMounted=!0,m=y=w=null}},M=p.effect=new Xh(O,()=>od(R),p.scope),R=p.update=()=>M.run();R.id=p.uid,Bs(p,!0),R()},Ie=(p,m,y)=>{m.component=p;const w=p.vnode.props;p.vnode=m,p.next=null,GI(p,m.props,w,y),YI(p,m.children,y),ui(),op(),hi()},Ce=(p,m,y,w,b,C,B,O,M=!1)=>{const R=p&&p.children,Y=p?p.shapeFlag:0,z=m.children,{patchFlag:X,shapeFlag:ie}=m;if(X>0){if(X&128){es(R,z,y,w,b,C,B,O,M);return}else if(X&256){Pn(R,z,y,w,b,C,B,O,M);return}}ie&8?(Y&16&&ut(R,b,C),z!==R&&u(y,z)):Y&16?ie&16?es(R,z,y,w,b,C,B,O,M):ut(R,b,C,!0):(Y&8&&u(y,""),ie&16&&k(z,y,w,b,C,B,O,M))},Pn=(p,m,y,w,b,C,B,O,M)=>{p=p||Mr,m=m||Mr;const R=p.length,Y=m.length,z=Math.min(R,Y);let X;for(X=0;X<z;X++){const ie=m[X]=M?as(m[X]):Jt(m[X]);v(p[X],ie,y,null,b,C,B,O,M)}R>Y?ut(p,b,C,!0,!1,z):k(m,y,w,b,C,B,O,M,z)},es=(p,m,y,w,b,C,B,O,M)=>{let R=0;const Y=m.length;let z=p.length-1,X=Y-1;for(;R<=z&&R<=X;){const ie=p[R],ge=m[R]=M?as(m[R]):Jt(m[R]);if(Fn(ie,ge))v(ie,ge,y,null,b,C,B,O,M);else break;R++}for(;R<=z&&R<=X;){const ie=p[z],ge=m[X]=M?as(m[X]):Jt(m[X]);if(Fn(ie,ge))v(ie,ge,y,null,b,C,B,O,M);else break;z--,X--}if(R>z){if(R<=X){const ie=X+1,ge=ie<Y?m[ie].el:w;for(;R<=X;)v(null,m[R]=M?as(m[R]):Jt(m[R]),y,ge,b,C,B,O,M),R++}}else if(R>X)for(;R<=z;)At(p[R],b,C,!0),R++;else{const ie=R,ge=R,xe=new Map;for(R=ge;R<=X;R++){const Dt=m[R]=M?as(m[R]):Jt(m[R]);Dt.key!=null&&xe.set(Dt.key,R)}let Re,We=0;const Xt=X-ge+1;let Sr=!1,Gf=0;const vi=new Array(Xt);for(R=0;R<Xt;R++)vi[R]=0;for(R=ie;R<=z;R++){const Dt=p[R];if(We>=Xt){At(Dt,b,C,!0);continue}let yn;if(Dt.key!=null)yn=xe.get(Dt.key);else for(Re=ge;Re<=X;Re++)if(vi[Re-ge]===0&&Fn(Dt,m[Re])){yn=Re;break}yn===void 0?At(Dt,b,C,!0):(vi[yn-ge]=R+1,yn>=Gf?Gf=yn:Sr=!0,v(Dt,m[yn],y,null,b,C,B,O,M),We++)}const Zf=Sr?eb(vi):Mr;for(Re=Zf.length-1,R=Xt-1;R>=0;R--){const Dt=ge+R,yn=m[Dt],Qf=Dt+1<Y?m[Dt+1].el:w;vi[R]===0?v(null,yn,y,Qf,b,C,B,O,M):Sr&&(Re<0||R!==Zf[Re]?gn(yn,y,Qf,2):Re--)}}},gn=(p,m,y,w,b=null)=>{const{el:C,type:B,transition:O,children:M,shapeFlag:R}=p;if(R&6){gn(p.component.subTree,m,y,w);return}if(R&128){p.suspense.move(m,y,w);return}if(R&64){B.move(p,m,y,U);return}if(B===at){s(C,m,y);for(let z=0;z<M.length;z++)gn(M[z],m,y,w);s(p.anchor,m,y);return}if(B===Yl){F(p,m,y);return}if(w!==2&&R&1&&O)if(w===0)O.beforeEnter(C),s(C,m,y),kt(()=>O.enter(C),b);else{const{leave:z,delayLeave:X,afterLeave:ie}=O,ge=()=>s(C,m,y),xe=()=>{z(C,()=>{ge(),ie&&ie()})};X?X(C,ge,xe):xe()}else s(C,m,y)},At=(p,m,y,w=!1,b=!1)=>{const{type:C,props:B,ref:O,children:M,dynamicChildren:R,shapeFlag:Y,patchFlag:z,dirs:X}=p;if(O!=null&&Wu(O,null,y,p,!0),Y&256){m.ctx.deactivate(p);return}const ie=Y&1&&X,ge=!Pi(p);let xe;if(ge&&(xe=B&&B.onVnodeBeforeUnmount)&&vn(xe,m,p),Y&6)ha(p.component,y,w);else{if(Y&128){p.suspense.unmount(y,w);return}ie&&$s(p,null,m,"beforeUnmount"),Y&64?p.type.remove(p,m,y,b,U,w):R&&(C!==at||z>0&&z&64)?ut(R,m,y,!1,!0):(C===at&&z&384||!b&&Y&16)&&ut(M,m,y),w&&br(p)}(ge&&(xe=B&&B.onVnodeUnmounted)||ie)&&kt(()=>{xe&&vn(xe,m,p),ie&&$s(p,null,m,"unmounted")},y)},br=p=>{const{type:m,el:y,anchor:w,transition:b}=p;if(m===at){Cr(y,w);return}if(m===Yl){_(p);return}const C=()=>{r(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:B,delayLeave:O}=b,M=()=>B(y,C);O?O(p.el,C,M):M()}else C()},Cr=(p,m)=>{let y;for(;p!==m;)y=d(p),r(p),p=y;r(m)},ha=(p,m,y)=>{const{bum:w,scope:b,update:C,subTree:B,um:O}=p;w&&Pa(w),b.stop(),C&&(C.active=!1,At(B,p,m,y)),O&&kt(O,m),kt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ut=(p,m,y,w=!1,b=!1,C=0)=>{for(let B=C;B<p.length;B++)At(p[B],m,y,w,b)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),H=(p,m,y)=>{p==null?m._vnode&&At(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,y),op(),ky(),m._vnode=p},U={p:v,um:At,m:gn,r:br,mt:Ue,mc:k,pc:Ce,pbc:Q,n:I,o:t};let G,Se;return e&&([G,Se]=e(U)),{render:H,hydrate:G,createApp:zI(H,G)}}function Bs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pd(t,e,n=!1){const s=t.children,r=e.children;if(Z(s)&&Z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=as(r[i]),a.el=o.el),n||pd(o,a)),a.type===Yc&&(a.el=o.el)}}function eb(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const tb=t=>t.__isTeleport,Ui=t=>t&&(t.disabled||t.disabled===""),_p=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Gu=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},nb={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:g,createText:v,createComment:T}}=l,S=Ui(e.props);let{shapeFlag:A,children:F,dynamicChildren:_}=e;if(t==null){const D=e.el=v(""),ee=e.anchor=v("");f(D,n,s),f(ee,n,s);const te=e.target=Gu(e.props,g),k=e.targetAnchor=v("");te&&(f(k,te),o=o||_p(te));const P=(Q,de)=>{A&16&&u(F,Q,de,r,i,o,a,c)};S?P(n,ee):te&&P(te,k)}else{e.el=t.el;const D=e.anchor=t.anchor,ee=e.target=t.target,te=e.targetAnchor=t.targetAnchor,k=Ui(t.props),P=k?n:ee,Q=k?D:te;if(o=o||_p(ee),_?(d(t.dynamicChildren,_,P,r,i,o,a),pd(t,e,!0)):c||h(t,e,P,Q,r,i,o,a,!1),S)k||va(e,n,D,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const de=e.target=Gu(e.props,g);de&&va(e,de,null,l,0)}else k&&va(e,ee,te,l,1)}Zy(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=t;if(h&&i(u),(o||!Ui(d))&&(i(l),a&16))for(let f=0;f<c.length;f++){const g=c[f];r(g,e,n,!0,!!g.dynamicChildren)}},move:va,hydrate:sb};function va(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||Ui(u))&&c&16)for(let d=0;d<l.length;d++)r(l[d],e,n,2);h&&s(a,e,n)}function sb(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Gu(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Ui(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}Zy(e)}return e.anchor&&o(e.anchor)}const G2=nb;function Zy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const at=Symbol.for("v-fgt"),Yc=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Yl=Symbol.for("v-stc"),Fi=[];let zt=null;function $e(t=!1){Fi.push(zt=t?null:[])}function Qy(){Fi.pop(),zt=Fi[Fi.length-1]||null}let Wr=1;function wp(t){Wr+=t}function Yy(t){return t.dynamicChildren=Wr>0?zt||Mr:null,Qy(),Wr>0&&zt&&zt.push(t),t}function Kt(t,e,n,s,r,i){return Yy(Os(t,e,n,s,r,i,!0))}function En(t,e,n,s,r){return Yy(st(t,e,n,s,r,!0))}function no(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const Xc="__vInternal",Xy=({key:t})=>t??null,La=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||ze(t)||le(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function Os(t,e=null,n=null,s=0,r=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xy(e),ref:e&&La(e),scopeId:Zc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nt};return a?(md(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Wr>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const st=rb;function rb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===$y)&&(t=ln),no(t)){const a=ar(t,e,!0);return n&&md(a,n),Wr>0&&!i&&zt&&(a.shapeFlag&6?zt[zt.indexOf(t)]=a:zt.push(a)),a.patchFlag|=-2,a}if(pb(t)&&(t=t.__vccOpts),e){e=ib(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=bs(a)),Ne(c)&&(wy(c)&&!Z(c)&&(c=Ke({},c)),e.style=Lo(c))}const o=Ve(t)?1:mI(t)?128:tb(t)?64:Ne(t)?4:le(t)?2:0;return Os(t,e,n,s,r,o,i,!0)}function ib(t){return t?wy(t)||Xc in t?Ke({},t):t:null}function ar(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?el(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Xy(a),ref:e&&e.ref?n&&r?Z(r)?r.concat(La(e)):[r,La(e)]:La(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ar(t.ssContent),ssFallback:t.ssFallback&&ar(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Jc(t=" ",e=0){return st(Yc,null,t,e)}function Xl(t="",e=!1){return e?($e(),En(ln,null,t)):st(ln,null,t)}function Jt(t){return t==null||typeof t=="boolean"?st(ln):Z(t)?st(at,null,t.slice()):typeof t=="object"?as(t):st(Yc,null,String(t))}function as(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ar(t)}function md(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),md(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Xc in e)?e._ctx=nt:r===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[Jc(e)]):n=8);t.children=e,t.shapeFlag|=n}function el(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bs([e.class,s.class]));else if(r==="style")e.style=Lo([e.style,s.style]);else if(Bc(r)){const i=e[r],o=s[r];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function vn(t,e,n,s=null){Gt(t,e,7,[n,s])}const ob=qy();let ab=0;function cb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ob,i={uid:ab++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new oy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zy(s,r),emitsOptions:Ny(s,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:s.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cI.bind(null,i),t.ce&&t.ce(i),i}let Xe=null;const Jy=()=>Xe||nt;let gd,Ar,Ep="__VUE_INSTANCE_SETTERS__";(Ar=Lu()[Ep])||(Ar=Lu()[Ep]=[]),Ar.push(t=>Xe=t),gd=t=>{Ar.length>1?Ar.forEach(e=>e(t)):Ar[0](t)};const Gr=t=>{gd(t),t.scope.on()},tr=()=>{Xe&&Xe.scope.off(),gd(null)};function ev(t){return t.vnode.shapeFlag&4}let so=!1;function lb(t,e=!1){so=e;const{props:n,children:s}=t.vnode,r=ev(t);WI(t,n,r,e),QI(t,s);const i=r?ub(t,e):void 0;return so=!1,i}function ub(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kc(new Proxy(t.ctx,FI));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?db(t):null;Gr(t),ui();const i=_s(s,t,0,[t.props,r]);if(hi(),tr(),Jg(i)){if(i.then(tr,tr),e)return i.then(o=>{Zu(t,o,e)}).catch(o=>{Uo(o,t,0)});t.asyncDep=i}else Zu(t,i,e)}else tv(t,e)}function Zu(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=by(e)),tv(t,n)}let Tp;function tv(t,e,n){const s=t.type;if(!t.render){if(!e&&Tp&&!s.render){const r=s.template||dd(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ke(Ke({isCustomElement:i,delimiters:a},o),c);s.render=Tp(r,l)}}t.render=s.render||rn}Gr(t),ui(),$I(t),hi(),tr()}function hb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ot(t,"get","$attrs"),e[n]}}))}function db(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return hb(t)},slots:t.slots,emit:t.emit,expose:e}}function tl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(by(Kc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Li)return Li[n](t)},has(e,n){return n in e||n in Li}}))}function fb(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function pb(t){return le(t)&&"__vccOpts"in t}const Mt=(t,e)=>sI(t,e,so);function nv(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!Z(e)?no(e)?st(t,null,[e]):st(t,e):st(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&no(n)&&(n=[n]),st(t,e,n))}const mb=Symbol.for("v-scx"),gb=()=>on(mb),yb="3.3.4",vb="http://www.w3.org/2000/svg",Hs=typeof document<"u"?document:null,Ip=Hs&&Hs.createElement("template"),_b={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Hs.createElementNS(vb,t):Hs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Hs.createTextNode(t),createComment:t=>Hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ip.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ip.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Eb(t,e,n){const s=t.style,r=Ve(n);if(n&&!r){if(e&&!Ve(e))for(const i in e)n[i]==null&&Qu(s,i,"");for(const i in n)Qu(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const bp=/\s*!important$/;function Qu(t,e,n){if(Z(n))n.forEach(s=>Qu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Tb(t,e);bp.test(n)?t.setProperty(li(s),n.replace(bp,""),"important"):t[s]=n}}const Cp=["Webkit","Moz","ms"],Jl={};function Tb(t,e){const n=Jl[e];if(n)return n;let s=kn(e);if(s!=="filter"&&s in t)return Jl[e]=s;s=qc(s);for(let r=0;r<Cp.length;r++){const i=Cp[r]+s;if(i in t)return Jl[e]=i}return e}const Sp="http://www.w3.org/1999/xlink";function Ib(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sp,e.slice(6,e.length)):t.setAttributeNS(Sp,e,n);else{const i=yT(e);n==null||i&&!sy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function bb(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=sy(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function zs(t,e,n,s){t.addEventListener(e,n,s)}function Cb(t,e,n,s){t.removeEventListener(e,n,s)}function Sb(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Ab(e);if(s){const l=i[e]=Nb(s,r);zs(t,a,l,c)}else o&&(Cb(t,a,o,c),i[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function Ab(t){let e;if(Ap.test(t)){e={};let s;for(;s=t.match(Ap);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):li(t.slice(2)),e]}let eu=0;const kb=Promise.resolve(),Rb=()=>eu||(kb.then(()=>eu=0),eu=Date.now());function Nb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Gt(xb(s,n.value),e,5,[s])};return n.value=t,n.attached=Rb(),n}function xb(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const kp=/^on[a-z]/,Ob=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?wb(t,s,r):e==="style"?Eb(t,n,s):Bc(e)?Gh(e)||Sb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Db(t,e,s,r))?bb(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ib(t,e,s,r))};function Db(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&kp.test(e)&&le(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||kp.test(e)&&Ve(n)?!1:e in t}const ns="transition",_i="animation",sv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pb=Ke({},CI,sv),Vs=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Rp=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Mb(t){const e={};for(const j in t)j in sv||(e[j]=t[j]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=Lb(r),v=g&&g[0],T=g&&g[1],{onBeforeEnter:S,onEnter:A,onEnterCancelled:F,onLeave:_,onLeaveCancelled:D,onBeforeAppear:ee=S,onAppear:te=A,onAppearCancelled:k=F}=e,P=(j,pe,Ue)=>{is(j,pe?u:a),is(j,pe?l:o),Ue&&Ue()},Q=(j,pe)=>{j._isLeaving=!1,is(j,h),is(j,f),is(j,d),pe&&pe()},de=j=>(pe,Ue)=>{const et=j?te:A,me=()=>P(pe,j,Ue);Vs(et,[pe,me]),Np(()=>{is(pe,j?c:i),Ln(pe,j?u:a),Rp(et)||xp(pe,s,v,me)})};return Ke(e,{onBeforeEnter(j){Vs(S,[j]),Ln(j,i),Ln(j,o)},onBeforeAppear(j){Vs(ee,[j]),Ln(j,c),Ln(j,l)},onEnter:de(!1),onAppear:de(!0),onLeave(j,pe){j._isLeaving=!0;const Ue=()=>Q(j,pe);Ln(j,h),iv(),Ln(j,d),Np(()=>{j._isLeaving&&(is(j,h),Ln(j,f),Rp(_)||xp(j,s,T,Ue))}),Vs(_,[j,Ue])},onEnterCancelled(j){P(j,!1),Vs(F,[j])},onAppearCancelled(j){P(j,!0),Vs(k,[j])},onLeaveCancelled(j){Q(j),Vs(D,[j])}})}function Lb(t){if(t==null)return null;if(Ne(t))return[tu(t.enter),tu(t.leave)];{const e=tu(t);return[e,e]}}function tu(t){return ny(t)}function Ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Np(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ub=0;function xp(t,e,n,s){const r=t._endId=++Ub,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=rv(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=f=>{f.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function rv(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),r=s(`${ns}Delay`),i=s(`${ns}Duration`),o=Op(r,i),a=s(`${_i}Delay`),c=s(`${_i}Duration`),l=Op(a,c);let u=null,h=0,d=0;e===ns?o>0&&(u=ns,h=o,d=i.length):e===_i?l>0&&(u=_i,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?ns:_i:null,d=u?u===ns?i.length:c.length:0);const f=u===ns&&/\b(transform|all)(,|$)/.test(s(`${ns}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Op(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Dp(n)+Dp(t[s])))}function Dp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function iv(){return document.body.offsetHeight}const ov=new WeakMap,av=new WeakMap,cv={name:"TransitionGroup",props:Ke({},Pb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Jy(),s=bI();let r,i;return Ly(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!qb(r[0].el,n.vnode.el,o))return;r.forEach(Bb),r.forEach(Vb);const a=r.filter(jb);iv(),a.forEach(c=>{const l=c.el,u=l.style;Ln(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,is(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=ve(t),a=Mb(o);let c=o.tag||at;r=i,i=e.default?Oy(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&ju(u,Vu(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];ju(u,Vu(u,a,s,n)),ov.set(u,u.el.getBoundingClientRect())}return st(c,null,i)}}},Fb=t=>delete t.mode;cv.props;const $b=cv;function Bb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Vb(t){av.set(t,t.el.getBoundingClientRect())}function jb(t){const e=ov.get(t),n=av.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function qb(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=rv(s);return r.removeChild(s),i}const Ja=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Pa(e,n):e};function Hb(t){t.target.composing=!0}function Pp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Z2={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ja(r);const i=s||r.props&&r.props.type==="number";zs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ga(a)),t._assign(a)}),n&&zs(t,"change",()=>{t.value=t.value.trim()}),e||(zs(t,"compositionstart",Hb),zs(t,"compositionend",Pp),zs(t,"change",Pp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ja(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ga(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Q2={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Vc(e);zs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ga(ec(o)):ec(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ja(s)},mounted(t,{value:e}){Mp(t,e)},beforeUpdate(t,e,n){t._assign=Ja(n)},updated(t,{value:e}){Mp(t,e)}};function Mp(t,e){const n=t.multiple;if(!(n&&!Z(e)&&!Vc(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=ec(i);if(n)Z(e)?i.selected=_T(e,o)>-1:i.selected=e.has(o);else if(Hc(ec(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ec(t){return"_value"in t?t._value:t.value}const zb=["ctrl","shift","alt","meta"],Kb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zb.some(n=>t[`${n}Key`]&&!e.includes(n))},Wb=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Kb[e[r]];if(i&&i(n,e))return}return t(n,...s)},Y2={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),wi(t,!0),s.enter(t)):s.leave(t,()=>{wi(t,!1)}):wi(t,e))},beforeUnmount(t,{value:e}){wi(t,e)}};function wi(t,e){t.style.display=e?t._vod:"none"}const Gb=Ke({patchProp:Ob},_b);let Lp;function Zb(){return Lp||(Lp=XI(Gb))}const lv=(...t)=>{const e=Zb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Qb(s);if(!r)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Qb(t){return Ve(t)?document.querySelector(t):t}var Yb=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let uv;const nl=t=>uv=t,hv=Symbol();function Yu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($i||($i={}));function Xb(){const t=ay(!0),e=t.run(()=>rd({}));let n=[],s=[];const r=Kc({install(i){nl(r),r._a=i,i.provide(hv,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Yb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const dv=()=>{};function Up(t,e,n,s=dv){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&cy()&&ET(r),r}function kr(t,...e){t.slice().forEach(n=>{n(...e)})}const Jb=t=>t();function Xu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Yu(r)&&Yu(s)&&t.hasOwnProperty(n)&&!ze(s)&&!ys(s)?t[n]=Xu(r,s):t[n]=s}return t}const eC=Symbol();function tC(t){return!Yu(t)||!t.hasOwnProperty(eC)}const{assign:os}=Object;function nC(t){return!!(ze(t)&&t.effect)}function sC(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=JT(n.state.value[t]);return os(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Kc(Mt(()=>{nl(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=fv(t,l,e,n,s,!0),c}function fv(t,e,n={},s,r,i){let o;const a=os({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),rd({});let v;function T(k){let P;l=u=!1,typeof k=="function"?(k(s.state.value[t]),P={type:$i.patchFunction,storeId:t,events:f}):(Xu(s.state.value[t],k),P={type:$i.patchObject,payload:k,storeId:t,events:f});const Q=v=Symbol();Wc().then(()=>{v===Q&&(l=!0)}),u=!0,kr(h,P,s.state.value[t])}const S=i?function(){const{state:P}=n,Q=P?P():{};this.$patch(de=>{os(de,Q)})}:dv;function A(){o.stop(),h=[],d=[],s._s.delete(t)}function F(k,P){return function(){nl(s);const Q=Array.from(arguments),de=[],j=[];function pe(me){de.push(me)}function Ue(me){j.push(me)}kr(d,{args:Q,name:k,store:D,after:pe,onError:Ue});let et;try{et=P.apply(this&&this.$id===t?this:D,Q)}catch(me){throw kr(j,me),me}return et instanceof Promise?et.then(me=>(kr(de,me),me)).catch(me=>(kr(j,me),Promise.reject(me))):(kr(de,et),et)}}const _={_p:s,$id:t,$onAction:Up.bind(null,d),$patch:T,$reset:S,$subscribe(k,P={}){const Q=Up(h,k,P.detached,()=>de()),de=o.run(()=>Di(()=>s.state.value[t],j=>{(P.flush==="sync"?u:l)&&k({storeId:t,type:$i.direct,events:f},j)},os({},c,P)));return Q},$dispose:A},D=di(_);s._s.set(t,D);const ee=s._a&&s._a.runWithContext||Jb,te=s._e.run(()=>(o=ay(),ee(()=>o.run(e))));for(const k in te){const P=te[k];if(ze(P)&&!nC(P)||ys(P))i||(g&&tC(P)&&(ze(P)?P.value=g[k]:Xu(P,g[k])),s.state.value[t][k]=P);else if(typeof P=="function"){const Q=F(k,P);te[k]=Q,a.actions[k]=P}}return os(D,te),os(ve(D),te),Object.defineProperty(D,"$state",{get:()=>s.state.value[t],set:k=>{T(P=>{os(P,k)})}}),s._p.forEach(k=>{os(D,o.run(()=>k({store:D,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(D.$state,g),l=!0,u=!0,D}function rC(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=KI();return a=a||(l?on(hv,null):null),a&&nl(a),a=uv,a._s.has(s)||(i?fv(s,e,r,a):sC(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Nr=typeof window<"u";function iC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function nu(t,e){const n={};for(const s in e){const r=e[s];n[s]=un(r)?r.map(t):t(r)}return n}const Bi=()=>{},un=Array.isArray,oC=/\/$/,aC=t=>t.replace(oC,"");function su(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=hC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function cC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Zr(e.matched[s],n.matched[r])&&pv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uC(t[n],e[n]))return!1;return!0}function uC(t,e){return un(t)?$p(t,e):un(e)?$p(e,t):t===e}function $p(t,e){return un(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function hC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ro;(function(t){t.pop="pop",t.push="push"})(ro||(ro={}));var Vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vi||(Vi={}));function dC(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aC(t)}const fC=/^[^#]+#/;function pC(t,e){return t.replace(fC,"#")+e}function mC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const sl=()=>({left:window.pageXOffset,top:window.pageYOffset});function gC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=mC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Bp(t,e){return(history.state?history.state.position-e:-1)+t}const Ju=new Map;function yC(t,e){Ju.set(t,e)}function vC(t){const e=Ju.get(t);return Ju.delete(t),e}let _C=()=>location.protocol+"//"+location.host;function mv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Fp(c,"")}return Fp(n,t)+s+r}function wC(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=mv(t,location),g=n.value,v=e.value;let T=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}T=v?d.position-v.position:0}else s(f);r.forEach(S=>{S(n.value,g,{delta:T,type:ro.pop,direction:T?T>0?Vi.forward:Vi.back:Vi.unknown})})};function c(){o=n.value}function l(d){r.push(d);const f=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ae({},d.state,{scroll:sl()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Vp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?sl():null}}function EC(t){const{history:e,location:n}=window,s={value:mv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:_C()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ae({},e.state,Vp(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ae({},r.value,e.state,{forward:c,scroll:sl()});i(u.current,u,!0);const h=Ae({},Vp(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function TC(t){t=dC(t);const e=EC(t),n=wC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ae({location:"",base:t,go:s,createHref:pC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function IC(t){return typeof t=="string"||t&&typeof t=="object"}function gv(t){return typeof t=="string"||typeof t=="symbol"}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yv=Symbol("");var jp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jp||(jp={}));function Qr(t,e){return Ae(new Error,{type:t,[yv]:!0},e)}function Mn(t,e){return t instanceof Error&&yv in t&&(e==null||!!(t.type&e))}const qp="[^/]+?",bC={sensitive:!1,strict:!1,start:!0,end:!0},CC=/[.+*?^${}()[\]/\\]/g;function SC(t,e){const n=Ae({},bC,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(CC,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:T,regexp:S}=d;i.push({name:g,repeatable:v,optional:T});const A=S||qp;if(A!==qp){f+=10;try{new RegExp(`(${A})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+_.message)}}let F=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(F=T&&l.length<2?`(?:/${F})`:"/"+F),T&&(F+="?"),r+=F,f+=20,T&&(f+=-8),v&&(f+=-20),A===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:T}=f,S=g in l?l[g]:"";if(un(S)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=un(S)?S.join("/"):S;if(!A)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function AC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function kC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=AC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Hp(s))return 1;if(Hp(r))return-1}return r.length-s.length}function Hp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RC={type:0,value:""},NC=/[a-zA-Z0-9_]/;function xC(t){if(!t)return[[]];if(t==="/")return[[RC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:NC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function OC(t,e,n){const s=SC(xC(t.path),n),r=Ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function DC(t,e){const n=[],s=new Map;e=Wp({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const f=!d,g=PC(u);g.aliasOf=d&&d.record;const v=Wp(e,u),T=[g];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const _ of F)T.push(Ae({},g,{components:d?d.record.components:g.components,path:_,aliasOf:d?d.record:g}))}let S,A;for(const F of T){const{path:_}=F;if(h&&_[0]!=="/"){const D=h.record.path,ee=D[D.length-1]==="/"?"":"/";F.path=h.record.path+(_&&ee+_)}if(S=OC(F,h,v),d?d.alias.push(S):(A=A||S,A!==S&&A.alias.push(S),f&&u.name&&!Kp(S)&&o(u.name)),g.children){const D=g.children;for(let ee=0;ee<D.length;ee++)i(D[ee],S,d&&d.children[ee])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return A?()=>{o(A)}:Bi}function o(u){if(gv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&kC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!vv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Kp(u)&&s.set(u.record.name,u)}function l(u,h){let d,f={},g,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Qr(1,{location:u});v=d.record.name,f=Ae(zp(h.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&zp(u.params,d.keys.map(A=>A.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(A=>A.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(A=>A.re.test(h.path)),!d)throw Qr(1,{location:u,currentLocation:h});v=d.record.name,f=Ae({},h.params,u.params),g=d.stringify(f)}const T=[];let S=d;for(;S;)T.unshift(S.record),S=S.parent;return{name:v,path:g,params:f,matched:T,meta:LC(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function zp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function PC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:MC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function MC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Kp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LC(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Wp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function vv(t,e){return e.children.some(n=>n===t||vv(t,n))}const _v=/#/g,UC=/&/g,FC=/\//g,$C=/=/g,BC=/\?/g,wv=/\+/g,VC=/%5B/g,jC=/%5D/g,Ev=/%5E/g,qC=/%60/g,Tv=/%7B/g,HC=/%7C/g,Iv=/%7D/g,zC=/%20/g;function yd(t){return encodeURI(""+t).replace(HC,"|").replace(VC,"[").replace(jC,"]")}function KC(t){return yd(t).replace(Tv,"{").replace(Iv,"}").replace(Ev,"^")}function eh(t){return yd(t).replace(wv,"%2B").replace(zC,"+").replace(_v,"%23").replace(UC,"%26").replace(qC,"`").replace(Tv,"{").replace(Iv,"}").replace(Ev,"^")}function WC(t){return eh(t).replace($C,"%3D")}function GC(t){return yd(t).replace(_v,"%23").replace(BC,"%3F")}function ZC(t){return t==null?"":GC(t).replace(FC,"%2F")}function tc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(wv," "),o=i.indexOf("="),a=tc(o<0?i:i.slice(0,o)),c=o<0?null:tc(i.slice(o+1));if(a in e){let l=e[a];un(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Gp(t){let e="";for(let n in t){const s=t[n];if(n=WC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(s)?s.map(i=>i&&eh(i)):[s&&eh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=un(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const XC=Symbol(""),Zp=Symbol(""),vd=Symbol(""),bv=Symbol(""),th=Symbol("");function Ei(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cs(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Qr(4,{from:n,to:e})):h instanceof Error?a(h):IC(h)?a(Qr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ru(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(JC(a)){const l=(a.__vccOpts||a)[e];l&&r.push(cs(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=iC(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&cs(d,n,s,i,o)()}))}}return r}function JC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qp(t){const e=on(vd),n=on(bv),s=Mt(()=>e.resolve(vs(t.to))),r=Mt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Zr.bind(null,u));if(d>-1)return d;const f=Yp(c[l-2]);return l>1&&Yp(u)===f&&h[h.length-1].path!==f?h.findIndex(Zr.bind(null,c[l-2])):d}),i=Mt(()=>r.value>-1&&sS(n.params,s.value.params)),o=Mt(()=>r.value>-1&&r.value===n.matched.length-1&&pv(n.params,s.value.params));function a(c={}){return nS(c)?e[vs(t.replace)?"replace":"push"](vs(t.to)).catch(Bi):Promise.resolve()}return{route:s,href:Mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const eS=Dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qp,setup(t,{slots:e}){const n=di(Qp(t)),{options:s}=on(vd),r=Mt(()=>({[Xp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),tS=eS;function nS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sS(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!un(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Yp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xp=(t,e,n)=>t??e??n,rS=Dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=on(th),r=Mt(()=>t.route||s.value),i=on(Zp,0),o=Mt(()=>{let l=vs(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Mt(()=>r.value.matched[o.value]);Ma(Zp,Mt(()=>o.value+1)),Ma(XC,a),Ma(th,r);const c=rd();return Di(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Zr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Jp(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,T=nv(d,Ae({},g,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Jp(n.default,{Component:T,route:l})||T}}});function Jp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Cv=rS;function iS(t){const e=DC(t.routes,t),n=t.parseQuery||QC,s=t.stringifyQuery||Gp,r=t.history,i=Ei(),o=Ei(),a=Ei(),c=QT(ss);let l=ss;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nu.bind(null,I=>""+I),h=nu.bind(null,ZC),d=nu.bind(null,tc);function f(I,H){let U,G;return gv(I)?(U=e.getRecordMatcher(I),G=H):G=I,e.addRoute(G,U)}function g(I){const H=e.getRecordMatcher(I);H&&e.removeRoute(H)}function v(){return e.getRoutes().map(I=>I.record)}function T(I){return!!e.getRecordMatcher(I)}function S(I,H){if(H=Ae({},H||c.value),typeof I=="string"){const y=su(n,I,H.path),w=e.resolve({path:y.path},H),b=r.createHref(y.fullPath);return Ae(y,w,{params:d(w.params),hash:tc(y.hash),redirectedFrom:void 0,href:b})}let U;if("path"in I)U=Ae({},I,{path:su(n,I.path,H.path).path});else{const y=Ae({},I.params);for(const w in y)y[w]==null&&delete y[w];U=Ae({},I,{params:h(y)}),H.params=h(H.params)}const G=e.resolve(U,H),Se=I.hash||"";G.params=u(d(G.params));const p=cC(s,Ae({},I,{hash:KC(Se),path:G.path})),m=r.createHref(p);return Ae({fullPath:p,hash:Se,query:s===Gp?YC(I.query):I.query||{}},G,{redirectedFrom:void 0,href:m})}function A(I){return typeof I=="string"?su(n,I,c.value.path):Ae({},I)}function F(I,H){if(l!==I)return Qr(8,{from:H,to:I})}function _(I){return te(I)}function D(I){return _(Ae(A(I),{replace:!0}))}function ee(I){const H=I.matched[I.matched.length-1];if(H&&H.redirect){const{redirect:U}=H;let G=typeof U=="function"?U(I):U;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=A(G):{path:G},G.params={}),Ae({query:I.query,hash:I.hash,params:"path"in G?{}:I.params},G)}}function te(I,H){const U=l=S(I),G=c.value,Se=I.state,p=I.force,m=I.replace===!0,y=ee(U);if(y)return te(Ae(A(y),{state:typeof y=="object"?Ae({},Se,y.state):Se,force:p,replace:m}),H||U);const w=U;w.redirectedFrom=H;let b;return!p&&lC(s,G,U)&&(b=Qr(16,{to:w,from:G}),gn(G,G,!0,!1)),(b?Promise.resolve(b):Q(w,G)).catch(C=>Mn(C)?Mn(C,2)?C:es(C):Ce(C,w,G)).then(C=>{if(C){if(Mn(C,2))return te(Ae({replace:m},A(C.to),{state:typeof C.to=="object"?Ae({},Se,C.to.state):Se,force:p}),H||w)}else C=j(w,G,!0,m,Se);return de(w,G,C),C})}function k(I,H){const U=F(I,H);return U?Promise.reject(U):Promise.resolve()}function P(I){const H=Cr.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(I):I()}function Q(I,H){let U;const[G,Se,p]=oS(I,H);U=ru(G.reverse(),"beforeRouteLeave",I,H);for(const y of G)y.leaveGuards.forEach(w=>{U.push(cs(w,I,H))});const m=k.bind(null,I,H);return U.push(m),ut(U).then(()=>{U=[];for(const y of i.list())U.push(cs(y,I,H));return U.push(m),ut(U)}).then(()=>{U=ru(Se,"beforeRouteUpdate",I,H);for(const y of Se)y.updateGuards.forEach(w=>{U.push(cs(w,I,H))});return U.push(m),ut(U)}).then(()=>{U=[];for(const y of I.matched)if(y.beforeEnter&&!H.matched.includes(y))if(un(y.beforeEnter))for(const w of y.beforeEnter)U.push(cs(w,I,H));else U.push(cs(y.beforeEnter,I,H));return U.push(m),ut(U)}).then(()=>(I.matched.forEach(y=>y.enterCallbacks={}),U=ru(p,"beforeRouteEnter",I,H),U.push(m),ut(U))).then(()=>{U=[];for(const y of o.list())U.push(cs(y,I,H));return U.push(m),ut(U)}).catch(y=>Mn(y,8)?y:Promise.reject(y))}function de(I,H,U){for(const G of a.list())P(()=>G(I,H,U))}function j(I,H,U,G,Se){const p=F(I,H);if(p)return p;const m=H===ss,y=Nr?history.state:{};U&&(G||m?r.replace(I.fullPath,Ae({scroll:m&&y&&y.scroll},Se)):r.push(I.fullPath,Se)),c.value=I,gn(I,H,U,m),es()}let pe;function Ue(){pe||(pe=r.listen((I,H,U)=>{if(!ha.listening)return;const G=S(I),Se=ee(G);if(Se){te(Ae(Se,{replace:!0}),G).catch(Bi);return}l=G;const p=c.value;Nr&&yC(Bp(p.fullPath,U.delta),sl()),Q(G,p).catch(m=>Mn(m,12)?m:Mn(m,2)?(te(m.to,G).then(y=>{Mn(y,20)&&!U.delta&&U.type===ro.pop&&r.go(-1,!1)}).catch(Bi),Promise.reject()):(U.delta&&r.go(-U.delta,!1),Ce(m,G,p))).then(m=>{m=m||j(G,p,!1),m&&(U.delta&&!Mn(m,8)?r.go(-U.delta,!1):U.type===ro.pop&&Mn(m,20)&&r.go(-1,!1)),de(G,p,m)}).catch(Bi)}))}let et=Ei(),me=Ei(),Ie;function Ce(I,H,U){es(I);const G=me.list();return G.length?G.forEach(Se=>Se(I,H,U)):console.error(I),Promise.reject(I)}function Pn(){return Ie&&c.value!==ss?Promise.resolve():new Promise((I,H)=>{et.add([I,H])})}function es(I){return Ie||(Ie=!I,Ue(),et.list().forEach(([H,U])=>I?U(I):H()),et.reset()),I}function gn(I,H,U,G){const{scrollBehavior:Se}=t;if(!Nr||!Se)return Promise.resolve();const p=!U&&vC(Bp(I.fullPath,0))||(G||!U)&&history.state&&history.state.scroll||null;return Wc().then(()=>Se(I,H,p)).then(m=>m&&gC(m)).catch(m=>Ce(m,I,H))}const At=I=>r.go(I);let br;const Cr=new Set,ha={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:T,getRoutes:v,resolve:S,options:t,push:_,replace:D,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:Pn,install(I){const H=this;I.component("RouterLink",tS),I.component("RouterView",Cv),I.config.globalProperties.$router=H,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>vs(c)}),Nr&&!br&&c.value===ss&&(br=!0,_(r.location).catch(Se=>{}));const U={};for(const Se in ss)U[Se]=Mt(()=>c.value[Se]);I.provide(vd,H),I.provide(bv,di(U)),I.provide(th,c);const G=I.unmount;Cr.add(I),I.unmount=function(){Cr.delete(I),Cr.size<1&&(l=ss,pe&&pe(),pe=null,c.value=ss,br=!1,Ie=!1),G()}}};function ut(I){return I.reduce((H,U)=>H.then(()=>P(U)),Promise.resolve())}return ha}function oS(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zr(l,c))||r.push(c))}return[n,s,r]}const aS=t=>(lI("data-v-029362bf"),t=t(),uI(),t),cS=aS(()=>Os("div",{id:"modal"},null,-1)),lS=Dn({__name:"App",setup(t){return(e,n)=>($e(),Kt(at,null,[st(vs(Cv)),cS],64))}});const uS=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},hS=uS(lS,[["__scopeId","data-v-029362bf"]]),dS="modulepreload",fS=function(t){return"/"+t},em={},_a=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=fS(i),i in em)return;em[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":dS,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/**
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
 */const Sv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Av={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new mS;const d=i<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gS=function(t){const e=Sv(t);return Av.encodeByteArray(e,!0)},nc=function(t){return gS(t).replace(/\./g,"")},kv=function(t){try{return Av.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vS=()=>yS().__FIREBASE_DEFAULTS__,_S=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kv(t[1]);return e&&JSON.parse(e)},rl=()=>{try{return vS()||_S()||wS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rv=t=>{var e,n;return(n=(e=rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nv=t=>{const e=Rv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xv=()=>{var t;return(t=rl())===null||t===void 0?void 0:t.config},Ov=t=>{var e;return(e=rl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ES{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Dv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),a].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function IS(){var t;const e=(t=rl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CS(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mv(){try{return typeof indexedDB=="object"}catch{return!1}}function Lv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function SS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const AS="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=AS,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?kS(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yt(r,a,s)}}function kS(t,e){return t.replace(RS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const RS=/\{\$([^}]+)}/g;function NS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function io(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(tm(i)&&tm(o)){if(!io(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function tm(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xS(t,e){const n=new OS(t,e);return n.subscribe.bind(n)}class OS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");DS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=iu),r.error===void 0&&(r.error=iu),r.complete===void 0&&(r.complete=iu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function iu(){}/**
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
 */const PS=1e3,MS=2,LS=4*60*60*1e3,US=.5;function nm(t,e=PS,n=MS){const s=e*Math.pow(n,t),r=Math.round(US*s*(Math.random()-.5)*2);return Math.min(LS,s+r)}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const js="[DEFAULT]";/**
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
 */class FS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ES;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BS(e))try{this.getOrInitializeService({instanceIdentifier:js})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=js){return this.instances.has(e)}getOptions(e=js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$S(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=js){return this.component?this.component.multipleInstances?e:js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $S(t){return t===js?void 0:t}function BS(t){return t.instantiationMode==="EAGER"}/**
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
 */class VS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const jS={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},qS=Ee.INFO,HS={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},zS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=HS[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class il{constructor(e){this.name=e,this._logLevel=qS,this._logHandler=zS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const KS=(t,e)=>e.some(n=>t instanceof n);let sm,rm;function WS(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GS(){return rm||(rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uv=new WeakMap,nh=new WeakMap,Fv=new WeakMap,ou=new WeakMap,_d=new WeakMap;function ZS(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ws(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uv.set(n,t)}).catch(()=>{}),_d.set(e,t),e}function QS(t){if(nh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nh.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YS(t){sh=t(sh)}function XS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(au(this),e,...n);return Fv.set(s,e.sort?e.sort():[e]),ws(s)}:GS().includes(t)?function(...e){return t.apply(au(this),e),ws(Uv.get(this))}:function(...e){return ws(t.apply(au(this),e))}}function JS(t){return typeof t=="function"?XS(t):(t instanceof IDBTransaction&&QS(t),KS(t,WS())?new Proxy(t,sh):t)}function ws(t){if(t instanceof IDBRequest)return ZS(t);if(ou.has(t))return ou.get(t);const e=JS(t);return e!==t&&(ou.set(t,e),_d.set(e,t)),e}const au=t=>_d.get(t);function eA(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const tA=["get","getKey","getAll","getAllKeys","count"],nA=["put","add","delete","clear"],cu=new Map;function im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cu.get(e))return cu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=nA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||tA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return cu.set(e,i),i}YS(t=>({...t,get:(e,n,s)=>im(e,n)||t.get(e,n,s),has:(e,n)=>!!im(e,n)||t.has(e,n)}));/**
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
 */class sA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function rA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rh="@firebase/app",om="0.9.10";/**
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
 */const cr=new il("@firebase/app"),iA="@firebase/app-compat",oA="@firebase/analytics-compat",aA="@firebase/analytics",cA="@firebase/app-check-compat",lA="@firebase/app-check",uA="@firebase/auth",hA="@firebase/auth-compat",dA="@firebase/database",fA="@firebase/database-compat",pA="@firebase/functions",mA="@firebase/functions-compat",gA="@firebase/installations",yA="@firebase/installations-compat",vA="@firebase/messaging",_A="@firebase/messaging-compat",wA="@firebase/performance",EA="@firebase/performance-compat",TA="@firebase/remote-config",IA="@firebase/remote-config-compat",bA="@firebase/storage",CA="@firebase/storage-compat",SA="@firebase/firestore",AA="@firebase/firestore-compat",kA="firebase",RA="9.22.0";/**
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
 */const ih="[DEFAULT]",NA={[rh]:"fire-core",[iA]:"fire-core-compat",[aA]:"fire-analytics",[oA]:"fire-analytics-compat",[lA]:"fire-app-check",[cA]:"fire-app-check-compat",[uA]:"fire-auth",[hA]:"fire-auth-compat",[dA]:"fire-rtdb",[fA]:"fire-rtdb-compat",[pA]:"fire-fn",[mA]:"fire-fn-compat",[gA]:"fire-iid",[yA]:"fire-iid-compat",[vA]:"fire-fcm",[_A]:"fire-fcm-compat",[wA]:"fire-perf",[EA]:"fire-perf-compat",[TA]:"fire-rc",[IA]:"fire-rc-compat",[bA]:"fire-gcs",[CA]:"fire-gcs-compat",[SA]:"fire-fst",[AA]:"fire-fst-compat","fire-js":"fire-js",[kA]:"fire-js-all"};/**
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
 */const sc=new Map,oh=new Map;function xA(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(oh.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,t);for(const n of sc.values())xA(n,t);return!0}function Ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const OA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Es=new _r("app","Firebase",OA);/**
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
 */class DA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Es.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=RA;function $v(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ih,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Es.create("bad-app-name",{appName:String(r)});if(n||(n=xv()),!n)throw Es.create("no-options");const i=sc.get(r);if(i){if(io(n,i.options)&&io(s,i.config))return i;throw Es.create("duplicate-app",{appName:r})}const o=new VS(r);for(const c of oh.values())o.addComponent(c);const a=new DA(n,s,o);return sc.set(r,a),a}function ol(t=ih){const e=sc.get(t);if(!e&&t===ih&&xv())return $v();if(!e)throw Es.create("no-app",{appName:t});return e}function Nt(t,e,n){var s;let r=(s=NA[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}hn(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const PA="firebase-heartbeat-database",MA=1,oo="firebase-heartbeat-store";let lu=null;function Bv(){return lu||(lu=eA(PA,MA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oo)}}}).catch(t=>{throw Es.create("idb-open",{originalErrorMessage:t.message})})),lu}async function LA(t){try{return await(await Bv()).transaction(oo).objectStore(oo).get(Vv(t))}catch(e){if(e instanceof Yt)cr.warn(e.message);else{const n=Es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function am(t,e){try{const s=(await Bv()).transaction(oo,"readwrite");await s.objectStore(oo).put(e,Vv(t)),await s.done}catch(n){if(n instanceof Yt)cr.warn(n.message);else{const s=Es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(s.message)}}}function Vv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UA=1024,FA=30*24*60*60*1e3;class $A{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=FA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cm(),{heartbeatsToSend:n,unsentEntries:s}=BA(this._heartbeatsCache.heartbeats),r=nc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function cm(){return new Date().toISOString().substring(0,10)}function BA(t,e=UA){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),lm(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),lm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mv()?Lv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lm(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jA(t){hn(new Qt("platform-logger",e=>new sA(e),"PRIVATE")),hn(new Qt("heartbeat",e=>new $A(e),"PRIVATE")),Nt(rh,om,t),Nt(rh,om,"esm2017"),Nt("fire-js","")}jA("");var qA="firebase",HA="9.22.0";/**
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
 */Nt(qA,HA,"app");function wd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zA=jv,qv=new _r("auth","Firebase",jv());/**
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
 */const rc=new il("@firebase/auth");function KA(t,...e){rc.logLevel<=Ee.WARN&&rc.warn(`Auth (${wr}): ${t}`,...e)}function Ua(t,...e){rc.logLevel<=Ee.ERROR&&rc.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function Rn(t,...e){throw Ed(t,...e)}function bn(t,...e){return Ed(t,...e)}function Hv(t,e,n){const s=Object.assign(Object.assign({},zA()),{[e]:n});return new _r("auth","Firebase",s).create(e,{appName:t.name})}function WA(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Rn(t,"argument-error"),Hv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ed(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return qv.create(t,...e)}function ae(t,e,...n){if(!t)throw Ed(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function Wn(t,e){t||$n(e)}/**
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
 */function ah(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GA(){return um()==="http:"||um()==="https:"}function um(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GA()||Pv()||"connection"in navigator)?navigator.onLine:!0}function QA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=TS()||bS()}get(){return ZA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Td(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XA=new Bo(3e4,6e4);function Kv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vo(t,e,n,s,r={}){return Wv(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$o(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zv.fetch()(Gv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Wv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},YA),e);try{const r=new ek(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wa(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hv(t,u,l);Rn(t,u)}}catch(r){if(r instanceof Yt)throw r;Rn(t,"network-request-failed",{message:String(r)})}}async function JA(t,e,n,s,r={}){const i=await Vo(t,e,n,s,r);return"mfaPendingCredential"in i&&Rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Gv(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Td(t.config,r):`${t.config.apiScheme}://${r}`}class ek{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bn(this.auth,"network-request-failed")),XA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=bn(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function tk(t,e){return Vo(t,"POST","/v1/accounts:delete",e)}async function nk(t,e){return Vo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sk(t,e=!1){const n=Le(t),s=await n.getIdToken(e),r=Id(s);ae(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ji(uu(r.auth_time)),issuedAtTime:ji(uu(r.iat)),expirationTime:ji(uu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uu(t){return Number(t)*1e3}function Id(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const r=kv(n);return r?JSON.parse(r):(Ua("Failed to decode base64 JWT payload"),null)}catch(r){return Ua("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rk(t){const e=Id(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&ik(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ik({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ic(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ao(t,nk(n,{idToken:s}));ae(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lk(i.providerUserInfo):[],a=ck(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Zv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ak(t){const e=Le(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ck(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function lk(t){return t.map(e=>{var{providerId:n}=e,s=wd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function uk(t,e){const n=await Wv(t,{},async()=>{const s=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Gv(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await uk(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new co;return s&&(ae(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ae(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function rs(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sk(this,e)}reload(){return ak(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ao(this,tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:_,isAnonymous:D,providerData:ee,stsTokenManager:te}=n;ae(F&&te,e,"internal-error");const k=co.fromJSON(this.name,te);ae(typeof F=="string",e,"internal-error"),rs(h,e.name),rs(d,e.name),ae(typeof _=="boolean",e,"internal-error"),ae(typeof D=="boolean",e,"internal-error"),rs(f,e.name),rs(g,e.name),rs(v,e.name),rs(T,e.name),rs(S,e.name),rs(A,e.name);const P=new nr({uid:F,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:D,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:k,createdAt:S,lastLoginAt:A});return ee&&Array.isArray(ee)&&(P.providerData=ee.map(Q=>Object.assign({},Q))),T&&(P._redirectEventId=T),P}static async _fromIdTokenResponse(e,n,s=!1){const r=new co;r.updateFromServerResponse(n);const i=new nr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ic(i),i}}/**
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
 */const hm=new Map;function Bn(t){Wn(t instanceof Function,"Expected a class definition");let e=hm.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hm.set(t,e),e)}/**
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
 */class Qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qv.type="NONE";const dm=Qv;/**
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
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Fa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new $r(Bn(dm),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Bn(dm);const o=Fa(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=nr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $r(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new $r(i,e,s))}}/**
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
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t_(e))return"Blackberry";if(n_(e))return"Webos";if(bd(e))return"Safari";if((e.includes("chrome/")||Xv(e))&&!e.includes("edge/"))return"Chrome";if(e_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yv(t=_t()){return/firefox\//i.test(t)}function bd(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xv(t=_t()){return/crios\//i.test(t)}function Jv(t=_t()){return/iemobile/i.test(t)}function e_(t=_t()){return/android/i.test(t)}function t_(t=_t()){return/blackberry/i.test(t)}function n_(t=_t()){return/webos/i.test(t)}function al(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hk(t=_t()){var e;return al(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dk(){return CS()&&document.documentMode===10}function s_(t=_t()){return al(t)||e_(t)||n_(t)||t_(t)||/windows phone/i.test(t)||Jv(t)}function fk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function r_(t,e=[]){let n;switch(t){case"Browser":n=fm(_t());break;case"Worker":n=`${fm(_t())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${s}`}async function i_(t,e){return Vo(t,"GET","/v2/recaptchaConfig",Kv(t,e))}function pm(t){return t!==void 0&&t.enterprise!==void 0}class o_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function pk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function a_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=bn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",pk().appendChild(s)})}function mk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gk="https://www.google.com/recaptcha/enterprise.js?render=",yk="recaptcha-enterprise",vk="NO_RECAPTCHA";class _k{constructor(e){this.type=yk,this.auth=jo(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{i_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new o_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;pm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(vk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&pm(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}a_(gk+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class wk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class Ek{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mm(this),this.idTokenSubscription=new mm(this),this.beforeStateQueue=new wk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}async initializeRecaptchaConfig(){const e=await i_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new o_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new _k(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _r("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jo(t){return Le(t)}class mm{constructor(e){this.auth=e,this.observer=null,this.addObserver=xS(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Tk(t,e){const n=Ds(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(io(i,e??{}))return r;Rn(r,"already-initialized")}return n.initialize({options:e})}function Ik(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bk(t,e,n){const s=jo(t);ae(s._canInitEmulator,s,"emulator-config-failed"),ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=c_(e),{host:o,port:a}=Ck(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Sk()}function c_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ck(t){const e=c_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:gm(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class l_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}/**
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
 */async function Br(t,e){return JA(t,"POST","/v1/accounts:signInWithIdp",Kv(t,e))}/**
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
 */const Ak="http://localhost";class lr extends l_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wd(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new lr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Br(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Br(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Br(e,n)}buildRequest(){const e={requestUri:Ak,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */class Cd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qo extends Cd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ls extends qo{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
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
 */class us extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return us.credential(n,s)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
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
 */class hs extends qo{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
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
 */class ds extends qo{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await nr._fromIdTokenResponse(e,s,r),o=ym(s);return new Yr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ym(s);return new Yr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oc extends Yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new oc(e,n,s,r)}}function u_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,i,e,s):i})}async function kk(t,e,n=!1){const s=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",s)}/**
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
 */async function Rk(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ao(t,u_(s,r,e,t),n);ae(i.idToken,s,"internal-error");const o=Id(i.idToken);ae(o,s,"internal-error");const{sub:a}=o;return ae(t.uid===a,s,"user-mismatch"),Yr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Rn(s,"user-mismatch"),i}}/**
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
 */async function Nk(t,e,n=!1){const s="signIn",r=await u_(t,s,e),i=await Yr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function xk(t,e,n,s){return Le(t).onIdTokenChanged(e,n,s)}function Ok(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function Dk(t,e,n,s){return Le(t).onAuthStateChanged(e,n,s)}function X2(t){return Le(t).signOut()}const ac="__sak";/**
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
 */class h_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pk(){const t=_t();return bd(t)||al(t)}const Mk=1e3,Lk=10;class d_ extends h_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pk()&&fk(),this.fallbackToPolling=s_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);dk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Lk):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d_.type="LOCAL";const Uk=d_;/**
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
 */class f_ extends h_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}f_.type="SESSION";const p_=f_;/**
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
 */function Fk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new cl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Fk(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
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
 */function Sd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $k{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Sd("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function Bk(t){Cn().location.href=t}/**
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
 */function m_(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function Vk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qk(){return m_()?self:null}/**
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
 */const g_="firebaseLocalStorageDb",Hk=1,cc="firebaseLocalStorage",y_="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ll(t,e){return t.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function zk(){const t=indexedDB.deleteDatabase(g_);return new Ho(t).toPromise()}function ch(){const t=indexedDB.open(g_,Hk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(cc,{keyPath:y_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(cc)?e(s):(s.close(),await zk(),e(await ch()))})})}async function vm(t,e,n){const s=ll(t,!0).put({[y_]:e,value:n});return new Ho(s).toPromise()}async function Kk(t,e){const n=ll(t,!1).get(e),s=await new Ho(n).toPromise();return s===void 0?null:s.value}function _m(t,e){const n=ll(t,!0).delete(e);return new Ho(n).toPromise()}const Wk=800,Gk=3;class v_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Gk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return m_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(qk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vk(),!this.activeServiceWorker)return;this.sender=new $k(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ch();return await vm(e,ac,"1"),await _m(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Kk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ll(r,!1).getAll();return new Ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v_.type="LOCAL";const Zk=v_;new Bo(3e4,6e4);/**
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
 */function __(t,e){return e?Bn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ad extends l_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qk(t){return Nk(t.auth,new Ad(t),t.bypassAuthState)}function Yk(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Rk(n,new Ad(t),t.bypassAuthState)}async function Xk(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),kk(n,new Ad(t),t.bypassAuthState)}/**
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
 */class w_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qk;case"linkViaPopup":case"linkViaRedirect":return Xk;case"reauthViaPopup":case"reauthViaRedirect":return Yk;default:Rn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jk=new Bo(2e3,1e4);async function J2(t,e,n){const s=jo(t);WA(t,e,Cd);const r=__(s,n);return new Ws(s,"signInViaPopup",e,r).executeNotNull()}class Ws extends w_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jk.get())};e()}}Ws.currentPopupAction=null;/**
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
 */const e1="pendingRedirect",$a=new Map;class t1 extends w_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=$a.get(this.auth._key());if(!e){try{const s=await n1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}$a.set(this.auth._key(),e)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n1(t,e){const n=i1(e),s=r1(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function s1(t,e){$a.set(t._key(),e)}function r1(t){return Bn(t._redirectPersistence)}function i1(t){return Fa(e1,t.config.apiKey,t.name)}async function o1(t,e,n=!1){const s=jo(t),r=__(s,e),o=await new t1(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const a1=10*60*1e3;class c1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!E_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a1&&this.cachedEventUids.clear(),this.cachedEventUids.has(wm(e))}saveEventToCache(e){this.cachedEventUids.add(wm(e)),this.lastProcessedEventTime=Date.now()}}function wm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E_(t);default:return!1}}/**
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
 */async function u1(t,e={}){return Vo(t,"GET","/v1/projects",e)}/**
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
 */const h1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d1=/^https?/;async function f1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u1(t);for(const n of e)try{if(p1(n))return}catch{}Rn(t,"unauthorized-domain")}function p1(t){const e=ah(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!d1.test(n))return!1;if(h1.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const m1=new Bo(3e4,6e4);function Em(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function g1(t){return new Promise((e,n)=>{var s,r,i;function o(){Em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Em(),n(bn(t,"network-request-failed"))},timeout:m1.get()})}if(!((r=(s=Cn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const a=mk("iframefcb");return Cn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},a_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function y1(t){return Ba=Ba||g1(t),Ba}/**
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
 */const v1=new Bo(5e3,15e3),_1="__/auth/iframe",w1="emulator/auth/iframe",E1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I1(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Td(e,w1):`https://${t.config.authDomain}/${_1}`,s={apiKey:e.apiKey,appName:t.name,v:wr},r=T1.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$o(s).slice(1)}`}async function b1(t){const e=await y1(t),n=Cn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:I1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E1,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Cn().setTimeout(()=>{i(o)},v1.get());function c(){Cn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const C1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S1=500,A1=600,k1="_blank",R1="http://localhost";class Tm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(t,e,n,s=S1,r=A1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},C1),{width:s.toString(),height:r.toString(),top:i,left:o}),l=_t().toLowerCase();n&&(a=Xv(l)?k1:n),Yv(l)&&(e=e||R1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(hk(l)&&a!=="_self")return x1(e||"",a),new Tm(null);const h=window.open(e||"",a,u);ae(h,t,"popup-blocked");try{h.focus()}catch{}return new Tm(h)}function x1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const O1="__/auth/handler",D1="emulator/auth/handler",P1=encodeURIComponent("fac");async function Im(t,e,n,s,r,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:wr,eventId:r};if(e instanceof Cd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof qo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${P1}=${encodeURIComponent(c)}`:"";return`${M1(t)}?${$o(a).slice(1)}${l}`}function M1({config:t}){return t.emulator?Td(t,D1):`https://${t.authDomain}/${O1}`}/**
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
 */const hu="webStorageSupport";class L1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p_,this._completeRedirectFn=o1,this._overrideRedirectResult=s1}async _openPopup(e,n,s,r){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Im(e,n,s,ah(),r);return N1(e,o,Sd())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Im(e,n,s,ah(),r);return Bk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Wn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await b1(e),s=new c1(e);return n.register("authEvent",r=>(ae(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hu,{type:hu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[hu];o!==void 0&&n(!!o),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s_()||bd()||al()}}const U1=L1;var bm="@firebase/auth",Cm="0.23.2";/**
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
 */class F1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function B1(t){hn(new Qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r_(t)},l=new Ek(s,r,i,c);return Ik(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),hn(new Qt("auth-internal",e=>{const n=jo(e.getProvider("auth").getImmediate());return(s=>new F1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(bm,Cm,$1(t)),Nt(bm,Cm,"esm2017")}/**
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
 */const V1=5*60,j1=Ov("authIdTokenMaxAge")||V1;let Sm=null;const q1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>j1)return;const r=n==null?void 0:n.token;Sm!==r&&(Sm=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function H1(t=ol()){const e=Ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tk(t,{popupRedirectResolver:U1,persistence:[Zk,Uk,p_]}),s=Ov("authTokenSyncURL");if(s){const i=q1(s);Ok(n,i,()=>i(n.currentUser)),xk(n,o=>i(o))}const r=Rv("auth");return r&&bk(n,`http://${r}`),n}B1("Browser");const z1=(t,e)=>e.some(n=>t instanceof n);let Am,km;function K1(){return Am||(Am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W1(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const T_=new WeakMap,lh=new WeakMap,I_=new WeakMap,du=new WeakMap,kd=new WeakMap;function G1(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ts(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&T_.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function Z1(t){if(lh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lh.set(t,e)}let uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q1(t){uh=t(uh)}function Y1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fu(this),e,...n);return I_.set(s,e.sort?e.sort():[e]),Ts(s)}:W1().includes(t)?function(...e){return t.apply(fu(this),e),Ts(T_.get(this))}:function(...e){return Ts(t.apply(fu(this),e))}}function X1(t){return typeof t=="function"?Y1(t):(t instanceof IDBTransaction&&Z1(t),z1(t,K1())?new Proxy(t,uh):t)}function Ts(t){if(t instanceof IDBRequest)return G1(t);if(du.has(t))return du.get(t);const e=X1(t);return e!==t&&(du.set(t,e),kd.set(e,t)),e}const fu=t=>kd.get(t);function J1(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ts(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ts(o.result),c.oldVersion,c.newVersion,Ts(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],pu=new Map;function Rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pu.get(e))return pu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=tR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||eR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return pu.set(e,i),i}Q1(t=>({...t,get:(e,n,s)=>Rm(e,n)||t.get(e,n,s),has:(e,n)=>!!Rm(e,n)||t.has(e,n)}));const b_="@firebase/installations",Rd="0.6.4";/**
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
 */const C_=1e4,S_=`w:${Rd}`,A_="FIS_v2",nR="https://firebaseinstallations.googleapis.com/v1",sR=60*60*1e3,rR="installations",iR="Installations";/**
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
 */const oR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ur=new _r(rR,iR,oR);function k_(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
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
 */function R_({projectId:t}){return`${nR}/projects/${t}/installations`}function N_(t){return{token:t.token,requestStatus:2,expiresIn:cR(t.expiresIn),creationTime:Date.now()}}async function x_(t,e){const s=(await e.json()).error;return ur.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function O_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aR(t,{refreshToken:e}){const n=O_(t);return n.append("Authorization",lR(e)),n}async function D_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cR(t){return Number(t.replace("s","000"))}function lR(t){return`${A_} ${t}`}/**
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
 */async function uR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=R_(t),r=O_(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:A_,appId:t.appId,sdkVersion:S_},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await D_(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:N_(l.authToken)}}else throw await x_("Create Installation",c)}/**
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
 */function P_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function hR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dR=/^[cdef][\w-]{21}$/,hh="";function fR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pR(t);return dR.test(n)?n:hh}catch{return hh}}function pR(t){return hR(t).substr(0,22)}/**
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
 */function ul(t){return`${t.appName}!${t.appId}`}/**
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
 */const M_=new Map;function L_(t,e){const n=ul(t);U_(n,e),mR(n,e)}function U_(t,e){const n=M_.get(t);if(n)for(const s of n)s(e)}function mR(t,e){const n=gR();n&&n.postMessage({key:t,fid:e}),yR()}let Gs=null;function gR(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=t=>{U_(t.data.key,t.data.fid)}),Gs}function yR(){M_.size===0&&Gs&&(Gs.close(),Gs=null)}/**
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
 */const vR="firebase-installations-database",_R=1,hr="firebase-installations-store";let mu=null;function Nd(){return mu||(mu=J1(vR,_R,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hr)}}})),mu}async function lc(t,e){const n=ul(t),r=(await Nd()).transaction(hr,"readwrite"),i=r.objectStore(hr),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&L_(t,e.fid),e}async function F_(t){const e=ul(t),s=(await Nd()).transaction(hr,"readwrite");await s.objectStore(hr).delete(e),await s.done}async function hl(t,e){const n=ul(t),r=(await Nd()).transaction(hr,"readwrite"),i=r.objectStore(hr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&L_(t,a.fid),a}/**
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
 */async function xd(t){let e;const n=await hl(t.appConfig,s=>{const r=wR(s),i=ER(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===hh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wR(t){const e=t||{fid:fR(),registrationStatus:0};return $_(e)}function ER(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ur.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=TR(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:IR(t)}:{installationEntry:e}}async function TR(t,e){try{const n=await uR(t,e);return lc(t.appConfig,n)}catch(n){throw k_(n)&&n.customData.serverCode===409?await F_(t.appConfig):await lc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function IR(t){let e=await Nm(t.appConfig);for(;e.registrationStatus===1;)await P_(100),e=await Nm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await xd(t);return s||n}return e}function Nm(t){return hl(t,e=>{if(!e)throw ur.create("installation-not-found");return $_(e)})}function $_(t){return bR(t)?{fid:t.fid,registrationStatus:0}:t}function bR(t){return t.registrationStatus===1&&t.registrationTime+C_<Date.now()}/**
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
 */async function CR({appConfig:t,heartbeatServiceProvider:e},n){const s=SR(t,n),r=aR(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:S_,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await D_(()=>fetch(s,a));if(c.ok){const l=await c.json();return N_(l)}else throw await x_("Generate Auth Token",c)}function SR(t,{fid:e}){return`${R_(t)}/${e}/authTokens:generate`}/**
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
 */async function Od(t,e=!1){let n;const s=await hl(t.appConfig,i=>{if(!B_(i))throw ur.create("not-registered");const o=i.authToken;if(!e&&RR(o))return i;if(o.requestStatus===1)return n=AR(t,e),i;{if(!navigator.onLine)throw ur.create("app-offline");const a=xR(i);return n=kR(t,a),a}});return n?await n:s.authToken}async function AR(t,e){let n=await xm(t.appConfig);for(;n.authToken.requestStatus===1;)await P_(100),n=await xm(t.appConfig);const s=n.authToken;return s.requestStatus===0?Od(t,e):s}function xm(t){return hl(t,e=>{if(!B_(e))throw ur.create("not-registered");const n=e.authToken;return OR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kR(t,e){try{const n=await CR(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await lc(t.appConfig,s),n}catch(n){if(k_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await F_(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lc(t.appConfig,s)}throw n}}function B_(t){return t!==void 0&&t.registrationStatus===2}function RR(t){return t.requestStatus===2&&!NR(t)}function NR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sR}function xR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function OR(t){return t.requestStatus===1&&t.requestTime+C_<Date.now()}/**
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
 */async function DR(t){const e=t,{installationEntry:n,registrationPromise:s}=await xd(e);return s?s.catch(console.error):Od(e).catch(console.error),n.fid}/**
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
 */async function PR(t,e=!1){const n=t;return await MR(n),(await Od(n,e)).token}async function MR(t){const{registrationPromise:e}=await xd(t);e&&await e}/**
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
 */function LR(t){if(!t||!t.options)throw gu("App Configuration");if(!t.name)throw gu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gu(t){return ur.create("missing-app-config-values",{valueName:t})}/**
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
 */const V_="installations",UR="installations-internal",FR=t=>{const e=t.getProvider("app").getImmediate(),n=LR(e),s=Ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},$R=t=>{const e=t.getProvider("app").getImmediate(),n=Ds(e,V_).getImmediate();return{getId:()=>DR(n),getToken:r=>PR(n,r)}};function BR(){hn(new Qt(V_,FR,"PUBLIC")),hn(new Qt(UR,$R,"PRIVATE"))}BR();Nt(b_,Rd);Nt(b_,Rd,"esm2017");/**
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
 */const uc="analytics",VR="firebase_id",jR="origin",qR=60*1e3,HR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dd="https://www.googletagmanager.com/gtag/js";/**
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
 */const xt=new il("@firebase/analytics");/**
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
 */const zR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new _r("analytics","Analytics",zR);/**
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
 */function KR(t){if(!t.startsWith(Dd)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return xt.warn(e.message),""}return t}function j_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function WR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function GR(t,e){const n=WR("firebase-js-sdk-policy",{createScriptURL:KR}),s=document.createElement("script"),r=`${Dd}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function ZR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function QR(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await j_(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){xt.error(a)}t("config",r,i)}async function YR(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await j_(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){xt.error(i)}}function XR(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await YR(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await QR(t,e,n,s,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){xt.error(a)}}return r}function JR(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=XR(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function eN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dd)&&n.src.includes(t))return n;return null}/**
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
 */const tN=30,nN=1e3;class sN{constructor(e={},n=nN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const q_=new sN;function rN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function iN(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:rN(s)},i=HR.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function oN(t,e=q_,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Bt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new lN;return setTimeout(async()=>{a.abort()},n!==void 0?n:qR),H_({appId:s,apiKey:r,measurementId:i},o,a,e)}async function H_(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=q_){var i;const{appId:o,measurementId:a}=t;try{await aN(s,e)}catch(c){if(a)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await iN(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!cN(l)){if(r.deleteThrottleMetadata(o),a)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?nm(n,r.intervalMillis,tN):nm(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),xt.debug(`Calling attemptFetch again in ${u} millis`),H_(t,h,s,r)}}function aN(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cN(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class lN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function uN(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function hN(){if(Mv())try{await Lv()}catch(t){return xt.warn(Bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return xt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dN(t,e,n,s,r,i,o){var a;const c=oN(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>xt.error(f)),e.push(c);const l=hN().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([c,l]);eN(i)||GR(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[jR]="firebase",d.update=!0,h!=null&&(d[VR]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class fN{constructor(e){this.app=e}_delete(){return delete qi[this.app.options.appId],Promise.resolve()}}let qi={},Om=[];const Dm={};let yu="dataLayer",pN="gtag",Pm,z_,Mm=!1;function mN(){const t=[];if(Pv()&&t.push("This is a browser extension environment."),SS()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Bt.create("invalid-analytics-context",{errorInfo:e});xt.warn(n.message)}}function gN(t,e,n){mN();const s=t.options.appId;if(!s)throw Bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(qi[s]!=null)throw Bt.create("already-exists",{id:s});if(!Mm){ZR(yu);const{wrappedGtag:i,gtagCore:o}=JR(qi,Om,Dm,yu,pN);z_=i,Pm=o,Mm=!0}return qi[s]=dN(t,Om,Dm,e,Pm,yu,n),new fN(t)}function yN(t=ol()){t=Le(t);const e=Ds(t,uc);return e.isInitialized()?e.getImmediate():vN(t)}function vN(t,e={}){const n=Ds(t,uc);if(n.isInitialized()){const r=n.getImmediate();if(io(e,n.getOptions()))return r;throw Bt.create("already-initialized")}return n.initialize({options:e})}function _N(t,e,n,s){t=Le(t),uN(z_,qi[t.app.options.appId],e,n,s).catch(r=>xt.error(r))}const Lm="@firebase/analytics",Um="0.10.0";function wN(){hn(new Qt(uc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return gN(s,r,n)},"PUBLIC")),hn(new Qt("analytics-internal",t,"PRIVATE")),Nt(Lm,Um),Nt(Lm,Um,"esm2017");function t(e){try{const n=e.getProvider(uc).getImmediate();return{logEvent:(s,r,i)=>_N(n,s,r,i)}}catch(n){throw Bt.create("interop-component-reg-failed",{reason:n})}}}wN();var EN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Pd=Pd||{},re=EN||self;function hc(){}function dl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TN(t){return Object.prototype.hasOwnProperty.call(t,vu)&&t[vu]||(t[vu]=++IN)}var vu="closure_uid_"+(1e9*Math.random()>>>0),IN=0;function bN(t,e,n){return t.call.apply(t.bind,arguments)}function CN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=bN:gt=CN,gt.apply(null,arguments)}function Ea(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ps(){this.s=this.s,this.o=this.o}var SN=0;Ps.prototype.s=!1;Ps.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),SN!=0)&&TN(this)};Ps.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const K_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Md(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Fm(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(dl(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var AN=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",hc,e),re.removeEventListener("test",hc,e)}catch{}return t}();function dc(t){return/^[\s\xa0]*$/.test(t)}var $m=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _u(t,e){return t<e?-1:t>e?1:0}function fl(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return fl().indexOf(t)!=-1}function Ld(t){return Ld[" "](t),t}Ld[" "]=hc;function W_(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var kN=wn("Opera"),Xr=wn("Trident")||wn("MSIE"),G_=wn("Edge"),dh=G_||Xr,Z_=wn("Gecko")&&!(fl().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),RN=fl().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function Q_(){var t=re.document;return t?t.documentMode:void 0}var fc;e:{var wu="",Eu=function(){var t=fl();if(Z_)return/rv:([^\);]+)(\)|;)/.exec(t);if(G_)return/Edge\/([\d\.]+)/.exec(t);if(Xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(RN)return/WebKit\/(\S+)/.exec(t);if(kN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Eu&&(wu=Eu?Eu[1]:""),Xr){var Tu=Q_();if(Tu!=null&&Tu>parseFloat(wu)){fc=String(Tu);break e}}fc=wu}var NN={};function xN(){return W_(NN,9,function(){let t=0;const e=$m(String(fc)).split("."),n=$m("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=_u(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||_u(r[2].length==0,i[2].length==0)||_u(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var fh;if(re.document&&Xr){var Bm=Q_();fh=Bm||parseInt(fc,10)||void 0}else fh=void 0;var ON=fh;function lo(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Z_){e:{try{Ld(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:DN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lo.$.h.call(this)}}it(lo,yt);var DN={2:"touch",3:"pen",4:"mouse"};lo.prototype.h=function(){lo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ko="closure_listenable_"+(1e6*Math.random()|0),PN=0;function MN(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++PN,this.fa=this.ia=!1}function pl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ud(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Y_(t){const e={};for(const n in t)e[n]=t[n];return e}const Vm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X_(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Vm.length;i++)n=Vm[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ml(t){this.src=t,this.g={},this.h=0}ml.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mh(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MN(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function ph(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=K_(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(pl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mh(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Fd="closure_lm_"+(1e6*Math.random()|0),Iu={};function J_(t,e,n,s,r){if(s&&s.once)return tw(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)J_(t,e[i],n,s,r);return null}return n=Vd(n),t&&t[Ko]?t.O(e,n,zo(s)?!!s.capture:!!s,r):ew(t,e,n,!1,s,r)}function ew(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=zo(r)?!!r.capture:!!r,a=Bd(t);if(a||(t[Fd]=a=new ml(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=LN(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)AN||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(sw(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LN(){function t(n){return e.call(t.src,t.listener,n)}const e=UN;return t}function tw(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)tw(t,e[i],n,s,r);return null}return n=Vd(n),t&&t[Ko]?t.P(e,n,zo(s)?!!s.capture:!!s,r):ew(t,e,n,!0,s,r)}function nw(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)nw(t,e[i],n,s,r);else s=zo(s)?!!s.capture:!!s,n=Vd(n),t&&t[Ko]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mh(i,n,s,r),-1<n&&(pl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mh(e,n,s,r)),(n=-1<t?e[t]:null)&&$d(n))}function $d(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ko])ph(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(sw(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Bd(e))?(ph(n,t),n.h==0&&(n.src=null,e[Fd]=null)):pl(t)}}}function sw(t){return t in Iu?Iu[t]:Iu[t]="on"+t}function UN(t,e){if(t.fa)t=!0;else{e=new lo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&$d(t),t=n.call(s,e)}return t}function Bd(t){return t=t[Fd],t instanceof ml?t:null}var bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vd(t){return typeof t=="function"?t:(t[bu]||(t[bu]=function(e){return t.handleEvent(e)}),t[bu])}function rt(){Ps.call(this),this.i=new ml(this),this.S=this,this.J=null}it(rt,Ps);rt.prototype[Ko]=!0;rt.prototype.removeEventListener=function(t,e,n,s){nw(this,t,e,n,s)};function lt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var r=e;e=new yt(s,t),X_(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ta(o,s,!0,e)&&r}if(o=e.g=t,r=Ta(o,s,!0,e)&&r,r=Ta(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ta(o,s,!1,e)&&r}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)pl(n[s]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};rt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ta(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ph(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var jd=re.JSON.stringify;function FN(){var t=ow;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $N{constructor(){this.h=this.g=null}add(e,n){const s=rw.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var rw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new BN,t=>t.reset());class BN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VN(t){re.setTimeout(()=>{throw t},0)}function iw(t,e){gh||jN(),yh||(gh(),yh=!0),ow.add(t,e)}var gh;function jN(){var t=re.Promise.resolve(void 0);gh=function(){t.then(qN)}}var yh=!1,ow=new $N;function qN(){for(var t;t=FN();){try{t.h.call(t.g)}catch(n){VN(n)}var e=rw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yh=!1}function gl(t,e){rt.call(this),this.h=t||1,this.g=e||re,this.j=gt(this.qb,this),this.l=Date.now()}it(gl,rt);$=gl.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lt(this,"tick"),this.ga&&(qd(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){gl.$.N.call(this),qd(this),delete this.g};function Hd(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function aw(t){t.g=Hd(()=>{t.g=null,t.i&&(t.i=!1,aw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HN extends Ps{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:aw(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uo(t){Ps.call(this),this.h=t,this.g={}}it(uo,Ps);var jm=[];function cw(t,e,n,s){Array.isArray(n)||(n&&(jm[0]=n.toString()),n=jm);for(var r=0;r<n.length;r++){var i=J_(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function lw(t){Ud(t.g,function(e,n){this.g.hasOwnProperty(n)&&$d(e)},t),t.g={}}uo.prototype.N=function(){uo.$.N.call(this),lw(this)};uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yl(){this.g=!0}yl.prototype.Ea=function(){this.g=!1};function zN(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function KN(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Pr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GN(t,n)+(s?" "+s:"")})}function WN(t,e){t.info(function(){return"TIMEOUT: "+e})}yl.prototype.info=function(){};function GN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return jd(n)}catch{return e}}var Er={},qm=null;function vl(){return qm=qm||new rt}Er.Ta="serverreachability";function uw(t){yt.call(this,Er.Ta,t)}it(uw,yt);function ho(t){const e=vl();lt(e,new uw(e))}Er.STAT_EVENT="statevent";function hw(t,e){yt.call(this,Er.STAT_EVENT,t),this.stat=e}it(hw,yt);function bt(t){const e=vl();lt(e,new hw(e,t))}Er.Ua="timingevent";function dw(t,e){yt.call(this,Er.Ua,t),this.size=e}it(dw,yt);function Wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var _l={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zd(){}zd.prototype.h=null;function Hm(t){return t.h||(t.h=t.i())}function pw(){}var Go={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kd(){yt.call(this,"d")}it(Kd,yt);function Wd(){yt.call(this,"c")}it(Wd,yt);var vh;function wl(){}it(wl,zd);wl.prototype.g=function(){return new XMLHttpRequest};wl.prototype.i=function(){return{}};vh=new wl;function Zo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new uo(this),this.P=ZN,t=dh?125:void 0,this.V=new gl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new mw}function mw(){this.i=null,this.g="",this.h=!1}var ZN=45e3,_h={},pc={};$=Zo.prototype;$.setTimeout=function(t){this.P=t};function wh(t,e,n){t.L=1,t.v=Tl(Gn(e)),t.s=n,t.S=!0,gw(t,null)}function gw(t,e){t.G=Date.now(),Qo(t),t.A=Gn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),bw(n.i,"t",s),t.C=0,n=t.l.I,t.h=new mw,t.g=zw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new HN(gt(t.Pa,t,t.g),t.O)),cw(t.U,t.g,"readystatechange",t.nb),e=t.I?Y_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ho(),zN(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&Vn(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const u=Vn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||dh||this.g&&(this.h.h||this.g.ja()||Gm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ho(3):ho(2)),El(this);var n=this.g.da();this.aa=n;t:if(yw(this)){var s=Gm(this.g);t="";var r=s.length,i=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zs(this),Hi(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,KN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dc(a)){var l=a;break t}}l=null}if(n=l)Pr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eh(this,n);else{this.i=!1,this.o=3,bt(12),Zs(this),Hi(this);break e}}this.S?(vw(this,u,o),dh&&this.i&&u==3&&(cw(this.U,this.V,"tick",this.mb),this.V.start())):(Pr(this.j,this.m,o,null),Eh(this,o)),u==4&&Zs(this),this.i&&!this.J&&(u==4?Vw(this.l,this):(this.i=!1,Qo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),Zs(this),Hi(this)}}}catch{}finally{}};function yw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function vw(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=QN(t,n),r==pc){e==4&&(t.o=4,bt(14),s=!1),Pr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==_h){t.o=4,bt(15),Pr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Pr(t.j,t.m,r,null),Eh(t,r);yw(t)&&r!=pc&&r!=_h&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ef(e),e.L=!0,bt(11))):(Pr(t.j,t.m,n,"[Invalid Chunked Response]"),Zs(t),Hi(t))}$.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(El(this),vw(this,t,e),this.i&&t!=4&&Qo(this))}};function QN(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?pc:(n=Number(e.substring(n,s)),isNaN(n)?_h:(s+=1,s+n>e.length?pc:(e=e.substr(s,n),t.C=s+n,e)))}$.cancel=function(){this.J=!0,Zs(this)};function Qo(t){t.Y=Date.now()+t.P,_w(t,t.P)}function _w(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wo(gt(t.lb,t),e)}function El(t){t.B&&(re.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(WN(this.j,this.A),this.L!=2&&(ho(),bt(17)),Zs(this),this.o=2,Hi(this)):_w(this,this.Y-t)};function Hi(t){t.l.H==0||t.J||Vw(t.l,t)}function Zs(t){El(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,qd(t.V),lw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Eh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Th(n.h,t))){if(!t.K&&Th(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yc(n),Cl(n);else break e;Jd(n),bt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Wo(gt(n.ib,n),6e3));if(1>=Aw(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Qs(n,11)}else if((t.K||n.g==t)&&yc(n),!dc(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Gd(i,i.h),i.h=null))}if(s.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,Me(s.G,s.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Hw(s,s.I?s.oa:null,s.Y),o.K){kw(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(El(a),Qo(a)),s.g=o}else $w(s);0<n.i.length&&Sl(n)}else l[0]!="stop"&&l[0]!="close"||Qs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qs(n,7):Xd(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}ho(4)}catch{}}function YN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function XN(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ww(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=XN(t),s=YN(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Ew=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function sr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof sr){this.h=e!==void 0?e:t.h,mc(this,t.j),this.s=t.s,this.g=t.g,gc(this,t.m),this.l=t.l,e=t.i;var n=new fo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zm(this,n),this.o=t.o}else t&&(n=String(t).match(Ew))?(this.h=!!e,mc(this,n[1]||"",!0),this.s=ki(n[2]||""),this.g=ki(n[3]||"",!0),gc(this,n[4]),this.l=ki(n[5]||"",!0),zm(this,n[6]||"",!0),this.o=ki(n[7]||"")):(this.h=!!e,this.i=new fo(null,this.h))}sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ri(e,Km,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ri(e,Km,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ri(n,n.charAt(0)=="/"?nx:tx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ri(n,rx)),t.join("")};function Gn(t){return new sr(t)}function mc(t,e,n){t.j=n?ki(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zm(t,e,n){e instanceof fo?(t.i=e,ix(t.i,t.h)):(n||(e=Ri(e,sx)),t.i=new fo(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Tl(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ki(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ri(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ex),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ex(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Km=/[#\/\?@]/g,tx=/[#\?:]/g,nx=/[#\?]/g,sx=/[#\?@]/g,rx=/#/g;function fo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ms(t){t.g||(t.g=new Map,t.h=0,t.i&&JN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=fo.prototype;$.add=function(t,e){Ms(this),this.i=null,t=fi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Tw(t,e){Ms(t),e=fi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Iw(t,e){return Ms(t),e=fi(t,e),t.g.has(e)}$.forEach=function(t,e){Ms(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};$.sa=function(){Ms(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};$.Z=function(t){Ms(this);let e=[];if(typeof t=="string")Iw(this,t)&&(e=e.concat(this.g.get(fi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Ms(this),this.i=null,t=fi(this,t),Iw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function bw(t,e,n){Tw(t,e),0<n.length&&(t.i=null,t.g.set(fi(t,e),Md(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function fi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ix(t,e){e&&!t.j&&(Ms(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Tw(this,s),bw(this,r,n))},t)),t.j=e}var ox=class{constructor(t,e){this.h=t,this.g=e}};function Cw(t){this.l=t||ax,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ax=10;function Sw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Aw(t){return t.h?1:t.g?t.g.size:0}function Th(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gd(t,e){t.g?t.g.add(e):t.h=e}function kw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Cw.prototype.cancel=function(){if(this.i=Rw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Md(t.i)}function Zd(){}Zd.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)};Zd.prototype.parse=function(t){return re.JSON.parse(t,void 0)};function cx(){this.g=new Zd}function lx(t,e,n){const s=n||"";try{ww(t,function(r,i){let o=r;zo(r)&&(o=jd(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ux(t,e){const n=new yl;if(re.Image){const s=new Image;s.onload=Ea(Ia,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ea(Ia,n,s,"TestLoadImage: error",!1,e),s.onabort=Ea(Ia,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ea(Ia,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ia(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Yo(t){this.l=t.fc||null,this.j=t.ob||!1}it(Yo,zd);Yo.prototype.g=function(){return new Il(this.l,this.j)};Yo.prototype.i=function(t){return function(){return t}}({});function Il(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Il,rt);var Qd=0;$=Il.prototype;$.open=function(t,e){if(this.readyState!=Qd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,po(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xo(this)),this.readyState=Qd};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Nw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xo(this):po(this),this.readyState==3&&Nw(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Xo(this))};$.Ya=function(t){this.g&&(this.response=t,Xo(this))};$.ka=function(){this.g&&Xo(this)};function Xo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,po(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hx=re.JSON.parse;function je(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xw,this.L=this.M=!1}it(je,rt);var xw="",dx=/^https?$/i,fx=["POST","PUT"];$=je.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vh.g(),this.C=this.u?Hm(this.u):Hm(vh),this.g.onreadystatechange=gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Wm(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=re.FormData&&t instanceof re.FormData,!(0<=K_(fx,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pw(this),0<this.B&&((this.L=px(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.ua,this)):this.A=Hd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wm(this,i)}};function px(t){return Xr&&xN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function Wm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ow(t),bl(t)}function Ow(t){t.F||(t.F=!0,lt(t,"complete"),lt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),bl(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bl(this,!0)),je.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?Dw(this):this.kb())};$.kb=function(){Dw(this)};function Dw(t){if(t.h&&typeof Pd<"u"&&(!t.C[1]||Vn(t)!=4||t.da()!=2)){if(t.v&&Vn(t)==4)Hd(t.La,0,t);else if(lt(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(Ew)[1]||null;if(!r&&re.self&&re.self.location){var i=re.self.location.protocol;r=i.substr(0,i.length-1)}s=!dx.test(r?r.toLowerCase():"")}n=s}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<Vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Ow(t)}}finally{bl(t)}}}}function bl(t,e){if(t.g){Pw(t);const n=t.g,s=t.C[0]?hc:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Pw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hx(e)}};function Gm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case xw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mw(t){let e="";return Ud(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Yd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Mw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Lw(t){this.Ga=0,this.i=[],this.j=new yl,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ti("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ti("baseRetryDelayMs",5e3,t),this.hb=Ti("retryDelaySeedMs",1e4,t),this.eb=Ti("forwardChannelMaxRetries",2,t),this.xa=Ti("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Cw(t&&t.concurrentRequestLimit),this.Ja=new cx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}$=Lw.prototype;$.qa=8;$.H=1;function Xd(t){if(Uw(t),t.H==3){var e=t.W++,n=Gn(t.G);Me(n,"SID",t.J),Me(n,"RID",e),Me(n,"TYPE","terminate"),Jo(t,n),e=new Zo(t,t.j,e,void 0),e.L=2,e.v=Tl(Gn(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=zw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Qo(e)}qw(t)}function Cl(t){t.g&&(ef(t),t.g.cancel(),t.g=null)}function Uw(t){Cl(t),t.u&&(re.clearTimeout(t.u),t.u=null),yc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Sl(t){Sw(t.h)||t.m||(t.m=!0,iw(t.Na,t),t.C=0)}function mx(t,e){return Aw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wo(gt(t.Na,t,e),jw(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Zo(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Y_(i),X_(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Fw(this,r,e),n=Gn(this.G),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),Jo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Mw(i)))+"&"+e:this.o&&Yd(n,this.o,i)),Gd(this.h,r),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),r.ba=!0,wh(r,n,null)):wh(r,n,e),this.H=2}}else this.H==3&&(t?Zm(this,t):this.i.length==0||Sw(this.h)||Zm(this))};function Zm(t,e){var n;e?n=e.m:n=t.W++;const s=Gn(t.G);Me(s,"SID",t.J),Me(s,"RID",n),Me(s,"AID",t.V),Jo(t,s),t.o&&t.s&&Yd(s,t.o,t.s),n=new Zo(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Fw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gd(t.h,n),wh(n,s,e)}function Jo(t,e){t.ma&&Ud(t.ma,function(n,s){Me(e,s,n)}),t.l&&ww({},function(n,s){Me(e,s,n)})}function Fw(t,e,n){n=Math.min(t.i.length,n);var s=t.l?gt(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{lx(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function $w(t){t.g||t.u||(t.ba=1,iw(t.Ma,t),t.A=0)}function Jd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wo(gt(t.Ma,t),jw(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,Bw(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Wo(gt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,bt(10),Cl(this),Bw(this))};function ef(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function Bw(t){t.g=new Zo(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.J),Me(e,"CI",t.M?"0":"1"),Me(e,"AID",t.V),Me(e,"TYPE","xmlhttp"),Jo(t,e),t.o&&t.s&&Yd(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Tl(Gn(e)),n.s=null,n.S=!0,gw(n,t)}$.ib=function(){this.v!=null&&(this.v=null,Cl(this),Jd(this),bt(19))};function yc(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function Vw(t,e){var n=null;if(t.g==e){yc(t),ef(t),t.g=null;var s=2}else if(Th(t.h,e))n=e.F,kw(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=vl(),lt(s,new dw(s,n)),Sl(t)}else $w(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&mx(t,e)||s==2&&Jd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Qs(t,5);break;case 4:Qs(t,10);break;case 3:Qs(t,6);break;default:Qs(t,2)}}}function jw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Qs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=gt(t.pb,t);n||(n=new sr("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||mc(n,"https"),Tl(n)),ux(n.toString(),s)}else bt(2);t.H=0,t.l&&t.l.za(e),qw(t),Uw(t)}$.pb=function(t){t?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function qw(t){if(t.H=0,t.pa=[],t.l){const e=Rw(t.h);(e.length!=0||t.i.length!=0)&&(Fm(t.pa,e),Fm(t.pa,t.i),t.h.i.length=0,Md(t.i),t.i.length=0),t.l.ya()}}function Hw(t,e,n){var s=n instanceof sr?Gn(n):new sr(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),gc(s,s.m);else{var r=re.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new sr(null,void 0);s&&mc(i,s),e&&(i.g=e),r&&gc(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Me(s,n,e),Me(s,"VER",t.qa),Jo(t,s),s}function zw(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new Yo({ob:!0})):new je(t.va),e.Oa(t.I),e}function Kw(){}$=Kw.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.Va=function(){};function vc(){if(Xr&&!(10<=Number(ON)))throw Error("Environmental error: no available transport.")}vc.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){rt.call(this),this.g=new Lw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!dc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!dc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pi(this)}it(Vt,rt);Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Hw(t,null,t.Y),Sl(t)};Vt.prototype.close=function(){Xd(this.g)};Vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jd(t),t=n);e.i.push(new ox(e.fb++,t)),e.H==3&&Sl(e)};Vt.prototype.N=function(){this.g.l=null,delete this.j,Xd(this.g),delete this.g,Vt.$.N.call(this)};function Ww(t){Kd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(Ww,Kd);function Gw(){Wd.call(this),this.status=1}it(Gw,Wd);function pi(t){this.g=t}it(pi,Kw);pi.prototype.Ba=function(){lt(this.g,"a")};pi.prototype.Aa=function(t){lt(this.g,new Ww(t))};pi.prototype.za=function(t){lt(this.g,new Gw)};pi.prototype.ya=function(){lt(this.g,"b")};function gx(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(dn,gx);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Cu(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Cu(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Cu(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Cu(this,s),r=0;break}}this.h=r,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ke(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var yx={};function tf(t){return-128<=t&&128>t?W_(yx,t,function(e){return new ke([e|0],0>e?-1:0)}):new ke([t|0],0>t?-1:0)}function Tn(t){if(isNaN(t)||!isFinite(t))return Vr;if(0>t)return ct(Tn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ih;return new ke(e,0)}function Zw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ct(Zw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tn(Math.pow(e,8)),s=Vr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Tn(Math.pow(e,i)),s=s.R(i).add(Tn(o))):(s=s.R(n),s=s.add(Tn(o)))}return s}var Ih=4294967296,Vr=tf(0),bh=tf(1),Qm=tf(16777216);$=ke.prototype;$.ea=function(){if(Ht(this))return-ct(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ih+s)*e,e*=Ih}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(jn(this))return"0";if(Ht(this))return"-"+ct(this).toString(t);for(var e=Tn(Math.pow(t,6)),n=this,s="";;){var r=wc(n,e).g;n=_c(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,jn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function jn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ht(t){return t.h==-1}$.X=function(t){return t=_c(this,t),Ht(t)?-1:jn(t)?0:1};function ct(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ke(n,~t.h).add(bh)}$.abs=function(){return Ht(this)?ct(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ke(n,n[n.length-1]&-2147483648?-1:0)};function _c(t,e){return t.add(ct(e))}$.R=function(t){if(jn(this)||jn(t))return Vr;if(Ht(this))return Ht(t)?ct(this).R(ct(t)):ct(ct(this).R(t));if(Ht(t))return ct(this.R(ct(t)));if(0>this.X(Qm)&&0>t.X(Qm))return Tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,ba(n,2*s+2*r),n[2*s+2*r+1]+=i*c,ba(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,ba(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,ba(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ke(n,0)};function ba(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ii(t,e){this.g=t,this.h=e}function wc(t,e){if(jn(e))throw Error("division by zero");if(jn(t))return new Ii(Vr,Vr);if(Ht(t))return e=wc(ct(t),e),new Ii(ct(e.g),ct(e.h));if(Ht(e))return e=wc(t,ct(e)),new Ii(ct(e.g),e.h);if(30<t.g.length){if(Ht(t)||Ht(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bh,s=e;0>=s.X(t);)n=Ym(n),s=Ym(s);var r=Rr(n,1),i=Rr(s,1);for(s=Rr(s,2),n=Rr(n,2);!jn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Rr(s,1),n=Rr(n,1)}return e=_c(t,r.R(e)),new Ii(r,e)}for(r=Vr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Tn(n),o=i.R(e);Ht(o)||0<o.X(t);)n-=s,i=Tn(n),o=i.R(e);jn(i)&&(i=bh),r=r.add(i),t=_c(t,o)}return new Ii(r,t)}$.gb=function(t){return wc(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ke(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ke(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ke(n,this.h^t.h)};function Ym(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ke(n,t.h)}function Rr(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ke(r,t.h)}vc.prototype.createWebChannel=vc.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;_l.NO_ERROR=0;_l.TIMEOUT=8;_l.HTTP_ERROR=6;fw.COMPLETE="complete";pw.EventType=Go;Go.OPEN="a";Go.CLOSE="b";Go.ERROR="c";Go.MESSAGE="d";rt.prototype.listen=rt.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;ke.prototype.add=ke.prototype.add;ke.prototype.multiply=ke.prototype.R;ke.prototype.modulo=ke.prototype.gb;ke.prototype.compare=ke.prototype.X;ke.prototype.toNumber=ke.prototype.ea;ke.prototype.toString=ke.prototype.toString;ke.prototype.getBits=ke.prototype.D;ke.fromNumber=Tn;ke.fromString=Zw;var vx=function(){return new vc},_x=function(){return vl()},Su=_l,wx=fw,Ex=Er,Xm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tx=Yo,Ca=pw,Ix=je,bx=dn,jr=ke;const Jm="@firebase/firestore";/**
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
 */let mi="9.22.0";/**
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
 */const dr=new il("@firebase/firestore");function eg(){return dr.logLevel}function K(t,...e){if(dr.logLevel<=Ee.DEBUG){const n=e.map(nf);dr.debug(`Firestore (${mi}): ${t}`,...n)}}function Zn(t,...e){if(dr.logLevel<=Ee.ERROR){const n=e.map(nf);dr.error(`Firestore (${mi}): ${t}`,...n)}}function Jr(t,...e){if(dr.logLevel<=Ee.WARN){const n=e.map(nf);dr.warn(`Firestore (${mi}): ${t}`,...n)}}function nf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function se(t="Unexpected state"){const e=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function Pe(t,e){t||se()}function he(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class Sx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let Ax=class{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new Qw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new dt(e)}};class kx{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Rx{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new kx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new Nx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ox(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Yw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Ox(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function be(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Je(0,0))}static max(){return new oe(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mo{constructor(e,n,s){n===void 0?n=0:n>e.length&&se(),s===void 0?s=e.length-n:s>e.length-n&&se(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends mo{construct(e,n,s){return new Oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const Dx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends mo{construct(e,n,s){return new mt(e,n,s)}static isValidIdentifier(e){return Dx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Oe.fromString(e))}static fromName(e){return new W(Oe.fromString(e).popFirst(5))}static empty(){return new W(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Oe(e.slice()))}}function Px(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(s===1e9?new Je(n+1,0):new Je(n,s));return new Ss(r,W.empty(),e)}function Mx(t){return new Ss(t.readTime,t.key,-1)}class Ss{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ss(oe.min(),W.empty(),-1)}static max(){return new Ss(oe.max(),W.empty(),-1)}}function Lx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ux="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ea(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Ux)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,s)=>{n(e)})}static reject(e){return new N((n,s)=>{s(e)})}static waitFor(e){return new N((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=N.resolve(!1);for(const s of e)n=n.next(r=>r?N.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new N((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new N((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ta(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}sf.ct=-1;function Al(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function $x(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ot.RED,this.left=r??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ot(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new vt(mt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Jw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Jw("Invalid base64 string: "+r):r}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const Bx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=Bx.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fr(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */function kl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rf(t){const e=t.mapValue.fields.__previous_value__;return kl(e)?rf(e):e}function go(t){const e=As(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class Vx{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Aa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kl(t)?4:jx(t)?9007199254740991:10:se()}function Nn(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=As(s.timestampValue),o=As(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return fr(s.bytesValue).isEqual(fr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ze(s.geoPointValue.latitude)===Ze(r.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ze(s.integerValue)===Ze(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ze(s.doubleValue),o=Ze(r.doubleValue);return i===o?Ec(i)===Ec(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(tg(i)!==tg(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Nn(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function vo(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=pr(t),s=pr(e);if(n!==s)return be(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ze(r.integerValue||r.doubleValue),a=Ze(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return sg(t.timestampValue,e.timestampValue);case 4:return sg(go(t),go(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,i){const o=fr(r),a=fr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=be(o[c],a[c]);if(l!==0)return l}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=be(Ze(r.latitude),Ze(i.latitude));return o!==0?o:be(Ze(r.longitude),Ze(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ti(o[c],a[c]);if(l)return l}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Aa.mapValue&&i===Aa.mapValue)return 0;if(r===Aa.mapValue)return 1;if(i===Aa.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=be(a[u],l[u]);if(h!==0)return h;const d=ti(o[a[u]],c[l[u]]);if(d!==0)return d}return be(a.length,l.length)}(t.mapValue,e.mapValue);default:throw se()}}function sg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=As(t),s=As(e),r=be(n.seconds,s.seconds);return r!==0?r:be(n.nanos,s.nanos)}function ni(t){return Ch(t)}function Ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=As(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ch(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ch(s.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function Tc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sh(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function rg(t){return!!t&&"nullValue"in t}function ig(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function zi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zi(n)}setAll(e){let n=mt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=zi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Va(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Tr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Rt(zi(this.value))}}function e0(t){const e=[];return Tr(t.fields,(n,s)=>{const r=new mt([n]);if(Va(s)){const i=e0(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ft(e)}/**
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
 */class ft{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,oe.min(),oe.min(),oe.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,r){return new ft(e,1,n,oe.min(),s,r,0)}static newNoDocument(e,n){return new ft(e,2,n,oe.min(),oe.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,oe.min(),oe.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class si{constructor(e,n){this.position=e,this.inclusive=n}}function og(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=ti(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function qx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class t0{}class Qe extends t0{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new zx(e,n,s):n==="array-contains"?new Gx(e,s):n==="in"?new Zx(e,s):n==="not-in"?new Qx(e,s):n==="array-contains-any"?new Yx(e,s):new Qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Kx(e,s):new Wx(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class fn extends t0{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new fn(e,n)}matches(e){return n0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function n0(t){return t.op==="and"}function s0(t){return Hx(t)&&n0(t)}function Hx(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Ah(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(s0(t))return t.filters.map(e=>Ah(e)).join(",");{const e=t.filters.map(n=>Ah(n)).join(",");return`${t.op}(${e})`}}function r0(t,e){return t instanceof Qe?function(n,s){return s instanceof Qe&&n.op===s.op&&n.field.isEqual(s.field)&&Nn(n.value,s.value)}(t,e):t instanceof fn?function(n,s){return s instanceof fn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&r0(i,s.filters[o]),!0):!1}(t,e):void se()}function i0(t){return t instanceof Qe?function(e){return`${e.field.canonicalString()} ${e.op} ${ni(e.value)}`}(t):t instanceof fn?function(e){return e.op.toString()+" {"+e.getFilters().map(i0).join(" ,")+"}"}(t):"Filter"}class zx extends Qe{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kx extends Qe{constructor(e,n){super(e,"in",n),this.keys=o0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Wx extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=o0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function o0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class Gx extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&vo(n.arrayValue,this.value)}}class Zx extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class Qx extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vo(this.value.arrayValue,n)}}class Yx extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>vo(this.value.arrayValue,s))}}/**
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
 */class Xx{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function cg(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Xx(t,e,n,s,r,i,o)}function af(t){const e=he(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ah(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Al(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ni(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ni(s)).join(",")),e.dt=n}return e.dt}function cf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!r0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ag(t.startAt,e.startAt)&&ag(t.endAt,e.endAt)}function kh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ls{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Jx(t,e,n,s,r,i,o,a){return new Ls(t,e,n,s,r,i,o,a)}function lf(t){return new Ls(t)}function lg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function hf(t){return t.collectionGroup!==null}function rr(t){const e=he(t);if(e.wt===null){e.wt=[];const n=Rl(e),s=uf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new qr(n)),e.wt.push(new qr(mt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new qr(mt.keyField(),i))}}}return e.wt}function Qn(t){const e=he(t);if(!e._t)if(e.limitType==="F")e._t=cg(e.path,e.collectionGroup,rr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of rr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new qr(i.field,o))}const s=e.endAt?new si(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new si(e.startAt.position,e.startAt.inclusive):null;e._t=cg(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Rh(t,e){e.getFirstInequalityField(),Rl(t);const n=t.filters.concat([e]);return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ic(t,e,n){return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nl(t,e){return cf(Qn(t),Qn(e))&&t.limitType===e.limitType}function a0(t){return`${af(Qn(t))}|lt:${t.limitType}`}function Nh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>i0(s)).join(", ")}]`),Al(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ni(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ni(s)).join(",")),`Target(${n})`}(Qn(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):W.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of rr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=og(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,rr(n),s)||n.endAt&&!function(r,i,o){const a=og(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,rr(n),s))}(t,e)}function eO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c0(t){return(e,n)=>{let s=!1;for(const r of rr(t)){const i=tO(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function tO(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ti(a,c):se()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return se()}}/**
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
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Xw(this.inner)}size(){return this.innerSize}}/**
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
 */const nO=new Be(W.comparator);function Yn(){return nO}const l0=new Be(W.comparator);function Ni(...t){let e=l0;for(const n of t)e=e.insert(n.key,n);return e}function u0(t){let e=l0;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ys(){return Ki()}function h0(){return Ki()}function Ki(){return new gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const sO=new Be(W.comparator),rO=new vt(W.comparator);function ye(...t){let e=rO;for(const n of t)e=e.add(n);return e}const iO=new vt(be);function oO(){return iO}/**
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
 */function d0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function f0(t){return{integerValue:""+t}}function aO(t,e){return $x(e)?f0(e):d0(t,e)}/**
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
 */class Ol{constructor(){this._=void 0}}function cO(t,e,n){return t instanceof bc?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&kl(r)&&(r=rf(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof _o?m0(t,e):t instanceof wo?g0(t,e):function(s,r){const i=p0(s,r),o=ug(i)+ug(s.gt);return Sh(i)&&Sh(s.gt)?f0(o):d0(s.serializer,o)}(t,e)}function lO(t,e,n){return t instanceof _o?m0(t,e):t instanceof wo?g0(t,e):n}function p0(t,e){return t instanceof Cc?Sh(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class bc extends Ol{}class _o extends Ol{constructor(e){super(),this.elements=e}}function m0(t,e){const n=y0(e);for(const s of t.elements)n.some(r=>Nn(r,s))||n.push(s);return{arrayValue:{values:n}}}class wo extends Ol{constructor(e){super(),this.elements=e}}function g0(t,e){let n=y0(e);for(const s of t.elements)n=n.filter(r=>!Nn(r,s));return{arrayValue:{values:n}}}class Cc extends Ol{constructor(e,n){super(),this.serializer=e,this.gt=n}}function ug(t){return Ze(t.integerValue||t.doubleValue)}function y0(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uO(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof _o&&s instanceof _o||n instanceof wo&&s instanceof wo?ei(n.elements,s.elements,Nn):n instanceof Cc&&s instanceof Cc?Nn(n.gt,s.gt):n instanceof bc&&s instanceof bc}(t.transform,e.transform)}class hO{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dl{}function v0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new df(t.key,Zt.none()):new na(t.key,t.data,Zt.none());{const n=t.data,s=Rt.empty();let r=new vt(mt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Us(t.key,s,new Ft(r.toArray()),Zt.none())}}function dO(t,e,n){t instanceof na?function(s,r,i){const o=s.value.clone(),a=dg(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Us?function(s,r,i){if(!ja(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=dg(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(_0(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,s){return t instanceof na?function(r,i,o,a){if(!ja(r.precondition,i))return o;const c=r.value.clone(),l=fg(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Us?function(r,i,o,a){if(!ja(r.precondition,i))return o;const c=fg(r.fieldTransforms,a,i),l=i.data;return l.setAll(_0(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ja(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function fO(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=p0(s.transform,r||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,i))}return n||null}function hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ei(n,s,(r,i)=>uO(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends Dl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Us extends Dl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function dg(t,e,n){const s=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,lO(o,a,n[r]))}return s}function fg(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,cO(i,o,e))}return s}class df extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pO extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mO{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&dO(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Wi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Wi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=h0();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=v0(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,s)=>hg(n,s))&&ei(this.baseMutations,e.baseMutations,(n,s)=>hg(n,s))}}class ff{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Pe(e.mutations.length===s.length);let r=sO;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ff(e,n,s,r)}}/**
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
 */class gO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,_e;function vO(t){switch(t){default:return se();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function w0(t){if(t===void 0)return Zn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ge.OK:return E.OK;case Ge.CANCELLED:return E.CANCELLED;case Ge.UNKNOWN:return E.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return E.INTERNAL;case Ge.UNAVAILABLE:return E.UNAVAILABLE;case Ge.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ge.NOT_FOUND:return E.NOT_FOUND;case Ge.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ge.ABORTED:return E.ABORTED;case Ge.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ge.DATA_LOSS:return E.DATA_LOSS;default:return se()}}(_e=Ge||(Ge={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */class pf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ka}static getOrCreateInstance(){return ka===null&&(ka=new pf),ka}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ka=null;/**
 * @license
 * Copyright 2023 Google LLC
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
 */function _O(){return new TextEncoder}/**
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
 */const wO=new jr([4294967295,4294967295],0);function pg(t){const e=_O().encode(t),n=new bx;return n.update(e),new Uint8Array(n.digest())}function mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,s],0),new jr([r,i],0)]}class mf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new xi(`Invalid padding: ${n}`);if(s<0)throw new xi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new xi(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=jr.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(jr.fromNumber(s)));return r.compare(wO)===1&&(r=new jr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=pg(e),[s,r]=mg(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mf(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=pg(e),[s,r]=mg(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Pl(oe.min(),r,new Be(be),Yn(),ye())}}class sa{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new sa(s,n,ye(),ye(),ye())}}/**
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
 */class qa{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class E0{constructor(e,n){this.targetId=e,this.Vt=n}}class T0{constructor(e,n,s=wt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class gg{constructor(){this.St=0,this.Dt=vg(),this.Ct=wt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ye(),n=ye(),s=ye();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:se()}}),new sa(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=vg()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class EO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Yn(),this.zt=yg(),this.Wt=new Be(be)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(kh(o))if(r===0){const a=new W(o.path);this.Yt(s,a,ft.newNoDocument(a,oe.min()))}else Pe(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=pf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,g,v,T,S;const A={localCacheCount:u,existenceFilterCount:h.count},F=h.unchangedNames;return F&&(A.bloomFilter={applied:l===0,hashCount:(d=F==null?void 0:F.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(g=(f=F==null?void 0:F.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(S=(T=F==null?void 0:F.bits)===null||T===void 0?void 0:T.padding)!==null&&S!==void 0?S:0}),A}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=fr(i).toUint8Array()}catch(u){if(u instanceof Jw)return Jr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new mf(c,o,a)}catch(u){return Jr(u instanceof xi?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&kh(a.target)){const c=new W(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ft.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=ye();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Pl(e,n,this.Wt,this.jt,s);return this.jt=Yn(),this.zt=yg(),this.Wt=new Be(be),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new gg,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new vt(be),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new gg),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function yg(){return new Be(W.comparator)}function vg(){return new Be(W.comparator)}const TO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),IO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bO=(()=>({and:"AND",or:"OR"}))();class CO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xh(t,e){return t.useProto3Json||Al(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SO(t,e){return Sc(t,e.toTimestamp())}function Sn(t){return Pe(!!t),oe.fromTimestamp(function(e){const n=As(e);return new Je(n.seconds,n.nanos)}(t))}function gf(t,e){return function(n){return new Oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function b0(t){const e=Oe.fromString(t);return Pe(k0(e)),e}function Oh(t,e){return gf(t.databaseId,e.path)}function Au(t,e){const n=b0(e);if(n.get(1)!==t.databaseId.projectId)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(C0(n))}function Dh(t,e){return gf(t.databaseId,e)}function AO(t){const e=b0(t);return e.length===4?Oe.emptyPath():C0(e)}function Ph(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C0(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _g(t,e,n){return{name:Oh(t,e),fields:n.value.mapValue.fields}}function kO(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Pe(l===void 0||typeof l=="string"),wt.fromBase64String(l||"")):(Pe(l===void 0||l instanceof Uint8Array),wt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:w0(c.code);return new L(l,c.message||"")}(o);n=new T0(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Au(t,s.document.name),i=Sn(s.document.updateTime),o=s.document.createTime?Sn(s.document.createTime):oe.min(),a=new Rt({mapValue:{fields:s.document.fields}}),c=ft.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new qa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Au(t,s.document),i=s.readTime?Sn(s.readTime):oe.min(),o=ft.newNoDocument(r,i),a=s.removedTargetIds||[];n=new qa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Au(t,s.document),i=s.removedTargetIds||[];n=new qa([],i,r,null)}else{if(!("filter"in e))return se();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new yO(r,i),a=s.targetId;n=new E0(a,o)}}return n}function RO(t,e){let n;if(e instanceof na)n={update:_g(t,e.key,e.value)};else if(e instanceof df)n={delete:Oh(t,e.key)};else if(e instanceof Us)n={update:_g(t,e.key,e.data),updateMask:FO(e.fieldMask)};else{if(!(e instanceof pO))return se();n={verify:Oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof bc)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _o)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof wo)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Cc)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw se()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:SO(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:se()}(t,e.precondition)),n}function NO(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Sn(s.updateTime):Sn(r);return i.isEqual(oe.min())&&(i=Sn(r)),new hO(i,s.transformResults||[])}(n,e))):[]}function xO(t,e){return{documents:[Dh(t,e.path)]}}function OO(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Dh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return A0(fn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:xr(u.field),direction:MO(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=xh(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function DO(t){let e=AO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=S0(u);return h instanceof fn&&s0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new qr(Or(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Al(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new si(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new si(d,h)}(n.endAt)),Jx(e,r,o,i,a,"F",c,l)}function PO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function S0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Or(e.unaryFilter.field);return Qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(e.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Or(e.unaryFilter.field);return Qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Or(e.unaryFilter.field);return Qe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(e){return Qe.create(Or(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return fn.create(e.compositeFilter.filters.map(n=>S0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return se()}}(e.compositeFilter.op))}(t):se()}function MO(t){return TO[t]}function LO(t){return IO[t]}function UO(t){return bO[t]}function xr(t){return{fieldPath:t.canonicalString()}}function Or(t){return mt.fromServerFormat(t.fieldPath)}function A0(t){return t instanceof Qe?function(e){if(e.op==="=="){if(ig(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NAN"}};if(rg(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ig(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NAN"}};if(rg(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(e.field),op:LO(e.op),value:e.value}}}(t):t instanceof fn?function(e){const n=e.getFilters().map(s=>A0(s));return n.length===1?n[0]:{compositeFilter:{op:UO(e.op),filters:n}}}(t):se()}function FO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function k0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ms{constructor(e,n,s,r,i=oe.min(),o=oe.min(),a=wt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ms(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $O{constructor(e){this.fe=e}}function BO(t){const e=DO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
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
 */class VO{constructor(){this.rn=new jO}addToCollectionParentIndex(e,n){return this.rn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Ss.min())}updateCollectionGroup(e,n,s){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class jO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new vt(Oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new vt(Oe.comparator)).toArray()}}/**
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
 */class ri{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ri(0)}static Mn(){return new ri(-1)}}/**
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
 */class qO{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?N.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zO{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Wi(s.mutation,r,Ft.empty(),Je.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ye()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ye()){const r=Ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ni();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ye()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Yn();const o=Ki(),a=Ki();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Us)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Wi(u.mutation,l,u.mutation.getFieldMask(),Je.now())):o.set(l.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new HO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ki();let r=new Be((o,a)=>o-a),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ft.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ye()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=h0();u.forEach(d=>{if(!i.has(d)){const f=v0(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return N.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):N.resolve(Ys());let a=-1,c=i;return o.next(l=>N.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ye())).next(u=>({batchId:a,changes:u0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let r=Ni();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ni();return this.indexManager.getCollectionParents(e,r).next(o=>N.forEach(o,a=>{const c=function(l,u){return new Ls(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ft.newInvalidDocument(l)))});let o=Ni();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Wi(l.mutation,c,Ft.empty(),Je.now()),xl(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class KO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return N.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Sn(s.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:BO(s.bundledQuery),readTime:Sn(s.readTime)}}(n)),N.resolve()}}/**
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
 */class WO{constructor(){this.overlays=new Be(W.comparator),this.ls=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return N.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),N.resolve()}getOverlaysForCollection(e,n,s){const r=Ys(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return N.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ys(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ys(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return N.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gO(n,s));let i=this.ls.get(n);i===void 0&&(i=ye(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class yf{constructor(){this.fs=new vt(tt.ds),this.ws=new vt(tt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new tt(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new tt(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new W(new Oe([])),s=new tt(n,e),r=new tt(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new W(new Oe([])),s=new tt(n,e),r=new tt(n,e+1);let i=ye();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return W.comparator(e.key,n.key)||be(e.As,n.As)}static _s(e,n){return be(e.As,n.As)||W.comparator(e.key,n.key)}}/**
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
 */class GO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new vt(tt.ds)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mO(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tt(n,0),r=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new vt(be);return n.forEach(r=>{const i=new tt(r,0),o=new tt(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),N.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;W.isDocumentKey(i)||(i=i.child(""));const o=new tt(new W(i),0);let a=new vt(be);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),N.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return N.forEach(n.mutations,r=>{const i=new tt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new tt(n,0),r=this.Rs.firstAfterOrEqual(s);return N.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ZO{constructor(e){this.Ds=e,this.docs=new Be(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return N.resolve(s?s.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let s=Yn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ft.newInvalidDocument(r))}),N.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Yn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Lx(Mx(u),s)<=0||(r.has(u.key)||xl(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,s,r){se()}Cs(e,n){return N.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new QO(this)}getSize(e){return N.resolve(this.size)}}class QO extends qO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),N.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class YO{constructor(e){this.persistence=e,this.xs=new gi(n=>af(n),cf),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Ns=0,this.ks=new yf,this.targetCount=0,this.Ms=ri.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),N.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Fn(n),N.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),N.waitFor(i).next(()=>r)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return N.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),N.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),N.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return N.resolve(s)}containsKey(e,n){return N.resolve(this.ks.containsKey(n))}}/**
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
 */class XO{constructor(e,n){this.$s={},this.overlays={},this.Os=new sf(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new YO(this),this.indexManager=new VO,this.remoteDocumentCache=function(s){return new ZO(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new $O(n),this.qs=new KO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new GO(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){K("MemoryPersistence","Starting transaction:",e);const r=new JO(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return N.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class JO extends Fx{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.Qs=new yf,this.js=null}static zs(e){return new vf(e)}get Ws(){if(this.js)return this.js;throw se()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),N.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),N.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ws,s=>{const r=W.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,oe.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return N.or([()=>N.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class _f{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=ye(),r=ye();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new _f(e,n.fromCache,s,r)}}/**
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
 */class eD{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(lg(n))return N.resolve(null);let s=Qn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ic(n,null,"F"),s=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ye(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Ic(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return lg(n)||r.isEqual(oe.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(eg()<=Ee.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Nh(n)),this.Wi(e,o,n,Px(r,-1)))})}ji(e,n){let s=new vt(c0(e));return n.forEach((r,i)=>{xl(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return eg()<=Ee.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Nh(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ss.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class tD{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Be(be),this.Yi=new gi(i=>af(i),cf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function nD(t,e,n,s){return new tD(t,e,n,s)}async function R0(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ye();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function sD(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=N.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const v=c.docVersions.get(f);Pe(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ye();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function N0(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function rD(t,e){const n=he(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(wt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(g,v,T){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,u)&&a.push(n.Bs.updateTargetData(i,f))});let c=Yn(),l=ye();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(iD(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(oe.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return N.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function iD(t,e,n){let s=ye(),r=ye();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Yn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function oD(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function aD(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,N.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new ms(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Mh(t,e,n){const s=he(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ta(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function wg(t,e,n){const s=he(t);let r=oe.min(),i=ye();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=he(a),h=u.Yi.get(l);return h!==void 0?N.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,Qn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:oe.min(),n?i:ye())).next(a=>(cD(s,eO(e),a),{documents:a,ir:i})))}function cD(t,e,n){let s=t.Xi.get(e)||oe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Eg{constructor(){this.activeTargetIds=oO()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lD{constructor(){this.Hr=new Eg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Eg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uD{Yr(e){}shutdown(){}}/**
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
 */class Tg{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ra=null;function ku(){return Ra===null?Ra=268435456+Math.round(2147483648*Math.random()):Ra++,"0x"+Ra.toString(16)}/**
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
 */const hD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const ht="WebChannelConnection";class fD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=ku(),a=this.To(e,n);K("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(K("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Jr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+mi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=hD[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=ku();return new Promise((o,a)=>{const c=new Ix;c.setWithCredentials(!0),c.listenOnce(wx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Su.NO_ERROR:const u=c.getResponseJson();K(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Su.TIMEOUT:K(ht,`RPC '${e}' ${i} timed out`),a(new L(E.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const h=c.getStatus();if(K(ht,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(T)>=0?T:E.UNKNOWN}(f.status);a(new L(g,f.message))}else a(new L(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(E.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{K(ht,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);K(ht,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=ku(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vx(),a=_x(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Tx({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");K(ht,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new dD({ro:T=>{f?K(ht,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(d||(K(ht,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),K(ht,`RPC '${e}' stream ${r} sending:`,T),h.send(T))},oo:()=>h.close()}),v=(T,S,A)=>{T.listen(S,F=>{try{A(F)}catch(_){setTimeout(()=>{throw _},0)}})};return v(h,Ca.EventType.OPEN,()=>{f||K(ht,`RPC '${e}' stream ${r} transport opened.`)}),v(h,Ca.EventType.CLOSE,()=>{f||(f=!0,K(ht,`RPC '${e}' stream ${r} transport closed`),g.wo())}),v(h,Ca.EventType.ERROR,T=>{f||(f=!0,Jr(ht,`RPC '${e}' stream ${r} transport errored:`,T),g.wo(new L(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ca.EventType.MESSAGE,T=>{var S;if(!f){const A=T.data[0];Pe(!!A);const F=A,_=F.error||((S=F[0])===null||S===void 0?void 0:S.error);if(_){K(ht,`RPC '${e}' stream ${r} received error:`,_);const D=_.status;let ee=function(k){const P=Ge[k];if(P!==void 0)return w0(P)}(D),te=_.message;ee===void 0&&(ee=E.INTERNAL,te="Unknown error status: "+D+" with message "+_.message),f=!0,g.wo(new L(ee,te)),h.close()}else K(ht,`RPC '${e}' stream ${r} received:`,A),g._o(A)}}),v(a,Ex.STAT_EVENT,T=>{T.stat===Xm.PROXY?K(ht,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===Xm.NOPROXY&&K(ht,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Ru(){return typeof document<"u"?document:null}/**
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
 */function Ml(t){return new CO(t,!0)}/**
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
 */class x0{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class O0{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new x0(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new L(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pD extends O0{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=kO(this.serializer,e),s=function(r){if(!("targetChange"in r))return oe.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?oe.min():i.readTime?Sn(i.readTime):oe.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Ph(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=kh(a)?{documents:xO(r,a)}:{query:OO(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=I0(r,i.resumeToken);const c=xh(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(oe.min())>0){o.readTime=Sc(r,i.snapshotVersion.toTimestamp());const c=xh(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=PO(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Ph(this.serializer),n.removeTarget=e,this.Wo(n)}}class mD extends O0{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=NO(e.writeResults,e.commitTime),s=Sn(e.commitTime);return this.listener.cu(s,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ph(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>RO(this.serializer,s))};this.Wo(n)}}/**
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
 */class gD extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(E.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(E.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class yD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Zn(n),this.mu=!1):K("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class vD{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ir(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=he(a);c.vu.add(4),await ra(c),c.bu.set("Unknown"),c.vu.delete(4),await Ll(c)}(this))})}),this.bu=new yD(s,r)}}async function Ll(t){if(Ir(t))for(const e of t.Ru)await e(!0)}async function ra(t){for(const e of t.Ru)await e(!1)}function D0(t,e){const n=he(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Tf(n)?Ef(n):yi(n).Ko()&&wf(n,e))}function P0(t,e){const n=he(t),s=yi(n);n.Au.delete(e),s.Ko()&&M0(n,e),n.Au.size===0&&(s.Ko()?s.jo():Ir(n)&&n.bu.set("Unknown"))}function wf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yi(t).su(e)}function M0(t,e){t.Vu.qt(e),yi(t).iu(e)}function Ef(t){t.Vu=new EO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),yi(t).start(),t.bu.gu()}function Tf(t){return Ir(t)&&!yi(t).Uo()&&t.Au.size>0}function Ir(t){return he(t).vu.size===0}function L0(t){t.Vu=void 0}async function _D(t){t.Au.forEach((e,n)=>{wf(t,e)})}async function wD(t,e){L0(t),Tf(t)?(t.bu.Iu(e),Ef(t)):t.bu.set("Unknown")}async function ED(t,e,n){if(t.bu.set("Online"),e instanceof T0&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ac(t,s)}else if(e instanceof qa?t.Vu.Ht(e):e instanceof E0?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(oe.min()))try{const s=await N0(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(wt.EMPTY_BYTE_STRING,l.snapshotVersion)),M0(r,a);const u=new ms(l.target,a,c,l.sequenceNumber);wf(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await Ac(t,s)}}async function Ac(t,e,n){if(!ta(e))throw e;t.vu.add(1),await ra(t),t.bu.set("Offline"),n||(n=()=>N0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Ll(t)})}function U0(t,e){return e().catch(n=>Ac(t,n,e))}async function Ul(t){const e=he(t),n=ks(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;TD(e);)try{const r=await oD(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,ID(e,r)}catch(r){await Ac(e,r)}F0(e)&&$0(e)}function TD(t){return Ir(t)&&t.Eu.length<10}function ID(t,e){t.Eu.push(e);const n=ks(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function F0(t){return Ir(t)&&!ks(t).Uo()&&t.Eu.length>0}function $0(t){ks(t).start()}async function bD(t){ks(t).hu()}async function CD(t){const e=ks(t);for(const n of t.Eu)e.uu(n.mutations)}async function SD(t,e,n){const s=t.Eu.shift(),r=ff.from(s,e,n);await U0(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ul(t)}async function AD(t,e){e&&ks(t).ou&&await async function(n,s){if(r=s.code,vO(r)&&r!==E.ABORTED){const i=n.Eu.shift();ks(n).Qo(),await U0(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ul(n)}var r}(t,e),F0(t)&&$0(t)}async function Ig(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=Ir(n);n.vu.add(3),await ra(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Ll(n)}async function kD(t,e){const n=he(t);e?(n.vu.delete(2),await Ll(n)):e||(n.vu.add(2),await ra(n),n.bu.set("Unknown"))}function yi(t){return t.Su||(t.Su=function(e,n,s){const r=he(e);return r.fu(),new pD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:_D.bind(null,t),ao:wD.bind(null,t),nu:ED.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Tf(t)?Ef(t):t.bu.set("Unknown")):(await t.Su.stop(),L0(t))})),t.Su}function ks(t){return t.Du||(t.Du=function(e,n,s){const r=he(e);return r.fu(),new mD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:bD.bind(null,t),ao:AD.bind(null,t),au:CD.bind(null,t),cu:SD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ul(t)):(await t.Du.stop(),t.Eu.length>0&&(K("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class If{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new If(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),ta(t))return new L(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=Ni(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Hr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class bg{constructor(){this.Cu=new Be(W.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):se():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ii{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ii(e,n,Hr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class RD{constructor(){this.Nu=void 0,this.listeners=[]}}class ND{constructor(){this.queries=new gi(e=>a0(e),Nl),this.onlineState="Unknown",this.ku=new Set}}async function B0(t,e){const n=he(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new RD),r)try{i.Nu=await n.onListen(s)}catch(o){const a=bf(o,`Initialization of query '${Nh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Cf(n)}async function V0(t,e){const n=he(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function xD(t,e){const n=he(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Cf(n)}function OD(t,e,n){const s=he(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Cf(t){t.ku.forEach(e=>{e.next()})}class j0{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ii(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class q0{constructor(e){this.key=e}}class H0{constructor(e){this.key=e}}class DD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ye(),this.mutatedKeys=ye(),this.tc=c0(e),this.ec=new Hr(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new bg,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=xl(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let T=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(s.track({type:3,doc:f}),T=!0):this.rc(d,f)||(s.track({type:2,doc:f}),T=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),T=!0):d&&!f&&(s.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new ii(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new bg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ye(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new H0(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new q0(s))}),n}hc(e){this.Yu=e.ir,this.Zu=ye();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ii.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class PD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class MD{constructor(e){this.key=e,this.fc=!1}}class LD{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new gi(a=>a0(a),Nl),this._c=new Map,this.mc=new Set,this.gc=new Be(W.comparator),this.yc=new Map,this.Ic=new yf,this.Tc={},this.Ec=new Map,this.Ac=ri.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function UD(t,e){const n=WD(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await aD(n.localStore,Qn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await FD(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&D0(n.remoteStore,o)}return r}async function FD(t,e,n,s,r){t.Rc=(h,d,f)=>async function(g,v,T,S){let A=v.view.sc(T);A.zi&&(A=await wg(g.localStore,v.query,!1).then(({documents:D})=>v.view.sc(D,A)));const F=S&&S.targetChanges.get(v.targetId),_=v.view.applyChanges(A,g.isPrimaryClient,F);return Sg(g,v.targetId,_.cc),_.snapshot}(t,h,d,f);const i=await wg(t.localStore,e,!0),o=new DD(e,i.ir),a=o.sc(i.documents),c=sa.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Sg(t,n,l.cc);const u=new PD(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function $D(t,e){const n=he(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Nl(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Mh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),P0(n.remoteStore,s.targetId),Lh(n,s.targetId)}).catch(ea)):(Lh(n,s.targetId),await Mh(n.localStore,s.targetId,!0))}async function BD(t,e,n){const s=GD(t);try{const r=await function(i,o){const a=he(i),c=Je.now(),l=o.reduce((d,f)=>d.add(f.key),ye());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Yn(),g=ye();return a.Zi.getEntries(d,l).next(v=>{f=v,f.forEach((T,S)=>{S.isValidDocument()||(g=g.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{u=v;const T=[];for(const S of o){const A=fO(S,u.get(S.key).overlayedDocument);A!=null&&T.push(new Us(S.key,A,e0(A.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(v=>{h=v;const T=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,T)})}).then(()=>({batchId:h.batchId,changes:u0(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new Be(be)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ia(s,r.changes),await Ul(s.remoteStore)}catch(r){const i=bf(r,"Failed to persist write");n.reject(i)}}async function z0(t,e){const n=he(t);try{const s=await rD(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Pe(o.fc):r.removedDocuments.size>0&&(Pe(o.fc),o.fc=!1))}),await ia(n,s,e)}catch(s){await ea(s)}}function Cg(t,e,n){const s=he(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=he(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Cf(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function VD(t,e,n){const s=he(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new Be(W.comparator);o=o.insert(i,ft.newNoDocument(i,oe.min()));const a=ye().add(i),c=new Pl(oe.min(),new Map,new Be(be),o,a);await z0(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Sf(s)}else await Mh(s.localStore,e,!1).then(()=>Lh(s,e,n)).catch(ea)}async function jD(t,e){const n=he(t),s=e.batch.batchId;try{const r=await sD(n.localStore,e);W0(n,s,null),K0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ia(n,r)}catch(r){await ea(r)}}async function qD(t,e,n){const s=he(t);try{const r=await function(i,o){const a=he(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Pe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);W0(s,e,n),K0(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ia(s,r)}catch(r){await ea(r)}}function K0(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function W0(t,e,n){const s=he(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function Lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||G0(t,s)})}function G0(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(P0(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Sf(t))}function Sg(t,e,n){for(const s of n)s instanceof q0?(t.Ic.addReference(s.key,e),HD(t,s)):s instanceof H0?(K("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||G0(t,s.key)):se()}function HD(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(K("SyncEngine","New document in limbo: "+n),t.mc.add(s),Sf(t))}function Sf(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new W(Oe.fromString(e)),s=t.Ac.next();t.yc.set(s,new MD(n)),t.gc=t.gc.insert(n,s),D0(t.remoteStore,new ms(Qn(lf(n.path)),s,"TargetPurposeLimboResolution",sf.ct))}}async function ia(t,e,n){const s=he(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=_f.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=he(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(c,h=>N.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>N.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ta(u))throw u;K("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,g)}}}(s.localStore,i))}async function zD(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const s=await R0(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(E.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ia(n,s.er)}}function KD(t,e){const n=he(t),s=n.yc.get(e);if(s&&s.fc)return ye().add(s.key);{let r=ye();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function WD(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=z0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VD.bind(null,e),e.dc.nu=xD.bind(null,e.eventManager),e.dc.Pc=OD.bind(null,e.eventManager),e}function GD(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qD.bind(null,e),e}class Ag{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ml(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nD(this.persistence,new eD,e.initialUser,this.serializer)}createPersistence(e){return new XO(vf.zs,this.serializer)}createSharedClientState(e){return new lD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zD.bind(null,this.syncEngine),await kD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ND}createDatastore(e){const n=Ml(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new fD(r));var r;return function(i,o,a,c){return new gD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Cg(this.syncEngine,a,0),o=Tg.D()?new Tg:new uD,new vD(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new LD(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=he(e);K("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ra(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Z0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class QD{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=dt.UNAUTHENTICATED,this.clientId=Yw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=bf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Nu(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await R0(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XD(t);K("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ig(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ig(e.remoteStore,i)),t._onlineComponents=e}function YD(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function XD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!YD(n))throw n;Jr("Error using user provided cache. Falling back to memory cache: "+n),await Nu(t,new Ag)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Nu(t,new Ag);return t._offlineComponents}async function Q0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await kg(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await kg(t,new ZD))),t._onlineComponents}function JD(t){return Q0(t).then(e=>e.syncEngine)}async function Y0(t){const e=await Q0(t),n=e.eventManager;return n.onListen=UD.bind(null,e.syncEngine),n.onUnlisten=$D.bind(null,e.syncEngine),n}function eP(t,e,n={}){const s=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Z0({next:h=>{i.enqueueAndForget(()=>V0(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new L(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new L(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new j0(lf(o.path),l,{includeMetadataChanges:!0,Ku:!0});return B0(r,u)}(await Y0(t),t.asyncQueue,e,n,s)),s.promise}function X0(t,e,n={}){const s=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Z0({next:h=>{i.enqueueAndForget(()=>V0(r,u)),h.fromCache&&a.source==="server"?c.reject(new L(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new j0(o,l,{includeMetadataChanges:!0,Ku:!0});return B0(r,u)}(await Y0(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function J0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Rg=new Map;/**
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
 */function eE(t,e,n){if(!n)throw new L(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tP(t,e,n,s){if(e===!0&&s===!0)throw new L(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ng(t){if(!W.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xg(t){if(W.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new L(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function nP(t,e){if(e<=0)throw new L(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Og{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new L(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class $l{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Og({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Og(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Cx;switch(n.type){case"firstParty":return new Rx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rg.get(e);n&&(K("ComponentProvider","Removing Datastore"),Rg.delete(e),n.terminate())}(this),Promise.resolve()}}function sP(t,e,n,s={}){var r;const i=(t=jt(t,$l))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Jr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=dt.MOCK_USER;else{o=Dv(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new L(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new dt(c)}t._authCredentials=new Sx(new Qw(o,a))}}/**
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
 */class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class mn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mn(this.firestore,e,this._query)}}class Is extends mn{constructor(e,n,s){super(e,n,lf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new W(e))}withConverter(e){return new Is(this.firestore,e,this._path)}}function tE(t,e,...n){if(t=Le(t),eE("collection","path",e),t instanceof $l){const s=Oe.fromString(e,...n);return xg(s),new Is(t,null,s)}{if(!(t instanceof Ct||t instanceof Is))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return xg(s),new Is(t.firestore,null,s)}}function kc(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Yw.A()),eE("doc","path",e),t instanceof $l){const s=Oe.fromString(e,...n);return Ng(s),new Ct(t,null,new W(s))}{if(!(t instanceof Ct||t instanceof Is))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return Ng(s),new Ct(t.firestore,t instanceof Is?t.converter:null,new W(s))}}/**
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
 */class rP{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new x0(this,"async_queue_retry"),this.Xc=()=>{const n=Ru();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Ru();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Ru();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new qn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ta(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=If.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&se()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Fs extends $l{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new rP,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nE(this),this._firestoreClient.terminate()}}function iP(t,e){const n=typeof t=="object"?t:ol(),s=typeof t=="string"?t:e||"(default)",r=Ds(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Nv("firestore");i&&sP(r,...i)}return r}function Bl(t){return t._firestoreClient||nE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nE(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new Vx(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,J0(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new QD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oi(wt.fromBase64String(e))}catch(n){throw new L(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oi(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Af{constructor(e){this._methodName=e}}/**
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
 */class kf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const oP=/^__.*__$/;class aP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Us(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class sE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Rf{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Rc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(rE(this.ca)&&oP.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class cP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ml(e)}ya(e,n,s,r=!1){return new Rf({ca:e,methodName:n,ga:s,path:mt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oa(t){const e=t._freezeSettings(),n=Ml(t._databaseId);return new cP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iE(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);Nf("Data must be an object, but it was:",o,s);const a=aE(s,o);let c,l;if(i.merge)c=new Ft(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Uh(e,h,n);if(!o.contains(d))throw new L(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lE(u,d)||u.push(d)}c=new Ft(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new aP(new Rt(a),c,l)}class jl extends Af{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jl}}function lP(t,e,n,s){const r=t.ya(1,e,n);Nf("Data must be an object, but it was:",r,s);const i=[],o=Rt.empty();Tr(s,(c,l)=>{const u=xf(e,c,n);l=Le(l);const h=r.da(u);if(l instanceof jl)i.push(u);else{const d=aa(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ft(i);return new sE(o,a,r.fieldTransforms)}function uP(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[Uh(e,s,n)],c=[r];if(i.length%2!=0)throw new L(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Uh(e,i[d])),c.push(i[d+1]);const l=[],u=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!lE(l,a[d])){const f=a[d];let g=c[d];g=Le(g);const v=o.da(f);if(g instanceof jl)l.push(f);else{const T=aa(g,v);T!=null&&(l.push(f),u.set(f,T))}}const h=new Ft(l);return new sE(u,h,o.fieldTransforms)}function oE(t,e,n,s=!1){return aa(n,t.ya(s?4:3,e))}function aa(t,e){if(cE(t=Le(t)))return Nf("Unsupported field value:",e,t),aE(t,e);if(t instanceof Af)return function(n,s){if(!rE(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=aa(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return aO(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Je.fromDate(n);return{timestampValue:Sc(s.serializer,r)}}if(n instanceof Je){const r=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sc(s.serializer,r)}}if(n instanceof kf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof oi)return{bytesValue:I0(s.serializer,n._byteString)};if(n instanceof Ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:gf(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Fl(n)}`)}(t,e)}function aE(t,e){const n={};return Xw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(t,(s,r)=>{const i=aa(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function cE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof kf||t instanceof oi||t instanceof Ct||t instanceof Af)}function Nf(t,e,n){if(!cE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fl(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Uh(t,e,n){if((e=Le(e))instanceof Vl)return e._internalPath;if(typeof e=="string")return xf(t,e);throw Rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const hP=new RegExp("[~\\*/\\[\\]]");function xf(t,e,n){if(e.search(hP)>=0)throw Rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vl(...e.split("."))._internalPath}catch{throw Rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(E.INVALID_ARGUMENT,a+t+c)}function lE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Of{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dP extends Of{data(){return super.data()}}function Df(t,e){return typeof e=="string"?xf(t,e):e instanceof Vl?e._internalPath:e._delegate._internalPath}/**
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
 */function fP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pf{}class ca extends Pf{}function pP(t,e,...n){let s=[];e instanceof Pf&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Lf).length,o=r.filter(a=>a instanceof Mf).length;if(i>1||i>0&&o>0)throw new L(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Mf extends ca{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Mf(e,n,s)}_apply(e){const n=this._parse(e);return hE(e._query,n),new mn(e.firestore,e.converter,Rh(e._query,n))}_parse(e){const n=oa(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Pg(u,l);const d=[];for(const f of u)d.push(Dg(a,r,f));h={arrayValue:{values:d}}}else h=Dg(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Pg(u,l),h=oE(o,i,u,l==="in"||l==="not-in");return Qe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Lf extends Pf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lf(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)hE(i,a),i=Rh(i,a)}(e._query,n),new mn(e.firestore,e.converter,Rh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uf extends ca{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Uf(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new L(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new qr(r,i);return function(a,c){if(uf(a)===null){const l=Rl(a);l!==null&&dE(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new mn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ls(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function mP(t,e="asc"){const n=e,s=Df("orderBy",t);return Uf._create(s,n)}class Ff extends ca{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Ff(e,n,s)}_apply(e){return new mn(e.firestore,e.converter,Ic(e._query,this._limit,this._limitType))}}function gP(t){return nP("limit",t),Ff._create("limit",t,"F")}class $f extends ca{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new $f(e,n,s)}_apply(e){const n=uE(e,this.type,this._docOrFields,this._inclusive);return new mn(e.firestore,e.converter,function(s,r){return new Ls(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function yP(...t){return $f._create("startAt",t,!0)}class Bf extends ca{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Bf(e,n,s)}_apply(e){const n=uE(e,this.type,this._docOrFields,this._inclusive);return new mn(e.firestore,e.converter,function(s,r){return new Ls(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function vP(...t){return Bf._create("endAt",t,!0)}function uE(t,e,n,s){if(n[0]=Le(n[0]),n[0]instanceof Of)return function(r,i,o,a,c){if(!a)throw new L(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of rr(r))if(u.field.isKeyField())l.push(Tc(i,a.key));else{const h=a.data.field(u.field);if(kl(h))throw new L(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new L(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new si(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=oa(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new L(E.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new L(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!hf(i)&&g.indexOf("/")!==-1)throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const v=i.path.child(Oe.fromString(g));if(!W.isDocumentKey(v))throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const T=new W(v);d.push(Tc(o,T))}else{const v=oE(a,c,g);d.push(v)}}return new si(d,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Dg(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new L(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hf(e)&&n.indexOf("/")!==-1)throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Oe.fromString(n));if(!W.isDocumentKey(s))throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Tc(t,new W(s))}if(n instanceof Ct)return Tc(t,n._key);throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fl(n)}.`)}function Pg(t,e){if(!Array.isArray(t)||t.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hE(t,e){if(e.isInequality()){const s=Rl(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new L(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=uf(t);i!==null&&dE(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dE(t,e,n){if(!n.isEqual(e))throw new L(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _P{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Tr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new kf(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=rf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=As(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Oe.fromString(e);Pe(k0(s));const r=new yo(s.get(1),s.get(3)),i=new W(s.popFirst(5));return r.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function fE(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pE extends Of{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Df("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ha extends pE{data(e={}){return super.data(e)}}class mE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Oi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ha(this._firestore,this._userDataWriter,s.key,s,new Oi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ha(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Oi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ha(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Oi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:wP(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
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
 */function Mg(t){t=jt(t,Ct);const e=jt(t.firestore,Fs);return eP(Bl(e),t._key).then(n=>IP(e,t,n))}class Vf extends _P{constructor(e){super(),this.firestore=e}convertBytes(e){return new oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function tU(t){t=jt(t,mn);const e=jt(t.firestore,Fs),n=Bl(e),s=new Vf(e);return fP(t._query),X0(n,t._query).then(r=>new mE(e,s,t,r))}function nU(t){t=jt(t,mn);const e=jt(t.firestore,Fs),n=Bl(e),s=new Vf(e);return X0(n,t._query,{source:"server"}).then(r=>new mE(e,s,t,r))}function EP(t,e,n){t=jt(t,Ct);const s=jt(t.firestore,Fs),r=fE(t.converter,e,n);return ql(s,[iE(oa(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Zt.none())])}function TP(t,e,n,...s){t=jt(t,Ct);const r=jt(t.firestore,Fs),i=oa(r);let o;return o=typeof(e=Le(e))=="string"||e instanceof Vl?uP(i,"updateDoc",t._key,e,n,s):lP(i,"updateDoc",t._key,e),ql(r,[o.toMutation(t._key,Zt.exists(!0))])}function sU(t){return ql(jt(t.firestore,Fs),[new df(t._key,Zt.none())])}function rU(t,e){const n=jt(t.firestore,Fs),s=kc(t),r=fE(t.converter,e);return ql(n,[iE(oa(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Zt.exists(!1))]).then(()=>s)}function ql(t,e){return function(n,s){const r=new qn;return n.asyncQueue.enqueueAndForget(async()=>BD(await JD(n),s,r)),r.promise}(Bl(t),e)}function IP(t,e,n){const s=n.docs.get(e._key),r=new Vf(t);return new pE(t,r,e._key,s,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){mi=n})(wr),hn(new Qt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Fs(new Ax(n.getProvider("auth-internal")),new xx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Nt(Jm,"3.12.0",t),Nt(Jm,"3.12.0","esm2017")})();/**
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
 */const gE="firebasestorage.googleapis.com",yE="storageBucket",bP=2*60*1e3,CP=10*60*1e3;/**
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
 */class He extends Yt{constructor(e,n,s=0){super(xu(e),`Firebase Storage: ${n} (${xu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function xu(t){return"storage/"+t}function jf(){const t="An unknown error occurred, please check the error payload for server response.";return new He(qe.UNKNOWN,t)}function SP(t){return new He(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AP(t){return new He(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(qe.UNAUTHENTICATED,t)}function RP(){return new He(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NP(t){return new He(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function xP(){return new He(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OP(){return new He(qe.CANCELED,"User canceled the upload/download.")}function DP(t){return new He(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function PP(t){return new He(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function MP(){return new He(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yE+"' property when initializing the app?")}function LP(){return new He(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UP(){return new He(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FP(t){return new He(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fh(t){return new He(qe.INVALID_ARGUMENT,t)}function vE(){return new He(qe.APP_DELETED,"The Firebase app was deleted.")}function $P(t){return new He(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(t,e){return new He(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bi(t){throw new He(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(s.path==="")return s;throw PP(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},v=n===gE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",S=new RegExp(`^https?://${v}/${r}/${T}`,"i"),F=[{regex:a,indices:c,postModify:i},{regex:f,indices:g,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<F.length;_++){const D=F[_],ee=D.regex.exec(e);if(ee){const te=ee[D.indices.bucket];let k=ee[D.indices.path];k||(k=""),s=new $t(te,k),D.postModify(s);break}}if(s==null)throw DP(e);return s}}class BP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function VP(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...T){l||(l=!0,e.apply(null,T))}function h(T){r=setTimeout(()=>{r=null,t(f,c())},T)}function d(){i&&clearTimeout(i)}function f(T,...S){if(l){d();return}if(T){d(),u.call(null,T,...S);return}if(c()||o){d(),u.call(null,T,...S);return}s<64&&(s*=2);let F;a===1?(a=2,F=0):F=(s+Math.random())*1e3,h(F)}let g=!1;function v(T){g||(g=!0,d(),!l&&(r!==null?(T||(a=2),clearTimeout(r),h(0)):T||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function jP(t){t(!1)}/**
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
 */function qP(t){return t!==void 0}function HP(t){return typeof t=="object"&&!Array.isArray(t)}function qf(t){return typeof t=="string"||t instanceof String}function Lg(t){return Hf()&&t instanceof Blob}function Hf(){return typeof Blob<"u"&&!IS()}function Ug(t,e,n,s){if(s<e)throw Fh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Fh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function zf(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function _E(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var ir;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ir||(ir={}));/**
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
 */function zP(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class KP{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Na(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ir.NO_ERROR,c=i.getStatus();if(!a||zP(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ir.ABORT;s(!1,new Na(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Na(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());qP(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=jf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?vE():OP();o(c)}else{const c=xP();o(c)}};this.canceled_?n(!1,new Na(!1,null,!0)):this.backoffId_=VP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Na{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function WP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YP(t,e,n,s,r,i,o=!0){const a=_E(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return ZP(l,e),WP(l,n),GP(l,i),QP(l,s),new KP(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function XP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JP(...t){const e=XP();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Hf())return new Blob(t);throw new He(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function tM(t){if(typeof atob>"u")throw FP("base-64");return atob(t)}/**
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
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ou{constructor(e,n){this.data=e,this.contentType=n||null}}function nM(t,e){switch(t){case In.RAW:return new Ou(wE(e));case In.BASE64:case In.BASE64URL:return new Ou(EE(t,e));case In.DATA_URL:return new Ou(rM(e),iM(e))}throw jf()}function wE(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function sM(t){let e;try{e=decodeURIComponent(t)}catch{throw Gi(In.DATA_URL,"Malformed data URL.")}return wE(e)}function EE(t,e){switch(t){case In.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Gi(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Gi(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tM(e)}catch(r){throw r.message.includes("polyfill")?r:Gi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class TE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gi(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=oM(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function rM(t){const e=new TE(t);return e.base64?EE(In.BASE64,e.rest):sM(e.rest)}function iM(t){return new TE(t).contentType}function oM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fs{constructor(e,n){let s=0,r="";Lg(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Lg(this.data_)){const s=this.data_,r=eM(s,e,n);return r===null?null:new fs(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new fs(s,!0)}}static getBlob(...e){if(Hf()){const n=e.map(s=>s instanceof fs?s.data_:s);return new fs(JP.apply(null,n))}else{const n=e.map(o=>qf(o)?nM(In.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new fs(r,!0)}}uploadData(){return this.data_}}/**
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
 */function IE(t){let e;try{e=JSON.parse(t)}catch{return null}return HP(e)?e:null}/**
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
 */function aM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cM(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function bE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function lM(t,e){return e}class Tt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||lM}}let xa=null;function uM(t){return!qf(t)||t.length<2?t:bE(t)}function CE(){if(xa)return xa;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return uM(o)}const n=new Tt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Tt("size");return r.xform=s,t.push(r),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),xa=t,xa}function hM(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new $t(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function dM(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return hM(s,t),s}function SE(t,e,n){const s=IE(e);return s===null?null:dM(t,s,n)}function fM(t,e,n,s){const r=IE(e);if(r===null||!qf(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=zf(d,n,s),g=_E({alt:"media",token:l});return f+g})[0]}function pM(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class AE{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function kE(t){if(!t)throw jf()}function mM(t,e){function n(s,r){const i=SE(t,r,e);return kE(i!==null),i}return n}function gM(t,e){function n(s,r){const i=SE(t,r,e);return kE(i!==null),fM(i,r,t.host,t._protocol)}return n}function RE(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=RP():r=kP():n.getStatus()===402?r=AP(t.bucket):n.getStatus()===403?r=NP(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function yM(t){const e=RE(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=SP(t.path)),i.serverResponse=r.serverResponse,i}return n}function vM(t,e,n){const s=e.fullServerUrl(),r=zf(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new AE(r,i,gM(t,n),o);return a.errorHandler=yM(e),a}function _M(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function wM(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=_M(null,e)),s}function EM(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let F="";for(let _=0;_<2;_++)F=F+Math.random().toString().slice(2);return F}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=wM(e,s,r),u=pM(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=fs.getBlob(h,s,d);if(f===null)throw LP();const g={name:l.fullPath},v=zf(i,t.host,t._protocol),T="POST",S=t.maxUploadRetryTime,A=new AE(v,T,mM(t,n),S);return A.urlParams=g,A.headers=o,A.body=f.uploadData(),A.errorHandler=RE(e),A}class TM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ir.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ir.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ir.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw bi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IM extends TM{initXhr(){this.xhr_.responseType="text"}}function NE(){return new IM}/**
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
 */class mr{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new mr(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bE(this._location.path)}get storage(){return this._service}get parent(){const e=aM(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new mr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $P(e)}}function bM(t,e,n){t._throwIfRoot("uploadBytes");const s=EM(t.storage,t._location,CE(),new fs(e,!0),n);return t.storage.makeRequestWithTokens(s,NE).then(r=>({metadata:r,ref:t}))}function CM(t){t._throwIfRoot("getDownloadURL");const e=vM(t.storage,t._location,CE());return t.storage.makeRequestWithTokens(e,NE).then(n=>{if(n===null)throw UP();return n})}function SM(t,e){const n=cM(t._location.path,e),s=new $t(t._location.bucket,n);return new mr(t.storage,s)}/**
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
 */function AM(t){return/^[A-Za-z]+:\/\//.test(t)}function kM(t,e){return new mr(t,e)}function xE(t,e){if(t instanceof Kf){const n=t;if(n._bucket==null)throw MP();const s=new mr(n,n._bucket);return e!=null?xE(s,e):s}else return e!==void 0?SM(t,e):t}function RM(t,e){if(e&&AM(e)){if(t instanceof Kf)return kM(t,e);throw Fh("To use ref(service, url), the first argument must be a Storage instance.")}else return xE(t,e)}function Fg(t,e){const n=e==null?void 0:e[yE];return n==null?null:$t.makeFromBucketSpec(n,t)}function NM(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Dv(r,t.app.options.projectId))}class Kf{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=gE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bP,this._maxUploadRetryTime=CP,this._requests=new Set,r!=null?this._bucket=$t.makeFromBucketSpec(r,this._host):this._bucket=Fg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=Fg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ug("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ug("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new BP(vE());{const o=YP(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const $g="@firebase/storage",Bg="0.11.2";/**
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
 */const OE="storage";function iU(t,e,n){return t=Le(t),bM(t,e,n)}function oU(t){return t=Le(t),CM(t)}function xM(t,e){return t=Le(t),RM(t,e)}function OM(t=ol(),e){t=Le(t);const s=Ds(t,OE).getImmediate({identifier:e}),r=Nv("storage");return r&&DM(s,...r),s}function DM(t,e,n,s={}){NM(t,e,n,s)}function PM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Kf(n,s,r,e,wr)}function MM(){hn(new Qt(OE,PM,"PUBLIC").setMultipleInstances(!0)),Nt($g,Bg,""),Nt($g,Bg,"esm2017")}MM();const LM={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d",measurementId:"G-0EWRT6BT1Y"},Hl=$v(LM);yN(Hl);const Eo=iP(Hl),Wt=H1(Hl),zl="profiles",Vg=()=>{if(!Wt.currentUser)throw new Error("Auth required");return kc(Eo,zl,Wt.currentUser.uid)},UM=t=>tE(Eo,zl,t,"timeline"),aU=()=>{if(!Wt.currentUser)throw new Error("Auth required");return UM(Wt.currentUser.uid)},cU=t=>xM(OM(Hl),t),lU=(t,e)=>pP(tE(Eo,zl),mP(t),gP(5),yP(e.trim()),vP(`${e.trim()}`)),FM=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],$h=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,Bh=t=>t[$h(0,t.length-1)],jg=t=>{const e=[];for(let n=0;n<t;n++)e.push(Bh(FM));return e.join(" ")},$M=t=>{const e=t.slice(1);return e?`#${(+`0x1${e}`^16777215).toString(16).substr(1).toUpperCase()}`:""},BM=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}],VM="/assets/undraw_online_resume_re_ru7s-458e1bd5.svg",jM={Instagram:{link:""},Facebook:{link:""},YouTube:{link:""},Spotify:{link:""},Twitter:{link:""},GitHub:{link:""},LinkedIn:{link:""},TikTok:{link:""}},qM=()=>{const{author:t,quotes:e}=Bh(BM);return`"${Bh(e)}"    - ${t}`},HM=t=>{var e;if(!t)throw new Error("Unauthorized profile creation attempt");return{userUid:t.uid,displayName:((e=t==null?void 0:t.displayName)==null?void 0:e.toLowerCase())??"",coverImg:VM,photoURL:(t==null?void 0:t.photoURL)??"",bgColor:"#FFE5E5",fontColor:"#000000",fontFamily:"merienda",shortBio:`${jg($h(1,3))} What/Where ${jg($h(1,3))}`,longBio:qM(),socialLinks:jM}};var Te;(function(t){t.assertEqual=r=>r;function e(r){}t.assertIs=e;function n(r){throw new Error}t.assertNever=n,t.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},t.getValidEnumValues=r=>{const i=t.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of i)o[a]=r[a];return t.objectValues(o)},t.objectValues=r=>t.objectKeys(r).map(function(i){return r[i]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},t.find=(r,i)=>{for(const o of r)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=s,t.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(Te||(Te={}));var Vh;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Vh||(Vh={}));const V=Te.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ps=t=>{switch(typeof t){case"undefined":return V.undefined;case"string":return V.string;case"number":return isNaN(t)?V.nan:V.number;case"boolean":return V.boolean;case"function":return V.function;case"bigint":return V.bigint;case"symbol":return V.symbol;case"object":return Array.isArray(t)?V.array:t===null?V.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?V.promise:typeof Map<"u"&&t instanceof Map?V.map:typeof Set<"u"&&t instanceof Set?V.set:typeof Date<"u"&&t instanceof Date?V.date:V.object;default:return V.unknown}},x=Te.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),zM=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class an extends Error{constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(n(o));else{let a=s,c=0;for(;c<o.path.length;){const l=o.path[c];c===o.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(o))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return r(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,Te.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},s=[];for(const r of this.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(e(r))):s.push(e(r));return{formErrors:s,fieldErrors:n}}get formErrors(){return this.flatten()}}an.create=t=>new an(t);const To=(t,e)=>{let n;switch(t.code){case x.invalid_type:t.received===V.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case x.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Te.jsonStringifyReplacer)}`;break;case x.unrecognized_keys:n=`Unrecognized key(s) in object: ${Te.joinValues(t.keys,", ")}`;break;case x.invalid_union:n="Invalid input";break;case x.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Te.joinValues(t.options)}`;break;case x.invalid_enum_value:n=`Invalid enum value. Expected ${Te.joinValues(t.options)}, received '${t.received}'`;break;case x.invalid_arguments:n="Invalid function arguments";break;case x.invalid_return_type:n="Invalid function return type";break;case x.invalid_date:n="Invalid date";break;case x.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Te.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case x.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case x.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case x.custom:n="Invalid input";break;case x.invalid_intersection_types:n="Intersection results could not be merged";break;case x.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case x.not_finite:n="Number must be finite";break;default:n=e.defaultError,Te.assertNever(t)}return{message:n}};let DE=To;function KM(t){DE=t}function Nc(){return DE}const xc=t=>{const{data:e,path:n,errorMaps:s,issueData:r}=t,i=[...n,...r.path||[]],o={...r,path:i};let a="";const c=s.filter(l=>!!l).slice().reverse();for(const l of c)a=l(o,{data:e,defaultError:a}).message;return{...r,path:i,message:r.message||a}},WM=[];function q(t,e){const n=xc({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Nc(),To].filter(s=>!!s)});t.common.issues.push(n)}class Et{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const s=[];for(const r of n){if(r.status==="aborted")return ce;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,n){const s=[];for(const r of n)s.push({key:await r.key,value:await r.value});return Et.mergeObjectSync(e,s)}static mergeObjectSync(e,n){const s={};for(const r of n){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return ce;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const ce=Object.freeze({status:"aborted"}),PE=t=>({status:"dirty",value:t}),St=t=>({status:"valid",value:t}),jh=t=>t.status==="aborted",qh=t=>t.status==="dirty",Io=t=>t.status==="valid",Oc=t=>typeof Promise<"u"&&t instanceof Promise;var J;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(J||(J={}));class xn{constructor(e,n,s,r){this._cachedPath=[],this.parent=e,this.data=n,this._path=s,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const qg=(t,e)=>{if(Io(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new an(t.common.issues);return this._error=n,this._error}}};function ue(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:s,description:r}=t;if(e&&(n||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:s??a.defaultError}:{message:n??a.defaultError},description:r}}class fe{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return ps(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:ps(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Et,ctx:{common:e.parent.common,data:e.data,parsedType:ps(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Oc(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const s=this.safeParse(e,n);if(s.success)return s.data;throw s.error}safeParse(e,n){var s;const r={common:{issues:[],async:(s=n==null?void 0:n.async)!==null&&s!==void 0?s:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ps(e)},i=this._parseSync({data:e,path:r.path,parent:r});return qg(r,i)}async parseAsync(e,n){const s=await this.safeParseAsync(e,n);if(s.success)return s.data;throw s.error}async safeParseAsync(e,n){const s={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ps(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(Oc(r)?r:Promise.resolve(r));return qg(s,i)}refine(e,n){const s=r=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(r):n;return this._refinement((r,i)=>{const o=e(r),a=()=>i.addIssue({code:x.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof n=="function"?n(s,r):n),!1))}_refinement(e){return new pn({schema:this,typeName:ne.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Hn.create(this,this._def)}nullable(){return vr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return cn.create(this,this._def)}promise(){return ci.create(this,this._def)}or(e){return Ao.create([this,e],this._def)}and(e){return ko.create(this,e,this._def)}transform(e){return new pn({...ue(this._def),schema:this,typeName:ne.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new Do({...ue(this._def),innerType:this,defaultValue:n,typeName:ne.ZodDefault})}brand(){return new LE({typeName:ne.ZodBranded,type:this,...ue(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Lc({...ue(this._def),innerType:this,catchValue:n,typeName:ne.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return la.create(this,e)}readonly(){return Fc.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const GM=/^c[^\s-]{8,}$/i,ZM=/^[a-z][a-z0-9]*$/,QM=/^[0-9A-HJKMNP-TV-Z]{26}$/,YM=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,XM=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,JM="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Du;const eL=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,tL=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,nL=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function sL(t,e){return!!((e==="v4"||!e)&&eL.test(t)||(e==="v6"||!e)&&tL.test(t))}class nn extends fe{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==V.string){const i=this._getOrReturnCtx(e);return q(i,{code:x.invalid_type,expected:V.string,received:i.parsedType}),ce}const s=new Et;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),q(r,{code:x.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),q(r,{code:x.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?q(r,{code:x.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&q(r,{code:x.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")XM.test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"email",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="emoji")Du||(Du=new RegExp(JM,"u")),Du.test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"emoji",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")YM.test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"uuid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")GM.test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"cuid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")ZM.test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"cuid2",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="ulid")QM.test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"ulid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),q(r,{validation:"url",code:x.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"regex",code:x.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(r=this._getOrReturnCtx(e,r),q(r,{code:x.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),s.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),q(r,{code:x.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),q(r,{code:x.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?nL(i).test(e.data)||(r=this._getOrReturnCtx(e,r),q(r,{code:x.invalid_string,validation:"datetime",message:i.message}),s.dirty()):i.kind==="ip"?sL(e.data,i.version)||(r=this._getOrReturnCtx(e,r),q(r,{validation:"ip",code:x.invalid_string,message:i.message}),s.dirty()):Te.assertNever(i);return{status:s.value,value:e.data}}_regex(e,n,s){return this.refinement(r=>e.test(r),{validation:n,code:x.invalid_string,...J.errToObj(s)})}_addCheck(e){return new nn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...J.errToObj(e)})}url(e){return this._addCheck({kind:"url",...J.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...J.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...J.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...J.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...J.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...J.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...J.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...J.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...J.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...J.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...J.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...J.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...J.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...J.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...J.errToObj(n)})}nonempty(e){return this.min(1,J.errToObj(e))}trim(){return new nn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new nn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new nn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}nn.create=t=>{var e;return new nn({checks:[],typeName:ne.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ue(t)})};function rL(t,e){const n=(t.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=n>s?n:s,i=parseInt(t.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return i%o/Math.pow(10,r)}class Rs extends fe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==V.number){const i=this._getOrReturnCtx(e);return q(i,{code:x.invalid_type,expected:V.number,received:i.parsedType}),ce}let s;const r=new Et;for(const i of this._def.checks)i.kind==="int"?Te.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),q(s,{code:x.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),q(s,{code:x.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),q(s,{code:x.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?rL(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),q(s,{code:x.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),q(s,{code:x.not_finite,message:i.message}),r.dirty()):Te.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,J.toString(n))}gt(e,n){return this.setLimit("min",e,!1,J.toString(n))}lte(e,n){return this.setLimit("max",e,!0,J.toString(n))}lt(e,n){return this.setLimit("max",e,!1,J.toString(n))}setLimit(e,n,s,r){return new Rs({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:J.toString(r)}]})}_addCheck(e){return new Rs({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:J.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:J.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:J.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:J.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:J.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:J.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:J.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:J.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:J.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Te.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(n===null||s.value>n)&&(n=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Rs.create=t=>new Rs({checks:[],typeName:ne.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...ue(t)});class Ns extends fe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==V.bigint){const i=this._getOrReturnCtx(e);return q(i,{code:x.invalid_type,expected:V.bigint,received:i.parsedType}),ce}let s;const r=new Et;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),q(s,{code:x.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),q(s,{code:x.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),q(s,{code:x.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):Te.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,J.toString(n))}gt(e,n){return this.setLimit("min",e,!1,J.toString(n))}lte(e,n){return this.setLimit("max",e,!0,J.toString(n))}lt(e,n){return this.setLimit("max",e,!1,J.toString(n))}setLimit(e,n,s,r){return new Ns({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:J.toString(r)}]})}_addCheck(e){return new Ns({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:J.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:J.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:J.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:J.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:J.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Ns.create=t=>{var e;return new Ns({checks:[],typeName:ne.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ue(t)})};class bo extends fe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==V.boolean){const s=this._getOrReturnCtx(e);return q(s,{code:x.invalid_type,expected:V.boolean,received:s.parsedType}),ce}return St(e.data)}}bo.create=t=>new bo({typeName:ne.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...ue(t)});class gr extends fe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==V.date){const i=this._getOrReturnCtx(e);return q(i,{code:x.invalid_type,expected:V.date,received:i.parsedType}),ce}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return q(i,{code:x.invalid_date}),ce}const s=new Et;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),q(r,{code:x.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),q(r,{code:x.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):Te.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new gr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:J.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:J.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}gr.create=t=>new gr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:ne.ZodDate,...ue(t)});class Dc extends fe{_parse(e){if(this._getType(e)!==V.symbol){const s=this._getOrReturnCtx(e);return q(s,{code:x.invalid_type,expected:V.symbol,received:s.parsedType}),ce}return St(e.data)}}Dc.create=t=>new Dc({typeName:ne.ZodSymbol,...ue(t)});class Co extends fe{_parse(e){if(this._getType(e)!==V.undefined){const s=this._getOrReturnCtx(e);return q(s,{code:x.invalid_type,expected:V.undefined,received:s.parsedType}),ce}return St(e.data)}}Co.create=t=>new Co({typeName:ne.ZodUndefined,...ue(t)});class So extends fe{_parse(e){if(this._getType(e)!==V.null){const s=this._getOrReturnCtx(e);return q(s,{code:x.invalid_type,expected:V.null,received:s.parsedType}),ce}return St(e.data)}}So.create=t=>new So({typeName:ne.ZodNull,...ue(t)});class ai extends fe{constructor(){super(...arguments),this._any=!0}_parse(e){return St(e.data)}}ai.create=t=>new ai({typeName:ne.ZodAny,...ue(t)});class or extends fe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return St(e.data)}}or.create=t=>new or({typeName:ne.ZodUnknown,...ue(t)});class Xn extends fe{_parse(e){const n=this._getOrReturnCtx(e);return q(n,{code:x.invalid_type,expected:V.never,received:n.parsedType}),ce}}Xn.create=t=>new Xn({typeName:ne.ZodNever,...ue(t)});class Pc extends fe{_parse(e){if(this._getType(e)!==V.undefined){const s=this._getOrReturnCtx(e);return q(s,{code:x.invalid_type,expected:V.void,received:s.parsedType}),ce}return St(e.data)}}Pc.create=t=>new Pc({typeName:ne.ZodVoid,...ue(t)});class cn extends fe{_parse(e){const{ctx:n,status:s}=this._processInputParams(e),r=this._def;if(n.parsedType!==V.array)return q(n,{code:x.invalid_type,expected:V.array,received:n.parsedType}),ce;if(r.exactLength!==null){const o=n.data.length>r.exactLength.value,a=n.data.length<r.exactLength.value;(o||a)&&(q(n,{code:o?x.too_big:x.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&n.data.length<r.minLength.value&&(q(n,{code:x.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&n.data.length>r.maxLength.value&&(q(n,{code:x.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new xn(n,o,n.path,a)))).then(o=>Et.mergeArray(s,o));const i=[...n.data].map((o,a)=>r.type._parseSync(new xn(n,o,n.path,a)));return Et.mergeArray(s,i)}get element(){return this._def.type}min(e,n){return new cn({...this._def,minLength:{value:e,message:J.toString(n)}})}max(e,n){return new cn({...this._def,maxLength:{value:e,message:J.toString(n)}})}length(e,n){return new cn({...this._def,exactLength:{value:e,message:J.toString(n)}})}nonempty(e){return this.min(1,e)}}cn.create=(t,e)=>new cn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ne.ZodArray,...ue(e)});function Dr(t){if(t instanceof Fe){const e={};for(const n in t.shape){const s=t.shape[n];e[n]=Hn.create(Dr(s))}return new Fe({...t._def,shape:()=>e})}else return t instanceof cn?new cn({...t._def,type:Dr(t.element)}):t instanceof Hn?Hn.create(Dr(t.unwrap())):t instanceof vr?vr.create(Dr(t.unwrap())):t instanceof On?On.create(t.items.map(e=>Dr(e))):t}class Fe extends fe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Te.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==V.object){const l=this._getOrReturnCtx(e);return q(l,{code:x.invalid_type,expected:V.object,received:l.parsedType}),ce}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Xn&&this._def.unknownKeys==="strip"))for(const l in r.data)o.includes(l)||a.push(l);const c=[];for(const l of o){const u=i[l],h=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new xn(r,h,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof Xn){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of a)c.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(l==="strict")a.length>0&&(q(r,{code:x.unrecognized_keys,keys:a}),s.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of a){const h=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new xn(r,h,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const h=await u.key;l.push({key:h,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>Et.mergeObjectSync(s,l)):Et.mergeObjectSync(s,c)}get shape(){return this._def.shape()}strict(e){return J.errToObj,new Fe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,s)=>{var r,i,o,a;const c=(o=(i=(r=this._def).errorMap)===null||i===void 0?void 0:i.call(r,n,s).message)!==null&&o!==void 0?o:s.defaultError;return n.code==="unrecognized_keys"?{message:(a=J.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Fe({...this._def,unknownKeys:"strip"})}passthrough(){return new Fe({...this._def,unknownKeys:"passthrough"})}extend(e){return new Fe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Fe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ne.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Fe({...this._def,catchall:e})}pick(e){const n={};return Te.objectKeys(e).forEach(s=>{e[s]&&this.shape[s]&&(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}omit(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{e[s]||(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}deepPartial(){return Dr(this)}partial(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{const r=this.shape[s];e&&!e[s]?n[s]=r:n[s]=r.optional()}),new Fe({...this._def,shape:()=>n})}required(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{if(e&&!e[s])n[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof Hn;)i=i._def.innerType;n[s]=i}}),new Fe({...this._def,shape:()=>n})}keyof(){return ME(Te.objectKeys(this.shape))}}Fe.create=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strip",catchall:Xn.create(),typeName:ne.ZodObject,...ue(e)});Fe.strictCreate=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strict",catchall:Xn.create(),typeName:ne.ZodObject,...ue(e)});Fe.lazycreate=(t,e)=>new Fe({shape:t,unknownKeys:"strip",catchall:Xn.create(),typeName:ne.ZodObject,...ue(e)});class Ao extends fe{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.options;function r(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new an(a.ctx.common.issues));return q(n,{code:x.invalid_union,unionErrors:o}),ce}if(n.common.async)return Promise.all(s.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const c of s){const l={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new an(c));return q(n,{code:x.invalid_union,unionErrors:a}),ce}}get options(){return this._def.options}}Ao.create=(t,e)=>new Ao({options:t,typeName:ne.ZodUnion,...ue(e)});const za=t=>t instanceof No?za(t.schema):t instanceof pn?za(t.innerType()):t instanceof xo?[t.value]:t instanceof xs?t.options:t instanceof Oo?Object.keys(t.enum):t instanceof Do?za(t._def.innerType):t instanceof Co?[void 0]:t instanceof So?[null]:null;class Kl extends fe{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==V.object)return q(n,{code:x.invalid_type,expected:V.object,received:n.parsedType}),ce;const s=this.discriminator,r=n.data[s],i=this.optionsMap.get(r);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(q(n,{code:x.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),ce)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,s){const r=new Map;for(const i of n){const o=za(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,i)}}return new Kl({typeName:ne.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:r,...ue(s)})}}function Hh(t,e){const n=ps(t),s=ps(e);if(t===e)return{valid:!0,data:t};if(n===V.object&&s===V.object){const r=Te.objectKeys(e),i=Te.objectKeys(t).filter(a=>r.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=Hh(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===V.array&&s===V.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=Hh(o,a);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return n===V.date&&s===V.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class ko extends fe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=(i,o)=>{if(jh(i)||jh(o))return ce;const a=Hh(i.value,o.value);return a.valid?((qh(i)||qh(o))&&n.dirty(),{status:n.value,value:a.data}):(q(s,{code:x.invalid_intersection_types}),ce)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}ko.create=(t,e,n)=>new ko({left:t,right:e,typeName:ne.ZodIntersection,...ue(n)});class On extends fe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==V.array)return q(s,{code:x.invalid_type,expected:V.array,received:s.parsedType}),ce;if(s.data.length<this._def.items.length)return q(s,{code:x.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ce;!this._def.rest&&s.data.length>this._def.items.length&&(q(s,{code:x.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...s.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new xn(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>Et.mergeArray(n,o)):Et.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new On({...this._def,rest:e})}}On.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new On({items:t,typeName:ne.ZodTuple,rest:null,...ue(e)})};class Ro extends fe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==V.object)return q(s,{code:x.invalid_type,expected:V.object,received:s.parsedType}),ce;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in s.data)r.push({key:i._parse(new xn(s,a,s.path,a)),value:o._parse(new xn(s,s.data[a],s.path,a))});return s.common.async?Et.mergeObjectAsync(n,r):Et.mergeObjectSync(n,r)}get element(){return this._def.valueType}static create(e,n,s){return n instanceof fe?new Ro({keyType:e,valueType:n,typeName:ne.ZodRecord,...ue(s)}):new Ro({keyType:nn.create(),valueType:e,typeName:ne.ZodRecord,...ue(n)})}}class Mc extends fe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==V.map)return q(s,{code:x.invalid_type,expected:V.map,received:s.parsedType}),ce;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,c],l)=>({key:r._parse(new xn(s,a,s.path,[l,"key"])),value:i._parse(new xn(s,c,s.path,[l,"value"]))}));if(s.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return ce;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return ce;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}}}}Mc.create=(t,e,n)=>new Mc({valueType:e,keyType:t,typeName:ne.ZodMap,...ue(n)});class yr extends fe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==V.set)return q(s,{code:x.invalid_type,expected:V.set,received:s.parsedType}),ce;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(q(s,{code:x.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),n.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(q(s,{code:x.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const l=new Set;for(const u of c){if(u.status==="aborted")return ce;u.status==="dirty"&&n.dirty(),l.add(u.value)}return{status:n.value,value:l}}const a=[...s.data.values()].map((c,l)=>i._parse(new xn(s,c,s.path,l)));return s.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new yr({...this._def,minSize:{value:e,message:J.toString(n)}})}max(e,n){return new yr({...this._def,maxSize:{value:e,message:J.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}yr.create=(t,e)=>new yr({valueType:t,minSize:null,maxSize:null,typeName:ne.ZodSet,...ue(e)});class zr extends fe{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==V.function)return q(n,{code:x.invalid_type,expected:V.function,received:n.parsedType}),ce;function s(a,c){return xc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Nc(),To].filter(l=>!!l),issueData:{code:x.invalid_arguments,argumentsError:c}})}function r(a,c){return xc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Nc(),To].filter(l=>!!l),issueData:{code:x.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof ci){const a=this;return St(async function(...c){const l=new an([]),u=await a._def.args.parseAsync(c,i).catch(f=>{throw l.addIssue(s(c,f)),l}),h=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(h,i).catch(f=>{throw l.addIssue(r(h,f)),l})})}else{const a=this;return St(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new an([s(c,l.error)]);const u=Reflect.apply(o,this,l.data),h=a._def.returns.safeParse(u,i);if(!h.success)throw new an([r(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new zr({...this._def,args:On.create(e).rest(or.create())})}returns(e){return new zr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,s){return new zr({args:e||On.create([]).rest(or.create()),returns:n||or.create(),typeName:ne.ZodFunction,...ue(s)})}}class No extends fe{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}No.create=(t,e)=>new No({getter:t,typeName:ne.ZodLazy,...ue(e)});class xo extends fe{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return q(n,{received:n.data,code:x.invalid_literal,expected:this._def.value}),ce}return{status:"valid",value:e.data}}get value(){return this._def.value}}xo.create=(t,e)=>new xo({value:t,typeName:ne.ZodLiteral,...ue(e)});function ME(t,e){return new xs({values:t,typeName:ne.ZodEnum,...ue(e)})}class xs extends fe{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),s=this._def.values;return q(n,{expected:Te.joinValues(s),received:n.parsedType,code:x.invalid_type}),ce}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),s=this._def.values;return q(n,{received:n.data,code:x.invalid_enum_value,options:s}),ce}return St(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return xs.create(e)}exclude(e){return xs.create(this.options.filter(n=>!e.includes(n)))}}xs.create=ME;class Oo extends fe{_parse(e){const n=Te.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==V.string&&s.parsedType!==V.number){const r=Te.objectValues(n);return q(s,{expected:Te.joinValues(r),received:s.parsedType,code:x.invalid_type}),ce}if(n.indexOf(e.data)===-1){const r=Te.objectValues(n);return q(s,{received:s.data,code:x.invalid_enum_value,options:r}),ce}return St(e.data)}get enum(){return this._def.values}}Oo.create=(t,e)=>new Oo({values:t,typeName:ne.ZodNativeEnum,...ue(e)});class ci extends fe{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==V.promise&&n.common.async===!1)return q(n,{code:x.invalid_type,expected:V.promise,received:n.parsedType}),ce;const s=n.parsedType===V.promise?n.data:Promise.resolve(n.data);return St(s.then(r=>this._def.type.parseAsync(r,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ci.create=(t,e)=>new ci({type:t,typeName:ne.ZodPromise,...ue(e)});class pn extends fe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ne.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:o=>{q(s,o),o.fatal?n.abort():n.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const o=r.transform(s.data,i);return s.common.issues.length?{status:"dirty",value:s.data}:s.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:s.path,parent:s})):this._def.schema._parseSync({data:o,path:s.path,parent:s})}if(r.type==="refinement"){const o=a=>{const c=r.refinement(a,i);if(s.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?ce:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?ce:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!Io(o))return o;const a=r.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>Io(o)?Promise.resolve(r.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);Te.assertNever(r)}}pn.create=(t,e,n)=>new pn({schema:t,typeName:ne.ZodEffects,effect:e,...ue(n)});pn.createWithPreprocess=(t,e,n)=>new pn({schema:e,effect:{type:"preprocess",transform:t},typeName:ne.ZodEffects,...ue(n)});class Hn extends fe{_parse(e){return this._getType(e)===V.undefined?St(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Hn.create=(t,e)=>new Hn({innerType:t,typeName:ne.ZodOptional,...ue(e)});class vr extends fe{_parse(e){return this._getType(e)===V.null?St(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}vr.create=(t,e)=>new vr({innerType:t,typeName:ne.ZodNullable,...ue(e)});class Do extends fe{_parse(e){const{ctx:n}=this._processInputParams(e);let s=n.data;return n.parsedType===V.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Do.create=(t,e)=>new Do({innerType:t,typeName:ne.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ue(e)});class Lc extends fe{_parse(e){const{ctx:n}=this._processInputParams(e),s={...n,common:{...n.common,issues:[]}},r=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return Oc(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new an(s.common.issues)},input:s.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new an(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}Lc.create=(t,e)=>new Lc({innerType:t,typeName:ne.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ue(e)});class Uc extends fe{_parse(e){if(this._getType(e)!==V.nan){const s=this._getOrReturnCtx(e);return q(s,{code:x.invalid_type,expected:V.nan,received:s.parsedType}),ce}return{status:"valid",value:e.data}}}Uc.create=t=>new Uc({typeName:ne.ZodNaN,...ue(t)});const iL=Symbol("zod_brand");class LE extends fe{_parse(e){const{ctx:n}=this._processInputParams(e),s=n.data;return this._def.type._parse({data:s,path:n.path,parent:n})}unwrap(){return this._def.type}}class la extends fe{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?ce:i.status==="dirty"?(n.dirty(),PE(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?ce:r.status==="dirty"?(n.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,n){return new la({in:e,out:n,typeName:ne.ZodPipeline})}}class Fc extends fe{_parse(e){const n=this._def.innerType._parse(e);return Io(n)&&(n.value=Object.freeze(n.value)),n}}Fc.create=(t,e)=>new Fc({innerType:t,typeName:ne.ZodReadonly,...ue(e)});const UE=(t,e={},n)=>t?ai.create().superRefine((s,r)=>{var i,o;if(!t(s)){const a=typeof e=="function"?e(s):typeof e=="string"?{message:e}:e,c=(o=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,l=typeof a=="string"?{message:a}:a;r.addIssue({code:"custom",...l,fatal:c})}}):ai.create(),oL={object:Fe.lazycreate};var ne;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(ne||(ne={}));const aL=(t,e={message:`Input not instance of ${t.name}`})=>UE(n=>n instanceof t,e),FE=nn.create,$E=Rs.create,cL=Uc.create,lL=Ns.create,BE=bo.create,uL=gr.create,hL=Dc.create,dL=Co.create,fL=So.create,pL=ai.create,mL=or.create,gL=Xn.create,yL=Pc.create,vL=cn.create,_L=Fe.create,wL=Fe.strictCreate,EL=Ao.create,TL=Kl.create,IL=ko.create,bL=On.create,CL=Ro.create,SL=Mc.create,AL=yr.create,kL=zr.create,RL=No.create,NL=xo.create,xL=xs.create,OL=Oo.create,DL=ci.create,Hg=pn.create,PL=Hn.create,ML=vr.create,LL=pn.createWithPreprocess,UL=la.create,FL=()=>FE().optional(),$L=()=>$E().optional(),BL=()=>BE().optional(),VL={string:t=>nn.create({...t,coerce:!0}),number:t=>Rs.create({...t,coerce:!0}),boolean:t=>bo.create({...t,coerce:!0}),bigint:t=>Ns.create({...t,coerce:!0}),date:t=>gr.create({...t,coerce:!0})},jL=ce;var Ye=Object.freeze({__proto__:null,defaultErrorMap:To,setErrorMap:KM,getErrorMap:Nc,makeIssue:xc,EMPTY_PATH:WM,addIssueToContext:q,ParseStatus:Et,INVALID:ce,DIRTY:PE,OK:St,isAborted:jh,isDirty:qh,isValid:Io,isAsync:Oc,get util(){return Te},get objectUtil(){return Vh},ZodParsedType:V,getParsedType:ps,ZodType:fe,ZodString:nn,ZodNumber:Rs,ZodBigInt:Ns,ZodBoolean:bo,ZodDate:gr,ZodSymbol:Dc,ZodUndefined:Co,ZodNull:So,ZodAny:ai,ZodUnknown:or,ZodNever:Xn,ZodVoid:Pc,ZodArray:cn,ZodObject:Fe,ZodUnion:Ao,ZodDiscriminatedUnion:Kl,ZodIntersection:ko,ZodTuple:On,ZodRecord:Ro,ZodMap:Mc,ZodSet:yr,ZodFunction:zr,ZodLazy:No,ZodLiteral:xo,ZodEnum:xs,ZodNativeEnum:Oo,ZodPromise:ci,ZodEffects:pn,ZodTransformer:pn,ZodOptional:Hn,ZodNullable:vr,ZodDefault:Do,ZodCatch:Lc,ZodNaN:Uc,BRAND:iL,ZodBranded:LE,ZodPipeline:la,ZodReadonly:Fc,custom:UE,Schema:fe,ZodSchema:fe,late:oL,get ZodFirstPartyTypeKind(){return ne},coerce:VL,any:pL,array:vL,bigint:lL,boolean:BE,date:uL,discriminatedUnion:TL,effect:Hg,enum:xL,function:kL,instanceof:aL,intersection:IL,lazy:RL,literal:NL,map:SL,nan:cL,nativeEnum:OL,never:gL,null:fL,nullable:ML,number:$E,object:_L,oboolean:BL,onumber:$L,optional:PL,ostring:FL,pipeline:UL,preprocess:LL,promise:DL,record:CL,set:AL,strictObject:wL,string:FE,symbol:hL,transformer:Hg,tuple:bL,undefined:dL,union:EL,unknown:mL,void:yL,NEVER:jL,ZodIssueCode:x,quotelessJson:zM,ZodError:an});const qL=Ye.enum(["Unknown","Facebook","Instagram","YouTube","Spotify","Twitter","LinkedIn","GitHub","TikTok"]),HL=Ye.object({link:Ye.string()}),zg=Ye.object({userUid:Ye.string(),userUri:Ye.string().optional(),displayName:Ye.string(),photoURL:Ye.string(),coverImg:Ye.string(),shortBio:Ye.string(),bgColor:Ye.string(),fontColor:Ye.string().optional(),fontFamily:Ye.string().optional(),longBio:Ye.string(),socialLinks:Ye.record(qL,HL)});var zL=Object.defineProperty,Kg=Object.getOwnPropertySymbols,KL=Object.prototype.hasOwnProperty,WL=Object.prototype.propertyIsEnumerable,Wg=(t,e,n)=>e in t?zL(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,VE=(t,e)=>{for(var n in e||(e={}))KL.call(e,n)&&Wg(t,n,e[n]);if(Kg)for(var n of Kg(e))WL.call(e,n)&&Wg(t,n,e[n]);return t},Wl=t=>typeof t=="function",Gl=t=>typeof t=="string",jE=t=>Gl(t)&&t.trim().length>0,GL=t=>typeof t=="number",Xs=t=>typeof t>"u",Po=t=>typeof t=="object"&&t!==null,ZL=t=>An(t,"tag")&&jE(t.tag),qE=t=>window.TouchEvent&&t instanceof TouchEvent,HE=t=>An(t,"component")&&zE(t.component),QL=t=>Wl(t)||Po(t),zE=t=>!Xs(t)&&(Gl(t)||QL(t)||HE(t)),Gg=t=>Po(t)&&["height","width","right","left","top","bottom"].every(e=>GL(t[e])),An=(t,e)=>(Po(t)||Wl(t))&&e in t,YL=(t=>()=>t++)(0);function Pu(t){return qE(t)?t.targetTouches[0].clientX:t.clientX}function Zg(t){return qE(t)?t.targetTouches[0].clientY:t.clientY}var XL=t=>{Xs(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},ua=t=>HE(t)?ua(t.component):ZL(t)?Dn({render(){return t}}):typeof t=="string"?t:ve(vs(t)),JL=t=>{if(typeof t=="string")return t;const e=An(t,"props")&&Po(t.props)?t.props:{},n=An(t,"listeners")&&Po(t.listeners)?t.listeners:{};return{component:ua(t),props:e,listeners:n}},e2=()=>typeof window<"u",Wf=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},t2=t=>["on","off","emit"].every(e=>An(t,e)&&Wl(t[e])),Lt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Lt||(Lt={}));var $c;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})($c||($c={}));var Ut;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Ut||(Ut={}));var sn="Vue-Toastification",en={type:{type:String,default:Lt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},KE={type:en.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Ka={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:en.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},zh={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},WE={transition:{type:[Object,String],default:`${sn}__bounce`}},n2={position:{type:String,default:$c.TOP_RIGHT},draggable:en.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:en.trueBoolean,pauseOnHover:en.trueBoolean,closeOnClick:en.trueBoolean,timeout:zh.timeout,hideProgressBar:zh.hideProgressBar,toastClassName:en.classNames,bodyClassName:en.classNames,icon:KE.customIcon,closeButton:Ka.component,closeButtonClassName:Ka.classNames,showCloseButtonOnHover:Ka.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new Wf}},s2={id:{type:[String,Number],required:!0,default:0},type:en.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},r2={container:{type:[Object,Function],default:()=>document.body},newestOnTop:en.trueBoolean,maxToasts:{type:Number,default:20},transition:WE.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:en.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},zn={CORE_TOAST:n2,TOAST:s2,CONTAINER:r2,PROGRESS_BAR:zh,ICON:KE,TRANSITION:WE,CLOSE_BUTTON:Ka},GE=Dn({name:"VtProgressBar",props:zn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${sn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function i2(t,e){return $e(),Kt("div",{style:Lo(t.style),class:bs(t.cpClass)},null,6)}GE.render=i2;var o2=GE,ZE=Dn({name:"VtCloseButton",props:zn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?ua(this.component):"button"},classes(){const t=[`${sn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),a2=Jc(" × ");function c2(t,e){return $e(),En(hd(t.buttonComponent),el({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Fo(()=>[a2]),_:1},16,["aria-label","class"])}ZE.render=c2;var l2=ZE,QE={},u2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h2=Os("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),d2=[h2];function f2(t,e){return $e(),Kt("svg",u2,d2)}QE.render=f2;var p2=QE,YE={},m2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},g2=Os("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),y2=[g2];function v2(t,e){return $e(),Kt("svg",m2,y2)}YE.render=v2;var Qg=YE,XE={},_2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},w2=Os("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),E2=[w2];function T2(t,e){return $e(),Kt("svg",_2,E2)}XE.render=T2;var I2=XE,JE={},b2={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},C2=Os("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),S2=[C2];function A2(t,e){return $e(),Kt("svg",b2,S2)}JE.render=A2;var k2=JE,eT=Dn({name:"VtIcon",props:zn.ICON,computed:{customIconChildren(){return An(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Gl(this.customIcon)?this.trimValue(this.customIcon):An(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return An(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:zE(this.customIcon)?ua(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Lt.DEFAULT]:Qg,[Lt.INFO]:Qg,[Lt.SUCCESS]:p2,[Lt.ERROR]:k2,[Lt.WARNING]:I2}[this.type]},iconClasses(){const t=[`${sn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return jE(t)?t.trim():e}}});function R2(t,e){return $e(),En(hd(t.component),{class:bs(t.iconClasses)},{default:Fo(()=>[Jc(ry(t.customIconChildren),1)]),_:1},8,["class"])}eT.render=R2;var N2=eT,tT=Dn({name:"VtToast",components:{ProgressBar:o2,CloseButton:l2,Icon:N2},inheritAttrs:!1,props:Object.assign({},zn.CORE_TOAST,zn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${sn}__toast`,`${sn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${sn}__toast--rtl`),t},bodyClasses(){return[`${sn}__toast-${Gl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Gg(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:An,getVueComponentFromObj:ua,closeToast(){this.eventBus.emit(Ut.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:Pu(t),y:Zg(t)},this.dragStart=Pu(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Pu(t),y:Zg(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Gg(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),x2=["role"];function O2(t,e){const n=Mi("Icon"),s=Mi("CloseButton"),r=Mi("ProgressBar");return $e(),Kt("div",{class:bs(t.classes),style:Lo(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?($e(),En(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Xl("v-if",!0),Os("div",{role:t.accessibility.toastRole||"alert",class:bs(t.bodyClasses)},[typeof t.content=="string"?($e(),Kt(at,{key:0},[Jc(ry(t.content),1)],2112)):($e(),En(hd(t.getVueComponentFromObj(t.content)),el({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},UI(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,x2),t.closeButton?($e(),En(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:Wb(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Xl("v-if",!0),t.timeout?($e(),En(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Xl("v-if",!0)],38)}tT.render=O2;var D2=tT,nT=Dn({name:"VtTransition",props:zn.TRANSITION,emits:["leave"],methods:{hasProp:An,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function P2(t,e){return $e(),En($b,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Fo(()=>[LI(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}nT.render=P2;var M2=nT,sT=Dn({name:"VueToastification",devtools:{hide:!0},components:{Toast:D2,VtTransition:M2},props:Object.assign({},zn.CORE_TOAST,zn.CONTAINER,zn.TRANSITION),data(){return{count:0,positions:Object.values($c),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Ut.ADD,this.addToast),t.on(Ut.CLEAR,this.clearToasts),t.on(Ut.DISMISS,this.dismissToast),t.on(Ut.UPDATE,this.updateToast),t.on(Ut.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){Wl(t)&&(t=await t()),XL(this.$el),t.appendChild(this.$el)},setToast(t){Xs(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=JL(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Xs(e)&&!Xs(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Xs(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${sn}__container`,t].concat(this.defaults.containerClassName)}}});function L2(t,e){const n=Mi("Toast"),s=Mi("VtTransition");return $e(),Kt("div",null,[($e(!0),Kt(at,null,up(t.positions,r=>($e(),Kt("div",{key:r},[st(s,{transition:t.defaults.transition,class:bs(t.getClasses(r))},{default:Fo(()=>[($e(!0),Kt(at,null,up(t.getPositionToasts(r),i=>($e(),En(n,el({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}sT.render=L2;var U2=sT,Yg=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new Wf;e&&Wc(()=>{const i=lv(U2,VE({},t)),o=i.mount(document.createElement("div")),a=t.onMounted;if(Xs(a)||a(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${sn}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const a=Object.assign({},{id:YL(),type:Lt.DEFAULT},o,{content:i});return n.emit(Ut.ADD,a),a.id};s.clear=()=>n.emit(Ut.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Ut.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Ut.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(Ut.UPDATE,{id:i,options:l,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Lt.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Lt.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Lt.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Lt.WARNING})),s},F2=()=>{const t=()=>console.warn(`[${sn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function Kh(t){return e2()?t2(t)?Yg({eventBus:t},!1):Yg(t,!0):F2()}var rT=Symbol("VueToastification"),iT=new Wf,$2=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=Kh(VE({eventBus:iT},e));t.provide(rT,n)},B2=t=>{if(t)return Kh(t);const e=Jy()?on(rT,void 0):void 0;return e||Kh(iT)},V2=$2;const Ci=B2(),Xg=rC("profile",{state:()=>({profile:null}),getters:{isOwnProfile({profile:t}){var e,n;return(e=Wt.currentUser)!=null&&e.uid?((n=Wt.currentUser)==null?void 0:n.uid)===(t==null?void 0:t.userUid):!1},invertedBgColor:({profile:t})=>t!=null&&t.bgColor?$M(t.bgColor):"black"},actions:{updateProfile(t){if(!this.profile||!this.isOwnProfile)throw new Error("Unathorized");const e=Object.keys(t).reduce((n,s)=>JSON.stringify(t[s])===JSON.stringify(this.profile?this.profile[s]:void 0)?n:{...n,[s]:t[s]},{});this.profile={...this.profile,...t},!(Object.keys(e).length<1)&&TP(Vg(),e).then(()=>Ci("Changes saved")).catch(()=>Ci("Error saving changes"))},async loadProfile(t){try{const e=kc(Eo,zl,t),n=await Mg(e);if(!n.exists()){this.profile=null;return}this.profile=zg.parse(n.data())}catch{Ci("Error loading profile"),this.profile=null}},async loadPNS(t){const e=kc(Eo,"ib_dns",t),n=await Mg(e);if(!n.exists()){this.profile=null;return}const{uid:s}=n.data();if(!s){this.profile=null;return}return this.loadProfile(s)},async createOwnProfile(){var t;try{if(!((t=Wt.currentUser)!=null&&t.uid))return;const e=zg.parse(HM(Wt.currentUser));await EP(Vg(),e),this.profile=e,Ci("Profile created");return}catch{Ci("Error creating profile")}}}}),Js=iS({history:TC("/"),routes:[{path:"/",name:"Login",component:()=>_a(()=>import("./Login-da6334fa.js"),["assets/Login-da6334fa.js","assets/Login-5c2fbf21.css"]),beforeEnter:async(t,e,n)=>{var s;(s=Wt.currentUser)!=null&&s.uid&&(await Js.replace(`/u/${Wt.currentUser.uid}`),window.location.reload()),n()}},{path:"/u/:profileUid",name:"Profile",props:!1,component:()=>_a(()=>import("./Profile-1970b351.js"),["assets/Profile-1970b351.js","assets/Profile-ad2b6c3f.css"]),beforeEnter:async(t,e,n)=>{var i,o,a;const s=Xg(),r=t.params.profileUid;await s.loadProfile(r),s.profile||(r===((i=Wt.currentUser)==null?void 0:i.uid)?await s.createOwnProfile():await Js.replace("/404")),(o=s.profile)!=null&&o.userUri&&await Js.replace(`/profile/${(a=s.profile)==null?void 0:a.userUri}`),n()}},{path:"/profile/:profileURI",name:"PNS Profile",props:!1,component:()=>_a(()=>import("./Profile-1970b351.js"),["assets/Profile-1970b351.js","assets/Profile-ad2b6c3f.css"]),beforeEnter:async(t,e,n)=>{var i;const s=Xg(),r=t.params.profileURI;r!==((i=s.profile)==null?void 0:i.userUri)&&await s.loadPNS(r),s.profile||await Js.replace("/404"),n()}},{path:"/:pathMatch(.*)",name:"Error404",component:()=>_a(()=>import("./Error404-02f9f0c0.js"),["assets/Error404-02f9f0c0.js","assets/Error404-4d995ba2.css"])}]});const j2=Ye.object({uid:Ye.string(),displayName:Ye.string().nullable(),photoURL:Ye.string().nullable()}).nullable(),q2=Xb(),H2={timeout:2e3,maxToasts:2};let Mu;Dk(Wt,t=>{const e=j2.parse(t);Mu?e!=null&&e.uid?Js.replace(`/u/${e.uid}`):Js.replace("/"):(Mu=lv(hS),Mu.use(Js).use(q2).use(V2,H2).mount("#app"))});export{Y2 as $,cy as A,ET as B,En as C,Fo as D,st as E,ls as F,us as G,up as H,tU as I,lU as J,Xg as K,Lo as L,Xl as M,G2 as N,X2 as O,Js as P,el as Q,LI as R,cU as S,ds as T,iU as U,oU as V,bs as W,Mi as X,W2 as Y,Z2 as Z,uS as _,$e as a,Ye as a0,qL as a1,B2 as a2,UM as a3,nU as a4,pP as a5,mP as a6,Lt as a7,rU as a8,aU as a9,sU as aa,z2 as ab,Q2 as ac,Os as b,Kt as c,Dn as d,Jc as e,Wt as f,Bh as g,uI as h,nv as i,ar as j,at as k,on as l,Ma as m,Mt as n,My as o,lI as p,BM as q,rd as r,J2 as s,ry as t,vs as u,ve as v,K2 as w,Di as x,Fy as y,Wc as z};
