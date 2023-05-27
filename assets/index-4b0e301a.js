(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Md(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ve={},ii=[],Tn=()=>{},EI=()=>!1,II=/^on[^a-z]/,wl=t=>II.test(t),Ld=t=>t.startsWith("onUpdate:"),et=Object.assign,Ud=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bI=Object.prototype.hasOwnProperty,Re=(t,e)=>bI.call(t,e),oe=Array.isArray,oi=t=>oa(t)==="[object Map]",Tl=t=>oa(t)==="[object Set]",Zp=t=>oa(t)==="[object Date]",ge=t=>typeof t=="function",Ze=t=>typeof t=="string",Eo=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Xy=t=>$e(t)&&ge(t.then)&&ge(t.catch),Qy=Object.prototype.toString,oa=t=>Qy.call(t),CI=t=>oa(t).slice(8,-1),Jy=t=>oa(t)==="[object Object]",Fd=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dc=Md(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),El=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},SI=/-(\w)/g,Wn=El(t=>t.replace(SI,(e,n)=>n?n.toUpperCase():"")),AI=/\B([A-Z])/g,Di=El(t=>t.replace(AI,"-$1").toLowerCase()),Il=El(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=El(t=>t?`on${Il(t)}`:""),Io=(t,e)=>!Object.is(t,e),pc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ac=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},kc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ev=t=>{const e=Ze(t)?Number(t):NaN;return isNaN(e)?t:e};let Yp;const bh=()=>Yp||(Yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function aa(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ze(s)?OI(s):aa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ze(t))return t;if($e(t))return t}}const kI=/;(?![^(]*\))/g,RI=/:([^]+)/,NI=/\/\*[^]*?\*\//g;function OI(t){const e={};return t.replace(NI,"").split(kI).forEach(n=>{if(n){const s=n.split(RI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function zs(t){let e="";if(Ze(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const s=zs(t[n]);s&&(e+=s+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",DI=Md(xI);function tv(t){return!!t||t===""}function PI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bl(t[s],e[s]);return n}function bl(t,e){if(t===e)return!0;let n=Zp(t),s=Zp(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Eo(t),s=Eo(e),n||s)return t===e;if(n=oe(t),s=oe(e),n||s)return n&&s?PI(t,e):!1;if(n=$e(t),s=$e(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!bl(t[o],e[o]))return!1}}return String(t)===String(e)}function MI(t,e){return t.findIndex(n=>bl(n,e))}const nv=t=>Ze(t)?t:t==null?"":oe(t)||$e(t)&&(t.toString===Qy||!ge(t.toString))?JSON.stringify(t,sv,2):String(t),sv=(t,e)=>e&&e.__v_isRef?sv(t,e.value):oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Tl(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!oe(e)&&!Jy(e)?String(e):e;let zt;class rv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function iv(t){return new rv(t)}function LI(t,e=zt){e&&e.active&&e.effects.push(t)}function ov(){return zt}function UI(t){zt&&zt.cleanups.push(t)}const $d=t=>{const e=new Set(t);return e.w=0,e.n=0,e},av=t=>(t.w&Ws)>0,cv=t=>(t.n&Ws)>0,FI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ws},$I=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];av(r)&&!cv(r)?r.delete(t):e[n++]=r,r.w&=~Ws,r.n&=~Ws}e.length=n}},Rc=new WeakMap;let Qi=0,Ws=1;const Ch=30;let vn;const Ir=Symbol(""),Sh=Symbol("");class Bd{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,LI(this,s)}run(){if(!this.active)return this.fn();let e=vn,n=Us;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vn,vn=this,Us=!0,Ws=1<<++Qi,Qi<=Ch?FI(this):Xp(this),this.fn()}finally{Qi<=Ch&&$I(this),Ws=1<<--Qi,vn=this.parent,Us=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vn===this?this.deferStop=!0:this.active&&(Xp(this),this.onStop&&this.onStop(),this.active=!1)}}function Xp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Us=!0;const lv=[];function Pi(){lv.push(Us),Us=!1}function Mi(){const t=lv.pop();Us=t===void 0?!0:t}function Ht(t,e,n){if(Us&&vn){let s=Rc.get(t);s||Rc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=$d()),uv(r)}}function uv(t,e){let n=!1;Qi<=Ch?cv(t)||(t.n|=Ws,n=!av(t)):n=!t.has(vn),n&&(t.add(vn),vn.deps.push(t))}function ds(t,e,n,s,r,i){const o=Rc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?Fd(n)&&a.push(o.get("length")):(a.push(o.get(Ir)),oi(t)&&a.push(o.get(Sh)));break;case"delete":oe(t)||(a.push(o.get(Ir)),oi(t)&&a.push(o.get(Sh)));break;case"set":oi(t)&&a.push(o.get(Ir));break}if(a.length===1)a[0]&&Ah(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ah($d(c))}}function Ah(t,e){const n=oe(t)?t:[...t];for(const s of n)s.computed&&Qp(s);for(const s of n)s.computed||Qp(s)}function Qp(t,e){(t!==vn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function BI(t,e){var n;return(n=Rc.get(t))==null?void 0:n.get(e)}const VI=Md("__proto__,__v_isRef,__isVue"),hv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Eo)),jI=Vd(),qI=Vd(!1,!0),HI=Vd(!0),Jp=zI();function zI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Se(this);for(let i=0,o=this.length;i<o;i++)Ht(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Se)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pi();const s=Se(this)[e].apply(this,n);return Mi(),s}}),t}function WI(t){const e=Se(this);return Ht(e,"has",t),e.hasOwnProperty(t)}function Vd(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?cb:gv:e?mv:pv).get(s))return s;const o=oe(s);if(!t){if(o&&Re(Jp,r))return Reflect.get(Jp,r,i);if(r==="hasOwnProperty")return WI}const a=Reflect.get(s,r,i);return(Eo(r)?hv.has(r):VI(r))||(t||Ht(s,"get",r),e)?a:Je(a)?o&&Fd(r)?a:a.value:$e(a)?t?yv(a):Li(a):a}}const KI=dv(),GI=dv(!0);function dv(t=!1){return function(n,s,r,i){let o=n[s];if(gi(o)&&Je(o)&&!Je(r))return!1;if(!t&&(!Nc(r)&&!gi(r)&&(o=Se(o),r=Se(r)),!oe(n)&&Je(o)&&!Je(r)))return o.value=r,!0;const a=oe(n)&&Fd(s)?Number(s)<n.length:Re(n,s),c=Reflect.set(n,s,r,i);return n===Se(i)&&(a?Io(r,o)&&ds(n,"set",s,r):ds(n,"add",s,r)),c}}function ZI(t,e){const n=Re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ds(t,"delete",e,void 0),s}function YI(t,e){const n=Reflect.has(t,e);return(!Eo(e)||!hv.has(e))&&Ht(t,"has",e),n}function XI(t){return Ht(t,"iterate",oe(t)?"length":Ir),Reflect.ownKeys(t)}const fv={get:jI,set:KI,deleteProperty:ZI,has:YI,ownKeys:XI},QI={get:HI,set(t,e){return!0},deleteProperty(t,e){return!0}},JI=et({},fv,{get:qI,set:GI}),jd=t=>t,Cl=t=>Reflect.getPrototypeOf(t);function za(t,e,n=!1,s=!1){t=t.__v_raw;const r=Se(t),i=Se(e);n||(e!==i&&Ht(r,"get",e),Ht(r,"get",i));const{has:o}=Cl(r),a=s?jd:n?zd:bo;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Wa(t,e=!1){const n=this.__v_raw,s=Se(n),r=Se(t);return e||(t!==r&&Ht(s,"has",t),Ht(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ka(t,e=!1){return t=t.__v_raw,!e&&Ht(Se(t),"iterate",Ir),Reflect.get(t,"size",t)}function em(t){t=Se(t);const e=Se(this);return Cl(e).has.call(e,t)||(e.add(t),ds(e,"add",t,t)),this}function tm(t,e){e=Se(e);const n=Se(this),{has:s,get:r}=Cl(n);let i=s.call(n,t);i||(t=Se(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Io(e,o)&&ds(n,"set",t,e):ds(n,"add",t,e),this}function nm(t){const e=Se(this),{has:n,get:s}=Cl(e);let r=n.call(e,t);r||(t=Se(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ds(e,"delete",t,void 0),i}function sm(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&ds(t,"clear",void 0,void 0),n}function Ga(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Se(o),c=e?jd:t?zd:bo;return!t&&Ht(a,"iterate",Ir),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Za(t,e,n){return function(...s){const r=this.__v_raw,i=Se(r),o=oi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?jd:e?zd:bo;return!e&&Ht(i,"iterate",c?Sh:Ir),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Es(t){return function(...e){return t==="delete"?!1:this}}function eb(){const t={get(i){return za(this,i)},get size(){return Ka(this)},has:Wa,add:em,set:tm,delete:nm,clear:sm,forEach:Ga(!1,!1)},e={get(i){return za(this,i,!1,!0)},get size(){return Ka(this)},has:Wa,add:em,set:tm,delete:nm,clear:sm,forEach:Ga(!1,!0)},n={get(i){return za(this,i,!0)},get size(){return Ka(this,!0)},has(i){return Wa.call(this,i,!0)},add:Es("add"),set:Es("set"),delete:Es("delete"),clear:Es("clear"),forEach:Ga(!0,!1)},s={get(i){return za(this,i,!0,!0)},get size(){return Ka(this,!0)},has(i){return Wa.call(this,i,!0)},add:Es("add"),set:Es("set"),delete:Es("delete"),clear:Es("clear"),forEach:Ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Za(i,!1,!1),n[i]=Za(i,!0,!1),e[i]=Za(i,!1,!0),s[i]=Za(i,!0,!0)}),[t,n,e,s]}const[tb,nb,sb,rb]=eb();function qd(t,e){const n=e?t?rb:sb:t?nb:tb;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Re(n,r)&&r in s?n:s,r,i)}const ib={get:qd(!1,!1)},ob={get:qd(!1,!0)},ab={get:qd(!0,!1)},pv=new WeakMap,mv=new WeakMap,gv=new WeakMap,cb=new WeakMap;function lb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ub(t){return t.__v_skip||!Object.isExtensible(t)?0:lb(CI(t))}function Li(t){return gi(t)?t:Hd(t,!1,fv,ib,pv)}function hb(t){return Hd(t,!1,JI,ob,mv)}function yv(t){return Hd(t,!0,QI,ab,gv)}function Hd(t,e,n,s,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ub(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Fs(t){return gi(t)?Fs(t.__v_raw):!!(t&&t.__v_isReactive)}function gi(t){return!!(t&&t.__v_isReadonly)}function Nc(t){return!!(t&&t.__v_isShallow)}function vv(t){return Fs(t)||gi(t)}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Sl(t){return Ac(t,"__v_skip",!0),t}const bo=t=>$e(t)?Li(t):t,zd=t=>$e(t)?yv(t):t;function _v(t){Us&&vn&&(t=Se(t),uv(t.dep||(t.dep=$d())))}function wv(t,e){t=Se(t);const n=t.dep;n&&Ah(n)}function Je(t){return!!(t&&t.__v_isRef===!0)}function Wd(t){return Tv(t,!1)}function db(t){return Tv(t,!0)}function Tv(t,e){return Je(t)?t:new fb(t,e)}class fb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:bo(e)}get value(){return _v(this),this._value}set value(e){const n=this.__v_isShallow||Nc(e)||gi(e);e=n?e:Se(e),Io(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:bo(e),wv(this))}}function $s(t){return Je(t)?t.value:t}const pb={get:(t,e,n)=>$s(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Je(r)&&!Je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ev(t){return Fs(t)?t:new Proxy(t,pb)}function mb(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=yb(t,n);return e}class gb{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return BI(Se(this._object),this._key)}}function yb(t,e,n){const s=t[e];return Je(s)?s:new gb(t,e,n)}class vb{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Bd(e,()=>{this._dirty||(this._dirty=!0,wv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Se(this);return _v(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _b(t,e,n=!1){let s,r;const i=ge(t);return i?(s=t,r=Tn):(s=t.get,r=t.set),new vb(s,r,i||!r,n)}function Bs(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ca(i,e,n)}return r}function un(t,e,n,s){if(ge(t)){const i=Bs(t,e,n,s);return i&&Xy(i)&&i.catch(o=>{ca(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(un(t[i],e,n,s));return r}function ca(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Bs(c,null,10,[t,o,a]);return}}wb(t,n,r,s)}function wb(t,e,n,s=!0){console.error(t)}let Co=!1,kh=!1;const bt=[];let Un=0;const ai=[];let ss=null,dr=0;const Iv=Promise.resolve();let Kd=null;function Al(t){const e=Kd||Iv;return t?e.then(this?t.bind(this):t):e}function Tb(t){let e=Un+1,n=bt.length;for(;e<n;){const s=e+n>>>1;So(bt[s])<t?e=s+1:n=s}return e}function Gd(t){(!bt.length||!bt.includes(t,Co&&t.allowRecurse?Un+1:Un))&&(t.id==null?bt.push(t):bt.splice(Tb(t.id),0,t),bv())}function bv(){!Co&&!kh&&(kh=!0,Kd=Iv.then(Av))}function Eb(t){const e=bt.indexOf(t);e>Un&&bt.splice(e,1)}function Cv(t){oe(t)?ai.push(...t):(!ss||!ss.includes(t,t.allowRecurse?dr+1:dr))&&ai.push(t),bv()}function rm(t,e=Co?Un+1:0){for(;e<bt.length;e++){const n=bt[e];n&&n.pre&&(bt.splice(e,1),e--,n())}}function Sv(t){if(ai.length){const e=[...new Set(ai)];if(ai.length=0,ss){ss.push(...e);return}for(ss=e,ss.sort((n,s)=>So(n)-So(s)),dr=0;dr<ss.length;dr++)ss[dr]();ss=null,dr=0}}const So=t=>t.id==null?1/0:t.id,Ib=(t,e)=>{const n=So(t)-So(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Av(t){kh=!1,Co=!0,bt.sort(Ib);const e=Tn;try{for(Un=0;Un<bt.length;Un++){const n=bt[Un];n&&n.active!==!1&&Bs(n,null,14)}}finally{Un=0,bt.length=0,Sv(),Co=!1,Kd=null,(bt.length||ai.length)&&Av()}}function bb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ve;f&&(r=n.map(m=>Ze(m)?m.trim():m)),h&&(r=n.map(kc))}let a,c=s[a=fc(e)]||s[a=fc(Wn(e))];!c&&i&&(c=s[a=fc(Di(e))]),c&&un(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,un(l,t,6,r)}}function kv(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ge(t)){const c=l=>{const u=kv(l,e,!0);u&&(a=!0,et(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?($e(t)&&s.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):et(o,i),$e(t)&&s.set(t,o),o)}function kl(t,e){return!t||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Di(e))||Re(t,e))}let dt=null,Rl=null;function Oc(t){const e=dt;return dt=t,Rl=t&&t.type.__scopeId||null,e}function Cb(t){Rl=t}function Sb(){Rl=null}function la(t,e=dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vm(-1);const i=Oc(e);let o;try{o=t(...r)}finally{Oc(i),s._d&&vm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Fu(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:m,ctx:w,inheritAttrs:E}=t;let S,D;const R=Oc(t);try{if(n.shapeFlag&4){const I=r||s;S=gn(u.call(I,I,h,i,m,f,w)),D=c}else{const I=e;S=gn(I.length>1?I(i,{attrs:c,slots:a,emit:l}):I(i,null)),D=e.props?c:kb(c)}}catch(I){uo.length=0,ca(I,t,1),S=ft(Cn)}let j=S;if(D&&E!==!1){const I=Object.keys(D),{shapeFlag:$}=j;I.length&&$&7&&(o&&I.some(Ld)&&(D=Rb(D,o)),j=Nr(j,D))}return n.dirs&&(j=Nr(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),S=j,Oc(R),S}function Ab(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ro(s)){if(s.type!==Cn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const kb=t=>{let e;for(const n in t)(n==="class"||n==="style"||wl(n))&&((e||(e={}))[n]=t[n]);return e},Rb=(t,e)=>{const n={};for(const s in t)(!Ld(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Nb(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?im(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!kl(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?im(s,o,l):!0:!!o;return!1}function im(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!kl(n,i))return!0}return!1}function Zd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ob=t=>t.__isSuspense,xb={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?Db(e,n,s,r,i,o,a,c,l):Pb(t,e,n,s,r,o,a,c,l)},hydrate:Mb,create:Yd,normalize:Lb},fF=xb;function Ao(t,e){const n=t.props&&t.props[e];ge(n)&&n()}function Db(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=Yd(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(Ao(t,"onPending"),Ao(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),ci(f,t.ssFallback)):f.resolve(!1,!0)}function Pb(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,m=e.ssFallback,{activeBranch:w,pendingBranch:E,isInFallback:S,isHydrating:D}=h;if(E)h.pendingBranch=f,rs(f,E)?(c(E,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():S&&(c(w,m,n,s,r,null,i,o,a),ci(h,m))):(h.pendingId++,D?(h.isHydrating=!1,h.activeBranch=E):l(E,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),S?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(w,m,n,s,r,null,i,o,a),ci(h,m))):w&&rs(f,w)?(c(w,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(w&&rs(f,w))c(w,f,n,s,r,h,i,o,a),ci(h,f);else if(Ao(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:R,pendingId:j}=h;R>0?setTimeout(()=>{h.pendingId===j&&h.fallback(m)},R):R===0&&h.fallback(m)}}function Yd(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:m,n:w,o:{parentNode:E,remove:S}}=l;let D;const R=Fb(t);R&&e!=null&&e.pendingBranch&&(D=e.pendingId,e.deps++);const j=t.props?ev(t.props.timeout):void 0,I={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof j=="number"?j:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve($=!1,te=!1){const{vnode:se,activeBranch:P,pendingBranch:B,pendingId:ee,effects:le,parentComponent:z,container:_e}=I;if(I.isHydrating)I.isHydrating=!1;else if(!$){const we=P&&B.transition&&B.transition.mode==="out-in";we&&(P.transition.afterLeave=()=>{ee===I.pendingId&&f(B,_e,Ae,0)});let{anchor:Ae}=I;P&&(Ae=w(P),m(P,z,I,!0)),we||f(B,_e,Ae,0)}ci(I,B),I.pendingBranch=null,I.isInFallback=!1;let Fe=I.parent,tt=!1;for(;Fe;){if(Fe.pendingBranch){Fe.effects.push(...le),tt=!0;break}Fe=Fe.parent}tt||Cv(le),I.effects=[],R&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!te&&e.resolve()),Ao(se,"onResolve")},fallback($){if(!I.pendingBranch)return;const{vnode:te,activeBranch:se,parentComponent:P,container:B,isSVG:ee}=I;Ao(te,"onFallback");const le=w(se),z=()=>{I.isInFallback&&(h(null,$,B,le,P,null,ee,a,c),ci(I,$))},_e=$.transition&&$.transition.mode==="out-in";_e&&(se.transition.afterLeave=z),I.isInFallback=!0,m(se,P,null,!0),_e||z()},move($,te,se){I.activeBranch&&f(I.activeBranch,$,te,se),I.container=$},next(){return I.activeBranch&&w(I.activeBranch)},registerDep($,te){const se=!!I.pendingBranch;se&&I.deps++;const P=$.vnode.el;$.asyncDep.catch(B=>{ca(B,$,0)}).then(B=>{if($.isUnmounted||I.isUnmounted||I.pendingId!==$.suspenseId)return;$.asyncResolved=!0;const{vnode:ee}=$;Uh($,B,!1),P&&(ee.el=P);const le=!P&&$.subTree.el;te($,ee,E(P||$.subTree.el),P?null:w($.subTree),I,o,c),le&&S(le),Zd($,ee.el),se&&--I.deps===0&&I.resolve()})},unmount($,te){I.isUnmounted=!0,I.activeBranch&&m(I.activeBranch,n,$,te),I.pendingBranch&&m(I.pendingBranch,n,$,te)}};return I}function Mb(t,e,n,s,r,i,o,a,c){const l=e.suspense=Yd(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Lb(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=om(s?n.default:n),t.ssFallback=s?om(n.fallback):ft(Cn)}function om(t){let e;if(ge(t)){const n=yi&&t._c;n&&(t._d=!1,Ke()),t=t(),n&&(t._d=!0,e=an,Gv())}return oe(t)&&(t=Ab(t)),t=gn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Ub(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Cv(t)}function ci(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Zd(s,r))}function Fb(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function pF(t,e){return Xd(t,null,e)}const Ya={};function io(t,e,n){return Xd(t,e,n)}function Xd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ve){var a;const c=ov()===((a=at)==null?void 0:a.scope)?at:null;let l,u=!1,h=!1;if(Je(t)?(l=()=>t.value,u=Nc(t)):Fs(t)?(l=()=>t,s=!0):oe(t)?(h=!0,u=t.some(I=>Fs(I)||Nc(I)),l=()=>t.map(I=>{if(Je(I))return I.value;if(Fs(I))return mr(I);if(ge(I))return Bs(I,c,2)})):ge(t)?e?l=()=>Bs(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),un(t,c,3,[m])}:l=Tn,e&&s){const I=l;l=()=>mr(I())}let f,m=I=>{f=R.onStop=()=>{Bs(I,c,4)}},w;if(No)if(m=Tn,e?n&&un(e,c,3,[l(),h?[]:void 0,m]):l(),r==="sync"){const I=xC();w=I.__watcherHandles||(I.__watcherHandles=[])}else return Tn;let E=h?new Array(t.length).fill(Ya):Ya;const S=()=>{if(R.active)if(e){const I=R.run();(s||u||(h?I.some(($,te)=>Io($,E[te])):Io(I,E)))&&(f&&f(),un(e,c,3,[I,E===Ya?void 0:h&&E[0]===Ya?[]:E,m]),E=I)}else R.run()};S.allowRecurse=!!e;let D;r==="sync"?D=S:r==="post"?D=()=>Bt(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),D=()=>Gd(S));const R=new Bd(l,D);e?n?S():E=R.run():r==="post"?Bt(R.run.bind(R),c&&c.suspense):R.run();const j=()=>{R.stop(),c&&c.scope&&Ud(c.scope.effects,R)};return w&&w.push(j),j}function $b(t,e,n){const s=this.proxy,r=Ze(t)?t.includes(".")?Rv(s,t):()=>s[t]:t.bind(s,s);let i;ge(e)?i=e:(i=e.handler,n=e);const o=at;vi(this);const a=Xd(r,i.bind(s),n);return o?vi(o):br(),a}function Rv(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function mr(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))mr(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)mr(t[n],e);else if(Tl(t)||oi(t))t.forEach(n=>{mr(n,e)});else if(Jy(t))for(const n in t)mr(t[n],e);return t}function mF(t,e){const n=dt;if(n===null)return t;const s=Ml(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ve]=e[i];o&&(ge(o)&&(o={mounted:o,updated:o}),o.deep&&mr(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function cr(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Pi(),un(c,n,8,[t.el,a,t,e]),Mi())}}function Bb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dv(()=>{t.isMounted=!0}),Mv(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],Vb={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn};function jb(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rh(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:E,onAppear:S,onAfterAppear:D,onAppearCancelled:R}=e,j=String(t.key),I=jb(n,t),$=(P,B)=>{P&&un(P,s,9,B)},te=(P,B)=>{const ee=B[1];$(P,B),oe(P)?P.every(le=>le.length<=1)&&ee():P.length<=1&&ee()},se={mode:i,persisted:o,beforeEnter(P){let B=a;if(!n.isMounted)if(r)B=E||a;else return;P._leaveCb&&P._leaveCb(!0);const ee=I[j];ee&&rs(t,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),$(B,[P])},enter(P){let B=c,ee=l,le=u;if(!n.isMounted)if(r)B=S||c,ee=D||l,le=R||u;else return;let z=!1;const _e=P._enterCb=Fe=>{z||(z=!0,Fe?$(le,[P]):$(ee,[P]),se.delayedLeave&&se.delayedLeave(),P._enterCb=void 0)};B?te(B,[P,_e]):_e()},leave(P,B){const ee=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return B();$(h,[P]);let le=!1;const z=P._leaveCb=_e=>{le||(le=!0,B(),_e?$(w,[P]):$(m,[P]),P._leaveCb=void 0,I[ee]===t&&delete I[ee])};I[ee]=t,f?te(f,[P,z]):z()},clone(P){return Rh(P,e,n,s)}};return se}function Nh(t,e){t.shapeFlag&6&&t.component?Nh(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Nv(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&r++,s=s.concat(Nv(o.children,e,a))):(e||o.type!==Cn)&&s.push(a!=null?Nr(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Xn(t,e){return ge(t)?(()=>et({name:t.name},e,{setup:t}))():t}const oo=t=>!!t.type.__asyncLoader,Ov=t=>t.type.__isKeepAlive;function qb(t,e){xv(t,"a",e)}function Hb(t,e){xv(t,"da",e)}function xv(t,e,n=at){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Nl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ov(r.parent.vnode)&&zb(s,e,n,r),r=r.parent}}function zb(t,e,n,s){const r=Nl(e,t,s,!0);Lv(()=>{Ud(s[e],r)},n)}function Nl(t,e,n=at,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pi(),vi(n);const a=un(e,n,t,o);return br(),Mi(),a});return s?r.unshift(i):r.push(i),i}}const _s=t=>(e,n=at)=>(!No||t==="sp")&&Nl(t,(...s)=>e(...s),n),Wb=_s("bm"),Dv=_s("m"),Kb=_s("bu"),Pv=_s("u"),Mv=_s("bum"),Lv=_s("um"),Gb=_s("sp"),Zb=_s("rtg"),Yb=_s("rtc");function Xb(t,e=at){Nl("ec",t,e)}const Qd="components";function ao(t,e){return Fv(Qd,t,!0,e)||t}const Uv=Symbol.for("v-ndc");function Jd(t){return Ze(t)?Fv(Qd,t,!1)||t:t||Uv}function Fv(t,e,n=!0,s=!1){const r=dt||at;if(r){const i=r.type;if(t===Qd){const a=RC(i,!1);if(a&&(a===e||a===Wn(e)||a===Il(Wn(e))))return i}const o=am(r[t]||i[t],e)||am(r.appContext[t],e);return!o&&s?i:o}}function am(t,e){return t&&(t[e]||t[Wn(e)]||t[Il(Wn(e))])}function cm(t,e,n,s){let r;const i=n&&n[s];if(oe(t)||Ze(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Qb(t,e,n={},s,r){if(dt.isCE||dt.parent&&oo(dt.parent)&&dt.parent.isCE)return e!=="default"&&(n.name=e),ft("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Ke();const o=i&&$v(i(n)),a=$n(vt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function $v(t){return t.some(e=>Ro(e)?!(e.type===Cn||e.type===vt&&!$v(e.children)):!0)?t:null}function Jb(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:fc(s)]=t[s];return n}const Oh=t=>t?Qv(t)?Ml(t)||t.proxy:Oh(t.parent):null,co=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oh(t.parent),$root:t=>Oh(t.root),$emit:t=>t.emit,$options:t=>ef(t),$forceUpdate:t=>t.f||(t.f=()=>Gd(t.update)),$nextTick:t=>t.n||(t.n=Al.bind(t.proxy)),$watch:t=>$b.bind(t)}),$u=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Re(t,e),eC={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if($u(s,e))return o[e]=1,s[e];if(r!==Ve&&Re(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Re(l,e))return o[e]=3,i[e];if(n!==Ve&&Re(n,e))return o[e]=4,n[e];xh&&(o[e]=0)}}const u=co[e];let h,f;if(u)return e==="$attrs"&&Ht(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&Re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return $u(r,e)?(r[e]=n,!0):s!==Ve&&Re(s,e)?(s[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&Re(t,o)||$u(e,o)||(a=i[0])&&Re(a,o)||Re(s,o)||Re(co,o)||Re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lm(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xh=!0;function tC(t){const e=ef(t),n=t.proxy,s=t.ctx;xh=!1,e.beforeCreate&&um(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:w,activated:E,deactivated:S,beforeDestroy:D,beforeUnmount:R,destroyed:j,unmounted:I,render:$,renderTracked:te,renderTriggered:se,errorCaptured:P,serverPrefetch:B,expose:ee,inheritAttrs:le,components:z,directives:_e,filters:Fe}=e;if(l&&nC(l,s,null),o)for(const Ae in o){const Ne=o[Ae];ge(Ne)&&(s[Ae]=Ne.bind(n))}if(r){const Ae=r.call(n,n);$e(Ae)&&(t.data=Li(Ae))}if(xh=!0,i)for(const Ae in i){const Ne=i[Ae],en=ge(Ne)?Ne.bind(n,n):ge(Ne.get)?Ne.get.bind(n,n):Tn,xn=!ge(Ne)&&ge(Ne.set)?Ne.set.bind(n):Tn,tn=Wt({get:en,set:xn});Object.defineProperty(s,Ae,{enumerable:!0,configurable:!0,get:()=>tn.value,set:nt=>tn.value=nt})}if(a)for(const Ae in a)Bv(a[Ae],s,n,Ae);if(c){const Ae=ge(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ne=>{mc(Ne,Ae[Ne])})}u&&um(u,t,"c");function we(Ae,Ne){oe(Ne)?Ne.forEach(en=>Ae(en.bind(n))):Ne&&Ae(Ne.bind(n))}if(we(Wb,h),we(Dv,f),we(Kb,m),we(Pv,w),we(qb,E),we(Hb,S),we(Xb,P),we(Yb,te),we(Zb,se),we(Mv,R),we(Lv,I),we(Gb,B),oe(ee))if(ee.length){const Ae=t.exposed||(t.exposed={});ee.forEach(Ne=>{Object.defineProperty(Ae,Ne,{get:()=>n[Ne],set:en=>n[Ne]=en})})}else t.exposed||(t.exposed={});$&&t.render===Tn&&(t.render=$),le!=null&&(t.inheritAttrs=le),z&&(t.components=z),_e&&(t.directives=_e)}function nC(t,e,n=Tn){oe(t)&&(t=Dh(t));for(const s in t){const r=t[s];let i;$e(r)?"default"in r?i=En(r.from||s,r.default,!0):i=En(r.from||s):i=En(r),Je(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function um(t,e,n){un(oe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bv(t,e,n,s){const r=s.includes(".")?Rv(n,s):()=>n[s];if(Ze(t)){const i=e[t];ge(i)&&io(r,i)}else if(ge(t))io(r,t.bind(n));else if($e(t))if(oe(t))t.forEach(i=>Bv(i,e,n,s));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&io(r,i,t)}}function ef(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>xc(c,l,o,!0)),xc(c,e,o)),$e(e)&&i.set(e,c),c}function xc(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&xc(t,i,n,!0),r&&r.forEach(o=>xc(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=sC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sC={data:hm,props:dm,emits:dm,methods:Ji,computed:Ji,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ji,directives:Ji,watch:iC,provide:hm,inject:rC};function hm(t,e){return e?t?function(){return et(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function rC(t,e){return Ji(Dh(t),Dh(e))}function Dh(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ji(t,e){return t?et(Object.create(null),t,e):e}function dm(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:et(Object.create(null),lm(t),lm(e??{})):e}function iC(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const s in e)n[s]=Mt(t[s],e[s]);return n}function Vv(){return{app:null,config:{isNativeTag:EI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oC=0;function aC(t,e){return function(s,r=null){ge(s)||(s=et({},s)),r!=null&&!$e(r)&&(r=null);const i=Vv(),o=new Set;let a=!1;const c=i.app={_uid:oC++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:DC,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ge(l.install)?(o.add(l),l.install(c,...u)):ge(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ft(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ml(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ko=c;try{return l()}finally{ko=null}}};return c}}let ko=null;function mc(t,e){if(at){let n=at.provides;const s=at.parent&&at.parent.provides;s===n&&(n=at.provides=Object.create(s)),n[t]=e}}function En(t,e,n=!1){const s=at||dt;if(s||ko){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ko._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ge(e)?e.call(s&&s.proxy):e}}function cC(){return!!(at||dt||ko)}function lC(t,e,n,s=!1){const r={},i={};Ac(i,xl,1),t.propsDefaults=Object.create(null),jv(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:hb(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function uC(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Se(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(kl(t.emitsOptions,f))continue;const m=e[f];if(c)if(Re(i,f))m!==i[f]&&(i[f]=m,l=!0);else{const w=Wn(f);r[w]=Ph(c,a,w,m,t,!1)}else m!==i[f]&&(i[f]=m,l=!0)}}}else{jv(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!Re(e,h)&&((u=Di(h))===h||!Re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ph(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Re(e,h))&&(delete i[h],l=!0)}l&&ds(t,"set","$attrs")}function jv(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(dc(c))continue;const l=e[c];let u;r&&Re(r,u=Wn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:kl(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Se(n),l=a||Ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ph(r,c,h,l[h],t,!Re(l,h))}}return o}function Ph(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Re(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(vi(r),s=l[n]=c.call(null,e),br())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Di(n))&&(s=!0))}return s}function qv(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ge(t)){const u=h=>{c=!0;const[f,m]=qv(h,e,!0);et(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return $e(t)&&s.set(t,ii),ii;if(oe(i))for(let u=0;u<i.length;u++){const h=Wn(i[u]);fm(h)&&(o[h]=Ve)}else if(i)for(const u in i){const h=Wn(u);if(fm(h)){const f=i[u],m=o[h]=oe(f)||ge(f)?{type:f}:et({},f);if(m){const w=gm(Boolean,m.type),E=gm(String,m.type);m[0]=w>-1,m[1]=E<0||w<E,(w>-1||Re(m,"default"))&&a.push(h)}}}const l=[o,a];return $e(t)&&s.set(t,l),l}function fm(t){return t[0]!=="$"}function pm(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mm(t,e){return pm(t)===pm(e)}function gm(t,e){return oe(e)?e.findIndex(n=>mm(n,t)):ge(e)&&mm(e,t)?0:-1}const Hv=t=>t[0]==="_"||t==="$stable",tf=t=>oe(t)?t.map(gn):[gn(t)],hC=(t,e,n)=>{if(e._n)return e;const s=la((...r)=>tf(e(...r)),n);return s._c=!1,s},zv=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Hv(r))continue;const i=t[r];if(ge(i))e[r]=hC(r,i,s);else if(i!=null){const o=tf(i);e[r]=()=>o}}},Wv=(t,e)=>{const n=tf(e);t.slots.default=()=>n},dC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Se(e),Ac(e,"_",n)):zv(e,t.slots={})}else t.slots={},e&&Wv(t,e);Ac(t.slots,xl,1)},fC=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(et(r,e),!n&&a===1&&delete r._):(i=!e.$stable,zv(e,r)),o=e}else e&&(Wv(t,e),o={default:1});if(i)for(const a in r)!Hv(a)&&!(a in o)&&delete r[a]};function Mh(t,e,n,s,r=!1){if(oe(t)){t.forEach((f,m)=>Mh(f,e&&(oe(e)?e[m]:e),n,s,r));return}if(oo(s)&&!r)return;const i=s.shapeFlag&4?Ml(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ze(l)?(u[l]=null,Re(h,l)&&(h[l]=null)):Je(l)&&(l.value=null)),ge(c))Bs(c,a,12,[o,u]);else{const f=Ze(c),m=Je(c);if(f||m){const w=()=>{if(t.f){const E=f?Re(h,c)?h[c]:u[c]:c.value;r?oe(E)&&Ud(E,i):oe(E)?E.includes(i)||E.push(i):f?(u[c]=[i],Re(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,Re(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Bt(w,n)):w()}}}const Bt=Ub;function pC(t){return mC(t)}function mC(t,e){const n=bh();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Tn,insertStaticContent:w}=t,E=(g,v,_,C=null,k=null,O=null,W=!1,U=null,V=!!v.dynamicChildren)=>{if(g===v)return;g&&!rs(g,v)&&(C=b(g),nt(g,k,O,!0),g=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:N,ref:re,shapeFlag:Q}=v;switch(N){case Ol:S(g,v,_,C);break;case Cn:D(g,v,_,C);break;case Bu:g==null&&R(v,_,C,W);break;case vt:z(g,v,_,C,k,O,W,U,V);break;default:Q&1?$(g,v,_,C,k,O,W,U,V):Q&6?_e(g,v,_,C,k,O,W,U,V):(Q&64||Q&128)&&N.process(g,v,_,C,k,O,W,U,V,M)}re!=null&&k&&Mh(re,g&&g.ref,O,v||g,!v)},S=(g,v,_,C)=>{if(g==null)s(v.el=a(v.children),_,C);else{const k=v.el=g.el;v.children!==g.children&&l(k,v.children)}},D=(g,v,_,C)=>{g==null?s(v.el=c(v.children||""),_,C):v.el=g.el},R=(g,v,_,C)=>{[g.el,g.anchor]=w(g.children,v,_,C,g.el,g.anchor)},j=({el:g,anchor:v},_,C)=>{let k;for(;g&&g!==v;)k=f(g),s(g,_,C),g=k;s(v,_,C)},I=({el:g,anchor:v})=>{let _;for(;g&&g!==v;)_=f(g),r(g),g=_;r(v)},$=(g,v,_,C,k,O,W,U,V)=>{W=W||v.type==="svg",g==null?te(v,_,C,k,O,W,U,V):B(g,v,k,O,W,U,V)},te=(g,v,_,C,k,O,W,U)=>{let V,N;const{type:re,props:Q,shapeFlag:ie,transition:ue,dirs:Ee}=g;if(V=g.el=o(g.type,O,Q&&Q.is,Q),ie&8?u(V,g.children):ie&16&&P(g.children,V,null,C,k,O&&re!=="foreignObject",W,U),Ee&&cr(g,null,C,"created"),se(V,g,g.scopeId,W,C),Q){for(const De in Q)De!=="value"&&!dc(De)&&i(V,De,null,Q[De],O,g.children,C,k,lt);"value"in Q&&i(V,"value",null,Q.value),(N=Q.onVnodeBeforeMount)&&Ln(N,C,g)}Ee&&cr(g,null,C,"beforeMount");const Me=(!k||k&&!k.pendingBranch)&&ue&&!ue.persisted;Me&&ue.beforeEnter(V),s(V,v,_),((N=Q&&Q.onVnodeMounted)||Me||Ee)&&Bt(()=>{N&&Ln(N,C,g),Me&&ue.enter(V),Ee&&cr(g,null,C,"mounted")},k)},se=(g,v,_,C,k)=>{if(_&&m(g,_),C)for(let O=0;O<C.length;O++)m(g,C[O]);if(k){let O=k.subTree;if(v===O){const W=k.vnode;se(g,W,W.scopeId,W.slotScopeIds,k.parent)}}},P=(g,v,_,C,k,O,W,U,V=0)=>{for(let N=V;N<g.length;N++){const re=g[N]=U?ks(g[N]):gn(g[N]);E(null,re,v,_,C,k,O,W,U)}},B=(g,v,_,C,k,O,W)=>{const U=v.el=g.el;let{patchFlag:V,dynamicChildren:N,dirs:re}=v;V|=g.patchFlag&16;const Q=g.props||Ve,ie=v.props||Ve;let ue;_&&lr(_,!1),(ue=ie.onVnodeBeforeUpdate)&&Ln(ue,_,v,g),re&&cr(v,g,_,"beforeUpdate"),_&&lr(_,!0);const Ee=k&&v.type!=="foreignObject";if(N?ee(g.dynamicChildren,N,U,_,C,Ee,O):W||Ne(g,v,U,null,_,C,Ee,O,!1),V>0){if(V&16)le(U,v,Q,ie,_,C,k);else if(V&2&&Q.class!==ie.class&&i(U,"class",null,ie.class,k),V&4&&i(U,"style",Q.style,ie.style,k),V&8){const Me=v.dynamicProps;for(let De=0;De<Me.length;De++){const ze=Me[De],$t=Q[ze],pn=ie[ze];(pn!==$t||ze==="value")&&i(U,ze,$t,pn,k,g.children,_,C,lt)}}V&1&&g.children!==v.children&&u(U,v.children)}else!W&&N==null&&le(U,v,Q,ie,_,C,k);((ue=ie.onVnodeUpdated)||re)&&Bt(()=>{ue&&Ln(ue,_,v,g),re&&cr(v,g,_,"updated")},C)},ee=(g,v,_,C,k,O,W)=>{for(let U=0;U<v.length;U++){const V=g[U],N=v[U],re=V.el&&(V.type===vt||!rs(V,N)||V.shapeFlag&70)?h(V.el):_;E(V,N,re,null,C,k,O,W,!0)}},le=(g,v,_,C,k,O,W)=>{if(_!==C){if(_!==Ve)for(const U in _)!dc(U)&&!(U in C)&&i(g,U,_[U],null,W,v.children,k,O,lt);for(const U in C){if(dc(U))continue;const V=C[U],N=_[U];V!==N&&U!=="value"&&i(g,U,N,V,W,v.children,k,O,lt)}"value"in C&&i(g,"value",_.value,C.value)}},z=(g,v,_,C,k,O,W,U,V)=>{const N=v.el=g?g.el:a(""),re=v.anchor=g?g.anchor:a("");let{patchFlag:Q,dynamicChildren:ie,slotScopeIds:ue}=v;ue&&(U=U?U.concat(ue):ue),g==null?(s(N,_,C),s(re,_,C),P(v.children,_,re,k,O,W,U,V)):Q>0&&Q&64&&ie&&g.dynamicChildren?(ee(g.dynamicChildren,ie,_,k,O,W,U),(v.key!=null||k&&v===k.subTree)&&nf(g,v,!0)):Ne(g,v,_,re,k,O,W,U,V)},_e=(g,v,_,C,k,O,W,U,V)=>{v.slotScopeIds=U,g==null?v.shapeFlag&512?k.ctx.activate(v,_,C,W,V):Fe(v,_,C,k,O,W,V):tt(g,v,V)},Fe=(g,v,_,C,k,O,W)=>{const U=g.component=bC(g,C,k);if(Ov(g)&&(U.ctx.renderer=M),CC(U),U.asyncDep){if(k&&k.registerDep(U,we),!g.el){const V=U.subTree=ft(Cn);D(null,V,v,_)}return}we(U,g,v,_,k,O,W)},tt=(g,v,_)=>{const C=v.component=g.component;if(Nb(g,v,_))if(C.asyncDep&&!C.asyncResolved){Ae(C,v,_);return}else C.next=v,Eb(C.update),C.update();else v.el=g.el,C.vnode=v},we=(g,v,_,C,k,O,W)=>{const U=()=>{if(g.isMounted){let{next:re,bu:Q,u:ie,parent:ue,vnode:Ee}=g,Me=re,De;lr(g,!1),re?(re.el=Ee.el,Ae(g,re,W)):re=Ee,Q&&pc(Q),(De=re.props&&re.props.onVnodeBeforeUpdate)&&Ln(De,ue,re,Ee),lr(g,!0);const ze=Fu(g),$t=g.subTree;g.subTree=ze,E($t,ze,h($t.el),b($t),g,k,O),re.el=ze.el,Me===null&&Zd(g,ze.el),ie&&Bt(ie,k),(De=re.props&&re.props.onVnodeUpdated)&&Bt(()=>Ln(De,ue,re,Ee),k)}else{let re;const{el:Q,props:ie}=v,{bm:ue,m:Ee,parent:Me}=g,De=oo(v);if(lr(g,!1),ue&&pc(ue),!De&&(re=ie&&ie.onVnodeBeforeMount)&&Ln(re,Me,v),lr(g,!0),Q&&Ce){const ze=()=>{g.subTree=Fu(g),Ce(Q,g.subTree,g,k,null)};De?v.type.__asyncLoader().then(()=>!g.isUnmounted&&ze()):ze()}else{const ze=g.subTree=Fu(g);E(null,ze,_,C,g,k,O),v.el=ze.el}if(Ee&&Bt(Ee,k),!De&&(re=ie&&ie.onVnodeMounted)){const ze=v;Bt(()=>Ln(re,Me,ze),k)}(v.shapeFlag&256||Me&&oo(Me.vnode)&&Me.vnode.shapeFlag&256)&&g.a&&Bt(g.a,k),g.isMounted=!0,v=_=C=null}},V=g.effect=new Bd(U,()=>Gd(N),g.scope),N=g.update=()=>V.run();N.id=g.uid,lr(g,!0),N()},Ae=(g,v,_)=>{v.component=g;const C=g.vnode.props;g.vnode=v,g.next=null,uC(g,v.props,C,_),fC(g,v.children,_),Pi(),rm(),Mi()},Ne=(g,v,_,C,k,O,W,U,V=!1)=>{const N=g&&g.children,re=g?g.shapeFlag:0,Q=v.children,{patchFlag:ie,shapeFlag:ue}=v;if(ie>0){if(ie&128){xn(N,Q,_,C,k,O,W,U,V);return}else if(ie&256){en(N,Q,_,C,k,O,W,U,V);return}}ue&8?(re&16&&lt(N,k,O),Q!==N&&u(_,Q)):re&16?ue&16?xn(N,Q,_,C,k,O,W,U,V):lt(N,k,O,!0):(re&8&&u(_,""),ue&16&&P(Q,_,C,k,O,W,U,V))},en=(g,v,_,C,k,O,W,U,V)=>{g=g||ii,v=v||ii;const N=g.length,re=v.length,Q=Math.min(N,re);let ie;for(ie=0;ie<Q;ie++){const ue=v[ie]=V?ks(v[ie]):gn(v[ie]);E(g[ie],ue,_,null,k,O,W,U,V)}N>re?lt(g,k,O,!0,!1,Q):P(v,_,C,k,O,W,U,V,Q)},xn=(g,v,_,C,k,O,W,U,V)=>{let N=0;const re=v.length;let Q=g.length-1,ie=re-1;for(;N<=Q&&N<=ie;){const ue=g[N],Ee=v[N]=V?ks(v[N]):gn(v[N]);if(rs(ue,Ee))E(ue,Ee,_,null,k,O,W,U,V);else break;N++}for(;N<=Q&&N<=ie;){const ue=g[Q],Ee=v[ie]=V?ks(v[ie]):gn(v[ie]);if(rs(ue,Ee))E(ue,Ee,_,null,k,O,W,U,V);else break;Q--,ie--}if(N>Q){if(N<=ie){const ue=ie+1,Ee=ue<re?v[ue].el:C;for(;N<=ie;)E(null,v[N]=V?ks(v[N]):gn(v[N]),_,Ee,k,O,W,U,V),N++}}else if(N>ie)for(;N<=Q;)nt(g[N],k,O,!0),N++;else{const ue=N,Ee=N,Me=new Map;for(N=Ee;N<=ie;N++){const xt=v[N]=V?ks(v[N]):gn(v[N]);xt.key!=null&&Me.set(xt.key,N)}let De,ze=0;const $t=ie-Ee+1;let pn=!1,Gr=0;const or=new Array($t);for(N=0;N<$t;N++)or[N]=0;for(N=ue;N<=Q;N++){const xt=g[N];if(ze>=$t){nt(xt,k,O,!0);continue}let nn;if(xt.key!=null)nn=Me.get(xt.key);else for(De=Ee;De<=ie;De++)if(or[De-Ee]===0&&rs(xt,v[De])){nn=De;break}nn===void 0?nt(xt,k,O,!0):(or[nn-Ee]=N+1,nn>=Gr?Gr=nn:pn=!0,E(xt,v[nn],_,null,k,O,W,U,V),ze++)}const La=pn?gC(or):ii;for(De=La.length-1,N=$t-1;N>=0;N--){const xt=Ee+N,nn=v[xt],Ua=xt+1<re?v[xt+1].el:C;or[N]===0?E(null,nn,_,Ua,k,O,W,U,V):pn&&(De<0||N!==La[De]?tn(nn,_,Ua,2):De--)}}},tn=(g,v,_,C,k=null)=>{const{el:O,type:W,transition:U,children:V,shapeFlag:N}=g;if(N&6){tn(g.component.subTree,v,_,C);return}if(N&128){g.suspense.move(v,_,C);return}if(N&64){W.move(g,v,_,M);return}if(W===vt){s(O,v,_);for(let Q=0;Q<V.length;Q++)tn(V[Q],v,_,C);s(g.anchor,v,_);return}if(W===Bu){j(g,v,_);return}if(C!==2&&N&1&&U)if(C===0)U.beforeEnter(O),s(O,v,_),Bt(()=>U.enter(O),k);else{const{leave:Q,delayLeave:ie,afterLeave:ue}=U,Ee=()=>s(O,v,_),Me=()=>{Q(O,()=>{Ee(),ue&&ue()})};ie?ie(O,Ee,Me):Me()}else s(O,v,_)},nt=(g,v,_,C=!1,k=!1)=>{const{type:O,props:W,ref:U,children:V,dynamicChildren:N,shapeFlag:re,patchFlag:Q,dirs:ie}=g;if(U!=null&&Mh(U,null,_,g,!0),re&256){v.ctx.deactivate(g);return}const ue=re&1&&ie,Ee=!oo(g);let Me;if(Ee&&(Me=W&&W.onVnodeBeforeUnmount)&&Ln(Me,v,g),re&6)Kr(g.component,_,C);else{if(re&128){g.suspense.unmount(_,C);return}ue&&cr(g,null,v,"beforeUnmount"),re&64?g.type.remove(g,v,_,k,M,C):N&&(O!==vt||Q>0&&Q&64)?lt(N,v,_,!1,!0):(O===vt&&Q&384||!k&&re&16)&&lt(V,v,_),C&&ws(g)}(Ee&&(Me=W&&W.onVnodeUnmounted)||ue)&&Bt(()=>{Me&&Ln(Me,v,g),ue&&cr(g,null,v,"unmounted")},_)},ws=g=>{const{type:v,el:_,anchor:C,transition:k}=g;if(v===vt){Dn(_,C);return}if(v===Bu){I(g);return}const O=()=>{r(_),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:W,delayLeave:U}=k,V=()=>W(_,O);U?U(g.el,O,V):V()}else O()},Dn=(g,v)=>{let _;for(;g!==v;)_=f(g),r(g),g=_;r(v)},Kr=(g,v,_)=>{const{bum:C,scope:k,update:O,subTree:W,um:U}=g;C&&pc(C),k.stop(),O&&(O.active=!1,nt(W,g,v,_)),U&&Bt(U,v),Bt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},lt=(g,v,_,C=!1,k=!1,O=0)=>{for(let W=O;W<g.length;W++)nt(g[W],v,_,C,k)},b=g=>g.shapeFlag&6?b(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),H=(g,v,_)=>{g==null?v._vnode&&nt(v._vnode,null,null,!0):E(v._vnode||null,g,v,null,null,null,_),rm(),Sv(),v._vnode=g},M={p:E,um:nt,m:tn,r:ws,mt:Fe,mc:P,pc:Ne,pbc:ee,n:b,o:t};let G,Ce;return e&&([G,Ce]=e(M)),{render:H,hydrate:G,createApp:aC(H,G)}}function lr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nf(t,e,n=!1){const s=t.children,r=e.children;if(oe(s)&&oe(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ks(r[i]),a.el=o.el),n||nf(o,a)),a.type===Ol&&(a.el=o.el)}}function gC(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const yC=t=>t.__isTeleport,lo=t=>t&&(t.disabled||t.disabled===""),ym=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Lh=(t,e)=>{const n=t&&t.to;return Ze(n)?e?e(n):null:n},vC={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:m,querySelector:w,createText:E,createComment:S}}=l,D=lo(e.props);let{shapeFlag:R,children:j,dynamicChildren:I}=e;if(t==null){const $=e.el=E(""),te=e.anchor=E("");m($,n,s),m(te,n,s);const se=e.target=Lh(e.props,w),P=e.targetAnchor=E("");se&&(m(P,se),o=o||ym(se));const B=(ee,le)=>{R&16&&u(j,ee,le,r,i,o,a,c)};D?B(n,te):se&&B(se,P)}else{e.el=t.el;const $=e.anchor=t.anchor,te=e.target=t.target,se=e.targetAnchor=t.targetAnchor,P=lo(t.props),B=P?n:te,ee=P?$:se;if(o=o||ym(te),I?(f(t.dynamicChildren,I,B,r,i,o,a),nf(t,e,!0)):c||h(t,e,B,ee,r,i,o,a,!1),D)P||Xa(e,n,$,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const le=e.target=Lh(e.props,w);le&&Xa(e,le,null,l,0)}else P&&Xa(e,te,se,l,1)}Kv(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!lo(f))&&(i(l),a&16))for(let m=0;m<c.length;m++){const w=c[m];r(w,e,n,!0,!!w.dynamicChildren)}},move:Xa,hydrate:_C};function Xa(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||lo(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],e,n,2);h&&s(a,e,n)}function _C(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Lh(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(lo(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}Kv(e)}return e.anchor&&o(e.anchor)}const gF=vC;function Kv(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const vt=Symbol.for("v-fgt"),Ol=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),Bu=Symbol.for("v-stc"),uo=[];let an=null;function Ke(t=!1){uo.push(an=t?null:[])}function Gv(){uo.pop(),an=uo[uo.length-1]||null}let yi=1;function vm(t){yi+=t}function Zv(t){return t.dynamicChildren=yi>0?an||ii:null,Gv(),yi>0&&an&&an.push(t),t}function cn(t,e,n,s,r,i){return Zv(Js(t,e,n,s,r,i,!0))}function $n(t,e,n,s,r){return Zv(ft(t,e,n,s,r,!0))}function Ro(t){return t?t.__v_isVNode===!0:!1}function rs(t,e){return t.type===e.type&&t.key===e.key}const xl="__vInternal",Yv=({key:t})=>t??null,gc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Je(t)||ge(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function Js(t,e=null,n=null,s=0,r=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yv(e),ref:e&&gc(e),scopeId:Rl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dt};return a?(sf(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),yi>0&&!o&&an&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&an.push(c),c}const ft=wC;function wC(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Uv)&&(t=Cn),Ro(t)){const a=Nr(t,e,!0);return n&&sf(a,n),yi>0&&!i&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag|=-2,a}if(NC(t)&&(t=t.__vccOpts),e){e=TC(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=zs(a)),$e(c)&&(vv(c)&&!oe(c)&&(c=et({},c)),e.style=aa(c))}const o=Ze(t)?1:Ob(t)?128:yC(t)?64:$e(t)?4:ge(t)?2:0;return Js(t,e,n,s,r,o,i,!0)}function TC(t){return t?vv(t)||xl in t?et({},t):t:null}function Nr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Pl(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yv(a),ref:e&&e.ref?n&&r?oe(r)?r.concat(gc(e)):[r,gc(e)]:gc(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nr(t.ssContent),ssFallback:t.ssFallback&&Nr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Dl(t=" ",e=0){return ft(Ol,null,t,e)}function Vu(t="",e=!1){return e?(Ke(),$n(Cn,null,t)):ft(Cn,null,t)}function gn(t){return t==null||typeof t=="boolean"?ft(Cn):oe(t)?ft(vt,null,t.slice()):typeof t=="object"?ks(t):ft(Ol,null,String(t))}function ks(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nr(t)}function sf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),sf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(xl in e)?e._ctx=dt:r===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[Dl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pl(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=zs([e.class,s.class]));else if(r==="style")e.style=aa([e.style,s.style]);else if(wl(r)){const i=e[r],o=s[r];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ln(t,e,n,s=null){un(t,e,7,[n,s])}const EC=Vv();let IC=0;function bC(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||EC,i={uid:IC++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new rv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qv(s,r),emitsOptions:kv(s,r),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:s.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bb.bind(null,i),t.ce&&t.ce(i),i}let at=null;const Xv=()=>at||dt;let rf,Yr,_m="__VUE_INSTANCE_SETTERS__";(Yr=bh()[_m])||(Yr=bh()[_m]=[]),Yr.push(t=>at=t),rf=t=>{Yr.length>1?Yr.forEach(e=>e(t)):Yr[0](t)};const vi=t=>{rf(t),t.scope.on()},br=()=>{at&&at.scope.off(),rf(null)};function Qv(t){return t.vnode.shapeFlag&4}let No=!1;function CC(t,e=!1){No=e;const{props:n,children:s}=t.vnode,r=Qv(t);lC(t,n,r,e),dC(t,s);const i=r?SC(t,e):void 0;return No=!1,i}function SC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sl(new Proxy(t.ctx,eC));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?kC(t):null;vi(t),Pi();const i=Bs(s,t,0,[t.props,r]);if(Mi(),br(),Xy(i)){if(i.then(br,br),e)return i.then(o=>{Uh(t,o,e)}).catch(o=>{ca(o,t,0)});t.asyncDep=i}else Uh(t,i,e)}else Jv(t,e)}function Uh(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=Ev(e)),Jv(t,n)}let wm;function Jv(t,e,n){const s=t.type;if(!t.render){if(!e&&wm&&!s.render){const r=s.template||ef(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=et(et({isCustomElement:i,delimiters:a},o),c);s.render=wm(r,l)}}t.render=s.render||Tn}vi(t),Pi(),tC(t),Mi(),br()}function AC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ht(t,"get","$attrs"),e[n]}}))}function kC(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return AC(t)},slots:t.slots,emit:t.emit,expose:e}}function Ml(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ev(Sl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)},has(e,n){return n in e||n in co}}))}function RC(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function NC(t){return ge(t)&&"__vccOpts"in t}const Wt=(t,e)=>_b(t,e,No);function e_(t,e,n){const s=arguments.length;return s===2?$e(e)&&!oe(e)?Ro(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ro(n)&&(n=[n]),ft(t,e,n))}const OC=Symbol.for("v-scx"),xC=()=>En(OC),DC="3.3.4",PC="http://www.w3.org/2000/svg",fr=typeof document<"u"?document:null,Tm=fr&&fr.createElement("template"),MC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?fr.createElementNS(PC,t):fr.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>fr.createTextNode(t),createComment:t=>fr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Tm.innerHTML=s?`<svg>${t}</svg>`:t;const a=Tm.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function LC(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function UC(t,e,n){const s=t.style,r=Ze(n);if(n&&!r){if(e&&!Ze(e))for(const i in e)n[i]==null&&Fh(s,i,"");for(const i in n)Fh(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Em=/\s*!important$/;function Fh(t,e,n){if(oe(n))n.forEach(s=>Fh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=FC(t,e);Em.test(n)?t.setProperty(Di(s),n.replace(Em,""),"important"):t[s]=n}}const Im=["Webkit","Moz","ms"],ju={};function FC(t,e){const n=ju[e];if(n)return n;let s=Wn(e);if(s!=="filter"&&s in t)return ju[e]=s;s=Il(s);for(let r=0;r<Im.length;r++){const i=Im[r]+s;if(i in t)return ju[e]=i}return e}const bm="http://www.w3.org/1999/xlink";function $C(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bm,e.slice(6,e.length)):t.setAttributeNS(bm,e,n);else{const i=DI(e);n==null||i&&!tv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function BC(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=tv(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function pr(t,e,n,s){t.addEventListener(e,n,s)}function VC(t,e,n,s){t.removeEventListener(e,n,s)}function jC(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=qC(e);if(s){const l=i[e]=WC(s,r);pr(t,a,l,c)}else o&&(VC(t,a,o,c),i[e]=void 0)}}const Cm=/(?:Once|Passive|Capture)$/;function qC(t){let e;if(Cm.test(t)){e={};let s;for(;s=t.match(Cm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Di(t.slice(2)),e]}let qu=0;const HC=Promise.resolve(),zC=()=>qu||(HC.then(()=>qu=0),qu=Date.now());function WC(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;un(KC(s,n.value),e,5,[s])};return n.value=t,n.attached=zC(),n}function KC(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Sm=/^on[a-z]/,GC=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?LC(t,s,r):e==="style"?UC(t,n,s):wl(e)?Ld(e)||jC(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ZC(t,e,s,r))?BC(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$C(t,e,s,r))};function ZC(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Sm.test(e)&&ge(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Sm.test(e)&&Ze(n)?!1:e in t}const Is="transition",zi="animation",t_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},YC=et({},Vb,t_),ur=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Am=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function XC(t){const e={};for(const z in t)z in t_||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,w=QC(r),E=w&&w[0],S=w&&w[1],{onBeforeEnter:D,onEnter:R,onEnterCancelled:j,onLeave:I,onLeaveCancelled:$,onBeforeAppear:te=D,onAppear:se=R,onAppearCancelled:P=j}=e,B=(z,_e,Fe)=>{Ss(z,_e?u:a),Ss(z,_e?l:o),Fe&&Fe()},ee=(z,_e)=>{z._isLeaving=!1,Ss(z,h),Ss(z,m),Ss(z,f),_e&&_e()},le=z=>(_e,Fe)=>{const tt=z?se:R,we=()=>B(_e,z,Fe);ur(tt,[_e,we]),km(()=>{Ss(_e,z?c:i),ns(_e,z?u:a),Am(tt)||Rm(_e,s,E,we)})};return et(e,{onBeforeEnter(z){ur(D,[z]),ns(z,i),ns(z,o)},onBeforeAppear(z){ur(te,[z]),ns(z,c),ns(z,l)},onEnter:le(!1),onAppear:le(!0),onLeave(z,_e){z._isLeaving=!0;const Fe=()=>ee(z,_e);ns(z,h),s_(),ns(z,f),km(()=>{z._isLeaving&&(Ss(z,h),ns(z,m),Am(I)||Rm(z,s,S,Fe))}),ur(I,[z,Fe])},onEnterCancelled(z){B(z,!1),ur(j,[z])},onAppearCancelled(z){B(z,!0),ur(P,[z])},onLeaveCancelled(z){ee(z),ur($,[z])}})}function QC(t){if(t==null)return null;if($e(t))return[Hu(t.enter),Hu(t.leave)];{const e=Hu(t);return[e,e]}}function Hu(t){return ev(t)}function ns(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ss(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function km(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let JC=0;function Rm(t,e,n,s){const r=t._endId=++JC,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=n_(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=m=>{m.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function n_(t,e){const n=window.getComputedStyle(t),s=w=>(n[w]||"").split(", "),r=s(`${Is}Delay`),i=s(`${Is}Duration`),o=Nm(r,i),a=s(`${zi}Delay`),c=s(`${zi}Duration`),l=Nm(a,c);let u=null,h=0,f=0;e===Is?o>0&&(u=Is,h=o,f=i.length):e===zi?l>0&&(u=zi,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?Is:zi:null,f=u?u===Is?i.length:c.length:0);const m=u===Is&&/\b(transform|all)(,|$)/.test(s(`${Is}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:m}}function Nm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Om(n)+Om(t[s])))}function Om(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function s_(){return document.body.offsetHeight}const r_=new WeakMap,i_=new WeakMap,o_={name:"TransitionGroup",props:et({},YC,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xv(),s=Bb();let r,i;return Pv(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!iS(r[0].el,n.vnode.el,o))return;r.forEach(nS),r.forEach(sS);const a=r.filter(rS);s_(),a.forEach(c=>{const l=c.el,u=l.style;ns(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Ss(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=Se(t),a=XC(o);let c=o.tag||vt;r=i,i=e.default?Nv(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Nh(u,Rh(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];Nh(u,Rh(u,a,s,n)),r_.set(u,u.el.getBoundingClientRect())}return ft(c,null,i)}}},eS=t=>delete t.mode;o_.props;const tS=o_;function nS(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function sS(t){i_.set(t,t.el.getBoundingClientRect())}function rS(t){const e=r_.get(t),n=i_.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function iS(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=n_(s);return r.removeChild(s),i}const Dc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>pc(e,n):e};function oS(t){t.target.composing=!0}function xm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yF={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Dc(r);const i=s||r.props&&r.props.type==="number";pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=kc(a)),t._assign(a)}),n&&pr(t,"change",()=>{t.value=t.value.trim()}),e||(pr(t,"compositionstart",oS),pr(t,"compositionend",xm),pr(t,"change",xm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Dc(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&kc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vF={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Tl(e);pr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?kc(Pc(o)):Pc(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Dc(s)},mounted(t,{value:e}){Dm(t,e)},beforeUpdate(t,e,n){t._assign=Dc(n)},updated(t,{value:e}){Dm(t,e)}};function Dm(t,e){const n=t.multiple;if(!(n&&!oe(e)&&!Tl(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Pc(i);if(n)oe(e)?i.selected=MI(e,o)>-1:i.selected=e.has(o);else if(bl(Pc(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Pc(t){return"_value"in t?t._value:t.value}const aS=["ctrl","shift","alt","meta"],cS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>aS.some(n=>t[`${n}Key`]&&!e.includes(n))},lS=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=cS[e[r]];if(i&&i(n,e))return}return t(n,...s)},_F={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Wi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Wi(t,!0),s.enter(t)):s.leave(t,()=>{Wi(t,!1)}):Wi(t,e))},beforeUnmount(t,{value:e}){Wi(t,e)}};function Wi(t,e){t.style.display=e?t._vod:"none"}const uS=et({patchProp:GC},MC);let Pm;function hS(){return Pm||(Pm=pC(uS))}const a_=(...t)=>{const e=hS().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=dS(s);if(!r)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function dS(t){return Ze(t)?document.querySelector(t):t}var fS=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let c_;const Ll=t=>c_=t,l_=Symbol();function $h(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ho;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ho||(ho={}));function pS(){const t=iv(!0),e=t.run(()=>Wd({}));let n=[],s=[];const r=Sl({install(i){Ll(r),r._a=i,i.provide(l_,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!fS?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const u_=()=>{};function Mm(t,e,n,s=u_){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&ov()&&UI(r),r}function Xr(t,...e){t.slice().forEach(n=>{n(...e)})}const mS=t=>t();function Bh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];$h(r)&&$h(s)&&t.hasOwnProperty(n)&&!Je(s)&&!Fs(s)?t[n]=Bh(r,s):t[n]=s}return t}const gS=Symbol();function yS(t){return!$h(t)||!t.hasOwnProperty(gS)}const{assign:As}=Object;function vS(t){return!!(Je(t)&&t.effect)}function _S(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=mb(n.state.value[t]);return As(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Sl(Wt(()=>{Ll(n);const m=n._s.get(t);return o[f].call(m,m)})),h),{}))}return c=h_(t,l,e,n,s,!0),c}function h_(t,e,n={},s,r,i){let o;const a=As({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],m;const w=s.state.value[t];!i&&!w&&(s.state.value[t]={}),Wd({});let E;function S(P){let B;l=u=!1,typeof P=="function"?(P(s.state.value[t]),B={type:ho.patchFunction,storeId:t,events:m}):(Bh(s.state.value[t],P),B={type:ho.patchObject,payload:P,storeId:t,events:m});const ee=E=Symbol();Al().then(()=>{E===ee&&(l=!0)}),u=!0,Xr(h,B,s.state.value[t])}const D=i?function(){const{state:B}=n,ee=B?B():{};this.$patch(le=>{As(le,ee)})}:u_;function R(){o.stop(),h=[],f=[],s._s.delete(t)}function j(P,B){return function(){Ll(s);const ee=Array.from(arguments),le=[],z=[];function _e(we){le.push(we)}function Fe(we){z.push(we)}Xr(f,{args:ee,name:P,store:$,after:_e,onError:Fe});let tt;try{tt=B.apply(this&&this.$id===t?this:$,ee)}catch(we){throw Xr(z,we),we}return tt instanceof Promise?tt.then(we=>(Xr(le,we),we)).catch(we=>(Xr(z,we),Promise.reject(we))):(Xr(le,tt),tt)}}const I={_p:s,$id:t,$onAction:Mm.bind(null,f),$patch:S,$reset:D,$subscribe(P,B={}){const ee=Mm(h,P,B.detached,()=>le()),le=o.run(()=>io(()=>s.state.value[t],z=>{(B.flush==="sync"?u:l)&&P({storeId:t,type:ho.direct,events:m},z)},As({},c,B)));return ee},$dispose:R},$=Li(I);s._s.set(t,$);const te=s._a&&s._a.runWithContext||mS,se=s._e.run(()=>(o=iv(),te(()=>o.run(e))));for(const P in se){const B=se[P];if(Je(B)&&!vS(B)||Fs(B))i||(w&&yS(B)&&(Je(B)?B.value=w[P]:Bh(B,w[P])),s.state.value[t][P]=B);else if(typeof B=="function"){const ee=j(P,B);se[P]=ee,a.actions[P]=B}}return As($,se),As(Se($),se),Object.defineProperty($,"$state",{get:()=>s.state.value[t],set:P=>{S(B=>{As(B,P)})}}),s._p.forEach(P=>{As($,o.run(()=>P({store:$,app:s._a,pinia:s,options:a})))}),w&&i&&n.hydrate&&n.hydrate($.$state,w),l=!0,u=!0,$}function wS(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=cC();return a=a||(l?En(l_,null):null),a&&Ll(a),a=c_,a._s.has(s)||(i?h_(s,e,r,a):_S(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof window<"u";function TS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Le=Object.assign;function zu(t,e){const n={};for(const s in e){const r=e[s];n[s]=Sn(r)?r.map(t):t(r)}return n}const fo=()=>{},Sn=Array.isArray,ES=/\/$/,IS=t=>t.replace(ES,"");function Wu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=AS(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function bS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function CS(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&_i(e.matched[s],n.matched[r])&&d_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _i(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function d_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!SS(t[n],e[n]))return!1;return!0}function SS(t,e){return Sn(t)?Um(t,e):Sn(e)?Um(e,t):t===e}function Um(t,e){return Sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function AS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var po;(function(t){t.back="back",t.forward="forward",t.unknown=""})(po||(po={}));function kS(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IS(t)}const RS=/^[^#]+#/;function NS(t,e){return t.replace(RS,"#")+e}function OS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ul=()=>({left:window.pageXOffset,top:window.pageYOffset});function xS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=OS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fm(t,e){return(history.state?history.state.position-e:-1)+t}const Vh=new Map;function DS(t,e){Vh.set(t,e)}function PS(t){const e=Vh.get(t);return Vh.delete(t),e}let MS=()=>location.protocol+"//"+location.host;function f_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Lm(c,"")}return Lm(n,t)+s+r}function LS(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const m=f_(t,location),w=n.value,E=e.value;let S=0;if(f){if(n.value=m,e.value=f,o&&o===w){o=null;return}S=E?f.position-E.position:0}else s(m);r.forEach(D=>{D(n.value,w,{delta:S,type:Oo.pop,direction:S?S>0?po.forward:po.back:po.unknown})})};function c(){o=n.value}function l(f){r.push(f);const m=()=>{const w=r.indexOf(f);w>-1&&r.splice(w,1)};return i.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(Le({},f.state,{scroll:Ul()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function $m(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ul():null}}function US(t){const{history:e,location:n}=window,s={value:f_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:MS()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(c,l){const u=Le({},e.state,$m(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Le({},r.value,e.state,{forward:c,scroll:Ul()});i(u.current,u,!0);const h=Le({},$m(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function FS(t){t=kS(t);const e=US(t),n=LS(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Le({location:"",base:t,go:s,createHref:NS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $S(t){return typeof t=="string"||t&&typeof t=="object"}function p_(t){return typeof t=="string"||typeof t=="symbol"}const bs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},m_=Symbol("");var Bm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bm||(Bm={}));function wi(t,e){return Le(new Error,{type:t,[m_]:!0},e)}function ts(t,e){return t instanceof Error&&m_ in t&&(e==null||!!(t.type&e))}const Vm="[^/]+?",BS={sensitive:!1,strict:!1,start:!0,end:!0},VS=/[.+*?^${}()[\]/\\]/g;function jS(t,e){const n=Le({},BS,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(VS,"\\$&"),m+=40;else if(f.type===1){const{value:w,repeatable:E,optional:S,regexp:D}=f;i.push({name:w,repeatable:E,optional:S});const R=D||Vm;if(R!==Vm){m+=10;try{new RegExp(`(${R})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${w}" (${R}): `+I.message)}}let j=E?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(j=S&&l.length<2?`(?:/${j})`:"/"+j),S&&(j+="?"),r+=j,m+=20,S&&(m+=-8),E&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",w=i[f-1];h[w.name]=m&&w.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:E,optional:S}=m,D=w in l?l[w]:"";if(Sn(D)&&!E)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const R=Sn(D)?D.join("/"):D;if(!R)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function qS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function HS(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=qS(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(jm(s))return 1;if(jm(r))return-1}return r.length-s.length}function jm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zS={type:0,value:""},WS=/[a-zA-Z0-9_]/;function KS(t){if(!t)return[[]];if(t==="/")return[[zS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:WS.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function GS(t,e,n){const s=jS(KS(t.path),n),r=Le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ZS(t,e){const n=[],s=new Map;e=zm({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const m=!f,w=YS(u);w.aliasOf=f&&f.record;const E=zm(e,u),S=[w];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of j)S.push(Le({},w,{components:f?f.record.components:w.components,path:I,aliasOf:f?f.record:w}))}let D,R;for(const j of S){const{path:I}=j;if(h&&I[0]!=="/"){const $=h.record.path,te=$[$.length-1]==="/"?"":"/";j.path=h.record.path+(I&&te+I)}if(D=GS(j,h,E),f?f.alias.push(D):(R=R||D,R!==D&&R.alias.push(D),m&&u.name&&!Hm(D)&&o(u.name)),w.children){const $=w.children;for(let te=0;te<$.length;te++)i($[te],D,f&&f.children[te])}f=f||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&c(D)}return R?()=>{o(R)}:fo}function o(u){if(p_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&HS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!g_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Hm(u)&&s.set(u.record.name,u)}function l(u,h){let f,m={},w,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw wi(1,{location:u});E=f.record.name,m=Le(qm(h.params,f.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&qm(u.params,f.keys.map(R=>R.name))),w=f.stringify(m)}else if("path"in u)w=u.path,f=n.find(R=>R.re.test(w)),f&&(m=f.parse(w),E=f.record.name);else{if(f=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!f)throw wi(1,{location:u,currentLocation:h});E=f.record.name,m=Le({},h.params,u.params),w=f.stringify(m)}const S=[];let D=f;for(;D;)S.unshift(D.record),D=D.parent;return{name:E,path:w,params:m,matched:S,meta:QS(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function qm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function YS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:XS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function XS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Hm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QS(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function zm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function g_(t,e){return e.children.some(n=>n===t||g_(t,n))}const y_=/#/g,JS=/&/g,eA=/\//g,tA=/=/g,nA=/\?/g,v_=/\+/g,sA=/%5B/g,rA=/%5D/g,__=/%5E/g,iA=/%60/g,w_=/%7B/g,oA=/%7C/g,T_=/%7D/g,aA=/%20/g;function of(t){return encodeURI(""+t).replace(oA,"|").replace(sA,"[").replace(rA,"]")}function cA(t){return of(t).replace(w_,"{").replace(T_,"}").replace(__,"^")}function jh(t){return of(t).replace(v_,"%2B").replace(aA,"+").replace(y_,"%23").replace(JS,"%26").replace(iA,"`").replace(w_,"{").replace(T_,"}").replace(__,"^")}function lA(t){return jh(t).replace(tA,"%3D")}function uA(t){return of(t).replace(y_,"%23").replace(nA,"%3F")}function hA(t){return t==null?"":uA(t).replace(eA,"%2F")}function Mc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(v_," "),o=i.indexOf("="),a=Mc(o<0?i:i.slice(0,o)),c=o<0?null:Mc(i.slice(o+1));if(a in e){let l=e[a];Sn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Wm(t){let e="";for(let n in t){const s=t[n];if(n=lA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(s)?s.map(i=>i&&jh(i)):[s&&jh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function fA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Sn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const pA=Symbol(""),Km=Symbol(""),af=Symbol(""),E_=Symbol(""),qh=Symbol("");function Ki(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rs(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(wi(4,{from:n,to:e})):h instanceof Error?a(h):$S(h)?a(wi(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ku(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(mA(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Rs(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=TS(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Rs(f,n,s,i,o)()}))}}return r}function mA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gm(t){const e=En(af),n=En(E_),s=Wt(()=>e.resolve($s(t.to))),r=Wt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(_i.bind(null,u));if(f>-1)return f;const m=Zm(c[l-2]);return l>1&&Zm(u)===m&&h[h.length-1].path!==m?h.findIndex(_i.bind(null,c[l-2])):f}),i=Wt(()=>r.value>-1&&_A(n.params,s.value.params)),o=Wt(()=>r.value>-1&&r.value===n.matched.length-1&&d_(n.params,s.value.params));function a(c={}){return vA(c)?e[$s(t.replace)?"replace":"push"]($s(t.to)).catch(fo):Promise.resolve()}return{route:s,href:Wt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const gA=Xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gm,setup(t,{slots:e}){const n=Li(Gm(t)),{options:s}=En(af),r=Wt(()=>({[Ym(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ym(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:e_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),yA=gA;function vA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _A(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Sn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Zm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ym=(t,e,n)=>t??e??n,wA=Xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=En(qh),r=Wt(()=>t.route||s.value),i=En(Km,0),o=Wt(()=>{let l=$s(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Wt(()=>r.value.matched[o.value]);mc(Km,Wt(()=>o.value+1)),mc(pA,a),mc(qh,r);const c=Wd();return io(()=>[c.value,a.value,t.name],([l,u,h],[f,m,w])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!_i(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Xm(n.default,{Component:f,route:l});const m=h.props[u],w=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=e_(f,Le({},w,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Xm(n.default,{Component:S,route:l})||S}}});function Xm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const I_=wA;function TA(t){const e=ZS(t.routes,t),n=t.parseQuery||dA,s=t.stringifyQuery||Wm,r=t.history,i=Ki(),o=Ki(),a=Ki(),c=db(bs);let l=bs;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zu.bind(null,b=>""+b),h=zu.bind(null,hA),f=zu.bind(null,Mc);function m(b,H){let M,G;return p_(b)?(M=e.getRecordMatcher(b),G=H):G=b,e.addRoute(G,M)}function w(b){const H=e.getRecordMatcher(b);H&&e.removeRoute(H)}function E(){return e.getRoutes().map(b=>b.record)}function S(b){return!!e.getRecordMatcher(b)}function D(b,H){if(H=Le({},H||c.value),typeof b=="string"){const _=Wu(n,b,H.path),C=e.resolve({path:_.path},H),k=r.createHref(_.fullPath);return Le(_,C,{params:f(C.params),hash:Mc(_.hash),redirectedFrom:void 0,href:k})}let M;if("path"in b)M=Le({},b,{path:Wu(n,b.path,H.path).path});else{const _=Le({},b.params);for(const C in _)_[C]==null&&delete _[C];M=Le({},b,{params:h(_)}),H.params=h(H.params)}const G=e.resolve(M,H),Ce=b.hash||"";G.params=u(f(G.params));const g=bS(s,Le({},b,{hash:cA(Ce),path:G.path})),v=r.createHref(g);return Le({fullPath:g,hash:Ce,query:s===Wm?fA(b.query):b.query||{}},G,{redirectedFrom:void 0,href:v})}function R(b){return typeof b=="string"?Wu(n,b,c.value.path):Le({},b)}function j(b,H){if(l!==b)return wi(8,{from:H,to:b})}function I(b){return se(b)}function $(b){return I(Le(R(b),{replace:!0}))}function te(b){const H=b.matched[b.matched.length-1];if(H&&H.redirect){const{redirect:M}=H;let G=typeof M=="function"?M(b):M;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=R(G):{path:G},G.params={}),Le({query:b.query,hash:b.hash,params:"path"in G?{}:b.params},G)}}function se(b,H){const M=l=D(b),G=c.value,Ce=b.state,g=b.force,v=b.replace===!0,_=te(M);if(_)return se(Le(R(_),{state:typeof _=="object"?Le({},Ce,_.state):Ce,force:g,replace:v}),H||M);const C=M;C.redirectedFrom=H;let k;return!g&&CS(s,G,M)&&(k=wi(16,{to:C,from:G}),tn(G,G,!0,!1)),(k?Promise.resolve(k):ee(C,G)).catch(O=>ts(O)?ts(O,2)?O:xn(O):Ne(O,C,G)).then(O=>{if(O){if(ts(O,2))return se(Le({replace:v},R(O.to),{state:typeof O.to=="object"?Le({},Ce,O.to.state):Ce,force:g}),H||C)}else O=z(C,G,!0,v,Ce);return le(C,G,O),O})}function P(b,H){const M=j(b,H);return M?Promise.reject(M):Promise.resolve()}function B(b){const H=Dn.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(b):b()}function ee(b,H){let M;const[G,Ce,g]=EA(b,H);M=Ku(G.reverse(),"beforeRouteLeave",b,H);for(const _ of G)_.leaveGuards.forEach(C=>{M.push(Rs(C,b,H))});const v=P.bind(null,b,H);return M.push(v),lt(M).then(()=>{M=[];for(const _ of i.list())M.push(Rs(_,b,H));return M.push(v),lt(M)}).then(()=>{M=Ku(Ce,"beforeRouteUpdate",b,H);for(const _ of Ce)_.updateGuards.forEach(C=>{M.push(Rs(C,b,H))});return M.push(v),lt(M)}).then(()=>{M=[];for(const _ of b.matched)if(_.beforeEnter&&!H.matched.includes(_))if(Sn(_.beforeEnter))for(const C of _.beforeEnter)M.push(Rs(C,b,H));else M.push(Rs(_.beforeEnter,b,H));return M.push(v),lt(M)}).then(()=>(b.matched.forEach(_=>_.enterCallbacks={}),M=Ku(g,"beforeRouteEnter",b,H),M.push(v),lt(M))).then(()=>{M=[];for(const _ of o.list())M.push(Rs(_,b,H));return M.push(v),lt(M)}).catch(_=>ts(_,8)?_:Promise.reject(_))}function le(b,H,M){for(const G of a.list())B(()=>G(b,H,M))}function z(b,H,M,G,Ce){const g=j(b,H);if(g)return g;const v=H===bs,_=Jr?history.state:{};M&&(G||v?r.replace(b.fullPath,Le({scroll:v&&_&&_.scroll},Ce)):r.push(b.fullPath,Ce)),c.value=b,tn(b,H,M,v),xn()}let _e;function Fe(){_e||(_e=r.listen((b,H,M)=>{if(!Kr.listening)return;const G=D(b),Ce=te(G);if(Ce){se(Le(Ce,{replace:!0}),G).catch(fo);return}l=G;const g=c.value;Jr&&DS(Fm(g.fullPath,M.delta),Ul()),ee(G,g).catch(v=>ts(v,12)?v:ts(v,2)?(se(v.to,G).then(_=>{ts(_,20)&&!M.delta&&M.type===Oo.pop&&r.go(-1,!1)}).catch(fo),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Ne(v,G,g))).then(v=>{v=v||z(G,g,!1),v&&(M.delta&&!ts(v,8)?r.go(-M.delta,!1):M.type===Oo.pop&&ts(v,20)&&r.go(-1,!1)),le(G,g,v)}).catch(fo)}))}let tt=Ki(),we=Ki(),Ae;function Ne(b,H,M){xn(b);const G=we.list();return G.length?G.forEach(Ce=>Ce(b,H,M)):console.error(b),Promise.reject(b)}function en(){return Ae&&c.value!==bs?Promise.resolve():new Promise((b,H)=>{tt.add([b,H])})}function xn(b){return Ae||(Ae=!b,Fe(),tt.list().forEach(([H,M])=>b?M(b):H()),tt.reset()),b}function tn(b,H,M,G){const{scrollBehavior:Ce}=t;if(!Jr||!Ce)return Promise.resolve();const g=!M&&PS(Fm(b.fullPath,0))||(G||!M)&&history.state&&history.state.scroll||null;return Al().then(()=>Ce(b,H,g)).then(v=>v&&xS(v)).catch(v=>Ne(v,b,H))}const nt=b=>r.go(b);let ws;const Dn=new Set,Kr={currentRoute:c,listening:!0,addRoute:m,removeRoute:w,hasRoute:S,getRoutes:E,resolve:D,options:t,push:I,replace:$,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:en,install(b){const H=this;b.component("RouterLink",yA),b.component("RouterView",I_),b.config.globalProperties.$router=H,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>$s(c)}),Jr&&!ws&&c.value===bs&&(ws=!0,I(r.location).catch(Ce=>{}));const M={};for(const Ce in bs)M[Ce]=Wt(()=>c.value[Ce]);b.provide(af,H),b.provide(E_,Li(M)),b.provide(qh,c);const G=b.unmount;Dn.add(b),b.unmount=function(){Dn.delete(b),Dn.size<1&&(l=bs,_e&&_e(),_e=null,c.value=bs,ws=!1,Ae=!1),G()}}};function lt(b){return b.reduce((H,M)=>H.then(()=>B(M)),Promise.resolve())}return Kr}function EA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>_i(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>_i(l,c))||r.push(c))}return[n,s,r]}const IA=t=>(Cb("data-v-029362bf"),t=t(),Sb(),t),bA=IA(()=>Js("div",{id:"modal"},null,-1)),CA=Xn({__name:"App",setup(t){return(e,n)=>(Ke(),cn(vt,null,[ft($s(I_)),bA],64))}});const SA=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},AA=SA(CA,[["__scopeId","data-v-029362bf"]]),kA="modulepreload",RA=function(t){return"/"+t},Qm={},Qa=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=RA(i),i in Qm)return;Qm[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":kA,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
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
 */const b_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},NA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},C_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(n[u],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new OA;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const w=l<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xA=function(t){const e=b_(t);return C_.encodeByteArray(e,!0)},Lc=function(t){return xA(t).replace(/\./g,"")},S_=function(t){try{return C_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PA=()=>DA().__FIREBASE_DEFAULTS__,MA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S_(t[1]);return e&&JSON.parse(e)},Fl=()=>{try{return PA()||MA()||LA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A_=t=>{var e,n;return(n=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k_=t=>{const e=A_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},R_=()=>{var t;return(t=Fl())===null||t===void 0?void 0:t.config},N_=t=>{var e;return(e=Fl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class UA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function O_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Lc(JSON.stringify(n)),Lc(JSON.stringify(o)),a].join(".")}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function $A(){var t;const e=(t=Fl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function x_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VA(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function D_(){try{return typeof indexedDB=="object"}catch{return!1}}function P_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function jA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qA="FirebaseError";class fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qA,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?HA(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new fn(r,a,s)}}function HA(t,e){return t.replace(zA,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const zA=/\{\$([^}]+)}/g;function WA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Jm(i)&&Jm(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Jm(t){return t!==null&&typeof t=="object"}/**
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
 */function ua(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function KA(t,e){const n=new GA(t,e);return n.subscribe.bind(n)}class GA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ZA(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Gu),r.error===void 0&&(r.error=Gu),r.complete===void 0&&(r.complete=Gu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gu(){}/**
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
 */const YA=1e3,XA=2,QA=4*60*60*1e3,JA=.5;function eg(t,e=YA,n=XA){const s=e*Math.pow(n,t),r=Math.round(JA*s*(Math.random()-.5)*2);return Math.min(QA,s+r)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class ek{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new UA;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nk(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tk(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tk(t){return t===hr?void 0:t}function nk(t){return t.instantiationMode==="EAGER"}/**
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
 */class sk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ek(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const rk={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},ik=Oe.INFO,ok={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},ak=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ok[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=ik,this._logHandler=ak,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const ck=(t,e)=>e.some(n=>t instanceof n);let tg,ng;function lk(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uk(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M_=new WeakMap,Hh=new WeakMap,L_=new WeakMap,Zu=new WeakMap,cf=new WeakMap;function hk(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&M_.set(n,t)}).catch(()=>{}),cf.set(e,t),e}function dk(t){if(Hh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||L_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fk(t){zh=t(zh)}function pk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Yu(this),e,...n);return L_.set(s,e.sort?e.sort():[e]),Vs(s)}:uk().includes(t)?function(...e){return t.apply(Yu(this),e),Vs(M_.get(this))}:function(...e){return Vs(t.apply(Yu(this),e))}}function mk(t){return typeof t=="function"?pk(t):(t instanceof IDBTransaction&&dk(t),ck(t,lk())?new Proxy(t,zh):t)}function Vs(t){if(t instanceof IDBRequest)return hk(t);if(Zu.has(t))return Zu.get(t);const e=mk(t);return e!==t&&(Zu.set(t,e),cf.set(e,t)),e}const Yu=t=>cf.get(t);function gk(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Vs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Vs(o.result),c.oldVersion,c.newVersion,Vs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const yk=["get","getKey","getAll","getAllKeys","count"],vk=["put","add","delete","clear"],Xu=new Map;function sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vk.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yk.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Xu.set(e,i),i}fk(t=>({...t,get:(e,n,s)=>sg(e,n)||t.get(e,n,s),has:(e,n)=>!!sg(e,n)||t.has(e,n)}));/**
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
 */class _k{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wk(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",rg="0.9.10";/**
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
 */const Or=new $l("@firebase/app"),Tk="@firebase/app-compat",Ek="@firebase/analytics-compat",Ik="@firebase/analytics",bk="@firebase/app-check-compat",Ck="@firebase/app-check",Sk="@firebase/auth",Ak="@firebase/auth-compat",kk="@firebase/database",Rk="@firebase/database-compat",Nk="@firebase/functions",Ok="@firebase/functions-compat",xk="@firebase/installations",Dk="@firebase/installations-compat",Pk="@firebase/messaging",Mk="@firebase/messaging-compat",Lk="@firebase/performance",Uk="@firebase/performance-compat",Fk="@firebase/remote-config",$k="@firebase/remote-config-compat",Bk="@firebase/storage",Vk="@firebase/storage-compat",jk="@firebase/firestore",qk="@firebase/firestore-compat",Hk="firebase",zk="9.22.0";/**
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
 */const Kh="[DEFAULT]",Wk={[Wh]:"fire-core",[Tk]:"fire-core-compat",[Ik]:"fire-analytics",[Ek]:"fire-analytics-compat",[Ck]:"fire-app-check",[bk]:"fire-app-check-compat",[Sk]:"fire-auth",[Ak]:"fire-auth-compat",[kk]:"fire-rtdb",[Rk]:"fire-rtdb-compat",[Nk]:"fire-fn",[Ok]:"fire-fn-compat",[xk]:"fire-iid",[Dk]:"fire-iid-compat",[Pk]:"fire-fcm",[Mk]:"fire-fcm-compat",[Lk]:"fire-perf",[Uk]:"fire-perf-compat",[Fk]:"fire-rc",[$k]:"fire-rc-compat",[Bk]:"fire-gcs",[Vk]:"fire-gcs-compat",[jk]:"fire-fst",[qk]:"fire-fst-compat","fire-js":"fire-js",[Hk]:"fire-js-all"};/**
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
 */const Uc=new Map,Gh=new Map;function Kk(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function An(t){const e=t.name;if(Gh.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of Uc.values())Kk(n,t);return!0}function er(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Gk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},js=new jr("app","Firebase",Gk);/**
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
 */class Zk{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw js.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=zk;function U_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw js.create("bad-app-name",{appName:String(r)});if(n||(n=R_()),!n)throw js.create("no-options");const i=Uc.get(r);if(i){if(xo(n,i.options)&&xo(s,i.config))return i;throw js.create("duplicate-app",{appName:r})}const o=new sk(r);for(const c of Gh.values())o.addComponent(c);const a=new Zk(n,s,o);return Uc.set(r,a),a}function Bl(t=Kh){const e=Uc.get(t);if(!e&&t===Kh&&R_())return U_();if(!e)throw js.create("no-app",{appName:t});return e}function jt(t,e,n){var s;let r=(s=Wk[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}An(new dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Yk="firebase-heartbeat-database",Xk=1,Do="firebase-heartbeat-store";let Qu=null;function F_(){return Qu||(Qu=gk(Yk,Xk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Do)}}}).catch(t=>{throw js.create("idb-open",{originalErrorMessage:t.message})})),Qu}async function Qk(t){try{return await(await F_()).transaction(Do).objectStore(Do).get($_(t))}catch(e){if(e instanceof fn)Or.warn(e.message);else{const n=js.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(n.message)}}}async function ig(t,e){try{const s=(await F_()).transaction(Do,"readwrite");await s.objectStore(Do).put(e,$_(t)),await s.done}catch(n){if(n instanceof fn)Or.warn(n.message);else{const s=js.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Or.warn(s.message)}}}function $_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jk=1024,e1=30*24*60*60*1e3;class t1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=og();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=e1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=og(),{heartbeatsToSend:n,unsentEntries:s}=n1(this._heartbeatsCache.heartbeats),r=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function og(){return new Date().toISOString().substring(0,10)}function n1(t,e=Jk){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ag(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ag(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class s1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D_()?P_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ag(t){return Lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function r1(t){An(new dn("platform-logger",e=>new _k(e),"PRIVATE")),An(new dn("heartbeat",e=>new t1(e),"PRIVATE")),jt(Wh,rg,t),jt(Wh,rg,"esm2017"),jt("fire-js","")}r1("");var i1="firebase",o1="9.22.0";/**
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
 */jt(i1,o1,"app");function lf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function B_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=B_,V_=new jr("auth","Firebase",B_());/**
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
 */const Fc=new $l("@firebase/auth");function c1(t,...e){Fc.logLevel<=Oe.WARN&&Fc.warn(`Auth (${qr}): ${t}`,...e)}function yc(t,...e){Fc.logLevel<=Oe.ERROR&&Fc.error(`Auth (${qr}): ${t}`,...e)}/**
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
 */function Kn(t,...e){throw uf(t,...e)}function jn(t,...e){return uf(t,...e)}function j_(t,e,n){const s=Object.assign(Object.assign({},a1()),{[e]:n});return new jr("auth","Firebase",s).create(e,{appName:t.name})}function l1(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Kn(t,"argument-error"),j_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return V_.create(t,...e)}function pe(t,e,...n){if(!t)throw uf(e,...n)}function is(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yc(e),new Error(e)}function fs(t,e){t||is(e)}/**
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
 */function Zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function u1(){return cg()==="http:"||cg()==="https:"}function cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function h1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u1()||x_()||"connection"in navigator)?navigator.onLine:!0}function d1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,fs(n>e,"Short delay should be less than long delay!"),this.isMobile=FA()||BA()}get(){return h1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hf(t,e){fs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class q_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;is("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;is("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;is("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const p1=new ha(3e4,6e4);function H_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function da(t,e,n,s,r={}){return z_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ua(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),q_.fetch()(W_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function z_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},f1),e);try{const r=new g1(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ja(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw j_(t,u,l);Kn(t,u)}}catch(r){if(r instanceof fn)throw r;Kn(t,"network-request-failed",{message:String(r)})}}async function m1(t,e,n,s,r={}){const i=await da(t,e,n,s,r);return"mfaPendingCredential"in i&&Kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function W_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?hf(t.config,r):`${t.config.apiScheme}://${r}`}class g1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jn(this.auth,"network-request-failed")),p1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ja(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=jn(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function y1(t,e){return da(t,"POST","/v1/accounts:delete",e)}async function v1(t,e){return da(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _1(t,e=!1){const n=He(t),s=await n.getIdToken(e),r=df(s);pe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:mo(Ju(r.auth_time)),issuedAtTime:mo(Ju(r.iat)),expirationTime:mo(Ju(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ju(t){return Number(t)*1e3}function df(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yc("JWT malformed, contained fewer than 3 sections"),null;try{const r=S_(n);return r?JSON.parse(r):(yc("Failed to decode base64 JWT payload"),null)}catch(r){return yc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function w1(t){const e=df(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof fn&&T1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function T1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class E1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class K_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $c(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Po(t,v1(n,{idToken:s}));pe(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?C1(i.providerUserInfo):[],a=b1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new K_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function I1(t){const e=He(t);await $c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function b1(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function C1(t){return t.map(e=>{var{providerId:n}=e,s=lf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function S1(t,e){const n=await z_(t,{},async()=>{const s=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=W_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",q_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await S1(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Mo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(pe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return is("not implemented")}}/**
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
 */function Cs(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new K_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _1(this,e)}reload(){return I1(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Po(this,y1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:I,isAnonymous:$,providerData:te,stsTokenManager:se}=n;pe(j&&se,e,"internal-error");const P=Mo.fromJSON(this.name,se);pe(typeof j=="string",e,"internal-error"),Cs(h,e.name),Cs(f,e.name),pe(typeof I=="boolean",e,"internal-error"),pe(typeof $=="boolean",e,"internal-error"),Cs(m,e.name),Cs(w,e.name),Cs(E,e.name),Cs(S,e.name),Cs(D,e.name),Cs(R,e.name);const B=new Cr({uid:j,auth:e,email:f,emailVerified:I,displayName:h,isAnonymous:$,photoURL:w,phoneNumber:m,tenantId:E,stsTokenManager:P,createdAt:D,lastLoginAt:R});return te&&Array.isArray(te)&&(B.providerData=te.map(ee=>Object.assign({},ee))),S&&(B._redirectEventId=S),B}static async _fromIdTokenResponse(e,n,s=!1){const r=new Mo;r.updateFromServerResponse(n);const i=new Cr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $c(i),i}}/**
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
 */const lg=new Map;function os(t){fs(t instanceof Function,"Expected a class definition");let e=lg.get(t);return e?(fs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lg.set(t,e),e)}/**
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
 */class G_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}G_.type="NONE";const ug=G_;/**
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
 */function vc(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=vc(this.userKey,r.apiKey,i),this.fullPersistenceKey=vc("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new li(os(ug),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||os(ug);const o=vc(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new li(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new li(i,e,s))}}/**
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
 */function hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(X_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(ew(e))return"Webos";if(ff(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Z_(t=Rt()){return/firefox\//i.test(t)}function ff(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(t=Rt()){return/crios\//i.test(t)}function X_(t=Rt()){return/iemobile/i.test(t)}function Q_(t=Rt()){return/android/i.test(t)}function J_(t=Rt()){return/blackberry/i.test(t)}function ew(t=Rt()){return/webos/i.test(t)}function Vl(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A1(t=Rt()){var e;return Vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k1(){return VA()&&document.documentMode===10}function tw(t=Rt()){return Vl(t)||Q_(t)||ew(t)||J_(t)||/windows phone/i.test(t)||X_(t)}function R1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function nw(t,e=[]){let n;switch(t){case"Browser":n=hg(Rt());break;case"Worker":n=`${hg(Rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${s}`}async function sw(t,e){return da(t,"GET","/v2/recaptchaConfig",H_(t,e))}function dg(t){return t!==void 0&&t.enterprise!==void 0}class rw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function N1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=jn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",N1().appendChild(s)})}function O1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const x1="https://www.google.com/recaptcha/enterprise.js?render=",D1="recaptcha-enterprise",P1="NO_RECAPTCHA";class M1{constructor(e){this.type=D1,this.auth=fa(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{sw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new rw(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;dg(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(P1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&dg(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}iw(x1+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class L1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class U1{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fg(this),this.idTokenSubscription=new fg(this),this.beforeStateQueue=new L1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=os(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $c(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(os(e))})}async initializeRecaptchaConfig(){const e=await sw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new rw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new M1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&os(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[os(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pe(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&c1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fa(t){return He(t)}class fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=KA(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function F1(t,e){const n=er(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return r;Kn(r,"already-initialized")}return n.initialize({options:e})}function $1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(os);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function B1(t,e,n){const s=fa(t);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=ow(e),{host:o,port:a}=V1(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||j1()}function ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V1(t){const e=ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:pg(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:pg(o)}}}function pg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function j1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class aw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return is("not implemented")}_getIdTokenResponse(e){return is("not implemented")}_linkToIdToken(e,n){return is("not implemented")}_getReauthenticationResolver(e){return is("not implemented")}}/**
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
 */async function ui(t,e){return m1(t,"POST","/v1/accounts:signInWithIdp",H_(t,e))}/**
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
 */const q1="http://localhost";class xr extends aw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=lf(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new xr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:q1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ua(n)}return e}}/**
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
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pa extends pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ns extends pa{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ns.credential(e.oauthAccessToken)}catch{return null}}}Ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ns.PROVIDER_ID="facebook.com";/**
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
 */class Os extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Os.credential(n,s)}catch{return null}}}Os.GOOGLE_SIGN_IN_METHOD="google.com";Os.PROVIDER_ID="google.com";/**
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
 */class xs extends pa{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xs.credential(e.oauthAccessToken)}catch{return null}}}xs.GITHUB_SIGN_IN_METHOD="github.com";xs.PROVIDER_ID="github.com";/**
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
 */class Ds extends pa{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ds.credential(n,s)}catch{return null}}}Ds.TWITTER_SIGN_IN_METHOD="twitter.com";Ds.PROVIDER_ID="twitter.com";/**
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
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Cr._fromIdTokenResponse(e,s,r),o=mg(s);return new Ti({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=mg(s);return new Ti({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function mg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bc extends fn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Bc(e,n,s,r)}}function cw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(t,i,e,s):i})}async function H1(t,e,n=!1){const s=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",s)}/**
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
 */async function z1(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Po(t,cw(s,r,e,t),n);pe(i.idToken,s,"internal-error");const o=df(i.idToken);pe(o,s,"internal-error");const{sub:a}=o;return pe(t.uid===a,s,"user-mismatch"),Ti._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kn(s,"user-mismatch"),i}}/**
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
 */async function W1(t,e,n=!1){const s="signIn",r=await cw(t,s,e),i=await Ti._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function K1(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function G1(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function Z1(t,e,n,s){return He(t).onAuthStateChanged(e,n,s)}function wF(t){return He(t).signOut()}const Vc="__sak";/**
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
 */class lw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vc,"1"),this.storage.removeItem(Vc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Y1(){const t=Rt();return ff(t)||Vl(t)}const X1=1e3,Q1=10;class uw extends lw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y1()&&R1(),this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);k1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Q1):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uw.type="LOCAL";const J1=uw;/**
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
 */class hw extends lw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hw.type="SESSION";const dw=hw;/**
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
 */function eR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new jl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await eR(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
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
 */function mf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=mf("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qn(){return window}function nR(t){qn().location.href=t}/**
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
 */function fw(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function sR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return fw()?self:null}/**
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
 */const pw="firebaseLocalStorageDb",oR=1,jc="firebaseLocalStorage",mw="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ql(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function aR(){const t=indexedDB.deleteDatabase(pw);return new ma(t).toPromise()}function Yh(){const t=indexedDB.open(pw,oR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(jc,{keyPath:mw})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(jc)?e(s):(s.close(),await aR(),e(await Yh()))})})}async function gg(t,e,n){const s=ql(t,!0).put({[mw]:e,value:n});return new ma(s).toPromise()}async function cR(t,e){const n=ql(t,!1).get(e),s=await new ma(n).toPromise();return s===void 0?null:s.value}function yg(t,e){const n=ql(t,!0).delete(e);return new ma(n).toPromise()}const lR=800,uR=3;class gw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>uR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sR(),!this.activeServiceWorker)return;this.sender=new tR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await gg(e,Vc,"1"),await yg(e,Vc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>cR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ql(r,!1).getAll();return new ma(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gw.type="LOCAL";const hR=gw;new ha(3e4,6e4);/**
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
 */function yw(t,e){return e?os(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gf extends aw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dR(t){return W1(t.auth,new gf(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),z1(n,new gf(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),H1(n,new gf(t),t.bypassAuthState)}/**
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
 */class vw{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:Kn(this.auth,"internal-error")}}resolve(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mR=new ha(2e3,1e4);async function TF(t,e,n){const s=fa(t);l1(t,e,pf);const r=yw(s,n);return new gr(s,"signInViaPopup",e,r).executeNotNull()}class gr extends vw{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){fs(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}gr.currentPopupAction=null;/**
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
 */const gR="pendingRedirect",_c=new Map;class yR extends vw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_c.get(this.auth._key());if(!e){try{const s=await vR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_c.set(this.auth._key(),e)}return this.bypassAuthState||_c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vR(t,e){const n=TR(e),s=wR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function _R(t,e){_c.set(t._key(),e)}function wR(t){return os(t._redirectPersistence)}function TR(t){return vc(gR,t.config.apiKey,t.name)}async function ER(t,e,n=!1){const s=fa(t),r=yw(s,e),o=await new yR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const IR=10*60*1e3;class bR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_w(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IR&&this.cachedEventUids.clear(),this.cachedEventUids.has(vg(e))}saveEventToCache(e){this.cachedEventUids.add(vg(e)),this.lastProcessedEventTime=Date.now()}}function vg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _w({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _w(t);default:return!1}}/**
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
 */async function SR(t,e={}){return da(t,"GET","/v1/projects",e)}/**
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
 */const AR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kR=/^https?/;async function RR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SR(t);for(const n of e)try{if(NR(n))return}catch{}Kn(t,"unauthorized-domain")}function NR(t){const e=Zh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!kR.test(n))return!1;if(AR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const OR=new ha(3e4,6e4);function _g(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xR(t){return new Promise((e,n)=>{var s,r,i;function o(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(jn(t,"network-request-failed"))},timeout:OR.get()})}if(!((r=(s=qn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=qn().gapi)===null||i===void 0)&&i.load)o();else{const a=O1("iframefcb");return qn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},iw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw wc=null,e})}let wc=null;function DR(t){return wc=wc||xR(t),wc}/**
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
 */const PR=new ha(5e3,15e3),MR="__/auth/iframe",LR="emulator/auth/iframe",UR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $R(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,LR):`https://${t.config.authDomain}/${MR}`,s={apiKey:e.apiKey,appName:t.name,v:qr},r=FR.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ua(s).slice(1)}`}async function BR(t){const e=await DR(t),n=qn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:$R(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=qn().setTimeout(()=>{i(o)},PR.get());function c(){qn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const VR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jR=500,qR=600,HR="_blank",zR="http://localhost";class wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(t,e,n,s=jR,r=qR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},VR),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Rt().toLowerCase();n&&(a=Y_(l)?HR:n),Z_(l)&&(e=e||zR,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,w])=>`${f}${m}=${w},`,"");if(A1(l)&&a!=="_self")return KR(e||"",a),new wg(null);const h=window.open(e||"",a,u);pe(h,t,"popup-blocked");try{h.focus()}catch{}return new wg(h)}function KR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const GR="__/auth/handler",ZR="emulator/auth/handler",YR=encodeURIComponent("fac");async function Tg(t,e,n,s,r,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:qr,eventId:r};if(e instanceof pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof pa){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${YR}=${encodeURIComponent(c)}`:"";return`${XR(t)}?${ua(a).slice(1)}${l}`}function XR({config:t}){return t.emulator?hf(t,ZR):`https://${t.authDomain}/${GR}`}/**
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
 */const eh="webStorageSupport";class QR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dw,this._completeRedirectFn=ER,this._overrideRedirectResult=_R}async _openPopup(e,n,s,r){var i;fs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tg(e,n,s,Zh(),r);return WR(e,o,mf())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Tg(e,n,s,Zh(),r);return nR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(fs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await BR(e),s=new bR(e);return n.register("authEvent",r=>(pe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[eh];o!==void 0&&n(!!o),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tw()||ff()||Vl()}}const JR=QR;var Eg="@firebase/auth",Ig="0.23.2";/**
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
 */class eN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nN(t){An(new dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(t)},l=new U1(s,r,i,c);return $1(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),An(new dn("auth-internal",e=>{const n=fa(e.getProvider("auth").getImmediate());return(s=>new eN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Eg,Ig,tN(t)),jt(Eg,Ig,"esm2017")}/**
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
 */const sN=5*60,rN=N_("authIdTokenMaxAge")||sN;let bg=null;const iN=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rN)return;const r=n==null?void 0:n.token;bg!==r&&(bg=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function oN(t=Bl()){const e=er(t,"auth");if(e.isInitialized())return e.getImmediate();const n=F1(t,{popupRedirectResolver:JR,persistence:[hR,J1,dw]}),s=N_("authTokenSyncURL");if(s){const i=iN(s);G1(n,i,()=>i(n.currentUser)),K1(n,o=>i(o))}const r=A_("auth");return r&&B1(n,`http://${r}`),n}nN("Browser");const aN=(t,e)=>e.some(n=>t instanceof n);let Cg,Sg;function cN(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lN(){return Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ww=new WeakMap,Xh=new WeakMap,Tw=new WeakMap,th=new WeakMap,yf=new WeakMap;function uN(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ww.set(n,t)}).catch(()=>{}),yf.set(e,t),e}function hN(t){if(Xh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xh.set(t,e)}let Qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dN(t){Qh=t(Qh)}function fN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(nh(this),e,...n);return Tw.set(s,e.sort?e.sort():[e]),qs(s)}:lN().includes(t)?function(...e){return t.apply(nh(this),e),qs(ww.get(this))}:function(...e){return qs(t.apply(nh(this),e))}}function pN(t){return typeof t=="function"?fN(t):(t instanceof IDBTransaction&&hN(t),aN(t,cN())?new Proxy(t,Qh):t)}function qs(t){if(t instanceof IDBRequest)return uN(t);if(th.has(t))return th.get(t);const e=pN(t);return e!==t&&(th.set(t,e),yf.set(e,t)),e}const nh=t=>yf.get(t);function mN(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=qs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qs(o.result),c.oldVersion,c.newVersion,qs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const gN=["get","getKey","getAll","getAllKeys","count"],yN=["put","add","delete","clear"],sh=new Map;function Ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sh.get(e))return sh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yN.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||gN.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return sh.set(e,i),i}dN(t=>({...t,get:(e,n,s)=>Ag(e,n)||t.get(e,n,s),has:(e,n)=>!!Ag(e,n)||t.has(e,n)}));const Ew="@firebase/installations",vf="0.6.4";/**
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
 */const Iw=1e4,bw=`w:${vf}`,Cw="FIS_v2",vN="https://firebaseinstallations.googleapis.com/v1",_N=60*60*1e3,wN="installations",TN="Installations";/**
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
 */const EN={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Dr=new jr(wN,TN,EN);function Sw(t){return t instanceof fn&&t.code.includes("request-failed")}/**
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
 */function Aw({projectId:t}){return`${vN}/projects/${t}/installations`}function kw(t){return{token:t.token,requestStatus:2,expiresIn:bN(t.expiresIn),creationTime:Date.now()}}async function Rw(t,e){const s=(await e.json()).error;return Dr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Nw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function IN(t,{refreshToken:e}){const n=Nw(t);return n.append("Authorization",CN(e)),n}async function Ow(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bN(t){return Number(t.replace("s","000"))}function CN(t){return`${Cw} ${t}`}/**
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
 */async function SN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Aw(t),r=Nw(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Cw,appId:t.appId,sdkVersion:bw},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ow(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:kw(l.authToken)}}else throw await Rw("Create Installation",c)}/**
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
 */function xw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function AN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kN=/^[cdef][\w-]{21}$/,Jh="";function RN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=NN(t);return kN.test(n)?n:Jh}catch{return Jh}}function NN(t){return AN(t).substr(0,22)}/**
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
 */function Hl(t){return`${t.appName}!${t.appId}`}/**
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
 */const Dw=new Map;function Pw(t,e){const n=Hl(t);Mw(n,e),ON(n,e)}function Mw(t,e){const n=Dw.get(t);if(n)for(const s of n)s(e)}function ON(t,e){const n=xN();n&&n.postMessage({key:t,fid:e}),DN()}let yr=null;function xN(){return!yr&&"BroadcastChannel"in self&&(yr=new BroadcastChannel("[Firebase] FID Change"),yr.onmessage=t=>{Mw(t.data.key,t.data.fid)}),yr}function DN(){Dw.size===0&&yr&&(yr.close(),yr=null)}/**
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
 */const PN="firebase-installations-database",MN=1,Pr="firebase-installations-store";let rh=null;function _f(){return rh||(rh=mN(PN,MN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}})),rh}async function qc(t,e){const n=Hl(t),r=(await _f()).transaction(Pr,"readwrite"),i=r.objectStore(Pr),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Pw(t,e.fid),e}async function Lw(t){const e=Hl(t),s=(await _f()).transaction(Pr,"readwrite");await s.objectStore(Pr).delete(e),await s.done}async function zl(t,e){const n=Hl(t),r=(await _f()).transaction(Pr,"readwrite"),i=r.objectStore(Pr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Pw(t,a.fid),a}/**
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
 */async function wf(t){let e;const n=await zl(t.appConfig,s=>{const r=LN(s),i=UN(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Jh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function LN(t){const e=t||{fid:RN(),registrationStatus:0};return Uw(e)}function UN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Dr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=FN(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$N(t)}:{installationEntry:e}}async function FN(t,e){try{const n=await SN(t,e);return qc(t.appConfig,n)}catch(n){throw Sw(n)&&n.customData.serverCode===409?await Lw(t.appConfig):await qc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $N(t){let e=await kg(t.appConfig);for(;e.registrationStatus===1;)await xw(100),e=await kg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await wf(t);return s||n}return e}function kg(t){return zl(t,e=>{if(!e)throw Dr.create("installation-not-found");return Uw(e)})}function Uw(t){return BN(t)?{fid:t.fid,registrationStatus:0}:t}function BN(t){return t.registrationStatus===1&&t.registrationTime+Iw<Date.now()}/**
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
 */async function VN({appConfig:t,heartbeatServiceProvider:e},n){const s=jN(t,n),r=IN(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:bw,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ow(()=>fetch(s,a));if(c.ok){const l=await c.json();return kw(l)}else throw await Rw("Generate Auth Token",c)}function jN(t,{fid:e}){return`${Aw(t)}/${e}/authTokens:generate`}/**
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
 */async function Tf(t,e=!1){let n;const s=await zl(t.appConfig,i=>{if(!Fw(i))throw Dr.create("not-registered");const o=i.authToken;if(!e&&zN(o))return i;if(o.requestStatus===1)return n=qN(t,e),i;{if(!navigator.onLine)throw Dr.create("app-offline");const a=KN(i);return n=HN(t,a),a}});return n?await n:s.authToken}async function qN(t,e){let n=await Rg(t.appConfig);for(;n.authToken.requestStatus===1;)await xw(100),n=await Rg(t.appConfig);const s=n.authToken;return s.requestStatus===0?Tf(t,e):s}function Rg(t){return zl(t,e=>{if(!Fw(e))throw Dr.create("not-registered");const n=e.authToken;return GN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function HN(t,e){try{const n=await VN(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await qc(t.appConfig,s),n}catch(n){if(Sw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Lw(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qc(t.appConfig,s)}throw n}}function Fw(t){return t!==void 0&&t.registrationStatus===2}function zN(t){return t.requestStatus===2&&!WN(t)}function WN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+_N}function KN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function GN(t){return t.requestStatus===1&&t.requestTime+Iw<Date.now()}/**
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
 */async function ZN(t){const e=t,{installationEntry:n,registrationPromise:s}=await wf(e);return s?s.catch(console.error):Tf(e).catch(console.error),n.fid}/**
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
 */async function YN(t,e=!1){const n=t;return await XN(n),(await Tf(n,e)).token}async function XN(t){const{registrationPromise:e}=await wf(t);e&&await e}/**
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
 */function QN(t){if(!t||!t.options)throw ih("App Configuration");if(!t.name)throw ih("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ih(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ih(t){return Dr.create("missing-app-config-values",{valueName:t})}/**
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
 */const $w="installations",JN="installations-internal",eO=t=>{const e=t.getProvider("app").getImmediate(),n=QN(e),s=er(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},tO=t=>{const e=t.getProvider("app").getImmediate(),n=er(e,$w).getImmediate();return{getId:()=>ZN(n),getToken:r=>YN(n,r)}};function nO(){An(new dn($w,eO,"PUBLIC")),An(new dn(JN,tO,"PRIVATE"))}nO();jt(Ew,vf);jt(Ew,vf,"esm2017");/**
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
 */const Hc="analytics",sO="firebase_id",rO="origin",iO=60*1e3,oO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ef="https://www.googletagmanager.com/gtag/js";/**
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
 */const qt=new $l("@firebase/analytics");/**
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
 */const aO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new jr("analytics","Analytics",aO);/**
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
 */function cO(t){if(!t.startsWith(Ef)){const e=Xt.create("invalid-gtag-resource",{gtagURL:t});return qt.warn(e.message),""}return t}function Bw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function lO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function uO(t,e){const n=lO("firebase-js-sdk-policy",{createScriptURL:cO}),s=document.createElement("script"),r=`${Ef}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function hO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dO(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Bw(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){qt.error(a)}t("config",r,i)}async function fO(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Bw(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){qt.error(i)}}function pO(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await fO(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await dO(t,e,n,s,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){qt.error(a)}}return r}function mO(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=pO(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function gO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ef)&&n.src.includes(t))return n;return null}/**
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
 */const yO=30,vO=1e3;class _O{constructor(e={},n=vO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Vw=new _O;function wO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function TO(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:wO(s)},i=oO.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function EO(t,e=Vw,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Xt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Xt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new CO;return setTimeout(async()=>{a.abort()},n!==void 0?n:iO),jw({appId:s,apiKey:r,measurementId:i},o,a,e)}async function jw(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Vw){var i;const{appId:o,measurementId:a}=t;try{await IO(s,e)}catch(c){if(a)return qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await TO(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!bO(l)){if(r.deleteThrottleMetadata(o),a)return qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?eg(n,r.intervalMillis,yO):eg(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),qt.debug(`Calling attemptFetch again in ${u} millis`),jw(t,h,s,r)}}function IO(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bO(t){if(!(t instanceof fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class CO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function SO(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function AO(){if(D_())try{await P_()}catch(t){return qt.warn(Xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kO(t,e,n,s,r,i,o){var a;const c=EO(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>qt.error(m)),e.push(c);const l=AO().then(m=>{if(m)return s.getId()}),[u,h]=await Promise.all([c,l]);gO(i)||uO(i,u.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[rO]="firebase",f.update=!0,h!=null&&(f[sO]=h),r("config",u.measurementId,f),u.measurementId}/**
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
 */class RO{constructor(e){this.app=e}_delete(){return delete go[this.app.options.appId],Promise.resolve()}}let go={},Ng=[];const Og={};let oh="dataLayer",NO="gtag",xg,qw,Dg=!1;function OO(){const t=[];if(x_()&&t.push("This is a browser extension environment."),jA()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:e});qt.warn(n.message)}}function xO(t,e,n){OO();const s=t.options.appId;if(!s)throw Xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(go[s]!=null)throw Xt.create("already-exists",{id:s});if(!Dg){hO(oh);const{wrappedGtag:i,gtagCore:o}=mO(go,Ng,Og,oh,NO);qw=i,xg=o,Dg=!0}return go[s]=kO(t,Ng,Og,e,xg,oh,n),new RO(t)}function DO(t=Bl()){t=He(t);const e=er(t,Hc);return e.isInitialized()?e.getImmediate():PO(t)}function PO(t,e={}){const n=er(t,Hc);if(n.isInitialized()){const r=n.getImmediate();if(xo(e,n.getOptions()))return r;throw Xt.create("already-initialized")}return n.initialize({options:e})}function MO(t,e,n,s){t=He(t),SO(qw,go[t.app.options.appId],e,n,s).catch(r=>qt.error(r))}const Pg="@firebase/analytics",Mg="0.10.0";function LO(){An(new dn(Hc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return xO(s,r,n)},"PUBLIC")),An(new dn("analytics-internal",t,"PRIVATE")),jt(Pg,Mg),jt(Pg,Mg,"esm2017");function t(e){try{const n=e.getProvider(Hc).getImmediate();return{logEvent:(s,r,i)=>MO(n,s,r,i)}}catch(n){throw Xt.create("interop-component-reg-failed",{reason:n})}}}LO();var UO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,If=If||{},de=UO||self;function zc(){}function Wl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ga(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FO(t){return Object.prototype.hasOwnProperty.call(t,ah)&&t[ah]||(t[ah]=++$O)}var ah="closure_uid_"+(1e9*Math.random()>>>0),$O=0;function BO(t,e,n){return t.call.apply(t.bind,arguments)}function VO(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=BO:St=VO,St.apply(null,arguments)}function ec(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function tr(){this.s=this.s,this.o=this.o}var jO=0;tr.prototype.s=!1;tr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),jO!=0)&&FO(this)};tr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Lg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Wl(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function At(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var qO=function(){if(!de.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{de.addEventListener("test",zc,e),de.removeEventListener("test",zc,e)}catch{}return t}();function Wc(t){return/^[\s\xa0]*$/.test(t)}var Ug=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ch(t,e){return t<e?-1:t>e?1:0}function Kl(){var t=de.navigator;return t&&(t=t.userAgent)?t:""}function Fn(t){return Kl().indexOf(t)!=-1}function Cf(t){return Cf[" "](t),t}Cf[" "]=zc;function zw(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var HO=Fn("Opera"),Ei=Fn("Trident")||Fn("MSIE"),Ww=Fn("Edge"),ed=Ww||Ei,Kw=Fn("Gecko")&&!(Kl().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge"))&&!(Fn("Trident")||Fn("MSIE"))&&!Fn("Edge"),zO=Kl().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge");function Gw(){var t=de.document;return t?t.documentMode:void 0}var Kc;e:{var lh="",uh=function(){var t=Kl();if(Kw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ww)return/Edge\/([\d\.]+)/.exec(t);if(Ei)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zO)return/WebKit\/(\S+)/.exec(t);if(HO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uh&&(lh=uh?uh[1]:""),Ei){var hh=Gw();if(hh!=null&&hh>parseFloat(lh)){Kc=String(hh);break e}}Kc=lh}var WO={};function KO(){return zw(WO,9,function(){let t=0;const e=Ug(String(Kc)).split("."),n=Ug("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ch(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ch(r[2].length==0,i[2].length==0)||ch(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var td;if(de.document&&Ei){var Fg=Gw();td=Fg||parseInt(Kc,10)||void 0}else td=void 0;var GO=td;function Lo(t,e){if(At.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kw){e:{try{Cf(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lo.$.h.call(this)}}mt(Lo,At);var ZO={2:"touch",3:"pen",4:"mouse"};Lo.prototype.h=function(){Lo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ya="closure_listenable_"+(1e6*Math.random()|0),YO=0;function XO(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++YO,this.fa=this.ia=!1}function Gl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Sf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Zw(t){const e={};for(const n in t)e[n]=t[n];return e}const $g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yw(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<$g.length;i++)n=$g[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Zl(t){this.src=t,this.g={},this.h=0}Zl.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=sd(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new XO(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function nd(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Hw(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sd(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Af="closure_lm_"+(1e6*Math.random()|0),dh={};function Xw(t,e,n,s,r){if(s&&s.once)return Jw(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xw(t,e[i],n,s,r);return null}return n=Nf(n),t&&t[ya]?t.O(e,n,ga(s)?!!s.capture:!!s,r):Qw(t,e,n,!1,s,r)}function Qw(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ga(r)?!!r.capture:!!r,a=Rf(t);if(a||(t[Af]=a=new Zl(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=QO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)qO||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(tT(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function QO(){function t(n){return e.call(t.src,t.listener,n)}const e=JO;return t}function Jw(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jw(t,e[i],n,s,r);return null}return n=Nf(n),t&&t[ya]?t.P(e,n,ga(s)?!!s.capture:!!s,r):Qw(t,e,n,!0,s,r)}function eT(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)eT(t,e[i],n,s,r);else s=ga(s)?!!s.capture:!!s,n=Nf(n),t&&t[ya]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=sd(i,n,s,r),-1<n&&(Gl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sd(e,n,s,r)),(n=-1<t?e[t]:null)&&kf(n))}function kf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ya])nd(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tT(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Rf(e))?(nd(n,t),n.h==0&&(n.src=null,e[Af]=null)):Gl(t)}}}function tT(t){return t in dh?dh[t]:dh[t]="on"+t}function JO(t,e){if(t.fa)t=!0;else{e=new Lo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&kf(t),t=n.call(s,e)}return t}function Rf(t){return t=t[Af],t instanceof Zl?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nf(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function pt(){tr.call(this),this.i=new Zl(this),this.S=this,this.J=null}mt(pt,tr);pt.prototype[ya]=!0;pt.prototype.removeEventListener=function(t,e,n,s){eT(this,t,e,n,s)};function wt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new At(e,t);else if(e instanceof At)e.target=e.target||t;else{var r=e;e=new At(s,t),Yw(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=tc(o,s,!0,e)&&r}if(o=e.g=t,r=tc(o,s,!0,e)&&r,r=tc(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=tc(o,s,!1,e)&&r}pt.prototype.N=function(){if(pt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Gl(n[s]);delete t.g[e],t.h--}}this.J=null};pt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};pt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function tc(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&nd(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Of=de.JSON.stringify;function ex(){var t=rT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tx{constructor(){this.h=this.g=null}add(e,n){const s=nT.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var nT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nx,t=>t.reset());class nx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sx(t){de.setTimeout(()=>{throw t},0)}function sT(t,e){rd||rx(),id||(rd(),id=!0),rT.add(t,e)}var rd;function rx(){var t=de.Promise.resolve(void 0);rd=function(){t.then(ix)}}var id=!1,rT=new tx;function ix(){for(var t;t=ex();){try{t.h.call(t.g)}catch(n){sx(n)}var e=nT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}id=!1}function Yl(t,e){pt.call(this),this.h=t||1,this.g=e||de,this.j=St(this.qb,this),this.l=Date.now()}mt(Yl,pt);K=Yl.prototype;K.ga=!1;K.T=null;K.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(xf(this),this.start()))}};K.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}K.N=function(){Yl.$.N.call(this),xf(this),delete this.g};function Df(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:de.setTimeout(t,e||0)}function iT(t){t.g=Df(()=>{t.g=null,t.i&&(t.i=!1,iT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ox extends tr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iT(this)}N(){super.N(),this.g&&(de.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){tr.call(this),this.h=t,this.g={}}mt(Uo,tr);var Bg=[];function oT(t,e,n,s){Array.isArray(n)||(n&&(Bg[0]=n.toString()),n=Bg);for(var r=0;r<n.length;r++){var i=Xw(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function aT(t){Sf(t.g,function(e,n){this.g.hasOwnProperty(n)&&kf(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),aT(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xl(){this.g=!0}Xl.prototype.Ea=function(){this.g=!1};function ax(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function cx(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ri(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ux(t,n)+(s?" "+s:"")})}function lx(t,e){t.info(function(){return"TIMEOUT: "+e})}Xl.prototype.info=function(){};function ux(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Of(n)}catch{return e}}var Hr={},Vg=null;function Ql(){return Vg=Vg||new pt}Hr.Ta="serverreachability";function cT(t){At.call(this,Hr.Ta,t)}mt(cT,At);function Fo(t){const e=Ql();wt(e,new cT(e))}Hr.STAT_EVENT="statevent";function lT(t,e){At.call(this,Hr.STAT_EVENT,t),this.stat=e}mt(lT,At);function Lt(t){const e=Ql();wt(e,new lT(e,t))}Hr.Ua="timingevent";function uT(t,e){At.call(this,Hr.Ua,t),this.size=e}mt(uT,At);function va(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return de.setTimeout(function(){t()},e)}var Jl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Pf(){}Pf.prototype.h=null;function jg(t){return t.h||(t.h=t.i())}function dT(){}var _a={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mf(){At.call(this,"d")}mt(Mf,At);function Lf(){At.call(this,"c")}mt(Lf,At);var od;function eu(){}mt(eu,Pf);eu.prototype.g=function(){return new XMLHttpRequest};eu.prototype.i=function(){return{}};od=new eu;function wa(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Uo(this),this.P=hx,t=ed?125:void 0,this.V=new Yl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new fT}function fT(){this.i=null,this.g="",this.h=!1}var hx=45e3,ad={},Gc={};K=wa.prototype;K.setTimeout=function(t){this.P=t};function cd(t,e,n){t.L=1,t.v=nu(ps(e)),t.s=n,t.S=!0,pT(t,null)}function pT(t,e){t.G=Date.now(),Ta(t),t.A=ps(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),ET(n.i,"t",s),t.C=0,n=t.l.I,t.h=new fT,t.g=qT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ox(St(t.Pa,t,t.g),t.O)),oT(t.U,t.g,"readystatechange",t.nb),e=t.I?Zw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Fo(),ax(t.j,t.u,t.A,t.m,t.W,t.s)}K.nb=function(t){t=t.target;const e=this.M;e&&as(t)==3?e.l():this.Pa(t)};K.Pa=function(t){try{if(t==this.g)e:{const u=as(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ed||this.g&&(this.h.h||this.g.ja()||Wg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Fo(3):Fo(2)),tu(this);var n=this.g.da();this.aa=n;t:if(mT(this)){var s=Wg(this.g);t="";var r=s.length,i=as(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),yo(this);var o="";break t}this.h.i=new de.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cx(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wc(a)){var l=a;break t}}l=null}if(n=l)ri(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ld(this,n);else{this.i=!1,this.o=3,Lt(12),vr(this),yo(this);break e}}this.S?(gT(this,u,o),ed&&this.i&&u==3&&(oT(this.U,this.V,"tick",this.mb),this.V.start())):(ri(this.j,this.m,o,null),ld(this,o)),u==4&&vr(this),this.i&&!this.J&&(u==4?$T(this.l,this):(this.i=!1,Ta(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Lt(12)):(this.o=0,Lt(13)),vr(this),yo(this)}}}catch{}finally{}};function mT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function gT(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=dx(t,n),r==Gc){e==4&&(t.o=4,Lt(14),s=!1),ri(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ad){t.o=4,Lt(15),ri(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ri(t.j,t.m,r,null),ld(t,r);mT(t)&&r!=Gc&&r!=ad&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Lt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qf(e),e.L=!0,Lt(11))):(ri(t.j,t.m,n,"[Invalid Chunked Response]"),vr(t),yo(t))}K.mb=function(){if(this.g){var t=as(this.g),e=this.g.ja();this.C<e.length&&(tu(this),gT(this,t,e),this.i&&t!=4&&Ta(this))}};function dx(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Gc:(n=Number(e.substring(n,s)),isNaN(n)?ad:(s+=1,s+n>e.length?Gc:(e=e.substr(s,n),t.C=s+n,e)))}K.cancel=function(){this.J=!0,vr(this)};function Ta(t){t.Y=Date.now()+t.P,yT(t,t.P)}function yT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=va(St(t.lb,t),e)}function tu(t){t.B&&(de.clearTimeout(t.B),t.B=null)}K.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lx(this.j,this.A),this.L!=2&&(Fo(),Lt(17)),vr(this),this.o=2,yo(this)):yT(this,this.Y-t)};function yo(t){t.l.H==0||t.J||$T(t.l,t)}function vr(t){tu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,xf(t.V),aT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function ld(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ud(n.h,t))){if(!t.K&&ud(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xc(n),iu(n);else break e;jf(n),Lt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=va(St(n.ib,n),6e3));if(1>=CT(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else _r(n,11)}else if((t.K||n.g==t)&&Xc(n),!Wc(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Uf(i,i.h),i.h=null))}if(s.F){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.Da=E,qe(s.G,s.F,E))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=jT(s,s.I?s.oa:null,s.Y),o.K){ST(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(tu(a),Ta(a)),s.g=o}else UT(s);0<n.i.length&&ou(n)}else l[0]!="stop"&&l[0]!="close"||_r(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?_r(n,7):Vf(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}Fo(4)}catch{}}function fx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function px(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=px(t),s=fx(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var _T=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Sr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Sr){this.h=e!==void 0?e:t.h,Zc(this,t.j),this.s=t.s,this.g=t.g,Yc(this,t.m),this.l=t.l,e=t.i;var n=new $o;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qg(this,n),this.o=t.o}else t&&(n=String(t).match(_T))?(this.h=!!e,Zc(this,n[1]||"",!0),this.s=eo(n[2]||""),this.g=eo(n[3]||"",!0),Yc(this,n[4]),this.l=eo(n[5]||"",!0),qg(this,n[6]||"",!0),this.o=eo(n[7]||"")):(this.h=!!e,this.i=new $o(null,this.h))}Sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(to(e,Hg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(to(e,Hg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(to(n,n.charAt(0)=="/"?vx:yx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",to(n,wx)),t.join("")};function ps(t){return new Sr(t)}function Zc(t,e,n){t.j=n?eo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qg(t,e,n){e instanceof $o?(t.i=e,Tx(t.i,t.h)):(n||(e=to(e,_x)),t.i=new $o(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function nu(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function to(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hg=/[#\/\?@]/g,yx=/[#\?:]/g,vx=/[#\?]/g,_x=/[#\?@]/g,wx=/#/g;function $o(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nr(t){t.g||(t.g=new Map,t.h=0,t.i&&mx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=$o.prototype;K.add=function(t,e){nr(this),this.i=null,t=Ui(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wT(t,e){nr(t),e=Ui(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function TT(t,e){return nr(t),e=Ui(t,e),t.g.has(e)}K.forEach=function(t,e){nr(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};K.sa=function(){nr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};K.Z=function(t){nr(this);let e=[];if(typeof t=="string")TT(this,t)&&(e=e.concat(this.g.get(Ui(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return nr(this),this.i=null,t=Ui(this,t),TT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ET(t,e,n){wT(t,e),0<n.length&&(t.i=null,t.g.set(Ui(t,e),bf(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ui(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Tx(t,e){e&&!t.j&&(nr(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(wT(this,s),ET(this,r,n))},t)),t.j=e}var Ex=class{constructor(t,e){this.h=t,this.g=e}};function IT(t){this.l=t||Ix,de.PerformanceNavigationTiming?(t=de.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(de.g&&de.g.Ka&&de.g.Ka()&&de.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ix=10;function bT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function CT(t){return t.h?1:t.g?t.g.size:0}function ud(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Uf(t,e){t.g?t.g.add(e):t.h=e}function ST(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}IT.prototype.cancel=function(){if(this.i=AT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function AT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bf(t.i)}function Ff(){}Ff.prototype.stringify=function(t){return de.JSON.stringify(t,void 0)};Ff.prototype.parse=function(t){return de.JSON.parse(t,void 0)};function bx(){this.g=new Ff}function Cx(t,e,n){const s=n||"";try{vT(t,function(r,i){let o=r;ga(r)&&(o=Of(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Sx(t,e){const n=new Xl;if(de.Image){const s=new Image;s.onload=ec(nc,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ec(nc,n,s,"TestLoadImage: error",!1,e),s.onabort=ec(nc,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ec(nc,n,s,"TestLoadImage: timeout",!1,e),de.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function nc(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ea(t){this.l=t.fc||null,this.j=t.ob||!1}mt(Ea,Pf);Ea.prototype.g=function(){return new su(this.l,this.j)};Ea.prototype.i=function(t){return function(){return t}}({});function su(t,e){pt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$f,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(su,pt);var $f=0;K=su.prototype;K.open=function(t,e){if(this.readyState!=$f)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bo(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||de).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ia(this)),this.readyState=$f};K.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bo(this)),this.g&&(this.readyState=3,Bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof de.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function kT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}K.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ia(this):Bo(this),this.readyState==3&&kT(this)}};K.Za=function(t){this.g&&(this.response=this.responseText=t,Ia(this))};K.Ya=function(t){this.g&&(this.response=t,Ia(this))};K.ka=function(){this.g&&Ia(this)};function Ia(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bo(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ax=de.JSON.parse;function Ye(t){pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=RT,this.L=this.M=!1}mt(Ye,pt);var RT="",kx=/^https?$/i,Rx=["POST","PUT"];K=Ye.prototype;K.Oa=function(t){this.M=t};K.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():od.g(),this.C=this.u?jg(this.u):jg(od),this.g.onreadystatechange=St(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){zg(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=de.FormData&&t instanceof de.FormData,!(0<=Hw(Rx,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xT(this),0<this.B&&((this.L=Nx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.ua,this)):this.A=Df(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zg(this,i)}};function Nx(t){return Ei&&KO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.ua=function(){typeof If<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function zg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,NT(t),ru(t)}function NT(t){t.F||(t.F=!0,wt(t,"complete"),wt(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),ru(this))};K.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ru(this,!0)),Ye.$.N.call(this)};K.La=function(){this.s||(this.G||this.v||this.l?OT(this):this.kb())};K.kb=function(){OT(this)};function OT(t){if(t.h&&typeof If<"u"&&(!t.C[1]||as(t)!=4||t.da()!=2)){if(t.v&&as(t)==4)Df(t.La,0,t);else if(wt(t,"readystatechange"),as(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(_T)[1]||null;if(!r&&de.self&&de.self.location){var i=de.self.location.protocol;r=i.substr(0,i.length-1)}s=!kx.test(r?r.toLowerCase():"")}n=s}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var o=2<as(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",NT(t)}}finally{ru(t)}}}}function ru(t,e){if(t.g){xT(t);const n=t.g,s=t.C[0]?zc:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=s}catch{}}}function xT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(de.clearTimeout(t.A),t.A=null)}function as(t){return t.g?t.g.readyState:0}K.da=function(){try{return 2<as(this)?this.g.status:-1}catch{return-1}};K.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ax(e)}};function Wg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case RT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ia=function(){return this.m};K.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function DT(t){let e="";return Sf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Bf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=DT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):qe(t,e,n))}function Gi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function PT(t){this.Ga=0,this.i=[],this.j=new Xl,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Gi("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Gi("baseRetryDelayMs",5e3,t),this.hb=Gi("retryDelaySeedMs",1e4,t),this.eb=Gi("forwardChannelMaxRetries",2,t),this.xa=Gi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new IT(t&&t.concurrentRequestLimit),this.Ja=new bx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}K=PT.prototype;K.qa=8;K.H=1;function Vf(t){if(MT(t),t.H==3){var e=t.W++,n=ps(t.G);qe(n,"SID",t.J),qe(n,"RID",e),qe(n,"TYPE","terminate"),ba(t,n),e=new wa(t,t.j,e,void 0),e.L=2,e.v=nu(ps(n)),n=!1,de.navigator&&de.navigator.sendBeacon&&(n=de.navigator.sendBeacon(e.v.toString(),"")),!n&&de.Image&&(new Image().src=e.v,n=!0),n||(e.g=qT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ta(e)}VT(t)}function iu(t){t.g&&(qf(t),t.g.cancel(),t.g=null)}function MT(t){iu(t),t.u&&(de.clearTimeout(t.u),t.u=null),Xc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&de.clearTimeout(t.m),t.m=null)}function ou(t){bT(t.h)||t.m||(t.m=!0,sT(t.Na,t),t.C=0)}function Ox(t,e){return CT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=va(St(t.Na,t,e),BT(t,t.C)),t.C++,!0)}K.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new wa(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Zw(i),Yw(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=LT(this,r,e),n=ps(this.G),qe(n,"RID",t),qe(n,"CVER",22),this.F&&qe(n,"X-HTTP-Session-Id",this.F),ba(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(DT(i)))+"&"+e:this.o&&Bf(n,this.o,i)),Uf(this.h,r),this.bb&&qe(n,"TYPE","init"),this.P?(qe(n,"$req",e),qe(n,"SID","null"),r.ba=!0,cd(r,n,null)):cd(r,n,e),this.H=2}}else this.H==3&&(t?Kg(this,t):this.i.length==0||bT(this.h)||Kg(this))};function Kg(t,e){var n;e?n=e.m:n=t.W++;const s=ps(t.G);qe(s,"SID",t.J),qe(s,"RID",n),qe(s,"AID",t.V),ba(t,s),t.o&&t.s&&Bf(s,t.o,t.s),n=new wa(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=LT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Uf(t.h,n),cd(n,s,e)}function ba(t,e){t.ma&&Sf(t.ma,function(n,s){qe(e,s,n)}),t.l&&vT({},function(n,s){qe(e,s,n)})}function LT(t,e,n){n=Math.min(t.i.length,n);var s=t.l?St(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Cx(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function UT(t){t.g||t.u||(t.ba=1,sT(t.Ma,t),t.A=0)}function jf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=va(St(t.Ma,t),BT(t,t.A)),t.A++,!0)}K.Ma=function(){if(this.u=null,FT(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=va(St(this.jb,this),t)}};K.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Lt(10),iu(this),FT(this))};function qf(t){t.B!=null&&(de.clearTimeout(t.B),t.B=null)}function FT(t){t.g=new wa(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ps(t.wa);qe(e,"RID","rpc"),qe(e,"SID",t.J),qe(e,"CI",t.M?"0":"1"),qe(e,"AID",t.V),qe(e,"TYPE","xmlhttp"),ba(t,e),t.o&&t.s&&Bf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=nu(ps(e)),n.s=null,n.S=!0,pT(n,t)}K.ib=function(){this.v!=null&&(this.v=null,iu(this),jf(this),Lt(19))};function Xc(t){t.v!=null&&(de.clearTimeout(t.v),t.v=null)}function $T(t,e){var n=null;if(t.g==e){Xc(t),qf(t),t.g=null;var s=2}else if(ud(t.h,e))n=e.F,ST(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ql(),wt(s,new uT(s,n)),ou(t)}else UT(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&Ox(t,e)||s==2&&jf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:_r(t,5);break;case 4:_r(t,10);break;case 3:_r(t,6);break;default:_r(t,2)}}}function BT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function _r(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=St(t.pb,t);n||(n=new Sr("//www.google.com/images/cleardot.gif"),de.location&&de.location.protocol=="http"||Zc(n,"https"),nu(n)),Sx(n.toString(),s)}else Lt(2);t.H=0,t.l&&t.l.za(e),VT(t),MT(t)}K.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function VT(t){if(t.H=0,t.pa=[],t.l){const e=AT(t.h);(e.length!=0||t.i.length!=0)&&(Lg(t.pa,e),Lg(t.pa,t.i),t.h.i.length=0,bf(t.i),t.i.length=0),t.l.ya()}}function jT(t,e,n){var s=n instanceof Sr?ps(n):new Sr(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Yc(s,s.m);else{var r=de.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Sr(null,void 0);s&&Zc(i,s),e&&(i.g=e),r&&Yc(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&qe(s,n,e),qe(s,"VER",t.qa),ba(t,s),s}function qT(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ye(new Ea({ob:!0})):new Ye(t.va),e.Oa(t.I),e}function HT(){}K=HT.prototype;K.Ba=function(){};K.Aa=function(){};K.za=function(){};K.ya=function(){};K.Va=function(){};function Qc(){if(Ei&&!(10<=Number(GO)))throw Error("Environmental error: no available transport.")}Qc.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){pt.call(this),this.g=new PT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fi(this)}mt(Qt,pt);Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Lt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=jT(t,null,t.Y),ou(t)};Qt.prototype.close=function(){Vf(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Of(t),t=n);e.i.push(new Ex(e.fb++,t)),e.H==3&&ou(e)};Qt.prototype.N=function(){this.g.l=null,delete this.j,Vf(this.g),delete this.g,Qt.$.N.call(this)};function zT(t){Mf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(zT,Mf);function WT(){Lf.call(this),this.status=1}mt(WT,Lf);function Fi(t){this.g=t}mt(Fi,HT);Fi.prototype.Ba=function(){wt(this.g,"a")};Fi.prototype.Aa=function(t){wt(this.g,new zT(t))};Fi.prototype.za=function(t){wt(this.g,new WT)};Fi.prototype.ya=function(){wt(this.g,"b")};function xx(){this.blockSize=-1}function kn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}mt(kn,xx);kn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ph(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}kn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)ph(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){ph(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){ph(this,s),r=0;break}}this.h=r,this.i+=e};kn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ue(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var Dx={};function Hf(t){return-128<=t&&128>t?zw(Dx,t,function(e){return new Ue([e|0],0>e?-1:0)}):new Ue([t|0],0>t?-1:0)}function Bn(t){if(isNaN(t)||!isFinite(t))return hi;if(0>t)return _t(Bn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=hd;return new Ue(e,0)}function KT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return _t(KT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bn(Math.pow(e,8)),s=hi,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Bn(Math.pow(e,i)),s=s.R(i).add(Bn(o))):(s=s.R(n),s=s.add(Bn(o)))}return s}var hd=4294967296,hi=Hf(0),dd=Hf(1),Gg=Hf(16777216);K=Ue.prototype;K.ea=function(){if(on(this))return-_t(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:hd+s)*e,e*=hd}return t};K.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cs(this))return"0";if(on(this))return"-"+_t(this).toString(t);for(var e=Bn(Math.pow(t,6)),n=this,s="";;){var r=el(n,e).g;n=Jc(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,cs(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};K.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cs(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function on(t){return t.h==-1}K.X=function(t){return t=Jc(this,t),on(t)?-1:cs(t)?0:1};function _t(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ue(n,~t.h).add(dd)}K.abs=function(){return on(this)?_t(this):this};K.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Ue(n,n[n.length-1]&-2147483648?-1:0)};function Jc(t,e){return t.add(_t(e))}K.R=function(t){if(cs(this)||cs(t))return hi;if(on(this))return on(t)?_t(this).R(_t(t)):_t(_t(this).R(t));if(on(t))return _t(this.R(_t(t)));if(0>this.X(Gg)&&0>t.X(Gg))return Bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,sc(n,2*s+2*r),n[2*s+2*r+1]+=i*c,sc(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,sc(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,sc(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ue(n,0)};function sc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Zi(t,e){this.g=t,this.h=e}function el(t,e){if(cs(e))throw Error("division by zero");if(cs(t))return new Zi(hi,hi);if(on(t))return e=el(_t(t),e),new Zi(_t(e.g),_t(e.h));if(on(e))return e=el(t,_t(e)),new Zi(_t(e.g),e.h);if(30<t.g.length){if(on(t)||on(e))throw Error("slowDivide_ only works with positive integers.");for(var n=dd,s=e;0>=s.X(t);)n=Zg(n),s=Zg(s);var r=Qr(n,1),i=Qr(s,1);for(s=Qr(s,2),n=Qr(n,2);!cs(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Qr(s,1),n=Qr(n,1)}return e=Jc(t,r.R(e)),new Zi(r,e)}for(r=hi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Bn(n),o=i.R(e);on(o)||0<o.X(t);)n-=s,i=Bn(n),o=i.R(e);cs(i)&&(i=dd),r=r.add(i),t=Jc(t,o)}return new Zi(r,t)}K.gb=function(t){return el(this,t).h};K.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ue(n,this.h&t.h)};K.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ue(n,this.h|t.h)};K.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ue(n,this.h^t.h)};function Zg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ue(n,t.h)}function Qr(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ue(r,t.h)}Qc.prototype.createWebChannel=Qc.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;Jl.NO_ERROR=0;Jl.TIMEOUT=8;Jl.HTTP_ERROR=6;hT.COMPLETE="complete";dT.EventType=_a;_a.OPEN="a";_a.CLOSE="b";_a.ERROR="c";_a.MESSAGE="d";pt.prototype.listen=pt.prototype.O;Ye.prototype.listenOnce=Ye.prototype.P;Ye.prototype.getLastError=Ye.prototype.Sa;Ye.prototype.getLastErrorCode=Ye.prototype.Ia;Ye.prototype.getStatus=Ye.prototype.da;Ye.prototype.getResponseJson=Ye.prototype.Wa;Ye.prototype.getResponseText=Ye.prototype.ja;Ye.prototype.send=Ye.prototype.ha;Ye.prototype.setWithCredentials=Ye.prototype.Oa;kn.prototype.digest=kn.prototype.l;kn.prototype.reset=kn.prototype.reset;kn.prototype.update=kn.prototype.j;Ue.prototype.add=Ue.prototype.add;Ue.prototype.multiply=Ue.prototype.R;Ue.prototype.modulo=Ue.prototype.gb;Ue.prototype.compare=Ue.prototype.X;Ue.prototype.toNumber=Ue.prototype.ea;Ue.prototype.toString=Ue.prototype.toString;Ue.prototype.getBits=Ue.prototype.D;Ue.fromNumber=Bn;Ue.fromString=KT;var Px=function(){return new Qc},Mx=function(){return Ql()},mh=Jl,Lx=hT,Ux=Hr,Yg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Fx=Ea,rc=dT,$x=Ye,Bx=kn,di=Ue;const Xg="@firebase/firestore";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let $i="9.22.0";/**
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
 */const Mr=new $l("@firebase/firestore");function Qg(){return Mr.logLevel}function J(t,...e){if(Mr.logLevel<=Oe.DEBUG){const n=e.map(zf);Mr.debug(`Firestore (${$i}): ${t}`,...n)}}function ms(t,...e){if(Mr.logLevel<=Oe.ERROR){const n=e.map(zf);Mr.error(`Firestore (${$i}): ${t}`,...n)}}function Ii(t,...e){if(Mr.logLevel<=Oe.WARN){const n=e.map(zf);Mr.warn(`Firestore (${$i}): ${t}`,...n)}}function zf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: `+t;throw ms(e),new Error(e)}function je(t,e){t||he()}function ye(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ls{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class GT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class jx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let qx=class{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ls,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ls)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string"),new GT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new Et(e)}};class Hx{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class zx{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Hx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(je(typeof n.token=="string"),this.T=n.token,new Wx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Gx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ZT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Gx(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Pe(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ct(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new ct(0,0))}static max(){return new fe(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vo{constructor(e,n,s){n===void 0?n=0:n>e.length&&he(),s===void 0?s=e.length-n:s>e.length-n&&he(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Vo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Vo{construct(e,n,s){return new Be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const Zx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Vo{construct(e,n,s){return new Ct(e,n,s)}static isValidIdentifier(e){return Zx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Be.fromString(e))}static fromName(e){return new ne(Be.fromString(e).popFirst(5))}static empty(){return new ne(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Be(e.slice()))}}function Yx(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=fe.fromTimestamp(s===1e9?new ct(n+1,0):new ct(n,s));return new Ks(r,ne.empty(),e)}function Xx(t){return new Ks(t.readTime,t.key,-1)}class Ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ks(fe.min(),ne.empty(),-1)}static max(){return new Ks(fe.max(),ne.empty(),-1)}}function Qx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Jx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ca(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Jx)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,s)=>{n(e)})}static reject(e){return new L((n,s)=>{s(e)})}static waitFor(e){return new L((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=L.resolve(!1);for(const s of e)n=n.next(r=>r?L.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new L((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new L((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Wf.ct=-1;function au(t){return t==null}function tl(t){return t===0&&1/t==-1/0}function tD(t){return typeof t=="number"&&Number.isInteger(t)&&!tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}}class ic{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??yt.RED,this.left=r??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new yt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(t,e,n,s,r){return this}insert(t,e,n){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new kt(Ct.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class XT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new XT("Invalid base64 string: "+r):r}}(e);return new Nt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const nD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gs(t){if(je(!!t),typeof t=="string"){let e=0;const n=nD.exec(t);if(je(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
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
 */function cu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kf(t){const e=t.mapValue.fields.__previous_value__;return cu(e)?Kf(e):e}function jo(t){const e=Gs(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class sD{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const oc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cu(t)?4:rD(t)?9007199254740991:10:he()}function Gn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Gs(s.timestampValue),o=Gs(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Lr(s.bytesValue).isEqual(Lr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return rt(s.geoPointValue.latitude)===rt(r.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return rt(s.integerValue)===rt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=rt(s.doubleValue),o=rt(r.doubleValue);return i===o?tl(i)===tl(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Jg(i)!==Jg(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Gn(i[a],o[a])))return!1;return!0}(t,e);default:return he()}}function Ho(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function Ci(t,e){if(t===e)return 0;const n=Ur(t),s=Ur(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=rt(r.integerValue||r.doubleValue),a=rt(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ty(t.timestampValue,e.timestampValue);case 4:return ty(jo(t),jo(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Lr(r),a=Lr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Pe(o[c],a[c]);if(l!==0)return l}return Pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Pe(rt(r.latitude),rt(i.latitude));return o!==0?o:Pe(rt(r.longitude),rt(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ci(o[c],a[c]);if(l)return l}return Pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===oc.mapValue&&i===oc.mapValue)return 0;if(r===oc.mapValue)return 1;if(i===oc.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=Pe(a[u],l[u]);if(h!==0)return h;const f=Ci(o[a[u]],c[l[u]]);if(f!==0)return f}return Pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw he()}}function ty(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Gs(t),s=Gs(e),r=Pe(n.seconds,s.seconds);return r!==0?r:Pe(n.nanos,s.nanos)}function Si(t){return fd(t)}function fd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Gs(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Lr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ne.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=fd(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${fd(s.fields[a])}`;return i+"}"}(t.mapValue):he();var e,n}function nl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pd(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function ny(t){return!!t&&"nullValue"in t}function sy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tc(t){return!!t&&"mapValue"in t}function vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=vo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Ct.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=vo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Tc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){zr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Vt(vo(this.value))}}function QT(t){const e=[];return zr(t.fields,(n,s)=>{const r=new Ct([n]);if(Tc(s)){const i=QT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Zt(e)}/**
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
 */class It{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new It(e,0,fe.min(),fe.min(),fe.min(),Vt.empty(),0)}static newFoundDocument(e,n,s,r){return new It(e,1,n,fe.min(),s,r,0)}static newNoDocument(e,n){return new It(e,2,n,fe.min(),fe.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,fe.min(),fe.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ai{constructor(e,n){this.position=e,this.inclusive=n}}function ry(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ne.comparator(ne.fromName(o.referenceValue),n.key):s=Ci(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function iy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fi{constructor(e,n="asc"){this.field=e,this.dir=n}}function iD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class JT{}class it extends JT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new aD(e,n,s):n==="array-contains"?new uD(e,s):n==="in"?new hD(e,s):n==="not-in"?new dD(e,s):n==="array-contains-any"?new fD(e,s):new it(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new cD(e,s):new lD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ci(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rn extends JT{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Rn(e,n)}matches(e){return e0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function e0(t){return t.op==="and"}function t0(t){return oD(t)&&e0(t)}function oD(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function md(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(t0(t))return t.filters.map(e=>md(e)).join(",");{const e=t.filters.map(n=>md(n)).join(",");return`${t.op}(${e})`}}function n0(t,e){return t instanceof it?function(n,s){return s instanceof it&&n.op===s.op&&n.field.isEqual(s.field)&&Gn(n.value,s.value)}(t,e):t instanceof Rn?function(n,s){return s instanceof Rn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&n0(i,s.filters[o]),!0):!1}(t,e):void he()}function s0(t){return t instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Si(e.value)}`}(t):t instanceof Rn?function(e){return e.op.toString()+" {"+e.getFilters().map(s0).join(" ,")+"}"}(t):"Filter"}class aD extends it{constructor(e,n,s){super(e,n,s),this.key=ne.fromName(s.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class cD extends it{constructor(e,n){super(e,"in",n),this.keys=r0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lD extends it{constructor(e,n){super(e,"not-in",n),this.keys=r0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function r0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ne.fromName(s.referenceValue))}class uD extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&Ho(n.arrayValue,this.value)}}class hD extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ho(this.value.arrayValue,n)}}class dD extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ho(this.value.arrayValue,n)}}class fD extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ho(this.value.arrayValue,s))}}/**
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
 */class pD{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function oy(t,e=null,n=[],s=[],r=null,i=null,o=null){return new pD(t,e,n,s,r,i,o)}function Zf(t){const e=ye(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>md(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Si(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Si(s)).join(",")),e.dt=n}return e.dt}function Yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!n0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!iy(t.startAt,e.startAt)&&iy(t.endAt,e.endAt)}function gd(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class sr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function mD(t,e,n,s,r,i,o,a){return new sr(t,e,n,s,r,i,o,a)}function Xf(t){return new sr(t)}function ay(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Jf(t){return t.collectionGroup!==null}function Ar(t){const e=ye(t);if(e.wt===null){e.wt=[];const n=lu(e),s=Qf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new fi(n)),e.wt.push(new fi(Ct.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new fi(Ct.keyField(),i))}}}return e.wt}function gs(t){const e=ye(t);if(!e._t)if(e.limitType==="F")e._t=oy(e.path,e.collectionGroup,Ar(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ar(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new fi(i.field,o))}const s=e.endAt?new Ai(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ai(e.startAt.position,e.startAt.inclusive):null;e._t=oy(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function yd(t,e){e.getFirstInequalityField(),lu(t);const n=t.filters.concat([e]);return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sl(t,e,n){return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uu(t,e){return Yf(gs(t),gs(e))&&t.limitType===e.limitType}function i0(t){return`${Zf(gs(t))}|lt:${t.limitType}`}function vd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>s0(s)).join(", ")}]`),au(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Si(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Si(s)).join(",")),`Target(${n})`}(gs(t))}; limitType=${t.limitType})`}function hu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):ne.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Ar(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ry(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ar(n),s)||n.endAt&&!function(r,i,o){const a=ry(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ar(n),s))}(t,e)}function gD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function o0(t){return(e,n)=>{let s=!1;for(const r of Ar(t)){const i=yD(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function yD(t,e,n){const s=t.field.isKeyField()?ne.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ci(a,c):he()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return he()}}/**
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
 */class Bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return YT(this.inner)}size(){return this.innerSize}}/**
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
 */const vD=new Ge(ne.comparator);function ys(){return vD}const a0=new Ge(ne.comparator);function no(...t){let e=a0;for(const n of t)e=e.insert(n.key,n);return e}function c0(t){let e=a0;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function wr(){return _o()}function l0(){return _o()}function _o(){return new Bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const _D=new Ge(ne.comparator),wD=new kt(ne.comparator);function be(...t){let e=wD;for(const n of t)e=e.add(n);return e}const TD=new kt(Pe);function ED(){return TD}/**
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
 */function u0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tl(e)?"-0":e}}function h0(t){return{integerValue:""+t}}function ID(t,e){return tD(e)?h0(e):u0(t,e)}/**
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
 */class du{constructor(){this._=void 0}}function bD(t,e,n){return t instanceof rl?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&cu(r)&&(r=Kf(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof zo?f0(t,e):t instanceof Wo?p0(t,e):function(s,r){const i=d0(s,r),o=cy(i)+cy(s.gt);return pd(i)&&pd(s.gt)?h0(o):u0(s.serializer,o)}(t,e)}function CD(t,e,n){return t instanceof zo?f0(t,e):t instanceof Wo?p0(t,e):n}function d0(t,e){return t instanceof il?pd(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class rl extends du{}class zo extends du{constructor(e){super(),this.elements=e}}function f0(t,e){const n=m0(e);for(const s of t.elements)n.some(r=>Gn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Wo extends du{constructor(e){super(),this.elements=e}}function p0(t,e){let n=m0(e);for(const s of t.elements)n=n.filter(r=>!Gn(r,s));return{arrayValue:{values:n}}}class il extends du{constructor(e,n){super(),this.serializer=e,this.gt=n}}function cy(t){return rt(t.integerValue||t.doubleValue)}function m0(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function SD(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof zo&&s instanceof zo||n instanceof Wo&&s instanceof Wo?bi(n.elements,s.elements,Gn):n instanceof il&&s instanceof il?Gn(n.gt,s.gt):n instanceof rl&&s instanceof rl}(t.transform,e.transform)}class AD{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fu{}function g0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ep(t.key,hn.none()):new Aa(t.key,t.data,hn.none());{const n=t.data,s=Vt.empty();let r=new kt(Ct.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rr(t.key,s,new Zt(r.toArray()),hn.none())}}function kD(t,e,n){t instanceof Aa?function(s,r,i){const o=s.value.clone(),a=uy(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(s,r,i){if(!Ec(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=uy(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(y0(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,s){return t instanceof Aa?function(r,i,o,a){if(!Ec(r.precondition,i))return o;const c=r.value.clone(),l=hy(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof rr?function(r,i,o,a){if(!Ec(r.precondition,i))return o;const c=hy(r.fieldTransforms,a,i),l=i.data;return l.setAll(y0(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ec(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function RD(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=d0(s.transform,r||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(s.field,i))}return n||null}function ly(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&bi(n,s,(r,i)=>SD(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends fu{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rr extends fu{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function y0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function uy(t,e,n){const s=new Map;je(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,CD(o,a,n[r]))}return s}function hy(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,bD(i,o,e))}return s}class ep extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ND extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OD{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kD(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=wo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=wo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=l0();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=g0(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,s)=>ly(n,s))&&bi(this.baseMutations,e.baseMutations,(n,s)=>ly(n,s))}}class tp{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){je(e.mutations.length===s.length);let r=_D;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new tp(e,n,s,r)}}/**
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
 */class xD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,ke;function PD(t){switch(t){default:return he();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function v0(t){if(t===void 0)return ms("GRPC error has no .code"),A.UNKNOWN;switch(t){case st.OK:return A.OK;case st.CANCELLED:return A.CANCELLED;case st.UNKNOWN:return A.UNKNOWN;case st.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case st.INTERNAL:return A.INTERNAL;case st.UNAVAILABLE:return A.UNAVAILABLE;case st.UNAUTHENTICATED:return A.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case st.NOT_FOUND:return A.NOT_FOUND;case st.ALREADY_EXISTS:return A.ALREADY_EXISTS;case st.PERMISSION_DENIED:return A.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case st.ABORTED:return A.ABORTED;case st.OUT_OF_RANGE:return A.OUT_OF_RANGE;case st.UNIMPLEMENTED:return A.UNIMPLEMENTED;case st.DATA_LOSS:return A.DATA_LOSS;default:return he()}}(ke=st||(st={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class np{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ac}static getOrCreateInstance(){return ac===null&&(ac=new np),ac}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ac=null;/**
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
 */function MD(){return new TextEncoder}/**
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
 */const LD=new di([4294967295,4294967295],0);function dy(t){const e=MD().encode(t),n=new Bx;return n.update(e),new Uint8Array(n.digest())}function fy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new di([n,s],0),new di([r,i],0)]}class sp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(s<0)throw new so(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=di.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(di.fromNumber(s)));return r.compare(LD)===1&&(r=new di([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=dy(e),[s,r]=fy(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new sp(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=dy(e),[s,r]=fy(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new pu(fe.min(),r,new Ge(Pe),ys(),be())}}class ka{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ka(s,n,be(),be(),be())}}/**
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
 */class Ic{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class _0{constructor(e,n){this.targetId=e,this.Vt=n}}class w0{constructor(e,n,s=Nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class py{constructor(){this.St=0,this.Dt=gy(),this.Ct=Nt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=be(),n=be(),s=be();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:he()}}),new ka(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=gy()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class UD{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ys(),this.zt=my(),this.Wt=new Ge(Pe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(gd(o))if(r===0){const a=new ne(o.path);this.Yt(s,a,It.newNoDocument(a,fe.min()))}else je(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=np.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,m,w,E,S,D;const R={localCacheCount:u,existenceFilterCount:h.count},j=h.unchangedNames;return j&&(R.bloomFilter={applied:l===0,hashCount:(f=j==null?void 0:j.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(E=(w=(m=j==null?void 0:j.bits)===null||m===void 0?void 0:m.bitmap)===null||w===void 0?void 0:w.length)!==null&&E!==void 0?E:0,padding:(D=(S=j==null?void 0:j.bits)===null||S===void 0?void 0:S.padding)!==null&&D!==void 0?D:0}),R}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=Lr(i).toUint8Array()}catch(u){if(u instanceof XT)return Ii("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new sp(c,o,a)}catch(u){return Ii(u instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&gd(a.target)){const c=new ne(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,It.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=be();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new pu(e,n,this.Wt,this.jt,s);return this.jt=ys(),this.zt=my(),this.Wt=new Ge(Pe),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new py,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new kt(Pe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new py),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function my(){return new Ge(ne.comparator)}function gy(){return new Ge(ne.comparator)}const FD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$D=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BD=(()=>({and:"AND",or:"OR"}))();class VD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _d(t,e){return t.useProto3Json||au(e)?e:{value:e}}function ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jD(t,e){return ol(t,e.toTimestamp())}function Hn(t){return je(!!t),fe.fromTimestamp(function(e){const n=Gs(e);return new ct(n.seconds,n.nanos)}(t))}function rp(t,e){return function(n){return new Be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function E0(t){const e=Be.fromString(t);return je(S0(e)),e}function wd(t,e){return rp(t.databaseId,e.path)}function gh(t,e){const n=E0(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(I0(n))}function Td(t,e){return rp(t.databaseId,e)}function qD(t){const e=E0(t);return e.length===4?Be.emptyPath():I0(e)}function Ed(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function I0(t){return je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yy(t,e,n){return{name:wd(t,e),fields:n.value.mapValue.fields}}function HD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(je(l===void 0||typeof l=="string"),Nt.fromBase64String(l||"")):(je(l===void 0||l instanceof Uint8Array),Nt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:v0(c.code);return new q(l,c.message||"")}(o);n=new w0(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=gh(t,s.document.name),i=Hn(s.document.updateTime),o=s.document.createTime?Hn(s.document.createTime):fe.min(),a=new Vt({mapValue:{fields:s.document.fields}}),c=It.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ic(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=gh(t,s.document),i=s.readTime?Hn(s.readTime):fe.min(),o=It.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=gh(t,s.document),i=s.removedTargetIds||[];n=new Ic([],i,r,null)}else{if(!("filter"in e))return he();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new DD(r,i),a=s.targetId;n=new _0(a,o)}}return n}function zD(t,e){let n;if(e instanceof Aa)n={update:yy(t,e.key,e.value)};else if(e instanceof ep)n={delete:wd(t,e.key)};else if(e instanceof rr)n={update:yy(t,e.key,e.data),updateMask:eP(e.fieldMask)};else{if(!(e instanceof ND))return he();n={verify:wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof rl)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zo)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Wo)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof il)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw he()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:jD(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:he()}(t,e.precondition)),n}function WD(t,e){return t&&t.length>0?(je(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Hn(s.updateTime):Hn(r);return i.isEqual(fe.min())&&(i=Hn(r)),new AD(i,s.transformResults||[])}(n,e))):[]}function KD(t,e){return{documents:[Td(t,e.path)]}}function GD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Td(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Td(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return C0(Rn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ei(u.field),direction:XD(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=_d(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ZD(t){let e=qD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){je(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=b0(u);return h instanceof Rn&&t0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new fi(ti(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,au(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ai(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ai(f,h)}(n.endAt)),mD(e,r,o,i,a,"F",c,l)}function YD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function b0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ti(e.unaryFilter.field);return it.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ti(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ti(e.unaryFilter.field);return it.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ti(e.unaryFilter.field);return it.create(i,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(e){return it.create(ti(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rn.create(e.compositeFilter.filters.map(n=>b0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return he()}}(e.compositeFilter.op))}(t):he()}function XD(t){return FD[t]}function QD(t){return $D[t]}function JD(t){return BD[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return Ct.fromServerFormat(t.fieldPath)}function C0(t){return t instanceof it?function(e){if(e.op==="=="){if(sy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NAN"}};if(ny(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NOT_NAN"}};if(ny(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(e.field),op:QD(e.op),value:e.value}}}(t):t instanceof Rn?function(e){const n=e.getFilters().map(s=>C0(s));return n.length===1?n[0]:{compositeFilter:{op:JD(e.op),filters:n}}}(t):he()}function eP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function S0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ls{constructor(e,n,s,r,i=fe.min(),o=fe.min(),a=Nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tP{constructor(e){this.fe=e}}function nP(t){const e=ZD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sl(e,e.limit,"L"):e}/**
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
 */class sP{constructor(){this.rn=new rP}addToCollectionParentIndex(e,n){return this.rn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Ks.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Ks.min())}updateCollectionGroup(e,n,s){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class rP{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new kt(Be.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new kt(Be.comparator)).toArray()}}/**
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
 */class ki{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ki(0)}static Mn(){return new ki(-1)}}/**
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
 */class iP{constructor(){this.changes=new Bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?L.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class aP{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&wo(s.mutation,r,Zt.empty(),ct.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,be()).next(()=>s))}getLocalViewOfDocuments(e,n,s=be()){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=no();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,be()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=ys();const o=_o(),a=_o();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof rr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),wo(u.mutation,l,u.mutation.getFieldMask(),ct.now())):o.set(l.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new oP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=_o();let r=new Ge((o,a)=>o-a),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Zt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||be()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=l0();u.forEach(f=>{if(!i.has(f)){const m=g0(n.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return L.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return ne.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):L.resolve(wr());let a=-1,c=i;return o.next(l=>L.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,be())).next(u=>({batchId:a,changes:c0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(s=>{let r=no();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=no();return this.indexManager.getCollectionParents(e,r).next(o=>L.forEach(o,a=>{const c=function(l,u){return new sr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,It.newInvalidDocument(l)))});let o=no();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&wo(l.mutation,c,Zt.empty(),ct.now()),hu(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class cP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return L.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Hn(s.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:nP(s.bundledQuery),readTime:Hn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class lP{constructor(){this.overlays=new Ge(ne.comparator),this.ls=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const s=wr();return L.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),L.resolve()}getOverlaysForCollection(e,n,s){const r=wr(),i=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return L.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ge((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=wr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return L.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xD(n,s));let i=this.ls.get(n);i===void 0&&(i=be(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class ip{constructor(){this.fs=new kt(ht.ds),this.ws=new kt(ht._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new ht(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new ht(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new ne(new Be([])),s=new ht(n,e),r=new ht(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new ne(new Be([])),s=new ht(n,e),r=new ht(n,e+1);let i=be();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ht{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return ne.comparator(e.key,n.key)||Pe(e.As,n.As)}static _s(e,n){return Pe(e.As,n.As)||ne.comparator(e.key,n.key)}}/**
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
 */class uP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new kt(ht.ds)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OD(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ht(n,0),r=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new kt(Pe);return n.forEach(r=>{const i=new ht(r,0),o=new ht(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),L.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ne.isDocumentKey(i)||(i=i.child(""));const o=new ht(new ne(i),0);let a=new kt(Pe);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),L.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){je(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return L.forEach(n.mutations,r=>{const i=new ht(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new ht(n,0),r=this.Rs.firstAfterOrEqual(s);return L.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hP{constructor(e){this.Ds=e,this.docs=new Ge(ne.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return L.resolve(s?s.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let s=ys();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():It.newInvalidDocument(r))}),L.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ys();const o=n.path,a=new ne(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Qx(Xx(u),s)<=0||(r.has(u.key)||hu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,s,r){he()}Cs(e,n){return L.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new dP(this)}getSize(e){return L.resolve(this.size)}}class dP extends iP{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),L.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class fP{constructor(e){this.persistence=e,this.xs=new Bi(n=>Zf(n),Yf),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ip,this.targetCount=0,this.Ms=ki.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),L.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ki(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Fn(n),L.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),L.waitFor(i).next(()=>r)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return L.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),L.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),L.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return L.resolve(s)}containsKey(e,n){return L.resolve(this.ks.containsKey(n))}}/**
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
 */class pP{constructor(e,n){this.$s={},this.overlays={},this.Os=new Wf(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new fP(this),this.indexManager=new sP,this.remoteDocumentCache=function(s){return new hP(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new tP(n),this.qs=new cP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new uP(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){J("MemoryPersistence","Starting transaction:",e);const r=new mP(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return L.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class mP extends eD{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.Qs=new ip,this.js=null}static zs(e){return new op(e)}get Ws(){if(this.js)return this.js;throw he()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),L.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),L.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Ws,s=>{const r=ne.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,fe.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return L.or([()=>L.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class ap{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=be(),r=be();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ap(e,n.fromCache,s,r)}}/**
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
 */class gP{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(ay(n))return L.resolve(null);let s=gs(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=sl(n,null,"F"),s=gs(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=be(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,sl(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return ay(n)||r.isEqual(fe.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Qg()<=Oe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vd(n)),this.Wi(e,o,n,Yx(r,-1)))})}ji(e,n){let s=new kt(o0(e));return n.forEach((r,i)=>{hu(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Qg()<=Oe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",vd(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ks.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class yP{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Ge(Pe),this.Yi=new Bi(i=>Zf(i),Yf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aP(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function vP(t,e,n,s){return new yP(t,e,n,s)}async function A0(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=be();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function _P(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=L.resolve();return h.forEach(m=>{f=f.next(()=>l.getEntry(a,m)).next(w=>{const E=c.docVersions.get(m);je(E!==null),w.version.compareTo(E)<0&&(u.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),l.addEntry(w)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=be();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function k0(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function wP(t,e){const n=ye(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Nt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(w,E,S){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,m,u)&&a.push(n.Bs.updateTargetData(i,m))});let c=ys(),l=be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(TP(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(fe.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return L.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function TP(t,e,n){let s=be(),r=be();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=ys();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function EP(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function IP(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,L.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Ls(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Id(t,e,n){const s=ye(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Sa(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function vy(t,e,n){const s=ye(t);let r=fe.min(),i=be();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ye(a),h=u.Yi.get(l);return h!==void 0?L.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,gs(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:fe.min(),n?i:be())).next(a=>(bP(s,gD(e),a),{documents:a,ir:i})))}function bP(t,e,n){let s=t.Xi.get(e)||fe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class _y{constructor(){this.activeTargetIds=ED()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CP{constructor(){this.Hr=new _y,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new _y,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SP{Yr(e){}shutdown(){}}/**
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
 */class wy{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cc=null;function yh(){return cc===null?cc=268435456+Math.round(2147483648*Math.random()):cc++,"0x"+cc.toString(16)}/**
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
 */const AP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kP{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Tt="WebChannelConnection";class RP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=yh(),a=this.To(e,n);J("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(J("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ii("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+$i,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=AP[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=yh();return new Promise((o,a)=>{const c=new $x;c.setWithCredentials(!0),c.listenOnce(Lx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mh.NO_ERROR:const u=c.getResponseJson();J(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case mh.TIMEOUT:J(Tt,`RPC '${e}' ${i} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case mh.HTTP_ERROR:const h=c.getStatus();if(J(Tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const w=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(S)>=0?S:A.UNKNOWN}(m.status);a(new q(w,m.message))}else a(new q(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{J(Tt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);J(Tt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=yh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Px(),a=Mx(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Fx({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");J(Tt,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const w=new kP({ro:S=>{m?J(Tt,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(f||(J(Tt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),J(Tt,`RPC '${e}' stream ${r} sending:`,S),h.send(S))},oo:()=>h.close()}),E=(S,D,R)=>{S.listen(D,j=>{try{R(j)}catch(I){setTimeout(()=>{throw I},0)}})};return E(h,rc.EventType.OPEN,()=>{m||J(Tt,`RPC '${e}' stream ${r} transport opened.`)}),E(h,rc.EventType.CLOSE,()=>{m||(m=!0,J(Tt,`RPC '${e}' stream ${r} transport closed`),w.wo())}),E(h,rc.EventType.ERROR,S=>{m||(m=!0,Ii(Tt,`RPC '${e}' stream ${r} transport errored:`,S),w.wo(new q(A.UNAVAILABLE,"The operation could not be completed")))}),E(h,rc.EventType.MESSAGE,S=>{var D;if(!m){const R=S.data[0];je(!!R);const j=R,I=j.error||((D=j[0])===null||D===void 0?void 0:D.error);if(I){J(Tt,`RPC '${e}' stream ${r} received error:`,I);const $=I.status;let te=function(P){const B=st[P];if(B!==void 0)return v0(B)}($),se=I.message;te===void 0&&(te=A.INTERNAL,se="Unknown error status: "+$+" with message "+I.message),m=!0,w.wo(new q(te,se)),h.close()}else J(Tt,`RPC '${e}' stream ${r} received:`,R),w._o(R)}}),E(a,Ux.STAT_EVENT,S=>{S.stat===Yg.PROXY?J(Tt,`RPC '${e}' stream ${r} detected buffering proxy`):S.stat===Yg.NOPROXY&&J(Tt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function vh(){return typeof document<"u"?document:null}/**
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
 */function mu(t){return new VD(t,!0)}/**
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
 */class R0{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class N0{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new R0(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(ms(n.toString()),ms("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NP extends N0{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=HD(this.serializer,e),s=function(r){if(!("targetChange"in r))return fe.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?fe.min():i.readTime?Hn(i.readTime):fe.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Ed(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=gd(a)?{documents:KD(r,a)}:{query:GD(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=T0(r,i.resumeToken);const c=_d(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(fe.min())>0){o.readTime=ol(r,i.snapshotVersion.toTimestamp());const c=_d(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=YD(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Ed(this.serializer),n.removeTarget=e,this.Wo(n)}}class OP extends N0{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=WD(e.writeResults,e.commitTime),s=Hn(e.commitTime);return this.listener.cu(s,n)}return je(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ed(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zD(this.serializer,s))};this.Wo(n)}}/**
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
 */class xP extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(A.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(A.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class DP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ms(n),this.mu=!1):J("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class PP{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Wr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ye(a);c.vu.add(4),await Ra(c),c.bu.set("Unknown"),c.vu.delete(4),await gu(c)}(this))})}),this.bu=new DP(s,r)}}async function gu(t){if(Wr(t))for(const e of t.Ru)await e(!0)}async function Ra(t){for(const e of t.Ru)await e(!1)}function O0(t,e){const n=ye(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),up(n)?lp(n):Vi(n).Ko()&&cp(n,e))}function x0(t,e){const n=ye(t),s=Vi(n);n.Au.delete(e),s.Ko()&&D0(n,e),n.Au.size===0&&(s.Ko()?s.jo():Wr(n)&&n.bu.set("Unknown"))}function cp(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vi(t).su(e)}function D0(t,e){t.Vu.qt(e),Vi(t).iu(e)}function lp(t){t.Vu=new UD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Vi(t).start(),t.bu.gu()}function up(t){return Wr(t)&&!Vi(t).Uo()&&t.Au.size>0}function Wr(t){return ye(t).vu.size===0}function P0(t){t.Vu=void 0}async function MP(t){t.Au.forEach((e,n)=>{cp(t,e)})}async function LP(t,e){P0(t),up(t)?(t.bu.Iu(e),lp(t)):t.bu.set("Unknown")}async function UP(t,e,n){if(t.bu.set("Online"),e instanceof w0&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await al(t,s)}else if(e instanceof Ic?t.Vu.Ht(e):e instanceof _0?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(fe.min()))try{const s=await k0(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(Nt.EMPTY_BYTE_STRING,l.snapshotVersion)),D0(r,a);const u=new Ls(l.target,a,c,l.sequenceNumber);cp(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){J("RemoteStore","Failed to raise snapshot:",s),await al(t,s)}}async function al(t,e,n){if(!Sa(e))throw e;t.vu.add(1),await Ra(t),t.bu.set("Offline"),n||(n=()=>k0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await gu(t)})}function M0(t,e){return e().catch(n=>al(t,n,e))}async function yu(t){const e=ye(t),n=Zs(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;FP(e);)try{const r=await EP(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,$P(e,r)}catch(r){await al(e,r)}L0(e)&&U0(e)}function FP(t){return Wr(t)&&t.Eu.length<10}function $P(t,e){t.Eu.push(e);const n=Zs(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function L0(t){return Wr(t)&&!Zs(t).Uo()&&t.Eu.length>0}function U0(t){Zs(t).start()}async function BP(t){Zs(t).hu()}async function VP(t){const e=Zs(t);for(const n of t.Eu)e.uu(n.mutations)}async function jP(t,e,n){const s=t.Eu.shift(),r=tp.from(s,e,n);await M0(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await yu(t)}async function qP(t,e){e&&Zs(t).ou&&await async function(n,s){if(r=s.code,PD(r)&&r!==A.ABORTED){const i=n.Eu.shift();Zs(n).Qo(),await M0(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yu(n)}var r}(t,e),L0(t)&&U0(t)}async function Ty(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const s=Wr(n);n.vu.add(3),await Ra(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await gu(n)}async function HP(t,e){const n=ye(t);e?(n.vu.delete(2),await gu(n)):e||(n.vu.add(2),await Ra(n),n.bu.set("Unknown"))}function Vi(t){return t.Su||(t.Su=function(e,n,s){const r=ye(e);return r.fu(),new NP(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:MP.bind(null,t),ao:LP.bind(null,t),nu:UP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),up(t)?lp(t):t.bu.set("Unknown")):(await t.Su.stop(),P0(t))})),t.Su}function Zs(t){return t.Du||(t.Du=function(e,n,s){const r=ye(e);return r.fu(),new OP(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:BP.bind(null,t),ao:qP.bind(null,t),au:VP.bind(null,t),cu:jP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await yu(t)):(await t.Du.stop(),t.Eu.length>0&&(J("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class hp{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new hp(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(t,e){if(ms("AsyncQueue",`${e}: ${t}`),Sa(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class pi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ne.comparator(n.key,s.key):(n,s)=>ne.comparator(n.key,s.key),this.keyedMap=no(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new pi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new pi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ey{constructor(){this.Cu=new Ge(ne.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):he():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ri{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ri(e,n,pi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class zP{constructor(){this.Nu=void 0,this.listeners=[]}}class WP{constructor(){this.queries=new Bi(e=>i0(e),uu),this.onlineState="Unknown",this.ku=new Set}}async function F0(t,e){const n=ye(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new zP),r)try{i.Nu=await n.onListen(s)}catch(o){const a=dp(o,`Initialization of query '${vd(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&fp(n)}async function $0(t,e){const n=ye(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function KP(t,e){const n=ye(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&fp(n)}function GP(t,e,n){const s=ye(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function fp(t){t.ku.forEach(e=>{e.next()})}class B0{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ri(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class V0{constructor(e){this.key=e}}class j0{constructor(e){this.key=e}}class ZP{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=be(),this.mutatedKeys=be(),this.tc=o0(e),this.ec=new pi(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Ey,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),m=hu(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;f&&m?f.data.isEqual(m.data)?w!==E&&(s.track({type:3,doc:m}),S=!0):this.rc(f,m)||(s.track({type:2,doc:m}),S=!0,(c&&this.tc(m,c)>0||l&&this.tc(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),S=!0):f&&!m&&(s.track({type:1,doc:f}),S=!0,(c||l)&&(a=!0)),S&&(m?(o=o.add(m),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,f){const m=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return m(h)-m(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Ri(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ey,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=be(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new j0(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new V0(s))}),n}hc(e){this.Yu=e.ir,this.Zu=be();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ri.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class YP{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class XP{constructor(e){this.key=e,this.fc=!1}}class QP{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Bi(a=>i0(a),uu),this._c=new Map,this.mc=new Set,this.gc=new Ge(ne.comparator),this.yc=new Map,this.Ic=new ip,this.Tc={},this.Ec=new Map,this.Ac=ki.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function JP(t,e){const n=lM(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await IP(n.localStore,gs(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await eM(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&O0(n.remoteStore,o)}return r}async function eM(t,e,n,s,r){t.Rc=(h,f,m)=>async function(w,E,S,D){let R=E.view.sc(S);R.zi&&(R=await vy(w.localStore,E.query,!1).then(({documents:$})=>E.view.sc($,R)));const j=D&&D.targetChanges.get(E.targetId),I=E.view.applyChanges(R,w.isPrimaryClient,j);return by(w,E.targetId,I.cc),I.snapshot}(t,h,f,m);const i=await vy(t.localStore,e,!0),o=new ZP(e,i.ir),a=o.sc(i.documents),c=ka.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);by(t,n,l.cc);const u=new YP(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function tM(t,e){const n=ye(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!uu(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Id(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),x0(n.remoteStore,s.targetId),bd(n,s.targetId)}).catch(Ca)):(bd(n,s.targetId),await Id(n.localStore,s.targetId,!0))}async function nM(t,e,n){const s=uM(t);try{const r=await function(i,o){const a=ye(i),c=ct.now(),l=o.reduce((f,m)=>f.add(m.key),be());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=ys(),w=be();return a.Zi.getEntries(f,l).next(E=>{m=E,m.forEach((S,D)=>{D.isValidDocument()||(w=w.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(E=>{u=E;const S=[];for(const D of o){const R=RD(D,u.get(D.key).overlayedDocument);R!=null&&S.push(new rr(D.key,R,QT(R.value.mapValue),hn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,S,o)}).next(E=>{h=E;const S=E.applyToLocalDocumentSet(u,w);return a.documentOverlayCache.saveOverlays(f,E.batchId,S)})}).then(()=>({batchId:h.batchId,changes:c0(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new Ge(Pe)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Na(s,r.changes),await yu(s.remoteStore)}catch(r){const i=dp(r,"Failed to persist write");n.reject(i)}}async function q0(t,e){const n=ye(t);try{const s=await wP(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(je(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?je(o.fc):r.removedDocuments.size>0&&(je(o.fc),o.fc=!1))}),await Na(n,s,e)}catch(s){await Ca(s)}}function Iy(t,e,n){const s=ye(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ye(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&fp(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sM(t,e,n){const s=ye(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new Ge(ne.comparator);o=o.insert(i,It.newNoDocument(i,fe.min()));const a=be().add(i),c=new pu(fe.min(),new Map,new Ge(Pe),o,a);await q0(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),pp(s)}else await Id(s.localStore,e,!1).then(()=>bd(s,e,n)).catch(Ca)}async function rM(t,e){const n=ye(t),s=e.batch.batchId;try{const r=await _P(n.localStore,e);z0(n,s,null),H0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Na(n,r)}catch(r){await Ca(r)}}async function iM(t,e,n){const s=ye(t);try{const r=await function(i,o){const a=ye(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(je(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);z0(s,e,n),H0(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Na(s,r)}catch(r){await Ca(r)}}function H0(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function z0(t,e,n){const s=ye(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function bd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||W0(t,s)})}function W0(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(x0(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),pp(t))}function by(t,e,n){for(const s of n)s instanceof V0?(t.Ic.addReference(s.key,e),oM(t,s)):s instanceof j0?(J("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||W0(t,s.key)):he()}function oM(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(J("SyncEngine","New document in limbo: "+n),t.mc.add(s),pp(t))}function pp(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new ne(Be.fromString(e)),s=t.Ac.next();t.yc.set(s,new XP(n)),t.gc=t.gc.insert(n,s),O0(t.remoteStore,new Ls(gs(Xf(n.path)),s,"TargetPurposeLimboResolution",Wf.ct))}}async function Na(t,e,n){const s=ye(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ap.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=ye(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(c,h=>L.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>L.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Sa(u))throw u;J("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),m=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(m);l.Ji=l.Ji.insert(h,w)}}}(s.localStore,i))}async function aM(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const s=await A0(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Na(n,s.er)}}function cM(t,e){const n=ye(t),s=n.yc.get(e);if(s&&s.fc)return be().add(s.key);{let r=be();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function lM(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=q0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sM.bind(null,e),e.dc.nu=KP.bind(null,e.eventManager),e.dc.Pc=GP.bind(null,e.eventManager),e}function uM(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,e),e}class Cy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=mu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vP(this.persistence,new gP,e.initialUser,this.serializer)}createPersistence(e){return new pP(op.zs,this.serializer)}createSharedClientState(e){return new CP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Iy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aM.bind(null,this.syncEngine),await HP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new WP}createDatastore(e){const n=mu(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new RP(r));var r;return function(i,o,a,c){return new xP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Iy(this.syncEngine,a,0),o=wy.D()?new wy:new SP,new PP(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new QP(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ye(e);J("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ra(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class K0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ms("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class dM{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Et.UNAUTHENTICATED,this.clientId=ZT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{J("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(J("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=dp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function _h(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await A0(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pM(t);J("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ty(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ty(e.remoteStore,i)),t._onlineComponents=e}function fM(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function pM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await _h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fM(n))throw n;Ii("Error using user provided cache. Falling back to memory cache: "+n),await _h(t,new Cy)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await _h(t,new Cy);return t._offlineComponents}async function G0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Sy(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Sy(t,new hM))),t._onlineComponents}function mM(t){return G0(t).then(e=>e.syncEngine)}async function Z0(t){const e=await G0(t),n=e.eventManager;return n.onListen=JP.bind(null,e.syncEngine),n.onUnlisten=tM.bind(null,e.syncEngine),n}function gM(t,e,n={}){const s=new ls;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new K0({next:h=>{i.enqueueAndForget(()=>$0(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new B0(Xf(o.path),l,{includeMetadataChanges:!0,Ku:!0});return F0(r,u)}(await Z0(t),t.asyncQueue,e,n,s)),s.promise}function Y0(t,e,n={}){const s=new ls;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new K0({next:h=>{i.enqueueAndForget(()=>$0(r,u)),h.fromCache&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new B0(o,l,{includeMetadataChanges:!0,Ku:!0});return F0(r,u)}(await Z0(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function X0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ay=new Map;/**
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
 */function Q0(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yM(t,e,n,s){if(e===!0&&s===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ky(t){if(!ne.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ry(t){if(ne.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vu(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function vM(t,e){if(e<=0)throw new q(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ny{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class _u{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ny({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ny(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Vx;switch(n.type){case"firstParty":return new zx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ay.get(e);n&&(J("ComponentProvider","Removing Datastore"),Ay.delete(e),n.terminate())}(this),Promise.resolve()}}function _M(t,e,n,s={}){var r;const i=(t=Jt(t,_u))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ii("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Et.MOCK_USER;else{o=O_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Et(c)}t._authCredentials=new jx(new GT(o,a))}}/**
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
 */class Ut{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class On{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new On(this.firestore,e,this._query)}}class Hs extends On{constructor(e,n,s){super(e,n,Xf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new ne(e))}withConverter(e){return new Hs(this.firestore,e,this._path)}}function J0(t,e,...n){if(t=He(t),Q0("collection","path",e),t instanceof _u){const s=Be.fromString(e,...n);return Ry(s),new Hs(t,null,s)}{if(!(t instanceof Ut||t instanceof Hs))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return Ry(s),new Hs(t.firestore,null,s)}}function cl(t,e,...n){if(t=He(t),arguments.length===1&&(e=ZT.A()),Q0("doc","path",e),t instanceof _u){const s=Be.fromString(e,...n);return ky(s),new Ut(t,null,new ne(s))}{if(!(t instanceof Ut||t instanceof Hs))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return ky(s),new Ut(t.firestore,t instanceof Hs?t.converter:null,new ne(s))}}/**
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
 */class wM{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new R0(this,"async_queue_retry"),this.Xc=()=>{const n=vh();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=vh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ls;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Sa(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw ms("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=hp.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&he()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class ir extends _u{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new wM,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||eE(this),this._firestoreClient.terminate()}}function TM(t,e){const n=typeof t=="object"?t:Bl(),s=typeof t=="string"?t:e||"(default)",r=er(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=k_("firestore");i&&_M(r,...i)}return r}function wu(t){return t._firestoreClient||eE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function eE(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new sD(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,X0(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new dM(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ni(Nt.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ni(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Tu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mp{constructor(e){this._methodName=e}}/**
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
 */class gp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */const EM=/^__.*__$/;class IM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class tE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class yp{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ll(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(nE(this.ca)&&EM.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class bM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||mu(e)}ya(e,n,s,r=!1){return new yp({ca:e,methodName:n,ga:s,path:Ct.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oa(t){const e=t._freezeSettings(),n=mu(t._databaseId);return new bM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sE(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);vp("Data must be an object, but it was:",o,s);const a=iE(s,o);let c,l;if(i.merge)c=new Zt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Cd(e,h,n);if(!o.contains(f))throw new q(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);aE(u,f)||u.push(f)}c=new Zt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new IM(new Vt(a),c,l)}class Eu extends mp{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}function CM(t,e,n,s){const r=t.ya(1,e,n);vp("Data must be an object, but it was:",r,s);const i=[],o=Vt.empty();zr(s,(c,l)=>{const u=_p(e,c,n);l=He(l);const h=r.da(u);if(l instanceof Eu)i.push(u);else{const f=xa(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Zt(i);return new tE(o,a,r.fieldTransforms)}function SM(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[Cd(e,s,n)],c=[r];if(i.length%2!=0)throw new q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Cd(e,i[f])),c.push(i[f+1]);const l=[],u=Vt.empty();for(let f=a.length-1;f>=0;--f)if(!aE(l,a[f])){const m=a[f];let w=c[f];w=He(w);const E=o.da(m);if(w instanceof Eu)l.push(m);else{const S=xa(w,E);S!=null&&(l.push(m),u.set(m,S))}}const h=new Zt(l);return new tE(u,h,o.fieldTransforms)}function rE(t,e,n,s=!1){return xa(n,t.ya(s?4:3,e))}function xa(t,e){if(oE(t=He(t)))return vp("Unsupported field value:",e,t),iE(t,e);if(t instanceof mp)return function(n,s){if(!nE(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=xa(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ID(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ct.fromDate(n);return{timestampValue:ol(s.serializer,r)}}if(n instanceof ct){const r=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ol(s.serializer,r)}}if(n instanceof gp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ni)return{bytesValue:T0(s.serializer,n._byteString)};if(n instanceof Ut){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:rp(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${vu(n)}`)}(t,e)}function iE(t,e){const n={};return YT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(s,r)=>{const i=xa(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function oE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof gp||t instanceof Ni||t instanceof Ut||t instanceof mp)}function vp(t,e,n){if(!oE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=vu(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Cd(t,e,n){if((e=He(e))instanceof Tu)return e._internalPath;if(typeof e=="string")return _p(t,e);throw ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const AM=new RegExp("[~\\*/\\[\\]]");function _p(t,e,n){if(e.search(AM)>=0)throw ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tu(...e.split("."))._internalPath}catch{throw ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ll(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(A.INVALID_ARGUMENT,a+t+c)}function aE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kM extends wp{data(){return super.data()}}function Tp(t,e){return typeof e=="string"?_p(t,e):e instanceof Tu?e._internalPath:e._delegate._internalPath}/**
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
 */function RM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ep{}class Da extends Ep{}function NM(t,e,...n){let s=[];e instanceof Ep&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof bp).length,o=r.filter(a=>a instanceof Ip).length;if(i>1||i>0&&o>0)throw new q(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ip extends Da{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ip(e,n,s)}_apply(e){const n=this._parse(e);return lE(e._query,n),new On(e.firestore,e.converter,yd(e._query,n))}_parse(e){const n=Oa(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new q(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){xy(u,l);const f=[];for(const m of u)f.push(Oy(a,r,m));h={arrayValue:{values:f}}}else h=Oy(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||xy(u,l),h=rE(o,i,u,l==="in"||l==="not-in");return it.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class bp extends Ep{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bp(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)lE(i,a),i=yd(i,a)}(e._query,n),new On(e.firestore,e.converter,yd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends Da{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new fi(r,i);return function(a,c){if(Qf(a)===null){const l=lu(a);l!==null&&uE(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new On(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new sr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function OM(t,e="asc"){const n=e,s=Tp("orderBy",t);return Cp._create(s,n)}class Sp extends Da{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Sp(e,n,s)}_apply(e){return new On(e.firestore,e.converter,sl(e._query,this._limit,this._limitType))}}function xM(t){return vM("limit",t),Sp._create("limit",t,"F")}class Ap extends Da{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Ap(e,n,s)}_apply(e){const n=cE(e,this.type,this._docOrFields,this._inclusive);return new On(e.firestore,e.converter,function(s,r){return new sr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function DM(...t){return Ap._create("startAt",t,!0)}class kp extends Da{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new kp(e,n,s)}_apply(e){const n=cE(e,this.type,this._docOrFields,this._inclusive);return new On(e.firestore,e.converter,function(s,r){return new sr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function PM(...t){return kp._create("endAt",t,!0)}function cE(t,e,n,s){if(n[0]=He(n[0]),n[0]instanceof wp)return function(r,i,o,a,c){if(!a)throw new q(A.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Ar(r))if(u.field.isKeyField())l.push(nl(i,a.key));else{const h=a.data.field(u.field);if(cu(h))throw new q(A.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new q(A.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ai(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=Oa(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new q(A.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let m=0;m<l.length;m++){const w=l[m];if(h[m].field.isKeyField()){if(typeof w!="string")throw new q(A.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!Jf(i)&&w.indexOf("/")!==-1)throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const E=i.path.child(Be.fromString(w));if(!ne.isDocumentKey(E))throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const S=new ne(E);f.push(nl(o,S))}else{const E=rE(a,c,w);f.push(E)}}return new Ai(f,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Oy(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new q(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jf(e)&&n.indexOf("/")!==-1)throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Be.fromString(n));if(!ne.isDocumentKey(s))throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return nl(t,new ne(s))}if(n instanceof Ut)return nl(t,n._key);throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vu(n)}.`)}function xy(t,e){if(!Array.isArray(t)||t.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lE(t,e){if(e.isInequality()){const s=lu(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new q(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Qf(t);i!==null&&uE(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function uE(t,e,n){if(!n.isEqual(e))throw new q(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class MM{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return zr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new gp(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Kf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=Gs(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Be.fromString(e);je(S0(s));const r=new qo(s.get(1),s.get(3)),i=new ne(s.popFirst(5));return r.isEqual(n)||ms(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function hE(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dE extends wp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Tp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class bc extends dE{data(e={}){return super.data(e)}}class fE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ro(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new bc(this._firestore,this._userDataWriter,s.key,s,new ro(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new bc(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ro(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new bc(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ro(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:LM(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function Dy(t){t=Jt(t,Ut);const e=Jt(t.firestore,ir);return gM(wu(e),t._key).then(n=>$M(e,t,n))}class Rp extends MM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ni(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function IF(t){t=Jt(t,On);const e=Jt(t.firestore,ir),n=wu(e),s=new Rp(e);return RM(t._query),Y0(n,t._query).then(r=>new fE(e,s,t,r))}function bF(t){t=Jt(t,On);const e=Jt(t.firestore,ir),n=wu(e),s=new Rp(e);return Y0(n,t._query,{source:"server"}).then(r=>new fE(e,s,t,r))}function UM(t,e,n){t=Jt(t,Ut);const s=Jt(t.firestore,ir),r=hE(t.converter,e,n);return Iu(s,[sE(Oa(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,hn.none())])}function FM(t,e,n,...s){t=Jt(t,Ut);const r=Jt(t.firestore,ir),i=Oa(r);let o;return o=typeof(e=He(e))=="string"||e instanceof Tu?SM(i,"updateDoc",t._key,e,n,s):CM(i,"updateDoc",t._key,e),Iu(r,[o.toMutation(t._key,hn.exists(!0))])}function CF(t){return Iu(Jt(t.firestore,ir),[new ep(t._key,hn.none())])}function SF(t,e){const n=Jt(t.firestore,ir),s=cl(t),r=hE(t.converter,e);return Iu(n,[sE(Oa(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,hn.exists(!1))]).then(()=>s)}function Iu(t,e){return function(n,s){const r=new ls;return n.asyncQueue.enqueueAndForget(async()=>nM(await mM(n),s,r)),r.promise}(wu(t),e)}function $M(t,e,n){const s=n.docs.get(e._key),r=new Rp(t);return new dE(t,r,e._key,s,new ro(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){$i=n})(qr),An(new dn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ir(new qx(n.getProvider("auth-internal")),new Kx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),jt(Xg,"3.12.0",t),jt(Xg,"3.12.0","esm2017")})();/**
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
 */const pE="firebasestorage.googleapis.com",mE="storageBucket",BM=2*60*1e3,VM=10*60*1e3;/**
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
 */class Qe extends fn{constructor(e,n,s=0){super(wh(e),`Firebase Storage: ${n} (${wh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xe||(Xe={}));function wh(t){return"storage/"+t}function Np(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(Xe.UNKNOWN,t)}function jM(t){return new Qe(Xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function qM(t){return new Qe(Xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(Xe.UNAUTHENTICATED,t)}function zM(){return new Qe(Xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function WM(t){return new Qe(Xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function KM(){return new Qe(Xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function GM(){return new Qe(Xe.CANCELED,"User canceled the upload/download.")}function ZM(t){return new Qe(Xe.INVALID_URL,"Invalid URL '"+t+"'.")}function YM(t){return new Qe(Xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function XM(){return new Qe(Xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mE+"' property when initializing the app?")}function QM(){return new Qe(Xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function JM(){return new Qe(Xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function eL(t){return new Qe(Xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sd(t){return new Qe(Xe.INVALID_ARGUMENT,t)}function gE(){return new Qe(Xe.APP_DELETED,"The Firebase app was deleted.")}function tL(t){return new Qe(Xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function To(t,e){return new Qe(Xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Yi(t){throw new Qe(Xe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(s.path==="")return s;throw YM(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),w={bucket:1,path:3},E=n===pE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",D=new RegExp(`^https?://${E}/${r}/${S}`,"i"),j=[{regex:a,indices:c,postModify:i},{regex:m,indices:w,postModify:l},{regex:D,indices:{bucket:1,path:2},postModify:l}];for(let I=0;I<j.length;I++){const $=j[I],te=$.regex.exec(e);if(te){const se=te[$.indices.bucket];let P=te[$.indices.path];P||(P=""),s=new Yt(se,P),$.postModify(s);break}}if(s==null)throw ZM(e);return s}}class nL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function sL(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...S){l||(l=!0,e.apply(null,S))}function h(S){r=setTimeout(()=>{r=null,t(m,c())},S)}function f(){i&&clearTimeout(i)}function m(S,...D){if(l){f();return}if(S){f(),u.call(null,S,...D);return}if(c()||o){f(),u.call(null,S,...D);return}s<64&&(s*=2);let j;a===1?(a=2,j=0):j=(s+Math.random())*1e3,h(j)}let w=!1;function E(S){w||(w=!0,f(),!l&&(r!==null?(S||(a=2),clearTimeout(r),h(0)):S||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function rL(t){t(!1)}/**
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
 */function iL(t){return t!==void 0}function oL(t){return typeof t=="object"&&!Array.isArray(t)}function Op(t){return typeof t=="string"||t instanceof String}function Py(t){return xp()&&t instanceof Blob}function xp(){return typeof Blob<"u"&&!$A()}function My(t,e,n,s){if(s<e)throw Sd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Sd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Dp(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function yE(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var kr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(kr||(kr={}));/**
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
 */function aL(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class cL{constructor(e,n,s,r,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new lc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===kr.NO_ERROR,c=i.getStatus();if(!a||aL(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===kr.ABORT;s(!1,new lc(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new lc(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());iL(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Np();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?gE():GM();o(c)}else{const c=KM();o(c)}};this.canceled_?n(!1,new lc(!1,null,!0)):this.backoffId_=sL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function lL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function uL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fL(t,e,n,s,r,i,o=!0){const a=yE(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return hL(l,e),lL(l,n),uL(l,i),dL(l,s),new cL(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function pL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mL(...t){const e=pL();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(xp())return new Blob(t);throw new Qe(Xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function yL(t){if(typeof atob>"u")throw eL("base-64");return atob(t)}/**
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
 */const Vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Th{constructor(e,n){this.data=e,this.contentType=n||null}}function vL(t,e){switch(t){case Vn.RAW:return new Th(vE(e));case Vn.BASE64:case Vn.BASE64URL:return new Th(_E(t,e));case Vn.DATA_URL:return new Th(wL(e),TL(e))}throw Np()}function vE(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function _L(t){let e;try{e=decodeURIComponent(t)}catch{throw To(Vn.DATA_URL,"Malformed data URL.")}return vE(e)}function _E(t,e){switch(t){case Vn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw To(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Vn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw To(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=yL(e)}catch(r){throw r.message.includes("polyfill")?r:To(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class wE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw To(Vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=EL(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function wL(t){const e=new wE(t);return e.base64?_E(Vn.BASE64,e.rest):_L(e.rest)}function TL(t){return new wE(t).contentType}function EL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ps{constructor(e,n){let s=0,r="";Py(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Py(this.data_)){const s=this.data_,r=gL(s,e,n);return r===null?null:new Ps(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Ps(s,!0)}}static getBlob(...e){if(xp()){const n=e.map(s=>s instanceof Ps?s.data_:s);return new Ps(mL.apply(null,n))}else{const n=e.map(o=>Op(o)?vL(Vn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Ps(r,!0)}}uploadData(){return this.data_}}/**
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
 */function TE(t){let e;try{e=JSON.parse(t)}catch{return null}return oL(e)?e:null}/**
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
 */function IL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bL(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function EE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function CL(t,e){return e}class Pt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||CL}}let uc=null;function SL(t){return!Op(t)||t.length<2?t:EE(t)}function IE(){if(uc)return uc;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(i,o){return SL(o)}const n=new Pt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Pt("size");return r.xform=s,t.push(r),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),uc=t,uc}function AL(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Yt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function kL(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return AL(s,t),s}function bE(t,e,n){const s=TE(e);return s===null?null:kL(t,s,n)}function RL(t,e,n,s){const r=TE(e);if(r===null||!Op(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),m=Dp(f,n,s),w=yE({alt:"media",token:l});return m+w})[0]}function NL(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class CE{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function SE(t){if(!t)throw Np()}function OL(t,e){function n(s,r){const i=bE(t,r,e);return SE(i!==null),i}return n}function xL(t,e){function n(s,r){const i=bE(t,r,e);return SE(i!==null),RL(i,r,t.host,t._protocol)}return n}function AE(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=zM():r=HM():n.getStatus()===402?r=qM(t.bucket):n.getStatus()===403?r=WM(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function DL(t){const e=AE(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=jM(t.path)),i.serverResponse=r.serverResponse,i}return n}function PL(t,e,n){const s=e.fullServerUrl(),r=Dp(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new CE(r,i,xL(t,n),o);return a.errorHandler=DL(e),a}function ML(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function LL(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=ML(null,e)),s}function UL(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let j="";for(let I=0;I<2;I++)j=j+Math.random().toString().slice(2);return j}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=LL(e,s,r),u=NL(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=Ps.getBlob(h,s,f);if(m===null)throw QM();const w={name:l.fullPath},E=Dp(i,t.host,t._protocol),S="POST",D=t.maxUploadRetryTime,R=new CE(E,S,OL(t,n),D);return R.urlParams=w,R.headers=o,R.body=m.uploadData(),R.errorHandler=AE(e),R}class FL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Yi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $L extends FL{initXhr(){this.xhr_.responseType="text"}}function kE(){return new $L}/**
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
 */class Fr{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fr(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return EE(this._location.path)}get storage(){return this._service}get parent(){const e=IL(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new Fr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tL(e)}}function BL(t,e,n){t._throwIfRoot("uploadBytes");const s=UL(t.storage,t._location,IE(),new Ps(e,!0),n);return t.storage.makeRequestWithTokens(s,kE).then(r=>({metadata:r,ref:t}))}function VL(t){t._throwIfRoot("getDownloadURL");const e=PL(t.storage,t._location,IE());return t.storage.makeRequestWithTokens(e,kE).then(n=>{if(n===null)throw JM();return n})}function jL(t,e){const n=bL(t._location.path,e),s=new Yt(t._location.bucket,n);return new Fr(t.storage,s)}/**
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
 */function qL(t){return/^[A-Za-z]+:\/\//.test(t)}function HL(t,e){return new Fr(t,e)}function RE(t,e){if(t instanceof Pp){const n=t;if(n._bucket==null)throw XM();const s=new Fr(n,n._bucket);return e!=null?RE(s,e):s}else return e!==void 0?jL(t,e):t}function zL(t,e){if(e&&qL(e)){if(t instanceof Pp)return HL(t,e);throw Sd("To use ref(service, url), the first argument must be a Storage instance.")}else return RE(t,e)}function Ly(t,e){const n=e==null?void 0:e[mE];return n==null?null:Yt.makeFromBucketSpec(n,t)}function WL(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:O_(r,t.app.options.projectId))}class Pp{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=pE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BM,this._maxUploadRetryTime=VM,this._requests=new Set,r!=null?this._bucket=Yt.makeFromBucketSpec(r,this._host):this._bucket=Ly(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=Ly(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new nL(gE());{const o=fL(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Uy="@firebase/storage",Fy="0.11.2";/**
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
 */const NE="storage";function AF(t,e,n){return t=He(t),BL(t,e,n)}function kF(t){return t=He(t),VL(t)}function KL(t,e){return t=He(t),zL(t,e)}function GL(t=Bl(),e){t=He(t);const s=er(t,NE).getImmediate({identifier:e}),r=k_("storage");return r&&ZL(s,...r),s}function ZL(t,e,n,s={}){WL(t,e,n,s)}function YL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Pp(n,s,r,e,qr)}function XL(){An(new dn(NE,YL,"PUBLIC").setMultipleInstances(!0)),jt(Uy,Fy,""),jt(Uy,Fy,"esm2017")}XL();const QL={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d",measurementId:"G-0EWRT6BT1Y"},bu=U_(QL);DO(bu);const Ko=TM(bu),ln=oN(bu),Cu="profiles",$y=()=>{if(!ln.currentUser)throw new Error("Auth required");return cl(Ko,Cu,ln.currentUser.uid)},JL=t=>J0(Ko,Cu,t,"timeline"),RF=()=>{if(!ln.currentUser)throw new Error("Auth required");return JL(ln.currentUser.uid)},NF=t=>KL(GL(bu),t),OF=(t,e)=>NM(J0(Ko,Cu),OM(t),xM(5),DM(e.trim()),PM(`${e.trim()}`)),e2=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],Ad=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,kd=t=>t[Ad(0,t.length-1)],By=t=>{const e=[];for(let n=0;n<t;n++)e.push(kd(e2));return e.join(" ")},t2=t=>{const e=t.slice(1);return e?`#${(+`0x1${e}`^16777215).toString(16).substr(1).toUpperCase()}`:""},n2=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}],s2="/assets/undraw_online_resume_re_ru7s-458e1bd5.svg",r2={Instagram:{link:""},Facebook:{link:""},YouTube:{link:""},Spotify:{link:""},Twitter:{link:""},GitHub:{link:""},LinkedIn:{link:""},TikTok:{link:""}},i2=()=>{const{author:t,quotes:e}=kd(n2);return`"${kd(e)}"    - ${t}`},o2=t=>{var e;if(!t)throw new Error("Unauthorized profile creation attempt");return{userUid:t.uid,displayName:((e=t==null?void 0:t.displayName)==null?void 0:e.toLowerCase())??"",coverImg:s2,photoURL:(t==null?void 0:t.photoURL)??"",bgColor:"#FFE5E5",fontColor:"#000000",fontFamily:"merienda",shortBio:`${By(Ad(1,3))} What/Where ${By(Ad(1,3))}`,longBio:i2(),socialLinks:r2}};var xe;(function(t){t.assertEqual=r=>r;function e(r){}t.assertIs=e;function n(r){throw new Error}t.assertNever=n,t.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},t.getValidEnumValues=r=>{const i=t.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of i)o[a]=r[a];return t.objectValues(o)},t.objectValues=r=>t.objectKeys(r).map(function(i){return r[i]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},t.find=(r,i)=>{for(const o of r)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=s,t.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(xe||(xe={}));var Rd;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Rd||(Rd={}));const Z=xe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ms=t=>{switch(typeof t){case"undefined":return Z.undefined;case"string":return Z.string;case"number":return isNaN(t)?Z.nan:Z.number;case"boolean":return Z.boolean;case"function":return Z.function;case"bigint":return Z.bigint;case"symbol":return Z.symbol;case"object":return Array.isArray(t)?Z.array:t===null?Z.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?Z.promise:typeof Map<"u"&&t instanceof Map?Z.map:typeof Set<"u"&&t instanceof Set?Z.set:typeof Date<"u"&&t instanceof Date?Z.date:Z.object;default:return Z.unknown}},F=xe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),a2=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class In extends Error{constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(n(o));else{let a=s,c=0;for(;c<o.path.length;){const l=o.path[c];c===o.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(o))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return r(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,xe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},s=[];for(const r of this.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(e(r))):s.push(e(r));return{formErrors:s,fieldErrors:n}}get formErrors(){return this.flatten()}}In.create=t=>new In(t);const Go=(t,e)=>{let n;switch(t.code){case F.invalid_type:t.received===Z.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case F.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,xe.jsonStringifyReplacer)}`;break;case F.unrecognized_keys:n=`Unrecognized key(s) in object: ${xe.joinValues(t.keys,", ")}`;break;case F.invalid_union:n="Invalid input";break;case F.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${xe.joinValues(t.options)}`;break;case F.invalid_enum_value:n=`Invalid enum value. Expected ${xe.joinValues(t.options)}, received '${t.received}'`;break;case F.invalid_arguments:n="Invalid function arguments";break;case F.invalid_return_type:n="Invalid function return type";break;case F.invalid_date:n="Invalid date";break;case F.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:xe.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case F.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case F.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case F.custom:n="Invalid input";break;case F.invalid_intersection_types:n="Intersection results could not be merged";break;case F.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case F.not_finite:n="Number must be finite";break;default:n=e.defaultError,xe.assertNever(t)}return{message:n}};let OE=Go;function c2(t){OE=t}function ul(){return OE}const hl=t=>{const{data:e,path:n,errorMaps:s,issueData:r}=t,i=[...n,...r.path||[]],o={...r,path:i};let a="";const c=s.filter(l=>!!l).slice().reverse();for(const l of c)a=l(o,{data:e,defaultError:a}).message;return{...r,path:i,message:r.message||a}},l2=[];function X(t,e){const n=hl({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ul(),Go].filter(s=>!!s)});t.common.issues.push(n)}class Ot{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const s=[];for(const r of n){if(r.status==="aborted")return me;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,n){const s=[];for(const r of n)s.push({key:await r.key,value:await r.value});return Ot.mergeObjectSync(e,s)}static mergeObjectSync(e,n){const s={};for(const r of n){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return me;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const me=Object.freeze({status:"aborted"}),xE=t=>({status:"dirty",value:t}),Ft=t=>({status:"valid",value:t}),Nd=t=>t.status==="aborted",Od=t=>t.status==="dirty",dl=t=>t.status==="valid",fl=t=>typeof Promise<"u"&&t instanceof Promise;var ae;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(ae||(ae={}));class Zn{constructor(e,n,s,r){this._cachedPath=[],this.parent=e,this.data=n,this._path=s,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Vy=(t,e)=>{if(dl(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new In(t.common.issues);return this._error=n,this._error}}};function ve(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:s,description:r}=t;if(e&&(n||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:s??a.defaultError}:{message:n??a.defaultError},description:r}}class Te{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ms(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Ms(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Ot,ctx:{common:e.parent.common,data:e.data,parsedType:Ms(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(fl(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const s=this.safeParse(e,n);if(s.success)return s.data;throw s.error}safeParse(e,n){var s;const r={common:{issues:[],async:(s=n==null?void 0:n.async)!==null&&s!==void 0?s:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ms(e)},i=this._parseSync({data:e,path:r.path,parent:r});return Vy(r,i)}async parseAsync(e,n){const s=await this.safeParseAsync(e,n);if(s.success)return s.data;throw s.error}async safeParseAsync(e,n){const s={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ms(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(fl(r)?r:Promise.resolve(r));return Vy(s,i)}refine(e,n){const s=r=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(r):n;return this._refinement((r,i)=>{const o=e(r),a=()=>i.addIssue({code:F.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof n=="function"?n(s,r):n),!1))}_refinement(e){return new Nn({schema:this,typeName:ce.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return us.create(this,this._def)}nullable(){return Vr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return bn.create(this,this._def)}promise(){return xi.create(this,this._def)}or(e){return Qo.create([this,e],this._def)}and(e){return Jo.create(this,e,this._def)}transform(e){return new Nn({...ve(this._def),schema:this,typeName:ce.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new ra({...ve(this._def),innerType:this,defaultValue:n,typeName:ce.ZodDefault})}brand(){return new PE({typeName:ce.ZodBranded,type:this,...ve(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new yl({...ve(this._def),innerType:this,catchValue:n,typeName:ce.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Pa.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const u2=/^c[^\s-]{8,}$/i,h2=/^[a-z][a-z0-9]*$/,d2=/[0-9A-HJKMNP-TV-Z]{26}/,f2=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,p2=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,m2=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,g2=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,y2=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,v2=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function _2(t,e){return!!((e==="v4"||!e)&&g2.test(t)||(e==="v6"||!e)&&y2.test(t))}class _n extends Te{constructor(){super(...arguments),this._regex=(e,n,s)=>this.refinement(r=>e.test(r),{validation:n,code:F.invalid_string,...ae.errToObj(s)}),this.nonempty=e=>this.min(1,ae.errToObj(e)),this.trim=()=>new _n({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new _n({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new _n({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Z.string){const i=this._getOrReturnCtx(e);return X(i,{code:F.invalid_type,expected:Z.string,received:i.parsedType}),me}const s=new Ot;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),X(r,{code:F.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),X(r,{code:F.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?X(r,{code:F.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&X(r,{code:F.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")p2.test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"email",code:F.invalid_string,message:i.message}),s.dirty());else if(i.kind==="emoji")m2.test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"emoji",code:F.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")f2.test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"uuid",code:F.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")u2.test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"cuid",code:F.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")h2.test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"cuid2",code:F.invalid_string,message:i.message}),s.dirty());else if(i.kind==="ulid")d2.test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"ulid",code:F.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),X(r,{validation:"url",code:F.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"regex",code:F.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(r=this._getOrReturnCtx(e,r),X(r,{code:F.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),s.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),X(r,{code:F.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),X(r,{code:F.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?v2(i).test(e.data)||(r=this._getOrReturnCtx(e,r),X(r,{code:F.invalid_string,validation:"datetime",message:i.message}),s.dirty()):i.kind==="ip"?_2(e.data,i.version)||(r=this._getOrReturnCtx(e,r),X(r,{validation:"ip",code:F.invalid_string,message:i.message}),s.dirty()):xe.assertNever(i);return{status:s.value,value:e.data}}_addCheck(e){return new _n({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ae.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ae.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ae.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ae.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ae.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ae.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ae.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ae.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...ae.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...ae.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...ae.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...ae.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...ae.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...ae.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...ae.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...ae.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}_n.create=t=>{var e;return new _n({checks:[],typeName:ce.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ve(t)})};function w2(t,e){const n=(t.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=n>s?n:s,i=parseInt(t.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return i%o/Math.pow(10,r)}class Ys extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Z.number){const i=this._getOrReturnCtx(e);return X(i,{code:F.invalid_type,expected:Z.number,received:i.parsedType}),me}let s;const r=new Ot;for(const i of this._def.checks)i.kind==="int"?xe.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),X(s,{code:F.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),X(s,{code:F.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),X(s,{code:F.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?w2(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),X(s,{code:F.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),X(s,{code:F.not_finite,message:i.message}),r.dirty()):xe.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ae.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ae.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ae.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ae.toString(n))}setLimit(e,n,s,r){return new Ys({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:ae.toString(r)}]})}_addCheck(e){return new Ys({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ae.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ae.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ae.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ae.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ae.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ae.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:ae.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ae.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ae.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&xe.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(n===null||s.value>n)&&(n=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Ys.create=t=>new Ys({checks:[],typeName:ce.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...ve(t)});class Xs extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Z.bigint){const i=this._getOrReturnCtx(e);return X(i,{code:F.invalid_type,expected:Z.bigint,received:i.parsedType}),me}let s;const r=new Ot;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),X(s,{code:F.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),X(s,{code:F.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),X(s,{code:F.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):xe.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ae.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ae.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ae.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ae.toString(n))}setLimit(e,n,s,r){return new Xs({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:ae.toString(r)}]})}_addCheck(e){return new Xs({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ae.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ae.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ae.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ae.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ae.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Xs.create=t=>{var e;return new Xs({checks:[],typeName:ce.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ve(t)})};class Zo extends Te{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Z.boolean){const s=this._getOrReturnCtx(e);return X(s,{code:F.invalid_type,expected:Z.boolean,received:s.parsedType}),me}return Ft(e.data)}}Zo.create=t=>new Zo({typeName:ce.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...ve(t)});class $r extends Te{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Z.date){const i=this._getOrReturnCtx(e);return X(i,{code:F.invalid_type,expected:Z.date,received:i.parsedType}),me}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return X(i,{code:F.invalid_date}),me}const s=new Ot;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),X(r,{code:F.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),X(r,{code:F.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):xe.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new $r({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:ae.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:ae.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}$r.create=t=>new $r({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:ce.ZodDate,...ve(t)});class pl extends Te{_parse(e){if(this._getType(e)!==Z.symbol){const s=this._getOrReturnCtx(e);return X(s,{code:F.invalid_type,expected:Z.symbol,received:s.parsedType}),me}return Ft(e.data)}}pl.create=t=>new pl({typeName:ce.ZodSymbol,...ve(t)});class Yo extends Te{_parse(e){if(this._getType(e)!==Z.undefined){const s=this._getOrReturnCtx(e);return X(s,{code:F.invalid_type,expected:Z.undefined,received:s.parsedType}),me}return Ft(e.data)}}Yo.create=t=>new Yo({typeName:ce.ZodUndefined,...ve(t)});class Xo extends Te{_parse(e){if(this._getType(e)!==Z.null){const s=this._getOrReturnCtx(e);return X(s,{code:F.invalid_type,expected:Z.null,received:s.parsedType}),me}return Ft(e.data)}}Xo.create=t=>new Xo({typeName:ce.ZodNull,...ve(t)});class Oi extends Te{constructor(){super(...arguments),this._any=!0}_parse(e){return Ft(e.data)}}Oi.create=t=>new Oi({typeName:ce.ZodAny,...ve(t)});class Rr extends Te{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ft(e.data)}}Rr.create=t=>new Rr({typeName:ce.ZodUnknown,...ve(t)});class vs extends Te{_parse(e){const n=this._getOrReturnCtx(e);return X(n,{code:F.invalid_type,expected:Z.never,received:n.parsedType}),me}}vs.create=t=>new vs({typeName:ce.ZodNever,...ve(t)});class ml extends Te{_parse(e){if(this._getType(e)!==Z.undefined){const s=this._getOrReturnCtx(e);return X(s,{code:F.invalid_type,expected:Z.void,received:s.parsedType}),me}return Ft(e.data)}}ml.create=t=>new ml({typeName:ce.ZodVoid,...ve(t)});class bn extends Te{_parse(e){const{ctx:n,status:s}=this._processInputParams(e),r=this._def;if(n.parsedType!==Z.array)return X(n,{code:F.invalid_type,expected:Z.array,received:n.parsedType}),me;if(r.exactLength!==null){const o=n.data.length>r.exactLength.value,a=n.data.length<r.exactLength.value;(o||a)&&(X(n,{code:o?F.too_big:F.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&n.data.length<r.minLength.value&&(X(n,{code:F.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&n.data.length>r.maxLength.value&&(X(n,{code:F.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new Zn(n,o,n.path,a)))).then(o=>Ot.mergeArray(s,o));const i=[...n.data].map((o,a)=>r.type._parseSync(new Zn(n,o,n.path,a)));return Ot.mergeArray(s,i)}get element(){return this._def.type}min(e,n){return new bn({...this._def,minLength:{value:e,message:ae.toString(n)}})}max(e,n){return new bn({...this._def,maxLength:{value:e,message:ae.toString(n)}})}length(e,n){return new bn({...this._def,exactLength:{value:e,message:ae.toString(n)}})}nonempty(e){return this.min(1,e)}}bn.create=(t,e)=>new bn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ce.ZodArray,...ve(e)});function ni(t){if(t instanceof We){const e={};for(const n in t.shape){const s=t.shape[n];e[n]=us.create(ni(s))}return new We({...t._def,shape:()=>e})}else return t instanceof bn?new bn({...t._def,type:ni(t.element)}):t instanceof us?us.create(ni(t.unwrap())):t instanceof Vr?Vr.create(ni(t.unwrap())):t instanceof Yn?Yn.create(t.items.map(e=>ni(e))):t}class We extends Te{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=xe.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==Z.object){const l=this._getOrReturnCtx(e);return X(l,{code:F.invalid_type,expected:Z.object,received:l.parsedType}),me}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof vs&&this._def.unknownKeys==="strip"))for(const l in r.data)o.includes(l)||a.push(l);const c=[];for(const l of o){const u=i[l],h=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new Zn(r,h,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof vs){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of a)c.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(l==="strict")a.length>0&&(X(r,{code:F.unrecognized_keys,keys:a}),s.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of a){const h=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new Zn(r,h,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const h=await u.key;l.push({key:h,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>Ot.mergeObjectSync(s,l)):Ot.mergeObjectSync(s,c)}get shape(){return this._def.shape()}strict(e){return ae.errToObj,new We({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,s)=>{var r,i,o,a;const c=(o=(i=(r=this._def).errorMap)===null||i===void 0?void 0:i.call(r,n,s).message)!==null&&o!==void 0?o:s.defaultError;return n.code==="unrecognized_keys"?{message:(a=ae.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new We({...this._def,unknownKeys:"strip"})}passthrough(){return new We({...this._def,unknownKeys:"passthrough"})}extend(e){return new We({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new We({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ce.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new We({...this._def,catchall:e})}pick(e){const n={};return xe.objectKeys(e).forEach(s=>{e[s]&&this.shape[s]&&(n[s]=this.shape[s])}),new We({...this._def,shape:()=>n})}omit(e){const n={};return xe.objectKeys(this.shape).forEach(s=>{e[s]||(n[s]=this.shape[s])}),new We({...this._def,shape:()=>n})}deepPartial(){return ni(this)}partial(e){const n={};return xe.objectKeys(this.shape).forEach(s=>{const r=this.shape[s];e&&!e[s]?n[s]=r:n[s]=r.optional()}),new We({...this._def,shape:()=>n})}required(e){const n={};return xe.objectKeys(this.shape).forEach(s=>{if(e&&!e[s])n[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof us;)i=i._def.innerType;n[s]=i}}),new We({...this._def,shape:()=>n})}keyof(){return DE(xe.objectKeys(this.shape))}}We.create=(t,e)=>new We({shape:()=>t,unknownKeys:"strip",catchall:vs.create(),typeName:ce.ZodObject,...ve(e)});We.strictCreate=(t,e)=>new We({shape:()=>t,unknownKeys:"strict",catchall:vs.create(),typeName:ce.ZodObject,...ve(e)});We.lazycreate=(t,e)=>new We({shape:t,unknownKeys:"strip",catchall:vs.create(),typeName:ce.ZodObject,...ve(e)});class Qo extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.options;function r(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new In(a.ctx.common.issues));return X(n,{code:F.invalid_union,unionErrors:o}),me}if(n.common.async)return Promise.all(s.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const c of s){const l={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new In(c));return X(n,{code:F.invalid_union,unionErrors:a}),me}}get options(){return this._def.options}}Qo.create=(t,e)=>new Qo({options:t,typeName:ce.ZodUnion,...ve(e)});const Cc=t=>t instanceof ta?Cc(t.schema):t instanceof Nn?Cc(t.innerType()):t instanceof na?[t.value]:t instanceof Qs?t.options:t instanceof sa?Object.keys(t.enum):t instanceof ra?Cc(t._def.innerType):t instanceof Yo?[void 0]:t instanceof Xo?[null]:null;class Su extends Te{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==Z.object)return X(n,{code:F.invalid_type,expected:Z.object,received:n.parsedType}),me;const s=this.discriminator,r=n.data[s],i=this.optionsMap.get(r);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(X(n,{code:F.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),me)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,s){const r=new Map;for(const i of n){const o=Cc(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,i)}}return new Su({typeName:ce.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:r,...ve(s)})}}function xd(t,e){const n=Ms(t),s=Ms(e);if(t===e)return{valid:!0,data:t};if(n===Z.object&&s===Z.object){const r=xe.objectKeys(e),i=xe.objectKeys(t).filter(a=>r.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=xd(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===Z.array&&s===Z.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=xd(o,a);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return n===Z.date&&s===Z.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Jo extends Te{_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=(i,o)=>{if(Nd(i)||Nd(o))return me;const a=xd(i.value,o.value);return a.valid?((Od(i)||Od(o))&&n.dirty(),{status:n.value,value:a.data}):(X(s,{code:F.invalid_intersection_types}),me)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}Jo.create=(t,e,n)=>new Jo({left:t,right:e,typeName:ce.ZodIntersection,...ve(n)});class Yn extends Te{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==Z.array)return X(s,{code:F.invalid_type,expected:Z.array,received:s.parsedType}),me;if(s.data.length<this._def.items.length)return X(s,{code:F.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),me;!this._def.rest&&s.data.length>this._def.items.length&&(X(s,{code:F.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...s.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new Zn(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>Ot.mergeArray(n,o)):Ot.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new Yn({...this._def,rest:e})}}Yn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Yn({items:t,typeName:ce.ZodTuple,rest:null,...ve(e)})};class ea extends Te{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==Z.object)return X(s,{code:F.invalid_type,expected:Z.object,received:s.parsedType}),me;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in s.data)r.push({key:i._parse(new Zn(s,a,s.path,a)),value:o._parse(new Zn(s,s.data[a],s.path,a))});return s.common.async?Ot.mergeObjectAsync(n,r):Ot.mergeObjectSync(n,r)}get element(){return this._def.valueType}static create(e,n,s){return n instanceof Te?new ea({keyType:e,valueType:n,typeName:ce.ZodRecord,...ve(s)}):new ea({keyType:_n.create(),valueType:e,typeName:ce.ZodRecord,...ve(n)})}}class gl extends Te{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==Z.map)return X(s,{code:F.invalid_type,expected:Z.map,received:s.parsedType}),me;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,c],l)=>({key:r._parse(new Zn(s,a,s.path,[l,"key"])),value:i._parse(new Zn(s,c,s.path,[l,"value"]))}));if(s.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return me;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return me;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}}}}gl.create=(t,e,n)=>new gl({valueType:e,keyType:t,typeName:ce.ZodMap,...ve(n)});class Br extends Te{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==Z.set)return X(s,{code:F.invalid_type,expected:Z.set,received:s.parsedType}),me;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(X(s,{code:F.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),n.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(X(s,{code:F.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const l=new Set;for(const u of c){if(u.status==="aborted")return me;u.status==="dirty"&&n.dirty(),l.add(u.value)}return{status:n.value,value:l}}const a=[...s.data.values()].map((c,l)=>i._parse(new Zn(s,c,s.path,l)));return s.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new Br({...this._def,minSize:{value:e,message:ae.toString(n)}})}max(e,n){return new Br({...this._def,maxSize:{value:e,message:ae.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}Br.create=(t,e)=>new Br({valueType:t,minSize:null,maxSize:null,typeName:ce.ZodSet,...ve(e)});class mi extends Te{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==Z.function)return X(n,{code:F.invalid_type,expected:Z.function,received:n.parsedType}),me;function s(a,c){return hl({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ul(),Go].filter(l=>!!l),issueData:{code:F.invalid_arguments,argumentsError:c}})}function r(a,c){return hl({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ul(),Go].filter(l=>!!l),issueData:{code:F.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof xi?Ft(async(...a)=>{const c=new In([]),l=await this._def.args.parseAsync(a,i).catch(f=>{throw c.addIssue(s(a,f)),c}),u=await o(...l);return await this._def.returns._def.type.parseAsync(u,i).catch(f=>{throw c.addIssue(r(u,f)),c})}):Ft((...a)=>{const c=this._def.args.safeParse(a,i);if(!c.success)throw new In([s(a,c.error)]);const l=o(...c.data),u=this._def.returns.safeParse(l,i);if(!u.success)throw new In([r(l,u.error)]);return u.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new mi({...this._def,args:Yn.create(e).rest(Rr.create())})}returns(e){return new mi({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,s){return new mi({args:e||Yn.create([]).rest(Rr.create()),returns:n||Rr.create(),typeName:ce.ZodFunction,...ve(s)})}}class ta extends Te{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}ta.create=(t,e)=>new ta({getter:t,typeName:ce.ZodLazy,...ve(e)});class na extends Te{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return X(n,{received:n.data,code:F.invalid_literal,expected:this._def.value}),me}return{status:"valid",value:e.data}}get value(){return this._def.value}}na.create=(t,e)=>new na({value:t,typeName:ce.ZodLiteral,...ve(e)});function DE(t,e){return new Qs({values:t,typeName:ce.ZodEnum,...ve(e)})}class Qs extends Te{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),s=this._def.values;return X(n,{expected:xe.joinValues(s),received:n.parsedType,code:F.invalid_type}),me}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),s=this._def.values;return X(n,{received:n.data,code:F.invalid_enum_value,options:s}),me}return Ft(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Qs.create(e)}exclude(e){return Qs.create(this.options.filter(n=>!e.includes(n)))}}Qs.create=DE;class sa extends Te{_parse(e){const n=xe.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==Z.string&&s.parsedType!==Z.number){const r=xe.objectValues(n);return X(s,{expected:xe.joinValues(r),received:s.parsedType,code:F.invalid_type}),me}if(n.indexOf(e.data)===-1){const r=xe.objectValues(n);return X(s,{received:s.data,code:F.invalid_enum_value,options:r}),me}return Ft(e.data)}get enum(){return this._def.values}}sa.create=(t,e)=>new sa({values:t,typeName:ce.ZodNativeEnum,...ve(e)});class xi extends Te{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==Z.promise&&n.common.async===!1)return X(n,{code:F.invalid_type,expected:Z.promise,received:n.parsedType}),me;const s=n.parsedType===Z.promise?n.data:Promise.resolve(n.data);return Ft(s.then(r=>this._def.type.parseAsync(r,{path:n.path,errorMap:n.common.contextualErrorMap})))}}xi.create=(t,e)=>new xi({type:t,typeName:ce.ZodPromise,...ve(e)});class Nn extends Te{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ce.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=this._def.effect||null;if(r.type==="preprocess"){const o=r.transform(s.data);return s.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:s.path,parent:s})):this._def.schema._parseSync({data:o,path:s.path,parent:s})}const i={addIssue:o=>{X(s,o),o.fatal?n.abort():n.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="refinement"){const o=a=>{const c=r.refinement(a,i);if(s.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?me:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?me:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!dl(o))return o;const a=r.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>dl(o)?Promise.resolve(r.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);xe.assertNever(r)}}Nn.create=(t,e,n)=>new Nn({schema:t,typeName:ce.ZodEffects,effect:e,...ve(n)});Nn.createWithPreprocess=(t,e,n)=>new Nn({schema:e,effect:{type:"preprocess",transform:t},typeName:ce.ZodEffects,...ve(n)});class us extends Te{_parse(e){return this._getType(e)===Z.undefined?Ft(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}us.create=(t,e)=>new us({innerType:t,typeName:ce.ZodOptional,...ve(e)});class Vr extends Te{_parse(e){return this._getType(e)===Z.null?Ft(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Vr.create=(t,e)=>new Vr({innerType:t,typeName:ce.ZodNullable,...ve(e)});class ra extends Te{_parse(e){const{ctx:n}=this._processInputParams(e);let s=n.data;return n.parsedType===Z.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ra.create=(t,e)=>new ra({innerType:t,typeName:ce.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ve(e)});class yl extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),s={...n,common:{...n.common,issues:[]}},r=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return fl(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new In(s.common.issues)},input:s.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new In(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}yl.create=(t,e)=>new yl({innerType:t,typeName:ce.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ve(e)});class vl extends Te{_parse(e){if(this._getType(e)!==Z.nan){const s=this._getOrReturnCtx(e);return X(s,{code:F.invalid_type,expected:Z.nan,received:s.parsedType}),me}return{status:"valid",value:e.data}}}vl.create=t=>new vl({typeName:ce.ZodNaN,...ve(t)});const T2=Symbol("zod_brand");class PE extends Te{_parse(e){const{ctx:n}=this._processInputParams(e),s=n.data;return this._def.type._parse({data:s,path:n.path,parent:n})}unwrap(){return this._def.type}}class Pa extends Te{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?me:i.status==="dirty"?(n.dirty(),xE(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?me:r.status==="dirty"?(n.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,n){return new Pa({in:e,out:n,typeName:ce.ZodPipeline})}}const ME=(t,e={},n)=>t?Oi.create().superRefine((s,r)=>{var i,o;if(!t(s)){const a=typeof e=="function"?e(s):typeof e=="string"?{message:e}:e,c=(o=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,l=typeof a=="string"?{message:a}:a;r.addIssue({code:"custom",...l,fatal:c})}}):Oi.create(),E2={object:We.lazycreate};var ce;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(ce||(ce={}));const I2=(t,e={message:`Input not instance of ${t.name}`})=>ME(n=>n instanceof t,e),LE=_n.create,UE=Ys.create,b2=vl.create,C2=Xs.create,FE=Zo.create,S2=$r.create,A2=pl.create,k2=Yo.create,R2=Xo.create,N2=Oi.create,O2=Rr.create,x2=vs.create,D2=ml.create,P2=bn.create,M2=We.create,L2=We.strictCreate,U2=Qo.create,F2=Su.create,$2=Jo.create,B2=Yn.create,V2=ea.create,j2=gl.create,q2=Br.create,H2=mi.create,z2=ta.create,W2=na.create,K2=Qs.create,G2=sa.create,Z2=xi.create,jy=Nn.create,Y2=us.create,X2=Vr.create,Q2=Nn.createWithPreprocess,J2=Pa.create,eU=()=>LE().optional(),tU=()=>UE().optional(),nU=()=>FE().optional(),sU={string:t=>_n.create({...t,coerce:!0}),number:t=>Ys.create({...t,coerce:!0}),boolean:t=>Zo.create({...t,coerce:!0}),bigint:t=>Xs.create({...t,coerce:!0}),date:t=>$r.create({...t,coerce:!0})},rU=me;var ot=Object.freeze({__proto__:null,defaultErrorMap:Go,setErrorMap:c2,getErrorMap:ul,makeIssue:hl,EMPTY_PATH:l2,addIssueToContext:X,ParseStatus:Ot,INVALID:me,DIRTY:xE,OK:Ft,isAborted:Nd,isDirty:Od,isValid:dl,isAsync:fl,get util(){return xe},get objectUtil(){return Rd},ZodParsedType:Z,getParsedType:Ms,ZodType:Te,ZodString:_n,ZodNumber:Ys,ZodBigInt:Xs,ZodBoolean:Zo,ZodDate:$r,ZodSymbol:pl,ZodUndefined:Yo,ZodNull:Xo,ZodAny:Oi,ZodUnknown:Rr,ZodNever:vs,ZodVoid:ml,ZodArray:bn,ZodObject:We,ZodUnion:Qo,ZodDiscriminatedUnion:Su,ZodIntersection:Jo,ZodTuple:Yn,ZodRecord:ea,ZodMap:gl,ZodSet:Br,ZodFunction:mi,ZodLazy:ta,ZodLiteral:na,ZodEnum:Qs,ZodNativeEnum:sa,ZodPromise:xi,ZodEffects:Nn,ZodTransformer:Nn,ZodOptional:us,ZodNullable:Vr,ZodDefault:ra,ZodCatch:yl,ZodNaN:vl,BRAND:T2,ZodBranded:PE,ZodPipeline:Pa,custom:ME,Schema:Te,ZodSchema:Te,late:E2,get ZodFirstPartyTypeKind(){return ce},coerce:sU,any:N2,array:P2,bigint:C2,boolean:FE,date:S2,discriminatedUnion:F2,effect:jy,enum:K2,function:H2,instanceof:I2,intersection:$2,lazy:z2,literal:W2,map:j2,nan:b2,nativeEnum:G2,never:x2,null:R2,nullable:X2,number:UE,object:M2,oboolean:nU,onumber:tU,optional:Y2,ostring:eU,pipeline:J2,preprocess:Q2,promise:Z2,record:V2,set:q2,strictObject:L2,string:LE,symbol:A2,transformer:jy,tuple:B2,undefined:k2,union:U2,unknown:O2,void:D2,NEVER:rU,ZodIssueCode:F,quotelessJson:a2,ZodError:In});const iU=ot.enum(["Unknown","Facebook","Instagram","YouTube","Spotify","Twitter","LinkedIn","GitHub","TikTok"]),oU=ot.object({link:ot.string()}),qy=ot.object({userUid:ot.string(),userUri:ot.string().optional(),displayName:ot.string(),photoURL:ot.string(),coverImg:ot.string(),shortBio:ot.string(),bgColor:ot.string(),fontColor:ot.string().optional(),fontFamily:ot.string().optional(),longBio:ot.string(),socialLinks:ot.record(iU,oU)});var aU=Object.defineProperty,Hy=Object.getOwnPropertySymbols,cU=Object.prototype.hasOwnProperty,lU=Object.prototype.propertyIsEnumerable,zy=(t,e,n)=>e in t?aU(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$E=(t,e)=>{for(var n in e||(e={}))cU.call(e,n)&&zy(t,n,e[n]);if(Hy)for(var n of Hy(e))lU.call(e,n)&&zy(t,n,e[n]);return t},Au=t=>typeof t=="function",ku=t=>typeof t=="string",BE=t=>ku(t)&&t.trim().length>0,uU=t=>typeof t=="number",Tr=t=>typeof t>"u",ia=t=>typeof t=="object"&&t!==null,hU=t=>zn(t,"tag")&&BE(t.tag),VE=t=>window.TouchEvent&&t instanceof TouchEvent,jE=t=>zn(t,"component")&&qE(t.component),dU=t=>Au(t)||ia(t),qE=t=>!Tr(t)&&(ku(t)||dU(t)||jE(t)),Wy=t=>ia(t)&&["height","width","right","left","top","bottom"].every(e=>uU(t[e])),zn=(t,e)=>(ia(t)||Au(t))&&e in t,fU=(t=>()=>t++)(0);function Eh(t){return VE(t)?t.targetTouches[0].clientX:t.clientX}function Ky(t){return VE(t)?t.targetTouches[0].clientY:t.clientY}var pU=t=>{Tr(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},Ma=t=>jE(t)?Ma(t.component):hU(t)?Xn({render(){return t}}):typeof t=="string"?t:Se($s(t)),mU=t=>{if(typeof t=="string")return t;const e=zn(t,"props")&&ia(t.props)?t.props:{},n=zn(t,"listeners")&&ia(t.listeners)?t.listeners:{};return{component:Ma(t),props:e,listeners:n}},gU=()=>typeof window<"u",Mp=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},yU=t=>["on","off","emit"].every(e=>zn(t,e)&&Au(t[e])),Kt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Kt||(Kt={}));var _l;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(_l||(_l={}));var Gt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Gt||(Gt={}));var wn="Vue-Toastification",yn={type:{type:String,default:Kt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},HE={type:yn.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Sc={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:yn.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Dd={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},zE={transition:{type:[Object,String],default:`${wn}__bounce`}},vU={position:{type:String,default:_l.TOP_RIGHT},draggable:yn.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:yn.trueBoolean,pauseOnHover:yn.trueBoolean,closeOnClick:yn.trueBoolean,timeout:Dd.timeout,hideProgressBar:Dd.hideProgressBar,toastClassName:yn.classNames,bodyClassName:yn.classNames,icon:HE.customIcon,closeButton:Sc.component,closeButtonClassName:Sc.classNames,showCloseButtonOnHover:Sc.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new Mp}},_U={id:{type:[String,Number],required:!0,default:0},type:yn.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},wU={container:{type:[Object,Function],default:()=>document.body},newestOnTop:yn.trueBoolean,maxToasts:{type:Number,default:20},transition:zE.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:yn.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},hs={CORE_TOAST:vU,TOAST:_U,CONTAINER:wU,PROGRESS_BAR:Dd,ICON:HE,TRANSITION:zE,CLOSE_BUTTON:Sc},WE=Xn({name:"VtProgressBar",props:hs.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${wn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function TU(t,e){return Ke(),cn("div",{style:aa(t.style),class:zs(t.cpClass)},null,6)}WE.render=TU;var EU=WE,KE=Xn({name:"VtCloseButton",props:hs.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Ma(this.component):"button"},classes(){const t=[`${wn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),IU=Dl(" × ");function bU(t,e){return Ke(),$n(Jd(t.buttonComponent),Pl({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:la(()=>[IU]),_:1},16,["aria-label","class"])}KE.render=bU;var CU=KE,GE={},SU={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},AU=Js("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),kU=[AU];function RU(t,e){return Ke(),cn("svg",SU,kU)}GE.render=RU;var NU=GE,ZE={},OU={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},xU=Js("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),DU=[xU];function PU(t,e){return Ke(),cn("svg",OU,DU)}ZE.render=PU;var Gy=ZE,YE={},MU={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},LU=Js("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),UU=[LU];function FU(t,e){return Ke(),cn("svg",MU,UU)}YE.render=FU;var $U=YE,XE={},BU={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},VU=Js("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),jU=[VU];function qU(t,e){return Ke(),cn("svg",BU,jU)}XE.render=qU;var HU=XE,QE=Xn({name:"VtIcon",props:hs.ICON,computed:{customIconChildren(){return zn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return ku(this.customIcon)?this.trimValue(this.customIcon):zn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return zn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:qE(this.customIcon)?Ma(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Kt.DEFAULT]:Gy,[Kt.INFO]:Gy,[Kt.SUCCESS]:NU,[Kt.ERROR]:HU,[Kt.WARNING]:$U}[this.type]},iconClasses(){const t=[`${wn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return BE(t)?t.trim():e}}});function zU(t,e){return Ke(),$n(Jd(t.component),{class:zs(t.iconClasses)},{default:la(()=>[Dl(nv(t.customIconChildren),1)]),_:1},8,["class"])}QE.render=zU;var WU=QE,JE=Xn({name:"VtToast",components:{ProgressBar:EU,CloseButton:CU,Icon:WU},inheritAttrs:!1,props:Object.assign({},hs.CORE_TOAST,hs.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${wn}__toast`,`${wn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${wn}__toast--rtl`),t},bodyClasses(){return[`${wn}__toast-${ku(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Wy(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:zn,getVueComponentFromObj:Ma,closeToast(){this.eventBus.emit(Gt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:Eh(t),y:Ky(t)},this.dragStart=Eh(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Eh(t),y:Ky(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Wy(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),KU=["role"];function GU(t,e){const n=ao("Icon"),s=ao("CloseButton"),r=ao("ProgressBar");return Ke(),cn("div",{class:zs(t.classes),style:aa(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(Ke(),$n(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Vu("v-if",!0),Js("div",{role:t.accessibility.toastRole||"alert",class:zs(t.bodyClasses)},[typeof t.content=="string"?(Ke(),cn(vt,{key:0},[Dl(nv(t.content),1)],2112)):(Ke(),$n(Jd(t.getVueComponentFromObj(t.content)),Pl({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},Jb(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,KU),t.closeButton?(Ke(),$n(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:lS(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Vu("v-if",!0),t.timeout?(Ke(),$n(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Vu("v-if",!0)],38)}JE.render=GU;var ZU=JE,eI=Xn({name:"VtTransition",props:hs.TRANSITION,emits:["leave"],methods:{hasProp:zn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function YU(t,e){return Ke(),$n(tS,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:la(()=>[Qb(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}eI.render=YU;var XU=eI,tI=Xn({name:"VueToastification",devtools:{hide:!0},components:{Toast:ZU,VtTransition:XU},props:Object.assign({},hs.CORE_TOAST,hs.CONTAINER,hs.TRANSITION),data(){return{count:0,positions:Object.values(_l),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Gt.ADD,this.addToast),t.on(Gt.CLEAR,this.clearToasts),t.on(Gt.DISMISS,this.dismissToast),t.on(Gt.UPDATE,this.updateToast),t.on(Gt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){Au(t)&&(t=await t()),pU(this.$el),t.appendChild(this.$el)},setToast(t){Tr(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=mU(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Tr(e)&&!Tr(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Tr(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${wn}__container`,t].concat(this.defaults.containerClassName)}}});function QU(t,e){const n=ao("Toast"),s=ao("VtTransition");return Ke(),cn("div",null,[(Ke(!0),cn(vt,null,cm(t.positions,r=>(Ke(),cn("div",{key:r},[ft(s,{transition:t.defaults.transition,class:zs(t.getClasses(r))},{default:la(()=>[(Ke(!0),cn(vt,null,cm(t.getPositionToasts(r),i=>(Ke(),$n(n,Pl({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}tI.render=QU;var JU=tI,Zy=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new Mp;e&&Al(()=>{const i=a_(JU,$E({},t)),o=i.mount(document.createElement("div")),a=t.onMounted;if(Tr(a)||a(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${wn}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const a=Object.assign({},{id:fU(),type:Kt.DEFAULT},o,{content:i});return n.emit(Gt.ADD,a),a.id};s.clear=()=>n.emit(Gt.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Gt.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Gt.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(Gt.UPDATE,{id:i,options:l,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Kt.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Kt.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Kt.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Kt.WARNING})),s},eF=()=>{const t=()=>console.warn(`[${wn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function Pd(t){return gU()?yU(t)?Zy({eventBus:t},!1):Zy(t,!0):eF()}var nI=Symbol("VueToastification"),sI=new Mp,tF=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=Pd($E({eventBus:sI},e));t.provide(nI,n)},nF=t=>{if(t)return Pd(t);const e=Xv()?En(nI,void 0):void 0;return e||Pd(sI)},sF=tF;const Xi=nF(),Yy=wS("profile",{state:()=>({profile:null}),getters:{isOwnProfile({profile:t}){var e,n;return(e=ln.currentUser)!=null&&e.uid?((n=ln.currentUser)==null?void 0:n.uid)===(t==null?void 0:t.userUid):!1},invertedBgColor:({profile:t})=>t!=null&&t.bgColor?t2(t.bgColor):"black"},actions:{updateProfile(t){if(!this.profile||!this.isOwnProfile)throw new Error("Unathorized");const e=Object.keys(t).reduce((n,s)=>JSON.stringify(t[s])===JSON.stringify(this.profile?this.profile[s]:void 0)?n:{...n,[s]:t[s]},{});this.profile={...this.profile,...t},!(Object.keys(e).length<1)&&FM($y(),e).then(()=>Xi("Changes saved")).catch(()=>Xi("Error saving changes"))},async loadProfile(t){try{const e=cl(Ko,Cu,t),n=await Dy(e);if(!n.exists()){this.profile=null;return}this.profile=qy.parse(n.data())}catch{Xi("Error loading profile"),this.profile=null}},async loadPNS(t){const e=cl(Ko,"ib_dns",t),n=await Dy(e);if(!n.exists()){this.profile=null;return}const{uid:s}=n.data();if(!s){this.profile=null;return}return this.loadProfile(s)},async createOwnProfile(){var t;try{if(!((t=ln.currentUser)!=null&&t.uid))return;const e=qy.parse(o2(ln.currentUser));await UM($y(),e),this.profile=e,Xi("Profile created");return}catch{Xi("Error creating profile")}}}}),Er=TA({history:FS("/"),routes:[{path:"/",name:"Login",component:()=>Qa(()=>import("./Login-ae730696.js"),["assets/Login-ae730696.js","assets/Login-bbec2024.css"]),beforeEnter:async(t,e,n)=>{var s;(s=ln.currentUser)!=null&&s.uid&&(await Er.replace(`/u/${ln.currentUser.uid}`),window.location.reload()),n()}},{path:"/u/:profileUid",name:"Profile",props:!1,component:()=>Qa(()=>import("./Profile-5cb5de16.js"),["assets/Profile-5cb5de16.js","assets/Profile-6e67e91c.css"]),beforeEnter:async(t,e,n)=>{var i,o,a;const s=Yy(),r=t.params.profileUid;await s.loadProfile(r),s.profile||(r===((i=ln.currentUser)==null?void 0:i.uid)?await s.createOwnProfile():await Er.replace("/404")),(o=s.profile)!=null&&o.userUri&&await Er.replace(`/profile/${(a=s.profile)==null?void 0:a.userUri}`),n()}},{path:"/profile/:profileURI",name:"PNS Profile",props:!1,component:()=>Qa(()=>import("./Profile-5cb5de16.js"),["assets/Profile-5cb5de16.js","assets/Profile-6e67e91c.css"]),beforeEnter:async(t,e,n)=>{var i;const s=Yy(),r=t.params.profileURI;r!==((i=s.profile)==null?void 0:i.userUri)&&await s.loadPNS(r),s.profile||await Er.replace("/404"),n()}},{path:"/:pathMatch(.*)",name:"Error404",component:()=>Qa(()=>import("./Error404-01ced7dd.js"),["assets/Error404-01ced7dd.js","assets/Error404-4d995ba2.css"])}]});function rF(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rI={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(t){(function(e,n,s,r){var i=["","webkit","Moz","MS","ms","o"],o=n.createElement("div"),a="function",c=Math.round,l=Math.abs,u=Date.now;function h(d,p,y){return setTimeout(j(d,y),p)}function f(d,p,y){return Array.isArray(d)?(m(d,y[p],y),!0):!1}function m(d,p,y){var T;if(d)if(d.forEach)d.forEach(p,y);else if(d.length!==r)for(T=0;T<d.length;)p.call(y,d[T],T,d),T++;else for(T in d)d.hasOwnProperty(T)&&p.call(y,d[T],T,d)}function w(d,p,y){var T="DEPRECATED METHOD: "+p+`
`+y+` AT 
`;return function(){var x=new Error("get-stack-trace"),Y=x&&x.stack?x.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",Ie=e.console&&(e.console.warn||e.console.log);return Ie&&Ie.call(e.console,T,Y),d.apply(this,arguments)}}var E;typeof Object.assign!="function"?E=function(p){if(p===r||p===null)throw new TypeError("Cannot convert undefined or null to object");for(var y=Object(p),T=1;T<arguments.length;T++){var x=arguments[T];if(x!==r&&x!==null)for(var Y in x)x.hasOwnProperty(Y)&&(y[Y]=x[Y])}return y}:E=Object.assign;var S=w(function(p,y,T){for(var x=Object.keys(y),Y=0;Y<x.length;)(!T||T&&p[x[Y]]===r)&&(p[x[Y]]=y[x[Y]]),Y++;return p},"extend","Use `assign`."),D=w(function(p,y){return S(p,y,!0)},"merge","Use `assign`.");function R(d,p,y){var T=p.prototype,x;x=d.prototype=Object.create(T),x.constructor=d,x._super=T,y&&E(x,y)}function j(d,p){return function(){return d.apply(p,arguments)}}function I(d,p){return typeof d==a?d.apply(p&&p[0]||r,p):d}function $(d,p){return d===r?p:d}function te(d,p,y){m(ee(p),function(T){d.addEventListener(T,y,!1)})}function se(d,p,y){m(ee(p),function(T){d.removeEventListener(T,y,!1)})}function P(d,p){for(;d;){if(d==p)return!0;d=d.parentNode}return!1}function B(d,p){return d.indexOf(p)>-1}function ee(d){return d.trim().split(/\s+/g)}function le(d,p,y){if(d.indexOf&&!y)return d.indexOf(p);for(var T=0;T<d.length;){if(y&&d[T][y]==p||!y&&d[T]===p)return T;T++}return-1}function z(d){return Array.prototype.slice.call(d,0)}function _e(d,p,y){for(var T=[],x=[],Y=0;Y<d.length;){var Ie=p?d[Y][p]:d[Y];le(x,Ie)<0&&T.push(d[Y]),x[Y]=Ie,Y++}return y&&(p?T=T.sort(function(gt,Dt){return gt[p]>Dt[p]}):T=T.sort()),T}function Fe(d,p){for(var y,T,x=p[0].toUpperCase()+p.slice(1),Y=0;Y<i.length;){if(y=i[Y],T=y?y+x:p,T in d)return T;Y++}return r}var tt=1;function we(){return tt++}function Ae(d){var p=d.ownerDocument||d;return p.defaultView||p.parentWindow||e}var Ne=/mobile|tablet|ip(ad|hone|od)|android/i,en="ontouchstart"in e,xn=Fe(e,"PointerEvent")!==r,tn=en&&Ne.test(navigator.userAgent),nt="touch",ws="pen",Dn="mouse",Kr="kinect",lt=25,b=1,H=2,M=4,G=8,Ce=1,g=2,v=4,_=8,C=16,k=g|v,O=_|C,W=k|O,U=["x","y"],V=["clientX","clientY"];function N(d,p){var y=this;this.manager=d,this.callback=p,this.element=d.element,this.target=d.options.inputTarget,this.domHandler=function(T){I(d.options.enable,[d])&&y.handler(T)},this.init()}N.prototype={handler:function(){},init:function(){this.evEl&&te(this.element,this.evEl,this.domHandler),this.evTarget&&te(this.target,this.evTarget,this.domHandler),this.evWin&&te(Ae(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&se(this.element,this.evEl,this.domHandler),this.evTarget&&se(this.target,this.evTarget,this.domHandler),this.evWin&&se(Ae(this.element),this.evWin,this.domHandler)}};function re(d){var p,y=d.options.inputClass;return y?p=y:xn?p=Ru:tn?p=$a:en?p=Nu:p=Fa,new p(d,Q)}function Q(d,p,y){var T=y.pointers.length,x=y.changedPointers.length,Y=p&b&&T-x===0,Ie=p&(M|G)&&T-x===0;y.isFirst=!!Y,y.isFinal=!!Ie,Y&&(d.session={}),y.eventType=p,ie(d,y),d.emit("hammer.input",y),d.recognize(y),d.session.prevInput=y}function ie(d,p){var y=d.session,T=p.pointers,x=T.length;y.firstInput||(y.firstInput=Me(p)),x>1&&!y.firstMultiple?y.firstMultiple=Me(p):x===1&&(y.firstMultiple=!1);var Y=y.firstInput,Ie=y.firstMultiple,ut=Ie?Ie.center:Y.center,gt=p.center=De(T);p.timeStamp=u(),p.deltaTime=p.timeStamp-Y.timeStamp,p.angle=Gr(ut,gt),p.distance=pn(ut,gt),ue(y,p),p.offsetDirection=$t(p.deltaX,p.deltaY);var Dt=ze(p.deltaTime,p.deltaX,p.deltaY);p.overallVelocityX=Dt.x,p.overallVelocityY=Dt.y,p.overallVelocity=l(Dt.x)>l(Dt.y)?Dt.x:Dt.y,p.scale=Ie?La(Ie.pointers,T):1,p.rotation=Ie?or(Ie.pointers,T):0,p.maxPointers=y.prevInput?p.pointers.length>y.prevInput.maxPointers?p.pointers.length:y.prevInput.maxPointers:p.pointers.length,Ee(y,p);var Mn=d.element;P(p.srcEvent.target,Mn)&&(Mn=p.srcEvent.target),p.target=Mn}function ue(d,p){var y=p.center,T=d.offsetDelta||{},x=d.prevDelta||{},Y=d.prevInput||{};(p.eventType===b||Y.eventType===M)&&(x=d.prevDelta={x:Y.deltaX||0,y:Y.deltaY||0},T=d.offsetDelta={x:y.x,y:y.y}),p.deltaX=x.x+(y.x-T.x),p.deltaY=x.y+(y.y-T.y)}function Ee(d,p){var y=d.lastInterval||p,T=p.timeStamp-y.timeStamp,x,Y,Ie,ut;if(p.eventType!=G&&(T>lt||y.velocity===r)){var gt=p.deltaX-y.deltaX,Dt=p.deltaY-y.deltaY,Mn=ze(T,gt,Dt);Y=Mn.x,Ie=Mn.y,x=l(Mn.x)>l(Mn.y)?Mn.x:Mn.y,ut=$t(gt,Dt),d.lastInterval=p}else x=y.velocity,Y=y.velocityX,Ie=y.velocityY,ut=y.direction;p.velocity=x,p.velocityX=Y,p.velocityY=Ie,p.direction=ut}function Me(d){for(var p=[],y=0;y<d.pointers.length;)p[y]={clientX:c(d.pointers[y].clientX),clientY:c(d.pointers[y].clientY)},y++;return{timeStamp:u(),pointers:p,center:De(p),deltaX:d.deltaX,deltaY:d.deltaY}}function De(d){var p=d.length;if(p===1)return{x:c(d[0].clientX),y:c(d[0].clientY)};for(var y=0,T=0,x=0;x<p;)y+=d[x].clientX,T+=d[x].clientY,x++;return{x:c(y/p),y:c(T/p)}}function ze(d,p,y){return{x:p/d||0,y:y/d||0}}function $t(d,p){return d===p?Ce:l(d)>=l(p)?d<0?g:v:p<0?_:C}function pn(d,p,y){y||(y=U);var T=p[y[0]]-d[y[0]],x=p[y[1]]-d[y[1]];return Math.sqrt(T*T+x*x)}function Gr(d,p,y){y||(y=U);var T=p[y[0]]-d[y[0]],x=p[y[1]]-d[y[1]];return Math.atan2(x,T)*180/Math.PI}function or(d,p){return Gr(p[1],p[0],V)+Gr(d[1],d[0],V)}function La(d,p){return pn(p[0],p[1],V)/pn(d[0],d[1],V)}var xt={mousedown:b,mousemove:H,mouseup:M},nn="mousedown",Ua="mousemove mouseup";function Fa(){this.evEl=nn,this.evWin=Ua,this.pressed=!1,N.apply(this,arguments)}R(Fa,N,{handler:function(p){var y=xt[p.type];y&b&&p.button===0&&(this.pressed=!0),y&H&&p.which!==1&&(y=M),this.pressed&&(y&M&&(this.pressed=!1),this.callback(this.manager,y,{pointers:[p],changedPointers:[p],pointerType:Dn,srcEvent:p}))}});var iI={pointerdown:b,pointermove:H,pointerup:M,pointercancel:G,pointerout:G},oI={2:nt,3:ws,4:Dn,5:Kr},Lp="pointerdown",Up="pointermove pointerup pointercancel";e.MSPointerEvent&&!e.PointerEvent&&(Lp="MSPointerDown",Up="MSPointerMove MSPointerUp MSPointerCancel");function Ru(){this.evEl=Lp,this.evWin=Up,N.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}R(Ru,N,{handler:function(p){var y=this.store,T=!1,x=p.type.toLowerCase().replace("ms",""),Y=iI[x],Ie=oI[p.pointerType]||p.pointerType,ut=Ie==nt,gt=le(y,p.pointerId,"pointerId");Y&b&&(p.button===0||ut)?gt<0&&(y.push(p),gt=y.length-1):Y&(M|G)&&(T=!0),!(gt<0)&&(y[gt]=p,this.callback(this.manager,Y,{pointers:y,changedPointers:[p],pointerType:Ie,srcEvent:p}),T&&y.splice(gt,1))}});var aI={touchstart:b,touchmove:H,touchend:M,touchcancel:G},cI="touchstart",lI="touchstart touchmove touchend touchcancel";function Fp(){this.evTarget=cI,this.evWin=lI,this.started=!1,N.apply(this,arguments)}R(Fp,N,{handler:function(p){var y=aI[p.type];if(y===b&&(this.started=!0),!!this.started){var T=uI.call(this,p,y);y&(M|G)&&T[0].length-T[1].length===0&&(this.started=!1),this.callback(this.manager,y,{pointers:T[0],changedPointers:T[1],pointerType:nt,srcEvent:p})}}});function uI(d,p){var y=z(d.touches),T=z(d.changedTouches);return p&(M|G)&&(y=_e(y.concat(T),"identifier",!0)),[y,T]}var hI={touchstart:b,touchmove:H,touchend:M,touchcancel:G},dI="touchstart touchmove touchend touchcancel";function $a(){this.evTarget=dI,this.targetIds={},N.apply(this,arguments)}R($a,N,{handler:function(p){var y=hI[p.type],T=fI.call(this,p,y);T&&this.callback(this.manager,y,{pointers:T[0],changedPointers:T[1],pointerType:nt,srcEvent:p})}});function fI(d,p){var y=z(d.touches),T=this.targetIds;if(p&(b|H)&&y.length===1)return T[y[0].identifier]=!0,[y,y];var x,Y,Ie=z(d.changedTouches),ut=[],gt=this.target;if(Y=y.filter(function(Dt){return P(Dt.target,gt)}),p===b)for(x=0;x<Y.length;)T[Y[x].identifier]=!0,x++;for(x=0;x<Ie.length;)T[Ie[x].identifier]&&ut.push(Ie[x]),p&(M|G)&&delete T[Ie[x].identifier],x++;if(ut.length)return[_e(Y.concat(ut),"identifier",!0),ut]}var pI=2500,$p=25;function Nu(){N.apply(this,arguments);var d=j(this.handler,this);this.touch=new $a(this.manager,d),this.mouse=new Fa(this.manager,d),this.primaryTouch=null,this.lastTouches=[]}R(Nu,N,{handler:function(p,y,T){var x=T.pointerType==nt,Y=T.pointerType==Dn;if(!(Y&&T.sourceCapabilities&&T.sourceCapabilities.firesTouchEvents)){if(x)mI.call(this,y,T);else if(Y&&gI.call(this,T))return;this.callback(p,y,T)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function mI(d,p){d&b?(this.primaryTouch=p.changedPointers[0].identifier,Bp.call(this,p)):d&(M|G)&&Bp.call(this,p)}function Bp(d){var p=d.changedPointers[0];if(p.identifier===this.primaryTouch){var y={x:p.clientX,y:p.clientY};this.lastTouches.push(y);var T=this.lastTouches,x=function(){var Y=T.indexOf(y);Y>-1&&T.splice(Y,1)};setTimeout(x,pI)}}function gI(d){for(var p=d.srcEvent.clientX,y=d.srcEvent.clientY,T=0;T<this.lastTouches.length;T++){var x=this.lastTouches[T],Y=Math.abs(p-x.x),Ie=Math.abs(y-x.y);if(Y<=$p&&Ie<=$p)return!0}return!1}var Vp=Fe(o.style,"touchAction"),jp=Vp!==r,qp="compute",Hp="auto",Ou="manipulation",ar="none",ji="pan-x",qi="pan-y",Ba=vI();function xu(d,p){this.manager=d,this.set(p)}xu.prototype={set:function(d){d==qp&&(d=this.compute()),jp&&this.manager.element.style&&Ba[d]&&(this.manager.element.style[Vp]=d),this.actions=d.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var d=[];return m(this.manager.recognizers,function(p){I(p.options.enable,[p])&&(d=d.concat(p.getTouchAction()))}),yI(d.join(" "))},preventDefaults:function(d){var p=d.srcEvent,y=d.offsetDirection;if(this.manager.session.prevented){p.preventDefault();return}var T=this.actions,x=B(T,ar)&&!Ba[ar],Y=B(T,qi)&&!Ba[qi],Ie=B(T,ji)&&!Ba[ji];if(x){var ut=d.pointers.length===1,gt=d.distance<2,Dt=d.deltaTime<250;if(ut&&gt&&Dt)return}if(!(Ie&&Y)&&(x||Y&&y&k||Ie&&y&O))return this.preventSrc(p)},preventSrc:function(d){this.manager.session.prevented=!0,d.preventDefault()}};function yI(d){if(B(d,ar))return ar;var p=B(d,ji),y=B(d,qi);return p&&y?ar:p||y?p?ji:qi:B(d,Ou)?Ou:Hp}function vI(){if(!jp)return!1;var d={},p=e.CSS&&e.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(y){d[y]=p?e.CSS.supports("touch-action",y):!0}),d}var Va=1,sn=2,Zr=4,Ts=8,Qn=Ts,Hi=16,Pn=32;function Jn(d){this.options=E({},this.defaults,d||{}),this.id=we(),this.manager=null,this.options.enable=$(this.options.enable,!0),this.state=Va,this.simultaneous={},this.requireFail=[]}Jn.prototype={defaults:{},set:function(d){return E(this.options,d),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(d){if(f(d,"recognizeWith",this))return this;var p=this.simultaneous;return d=ja(d,this),p[d.id]||(p[d.id]=d,d.recognizeWith(this)),this},dropRecognizeWith:function(d){return f(d,"dropRecognizeWith",this)?this:(d=ja(d,this),delete this.simultaneous[d.id],this)},requireFailure:function(d){if(f(d,"requireFailure",this))return this;var p=this.requireFail;return d=ja(d,this),le(p,d)===-1&&(p.push(d),d.requireFailure(this)),this},dropRequireFailure:function(d){if(f(d,"dropRequireFailure",this))return this;d=ja(d,this);var p=le(this.requireFail,d);return p>-1&&this.requireFail.splice(p,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(d){return!!this.simultaneous[d.id]},emit:function(d){var p=this,y=this.state;function T(x){p.manager.emit(x,d)}y<Ts&&T(p.options.event+zp(y)),T(p.options.event),d.additionalEvent&&T(d.additionalEvent),y>=Ts&&T(p.options.event+zp(y))},tryEmit:function(d){if(this.canEmit())return this.emit(d);this.state=Pn},canEmit:function(){for(var d=0;d<this.requireFail.length;){if(!(this.requireFail[d].state&(Pn|Va)))return!1;d++}return!0},recognize:function(d){var p=E({},d);if(!I(this.options.enable,[this,p])){this.reset(),this.state=Pn;return}this.state&(Qn|Hi|Pn)&&(this.state=Va),this.state=this.process(p),this.state&(sn|Zr|Ts|Hi)&&this.tryEmit(p)},process:function(d){},getTouchAction:function(){},reset:function(){}};function zp(d){return d&Hi?"cancel":d&Ts?"end":d&Zr?"move":d&sn?"start":""}function Wp(d){return d==C?"down":d==_?"up":d==g?"left":d==v?"right":""}function ja(d,p){var y=p.manager;return y?y.get(d):d}function mn(){Jn.apply(this,arguments)}R(mn,Jn,{defaults:{pointers:1},attrTest:function(d){var p=this.options.pointers;return p===0||d.pointers.length===p},process:function(d){var p=this.state,y=d.eventType,T=p&(sn|Zr),x=this.attrTest(d);return T&&(y&G||!x)?p|Hi:T||x?y&M?p|Ts:p&sn?p|Zr:sn:Pn}});function qa(){mn.apply(this,arguments),this.pX=null,this.pY=null}R(qa,mn,{defaults:{event:"pan",threshold:10,pointers:1,direction:W},getTouchAction:function(){var d=this.options.direction,p=[];return d&k&&p.push(qi),d&O&&p.push(ji),p},directionTest:function(d){var p=this.options,y=!0,T=d.distance,x=d.direction,Y=d.deltaX,Ie=d.deltaY;return x&p.direction||(p.direction&k?(x=Y===0?Ce:Y<0?g:v,y=Y!=this.pX,T=Math.abs(d.deltaX)):(x=Ie===0?Ce:Ie<0?_:C,y=Ie!=this.pY,T=Math.abs(d.deltaY))),d.direction=x,y&&T>p.threshold&&x&p.direction},attrTest:function(d){return mn.prototype.attrTest.call(this,d)&&(this.state&sn||!(this.state&sn)&&this.directionTest(d))},emit:function(d){this.pX=d.deltaX,this.pY=d.deltaY;var p=Wp(d.direction);p&&(d.additionalEvent=this.options.event+p),this._super.emit.call(this,d)}});function Du(){mn.apply(this,arguments)}R(Du,mn,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ar]},attrTest:function(d){return this._super.attrTest.call(this,d)&&(Math.abs(d.scale-1)>this.options.threshold||this.state&sn)},emit:function(d){if(d.scale!==1){var p=d.scale<1?"in":"out";d.additionalEvent=this.options.event+p}this._super.emit.call(this,d)}});function Pu(){Jn.apply(this,arguments),this._timer=null,this._input=null}R(Pu,Jn,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Hp]},process:function(d){var p=this.options,y=d.pointers.length===p.pointers,T=d.distance<p.threshold,x=d.deltaTime>p.time;if(this._input=d,!T||!y||d.eventType&(M|G)&&!x)this.reset();else if(d.eventType&b)this.reset(),this._timer=h(function(){this.state=Qn,this.tryEmit()},p.time,this);else if(d.eventType&M)return Qn;return Pn},reset:function(){clearTimeout(this._timer)},emit:function(d){this.state===Qn&&(d&&d.eventType&M?this.manager.emit(this.options.event+"up",d):(this._input.timeStamp=u(),this.manager.emit(this.options.event,this._input)))}});function Mu(){mn.apply(this,arguments)}R(Mu,mn,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ar]},attrTest:function(d){return this._super.attrTest.call(this,d)&&(Math.abs(d.rotation)>this.options.threshold||this.state&sn)}});function Lu(){mn.apply(this,arguments)}R(Lu,mn,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:k|O,pointers:1},getTouchAction:function(){return qa.prototype.getTouchAction.call(this)},attrTest:function(d){var p=this.options.direction,y;return p&(k|O)?y=d.overallVelocity:p&k?y=d.overallVelocityX:p&O&&(y=d.overallVelocityY),this._super.attrTest.call(this,d)&&p&d.offsetDirection&&d.distance>this.options.threshold&&d.maxPointers==this.options.pointers&&l(y)>this.options.velocity&&d.eventType&M},emit:function(d){var p=Wp(d.offsetDirection);p&&this.manager.emit(this.options.event+p,d),this.manager.emit(this.options.event,d)}});function Ha(){Jn.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}R(Ha,Jn,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ou]},process:function(d){var p=this.options,y=d.pointers.length===p.pointers,T=d.distance<p.threshold,x=d.deltaTime<p.time;if(this.reset(),d.eventType&b&&this.count===0)return this.failTimeout();if(T&&x&&y){if(d.eventType!=M)return this.failTimeout();var Y=this.pTime?d.timeStamp-this.pTime<p.interval:!0,Ie=!this.pCenter||pn(this.pCenter,d.center)<p.posThreshold;this.pTime=d.timeStamp,this.pCenter=d.center,!Ie||!Y?this.count=1:this.count+=1,this._input=d;var ut=this.count%p.taps;if(ut===0)return this.hasRequireFailures()?(this._timer=h(function(){this.state=Qn,this.tryEmit()},p.interval,this),sn):Qn}return Pn},failTimeout:function(){return this._timer=h(function(){this.state=Pn},this.options.interval,this),Pn},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Qn&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function es(d,p){return p=p||{},p.recognizers=$(p.recognizers,es.defaults.preset),new Uu(d,p)}es.VERSION="2.0.7",es.defaults={domEvents:!1,touchAction:qp,enable:!0,inputTarget:null,inputClass:null,preset:[[Mu,{enable:!1}],[Du,{enable:!1},["rotate"]],[Lu,{direction:k}],[qa,{direction:k},["swipe"]],[Ha],[Ha,{event:"doubletap",taps:2},["tap"]],[Pu]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var _I=1,Kp=2;function Uu(d,p){this.options=E({},es.defaults,p||{}),this.options.inputTarget=this.options.inputTarget||d,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=d,this.input=re(this),this.touchAction=new xu(this,this.options.touchAction),Gp(this,!0),m(this.options.recognizers,function(y){var T=this.add(new y[0](y[1]));y[2]&&T.recognizeWith(y[2]),y[3]&&T.requireFailure(y[3])},this)}Uu.prototype={set:function(d){return E(this.options,d),d.touchAction&&this.touchAction.update(),d.inputTarget&&(this.input.destroy(),this.input.target=d.inputTarget,this.input.init()),this},stop:function(d){this.session.stopped=d?Kp:_I},recognize:function(d){var p=this.session;if(!p.stopped){this.touchAction.preventDefaults(d);var y,T=this.recognizers,x=p.curRecognizer;(!x||x&&x.state&Qn)&&(x=p.curRecognizer=null);for(var Y=0;Y<T.length;)y=T[Y],p.stopped!==Kp&&(!x||y==x||y.canRecognizeWith(x))?y.recognize(d):y.reset(),!x&&y.state&(sn|Zr|Ts)&&(x=p.curRecognizer=y),Y++}},get:function(d){if(d instanceof Jn)return d;for(var p=this.recognizers,y=0;y<p.length;y++)if(p[y].options.event==d)return p[y];return null},add:function(d){if(f(d,"add",this))return this;var p=this.get(d.options.event);return p&&this.remove(p),this.recognizers.push(d),d.manager=this,this.touchAction.update(),d},remove:function(d){if(f(d,"remove",this))return this;if(d=this.get(d),d){var p=this.recognizers,y=le(p,d);y!==-1&&(p.splice(y,1),this.touchAction.update())}return this},on:function(d,p){if(d!==r&&p!==r){var y=this.handlers;return m(ee(d),function(T){y[T]=y[T]||[],y[T].push(p)}),this}},off:function(d,p){if(d!==r){var y=this.handlers;return m(ee(d),function(T){p?y[T]&&y[T].splice(le(y[T],p),1):delete y[T]}),this}},emit:function(d,p){this.options.domEvents&&wI(d,p);var y=this.handlers[d]&&this.handlers[d].slice();if(!(!y||!y.length)){p.type=d,p.preventDefault=function(){p.srcEvent.preventDefault()};for(var T=0;T<y.length;)y[T](p),T++}},destroy:function(){this.element&&Gp(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Gp(d,p){var y=d.element;if(y.style){var T;m(d.options.cssProps,function(x,Y){T=Fe(y.style,Y),p?(d.oldCssProps[T]=y.style[T],y.style[T]=x):y.style[T]=d.oldCssProps[T]||""}),p||(d.oldCssProps={})}}function wI(d,p){var y=n.createEvent("Event");y.initEvent(d,!0,!0),y.gesture=p,p.target.dispatchEvent(y)}E(es,{INPUT_START:b,INPUT_MOVE:H,INPUT_END:M,INPUT_CANCEL:G,STATE_POSSIBLE:Va,STATE_BEGAN:sn,STATE_CHANGED:Zr,STATE_ENDED:Ts,STATE_RECOGNIZED:Qn,STATE_CANCELLED:Hi,STATE_FAILED:Pn,DIRECTION_NONE:Ce,DIRECTION_LEFT:g,DIRECTION_RIGHT:v,DIRECTION_UP:_,DIRECTION_DOWN:C,DIRECTION_HORIZONTAL:k,DIRECTION_VERTICAL:O,DIRECTION_ALL:W,Manager:Uu,Input:N,TouchAction:xu,TouchInput:$a,MouseInput:Fa,PointerEventInput:Ru,TouchMouseInput:Nu,SingleTouchInput:Fp,Recognizer:Jn,AttrRecognizer:mn,Tap:Ha,Pan:qa,Swipe:Lu,Pinch:Du,Rotate:Mu,Press:Pu,on:te,off:se,each:m,merge:D,extend:S,assign:E,inherit:R,bindFn:j,prefixed:Fe});var TI=typeof e<"u"?e:typeof self<"u"?self:{};TI.Hammer=es,typeof r=="function"&&r.amd?r(function(){return es}):t.exports?t.exports=es:e[s]=es})(window,document,"Hammer")})(rI);var iF=rI.exports;const si=rF(iF),oF=["tap","pan","pinch","press","rotate","swipe"],hc=["panstart","panend","panmove","pancancel","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout","pressup","rotatestart","rotatemove","rotateend","rotatecancel"],aF=["up","down","left","right","horizontal","vertical","all"],cF={touchAction:"auto",inputClass:si.TouchInput},lF={install(t,e={}){t.directive("hammer",{beforeMount:(n,s)=>{var l;n.hammer||(n.hammer=new si.Manager(n,cF));const r=n.hammer,i=s.arg;i||console.warn("[vue-hammer] event type argument is required."),n.__hammerConfig=n.__hammerConfig||{},n.__hammerConfig[i]={};const o=s.modifiers;n.__hammerConfig[i].direction=n.__hammerConfig[i].direction||[],Object.keys(o).length&&Object.keys(o).filter(u=>s.modifiers[u]).forEach(u=>{const h=n.__hammerConfig[i].direction;h.indexOf(u)===-1&&h.push(String(u))});let a,c;if((l=e.customEvents)!=null&&l[i]){const u=e.customEvents[i];a=u.type,c=new si[this.capitalize(a)](u),c.recognizeWith(r.recognizers),r.add(c)}else{a=oF.find(m=>m===i);const u=hc.find(m=>m===i);if(!a&&!u){console.warn("[vue-hammer] invalid event type: "+i);return}if(u&&n.__hammerConfig[u].direction.length!==0&&console.warn("[vue-hammer] "+u+" should not have directions"),!a)return;if((a==="tap"||a==="pinch"||a==="press"||a==="rotate")&&n.__hammerConfig[a].direction.length!==0)throw Error("[vue-hammer] "+a+" should not have directions");c=r.get(a),c||(c=new si[this.capitalize(a)],c.recognizeWith(r.recognizers),r.add(c));const h=e[a];h&&(this.guardDirections(h),c.set(h));const f=n.hammerOptions&&n.hammerOptions[a];f&&(this.guardDirections(f),c.set(f))}},mounted:(n,s)=>{const r=n.hammer,i=s.arg,o=hc.find(a=>a===i)?i:this.buildEventWithDirections(i,n.__hammerConfig[i].direction);r.handler&&r.off(o,r.handler),typeof s.value!="function"?(r.handler=null,console.warn("[vue-hammer] invalid handler function for v-hammer: "+s.arg)):r.on(o,r.handler=s.value)},updated:(n,s)=>{const r=n.hammer,i=s.arg,o=hc.find(a=>a===i)?i:this.buildEventWithDirections(i,n.__hammerConfig[i].direction);r.handler&&r.off(o,r.handler),typeof s.value!="function"?(r.handler=null,console.warn("[vue-hammer] invalid handler function for v-hammer: "+s.arg)):r.on(o,r.handler=s.value)},unmounted:(n,s)=>{const r=n.hammer,i=s.arg,o=hc.find(a=>a===i)?i:this.buildEventWithDirections(i,n.__hammerConfig[i].direction);r.handler&&n.hammer.off(o,r.handler),Object.keys(r.handlers).length||(n.hammer.destroy(),n.hammer=null)}})},guardDirections(t){const e=t.direction;if(typeof e=="string"){const n="DIRECTION_"+e.toUpperCase();aF.indexOf(e)>-1&&Object.prototype.hasOwnProperty.call(si,n)?t.direction=si[n]:console.warn("[vue-hammer] invalid direction: "+e)}},buildEventWithDirections(t,e){const n={};e.forEach(i=>{i=i.toLowerCase(),i==="horizontal"?(n.left=1,n.right=1):i==="vertical"?(n.up=1,n.down=1):i==="all"?(n.left=1,n.right=1,n.up=1,n.down=1):n[i]=1});const s=Object.keys(n);return s.length===0?t:s.map(i=>t+i).join(" ")},capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}};const uF=ot.object({uid:ot.string(),displayName:ot.string().nullable(),photoURL:ot.string().nullable()}).nullable(),hF=pS(),dF={timeout:2e3,maxToasts:2};let Ih;Z1(ln,t=>{const e=uF.parse(t);Ih?e!=null&&e.uid?Er.replace(`/u/${e.uid}`):Er.replace("/"):(Ih=a_(AA),Ih.use(Er).use(hF).use(sF,dF).use(lF).mount("#app"))});export{yF as $,Al as A,ov as B,UI as C,Xv as D,$n as E,Ns as F,Os as G,la as H,ft as I,cm as J,IF as K,OF as L,Yy as M,Vu as N,gF as O,wF as P,Er as Q,Pl as R,Qb as S,Ds as T,NF as U,AF as V,kF as W,zs as X,ao as Y,mF as Z,SA as _,Ke as a,_F as a0,ot as a1,iU as a2,lS as a3,nF as a4,JL as a5,bF as a6,NM as a7,OM as a8,SF as a9,RF as aa,Kt as ab,CF as ac,fF as ad,vF as ae,Js as b,cn as c,Xn as d,Dl as e,ln as f,kd as g,Sb as h,e_ as i,Nr as j,vt as k,En as l,mc as m,aa as n,Dv as o,Cb as p,n2 as q,Wd as r,TF as s,nv as t,$s as u,Wt as v,pF as w,Se as x,io as y,Lv as z};
