(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function il(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ol(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Be(s)?T_(s):ol(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Be(t))return t;if(Ce(t))return t}}const w_=/;(?![^(]*\))/g,b_=/:([^]+)/,E_=/\/\*.*?\*\//gs;function T_(t){const e={};return t.replace(E_,"").split(w_).forEach(n=>{if(n){const s=n.split(b_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function al(t){let e="";if(Be(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=al(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const I_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=il(I_);function Ip(t){return!!t||t===""}function S_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ca(t[s],e[s]);return n}function Ca(t,e){if(t===e)return!0;let n=td(t),s=td(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ii(t),s=ii(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?S_(t,e):!1;if(n=Ce(t),s=Ce(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ca(t[o],e[o]))return!1}}return String(t)===String(e)}function k_(t,e){return t.findIndex(n=>Ca(n,e))}const uN=t=>Be(t)?t:t==null?"":Y(t)||Ce(t)&&(t.toString===Sp||!ie(t.toString))?JSON.stringify(t,xp,2):String(t),xp=(t,e)=>e&&e.__v_isRef?xp(t,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Na(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!Y(e)&&!kp(e)?String(e):e,Re={},Qs=[],$t=()=>{},A_=()=>!1,C_=/^on[^a-z]/,Ra=t=>C_.test(t),cl=t=>t.startsWith("onUpdate:"),wt=Object.assign,ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R_=Object.prototype.hasOwnProperty,ge=(t,e)=>R_.call(t,e),Y=Array.isArray,Ys=t=>Bi(t)==="[object Map]",Na=t=>Bi(t)==="[object Set]",td=t=>Bi(t)==="[object Date]",ie=t=>typeof t=="function",Be=t=>typeof t=="string",ii=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",ll=t=>Ce(t)&&ie(t.then)&&ie(t.catch),Sp=Object.prototype.toString,Bi=t=>Sp.call(t),N_=t=>Bi(t).slice(8,-1),kp=t=>Bi(t)==="[object Object]",hl=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ao=il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},O_=/-(\w)/g,on=Oa(t=>t.replace(O_,(e,n)=>n?n.toUpperCase():"")),D_=/\B([A-Z])/g,Tr=Oa(t=>t.replace(D_,"-$1").toLowerCase()),Da=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cc=Oa(t=>t?`on${Da(t)}`:""),oi=(t,e)=>!Object.is(t,e),Co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$o=t=>{const e=parseFloat(t);return isNaN(e)?t:e},P_=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let nd;const M_=()=>nd||(nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let kt;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Cp(t){return new Ap(t)}function L_(t,e=kt){e&&e.active&&e.effects.push(t)}function Rp(){return kt}function U_(t){kt&&kt.cleanups.push(t)}const dl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Np=t=>(t.w&Qn)>0,Op=t=>(t.n&Qn)>0,F_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qn},j_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Np(r)&&!Op(r)?r.delete(t):e[n++]=r,r.w&=~Qn,r.n&=~Qn}e.length=n}},qo=new WeakMap;let jr=0,Qn=1;const iu=30;let Vt;const ws=Symbol(""),ou=Symbol("");class fl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,L_(this,s)}run(){if(!this.active)return this.fn();let e=Vt,n=Hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Hn=!0,Qn=1<<++jr,jr<=iu?F_(this):sd(this),this.fn()}finally{jr<=iu&&j_(this),Qn=1<<--jr,Vt=this.parent,Hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(sd(this),this.onStop&&this.onStop(),this.active=!1)}}function sd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Hn=!0;const Dp=[];function Ir(){Dp.push(Hn),Hn=!1}function xr(){const t=Dp.pop();Hn=t===void 0?!0:t}function xt(t,e,n){if(Hn&&Vt){let s=qo.get(t);s||qo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=dl()),Pp(r)}}function Pp(t,e){let n=!1;jr<=iu?Op(t)||(t.n|=Qn,n=!Np(t)):n=!t.has(Vt),n&&(t.add(Vt),Vt.deps.push(t))}function En(t,e,n,s,r,i){const o=qo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?hl(n)&&a.push(o.get("length")):(a.push(o.get(ws)),Ys(t)&&a.push(o.get(ou)));break;case"delete":Y(t)||(a.push(o.get(ws)),Ys(t)&&a.push(o.get(ou)));break;case"set":Ys(t)&&a.push(o.get(ws));break}if(a.length===1)a[0]&&au(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);au(dl(c))}}function au(t,e){const n=Y(t)?t:[...t];for(const s of n)s.computed&&rd(s);for(const s of n)s.computed||rd(s)}function rd(t,e){(t!==Vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function B_(t,e){var n;return(n=qo.get(t))===null||n===void 0?void 0:n.get(e)}const V_=il("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ii)),$_=pl(),q_=pl(!1,!0),H_=pl(!0),id=K_();function K_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let i=0,o=this.length;i<o;i++)xt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ir();const s=pe(this)[e].apply(this,n);return xr(),s}}),t}function z_(t){const e=pe(this);return xt(e,"has",t),e.hasOwnProperty(t)}function pl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?cw:Bp:e?jp:Fp).get(s))return s;const o=Y(s);if(!t){if(o&&ge(id,r))return Reflect.get(id,r,i);if(r==="hasOwnProperty")return z_}const a=Reflect.get(s,r,i);return(ii(r)?Mp.has(r):V_(r))||(t||xt(s,"get",r),e)?a:Me(a)?o&&hl(r)?a:a.value:Ce(a)?t?Vp(a):Sr(a):a}}const W_=Lp(),G_=Lp(!0);function Lp(t=!1){return function(n,s,r,i){let o=n[s];if(or(o)&&Me(o)&&!Me(r))return!1;if(!t&&(!Ho(r)&&!or(r)&&(o=pe(o),r=pe(r)),!Y(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=Y(n)&&hl(s)?Number(s)<n.length:ge(n,s),c=Reflect.set(n,s,r,i);return n===pe(i)&&(a?oi(r,o)&&En(n,"set",s,r):En(n,"add",s,r)),c}}function Z_(t,e){const n=ge(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&En(t,"delete",e,void 0),s}function Q_(t,e){const n=Reflect.has(t,e);return(!ii(e)||!Mp.has(e))&&xt(t,"has",e),n}function Y_(t){return xt(t,"iterate",Y(t)?"length":ws),Reflect.ownKeys(t)}const Up={get:$_,set:W_,deleteProperty:Z_,has:Q_,ownKeys:Y_},X_={get:H_,set(t,e){return!0},deleteProperty(t,e){return!0}},J_=wt({},Up,{get:q_,set:G_}),ml=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function ho(t,e,n=!1,s=!1){t=t.__v_raw;const r=pe(t),i=pe(e);n||(e!==i&&xt(r,"get",e),xt(r,"get",i));const{has:o}=Pa(r),a=s?ml:n?vl:ai;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function fo(t,e=!1){const n=this.__v_raw,s=pe(n),r=pe(t);return e||(t!==r&&xt(s,"has",t),xt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function po(t,e=!1){return t=t.__v_raw,!e&&xt(pe(t),"iterate",ws),Reflect.get(t,"size",t)}function od(t){t=pe(t);const e=pe(this);return Pa(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function ad(t,e){e=pe(e);const n=pe(this),{has:s,get:r}=Pa(n);let i=s.call(n,t);i||(t=pe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?oi(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function cd(t){const e=pe(this),{has:n,get:s}=Pa(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&En(e,"delete",t,void 0),i}function ud(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function mo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=pe(o),c=e?ml:t?vl:ai;return!t&&xt(a,"iterate",ws),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function go(t,e,n){return function(...s){const r=this.__v_raw,i=pe(r),o=Ys(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?ml:e?vl:ai;return!e&&xt(i,"iterate",c?ou:ws),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Nn(t){return function(...e){return t==="delete"?!1:this}}function ew(){const t={get(i){return ho(this,i)},get size(){return po(this)},has:fo,add:od,set:ad,delete:cd,clear:ud,forEach:mo(!1,!1)},e={get(i){return ho(this,i,!1,!0)},get size(){return po(this)},has:fo,add:od,set:ad,delete:cd,clear:ud,forEach:mo(!1,!0)},n={get(i){return ho(this,i,!0)},get size(){return po(this,!0)},has(i){return fo.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:mo(!0,!1)},s={get(i){return ho(this,i,!0,!0)},get size(){return po(this,!0)},has(i){return fo.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:mo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=go(i,!1,!1),n[i]=go(i,!0,!1),e[i]=go(i,!1,!0),s[i]=go(i,!0,!0)}),[t,n,e,s]}const[tw,nw,sw,rw]=ew();function gl(t,e){const n=e?t?rw:sw:t?nw:tw;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ge(n,r)&&r in s?n:s,r,i)}const iw={get:gl(!1,!1)},ow={get:gl(!1,!0)},aw={get:gl(!0,!1)},Fp=new WeakMap,jp=new WeakMap,Bp=new WeakMap,cw=new WeakMap;function uw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lw(t){return t.__v_skip||!Object.isExtensible(t)?0:uw(N_(t))}function Sr(t){return or(t)?t:yl(t,!1,Up,iw,Fp)}function hw(t){return yl(t,!1,J_,ow,jp)}function Vp(t){return yl(t,!0,X_,aw,Bp)}function yl(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=lw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function vn(t){return or(t)?vn(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function Ho(t){return!!(t&&t.__v_isShallow)}function $p(t){return vn(t)||or(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function ar(t){return Vo(t,"__v_skip",!0),t}const ai=t=>Ce(t)?Sr(t):t,vl=t=>Ce(t)?Vp(t):t;function qp(t){Hn&&Vt&&(t=pe(t),Pp(t.dep||(t.dep=dl())))}function Hp(t,e){t=pe(t);const n=t.dep;n&&au(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function _l(t){return Kp(t,!1)}function dw(t){return Kp(t,!0)}function Kp(t,e){return Me(t)?t:new fw(t,e)}class fw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:ai(e)}get value(){return qp(this),this._value}set value(e){const n=this.__v_isShallow||Ho(e)||or(e);e=n?e:pe(e),oi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ai(e),Hp(this))}}function bs(t){return Me(t)?t.value:t}const pw={get:(t,e,n)=>bs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function zp(t){return vn(t)?t:new Proxy(t,pw)}function mw(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=Wp(t,n);return e}class gw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return B_(pe(this._object),this._key)}}function Wp(t,e,n){const s=t[e];return Me(s)?s:new gw(t,e,n)}var Gp;class yw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Gp]=!1,this._dirty=!0,this.effect=new fl(e,()=>{this._dirty||(this._dirty=!0,Hp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=pe(this);return qp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Gp="__v_isReadonly";function vw(t,e,n=!1){let s,r;const i=ie(t);return i?(s=t,r=$t):(s=t.get,r=t.set),new yw(s,r,i||!r,n)}function Kn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Vi(i,e,n)}return r}function qt(t,e,n,s){if(ie(t)){const i=Kn(t,e,n,s);return i&&ll(i)&&i.catch(o=>{Vi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(qt(t[i],e,n,s));return r}function Vi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Kn(c,null,10,[t,o,a]);return}}_w(t,n,r,s)}function _w(t,e,n,s=!0){console.error(t)}let ci=!1,cu=!1;const at=[];let Yt=0;const Xs=[];let pn=null,ds=0;const Zp=Promise.resolve();let wl=null;function bl(t){const e=wl||Zp;return t?e.then(this?t.bind(this):t):e}function ww(t){let e=Yt+1,n=at.length;for(;e<n;){const s=e+n>>>1;ui(at[s])<t?e=s+1:n=s}return e}function El(t){(!at.length||!at.includes(t,ci&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?at.push(t):at.splice(ww(t.id),0,t),Qp())}function Qp(){!ci&&!cu&&(cu=!0,wl=Zp.then(Jp))}function bw(t){const e=at.indexOf(t);e>Yt&&at.splice(e,1)}function Yp(t){Y(t)?Xs.push(...t):(!pn||!pn.includes(t,t.allowRecurse?ds+1:ds))&&Xs.push(t),Qp()}function ld(t,e=ci?Yt+1:0){for(;e<at.length;e++){const n=at[e];n&&n.pre&&(at.splice(e,1),e--,n())}}function Xp(t){if(Xs.length){const e=[...new Set(Xs)];if(Xs.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((n,s)=>ui(n)-ui(s)),ds=0;ds<pn.length;ds++)pn[ds]();pn=null,ds=0}}const ui=t=>t.id==null?1/0:t.id,Ew=(t,e)=>{const n=ui(t)-ui(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Jp(t){cu=!1,ci=!0,at.sort(Ew);const e=$t;try{for(Yt=0;Yt<at.length;Yt++){const n=at[Yt];n&&n.active!==!1&&Kn(n,null,14)}}finally{Yt=0,at.length=0,Xp(),ci=!1,wl=null,(at.length||Xs.length)&&Jp()}}function Tw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||Re;d&&(r=n.map(p=>Be(p)?p.trim():p)),h&&(r=n.map($o))}let a,c=s[a=Cc(e)]||s[a=Cc(on(e))];!c&&i&&(c=s[a=Cc(Tr(e))]),c&&qt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qt(u,t,6,r)}}function em(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=u=>{const l=em(u,e,!0);l&&(a=!0,wt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&s.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):wt(o,i),Ce(t)&&s.set(t,o),o)}function Ma(t,e){return!t||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Tr(e))||ge(t,e))}let nt=null,La=null;function Ko(t){const e=nt;return nt=t,La=t&&t.type.__scopeId||null,e}function Iw(t){La=t}function xw(){La=null}function Sw(t,e=nt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&bd(-1);const i=Ko(e);let o;try{o=t(...r)}finally{Ko(i),s._d&&bd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Rc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=t;let x,k;const w=Ko(t);try{if(n.shapeFlag&4){const P=r||s;x=Bt(l.call(P,P,h,i,p,d,g)),k=c}else{const P=e;x=Bt(P.length>1?P(i,{attrs:c,slots:a,emit:u}):P(i,null)),k=e.props?c:Aw(c)}}catch(P){Gr.length=0,Vi(P,t,1),x=ut(an)}let T=x;if(k&&v!==!1){const P=Object.keys(k),{shapeFlag:j}=T;P.length&&j&7&&(o&&P.some(cl)&&(k=Cw(k,o)),T=ur(T,k))}return n.dirs&&(T=ur(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),x=T,Ko(w),x}function kw(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(hi(s)){if(s.type!==an||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Aw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ra(n))&&((e||(e={}))[n]=t[n]);return e},Cw=(t,e)=>{const n={};for(const s in t)(!cl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Rw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?hd(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!Ma(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?hd(s,o,u):!0:!!o;return!1}function hd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function Tl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nw=t=>t.__isSuspense,Ow={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){t==null?Dw(e,n,s,r,i,o,a,c,u):Pw(t,e,n,s,r,o,a,c,u)},hydrate:Mw,create:Il,normalize:Lw},lN=Ow;function li(t,e){const n=t.props&&t.props[e];ie(n)&&n()}function Dw(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=t.suspense=Il(t,r,s,e,h,n,i,o,a,c);u(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(li(t,"onPending"),li(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),Js(d,t.ssFallback)):d.resolve()}function Pw(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:x,isHydrating:k}=h;if(v)h.pendingBranch=d,Un(d,v)?(c(v,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():x&&(c(g,p,n,s,r,null,i,o,a),Js(h,p))):(h.pendingId++,k?(h.isHydrating=!1,h.activeBranch=v):u(v,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),x?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(g,p,n,s,r,null,i,o,a),Js(h,p))):g&&Un(d,g)?(c(g,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(g&&Un(d,g))c(g,d,n,s,r,h,i,o,a),Js(h,d);else if(li(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:w,pendingId:T}=h;w>0?setTimeout(()=>{h.pendingId===T&&h.fallback(p)},w):w===0&&h.fallback(p)}}function Il(t,e,n,s,r,i,o,a,c,u,l=!1){const{p:h,m:d,um:p,n:g,o:{parentNode:v,remove:x}}=u,k=t.props?P_(t.props.timeout):void 0,w={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof k=="number"?k:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(T=!1){const{vnode:P,activeBranch:j,pendingBranch:Q,pendingId:q,effects:H,parentComponent:ye,container:Ee}=w;if(w.isHydrating)w.isHydrating=!1;else if(!T){const Lt=j&&Q.transition&&Q.transition.mode==="out-in";Lt&&(j.transition.afterLeave=()=>{q===w.pendingId&&d(Q,Ee,et,0)});let{anchor:et}=w;j&&(et=g(j),p(j,ye,w,!0)),Lt||d(Q,Ee,et,0)}Js(w,Q),w.pendingBranch=null,w.isInFallback=!1;let Te=w.parent,mt=!1;for(;Te;){if(Te.pendingBranch){Te.effects.push(...H),mt=!0;break}Te=Te.parent}mt||Yp(H),w.effects=[],li(P,"onResolve")},fallback(T){if(!w.pendingBranch)return;const{vnode:P,activeBranch:j,parentComponent:Q,container:q,isSVG:H}=w;li(P,"onFallback");const ye=g(j),Ee=()=>{w.isInFallback&&(h(null,T,q,ye,Q,null,H,a,c),Js(w,T))},Te=T.transition&&T.transition.mode==="out-in";Te&&(j.transition.afterLeave=Ee),w.isInFallback=!0,p(j,Q,null,!0),Te||Ee()},move(T,P,j){w.activeBranch&&d(w.activeBranch,T,P,j),w.container=T},next(){return w.activeBranch&&g(w.activeBranch)},registerDep(T,P){const j=!!w.pendingBranch;j&&w.deps++;const Q=T.vnode.el;T.asyncDep.catch(q=>{Vi(q,T,0)}).then(q=>{if(T.isUnmounted||w.isUnmounted||w.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:H}=T;mu(T,q,!1),Q&&(H.el=Q);const ye=!Q&&T.subTree.el;P(T,H,v(Q||T.subTree.el),Q?null:g(T.subTree),w,o,c),ye&&x(ye),Tl(T,H.el),j&&--w.deps===0&&w.resolve()})},unmount(T,P){w.isUnmounted=!0,w.activeBranch&&p(w.activeBranch,n,T,P),w.pendingBranch&&p(w.pendingBranch,n,T,P)}};return w}function Mw(t,e,n,s,r,i,o,a,c){const u=e.suspense=Il(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(),l}function Lw(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=dd(s?n.default:n),t.ssFallback=s?dd(n.fallback):ut(an)}function dd(t){let e;if(ie(t)){const n=cr&&t._c;n&&(t._d=!1,ja()),t=t(),n&&(t._d=!0,e=Pt,mm())}return Y(t)&&(t=kw(t)),t=Bt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Uw(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Yp(t)}function Js(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Tl(s,r))}function Ro(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function en(t,e,n=!1){const s=je||nt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(s.proxy):e}}function hN(t,e){return xl(t,null,e)}const yo={};function Hr(t,e,n){return xl(t,e,n)}function xl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Re){const a=Rp()===(je==null?void 0:je.scope)?je:null;let c,u=!1,l=!1;if(Me(t)?(c=()=>t.value,u=Ho(t)):vn(t)?(c=()=>t,s=!0):Y(t)?(l=!0,u=t.some(T=>vn(T)||Ho(T)),c=()=>t.map(T=>{if(Me(T))return T.value;if(vn(T))return ms(T);if(ie(T))return Kn(T,a,2)})):ie(t)?e?c=()=>Kn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),qt(t,a,3,[d])}:c=$t,e&&s){const T=c;c=()=>ms(T())}let h,d=T=>{h=k.onStop=()=>{Kn(T,a,4)}},p;if(di)if(d=$t,e?n&&qt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const T=D0();p=T.__watcherHandles||(T.__watcherHandles=[])}else return $t;let g=l?new Array(t.length).fill(yo):yo;const v=()=>{if(k.active)if(e){const T=k.run();(s||u||(l?T.some((P,j)=>oi(P,g[j])):oi(T,g)))&&(h&&h(),qt(e,a,3,[T,g===yo?void 0:l&&g[0]===yo?[]:g,d]),g=T)}else k.run()};v.allowRecurse=!!e;let x;r==="sync"?x=v:r==="post"?x=()=>Tt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),x=()=>El(v));const k=new fl(c,x);e?n?v():g=k.run():r==="post"?Tt(k.run.bind(k),a&&a.suspense):k.run();const w=()=>{k.stop(),a&&a.scope&&ul(a.scope.effects,k)};return p&&p.push(w),w}function Fw(t,e,n){const s=this.proxy,r=Be(t)?t.includes(".")?tm(s,t):()=>s[t]:t.bind(s,s);let i;ie(e)?i=e:(i=e.handler,n=e);const o=je;Yn(this);const a=xl(r,i.bind(s),n);return o?Yn(o):zn(),a}function tm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ms(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))ms(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)ms(t[n],e);else if(Na(t)||Ys(t))t.forEach(n=>{ms(n,e)});else if(kp(t))for(const n in t)ms(t[n],e);return t}function Sl(t){return ie(t)?{setup:t,name:t.name}:t}const Kr=t=>!!t.type.__asyncLoader,nm=t=>t.type.__isKeepAlive;function jw(t,e){sm(t,"a",e)}function Bw(t,e){sm(t,"da",e)}function sm(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)nm(r.parent.vnode)&&Vw(s,e,n,r),r=r.parent}}function Vw(t,e,n,s){const r=Ua(e,t,s,!0);rm(()=>{ul(s[e],r)},n)}function Ua(t,e,n=je,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ir(),Yn(n);const a=qt(e,n,t,o);return zn(),xr(),a});return s?r.unshift(i):r.push(i),i}}const Rn=t=>(e,n=je)=>(!di||t==="sp")&&Ua(t,(...s)=>e(...s),n),$w=Rn("bm"),qw=Rn("m"),Hw=Rn("bu"),Kw=Rn("u"),zw=Rn("bum"),rm=Rn("um"),Ww=Rn("sp"),Gw=Rn("rtg"),Zw=Rn("rtc");function Qw(t,e=je){Ua("ec",t,e)}function dN(t,e){const n=nt;if(n===null)return t;const s=Va(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Re]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&ms(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function cs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ir(),qt(c,n,8,[t.el,a,t,e]),xr())}}const im="components";function fN(t,e){return Xw(im,t,!0,e)||t}const Yw=Symbol();function Xw(t,e,n=!0,s=!1){const r=nt||je;if(r){const i=r.type;if(t===im){const a=R0(i,!1);if(a&&(a===e||a===on(e)||a===Da(on(e))))return i}const o=fd(r[t]||i[t],e)||fd(r.appContext[t],e);return!o&&s?i:o}}function fd(t,e){return t&&(t[e]||t[on(e)]||t[Da(on(e))])}function pN(t,e,n,s){let r;const i=n&&n[s];if(Y(t)||Be(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function mN(t,e,n={},s,r){if(nt.isCE||nt.parent&&Kr(nt.parent)&&nt.parent.isCE)return e!=="default"&&(n.name=e),ut("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ja();const o=i&&om(i(n)),a=ym(Dt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function om(t){return t.some(e=>hi(e)?!(e.type===an||e.type===Dt&&!om(e.children)):!0)?t:null}const uu=t=>t?wm(t)?Va(t)||t.proxy:uu(t.parent):null,zr=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uu(t.parent),$root:t=>uu(t.root),$emit:t=>t.emit,$options:t=>kl(t),$forceUpdate:t=>t.f||(t.f=()=>El(t.update)),$nextTick:t=>t.n||(t.n=bl.bind(t.proxy)),$watch:t=>Fw.bind(t)}),Nc=(t,e)=>t!==Re&&!t.__isScriptSetup&&ge(t,e),Jw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Nc(s,e))return o[e]=1,s[e];if(r!==Re&&ge(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ge(u,e))return o[e]=3,i[e];if(n!==Re&&ge(n,e))return o[e]=4,n[e];lu&&(o[e]=0)}}const l=zr[e];let h,d;if(l)return e==="$attrs"&&xt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&ge(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Nc(r,e)?(r[e]=n,!0):s!==Re&&ge(s,e)?(s[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&ge(t,o)||Nc(e,o)||(a=i[0])&&ge(a,o)||ge(s,o)||ge(zr,o)||ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let lu=!0;function e0(t){const e=kl(t),n=t.proxy,s=t.ctx;lu=!1,e.beforeCreate&&pd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:x,beforeDestroy:k,beforeUnmount:w,destroyed:T,unmounted:P,render:j,renderTracked:Q,renderTriggered:q,errorCaptured:H,serverPrefetch:ye,expose:Ee,inheritAttrs:Te,components:mt,directives:Lt,filters:et}=e;if(u&&t0(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const Ie=o[Se];ie(Ie)&&(s[Se]=Ie.bind(n))}if(r){const Se=r.call(n,n);Ce(Se)&&(t.data=Sr(Se))}if(lu=!0,i)for(const Se in i){const Ie=i[Se],Ut=ie(Ie)?Ie.bind(n,n):ie(Ie.get)?Ie.get.bind(n,n):$t,as=!ie(Ie)&&ie(Ie.set)?Ie.set.bind(n):$t,Ft=At({get:Ut,set:as});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Et=>Ft.value=Et})}if(a)for(const Se in a)am(a[Se],s,n,Se);if(c){const Se=ie(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(Ie=>{Ro(Ie,Se[Ie])})}l&&pd(l,t,"c");function $e(Se,Ie){Y(Ie)?Ie.forEach(Ut=>Se(Ut.bind(n))):Ie&&Se(Ie.bind(n))}if($e($w,h),$e(qw,d),$e(Hw,p),$e(Kw,g),$e(jw,v),$e(Bw,x),$e(Qw,H),$e(Zw,Q),$e(Gw,q),$e(zw,w),$e(rm,P),$e(Ww,ye),Y(Ee))if(Ee.length){const Se=t.exposed||(t.exposed={});Ee.forEach(Ie=>{Object.defineProperty(Se,Ie,{get:()=>n[Ie],set:Ut=>n[Ie]=Ut})})}else t.exposed||(t.exposed={});j&&t.render===$t&&(t.render=j),Te!=null&&(t.inheritAttrs=Te),mt&&(t.components=mt),Lt&&(t.directives=Lt)}function t0(t,e,n=$t,s=!1){Y(t)&&(t=hu(t));for(const r in t){const i=t[r];let o;Ce(i)?"default"in i?o=en(i.from||r,i.default,!0):o=en(i.from||r):o=en(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function pd(t,e,n){qt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function am(t,e,n,s){const r=s.includes(".")?tm(n,s):()=>n[s];if(Be(t)){const i=e[t];ie(i)&&Hr(r,i)}else if(ie(t))Hr(r,t.bind(n));else if(Ce(t))if(Y(t))t.forEach(i=>am(i,e,n,s));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Hr(r,i,t)}}function kl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>zo(c,u,o,!0)),zo(c,e,o)),Ce(e)&&i.set(e,c),c}function zo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&zo(t,i,n,!0),r&&r.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=n0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const n0={data:md,props:ls,emits:ls,methods:ls,computed:ls,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:ls,directives:ls,watch:r0,provide:md,inject:s0};function md(t,e){return e?t?function(){return wt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function s0(t,e){return ls(hu(t),hu(e))}function hu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?wt(wt(Object.create(null),t),e):e}function r0(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function i0(t,e,n,s=!1){const r={},i={};Vo(i,Ba,1),t.propsDefaults=Object.create(null),cm(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:hw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function o0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=pe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Ma(t.emitsOptions,d))continue;const p=e[d];if(c)if(ge(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const g=on(d);r[g]=du(c,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{cm(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ge(e,h)&&((l=Tr(h))===h||!ge(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=du(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],u=!0)}u&&En(t,"set","$attrs")}function cm(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ao(c))continue;const u=e[c];let l;r&&ge(r,l=on(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Ma(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=pe(n),u=a||Re;for(let l=0;l<i.length;l++){const h=i[l];n[h]=du(r,c,h,u[h],t,!ge(u,h))}}return o}function du(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Yn(r),s=u[n]=c.call(null,e),zn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Tr(n))&&(s=!0))}return s}function um(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const l=h=>{c=!0;const[d,p]=um(h,e,!0);wt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ce(t)&&s.set(t,Qs),Qs;if(Y(i))for(let l=0;l<i.length;l++){const h=on(i[l]);gd(h)&&(o[h]=Re)}else if(i)for(const l in i){const h=on(l);if(gd(h)){const d=i[l],p=o[h]=Y(d)||ie(d)?{type:d}:Object.assign({},d);if(p){const g=_d(Boolean,p.type),v=_d(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||ge(p,"default"))&&a.push(h)}}}const u=[o,a];return Ce(t)&&s.set(t,u),u}function gd(t){return t[0]!=="$"}function yd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vd(t,e){return yd(t)===yd(e)}function _d(t,e){return Y(e)?e.findIndex(n=>vd(n,t)):ie(e)&&vd(e,t)?0:-1}const lm=t=>t[0]==="_"||t==="$stable",Al=t=>Y(t)?t.map(Bt):[Bt(t)],a0=(t,e,n)=>{if(e._n)return e;const s=Sw((...r)=>Al(e(...r)),n);return s._c=!1,s},hm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(lm(r))continue;const i=t[r];if(ie(i))e[r]=a0(r,i,s);else if(i!=null){const o=Al(i);e[r]=()=>o}}},dm=(t,e)=>{const n=Al(e);t.slots.default=()=>n},c0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Vo(e,"_",n)):hm(e,t.slots={})}else t.slots={},e&&dm(t,e);Vo(t.slots,Ba,1)},u0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(wt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,hm(e,r)),o=e}else e&&(dm(t,e),o={default:1});if(i)for(const a in r)!lm(a)&&!(a in o)&&delete r[a]};function fm(){return{app:null,config:{isNativeTag:A_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l0=0;function h0(t,e){return function(s,r=null){ie(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(r=null);const i=fm(),o=new Set;let a=!1;const c=i.app={_uid:l0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:P0,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...l)):ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=ut(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Va(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function fu(t,e,n,s,r=!1){if(Y(t)){t.forEach((d,p)=>fu(d,e&&(Y(e)?e[p]:e),n,s,r));return}if(Kr(s)&&!r)return;const i=s.shapeFlag&4?Va(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Be(u)?(l[u]=null,ge(h,u)&&(h[u]=null)):Me(u)&&(u.value=null)),ie(c))Kn(c,a,12,[o,l]);else{const d=Be(c),p=Me(c);if(d||p){const g=()=>{if(t.f){const v=d?ge(h,c)?h[c]:l[c]:c.value;r?Y(v)&&ul(v,i):Y(v)?v.includes(i)||v.push(i):d?(l[c]=[i],ge(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ge(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,Tt(g,n)):g()}}}const Tt=Uw;function d0(t){return f0(t)}function f0(t,e){const n=M_();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=$t,insertStaticContent:g}=t,v=(f,m,y,_=null,I=null,R=null,M=!1,C=null,O=!!m.dynamicChildren)=>{if(f===m)return;f&&!Un(f,m)&&(_=D(f),Et(f,I,R,!0),f=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:S,ref:G,shapeFlag:B}=m;switch(S){case Fa:x(f,m,y,_);break;case an:k(f,m,y,_);break;case Oc:f==null&&w(m,y,_,M);break;case Dt:mt(f,m,y,_,I,R,M,C,O);break;default:B&1?j(f,m,y,_,I,R,M,C,O):B&6?Lt(f,m,y,_,I,R,M,C,O):(B&64||B&128)&&S.process(f,m,y,_,I,R,M,C,O,me)}G!=null&&I&&fu(G,f&&f.ref,R,m||f,!m)},x=(f,m,y,_)=>{if(f==null)s(m.el=a(m.children),y,_);else{const I=m.el=f.el;m.children!==f.children&&u(I,m.children)}},k=(f,m,y,_)=>{f==null?s(m.el=c(m.children||""),y,_):m.el=f.el},w=(f,m,y,_)=>{[f.el,f.anchor]=g(f.children,m,y,_,f.el,f.anchor)},T=({el:f,anchor:m},y,_)=>{let I;for(;f&&f!==m;)I=d(f),s(f,y,_),f=I;s(m,y,_)},P=({el:f,anchor:m})=>{let y;for(;f&&f!==m;)y=d(f),r(f),f=y;r(m)},j=(f,m,y,_,I,R,M,C,O)=>{M=M||m.type==="svg",f==null?Q(m,y,_,I,R,M,C,O):ye(f,m,I,R,M,C,O)},Q=(f,m,y,_,I,R,M,C)=>{let O,S;const{type:G,props:B,shapeFlag:Z,transition:ne,dirs:he}=f;if(O=f.el=o(f.type,R,B&&B.is,B),Z&8?l(O,f.children):Z&16&&H(f.children,O,null,_,I,R&&G!=="foreignObject",M,C),he&&cs(f,null,_,"created"),q(O,f,f.scopeId,M,_),B){for(const xe in B)xe!=="value"&&!Ao(xe)&&i(O,xe,null,B[xe],R,f.children,_,I,U);"value"in B&&i(O,"value",null,B.value),(S=B.onVnodeBeforeMount)&&Qt(S,_,f)}he&&cs(f,null,_,"beforeMount");const ke=(!I||I&&!I.pendingBranch)&&ne&&!ne.persisted;ke&&ne.beforeEnter(O),s(O,m,y),((S=B&&B.onVnodeMounted)||ke||he)&&Tt(()=>{S&&Qt(S,_,f),ke&&ne.enter(O),he&&cs(f,null,_,"mounted")},I)},q=(f,m,y,_,I)=>{if(y&&p(f,y),_)for(let R=0;R<_.length;R++)p(f,_[R]);if(I){let R=I.subTree;if(m===R){const M=I.vnode;q(f,M,M.scopeId,M.slotScopeIds,I.parent)}}},H=(f,m,y,_,I,R,M,C,O=0)=>{for(let S=O;S<f.length;S++){const G=f[S]=C?Pn(f[S]):Bt(f[S]);v(null,G,m,y,_,I,R,M,C)}},ye=(f,m,y,_,I,R,M)=>{const C=m.el=f.el;let{patchFlag:O,dynamicChildren:S,dirs:G}=m;O|=f.patchFlag&16;const B=f.props||Re,Z=m.props||Re;let ne;y&&us(y,!1),(ne=Z.onVnodeBeforeUpdate)&&Qt(ne,y,m,f),G&&cs(m,f,y,"beforeUpdate"),y&&us(y,!0);const he=I&&m.type!=="foreignObject";if(S?Ee(f.dynamicChildren,S,C,y,_,he,R):M||Ie(f,m,C,null,y,_,he,R,!1),O>0){if(O&16)Te(C,m,B,Z,y,_,I);else if(O&2&&B.class!==Z.class&&i(C,"class",null,Z.class,I),O&4&&i(C,"style",B.style,Z.style,I),O&8){const ke=m.dynamicProps;for(let xe=0;xe<ke.length;xe++){const qe=ke[xe],jt=B[qe],$s=Z[qe];($s!==jt||qe==="value")&&i(C,qe,jt,$s,I,f.children,y,_,U)}}O&1&&f.children!==m.children&&l(C,m.children)}else!M&&S==null&&Te(C,m,B,Z,y,_,I);((ne=Z.onVnodeUpdated)||G)&&Tt(()=>{ne&&Qt(ne,y,m,f),G&&cs(m,f,y,"updated")},_)},Ee=(f,m,y,_,I,R,M)=>{for(let C=0;C<m.length;C++){const O=f[C],S=m[C],G=O.el&&(O.type===Dt||!Un(O,S)||O.shapeFlag&70)?h(O.el):y;v(O,S,G,null,_,I,R,M,!0)}},Te=(f,m,y,_,I,R,M)=>{if(y!==_){if(y!==Re)for(const C in y)!Ao(C)&&!(C in _)&&i(f,C,y[C],null,M,m.children,I,R,U);for(const C in _){if(Ao(C))continue;const O=_[C],S=y[C];O!==S&&C!=="value"&&i(f,C,S,O,M,m.children,I,R,U)}"value"in _&&i(f,"value",y.value,_.value)}},mt=(f,m,y,_,I,R,M,C,O)=>{const S=m.el=f?f.el:a(""),G=m.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:Z,slotScopeIds:ne}=m;ne&&(C=C?C.concat(ne):ne),f==null?(s(S,y,_),s(G,y,_),H(m.children,y,G,I,R,M,C,O)):B>0&&B&64&&Z&&f.dynamicChildren?(Ee(f.dynamicChildren,Z,y,I,R,M,C),(m.key!=null||I&&m===I.subTree)&&Cl(f,m,!0)):Ie(f,m,y,G,I,R,M,C,O)},Lt=(f,m,y,_,I,R,M,C,O)=>{m.slotScopeIds=C,f==null?m.shapeFlag&512?I.ctx.activate(m,y,_,M,O):et(m,y,_,I,R,M,O):Qe(f,m,O)},et=(f,m,y,_,I,R,M)=>{const C=f.component=x0(f,_,I);if(nm(f)&&(C.ctx.renderer=me),S0(C),C.asyncDep){if(I&&I.registerDep(C,$e),!f.el){const O=C.subTree=ut(an);k(null,O,m,y)}return}$e(C,f,m,y,I,R,M)},Qe=(f,m,y)=>{const _=m.component=f.component;if(Rw(f,m,y))if(_.asyncDep&&!_.asyncResolved){Se(_,m,y);return}else _.next=m,bw(_.update),_.update();else m.el=f.el,_.vnode=m},$e=(f,m,y,_,I,R,M)=>{const C=()=>{if(f.isMounted){let{next:G,bu:B,u:Z,parent:ne,vnode:he}=f,ke=G,xe;us(f,!1),G?(G.el=he.el,Se(f,G,M)):G=he,B&&Co(B),(xe=G.props&&G.props.onVnodeBeforeUpdate)&&Qt(xe,ne,G,he),us(f,!0);const qe=Rc(f),jt=f.subTree;f.subTree=qe,v(jt,qe,h(jt.el),D(jt),f,I,R),G.el=qe.el,ke===null&&Tl(f,qe.el),Z&&Tt(Z,I),(xe=G.props&&G.props.onVnodeUpdated)&&Tt(()=>Qt(xe,ne,G,he),I)}else{let G;const{el:B,props:Z}=m,{bm:ne,m:he,parent:ke}=f,xe=Kr(m);if(us(f,!1),ne&&Co(ne),!xe&&(G=Z&&Z.onVnodeBeforeMount)&&Qt(G,ke,m),us(f,!0),B&&ue){const qe=()=>{f.subTree=Rc(f),ue(B,f.subTree,f,I,null)};xe?m.type.__asyncLoader().then(()=>!f.isUnmounted&&qe()):qe()}else{const qe=f.subTree=Rc(f);v(null,qe,y,_,f,I,R),m.el=qe.el}if(he&&Tt(he,I),!xe&&(G=Z&&Z.onVnodeMounted)){const qe=m;Tt(()=>Qt(G,ke,qe),I)}(m.shapeFlag&256||ke&&Kr(ke.vnode)&&ke.vnode.shapeFlag&256)&&f.a&&Tt(f.a,I),f.isMounted=!0,m=y=_=null}},O=f.effect=new fl(C,()=>El(S),f.scope),S=f.update=()=>O.run();S.id=f.uid,us(f,!0),S()},Se=(f,m,y)=>{m.component=f;const _=f.vnode.props;f.vnode=m,f.next=null,o0(f,m.props,_,y),u0(f,m.children,y),Ir(),ld(),xr()},Ie=(f,m,y,_,I,R,M,C,O=!1)=>{const S=f&&f.children,G=f?f.shapeFlag:0,B=m.children,{patchFlag:Z,shapeFlag:ne}=m;if(Z>0){if(Z&128){as(S,B,y,_,I,R,M,C,O);return}else if(Z&256){Ut(S,B,y,_,I,R,M,C,O);return}}ne&8?(G&16&&U(S,I,R),B!==S&&l(y,B)):G&16?ne&16?as(S,B,y,_,I,R,M,C,O):U(S,I,R,!0):(G&8&&l(y,""),ne&16&&H(B,y,_,I,R,M,C,O))},Ut=(f,m,y,_,I,R,M,C,O)=>{f=f||Qs,m=m||Qs;const S=f.length,G=m.length,B=Math.min(S,G);let Z;for(Z=0;Z<B;Z++){const ne=m[Z]=O?Pn(m[Z]):Bt(m[Z]);v(f[Z],ne,y,null,I,R,M,C,O)}S>G?U(f,I,R,!0,!1,B):H(m,y,_,I,R,M,C,O,B)},as=(f,m,y,_,I,R,M,C,O)=>{let S=0;const G=m.length;let B=f.length-1,Z=G-1;for(;S<=B&&S<=Z;){const ne=f[S],he=m[S]=O?Pn(m[S]):Bt(m[S]);if(Un(ne,he))v(ne,he,y,null,I,R,M,C,O);else break;S++}for(;S<=B&&S<=Z;){const ne=f[B],he=m[Z]=O?Pn(m[Z]):Bt(m[Z]);if(Un(ne,he))v(ne,he,y,null,I,R,M,C,O);else break;B--,Z--}if(S>B){if(S<=Z){const ne=Z+1,he=ne<G?m[ne].el:_;for(;S<=Z;)v(null,m[S]=O?Pn(m[S]):Bt(m[S]),y,he,I,R,M,C,O),S++}}else if(S>Z)for(;S<=B;)Et(f[S],I,R,!0),S++;else{const ne=S,he=S,ke=new Map;for(S=he;S<=Z;S++){const St=m[S]=O?Pn(m[S]):Bt(m[S]);St.key!=null&&ke.set(St.key,S)}let xe,qe=0;const jt=Z-he+1;let $s=!1,Xh=0;const Pr=new Array(jt);for(S=0;S<jt;S++)Pr[S]=0;for(S=ne;S<=B;S++){const St=f[S];if(qe>=jt){Et(St,I,R,!0);continue}let Zt;if(St.key!=null)Zt=ke.get(St.key);else for(xe=he;xe<=Z;xe++)if(Pr[xe-he]===0&&Un(St,m[xe])){Zt=xe;break}Zt===void 0?Et(St,I,R,!0):(Pr[Zt-he]=S+1,Zt>=Xh?Xh=Zt:$s=!0,v(St,m[Zt],y,null,I,R,M,C,O),qe++)}const Jh=$s?p0(Pr):Qs;for(xe=Jh.length-1,S=jt-1;S>=0;S--){const St=he+S,Zt=m[St],ed=St+1<G?m[St+1].el:_;Pr[S]===0?v(null,Zt,y,ed,I,R,M,C,O):$s&&(xe<0||S!==Jh[xe]?Ft(Zt,y,ed,2):xe--)}}},Ft=(f,m,y,_,I=null)=>{const{el:R,type:M,transition:C,children:O,shapeFlag:S}=f;if(S&6){Ft(f.component.subTree,m,y,_);return}if(S&128){f.suspense.move(m,y,_);return}if(S&64){M.move(f,m,y,me);return}if(M===Dt){s(R,m,y);for(let B=0;B<O.length;B++)Ft(O[B],m,y,_);s(f.anchor,m,y);return}if(M===Oc){T(f,m,y);return}if(_!==2&&S&1&&C)if(_===0)C.beforeEnter(R),s(R,m,y),Tt(()=>C.enter(R),I);else{const{leave:B,delayLeave:Z,afterLeave:ne}=C,he=()=>s(R,m,y),ke=()=>{B(R,()=>{he(),ne&&ne()})};Z?Z(R,he,ke):ke()}else s(R,m,y)},Et=(f,m,y,_=!1,I=!1)=>{const{type:R,props:M,ref:C,children:O,dynamicChildren:S,shapeFlag:G,patchFlag:B,dirs:Z}=f;if(C!=null&&fu(C,null,y,f,!0),G&256){m.ctx.deactivate(f);return}const ne=G&1&&Z,he=!Kr(f);let ke;if(he&&(ke=M&&M.onVnodeBeforeUnmount)&&Qt(ke,m,f),G&6)E(f.component,y,_);else{if(G&128){f.suspense.unmount(y,_);return}ne&&cs(f,null,m,"beforeUnmount"),G&64?f.type.remove(f,m,y,I,me,_):S&&(R!==Dt||B>0&&B&64)?U(S,m,y,!1,!0):(R===Dt&&B&384||!I&&G&16)&&U(O,m,y),_&&Vs(f)}(he&&(ke=M&&M.onVnodeUnmounted)||ne)&&Tt(()=>{ke&&Qt(ke,m,f),ne&&cs(f,null,m,"unmounted")},y)},Vs=f=>{const{type:m,el:y,anchor:_,transition:I}=f;if(m===Dt){lo(y,_);return}if(m===Oc){P(f);return}const R=()=>{r(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:C}=I,O=()=>M(y,R);C?C(f.el,R,O):O()}else R()},lo=(f,m)=>{let y;for(;f!==m;)y=d(f),r(f),f=y;r(m)},E=(f,m,y)=>{const{bum:_,scope:I,update:R,subTree:M,um:C}=f;_&&Co(_),I.stop(),R&&(R.active=!1,Et(M,f,m,y)),C&&Tt(C,m),Tt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(f,m,y,_=!1,I=!1,R=0)=>{for(let M=R;M<f.length;M++)Et(f[M],m,y,_,I)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),z=(f,m,y)=>{f==null?m._vnode&&Et(m._vnode,null,null,!0):v(m._vnode||null,f,m,null,null,null,y),ld(),Xp(),m._vnode=f},me={p:v,um:Et,m:Ft,r:Vs,mt:et,mc:H,pc:Ie,pbc:Ee,n:D,o:t};let De,ue;return e&&([De,ue]=e(me)),{render:z,hydrate:De,createApp:h0(z,De)}}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cl(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Pn(r[i]),a.el=o.el),n||Cl(o,a)),a.type===Fa&&(a.el=o.el)}}function p0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const m0=t=>t.__isTeleport,Wr=t=>t&&(t.disabled||t.disabled===""),wd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,pu=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},g0={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:p,querySelector:g,createText:v,createComment:x}}=u,k=Wr(e.props);let{shapeFlag:w,children:T,dynamicChildren:P}=e;if(t==null){const j=e.el=v(""),Q=e.anchor=v("");p(j,n,s),p(Q,n,s);const q=e.target=pu(e.props,g),H=e.targetAnchor=v("");q&&(p(H,q),o=o||wd(q));const ye=(Ee,Te)=>{w&16&&l(T,Ee,Te,r,i,o,a,c)};k?ye(n,Q):q&&ye(q,H)}else{e.el=t.el;const j=e.anchor=t.anchor,Q=e.target=t.target,q=e.targetAnchor=t.targetAnchor,H=Wr(t.props),ye=H?n:Q,Ee=H?j:q;if(o=o||wd(Q),P?(d(t.dynamicChildren,P,ye,r,i,o,a),Cl(t,e,!0)):c||h(t,e,ye,Ee,r,i,o,a,!1),k)H||vo(e,n,j,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Te=e.target=pu(e.props,g);Te&&vo(e,Te,null,u,0)}else H&&vo(e,Q,q,u,1)}pm(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=t;if(h&&i(l),(o||!Wr(d))&&(i(u),a&16))for(let p=0;p<c.length;p++){const g=c[p];r(g,e,n,!0,!!g.dynamicChildren)}},move:vo,hydrate:y0};function vo(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=i===2;if(h&&s(o,e,n),(!h||Wr(l))&&c&16)for(let d=0;d<u.length;d++)r(u[d],e,n,2);h&&s(a,e,n)}function y0(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=pu(e.props,c);if(l){const h=l._lpa||l.firstChild;if(e.shapeFlag&16)if(Wr(e.props))e.anchor=u(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(h,e,l,n,s,r,i)}pm(e)}return e.anchor&&o(e.anchor)}const gN=g0;function pm(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Dt=Symbol(void 0),Fa=Symbol(void 0),an=Symbol(void 0),Oc=Symbol(void 0),Gr=[];let Pt=null;function ja(t=!1){Gr.push(Pt=t?null:[])}function mm(){Gr.pop(),Pt=Gr[Gr.length-1]||null}let cr=1;function bd(t){cr+=t}function gm(t){return t.dynamicChildren=cr>0?Pt||Qs:null,mm(),cr>0&&Pt&&Pt.push(t),t}function v0(t,e,n,s,r,i){return gm(Rl(t,e,n,s,r,i,!0))}function ym(t,e,n,s,r){return gm(ut(t,e,n,s,r,!0))}function hi(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const Ba="__vInternal",vm=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>t!=null?Be(t)||Me(t)||ie(t)?{i:nt,r:t,k:e,f:!!n}:t:null;function Rl(t,e=null,n=null,s=0,r=null,i=t===Dt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vm(e),ref:e&&No(e),scopeId:La,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nt};return a?(Nl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),cr>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const ut=_0;function _0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Yw)&&(t=an),hi(t)){const a=ur(t,e,!0);return n&&Nl(a,n),cr>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(N0(t)&&(t=t.__vccOpts),e){e=w0(e);let{class:a,style:c}=e;a&&!Be(a)&&(e.class=al(a)),Ce(c)&&($p(c)&&!Y(c)&&(c=wt({},c)),e.style=ol(c))}const o=Be(t)?1:Nw(t)?128:m0(t)?64:Ce(t)?4:ie(t)?2:0;return Rl(t,e,n,s,r,o,i,!0)}function w0(t){return t?$p(t)||Ba in t?wt({},t):t:null}function ur(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?E0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vm(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(No(e)):[r,No(e)]:No(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function b0(t=" ",e=0){return ut(Fa,null,t,e)}function yN(t="",e=!1){return e?(ja(),ym(an,null,t)):ut(an,null,t)}function Bt(t){return t==null||typeof t=="boolean"?ut(an):Y(t)?ut(Dt,null,t.slice()):typeof t=="object"?Pn(t):ut(Fa,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ur(t)}function Nl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Nl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ba in e)?e._ctx=nt:r===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[b0(e)]):n=8);t.children=e,t.shapeFlag|=n}function E0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=al([e.class,s.class]));else if(r==="style")e.style=ol([e.style,s.style]);else if(Ra(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Qt(t,e,n,s=null){qt(t,e,7,[n,s])}const T0=fm();let I0=0;function x0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||T0,i={uid:I0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:um(s,r),emitsOptions:em(s,r),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Tw.bind(null,i),t.ce&&t.ce(i),i}let je=null;const _m=()=>je||nt,Yn=t=>{je=t,t.scope.on()},zn=()=>{je&&je.scope.off(),je=null};function wm(t){return t.vnode.shapeFlag&4}let di=!1;function S0(t,e=!1){di=e;const{props:n,children:s}=t.vnode,r=wm(t);i0(t,n,r,e),c0(t,s);const i=r?k0(t,e):void 0;return di=!1,i}function k0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ar(new Proxy(t.ctx,Jw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?C0(t):null;Yn(t),Ir();const i=Kn(s,t,0,[t.props,r]);if(xr(),zn(),ll(i)){if(i.then(zn,zn),e)return i.then(o=>{mu(t,o,e)}).catch(o=>{Vi(o,t,0)});t.asyncDep=i}else mu(t,i,e)}else bm(t,e)}function mu(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=zp(e)),bm(t,n)}let Ed;function bm(t,e,n){const s=t.type;if(!t.render){if(!e&&Ed&&!s.render){const r=s.template||kl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=wt(wt({isCustomElement:i,delimiters:a},o),c);s.render=Ed(r,u)}}t.render=s.render||$t}Yn(t),Ir(),e0(t),xr(),zn()}function A0(t){return new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}})}function C0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=A0(t))},slots:t.slots,emit:t.emit,expose:e}}function Va(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zp(ar(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zr)return zr[n](t)},has(e,n){return n in e||n in zr}}))}function R0(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function N0(t){return ie(t)&&"__vccOpts"in t}const At=(t,e)=>vw(t,e,di);function vN(t){const e=_m();let n=t();return zn(),ll(n)&&(n=n.catch(s=>{throw Yn(e),s})),[n,()=>Yn(e)]}function Em(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!Y(e)?hi(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&hi(n)&&(n=[n]),ut(t,e,n))}const O0=Symbol(""),D0=()=>en(O0),P0="3.2.47",M0="http://www.w3.org/2000/svg",fs=typeof document<"u"?document:null,Td=fs&&fs.createElement("template"),L0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?fs.createElementNS(M0,t):fs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>fs.createTextNode(t),createComment:t=>fs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Td.innerHTML=s?`<svg>${t}</svg>`:t;const a=Td.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function U0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function F0(t,e,n){const s=t.style,r=Be(n);if(n&&!r){if(e&&!Be(e))for(const i in e)n[i]==null&&gu(s,i,"");for(const i in n)gu(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Id=/\s*!important$/;function gu(t,e,n){if(Y(n))n.forEach(s=>gu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=j0(t,e);Id.test(n)?t.setProperty(Tr(s),n.replace(Id,""),"important"):t[s]=n}}const xd=["Webkit","Moz","ms"],Dc={};function j0(t,e){const n=Dc[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return Dc[e]=s;s=Da(s);for(let r=0;r<xd.length;r++){const i=xd[r]+s;if(i in t)return Dc[e]=i}return e}const Sd="http://www.w3.org/1999/xlink";function B0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sd,e.slice(6,e.length)):t.setAttributeNS(Sd,e,n);else{const i=x_(e);n==null||i&&!Ip(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function V0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ip(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ps(t,e,n,s){t.addEventListener(e,n,s)}function $0(t,e,n,s){t.removeEventListener(e,n,s)}function q0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=H0(e);if(s){const u=i[e]=W0(s,r);ps(t,a,u,c)}else o&&($0(t,a,o,c),i[e]=void 0)}}const kd=/(?:Once|Passive|Capture)$/;function H0(t){let e;if(kd.test(t)){e={};let s;for(;s=t.match(kd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tr(t.slice(2)),e]}let Pc=0;const K0=Promise.resolve(),z0=()=>Pc||(K0.then(()=>Pc=0),Pc=Date.now());function W0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qt(G0(s,n.value),e,5,[s])};return n.value=t,n.attached=z0(),n}function G0(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ad=/^on[a-z]/,Z0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?U0(t,s,r):e==="style"?F0(t,n,s):Ra(e)?cl(e)||q0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Q0(t,e,s,r))?V0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),B0(t,e,s,r))};function Q0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ad.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ad.test(e)&&Be(n)?!1:e in t}const Wo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Co(e,n):e};function Y0(t){t.target.composing=!0}function Cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _N={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Wo(r);const i=s||r.props&&r.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$o(a)),t._assign(a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",Y0),ps(t,"compositionend",Cd),ps(t,"change",Cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Wo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&$o(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wN={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Na(e);ps(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$o(Go(o)):Go(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Wo(s)},mounted(t,{value:e}){Rd(t,e)},beforeUpdate(t,e,n){t._assign=Wo(n)},updated(t,{value:e}){Rd(t,e)}};function Rd(t,e){const n=t.multiple;if(!(n&&!Y(e)&&!Na(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Go(i);if(n)Y(e)?i.selected=k_(e,o)>-1:i.selected=e.has(o);else if(Ca(Go(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Go(t){return"_value"in t?t._value:t.value}const X0=["ctrl","shift","alt","meta"],J0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>X0.some(n=>t[`${n}Key`]&&!e.includes(n))},bN=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=J0[e[r]];if(i&&i(n,e))return}return t(n,...s)},EN={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Mr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Mr(t,!0),s.enter(t)):s.leave(t,()=>{Mr(t,!1)}):Mr(t,e))},beforeUnmount(t,{value:e}){Mr(t,e)}};function Mr(t,e){t.style.display=e?t._vod:"none"}const eb=wt({patchProp:Z0},L0);let Nd;function tb(){return Nd||(Nd=d0(eb))}const nb=(...t)=>{const e=tb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=sb(s);if(!r)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sb(t){return Be(t)?document.querySelector(t):t}var rb=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Tm;const $a=t=>Tm=t,Im=Symbol();function yu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zr||(Zr={}));function ib(){const t=Cp(!0),e=t.run(()=>_l({}));let n=[],s=[];const r=ar({install(i){$a(r),r._a=i,i.provide(Im,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!rb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const xm=()=>{};function Od(t,e,n,s=xm){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Rp()&&U_(r),r}function qs(t,...e){t.slice().forEach(n=>{n(...e)})}function vu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];yu(r)&&yu(s)&&t.hasOwnProperty(n)&&!Me(s)&&!vn(s)?t[n]=vu(r,s):t[n]=s}return t}const ob=Symbol();function ab(t){return!yu(t)||!t.hasOwnProperty(ob)}const{assign:Mn}=Object;function cb(t){return!!(Me(t)&&t.effect)}function ub(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const l=mw(n.state.value[t]);return Mn(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ar(At(()=>{$a(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Sm(t,u,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{Mn(d,h)})},c}function Sm(t,e,n={},s,r,i){let o;const a=Mn({actions:{}},n),c={deep:!0};let u,l,h=ar([]),d=ar([]),p;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),_l({});let v;function x(q){let H;u=l=!1,typeof q=="function"?(q(s.state.value[t]),H={type:Zr.patchFunction,storeId:t,events:p}):(vu(s.state.value[t],q),H={type:Zr.patchObject,payload:q,storeId:t,events:p});const ye=v=Symbol();bl().then(()=>{v===ye&&(u=!0)}),l=!0,qs(h,H,s.state.value[t])}const k=xm;function w(){o.stop(),h=[],d=[],s._s.delete(t)}function T(q,H){return function(){$a(s);const ye=Array.from(arguments),Ee=[],Te=[];function mt(Qe){Ee.push(Qe)}function Lt(Qe){Te.push(Qe)}qs(d,{args:ye,name:q,store:j,after:mt,onError:Lt});let et;try{et=H.apply(this&&this.$id===t?this:j,ye)}catch(Qe){throw qs(Te,Qe),Qe}return et instanceof Promise?et.then(Qe=>(qs(Ee,Qe),Qe)).catch(Qe=>(qs(Te,Qe),Promise.reject(Qe))):(qs(Ee,et),et)}}const P={_p:s,$id:t,$onAction:Od.bind(null,d),$patch:x,$reset:k,$subscribe(q,H={}){const ye=Od(h,q,H.detached,()=>Ee()),Ee=o.run(()=>Hr(()=>s.state.value[t],Te=>{(H.flush==="sync"?l:u)&&q({storeId:t,type:Zr.direct,events:p},Te)},Mn({},c,H)));return ye},$dispose:w},j=Sr(P);s._s.set(t,j);const Q=s._e.run(()=>(o=Cp(),o.run(()=>e())));for(const q in Q){const H=Q[q];if(Me(H)&&!cb(H)||vn(H))i||(g&&ab(H)&&(Me(H)?H.value=g[q]:vu(H,g[q])),s.state.value[t][q]=H);else if(typeof H=="function"){const ye=T(q,H);Q[q]=ye,a.actions[q]=H}}return Mn(j,Q),Mn(pe(j),Q),Object.defineProperty(j,"$state",{get:()=>s.state.value[t],set:q=>{x(H=>{Mn(H,q)})}}),s._p.forEach(q=>{Mn(j,o.run(()=>q({store:j,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(j.$state,g),u=!0,l=!0,j}function lb(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const u=_m();return a=a||u&&en(Im,null),a&&$a(a),a=Tm,a._s.has(s)||(i?Sm(s,e,r,a):ub(s,r,a)),a._s.get(s)}return o.$id=s,o}function TN(t){{t=pe(t);const e={};for(const n in t){const s=t[n];(Me(s)||vn(s))&&(e[n]=Wp(t,n))}return e}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof window<"u";function hb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Mc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Kt(r)?r.map(t):t(r)}return n}const Qr=()=>{},Kt=Array.isArray,db=/\/$/,fb=t=>t.replace(db,"");function Lc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=yb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function pb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&lr(e.matched[s],n.matched[r])&&km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gb(t[n],e[n]))return!1;return!0}function gb(t,e){return Kt(t)?Pd(t,e):Kt(e)?Pd(e,t):t===e}function Pd(t,e){return Kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function yb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yr||(Yr={}));function vb(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fb(t)}const _b=/^[^#]+#/;function wb(t,e){return t.replace(_b,"#")+e}function bb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const qa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Eb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=bb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Md(t,e){return(history.state?history.state.position-e:-1)+t}const _u=new Map;function Tb(t,e){_u.set(t,e)}function Ib(t){const e=_u.get(t);return _u.delete(t),e}let xb=()=>location.protocol+"//"+location.host;function Am(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Dd(c,"")}return Dd(n,t)+s+r}function Sb(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Am(t,location),g=n.value,v=e.value;let x=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}x=v?d.position-v.position:0}else s(p);r.forEach(k=>{k(n.value,g,{delta:x,type:fi.pop,direction:x?x>0?Yr.forward:Yr.back:Yr.unknown})})};function c(){o=n.value}function u(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(be({},d.state,{scroll:qa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Ld(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?qa():null}}function kb(t){const{history:e,location:n}=window,s={value:Am(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:xb()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,Ld(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=be({},r.value,e.state,{forward:c,scroll:qa()});i(l.current,l,!0);const h=be({},Ld(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Ab(t){t=vb(t);const e=kb(t),n=Sb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=be({location:"",base:t,go:s,createHref:wb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Cb(t){return typeof t=="string"||t&&typeof t=="object"}function Cm(t){return typeof t=="string"||typeof t=="symbol"}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rm=Symbol("");var Ud;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ud||(Ud={}));function hr(t,e){return be(new Error,{type:t,[Rm]:!0},e)}function fn(t,e){return t instanceof Error&&Rm in t&&(e==null||!!(t.type&e))}const Fd="[^/]+?",Rb={sensitive:!1,strict:!1,start:!0,end:!0},Nb=/[.+*?^${}()[\]/\\]/g;function Ob(t,e){const n=be({},Rb,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Nb,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:x,regexp:k}=d;i.push({name:g,repeatable:v,optional:x});const w=k||Fd;if(w!==Fd){p+=10;try{new RegExp(`(${w})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+P.message)}}let T=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(T=x&&u.length<2?`(?:/${T})`:"/"+T),x&&(T+="?"),r+=T,p+=20,x&&(p+=-8),v&&(p+=-20),w===".*"&&(p+=-50)}l.push(p)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:x}=p,k=g in u?u[g]:"";if(Kt(k)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Kt(k)?k.join("/"):k;if(!w)if(x)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=w}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Db(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Pb(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Db(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(jd(s))return 1;if(jd(r))return-1}return r.length-s.length}function jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Mb={type:0,value:""},Lb=/[a-zA-Z0-9_]/;function Ub(t){if(!t)return[[]];if(t==="/")return[[Mb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Lb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Fb(t,e,n){const s=Ob(Ub(t.path),n),r=be(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function jb(t,e){const n=[],s=new Map;e=$d({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const p=!d,g=Bb(l);g.aliasOf=d&&d.record;const v=$d(e,l),x=[g];if("alias"in l){const T=typeof l.alias=="string"?[l.alias]:l.alias;for(const P of T)x.push(be({},g,{components:d?d.record.components:g.components,path:P,aliasOf:d?d.record:g}))}let k,w;for(const T of x){const{path:P}=T;if(h&&P[0]!=="/"){const j=h.record.path,Q=j[j.length-1]==="/"?"":"/";T.path=h.record.path+(P&&Q+P)}if(k=Fb(T,h,v),d?d.alias.push(k):(w=w||k,w!==k&&w.alias.push(k),p&&l.name&&!Vd(k)&&o(l.name)),g.children){const j=g.children;for(let Q=0;Q<j.length;Q++)i(j[Q],k,d&&d.children[Q])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return w?()=>{o(w)}:Qr}function o(l){if(Cm(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Pb(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Nm(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Vd(l)&&s.set(l.record.name,l)}function u(l,h){let d,p={},g,v;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw hr(1,{location:l});v=d.record.name,p=be(Bd(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),l.params&&Bd(l.params,d.keys.map(w=>w.name))),g=d.stringify(p)}else if("path"in l)g=l.path,d=n.find(w=>w.re.test(g)),d&&(p=d.parse(g),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw hr(1,{location:l,currentLocation:h});v=d.record.name,p=be({},h.params,l.params),g=d.stringify(p)}const x=[];let k=d;for(;k;)x.unshift(k.record),k=k.parent;return{name:v,path:g,params:p,matched:x,meta:$b(x)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Bd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Bb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Vb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Vd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $b(t){return t.reduce((e,n)=>be(e,n.meta),{})}function $d(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Nm(t,e){return e.children.some(n=>n===t||Nm(t,n))}const Om=/#/g,qb=/&/g,Hb=/\//g,Kb=/=/g,zb=/\?/g,Dm=/\+/g,Wb=/%5B/g,Gb=/%5D/g,Pm=/%5E/g,Zb=/%60/g,Mm=/%7B/g,Qb=/%7C/g,Lm=/%7D/g,Yb=/%20/g;function Ol(t){return encodeURI(""+t).replace(Qb,"|").replace(Wb,"[").replace(Gb,"]")}function Xb(t){return Ol(t).replace(Mm,"{").replace(Lm,"}").replace(Pm,"^")}function wu(t){return Ol(t).replace(Dm,"%2B").replace(Yb,"+").replace(Om,"%23").replace(qb,"%26").replace(Zb,"`").replace(Mm,"{").replace(Lm,"}").replace(Pm,"^")}function Jb(t){return wu(t).replace(Kb,"%3D")}function eE(t){return Ol(t).replace(Om,"%23").replace(zb,"%3F")}function tE(t){return t==null?"":eE(t).replace(Hb,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Dm," "),o=i.indexOf("="),a=Zo(o<0?i:i.slice(0,o)),c=o<0?null:Zo(i.slice(o+1));if(a in e){let u=e[a];Kt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function qd(t){let e="";for(let n in t){const s=t[n];if(n=Jb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(s)?s.map(i=>i&&wu(i)):[s&&wu(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const rE=Symbol(""),Hd=Symbol(""),Dl=Symbol(""),Um=Symbol(""),bu=Symbol("");function Lr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ln(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(hr(4,{from:n,to:e})):h instanceof Error?a(h):Cb(h)?a(hr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Uc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(iE(a)){const u=(a.__vccOpts||a)[e];u&&r.push(Ln(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=hb(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Ln(d,n,s,i,o)()}))}}return r}function iE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kd(t){const e=en(Dl),n=en(Um),s=At(()=>e.resolve(bs(t.to))),r=At(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(lr.bind(null,l));if(d>-1)return d;const p=zd(c[u-2]);return u>1&&zd(l)===p&&h[h.length-1].path!==p?h.findIndex(lr.bind(null,c[u-2])):d}),i=At(()=>r.value>-1&&uE(n.params,s.value.params)),o=At(()=>r.value>-1&&r.value===n.matched.length-1&&km(n.params,s.value.params));function a(c={}){return cE(c)?e[bs(t.replace)?"replace":"push"](bs(t.to)).catch(Qr):Promise.resolve()}return{route:s,href:At(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const oE=Sl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kd,setup(t,{slots:e}){const n=Sr(Kd(t)),{options:s}=en(Dl),r=At(()=>({[Wd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Em("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),aE=oE;function cE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uE(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function zd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wd=(t,e,n)=>t??e??n,lE=Sl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=en(bu),r=At(()=>t.route||s.value),i=en(Hd,0),o=At(()=>{let u=bs(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=At(()=>r.value.matched[o.value]);Ro(Hd,At(()=>o.value+1)),Ro(rE,a),Ro(bu,r);const c=_l();return Hr(()=>[c.value,a.value,t.name],([u,l,h],[d,p,g])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!lr(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Gd(n.default,{Component:d,route:u});const p=h.props[l],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,x=Em(d,be({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Gd(n.default,{Component:x,route:u})||x}}});function Gd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fm=lE;function hE(t){const e=jb(t.routes,t),n=t.parseQuery||nE,s=t.stringifyQuery||qd,r=t.history,i=Lr(),o=Lr(),a=Lr(),c=dw(On);let u=On;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Mc.bind(null,E=>""+E),h=Mc.bind(null,tE),d=Mc.bind(null,Zo);function p(E,U){let D,z;return Cm(E)?(D=e.getRecordMatcher(E),z=U):z=E,e.addRoute(z,D)}function g(E){const U=e.getRecordMatcher(E);U&&e.removeRoute(U)}function v(){return e.getRoutes().map(E=>E.record)}function x(E){return!!e.getRecordMatcher(E)}function k(E,U){if(U=be({},U||c.value),typeof E=="string"){const f=Lc(n,E,U.path),m=e.resolve({path:f.path},U),y=r.createHref(f.fullPath);return be(f,m,{params:d(m.params),hash:Zo(f.hash),redirectedFrom:void 0,href:y})}let D;if("path"in E)D=be({},E,{path:Lc(n,E.path,U.path).path});else{const f=be({},E.params);for(const m in f)f[m]==null&&delete f[m];D=be({},E,{params:h(E.params)}),U.params=h(U.params)}const z=e.resolve(D,U),me=E.hash||"";z.params=l(d(z.params));const De=pb(s,be({},E,{hash:Xb(me),path:z.path})),ue=r.createHref(De);return be({fullPath:De,hash:me,query:s===qd?sE(E.query):E.query||{}},z,{redirectedFrom:void 0,href:ue})}function w(E){return typeof E=="string"?Lc(n,E,c.value.path):be({},E)}function T(E,U){if(u!==E)return hr(8,{from:U,to:E})}function P(E){return q(E)}function j(E){return P(be(w(E),{replace:!0}))}function Q(E){const U=E.matched[E.matched.length-1];if(U&&U.redirect){const{redirect:D}=U;let z=typeof D=="function"?D(E):D;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=w(z):{path:z},z.params={}),be({query:E.query,hash:E.hash,params:"path"in z?{}:E.params},z)}}function q(E,U){const D=u=k(E),z=c.value,me=E.state,De=E.force,ue=E.replace===!0,f=Q(D);if(f)return q(be(w(f),{state:typeof f=="object"?be({},me,f.state):me,force:De,replace:ue}),U||D);const m=D;m.redirectedFrom=U;let y;return!De&&mb(s,z,D)&&(y=hr(16,{to:m,from:z}),as(z,z,!0,!1)),(y?Promise.resolve(y):ye(m,z)).catch(_=>fn(_)?fn(_,2)?_:Ut(_):Se(_,m,z)).then(_=>{if(_){if(fn(_,2))return q(be({replace:ue},w(_.to),{state:typeof _.to=="object"?be({},me,_.to.state):me,force:De}),U||m)}else _=Te(m,z,!0,ue,me);return Ee(m,z,_),_})}function H(E,U){const D=T(E,U);return D?Promise.reject(D):Promise.resolve()}function ye(E,U){let D;const[z,me,De]=dE(E,U);D=Uc(z.reverse(),"beforeRouteLeave",E,U);for(const f of z)f.leaveGuards.forEach(m=>{D.push(Ln(m,E,U))});const ue=H.bind(null,E,U);return D.push(ue),Hs(D).then(()=>{D=[];for(const f of i.list())D.push(Ln(f,E,U));return D.push(ue),Hs(D)}).then(()=>{D=Uc(me,"beforeRouteUpdate",E,U);for(const f of me)f.updateGuards.forEach(m=>{D.push(Ln(m,E,U))});return D.push(ue),Hs(D)}).then(()=>{D=[];for(const f of E.matched)if(f.beforeEnter&&!U.matched.includes(f))if(Kt(f.beforeEnter))for(const m of f.beforeEnter)D.push(Ln(m,E,U));else D.push(Ln(f.beforeEnter,E,U));return D.push(ue),Hs(D)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),D=Uc(De,"beforeRouteEnter",E,U),D.push(ue),Hs(D))).then(()=>{D=[];for(const f of o.list())D.push(Ln(f,E,U));return D.push(ue),Hs(D)}).catch(f=>fn(f,8)?f:Promise.reject(f))}function Ee(E,U,D){for(const z of a.list())z(E,U,D)}function Te(E,U,D,z,me){const De=T(E,U);if(De)return De;const ue=U===On,f=Ks?history.state:{};D&&(z||ue?r.replace(E.fullPath,be({scroll:ue&&f&&f.scroll},me)):r.push(E.fullPath,me)),c.value=E,as(E,U,D,ue),Ut()}let mt;function Lt(){mt||(mt=r.listen((E,U,D)=>{if(!lo.listening)return;const z=k(E),me=Q(z);if(me){q(be(me,{replace:!0}),z).catch(Qr);return}u=z;const De=c.value;Ks&&Tb(Md(De.fullPath,D.delta),qa()),ye(z,De).catch(ue=>fn(ue,12)?ue:fn(ue,2)?(q(ue.to,z).then(f=>{fn(f,20)&&!D.delta&&D.type===fi.pop&&r.go(-1,!1)}).catch(Qr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),Se(ue,z,De))).then(ue=>{ue=ue||Te(z,De,!1),ue&&(D.delta&&!fn(ue,8)?r.go(-D.delta,!1):D.type===fi.pop&&fn(ue,20)&&r.go(-1,!1)),Ee(z,De,ue)}).catch(Qr)}))}let et=Lr(),Qe=Lr(),$e;function Se(E,U,D){Ut(E);const z=Qe.list();return z.length?z.forEach(me=>me(E,U,D)):console.error(E),Promise.reject(E)}function Ie(){return $e&&c.value!==On?Promise.resolve():new Promise((E,U)=>{et.add([E,U])})}function Ut(E){return $e||($e=!E,Lt(),et.list().forEach(([U,D])=>E?D(E):U()),et.reset()),E}function as(E,U,D,z){const{scrollBehavior:me}=t;if(!Ks||!me)return Promise.resolve();const De=!D&&Ib(Md(E.fullPath,0))||(z||!D)&&history.state&&history.state.scroll||null;return bl().then(()=>me(E,U,De)).then(ue=>ue&&Eb(ue)).catch(ue=>Se(ue,E,U))}const Ft=E=>r.go(E);let Et;const Vs=new Set,lo={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:x,getRoutes:v,resolve:k,options:t,push:P,replace:j,go:Ft,back:()=>Ft(-1),forward:()=>Ft(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Qe.add,isReady:Ie,install(E){const U=this;E.component("RouterLink",aE),E.component("RouterView",Fm),E.config.globalProperties.$router=U,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>bs(c)}),Ks&&!Et&&c.value===On&&(Et=!0,P(r.location).catch(me=>{}));const D={};for(const me in On)D[me]=At(()=>c.value[me]);E.provide(Dl,U),E.provide(Um,Sr(D)),E.provide(bu,c);const z=E.unmount;Vs.add(E),E.unmount=function(){Vs.delete(E),Vs.size<1&&(u=On,mt&&mt(),mt=null,c.value=On,Et=!1,$e=!1),z()}}};return lo}function Hs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function dE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>lr(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>lr(u,c))||r.push(c))}return[n,s,r]}const fE=t=>(Iw("data-v-029362bf"),t=t(),xw(),t),pE=fE(()=>Rl("div",{id:"modal"},null,-1)),mE=Sl({__name:"App",setup(t){return(e,n)=>(ja(),v0(Dt,null,[ut(bs(Fm)),pE],64))}});const gE=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},yE=gE(mE,[["__scopeId","data-v-029362bf"]]),vE="modulepreload",_E=function(t,e){return new URL(t,e).href},Zd={},Fc=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=_E(i,s),i in Zd)return;Zd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":vE,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
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
 */const jm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},wE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const g=u<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bE=function(t){const e=jm(t);return Bm.encodeByteArray(e,!0)},Qo=function(t){return bE(t).replace(/\./g,"")},Vm=function(t){try{return Bm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function EE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TE=()=>EE().__FIREBASE_DEFAULTS__,IE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vm(t[1]);return e&&JSON.parse(e)},Ha=()=>{try{return TE()||IE()||xE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$m=t=>{var e,n;return(n=(e=Ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qm=t=>{const e=$m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},SE=()=>{var t;return(t=Ha())===null||t===void 0?void 0:t.config},Hm=t=>{var e;return(e=Ha())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Km(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),a].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function CE(){var t;const e=(t=Ha())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OE(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DE(){try{return typeof indexedDB=="object"}catch{return!1}}function PE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ME="FirebaseError";class dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ME,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?LE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new dn(r,a,s)}}function LE(t,e){return t.replace(UE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const UE=/\{\$([^}]+)}/g;function FE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Qd(i)&&Qd(o)){if(!Yo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Qd(t){return t!==null&&typeof t=="object"}/**
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
 */function qi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jE(t,e){const n=new BE(t,e);return n.subscribe.bind(n)}class BE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");VE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=jc),r.error===void 0&&(r.error=jc),r.complete===void 0&&(r.complete=jc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jc(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class $E{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new kE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HE(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(t){return t===hs?void 0:t}function HE(t){return t.instantiationMode==="EAGER"}/**
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
 */class KE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $E(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const zE={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},WE=ve.INFO,GE={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},ZE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=GE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pl{constructor(e){this.name=e,this._logLevel=WE,this._logHandler=ZE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const QE=(t,e)=>e.some(n=>t instanceof n);let Yd,Xd;function YE(){return Yd||(Yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XE(){return Xd||(Xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zm=new WeakMap,Eu=new WeakMap,Wm=new WeakMap,Bc=new WeakMap,Ml=new WeakMap;function JE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zm.set(n,t)}).catch(()=>{}),Ml.set(e,t),e}function eT(t){if(Eu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Eu.set(t,e)}let Tu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tT(t){Tu=t(Tu)}function nT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vc(this),e,...n);return Wm.set(s,e.sort?e.sort():[e]),Wn(s)}:XE().includes(t)?function(...e){return t.apply(Vc(this),e),Wn(zm.get(this))}:function(...e){return Wn(t.apply(Vc(this),e))}}function sT(t){return typeof t=="function"?nT(t):(t instanceof IDBTransaction&&eT(t),QE(t,YE())?new Proxy(t,Tu):t)}function Wn(t){if(t instanceof IDBRequest)return JE(t);if(Bc.has(t))return Bc.get(t);const e=sT(t);return e!==t&&(Bc.set(t,e),Ml.set(e,t)),e}const Vc=t=>Ml.get(t);function rT(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Wn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const iT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],$c=new Map;function Jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=oT.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||iT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return $c.set(e,i),i}tT(t=>({...t,get:(e,n,s)=>Jd(e,n)||t.get(e,n,s),has:(e,n)=>!!Jd(e,n)||t.has(e,n)}));/**
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
 */class aT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cT(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function cT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Iu="@firebase/app",ef="0.9.3";/**
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
 */const ks=new Pl("@firebase/app"),uT="@firebase/app-compat",lT="@firebase/analytics-compat",hT="@firebase/analytics",dT="@firebase/app-check-compat",fT="@firebase/app-check",pT="@firebase/auth",mT="@firebase/auth-compat",gT="@firebase/database",yT="@firebase/database-compat",vT="@firebase/functions",_T="@firebase/functions-compat",wT="@firebase/installations",bT="@firebase/installations-compat",ET="@firebase/messaging",TT="@firebase/messaging-compat",IT="@firebase/performance",xT="@firebase/performance-compat",ST="@firebase/remote-config",kT="@firebase/remote-config-compat",AT="@firebase/storage",CT="@firebase/storage-compat",RT="@firebase/firestore",NT="@firebase/firestore-compat",OT="firebase",DT="9.17.1";/**
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
 */const xu="[DEFAULT]",PT={[Iu]:"fire-core",[uT]:"fire-core-compat",[hT]:"fire-analytics",[lT]:"fire-analytics-compat",[fT]:"fire-app-check",[dT]:"fire-app-check-compat",[pT]:"fire-auth",[mT]:"fire-auth-compat",[gT]:"fire-rtdb",[yT]:"fire-rtdb-compat",[vT]:"fire-fn",[_T]:"fire-fn-compat",[wT]:"fire-iid",[bT]:"fire-iid-compat",[ET]:"fire-fcm",[TT]:"fire-fcm-compat",[IT]:"fire-perf",[xT]:"fire-perf-compat",[ST]:"fire-rc",[kT]:"fire-rc-compat",[AT]:"fire-gcs",[CT]:"fire-gcs-compat",[RT]:"fire-fst",[NT]:"fire-fst-compat","fire-js":"fire-js",[OT]:"fire-js-all"};/**
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
 */const Xo=new Map,Su=new Map;function MT(t,e){try{t.container.addComponent(e)}catch(n){ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(Su.has(e))return ks.debug(`There were multiple attempts to register component ${e}.`),!1;Su.set(e,t);for(const n of Xo.values())MT(n,t);return!0}function Ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const LT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gn=new $i("app","Firebase",LT);/**
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
 */class UT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=DT;function Gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xu,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Gn.create("bad-app-name",{appName:String(r)});if(n||(n=SE()),!n)throw Gn.create("no-options");const i=Xo.get(r);if(i){if(Yo(n,i.options)&&Yo(s,i.config))return i;throw Gn.create("duplicate-app",{appName:r})}const o=new KE(r);for(const c of Su.values())o.addComponent(c);const a=new UT(n,s,o);return Xo.set(r,a),a}function Ll(t=xu){const e=Xo.get(t);if(!e&&t===xu)return Gm();if(!e)throw Gn.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let r=(s=PT[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ks.warn(a.join(" "));return}As(new Xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const FT="firebase-heartbeat-database",jT=1,pi="firebase-heartbeat-store";let qc=null;function Zm(){return qc||(qc=rT(FT,jT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),qc}async function BT(t){try{return(await Zm()).transaction(pi).objectStore(pi).get(Qm(t))}catch(e){if(e instanceof dn)ks.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ks.warn(n.message)}}}async function tf(t,e){try{const s=(await Zm()).transaction(pi,"readwrite");return await s.objectStore(pi).put(e,Qm(t)),s.done}catch(n){if(n instanceof dn)ks.warn(n.message);else{const s=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ks.warn(s.message)}}}function Qm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VT=1024,$T=30*24*60*60*1e3;class qT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=$T}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nf(),{heartbeatsToSend:n,unsentEntries:s}=HT(this._heartbeatsCache.heartbeats),r=Qo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nf(){return new Date().toISOString().substring(0,10)}function HT(t,e=VT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),sf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class KT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DE()?PE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zT(t){As(new Xn("platform-logger",e=>new aT(e),"PRIVATE")),As(new Xn("heartbeat",e=>new qT(e),"PRIVATE")),tn(Iu,ef,t),tn(Iu,ef,"esm2017"),tn("fire-js","")}zT("");var WT="firebase",GT="9.17.1";/**
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
 */tn(WT,GT,"app");function Ul(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ym(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZT=Ym,Xm=new $i("auth","Firebase",Ym());/**
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
 */const rf=new Pl("@firebase/auth");function Oo(t,...e){rf.logLevel<=ve.ERROR&&rf.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw Fl(t,...e)}function nn(t,...e){return Fl(t,...e)}function Jm(t,e,n){const s=Object.assign(Object.assign({},ZT()),{[e]:n});return new $i("auth","Firebase",s).create(e,{appName:t.name})}function QT(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&cn(t,"argument-error"),Jm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Xm.create(t,...e)}function ee(t,e,...n){if(!t)throw Fl(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function Tn(t,e){t||mn(e)}/**
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
 */const of=new Map;function gn(t){Tn(t instanceof Function,"Expected a class definition");let e=of.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,of.set(t,e),e)}/**
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
 */function YT(t,e){const n=Ka(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Yo(i,e??{}))return r;cn(r,"already-initialized")}return n.initialize({options:e})}function XT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JT(){return af()==="http:"||af()==="https:"}function af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function eI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JT()||RE()||"connection"in navigator)?navigator.onLine:!0}function tI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=AE()||NE()}get(){return eI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jl(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const sI=new Hi(3e4,6e4);function rI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function za(t,e,n,s,r={}){return tg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=qi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),eg.fetch()(ng(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},nI),e);try{const r=new oI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _o(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jm(t,l,u);cn(t,l)}}catch(r){if(r instanceof dn)throw r;cn(t,"network-request-failed")}}async function iI(t,e,n,s,r={}){const i=await za(t,e,n,s,r);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ng(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?jl(t.config,r):`${t.config.apiScheme}://${r}`}class oI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),sI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _o(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nn(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function aI(t,e){return za(t,"POST","/v1/accounts:delete",e)}async function cI(t,e){return za(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=Bl(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Xr(Hc(r.auth_time)),issuedAtTime:Xr(Hc(r.iat)),expirationTime:Xr(Hc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function Bl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vm(n);return r?JSON.parse(r):(Oo("Failed to decode base64 JWT payload"),null)}catch(r){return Oo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function lI(t){const e=Bl(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof dn&&hI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function hI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await mi(t,cI(n,{idToken:s}));ee(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mI(i.providerUserInfo):[],a=pI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sg(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function fI(t){const e=Ve(t);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function mI(t){return t.map(e=>{var{providerId:n}=e,s=Ul(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function gI(t,e){const n=await tg(t,{},async()=>{const s=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ng(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await gI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new gi;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Dn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Es{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ul(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uI(this,e)}reload(){return fI(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Jo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mi(this,aI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:T,emailVerified:P,isAnonymous:j,providerData:Q,stsTokenManager:q}=n;ee(T&&q,e,"internal-error");const H=gi.fromJSON(this.name,q);ee(typeof T=="string",e,"internal-error"),Dn(h,e.name),Dn(d,e.name),ee(typeof P=="boolean",e,"internal-error"),ee(typeof j=="boolean",e,"internal-error"),Dn(p,e.name),Dn(g,e.name),Dn(v,e.name),Dn(x,e.name),Dn(k,e.name),Dn(w,e.name);const ye=new Es({uid:T,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:j,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:H,createdAt:k,lastLoginAt:w});return Q&&Array.isArray(Q)&&(ye.providerData=Q.map(Ee=>Object.assign({},Ee))),x&&(ye._redirectEventId=x),ye}static async _fromIdTokenResponse(e,n,s=!1){const r=new gi;r.updateFromServerResponse(n);const i=new Es({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Jo(i),i}}/**
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
 */class rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rg.type="NONE";const cf=rg;/**
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
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class er{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Do(this.userKey,r.apiKey,i),this.fullPersistenceKey=Do("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new er(gn(cf),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||gn(cf);const o=Do(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Es._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new er(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new er(i,e,s))}}/**
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
 */function uf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ig(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ug(e))return"Blackberry";if(lg(e))return"Webos";if(Vl(e))return"Safari";if((e.includes("chrome/")||og(e))&&!e.includes("edge/"))return"Chrome";if(cg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ig(t=dt()){return/firefox\//i.test(t)}function Vl(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function og(t=dt()){return/crios\//i.test(t)}function ag(t=dt()){return/iemobile/i.test(t)}function cg(t=dt()){return/android/i.test(t)}function ug(t=dt()){return/blackberry/i.test(t)}function lg(t=dt()){return/webos/i.test(t)}function Wa(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yI(t=dt()){var e;return Wa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vI(){return OE()&&document.documentMode===10}function hg(t=dt()){return Wa(t)||cg(t)||lg(t)||ug(t)||/windows phone/i.test(t)||ag(t)}function _I(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dg(t,e=[]){let n;switch(t){case"Browser":n=uf(dt());break;case"Worker":n=`${uf(dt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${s}`}/**
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
 */class wI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class bI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new wI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ga(t){return Ve(t)}class lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function EI(t,e,n){const s=Ga(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=fg(e),{host:o,port:a}=TI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||II()}function fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TI(t){const e=fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:hf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:hf(o)}}}function hf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function II(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
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
 */async function tr(t,e){return iI(t,"POST","/v1/accounts:signInWithIdp",rI(t,e))}/**
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
 */const xI="http://localhost";class Cs extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ul(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Cs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,tr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qi(n)}return e}}/**
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
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends Ki{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class jn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return jn.credential(n,s)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class Bn extends Ki{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class Vn extends Ki{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Vn.credential(n,s)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Es._fromIdTokenResponse(e,s,r),o=df(s);return new dr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=df(s);return new dr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ea extends dn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ea(e,n,s,r)}}function mg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,s):i})}async function SI(t,e,n=!1){const s=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",s)}/**
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
 */async function kI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await mi(t,mg(s,r,e,t),n);ee(i.idToken,s,"internal-error");const o=Bl(i.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),dr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(s,"user-mismatch"),i}}/**
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
 */async function AI(t,e,n=!1){const s="signIn",r=await mg(t,s,e),i=await dr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function CI(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function RI(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function NI(t,e,n,s){return Ve(t).onAuthStateChanged(e,n,s)}function IN(t){return Ve(t).signOut()}const ta="__sak";/**
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
 */class gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function OI(){const t=dt();return Vl(t)||Wa(t)}const DI=1e3,PI=10;class yg extends gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OI()&&_I(),this.fallbackToPolling=hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);vI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,PI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yg.type="LOCAL";const MI=yg;/**
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
 */class vg extends gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vg.type="SESSION";const _g=vg;/**
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
 */function LI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Za(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await LI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Za.receivers=[];/**
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
 */function ql(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ql("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function FI(t){sn().location.href=t}/**
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
 */function wg(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function jI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VI(){return wg()?self:null}/**
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
 */const bg="firebaseLocalStorageDb",$I=1,na="firebaseLocalStorage",Eg="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qa(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function qI(){const t=indexedDB.deleteDatabase(bg);return new zi(t).toPromise()}function Au(){const t=indexedDB.open(bg,$I);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(na,{keyPath:Eg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(na)?e(s):(s.close(),await qI(),e(await Au()))})})}async function ff(t,e,n){const s=Qa(t,!0).put({[Eg]:e,value:n});return new zi(s).toPromise()}async function HI(t,e){const n=Qa(t,!1).get(e),s=await new zi(n).toPromise();return s===void 0?null:s.value}function pf(t,e){const n=Qa(t,!0).delete(e);return new zi(n).toPromise()}const KI=800,zI=3;class Tg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Au(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Za._getInstance(VI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jI(),!this.activeServiceWorker)return;this.sender=new UI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Au();return await ff(e,ta,"1"),await pf(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ff(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>HI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qa(r,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tg.type="LOCAL";const WI=Tg;/**
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
 */function GI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ZI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",GI().appendChild(s)})}function QI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Hi(3e4,6e4);/**
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
 */function Ig(t,e){return e?gn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hl extends pg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YI(t){return AI(t.auth,new Hl(t),t.bypassAuthState)}function XI(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),kI(n,new Hl(t),t.bypassAuthState)}async function JI(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),SI(n,new Hl(t),t.bypassAuthState)}/**
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
 */class xg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YI;case"linkViaPopup":case"linkViaRedirect":return JI;case"reauthViaPopup":case"reauthViaRedirect":return XI;default:cn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const e1=new Hi(2e3,1e4);async function xN(t,e,n){const s=Ga(t);QT(t,e,$l);const r=Ig(s,n);return new gs(s,"signInViaPopup",e,r).executeNotNull()}class gs extends xg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,e1.get())};e()}}gs.currentPopupAction=null;/**
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
 */const t1="pendingRedirect",Po=new Map;class n1 extends xg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const s=await s1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s1(t,e){const n=o1(e),s=i1(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function r1(t,e){Po.set(t._key(),e)}function i1(t){return gn(t._redirectPersistence)}function o1(t){return Do(t1,t.config.apiKey,t.name)}async function a1(t,e,n=!1){const s=Ga(t),r=Ig(s,e),o=await new n1(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const c1=10*60*1e3;class u1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c1&&this.cachedEventUids.clear(),this.cachedEventUids.has(mf(e))}saveEventToCache(e){this.cachedEventUids.add(mf(e)),this.lastProcessedEventTime=Date.now()}}function mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(t);default:return!1}}/**
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
 */async function h1(t,e={}){return za(t,"GET","/v1/projects",e)}/**
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
 */const d1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f1=/^https?/;async function p1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await h1(t);for(const n of e)try{if(m1(n))return}catch{}cn(t,"unauthorized-domain")}function m1(t){const e=ku(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!f1.test(n))return!1;if(d1.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const g1=new Hi(3e4,6e4);function gf(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y1(t){return new Promise((e,n)=>{var s,r,i;function o(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),n(nn(t,"network-request-failed"))},timeout:g1.get()})}if(!((r=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const a=QI("iframefcb");return sn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},ZI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function v1(t){return Mo=Mo||y1(t),Mo}/**
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
 */const _1=new Hi(5e3,15e3),w1="__/auth/iframe",b1="emulator/auth/iframe",E1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I1(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jl(e,b1):`https://${t.config.authDomain}/${w1}`,s={apiKey:e.apiKey,appName:t.name,v:kr},r=T1.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${qi(s).slice(1)}`}async function x1(t){const e=await v1(t),n=sn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:I1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E1,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=sn().setTimeout(()=>{i(o)},_1.get());function c(){sn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k1=500,A1=600,C1="_blank",R1="http://localhost";class yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(t,e,n,s=k1,r=A1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},S1),{width:s.toString(),height:r.toString(),top:i,left:o}),u=dt().toLowerCase();n&&(a=og(u)?C1:n),ig(u)&&(e=e||R1,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(yI(u)&&a!=="_self")return O1(e||"",a),new yf(null);const h=window.open(e||"",a,l);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new yf(h)}function O1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const D1="__/auth/handler",P1="emulator/auth/handler";function vf(t,e,n,s,r,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:kr,eventId:r};if(e instanceof $l){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ki){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${M1(t)}?${qi(a).slice(1)}`}function M1({config:t}){return t.emulator?jl(t,P1):`https://${t.authDomain}/${D1}`}/**
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
 */const Kc="webStorageSupport";class L1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_g,this._completeRedirectFn=a1,this._overrideRedirectResult=r1}async _openPopup(e,n,s,r){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=vf(e,n,s,ku(),r);return N1(e,o,ql())}async _openRedirect(e,n,s,r){return await this._originValidation(e),FI(vf(e,n,s,ku(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Tn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await x1(e),s=new u1(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kc,{type:Kc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hg()||Vl()||Wa()}}const U1=L1;var _f="@firebase/auth",wf="0.21.3";/**
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
 */class F1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function j1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function B1(t){As(new Xn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{ee(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dg(t)},l=new bI(a,c,u);return XT(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),As(new Xn("auth-internal",e=>{const n=Ga(e.getProvider("auth").getImmediate());return(s=>new F1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(_f,wf,j1(t)),tn(_f,wf,"esm2017")}/**
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
 */const V1=5*60,$1=Hm("authIdTokenMaxAge")||V1;let bf=null;const q1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$1)return;const r=n==null?void 0:n.token;bf!==r&&(bf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function H1(t=Ll()){const e=Ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YT(t,{popupRedirectResolver:U1,persistence:[WI,MI,_g]}),s=Hm("authTokenSyncURL");if(s){const i=q1(s);RI(n,i,()=>i(n.currentUser)),CI(n,o=>i(o))}const r=$m("auth");return r&&EI(n,`http://${r}`),n}B1("Browser");var K1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Kl=Kl||{},te=K1||self;function sa(){}function Ya(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function z1(t){return Object.prototype.hasOwnProperty.call(t,zc)&&t[zc]||(t[zc]=++W1)}var zc="closure_uid_"+(1e9*Math.random()>>>0),W1=0;function G1(t,e,n){return t.call.apply(t.bind,arguments)}function Z1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=G1:lt=Z1,lt.apply(null,arguments)}function wo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function rs(){this.s=this.s,this.o=this.o}var Q1=0;rs.prototype.s=!1;rs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Q1!=0)&&z1(this)};rs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ef(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ya(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Y1=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",sa,e),te.removeEventListener("test",sa,e)}catch{}return t}();function ra(t){return/^[\s\xa0]*$/.test(t)}var Tf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wc(t,e){return t<e?-1:t>e?1:0}function Xa(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return Xa().indexOf(t)!=-1}function Wl(t){return Wl[" "](t),t}Wl[" "]=sa;function X1(t){var e=tx;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var J1=Xt("Opera"),fr=Xt("Trident")||Xt("MSIE"),Ag=Xt("Edge"),Cu=Ag||fr,Cg=Xt("Gecko")&&!(Xa().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),ex=Xa().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function Rg(){var t=te.document;return t?t.documentMode:void 0}var ia;e:{var Gc="",Zc=function(){var t=Xa();if(Cg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ag)return/Edge\/([\d\.]+)/.exec(t);if(fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ex)return/WebKit\/(\S+)/.exec(t);if(J1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zc&&(Gc=Zc?Zc[1]:""),fr){var Qc=Rg();if(Qc!=null&&Qc>parseFloat(Gc)){ia=String(Qc);break e}}ia=Gc}var tx={};function nx(){return X1(function(){let t=0;const e=Tf(String(ia)).split("."),n=Tf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Wc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Wc(r[2].length==0,i[2].length==0)||Wc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ru;if(te.document&&fr){var If=Rg();Ru=If||parseInt(ia,10)||void 0}else Ru=void 0;var sx=Ru;function yi(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Cg){e:{try{Wl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yi.X.h.call(this)}}rt(yi,ht);var rx={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gi="closure_listenable_"+(1e6*Math.random()|0),ix=0;function ox(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++ix,this.ba=this.ea=!1}function Ja(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Gl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ng(t){const e={};for(const n in t)e[n]=t[n];return e}const xf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Og(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<xf.length;i++)n=xf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ec(t){this.src=t,this.g={},this.h=0}ec.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ou(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ox(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Nu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=kg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ja(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ou(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Zl="closure_lm_"+(1e6*Math.random()|0),Yc={};function Dg(t,e,n,s,r){if(s&&s.once)return Mg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dg(t,e[i],n,s,r);return null}return n=Xl(n),t&&t[Gi]?t.N(e,n,Wi(s)?!!s.capture:!!s,r):Pg(t,e,n,!1,s,r)}function Pg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Wi(r)?!!r.capture:!!r,a=Yl(t);if(a||(t[Zl]=a=new ec(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ax(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Y1||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ug(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ax(){function t(n){return e.call(t.src,t.listener,n)}const e=cx;return t}function Mg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mg(t,e[i],n,s,r);return null}return n=Xl(n),t&&t[Gi]?t.O(e,n,Wi(s)?!!s.capture:!!s,r):Pg(t,e,n,!0,s,r)}function Lg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Lg(t,e[i],n,s,r);else s=Wi(s)?!!s.capture:!!s,n=Xl(n),t&&t[Gi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ou(i,n,s,r),-1<n&&(Ja(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ou(e,n,s,r)),(n=-1<t?e[t]:null)&&Ql(n))}function Ql(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Gi])Nu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ug(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Yl(e))?(Nu(n,t),n.h==0&&(n.src=null,e[Zl]=null)):Ja(t)}}}function Ug(t){return t in Yc?Yc[t]:Yc[t]="on"+t}function cx(t,e){if(t.ba)t=!0;else{e=new yi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ql(t),t=n.call(s,e)}return t}function Yl(t){return t=t[Zl],t instanceof ec?t:null}var Xc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(t){return typeof t=="function"?t:(t[Xc]||(t[Xc]=function(e){return t.handleEvent(e)}),t[Xc])}function Je(){rs.call(this),this.i=new ec(this),this.P=this,this.I=null}rt(Je,rs);Je.prototype[Gi]=!0;Je.prototype.removeEventListener=function(t,e,n,s){Lg(this,t,e,n,s)};function st(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var r=e;e=new ht(s,t),Og(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=bo(o,s,!0,e)&&r}if(o=e.g=t,r=bo(o,s,!0,e)&&r,r=bo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=bo(o,s,!1,e)&&r}Je.prototype.M=function(){if(Je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ja(n[s]);delete t.g[e],t.h--}}this.I=null};Je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function bo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Nu(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Jl=te.JSON.stringify;function ux(){var t=Bg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lx{constructor(){this.h=this.g=null}add(e,n){const s=Fg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hx,t=>t.reset());class hx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dx(t){te.setTimeout(()=>{throw t},0)}function jg(t,e){Du||fx(),Pu||(Du(),Pu=!0),Bg.add(t,e)}var Du;function fx(){var t=te.Promise.resolve(void 0);Du=function(){t.then(px)}}var Pu=!1,Bg=new lx;function px(){for(var t;t=ux();){try{t.h.call(t.g)}catch(n){dx(n)}var e=Fg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pu=!1}function tc(t,e){Je.call(this),this.h=t||1,this.g=e||te,this.j=lt(this.lb,this),this.l=Date.now()}rt(tc,Je);$=tc.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),st(this,"tick"),this.ca&&(eh(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function eh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){tc.X.M.call(this),eh(this),delete this.g};function th(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Vg(t){t.g=th(()=>{t.g=null,t.i&&(t.i=!1,Vg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mx extends rs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vg(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(t){rs.call(this),this.h=t,this.g={}}rt(vi,rs);var Sf=[];function $g(t,e,n,s){Array.isArray(n)||(n&&(Sf[0]=n.toString()),n=Sf);for(var r=0;r<n.length;r++){var i=Dg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qg(t){Gl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ql(e)},t),t.g={}}vi.prototype.M=function(){vi.X.M.call(this),qg(this)};vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nc(){this.g=!0}nc.prototype.Aa=function(){this.g=!1};function gx(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function yx(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Zs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_x(t,n)+(s?" "+s:"")})}function vx(t,e){t.info(function(){return"TIMEOUT: "+e})}nc.prototype.info=function(){};function _x(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Jl(n)}catch{return e}}var Ls={},kf=null;function sc(){return kf=kf||new Je}Ls.Pa="serverreachability";function Hg(t){ht.call(this,Ls.Pa,t)}rt(Hg,ht);function _i(t){const e=sc();st(e,new Hg(e))}Ls.STAT_EVENT="statevent";function Kg(t,e){ht.call(this,Ls.STAT_EVENT,t),this.stat=e}rt(Kg,ht);function vt(t){const e=sc();st(e,new Kg(e,t))}Ls.Qa="timingevent";function zg(t,e){ht.call(this,Ls.Qa,t),this.size=e}rt(zg,ht);function Zi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var rc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nh(){}nh.prototype.h=null;function Af(t){return t.h||(t.h=t.i())}function Gg(){}var Qi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sh(){ht.call(this,"d")}rt(sh,ht);function rh(){ht.call(this,"c")}rt(rh,ht);var Mu;function ic(){}rt(ic,nh);ic.prototype.g=function(){return new XMLHttpRequest};ic.prototype.i=function(){return{}};Mu=new ic;function Yi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new vi(this),this.O=wx,t=Cu?125:void 0,this.T=new tc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Zg}function Zg(){this.i=null,this.g="",this.h=!1}var wx=45e3,Lu={},oa={};$=Yi.prototype;$.setTimeout=function(t){this.O=t};function Uu(t,e,n){t.K=1,t.v=ac(In(e)),t.s=n,t.P=!0,Qg(t,null)}function Qg(t,e){t.F=Date.now(),Xi(t),t.A=In(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ry(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Zg,t.g=xy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new mx(lt(t.La,t,t.g),t.N)),$g(t.S,t.g,"readystatechange",t.ib),e=t.H?Ng(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_i(),gx(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&yn(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const l=yn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Cu||this.g&&(this.h.h||this.g.fa()||Of(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?_i(3):_i(2)),oc(this);var n=this.g.aa();this.Y=n;t:if(Yg(this)){var s=Of(this.g);t="";var r=s.length,i=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),Jr(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yx(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ra(a)){var u=a;break t}}u=null}if(n=u)Zs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fu(this,n);else{this.i=!1,this.o=3,vt(12),ys(this),Jr(this);break e}}this.P?(Xg(this,l,o),Cu&&this.i&&l==3&&($g(this.S,this.T,"tick",this.hb),this.T.start())):(Zs(this.j,this.m,o,null),Fu(this,o)),l==4&&ys(this),this.i&&!this.I&&(l==4?by(this.l,this):(this.i=!1,Xi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),ys(this),Jr(this)}}}catch{}finally{}};function Yg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Xg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=bx(t,n),r==oa){e==4&&(t.o=4,vt(14),s=!1),Zs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Lu){t.o=4,vt(15),Zs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Zs(t.j,t.m,r,null),Fu(t,r);Yg(t)&&r!=oa&&r!=Lu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hh(e),e.K=!0,vt(11))):(Zs(t.j,t.m,n,"[Invalid Chunked Response]"),ys(t),Jr(t))}$.hb=function(){if(this.g){var t=yn(this.g),e=this.g.fa();this.C<e.length&&(oc(this),Xg(this,t,e),this.i&&t!=4&&Xi(this))}};function bx(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?oa:(n=Number(e.substring(n,s)),isNaN(n)?Lu:(s+=1,s+n>e.length?oa:(e=e.substr(s,n),t.C=s+n,e)))}$.cancel=function(){this.I=!0,ys(this)};function Xi(t){t.V=Date.now()+t.O,Jg(t,t.O)}function Jg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Zi(lt(t.gb,t),e)}function oc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vx(this.j,this.A),this.K!=2&&(_i(),vt(17)),ys(this),this.o=2,Jr(this)):Jg(this,this.V-t)};function Jr(t){t.l.G==0||t.I||by(t.l,t)}function ys(t){oc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,eh(t.T),qg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ju(n.h,t))){if(!t.J&&ju(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ua(n),lc(n);else break e;lh(n),vt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Zi(lt(n.cb,n),6e3));if(1>=ay(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else vs(n,11)}else if((t.J||n.g==t)&&ua(n),!ra(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ih(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Oe(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Iy(s,s.H?s.ka:null,s.V),o.J){cy(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(oc(a),Xi(a)),s.g=o}else _y(s);0<n.i.length&&hc(n)}else u[0]!="stop"&&u[0]!="close"||vs(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vs(n,7):uh(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}_i(4)}catch{}}function Ex(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ya(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Tx(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ya(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ey(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ya(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Tx(t),s=Ex(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var ty=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ix(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ts(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ts){this.h=e!==void 0?e:t.h,aa(this,t.j),this.s=t.s,this.g=t.g,ca(this,t.m),this.l=t.l,e=t.i;var n=new wi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cf(this,n),this.o=t.o}else t&&(n=String(t).match(ty))?(this.h=!!e,aa(this,n[1]||"",!0),this.s=Br(n[2]||""),this.g=Br(n[3]||"",!0),ca(this,n[4]),this.l=Br(n[5]||"",!0),Cf(this,n[6]||"",!0),this.o=Br(n[7]||"")):(this.h=!!e,this.i=new wi(null,this.h))}Ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vr(e,Rf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vr(e,Rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vr(n,n.charAt(0)=="/"?kx:Sx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vr(n,Cx)),t.join("")};function In(t){return new Ts(t)}function aa(t,e,n){t.j=n?Br(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cf(t,e,n){e instanceof wi?(t.i=e,Rx(t.i,t.h)):(n||(e=Vr(e,Ax)),t.i=new wi(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function ac(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Br(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rf=/[#\/\?@]/g,Sx=/[#\?:]/g,kx=/[#\?]/g,Ax=/[#\?@]/g,Cx=/#/g;function wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function is(t){t.g||(t.g=new Map,t.h=0,t.i&&Ix(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=wi.prototype;$.add=function(t,e){is(this),this.i=null,t=Ar(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ny(t,e){is(t),e=Ar(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sy(t,e){return is(t),e=Ar(t,e),t.g.has(e)}$.forEach=function(t,e){is(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};$.oa=function(){is(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};$.W=function(t){is(this);let e=[];if(typeof t=="string")sy(this,t)&&(e=e.concat(this.g.get(Ar(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return is(this),this.i=null,t=Ar(this,t),sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ry(t,e,n){ny(t,e),0<n.length&&(t.i=null,t.g.set(Ar(t,e),zl(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ar(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Rx(t,e){e&&!t.j&&(is(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ny(this,s),ry(this,r,n))},t)),t.j=e}var Nx=class{constructor(e,n){this.h=e,this.g=n}};function iy(t){this.l=t||Ox,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ox=10;function oy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ay(t){return t.h?1:t.g?t.g.size:0}function ju(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ih(t,e){t.g?t.g.add(e):t.h=e}function cy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iy.prototype.cancel=function(){if(this.i=uy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zl(t.i)}function oh(){}oh.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};oh.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function Dx(){this.g=new oh}function Px(t,e,n){const s=n||"";try{ey(t,function(r,i){let o=r;Wi(r)&&(o=Jl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Mx(t,e){const n=new nc;if(te.Image){const s=new Image;s.onload=wo(Eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=wo(Eo,n,s,"TestLoadImage: error",!1,e),s.onabort=wo(Eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=wo(Eo,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Eo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ji(t){this.l=t.ac||null,this.j=t.jb||!1}rt(Ji,nh);Ji.prototype.g=function(){return new cc(this.l,this.j)};Ji.prototype.i=function(t){return function(){return t}}({});function cc(t,e){Je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ah,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(cc,Je);var ah=0;$=cc.prototype;$.open=function(t,e){if(this.readyState!=ah)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=ah};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ly(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ly(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eo(this):bi(this),this.readyState==3&&ly(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,eo(this))};$.Ua=function(t){this.g&&(this.response=t,eo(this))};$.ga=function(){this.g&&eo(this)};function eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Lx=te.JSON.parse;function Le(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hy,this.K=this.L=!1}rt(Le,Je);var hy="",Ux=/^https?$/i,Fx=["POST","PUT"];$=Le.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Mu.g(),this.C=this.u?Af(this.u):Af(Mu),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=te.FormData&&t instanceof te.FormData,!(0<=kg(Fx,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{py(this),0<this.B&&((this.K=jx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=th(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nf(this,i)}};function jx(t){return fr&&nx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof Kl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Nf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dy(t),uc(t)}function dy(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),uc(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uc(this,!0)),Le.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?fy(this):this.fb())};$.fb=function(){fy(this)};function fy(t){if(t.h&&typeof Kl<"u"&&(!t.C[1]||yn(t)!=4||t.aa()!=2)){if(t.v&&yn(t)==4)th(t.Ha,0,t);else if(st(t,"readystatechange"),yn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(ty)[1]||null;if(!r&&te.self&&te.self.location){var i=te.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ux.test(r?r.toLowerCase():"")}n=s}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",dy(t)}}finally{uc(t)}}}}function uc(t,e){if(t.g){py(t);const n=t.g,s=t.C[0]?sa:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=s}catch{}}}function py(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Lx(e)}};function Of(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function my(t){let e="";return Gl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ch(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=my(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function Ur(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gy(t){this.Ca=0,this.i=[],this.j=new nc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ur("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ur("baseRetryDelayMs",5e3,t),this.bb=Ur("retryDelaySeedMs",1e4,t),this.$a=Ur("forwardChannelMaxRetries",2,t),this.ta=Ur("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new iy(t&&t.concurrentRequestLimit),this.Fa=new Dx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=gy.prototype;$.ma=8;$.G=1;function uh(t){if(yy(t),t.G==3){var e=t.U++,n=In(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),to(t,n),e=new Yi(t,t.j,e,void 0),e.K=2,e.v=ac(In(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=xy(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xi(e)}Ty(t)}function lc(t){t.g&&(hh(t),t.g.cancel(),t.g=null)}function yy(t){lc(t),t.u&&(te.clearTimeout(t.u),t.u=null),ua(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function hc(t){oy(t.h)||t.m||(t.m=!0,jg(t.Ja,t),t.C=0)}function Bx(t,e){return ay(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Zi(lt(t.Ja,t,e),Ey(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Yi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ng(i),Og(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vy(this,r,e),n=In(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),to(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(my(i)))+"&"+e:this.o&&ch(n,this.o,i)),ih(this.h,r),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),r.Z=!0,Uu(r,n,null)):Uu(r,n,e),this.G=2}}else this.G==3&&(t?Df(this,t):this.i.length==0||oy(this.h)||Df(this))};function Df(t,e){var n;e?n=e.m:n=t.U++;const s=In(t.F);Oe(s,"SID",t.I),Oe(s,"RID",n),Oe(s,"AID",t.T),to(t,s),t.o&&t.s&&ch(s,t.o,t.s),n=new Yi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ih(t.h,n),Uu(n,s,e)}function to(t,e){t.ia&&Gl(t.ia,function(n,s){Oe(e,s,n)}),t.l&&ey({},function(n,s){Oe(e,s,n)})}function vy(t,e,n){n=Math.min(t.i.length,n);var s=t.l?lt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Px(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function _y(t){t.g||t.u||(t.Z=1,jg(t.Ia,t),t.A=0)}function lh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Zi(lt(t.Ia,t),Ey(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,wy(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Zi(lt(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),lc(this),wy(this))};function hh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function wy(t){t.g=new Yi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=In(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),to(t,e),t.o&&t.s&&ch(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ac(In(e)),n.s=null,n.P=!0,Qg(n,t)}$.cb=function(){this.v!=null&&(this.v=null,lc(this),lh(this),vt(19))};function ua(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function by(t,e){var n=null;if(t.g==e){ua(t),hh(t),t.g=null;var s=2}else if(ju(t.h,e))n=e.D,cy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=sc(),st(s,new zg(s,n)),hc(t)}else _y(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Bx(t,e)||s==2&&lh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:vs(t,5);break;case 4:vs(t,10);break;case 3:vs(t,6);break;default:vs(t,2)}}}function Ey(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function vs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=lt(t.kb,t);n||(n=new Ts("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||aa(n,"https"),ac(n)),Mx(n.toString(),s)}else vt(2);t.G=0,t.l&&t.l.va(e),Ty(t),yy(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Ty(t){if(t.G=0,t.la=[],t.l){const e=uy(t.h);(e.length!=0||t.i.length!=0)&&(Ef(t.la,e),Ef(t.la,t.i),t.h.i.length=0,zl(t.i),t.i.length=0),t.l.ua()}}function Iy(t,e,n){var s=n instanceof Ts?In(n):new Ts(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ca(s,s.m);else{var r=te.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ts(null,void 0);s&&aa(i,s),e&&(i.g=e),r&&ca(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Oe(s,n,e),Oe(s,"VER",t.ma),to(t,s),s}function xy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new Ji({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function Sy(){}$=Sy.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function la(){if(fr&&!(10<=Number(sx)))throw Error("Environmental error: no available transport.")}la.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){Je.call(this),this.g=new gy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ra(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ra(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cr(this)}rt(Ot,Je);Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Iy(t,null,t.V),hc(t)};Ot.prototype.close=function(){uh(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Jl(t),t=n);e.i.push(new Nx(e.ab++,t)),e.G==3&&hc(e)};Ot.prototype.M=function(){this.g.l=null,delete this.j,uh(this.g),delete this.g,Ot.X.M.call(this)};function ky(t){sh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(ky,sh);function Ay(){rh.call(this),this.status=1}rt(Ay,rh);function Cr(t){this.g=t}rt(Cr,Sy);Cr.prototype.xa=function(){st(this.g,"a")};Cr.prototype.wa=function(t){st(this.g,new ky(t))};Cr.prototype.va=function(t){st(this.g,new Ay)};Cr.prototype.ua=function(){st(this.g,"b")};la.prototype.createWebChannel=la.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;rc.NO_ERROR=0;rc.TIMEOUT=8;rc.HTTP_ERROR=6;Wg.COMPLETE="complete";Gg.EventType=Qi;Qi.OPEN="a";Qi.CLOSE="b";Qi.ERROR="c";Qi.MESSAGE="d";Je.prototype.listen=Je.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var Vx=function(){return new la},$x=function(){return sc()},Jc=rc,qx=Wg,Hx=Ls,Pf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Kx=Ji,To=Gg,zx=Le;const Mf="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Rr="9.17.1";/**
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
 */const Rs=new Pl("@firebase/firestore");function Lf(){return Rs.logLevel}function K(t,...e){if(Rs.logLevel<=ve.DEBUG){const n=e.map(dh);Rs.debug(`Firestore (${Rr}): ${t}`,...n)}}function xn(t,...e){if(Rs.logLevel<=ve.ERROR){const n=e.map(dh);Rs.error(`Firestore (${Rr}): ${t}`,...n)}}function Bu(t,...e){if(Rs.logLevel<=ve.WARN){const n=e.map(dh);Rs.warn(`Firestore (${Rr}): ${t}`,...n)}}function dh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function Ae(t,e){t||J()}function oe(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Cy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Gx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zx{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new Cy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new it(e)}}class Qx{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Yx{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Qx(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.A=n.token,new Xx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function eS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ry{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=eS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function we(t,e){return t<e?-1:t>e?1:0}function pr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new We(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new We(0,0))}static max(){return new re(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ei{constructor(e,n,s){n===void 0?n=0:n>e.length&&J(),s===void 0?s=e.length-n:s>e.length-n&&J(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Ei{construct(e,n,s){return new Ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const tS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ei{construct(e,n,s){return new ct(e,n,s)}static isValidIdentifier(e){return tS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ne.fromString(e))}static fromName(e){return new W(Ne.fromString(e).popFirst(5))}static empty(){return new W(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ne(e.slice()))}}function nS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new Jn(r,W.empty(),e)}function sS(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Jn(re.min(),W.empty(),-1)}static max(){return new Jn(re.max(),W.empty(),-1)}}function rS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const iS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function no(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==iS)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function so(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}fh.at=-1;/**
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
 */class aS{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Uf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function dc(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function cS(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const uS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=uS.exec(t);if(Ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function Oy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dy(t){const e=t.mapValue.fields.__previous_value__;return Oy(e)?Dy(e):e}function Ii(t){const e=es(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */const Io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oy(t)?4:lS(t)?9007199254740991:10:J()}function un(t,e){if(t===e)return!0;const n=Ns(t);if(n!==Ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ii(t).isEqual(Ii(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=es(s.timestampValue),o=es(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return mr(s.bytesValue).isEqual(mr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ke(s.geoPointValue.latitude)===Ke(r.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ke(s.integerValue)===Ke(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ke(s.doubleValue),o=Ke(r.doubleValue);return i===o?ha(i)===ha(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return pr(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Uf(i)!==Uf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!un(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function xi(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function gr(t,e){if(t===e)return 0;const n=Ns(t),s=Ns(e);if(n!==s)return we(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ke(r.integerValue||r.doubleValue),a=Ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ff(t.timestampValue,e.timestampValue);case 4:return Ff(Ii(t),Ii(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(r,i){const o=mr(r),a=mr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=we(o[c],a[c]);if(u!==0)return u}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=we(Ke(r.latitude),Ke(i.latitude));return o!==0?o:we(Ke(r.longitude),Ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=gr(o[c],a[c]);if(u)return u}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Io.mapValue&&i===Io.mapValue)return 0;if(r===Io.mapValue)return 1;if(i===Io.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=we(a[l],u[l]);if(h!==0)return h;const d=gr(o[a[l]],c[u[l]]);if(d!==0)return d}return we(a.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function Ff(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=es(t),s=es(e),r=we(n.seconds,s.seconds);return r!==0?r:we(n.nanos,s.nanos)}function yr(t){return Vu(t)}function Vu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=es(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Vu(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Vu(s.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function jf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $u(t){return!!t&&"integerValue"in t}function ph(t){return!!t&&"arrayValue"in t}function Bf(t){return!!t&&"nullValue"in t}function Vf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lo(t){return!!t&&"mapValue"in t}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Us(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ei(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function $f(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=gr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function qf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Py{}class ze extends Py{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new dS(e,n,s):n==="array-contains"?new mS(e,s):n==="in"?new gS(e,s):n==="not-in"?new yS(e,s):n==="array-contains-any"?new vS(e,s):new ze(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new fS(e,s):new pS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gr(n,this.value)):n!==null&&Ns(this.value)===Ns(n)&&this.matchesComparison(gr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zt extends Py{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new zt(e,n)}matches(e){return My(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function My(t){return t.op==="and"}function Ly(t){return hS(t)&&My(t)}function hS(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function qu(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+yr(t.value);if(Ly(t))return t.filters.map(e=>qu(e)).join(",");{const e=t.filters.map(n=>qu(n)).join(",");return`${t.op}(${e})`}}function Uy(t,e){return t instanceof ze?function(n,s){return s instanceof ze&&n.op===s.op&&n.field.isEqual(s.field)&&un(n.value,s.value)}(t,e):t instanceof zt?function(n,s){return s instanceof zt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Uy(i,s.filters[o]),!0):!1}(t,e):void J()}function Fy(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${yr(e.value)}`}(t):t instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(Fy).join(" ,")+"}"}(t):"Filter"}class dS extends ze{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class fS extends ze{constructor(e,n){super(e,"in",n),this.keys=jy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pS extends ze{constructor(e,n){super(e,"not-in",n),this.keys=jy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class mS extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ph(n)&&xi(n.arrayValue,this.value)}}class gS extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class yS extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xi(this.value.arrayValue,n)}}class vS extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xi(this.value.arrayValue,s))}}/**
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
 */class nr{constructor(e,n="asc"){this.field=e,this.dir=n}}function _S(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??tt.RED,this.left=r??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new tt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,r){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hf(this.data.getIterator())}getIteratorFrom(e){return new Hf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Hf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Ge(ct.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=ct.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ei(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Lo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Us(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new It(ei(this.value))}}function By(t){const e=[];return Us(t.fields,(n,s)=>{const r=new ct([n]);if(Lo(s)){const i=By(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ct(e)}/**
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
 */class ot{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,re.min(),re.min(),re.min(),It.empty(),0)}static newFoundDocument(e,n,s,r){return new ot(e,1,n,re.min(),s,r,0)}static newNoDocument(e,n){return new ot(e,2,n,re.min(),re.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,re.min(),re.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Kf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new wS(t,e,n,s,r,i,o)}function mh(t){const e=oe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>qu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>yr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>yr(s)).join(",")),e.ft=n}return e.ft}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_S(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Uy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qf(t.startAt,e.startAt)&&qf(t.endAt,e.endAt)}function Hu(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Nr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function bS(t,e,n,s,r,i,o,a){return new Nr(t,e,n,s,r,i,o,a)}function yh(t){return new Nr(t)}function zf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Vy(t){return t.collectionGroup!==null}function sr(t){const e=oe(t);if(e.dt===null){e.dt=[];const n=fc(e),s=vh(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new nr(n)),e.dt.push(new nr(ct.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new nr(ct.keyField(),i))}}}return e.dt}function Sn(t){const e=oe(t);if(!e._t)if(e.limitType==="F")e._t=Kf(e.path,e.collectionGroup,sr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of sr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new nr(i.field,o))}const s=e.endAt?new da(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new da(e.startAt.position,e.startAt.inclusive):null;e._t=Kf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ku(t,e){e.getFirstInequalityField(),fc(t);const n=t.filters.concat([e]);return new Nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zu(t,e,n){return new Nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pc(t,e){return gh(Sn(t),Sn(e))&&t.limitType===e.limitType}function $y(t){return`${mh(Sn(t))}|lt:${t.limitType}`}function Wu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Fy(s)).join(", ")}]`),dc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>yr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>yr(s)).join(",")),`Target(${n})`}(Sn(t))}; limitType=${t.limitType})`}function mc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):W.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of sr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=$f(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,sr(n),s)||n.endAt&&!function(r,i,o){const a=$f(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,sr(n),s))}(t,e)}function ES(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qy(t){return(e,n)=>{let s=!1;for(const r of sr(t)){const i=TS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function TS(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?gr(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
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
 */function Hy(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function Ky(t){return{integerValue:""+t}}function IS(t,e){return cS(e)?Ky(e):Hy(t,e)}/**
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
 */class gc{constructor(){this._=void 0}}function xS(t,e,n){return t instanceof fa?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Si?Wy(t,e):t instanceof ki?Gy(t,e):function(s,r){const i=zy(s,r),o=Wf(i)+Wf(s.gt);return $u(i)&&$u(s.gt)?Ky(o):Hy(s.yt,o)}(t,e)}function SS(t,e,n){return t instanceof Si?Wy(t,e):t instanceof ki?Gy(t,e):n}function zy(t,e){return t instanceof pa?$u(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class fa extends gc{}class Si extends gc{constructor(e){super(),this.elements=e}}function Wy(t,e){const n=Zy(e);for(const s of t.elements)n.some(r=>un(r,s))||n.push(s);return{arrayValue:{values:n}}}class ki extends gc{constructor(e){super(),this.elements=e}}function Gy(t,e){let n=Zy(e);for(const s of t.elements)n=n.filter(r=>!un(r,s));return{arrayValue:{values:n}}}class pa extends gc{constructor(e,n){super(),this.yt=e,this.gt=n}}function Wf(t){return Ke(t.integerValue||t.doubleValue)}function Zy(t){return ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Si&&s instanceof Si||n instanceof ki&&s instanceof ki?pr(n.elements,s.elements,un):n instanceof pa&&s instanceof pa?un(n.gt,s.gt):n instanceof fa&&s instanceof fa}(t.transform,e.transform)}class AS{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yc{}function Qy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _h(t.key,Mt.none()):new ro(t.key,t.data,Mt.none());{const n=t.data,s=It.empty();let r=new Ge(ct.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new os(t.key,s,new Ct(r.toArray()),Mt.none())}}function CS(t,e,n){t instanceof ro?function(s,r,i){const o=s.value.clone(),a=Zf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,r,i){if(!Uo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Zf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Yy(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ti(t,e,n,s){return t instanceof ro?function(r,i,o,a){if(!Uo(r.precondition,i))return o;const c=r.value.clone(),u=Qf(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof os?function(r,i,o,a){if(!Uo(r.precondition,i))return o;const c=Qf(r.fieldTransforms,a,i),u=i.data;return u.setAll(Yy(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Uo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function RS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=zy(s.transform,r||null);i!=null&&(n===null&&(n=It.empty()),n.set(s.field,i))}return n||null}function Gf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pr(n,s,(r,i)=>kS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends yc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class os extends yc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zf(t,e,n){const s=new Map;Ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,SS(o,a,n[r]))}return s}function Qf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,xS(i,o,e))}return s}class _h extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NS extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OS{constructor(e){this.count=e}}/**
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
 */var He,fe;function DS(t){switch(t){default:return J();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Xy(t){if(t===void 0)return xn("GRPC error has no .code"),b.UNKNOWN;switch(t){case He.OK:return b.OK;case He.CANCELLED:return b.CANCELLED;case He.UNKNOWN:return b.UNKNOWN;case He.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case He.INTERNAL:return b.INTERNAL;case He.UNAVAILABLE:return b.UNAVAILABLE;case He.UNAUTHENTICATED:return b.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case He.NOT_FOUND:return b.NOT_FOUND;case He.ALREADY_EXISTS:return b.ALREADY_EXISTS;case He.PERMISSION_DENIED:return b.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case He.ABORTED:return b.ABORTED;case He.OUT_OF_RANGE:return b.OUT_OF_RANGE;case He.UNIMPLEMENTED:return b.UNIMPLEMENTED;case He.DATA_LOSS:return b.DATA_LOSS;default:return J()}}(fe=He||(He={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Us(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ny(this.inner)}size(){return this.innerSize}}/**
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
 */const PS=new Ze(W.comparator);function kn(){return PS}const Jy=new Ze(W.comparator);function $r(...t){let e=Jy;for(const n of t)e=e.insert(n.key,n);return e}function ev(t){let e=Jy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function _s(){return ni()}function tv(){return ni()}function ni(){return new Or(t=>t.toString(),(t,e)=>t.isEqual(e))}const MS=new Ze(W.comparator),LS=new Ge(W.comparator);function de(...t){let e=LS;for(const n of t)e=e.add(n);return e}const US=new Ge(we);function nv(){return US}/**
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
 */class vc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new vc(re.min(),r,nv(),kn(),de())}}class io{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new io(s,n,de(),de(),de())}}/**
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
 */class Fo{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class sv{constructor(e,n){this.targetId=e,this.Et=n}}class rv{constructor(e,n,s=ft.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Yf{constructor(){this.At=0,this.Rt=Jf(),this.bt=ft.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=de(),n=de(),s=de();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:J()}}),new io(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Jf()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class FS{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=kn(),this.qt=Xf(),this.Ut=new Ge(we)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Hu(i))if(s===0){const o=new W(i.path);this.Qt(n,o,ot.newNoDocument(o,re.min()))}else Ae(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Hu(a.target)){const c=new W(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ot.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=de();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new vc(e,n,this.Ut,this.Lt,s);return this.Lt=kn(),this.qt=Xf(),this.Ut=new Ge(we),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Yf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ge(we),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Yf),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Xf(){return new Ze(W.comparator)}function Jf(){return new Ze(W.comparator)}/**
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
 */const jS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VS=(()=>({and:"AND",or:"OR"}))();class $S{constructor(e,n){this.databaseId=e,this.wt=n}}function ma(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iv(t,e){return t.wt?e.toBase64():e.toUint8Array()}function qS(t,e){return ma(t,e.toTimestamp())}function rn(t){return Ae(!!t),re.fromTimestamp(function(e){const n=es(e);return new We(n.seconds,n.nanos)}(t))}function wh(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ov(t){const e=Ne.fromString(t);return Ae(lv(e)),e}function Gu(t,e){return wh(t.databaseId,e.path)}function eu(t,e){const n=ov(e);if(n.get(1)!==t.databaseId.projectId)throw new F(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(av(n))}function Zu(t,e){return wh(t.databaseId,e)}function HS(t){const e=ov(t);return e.length===4?Ne.emptyPath():av(e)}function Qu(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function av(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ep(t,e,n){return{name:Gu(t,e),fields:n.value.mapValue.fields}}function KS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(Ae(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:Xy(c.code);return new F(u,c.message||"")}(o);n=new rv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=eu(t,s.document.name),i=rn(s.document.updateTime),o=s.document.createTime?rn(s.document.createTime):re.min(),a=new It({mapValue:{fields:s.document.fields}}),c=ot.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Fo(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=eu(t,s.document),i=s.readTime?rn(s.readTime):re.min(),o=ot.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=eu(t,s.document),i=s.removedTargetIds||[];n=new Fo([],i,r,null)}else{if(!("filter"in e))return J();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new OS(r),o=s.targetId;n=new sv(o,i)}}return n}function zS(t,e){let n;if(e instanceof ro)n={update:ep(t,e.key,e.value)};else if(e instanceof _h)n={delete:Gu(t,e.key)};else if(e instanceof os)n={update:ep(t,e.key,e.data),updateMask:tk(e.fieldMask)};else{if(!(e instanceof NS))return J();n={verify:Gu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof fa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Si)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ki)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pa)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw J()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:qS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:J()}(t,e.precondition)),n}function WS(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?rn(s.updateTime):rn(r);return i.isEqual(re.min())&&(i=rn(r)),new AS(i,s.transformResults||[])}(n,e))):[]}function GS(t,e){return{documents:[Zu(t,e.path)]}}function ZS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Zu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return uv(zt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:zs(l.field),direction:XS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||dc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function QS(t){let e=HS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ae(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=cv(l);return h instanceof zt&&Ly(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new nr(Ws(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,dc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new da(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new da(d,h)}(n.endAt)),bS(e,r,o,i,a,"F",c,u)}function YS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ws(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ws(e.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ws(e.unaryFilter.field);return ze.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ws(e.unaryFilter.field);return ze.create(i,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(Ws(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(n=>cv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function XS(t){return jS[t]}function JS(t){return BS[t]}function ek(t){return VS[t]}function zs(t){return{fieldPath:t.canonicalString()}}function Ws(t){return ct.fromServerFormat(t.fieldPath)}function uv(t){return t instanceof ze?function(e){if(e.op==="=="){if(Vf(e.value))return{unaryFilter:{field:zs(e.field),op:"IS_NAN"}};if(Bf(e.value))return{unaryFilter:{field:zs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vf(e.value))return{unaryFilter:{field:zs(e.field),op:"IS_NOT_NAN"}};if(Bf(e.value))return{unaryFilter:{field:zs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(e.field),op:JS(e.op),value:e.value}}}(t):t instanceof zt?function(e){const n=e.getFilters().map(s=>uv(s));return n.length===1?n[0]:{compositeFilter:{op:ek(e.op),filters:n}}}(t):J()}function tk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nk{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&CS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ti(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ti(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Qy(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,(n,s)=>Gf(n,s))&&pr(this.baseMutations,e.baseMutations,(n,s)=>Gf(n,s))}}class bh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ae(e.mutations.length===s.length);let r=MS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new bh(e,n,s,r)}}/**
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
 */class sk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Is{constructor(e,n,s,r,i=re.min(),o=re.min(),a=ft.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class rk{constructor(e){this.ie=e}}function ik(t){const e=QS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zu(e,e.limit,"L"):e}/**
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
 */class ok{constructor(){this.Je=new ak}addToCollectionParentIndex(e,n){return this.Je.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Jn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class ak{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ge(Ne.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ge(Ne.comparator)).toArray()}}/**
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
 */class vr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new vr(0)}static vn(){return new vr(-1)}}/**
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
 */class ck{constructor(){this.changes=new Or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lk{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ti(s.mutation,r,Ct.empty(),We.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,de()).next(()=>s))}getLocalViewOfDocuments(e,n,s=de()){const r=_s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=$r();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=_s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,de()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=kn();const o=ni(),a=ni();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof os)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ti(l.mutation,u,l.mutation.getFieldMask(),We.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new uk(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ni();let r=new Ze((o,a)=>o-a),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ct.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||de()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=tv();l.forEach(d=>{if(!i.has(d)){const p=Qy(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(_s());let a=-1,c=i;return o.next(u=>A.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?A.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,de())).next(l=>({batchId:a,changes:ev(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let r=$r();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=$r();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(u,l){return new Nr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ot.newInvalidDocument(u)))});let o=$r();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&ti(u.mutation,c,Ct.empty(),We.now()),mc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class hk{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:rn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ik(s.bundledQuery),readTime:rn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class dk{constructor(){this.overlays=new Ze(W.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=_s();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=_s(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ze((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=_s(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=_s(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return A.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sk(n,s));let i=this.es.get(n);i===void 0&&(i=de(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Eh{constructor(){this.ns=new Ge(Xe.ss),this.rs=new Ge(Xe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Xe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Xe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new W(new Ne([])),s=new Xe(n,e),r=new Xe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new W(new Ne([])),s=new Xe(n,e),r=new Xe(n,e+1);let i=de();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Xe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return W.comparator(e.key,n.key)||we(e._s,n._s)}static os(e,n){return we(e._s,n._s)||W.comparator(e.key,n.key)}}/**
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
 */class fk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ge(Xe.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nk(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Xe(n,0),r=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ge(we);return n.forEach(r=>{const i=new Xe(r,0),o=new Xe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),A.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;W.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new W(i),0);let a=new Ge(we);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ae(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return A.forEach(n.mutations,r=>{const i=new Xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Xe(n,0),r=this.gs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pk{constructor(e){this.Es=e,this.docs=new Ze(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let s=kn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ot.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=kn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||rS(sS(l),s)<=0||(r.has(l.key)||mc(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){J()}As(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new mk(this)}getSize(e){return A.resolve(this.size)}}class mk extends ck{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class gk{constructor(e){this.persistence=e,this.Rs=new Or(n=>mh(n),gh),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Eh,this.targetCount=0,this.vs=vr.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new vr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
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
 */class yk{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new fh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new gk(this),this.indexManager=new ok,this.remoteDocumentCache=function(s){return new pk(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new rk(n),this.Ns=new hk(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new fk(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){K("MemoryPersistence","Starting transaction:",e);const r=new vk(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return A.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class vk extends oS{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.Fs=new Eh,this.$s=null}static Bs(e){return new Th(e)}get Ls(){if(this.$s)return this.$s;throw J()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,s=>{const r=W.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Ih{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=de(),r=de();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ih(e,n.fromCache,s,r)}}/**
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
 */class _k{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(zf(n))return A.resolve(null);let s=Sn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=zu(n,null,"F"),s=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=de(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,zu(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return zf(n)||r.isEqual(re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Lf()<=ve.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wu(n)),this.Bi(e,o,n,nS(r,-1)))})}Fi(e,n){let s=new Ge(qy(e));return n.forEach((r,i)=>{mc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Lf()<=ve.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Wu(n)),this.Ni.getDocumentsMatchingQuery(e,n,Jn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class wk{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ze(we),this.Ui=new Or(i=>mh(i),gh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lk(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function bk(t,e,n,s){return new wk(t,e,n,s)}async function hv(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=de();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Ek(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const v=c.docVersions.get(p);Ae(v!==null),g.version.compareTo(v)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=de();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function dv(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Tk(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ft.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(g,v,x){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=kn(),u=de();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ik(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(re.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Ik(t,e,n){let s=de(),r=de();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=kn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function xk(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Sk(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Is(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Yu(t,e,n){const s=oe(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!so(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function tp(t,e,n){const s=oe(t);let r=re.min(),i=de();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=oe(a),h=l.Ui.get(u);return h!==void 0?A.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Sn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?i:de())).next(a=>(kk(s,ES(e),a),{documents:a,Hi:i})))}function kk(t,e,n){let s=t.Ki.get(e)||re.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class np{constructor(){this.activeTargetIds=nv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ak{constructor(){this.Lr=new np,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new np,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ck{Ur(e){}shutdown(){}}/**
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
 */class sp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Rk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Nk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class Ok extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);K("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(K("RestConnection","Received: ",c),c),c=>{throw Bu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=Rk[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new zx;a.setWithCredentials(!0),a.listenOnce(qx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Jc.NO_ERROR:const u=a.getResponseJson();K("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Jc.TIMEOUT:K("Connection",'RPC "'+e+'" timed out'),o(new F(b.DEADLINE_EXCEEDED,"Request time out"));break;case Jc.HTTP_ERROR:const l=a.getStatus();if(K("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(d.status);o(new F(p,d.message))}else o(new F(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(b.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{K("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Vx(),o=$x(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Kx({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");K("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Nk({Hr:g=>{h?K("Connection","Not sending because WebChannel is closed:",g):(l||(K("Connection","Opening WebChannel transport."),u.open(),l=!0),K("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,v,x)=>{g.listen(v,k=>{try{x(k)}catch(w){setTimeout(()=>{throw w},0)}})};return p(u,To.EventType.OPEN,()=>{h||K("Connection","WebChannel transport opened.")}),p(u,To.EventType.CLOSE,()=>{h||(h=!0,K("Connection","WebChannel transport closed"),d.io())}),p(u,To.EventType.ERROR,g=>{h||(h=!0,Bu("Connection","WebChannel transport errored:",g),d.io(new F(b.UNAVAILABLE,"The operation could not be completed")))}),p(u,To.EventType.MESSAGE,g=>{var v;if(!h){const x=g.data[0];Ae(!!x);const k=x,w=k.error||((v=k[0])===null||v===void 0?void 0:v.error);if(w){K("Connection","WebChannel received error:",w);const T=w.status;let P=function(Q){const q=He[Q];if(q!==void 0)return Xy(q)}(T),j=w.message;P===void 0&&(P=b.INTERNAL,j="Unknown error status: "+T+" with message "+w.message),h=!0,d.io(new F(P,j)),u.close()}else K("Connection","WebChannel received:",x),d.ro(x)}}),p(o,Hx.STAT_EVENT,g=>{g.stat===Pf.PROXY?K("Connection","Detected buffering proxy"):g.stat===Pf.NOPROXY&&K("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function tu(){return typeof document<"u"?document:null}/**
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
 */function _c(t){return new $S(t,!0)}class fv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class pv{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new fv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new F(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dk extends pv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=KS(this.yt,e),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?rn(i.readTime):re.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Qu(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Hu(a)?{documents:GS(r,a)}:{query:ZS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=iv(r,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=ma(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=YS(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Qu(this.yt),n.removeTarget=e,this.Bo(n)}}class Pk extends pv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=WS(e.writeResults,e.commitTime),s=rn(e.commitTime);return this.listener.Zo(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Qu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zS(this.yt,s))};this.Bo(n)}}/**
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
 */class Mk extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new F(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(b.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(b.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Lk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(xn(n),this.ou=!1):K("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Uk{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Fs(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c._u.add(4),await oo(c),c.gu.set("Unknown"),c._u.delete(4),await wc(c)}(this))})}),this.gu=new Lk(s,r)}}async function wc(t){if(Fs(t))for(const e of t.wu)await e(!0)}async function oo(t){for(const e of t.wu)await e(!1)}function mv(t,e){const n=oe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),kh(n)?Sh(n):Dr(n).ko()&&xh(n,e))}function gv(t,e){const n=oe(t),s=Dr(n);n.du.delete(e),s.ko()&&yv(n,e),n.du.size===0&&(s.ko()?s.Fo():Fs(n)&&n.gu.set("Unknown"))}function xh(t,e){t.yu.Ot(e.targetId),Dr(t).zo(e)}function yv(t,e){t.yu.Ot(e),Dr(t).Ho(e)}function Sh(t){t.yu=new FS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Dr(t).start(),t.gu.uu()}function kh(t){return Fs(t)&&!Dr(t).No()&&t.du.size>0}function Fs(t){return oe(t)._u.size===0}function vv(t){t.yu=void 0}async function Fk(t){t.du.forEach((e,n)=>{xh(t,e)})}async function jk(t,e){vv(t),kh(t)?(t.gu.hu(e),Sh(t)):t.gu.set("Unknown")}async function Bk(t,e,n){if(t.gu.set("Online"),e instanceof rv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ga(t,s)}else if(e instanceof Fo?t.yu.Kt(e):e instanceof sv?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(re.min()))try{const s=await dv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ft.EMPTY_BYTE_STRING,c.snapshotVersion)),yv(r,a);const u=new Is(c.target,a,1,c.sequenceNumber);xh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await ga(t,s)}}async function ga(t,e,n){if(!so(e))throw e;t._u.add(1),await oo(t),t.gu.set("Offline"),n||(n=()=>dv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await wc(t)})}function _v(t,e){return e().catch(n=>ga(t,n,e))}async function bc(t){const e=oe(t),n=ts(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Vk(e);)try{const r=await xk(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,$k(e,r)}catch(r){await ga(e,r)}wv(e)&&bv(e)}function Vk(t){return Fs(t)&&t.fu.length<10}function $k(t,e){t.fu.push(e);const n=ts(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function wv(t){return Fs(t)&&!ts(t).No()&&t.fu.length>0}function bv(t){ts(t).start()}async function qk(t){ts(t).eu()}async function Hk(t){const e=ts(t);for(const n of t.fu)e.Xo(n.mutations)}async function Kk(t,e,n){const s=t.fu.shift(),r=bh.from(s,e,n);await _v(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await bc(t)}async function zk(t,e){e&&ts(t).Yo&&await async function(n,s){if(r=s.code,DS(r)&&r!==b.ABORTED){const i=n.fu.shift();ts(n).Mo(),await _v(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bc(n)}var r}(t,e),wv(t)&&bv(t)}async function rp(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=Fs(n);n._u.add(3),await oo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await wc(n)}async function Wk(t,e){const n=oe(t);e?(n._u.delete(2),await wc(n)):e||(n._u.add(2),await oo(n),n.gu.set("Unknown"))}function Dr(t){return t.pu||(t.pu=function(e,n,s){const r=oe(e);return r.su(),new Dk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Fk.bind(null,t),Zr:jk.bind(null,t),Wo:Bk.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),kh(t)?Sh(t):t.gu.set("Unknown")):(await t.pu.stop(),vv(t))})),t.pu}function ts(t){return t.Iu||(t.Iu=function(e,n,s){const r=oe(e);return r.su(),new Pk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:qk.bind(null,t),Zr:zk.bind(null,t),tu:Hk.bind(null,t),Zo:Kk.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await bc(t)):(await t.Iu.stop(),t.fu.length>0&&(K("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Ah{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ah(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ch(t,e){if(xn("AsyncQueue",`${e}: ${t}`),so(t))return new F(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class rr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=$r(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new rr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new rr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ip{constructor(){this.Tu=new Ze(W.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):J():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class _r{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _r(e,n,rr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Gk{constructor(){this.Au=void 0,this.listeners=[]}}class Zk{constructor(){this.queries=new Or(e=>$y(e),pc),this.onlineState="Unknown",this.Ru=new Set}}async function Ev(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Gk),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ch(o,`Initialization of query '${Wu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Rh(n)}async function Tv(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Qk(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Rh(n)}function Yk(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Rh(t){t.Ru.forEach(e=>{e.next()})}class Iv{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new _r(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=_r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class xv{constructor(e){this.key=e}}class Sv{constructor(e){this.key=e}}class Xk{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=de(),this.mutatedKeys=de(),this.Gu=qy(e),this.Qu=new rr(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new ip,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=mc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let x=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(s.track({type:3,doc:p}),x=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),x=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),x=!0):d&&!p&&(s.track({type:1,doc:d}),x=!0,(c||u)&&(a=!0)),x&&(p?(o=o.add(p),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new _r(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ip,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=de(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Sv(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new xv(s))}),n}tc(e){this.qu=e.Hi,this.Ku=de();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return _r.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Jk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class eA{constructor(e){this.key=e,this.nc=!1}}class tA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Or(a=>$y(a),pc),this.rc=new Map,this.oc=new Set,this.uc=new Ze(W.comparator),this.cc=new Map,this.ac=new Eh,this.hc={},this.lc=new Map,this.fc=vr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function nA(t,e){const n=dA(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Sk(n.localStore,Sn(e));n.isPrimaryClient&&mv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await sA(n,e,s,a==="current",o.resumeToken)}return r}async function sA(t,e,n,s,r){t._c=(h,d,p)=>async function(g,v,x,k){let w=v.view.Wu(x);w.$i&&(w=await tp(g.localStore,v.query,!1).then(({documents:j})=>v.view.Wu(j,w)));const T=k&&k.targetChanges.get(v.targetId),P=v.view.applyChanges(w,g.isPrimaryClient,T);return ap(g,v.targetId,P.Xu),P.snapshot}(t,h,d,p);const i=await tp(t.localStore,e,!0),o=new Xk(e,i.Hi),a=o.Wu(i.documents),c=io.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);ap(t,n,u.Xu);const l=new Jk(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function rA(t,e){const n=oe(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!pc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Yu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),gv(n.remoteStore,s.targetId),Xu(n,s.targetId)}).catch(no)):(Xu(n,s.targetId),await Yu(n.localStore,s.targetId,!0))}async function iA(t,e,n){const s=fA(t);try{const r=await function(i,o){const a=oe(i),c=We.now(),u=o.reduce((d,p)=>d.add(p.key),de());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=kn(),g=de();return a.Gi.getEntries(d,u).next(v=>{p=v,p.forEach((x,k)=>{k.isValidDocument()||(g=g.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{l=v;const x=[];for(const k of o){const w=RS(k,l.get(k.key).overlayedDocument);w!=null&&x.push(new os(k.key,w,By(w.value.mapValue),Mt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,x,o)}).next(v=>{h=v;const x=v.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,x)})}).then(()=>({batchId:h.batchId,changes:ev(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ze(we)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ao(s,r.changes),await bc(s.remoteStore)}catch(r){const i=Ch(r,"Failed to persist write");n.reject(i)}}async function kv(t,e){const n=oe(t);try{const s=await Tk(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ae(o.nc):r.removedDocuments.size>0&&(Ae(o.nc),o.nc=!1))}),await ao(n,s,e)}catch(s){await no(s)}}function op(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Rh(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function oA(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ze(W.comparator);o=o.insert(i,ot.newNoDocument(i,re.min()));const a=de().add(i),c=new vc(re.min(),new Map,new Ge(we),o,a);await kv(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Nh(s)}else await Yu(s.localStore,e,!1).then(()=>Xu(s,e,n)).catch(no)}async function aA(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await Ek(n.localStore,e);Cv(n,s,null),Av(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ao(n,r)}catch(r){await no(r)}}async function cA(t,e,n){const s=oe(t);try{const r=await function(i,o){const a=oe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Ae(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Cv(s,e,n),Av(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ao(s,r)}catch(r){await no(r)}}function Av(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Cv(t,e,n){const s=oe(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Xu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Rv(t,s)})}function Rv(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(gv(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Nh(t))}function ap(t,e,n){for(const s of n)s instanceof xv?(t.ac.addReference(s.key,e),uA(t,s)):s instanceof Sv?(K("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Rv(t,s.key)):J()}function uA(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(K("SyncEngine","New document in limbo: "+n),t.oc.add(s),Nh(t))}function Nh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new W(Ne.fromString(e)),s=t.fc.next();t.cc.set(s,new eA(n)),t.uc=t.uc.insert(n,s),mv(t.remoteStore,new Is(Sn(yh(n.path)),s,2,fh.at))}}async function ao(t,e,n){const s=oe(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Ih.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=oe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(c,h=>A.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>A.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!so(l))throw l;K("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,g)}}}(s.localStore,i))}async function lA(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const s=await hv(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new F(b.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ao(n,s.ji)}}function hA(t,e){const n=oe(t),s=n.cc.get(e);if(s&&s.nc)return de().add(s.key);{let r=de();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function dA(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oA.bind(null,e),e.sc.Wo=Qk.bind(null,e.eventManager),e.sc.wc=Yk.bind(null,e.eventManager),e}function fA(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cA.bind(null,e),e}class pA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=_c(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return bk(this.persistence,new _k,e.initialUser,this.yt)}yc(e){return new yk(Th.Bs,this.yt)}gc(e){return new Ak}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>op(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lA.bind(null,this.syncEngine),await Wk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Zk}createDatastore(e){const n=_c(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Ok(r));var r;return function(i,o,a,c){return new Mk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>op(this.syncEngine,a,0),o=sp.C()?new sp:new Ck,new Uk(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new tA(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);K("RemoteStore","RemoteStore shutting down."),n._u.add(5),await oo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Nv(t,e,n){if(!n)throw new F(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gA(t,e,n,s){if(e===!0&&s===!0)throw new F(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cp(t){if(!W.isDocumentKey(t))throw new F(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function up(t){if(W.isDocumentKey(t))throw new F(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ec(t);throw new F(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const lp=new Map;class hp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Tc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Wx;switch(n.type){case"gapi":const s=n.client;return new Yx(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lp.get(e);n&&(K("ComponentProvider","Removing Datastore"),lp.delete(e),n.terminate())}(this),Promise.resolve()}}function yA(t,e,n,s={}){var r;const i=(t=Wt(t,Tc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Bu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=it.MOCK_USER;else{o=Km(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new it(c)}t._authCredentials=new Gx(new Cy(o,a))}}/**
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
 */class _t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class js{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class Zn extends js{constructor(e,n,s){super(e,n,yh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new W(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function vA(t,e,...n){if(t=Ve(t),Nv("collection","path",e),t instanceof Tc){const s=Ne.fromString(e,...n);return up(s),new Zn(t,null,s)}{if(!(t instanceof _t||t instanceof Zn))throw new F(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return up(s),new Zn(t.firestore,null,s)}}function Oh(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Ry.R()),Nv("doc","path",e),t instanceof Tc){const s=Ne.fromString(e,...n);return cp(s),new _t(t,null,new W(s))}{if(!(t instanceof _t||t instanceof Zn))throw new F(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return cp(s),new _t(t.firestore,t instanceof Zn?t.converter:null,new W(s))}}/**
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
 */class Ov{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _A{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=Ry.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ch(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function wA(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await hv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function bA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EA(t);K("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>rp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>rp(e.remoteStore,i)),t.onlineComponents=e}async function EA(t){return t.offlineComponents||(K("FirestoreClient","Using default OfflineComponentProvider"),await wA(t,new pA)),t.offlineComponents}async function Dv(t){return t.onlineComponents||(K("FirestoreClient","Using default OnlineComponentProvider"),await bA(t,new mA)),t.onlineComponents}function TA(t){return Dv(t).then(e=>e.syncEngine)}async function Pv(t){const e=await Dv(t),n=e.eventManager;return n.onListen=nA.bind(null,e.syncEngine),n.onUnlisten=rA.bind(null,e.syncEngine),n}function IA(t,e,n={}){const s=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ov({next:h=>{i.enqueueAndForget(()=>Tv(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new F(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new F(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Iv(yh(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Ev(r,l)}(await Pv(t),t.asyncQueue,e,n,s)),s.promise}function xA(t,e,n={}){const s=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ov({next:h=>{i.enqueueAndForget(()=>Tv(r,l)),h.fromCache&&a.source==="server"?c.reject(new F(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Iv(o,u,{includeMetadataChanges:!0,Nu:!0});return Ev(r,l)}(await Pv(t),t.asyncQueue,e,n,s)),s.promise}class SA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new fv(this,"async_queue_retry"),this.Wc=()=>{const n=tu();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=tu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=tu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new _n;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!so(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw xn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ah.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&J()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Bs extends Tc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new SA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mv(this),this._firestoreClient.terminate()}}function kA(t,e){const n=typeof t=="object"?t:Ll(),s=typeof t=="string"?t:e||"(default)",r=Ka(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=qm("firestore");i&&yA(r,...i)}return r}function Dh(t){return t._firestoreClient||Mv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mv(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new aS(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _A(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(ft.fromBase64String(e))}catch(n){throw new F(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wr(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ic{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ph{constructor(e){this._methodName=e}}/**
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
 */class Mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const AA=/^__.*__$/;class CA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class Lv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Uv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Lh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ya(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Uv(this.sa)&&AA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class RA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||_c(e)}da(e,n,s,r=!1){return new Lh({sa:e,methodName:n,fa:s,path:ct.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function xc(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new RA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fv(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Uh("Data must be an object, but it was:",o,s);const a=jv(s,o);let c,u;if(i.merge)c=new Ct(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Ju(e,h,n);if(!o.contains(d))throw new F(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Vv(l,d)||l.push(d)}c=new Ct(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new CA(new It(a),c,u)}class Sc extends Ph{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sc}}function NA(t,e,n,s){const r=t.da(1,e,n);Uh("Data must be an object, but it was:",r,s);const i=[],o=It.empty();Us(s,(c,u)=>{const l=Fh(e,c,n);u=Ve(u);const h=r.ca(l);if(u instanceof Sc)i.push(l);else{const d=co(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Ct(i);return new Lv(o,a,r.fieldTransforms)}function OA(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Ju(e,s,n)],c=[r];if(i.length%2!=0)throw new F(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ju(e,i[d])),c.push(i[d+1]);const u=[],l=It.empty();for(let d=a.length-1;d>=0;--d)if(!Vv(u,a[d])){const p=a[d];let g=c[d];g=Ve(g);const v=o.ca(p);if(g instanceof Sc)u.push(p);else{const x=co(g,v);x!=null&&(u.push(p),l.set(p,x))}}const h=new Ct(u);return new Lv(l,h,o.fieldTransforms)}function DA(t,e,n,s=!1){return co(n,t.da(s?4:3,e))}function co(t,e){if(Bv(t=Ve(t)))return Uh("Unsupported field value:",e,t),jv(t,e);if(t instanceof Ph)return function(n,s){if(!Uv(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=co(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return IS(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=We.fromDate(n);return{timestampValue:ma(s.yt,r)}}if(n instanceof We){const r=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ma(s.yt,r)}}if(n instanceof Mh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wr)return{bytesValue:iv(s.yt,n._byteString)};if(n instanceof _t){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:wh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ec(n)}`)}(t,e)}function jv(t,e){const n={};return Ny(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Us(t,(s,r)=>{const i=co(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Bv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Mh||t instanceof wr||t instanceof _t||t instanceof Ph)}function Uh(t,e,n){if(!Bv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ec(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ju(t,e,n){if((e=Ve(e))instanceof Ic)return e._internalPath;if(typeof e=="string")return Fh(t,e);throw ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const PA=new RegExp("[~\\*/\\[\\]]");function Fh(t,e,n){if(e.search(PA)>=0)throw ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ic(...e.split("."))._internalPath}catch{throw ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ya(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(b.INVALID_ARGUMENT,a+t+c)}function Vv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $v{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MA extends $v{data(){return super.data()}}function jh(t,e){return typeof e=="string"?Fh(t,e):e instanceof Ic?e._internalPath:e._delegate._internalPath}/**
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
 */function LA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bh{}class qv extends Bh{}function kN(t,e,...n){let s=[];e instanceof Bh&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof $h).length,o=r.filter(a=>a instanceof Vh).length;if(i>1||i>0&&o>0)throw new F(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Vh extends qv{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Vh(e,n,s)}_apply(e){const n=this._parse(e);return Hv(e._query,n),new js(e.firestore,e.converter,Ku(e._query,n))}_parse(e){const n=xc(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){fp(l,u);const d=[];for(const p of l)d.push(dp(a,r,p));h={arrayValue:{values:d}}}else h=dp(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||fp(l,u),h=DA(o,i,l,u==="in"||u==="not-in");return ze.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class $h extends Bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $h(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Hv(i,a),i=Ku(i,a)}(e._query,n),new js(e.firestore,e.converter,Ku(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qh extends qv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qh(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new F(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new nr(r,i);return function(a,c){if(vh(a)===null){const u=fc(a);u!==null&&Kv(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new js(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Nr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function AN(t,e="asc"){const n=e,s=jh("orderBy",t);return qh._create(s,n)}function dp(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new F(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vy(e)&&n.indexOf("/")!==-1)throw new F(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ne.fromString(n));if(!W.isDocumentKey(s))throw new F(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jf(t,new W(s))}if(n instanceof _t)return jf(t,n._key);throw new F(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(n)}.`)}function fp(t,e){if(!Array.isArray(t)||t.length===0)throw new F(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Hv(t,e){if(e.isInequality()){const s=fc(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=vh(t);i!==null&&Kv(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Kv(t,e,n){if(!n.isEqual(e))throw new F(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class UA{convertValue(e,n="none"){switch(Ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const s={};return Us(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Mh(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Dy(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const n=es(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ne.fromString(e);Ae(lv(s));const r=new Ti(s.get(1),s.get(3)),i=new W(s.popFirst(5));return r.isEqual(n)||xn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function zv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class qr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wv extends $v{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(jh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class jo extends Wv{data(e={}){return super.data(e)}}class FA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new qr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new jo(this._firestore,this._userDataWriter,s.key,s,new qr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new jo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new jo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:jA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function BA(t){t=Wt(t,_t);const e=Wt(t.firestore,Bs);return IA(Dh(e),t._key).then(n=>qA(e,t,n))}class Gv extends UA{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function CN(t){t=Wt(t,js);const e=Wt(t.firestore,Bs),n=Dh(e),s=new Gv(e);return LA(t._query),xA(n,t._query).then(r=>new FA(e,s,t,r))}function VA(t,e,n){t=Wt(t,_t);const s=Wt(t.firestore,Bs),r=zv(t.converter,e,n);return kc(s,[Fv(xc(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Mt.none())])}function $A(t,e,n,...s){t=Wt(t,_t);const r=Wt(t.firestore,Bs),i=xc(r);let o;return o=typeof(e=Ve(e))=="string"||e instanceof Ic?OA(i,"updateDoc",t._key,e,n,s):NA(i,"updateDoc",t._key,e),kc(r,[o.toMutation(t._key,Mt.exists(!0))])}function RN(t){return kc(Wt(t.firestore,Bs),[new _h(t._key,Mt.none())])}function NN(t,e){const n=Wt(t.firestore,Bs),s=Oh(t),r=zv(t.converter,e);return kc(n,[Fv(xc(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Mt.exists(!1))]).then(()=>s)}function kc(t,e){return function(n,s){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>iA(await TA(n),s,r)),r.promise}(Dh(t),e)}function qA(t,e,n){const s=n.docs.get(e._key),r=new Gv(t);return new Wv(t,r,e._key,s,new qr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rr=n})(kr),As(new Xn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Bs(new Zx(n.getProvider("auth-internal")),new Jx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),tn(Mf,"3.8.3",t),tn(Mf,"3.8.3","esm2017")})();/**
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
 */const Zv="firebasestorage.googleapis.com",Qv="storageBucket",HA=2*60*1e3,KA=10*60*1e3;/**
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
 */class Fe extends dn{constructor(e,n,s=0){super(nu(e),`Firebase Storage: ${n} (${nu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function nu(t){return"storage/"+t}function Hh(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(Ue.UNKNOWN,t)}function zA(t){return new Fe(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function WA(t){return new Fe(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Ue.UNAUTHENTICATED,t)}function ZA(){return new Fe(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QA(t){return new Fe(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function YA(){return new Fe(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XA(){return new Fe(Ue.CANCELED,"User canceled the upload/download.")}function JA(t){return new Fe(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function eC(t){return new Fe(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tC(){return new Fe(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Qv+"' property when initializing the app?")}function nC(){return new Fe(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sC(){return new Fe(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rC(t){return new Fe(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function el(t){return new Fe(Ue.INVALID_ARGUMENT,t)}function Yv(){return new Fe(Ue.APP_DELETED,"The Firebase app was deleted.")}function iC(t){return new Fe(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function si(t,e){return new Fe(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Fr(t){throw new Fe(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(s.path==="")return s;throw eC(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},v=n===Zv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",k=new RegExp(`^https?://${v}/${r}/${x}`,"i"),T=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<T.length;P++){const j=T[P],Q=j.regex.exec(e);if(Q){const q=Q[j.indices.bucket];let H=Q[j.indices.path];H||(H=""),s=new Rt(q,H),j.postModify(s);break}}if(s==null)throw JA(e);return s}}class oC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aC(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...x){u||(u=!0,e.apply(null,x))}function h(x){r=setTimeout(()=>{r=null,t(p,c())},x)}function d(){i&&clearTimeout(i)}function p(x,...k){if(u){d();return}if(x){d(),l.call(null,x,...k);return}if(c()||o){d(),l.call(null,x,...k);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,h(T)}let g=!1;function v(x){g||(g=!0,d(),!u&&(r!==null?(x||(a=2),clearTimeout(r),h(0)):x||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function cC(t){t(!1)}/**
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
 */function uC(t){return t!==void 0}function lC(t){return typeof t=="object"&&!Array.isArray(t)}function Kh(t){return typeof t=="string"||t instanceof String}function pp(t){return zh()&&t instanceof Blob}function zh(){return typeof Blob<"u"&&!CE()}function mp(t,e,n,s){if(s<e)throw el(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw el(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Wh(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Xv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var xs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xs||(xs={}));/**
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
 */function hC(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class dC{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new So(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===xs.NO_ERROR,c=i.getStatus();if(!a||hC(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===xs.ABORT;s(!1,new So(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new So(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());uC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Hh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Yv():XA();o(c)}else{const c=YA();o(c)}};this.canceled_?n(!1,new So(!1,null,!0)):this.backoffId_=aC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class So{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function fC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yC(t,e,n,s,r,i,o=!0){const a=Xv(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return mC(u,e),fC(u,n),pC(u,i),gC(u,s),new dC(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function vC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _C(...t){const e=vC();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(zh())return new Blob(t);throw new Fe(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function bC(t){if(typeof atob>"u")throw rC("base-64");return atob(t)}/**
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
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class su{constructor(e,n){this.data=e,this.contentType=n||null}}function EC(t,e){switch(t){case Jt.RAW:return new su(Jv(e));case Jt.BASE64:case Jt.BASE64URL:return new su(e_(t,e));case Jt.DATA_URL:return new su(IC(e),xC(e))}throw Hh()}function Jv(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function TC(t){let e;try{e=decodeURIComponent(t)}catch{throw si(Jt.DATA_URL,"Malformed data URL.")}return Jv(e)}function e_(t,e){switch(t){case Jt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw si(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw si(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bC(e)}catch(r){throw r.message.includes("polyfill")?r:si(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class t_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw si(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=SC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function IC(t){const e=new t_(t);return e.base64?e_(Jt.BASE64,e.rest):TC(e.rest)}function xC(t){return new t_(t).contentType}function SC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class $n{constructor(e,n){let s=0,r="";pp(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(pp(this.data_)){const s=this.data_,r=wC(s,e,n);return r===null?null:new $n(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new $n(s,!0)}}static getBlob(...e){if(zh()){const n=e.map(s=>s instanceof $n?s.data_:s);return new $n(_C.apply(null,n))}else{const n=e.map(o=>Kh(o)?EC(Jt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new $n(r,!0)}}uploadData(){return this.data_}}/**
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
 */function n_(t){let e;try{e=JSON.parse(t)}catch{return null}return lC(e)?e:null}/**
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
 */function kC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AC(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function s_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function CC(t,e){return e}class gt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||CC}}let ko=null;function RC(t){return!Kh(t)||t.length<2?t:s_(t)}function r_(){if(ko)return ko;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return RC(o)}const n=new gt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new gt("size");return r.xform=s,t.push(r),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),ko=t,ko}function NC(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Rt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function OC(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return NC(s,t),s}function i_(t,e,n){const s=n_(e);return s===null?null:OC(t,s,n)}function DC(t,e,n,s){const r=n_(e);if(r===null||!Kh(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Wh(d,n,s),g=Xv({alt:"media",token:u});return p+g})[0]}function PC(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class o_{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function a_(t){if(!t)throw Hh()}function MC(t,e){function n(s,r){const i=i_(t,r,e);return a_(i!==null),i}return n}function LC(t,e){function n(s,r){const i=i_(t,r,e);return a_(i!==null),DC(i,r,t.host,t._protocol)}return n}function c_(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ZA():r=GA():n.getStatus()===402?r=WA(t.bucket):n.getStatus()===403?r=QA(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function UC(t){const e=c_(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=zA(t.path)),i.serverResponse=r.serverResponse,i}return n}function FC(t,e,n){const s=e.fullServerUrl(),r=Wh(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new o_(r,i,LC(t,n),o);return a.errorHandler=UC(e),a}function jC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function BC(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=jC(null,e)),s}function VC(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let P=0;P<2;P++)T=T+Math.random().toString().slice(2);return T}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=BC(e,s,r),l=PC(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=$n.getBlob(h,s,d);if(p===null)throw nC();const g={name:u.fullPath},v=Wh(i,t.host,t._protocol),x="POST",k=t.maxUploadRetryTime,w=new o_(v,x,MC(t,n),k);return w.urlParams=g,w.headers=o,w.body=p.uploadData(),w.errorHandler=c_(e),w}class $C{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Fr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qC extends $C{initXhr(){this.xhr_.responseType="text"}}function u_(){return new qC}/**
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
 */class Os{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Os(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return s_(this._location.path)}get storage(){return this._service}get parent(){const e=kC(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new Os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iC(e)}}function HC(t,e,n){t._throwIfRoot("uploadBytes");const s=VC(t.storage,t._location,r_(),new $n(e,!0),n);return t.storage.makeRequestWithTokens(s,u_).then(r=>({metadata:r,ref:t}))}function KC(t){t._throwIfRoot("getDownloadURL");const e=FC(t.storage,t._location,r_());return t.storage.makeRequestWithTokens(e,u_).then(n=>{if(n===null)throw sC();return n})}function zC(t,e){const n=AC(t._location.path,e),s=new Rt(t._location.bucket,n);return new Os(t.storage,s)}/**
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
 */function WC(t){return/^[A-Za-z]+:\/\//.test(t)}function GC(t,e){return new Os(t,e)}function l_(t,e){if(t instanceof Gh){const n=t;if(n._bucket==null)throw tC();const s=new Os(n,n._bucket);return e!=null?l_(s,e):s}else return e!==void 0?zC(t,e):t}function ZC(t,e){if(e&&WC(e)){if(t instanceof Gh)return GC(t,e);throw el("To use ref(service, url), the first argument must be a Storage instance.")}else return l_(t,e)}function gp(t,e){const n=e==null?void 0:e[Qv];return n==null?null:Rt.makeFromBucketSpec(n,t)}function QC(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Km(r,t.app.options.projectId))}class Gh{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Zv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HA,this._maxUploadRetryTime=KA,this._requests=new Set,r!=null?this._bucket=Rt.makeFromBucketSpec(r,this._host):this._bucket=gp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=gp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Os(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new oC(Yv());{const o=yC(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const yp="@firebase/storage",vp="0.11.1";/**
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
 */const h_="storage";function ON(t,e,n){return t=Ve(t),HC(t,e,n)}function DN(t){return t=Ve(t),KC(t)}function YC(t,e){return t=Ve(t),ZC(t,e)}function XC(t=Ll(),e){t=Ve(t);const s=Ka(t,h_).getImmediate({identifier:e}),r=qm("storage");return r&&JC(s,...r),s}function JC(t,e,n,s={}){QC(t,e,n,s)}function eR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Gh(n,s,r,e,kr)}function tR(){As(new Xn(h_,eR,"PUBLIC").setMultipleInstances(!0)),tn(yp,vp,""),tn(yp,vp,"esm2017")}tR();const nR={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d"},Zh=Gm(nR),Qh=kA(Zh),Nt=H1(Zh),Yh="profiles",_p=()=>{if(!Nt.currentUser)throw new Error("Auth required");return Oh(Qh,Yh,Nt.currentUser.uid)},sR=t=>vA(Qh,Yh,t,"timeline"),PN=()=>{if(!Nt.currentUser)throw new Error("Auth required");return sR(Nt.currentUser.uid)},MN=t=>YC(XC(Zh),t),rR=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],tl=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,va=t=>t[tl(0,t.length-1)],wp=t=>{const e=[];for(let n=0;n<t;n++)e.push(va(rR));return e.join(" ")},iR=t=>{const e=t.slice(1);return e?`#${(Number(`0x1${e}`)^16777215).toString(16).substr(1).toUpperCase()}`:""},oR=["https://images.pexels.com/photos/1122462/pexels-photo-1122462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1694881/pexels-photo-1694881.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/313104/pexels-photo-313104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1751596/pexels-photo-1751596.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/853411/pexels-photo-853411.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1188470/pexels-photo-1188470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/42078/pexels-photo-42078.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587651/pexels-photo-1587651.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545499/pexels-photo-1545499.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/428325/pexels-photo-428325.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1471204/pexels-photo-1471204.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1413883/pexels-photo-1413883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1425452/pexels-photo-1425452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1430675/pexels-photo-1430675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1090551/pexels-photo-1090551.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1440399/pexels-photo-1440399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439264/pexels-photo-1439264.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439251/pexels-photo-1439251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1447358/pexels-photo-1447358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439258/pexels-photo-1439258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1452783/pexels-photo-1452783.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1453488/pexels-photo-1453488.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1261408/pexels-photo-1261408.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1467479/pexels-photo-1467479.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/840566/pexels-photo-840566.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1464565/pexels-photo-1464565.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/102170/pexels-photo-102170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461447/pexels-photo-1461447.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461101/pexels-photo-1461101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/952057/pexels-photo-952057.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/457446/pexels-photo-457446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1753798/pexels-photo-1753798.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1751601/pexels-photo-1751601.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1173804/pexels-photo-1173804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1684915/pexels-photo-1684915.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587200/pexels-photo-1587200.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587619/pexels-photo-1587619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1391421/pexels-photo-1391421.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1416945/pexels-photo-1416945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1093946/pexels-photo-1093946.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1471141/pexels-photo-1471141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1486669/pexels-photo-1486669.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1230349/pexels-photo-1230349.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/247519/pexels-photo-247519.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1430627/pexels-photo-1430627.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1254690/pexels-photo-1254690.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439951/pexels-photo-1439951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1436621/pexels-photo-1436621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1454021/pexels-photo-1454021.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1356286/pexels-photo-1356286.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439317/pexels-photo-1439317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/561462/pexels-photo-561462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/122101/pexels-photo-122101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/695779/pexels-photo-695779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/106258/pexels-photo-106258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1466852/pexels-photo-1466852.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/426893/pexels-photo-426893.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461270/pexels-photo-1461270.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/689924/pexels-photo-689924.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/922100/pexels-photo-922100.png?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1701626/pexels-photo-1701626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1721613/pexels-photo-1721613.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1206059/pexels-photo-1206059.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545980/pexels-photo-1545980.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545511/pexels-photo-1545511.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1448371/pexels-photo-1448371.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/689475/pexels-photo-689475.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1415268/pexels-photo-1415268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1058950/pexels-photo-1058950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/873069/pexels-photo-873069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/417801/pexels-photo-417801.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1436618/pexels-photo-1436618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1425436/pexels-photo-1425436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1019411/pexels-photo-1019411.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439254/pexels-photo-1439254.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1449855/pexels-photo-1449855.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/248012/pexels-photo-248012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/729982/pexels-photo-729982.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/175718/pexels-photo-175718.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1292684/pexels-photo-1292684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/567451/pexels-photo-567451.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1464223/pexels-photo-1464223.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1463563/pexels-photo-1463563.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1058950/pexels-photo-1058950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1083989/pexels-photo-1083989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1096668/pexels-photo-1096668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1174103/pexels-photo-1174103.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/206233/pexels-photo-206233.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1079384/pexels-photo-1079384.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1089845/pexels-photo-1089845.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1121797/pexels-photo-1121797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1142984/pexels-photo-1142984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1174179/pexels-photo-1174179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/293029/pexels-photo-293029.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/562622/pexels-photo-562622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1081672/pexels-photo-1081672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1115196/pexels-photo-1115196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1143367/pexels-photo-1143367.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"],aR=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}],cR={Instagram:{link:""},Facebook:{link:""},YouTube:{link:""},Spotify:{link:""},Twitter:{link:""},GitHub:{link:""},LinkedIn:{link:""},TikTok:{link:""}},uR=()=>{const{author:t,quotes:e}=va(aR);return`"${va(e)}"    - ${t}`},lR=t=>{if(!t)throw new Error("Unauthorized profile creation attempt");return console.log("creating profile"),{userUid:t.uid,displayName:(t==null?void 0:t.displayName)??"",coverImg:va(oR),photoURL:(t==null?void 0:t.photoURL)??"",bgColor:"#ffffff",fontColor:"#000000",fontFamily:"merienda",shortBio:`${wp(tl(1,3))} What/Where ${wp(tl(1,3))}`,longBio:uR(),socialLinks:cR}};var _e;(function(t){t.assertEqual=r=>r;function e(r){}t.assertIs=e;function n(r){throw new Error}t.assertNever=n,t.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},t.getValidEnumValues=r=>{const i=t.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of i)o[a]=r[a];return t.objectValues(o)},t.objectValues=r=>t.objectKeys(r).map(function(i){return r[i]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},t.find=(r,i)=>{for(const o of r)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=s,t.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(_e||(_e={}));const L=_e.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),qn=t=>{switch(typeof t){case"undefined":return L.undefined;case"string":return L.string;case"number":return isNaN(t)?L.nan:L.number;case"boolean":return L.boolean;case"function":return L.function;case"bigint":return L.bigint;case"symbol":return L.symbol;case"object":return Array.isArray(t)?L.array:t===null?L.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?L.promise:typeof Map<"u"&&t instanceof Map?L.map:typeof Set<"u"&&t instanceof Set?L.set:typeof Date<"u"&&t instanceof Date?L.date:L.object;default:return L.unknown}},N=_e.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),hR=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class wn extends Error{constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(n(o));else{let a=s,c=0;for(;c<o.path.length;){const u=o.path[c];c===o.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(o))):a[u]=a[u]||{_errors:[]},a=a[u],c++}}};return r(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,_e.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},s=[];for(const r of this.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(e(r))):s.push(e(r));return{formErrors:s,fieldErrors:n}}get formErrors(){return this.flatten()}}wn.create=t=>new wn(t);const Ai=(t,e)=>{let n;switch(t.code){case N.invalid_type:t.received===L.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case N.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,_e.jsonStringifyReplacer)}`;break;case N.unrecognized_keys:n=`Unrecognized key(s) in object: ${_e.joinValues(t.keys,", ")}`;break;case N.invalid_union:n="Invalid input";break;case N.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${_e.joinValues(t.options)}`;break;case N.invalid_enum_value:n=`Invalid enum value. Expected ${_e.joinValues(t.options)}, received '${t.received}'`;break;case N.invalid_arguments:n="Invalid function arguments";break;case N.invalid_return_type:n="Invalid function return type";break;case N.invalid_date:n="Invalid date";break;case N.invalid_string:typeof t.validation=="object"?"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:_e.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case N.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(t.minimum)}`:n="Invalid input";break;case N.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(t.maximum)}`:n="Invalid input";break;case N.custom:n="Invalid input";break;case N.invalid_intersection_types:n="Intersection results could not be merged";break;case N.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case N.not_finite:n="Number must be finite";break;default:n=e.defaultError,_e.assertNever(t)}return{message:n}};let d_=Ai;function dR(t){d_=t}function _a(){return d_}const wa=t=>{const{data:e,path:n,errorMaps:s,issueData:r}=t,i=[...n,...r.path||[]],o={...r,path:i};let a="";const c=s.filter(u=>!!u).slice().reverse();for(const u of c)a=u(o,{data:e,defaultError:a}).message;return{...r,path:i,message:r.message||a}},fR=[];function V(t,e){const n=wa({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,_a(),Ai].filter(s=>!!s)});t.common.issues.push(n)}class bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const s=[];for(const r of n){if(r.status==="aborted")return se;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,n){const s=[];for(const r of n)s.push({key:await r.key,value:await r.value});return bt.mergeObjectSync(e,s)}static mergeObjectSync(e,n){const s={};for(const r of n){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return se;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const se=Object.freeze({status:"aborted"}),f_=t=>({status:"dirty",value:t}),pt=t=>({status:"valid",value:t}),nl=t=>t.status==="aborted",sl=t=>t.status==="dirty",ba=t=>t.status==="valid",Ea=t=>typeof Promise<"u"&&t instanceof Promise;var le;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(le||(le={}));class ln{constructor(e,n,s,r){this.parent=e,this.data=n,this._path=s,this._key=r}get path(){return this._path.concat(this._key)}}const bp=(t,e)=>{if(ba(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,error:new wn(t.common.issues)}};function ae(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:s,description:r}=t;if(e&&(n||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:s??a.defaultError}:{message:n??a.defaultError},description:r}}class ce{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return qn(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:qn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new bt,ctx:{common:e.parent.common,data:e.data,parsedType:qn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Ea(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const s=this.safeParse(e,n);if(s.success)return s.data;throw s.error}safeParse(e,n){var s;const r={common:{issues:[],async:(s=n==null?void 0:n.async)!==null&&s!==void 0?s:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:qn(e)},i=this._parseSync({data:e,path:r.path,parent:r});return bp(r,i)}async parseAsync(e,n){const s=await this.safeParseAsync(e,n);if(s.success)return s.data;throw s.error}async safeParseAsync(e,n){const s={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:qn(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(Ea(r)?r:Promise.resolve(r));return bp(s,i)}refine(e,n){const s=r=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(r):n;return this._refinement((r,i)=>{const o=e(r),a=()=>i.addIssue({code:N.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof n=="function"?n(s,r):n),!1))}_refinement(e){return new Gt({schema:this,typeName:X.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return bn.create(this,this._def)}nullable(){return Ms.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Ht.create(this,this._def)}promise(){return Er.create(this,this._def)}or(e){return Di.create([this,e],this._def)}and(e){return Pi.create(this,e,this._def)}transform(e){return new Gt({...ae(this._def),schema:this,typeName:X.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new ji({...ae(this._def),innerType:this,defaultValue:n,typeName:X.ZodDefault})}brand(){return new m_({typeName:X.ZodBranded,type:this,...ae(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new ka({...ae(this._def),innerType:this,catchValue:n,typeName:X.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return uo.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const pR=/^c[^\s-]{8,}$/i,mR=/^[a-z][a-z0-9]*$/,gR=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,yR=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/,vR=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class An extends ce{constructor(){super(...arguments),this._regex=(e,n,s)=>this.refinement(r=>e.test(r),{validation:n,code:N.invalid_string,...le.errToObj(s)}),this.nonempty=e=>this.min(1,le.errToObj(e)),this.trim=()=>new An({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==L.string){const i=this._getOrReturnCtx(e);return V(i,{code:N.invalid_type,expected:L.string,received:i.parsedType}),se}const s=new bt;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),V(r,{code:N.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),V(r,{code:N.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?V(r,{code:N.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&V(r,{code:N.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")yR.test(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{validation:"email",code:N.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")gR.test(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{validation:"uuid",code:N.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")pR.test(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{validation:"cuid",code:N.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")mR.test(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{validation:"cuid2",code:N.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),V(r,{validation:"url",code:N.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{validation:"regex",code:N.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),V(r,{code:N.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),V(r,{code:N.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?vR(i).test(e.data)||(r=this._getOrReturnCtx(e,r),V(r,{code:N.invalid_string,validation:"datetime",message:i.message}),s.dirty()):_e.assertNever(i);return{status:s.value,value:e.data}}_addCheck(e){return new An({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...le.errToObj(e)})}url(e){return this._addCheck({kind:"url",...le.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...le.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...le.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...le.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...le.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...le.errToObj(n)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...le.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...le.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...le.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...le.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...le.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}An.create=t=>{var e;return new An({checks:[],typeName:X.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ae(t)})};function _R(t,e){const n=(t.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=n>s?n:s,i=parseInt(t.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return i%o/Math.pow(10,r)}class ns extends ce{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==L.number){const i=this._getOrReturnCtx(e);return V(i,{code:N.invalid_type,expected:L.number,received:i.parsedType}),se}let s;const r=new bt;for(const i of this._def.checks)i.kind==="int"?_e.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:N.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),V(s,{code:N.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),V(s,{code:N.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?_R(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),V(s,{code:N.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),V(s,{code:N.not_finite,message:i.message}),r.dirty()):_e.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,le.toString(n))}gt(e,n){return this.setLimit("min",e,!1,le.toString(n))}lte(e,n){return this.setLimit("max",e,!0,le.toString(n))}lt(e,n){return this.setLimit("max",e,!1,le.toString(n))}setLimit(e,n,s,r){return new ns({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:le.toString(r)}]})}_addCheck(e){return new ns({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:le.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:le.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:le.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:le.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:le.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:le.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:le.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&_e.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(n===null||s.value>n)&&(n=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(n)&&Number.isFinite(e)}}ns.create=t=>new ns({checks:[],typeName:X.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...ae(t)});class Ci extends ce{_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==L.bigint){const s=this._getOrReturnCtx(e);return V(s,{code:N.invalid_type,expected:L.bigint,received:s.parsedType}),se}return pt(e.data)}}Ci.create=t=>{var e;return new Ci({typeName:X.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ae(t)})};class Ri extends ce{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==L.boolean){const s=this._getOrReturnCtx(e);return V(s,{code:N.invalid_type,expected:L.boolean,received:s.parsedType}),se}return pt(e.data)}}Ri.create=t=>new Ri({typeName:X.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...ae(t)});class Ds extends ce{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==L.date){const i=this._getOrReturnCtx(e);return V(i,{code:N.invalid_type,expected:L.date,received:i.parsedType}),se}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return V(i,{code:N.invalid_date}),se}const s=new bt;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),V(r,{code:N.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),V(r,{code:N.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):_e.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ds({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:le.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:le.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Ds.create=t=>new Ds({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:X.ZodDate,...ae(t)});class Ta extends ce{_parse(e){if(this._getType(e)!==L.symbol){const s=this._getOrReturnCtx(e);return V(s,{code:N.invalid_type,expected:L.symbol,received:s.parsedType}),se}return pt(e.data)}}Ta.create=t=>new Ta({typeName:X.ZodSymbol,...ae(t)});class Ni extends ce{_parse(e){if(this._getType(e)!==L.undefined){const s=this._getOrReturnCtx(e);return V(s,{code:N.invalid_type,expected:L.undefined,received:s.parsedType}),se}return pt(e.data)}}Ni.create=t=>new Ni({typeName:X.ZodUndefined,...ae(t)});class Oi extends ce{_parse(e){if(this._getType(e)!==L.null){const s=this._getOrReturnCtx(e);return V(s,{code:N.invalid_type,expected:L.null,received:s.parsedType}),se}return pt(e.data)}}Oi.create=t=>new Oi({typeName:X.ZodNull,...ae(t)});class br extends ce{constructor(){super(...arguments),this._any=!0}_parse(e){return pt(e.data)}}br.create=t=>new br({typeName:X.ZodAny,...ae(t)});class Ss extends ce{constructor(){super(...arguments),this._unknown=!0}_parse(e){return pt(e.data)}}Ss.create=t=>new Ss({typeName:X.ZodUnknown,...ae(t)});class Cn extends ce{_parse(e){const n=this._getOrReturnCtx(e);return V(n,{code:N.invalid_type,expected:L.never,received:n.parsedType}),se}}Cn.create=t=>new Cn({typeName:X.ZodNever,...ae(t)});class Ia extends ce{_parse(e){if(this._getType(e)!==L.undefined){const s=this._getOrReturnCtx(e);return V(s,{code:N.invalid_type,expected:L.void,received:s.parsedType}),se}return pt(e.data)}}Ia.create=t=>new Ia({typeName:X.ZodVoid,...ae(t)});class Ht extends ce{_parse(e){const{ctx:n,status:s}=this._processInputParams(e),r=this._def;if(n.parsedType!==L.array)return V(n,{code:N.invalid_type,expected:L.array,received:n.parsedType}),se;if(r.exactLength!==null){const o=n.data.length>r.exactLength.value,a=n.data.length<r.exactLength.value;(o||a)&&(V(n,{code:o?N.too_big:N.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&n.data.length<r.minLength.value&&(V(n,{code:N.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&n.data.length>r.maxLength.value&&(V(n,{code:N.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new ln(n,o,n.path,a)))).then(o=>bt.mergeArray(s,o));const i=[...n.data].map((o,a)=>r.type._parseSync(new ln(n,o,n.path,a)));return bt.mergeArray(s,i)}get element(){return this._def.type}min(e,n){return new Ht({...this._def,minLength:{value:e,message:le.toString(n)}})}max(e,n){return new Ht({...this._def,maxLength:{value:e,message:le.toString(n)}})}length(e,n){return new Ht({...this._def,exactLength:{value:e,message:le.toString(n)}})}nonempty(e){return this.min(1,e)}}Ht.create=(t,e)=>new Ht({type:t,minLength:null,maxLength:null,exactLength:null,typeName:X.ZodArray,...ae(e)});var xa;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(xa||(xa={}));function Gs(t){if(t instanceof Pe){const e={};for(const n in t.shape){const s=t.shape[n];e[n]=bn.create(Gs(s))}return new Pe({...t._def,shape:()=>e})}else return t instanceof Ht?Ht.create(Gs(t.element)):t instanceof bn?bn.create(Gs(t.unwrap())):t instanceof Ms?Ms.create(Gs(t.unwrap())):t instanceof hn?hn.create(t.items.map(e=>Gs(e))):t}class Pe extends ce{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=_e.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==L.object){const u=this._getOrReturnCtx(e);return V(u,{code:N.invalid_type,expected:L.object,received:u.parsedType}),se}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Cn&&this._def.unknownKeys==="strip"))for(const u in r.data)o.includes(u)||a.push(u);const c=[];for(const u of o){const l=i[u],h=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new ln(r,h,r.path,u)),alwaysSet:u in r.data})}if(this._def.catchall instanceof Cn){const u=this._def.unknownKeys;if(u==="passthrough")for(const l of a)c.push({key:{status:"valid",value:l},value:{status:"valid",value:r.data[l]}});else if(u==="strict")a.length>0&&(V(r,{code:N.unrecognized_keys,keys:a}),s.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const l of a){const h=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new ln(r,h,r.path,l)),alwaysSet:l in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const u=[];for(const l of c){const h=await l.key;u.push({key:h,value:await l.value,alwaysSet:l.alwaysSet})}return u}).then(u=>bt.mergeObjectSync(s,u)):bt.mergeObjectSync(s,c)}get shape(){return this._def.shape()}strict(e){return le.errToObj,new Pe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,s)=>{var r,i,o,a;const c=(o=(i=(r=this._def).errorMap)===null||i===void 0?void 0:i.call(r,n,s).message)!==null&&o!==void 0?o:s.defaultError;return n.code==="unrecognized_keys"?{message:(a=le.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Pe({...this._def,unknownKeys:"strip"})}passthrough(){return new Pe({...this._def,unknownKeys:"passthrough"})}extend(e){return new Pe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Pe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>xa.mergeShapes(this._def.shape(),e._def.shape()),typeName:X.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Pe({...this._def,catchall:e})}pick(e){const n={};return _e.objectKeys(e).forEach(s=>{e[s]&&this.shape[s]&&(n[s]=this.shape[s])}),new Pe({...this._def,shape:()=>n})}omit(e){const n={};return _e.objectKeys(this.shape).forEach(s=>{e[s]||(n[s]=this.shape[s])}),new Pe({...this._def,shape:()=>n})}deepPartial(){return Gs(this)}partial(e){const n={};return _e.objectKeys(this.shape).forEach(s=>{const r=this.shape[s];e&&!e[s]?n[s]=r:n[s]=r.optional()}),new Pe({...this._def,shape:()=>n})}required(e){const n={};return _e.objectKeys(this.shape).forEach(s=>{if(e&&!e[s])n[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof bn;)i=i._def.innerType;n[s]=i}}),new Pe({...this._def,shape:()=>n})}keyof(){return p_(_e.objectKeys(this.shape))}}Pe.create=(t,e)=>new Pe({shape:()=>t,unknownKeys:"strip",catchall:Cn.create(),typeName:X.ZodObject,...ae(e)});Pe.strictCreate=(t,e)=>new Pe({shape:()=>t,unknownKeys:"strict",catchall:Cn.create(),typeName:X.ZodObject,...ae(e)});Pe.lazycreate=(t,e)=>new Pe({shape:t,unknownKeys:"strip",catchall:Cn.create(),typeName:X.ZodObject,...ae(e)});class Di extends ce{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.options;function r(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new wn(a.ctx.common.issues));return V(n,{code:N.invalid_union,unionErrors:o}),se}if(n.common.async)return Promise.all(s.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const c of s){const u={...n,common:{...n.common,issues:[]},parent:null},l=c._parseSync({data:n.data,path:n.path,parent:u});if(l.status==="valid")return l;l.status==="dirty"&&!i&&(i={result:l,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new wn(c));return V(n,{code:N.invalid_union,unionErrors:a}),se}}get options(){return this._def.options}}Di.create=(t,e)=>new Di({options:t,typeName:X.ZodUnion,...ae(e)});const Bo=t=>t instanceof Li?Bo(t.schema):t instanceof Gt?Bo(t.innerType()):t instanceof Ui?[t.value]:t instanceof ss?t.options:t instanceof Fi?Object.keys(t.enum):t instanceof ji?Bo(t._def.innerType):t instanceof Ni?[void 0]:t instanceof Oi?[null]:null;class Ac extends ce{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.object)return V(n,{code:N.invalid_type,expected:L.object,received:n.parsedType}),se;const s=this.discriminator,r=n.data[s],i=this.optionsMap.get(r);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(V(n,{code:N.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),se)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,s){const r=new Map;for(const i of n){const o=Bo(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,i)}}return new Ac({typeName:X.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:r,...ae(s)})}}function rl(t,e){const n=qn(t),s=qn(e);if(t===e)return{valid:!0,data:t};if(n===L.object&&s===L.object){const r=_e.objectKeys(e),i=_e.objectKeys(t).filter(a=>r.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=rl(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===L.array&&s===L.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=rl(o,a);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return n===L.date&&s===L.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Pi extends ce{_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=(i,o)=>{if(nl(i)||nl(o))return se;const a=rl(i.value,o.value);return a.valid?((sl(i)||sl(o))&&n.dirty(),{status:n.value,value:a.data}):(V(s,{code:N.invalid_intersection_types}),se)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}Pi.create=(t,e,n)=>new Pi({left:t,right:e,typeName:X.ZodIntersection,...ae(n)});class hn extends ce{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==L.array)return V(s,{code:N.invalid_type,expected:L.array,received:s.parsedType}),se;if(s.data.length<this._def.items.length)return V(s,{code:N.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),se;!this._def.rest&&s.data.length>this._def.items.length&&(V(s,{code:N.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...s.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new ln(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>bt.mergeArray(n,o)):bt.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new hn({...this._def,rest:e})}}hn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new hn({items:t,typeName:X.ZodTuple,rest:null,...ae(e)})};class Mi extends ce{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==L.object)return V(s,{code:N.invalid_type,expected:L.object,received:s.parsedType}),se;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in s.data)r.push({key:i._parse(new ln(s,a,s.path,a)),value:o._parse(new ln(s,s.data[a],s.path,a))});return s.common.async?bt.mergeObjectAsync(n,r):bt.mergeObjectSync(n,r)}get element(){return this._def.valueType}static create(e,n,s){return n instanceof ce?new Mi({keyType:e,valueType:n,typeName:X.ZodRecord,...ae(s)}):new Mi({keyType:An.create(),valueType:e,typeName:X.ZodRecord,...ae(n)})}}class Sa extends ce{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==L.map)return V(s,{code:N.invalid_type,expected:L.map,received:s.parsedType}),se;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,c],u)=>({key:r._parse(new ln(s,a,s.path,[u,"key"])),value:i._parse(new ln(s,c,s.path,[u,"value"]))}));if(s.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const u=await c.key,l=await c.value;if(u.status==="aborted"||l.status==="aborted")return se;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const u=c.key,l=c.value;if(u.status==="aborted"||l.status==="aborted")return se;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}}}}Sa.create=(t,e,n)=>new Sa({valueType:e,keyType:t,typeName:X.ZodMap,...ae(n)});class Ps extends ce{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==L.set)return V(s,{code:N.invalid_type,expected:L.set,received:s.parsedType}),se;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(V(s,{code:N.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),n.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(V(s,{code:N.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const u=new Set;for(const l of c){if(l.status==="aborted")return se;l.status==="dirty"&&n.dirty(),u.add(l.value)}return{status:n.value,value:u}}const a=[...s.data.values()].map((c,u)=>i._parse(new ln(s,c,s.path,u)));return s.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new Ps({...this._def,minSize:{value:e,message:le.toString(n)}})}max(e,n){return new Ps({...this._def,maxSize:{value:e,message:le.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}Ps.create=(t,e)=>new Ps({valueType:t,minSize:null,maxSize:null,typeName:X.ZodSet,...ae(e)});class ir extends ce{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.function)return V(n,{code:N.invalid_type,expected:L.function,received:n.parsedType}),se;function s(a,c){return wa({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,_a(),Ai].filter(u=>!!u),issueData:{code:N.invalid_arguments,argumentsError:c}})}function r(a,c){return wa({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,_a(),Ai].filter(u=>!!u),issueData:{code:N.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof Er?pt(async(...a)=>{const c=new wn([]),u=await this._def.args.parseAsync(a,i).catch(d=>{throw c.addIssue(s(a,d)),c}),l=await o(...u);return await this._def.returns._def.type.parseAsync(l,i).catch(d=>{throw c.addIssue(r(l,d)),c})}):pt((...a)=>{const c=this._def.args.safeParse(a,i);if(!c.success)throw new wn([s(a,c.error)]);const u=o(...c.data),l=this._def.returns.safeParse(u,i);if(!l.success)throw new wn([r(u,l.error)]);return l.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ir({...this._def,args:hn.create(e).rest(Ss.create())})}returns(e){return new ir({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,s){return new ir({args:e||hn.create([]).rest(Ss.create()),returns:n||Ss.create(),typeName:X.ZodFunction,...ae(s)})}}class Li extends ce{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Li.create=(t,e)=>new Li({getter:t,typeName:X.ZodLazy,...ae(e)});class Ui extends ce{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return V(n,{received:n.data,code:N.invalid_literal,expected:this._def.value}),se}return{status:"valid",value:e.data}}get value(){return this._def.value}}Ui.create=(t,e)=>new Ui({value:t,typeName:X.ZodLiteral,...ae(e)});function p_(t,e){return new ss({values:t,typeName:X.ZodEnum,...ae(e)})}class ss extends ce{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),s=this._def.values;return V(n,{expected:_e.joinValues(s),received:n.parsedType,code:N.invalid_type}),se}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),s=this._def.values;return V(n,{received:n.data,code:N.invalid_enum_value,options:s}),se}return pt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return ss.create(e)}exclude(e){return ss.create(this.options.filter(n=>!e.includes(n)))}}ss.create=p_;class Fi extends ce{_parse(e){const n=_e.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==L.string&&s.parsedType!==L.number){const r=_e.objectValues(n);return V(s,{expected:_e.joinValues(r),received:s.parsedType,code:N.invalid_type}),se}if(n.indexOf(e.data)===-1){const r=_e.objectValues(n);return V(s,{received:s.data,code:N.invalid_enum_value,options:r}),se}return pt(e.data)}get enum(){return this._def.values}}Fi.create=(t,e)=>new Fi({values:t,typeName:X.ZodNativeEnum,...ae(e)});class Er extends ce{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.promise&&n.common.async===!1)return V(n,{code:N.invalid_type,expected:L.promise,received:n.parsedType}),se;const s=n.parsedType===L.promise?n.data:Promise.resolve(n.data);return pt(s.then(r=>this._def.type.parseAsync(r,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Er.create=(t,e)=>new Er({type:t,typeName:X.ZodPromise,...ae(e)});class Gt extends ce{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===X.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=this._def.effect||null;if(r.type==="preprocess"){const o=r.transform(s.data);return s.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:s.path,parent:s})):this._def.schema._parseSync({data:o,path:s.path,parent:s})}const i={addIssue:o=>{V(s,o),o.fatal?n.abort():n.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="refinement"){const o=a=>{const c=r.refinement(a,i);if(s.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?se:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?se:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!ba(o))return o;const a=r.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>ba(o)?Promise.resolve(r.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);_e.assertNever(r)}}Gt.create=(t,e,n)=>new Gt({schema:t,typeName:X.ZodEffects,effect:e,...ae(n)});Gt.createWithPreprocess=(t,e,n)=>new Gt({schema:e,effect:{type:"preprocess",transform:t},typeName:X.ZodEffects,...ae(n)});class bn extends ce{_parse(e){return this._getType(e)===L.undefined?pt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}bn.create=(t,e)=>new bn({innerType:t,typeName:X.ZodOptional,...ae(e)});class Ms extends ce{_parse(e){return this._getType(e)===L.null?pt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ms.create=(t,e)=>new Ms({innerType:t,typeName:X.ZodNullable,...ae(e)});class ji extends ce{_parse(e){const{ctx:n}=this._processInputParams(e);let s=n.data;return n.parsedType===L.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ji.create=(t,e)=>new ji({innerType:t,typeName:X.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ae(e)});class ka extends ce{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n,common:{...n.common,issues:[]}}});return Ea(s)?s.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue()})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue()}}removeCatch(){return this._def.innerType}}ka.create=(t,e)=>new ka({innerType:t,typeName:X.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ae(e)});class Aa extends ce{_parse(e){if(this._getType(e)!==L.nan){const s=this._getOrReturnCtx(e);return V(s,{code:N.invalid_type,expected:L.nan,received:s.parsedType}),se}return{status:"valid",value:e.data}}}Aa.create=t=>new Aa({typeName:X.ZodNaN,...ae(t)});const wR=Symbol("zod_brand");class m_ extends ce{_parse(e){const{ctx:n}=this._processInputParams(e),s=n.data;return this._def.type._parse({data:s,path:n.path,parent:n})}unwrap(){return this._def.type}}class uo extends ce{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?se:i.status==="dirty"?(n.dirty(),f_(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?se:r.status==="dirty"?(n.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,n){return new uo({in:e,out:n,typeName:X.ZodPipeline})}}const g_=(t,e={},n)=>t?br.create().superRefine((s,r)=>{if(!t(s)){const i=typeof e=="function"?e(s):e,o=typeof i=="string"?{message:i}:i;r.addIssue({code:"custom",...o,fatal:n})}}):br.create(),bR={object:Pe.lazycreate};var X;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(X||(X={}));const ER=(t,e={message:`Input not instance of ${t.name}`})=>g_(n=>n instanceof t,e,!0),y_=An.create,v_=ns.create,TR=Aa.create,IR=Ci.create,__=Ri.create,xR=Ds.create,SR=Ta.create,kR=Ni.create,AR=Oi.create,CR=br.create,RR=Ss.create,NR=Cn.create,OR=Ia.create,DR=Ht.create,PR=Pe.create,MR=Pe.strictCreate,LR=Di.create,UR=Ac.create,FR=Pi.create,jR=hn.create,BR=Mi.create,VR=Sa.create,$R=Ps.create,qR=ir.create,HR=Li.create,KR=Ui.create,zR=ss.create,WR=Fi.create,GR=Er.create,Ep=Gt.create,ZR=bn.create,QR=Ms.create,YR=Gt.createWithPreprocess,XR=uo.create,JR=()=>y_().optional(),eN=()=>v_().optional(),tN=()=>__().optional(),nN={string:t=>An.create({...t,coerce:!0}),number:t=>ns.create({...t,coerce:!0}),boolean:t=>Ri.create({...t,coerce:!0}),bigint:t=>Ci.create({...t,coerce:!0}),date:t=>Ds.create({...t,coerce:!0})},sN=se;var Ye=Object.freeze({__proto__:null,defaultErrorMap:Ai,setErrorMap:dR,getErrorMap:_a,makeIssue:wa,EMPTY_PATH:fR,addIssueToContext:V,ParseStatus:bt,INVALID:se,DIRTY:f_,OK:pt,isAborted:nl,isDirty:sl,isValid:ba,isAsync:Ea,get util(){return _e},ZodParsedType:L,getParsedType:qn,ZodType:ce,ZodString:An,ZodNumber:ns,ZodBigInt:Ci,ZodBoolean:Ri,ZodDate:Ds,ZodSymbol:Ta,ZodUndefined:Ni,ZodNull:Oi,ZodAny:br,ZodUnknown:Ss,ZodNever:Cn,ZodVoid:Ia,ZodArray:Ht,get objectUtil(){return xa},ZodObject:Pe,ZodUnion:Di,ZodDiscriminatedUnion:Ac,ZodIntersection:Pi,ZodTuple:hn,ZodRecord:Mi,ZodMap:Sa,ZodSet:Ps,ZodFunction:ir,ZodLazy:Li,ZodLiteral:Ui,ZodEnum:ss,ZodNativeEnum:Fi,ZodPromise:Er,ZodEffects:Gt,ZodTransformer:Gt,ZodOptional:bn,ZodNullable:Ms,ZodDefault:ji,ZodCatch:ka,ZodNaN:Aa,BRAND:wR,ZodBranded:m_,ZodPipeline:uo,custom:g_,Schema:ce,ZodSchema:ce,late:bR,get ZodFirstPartyTypeKind(){return X},coerce:nN,any:CR,array:DR,bigint:IR,boolean:__,date:xR,discriminatedUnion:UR,effect:Ep,enum:zR,function:qR,instanceof:ER,intersection:FR,lazy:HR,literal:KR,map:VR,nan:TR,nativeEnum:WR,never:NR,null:AR,nullable:QR,number:v_,object:PR,oboolean:tN,onumber:eN,optional:ZR,ostring:JR,pipeline:XR,preprocess:YR,promise:GR,record:BR,set:$R,strictObject:MR,string:y_,symbol:SR,transformer:Ep,tuple:jR,undefined:kR,union:LR,unknown:RR,void:OR,NEVER:sN,ZodIssueCode:N,quotelessJson:hR,ZodError:wn});const rN=Ye.enum(["Facebook","Instagram","YouTube","Spotify","Twitter","LinkedIn","GitHub","TikTok"]),iN=Ye.object({link:Ye.string()}),Tp=Ye.object({userUid:Ye.string(),displayName:Ye.string(),photoURL:Ye.string(),coverImg:Ye.string(),shortBio:Ye.string(),bgColor:Ye.string(),fontColor:Ye.string().optional(),fontFamily:Ye.string().optional(),longBio:Ye.string(),socialLinks:Ye.record(rN,iN)}),oN=lb("profile",{state:()=>({profile:null}),getters:{isOwnProfile({profile:t}){var e,n;return(e=Nt.currentUser)!=null&&e.uid?((n=Nt.currentUser)==null?void 0:n.uid)===(t==null?void 0:t.userUid):!1},invertedBgColor:({profile:t})=>t!=null&&t.bgColor?iR(t.bgColor):"black"},actions:{updateProfile(t){if(!this.profile||!this.isOwnProfile)throw new Error("Unathorized");const e=Object.keys(t).reduce((n,s)=>JSON.stringify(t[s])===JSON.stringify(this.profile?this.profile[s]:void 0)?n:{...n,[s]:t[s]},{});this.profile={...this.profile,...t},!(Object.keys(e).length<1)&&($A(_p(),e),console.log({updates:e}))},async loadProfile(t){const e=Oh(Qh,Yh,t),n=await BA(e);if(!n.exists()){this.profile=null;return}this.profile=Tp.parse(n.data())},async createOwnProfile(){var e;if(!((e=Nt.currentUser)!=null&&e.uid))return;console.log("creating OWN profile");const t=Tp.parse(lR(Nt.currentUser));await VA(_p(),t),this.profile=t}}}),ri=hE({history:Ab("./"),routes:[{path:"/",name:"Login",component:()=>Fc(()=>import("./Login-3776c459.js"),["./Login-3776c459.js","./Login-63bcfcd5.css"],import.meta.url),beforeEnter:async(t,e,n)=>{var s,r;console.log({currentUser:(s=Nt.currentUser)==null?void 0:s.uid}),(r=Nt.currentUser)!=null&&r.uid&&await ri.replace(`/u/${Nt.currentUser.uid}`),n()}},{path:"/u/:profileUid",name:"Profile",props:!0,component:()=>Fc(()=>import("./Profile-522ba035.js"),["./Profile-522ba035.js","./Profile-51cf3a22.css"],import.meta.url),beforeEnter:async(t,e,n)=>{var i;const s=oN(),r=t.params.profileUid;await s.loadProfile(r),console.log("IN ROUTER",{profileData:s.profile}),s.profile||(r===((i=Nt.currentUser)==null?void 0:i.uid)?await s.createOwnProfile():await ri.replace("/404")),n()}},{path:"/:pathMatch(.*)",name:"Error404",component:()=>Fc(()=>import("./Error404-78f15a6a.js"),["./Error404-78f15a6a.js","./Error404-4d995ba2.css"],import.meta.url)}]});const aN=Ye.object({uid:Ye.string(),displayName:Ye.string().nullable(),photoURL:Ye.string().nullable()}).nullable(),cN=ib();let ru;NI(Nt,t=>{const e=aN.parse(t);console.log({parsedAuth:e}),ru?e!=null&&e.uid?ri.replace(`/u/${e.uid}`):ri.replace("/"):(ru=nb(yE),ru.use(ri).use(cN).mount("#app"))});export{hN as $,DN as A,At as B,Dt as C,pN as D,b0 as E,Fn as F,jn as G,ym as H,Sw as I,al as J,fN as K,EN as L,Ye as M,bN as N,sR as O,vN as P,bl as Q,Hr as R,gN as S,Vn as T,CN as U,kN as V,AN as W,NN as X,PN as Y,RN as Z,gE as _,ja as a,lN as a0,wN as a1,Rl as b,v0 as c,Sl as d,oR as e,Nt as f,va as g,xw as h,oN as i,TN as j,yN as k,IN as l,mN as m,ol as n,qw as o,Iw as p,aR as q,_l as r,xN as s,uN as t,bs as u,ut as v,dN as w,_N as x,MN as y,ON as z};
