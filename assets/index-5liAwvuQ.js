(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ih(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const De={},Tr=[],Mt=()=>{},Gb=()=>!1,vc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sh=t=>t.startsWith("onUpdate:"),rt=Object.assign,Ch=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wb=Object.prototype.hasOwnProperty,ve=(t,e)=>Wb.call(t,e),J=Array.isArray,Ir=t=>vo(t)==="[object Map]",_c=t=>vo(t)==="[object Set]",Sf=t=>vo(t)==="[object Date]",ie=t=>typeof t=="function",qe=t=>typeof t=="string",us=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",hg=t=>(Oe(t)||ie(t))&&ie(t.then)&&ie(t.catch),dg=Object.prototype.toString,vo=t=>dg.call(t),Zb=t=>vo(t).slice(8,-1),fg=t=>vo(t)==="[object Object]",Ah=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vi=Ih(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qb=/-(\w)/g,dn=wc(t=>t.replace(Qb,(e,n)=>n?n.toUpperCase():"")),Yb=/\B([A-Z])/g,Jr=wc(t=>t.replace(Yb,"-$1").toLowerCase()),bc=wc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=wc(t=>t?`on${bc(t)}`:""),hs=(t,e)=>!Object.is(t,e),la=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ka=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Mi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Xb=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Cf;const pg=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kh(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?nE(s):kh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(qe(t)||Oe(t))return t}const Jb=/;(?![^(]*\))/g,eE=/:([^]+)/,tE=/\/\*[^]*?\*\//g;function nE(t){const e={};return t.replace(tE,"").split(Jb).forEach(n=>{if(n){const s=n.split(eE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Rh(t){let e="";if(qe(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=Rh(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rE=Ih(sE);function mg(t){return!!t||t===""}function iE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ec(t[s],e[s]);return n}function Ec(t,e){if(t===e)return!0;let n=Sf(t),s=Sf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=us(t),s=us(e),n||s)return t===e;if(n=J(t),s=J(e),n||s)return n&&s?iE(t,e):!1;if(n=Oe(t),s=Oe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ec(t[o],e[o]))return!1}}return String(t)===String(e)}function oE(t,e){return t.findIndex(n=>Ec(n,e))}const HL=t=>qe(t)?t:t==null?"":J(t)||Oe(t)&&(t.toString===dg||!ie(t.toString))?JSON.stringify(t,gg,2):String(t),gg=(t,e)=>e&&e.__v_isRef?gg(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[kl(s,i)+" =>"]=r,n),{})}:_c(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kl(n))}:us(e)?kl(e):Oe(e)&&!J(e)&&!fg(e)?String(e):e,kl=(t,e="")=>{var n;return us(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class yg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function vg(t){return new yg(t)}function aE(t,e=Rt){e&&e.active&&e.effects.push(t)}function _g(){return Rt}function cE(t){Rt&&Rt.cleanups.push(t)}let Fs;class xh{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,aE(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ir();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(lE(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),or()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ss,n=Fs;try{return ss=!0,Fs=this,this._runnings++,Af(this),this.fn()}finally{kf(this),this._runnings--,Fs=n,ss=e}}stop(){var e;this.active&&(Af(this),kf(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function lE(t){return t.value}function Af(t){t._trackId++,t._depsLength=0}function kf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)wg(t.deps[e],t);t.deps.length=t._depsLength}}function wg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ss=!0,lu=0;const bg=[];function ir(){bg.push(ss),ss=!1}function or(){const t=bg.pop();ss=t===void 0?!0:t}function Nh(){lu++}function Oh(){for(lu--;!lu&&uu.length;)uu.shift()()}function Eg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&wg(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const uu=[];function Tg(t,e,n){Nh();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&uu.push(s.scheduler)))}Oh()}const Ig=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ra=new WeakMap,$s=Symbol(""),hu=Symbol("");function Ct(t,e,n){if(ss&&Fs){let s=Ra.get(t);s||Ra.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ig(()=>s.delete(n))),Eg(Fs,r)}}function An(t,e,n,s,r,i){const o=Ra.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!us(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?Ah(n)&&a.push(o.get("length")):(a.push(o.get($s)),Ir(t)&&a.push(o.get(hu)));break;case"delete":J(t)||(a.push(o.get($s)),Ir(t)&&a.push(o.get(hu)));break;case"set":Ir(t)&&a.push(o.get($s));break}Nh();for(const c of a)c&&Tg(c,4);Oh()}function uE(t,e){var n;return(n=Ra.get(t))==null?void 0:n.get(e)}const hE=Ih("__proto__,__v_isRef,__isVue"),Sg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(us)),Rf=dE();function dE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)Ct(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ir(),Nh();const s=oe(this)[e].apply(this,n);return Oh(),or(),s}}),t}function fE(t){const e=oe(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class Cg{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?CE:xg:i?Rg:kg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=J(e);if(!r){if(o&&ve(Rf,n))return Reflect.get(Rf,n,s);if(n==="hasOwnProperty")return fE}const a=Reflect.get(e,n,s);return(us(n)?Sg.has(n):hE(n))||(r||Ct(e,"get",n),i)?a:We(a)?o&&Ah(n)?a:a.value:Oe(a)?r?Og(a):Jt(a):a}}class Ag extends Cg{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._shallow){const c=Lr(i);if(!xa(s)&&!Lr(s)&&(i=oe(i),s=oe(s)),!J(e)&&We(i)&&!We(s))return c?!1:(i.value=s,!0)}const o=J(e)&&Ah(n)?Number(n)<e.length:ve(e,n),a=Reflect.set(e,n,s,r);return e===oe(r)&&(o?hs(s,i)&&An(e,"set",n,s):An(e,"add",n,s)),a}deleteProperty(e,n){const s=ve(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&An(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!us(n)||!Sg.has(n))&&Ct(e,"has",n),s}ownKeys(e){return Ct(e,"iterate",J(e)?"length":$s),Reflect.ownKeys(e)}}class pE extends Cg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mE=new Ag,gE=new pE,yE=new Ag(!0),Dh=t=>t,Tc=t=>Reflect.getPrototypeOf(t);function Ko(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(hs(e,i)&&Ct(r,"get",e),Ct(r,"get",i));const{has:o}=Tc(r),a=s?Dh:n?Mh:Ui;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Go(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(hs(t,r)&&Ct(s,"has",t),Ct(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Wo(t,e=!1){return t=t.__v_raw,!e&&Ct(oe(t),"iterate",$s),Reflect.get(t,"size",t)}function xf(t){t=oe(t);const e=oe(this);return Tc(e).has.call(e,t)||(e.add(t),An(e,"add",t,t)),this}function Nf(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=Tc(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?hs(e,o)&&An(n,"set",t,e):An(n,"add",t,e),this}function Of(t){const e=oe(this),{has:n,get:s}=Tc(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&An(e,"delete",t,void 0),i}function Df(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&An(t,"clear",void 0,void 0),n}function Zo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?Dh:t?Mh:Ui;return!t&&Ct(a,"iterate",$s),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Qo(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=Ir(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Dh:e?Mh:Ui;return!e&&Ct(i,"iterate",c?hu:$s),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vE(){const t={get(i){return Ko(this,i)},get size(){return Wo(this)},has:Go,add:xf,set:Nf,delete:Of,clear:Df,forEach:Zo(!1,!1)},e={get(i){return Ko(this,i,!1,!0)},get size(){return Wo(this)},has:Go,add:xf,set:Nf,delete:Of,clear:Df,forEach:Zo(!1,!0)},n={get(i){return Ko(this,i,!0)},get size(){return Wo(this,!0)},has(i){return Go.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Zo(!0,!1)},s={get(i){return Ko(this,i,!0,!0)},get size(){return Wo(this,!0)},has(i){return Go.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qo(i,!1,!1),n[i]=Qo(i,!0,!1),e[i]=Qo(i,!1,!0),s[i]=Qo(i,!0,!0)}),[t,n,e,s]}const[_E,wE,bE,EE]=vE();function Ph(t,e){const n=e?t?EE:bE:t?wE:_E;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ve(n,r)&&r in s?n:s,r,i)}const TE={get:Ph(!1,!1)},IE={get:Ph(!1,!0)},SE={get:Ph(!0,!1)},kg=new WeakMap,Rg=new WeakMap,xg=new WeakMap,CE=new WeakMap;function AE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kE(t){return t.__v_skip||!Object.isExtensible(t)?0:AE(Zb(t))}function Jt(t){return Lr(t)?t:Lh(t,!1,mE,TE,kg)}function Ng(t){return Lh(t,!1,yE,IE,Rg)}function Og(t){return Lh(t,!0,gE,SE,xg)}function Lh(t,e,n,s,r){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=kE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function rs(t){return Lr(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Lr(t){return!!(t&&t.__v_isReadonly)}function xa(t){return!!(t&&t.__v_isShallow)}function Dg(t){return rs(t)||Lr(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Ic(t){return Object.isExtensible(t)&&ka(t,"__v_skip",!0),t}const Ui=t=>Oe(t)?Jt(t):t,Mh=t=>Oe(t)?Og(t):t;class Pg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xh(()=>e(this._value),()=>_i(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return(!e._cacheable||e.effect.dirty)&&hs(e._value,e._value=e.effect.run())&&_i(e,4),Lg(e),e.effect._dirtyLevel>=2&&_i(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function RE(t,e,n=!1){let s,r;const i=ie(t);return i?(s=t,r=Mt):(s=t.get,r=t.set),new Pg(s,r,i||!r,n)}function Lg(t){var e;ss&&Fs&&(t=oe(t),Eg(Fs,(e=t.dep)!=null?e:t.dep=Ig(()=>t.dep=void 0,t instanceof Pg?t:void 0)))}function _i(t,e=4,n){t=oe(t);const s=t.dep;s&&Tg(s,e)}function We(t){return!!(t&&t.__v_isRef===!0)}function Tn(t){return Mg(t,!1)}function xE(t){return Mg(t,!0)}function Mg(t,e){return We(t)?t:new NE(t,e)}class NE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:Ui(e)}get value(){return Lg(this),this._value}set value(e){const n=this.__v_isShallow||xa(e)||Lr(e);e=n?e:oe(e),hs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ui(e),_i(this,4))}}function zL(t){_i(t,4)}function Bs(t){return We(t)?t.value:t}const OE={get:(t,e,n)=>Bs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return We(r)&&!We(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ug(t){return rs(t)?t:new Proxy(t,OE)}function DE(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=LE(t,n);return e}class PE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uE(oe(this._object),this._key)}}function LE(t,e,n){const s=t[e];return We(s)?s:new PE(t,e,n)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function is(t,e,n,s){try{return s?t(...s):t()}catch(r){_o(r,e,n)}}function Gt(t,e,n,s){if(ie(t)){const i=is(t,e,n,s);return i&&hg(i)&&i.catch(o=>{_o(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Gt(t[i],e,n,s));return r}function _o(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){is(c,null,10,[t,o,a]);return}}ME(t,n,r,s)}function ME(t,e,n,s=!0){console.error(t)}let Fi=!1,du=!1;const ct=[];let rn=0;const Sr=[];let Kn=null,Rs=0;const Fg=Promise.resolve();let Uh=null;function ei(t){const e=Uh||Fg;return t?e.then(this?t.bind(this):t):e}function UE(t){let e=rn+1,n=ct.length;for(;e<n;){const s=e+n>>>1,r=ct[s],i=$i(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function Fh(t){(!ct.length||!ct.includes(t,Fi&&t.allowRecurse?rn+1:rn))&&(t.id==null?ct.push(t):ct.splice(UE(t.id),0,t),$g())}function $g(){!Fi&&!du&&(du=!0,Uh=Fg.then(Vg))}function FE(t){const e=ct.indexOf(t);e>rn&&ct.splice(e,1)}function fu(t){J(t)?Sr.push(...t):(!Kn||!Kn.includes(t,t.allowRecurse?Rs+1:Rs))&&Sr.push(t),$g()}function Pf(t,e,n=Fi?rn+1:0){for(;n<ct.length;n++){const s=ct[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;ct.splice(n,1),n--,s()}}}function Bg(t){if(Sr.length){const e=[...new Set(Sr)].sort((n,s)=>$i(n)-$i(s));if(Sr.length=0,Kn){Kn.push(...e);return}for(Kn=e,Rs=0;Rs<Kn.length;Rs++)Kn[Rs]();Kn=null,Rs=0}}const $i=t=>t.id==null?1/0:t.id,$E=(t,e)=>{const n=$i(t)-$i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vg(t){du=!1,Fi=!0,ct.sort($E);try{for(rn=0;rn<ct.length;rn++){const e=ct[rn];e&&e.active!==!1&&is(e,null,14)}}finally{rn=0,ct.length=0,Bg(),Fi=!1,Uh=null,(ct.length||Sr.length)&&Vg()}}function BE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||De;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||De;d&&(r=n.map(p=>qe(p)?p.trim():p)),h&&(r=n.map(Mi))}let a,c=s[a=Al(e)]||s[a=Al(dn(e))];!c&&i&&(c=s[a=Al(Jr(e))]),c&&Gt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gt(l,t,6,r)}}function jg(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=jg(l,e,!0);u&&(a=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Oe(t)&&s.set(t,null),null):(J(i)?i.forEach(c=>o[c]=null):rt(o,i),Oe(t)&&s.set(t,o),o)}function Sc(t,e){return!t||!vc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Jr(e))||ve(t,e))}let Ke=null,Cc=null;function Na(t){const e=Ke;return Ke=t,Cc=t&&t.type.__scopeId||null,e}function VE(t){Cc=t}function jE(){Cc=null}function qE(t,e=Ke,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Wf(-1);const i=Na(e);let o;try{o=t(...r)}finally{Na(i),s._d&&Wf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Rl(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=t;let E,I;const S=Na(t);try{if(n.shapeFlag&4){const F=r||s,k=F;E=Ht(u.call(k,F,h,i,p,d,g)),I=c}else{const F=e;E=Ht(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),I=e.props?c:zE(c)}}catch(F){Ii.length=0,_o(F,t,1),E=ge(fn)}let D=E;if(I&&v!==!1){const F=Object.keys(I),{shapeFlag:k}=D;F.length&&k&7&&(o&&F.some(Sh)&&(I=KE(I,o)),D=Ws(D,I))}return n.dirs&&(D=Ws(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),E=D,Na(S),E}function HE(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(Gs(r)){if(r.type!==fn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const zE=t=>{let e;for(const n in t)(n==="class"||n==="style"||vc(n))&&((e||(e={}))[n]=t[n]);return e},KE=(t,e)=>{const n={};for(const s in t)(!Sh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function GE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Lf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Sc(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Lf(s,o,l):!0:!!o;return!1}function Lf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Sc(n,i))return!0}return!1}function $h({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const qg="components";function KL(t,e){return ZE(qg,t,!0,e)||t}const WE=Symbol.for("v-ndc");function ZE(t,e,n=!0,s=!1){const r=Ke||Ye;if(r){const i=r.type;if(t===qg){const a=QT(i,!1);if(a&&(a===e||a===dn(e)||a===bc(dn(e))))return i}const o=Mf(r[t]||i[t],e)||Mf(r.appContext[t],e);return!o&&s?i:o}}function Mf(t,e){return t&&(t[e]||t[dn(e)]||t[bc(dn(e))])}const QE=t=>t.__isSuspense;let pu=0;const YE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){if(t==null)XE(e,n,s,r,i,o,a,c,l);else{if(i&&i.deps>0){e.suspense=t.suspense;return}JE(t,e,n,s,r,o,a,c,l)}},hydrate:eT,create:Bh,normalize:tT},GL=YE;function Bi(t,e){const n=t.props&&t.props[e];ie(n)&&n()}function XE(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),d=t.suspense=Bh(t,r,s,e,h,n,i,o,a,c);l(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(Bi(t,"onPending"),Bi(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Cr(d,t.ssFallback)):d.resolve(!1,!0)}function JE(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:E,isHydrating:I}=h;if(v)h.pendingBranch=d,Qn(d,v)?(c(v,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():E&&(I||(c(g,p,n,s,r,null,i,o,a),Cr(h,p)))):(h.pendingId=pu++,I?(h.isHydrating=!1,h.activeBranch=v):l(v,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),E?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(g,p,n,s,r,null,i,o,a),Cr(h,p))):g&&Qn(d,g)?(c(g,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(g&&Qn(d,g))c(g,d,n,s,r,h,i,o,a),Cr(h,d);else if(Bi(e,"onPending"),h.pendingBranch=d,d.shapeFlag&512?h.pendingId=d.component.suspenseId:h.pendingId=pu++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:S,pendingId:D}=h;S>0?setTimeout(()=>{h.pendingId===D&&h.fallback(p)},S):S===0&&h.fallback(p)}}function Bh(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:d,um:p,n:g,o:{parentNode:v,remove:E}}=l;let I;const S=sT(t);S&&e!=null&&e.pendingBranch&&(I=e.pendingId,e.deps++);const D=t.props?Xb(t.props.timeout):void 0,F=i,k={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:pu++,timeout:typeof D=="number"?D:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(A=!1,X=!1){const{vnode:q,activeBranch:H,pendingBranch:he,pendingId:Ae,effects:$e,parentComponent:et,container:At}=k;let tt=!1;k.isHydrating?k.isHydrating=!1:A||(tt=H&&he.transition&&he.transition.mode==="out-in",tt&&(H.transition.afterLeave=()=>{Ae===k.pendingId&&(d(he,At,i===F?g(H):i,0),fu($e))}),H&&(v(H.el)!==k.hiddenContainer&&(i=g(H)),p(H,et,k,!0)),tt||d(he,At,i,0)),Cr(k,he),k.pendingBranch=null,k.isInFallback=!1;let fe=k.parent,we=!1;for(;fe;){if(fe.pendingBranch){fe.effects.push(...$e),we=!0;break}fe=fe.parent}!we&&!tt&&fu($e),k.effects=[],S&&e&&e.pendingBranch&&I===e.pendingId&&(e.deps--,e.deps===0&&!X&&e.resolve()),Bi(q,"onResolve")},fallback(A){if(!k.pendingBranch)return;const{vnode:X,activeBranch:q,parentComponent:H,container:he,namespace:Ae}=k;Bi(X,"onFallback");const $e=g(q),et=()=>{k.isInFallback&&(h(null,A,he,$e,H,null,Ae,a,c),Cr(k,A))},At=A.transition&&A.transition.mode==="out-in";At&&(q.transition.afterLeave=et),k.isInFallback=!0,p(q,H,null,!0),At||et()},move(A,X,q){k.activeBranch&&d(k.activeBranch,A,X,q),k.container=A},next(){return k.activeBranch&&g(k.activeBranch)},registerDep(A,X){const q=!!k.pendingBranch;q&&k.deps++;const H=A.vnode.el;A.asyncDep.catch(he=>{_o(he,A,0)}).then(he=>{if(A.isUnmounted||k.isUnmounted||k.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:Ae}=A;Eu(A,he,!1),H&&(Ae.el=H);const $e=!H&&A.subTree.el;X(A,Ae,v(H||A.subTree.el),H?null:g(A.subTree),k,o,c),$e&&E($e),$h(A,Ae.el),q&&--k.deps===0&&k.resolve()})},unmount(A,X){k.isUnmounted=!0,k.activeBranch&&p(k.activeBranch,n,A,X),k.pendingBranch&&p(k.pendingBranch,n,A,X)}};return k}function eT(t,e,n,s,r,i,o,a,c){const l=e.suspense=Bh(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function tT(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Uf(s?n.default:n),t.ssFallback=s?Uf(n.fallback):ge(fn)}function Uf(t){let e;if(ie(t)){const n=Mr&&t._c;n&&(t._d=!1,xc()),t=t(),n&&(t._d=!0,e=Ut,sy())}return J(t)&&(t=HE(t)),t=Ht(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function nT(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):fu(t)}function Cr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,$h(s,r))}function sT(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const rT=Symbol.for("v-scx"),iT=()=>cn(rT);function ua(t,e){return Vh(t,null,e)}const Yo={};function wi(t,e,n){return Vh(t,e,n)}function Vh(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=De){if(e&&i){const A=e;e=(...X)=>{A(...X),k()}}const c=Ye,l=A=>s===!0?A:Ns(A,s===!1?1:void 0);let u,h=!1,d=!1;if(We(t)?(u=()=>t.value,h=xa(t)):rs(t)?(u=()=>l(t),h=!0):J(t)?(d=!0,h=t.some(A=>rs(A)||xa(A)),u=()=>t.map(A=>{if(We(A))return A.value;if(rs(A))return l(A);if(ie(A))return is(A,c,2)})):ie(t)?e?u=()=>is(t,c,2):u=()=>(p&&p(),Gt(t,c,3,[g])):u=Mt,e&&s){const A=u;u=()=>Ns(A())}let p,g=A=>{p=D.onStop=()=>{is(A,c,4),p=D.onStop=void 0}},v;if(Oc)if(g=Mt,e?n&&Gt(e,c,3,[u(),d?[]:void 0,g]):u(),r==="sync"){const A=iT();v=A.__watcherHandles||(A.__watcherHandles=[])}else return Mt;let E=d?new Array(t.length).fill(Yo):Yo;const I=()=>{if(!(!D.active||!D.dirty))if(e){const A=D.run();(s||h||(d?A.some((X,q)=>hs(X,E[q])):hs(A,E)))&&(p&&p(),Gt(e,c,3,[A,E===Yo?void 0:d&&E[0]===Yo?[]:E,g]),E=A)}else D.run()};I.allowRecurse=!!e;let S;r==="sync"?S=I:r==="post"?S=()=>It(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),S=()=>Fh(I));const D=new xh(u,Mt,S),F=_g(),k=()=>{D.stop(),F&&Ch(F.effects,D)};return e?n?I():E=D.run():r==="post"?It(D.run.bind(D),c&&c.suspense):D.run(),v&&v.push(k),k}function oT(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Hg(s,t):()=>s[t]:t.bind(s,s);let i;ie(e)?i=e:(i=e.handler,n=e);const o=wo(this),a=Vh(r,i.bind(s),n);return o(),a}function Hg(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ns(t,e,n=0,s){if(!Oe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),We(t))Ns(t.value,e,n,s);else if(J(t))for(let r=0;r<t.length;r++)Ns(t[r],e,n,s);else if(_c(t)||Ir(t))t.forEach(r=>{Ns(r,e,n,s)});else if(fg(t))for(const r in t)Ns(t[r],e,n,s);return t}function WL(t,e){if(Ke===null)return t;const n=Dc(Ke)||Ke.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=De]=e[r];i&&(ie(i)&&(i={mounted:i,updated:i}),i.deep&&Ns(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ss(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ir(),Gt(c,n,8,[t.el,a,t,e]),or())}}/*! #__NO_SIDE_EFFECTS__ */function ar(t,e){return ie(t)?rt({name:t.name},e,{setup:t}):t}const bi=t=>!!t.type.__asyncLoader,zg=t=>t.type.__isKeepAlive;function aT(t,e){Kg(t,"a",e)}function cT(t,e){Kg(t,"da",e)}function Kg(t,e,n=Ye){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ac(e,s,n),n){let r=n.parent;for(;r&&r.parent;)zg(r.parent.vnode)&&lT(s,e,n,r),r=r.parent}}function lT(t,e,n,s){const r=Ac(e,t,s,!0);kc(()=>{Ch(s[e],r)},n)}function Ac(t,e,n=Ye,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ir();const a=wo(n),c=Gt(e,n,t,o);return a(),or(),c});return s?r.unshift(i):r.push(i),i}}const $n=t=>(e,n=Ye)=>(!Oc||t==="sp")&&Ac(t,(...s)=>e(...s),n),uT=$n("bm"),jh=$n("m"),hT=$n("bu"),dT=$n("u"),fT=$n("bum"),kc=$n("um"),pT=$n("sp"),mT=$n("rtg"),gT=$n("rtc");function yT(t,e=Ye){Ac("ec",t,e)}function ZL(t,e,n,s){let r;const i=n&&n[s];if(J(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function QL(t,e,n={},s,r){if(Ke.isCE||Ke.parent&&bi(Ke.parent)&&Ke.parent.isCE)return e!=="default"&&(n.name=e),ge("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),xc();const o=i&&Gg(i(n)),a=iy(xt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Gg(t){return t.some(e=>Gs(e)?!(e.type===fn||e.type===xt&&!Gg(e.children)):!0)?t:null}const mu=t=>t?ay(t)?Dc(t)||t.proxy:mu(t.parent):null,Ei=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mu(t.parent),$root:t=>mu(t.root),$emit:t=>t.emit,$options:t=>qh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Fh(t.update)}),$nextTick:t=>t.n||(t.n=ei.bind(t.proxy)),$watch:t=>oT.bind(t)}),xl=(t,e)=>t!==De&&!t.__isScriptSetup&&ve(t,e),vT={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(xl(s,e))return o[e]=1,s[e];if(r!==De&&ve(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ve(l,e))return o[e]=3,i[e];if(n!==De&&ve(n,e))return o[e]=4,n[e];gu&&(o[e]=0)}}const u=Ei[e];let h,d;if(u)return e==="$attrs"&&Ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&ve(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ve(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return xl(r,e)?(r[e]=n,!0):s!==De&&ve(s,e)?(s[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==De&&ve(t,o)||xl(e,o)||(a=i[0])&&ve(a,o)||ve(s,o)||ve(Ei,o)||ve(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ff(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gu=!0;function _T(t){const e=qh(t),n=t.proxy,s=t.ctx;gu=!1,e.beforeCreate&&$f(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:E,beforeDestroy:I,beforeUnmount:S,destroyed:D,unmounted:F,render:k,renderTracked:A,renderTriggered:X,errorCaptured:q,serverPrefetch:H,expose:he,inheritAttrs:Ae,components:$e,directives:et,filters:At}=e;if(l&&wT(l,s,null),o)for(const we in o){const Te=o[we];ie(Te)&&(s[we]=Te.bind(n))}if(r){const we=r.call(n,n);Oe(we)&&(t.data=Jt(we))}if(gu=!0,i)for(const we in i){const Te=i[we],wn=ie(Te)?Te.bind(n,n):ie(Te.get)?Te.get.bind(n,n):Mt,Vn=!ie(Te)&&ie(Te.set)?Te.set.bind(n):Mt,tn=xe({get:wn,set:Vn});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Tt=>tn.value=Tt})}if(a)for(const we in a)Wg(a[we],s,n,we);if(c){const we=ie(c)?c.call(n):c;Reflect.ownKeys(we).forEach(Te=>{ha(Te,we[Te])})}u&&$f(u,t,"c");function fe(we,Te){J(Te)?Te.forEach(wn=>we(wn.bind(n))):Te&&we(Te.bind(n))}if(fe(uT,h),fe(jh,d),fe(hT,p),fe(dT,g),fe(aT,v),fe(cT,E),fe(yT,q),fe(gT,A),fe(mT,X),fe(fT,S),fe(kc,F),fe(pT,H),J(he))if(he.length){const we=t.exposed||(t.exposed={});he.forEach(Te=>{Object.defineProperty(we,Te,{get:()=>n[Te],set:wn=>n[Te]=wn})})}else t.exposed||(t.exposed={});k&&t.render===Mt&&(t.render=k),Ae!=null&&(t.inheritAttrs=Ae),$e&&(t.components=$e),et&&(t.directives=et)}function wT(t,e,n=Mt){J(t)&&(t=yu(t));for(const s in t){const r=t[s];let i;Oe(r)?"default"in r?i=cn(r.from||s,r.default,!0):i=cn(r.from||s):i=cn(r),We(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function $f(t,e,n){Gt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wg(t,e,n,s){const r=s.includes(".")?Hg(n,s):()=>n[s];if(qe(t)){const i=e[t];ie(i)&&wi(r,i)}else if(ie(t))wi(r,t.bind(n));else if(Oe(t))if(J(t))t.forEach(i=>Wg(i,e,n,s));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&wi(r,i,t)}}function qh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Oa(c,l,o,!0)),Oa(c,e,o)),Oe(e)&&i.set(e,c),c}function Oa(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Oa(t,i,n,!0),r&&r.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=bT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bT={data:Bf,props:Vf,emits:Vf,methods:di,computed:di,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:di,directives:di,watch:TT,provide:Bf,inject:ET};function Bf(t,e){return e?t?function(){return rt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function ET(t,e){return di(yu(t),yu(e))}function yu(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?rt(Object.create(null),t,e):e}function Vf(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:rt(Object.create(null),Ff(t),Ff(e??{})):e}function TT(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function Zg(){return{app:null,config:{isNativeTag:Gb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let IT=0;function ST(t,e){return function(s,r=null){ie(s)||(s=rt({},s)),r!=null&&!Oe(r)&&(r=null);const i=Zg(),o=new WeakSet;let a=!1;const c=i.app={_uid:IT++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:XT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ge(s,r);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Dc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=Ar;Ar=c;try{return l()}finally{Ar=u}}};return c}}let Ar=null;function ha(t,e){if(Ye){let n=Ye.provides;const s=Ye.parent&&Ye.parent.provides;s===n&&(n=Ye.provides=Object.create(s)),n[t]=e}}function cn(t,e,n=!1){const s=Ye||Ke;if(s||Ar){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ar._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(s&&s.proxy):e}}function CT(){return!!(Ye||Ke||Ar)}function AT(t,e,n,s=!1){const r={},i={};ka(i,Nc,1),t.propsDefaults=Object.create(null),Qg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ng(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function kT(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Sc(t.emitsOptions,d))continue;const p=e[d];if(c)if(ve(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const g=dn(d);r[g]=vu(c,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Qg(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ve(e,h)&&((u=Jr(h))===h||!ve(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=vu(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ve(e,h))&&(delete i[h],l=!0)}l&&An(t,"set","$attrs")}function Qg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(vi(c))continue;const l=e[c];let u;r&&ve(r,u=dn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Sc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=oe(n),l=a||De;for(let u=0;u<i.length;u++){const h=i[u];n[h]=vu(r,c,h,l[h],t,!ve(l,h))}}return o}function vu(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ve(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ie(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=wo(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Jr(n))&&(s=!0))}return s}function Yg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[d,p]=Yg(h,e,!0);rt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Oe(t)&&s.set(t,Tr),Tr;if(J(i))for(let u=0;u<i.length;u++){const h=dn(i[u]);jf(h)&&(o[h]=De)}else if(i)for(const u in i){const h=dn(u);if(jf(h)){const d=i[u],p=o[h]=J(d)||ie(d)?{type:d}:rt({},d);if(p){const g=zf(Boolean,p.type),v=zf(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||ve(p,"default"))&&a.push(h)}}}const l=[o,a];return Oe(t)&&s.set(t,l),l}function jf(t){return t[0]!=="$"&&!vi(t)}function qf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Hf(t,e){return qf(t)===qf(e)}function zf(t,e){return J(e)?e.findIndex(n=>Hf(n,t)):ie(e)&&Hf(e,t)?0:-1}const Xg=t=>t[0]==="_"||t==="$stable",Hh=t=>J(t)?t.map(Ht):[Ht(t)],RT=(t,e,n)=>{if(e._n)return e;const s=qE((...r)=>Hh(e(...r)),n);return s._c=!1,s},Jg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Xg(r))continue;const i=t[r];if(ie(i))e[r]=RT(r,i,s);else if(i!=null){const o=Hh(i);e[r]=()=>o}}},ey=(t,e)=>{const n=Hh(e);t.slots.default=()=>n},xT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),ka(e,"_",n)):Jg(e,t.slots={})}else t.slots={},e&&ey(t,e);ka(t.slots,Nc,1)},NT=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=De;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(rt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Jg(e,r)),o=e}else e&&(ey(t,e),o={default:1});if(i)for(const a in r)!Xg(a)&&o[a]==null&&delete r[a]};function _u(t,e,n,s,r=!1){if(J(t)){t.forEach((d,p)=>_u(d,e&&(J(e)?e[p]:e),n,s,r));return}if(bi(s)&&!r)return;const i=s.shapeFlag&4?Dc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,ve(h,l)&&(h[l]=null)):We(l)&&(l.value=null)),ie(c))is(c,a,12,[o,u]);else{const d=qe(c),p=We(c);if(d||p){const g=()=>{if(t.f){const v=d?ve(h,c)?h[c]:u[c]:c.value;r?J(v)&&Ch(v,i):J(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ve(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ve(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,It(g,n)):g()}}}const It=nT;function OT(t){return DT(t)}function DT(t,e){const n=pg();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Mt,insertStaticContent:g}=t,v=(f,m,y,T=null,w=null,O=null,U=void 0,N=null,P=!!m.dynamicChildren)=>{if(f===m)return;f&&!Qn(f,m)&&(T=b(f),Tt(f,w,O,!0),f=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:C,ref:j,shapeFlag:Q}=m;switch(C){case Rc:E(f,m,y,T);break;case fn:I(f,m,y,T);break;case Ol:f==null&&S(m,y,T,U);break;case xt:$e(f,m,y,T,w,O,U,N,P);break;default:Q&1?k(f,m,y,T,w,O,U,N,P):Q&6?et(f,m,y,T,w,O,U,N,P):(Q&64||Q&128)&&C.process(f,m,y,T,w,O,U,N,P,K)}j!=null&&w&&_u(j,f&&f.ref,O,m||f,!m)},E=(f,m,y,T)=>{if(f==null)s(m.el=a(m.children),y,T);else{const w=m.el=f.el;m.children!==f.children&&l(w,m.children)}},I=(f,m,y,T)=>{f==null?s(m.el=c(m.children||""),y,T):m.el=f.el},S=(f,m,y,T)=>{[f.el,f.anchor]=g(f.children,m,y,T,f.el,f.anchor)},D=({el:f,anchor:m},y,T)=>{let w;for(;f&&f!==m;)w=d(f),s(f,y,T),f=w;s(m,y,T)},F=({el:f,anchor:m})=>{let y;for(;f&&f!==m;)y=d(f),r(f),f=y;r(m)},k=(f,m,y,T,w,O,U,N,P)=>{m.type==="svg"?U="svg":m.type==="math"&&(U="mathml"),f==null?A(m,y,T,w,O,U,N,P):H(f,m,w,O,U,N,P)},A=(f,m,y,T,w,O,U,N)=>{let P,C;const{props:j,shapeFlag:Q,transition:W,dirs:re}=f;if(P=f.el=o(f.type,O,j&&j.is,j),Q&8?u(P,f.children):Q&16&&q(f.children,P,null,T,w,Nl(f,O),U,N),re&&Ss(f,null,T,"created"),X(P,f,f.scopeId,U,T),j){for(const Re in j)Re!=="value"&&!vi(Re)&&i(P,Re,null,j[Re],O,f.children,T,w,ot);"value"in j&&i(P,"value",null,j.value,O),(C=j.onVnodeBeforeMount)&&sn(C,T,f)}re&&Ss(f,null,T,"beforeMount");const pe=PT(w,W);pe&&W.beforeEnter(P),s(P,m,y),((C=j&&j.onVnodeMounted)||pe||re)&&It(()=>{C&&sn(C,T,f),pe&&W.enter(P),re&&Ss(f,null,T,"mounted")},w)},X=(f,m,y,T,w)=>{if(y&&p(f,y),T)for(let O=0;O<T.length;O++)p(f,T[O]);if(w){let O=w.subTree;if(m===O){const U=w.vnode;X(f,U,U.scopeId,U.slotScopeIds,w.parent)}}},q=(f,m,y,T,w,O,U,N,P=0)=>{for(let C=P;C<f.length;C++){const j=f[C]=N?Gn(f[C]):Ht(f[C]);v(null,j,m,y,T,w,O,U,N)}},H=(f,m,y,T,w,O,U)=>{const N=m.el=f.el;let{patchFlag:P,dynamicChildren:C,dirs:j}=m;P|=f.patchFlag&16;const Q=f.props||De,W=m.props||De;let re;if(y&&Cs(y,!1),(re=W.onVnodeBeforeUpdate)&&sn(re,y,m,f),j&&Ss(m,f,y,"beforeUpdate"),y&&Cs(y,!0),C?he(f.dynamicChildren,C,N,y,T,Nl(m,w),O):U||Te(f,m,N,null,y,T,Nl(m,w),O,!1),P>0){if(P&16)Ae(N,m,Q,W,y,T,w);else if(P&2&&Q.class!==W.class&&i(N,"class",null,W.class,w),P&4&&i(N,"style",Q.style,W.style,w),P&8){const pe=m.dynamicProps;for(let Re=0;Re<pe.length;Re++){const Le=pe[Re],Ze=Q[Le],qt=W[Le];(qt!==Ze||Le==="value")&&i(N,Le,Ze,qt,w,f.children,y,T,ot)}}P&1&&f.children!==m.children&&u(N,m.children)}else!U&&C==null&&Ae(N,m,Q,W,y,T,w);((re=W.onVnodeUpdated)||j)&&It(()=>{re&&sn(re,y,m,f),j&&Ss(m,f,y,"updated")},T)},he=(f,m,y,T,w,O,U)=>{for(let N=0;N<m.length;N++){const P=f[N],C=m[N],j=P.el&&(P.type===xt||!Qn(P,C)||P.shapeFlag&70)?h(P.el):y;v(P,C,j,null,T,w,O,U,!0)}},Ae=(f,m,y,T,w,O,U)=>{if(y!==T){if(y!==De)for(const N in y)!vi(N)&&!(N in T)&&i(f,N,y[N],null,U,m.children,w,O,ot);for(const N in T){if(vi(N))continue;const P=T[N],C=y[N];P!==C&&N!=="value"&&i(f,N,C,P,U,m.children,w,O,ot)}"value"in T&&i(f,"value",y.value,T.value,U)}},$e=(f,m,y,T,w,O,U,N,P)=>{const C=m.el=f?f.el:a(""),j=m.anchor=f?f.anchor:a("");let{patchFlag:Q,dynamicChildren:W,slotScopeIds:re}=m;re&&(N=N?N.concat(re):re),f==null?(s(C,y,T),s(j,y,T),q(m.children||[],y,j,w,O,U,N,P)):Q>0&&Q&64&&W&&f.dynamicChildren?(he(f.dynamicChildren,W,y,w,O,U,N),(m.key!=null||w&&m===w.subTree)&&zh(f,m,!0)):Te(f,m,y,j,w,O,U,N,P)},et=(f,m,y,T,w,O,U,N,P)=>{m.slotScopeIds=N,f==null?m.shapeFlag&512?w.ctx.activate(m,y,T,U,P):At(m,y,T,w,O,U,P):tt(f,m,P)},At=(f,m,y,T,w,O,U)=>{const N=f.component=zT(f,T,w);if(zg(f)&&(N.ctx.renderer=K),KT(N),N.asyncDep){if(w&&w.registerDep(N,fe),!f.el){const P=N.subTree=ge(fn);I(null,P,m,y)}}else fe(N,f,m,y,w,O,U)},tt=(f,m,y)=>{const T=m.component=f.component;if(GE(f,m,y))if(T.asyncDep&&!T.asyncResolved){we(T,m,y);return}else T.next=m,FE(T.update),T.effect.dirty=!0,T.update();else m.el=f.el,T.vnode=m},fe=(f,m,y,T,w,O,U)=>{const N=()=>{if(f.isMounted){let{next:j,bu:Q,u:W,parent:re,vnode:pe}=f;{const pr=ty(f);if(pr){j&&(j.el=pe.el,we(f,j,U)),pr.asyncDep.then(()=>{f.isUnmounted||N()});return}}let Re=j,Le;Cs(f,!1),j?(j.el=pe.el,we(f,j,U)):j=pe,Q&&la(Q),(Le=j.props&&j.props.onVnodeBeforeUpdate)&&sn(Le,re,j,pe),Cs(f,!0);const Ze=Rl(f),qt=f.subTree;f.subTree=Ze,v(qt,Ze,h(qt.el),b(qt),f,w,O),j.el=Ze.el,Re===null&&$h(f,Ze.el),W&&It(W,w),(Le=j.props&&j.props.onVnodeUpdated)&&It(()=>sn(Le,re,j,pe),w)}else{let j;const{el:Q,props:W}=m,{bm:re,m:pe,parent:Re}=f,Le=bi(m);if(Cs(f,!1),re&&la(re),!Le&&(j=W&&W.onVnodeBeforeMount)&&sn(j,Re,m),Cs(f,!0),Q&&Pe){const Ze=()=>{f.subTree=Rl(f),Pe(Q,f.subTree,f,w,null)};Le?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ze()):Ze()}else{const Ze=f.subTree=Rl(f);v(null,Ze,y,T,f,w,O),m.el=Ze.el}if(pe&&It(pe,w),!Le&&(j=W&&W.onVnodeMounted)){const Ze=m;It(()=>sn(j,Re,Ze),w)}(m.shapeFlag&256||Re&&bi(Re.vnode)&&Re.vnode.shapeFlag&256)&&f.a&&It(f.a,w),f.isMounted=!0,m=y=T=null}},P=f.effect=new xh(N,Mt,()=>Fh(C),f.scope),C=f.update=()=>{P.dirty&&P.run()};C.id=f.uid,Cs(f,!0),C()},we=(f,m,y)=>{m.component=f;const T=f.vnode.props;f.vnode=m,f.next=null,kT(f,m.props,T,y),NT(f,m.children,y),ir(),Pf(f),or()},Te=(f,m,y,T,w,O,U,N,P=!1)=>{const C=f&&f.children,j=f?f.shapeFlag:0,Q=m.children,{patchFlag:W,shapeFlag:re}=m;if(W>0){if(W&128){Vn(C,Q,y,T,w,O,U,N,P);return}else if(W&256){wn(C,Q,y,T,w,O,U,N,P);return}}re&8?(j&16&&ot(C,w,O),Q!==C&&u(y,Q)):j&16?re&16?Vn(C,Q,y,T,w,O,U,N,P):ot(C,w,O,!0):(j&8&&u(y,""),re&16&&q(Q,y,T,w,O,U,N,P))},wn=(f,m,y,T,w,O,U,N,P)=>{f=f||Tr,m=m||Tr;const C=f.length,j=m.length,Q=Math.min(C,j);let W;for(W=0;W<Q;W++){const re=m[W]=P?Gn(m[W]):Ht(m[W]);v(f[W],re,y,null,w,O,U,N,P)}C>j?ot(f,w,O,!0,!1,Q):q(m,y,T,w,O,U,N,P,Q)},Vn=(f,m,y,T,w,O,U,N,P)=>{let C=0;const j=m.length;let Q=f.length-1,W=j-1;for(;C<=Q&&C<=W;){const re=f[C],pe=m[C]=P?Gn(m[C]):Ht(m[C]);if(Qn(re,pe))v(re,pe,y,null,w,O,U,N,P);else break;C++}for(;C<=Q&&C<=W;){const re=f[Q],pe=m[W]=P?Gn(m[W]):Ht(m[W]);if(Qn(re,pe))v(re,pe,y,null,w,O,U,N,P);else break;Q--,W--}if(C>Q){if(C<=W){const re=W+1,pe=re<j?m[re].el:T;for(;C<=W;)v(null,m[C]=P?Gn(m[C]):Ht(m[C]),y,pe,w,O,U,N,P),C++}}else if(C>W)for(;C<=Q;)Tt(f[C],w,O,!0),C++;else{const re=C,pe=C,Re=new Map;for(C=pe;C<=W;C++){const kt=m[C]=P?Gn(m[C]):Ht(m[C]);kt.key!=null&&Re.set(kt.key,C)}let Le,Ze=0;const qt=W-pe+1;let pr=!1,Ef=0;const ai=new Array(qt);for(C=0;C<qt;C++)ai[C]=0;for(C=re;C<=Q;C++){const kt=f[C];if(Ze>=qt){Tt(kt,w,O,!0);continue}let nn;if(kt.key!=null)nn=Re.get(kt.key);else for(Le=pe;Le<=W;Le++)if(ai[Le-pe]===0&&Qn(kt,m[Le])){nn=Le;break}nn===void 0?Tt(kt,w,O,!0):(ai[nn-pe]=C+1,nn>=Ef?Ef=nn:pr=!0,v(kt,m[nn],y,null,w,O,U,N,P),Ze++)}const Tf=pr?LT(ai):Tr;for(Le=Tf.length-1,C=qt-1;C>=0;C--){const kt=pe+C,nn=m[kt],If=kt+1<j?m[kt+1].el:T;ai[C]===0?v(null,nn,y,If,w,O,U,N,P):pr&&(Le<0||C!==Tf[Le]?tn(nn,y,If,2):Le--)}}},tn=(f,m,y,T,w=null)=>{const{el:O,type:U,transition:N,children:P,shapeFlag:C}=f;if(C&6){tn(f.component.subTree,m,y,T);return}if(C&128){f.suspense.move(m,y,T);return}if(C&64){U.move(f,m,y,K);return}if(U===xt){s(O,m,y);for(let Q=0;Q<P.length;Q++)tn(P[Q],m,y,T);s(f.anchor,m,y);return}if(U===Ol){D(f,m,y);return}if(T!==2&&C&1&&N)if(T===0)N.beforeEnter(O),s(O,m,y),It(()=>N.enter(O),w);else{const{leave:Q,delayLeave:W,afterLeave:re}=N,pe=()=>s(O,m,y),Re=()=>{Q(O,()=>{pe(),re&&re()})};W?W(O,pe,Re):Re()}else s(O,m,y)},Tt=(f,m,y,T=!1,w=!1)=>{const{type:O,props:U,ref:N,children:P,dynamicChildren:C,shapeFlag:j,patchFlag:Q,dirs:W}=f;if(N!=null&&_u(N,null,y,f,!0),j&256){m.ctx.deactivate(f);return}const re=j&1&&W,pe=!bi(f);let Re;if(pe&&(Re=U&&U.onVnodeBeforeUnmount)&&sn(Re,m,f),j&6)zo(f.component,y,T);else{if(j&128){f.suspense.unmount(y,T);return}re&&Ss(f,null,m,"beforeUnmount"),j&64?f.type.remove(f,m,y,w,K,T):C&&(O!==xt||Q>0&&Q&64)?ot(C,m,y,!1,!0):(O===xt&&Q&384||!w&&j&16)&&ot(P,m,y),T&&dr(f)}(pe&&(Re=U&&U.onVnodeUnmounted)||re)&&It(()=>{Re&&sn(Re,m,f),re&&Ss(f,null,m,"unmounted")},y)},dr=f=>{const{type:m,el:y,anchor:T,transition:w}=f;if(m===xt){fr(y,T);return}if(m===Ol){F(f);return}const O=()=>{r(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:U,delayLeave:N}=w,P=()=>U(y,O);N?N(f.el,O,P):P()}else O()},fr=(f,m)=>{let y;for(;f!==m;)y=d(f),r(f),f=y;r(m)},zo=(f,m,y)=>{const{bum:T,scope:w,update:O,subTree:U,um:N}=f;T&&la(T),w.stop(),O&&(O.active=!1,Tt(U,f,m,y)),N&&It(N,m),It(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ot=(f,m,y,T=!1,w=!1,O=0)=>{for(let U=O;U<f.length;U++)Tt(f[U],m,y,T,w)},b=f=>f.shapeFlag&6?b(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let V=!1;const M=(f,m,y)=>{f==null?m._vnode&&Tt(m._vnode,null,null,!0):v(m._vnode||null,f,m,null,null,null,y),V||(V=!0,Pf(),Bg(),V=!1),m._vnode=f},K={p:v,um:Tt,m:tn,r:dr,mt:At,mc:q,pc:Te,pbc:he,n:b,o:t};let Ie,Pe;return e&&([Ie,Pe]=e(K)),{render:M,hydrate:Ie,createApp:ST(M,Ie)}}function Nl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function PT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zh(t,e,n=!1){const s=t.children,r=e.children;if(J(s)&&J(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Gn(r[i]),a.el=o.el),n||zh(o,a)),a.type===Rc&&(a.el=o.el)}}function LT(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ty(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ty(e)}const MT=t=>t.__isTeleport,Ti=t=>t&&(t.disabled||t.disabled===""),Kf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Gf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,wu=(t,e)=>{const n=t&&t.to;return qe(n)?e?e(n):null:n},UT={name:"Teleport",__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:g,createText:v,createComment:E}}=l,I=Ti(e.props);let{shapeFlag:S,children:D,dynamicChildren:F}=e;if(t==null){const k=e.el=v(""),A=e.anchor=v("");p(k,n,s),p(A,n,s);const X=e.target=wu(e.props,g),q=e.targetAnchor=v("");X&&(p(q,X),o==="svg"||Kf(X)?o="svg":(o==="mathml"||Gf(X))&&(o="mathml"));const H=(he,Ae)=>{S&16&&u(D,he,Ae,r,i,o,a,c)};I?H(n,A):X&&H(X,q)}else{e.el=t.el;const k=e.anchor=t.anchor,A=e.target=t.target,X=e.targetAnchor=t.targetAnchor,q=Ti(t.props),H=q?n:A,he=q?k:X;if(o==="svg"||Kf(A)?o="svg":(o==="mathml"||Gf(A))&&(o="mathml"),F?(d(t.dynamicChildren,F,H,r,i,o,a),zh(t,e,!0)):c||h(t,e,H,he,r,i,o,a,!1),I)q?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Xo(e,n,k,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ae=e.target=wu(e.props,g);Ae&&Xo(e,Ae,null,l,0)}else q&&Xo(e,A,X,l,1)}ny(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=t;if(h&&i(u),o&&i(l),a&16){const p=o||!Ti(d);for(let g=0;g<c.length;g++){const v=c[g];r(v,e,n,p,!!v.dynamicChildren)}}},move:Xo,hydrate:FT};function Xo(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||Ti(u))&&c&16)for(let d=0;d<l.length;d++)r(l[d],e,n,2);h&&s(a,e,n)}function FT(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=wu(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Ti(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}ny(e)}return e.anchor&&o(e.anchor)}const YL=UT;function ny(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const xt=Symbol.for("v-fgt"),Rc=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),Ol=Symbol.for("v-stc"),Ii=[];let Ut=null;function xc(t=!1){Ii.push(Ut=t?null:[])}function sy(){Ii.pop(),Ut=Ii[Ii.length-1]||null}let Mr=1;function Wf(t){Mr+=t}function ry(t){return t.dynamicChildren=Mr>0?Ut||Tr:null,sy(),Mr>0&&Ut&&Ut.push(t),t}function $T(t,e,n,s,r,i){return ry(Kh(t,e,n,s,r,i,!0))}function iy(t,e,n,s,r){return ry(ge(t,e,n,s,r,!0))}function Gs(t){return t?t.__v_isVNode===!0:!1}function Qn(t,e){return t.type===e.type&&t.key===e.key}const Nc="__vInternal",oy=({key:t})=>t??null,da=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||We(t)||ie(t)?{i:Ke,r:t,k:e,f:!!n}:t:null);function Kh(t,e=null,n=null,s=0,r=null,i=t===xt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oy(e),ref:e&&da(e),scopeId:Cc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ke};return a?(Gh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Mr>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const ge=BT;function BT(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===WE)&&(t=fn),Gs(t)){const a=Ws(t,e,!0);return n&&Gh(a,n),Mr>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(YT(t)&&(t=t.__vccOpts),e){e=VT(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=Rh(a)),Oe(c)&&(Dg(c)&&!J(c)&&(c=rt({},c)),e.style=kh(c))}const o=qe(t)?1:QE(t)?128:MT(t)?64:Oe(t)?4:ie(t)?2:0;return Kh(t,e,n,s,r,o,i,!0)}function VT(t){return t?Dg(t)||Nc in t?rt({},t):t:null}function Ws(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Bn(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&oy(a),ref:e&&e.ref?n&&r?J(r)?r.concat(da(e)):[r,da(e)]:da(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ws(t.ssContent),ssFallback:t.ssFallback&&Ws(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function jT(t=" ",e=0){return ge(Rc,null,t,e)}function XL(t="",e=!1){return e?(xc(),iy(fn,null,t)):ge(fn,null,t)}function Ht(t){return t==null||typeof t=="boolean"?ge(fn):J(t)?ge(xt,null,t.slice()):typeof t=="object"?Gn(t):ge(Rc,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ws(t)}function Gh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Gh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Nc in e)?e._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Ke},n=32):(e=String(e),s&64?(n=16,e=[jT(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bn(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Rh([e.class,s.class]));else if(r==="style")e.style=kh([e.style,s.style]);else if(vc(r)){const i=e[r],o=s[r];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function sn(t,e,n,s=null){Gt(t,e,7,[n,s])}const qT=Zg();let HT=0;function zT(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||qT,i={uid:HT++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yg(s,r),emitsOptions:jg(s,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:s.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=BE.bind(null,i),t.ce&&t.ce(i),i}let Ye=null;const JL=()=>Ye||Ke;let Da,bu;{const t=pg(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>Ye=n),bu=e("__VUE_SSR_SETTERS__",n=>Oc=n)}const wo=t=>{const e=Ye;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},Zf=()=>{Ye&&Ye.scope.off(),Da(null)};function ay(t){return t.vnode.shapeFlag&4}let Oc=!1;function KT(t,e=!1){e&&bu(e);const{props:n,children:s}=t.vnode,r=ay(t);AT(t,n,r,e),xT(t,s);const i=r?GT(t,e):void 0;return e&&bu(!1),i}function GT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ic(new Proxy(t.ctx,vT));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?ZT(t):null,i=wo(t);ir();const o=is(s,t,0,[t.props,r]);if(or(),i(),hg(o)){if(o.then(Zf,Zf),e)return o.then(a=>{Eu(t,a,e)}).catch(a=>{_o(a,t,0)});t.asyncDep=o}else Eu(t,o,e)}else cy(t,e)}function Eu(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Ug(e)),cy(t,n)}let Qf;function cy(t,e,n){const s=t.type;if(!t.render){if(!e&&Qf&&!s.render){const r=s.template||qh(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=rt(rt({isCustomElement:i,delimiters:a},o),c);s.render=Qf(r,l)}}t.render=s.render||Mt}{const r=wo(t);ir();try{_T(t)}finally{or(),r()}}}function WT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ct(t,"get","$attrs"),e[n]}}))}function ZT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return WT(t)},slots:t.slots,emit:t.emit,expose:e}}function Dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ug(Ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ei)return Ei[n](t)},has(e,n){return n in e||n in Ei}}))}function QT(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function YT(t){return ie(t)&&"__vccOpts"in t}const xe=(t,e)=>RE(t,e,Oc);function br(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!J(e)?Gs(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Gs(n)&&(n=[n]),ge(t,e,n))}const XT="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const JT="http://www.w3.org/2000/svg",e0="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Yf=Wn&&Wn.createElement("template"),t0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Wn.createElementNS(JT,t):e==="mathml"?Wn.createElementNS(e0,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Yf.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Yf.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},n0=Symbol("_vtc");function s0(t,e,n){const s=t[n0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vi=Symbol("_vod"),eM={beforeMount(t,{value:e},{transition:n}){t[Vi]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ci(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e==!n&&(t.style.display===t[Vi]||!e)||(s?e?(s.beforeEnter(t),ci(t,!0),s.enter(t)):s.leave(t,()=>{ci(t,!1)}):ci(t,e))},beforeUnmount(t,{value:e}){ci(t,e)}};function ci(t,e){t.style.display=e?t[Vi]:"none"}const r0=Symbol(""),i0=/(^|;)\s*display\s*:/;function o0(t,e,n){const s=t.style,r=qe(n),i=s.display;let o=!1;if(n&&!r){if(e&&!qe(e))for(const a in e)n[a]==null&&Tu(s,a,"");for(const a in n)a==="display"&&(o=!0),Tu(s,a,n[a])}else if(r){if(e!==n){const a=s[r0];a&&(n+=";"+a),s.cssText=n,o=i0.test(n)}}else e&&t.removeAttribute("style");Vi in t&&(t[Vi]=o?s.display:"",s.display=i)}const Xf=/\s*!important$/;function Tu(t,e,n){if(J(n))n.forEach(s=>Tu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=a0(t,e);Xf.test(n)?t.setProperty(Jr(s),n.replace(Xf,""),"important"):t[s]=n}}const Jf=["Webkit","Moz","ms"],Dl={};function a0(t,e){const n=Dl[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return Dl[e]=s;s=bc(s);for(let r=0;r<Jf.length;r++){const i=Jf[r]+s;if(i in t)return Dl[e]=i}return e}const ep="http://www.w3.org/1999/xlink";function c0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ep,e.slice(6,e.length)):t.setAttributeNS(ep,e,n);else{const i=rE(e);n==null||i&&!mg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function l0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=mg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xs(t,e,n,s){t.addEventListener(e,n,s)}function u0(t,e,n,s){t.removeEventListener(e,n,s)}const tp=Symbol("_vei");function h0(t,e,n,s,r=null){const i=t[tp]||(t[tp]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=d0(e);if(s){const l=i[e]=m0(s,r);xs(t,a,l,c)}else o&&(u0(t,a,o,c),i[e]=void 0)}}const np=/(?:Once|Passive|Capture)$/;function d0(t){let e;if(np.test(t)){e={};let s;for(;s=t.match(np);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jr(t.slice(2)),e]}let Pl=0;const f0=Promise.resolve(),p0=()=>Pl||(f0.then(()=>Pl=0),Pl=Date.now());function m0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Gt(g0(s,n.value),e,5,[s])};return n.value=t,n.attached=p0(),n}function g0(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const sp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,y0=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?s0(t,s,l):e==="style"?o0(t,n,s):vc(e)?Sh(e)||h0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v0(t,e,s,l))?l0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),c0(t,e,s,l))};function v0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&sp(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return sp(e)&&qe(n)?!1:e in t}const Pa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>la(e,n):e};function _0(t){t.target.composing=!0}function rp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kr=Symbol("_assign"),tM={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[kr]=Pa(r);const i=s||r.props&&r.props.type==="number";xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Mi(a)),t[kr](a)}),n&&xs(t,"change",()=>{t.value=t.value.trim()}),e||(xs(t,"compositionstart",_0),xs(t,"compositionend",rp),xs(t,"change",rp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[kr]=Pa(i),t.composing)return;const o=r||t.type==="number"?Mi(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},nM={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=_c(e);xs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Mi(La(o)):La(o));t[kr](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,ei(()=>{t._assigning=!1})}),t[kr]=Pa(s)},mounted(t,{value:e,oldValue:n,modifiers:{number:s}}){ip(t,e,n,s)},beforeUpdate(t,e,n){t[kr]=Pa(n)},updated(t,{value:e,oldValue:n,modifiers:{number:s}}){t._assigning||ip(t,e,n,s)}};function ip(t,e,n,s){const r=t.multiple,i=J(e);if(!(r&&!i&&!_c(e))){for(let o=0,a=t.options.length;o<a;o++){const c=t.options[o],l=La(c);if(r)if(i){const u=typeof l;u==="string"||u==="number"?c.selected=e.includes(s?Mi(l):l):c.selected=oE(e,l)>-1}else c.selected=e.has(l);else if(Ec(La(c),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function La(t){return"_value"in t?t._value:t.value}const w0=rt({patchProp:y0},t0);let op;function b0(){return op||(op=OT(w0))}const ly=(...t)=>{const e=b0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=T0(s);if(!r)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,E0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function E0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function T0(t){return qe(t)?document.querySelector(t):t}var I0=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let uy;const Pc=t=>uy=t,hy=Symbol();function Iu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Si;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Si||(Si={}));function S0(){const t=vg(!0),e=t.run(()=>Tn({}));let n=[],s=[];const r=Ic({install(i){Pc(r),r._a=i,i.provide(hy,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!I0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const dy=()=>{};function ap(t,e,n,s=dy){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&_g()&&cE(r),r}function mr(t,...e){t.slice().forEach(n=>{n(...e)})}const C0=t=>t();function Su(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Iu(r)&&Iu(s)&&t.hasOwnProperty(n)&&!We(s)&&!rs(s)?t[n]=Su(r,s):t[n]=s}return t}const A0=Symbol();function k0(t){return!Iu(t)||!t.hasOwnProperty(A0)}const{assign:zn}=Object;function R0(t){return!!(We(t)&&t.effect)}function x0(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=DE(n.state.value[t]);return zn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ic(xe(()=>{Pc(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=fy(t,l,e,n,s,!0),c}function fy(t,e,n={},s,r,i){let o;const a=zn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),Tn({});let v;function E(q){let H;l=u=!1,typeof q=="function"?(q(s.state.value[t]),H={type:Si.patchFunction,storeId:t,events:p}):(Su(s.state.value[t],q),H={type:Si.patchObject,payload:q,storeId:t,events:p});const he=v=Symbol();ei().then(()=>{v===he&&(l=!0)}),u=!0,mr(h,H,s.state.value[t])}const I=i?function(){const{state:H}=n,he=H?H():{};this.$patch(Ae=>{zn(Ae,he)})}:dy;function S(){o.stop(),h=[],d=[],s._s.delete(t)}function D(q,H){return function(){Pc(s);const he=Array.from(arguments),Ae=[],$e=[];function et(fe){Ae.push(fe)}function At(fe){$e.push(fe)}mr(d,{args:he,name:q,store:k,after:et,onError:At});let tt;try{tt=H.apply(this&&this.$id===t?this:k,he)}catch(fe){throw mr($e,fe),fe}return tt instanceof Promise?tt.then(fe=>(mr(Ae,fe),fe)).catch(fe=>(mr($e,fe),Promise.reject(fe))):(mr(Ae,tt),tt)}}const F={_p:s,$id:t,$onAction:ap.bind(null,d),$patch:E,$reset:I,$subscribe(q,H={}){const he=ap(h,q,H.detached,()=>Ae()),Ae=o.run(()=>wi(()=>s.state.value[t],$e=>{(H.flush==="sync"?u:l)&&q({storeId:t,type:Si.direct,events:p},$e)},zn({},c,H)));return he},$dispose:S},k=Jt(F);s._s.set(t,k);const X=(s._a&&s._a.runWithContext||C0)(()=>s._e.run(()=>(o=vg()).run(e)));for(const q in X){const H=X[q];if(We(H)&&!R0(H)||rs(H))i||(g&&k0(H)&&(We(H)?H.value=g[q]:Su(H,g[q])),s.state.value[t][q]=H);else if(typeof H=="function"){const he=D(q,H);X[q]=he,a.actions[q]=H}}return zn(k,X),zn(oe(k),X),Object.defineProperty(k,"$state",{get:()=>s.state.value[t],set:q=>{E(H=>{zn(H,q)})}}),s._p.forEach(q=>{zn(k,o.run(()=>q({store:k,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(k.$state,g),l=!0,u=!0,k}function N0(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=CT();return a=a||(l?cn(hy,null):null),a&&Pc(a),a=uy,a._s.has(s)||(i?fy(s,e,r,a):x0(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gr=typeof window<"u";function O0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function Ll(t,e){const n={};for(const s in e){const r=e[s];n[s]=Qt(r)?r.map(t):t(r)}return n}const Ci=()=>{},Qt=Array.isArray,D0=/\/$/,P0=t=>t.replace(D0,"");function Ml(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=F0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function L0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function M0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ur(e.matched[s],n.matched[r])&&py(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function py(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!U0(t[n],e[n]))return!1;return!0}function U0(t,e){return Qt(t)?lp(t,e):Qt(e)?lp(e,t):t===e}function lp(t,e){return Qt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function F0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ji;(function(t){t.pop="pop",t.push="push"})(ji||(ji={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function $0(t){if(!t)if(gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),P0(t)}const B0=/^[^#]+#/;function V0(t,e){return t.replace(B0,"#")+e}function j0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Lc=()=>({left:window.pageXOffset,top:window.pageYOffset});function q0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=j0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function up(t,e){return(history.state?history.state.position-e:-1)+t}const Cu=new Map;function H0(t,e){Cu.set(t,e)}function z0(t){const e=Cu.get(t);return Cu.delete(t),e}let K0=()=>location.protocol+"//"+location.host;function my(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),cp(c,"")}return cp(n,t)+s+r}function G0(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=my(t,location),g=n.value,v=e.value;let E=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}E=v?d.position-v.position:0}else s(p);r.forEach(I=>{I(n.value,g,{delta:E,type:ji.pop,direction:E?E>0?Ai.forward:Ai.back:Ai.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ke({},d.state,{scroll:Lc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function hp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Lc():null}}function W0(t){const{history:e,location:n}=window,s={value:my(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:K0()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ke({},e.state,hp(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ke({},r.value,e.state,{forward:c,scroll:Lc()});i(u.current,u,!0);const h=ke({},hp(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Z0(t){t=$0(t);const e=W0(t),n=G0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ke({location:"",base:t,go:s,createHref:V0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Q0(t){return typeof t=="string"||t&&typeof t=="object"}function gy(t){return typeof t=="string"||typeof t=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yy=Symbol("");var dp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dp||(dp={}));function Fr(t,e){return ke(new Error,{type:t,[yy]:!0},e)}function bn(t,e){return t instanceof Error&&yy in t&&(e==null||!!(t.type&e))}const fp="[^/]+?",Y0={sensitive:!1,strict:!1,start:!0,end:!0},X0=/[.+*?^${}()[\]/\\]/g;function J0(t,e){const n=ke({},Y0,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(X0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:E,regexp:I}=d;i.push({name:g,repeatable:v,optional:E});const S=I||fp;if(S!==fp){p+=10;try{new RegExp(`(${S})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+F.message)}}let D=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(D=E&&l.length<2?`(?:/${D})`:"/"+D),E&&(D+="?"),r+=D,p+=20,E&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:E}=p,I=g in l?l[g]:"";if(Qt(I)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Qt(I)?I.join("/"):I;if(!S)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function eI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function tI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=eI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(pp(s))return 1;if(pp(r))return-1}return r.length-s.length}function pp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nI={type:0,value:""},sI=/[a-zA-Z0-9_]/;function rI(t){if(!t)return[[]];if(t==="/")return[[nI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:sI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function iI(t,e,n){const s=J0(rI(t.path),n),r=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function oI(t,e){const n=[],s=new Map;e=yp({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,g=aI(u);g.aliasOf=d&&d.record;const v=yp(e,u),E=[g];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of D)E.push(ke({},g,{components:d?d.record.components:g.components,path:F,aliasOf:d?d.record:g}))}let I,S;for(const D of E){const{path:F}=D;if(h&&F[0]!=="/"){const k=h.record.path,A=k[k.length-1]==="/"?"":"/";D.path=h.record.path+(F&&A+F)}if(I=iI(D,h,v),d?d.alias.push(I):(S=S||I,S!==I&&S.alias.push(I),p&&u.name&&!gp(I)&&o(u.name)),g.children){const k=g.children;for(let A=0;A<k.length;A++)i(k[A],I,d&&d.children[A])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&c(I)}return S?()=>{o(S)}:Ci}function o(u){if(gy(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&tI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!vy(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gp(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},g,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Fr(1,{location:u});v=d.record.name,p=ke(mp(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&mp(u.params,d.keys.map(S=>S.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(S=>S.re.test(g)),d&&(p=d.parse(g),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw Fr(1,{location:u,currentLocation:h});v=d.record.name,p=ke({},h.params,u.params),g=d.stringify(p)}const E=[];let I=d;for(;I;)E.unshift(I.record),I=I.parent;return{name:v,path:g,params:p,matched:E,meta:lI(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function mp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function aI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lI(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function yp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function vy(t,e){return e.children.some(n=>n===t||vy(t,n))}const _y=/#/g,uI=/&/g,hI=/\//g,dI=/=/g,fI=/\?/g,wy=/\+/g,pI=/%5B/g,mI=/%5D/g,by=/%5E/g,gI=/%60/g,Ey=/%7B/g,yI=/%7C/g,Ty=/%7D/g,vI=/%20/g;function Wh(t){return encodeURI(""+t).replace(yI,"|").replace(pI,"[").replace(mI,"]")}function _I(t){return Wh(t).replace(Ey,"{").replace(Ty,"}").replace(by,"^")}function Au(t){return Wh(t).replace(wy,"%2B").replace(vI,"+").replace(_y,"%23").replace(uI,"%26").replace(gI,"`").replace(Ey,"{").replace(Ty,"}").replace(by,"^")}function wI(t){return Au(t).replace(dI,"%3D")}function bI(t){return Wh(t).replace(_y,"%23").replace(fI,"%3F")}function EI(t){return t==null?"":bI(t).replace(hI,"%2F")}function Ma(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(wy," "),o=i.indexOf("="),a=Ma(o<0?i:i.slice(0,o)),c=o<0?null:Ma(i.slice(o+1));if(a in e){let l=e[a];Qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function vp(t){let e="";for(let n in t){const s=t[n];if(n=wI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(s)?s.map(i=>i&&Au(i)):[s&&Au(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function II(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Qt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const SI=Symbol(""),_p=Symbol(""),Zh=Symbol(""),Iy=Symbol(""),ku=Symbol("");function li(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Fr(4,{from:n,to:e})):h instanceof Error?a(h):Q0(h)?a(Fr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ul(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CI(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Zn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=O0(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Zn(d,n,s,i,o)()}))}}return r}function CI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wp(t){const e=cn(Zh),n=cn(Iy),s=xe(()=>e.resolve(Bs(t.to))),r=xe(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ur.bind(null,u));if(d>-1)return d;const p=bp(c[l-2]);return l>1&&bp(u)===p&&h[h.length-1].path!==p?h.findIndex(Ur.bind(null,c[l-2])):d}),i=xe(()=>r.value>-1&&xI(n.params,s.value.params)),o=xe(()=>r.value>-1&&r.value===n.matched.length-1&&py(n.params,s.value.params));function a(c={}){return RI(c)?e[Bs(t.replace)?"replace":"push"](Bs(t.to)).catch(Ci):Promise.resolve()}return{route:s,href:xe(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const AI=ar({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wp,setup(t,{slots:e}){const n=Jt(wp(t)),{options:s}=cn(Zh),r=xe(()=>({[Ep(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ep(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:br("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),kI=AI;function RI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Qt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ep=(t,e,n)=>t??e??n,NI=ar({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=cn(ku),r=xe(()=>t.route||s.value),i=cn(_p,0),o=xe(()=>{let l=Bs(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=xe(()=>r.value.matched[o.value]);ha(_p,xe(()=>o.value+1)),ha(SI,a),ha(ku,r);const c=Tn();return wi(()=>[c.value,a.value,t.name],([l,u,h],[d,p,g])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Ur(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Tp(n.default,{Component:d,route:l});const p=h.props[u],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,E=br(d,ke({},g,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Tp(n.default,{Component:E,route:l})||E}}});function Tp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sy=NI;function OI(t){const e=oI(t.routes,t),n=t.parseQuery||TI,s=t.stringifyQuery||vp,r=t.history,i=li(),o=li(),a=li(),c=xE(qn);let l=qn;gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ll.bind(null,b=>""+b),h=Ll.bind(null,EI),d=Ll.bind(null,Ma);function p(b,V){let M,K;return gy(b)?(M=e.getRecordMatcher(b),K=V):K=b,e.addRoute(K,M)}function g(b){const V=e.getRecordMatcher(b);V&&e.removeRoute(V)}function v(){return e.getRoutes().map(b=>b.record)}function E(b){return!!e.getRecordMatcher(b)}function I(b,V){if(V=ke({},V||c.value),typeof b=="string"){const m=Ml(n,b,V.path),y=e.resolve({path:m.path},V),T=r.createHref(m.fullPath);return ke(m,y,{params:d(y.params),hash:Ma(m.hash),redirectedFrom:void 0,href:T})}let M;if("path"in b)M=ke({},b,{path:Ml(n,b.path,V.path).path});else{const m=ke({},b.params);for(const y in m)m[y]==null&&delete m[y];M=ke({},b,{params:h(m)}),V.params=h(V.params)}const K=e.resolve(M,V),Ie=b.hash||"";K.params=u(d(K.params));const Pe=L0(s,ke({},b,{hash:_I(Ie),path:K.path})),f=r.createHref(Pe);return ke({fullPath:Pe,hash:Ie,query:s===vp?II(b.query):b.query||{}},K,{redirectedFrom:void 0,href:f})}function S(b){return typeof b=="string"?Ml(n,b,c.value.path):ke({},b)}function D(b,V){if(l!==b)return Fr(8,{from:V,to:b})}function F(b){return X(b)}function k(b){return F(ke(S(b),{replace:!0}))}function A(b){const V=b.matched[b.matched.length-1];if(V&&V.redirect){const{redirect:M}=V;let K=typeof M=="function"?M(b):M;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=S(K):{path:K},K.params={}),ke({query:b.query,hash:b.hash,params:"path"in K?{}:b.params},K)}}function X(b,V){const M=l=I(b),K=c.value,Ie=b.state,Pe=b.force,f=b.replace===!0,m=A(M);if(m)return X(ke(S(m),{state:typeof m=="object"?ke({},Ie,m.state):Ie,force:Pe,replace:f}),V||M);const y=M;y.redirectedFrom=V;let T;return!Pe&&M0(s,K,M)&&(T=Fr(16,{to:y,from:K}),tn(K,K,!0,!1)),(T?Promise.resolve(T):he(y,K)).catch(w=>bn(w)?bn(w,2)?w:Vn(w):Te(w,y,K)).then(w=>{if(w){if(bn(w,2))return X(ke({replace:f},S(w.to),{state:typeof w.to=="object"?ke({},Ie,w.to.state):Ie,force:Pe}),V||y)}else w=$e(y,K,!0,f,Ie);return Ae(y,K,w),w})}function q(b,V){const M=D(b,V);return M?Promise.reject(M):Promise.resolve()}function H(b){const V=fr.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(b):b()}function he(b,V){let M;const[K,Ie,Pe]=DI(b,V);M=Ul(K.reverse(),"beforeRouteLeave",b,V);for(const m of K)m.leaveGuards.forEach(y=>{M.push(Zn(y,b,V))});const f=q.bind(null,b,V);return M.push(f),ot(M).then(()=>{M=[];for(const m of i.list())M.push(Zn(m,b,V));return M.push(f),ot(M)}).then(()=>{M=Ul(Ie,"beforeRouteUpdate",b,V);for(const m of Ie)m.updateGuards.forEach(y=>{M.push(Zn(y,b,V))});return M.push(f),ot(M)}).then(()=>{M=[];for(const m of Pe)if(m.beforeEnter)if(Qt(m.beforeEnter))for(const y of m.beforeEnter)M.push(Zn(y,b,V));else M.push(Zn(m.beforeEnter,b,V));return M.push(f),ot(M)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),M=Ul(Pe,"beforeRouteEnter",b,V),M.push(f),ot(M))).then(()=>{M=[];for(const m of o.list())M.push(Zn(m,b,V));return M.push(f),ot(M)}).catch(m=>bn(m,8)?m:Promise.reject(m))}function Ae(b,V,M){a.list().forEach(K=>H(()=>K(b,V,M)))}function $e(b,V,M,K,Ie){const Pe=D(b,V);if(Pe)return Pe;const f=V===qn,m=gr?history.state:{};M&&(K||f?r.replace(b.fullPath,ke({scroll:f&&m&&m.scroll},Ie)):r.push(b.fullPath,Ie)),c.value=b,tn(b,V,M,f),Vn()}let et;function At(){et||(et=r.listen((b,V,M)=>{if(!zo.listening)return;const K=I(b),Ie=A(K);if(Ie){X(ke(Ie,{replace:!0}),K).catch(Ci);return}l=K;const Pe=c.value;gr&&H0(up(Pe.fullPath,M.delta),Lc()),he(K,Pe).catch(f=>bn(f,12)?f:bn(f,2)?(X(f.to,K).then(m=>{bn(m,20)&&!M.delta&&M.type===ji.pop&&r.go(-1,!1)}).catch(Ci),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Te(f,K,Pe))).then(f=>{f=f||$e(K,Pe,!1),f&&(M.delta&&!bn(f,8)?r.go(-M.delta,!1):M.type===ji.pop&&bn(f,20)&&r.go(-1,!1)),Ae(K,Pe,f)}).catch(Ci)}))}let tt=li(),fe=li(),we;function Te(b,V,M){Vn(b);const K=fe.list();return K.length?K.forEach(Ie=>Ie(b,V,M)):console.error(b),Promise.reject(b)}function wn(){return we&&c.value!==qn?Promise.resolve():new Promise((b,V)=>{tt.add([b,V])})}function Vn(b){return we||(we=!b,At(),tt.list().forEach(([V,M])=>b?M(b):V()),tt.reset()),b}function tn(b,V,M,K){const{scrollBehavior:Ie}=t;if(!gr||!Ie)return Promise.resolve();const Pe=!M&&z0(up(b.fullPath,0))||(K||!M)&&history.state&&history.state.scroll||null;return ei().then(()=>Ie(b,V,Pe)).then(f=>f&&q0(f)).catch(f=>Te(f,b,V))}const Tt=b=>r.go(b);let dr;const fr=new Set,zo={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:E,getRoutes:v,resolve:I,options:t,push:F,replace:k,go:Tt,back:()=>Tt(-1),forward:()=>Tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:wn,install(b){const V=this;b.component("RouterLink",kI),b.component("RouterView",Sy),b.config.globalProperties.$router=V,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Bs(c)}),gr&&!dr&&c.value===qn&&(dr=!0,F(r.location).catch(Ie=>{}));const M={};for(const Ie in qn)Object.defineProperty(M,Ie,{get:()=>c.value[Ie],enumerable:!0});b.provide(Zh,V),b.provide(Iy,Ng(M)),b.provide(ku,c);const K=b.unmount;fr.add(b),b.unmount=function(){fr.delete(b),fr.size<1&&(l=qn,et&&et(),et=null,c.value=qn,dr=!1,we=!1),K()}}};function ot(b){return b.reduce((V,M)=>V.then(()=>H(M)),Promise.resolve())}return zo}function DI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ur(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ur(l,c))||r.push(c))}return[n,s,r]}const PI=t=>(VE("data-v-41ff21a8"),t=t(),jE(),t),LI=PI(()=>Kh("div",{id:"modal"},null,-1)),MI=ar({__name:"App",setup(t){return(e,n)=>(xc(),$T(xt,null,[ge(Bs(Sy)),LI],64))}}),UI=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},FI=UI(MI,[["__scopeId","data-v-41ff21a8"]]),$I="modulepreload",BI=function(t){return"/"+t},Ip={},Jo=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");r=Promise.all(n.map(o=>{if(o=BI(o),o in Ip)return;Ip[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!s)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":$I,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Sp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},VI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ay={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jI=function(t){const e=Cy(t);return Ay.encodeByteArray(e,!0)},Ua=function(t){return jI(t).replace(/\./g,"")},ky=function(t){try{return Ay.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function HI(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ry(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KI(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ny(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function GI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function WI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZI=()=>WI().__FIREBASE_DEFAULTS__,QI=()=>{if(typeof process>"u"||typeof Sp>"u")return;const t=Sp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ky(t[1]);return e&&JSON.parse(e)},Qh=()=>{try{return ZI()||QI()||YI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oy=t=>{var e,n;return(n=(e=Qh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dy=t=>{const e=Oy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},XI=()=>{var t;return(t=Qh())===null||t===void 0?void 0:t.config},Py=t=>{var e;return(e=Qh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ly(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ua(JSON.stringify(n)),Ua(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="FirebaseError";class jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=eS,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?tS(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new jt(r,a,s)}}function tS(t,e){return t.replace(nS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const nS=/\{\$([^}]+)}/g;function sS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Cp(i)&&Cp(o)){if(!qi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Cp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function rS(t,e){const n=new iS(t,e);return n.subscribe.bind(n)}class iS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");oS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Fl),r.error===void 0&&(r.error=Fl),r.complete===void 0&&(r.complete=Fl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
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
 */const aS=1e3,cS=2,lS=4*60*60*1e3,uS=.5;function Ap(t,e=aS,n=cS){const s=e*Math.pow(n,t),r=Math.round(uS*s*(Math.random()-.5)*2);return Math.min(lS,s+r)}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const As="[DEFAULT]";/**
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
 */class hS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new JI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fS(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dS(t){return t===As?void 0:t}function fS(t){return t.instantiationMode==="EAGER"}/**
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
 */class pS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const mS={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},gS=be.INFO,yS={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},vS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=yS[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=gS,this._logHandler=vS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const _S=(t,e)=>e.some(n=>t instanceof n);let kp,Rp;function wS(){return kp||(kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bS(){return Rp||(Rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const My=new WeakMap,Ru=new WeakMap,Uy=new WeakMap,$l=new WeakMap,Yh=new WeakMap;function ES(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(os(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&My.set(n,t)}).catch(()=>{}),Yh.set(e,t),e}function TS(t){if(Ru.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ru.set(t,e)}let xu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return os(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IS(t){xu=t(xu)}function SS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bl(this),e,...n);return Uy.set(s,e.sort?e.sort():[e]),os(s)}:bS().includes(t)?function(...e){return t.apply(Bl(this),e),os(My.get(this))}:function(...e){return os(t.apply(Bl(this),e))}}function CS(t){return typeof t=="function"?SS(t):(t instanceof IDBTransaction&&TS(t),_S(t,wS())?new Proxy(t,xu):t)}function os(t){if(t instanceof IDBRequest)return ES(t);if($l.has(t))return $l.get(t);const e=CS(t);return e!==t&&($l.set(t,e),Yh.set(e,t)),e}const Bl=t=>Yh.get(t);function Fy(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=os(o);return s&&o.addEventListener("upgradeneeded",c=>{s(os(o.result),c.oldVersion,c.newVersion,os(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const AS=["get","getKey","getAll","getAllKeys","count"],kS=["put","add","delete","clear"],Vl=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=kS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||AS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Vl.set(e,i),i}IS(t=>({...t,get:(e,n,s)=>xp(e,n)||t.get(e,n,s),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
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
 */class RS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nu="@firebase/app",Np="0.9.0";/**
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
 */const Zs=new Mc("@firebase/app"),NS="@firebase/app-compat",OS="@firebase/analytics-compat",DS="@firebase/analytics",PS="@firebase/app-check-compat",LS="@firebase/app-check",MS="@firebase/auth",US="@firebase/auth-compat",FS="@firebase/database",$S="@firebase/database-compat",BS="@firebase/functions",VS="@firebase/functions-compat",jS="@firebase/installations",qS="@firebase/installations-compat",HS="@firebase/messaging",zS="@firebase/messaging-compat",KS="@firebase/performance",GS="@firebase/performance-compat",WS="@firebase/remote-config",ZS="@firebase/remote-config-compat",QS="@firebase/storage",YS="@firebase/storage-compat",XS="@firebase/firestore",JS="@firebase/firestore-compat",eC="firebase",tC="9.15.0";/**
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
 */const Ou="[DEFAULT]",nC={[Nu]:"fire-core",[NS]:"fire-core-compat",[DS]:"fire-analytics",[OS]:"fire-analytics-compat",[LS]:"fire-app-check",[PS]:"fire-app-check-compat",[MS]:"fire-auth",[US]:"fire-auth-compat",[FS]:"fire-rtdb",[$S]:"fire-rtdb-compat",[BS]:"fire-fn",[VS]:"fire-fn-compat",[jS]:"fire-iid",[qS]:"fire-iid-compat",[HS]:"fire-fcm",[zS]:"fire-fcm-compat",[KS]:"fire-perf",[GS]:"fire-perf-compat",[WS]:"fire-rc",[ZS]:"fire-rc-compat",[QS]:"fire-gcs",[YS]:"fire-gcs-compat",[XS]:"fire-fst",[JS]:"fire-fst-compat","fire-js":"fire-js",[eC]:"fire-js-all"};/**
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
 */const Fa=new Map,Du=new Map;function sC(t,e){try{t.container.addComponent(e)}catch(n){Zs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Du.has(e))return Zs.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,t);for(const n of Fa.values())sC(n,t);return!0}function vs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},as=new cr("app","Firebase",rC);/**
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
 */class iC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=tC;function $y(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw as.create("bad-app-name",{appName:String(r)});if(n||(n=XI()),!n)throw as.create("no-options");const i=Fa.get(r);if(i){if(qi(n,i.options)&&qi(s,i.config))return i;throw as.create("duplicate-app",{appName:r})}const o=new pS(r);for(const c of Du.values())o.addComponent(c);const a=new iC(n,s,o);return Fa.set(r,a),a}function Uc(t=Ou){const e=Fa.get(t);if(!e&&t===Ou)return $y();if(!e)throw as.create("no-app",{appName:t});return e}function St(t,e,n){var s;let r=(s=nC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zs.warn(a.join(" "));return}Yt(new Vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const oC="firebase-heartbeat-database",aC=1,Hi="firebase-heartbeat-store";let jl=null;function By(){return jl||(jl=Fy(oC,aC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hi)}}}).catch(t=>{throw as.create("idb-open",{originalErrorMessage:t.message})})),jl}async function cC(t){try{return(await By()).transaction(Hi).objectStore(Hi).get(Vy(t))}catch(e){if(e instanceof jt)Zs.warn(e.message);else{const n=as.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zs.warn(n.message)}}}async function Op(t,e){try{const s=(await By()).transaction(Hi,"readwrite");return await s.objectStore(Hi).put(e,Vy(t)),s.done}catch(n){if(n instanceof jt)Zs.warn(n.message);else{const s=as.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zs.warn(s.message)}}}function Vy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lC=1024,uC=30*24*60*60*1e3;class hC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=uC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dp(),{heartbeatsToSend:n,unsentEntries:s}=dC(this._heartbeatsCache.heartbeats),r=Ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Dp(){return new Date().toISOString().substring(0,10)}function dC(t,e=lC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Pp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xy()?Ny().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pp(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pC(t){Yt(new Vt("platform-logger",e=>new RS(e),"PRIVATE")),Yt(new Vt("heartbeat",e=>new hC(e),"PRIVATE")),St(Nu,Np,t),St(Nu,Np,"esm2017"),St("fire-js","")}pC("");var mC="firebase",gC="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(mC,gC,"app");function Xh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function jy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yC=jy,qy=new cr("auth","Firebase",jy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Mc("@firebase/auth");function fa(t,...e){Lp.logLevel<=be.ERROR&&Lp.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw Jh(t,...e)}function ln(t,...e){return Jh(t,...e)}function Hy(t,e,n){const s=Object.assign(Object.assign({},yC()),{[e]:n});return new cr("auth","Firebase",s).create(e,{appName:t.name})}function vC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&pn(t,"argument-error"),Hy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return qy.create(t,...e)}function ne(t,e,...n){if(!t)throw Jh(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fa(e),new Error(e)}function Nn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Map;function Sn(t){Nn(t instanceof Function,"Expected a class definition");let e=Mp.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t,e){const n=vs(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(qi(i,e??{}))return r;pn(r,"already-initialized")}return n.initialize({options:e})}function wC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bC(){return Up()==="http:"||Up()==="https:"}function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bC()||Ry()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=qI()||zI()}get(){return EC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=new Eo(3e4,6e4);function CC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fc(t,e,n,s,r={}){return Ky(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=bo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zy.fetch()(Gy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ky(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},IC),e);try{const r=new kC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ea(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ea(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hy(t,u,l);pn(t,u)}}catch(r){if(r instanceof jt)throw r;pn(t,"network-request-failed")}}async function AC(t,e,n,s,r={}){const i=await Fc(t,e,n,s,r);return"mfaPendingCredential"in i&&pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Gy(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ed(t.config,r):`${t.config.apiScheme}://${r}`}class kC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ln(this.auth,"network-request-failed")),SC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ea(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=ln(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){return Fc(t,"POST","/v1/accounts:delete",e)}async function xC(t,e){return Fc(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NC(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),r=td(s);ne(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ki(ql(r.auth_time)),issuedAtTime:ki(ql(r.iat)),expirationTime:ki(ql(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ql(t){return Number(t)*1e3}function td(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fa("JWT malformed, contained fewer than 3 sections"),null;try{const r=ky(n);return r?JSON.parse(r):(fa("Failed to decode base64 JWT payload"),null)}catch(r){return fa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function OC(t){const e=td(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof jt&&DC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function DC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $a(t){var e;const n=t.auth,s=await t.getIdToken(),r=await zi(t,xC(n,{idToken:s}));ne(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?UC(i.providerUserInfo):[],a=MC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LC(t){const e=Ue(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function UC(t){return t.map(e=>{var{providerId:n}=e,s=Xh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){const n=await Ky(t,{},async()=>{const s=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Gy(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await FC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ki;return s&&(ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ne(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Xh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zi(this,RC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:F,isAnonymous:k,providerData:A,stsTokenManager:X}=n;ne(D&&X,e,"internal-error");const q=Ki.fromJSON(this.name,X);ne(typeof D=="string",e,"internal-error"),Hn(h,e.name),Hn(d,e.name),ne(typeof F=="boolean",e,"internal-error"),ne(typeof k=="boolean",e,"internal-error"),Hn(p,e.name),Hn(g,e.name),Hn(v,e.name),Hn(E,e.name),Hn(I,e.name),Hn(S,e.name);const H=new Vs({uid:D,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:q,createdAt:I,lastLoginAt:S});return A&&Array.isArray(A)&&(H.providerData=A.map(he=>Object.assign({},he))),E&&(H._redirectEventId=E),H}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ki;r.updateFromServerResponse(n);const i=new Vs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $a(i),i}}/**
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
 */class Zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zy.type="NONE";const Fp=Zy;/**
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
 */function pa(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=pa(this.userKey,r.apiKey,i),this.fullPersistenceKey=pa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rr(Sn(Fp),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Sn(Fp);const o=pa(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Vs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Rr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(nd(e))return"Safari";if((e.includes("chrome/")||Yy(e))&&!e.includes("edge/"))return"Chrome";if(Jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qy(t=dt()){return/firefox\//i.test(t)}function nd(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yy(t=dt()){return/crios\//i.test(t)}function Xy(t=dt()){return/iemobile/i.test(t)}function Jy(t=dt()){return/android/i.test(t)}function ev(t=dt()){return/blackberry/i.test(t)}function tv(t=dt()){return/webos/i.test(t)}function $c(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $C(t=dt()){var e;return $c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BC(){return KI()&&document.documentMode===10}function nv(t=dt()){return $c(t)||Jy(t)||tv(t)||ev(t)||/windows phone/i.test(t)||Xy(t)}function VC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t,e=[]){let n;switch(t){case"Browser":n=$p(dt());break;case"Worker":n=`${$p(dt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${s}`}/**
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
 */class jC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.beforeStateQueue=new jC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Bc(t){return Ue(t)}class Bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=rS(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function HC(t,e,n){const s=Bc(t);ne(s._canInitEmulator,s,"emulator-config-failed"),ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=rv(e),{host:o,port:a}=zC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||KC()}function rv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zC(t){const e=rv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Vp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t,e){return AC(t,"POST","/v1/accounts:signInWithIdp",CC(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="http://localhost";class Qs extends iv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Xh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,xr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:GC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class To extends sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends To{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends To{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends To{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return es.credential(n,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Vs._fromIdTokenResponse(e,s,r),o=jp(s);return new $r({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=jp(s);return new $r({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends jt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ba(e,n,s,r)}}function ov(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ba._fromErrorAndOperation(t,i,e,s):i})}async function WC(t,e,n=!1){const s=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",s)}/**
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
 */async function ZC(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await zi(t,ov(s,r,e,t),n);ne(i.idToken,s,"internal-error");const o=td(i.idToken);ne(o,s,"internal-error");const{sub:a}=o;return ne(t.uid===a,s,"user-mismatch"),$r._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e,n=!1){const s="signIn",r=await ov(t,s,e),i=await $r._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function YC(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function XC(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function JC(t,e,n,s){return Ue(t).onAuthStateChanged(e,n,s)}function sM(t){return Ue(t).signOut()}const Va="__sak";/**
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
 */class av{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Va,"1"),this.storage.removeItem(Va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(){const t=dt();return nd(t)||$c(t)}const tA=1e3,nA=10;class cv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eA()&&VC(),this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);BC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,nA):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const sA=cv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lv.type="SESSION";const uv=lv;/**
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
 */function rA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Vc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await rA(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=rd("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function oA(t){un().location.href=t}/**
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
 */function hv(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function aA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lA(){return hv()?self:null}/**
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
 */const dv="firebaseLocalStorageDb",uA=1,ja="firebaseLocalStorage",fv="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function hA(){const t=indexedDB.deleteDatabase(dv);return new Io(t).toPromise()}function Lu(){const t=indexedDB.open(dv,uA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ja,{keyPath:fv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ja)?e(s):(s.close(),await hA(),e(await Lu()))})})}async function qp(t,e,n){const s=jc(t,!0).put({[fv]:e,value:n});return new Io(s).toPromise()}async function dA(t,e){const n=jc(t,!1).get(e),s=await new Io(n).toPromise();return s===void 0?null:s.value}function Hp(t,e){const n=jc(t,!0).delete(e);return new Io(n).toPromise()}const fA=800,pA=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(lA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aA(),!this.activeServiceWorker)return;this.sender=new iA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lu();return await qp(e,Va,"1"),await Hp(e,Va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>dA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=jc(r,!1).getAll();return new Io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const mA=pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yA(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=ln("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",gA().appendChild(s)})}function vA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Eo(3e4,6e4);/**
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
 */function mv(t,e){return e?Sn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class id extends iv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _A(t){return QC(t.auth,new id(t),t.bypassAuthState)}function wA(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),ZC(n,new id(t),t.bypassAuthState)}async function bA(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),WC(n,new id(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _A;case"linkViaPopup":case"linkViaRedirect":return bA;case"reauthViaPopup":case"reauthViaRedirect":return wA;default:pn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new Eo(2e3,1e4);async function rM(t,e,n){const s=Bc(t);vC(t,e,sd);const r=mv(s,n);return new Os(s,"signInViaPopup",e,r).executeNotNull()}class Os extends gv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,EA.get())};e()}}Os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="pendingRedirect",ma=new Map;class IA extends gv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const s=await SA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SA(t,e){const n=kA(e),s=AA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function CA(t,e){ma.set(t._key(),e)}function AA(t){return Sn(t._redirectPersistence)}function kA(t){return pa(TA,t.config.apiKey,t.name)}async function RA(t,e,n=!1){const s=Bc(t),r=mv(s,e),o=await new IA(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=10*60*1e3;class NA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!yv(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xA&&this.cachedEventUids.clear(),this.cachedEventUids.has(zp(e))}saveEventToCache(e){this.cachedEventUids.add(zp(e)),this.lastProcessedEventTime=Date.now()}}function zp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e={}){return Fc(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LA=/^https?/;async function MA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DA(t);for(const n of e)try{if(UA(n))return}catch{}pn(t,"unauthorized-domain")}function UA(t){const e=Pu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!LA.test(n))return!1;if(PA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const FA=new Eo(3e4,6e4);function Kp(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $A(t){return new Promise((e,n)=>{var s,r,i;function o(){Kp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kp(),n(ln(t,"network-request-failed"))},timeout:FA.get()})}if(!((r=(s=un().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const a=vA("iframefcb");return un()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},yA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ga=null,e})}let ga=null;function BA(t){return ga=ga||$A(t),ga}/**
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
 */const VA=new Eo(5e3,15e3),jA="__/auth/iframe",qA="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KA(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ed(e,qA):`https://${t.config.authDomain}/${jA}`,s={apiKey:e.apiKey,appName:t.name,v:ti},r=zA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${bo(s).slice(1)}`}async function GA(t){const e=await BA(t),n=un().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:KA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=un().setTimeout(()=>{i(o)},VA.get());function c(){un().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const WA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZA=500,QA=600,YA="_blank",XA="http://localhost";class Gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JA(t,e,n,s=ZA,r=QA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=dt().toLowerCase();n&&(a=Yy(l)?YA:n),Qy(l)&&(e=e||XA,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if($C(l)&&a!=="_self")return ek(e||"",a),new Gp(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new Gp(h)}function ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const tk="__/auth/handler",nk="emulator/auth/handler";function Wp(t,e,n,s,r,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ti,eventId:r};if(e instanceof sd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof To){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${sk(t)}?${bo(a).slice(1)}`}function sk({config:t}){return t.emulator?ed(t,nk):`https://${t.authDomain}/${tk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="webStorageSupport";class rk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=RA,this._overrideRedirectResult=CA}async _openPopup(e,n,s,r){var i;Nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wp(e,n,s,Pu(),r);return JA(e,o,rd())}async _openRedirect(e,n,s,r){return await this._originValidation(e),oA(Wp(e,n,s,Pu(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Nn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GA(e),s=new NA(e);return n.register("authEvent",r=>(ne(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Hl];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nv()||nd()||$c()}}const ik=rk;var Zp="@firebase/auth",Qp="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ck(t){Yt(new Vt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{ne(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ne(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sv(t)},u=new qC(a,c,l);return wC(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yt(new Vt("auth-internal",e=>{const n=Bc(e.getProvider("auth").getImmediate());return(s=>new ok(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(Zp,Qp,ak(t)),St(Zp,Qp,"esm2017")}/**
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
 */const lk=5*60,uk=Py("authIdTokenMaxAge")||lk;let Yp=null;const hk=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>uk)return;const r=n==null?void 0:n.token;Yp!==r&&(Yp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function dk(t=Uc()){const e=vs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_C(t,{popupRedirectResolver:ik,persistence:[mA,sA,uv]}),s=Py("authTokenSyncURL");if(s){const i=hk(s);XC(n,i,()=>i(n.currentUser)),YC(n,o=>i(o))}const r=Oy("auth");return r&&HC(n,`http://${r}`),n}ck("Browser");const vv="@firebase/installations",od="0.6.0";/**
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
 */const _v=1e4,wv=`w:${od}`,bv="FIS_v2",fk="https://firebaseinstallations.googleapis.com/v1",pk=60*60*1e3,mk="installations",gk="Installations";/**
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
 */const yk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ys=new cr(mk,gk,yk);function Ev(t){return t instanceof jt&&t.code.includes("request-failed")}/**
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
 */function Tv({projectId:t}){return`${fk}/projects/${t}/installations`}function Iv(t){return{token:t.token,requestStatus:2,expiresIn:_k(t.expiresIn),creationTime:Date.now()}}async function Sv(t,e){const s=(await e.json()).error;return Ys.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Cv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vk(t,{refreshToken:e}){const n=Cv(t);return n.append("Authorization",wk(e)),n}async function Av(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _k(t){return Number(t.replace("s","000"))}function wk(t){return`${bv} ${t}`}/**
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
 */async function bk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Tv(t),r=Cv(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:bv,appId:t.appId,sdkVersion:wv},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Av(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Iv(l.authToken)}}else throw await Sv("Create Installation",c)}/**
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
 */function kv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Ek(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tk=/^[cdef][\w-]{21}$/,Mu="";function Ik(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Sk(t);return Tk.test(n)?n:Mu}catch{return Mu}}function Sk(t){return Ek(t).substr(0,22)}/**
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
 */function qc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Rv=new Map;function xv(t,e){const n=qc(t);Nv(n,e),Ck(n,e)}function Nv(t,e){const n=Rv.get(t);if(n)for(const s of n)s(e)}function Ck(t,e){const n=Ak();n&&n.postMessage({key:t,fid:e}),kk()}let Ds=null;function Ak(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=t=>{Nv(t.data.key,t.data.fid)}),Ds}function kk(){Rv.size===0&&Ds&&(Ds.close(),Ds=null)}/**
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
 */const Rk="firebase-installations-database",xk=1,Xs="firebase-installations-store";let zl=null;function ad(){return zl||(zl=Fy(Rk,xk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}})),zl}async function qa(t,e){const n=qc(t),r=(await ad()).transaction(Xs,"readwrite"),i=r.objectStore(Xs),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&xv(t,e.fid),e}async function Ov(t){const e=qc(t),s=(await ad()).transaction(Xs,"readwrite");await s.objectStore(Xs).delete(e),await s.done}async function Hc(t,e){const n=qc(t),r=(await ad()).transaction(Xs,"readwrite"),i=r.objectStore(Xs),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&xv(t,a.fid),a}/**
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
 */async function cd(t){let e;const n=await Hc(t.appConfig,s=>{const r=Nk(s),i=Ok(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Mu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Nk(t){const e=t||{fid:Ik(),registrationStatus:0};return Dv(e)}function Ok(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ys.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Dk(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Pk(t)}:{installationEntry:e}}async function Dk(t,e){try{const n=await bk(t,e);return qa(t.appConfig,n)}catch(n){throw Ev(n)&&n.customData.serverCode===409?await Ov(t.appConfig):await qa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Pk(t){let e=await Xp(t.appConfig);for(;e.registrationStatus===1;)await kv(100),e=await Xp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await cd(t);return s||n}return e}function Xp(t){return Hc(t,e=>{if(!e)throw Ys.create("installation-not-found");return Dv(e)})}function Dv(t){return Lk(t)?{fid:t.fid,registrationStatus:0}:t}function Lk(t){return t.registrationStatus===1&&t.registrationTime+_v<Date.now()}/**
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
 */async function Mk({appConfig:t,heartbeatServiceProvider:e},n){const s=Uk(t,n),r=vk(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:wv,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Av(()=>fetch(s,a));if(c.ok){const l=await c.json();return Iv(l)}else throw await Sv("Generate Auth Token",c)}function Uk(t,{fid:e}){return`${Tv(t)}/${e}/authTokens:generate`}/**
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
 */async function ld(t,e=!1){let n;const s=await Hc(t.appConfig,i=>{if(!Pv(i))throw Ys.create("not-registered");const o=i.authToken;if(!e&&Bk(o))return i;if(o.requestStatus===1)return n=Fk(t,e),i;{if(!navigator.onLine)throw Ys.create("app-offline");const a=jk(i);return n=$k(t,a),a}});return n?await n:s.authToken}async function Fk(t,e){let n=await Jp(t.appConfig);for(;n.authToken.requestStatus===1;)await kv(100),n=await Jp(t.appConfig);const s=n.authToken;return s.requestStatus===0?ld(t,e):s}function Jp(t){return Hc(t,e=>{if(!Pv(e))throw Ys.create("not-registered");const n=e.authToken;return qk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $k(t,e){try{const n=await Mk(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await qa(t.appConfig,s),n}catch(n){if(Ev(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ov(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qa(t.appConfig,s)}throw n}}function Pv(t){return t!==void 0&&t.registrationStatus===2}function Bk(t){return t.requestStatus===2&&!Vk(t)}function Vk(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pk}function jk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function qk(t){return t.requestStatus===1&&t.requestTime+_v<Date.now()}/**
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
 */async function Hk(t){const e=t,{installationEntry:n,registrationPromise:s}=await cd(e);return s?s.catch(console.error):ld(e).catch(console.error),n.fid}/**
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
 */async function zk(t,e=!1){const n=t;return await Kk(n),(await ld(n,e)).token}async function Kk(t){const{registrationPromise:e}=await cd(t);e&&await e}/**
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
 */function Gk(t){if(!t||!t.options)throw Kl("App Configuration");if(!t.name)throw Kl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kl(t){return Ys.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="installations",Wk="installations-internal",Zk=t=>{const e=t.getProvider("app").getImmediate(),n=Gk(e),s=vs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Qk=t=>{const e=t.getProvider("app").getImmediate(),n=vs(e,Lv).getImmediate();return{getId:()=>Hk(n),getToken:r=>zk(n,r)}};function Yk(){Yt(new Vt(Lv,Zk,"PUBLIC")),Yt(new Vt(Wk,Qk,"PRIVATE"))}Yk();St(vv,od);St(vv,od,"esm2017");/**
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
 */const Ha="analytics",Xk="firebase_id",Jk="origin",eR=60*1e3,tR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mv="https://www.googletagmanager.com/gtag/js";/**
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
 */const Dt=new Mc("@firebase/analytics");/**
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
 */function Uv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function nR(t,e){const n=document.createElement("script");n.src=`${Mv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function sR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function rR(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Uv(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Dt.error(a)}t("config",r,i)}async function iR(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Uv(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Dt.error(i)}}function oR(t,e,n,s){async function r(i,o,a){try{i==="event"?await iR(t,e,n,o,a):i==="config"?await rR(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Dt.error(c)}}return r}function aR(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=oR(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function cR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mv)&&n.src.includes(t))return n;return null}/**
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
 */const lR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},$t=new cr("analytics","Analytics",lR);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=30,hR=1e3;class dR{constructor(e={},n=hR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fv=new dR;function fR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function pR(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:fR(s)},i=tR.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function mR(t,e=Fv,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw $t.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new vR;return setTimeout(async()=>{a.abort()},n!==void 0?n:eR),$v({appId:s,apiKey:r,measurementId:i},o,a,e)}async function $v(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Fv){var i;const{appId:o,measurementId:a}=t;try{await gR(s,e)}catch(c){if(a)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await pR(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!yR(l)){if(r.deleteThrottleMetadata(o),a)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ap(n,r.intervalMillis,uR):Ap(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),Dt.debug(`Calling attemptFetch again in ${u} millis`),$v(t,h,s,r)}}function gR(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yR(t){if(!(t instanceof jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class vR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _R(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(){if(xy())try{await Ny()}catch(t){return Dt.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Dt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bR(t,e,n,s,r,i,o){var a;const c=mR(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Dt.error(p)),e.push(c);const l=wR().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);cR(i)||nR(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Jk]="firebase",d.update=!0,h!=null&&(d[Xk]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class ER{constructor(e){this.app=e}_delete(){return delete Ri[this.app.options.appId],Promise.resolve()}}let Ri={},em=[];const tm={};let Gl="dataLayer",TR="gtag",nm,Bv,sm=!1;function IR(){const t=[];if(Ry()&&t.push("This is a browser extension environment."),GI()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});Dt.warn(n.message)}}function SR(t,e,n){IR();const s=t.options.appId;if(!s)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(Ri[s]!=null)throw $t.create("already-exists",{id:s});if(!sm){sR(Gl);const{wrappedGtag:i,gtagCore:o}=aR(Ri,em,tm,Gl,TR);Bv=i,nm=o,sm=!0}return Ri[s]=bR(t,em,tm,e,nm,Gl,n),new ER(t)}function CR(t=Uc()){t=Ue(t);const e=vs(t,Ha);return e.isInitialized()?e.getImmediate():AR(t)}function AR(t,e={}){const n=vs(t,Ha);if(n.isInitialized()){const r=n.getImmediate();if(qi(e,n.getOptions()))return r;throw $t.create("already-initialized")}return n.initialize({options:e})}function kR(t,e,n,s){t=Ue(t),_R(Bv,Ri[t.app.options.appId],e,n,s).catch(r=>Dt.error(r))}const rm="@firebase/analytics",im="0.9.0";function RR(){Yt(new Vt(Ha,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return SR(s,r,n)},"PUBLIC")),Yt(new Vt("analytics-internal",t,"PRIVATE")),St(rm,im),St(rm,im,"esm2017");function t(e){try{const n=e.getProvider(Ha).getImmediate();return{logEvent:(s,r,i)=>kR(n,s,r,i)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}RR();var xR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,ud=ud||{},se=xR||self;function za(){}function zc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function So(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function NR(t){return Object.prototype.hasOwnProperty.call(t,Wl)&&t[Wl]||(t[Wl]=++OR)}var Wl="closure_uid_"+(1e9*Math.random()>>>0),OR=0;function DR(t,e,n){return t.call.apply(t.bind,arguments)}function PR(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=DR:lt=PR,lt.apply(null,arguments)}function ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function it(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function _s(){this.s=this.s,this.o=this.o}var LR=0;_s.prototype.s=!1;_s.prototype.na=function(){!this.s&&(this.s=!0,this.M(),LR!=0)&&NR(this)};_s.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function om(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(zc(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var MR=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",za,e),se.removeEventListener("test",za,e)}catch{}return t}();function Ka(t){return/^[\s\xa0]*$/.test(t)}var am=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Zl(t,e){return t<e?-1:t>e?1:0}function Kc(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function on(t){return Kc().indexOf(t)!=-1}function dd(t){return dd[" "](t),t}dd[" "]=za;function UR(t){var e=BR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var FR=on("Opera"),Br=on("Trident")||on("MSIE"),jv=on("Edge"),Uu=jv||Br,qv=on("Gecko")&&!(Kc().toLowerCase().indexOf("webkit")!=-1&&!on("Edge"))&&!(on("Trident")||on("MSIE"))&&!on("Edge"),$R=Kc().toLowerCase().indexOf("webkit")!=-1&&!on("Edge");function Hv(){var t=se.document;return t?t.documentMode:void 0}var Ga;e:{var Ql="",Yl=function(){var t=Kc();if(qv)return/rv:([^\);]+)(\)|;)/.exec(t);if(jv)return/Edge\/([\d\.]+)/.exec(t);if(Br)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($R)return/WebKit\/(\S+)/.exec(t);if(FR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yl&&(Ql=Yl?Yl[1]:""),Br){var Xl=Hv();if(Xl!=null&&Xl>parseFloat(Ql)){Ga=String(Xl);break e}}Ga=Ql}var BR={};function VR(){return UR(function(){let t=0;const e=am(String(Ga)).split("."),n=am("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Zl(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Zl(r[2].length==0,i[2].length==0)||Zl(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Fu;if(se.document&&Br){var cm=Hv();Fu=cm||parseInt(Ga,10)||void 0}else Fu=void 0;var jR=Fu;function Gi(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qv){e:{try{dd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gi.X.h.call(this)}}it(Gi,ut);var qR={2:"touch",3:"pen",4:"mouse"};Gi.prototype.h=function(){Gi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Co="closure_listenable_"+(1e6*Math.random()|0),HR=0;function zR(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++HR,this.ba=this.ea=!1}function Gc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function fd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function zv(t){const e={};for(const n in t)e[n]=t[n];return e}const lm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kv(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<lm.length;i++)n=lm[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Wc(t){this.src=t,this.g={},this.h=0}Wc.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Bu(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new zR(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function $u(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Vv(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Gc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bu(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var pd="closure_lm_"+(1e6*Math.random()|0),Jl={};function Gv(t,e,n,s,r){if(s&&s.once)return Zv(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gv(t,e[i],n,s,r);return null}return n=yd(n),t&&t[Co]?t.N(e,n,So(s)?!!s.capture:!!s,r):Wv(t,e,n,!1,s,r)}function Wv(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=So(r)?!!r.capture:!!r,a=gd(t);if(a||(t[pd]=a=new Wc(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=KR(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)MR||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Yv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KR(){function t(n){return e.call(t.src,t.listener,n)}const e=GR;return t}function Zv(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zv(t,e[i],n,s,r);return null}return n=yd(n),t&&t[Co]?t.O(e,n,So(s)?!!s.capture:!!s,r):Wv(t,e,n,!0,s,r)}function Qv(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Qv(t,e[i],n,s,r);else s=So(s)?!!s.capture:!!s,n=yd(n),t&&t[Co]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Bu(i,n,s,r),-1<n&&(Gc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bu(e,n,s,r)),(n=-1<t?e[t]:null)&&md(n))}function md(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Co])$u(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Yv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=gd(e))?($u(n,t),n.h==0&&(n.src=null,e[pd]=null)):Gc(t)}}}function Yv(t){return t in Jl?Jl[t]:Jl[t]="on"+t}function GR(t,e){if(t.ba)t=!0;else{e=new Gi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&md(t),t=n.call(s,e)}return t}function gd(t){return t=t[pd],t instanceof Wc?t:null}var eu="__closure_events_fn_"+(1e9*Math.random()>>>0);function yd(t){return typeof t=="function"?t:(t[eu]||(t[eu]=function(e){return t.handleEvent(e)}),t[eu])}function Je(){_s.call(this),this.i=new Wc(this),this.P=this,this.I=null}it(Je,_s);Je.prototype[Co]=!0;Je.prototype.removeEventListener=function(t,e,n,s){Qv(this,t,e,n,s)};function st(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var r=e;e=new ut(s,t),Kv(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=na(o,s,!0,e)&&r}if(o=e.g=t,r=na(o,s,!0,e)&&r,r=na(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=na(o,s,!1,e)&&r}Je.prototype.M=function(){if(Je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Gc(n[s]);delete t.g[e],t.h--}}this.I=null};Je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function na(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&$u(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var vd=se.JSON.stringify;function WR(){var t=e_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ZR{constructor(){this.h=this.g=null}add(e,n){const s=Xv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Xv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new QR,t=>t.reset());class QR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function YR(t){se.setTimeout(()=>{throw t},0)}function Jv(t,e){Vu||XR(),ju||(Vu(),ju=!0),e_.add(t,e)}var Vu;function XR(){var t=se.Promise.resolve(void 0);Vu=function(){t.then(JR)}}var ju=!1,e_=new ZR;function JR(){for(var t;t=WR();){try{t.h.call(t.g)}catch(n){YR(n)}var e=Xv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ju=!1}function Zc(t,e){Je.call(this),this.h=t||1,this.g=e||se,this.j=lt(this.lb,this),this.l=Date.now()}it(Zc,Je);z=Zc.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),st(this,"tick"),this.ca&&(_d(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _d(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Zc.X.M.call(this),_d(this),delete this.g};function wd(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function t_(t){t.g=wd(()=>{t.g=null,t.i&&(t.i=!1,t_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ex extends _s{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:t_(this)}M(){super.M(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(t){_s.call(this),this.h=t,this.g={}}it(Wi,_s);var um=[];function n_(t,e,n,s){Array.isArray(n)||(n&&(um[0]=n.toString()),n=um);for(var r=0;r<n.length;r++){var i=Gv(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function s_(t){fd(t.g,function(e,n){this.g.hasOwnProperty(n)&&md(e)},t),t.g={}}Wi.prototype.M=function(){Wi.X.M.call(this),s_(this)};Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qc(){this.g=!0}Qc.prototype.Aa=function(){this.g=!1};function tx(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function nx(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Er(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rx(t,n)+(s?" "+s:"")})}function sx(t,e){t.info(function(){return"TIMEOUT: "+e})}Qc.prototype.info=function(){};function rx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return vd(n)}catch{return e}}var lr={},hm=null;function Yc(){return hm=hm||new Je}lr.Pa="serverreachability";function r_(t){ut.call(this,lr.Pa,t)}it(r_,ut);function Zi(t){const e=Yc();st(e,new r_(e))}lr.STAT_EVENT="statevent";function i_(t,e){ut.call(this,lr.STAT_EVENT,t),this.stat=e}it(i_,ut);function vt(t){const e=Yc();st(e,new i_(e,t))}lr.Qa="timingevent";function o_(t,e){ut.call(this,lr.Qa,t),this.size=e}it(o_,ut);function Ao(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Xc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},a_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bd(){}bd.prototype.h=null;function dm(t){return t.h||(t.h=t.i())}function c_(){}var ko={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ed(){ut.call(this,"d")}it(Ed,ut);function Td(){ut.call(this,"c")}it(Td,ut);var qu;function Jc(){}it(Jc,bd);Jc.prototype.g=function(){return new XMLHttpRequest};Jc.prototype.i=function(){return{}};qu=new Jc;function Ro(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Wi(this),this.O=ix,t=Uu?125:void 0,this.T=new Zc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new l_}function l_(){this.i=null,this.g="",this.h=!1}var ix=45e3,Hu={},Wa={};z=Ro.prototype;z.setTimeout=function(t){this.O=t};function zu(t,e,n){t.K=1,t.v=tl(On(e)),t.s=n,t.P=!0,u_(t,null)}function u_(t,e){t.F=Date.now(),xo(t),t.A=On(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),v_(n.i,"t",s),t.C=0,n=t.l.H,t.h=new l_,t.g=$_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ex(lt(t.La,t,t.g),t.N)),n_(t.S,t.g,"readystatechange",t.ib),e=t.H?zv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zi(),tx(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&Cn(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const u=Cn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Uu||this.g&&(this.h.h||this.g.fa()||gm(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Zi(3):Zi(2)),el(this);var n=this.g.aa();this.Y=n;t:if(h_(this)){var s=gm(this.g);t="";var r=s.length,i=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),xi(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,nx(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ka(a)){var l=a;break t}}l=null}if(n=l)Er(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ku(this,n);else{this.i=!1,this.o=3,vt(12),Ps(this),xi(this);break e}}this.P?(d_(this,u,o),Uu&&this.i&&u==3&&(n_(this.S,this.T,"tick",this.hb),this.T.start())):(Er(this.j,this.m,o,null),Ku(this,o)),u==4&&Ps(this),this.i&&!this.I&&(u==4?L_(this.l,this):(this.i=!1,xo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),Ps(this),xi(this)}}}catch{}finally{}};function h_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function d_(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=ox(t,n),r==Wa){e==4&&(t.o=4,vt(14),s=!1),Er(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Hu){t.o=4,vt(15),Er(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Er(t.j,t.m,r,null),Ku(t,r);h_(t)&&r!=Wa&&r!=Hu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xd(e),e.K=!0,vt(11))):(Er(t.j,t.m,n,"[Invalid Chunked Response]"),Ps(t),xi(t))}z.hb=function(){if(this.g){var t=Cn(this.g),e=this.g.fa();this.C<e.length&&(el(this),d_(this,t,e),this.i&&t!=4&&xo(this))}};function ox(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Wa:(n=Number(e.substring(n,s)),isNaN(n)?Hu:(s+=1,s+n>e.length?Wa:(e=e.substr(s,n),t.C=s+n,e)))}z.cancel=function(){this.I=!0,Ps(this)};function xo(t){t.V=Date.now()+t.O,f_(t,t.O)}function f_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ao(lt(t.gb,t),e)}function el(t){t.B&&(se.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(sx(this.j,this.A),this.K!=2&&(Zi(),vt(17)),Ps(this),this.o=2,xi(this)):f_(this,this.V-t)};function xi(t){t.l.G==0||t.I||L_(t.l,t)}function Ps(t){el(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_d(t.T),s_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ku(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Gu(n.h,t))){if(!t.J&&Gu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ya(n),rl(n);else break e;Rd(n),vt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ao(lt(n.cb,n),6e3));if(1>=b_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ls(n,11)}else if((t.J||n.g==t)&&Ya(n),!Ka(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Id(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Me(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=F_(s,s.H?s.ka:null,s.V),o.J){E_(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(el(a),xo(a)),s.g=o}else D_(s);0<n.i.length&&il(n)}else l[0]!="stop"&&l[0]!="close"||Ls(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ls(n,7):kd(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Zi(4)}catch{}}function ax(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function cx(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function p_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cx(t),s=ax(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var m_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function js(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof js){this.h=e!==void 0?e:t.h,Za(this,t.j),this.s=t.s,this.g=t.g,Qa(this,t.m),this.l=t.l,e=t.i;var n=new Qi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fm(this,n),this.o=t.o}else t&&(n=String(t).match(m_))?(this.h=!!e,Za(this,n[1]||"",!0),this.s=fi(n[2]||""),this.g=fi(n[3]||"",!0),Qa(this,n[4]),this.l=fi(n[5]||"",!0),fm(this,n[6]||"",!0),this.o=fi(n[7]||"")):(this.h=!!e,this.i=new Qi(null,this.h))}js.prototype.toString=function(){var t=[],e=this.j;e&&t.push(pi(e,pm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(pi(e,pm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(pi(n,n.charAt(0)=="/"?dx:hx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",pi(n,px)),t.join("")};function On(t){return new js(t)}function Za(t,e,n){t.j=n?fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fm(t,e,n){e instanceof Qi?(t.i=e,mx(t.i,t.h)):(n||(e=pi(e,fx)),t.i=new Qi(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function tl(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ux),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ux(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pm=/[#\/\?@]/g,hx=/[#\?:]/g,dx=/[#\?]/g,fx=/[#\?@]/g,px=/#/g;function Qi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ws(t){t.g||(t.g=new Map,t.h=0,t.i&&lx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=Qi.prototype;z.add=function(t,e){ws(this),this.i=null,t=ni(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function g_(t,e){ws(t),e=ni(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function y_(t,e){return ws(t),e=ni(t,e),t.g.has(e)}z.forEach=function(t,e){ws(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};z.oa=function(){ws(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};z.W=function(t){ws(this);let e=[];if(typeof t=="string")y_(this,t)&&(e=e.concat(this.g.get(ni(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return ws(this),this.i=null,t=ni(this,t),y_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function v_(t,e,n){g_(t,e),0<n.length&&(t.i=null,t.g.set(ni(t,e),hd(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ni(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mx(t,e){e&&!t.j&&(ws(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(g_(this,s),v_(this,r,n))},t)),t.j=e}var gx=class{constructor(e,n){this.h=e,this.g=n}};function __(t){this.l=t||yx,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ga&&se.g.Ga()&&se.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yx=10;function w_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function b_(t){return t.h?1:t.g?t.g.size:0}function Gu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Id(t,e){t.g?t.g.add(e):t.h=e}function E_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}__.prototype.cancel=function(){if(this.i=T_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function T_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hd(t.i)}function Sd(){}Sd.prototype.stringify=function(t){return se.JSON.stringify(t,void 0)};Sd.prototype.parse=function(t){return se.JSON.parse(t,void 0)};function vx(){this.g=new Sd}function _x(t,e,n){const s=n||"";try{p_(t,function(r,i){let o=r;So(r)&&(o=vd(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function wx(t,e){const n=new Qc;if(se.Image){const s=new Image;s.onload=ta(sa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ta(sa,n,s,"TestLoadImage: error",!1,e),s.onabort=ta(sa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ta(sa,n,s,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function sa(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function No(t){this.l=t.ac||null,this.j=t.jb||!1}it(No,bd);No.prototype.g=function(){return new nl(this.l,this.j)};No.prototype.i=function(t){return function(){return t}}({});function nl(t,e){Je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(nl,Je);var Cd=0;z=nl.prototype;z.open=function(t,e){if(this.readyState!=Cd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yi(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||se).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oo(this)),this.readyState=Cd};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;I_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function I_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oo(this):Yi(this),this.readyState==3&&I_(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Oo(this))};z.Ua=function(t){this.g&&(this.response=t,Oo(this))};z.ga=function(){this.g&&Oo(this)};function Oo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yi(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bx=se.JSON.parse;function Ve(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=S_,this.K=this.L=!1}it(Ve,Je);var S_="",Ex=/^https?$/i,Tx=["POST","PUT"];z=Ve.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qu.g(),this.C=this.u?dm(this.u):dm(qu),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){mm(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=se.FormData&&t instanceof se.FormData,!(0<=Vv(Tx,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{k_(this),0<this.B&&((this.K=Ix(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=wd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){mm(this,i)}};function Ix(t){return Br&&VR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof ud<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function mm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,C_(t),sl(t)}function C_(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),sl(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sl(this,!0)),Ve.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?A_(this):this.fb())};z.fb=function(){A_(this)};function A_(t){if(t.h&&typeof ud<"u"&&(!t.C[1]||Cn(t)!=4||t.aa()!=2)){if(t.v&&Cn(t)==4)wd(t.Ha,0,t);else if(st(t,"readystatechange"),Cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(m_)[1]||null;if(!r&&se.self&&se.self.location){var i=se.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ex.test(r?r.toLowerCase():"")}n=s}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<Cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",C_(t)}}finally{sl(t)}}}}function sl(t,e){if(t.g){k_(t);const n=t.g,s=t.C[0]?za:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=s}catch{}}}function k_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}function Cn(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bx(e)}};function gm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case S_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function R_(t){let e="";return fd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ad(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=R_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function ui(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function x_(t){this.Ca=0,this.i=[],this.j=new Qc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ui("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ui("baseRetryDelayMs",5e3,t),this.bb=ui("retryDelaySeedMs",1e4,t),this.$a=ui("forwardChannelMaxRetries",2,t),this.ta=ui("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new __(t&&t.concurrentRequestLimit),this.Fa=new vx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=x_.prototype;z.ma=8;z.G=1;function kd(t){if(N_(t),t.G==3){var e=t.U++,n=On(t.F);Me(n,"SID",t.I),Me(n,"RID",e),Me(n,"TYPE","terminate"),Do(t,n),e=new Ro(t,t.j,e,void 0),e.K=2,e.v=tl(On(n)),n=!1,se.navigator&&se.navigator.sendBeacon&&(n=se.navigator.sendBeacon(e.v.toString(),"")),!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=$_(e.l,null),e.g.da(e.v)),e.F=Date.now(),xo(e)}U_(t)}function rl(t){t.g&&(xd(t),t.g.cancel(),t.g=null)}function N_(t){rl(t),t.u&&(se.clearTimeout(t.u),t.u=null),Ya(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function il(t){w_(t.h)||t.m||(t.m=!0,Jv(t.Ja,t),t.C=0)}function Sx(t,e){return b_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ao(lt(t.Ja,t,e),M_(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ro(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=zv(i),Kv(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=O_(this,r,e),n=On(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Do(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(R_(i)))+"&"+e:this.o&&Ad(n,this.o,i)),Id(this.h,r),this.Ya&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",e),Me(n,"SID","null"),r.Z=!0,zu(r,n,null)):zu(r,n,e),this.G=2}}else this.G==3&&(t?ym(this,t):this.i.length==0||w_(this.h)||ym(this))};function ym(t,e){var n;e?n=e.m:n=t.U++;const s=On(t.F);Me(s,"SID",t.I),Me(s,"RID",n),Me(s,"AID",t.T),Do(t,s),t.o&&t.s&&Ad(s,t.o,t.s),n=new Ro(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=O_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Id(t.h,n),zu(n,s,e)}function Do(t,e){t.ia&&fd(t.ia,function(n,s){Me(e,s,n)}),t.l&&p_({},function(n,s){Me(e,s,n)})}function O_(t,e,n){n=Math.min(t.i.length,n);var s=t.l?lt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{_x(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function D_(t){t.g||t.u||(t.Z=1,Jv(t.Ia,t),t.A=0)}function Rd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ao(lt(t.Ia,t),M_(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,P_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ao(lt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),rl(this),P_(this))};function xd(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function P_(t){t.g=new Ro(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=On(t.sa);Me(e,"RID","rpc"),Me(e,"SID",t.I),Me(e,"CI",t.L?"0":"1"),Me(e,"AID",t.T),Me(e,"TYPE","xmlhttp"),Do(t,e),t.o&&t.s&&Ad(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=tl(On(e)),n.s=null,n.P=!0,u_(n,t)}z.cb=function(){this.v!=null&&(this.v=null,rl(this),Rd(this),vt(19))};function Ya(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function L_(t,e){var n=null;if(t.g==e){Ya(t),xd(t),t.g=null;var s=2}else if(Gu(t.h,e))n=e.D,E_(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Yc(),st(s,new o_(s,n)),il(t)}else D_(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Sx(t,e)||s==2&&Rd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ls(t,5);break;case 4:Ls(t,10);break;case 3:Ls(t,6);break;default:Ls(t,2)}}}function M_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ls(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=lt(t.kb,t);n||(n=new js("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Za(n,"https"),tl(n)),wx(n.toString(),s)}else vt(2);t.G=0,t.l&&t.l.va(e),U_(t),N_(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function U_(t){if(t.G=0,t.la=[],t.l){const e=T_(t.h);(e.length!=0||t.i.length!=0)&&(om(t.la,e),om(t.la,t.i),t.h.i.length=0,hd(t.i),t.i.length=0),t.l.ua()}}function F_(t,e,n){var s=n instanceof js?On(n):new js(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Qa(s,s.m);else{var r=se.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new js(null,void 0);s&&Za(i,s),e&&(i.g=e),r&&Qa(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Me(s,n,e),Me(s,"VER",t.ma),Do(t,s),s}function $_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ve(new No({jb:!0})):new Ve(t.ra),e.Ka(t.H),e}function B_(){}z=B_.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function Xa(){if(Br&&!(10<=Number(jR)))throw Error("Environmental error: no available transport.")}Xa.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Je.call(this),this.g=new x_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ka(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ka(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new si(this)}it(Pt,Je);Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=F_(t,null,t.V),il(t)};Pt.prototype.close=function(){kd(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vd(t),t=n);e.i.push(new gx(e.ab++,t)),e.G==3&&il(e)};Pt.prototype.M=function(){this.g.l=null,delete this.j,kd(this.g),delete this.g,Pt.X.M.call(this)};function V_(t){Ed.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(V_,Ed);function j_(){Td.call(this),this.status=1}it(j_,Td);function si(t){this.g=t}it(si,B_);si.prototype.xa=function(){st(this.g,"a")};si.prototype.wa=function(t){st(this.g,new V_(t))};si.prototype.va=function(t){st(this.g,new j_)};si.prototype.ua=function(){st(this.g,"b")};Xa.prototype.createWebChannel=Xa.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;Xc.NO_ERROR=0;Xc.TIMEOUT=8;Xc.HTTP_ERROR=6;a_.COMPLETE="complete";c_.EventType=ko;ko.OPEN="a";ko.CLOSE="b";ko.ERROR="c";ko.MESSAGE="d";Je.prototype.listen=Je.prototype.N;Ve.prototype.listenOnce=Ve.prototype.O;Ve.prototype.getLastError=Ve.prototype.Oa;Ve.prototype.getLastErrorCode=Ve.prototype.Ea;Ve.prototype.getStatus=Ve.prototype.aa;Ve.prototype.getResponseJson=Ve.prototype.Sa;Ve.prototype.getResponseText=Ve.prototype.fa;Ve.prototype.send=Ve.prototype.da;Ve.prototype.setWithCredentials=Ve.prototype.Ka;var Cx=function(){return new Xa},Ax=function(){return Yc()},tu=Xc,kx=a_,Rx=lr,vm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},xx=No,ra=c_,Nx=Ve;const _m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Mc("@firebase/firestore");function wm(){return Js.logLevel}function G(t,...e){if(Js.logLevel<=be.DEBUG){const n=e.map(Nd);Js.debug(`Firestore (${ri}): ${t}`,...n)}}function Dn(t,...e){if(Js.logLevel<=be.ERROR){const n=e.map(Nd);Js.error(`Firestore (${ri}): ${t}`,...n)}}function Wu(t,...e){if(Js.logLevel<=be.WARN){const n=e.map(Nd);Js.warn(`Firestore (${ri}): ${t}`,...n)}}function Nd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function Ne(t,e){t||te()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let L=class extends jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}let Ox=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}},Dx=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},Px=class{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new q_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new at(e)}},Lx=class{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}};class Mx{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Lx(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let Ux=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class Fx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.A=n.token,new Ux(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H_=class{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=$x(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}};function Se(t,e){return t<e?-1:t>e?1:0}function Vr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _t=class ya{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ya.fromMillis(Date.now())}static fromDate(e){return ya.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ya(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let de=class va{constructor(e){this.timestamp=e}static fromTimestamp(e){return new va(e)}static min(){return new va(new _t(0,0))}static max(){return new va(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z_=class Zu{constructor(e,n,s){n===void 0?n=0:n>e.length&&te(),s===void 0?s=e.length-n:s>e.length-n&&te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Zu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zu?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},Be=class _a extends z_{construct(e,n,s){return new _a(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new _a(n)}static emptyPath(){return new _a([])}};const Bx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let mn=class yr extends z_{construct(e,n,s){return new yr(e,n,s)}static isValidIdentifier(e){return Bx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yr(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yr(n)}static emptyPath(){return new yr([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y=class mi{constructor(e){this.path=e}static fromPath(e){return new mi(Be.fromString(e))}static fromName(e){return new mi(Be.fromString(e).popFirst(5))}static empty(){return new mi(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new mi(new Be(e.slice()))}};function Vx(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=de.fromTimestamp(s===1e9?new _t(n+1,0):new _t(n,s));return new ds(r,Y.empty(),e)}function jx(t){return new ds(t.readTime,t.key,-1)}class ds{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ds(de.min(),Y.empty(),-1)}static max(){return new ds(de.max(),Y.empty(),-1)}}function qx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==Hx)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(r=>r?R.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new R((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new R((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Lo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Od{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Od.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function K_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return t==null}function Ja(t){return t===0&&1/t==-1/0}function Gx(t){return typeof t=="number"&&Number.isInteger(t)&&!Ja(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fs(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=Wx.exec(t);if(Ne(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function G_(t){const e=t.mapValue.fields.__previous_value__;return Dd(e)?G_(e):e}function Ji(t){const e=fs(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dd(t)?4:Zx(t)?9007199254740991:10:te()}function gn(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=fs(s.timestampValue),o=fs(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return jr(s.bytesValue).isEqual(jr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ze(s.geoPointValue.latitude)===ze(r.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ze(s.integerValue)===ze(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ze(s.doubleValue),o=ze(r.doubleValue);return i===o?Ja(i)===Ja(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Vr(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(bm(i)!==bm(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!gn(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function eo(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function qr(t,e){if(t===e)return 0;const n=er(t),s=er(e);if(n!==s)return Se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ze(r.integerValue||r.doubleValue),a=ze(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Em(t.timestampValue,e.timestampValue);case 4:return Em(Ji(t),Ji(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=jr(r),a=jr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Se(o[c],a[c]);if(l!==0)return l}return Se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Se(ze(r.latitude),ze(i.latitude));return o!==0?o:Se(ze(r.longitude),ze(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=qr(o[c],a[c]);if(l)return l}return Se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ia.mapValue&&i===ia.mapValue)return 0;if(r===ia.mapValue)return 1;if(i===ia.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=Se(a[u],l[u]);if(h!==0)return h;const d=qr(o[a[u]],c[l[u]]);if(d!==0)return d}return Se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw te()}}function Em(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=fs(t),s=fs(e),r=Se(n.seconds,s.seconds);return r!==0?r:Se(n.nanos,s.nanos)}function Hr(t){return Qu(t)}function Qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=fs(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?jr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Qu(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Qu(s.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function ec(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yu(t){return!!t&&"integerValue"in t}function Pd(t){return!!t&&"arrayValue"in t}function Tm(t){return!!t&&"nullValue"in t}function Im(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wa(t){return!!t&&"mapValue"in t}function Ni(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ur(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ni(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ni(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Zx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */let zr=class{constructor(e,n){this.position=e,this.inclusive=n}};function Sm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),n.key):s=qr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class W_{}let Xe=class Z_ extends W_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Xx(e,n,s):n==="array-contains"?new t1(e,s):n==="in"?new n1(e,s):n==="not-in"?new s1(e,s):n==="array-contains-any"?new r1(e,s):new Z_(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Jx(e,s):new e1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qr(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(qr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}},Pn=class Q_ extends W_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Q_(e,n)}matches(e){return Y_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}};function Y_(t){return t.op==="and"}function Qx(t){return Yx(t)&&Y_(t)}function Yx(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function X_(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Hr(t.value);{const e=t.filters.map(n=>X_(n)).join(",");return`${t.op}(${e})`}}function J_(t,e){return t instanceof Xe?function(n,s){return s instanceof Xe&&n.op===s.op&&n.field.isEqual(s.field)&&gn(n.value,s.value)}(t,e):t instanceof Pn?function(n,s){return s instanceof Pn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&J_(i,s.filters[o]),!0):!1}(t,e):void te()}function ew(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Hr(e.value)}`}(t):t instanceof Pn?function(e){return e.op.toString()+" {"+e.getFilters().map(ew).join(" ,")+"}"}(t):"Filter"}let Xx=class extends Xe{constructor(e,n,s){super(e,n,s),this.key=Y.fromName(s.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}},Jx=class extends Xe{constructor(e,n){super(e,"in",n),this.keys=tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}},e1=class extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function tw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Y.fromName(s.referenceValue))}let t1=class extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pd(n)&&eo(n.arrayValue,this.value)}},n1=class extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&eo(this.value.arrayValue,n)}},s1=class extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!eo(this.value.arrayValue,n)}},r1=class extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>eo(this.value.arrayValue,s))}};/**
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
 */let Nr=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function i1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pt=class Xu{constructor(e,n){this.comparator=e,this.root=n||cs.EMPTY}insert(e,n){return new Xu(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,cs.BLACK,null,null))}remove(e){return new Xu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}},oa=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},cs=class En{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??En.RED,this.left=r??En.EMPTY,this.right=i??En.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new En(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return En.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return En.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,En.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,En.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}};cs.EMPTY=null,cs.RED=!0,cs.BLACK=!1;cs.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,s,r){return this}insert(t,e,n){return new cs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class Ju{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Am(this.data.getIterator())}getIteratorFrom(e){return new Am(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ju)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ju(this.comparator);return n.data=e,n}},Am=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn=class eh{constructor(e){this.fields=e,e.sort(mn.comparator)}static empty(){return new eh([])}unionWith(e){let n=new ht(mn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new eh(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vr(this.fields,e.fields,(n,s)=>n.isEqual(s))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=class th{constructor(e){this.value=e}static empty(){return new th({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(n)}setAll(e){let n=mn.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ni(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];wa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ur(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new th(Ni(this.value))}};function nw(t){const e=[];return ur(t.fields,(n,s)=>{const r=new mn([n]);if(wa(s)){const i=nw(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln=class ks{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ks(e,0,de.min(),de.min(),de.min(),zt.empty(),0)}static newFoundDocument(e,n,s,r){return new ks(e,1,n,de.min(),s,r,0)}static newNoDocument(e,n){return new ks(e,2,n,de.min(),de.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new ks(e,3,n,de.min(),de.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ks&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ks(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
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
 */class o1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function km(t,e=null,n=[],s=[],r=null,i=null,o=null){return new o1(t,e,n,s,r,i,o)}function Ld(t){const e=le(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>X_(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Hr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Hr(s)).join(",")),e.ft=n}return e.ft}function Md(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!i1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!J_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cm(t.startAt,e.startAt)&&Cm(t.endAt,e.endAt)}function nh(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function a1(t,e,n,s,r,i,o,a){return new bs(t,e,n,s,r,i,o,a)}function Ud(t){return new bs(t)}function Rm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function al(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $d(t){return t.collectionGroup!==null}function qs(t){const e=le(t);if(e.dt===null){e.dt=[];const n=al(e),s=Fd(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Nr(n)),e.dt.push(new Nr(mn.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Nr(mn.keyField(),i))}}}return e.dt}function Mn(t){const e=le(t);if(!e._t)if(e.limitType==="F")e._t=km(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of qs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Nr(i.field,o))}const s=e.endAt?new zr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new zr(e.startAt.position,e.startAt.inclusive):null;e._t=km(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function sh(t,e){e.getFirstInequalityField(),al(t);const n=t.filters.concat([e]);return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tc(t,e,n){return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cl(t,e){return Md(Mn(t),Mn(e))&&t.limitType===e.limitType}function sw(t){return`${Ld(Mn(t))}|lt:${t.limitType}`}function rh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ew(s)).join(", ")}]`),ol(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Hr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Hr(s)).join(",")),`Target(${n})`}(Mn(t))}; limitType=${t.limitType})`}function Bd(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Y.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of qs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Sm(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,qs(n),s)||n.endAt&&!function(r,i,o){const a=Sm(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,qs(n),s))}(t,e)}function c1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rw(t){return(e,n)=>{let s=!1;for(const r of qs(t)){const i=l1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function l1(t,e,n){const s=t.field.isKeyField()?Y.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?qr(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(e)?"-0":e}}function ow(t){return{integerValue:""+t}}function u1(t,e){return Gx(e)?ow(e):iw(t,e)}/**
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
 */class ll{constructor(){this._=void 0}}function h1(t,e,n){return t instanceof nc?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof to?cw(t,e):t instanceof no?lw(t,e):function(s,r){const i=aw(s,r),o=xm(i)+xm(s.gt);return Yu(i)&&Yu(s.gt)?ow(o):iw(s.yt,o)}(t,e)}function d1(t,e,n){return t instanceof to?cw(t,e):t instanceof no?lw(t,e):n}function aw(t,e){return t instanceof sc?Yu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class nc extends ll{}class to extends ll{constructor(e){super(),this.elements=e}}function cw(t,e){const n=uw(e);for(const s of t.elements)n.some(r=>gn(r,s))||n.push(s);return{arrayValue:{values:n}}}class no extends ll{constructor(e){super(),this.elements=e}}function lw(t,e){let n=uw(e);for(const s of t.elements)n=n.filter(r=>!gn(r,s));return{arrayValue:{values:n}}}class sc extends ll{constructor(e,n){super(),this.yt=e,this.gt=n}}function xm(t){return ze(t.integerValue||t.doubleValue)}function uw(t){return Pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function f1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof to&&s instanceof to||n instanceof no&&s instanceof no?Vr(n.elements,s.elements,gn):n instanceof sc&&s instanceof sc?gn(n.gt,s.gt):n instanceof nc&&s instanceof nc}(t.transform,e.transform)}class p1{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ul{}function hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vd(t.key,Bt.none()):new Mo(t.key,t.data,Bt.none());{const n=t.data,s=zt.empty();let r=new ht(mn.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Es(t.key,s,new Rn(r.toArray()),Bt.none())}}function m1(t,e,n){t instanceof Mo?function(s,r,i){const o=s.value.clone(),a=Om(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Es?function(s,r,i){if(!ba(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Om(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(dw(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,s){return t instanceof Mo?function(r,i,o,a){if(!ba(r.precondition,i))return o;const c=r.value.clone(),l=Dm(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Es?function(r,i,o,a){if(!ba(r.precondition,i))return o;const c=Dm(r.fieldTransforms,a,i),l=i.data;return l.setAll(dw(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ba(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function g1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=aw(s.transform,r||null);i!=null&&(n===null&&(n=zt.empty()),n.set(s.field,i))}return n||null}function Nm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vr(n,s,(r,i)=>f1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends ul{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Es extends ul{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Om(t,e,n){const s=new Map;Ne(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,d1(o,a,n[r]))}return s}function Dm(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,h1(i,o,e))}return s}class Vd extends ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y1 extends ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ye;function _1(t){switch(t){default:return te();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function fw(t){if(t===void 0)return Dn("GRPC error has no .code"),_.UNKNOWN;switch(t){case He.OK:return _.OK;case He.CANCELLED:return _.CANCELLED;case He.UNKNOWN:return _.UNKNOWN;case He.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case He.INTERNAL:return _.INTERNAL;case He.UNAVAILABLE:return _.UNAVAILABLE;case He.UNAUTHENTICATED:return _.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case He.NOT_FOUND:return _.NOT_FOUND;case He.ALREADY_EXISTS:return _.ALREADY_EXISTS;case He.PERMISSION_DENIED:return _.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case He.ABORTED:return _.ABORTED;case He.OUT_OF_RANGE:return _.OUT_OF_RANGE;case He.UNIMPLEMENTED:return _.UNIMPLEMENTED;case He.DATA_LOSS:return _.DATA_LOSS;default:return te()}}(ye=He||(He={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return K_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new pt(Y.comparator);function Un(){return w1}const pw=new pt(Y.comparator);function gi(...t){let e=pw;for(const n of t)e=e.insert(n.key,n);return e}function mw(t){let e=pw;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ms(){return Di()}function gw(){return Di()}function Di(){return new ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const b1=new pt(Y.comparator),E1=new ht(Y.comparator);function me(...t){let e=E1;for(const n of t)e=e.add(n);return e}const T1=new ht(Se);function yw(){return T1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new hl(de.min(),r,yw(),Un(),me())}}class Uo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Uo(s,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class vw{constructor(e,n){this.targetId=e,this.Et=n}}class _w{constructor(e,n,s=ft.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Pm{constructor(){this.At=0,this.Rt=Mm(),this.bt=ft.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=me(),n=me(),s=me();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:te()}}),new Uo(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Mm()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class I1{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Un(),this.qt=Lm(),this.Ut=new ht(Se)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(nh(i))if(s===0){const o=new Y(i.path);this.Qt(n,o,Ln.newNoDocument(o,de.min()))}else Ne(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&nh(a.target)){const c=new Y(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ln.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=me();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new hl(e,n,this.Ut,this.Lt,s);return this.Lt=Un(),this.qt=Lm(),this.Ut=new ht(Se),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Pm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ht(Se),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Pm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Lm(){return new pt(Y.comparator)}function Mm(){return new pt(Y.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={asc:"ASCENDING",desc:"DESCENDING"},C1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},A1={and:"AND",or:"OR"};class k1{constructor(e,n){this.databaseId=e,this.wt=n}}function rc(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ww(t,e){return t.wt?e.toBase64():e.toUint8Array()}function R1(t,e){return rc(t,e.toTimestamp())}function hn(t){return Ne(!!t),de.fromTimestamp(function(e){const n=fs(e);return new _t(n.seconds,n.nanos)}(t))}function jd(t,e){return function(n){return new Be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function bw(t){const e=Be.fromString(t);return Ne(Sw(e)),e}function ih(t,e){return jd(t.databaseId,e.path)}function nu(t,e){const n=bw(e);if(n.get(1)!==t.databaseId.projectId)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Ew(n))}function oh(t,e){return jd(t.databaseId,e)}function x1(t){const e=bw(t);return e.length===4?Be.emptyPath():Ew(e)}function ah(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ew(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Um(t,e,n){return{name:ih(t,e),fields:n.value.mapValue.fields}}function N1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(Ne(l===void 0||typeof l=="string"),ft.fromBase64String(l||"")):(Ne(l===void 0||l instanceof Uint8Array),ft.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:fw(c.code);return new L(l,c.message||"")}(o);n=new _w(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=nu(t,s.document.name),i=hn(s.document.updateTime),o=s.document.createTime?hn(s.document.createTime):de.min(),a=new zt({mapValue:{fields:s.document.fields}}),c=Ln.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ea(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=nu(t,s.document),i=s.readTime?hn(s.readTime):de.min(),o=Ln.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ea([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=nu(t,s.document),i=s.removedTargetIds||[];n=new Ea([],i,r,null)}else{if(!("filter"in e))return te();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new v1(r),o=s.targetId;n=new vw(o,i)}}return n}function O1(t,e){let n;if(e instanceof Mo)n={update:Um(t,e.key,e.value)};else if(e instanceof Vd)n={delete:ih(t,e.key)};else if(e instanceof Es)n={update:Um(t,e.key,e.data),updateMask:V1(e.fieldMask)};else{if(!(e instanceof y1))return te();n={verify:ih(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof nc)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof to)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof no)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof sc)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:R1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:te()}(t,e.precondition)),n}function D1(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?hn(s.updateTime):hn(r);return i.isEqual(de.min())&&(i=hn(r)),new p1(i,s.transformResults||[])}(n,e))):[]}function P1(t,e){return{documents:[oh(t,e.path)]}}function L1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=oh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Iw(Pn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:vr(u.field),direction:F1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||ol(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function M1(t){let e=x1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ne(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Tw(u);return h instanceof Pn&&Qx(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Nr(_r(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ol(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new zr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new zr(d,h)}(n.endAt)),a1(e,r,o,i,a,"F",c,l)}function U1(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_r(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_r(e.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_r(e.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_r(e.unaryFilter.field);return Xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(_r(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pn.create(e.compositeFilter.filters.map(n=>Tw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te()}}(e.compositeFilter.op))}(t):te()}function F1(t){return S1[t]}function $1(t){return C1[t]}function B1(t){return A1[t]}function vr(t){return{fieldPath:t.canonicalString()}}function _r(t){return mn.fromServerFormat(t.fieldPath)}function Iw(t){return t instanceof Xe?function(e){if(e.op==="=="){if(Im(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NAN"}};if(Tm(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Im(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NOT_NAN"}};if(Tm(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vr(e.field),op:$1(e.op),value:e.value}}}(t):t instanceof Pn?function(e){const n=e.getFilters().map(s=>Iw(s));return n.length===1?n[0]:{compositeFilter:{op:B1(e.op),filters:n}}}(t):te()}function V1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&m1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Oi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Oi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=gw();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=hw(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Vr(this.mutations,e.mutations,(n,s)=>Nm(n,s))&&Vr(this.baseMutations,e.baseMutations,(n,s)=>Nm(n,s))}}class qd{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ne(e.mutations.length===s.length);let r=b1;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new qd(e,n,s,r)}}/**
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
 */class q1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hs{constructor(e,n,s,r,i=de.min(),o=de.min(),a=ft.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.ie=e}}function z1(t){const e=M1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tc(e,e.limit,"L"):e}/**
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
 */class K1{constructor(){this.Je=new G1}addToCollectionParentIndex(e,n){return this.Je.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(ds.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(ds.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class G1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ht(Be.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ht(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Kr(0)}static vn(){return new Kr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.changes=new ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ln.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Z1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Oi(s.mutation,r,Rn.empty(),_t.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,me()).next(()=>s))}getLocalViewOfDocuments(e,n,s=me()){const r=Ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=gi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,me()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Un();const o=Di(),a=Di();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Es)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Oi(u.mutation,l,u.mutation.getFieldMask(),_t.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Z1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Di();let r=new pt((o,a)=>o-a),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Rn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||me()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=gw();u.forEach(d=>{if(!i.has(d)){const p=hw(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$d(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):R.resolve(Ms());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,me())).next(u=>({batchId:a,changes:mw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(s=>{let r=gi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=gi();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(l,u){return new bs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ln.newInvalidDocument(l)))});let o=gi();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Oi(l.mutation,c,Rn.empty(),_t.now()),Bd(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:hn(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:z1(s.bundledQuery),readTime:hn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class X1{constructor(){this.overlays=new pt(Y.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ms();return R.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const r=Ms(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new pt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ms(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ms(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return R.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new q1(n,s));let i=this.es.get(n);i===void 0&&(i=me(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.ns=new ht(Qe.ss),this.rs=new ht(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new Y(new Be([])),s=new Qe(n,e),r=new Qe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Y(new Be([])),s=new Qe(n,e),r=new Qe(n,e+1);let i=me();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Y.comparator(e.key,n.key)||Se(e._s,n._s)}static os(e,n){return Se(e._s,n._s)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ht(Qe.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new j1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),r=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ht(Se);return n.forEach(r=>{const i=new Qe(r,0),o=new Qe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),R.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new Y(i),0);let a=new ht(Se);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return R.forEach(n.mutations,r=>{const i=new Qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Qe(n,0),r=this.gs.firstAfterOrEqual(s);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.Es=e,this.docs=new pt(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():Ln.newInvalidDocument(n))}getEntries(e,n){let s=Un();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ln.newInvalidDocument(r))}),R.resolve(s)}getAllFromCollection(e,n,s){let r=Un();const i=new Y(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||qx(jx(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,r){te()}As(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new tN(this)}getSize(e){return R.resolve(this.size)}}class tN extends W1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.persistence=e,this.Rs=new ii(n=>Ld(n),Md),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Hd,this.targetCount=0,this.vs=Kr.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(i).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Od(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new nN(this),this.indexManager=new K1,this.remoteDocumentCache=function(s){return new eN(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new H1(n),this.Ns=new Y1(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new X1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new J1(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){G("MemoryPersistence","Starting transaction:",e);const r=new rN(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return R.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class rN extends zx{constructor(e){super(),this.currentSequenceNumber=e}}class zd{constructor(e){this.persistence=e,this.Fs=new Hd,this.$s=null}static Bs(e){return new zd(e)}get Ls(){if(this.$s)return this.$s;throw te()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,s=>{const r=Y.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,de.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=me(),r=me();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Kd(e,n.fromCache,s,r)}}/**
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
 */class iN{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Rm(n))return R.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=tc(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=me(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,tc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return Rm(n)||r.isEqual(de.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(wm()<=be.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),rh(n)),this.Bi(e,o,n,Vx(r,-1)))})}Fi(e,n){let s=new ht(rw(e));return n.forEach((r,i)=>{Bd(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return wm()<=be.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",rh(n)),this.Ni.getDocumentsMatchingQuery(e,n,ds.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new pt(Se),this.Ui=new ii(i=>Ld(i),Md),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function aN(t,e,n,s){return new oN(t,e,n,s)}async function Cw(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=me();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function cN(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=R.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const v=c.docVersions.get(p);Ne(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=me();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Aw(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function lN(t,e){const n=le(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ft.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,v,E){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=Un(),l=me();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(uN(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(de.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function uN(t,e,n){let s=me(),r=me();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Un();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function hN(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dN(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,R.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Hs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function ch(t,e,n){const s=le(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Lo(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Fm(t,e,n){const s=le(t);let r=de.min(),i=me();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=le(a),h=u.Ui.get(l);return h!==void 0?R.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,Mn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:de.min(),n?i:me())).next(a=>(fN(s,c1(e),a),{documents:a,Hi:i})))}function fN(t,e,n){let s=t.Ki.get(e)||de.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class $m{constructor(){this.activeTargetIds=yw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pN{constructor(){this.Lr=new $m,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new $m,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mN{Ur(e){}shutdown(){}}/**
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
 */class Bm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);G("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(G("RestConnection","Received: ",c),c),c=>{throw Wu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ri,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=gN[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Nx;a.setWithCredentials(!0),a.listenOnce(kx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case tu.NO_ERROR:const l=a.getResponseJson();G("Connection","XHR received:",JSON.stringify(l)),i(l);break;case tu.TIMEOUT:G("Connection",'RPC "'+e+'" timed out'),o(new L(_.DEADLINE_EXCEEDED,"Request time out"));break;case tu.HTTP_ERROR:const u=a.getStatus();if(G("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(v)>=0?v:_.UNKNOWN}(d.status);o(new L(p,d.message))}else o(new L(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(_.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{G("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Cx(),o=Ax(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new xx({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");G("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new yN({Hr:g=>{h?G("Connection","Not sending because WebChannel is closed:",g):(u||(G("Connection","Opening WebChannel transport."),l.open(),u=!0),G("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,v,E)=>{g.listen(v,I=>{try{E(I)}catch(S){setTimeout(()=>{throw S},0)}})};return p(l,ra.EventType.OPEN,()=>{h||G("Connection","WebChannel transport opened.")}),p(l,ra.EventType.CLOSE,()=>{h||(h=!0,G("Connection","WebChannel transport closed"),d.io())}),p(l,ra.EventType.ERROR,g=>{h||(h=!0,Wu("Connection","WebChannel transport errored:",g),d.io(new L(_.UNAVAILABLE,"The operation could not be completed")))}),p(l,ra.EventType.MESSAGE,g=>{var v;if(!h){const E=g.data[0];Ne(!!E);const I=E,S=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(S){G("Connection","WebChannel received error:",S);const D=S.status;let F=function(A){const X=He[A];if(X!==void 0)return fw(X)}(D),k=S.message;F===void 0&&(F=_.INTERNAL,k="Unknown error status: "+D+" with message "+S.message),h=!0,d.io(new L(F,k)),l.close()}else G("Connection","WebChannel received:",E),d.ro(E)}}),p(o,Rx.STAT_EVENT,g=>{g.stat===vm.PROXY?G("Connection","Detected buffering proxy"):g.stat===vm.NOPROXY&&G("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function su(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){return new k1(t,!0)}class kw{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new kw(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new L(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _N extends Rw{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=N1(this.yt,e),s=function(r){if(!("targetChange"in r))return de.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?de.min():i.readTime?hn(i.readTime):de.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=ah(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=nh(a)?{documents:P1(r,a)}:{query:L1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ww(r,i.resumeToken):i.snapshotVersion.compareTo(de.min())>0&&(o.readTime=rc(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=U1(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=ah(this.yt),n.removeTarget=e,this.Bo(n)}}class wN extends Rw{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=D1(e.writeResults,e.commitTime),s=hn(e.commitTime);return this.listener.Zo(s,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ah(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>O1(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(_.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(_.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class EN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dn(n),this.ou=!1):G("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{hr(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=le(a);c._u.add(4),await Fo(c),c.gu.set("Unknown"),c._u.delete(4),await fl(c)}(this))})}),this.gu=new EN(s,r)}}async function fl(t){if(hr(t))for(const e of t.wu)await e(!0)}async function Fo(t){for(const e of t.wu)await e(!1)}function xw(t,e){const n=le(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Zd(n)?Wd(n):oi(n).ko()&&Gd(n,e))}function Nw(t,e){const n=le(t),s=oi(n);n.du.delete(e),s.ko()&&Ow(n,e),n.du.size===0&&(s.ko()?s.Fo():hr(n)&&n.gu.set("Unknown"))}function Gd(t,e){t.yu.Ot(e.targetId),oi(t).zo(e)}function Ow(t,e){t.yu.Ot(e),oi(t).Ho(e)}function Wd(t){t.yu=new I1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),oi(t).start(),t.gu.uu()}function Zd(t){return hr(t)&&!oi(t).No()&&t.du.size>0}function hr(t){return le(t)._u.size===0}function Dw(t){t.yu=void 0}async function IN(t){t.du.forEach((e,n)=>{Gd(t,e)})}async function SN(t,e){Dw(t),Zd(t)?(t.gu.hu(e),Wd(t)):t.gu.set("Unknown")}async function CN(t,e,n){if(t.gu.set("Online"),e instanceof _w&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(t,s)}else if(e instanceof Ea?t.yu.Kt(e):e instanceof vw?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(de.min()))try{const s=await Aw(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ft.EMPTY_BYTE_STRING,c.snapshotVersion)),Ow(r,a);const l=new Hs(c.target,a,1,c.sequenceNumber);Gd(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){G("RemoteStore","Failed to raise snapshot:",s),await ic(t,s)}}async function ic(t,e,n){if(!Lo(e))throw e;t._u.add(1),await Fo(t),t.gu.set("Offline"),n||(n=()=>Aw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await fl(t)})}function Pw(t,e){return e().catch(n=>ic(t,n,e))}async function pl(t){const e=le(t),n=ps(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;AN(e);)try{const r=await hN(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,kN(e,r)}catch(r){await ic(e,r)}Lw(e)&&Mw(e)}function AN(t){return hr(t)&&t.fu.length<10}function kN(t,e){t.fu.push(e);const n=ps(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Lw(t){return hr(t)&&!ps(t).No()&&t.fu.length>0}function Mw(t){ps(t).start()}async function RN(t){ps(t).eu()}async function xN(t){const e=ps(t);for(const n of t.fu)e.Xo(n.mutations)}async function NN(t,e,n){const s=t.fu.shift(),r=qd.from(s,e,n);await Pw(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await pl(t)}async function ON(t,e){e&&ps(t).Yo&&await async function(n,s){if(r=s.code,_1(r)&&r!==_.ABORTED){const i=n.fu.shift();ps(n).Mo(),await Pw(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pl(n)}var r}(t,e),Lw(t)&&Mw(t)}async function Vm(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const s=hr(n);n._u.add(3),await Fo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await fl(n)}async function DN(t,e){const n=le(t);e?(n._u.delete(2),await fl(n)):e||(n._u.add(2),await Fo(n),n.gu.set("Unknown"))}function oi(t){return t.pu||(t.pu=function(e,n,s){const r=le(e);return r.su(),new _N(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:IN.bind(null,t),Zr:SN.bind(null,t),Wo:CN.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Zd(t)?Wd(t):t.gu.set("Unknown")):(await t.pu.stop(),Dw(t))})),t.pu}function ps(t){return t.Iu||(t.Iu=function(e,n,s){const r=le(e);return r.su(),new wN(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:RN.bind(null,t),Zr:ON.bind(null,t),tu:xN.bind(null,t),Zo:NN.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await pl(t)):(await t.Iu.stop(),t.fu.length>0&&(G("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Qd(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yd(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Lo(t))return new L(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Y.comparator(n.key,s.key):(n,s)=>Y.comparator(n.key,s.key),this.keyedMap=gi(),this.sortedSet=new pt(this.comparator)}static emptySet(e){return new Or(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Or;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.Tu=new pt(Y.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):te():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gr(e,n,Or.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.Au=void 0,this.listeners=[]}}class LN{constructor(){this.queries=new ii(e=>sw(e),cl),this.onlineState="Unknown",this.Ru=new Set}}async function Uw(t,e){const n=le(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new PN),r)try{i.Au=await n.onListen(s)}catch(o){const a=Yd(o,`Initialization of query '${rh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Xd(n)}async function Fw(t,e){const n=le(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function MN(t,e){const n=le(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Xd(n)}function UN(t,e,n){const s=le(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Xd(t){t.Ru.forEach(e=>{e.next()})}class $w{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.key=e}}class Vw{constructor(e){this.key=e}}class FN{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=me(),this.mutatedKeys=me(),this.Gu=rw(e),this.Qu=new Or(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new jm,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Bd(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(s.track({type:3,doc:p}),E=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),E=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),E=!0):d&&!p&&(s.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return p(h)-p(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Gr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new jm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=me(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Vw(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Bw(s))}),n}tc(e){this.qu=e.Hi,this.Ku=me();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Gr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class $N{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class BN{constructor(e){this.key=e,this.nc=!1}}class VN{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ii(a=>sw(a),cl),this.rc=new Map,this.oc=new Set,this.uc=new pt(Y.comparator),this.cc=new Map,this.ac=new Hd,this.hc={},this.lc=new Map,this.fc=Kr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function jN(t,e){const n=XN(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await dN(n.localStore,Mn(e));n.isPrimaryClient&&xw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await qN(n,e,s,a==="current",o.resumeToken)}return r}async function qN(t,e,n,s,r){t._c=(h,d,p)=>async function(g,v,E,I){let S=v.view.Wu(E);S.$i&&(S=await Fm(g.localStore,v.query,!1).then(({documents:k})=>v.view.Wu(k,S)));const D=I&&I.targetChanges.get(v.targetId),F=v.view.applyChanges(S,g.isPrimaryClient,D);return Hm(g,v.targetId,F.Xu),F.snapshot}(t,h,d,p);const i=await Fm(t.localStore,e,!0),o=new FN(e,i.Hi),a=o.Wu(i.documents),c=Uo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Hm(t,n,l.Xu);const u=new $N(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function HN(t,e){const n=le(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!cl(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ch(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Nw(n.remoteStore,s.targetId),lh(n,s.targetId)}).catch(Po)):(lh(n,s.targetId),await ch(n.localStore,s.targetId,!0))}async function zN(t,e,n){const s=JN(t);try{const r=await function(i,o){const a=le(i),c=_t.now(),l=o.reduce((d,p)=>d.add(p.key),me());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Un(),g=me();return a.Gi.getEntries(d,l).next(v=>{p=v,p.forEach((E,I)=>{I.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const E=[];for(const I of o){const S=g1(I,u.get(I.key).overlayedDocument);S!=null&&E.push(new Es(I.key,S,nw(S.value.mapValue),Bt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:mw(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new pt(Se)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await $o(s,r.changes),await pl(s.remoteStore)}catch(r){const i=Yd(r,"Failed to persist write");n.reject(i)}}async function jw(t,e){const n=le(t);try{const s=await lN(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ne(o.nc):r.removedDocuments.size>0&&(Ne(o.nc),o.nc=!1))}),await $o(n,s,e)}catch(s){await Po(s)}}function qm(t,e,n){const s=le(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=le(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Xd(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function KN(t,e,n){const s=le(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new pt(Y.comparator);o=o.insert(i,Ln.newNoDocument(i,de.min()));const a=me().add(i),c=new hl(de.min(),new Map,new ht(Se),o,a);await jw(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Jd(s)}else await ch(s.localStore,e,!1).then(()=>lh(s,e,n)).catch(Po)}async function GN(t,e){const n=le(t),s=e.batch.batchId;try{const r=await cN(n.localStore,e);Hw(n,s,null),qw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $o(n,r)}catch(r){await Po(r)}}async function WN(t,e,n){const s=le(t);try{const r=await function(i,o){const a=le(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ne(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Hw(s,e,n),qw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await $o(s,r)}catch(r){await Po(r)}}function qw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Hw(t,e,n){const s=le(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||zw(t,s)})}function zw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Nw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Jd(t))}function Hm(t,e,n){for(const s of n)s instanceof Bw?(t.ac.addReference(s.key,e),ZN(t,s)):s instanceof Vw?(G("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||zw(t,s.key)):te()}function ZN(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(G("SyncEngine","New document in limbo: "+n),t.oc.add(s),Jd(t))}function Jd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Y(Be.fromString(e)),s=t.fc.next();t.cc.set(s,new BN(n)),t.uc=t.uc.insert(n,s),xw(t.remoteStore,new Hs(Mn(Ud(n.path)),s,2,Od.at))}}async function $o(t,e,n){const s=le(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Kd.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=le(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Lo(u))throw u;G("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.qi=l.qi.insert(h,g)}}}(s.localStore,i))}async function QN(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const s=await Cw(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new L(_.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $o(n,s.ji)}}function YN(t,e){const n=le(t),s=n.cc.get(e);if(s&&s.nc)return me().add(s.key);{let r=me();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function XN(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KN.bind(null,e),e.sc.Wo=MN.bind(null,e.eventManager),e.sc.wc=UN.bind(null,e.eventManager),e}function JN(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WN.bind(null,e),e}class eO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=dl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return aN(this.persistence,new iN,e.initialUser,this.yt)}yc(e){return new sN(zd.Bs,this.yt)}gc(e){return new pN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>qm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=QN.bind(null,this.syncEngine),await DN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new LN}createDatastore(e){const n=dl(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new vN(r));var r;return function(i,o,a,c){return new bN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>qm(this.syncEngine,a,0),o=Bm.C()?new Bm:new mN,new TN(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new VN(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=le(e);G("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Fo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e,n){if(!n)throw new L(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nO(t,e,n,s){if(e===!0&&s===!0)throw new L(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zm(t){if(!Y.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Km(t){if(Y.isDocumentKey(t))throw new L(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ml(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ml(t);throw new L(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function sO(t,e){if(e<=0)throw new L(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Map;class Wm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ox;switch(n.type){case"gapi":const s=n.client;return new Mx(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gm.get(e);n&&(G("ComponentProvider","Removing Datastore"),Gm.delete(e),n.terminate())}(this),Promise.resolve()}}function rO(t,e,n,s={}){var r;const i=(t=Lt(t,gl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Wu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=at.MOCK_USER;else{o=Ly(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new L(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(c)}t._authCredentials=new Dx(new q_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class en{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new en(this.firestore,e,this._query)}}class ls extends en{constructor(e,n,s){super(e,n,Ud(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Y(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function Gw(t,e,...n){if(t=Ue(t),Kw("collection","path",e),t instanceof gl){const s=Be.fromString(e,...n);return Km(s),new ls(t,null,s)}{if(!(t instanceof wt||t instanceof ls))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return Km(s),new ls(t.firestore,null,s)}}function oc(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=H_.R()),Kw("doc","path",e),t instanceof gl){const s=Be.fromString(e,...n);return zm(s),new wt(t,null,new Y(s))}{if(!(t instanceof wt||t instanceof ls))throw new L(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return zm(s),new wt(t.firestore,t instanceof ls?t.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ww{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=at.UNAUTHENTICATED,this.clientId=H_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function oO(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Cw(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function aO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cO(t);G("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Vm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Vm(e.remoteStore,i)),t.onlineComponents=e}async function cO(t){return t.offlineComponents||(G("FirestoreClient","Using default OfflineComponentProvider"),await oO(t,new eO)),t.offlineComponents}async function Zw(t){return t.onlineComponents||(G("FirestoreClient","Using default OnlineComponentProvider"),await aO(t,new tO)),t.onlineComponents}function lO(t){return Zw(t).then(e=>e.syncEngine)}async function Qw(t){const e=await Zw(t),n=e.eventManager;return n.onListen=jN.bind(null,e.syncEngine),n.onUnlisten=HN.bind(null,e.syncEngine),n}function uO(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Ww({next:h=>{i.enqueueAndForget(()=>Fw(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new L(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new L(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $w(Ud(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Uw(r,u)}(await Qw(t),t.asyncQueue,e,n,s)),s.promise}function Yw(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Ww({next:h=>{i.enqueueAndForget(()=>Fw(r,u)),h.fromCache&&a.source==="server"?c.reject(new L(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $w(o,l,{includeMetadataChanges:!0,Nu:!0});return Uw(r,u)}(await Qw(t),t.asyncQueue,e,n,s)),s.promise}class hO{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new kw(this,"async_queue_retry"),this.Wc=()=>{const n=su();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=su();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=su();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new kn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Lo(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Dn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Qd.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&te()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Ts extends gl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new hO,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xw(this),this._firestoreClient.terminate()}}function dO(t,e){const n=typeof t=="object"?t:Uc(),s=typeof t=="string"?t:e||"(default)",r=vs(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Dy("firestore");i&&rO(r,...i)}return r}function yl(t){return t._firestoreClient||Xw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xw(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Kx(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new iO(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wr(ft.fromBase64String(e))}catch(n){throw new L(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wr(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=/^__.*__$/;class pO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}class Jw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class nf{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ac(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(eb(this.sa)&&fO.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class mO{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||dl(e)}da(e,n,s,r=!1){return new nf({sa:e,methodName:n,fa:s,path:mn.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Bo(t){const e=t._freezeSettings(),n=dl(t._databaseId);return new mO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tb(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);sf("Data must be an object, but it was:",o,s);const a=sb(s,o);let c,l;if(i.merge)c=new Rn(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=uh(e,h,n);if(!o.contains(d))throw new L(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ib(u,d)||u.push(d)}c=new Rn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new pO(new zt(a),c,l)}class _l extends ef{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _l}}function gO(t,e,n,s){const r=t.da(1,e,n);sf("Data must be an object, but it was:",r,s);const i=[],o=zt.empty();ur(s,(c,l)=>{const u=rf(e,c,n);l=Ue(l);const h=r.ca(u);if(l instanceof _l)i.push(u);else{const d=Vo(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Rn(i);return new Jw(o,a,r.fieldTransforms)}function yO(t,e,n,s,r,i){const o=t.da(1,e,n),a=[uh(e,s,n)],c=[r];if(i.length%2!=0)throw new L(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(uh(e,i[d])),c.push(i[d+1]);const l=[],u=zt.empty();for(let d=a.length-1;d>=0;--d)if(!ib(l,a[d])){const p=a[d];let g=c[d];g=Ue(g);const v=o.ca(p);if(g instanceof _l)l.push(p);else{const E=Vo(g,v);E!=null&&(l.push(p),u.set(p,E))}}const h=new Rn(l);return new Jw(u,h,o.fieldTransforms)}function nb(t,e,n,s=!1){return Vo(n,t.da(s?4:3,e))}function Vo(t,e){if(rb(t=Ue(t)))return sf("Unsupported field value:",e,t),sb(t,e);if(t instanceof ef)return function(n,s){if(!eb(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Vo(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return u1(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=_t.fromDate(n);return{timestampValue:rc(s.yt,r)}}if(n instanceof _t){const r=new _t(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rc(s.yt,r)}}if(n instanceof tf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wr)return{bytesValue:ww(s.yt,n._byteString)};if(n instanceof wt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:jd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ml(n)}`)}(t,e)}function sb(t,e){const n={};return K_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(t,(s,r)=>{const i=Vo(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function rb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof tf||t instanceof Wr||t instanceof wt||t instanceof ef)}function sf(t,e,n){if(!rb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ml(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function uh(t,e,n){if((e=Ue(e))instanceof vl)return e._internalPath;if(typeof e=="string")return rf(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const vO=new RegExp("[~\\*/\\[\\]]");function rf(t,e,n){if(e.search(vO)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(_.INVALID_ARGUMENT,a+t+c)}function ib(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _O(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(af("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _O extends of{data(){return super.data()}}function af(t,e){return typeof e=="string"?rf(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cf{}class jo extends cf{}function bO(t,e,...n){let s=[];e instanceof cf&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof uf).length,o=r.filter(a=>a instanceof lf).length;if(i>1||i>0&&o>0)throw new L(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class lf extends jo{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new lf(e,n,s)}_apply(e){const n=this._parse(e);return ab(e._query,n),new en(e.firestore,e.converter,sh(e._query,n))}_parse(e){const n=Bo(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Qm(u,l);const d=[];for(const p of u)d.push(Zm(a,r,p));h={arrayValue:{values:d}}}else h=Zm(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Qm(u,l),h=nb(o,i,u,l==="in"||l==="not-in");return Xe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class uf extends cf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uf(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)ab(i,a),i=sh(i,a)}(e._query,n),new en(e.firestore,e.converter,sh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hf extends jo{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hf(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new L(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Nr(r,i);return function(a,c){if(Fd(a)===null){const l=al(a);l!==null&&cb(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new en(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new bs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function EO(t,e="asc"){const n=e,s=af("orderBy",t);return hf._create(s,n)}class df extends jo{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new df(e,n,s)}_apply(e){return new en(e.firestore,e.converter,tc(e._query,this._limit,this._limitType))}}function TO(t){return sO("limit",t),df._create("limit",t,"F")}class ff extends jo{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new ff(e,n,s)}_apply(e){const n=ob(e,this.type,this._docOrFields,this._inclusive);return new en(e.firestore,e.converter,function(s,r){return new bs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function IO(...t){return ff._create("startAt",t,!0)}class pf extends jo{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new pf(e,n,s)}_apply(e){const n=ob(e,this.type,this._docOrFields,this._inclusive);return new en(e.firestore,e.converter,function(s,r){return new bs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function SO(...t){return pf._create("endAt",t,!0)}function ob(t,e,n,s){if(n[0]=Ue(n[0]),n[0]instanceof of)return function(r,i,o,a,c){if(!a)throw new L(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of qs(r))if(u.field.isKeyField())l.push(ec(i,a.key));else{const h=a.data.field(u.field);if(Dd(h))throw new L(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new L(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new zr(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=Bo(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new L(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const g=l[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new L(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!$d(i)&&g.indexOf("/")!==-1)throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const v=i.path.child(Be.fromString(g));if(!Y.isDocumentKey(v))throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const E=new Y(v);d.push(ec(o,E))}else{const v=nb(a,c,g);d.push(v)}}return new zr(d,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Zm(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new L(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$d(e)&&n.indexOf("/")!==-1)throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Be.fromString(n));if(!Y.isDocumentKey(s))throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ec(t,new Y(s))}if(n instanceof wt)return ec(t,n._key);throw new L(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ml(n)}.`)}function Qm(t,e){if(!Array.isArray(t)||t.length===0)throw new L(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new L(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ab(t,e){if(e.isInequality()){const s=al(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new L(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Fd(t);i!==null&&cb(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cb(t,e,n){if(!n.isEqual(e))throw new L(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class CO{convertValue(e,n="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const s={};return ur(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new tf(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=G_(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=fs(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Be.fromString(e);Ne(Sw(s));const r=new Xi(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ub extends of{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(af("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ta extends ub{data(e={}){return super.data(e)}}class hb{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new yi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ta(this._firestore,this._userDataWriter,s.key,s,new yi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ta(s._firestore,s._userDataWriter,o.doc.key,o.doc,new yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ta(s._firestore,s._userDataWriter,o.doc.key,o.doc,new yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:AO(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){t=Lt(t,wt);const e=Lt(t.firestore,Ts);return uO(yl(e),t._key).then(n=>NO(e,t,n))}class mf extends CO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function SM(t){t=Lt(t,en);const e=Lt(t.firestore,Ts),n=yl(e),s=new mf(e);return wO(t._query),Yw(n,t._query).then(r=>new hb(e,s,t,r))}function CM(t){t=Lt(t,en);const e=Lt(t.firestore,Ts),n=yl(e),s=new mf(e);return Yw(n,t._query,{source:"server"}).then(r=>new hb(e,s,t,r))}function kO(t,e,n){t=Lt(t,wt);const s=Lt(t.firestore,Ts),r=lb(t.converter,e,n);return wl(s,[tb(Bo(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Bt.none())])}function RO(t,e,n,...s){t=Lt(t,wt);const r=Lt(t.firestore,Ts),i=Bo(r);let o;return o=typeof(e=Ue(e))=="string"||e instanceof vl?yO(i,"updateDoc",t._key,e,n,s):gO(i,"updateDoc",t._key,e),wl(r,[o.toMutation(t._key,Bt.exists(!0))])}function AM(t){return wl(Lt(t.firestore,Ts),[new Vd(t._key,Bt.none())])}function xO(t,e){const n=Lt(t.firestore,Ts),s=oc(t),r=lb(t.converter,e);return wl(n,[tb(Bo(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Bt.exists(!1))]).then(()=>s)}function wl(t,e){return function(n,s){const r=new kn;return n.asyncQueue.enqueueAndForget(async()=>zN(await lO(n),s,r)),r.promise}(yl(t),e)}function NO(t,e,n){const s=n.docs.get(e._key),r=new mf(t);return new ub(t,r,e._key,s,new yi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ri=n})(ti),Yt(new Vt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ts(new Px(n.getProvider("auth-internal")),new Fx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),St(_m,"3.8.0",t),St(_m,"3.8.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="firebasestorage.googleapis.com",fb="storageBucket",OO=2*60*1e3,DO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends jt{constructor(e,n,s=0){super(ru(e),`Firebase Storage: ${n} (${ru(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ru(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ru(t){return"storage/"+t}function gf(){const t="An unknown error occurred, please check the error payload for server response.";return new je("unknown",t)}function PO(t){return new je("object-not-found","Object '"+t+"' does not exist.")}function LO(t){return new je("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function MO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je("unauthenticated",t)}function UO(){return new je("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function FO(t){return new je("unauthorized","User does not have permission to access '"+t+"'.")}function $O(){return new je("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function BO(){return new je("canceled","User canceled the upload/download.")}function VO(t){return new je("invalid-url","Invalid URL '"+t+"'.")}function jO(t){return new je("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function qO(){return new je("no-default-bucket","No default bucket found. Did you set the '"+fb+"' property when initializing the app?")}function HO(){return new je("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function zO(){return new je("no-download-url","The given file does not have any download URLs.")}function KO(t){return new je("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hh(t){return new je("invalid-argument",t)}function pb(){return new je("app-deleted","The Firebase app was deleted.")}function GO(t){return new je("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Pi(t,e){return new je("invalid-format","String does not match format '"+t+"': "+e)}function hi(t){throw new je("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ot.makeFromUrl(e,n)}catch{return new Ot(e,"")}if(s.path==="")return s;throw jO(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(F){F.path_=decodeURIComponent(F.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},v=n===db?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",I=new RegExp(`^https?://${v}/${r}/${E}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:l},{regex:I,indices:{bucket:1,path:2},postModify:l}];for(let F=0;F<D.length;F++){const k=D[F],A=k.regex.exec(e);if(A){const X=A[k.indices.bucket];let q=A[k.indices.path];q||(q=""),s=new Ot(X,q),k.postModify(s);break}}if(s==null)throw VO(e);return s}}class WO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){r=setTimeout(()=>{r=null,t(p,c())},E)}function d(){i&&clearTimeout(i)}function p(E,...I){if(l){d();return}if(E){d(),u.call(null,E,...I);return}if(c()||o){d(),u.call(null,E,...I);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,h(D)}let g=!1;function v(E){g||(g=!0,d(),!l&&(r!==null?(E||(a=2),clearTimeout(r),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function QO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){return t!==void 0}function XO(t){return typeof t=="object"&&!Array.isArray(t)}function yf(t){return typeof t=="string"||t instanceof String}function Xm(t){return vf()&&t instanceof Blob}function vf(){return typeof Blob<"u"&&!HI()}function Jm(t,e,n,s){if(s<e)throw hh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw hh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function mb(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zs||(zs={}));/**
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
 */function JO(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new aa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===zs.NO_ERROR,c=i.getStatus();if((!a||JO(c,this.additionalRetryCodes_))&&this.retry){const u=i.getErrorCode()===zs.ABORT;s(!1,new aa(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new aa(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());YO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=gf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?pb():BO();o(c)}else{const c=$O();o(c)}};this.canceled_?n(!1,new aa(!1,null,!0)):this.backoffId_=ZO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class aa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function tD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iD(t,e,n,s,r,i,o=!0){const a=mb(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return sD(l,e),tD(l,n),nD(l,i),rD(l,s),new eD(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function aD(...t){const e=oD();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(vf())return new Blob(t);throw new je("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function cD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lD(t){if(typeof atob>"u")throw KO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class iu{constructor(e,n){this.data=e,this.contentType=n||null}}function uD(t,e){switch(t){case an.RAW:return new iu(gb(e));case an.BASE64:case an.BASE64URL:return new iu(yb(t,e));case an.DATA_URL:return new iu(dD(e),fD(e))}throw gf()}function gb(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function hD(t){let e;try{e=decodeURIComponent(t)}catch{throw Pi(an.DATA_URL,"Malformed data URL.")}return gb(e)}function yb(t,e){switch(t){case an.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Pi(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case an.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Pi(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lD(e)}catch(r){throw r.message.includes("polyfill")?r:Pi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class vb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Pi(an.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=pD(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function dD(t){const e=new vb(t);return e.base64?yb(an.BASE64,e.rest):hD(e.rest)}function fD(t){return new vb(t).contentType}function pD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){let s=0,r="";Xm(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Xm(this.data_)){const s=this.data_,r=cD(s,e,n);return r===null?null:new ts(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ts(s,!0)}}static getBlob(...e){if(vf()){const n=e.map(s=>s instanceof ts?s.data_:s);return new ts(aD.apply(null,n))}else{const n=e.map(o=>yf(o)?uD(an.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new ts(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){let e;try{e=JSON.parse(t)}catch{return null}return XO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gD(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function wb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t,e){return e}class gt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||yD}}let ca=null;function vD(t){return!yf(t)||t.length<2?t:wb(t)}function bb(){if(ca)return ca;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return vD(o)}const n=new gt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new gt("size");return r.xform=s,t.push(r),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),ca=t,ca}function _D(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Ot(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function wD(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return _D(s,t),s}function Eb(t,e,n){const s=_b(e);return s===null?null:wD(t,s,n)}function bD(t,e,n,s){const r=_b(e);if(r===null||!yf(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=_f(d,n,s),g=mb({alt:"media",token:l});return p+g})[0]}function ED(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Tb{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){if(!t)throw gf()}function TD(t,e){function n(s,r){const i=Eb(t,r,e);return Ib(i!==null),i}return n}function ID(t,e){function n(s,r){const i=Eb(t,r,e);return Ib(i!==null),bD(i,r,t.host,t._protocol)}return n}function Sb(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=UO():r=MO():n.getStatus()===402?r=LO(t.bucket):n.getStatus()===403?r=FO(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function SD(t){const e=Sb(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=PO(t.path)),i.serverResponse=r.serverResponse,i}return n}function CD(t,e,n){const s=e.fullServerUrl(),r=_f(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Tb(r,i,ID(t,n),o);return a.errorHandler=SD(e),a}function AD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kD(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=AD(null,e)),s}function RD(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let F=0;F<2;F++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=kD(e,s,r),u=ED(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=ts.getBlob(h,s,d);if(p===null)throw HO();const g={name:l.fullPath},v=_f(i,t.host,t._protocol),E="POST",I=t.maxUploadRetryTime,S=new Tb(v,E,TD(t,n),I);return S.urlParams=g,S.headers=o,S.body=p.uploadData(),S.errorHandler=Sb(e),S}class xD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw hi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ND extends xD{initXhr(){this.xhr_.responseType="text"}}function Cb(){return new ND}/**
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
 */class tr{constructor(e,n){this._service=e,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new tr(e,n)}get root(){const e=new Ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wb(this._location.path)}get storage(){return this._service}get parent(){const e=mD(this._location.path);if(e===null)return null;const n=new Ot(this._location.bucket,e);return new tr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GO(e)}}function OD(t,e,n){t._throwIfRoot("uploadBytes");const s=RD(t.storage,t._location,bb(),new ts(e,!0),n);return t.storage.makeRequestWithTokens(s,Cb).then(r=>({metadata:r,ref:t}))}function DD(t){t._throwIfRoot("getDownloadURL");const e=CD(t.storage,t._location,bb());return t.storage.makeRequestWithTokens(e,Cb).then(n=>{if(n===null)throw zO();return n})}function PD(t,e){const n=gD(t._location.path,e),s=new Ot(t._location.bucket,n);return new tr(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){return/^[A-Za-z]+:\/\//.test(t)}function MD(t,e){return new tr(t,e)}function Ab(t,e){if(t instanceof wf){const n=t;if(n._bucket==null)throw qO();const s=new tr(n,n._bucket);return e!=null?Ab(s,e):s}else return e!==void 0?PD(t,e):t}function UD(t,e){if(e&&LD(e)){if(t instanceof wf)return MD(t,e);throw hh("To use ref(service, url), the first argument must be a Storage instance.")}else return Ab(t,e)}function eg(t,e){const n=e==null?void 0:e[fb];return n==null?null:Ot.makeFromBucketSpec(n,t)}function FD(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Ly(r,t.app.options.projectId))}class wf{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=db,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OO,this._maxUploadRetryTime=DO,this._requests=new Set,r!=null?this._bucket=Ot.makeFromBucketSpec(r,this._host):this._bucket=eg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,e):this._bucket=eg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new WO(pb());{const o=iD(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const tg="@firebase/storage",ng="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="storage";function kM(t,e,n){return t=Ue(t),OD(t,e,n)}function RM(t){return t=Ue(t),DD(t)}function $D(t,e){return t=Ue(t),UD(t,e)}function BD(t=Uc(),e){t=Ue(t);const s=vs(t,kb).getImmediate({identifier:e}),r=Dy("storage");return r&&VD(s,...r),s}function VD(t,e,n,s={}){FD(t,e,n,s)}function jD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new wf(n,s,r,e,ti)}function qD(){Yt(new Vt(kb,jD,"PUBLIC").setMultipleInstances(!0)),St(tg,ng,""),St(tg,ng,"esm2017")}qD();const HD={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d",measurementId:"G-0EWRT6BT1Y"},bl=$y(HD);CR(bl);const so=dO(bl),Ft=dk(bl),El="profiles",sg=()=>{if(!Ft.currentUser)throw new Error("Auth required");return oc(so,El,Ft.currentUser.uid)},zD=t=>Gw(so,El,t,"timeline"),KD=()=>{if(!Ft.currentUser)throw new Error("Auth required");return zD(Ft.currentUser.uid)},xM=t=>$D(BD(bl),t),NM=(t,e)=>bO(Gw(so,El),EO(t),TO(5),IO(e.trim()),SO(`${e.trim()}`)),GD=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],dh=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,fh=t=>t[dh(0,t.length-1)],rg=t=>{const e=[];for(let n=0;n<t;n++)e.push(fh(GD));return e.join(" ")},WD=t=>{const e=t.slice(1);return e?`#${(+`0x1${e}`^16777215).toString(16).substr(1).toUpperCase()}`:""},ZD=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}],QD="/assets/undraw_online_resume_re_ru7s-CgtgtGar.svg",YD={Instagram:{link:""},Facebook:{link:""},YouTube:{link:""},Spotify:{link:""},Twitter:{link:""},GitHub:{link:""},LinkedIn:{link:""},TikTok:{link:""}},XD=()=>{const{author:t,quotes:e}=fh(ZD);return`"${fh(e)}"    - ${t}`},JD=t=>{var e;if(!t)throw new Error("Unauthorized profile creation attempt");return{userUid:t.uid,displayName:((e=t==null?void 0:t.displayName)==null?void 0:e.toLowerCase())??"",coverImg:QD,photoURL:(t==null?void 0:t.photoURL)??"",bgColor:"#FFE5E5",fontColor:"#000000",fontFamily:"merienda",shortBio:`${rg(dh(1,3))} What/Where ${rg(dh(1,3))}`,longBio:XD(),socialLinks:YD}};var _e;(function(t){t.assertEqual=r=>r;function e(r){}t.assertIs=e;function n(r){throw new Error}t.assertNever=n,t.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},t.getValidEnumValues=r=>{const i=t.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of i)o[a]=r[a];return t.objectValues(o)},t.objectValues=r=>t.objectKeys(r).map(function(i){return r[i]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},t.find=(r,i)=>{for(const o of r)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=s,t.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(_e||(_e={}));var ph;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(ph||(ph={}));const $=_e.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ns=t=>{switch(typeof t){case"undefined":return $.undefined;case"string":return $.string;case"number":return isNaN(t)?$.nan:$.number;case"boolean":return $.boolean;case"function":return $.function;case"bigint":return $.bigint;case"symbol":return $.symbol;case"object":return Array.isArray(t)?$.array:t===null?$.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?$.promise:typeof Map<"u"&&t instanceof Map?$.map:typeof Set<"u"&&t instanceof Set?$.set:typeof Date<"u"&&t instanceof Date?$.date:$.object;default:return $.unknown}},x=_e.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),eP=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Wt extends Error{constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(n(o));else{let a=s,c=0;for(;c<o.path.length;){const l=o.path[c];c===o.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(o))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return r(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,_e.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},s=[];for(const r of this.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(e(r))):s.push(e(r));return{formErrors:s,fieldErrors:n}}get formErrors(){return this.flatten()}}Wt.create=t=>new Wt(t);const ro=(t,e)=>{let n;switch(t.code){case x.invalid_type:t.received===$.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case x.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,_e.jsonStringifyReplacer)}`;break;case x.unrecognized_keys:n=`Unrecognized key(s) in object: ${_e.joinValues(t.keys,", ")}`;break;case x.invalid_union:n="Invalid input";break;case x.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${_e.joinValues(t.options)}`;break;case x.invalid_enum_value:n=`Invalid enum value. Expected ${_e.joinValues(t.options)}, received '${t.received}'`;break;case x.invalid_arguments:n="Invalid function arguments";break;case x.invalid_return_type:n="Invalid function return type";break;case x.invalid_date:n="Invalid date";break;case x.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:_e.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case x.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case x.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case x.custom:n="Invalid input";break;case x.invalid_intersection_types:n="Intersection results could not be merged";break;case x.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case x.not_finite:n="Number must be finite";break;default:n=e.defaultError,_e.assertNever(t)}return{message:n}};let Rb=ro;function tP(t){Rb=t}function cc(){return Rb}const lc=t=>{const{data:e,path:n,errorMaps:s,issueData:r}=t,i=[...n,...r.path||[]],o={...r,path:i};let a="";const c=s.filter(l=>!!l).slice().reverse();for(const l of c)a=l(o,{data:e,defaultError:a}).message;return{...r,path:i,message:r.message||a}},nP=[];function B(t,e){const n=lc({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,cc(),ro].filter(s=>!!s)});t.common.issues.push(n)}class mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const s=[];for(const r of n){if(r.status==="aborted")return ae;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,n){const s=[];for(const r of n)s.push({key:await r.key,value:await r.value});return mt.mergeObjectSync(e,s)}static mergeObjectSync(e,n){const s={};for(const r of n){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return ae;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const ae=Object.freeze({status:"aborted"}),xb=t=>({status:"dirty",value:t}),bt=t=>({status:"valid",value:t}),mh=t=>t.status==="aborted",gh=t=>t.status==="dirty",io=t=>t.status==="valid",uc=t=>typeof Promise<"u"&&t instanceof Promise;var Z;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(Z||(Z={}));class yn{constructor(e,n,s,r){this._cachedPath=[],this.parent=e,this.data=n,this._path=s,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const ig=(t,e)=>{if(io(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Wt(t.common.issues);return this._error=n,this._error}}};function ce(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:s,description:r}=t;if(e&&(n||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:s??a.defaultError}:{message:n??a.defaultError},description:r}}class ue{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return ns(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:ns(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new mt,ctx:{common:e.parent.common,data:e.data,parsedType:ns(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(uc(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const s=this.safeParse(e,n);if(s.success)return s.data;throw s.error}safeParse(e,n){var s;const r={common:{issues:[],async:(s=n==null?void 0:n.async)!==null&&s!==void 0?s:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ns(e)},i=this._parseSync({data:e,path:r.path,parent:r});return ig(r,i)}async parseAsync(e,n){const s=await this.safeParseAsync(e,n);if(s.success)return s.data;throw s.error}async safeParseAsync(e,n){const s={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ns(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(uc(r)?r:Promise.resolve(r));return ig(s,i)}refine(e,n){const s=r=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(r):n;return this._refinement((r,i)=>{const o=e(r),a=()=>i.addIssue({code:x.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof n=="function"?n(s,r):n),!1))}_refinement(e){return new Xt({schema:this,typeName:ee.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return xn.create(this,this._def)}nullable(){return rr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Zt.create(this,this._def)}promise(){return Qr.create(this,this._def)}or(e){return lo.create([this,e],this._def)}and(e){return uo.create(this,e,this._def)}transform(e){return new Xt({...ce(this._def),schema:this,typeName:ee.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new go({...ce(this._def),innerType:this,defaultValue:n,typeName:ee.ZodDefault})}brand(){return new Ob({typeName:ee.ZodBranded,type:this,...ce(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new pc({...ce(this._def),innerType:this,catchValue:n,typeName:ee.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return qo.create(this,e)}readonly(){return gc.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const sP=/^c[^\s-]{8,}$/i,rP=/^[a-z][a-z0-9]*$/,iP=/^[0-9A-HJKMNP-TV-Z]{26}$/,oP=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,aP=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,cP="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ou;const lP=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,uP=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,hP=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function dP(t,e){return!!((e==="v4"||!e)&&lP.test(t)||(e==="v6"||!e)&&uP.test(t))}class Kt extends ue{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==$.string){const i=this._getOrReturnCtx(e);return B(i,{code:x.invalid_type,expected:$.string,received:i.parsedType}),ae}const s=new mt;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),B(r,{code:x.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),B(r,{code:x.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?B(r,{code:x.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&B(r,{code:x.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")aP.test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"email",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="emoji")ou||(ou=new RegExp(cP,"u")),ou.test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"emoji",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")oP.test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"uuid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")sP.test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"cuid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")rP.test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"cuid2",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="ulid")iP.test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"ulid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),B(r,{validation:"url",code:x.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"regex",code:x.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(r=this._getOrReturnCtx(e,r),B(r,{code:x.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),s.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),B(r,{code:x.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),B(r,{code:x.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?hP(i).test(e.data)||(r=this._getOrReturnCtx(e,r),B(r,{code:x.invalid_string,validation:"datetime",message:i.message}),s.dirty()):i.kind==="ip"?dP(e.data,i.version)||(r=this._getOrReturnCtx(e,r),B(r,{validation:"ip",code:x.invalid_string,message:i.message}),s.dirty()):_e.assertNever(i);return{status:s.value,value:e.data}}_regex(e,n,s){return this.refinement(r=>e.test(r),{validation:n,code:x.invalid_string,...Z.errToObj(s)})}_addCheck(e){return new Kt({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Z.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Z.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Z.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Z.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Z.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Z.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Z.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Z.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...Z.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...Z.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...Z.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...Z.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...Z.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...Z.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...Z.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...Z.errToObj(n)})}nonempty(e){return this.min(1,Z.errToObj(e))}trim(){return new Kt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Kt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Kt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Kt.create=t=>{var e;return new Kt({checks:[],typeName:ee.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ce(t)})};function fP(t,e){const n=(t.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=n>s?n:s,i=parseInt(t.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return i%o/Math.pow(10,r)}class ms extends ue{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==$.number){const i=this._getOrReturnCtx(e);return B(i,{code:x.invalid_type,expected:$.number,received:i.parsedType}),ae}let s;const r=new mt;for(const i of this._def.checks)i.kind==="int"?_e.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),B(s,{code:x.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),B(s,{code:x.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),B(s,{code:x.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?fP(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),B(s,{code:x.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),B(s,{code:x.not_finite,message:i.message}),r.dirty()):_e.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,Z.toString(n))}gt(e,n){return this.setLimit("min",e,!1,Z.toString(n))}lte(e,n){return this.setLimit("max",e,!0,Z.toString(n))}lt(e,n){return this.setLimit("max",e,!1,Z.toString(n))}setLimit(e,n,s,r){return new ms({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:Z.toString(r)}]})}_addCheck(e){return new ms({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Z.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Z.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:Z.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Z.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Z.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&_e.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(n===null||s.value>n)&&(n=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(n)&&Number.isFinite(e)}}ms.create=t=>new ms({checks:[],typeName:ee.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...ce(t)});class gs extends ue{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==$.bigint){const i=this._getOrReturnCtx(e);return B(i,{code:x.invalid_type,expected:$.bigint,received:i.parsedType}),ae}let s;const r=new mt;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),B(s,{code:x.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),B(s,{code:x.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),B(s,{code:x.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):_e.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,Z.toString(n))}gt(e,n){return this.setLimit("min",e,!1,Z.toString(n))}lte(e,n){return this.setLimit("max",e,!0,Z.toString(n))}lt(e,n){return this.setLimit("max",e,!1,Z.toString(n))}setLimit(e,n,s,r){return new gs({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:Z.toString(r)}]})}_addCheck(e){return new gs({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}gs.create=t=>{var e;return new gs({checks:[],typeName:ee.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...ce(t)})};class oo extends ue{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==$.boolean){const s=this._getOrReturnCtx(e);return B(s,{code:x.invalid_type,expected:$.boolean,received:s.parsedType}),ae}return bt(e.data)}}oo.create=t=>new oo({typeName:ee.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...ce(t)});class nr extends ue{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==$.date){const i=this._getOrReturnCtx(e);return B(i,{code:x.invalid_type,expected:$.date,received:i.parsedType}),ae}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return B(i,{code:x.invalid_date}),ae}const s=new mt;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),B(r,{code:x.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),B(r,{code:x.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):_e.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new nr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:Z.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:Z.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}nr.create=t=>new nr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:ee.ZodDate,...ce(t)});class hc extends ue{_parse(e){if(this._getType(e)!==$.symbol){const s=this._getOrReturnCtx(e);return B(s,{code:x.invalid_type,expected:$.symbol,received:s.parsedType}),ae}return bt(e.data)}}hc.create=t=>new hc({typeName:ee.ZodSymbol,...ce(t)});class ao extends ue{_parse(e){if(this._getType(e)!==$.undefined){const s=this._getOrReturnCtx(e);return B(s,{code:x.invalid_type,expected:$.undefined,received:s.parsedType}),ae}return bt(e.data)}}ao.create=t=>new ao({typeName:ee.ZodUndefined,...ce(t)});class co extends ue{_parse(e){if(this._getType(e)!==$.null){const s=this._getOrReturnCtx(e);return B(s,{code:x.invalid_type,expected:$.null,received:s.parsedType}),ae}return bt(e.data)}}co.create=t=>new co({typeName:ee.ZodNull,...ce(t)});class Zr extends ue{constructor(){super(...arguments),this._any=!0}_parse(e){return bt(e.data)}}Zr.create=t=>new Zr({typeName:ee.ZodAny,...ce(t)});class Ks extends ue{constructor(){super(...arguments),this._unknown=!0}_parse(e){return bt(e.data)}}Ks.create=t=>new Ks({typeName:ee.ZodUnknown,...ce(t)});class Fn extends ue{_parse(e){const n=this._getOrReturnCtx(e);return B(n,{code:x.invalid_type,expected:$.never,received:n.parsedType}),ae}}Fn.create=t=>new Fn({typeName:ee.ZodNever,...ce(t)});class dc extends ue{_parse(e){if(this._getType(e)!==$.undefined){const s=this._getOrReturnCtx(e);return B(s,{code:x.invalid_type,expected:$.void,received:s.parsedType}),ae}return bt(e.data)}}dc.create=t=>new dc({typeName:ee.ZodVoid,...ce(t)});class Zt extends ue{_parse(e){const{ctx:n,status:s}=this._processInputParams(e),r=this._def;if(n.parsedType!==$.array)return B(n,{code:x.invalid_type,expected:$.array,received:n.parsedType}),ae;if(r.exactLength!==null){const o=n.data.length>r.exactLength.value,a=n.data.length<r.exactLength.value;(o||a)&&(B(n,{code:o?x.too_big:x.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&n.data.length<r.minLength.value&&(B(n,{code:x.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&n.data.length>r.maxLength.value&&(B(n,{code:x.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new yn(n,o,n.path,a)))).then(o=>mt.mergeArray(s,o));const i=[...n.data].map((o,a)=>r.type._parseSync(new yn(n,o,n.path,a)));return mt.mergeArray(s,i)}get element(){return this._def.type}min(e,n){return new Zt({...this._def,minLength:{value:e,message:Z.toString(n)}})}max(e,n){return new Zt({...this._def,maxLength:{value:e,message:Z.toString(n)}})}length(e,n){return new Zt({...this._def,exactLength:{value:e,message:Z.toString(n)}})}nonempty(e){return this.min(1,e)}}Zt.create=(t,e)=>new Zt({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ee.ZodArray,...ce(e)});function wr(t){if(t instanceof Fe){const e={};for(const n in t.shape){const s=t.shape[n];e[n]=xn.create(wr(s))}return new Fe({...t._def,shape:()=>e})}else return t instanceof Zt?new Zt({...t._def,type:wr(t.element)}):t instanceof xn?xn.create(wr(t.unwrap())):t instanceof rr?rr.create(wr(t.unwrap())):t instanceof vn?vn.create(t.items.map(e=>wr(e))):t}class Fe extends ue{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=_e.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==$.object){const l=this._getOrReturnCtx(e);return B(l,{code:x.invalid_type,expected:$.object,received:l.parsedType}),ae}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Fn&&this._def.unknownKeys==="strip"))for(const l in r.data)o.includes(l)||a.push(l);const c=[];for(const l of o){const u=i[l],h=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new yn(r,h,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof Fn){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of a)c.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(l==="strict")a.length>0&&(B(r,{code:x.unrecognized_keys,keys:a}),s.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of a){const h=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new yn(r,h,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const h=await u.key;l.push({key:h,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>mt.mergeObjectSync(s,l)):mt.mergeObjectSync(s,c)}get shape(){return this._def.shape()}strict(e){return Z.errToObj,new Fe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,s)=>{var r,i,o,a;const c=(o=(i=(r=this._def).errorMap)===null||i===void 0?void 0:i.call(r,n,s).message)!==null&&o!==void 0?o:s.defaultError;return n.code==="unrecognized_keys"?{message:(a=Z.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Fe({...this._def,unknownKeys:"strip"})}passthrough(){return new Fe({...this._def,unknownKeys:"passthrough"})}extend(e){return new Fe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Fe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ee.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Fe({...this._def,catchall:e})}pick(e){const n={};return _e.objectKeys(e).forEach(s=>{e[s]&&this.shape[s]&&(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}omit(e){const n={};return _e.objectKeys(this.shape).forEach(s=>{e[s]||(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}deepPartial(){return wr(this)}partial(e){const n={};return _e.objectKeys(this.shape).forEach(s=>{const r=this.shape[s];e&&!e[s]?n[s]=r:n[s]=r.optional()}),new Fe({...this._def,shape:()=>n})}required(e){const n={};return _e.objectKeys(this.shape).forEach(s=>{if(e&&!e[s])n[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof xn;)i=i._def.innerType;n[s]=i}}),new Fe({...this._def,shape:()=>n})}keyof(){return Nb(_e.objectKeys(this.shape))}}Fe.create=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strip",catchall:Fn.create(),typeName:ee.ZodObject,...ce(e)});Fe.strictCreate=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strict",catchall:Fn.create(),typeName:ee.ZodObject,...ce(e)});Fe.lazycreate=(t,e)=>new Fe({shape:t,unknownKeys:"strip",catchall:Fn.create(),typeName:ee.ZodObject,...ce(e)});class lo extends ue{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.options;function r(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new Wt(a.ctx.common.issues));return B(n,{code:x.invalid_union,unionErrors:o}),ae}if(n.common.async)return Promise.all(s.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const c of s){const l={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new Wt(c));return B(n,{code:x.invalid_union,unionErrors:a}),ae}}get options(){return this._def.options}}lo.create=(t,e)=>new lo({options:t,typeName:ee.ZodUnion,...ce(e)});const Ia=t=>t instanceof fo?Ia(t.schema):t instanceof Xt?Ia(t.innerType()):t instanceof po?[t.value]:t instanceof ys?t.options:t instanceof mo?Object.keys(t.enum):t instanceof go?Ia(t._def.innerType):t instanceof ao?[void 0]:t instanceof co?[null]:null;class Tl extends ue{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.object)return B(n,{code:x.invalid_type,expected:$.object,received:n.parsedType}),ae;const s=this.discriminator,r=n.data[s],i=this.optionsMap.get(r);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(B(n,{code:x.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),ae)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,s){const r=new Map;for(const i of n){const o=Ia(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,i)}}return new Tl({typeName:ee.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:r,...ce(s)})}}function yh(t,e){const n=ns(t),s=ns(e);if(t===e)return{valid:!0,data:t};if(n===$.object&&s===$.object){const r=_e.objectKeys(e),i=_e.objectKeys(t).filter(a=>r.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=yh(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===$.array&&s===$.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=yh(o,a);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return n===$.date&&s===$.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class uo extends ue{_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=(i,o)=>{if(mh(i)||mh(o))return ae;const a=yh(i.value,o.value);return a.valid?((gh(i)||gh(o))&&n.dirty(),{status:n.value,value:a.data}):(B(s,{code:x.invalid_intersection_types}),ae)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}uo.create=(t,e,n)=>new uo({left:t,right:e,typeName:ee.ZodIntersection,...ce(n)});class vn extends ue{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==$.array)return B(s,{code:x.invalid_type,expected:$.array,received:s.parsedType}),ae;if(s.data.length<this._def.items.length)return B(s,{code:x.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ae;!this._def.rest&&s.data.length>this._def.items.length&&(B(s,{code:x.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...s.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new yn(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>mt.mergeArray(n,o)):mt.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new vn({...this._def,rest:e})}}vn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new vn({items:t,typeName:ee.ZodTuple,rest:null,...ce(e)})};class ho extends ue{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==$.object)return B(s,{code:x.invalid_type,expected:$.object,received:s.parsedType}),ae;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in s.data)r.push({key:i._parse(new yn(s,a,s.path,a)),value:o._parse(new yn(s,s.data[a],s.path,a))});return s.common.async?mt.mergeObjectAsync(n,r):mt.mergeObjectSync(n,r)}get element(){return this._def.valueType}static create(e,n,s){return n instanceof ue?new ho({keyType:e,valueType:n,typeName:ee.ZodRecord,...ce(s)}):new ho({keyType:Kt.create(),valueType:e,typeName:ee.ZodRecord,...ce(n)})}}class fc extends ue{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==$.map)return B(s,{code:x.invalid_type,expected:$.map,received:s.parsedType}),ae;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,c],l)=>({key:r._parse(new yn(s,a,s.path,[l,"key"])),value:i._parse(new yn(s,c,s.path,[l,"value"]))}));if(s.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return ae;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return ae;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}}}}fc.create=(t,e,n)=>new fc({valueType:e,keyType:t,typeName:ee.ZodMap,...ce(n)});class sr extends ue{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==$.set)return B(s,{code:x.invalid_type,expected:$.set,received:s.parsedType}),ae;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(B(s,{code:x.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),n.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(B(s,{code:x.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const l=new Set;for(const u of c){if(u.status==="aborted")return ae;u.status==="dirty"&&n.dirty(),l.add(u.value)}return{status:n.value,value:l}}const a=[...s.data.values()].map((c,l)=>i._parse(new yn(s,c,s.path,l)));return s.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new sr({...this._def,minSize:{value:e,message:Z.toString(n)}})}max(e,n){return new sr({...this._def,maxSize:{value:e,message:Z.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}sr.create=(t,e)=>new sr({valueType:t,minSize:null,maxSize:null,typeName:ee.ZodSet,...ce(e)});class Dr extends ue{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.function)return B(n,{code:x.invalid_type,expected:$.function,received:n.parsedType}),ae;function s(a,c){return lc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,cc(),ro].filter(l=>!!l),issueData:{code:x.invalid_arguments,argumentsError:c}})}function r(a,c){return lc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,cc(),ro].filter(l=>!!l),issueData:{code:x.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof Qr){const a=this;return bt(async function(...c){const l=new Wt([]),u=await a._def.args.parseAsync(c,i).catch(p=>{throw l.addIssue(s(c,p)),l}),h=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(h,i).catch(p=>{throw l.addIssue(r(h,p)),l})})}else{const a=this;return bt(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new Wt([s(c,l.error)]);const u=Reflect.apply(o,this,l.data),h=a._def.returns.safeParse(u,i);if(!h.success)throw new Wt([r(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Dr({...this._def,args:vn.create(e).rest(Ks.create())})}returns(e){return new Dr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,s){return new Dr({args:e||vn.create([]).rest(Ks.create()),returns:n||Ks.create(),typeName:ee.ZodFunction,...ce(s)})}}class fo extends ue{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}fo.create=(t,e)=>new fo({getter:t,typeName:ee.ZodLazy,...ce(e)});class po extends ue{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return B(n,{received:n.data,code:x.invalid_literal,expected:this._def.value}),ae}return{status:"valid",value:e.data}}get value(){return this._def.value}}po.create=(t,e)=>new po({value:t,typeName:ee.ZodLiteral,...ce(e)});function Nb(t,e){return new ys({values:t,typeName:ee.ZodEnum,...ce(e)})}class ys extends ue{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),s=this._def.values;return B(n,{expected:_e.joinValues(s),received:n.parsedType,code:x.invalid_type}),ae}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),s=this._def.values;return B(n,{received:n.data,code:x.invalid_enum_value,options:s}),ae}return bt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return ys.create(e)}exclude(e){return ys.create(this.options.filter(n=>!e.includes(n)))}}ys.create=Nb;class mo extends ue{_parse(e){const n=_e.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==$.string&&s.parsedType!==$.number){const r=_e.objectValues(n);return B(s,{expected:_e.joinValues(r),received:s.parsedType,code:x.invalid_type}),ae}if(n.indexOf(e.data)===-1){const r=_e.objectValues(n);return B(s,{received:s.data,code:x.invalid_enum_value,options:r}),ae}return bt(e.data)}get enum(){return this._def.values}}mo.create=(t,e)=>new mo({values:t,typeName:ee.ZodNativeEnum,...ce(e)});class Qr extends ue{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==$.promise&&n.common.async===!1)return B(n,{code:x.invalid_type,expected:$.promise,received:n.parsedType}),ae;const s=n.parsedType===$.promise?n.data:Promise.resolve(n.data);return bt(s.then(r=>this._def.type.parseAsync(r,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Qr.create=(t,e)=>new Qr({type:t,typeName:ee.ZodPromise,...ce(e)});class Xt extends ue{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ee.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:o=>{B(s,o),o.fatal?n.abort():n.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const o=r.transform(s.data,i);return s.common.issues.length?{status:"dirty",value:s.data}:s.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:s.path,parent:s})):this._def.schema._parseSync({data:o,path:s.path,parent:s})}if(r.type==="refinement"){const o=a=>{const c=r.refinement(a,i);if(s.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?ae:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?ae:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!io(o))return o;const a=r.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>io(o)?Promise.resolve(r.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);_e.assertNever(r)}}Xt.create=(t,e,n)=>new Xt({schema:t,typeName:ee.ZodEffects,effect:e,...ce(n)});Xt.createWithPreprocess=(t,e,n)=>new Xt({schema:e,effect:{type:"preprocess",transform:t},typeName:ee.ZodEffects,...ce(n)});class xn extends ue{_parse(e){return this._getType(e)===$.undefined?bt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}xn.create=(t,e)=>new xn({innerType:t,typeName:ee.ZodOptional,...ce(e)});class rr extends ue{_parse(e){return this._getType(e)===$.null?bt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}rr.create=(t,e)=>new rr({innerType:t,typeName:ee.ZodNullable,...ce(e)});class go extends ue{_parse(e){const{ctx:n}=this._processInputParams(e);let s=n.data;return n.parsedType===$.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}go.create=(t,e)=>new go({innerType:t,typeName:ee.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ce(e)});class pc extends ue{_parse(e){const{ctx:n}=this._processInputParams(e),s={...n,common:{...n.common,issues:[]}},r=this._def.innerType._parse({data:s.data,path:s.path,parent:{...s}});return uc(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Wt(s.common.issues)},input:s.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Wt(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}}pc.create=(t,e)=>new pc({innerType:t,typeName:ee.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ce(e)});class mc extends ue{_parse(e){if(this._getType(e)!==$.nan){const s=this._getOrReturnCtx(e);return B(s,{code:x.invalid_type,expected:$.nan,received:s.parsedType}),ae}return{status:"valid",value:e.data}}}mc.create=t=>new mc({typeName:ee.ZodNaN,...ce(t)});const pP=Symbol("zod_brand");class Ob extends ue{_parse(e){const{ctx:n}=this._processInputParams(e),s=n.data;return this._def.type._parse({data:s,path:n.path,parent:n})}unwrap(){return this._def.type}}class qo extends ue{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?ae:i.status==="dirty"?(n.dirty(),xb(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?ae:r.status==="dirty"?(n.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,n){return new qo({in:e,out:n,typeName:ee.ZodPipeline})}}class gc extends ue{_parse(e){const n=this._def.innerType._parse(e);return io(n)&&(n.value=Object.freeze(n.value)),n}}gc.create=(t,e)=>new gc({innerType:t,typeName:ee.ZodReadonly,...ce(e)});const Db=(t,e={},n)=>t?Zr.create().superRefine((s,r)=>{var i,o;if(!t(s)){const a=typeof e=="function"?e(s):typeof e=="string"?{message:e}:e,c=(o=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,l=typeof a=="string"?{message:a}:a;r.addIssue({code:"custom",...l,fatal:c})}}):Zr.create(),mP={object:Fe.lazycreate};var ee;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(ee||(ee={}));const gP=(t,e={message:`Input not instance of ${t.name}`})=>Db(n=>n instanceof t,e),Pb=Kt.create,Lb=ms.create,yP=mc.create,vP=gs.create,Mb=oo.create,_P=nr.create,wP=hc.create,bP=ao.create,EP=co.create,TP=Zr.create,IP=Ks.create,SP=Fn.create,CP=dc.create,AP=Zt.create,kP=Fe.create,RP=Fe.strictCreate,xP=lo.create,NP=Tl.create,OP=uo.create,DP=vn.create,PP=ho.create,LP=fc.create,MP=sr.create,UP=Dr.create,FP=fo.create,$P=po.create,BP=ys.create,VP=mo.create,jP=Qr.create,og=Xt.create,qP=xn.create,HP=rr.create,zP=Xt.createWithPreprocess,KP=qo.create,GP=()=>Pb().optional(),WP=()=>Lb().optional(),ZP=()=>Mb().optional(),QP={string:t=>Kt.create({...t,coerce:!0}),number:t=>ms.create({...t,coerce:!0}),boolean:t=>oo.create({...t,coerce:!0}),bigint:t=>gs.create({...t,coerce:!0}),date:t=>nr.create({...t,coerce:!0})},YP=ae;var Ge=Object.freeze({__proto__:null,defaultErrorMap:ro,setErrorMap:tP,getErrorMap:cc,makeIssue:lc,EMPTY_PATH:nP,addIssueToContext:B,ParseStatus:mt,INVALID:ae,DIRTY:xb,OK:bt,isAborted:mh,isDirty:gh,isValid:io,isAsync:uc,get util(){return _e},get objectUtil(){return ph},ZodParsedType:$,getParsedType:ns,ZodType:ue,ZodString:Kt,ZodNumber:ms,ZodBigInt:gs,ZodBoolean:oo,ZodDate:nr,ZodSymbol:hc,ZodUndefined:ao,ZodNull:co,ZodAny:Zr,ZodUnknown:Ks,ZodNever:Fn,ZodVoid:dc,ZodArray:Zt,ZodObject:Fe,ZodUnion:lo,ZodDiscriminatedUnion:Tl,ZodIntersection:uo,ZodTuple:vn,ZodRecord:ho,ZodMap:fc,ZodSet:sr,ZodFunction:Dr,ZodLazy:fo,ZodLiteral:po,ZodEnum:ys,ZodNativeEnum:mo,ZodPromise:Qr,ZodEffects:Xt,ZodTransformer:Xt,ZodOptional:xn,ZodNullable:rr,ZodDefault:go,ZodCatch:pc,ZodNaN:mc,BRAND:pP,ZodBranded:Ob,ZodPipeline:qo,ZodReadonly:gc,custom:Db,Schema:ue,ZodSchema:ue,late:mP,get ZodFirstPartyTypeKind(){return ee},coerce:QP,any:TP,array:AP,bigint:vP,boolean:Mb,date:_P,discriminatedUnion:NP,effect:og,enum:BP,function:UP,instanceof:gP,intersection:OP,lazy:FP,literal:$P,map:LP,nan:yP,nativeEnum:VP,never:SP,null:EP,nullable:HP,number:Lb,object:kP,oboolean:ZP,onumber:WP,optional:qP,ostring:GP,pipeline:KP,preprocess:zP,promise:jP,record:PP,set:MP,strictObject:RP,string:Pb,symbol:wP,transformer:og,tuple:DP,undefined:bP,union:xP,unknown:IP,void:CP,NEVER:YP,ZodIssueCode:x,quotelessJson:eP,ZodError:Wt});const XP=Ge.enum(["Unknown","Facebook","Instagram","YouTube","Spotify","Twitter","LinkedIn","GitHub","TikTok"]),JP=Ge.object({link:Ge.string()}),ag=Ge.object({userUid:Ge.string(),userUri:Ge.string().optional(),displayName:Ge.string(),photoURL:Ge.string(),coverImg:Ge.string(),shortBio:Ge.string(),bgColor:Ge.string(),fontColor:Ge.string().optional(),fontFamily:Ge.string().optional(),longBio:Ge.string(),socialLinks:Ge.record(XP,JP)}),Ho={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Yr={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Et={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},eL={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Ub={dangerouslyHTMLString:!1,multiple:!0,position:Ho.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},tL={rtl:!1,newestOnTop:!1,toastClassName:""},Fb={...Ub,...tL};({...Ub,type:Et.DEFAULT});var Ce=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Ce||{}),vh=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(vh||{});const nL={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},sL={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},rL={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},iL={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},cg="Toastify--animate Toastify__none-enter";function $b(t,e=!1){var n;let s=nL;if(!t||typeof t=="string")switch(t){case"flip":s=iL;break;case"zoom":s=rL;break;case"slide":s=sL;break}else s=t;if(e)s.enter=cg;else if(s.enter===cg){const r=(n=s.exit.split("__")[1])==null?void 0:n.split("-")[0];s.enter="Toastify--animate Toastify__".concat(r,"-enter")}return s}function oL(t){return t.containerId||String(t.position)}const Il="will-unmount";function aL(t=Ho.TOP_RIGHT){return!!document.querySelector(".".concat(Ce.CSS_NAMESPACE,"__toast-container--").concat(t))}function cL(t=Ho.TOP_RIGHT){return"".concat(Ce.CSS_NAMESPACE,"__toast-container--").concat(t)}function lL(t,e,n=!1){const s=["".concat(Ce.CSS_NAMESPACE,"__toast-container"),"".concat(Ce.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(Ce.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return Pr(e)?e({position:t,rtl:n,defaultClassName:s}):"".concat(s," ").concat(e||"")}function uL(t){var e;const{position:n,containerClassName:s,rtl:r=!1,style:i={}}=t,o=Ce.CSS_NAMESPACE,a=cL(n),c=document.querySelector(".".concat(o)),l=document.querySelector(".".concat(a)),u=!!l&&!((e=l.className)!=null&&e.includes(Il)),h=c||document.createElement("div"),d=document.createElement("div");d.className=lL(n,s,r),d.dataset.testid="".concat(Ce.CSS_NAMESPACE,"__toast-container--").concat(n),d.id=oL(t);for(const p in i)if(Object.prototype.hasOwnProperty.call(i,p)){const g=i[p];d.style[p]=g}return c||(h.className=Ce.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function _h(t){var e,n,s;const r=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(r);i&&i.removeEventListener("animationend",_h,!1);try{yo[r].unmount(),(s=document.getElementById(r))==null||s.remove(),delete yo[r],delete nt[r]}catch{}}const yo=Jt({});function hL(t,e){const n=document.getElementById(String(e));n&&(yo[n.id]=t)}function wh(t,e=!0){const n=String(t);if(!yo[n])return;const s=document.getElementById(n);s&&s.classList.add(Il),e?(fL(t),s&&s.addEventListener("animationend",_h,!1)):_h(n),_n.items=_n.items.filter(r=>r.containerId!==t)}function dL(t){for(const e in yo)wh(e,t);_n.items=[]}function Bb(t,e){const n=document.getElementById(t.toastId);if(n){let s=t;s={...s,...$b(s.transition)};const r=s.appendPosition?"".concat(s.exit,"--").concat(s.position):s.exit;n.className+=" ".concat(r),e&&e(n)}}function fL(t){for(const e in nt)if(e===t)for(const n of nt[e]||[])Bb(n)}function pL(t){const e=Xr().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function bf(t){return document.getElementById(t)}function mL(t){const e=bf(t.containerId);return e&&e.classList.contains(Il)}function lg(t){var e;const n=Gs(t.content)?oe(t.content.props):null;return n??oe((e=t.data)!=null?e:{})}function gL(t){return t?_n.items.filter(e=>e.containerId===t).length>0:_n.items.length>0}function yL(){if(_n.items.length>0){const t=_n.items.shift();Sa(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const nt=Jt({}),_n=Jt({items:[]});function Xr(){const t=oe(nt);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function vL(t){return Xr().find(e=>e.toastId===t)}function Sa(t,e={}){if(mL(e)){const n=bf(e.containerId);n&&n.addEventListener("animationend",bh.bind(null,t,e),!1)}else bh(t,e)}function bh(t,e={}){const n=bf(e.containerId);n&&n.removeEventListener("animationend",bh.bind(null,t,e),!1);const s=nt[e.containerId]||[],r=s.length>0;if(!r&&!aL(e.position)){const i=uL(e),o=ly(UL,e);o.mount(i),hL(o,i.id)}r&&!e.updateId&&(e.position=s[0].position),ei(()=>{e.updateId?Nt.update(e):Nt.add(t,e)})}const Nt={add(t,e){const{containerId:n=""}=e;n&&(nt[n]=nt[n]||[],nt[n].find(s=>s.toastId===e.toastId)||setTimeout(()=>{var s,r;e.newestOnTop?(s=nt[n])==null||s.unshift(e):(r=nt[n])==null||r.push(e),e.onOpen&&e.onOpen(lg(e))},e.delay||0))},remove(t){if(t){const e=pL(t);if(e){const n=nt[e];let s=n.find(r=>r.toastId===t);nt[e]=n.filter(r=>r.toastId!==t),!nt[e].length&&!gL(e)&&wh(e,!1),yL(),ei(()=>{s!=null&&s.onClose&&(s.onClose(lg(s)),s=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){nt[e]=nt[e]||[];const n=nt[e].find(i=>i.toastId===t.toastId),s=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,r={...t,disabledEnterTransition:!s,updateId:void 0};Nt.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{Ee(r.content,r)},t.delay||0)}},clear(t,e=!0){t?wh(t,e):dL(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,s=document.getElementById(n);s&&(s.removeEventListener("animationend",Nt.dismissCallback,!1),setTimeout(()=>{Nt.remove(n)}))},dismiss(t){if(t){const e=Xr();for(const n of e)if(n.toastId===t){Bb(n,s=>{s.addEventListener("animationend",Nt.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=Xr();for(const n of e)if(n.toastId===t){const s=document.getElementById(t);s&&(s.remove(),s.removeEventListener("animationend",Nt.dismissCallback,!1),Nt.remove(t));break}}}},Vb=Jt({}),yc=Jt({});function jb(){return Math.random().toString(36).substring(2,9)}function _L(t){return typeof t=="number"&&!isNaN(t)}function Eh(t){return typeof t=="string"}function Pr(t){return typeof t=="function"}function Sl(...t){return Bn(...t)}function Ca(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function wL(t={}){Vb["".concat(Ce.CSS_NAMESPACE,"-default-options")]=t}function bL(){return Vb["".concat(Ce.CSS_NAMESPACE,"-default-options")]||Fb}function EL(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Aa=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(Aa||{});const qb={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:Ho.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:Yr.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Et.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},TL={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Et.DEFAULT},theme:{type:String,required:!1,default:Yr.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},IL=ar({name:"ProgressBar",props:TL,setup(t,{attrs:e}){const n=Tn(),s=xe(()=>t.hide?"true":"false"),r=xe(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=xe(()=>["".concat(Ce.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(Ce.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(Ce.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(Ce.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(Ce.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(Ce.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=xe(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=xe(()=>t.controlledProgress?null:c),u=xe(()=>t.controlledProgress?c:null);return ua(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>ge("div",{ref:n,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:o.value,style:r.value},null)}}),SL=ar({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:Yr.AUTO},type:{type:String,required:!1,default:Yr.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>ge("button",{class:"".concat(Ce.CSS_NAMESPACE,"__close-button ").concat(Ce.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[ge("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[ge("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Cl=({theme:t,type:e,path:n,...s})=>ge("svg",Bn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},s),[ge("path",{d:n},null)]);function CL(t){return ge(Cl,Bn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function AL(t){return ge(Cl,Bn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function kL(t){return ge(Cl,Bn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function RL(t){return ge(Cl,Bn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function xL(){return ge("div",{class:"".concat(Ce.CSS_NAMESPACE,"__spinner")},null)}const Th={info:AL,warning:CL,success:kL,error:RL,spinner:xL},NL=t=>t in Th;function OL({theme:t,type:e,isLoading:n,icon:s}){let r;const i={theme:t,type:e};return n?r=Th.spinner():s===!1?r=void 0:Ca(s)?r=oe(s):Pr(s)?r=s(i):Gs(s)?r=Ws(s,i):Eh(s)||_L(s)?r=s:NL(e)&&(r=Th[e](i)),r}const DL=()=>{};function PL(t,e,n=Ce.COLLAPSE_DURATION){const{scrollHeight:s,style:r}=t,i=n;requestAnimationFrame(()=>{r.minHeight="initial",r.height=s+"px",r.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,i)})})}function LL(t){const e=Tn(!1),n=Tn(!1),s=Tn(!1),r=Tn(Aa.Enter),i=Jt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Ce.COLLAPSE_DURATION}),o=i.done||DL,a=xe(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),c=xe(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),l=xe(()=>t.pauseOnHover?{onMouseenter:E,onMouseleave:v}:{});function u(){const S=a.value.split(" ");d().addEventListener(vh.ENTRANCE_ANIMATION_END,v,{once:!0});const D=k=>{const A=d();k.target===A&&(A.dispatchEvent(new Event(vh.ENTRANCE_ANIMATION_END)),A.removeEventListener("animationend",D),A.removeEventListener("animationcancel",D),r.value===Aa.Enter&&k.type!=="animationcancel"&&A.classList.remove(...S))},F=()=>{const k=d();k.classList.add(...S),k.addEventListener("animationend",D),k.addEventListener("animationcancel",D)};t.pauseOnFocusLoss&&p(),F()}function h(){if(!d())return;const S=()=>{const F=d();F.removeEventListener("animationend",S),i.collapse?PL(F,o,i.collapseDuration):o()},D=()=>{const F=d();r.value=Aa.Exit,F&&(F.className+=" ".concat(c.value),F.addEventListener("animationend",S))};n.value||(s.value?S():setTimeout(D))}function d(){return t.toastRef.value}function p(){document.hasFocus()||E(),window.addEventListener("focus",v),window.addEventListener("blur",E)}function g(){window.removeEventListener("focus",v),window.removeEventListener("blur",E)}function v(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function E(){e.value=!1}function I(S){S&&(S.stopPropagation(),S.preventDefault()),n.value=!1}return ua(h),ua(()=>{const S=Xr();n.value=S.findIndex(D=>D.toastId===i.toastId)>-1}),ua(()=>{t.isLoading!==void 0&&(t.loading.value?E():v())}),jh(u),kc(()=>{t.pauseOnFocusLoss&&g()}),{isIn:n,isRunning:e,hideToast:I,eventHandlers:l}}const ML=ar({name:"ToastItem",inheritAttrs:!1,props:qb,setup(t){const e=Tn(),n=xe(()=>!!t.isLoading),s=xe(()=>t.progress!==void 0&&t.progress!==null),r=xe(()=>OL(t)),i=xe(()=>["".concat(Ce.CSS_NAMESPACE,"__toast"),"".concat(Ce.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(Ce.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(Ce.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=LL({toastRef:e,loading:n,done:()=>{Nt.remove(t.toastId)},...$b(t.transition,t.disabledEnterTransition),...t});return()=>ge("div",Bn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[ge("div",{role:t.role,"data-testid":"toast-body",class:"".concat(Ce.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[r.value!=null&&ge("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(Ce.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(Ce.CSS_NAMESPACE,"--animate-icon ").concat(Ce.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[Ca(r.value)?br(oe(r.value),{theme:t.theme,type:t.type}):Pr(r.value)?r.value({theme:t.theme,type:t.type}):r.value]),ge("div",{"data-testid":"toast-content"},[Ca(t.content)?br(oe(t.content),{toastProps:oe(t),closeToast:c,data:t.data}):Pr(t.content)?t.content({toastProps:oe(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?br("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&ge(SL,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),Ca(t.closeButton)?br(oe(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):Pr(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,ge(IL,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:s.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let Li=0;function Hb(){typeof window>"u"||(Li&&window.cancelAnimationFrame(Li),Li=window.requestAnimationFrame(Hb),yc.lastUrl!==window.location.href&&(yc.lastUrl=window.location.href,Nt.clear()))}const UL=ar({name:"ToastifyContainer",inheritAttrs:!1,props:qb,setup(t){const e=xe(()=>t.containerId),n=xe(()=>nt[e.value]||[]),s=xe(()=>n.value.filter(r=>r.position===t.position));return jh(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Hb)}),kc(()=>{typeof window<"u"&&Li&&(window.cancelAnimationFrame(Li),yc.lastUrl="")}),()=>ge(xt,null,[s.value.map(r=>{const{toastId:i=""}=r;return ge(ML,Bn({key:i},r),null)})])}});let au=!1;function zb(){const t=[];return Xr().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(Il)&&t.push(e)}),t}function FL(t){const e=zb().length,n=t??0;return n>0&&e+_n.items.length>=n}function $L(t){FL(t.limit)&&!t.updateId&&_n.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function Is(t,e,n={}){if(au)return;n=Sl(bL(),{type:e},oe(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=jb()),n={...n,content:t,containerId:n.containerId||String(n.position)};const s=Number(n==null?void 0:n.progress);return s<0&&(n.progress=0),s>1&&(n.progress=1),n.theme==="auto"&&(n.theme=EL()),$L(n),yc.lastUrl=window.location.href,n.multiple?_n.items.length?n.updateId&&Sa(t,n):Sa(t,n):(au=!0,Ee.clearAll(void 0,!1),setTimeout(()=>{Sa(t,n)},0),setTimeout(()=>{au=!1},390)),n.toastId}const Ee=(t,e)=>Is(t,Et.DEFAULT,e);Ee.info=(t,e)=>Is(t,Et.DEFAULT,{...e,type:Et.INFO});Ee.error=(t,e)=>Is(t,Et.DEFAULT,{...e,type:Et.ERROR});Ee.warning=(t,e)=>Is(t,Et.DEFAULT,{...e,type:Et.WARNING});Ee.warn=Ee.warning;Ee.success=(t,e)=>Is(t,Et.DEFAULT,{...e,type:Et.SUCCESS});Ee.loading=(t,e)=>Is(t,Et.DEFAULT,Sl(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));Ee.dark=(t,e)=>Is(t,Et.DEFAULT,Sl(e,{theme:Yr.DARK}));Ee.remove=t=>{t?Nt.dismiss(t):Nt.clear()};Ee.clearAll=(t,e)=>{Nt.clear(t,e)};Ee.isActive=t=>{let e=!1;return e=zb().findIndex(n=>n.toastId===t)>-1,e};Ee.update=(t,e={})=>{setTimeout(()=>{const n=vL(t);if(n){const s=oe(n),{content:r}=s,i={...s,...e,toastId:e.toastId||t,updateId:jb()},o=i.render||r;delete i.render,Is(o,i.type,i)}},0)};Ee.done=t=>{Ee.update(t,{isLoading:!1,progress:1})};Ee.promise=BL;function BL(t,{pending:e,error:n,success:s},r){var i,o,a;let c;const l={...r||{},autoClose:!1};e&&(c=Eh(e)?Ee.loading(e,l):Ee.loading(e.render,{...l,...e}));const u={autoClose:(i=r==null?void 0:r.autoClose)!=null?i:!0,closeOnClick:(o=r==null?void 0:r.closeOnClick)!=null?o:!0,closeButton:(a=r==null?void 0:r.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(p,g,v)=>{if(g==null){Ee.remove(c);return}const E={type:p,...u,...r,data:v},I=Eh(g)?{render:g}:g;return c?Ee.update(c,{...E,...I,isLoading:!1}):Ee(I.render,{...E,...I,isLoading:!1}),v},d=Pr(t)?t():t;return d.then(p=>{h("success",s,p)}).catch(p=>{h("error",n,p)}),d}Ee.POSITION=Ho;Ee.THEME=Yr;Ee.TYPE=Et;Ee.TRANSITIONS=eL;const Kb={install(t,e={}){VL(e)}};typeof window<"u"&&(window.Vue3Toastify=Kb);function VL(t={}){const e=Sl(Fb,t);wL(e)}const ug=N0("profile",{state:()=>({profile:null}),getters:{isOwnProfile({profile:t}){var e,n;return(e=Ft.currentUser)!=null&&e.uid?((n=Ft.currentUser)==null?void 0:n.uid)===(t==null?void 0:t.userUid):!1},invertedBgColor:({profile:t})=>t!=null&&t.bgColor?WD(t.bgColor):"black"},actions:{updateProfile(t){if(!this.profile||!this.isOwnProfile)throw new Error("Unathorized");const e=Object.keys(t).reduce((n,s)=>JSON.stringify(t[s])===JSON.stringify(this.profile?this.profile[s]:void 0)?n:{...n,[s]:t[s]},{});this.profile={...this.profile,...t},!(Object.keys(e).length<1)&&RO(sg(),e).then(()=>Ee("Changes saved",{type:"success"})).catch(()=>Ee("Error saving changes",{type:"error"}))},async loadProfile(t){try{const e=oc(so,El,t),n=await Ym(e);if(!n.exists()){this.profile=null;return}this.profile=ag.parse(n.data())}catch{Ee("Error loading profile",{type:"error"}),this.profile=null}},async loadPNS(t){const e=oc(so,"ib_dns",t),n=await Ym(e);if(!n.exists()){this.profile=null;return}const{uid:s}=n.data();if(!s){this.profile=null;return}return this.loadProfile(s)},async createOwnProfile(){var t;try{if(!((t=Ft.currentUser)!=null&&t.uid))return;const e=ag.parse(JD(Ft.currentUser));await Promise.all([kO(sg(),e),xO(KD(),{site:"YouTube",sourceUrl:"https://youtu.be/dQw4w9WgXcQ",iFrameUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",ts:new Date})]),this.profile=e,Ee("Profile created",{type:"info"});return}catch{Ee("Error creating profile",{type:"error"})}}}}),Us=OI({history:Z0("/"),routes:[{path:"/",name:"Login",component:()=>Jo(()=>import("./Login-pGe4lj3K.js"),__vite__mapDeps([0,1,2])),beforeEnter:async(t,e,n)=>{var s;(s=Ft.currentUser)!=null&&s.uid&&(await Us.replace(`/u/${Ft.currentUser.uid}`),window.location.reload()),n()}},{path:"/u/:profileUid",name:"Profile",props:!1,component:()=>Jo(()=>import("./Profile-Bp-NKam3.js"),__vite__mapDeps([3,1,4])),beforeEnter:async(t,e,n)=>{var i,o,a;const s=ug(),r=t.params.profileUid;await s.loadProfile(r),s.profile||(r===((i=Ft.currentUser)==null?void 0:i.uid)?await s.createOwnProfile():await Us.replace("/404")),(o=s.profile)!=null&&o.userUri&&await Us.replace(`/profile/${(a=s.profile)==null?void 0:a.userUri}`),n()}},{path:"/profile/:profileURI",name:"PNS Profile",props:!1,component:()=>Jo(()=>import("./Profile-Bp-NKam3.js"),__vite__mapDeps([3,1,4])),beforeEnter:async(t,e,n)=>{var i;const s=ug(),r=t.params.profileURI;r!==((i=s.profile)==null?void 0:i.userUri)&&await s.loadPNS(r),s.profile||await Us.replace("/404"),n()}},{path:"/:pathMatch(.*)",name:"Error404",component:()=>Jo(()=>import("./Error404-CdVSTIW2.js"),__vite__mapDeps([5,6]))}]}),jL=Ge.object({uid:Ge.string(),displayName:Ge.string().nullable(),photoURL:Ge.string().nullable()}).nullable(),qL=S0();let cu;JC(Ft,t=>{const e=jL.parse(t);cu?e!=null&&e.uid?Us.replace(`/u/${e.uid}`):Us.replace("/"):(cu=ly(FI),cu.use(Us).use(qL).use(Kb,{autoClose:2e3}).mount("#app"))});export{RM as $,Ws as A,ha as B,Jt as C,jh as D,kc as E,xt as F,Xn as G,ei as H,oe as I,_g as J,JL as K,iy as L,ZL as M,SM as N,NM as O,ug as P,kh as Q,XL as R,YL as S,es as T,sM as U,Us as V,Bn as W,QL as X,xM as Y,kM as Z,UI as _,Kh as a,Rh as a0,WL as a1,tM as a2,eM as a3,Ge as a4,XP as a5,zD as a6,CM as a7,bO as a8,EO as a9,Ee as aa,xO as ab,KD as ac,AM as ad,GL as ae,nM as af,ge as b,$T as c,ar as d,jT as e,Yn as f,fh as g,Ft as h,jE as i,br as j,xe as k,xE as l,wi as m,zL as n,xc as o,VE as p,ZD as q,KL as r,rM as s,HL as t,Bs as u,cE as v,qE as w,Tn as x,cn as y,ua as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Login-pGe4lj3K.js","assets/package-DU_EHGc-.js","assets/Login-C3vv6wCQ.css","assets/Profile-Bp-NKam3.js","assets/Profile-DMsS_Sh1.css","assets/Error404-CdVSTIW2.js","assets/Error404-C6Dx7pxG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
