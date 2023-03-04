(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function hh(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function wo(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ve(s)?eT(s):wo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ve(t))return t;if(Re(t))return t}}const Yb=/;(?![^(]*\))/g,Xb=/:([^]+)/,Jb=/\/\*.*?\*\//gs;function eT(t){const e={};return t.replace(Jb,"").split(Yb).forEach(n=>{if(n){const s=n.split(Xb);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ps(t){let e="";if(Ve(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=ps(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nT=hh(tT);function Ym(t){return!!t||t===""}function sT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=yc(t[s],e[s]);return n}function yc(t,e){if(t===e)return!0;let n=rf(t),s=rf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Pi(t),s=Pi(e),n||s)return t===e;if(n=X(t),s=X(e),n||s)return n&&s?sT(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!yc(t[o],e[o]))return!1}}return String(t)===String(e)}function rT(t,e){return t.findIndex(n=>yc(n,e))}const Xm=t=>Ve(t)?t:t==null?"":X(t)||Re(t)&&(t.toString===tg||!ce(t.toString))?JSON.stringify(t,Jm,2):String(t),Jm=(t,e)=>e&&e.__v_isRef?Jm(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:_c(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!X(e)&&!ng(e)?String(e):e,De={},Tr=[],nn=()=>{},iT=()=>!1,oT=/^on[^a-z]/,vc=t=>oT.test(t),dh=t=>t.startsWith("onUpdate:"),rt=Object.assign,fh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},aT=Object.prototype.hasOwnProperty,we=(t,e)=>aT.call(t,e),X=Array.isArray,Er=t=>bo(t)==="[object Map]",_c=t=>bo(t)==="[object Set]",rf=t=>bo(t)==="[object Date]",ce=t=>typeof t=="function",Ve=t=>typeof t=="string",Pi=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",eg=t=>Re(t)&&ce(t.then)&&ce(t.catch),tg=Object.prototype.toString,bo=t=>tg.call(t),cT=t=>bo(t).slice(8,-1),ng=t=>bo(t)==="[object Object]",ph=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,la=hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uT=/-(\w)/g,Tn=wc(t=>t.replace(uT,(e,n)=>n?n.toUpperCase():"")),lT=/\B([A-Z])/g,Zr=wc(t=>t.replace(lT,"-$1").toLowerCase()),bc=wc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=wc(t=>t?`on${bc(t)}`:""),Li=(t,e)=>!Object.is(t,e),da=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Aa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sg=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let of;const hT=()=>of||(of=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class rg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ig(t){return new rg(t)}function dT(t,e=xt){e&&e.active&&e.effects.push(t)}function og(){return xt}function fT(t){xt&&xt.cleanups.push(t)}const mh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ag=t=>(t.w&ms)>0,cg=t=>(t.n&ms)>0,pT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ms},mT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ag(r)&&!cg(r)?r.delete(t):e[n++]=r,r.w&=~ms,r.n&=~ms}e.length=n}},ka=new WeakMap;let fi=0,ms=1;const al=30;let en;const Hs=Symbol(""),cl=Symbol("");class gh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dT(this,s)}run(){if(!this.active)return this.fn();let e=en,n=as;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,as=!0,ms=1<<++fi,fi<=al?pT(this):af(this),this.fn()}finally{fi<=al&&mT(this),ms=1<<--fi,en=this.parent,as=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(af(this),this.onStop&&this.onStop(),this.active=!1)}}function af(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let as=!0;const ug=[];function Qr(){ug.push(as),as=!1}function Yr(){const t=ug.pop();as=t===void 0?!0:t}function Nt(t,e,n){if(as&&en){let s=ka.get(t);s||ka.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=mh()),lg(r)}}function lg(t,e){let n=!1;fi<=al?cg(t)||(t.n|=ms,n=!ag(t)):n=!t.has(en),n&&(t.add(en),en.deps.push(t))}function Fn(t,e,n,s,r,i){const o=ka.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?ph(n)&&a.push(o.get("length")):(a.push(o.get(Hs)),Er(t)&&a.push(o.get(cl)));break;case"delete":X(t)||(a.push(o.get(Hs)),Er(t)&&a.push(o.get(cl)));break;case"set":Er(t)&&a.push(o.get(Hs));break}if(a.length===1)a[0]&&ul(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ul(mh(c))}}function ul(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&cf(s);for(const s of n)s.computed||cf(s)}function cf(t,e){(t!==en||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function gT(t,e){var n;return(n=ka.get(t))===null||n===void 0?void 0:n.get(e)}const yT=hh("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pi)),vT=yh(),_T=yh(!1,!0),wT=yh(!0),uf=bT();function bT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ye(this);for(let i=0,o=this.length;i<o;i++)Nt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qr();const s=ye(this)[e].apply(this,n);return Yr(),s}}),t}function TT(t){const e=ye(this);return Nt(e,"has",t),e.hasOwnProperty(t)}function yh(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?FT:gg:e?mg:pg).get(s))return s;const o=X(s);if(!t){if(o&&we(uf,r))return Reflect.get(uf,r,i);if(r==="hasOwnProperty")return TT}const a=Reflect.get(s,r,i);return(Pi(r)?hg.has(r):yT(r))||(t||Nt(s,"get",r),e)?a:We(a)?o&&ph(r)?a:a.value:Re(a)?t?yg(a):Xr(a):a}}const ET=dg(),IT=dg(!0);function dg(t=!1){return function(n,s,r,i){let o=n[s];if(xr(o)&&We(o)&&!We(r))return!1;if(!t&&(!Ra(r)&&!xr(r)&&(o=ye(o),r=ye(r)),!X(n)&&We(o)&&!We(r)))return o.value=r,!0;const a=X(n)&&ph(s)?Number(s)<n.length:we(n,s),c=Reflect.set(n,s,r,i);return n===ye(i)&&(a?Li(r,o)&&Fn(n,"set",s,r):Fn(n,"add",s,r)),c}}function CT(t,e){const n=we(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Fn(t,"delete",e,void 0),s}function ST(t,e){const n=Reflect.has(t,e);return(!Pi(e)||!hg.has(e))&&Nt(t,"has",e),n}function AT(t){return Nt(t,"iterate",X(t)?"length":Hs),Reflect.ownKeys(t)}const fg={get:vT,set:ET,deleteProperty:CT,has:ST,ownKeys:AT},kT={get:wT,set(t,e){return!0},deleteProperty(t,e){return!0}},RT=rt({},fg,{get:_T,set:IT}),vh=t=>t,Tc=t=>Reflect.getPrototypeOf(t);function Wo(t,e,n=!1,s=!1){t=t.__v_raw;const r=ye(t),i=ye(e);n||(e!==i&&Nt(r,"get",e),Nt(r,"get",i));const{has:o}=Tc(r),a=s?vh:n?bh:Mi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Go(t,e=!1){const n=this.__v_raw,s=ye(n),r=ye(t);return e||(t!==r&&Nt(s,"has",t),Nt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Zo(t,e=!1){return t=t.__v_raw,!e&&Nt(ye(t),"iterate",Hs),Reflect.get(t,"size",t)}function lf(t){t=ye(t);const e=ye(this);return Tc(e).has.call(e,t)||(e.add(t),Fn(e,"add",t,t)),this}function hf(t,e){e=ye(e);const n=ye(this),{has:s,get:r}=Tc(n);let i=s.call(n,t);i||(t=ye(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Li(e,o)&&Fn(n,"set",t,e):Fn(n,"add",t,e),this}function df(t){const e=ye(this),{has:n,get:s}=Tc(e);let r=n.call(e,t);r||(t=ye(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Fn(e,"delete",t,void 0),i}function ff(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&Fn(t,"clear",void 0,void 0),n}function Qo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ye(o),c=e?vh:t?bh:Mi;return!t&&Nt(a,"iterate",Hs),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Yo(t,e,n){return function(...s){const r=this.__v_raw,i=ye(r),o=Er(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?vh:e?bh:Mi;return!e&&Nt(i,"iterate",c?cl:Hs),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Wn(t){return function(...e){return t==="delete"?!1:this}}function NT(){const t={get(i){return Wo(this,i)},get size(){return Zo(this)},has:Go,add:lf,set:hf,delete:df,clear:ff,forEach:Qo(!1,!1)},e={get(i){return Wo(this,i,!1,!0)},get size(){return Zo(this)},has:Go,add:lf,set:hf,delete:df,clear:ff,forEach:Qo(!1,!0)},n={get(i){return Wo(this,i,!0)},get size(){return Zo(this,!0)},has(i){return Go.call(this,i,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Qo(!0,!1)},s={get(i){return Wo(this,i,!0,!0)},get size(){return Zo(this,!0)},has(i){return Go.call(this,i,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yo(i,!1,!1),n[i]=Yo(i,!0,!1),e[i]=Yo(i,!1,!0),s[i]=Yo(i,!0,!0)}),[t,n,e,s]}const[OT,xT,DT,PT]=NT();function _h(t,e){const n=e?t?PT:DT:t?xT:OT;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(we(n,r)&&r in s?n:s,r,i)}const LT={get:_h(!1,!1)},MT={get:_h(!1,!0)},UT={get:_h(!0,!1)},pg=new WeakMap,mg=new WeakMap,gg=new WeakMap,FT=new WeakMap;function BT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $T(t){return t.__v_skip||!Object.isExtensible(t)?0:BT(cT(t))}function Xr(t){return xr(t)?t:wh(t,!1,fg,LT,pg)}function VT(t){return wh(t,!1,RT,MT,mg)}function yg(t){return wh(t,!0,kT,UT,gg)}function wh(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=$T(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function cs(t){return xr(t)?cs(t.__v_raw):!!(t&&t.__v_isReactive)}function xr(t){return!!(t&&t.__v_isReadonly)}function Ra(t){return!!(t&&t.__v_isShallow)}function vg(t){return cs(t)||xr(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Dr(t){return Sa(t,"__v_skip",!0),t}const Mi=t=>Re(t)?Xr(t):t,bh=t=>Re(t)?yg(t):t;function _g(t){as&&en&&(t=ye(t),lg(t.dep||(t.dep=mh())))}function wg(t,e){t=ye(t);const n=t.dep;n&&ul(n)}function We(t){return!!(t&&t.__v_isRef===!0)}function Th(t){return bg(t,!1)}function jT(t){return bg(t,!0)}function bg(t,e){return We(t)?t:new qT(t,e)}class qT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:Mi(e)}get value(){return _g(this),this._value}set value(e){const n=this.__v_isShallow||Ra(e)||xr(e);e=n?e:ye(e),Li(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mi(e),wg(this))}}function us(t){return We(t)?t.value:t}const HT={get:(t,e,n)=>us(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return We(r)&&!We(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Tg(t){return cs(t)?t:new Proxy(t,HT)}function zT(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=WT(t,n);return e}class KT{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gT(ye(this._object),this._key)}}function WT(t,e,n){const s=t[e];return We(s)?s:new KT(t,e,n)}var Eg;class GT{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Eg]=!1,this._dirty=!0,this.effect=new gh(e,()=>{this._dirty||(this._dirty=!0,wg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ye(this);return _g(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Eg="__v_isReadonly";function ZT(t,e,n=!1){let s,r;const i=ce(t);return i?(s=t,r=nn):(s=t.get,r=t.set),new GT(s,r,i||!r,n)}function ls(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){To(i,e,n)}return r}function Ht(t,e,n,s){if(ce(t)){const i=ls(t,e,n,s);return i&&eg(i)&&i.catch(o=>{To(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ht(t[i],e,n,s));return r}function To(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ls(c,null,10,[t,o,a]);return}}QT(t,n,r,s)}function QT(t,e,n,s=!0){console.error(t)}let Ui=!1,ll=!1;const ft=[];let fn=0;const Ir=[];let Nn=null,Ds=0;const Ig=Promise.resolve();let Eh=null;function Ec(t){const e=Eh||Ig;return t?e.then(this?t.bind(this):t):e}function YT(t){let e=fn+1,n=ft.length;for(;e<n;){const s=e+n>>>1;Fi(ft[s])<t?e=s+1:n=s}return e}function Ih(t){(!ft.length||!ft.includes(t,Ui&&t.allowRecurse?fn+1:fn))&&(t.id==null?ft.push(t):ft.splice(YT(t.id),0,t),Cg())}function Cg(){!Ui&&!ll&&(ll=!0,Eh=Ig.then(kg))}function XT(t){const e=ft.indexOf(t);e>fn&&ft.splice(e,1)}function Sg(t){X(t)?Ir.push(...t):(!Nn||!Nn.includes(t,t.allowRecurse?Ds+1:Ds))&&Ir.push(t),Cg()}function pf(t,e=Ui?fn+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function Ag(t){if(Ir.length){const e=[...new Set(Ir)];if(Ir.length=0,Nn){Nn.push(...e);return}for(Nn=e,Nn.sort((n,s)=>Fi(n)-Fi(s)),Ds=0;Ds<Nn.length;Ds++)Nn[Ds]();Nn=null,Ds=0}}const Fi=t=>t.id==null?1/0:t.id,JT=(t,e)=>{const n=Fi(t)-Fi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function kg(t){ll=!1,Ui=!0,ft.sort(JT);const e=nn;try{for(fn=0;fn<ft.length;fn++){const n=ft[fn];n&&n.active!==!1&&ls(n,null,14)}}finally{fn=0,ft.length=0,Ag(),Ui=!1,Eh=null,(ft.length||Ir.length)&&kg()}}function eE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||De;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||De;d&&(r=n.map(p=>Ve(p)?p.trim():p)),h&&(r=n.map(Aa))}let a,c=s[a=ha(e)]||s[a=ha(Tn(e))];!c&&i&&(c=s[a=ha(Zr(e))]),c&&Ht(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ht(u,t,6,r)}}function Rg(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ce(t)){const c=u=>{const l=Rg(u,e,!0);l&&(a=!0,rt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&s.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):rt(o,i),Re(t)&&s.set(t,o),o)}function Ic(t,e){return!t||!vc(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Zr(e))||we(t,e))}let ct=null,Cc=null;function Na(t){const e=ct;return ct=t,Cc=t&&t.type.__scopeId||null,e}function tE(t){Cc=t}function nE(){Cc=null}function Eo(t,e=ct,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Af(-1);const i=Na(e);let o;try{o=t(...r)}finally{Na(i),s._d&&Af(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Au(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:y}=t;let I,S;const _=Na(t);try{if(n.shapeFlag&4){const D=r||s;I=Xt(l.call(D,D,h,i,p,d,g)),S=c}else{const D=e;I=Xt(D.length>1?D(i,{attrs:c,slots:a,emit:u}):D(i,null)),S=e.props?c:rE(c)}}catch(D){Ei.length=0,To(D,t,1),I=Je(kt)}let b=I;if(S&&y!==!1){const D=Object.keys(S),{shapeFlag:M}=b;D.length&&M&7&&(o&&D.some(dh)&&(S=iE(S,o)),b=gs(b,S))}return n.dirs&&(b=gs(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),I=b,Na(_),I}function sE(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ji(s)){if(s.type!==kt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const rE=t=>{let e;for(const n in t)(n==="class"||n==="style"||vc(n))&&((e||(e={}))[n]=t[n]);return e},iE=(t,e)=>{const n={};for(const s in t)(!dh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function oE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?mf(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!Ic(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?mf(s,o,u):!0:!!o;return!1}function mf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ic(n,i))return!0}return!1}function Ch({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const aE=t=>t.__isSuspense,cE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){t==null?uE(e,n,s,r,i,o,a,c,u):lE(t,e,n,s,r,o,a,c,u)},hydrate:hE,create:Sh,normalize:dE},rM=cE;function Bi(t,e){const n=t.props&&t.props[e];ce(n)&&n()}function uE(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=t.suspense=Sh(t,r,s,e,h,n,i,o,a,c);u(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(Bi(t,"onPending"),Bi(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),Cr(d,t.ssFallback)):d.resolve()}function lE(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:I,isHydrating:S}=h;if(y)h.pendingBranch=d,pn(d,y)?(c(y,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():I&&(c(g,p,n,s,r,null,i,o,a),Cr(h,p))):(h.pendingId++,S?(h.isHydrating=!1,h.activeBranch=y):u(y,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),I?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(g,p,n,s,r,null,i,o,a),Cr(h,p))):g&&pn(d,g)?(c(g,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(g&&pn(d,g))c(g,d,n,s,r,h,i,o,a),Cr(h,d);else if(Bi(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:_,pendingId:b}=h;_>0?setTimeout(()=>{h.pendingId===b&&h.fallback(p)},_):_===0&&h.fallback(p)}}function Sh(t,e,n,s,r,i,o,a,c,u,l=!1){const{p:h,m:d,um:p,n:g,o:{parentNode:y,remove:I}}=u,S=t.props?sg(t.props.timeout):void 0,_={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:D,activeBranch:M,pendingBranch:K,pendingId:j,effects:R,parentComponent:J,container:te}=_;if(_.isHydrating)_.isHydrating=!1;else if(!b){const Ee=M&&K.transition&&K.transition.mode==="out-in";Ee&&(M.transition.afterLeave=()=>{j===_.pendingId&&d(K,te,ke,0)});let{anchor:ke}=_;M&&(ke=g(M),p(M,J,_,!0)),Ee||d(K,te,ke,0)}Cr(_,K),_.pendingBranch=null,_.isInFallback=!1;let he=_.parent,V=!1;for(;he;){if(he.pendingBranch){he.effects.push(...R),V=!0;break}he=he.parent}V||Sg(R),_.effects=[],Bi(D,"onResolve")},fallback(b){if(!_.pendingBranch)return;const{vnode:D,activeBranch:M,parentComponent:K,container:j,isSVG:R}=_;Bi(D,"onFallback");const J=g(M),te=()=>{_.isInFallback&&(h(null,b,j,J,K,null,R,a,c),Cr(_,b))},he=b.transition&&b.transition.mode==="out-in";he&&(M.transition.afterLeave=te),_.isInFallback=!0,p(M,K,null,!0),he||te()},move(b,D,M){_.activeBranch&&d(_.activeBranch,b,D,M),_.container=b},next(){return _.activeBranch&&g(_.activeBranch)},registerDep(b,D){const M=!!_.pendingBranch;M&&_.deps++;const K=b.vnode.el;b.asyncDep.catch(j=>{To(j,b,0)}).then(j=>{if(b.isUnmounted||_.isUnmounted||_.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:R}=b;yl(b,j,!1),K&&(R.el=K);const J=!K&&b.subTree.el;D(b,R,y(K||b.subTree.el),K?null:g(b.subTree),_,o,c),J&&I(J),Ch(b,R.el),M&&--_.deps===0&&_.resolve()})},unmount(b,D){_.isUnmounted=!0,_.activeBranch&&p(_.activeBranch,n,b,D),_.pendingBranch&&p(_.pendingBranch,n,b,D)}};return _}function hE(t,e,n,s,r,i,o,a,c){const u=e.suspense=Sh(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(),l}function dE(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=gf(s?n.default:n),t.ssFallback=s?gf(n.fallback):Je(kt)}function gf(t){let e;if(ce(t)){const n=Pr&&t._c;n&&(t._d=!1,Be()),t=t(),n&&(t._d=!0,e=Vt,Zg())}return X(t)&&(t=sE(t)),t=Xt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fE(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Sg(t)}function Cr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Ch(s,r))}function fa(t,e){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[t]=e}}function sn(t,e,n=!1){const s=Ke||ct;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ce(e)?e.call(s.proxy):e}}function iM(t,e){return Ah(t,null,e)}const Xo={};function vi(t,e,n){return Ah(t,e,n)}function Ah(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=De){const a=og()===(Ke==null?void 0:Ke.scope)?Ke:null;let c,u=!1,l=!1;if(We(t)?(c=()=>t.value,u=Ra(t)):cs(t)?(c=()=>t,s=!0):X(t)?(l=!0,u=t.some(b=>cs(b)||Ra(b)),c=()=>t.map(b=>{if(We(b))return b.value;if(cs(b))return Ms(b);if(ce(b))return ls(b,a,2)})):ce(t)?e?c=()=>ls(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ht(t,a,3,[d])}:c=nn,e&&s){const b=c;c=()=>Ms(b())}let h,d=b=>{h=S.onStop=()=>{ls(b,a,4)}},p;if(qi)if(d=nn,e?n&&Ht(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const b=i0();p=b.__watcherHandles||(b.__watcherHandles=[])}else return nn;let g=l?new Array(t.length).fill(Xo):Xo;const y=()=>{if(S.active)if(e){const b=S.run();(s||u||(l?b.some((D,M)=>Li(D,g[M])):Li(b,g)))&&(h&&h(),Ht(e,a,3,[b,g===Xo?void 0:l&&g[0]===Xo?[]:g,d]),g=b)}else S.run()};y.allowRecurse=!!e;let I;r==="sync"?I=y:r==="post"?I=()=>St(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),I=()=>Ih(y));const S=new gh(c,I);e?n?y():g=S.run():r==="post"?St(S.run.bind(S),a&&a.suspense):S.run();const _=()=>{S.stop(),a&&a.scope&&fh(a.scope.effects,S)};return p&&p.push(_),_}function pE(t,e,n){const s=this.proxy,r=Ve(t)?t.includes(".")?Ng(s,t):()=>s[t]:t.bind(s,s);let i;ce(e)?i=e:(i=e.handler,n=e);const o=Ke;Lr(this);const a=Ah(r,i.bind(s),n);return o?Lr(o):zs(),a}function Ng(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ms(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))Ms(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Ms(t[n],e);else if(_c(t)||Er(t))t.forEach(n=>{Ms(n,e)});else if(ng(t))for(const n in t)Ms(t[n],e);return t}function Og(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pg(()=>{t.isMounted=!0}),Mg(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],mE={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(t,{slots:e}){const n=xc(),s=Og();let r;return()=>{const i=e.default&&kh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==kt){o=y;break}}const a=ye(t),{mode:c}=a;if(s.isLeaving)return ku(o);const u=yf(o);if(!u)return ku(o);const l=$i(u,a,s,n);Vi(u,l);const h=n.subTree,d=h&&yf(h);let p=!1;const{getTransitionKey:g}=u.type;if(g){const y=g();r===void 0?r=y:y!==r&&(r=y,p=!0)}if(d&&d.type!==kt&&(!pn(u,d)||p)){const y=$i(d,a,s,n);if(Vi(d,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ku(o);c==="in-out"&&u.type!==kt&&(y.delayLeave=(I,S,_)=>{const b=xg(s,d);b[String(d.key)]=d,I._leaveCb=()=>{S(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=_})}return o}}},gE=mE;function xg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function $i(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:y,onAppear:I,onAfterAppear:S,onAppearCancelled:_}=e,b=String(t.key),D=xg(n,t),M=(R,J)=>{R&&Ht(R,s,9,J)},K=(R,J)=>{const te=J[1];M(R,J),X(R)?R.every(he=>he.length<=1)&&te():R.length<=1&&te()},j={mode:i,persisted:o,beforeEnter(R){let J=a;if(!n.isMounted)if(r)J=y||a;else return;R._leaveCb&&R._leaveCb(!0);const te=D[b];te&&pn(t,te)&&te.el._leaveCb&&te.el._leaveCb(),M(J,[R])},enter(R){let J=c,te=u,he=l;if(!n.isMounted)if(r)J=I||c,te=S||u,he=_||l;else return;let V=!1;const Ee=R._enterCb=ke=>{V||(V=!0,ke?M(he,[R]):M(te,[R]),j.delayedLeave&&j.delayedLeave(),R._enterCb=void 0)};J?K(J,[R,Ee]):Ee()},leave(R,J){const te=String(t.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return J();M(h,[R]);let he=!1;const V=R._leaveCb=Ee=>{he||(he=!0,J(),Ee?M(g,[R]):M(p,[R]),R._leaveCb=void 0,D[te]===t&&delete D[te])};D[te]=t,d?K(d,[R,V]):V()},clone(R){return $i(R,e,n,s)}};return j}function ku(t){if(Sc(t))return t=gs(t),t.children=null,t}function yf(t){return Sc(t)?t.children?t.children[0]:void 0:t}function Vi(t,e){t.shapeFlag&6&&t.component?Vi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&r++,s=s.concat(kh(o.children,e,a))):(e||o.type!==kt)&&s.push(a!=null?gs(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function An(t){return ce(t)?{setup:t,name:t.name}:t}const _i=t=>!!t.type.__asyncLoader,Sc=t=>t.type.__isKeepAlive;function yE(t,e){Dg(t,"a",e)}function vE(t,e){Dg(t,"da",e)}function Dg(t,e,n=Ke){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ac(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Sc(r.parent.vnode)&&_E(s,e,n,r),r=r.parent}}function _E(t,e,n,s){const r=Ac(e,t,s,!0);Ug(()=>{fh(s[e],r)},n)}function Ac(t,e,n=Ke,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qr(),Lr(n);const a=Ht(e,n,t,o);return zs(),Yr(),a});return s?r.unshift(i):r.push(i),i}}const Kn=t=>(e,n=Ke)=>(!qi||t==="sp")&&Ac(t,(...s)=>e(...s),n),wE=Kn("bm"),Pg=Kn("m"),bE=Kn("bu"),Lg=Kn("u"),Mg=Kn("bum"),Ug=Kn("um"),TE=Kn("sp"),EE=Kn("rtg"),IE=Kn("rtc");function CE(t,e=Ke){Ac("ec",t,e)}function oM(t,e){const n=ct;if(n===null)return t;const s=Dc(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=De]=e[i];o&&(ce(o)&&(o={mounted:o,updated:o}),o.deep&&Ms(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function ks(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Qr(),Ht(c,n,8,[t.el,a,t,e]),Yr())}}const Rh="components";function wi(t,e){return Bg(Rh,t,!0,e)||t}const Fg=Symbol();function Nh(t){return Ve(t)?Bg(Rh,t,!1)||t:t||Fg}function Bg(t,e,n=!0,s=!1){const r=ct||Ke;if(r){const i=r.type;if(t===Rh){const a=n0(i,!1);if(a&&(a===e||a===Tn(e)||a===bc(Tn(e))))return i}const o=vf(r[t]||i[t],e)||vf(r.appContext[t],e);return!o&&s?i:o}}function vf(t,e){return t&&(t[e]||t[Tn(e)]||t[bc(Tn(e))])}function _f(t,e,n,s){let r;const i=n&&n[s];if(X(t)||Ve(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function SE(t,e,n={},s,r){if(ct.isCE||ct.parent&&_i(ct.parent)&&ct.parent.isCE)return e!=="default"&&(n.name=e),Je("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Be();const o=i&&$g(i(n)),a=gn(at,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function $g(t){return t.some(e=>ji(e)?!(e.type===kt||e.type===at&&!$g(e.children)):!0)?t:null}function AE(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:ha(s)]=t[s];return n}const hl=t=>t?Xg(t)?Dc(t)||t.proxy:hl(t.parent):null,bi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hl(t.parent),$root:t=>hl(t.root),$emit:t=>t.emit,$options:t=>Oh(t),$forceUpdate:t=>t.f||(t.f=()=>Ih(t.update)),$nextTick:t=>t.n||(t.n=Ec.bind(t.proxy)),$watch:t=>pE.bind(t)}),Ru=(t,e)=>t!==De&&!t.__isScriptSetup&&we(t,e),kE={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ru(s,e))return o[e]=1,s[e];if(r!==De&&we(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&we(u,e))return o[e]=3,i[e];if(n!==De&&we(n,e))return o[e]=4,n[e];dl&&(o[e]=0)}}const l=bi[e];let h,d;if(l)return e==="$attrs"&&Nt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&we(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,we(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ru(r,e)?(r[e]=n,!0):s!==De&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==De&&we(t,o)||Ru(e,o)||(a=i[0])&&we(a,o)||we(s,o)||we(bi,o)||we(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let dl=!0;function RE(t){const e=Oh(t),n=t.proxy,s=t.ctx;dl=!1,e.beforeCreate&&wf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:y,deactivated:I,beforeDestroy:S,beforeUnmount:_,destroyed:b,unmounted:D,render:M,renderTracked:K,renderTriggered:j,errorCaptured:R,serverPrefetch:J,expose:te,inheritAttrs:he,components:V,directives:Ee,filters:ke}=e;if(u&&NE(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ne in o){const Se=o[Ne];ce(Se)&&(s[Ne]=Se.bind(n))}if(r){const Ne=r.call(n,n);Re(Ne)&&(t.data=Xr(Ne))}if(dl=!0,i)for(const Ne in i){const Se=i[Ne],Zt=ce(Se)?Se.bind(n,n):ce(Se.get)?Se.get.bind(n,n):nn,As=!ce(Se)&&ce(Se.set)?Se.set.bind(n):nn,Qt=Dt({get:Zt,set:As});Object.defineProperty(s,Ne,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Ct=>Qt.value=Ct})}if(a)for(const Ne in a)Vg(a[Ne],s,n,Ne);if(c){const Ne=ce(c)?c.call(n):c;Reflect.ownKeys(Ne).forEach(Se=>{fa(Se,Ne[Se])})}l&&wf(l,t,"c");function Me(Ne,Se){X(Se)?Se.forEach(Zt=>Ne(Zt.bind(n))):Se&&Ne(Se.bind(n))}if(Me(wE,h),Me(Pg,d),Me(bE,p),Me(Lg,g),Me(yE,y),Me(vE,I),Me(CE,R),Me(IE,K),Me(EE,j),Me(Mg,_),Me(Ug,D),Me(TE,J),X(te))if(te.length){const Ne=t.exposed||(t.exposed={});te.forEach(Se=>{Object.defineProperty(Ne,Se,{get:()=>n[Se],set:Zt=>n[Se]=Zt})})}else t.exposed||(t.exposed={});M&&t.render===nn&&(t.render=M),he!=null&&(t.inheritAttrs=he),V&&(t.components=V),Ee&&(t.directives=Ee)}function NE(t,e,n=nn,s=!1){X(t)&&(t=fl(t));for(const r in t){const i=t[r];let o;Re(i)?"default"in i?o=sn(i.from||r,i.default,!0):o=sn(i.from||r):o=sn(i),We(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function wf(t,e,n){Ht(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vg(t,e,n,s){const r=s.includes(".")?Ng(n,s):()=>n[s];if(Ve(t)){const i=e[t];ce(i)&&vi(r,i)}else if(ce(t))vi(r,t.bind(n));else if(Re(t))if(X(t))t.forEach(i=>Vg(i,e,n,s));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&vi(r,i,t)}}function Oh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Oa(c,u,o,!0)),Oa(c,e,o)),Re(e)&&i.set(e,c),c}function Oa(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Oa(t,i,n,!0),r&&r.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=OE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const OE={data:bf,props:Os,emits:Os,methods:Os,computed:Os,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Os,directives:Os,watch:DE,provide:bf,inject:xE};function bf(t,e){return e?t?function(){return rt(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function xE(t,e){return Os(fl(t),fl(e))}function fl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?rt(rt(Object.create(null),t),e):e}function DE(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function PE(t,e,n,s=!1){const r={},i={};Sa(i,Rc,1),t.propsDefaults=Object.create(null),jg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:VT(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function LE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ye(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Ic(t.emitsOptions,d))continue;const p=e[d];if(c)if(we(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const g=Tn(d);r[g]=pl(c,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{jg(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!we(e,h)&&((l=Zr(h))===h||!we(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=pl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!we(e,h))&&(delete i[h],u=!0)}u&&Fn(t,"set","$attrs")}function jg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(la(c))continue;const u=e[c];let l;r&&we(r,l=Tn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Ic(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ye(n),u=a||De;for(let l=0;l<i.length;l++){const h=i[l];n[h]=pl(r,c,h,u[h],t,!we(u,h))}}return o}function pl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ce(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Lr(r),s=u[n]=c.call(null,e),zs())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zr(n))&&(s=!0))}return s}function qg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ce(t)){const l=h=>{c=!0;const[d,p]=qg(h,e,!0);rt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Re(t)&&s.set(t,Tr),Tr;if(X(i))for(let l=0;l<i.length;l++){const h=Tn(i[l]);Tf(h)&&(o[h]=De)}else if(i)for(const l in i){const h=Tn(l);if(Tf(h)){const d=i[l],p=o[h]=X(d)||ce(d)?{type:d}:Object.assign({},d);if(p){const g=Cf(Boolean,p.type),y=Cf(String,p.type);p[0]=g>-1,p[1]=y<0||g<y,(g>-1||we(p,"default"))&&a.push(h)}}}const u=[o,a];return Re(t)&&s.set(t,u),u}function Tf(t){return t[0]!=="$"}function Ef(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function If(t,e){return Ef(t)===Ef(e)}function Cf(t,e){return X(e)?e.findIndex(n=>If(n,t)):ce(e)&&If(e,t)?0:-1}const Hg=t=>t[0]==="_"||t==="$stable",xh=t=>X(t)?t.map(Xt):[Xt(t)],ME=(t,e,n)=>{if(e._n)return e;const s=Eo((...r)=>xh(e(...r)),n);return s._c=!1,s},zg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Hg(r))continue;const i=t[r];if(ce(i))e[r]=ME(r,i,s);else if(i!=null){const o=xh(i);e[r]=()=>o}}},Kg=(t,e)=>{const n=xh(e);t.slots.default=()=>n},UE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Sa(e,"_",n)):zg(e,t.slots={})}else t.slots={},e&&Kg(t,e);Sa(t.slots,Rc,1)},FE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=De;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(rt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,zg(e,r)),o=e}else e&&(Kg(t,e),o={default:1});if(i)for(const a in r)!Hg(a)&&!(a in o)&&delete r[a]};function Wg(){return{app:null,config:{isNativeTag:iT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BE=0;function $E(t,e){return function(s,r=null){ce(s)||(s=Object.assign({},s)),r!=null&&!Re(r)&&(r=null);const i=Wg(),o=new Set;let a=!1;const c=i.app={_uid:BE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:o0,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(c,...l)):ce(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Je(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Dc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ml(t,e,n,s,r=!1){if(X(t)){t.forEach((d,p)=>ml(d,e&&(X(e)?e[p]:e),n,s,r));return}if(_i(s)&&!r)return;const i=s.shapeFlag&4?Dc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ve(u)?(l[u]=null,we(h,u)&&(h[u]=null)):We(u)&&(u.value=null)),ce(c))ls(c,a,12,[o,l]);else{const d=Ve(c),p=We(c);if(d||p){const g=()=>{if(t.f){const y=d?we(h,c)?h[c]:l[c]:c.value;r?X(y)&&fh(y,i):X(y)?y.includes(i)||y.push(i):d?(l[c]=[i],we(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,we(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,St(g,n)):g()}}}const St=fE;function VE(t){return jE(t)}function jE(t,e){const n=hT();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=nn,insertStaticContent:g}=t,y=(f,m,v,w=null,C=null,O=null,U=!1,N=null,P=!!m.dynamicChildren)=>{if(f===m)return;f&&!pn(f,m)&&(w=L(f),Ct(f,C,O,!0),f=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:A,ref:Q,shapeFlag:q}=m;switch(A){case kc:I(f,m,v,w);break;case kt:S(f,m,v,w);break;case pa:f==null&&_(m,v,w,U);break;case at:V(f,m,v,w,C,O,U,N,P);break;default:q&1?M(f,m,v,w,C,O,U,N,P):q&6?Ee(f,m,v,w,C,O,U,N,P):(q&64||q&128)&&A.process(f,m,v,w,C,O,U,N,P,_e)}Q!=null&&C&&ml(Q,f&&f.ref,O,m||f,!m)},I=(f,m,v,w)=>{if(f==null)s(m.el=a(m.children),v,w);else{const C=m.el=f.el;m.children!==f.children&&u(C,m.children)}},S=(f,m,v,w)=>{f==null?s(m.el=c(m.children||""),v,w):m.el=f.el},_=(f,m,v,w)=>{[f.el,f.anchor]=g(f.children,m,v,w,f.el,f.anchor)},b=({el:f,anchor:m},v,w)=>{let C;for(;f&&f!==m;)C=d(f),s(f,v,w),f=C;s(m,v,w)},D=({el:f,anchor:m})=>{let v;for(;f&&f!==m;)v=d(f),r(f),f=v;r(m)},M=(f,m,v,w,C,O,U,N,P)=>{U=U||m.type==="svg",f==null?K(m,v,w,C,O,U,N,P):J(f,m,C,O,U,N,P)},K=(f,m,v,w,C,O,U,N)=>{let P,A;const{type:Q,props:q,shapeFlag:Y,transition:ie,dirs:me}=f;if(P=f.el=o(f.type,O,q&&q.is,q),Y&8?l(P,f.children):Y&16&&R(f.children,P,null,w,C,O&&Q!=="foreignObject",U,N),me&&ks(f,null,w,"created"),j(P,f,f.scopeId,U,w),q){for(const Ae in q)Ae!=="value"&&!la(Ae)&&i(P,Ae,null,q[Ae],O,f.children,w,C,B);"value"in q&&i(P,"value",null,q.value),(A=q.onVnodeBeforeMount)&&dn(A,w,f)}me&&ks(f,null,w,"beforeMount");const Oe=(!C||C&&!C.pendingBranch)&&ie&&!ie.persisted;Oe&&ie.beforeEnter(P),s(P,m,v),((A=q&&q.onVnodeMounted)||Oe||me)&&St(()=>{A&&dn(A,w,f),Oe&&ie.enter(P),me&&ks(f,null,w,"mounted")},C)},j=(f,m,v,w,C)=>{if(v&&p(f,v),w)for(let O=0;O<w.length;O++)p(f,w[O]);if(C){let O=C.subTree;if(m===O){const U=C.vnode;j(f,U,U.scopeId,U.slotScopeIds,C.parent)}}},R=(f,m,v,w,C,O,U,N,P=0)=>{for(let A=P;A<f.length;A++){const Q=f[A]=N?Xn(f[A]):Xt(f[A]);y(null,Q,m,v,w,C,O,U,N)}},J=(f,m,v,w,C,O,U)=>{const N=m.el=f.el;let{patchFlag:P,dynamicChildren:A,dirs:Q}=m;P|=f.patchFlag&16;const q=f.props||De,Y=m.props||De;let ie;v&&Rs(v,!1),(ie=Y.onVnodeBeforeUpdate)&&dn(ie,v,m,f),Q&&ks(m,f,v,"beforeUpdate"),v&&Rs(v,!0);const me=C&&m.type!=="foreignObject";if(A?te(f.dynamicChildren,A,N,v,w,me,O):U||Se(f,m,N,null,v,w,me,O,!1),P>0){if(P&16)he(N,m,q,Y,v,w,C);else if(P&2&&q.class!==Y.class&&i(N,"class",null,Y.class,C),P&4&&i(N,"style",q.style,Y.style,C),P&8){const Oe=m.dynamicProps;for(let Ae=0;Ae<Oe.length;Ae++){const Ge=Oe[Ae],Yt=q[Ge],pr=Y[Ge];(pr!==Yt||Ge==="value")&&i(N,Ge,Yt,pr,C,f.children,v,w,B)}}P&1&&f.children!==m.children&&l(N,m.children)}else!U&&A==null&&he(N,m,q,Y,v,w,C);((ie=Y.onVnodeUpdated)||Q)&&St(()=>{ie&&dn(ie,v,m,f),Q&&ks(m,f,v,"updated")},w)},te=(f,m,v,w,C,O,U)=>{for(let N=0;N<m.length;N++){const P=f[N],A=m[N],Q=P.el&&(P.type===at||!pn(P,A)||P.shapeFlag&70)?h(P.el):v;y(P,A,Q,null,w,C,O,U,!0)}},he=(f,m,v,w,C,O,U)=>{if(v!==w){if(v!==De)for(const N in v)!la(N)&&!(N in w)&&i(f,N,v[N],null,U,m.children,C,O,B);for(const N in w){if(la(N))continue;const P=w[N],A=v[N];P!==A&&N!=="value"&&i(f,N,A,P,U,m.children,C,O,B)}"value"in w&&i(f,"value",v.value,w.value)}},V=(f,m,v,w,C,O,U,N,P)=>{const A=m.el=f?f.el:a(""),Q=m.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:Y,slotScopeIds:ie}=m;ie&&(N=N?N.concat(ie):ie),f==null?(s(A,v,w),s(Q,v,w),R(m.children,v,Q,C,O,U,N,P)):q>0&&q&64&&Y&&f.dynamicChildren?(te(f.dynamicChildren,Y,v,C,O,U,N),(m.key!=null||C&&m===C.subTree)&&Dh(f,m,!0)):Se(f,m,v,Q,C,O,U,N,P)},Ee=(f,m,v,w,C,O,U,N,P)=>{m.slotScopeIds=N,f==null?m.shapeFlag&512?C.ctx.activate(m,v,w,U,P):ke(m,v,w,C,O,U,P):ze(f,m,P)},ke=(f,m,v,w,C,O,U)=>{const N=f.component=YE(f,w,C);if(Sc(f)&&(N.ctx.renderer=_e),XE(N),N.asyncDep){if(C&&C.registerDep(N,Me),!f.el){const P=N.subTree=Je(kt);S(null,P,m,v)}return}Me(N,f,m,v,C,O,U)},ze=(f,m,v)=>{const w=m.component=f.component;if(oE(f,m,v))if(w.asyncDep&&!w.asyncResolved){Ne(w,m,v);return}else w.next=m,XT(w.update),w.update();else m.el=f.el,w.vnode=m},Me=(f,m,v,w,C,O,U)=>{const N=()=>{if(f.isMounted){let{next:Q,bu:q,u:Y,parent:ie,vnode:me}=f,Oe=Q,Ae;Rs(f,!1),Q?(Q.el=me.el,Ne(f,Q,U)):Q=me,q&&da(q),(Ae=Q.props&&Q.props.onVnodeBeforeUpdate)&&dn(Ae,ie,Q,me),Rs(f,!0);const Ge=Au(f),Yt=f.subTree;f.subTree=Ge,y(Yt,Ge,h(Yt.el),L(Yt),f,C,O),Q.el=Ge.el,Oe===null&&Ch(f,Ge.el),Y&&St(Y,C),(Ae=Q.props&&Q.props.onVnodeUpdated)&&St(()=>dn(Ae,ie,Q,me),C)}else{let Q;const{el:q,props:Y}=m,{bm:ie,m:me,parent:Oe}=f,Ae=_i(m);if(Rs(f,!1),ie&&da(ie),!Ae&&(Q=Y&&Y.onVnodeBeforeMount)&&dn(Q,Oe,m),Rs(f,!0),q&&fe){const Ge=()=>{f.subTree=Au(f),fe(q,f.subTree,f,C,null)};Ae?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ge()):Ge()}else{const Ge=f.subTree=Au(f);y(null,Ge,v,w,f,C,O),m.el=Ge.el}if(me&&St(me,C),!Ae&&(Q=Y&&Y.onVnodeMounted)){const Ge=m;St(()=>dn(Q,Oe,Ge),C)}(m.shapeFlag&256||Oe&&_i(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&f.a&&St(f.a,C),f.isMounted=!0,m=v=w=null}},P=f.effect=new gh(N,()=>Ih(A),f.scope),A=f.update=()=>P.run();A.id=f.uid,Rs(f,!0),A()},Ne=(f,m,v)=>{m.component=f;const w=f.vnode.props;f.vnode=m,f.next=null,LE(f,m.props,w,v),FE(f,m.children,v),Qr(),pf(),Yr()},Se=(f,m,v,w,C,O,U,N,P=!1)=>{const A=f&&f.children,Q=f?f.shapeFlag:0,q=m.children,{patchFlag:Y,shapeFlag:ie}=m;if(Y>0){if(Y&128){As(A,q,v,w,C,O,U,N,P);return}else if(Y&256){Zt(A,q,v,w,C,O,U,N,P);return}}ie&8?(Q&16&&B(A,C,O),q!==A&&l(v,q)):Q&16?ie&16?As(A,q,v,w,C,O,U,N,P):B(A,C,O,!0):(Q&8&&l(v,""),ie&16&&R(q,v,w,C,O,U,N,P))},Zt=(f,m,v,w,C,O,U,N,P)=>{f=f||Tr,m=m||Tr;const A=f.length,Q=m.length,q=Math.min(A,Q);let Y;for(Y=0;Y<q;Y++){const ie=m[Y]=P?Xn(m[Y]):Xt(m[Y]);y(f[Y],ie,v,null,C,O,U,N,P)}A>Q?B(f,C,O,!0,!1,q):R(m,v,w,C,O,U,N,P,q)},As=(f,m,v,w,C,O,U,N,P)=>{let A=0;const Q=m.length;let q=f.length-1,Y=Q-1;for(;A<=q&&A<=Y;){const ie=f[A],me=m[A]=P?Xn(m[A]):Xt(m[A]);if(pn(ie,me))y(ie,me,v,null,C,O,U,N,P);else break;A++}for(;A<=q&&A<=Y;){const ie=f[q],me=m[Y]=P?Xn(m[Y]):Xt(m[Y]);if(pn(ie,me))y(ie,me,v,null,C,O,U,N,P);else break;q--,Y--}if(A>q){if(A<=Y){const ie=Y+1,me=ie<Q?m[ie].el:w;for(;A<=Y;)y(null,m[A]=P?Xn(m[A]):Xt(m[A]),v,me,C,O,U,N,P),A++}}else if(A>Y)for(;A<=q;)Ct(f[A],C,O,!0),A++;else{const ie=A,me=A,Oe=new Map;for(A=me;A<=Y;A++){const Ot=m[A]=P?Xn(m[A]):Xt(m[A]);Ot.key!=null&&Oe.set(Ot.key,A)}let Ae,Ge=0;const Yt=Y-me+1;let pr=!1,tf=0;const oi=new Array(Yt);for(A=0;A<Yt;A++)oi[A]=0;for(A=ie;A<=q;A++){const Ot=f[A];if(Ge>=Yt){Ct(Ot,C,O,!0);continue}let hn;if(Ot.key!=null)hn=Oe.get(Ot.key);else for(Ae=me;Ae<=Y;Ae++)if(oi[Ae-me]===0&&pn(Ot,m[Ae])){hn=Ae;break}hn===void 0?Ct(Ot,C,O,!0):(oi[hn-me]=A+1,hn>=tf?tf=hn:pr=!0,y(Ot,m[hn],v,null,C,O,U,N,P),Ge++)}const nf=pr?qE(oi):Tr;for(Ae=nf.length-1,A=Yt-1;A>=0;A--){const Ot=me+A,hn=m[Ot],sf=Ot+1<Q?m[Ot+1].el:w;oi[A]===0?y(null,hn,v,sf,C,O,U,N,P):pr&&(Ae<0||A!==nf[Ae]?Qt(hn,v,sf,2):Ae--)}}},Qt=(f,m,v,w,C=null)=>{const{el:O,type:U,transition:N,children:P,shapeFlag:A}=f;if(A&6){Qt(f.component.subTree,m,v,w);return}if(A&128){f.suspense.move(m,v,w);return}if(A&64){U.move(f,m,v,_e);return}if(U===at){s(O,m,v);for(let q=0;q<P.length;q++)Qt(P[q],m,v,w);s(f.anchor,m,v);return}if(U===pa){b(f,m,v);return}if(w!==2&&A&1&&N)if(w===0)N.beforeEnter(O),s(O,m,v),St(()=>N.enter(O),C);else{const{leave:q,delayLeave:Y,afterLeave:ie}=N,me=()=>s(O,m,v),Oe=()=>{q(O,()=>{me(),ie&&ie()})};Y?Y(O,me,Oe):Oe()}else s(O,m,v)},Ct=(f,m,v,w=!1,C=!1)=>{const{type:O,props:U,ref:N,children:P,dynamicChildren:A,shapeFlag:Q,patchFlag:q,dirs:Y}=f;if(N!=null&&ml(N,null,v,f,!0),Q&256){m.ctx.deactivate(f);return}const ie=Q&1&&Y,me=!_i(f);let Oe;if(me&&(Oe=U&&U.onVnodeBeforeUnmount)&&dn(Oe,m,f),Q&6)E(f.component,v,w);else{if(Q&128){f.suspense.unmount(v,w);return}ie&&ks(f,null,m,"beforeUnmount"),Q&64?f.type.remove(f,m,v,C,_e,w):A&&(O!==at||q>0&&q&64)?B(A,m,v,!1,!0):(O===at&&q&384||!C&&Q&16)&&B(P,m,v),w&&fr(f)}(me&&(Oe=U&&U.onVnodeUnmounted)||ie)&&St(()=>{Oe&&dn(Oe,m,f),ie&&ks(f,null,m,"unmounted")},v)},fr=f=>{const{type:m,el:v,anchor:w,transition:C}=f;if(m===at){Ko(v,w);return}if(m===pa){D(f);return}const O=()=>{r(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:U,delayLeave:N}=C,P=()=>U(v,O);N?N(f.el,O,P):P()}else O()},Ko=(f,m)=>{let v;for(;f!==m;)v=d(f),r(f),f=v;r(m)},E=(f,m,v)=>{const{bum:w,scope:C,update:O,subTree:U,um:N}=f;w&&da(w),C.stop(),O&&(O.active=!1,Ct(U,f,m,v)),N&&St(N,m),St(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},B=(f,m,v,w=!1,C=!1,O=0)=>{for(let U=O;U<f.length;U++)Ct(f[U],m,v,w,C)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),G=(f,m,v)=>{f==null?m._vnode&&Ct(m._vnode,null,null,!0):y(m._vnode||null,f,m,null,null,null,v),pf(),Ag(),m._vnode=f},_e={p:y,um:Ct,m:Qt,r:fr,mt:ke,mc:R,pc:Se,pbc:te,n:L,o:t};let Ue,fe;return e&&([Ue,fe]=e(_e)),{render:G,hydrate:Ue,createApp:$E(G,Ue)}}function Rs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dh(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Xn(r[i]),a.el=o.el),n||Dh(o,a)),a.type===kc&&(a.el=o.el)}}function qE(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const HE=t=>t.__isTeleport,Ti=t=>t&&(t.disabled||t.disabled===""),Sf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,gl=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},zE={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:p,querySelector:g,createText:y,createComment:I}}=u,S=Ti(e.props);let{shapeFlag:_,children:b,dynamicChildren:D}=e;if(t==null){const M=e.el=y(""),K=e.anchor=y("");p(M,n,s),p(K,n,s);const j=e.target=gl(e.props,g),R=e.targetAnchor=y("");j&&(p(R,j),o=o||Sf(j));const J=(te,he)=>{_&16&&l(b,te,he,r,i,o,a,c)};S?J(n,K):j&&J(j,R)}else{e.el=t.el;const M=e.anchor=t.anchor,K=e.target=t.target,j=e.targetAnchor=t.targetAnchor,R=Ti(t.props),J=R?n:K,te=R?M:j;if(o=o||Sf(K),D?(d(t.dynamicChildren,D,J,r,i,o,a),Dh(t,e,!0)):c||h(t,e,J,te,r,i,o,a,!1),S)R||Jo(e,n,M,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const he=e.target=gl(e.props,g);he&&Jo(e,he,null,u,0)}else R&&Jo(e,K,j,u,1)}Gg(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=t;if(h&&i(l),(o||!Ti(d))&&(i(u),a&16))for(let p=0;p<c.length;p++){const g=c[p];r(g,e,n,!0,!!g.dynamicChildren)}},move:Jo,hydrate:KE};function Jo(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=i===2;if(h&&s(o,e,n),(!h||Ti(l))&&c&16)for(let d=0;d<u.length;d++)r(u[d],e,n,2);h&&s(a,e,n)}function KE(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=gl(e.props,c);if(l){const h=l._lpa||l.firstChild;if(e.shapeFlag&16)if(Ti(e.props))e.anchor=u(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(h,e,l,n,s,r,i)}Gg(e)}return e.anchor&&o(e.anchor)}const aM=zE;function Gg(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const at=Symbol(void 0),kc=Symbol(void 0),kt=Symbol(void 0),pa=Symbol(void 0),Ei=[];let Vt=null;function Be(t=!1){Ei.push(Vt=t?null:[])}function Zg(){Ei.pop(),Vt=Ei[Ei.length-1]||null}let Pr=1;function Af(t){Pr+=t}function Qg(t){return t.dynamicChildren=Pr>0?Vt||Tr:null,Zg(),Pr>0&&Vt&&Vt.push(t),t}function jt(t,e,n,s,r,i){return Qg(Ts(t,e,n,s,r,i,!0))}function gn(t,e,n,s,r){return Qg(Je(t,e,n,s,r,!0))}function ji(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const Rc="__vInternal",Yg=({key:t})=>t??null,ma=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||We(t)||ce(t)?{i:ct,r:t,k:e,f:!!n}:t:null;function Ts(t,e=null,n=null,s=0,r=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yg(e),ref:e&&ma(e),scopeId:Cc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ct};return a?(Ph(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Pr>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const Je=WE;function WE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Fg)&&(t=kt),ji(t)){const a=gs(t,e,!0);return n&&Ph(a,n),Pr>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(s0(t)&&(t=t.__vccOpts),e){e=GE(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=ps(a)),Re(c)&&(vg(c)&&!X(c)&&(c=rt({},c)),e.style=wo(c))}const o=Ve(t)?1:aE(t)?128:HE(t)?64:Re(t)?4:ce(t)?2:0;return Ts(t,e,n,s,r,o,i,!0)}function GE(t){return t?vg(t)||Rc in t?rt({},t):t:null}function gs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Oc(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yg(a),ref:e&&e.ref?n&&r?X(r)?r.concat(ma(e)):[r,ma(e)]:ma(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Nc(t=" ",e=0){return Je(kc,null,t,e)}function cM(t,e){const n=Je(pa,null,t);return n.staticCount=e,n}function Nu(t="",e=!1){return e?(Be(),gn(kt,null,t)):Je(kt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Je(kt):X(t)?Je(at,null,t.slice()):typeof t=="object"?Xn(t):Je(kc,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function Ph(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ph(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Rc in e)?e._ctx=ct:r===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),s&64?(n=16,e=[Nc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Oc(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ps([e.class,s.class]));else if(r==="style")e.style=wo([e.style,s.style]);else if(vc(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function dn(t,e,n,s=null){Ht(t,e,7,[n,s])}const ZE=Wg();let QE=0;function YE(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ZE,i={uid:QE++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new rg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qg(s,r),emitsOptions:Rg(s,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:s.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=eE.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const xc=()=>Ke||ct,Lr=t=>{Ke=t,t.scope.on()},zs=()=>{Ke&&Ke.scope.off(),Ke=null};function Xg(t){return t.vnode.shapeFlag&4}let qi=!1;function XE(t,e=!1){qi=e;const{props:n,children:s}=t.vnode,r=Xg(t);PE(t,n,r,e),UE(t,s);const i=r?JE(t,e):void 0;return qi=!1,i}function JE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Dr(new Proxy(t.ctx,kE));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?t0(t):null;Lr(t),Qr();const i=ls(s,t,0,[t.props,r]);if(Yr(),zs(),eg(i)){if(i.then(zs,zs),e)return i.then(o=>{yl(t,o,e)}).catch(o=>{To(o,t,0)});t.asyncDep=i}else yl(t,i,e)}else Jg(t,e)}function yl(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Tg(e)),Jg(t,n)}let kf;function Jg(t,e,n){const s=t.type;if(!t.render){if(!e&&kf&&!s.render){const r=s.template||Oh(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=rt(rt({isCustomElement:i,delimiters:a},o),c);s.render=kf(r,u)}}t.render=s.render||nn}Lr(t),Qr(),RE(t),Yr(),zs()}function e0(t){return new Proxy(t.attrs,{get(e,n){return Nt(t,"get","$attrs"),e[n]}})}function t0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=e0(t))},slots:t.slots,emit:t.emit,expose:e}}function Dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Tg(Dr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bi)return bi[n](t)},has(e,n){return n in e||n in bi}}))}function n0(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function s0(t){return ce(t)&&"__vccOpts"in t}const Dt=(t,e)=>ZT(t,e,qi);function ey(t,e,n){const s=arguments.length;return s===2?Re(e)&&!X(e)?ji(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ji(n)&&(n=[n]),Je(t,e,n))}const r0=Symbol(""),i0=()=>sn(r0),o0="3.2.47",a0="http://www.w3.org/2000/svg",Ps=typeof document<"u"?document:null,Rf=Ps&&Ps.createElement("template"),c0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ps.createElementNS(a0,t):Ps.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ps.createTextNode(t),createComment:t=>Ps.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ps.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Rf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Rf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l0(t,e,n){const s=t.style,r=Ve(n);if(n&&!r){if(e&&!Ve(e))for(const i in e)n[i]==null&&vl(s,i,"");for(const i in n)vl(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Nf=/\s*!important$/;function vl(t,e,n){if(X(n))n.forEach(s=>vl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=h0(t,e);Nf.test(n)?t.setProperty(Zr(s),n.replace(Nf,""),"important"):t[s]=n}}const Of=["Webkit","Moz","ms"],Ou={};function h0(t,e){const n=Ou[e];if(n)return n;let s=Tn(e);if(s!=="filter"&&s in t)return Ou[e]=s;s=bc(s);for(let r=0;r<Of.length;r++){const i=Of[r]+s;if(i in t)return Ou[e]=i}return e}const xf="http://www.w3.org/1999/xlink";function d0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xf,e.slice(6,e.length)):t.setAttributeNS(xf,e,n);else{const i=nT(e);n==null||i&&!Ym(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function f0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ym(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ls(t,e,n,s){t.addEventListener(e,n,s)}function p0(t,e,n,s){t.removeEventListener(e,n,s)}function m0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=g0(e);if(s){const u=i[e]=_0(s,r);Ls(t,a,u,c)}else o&&(p0(t,a,o,c),i[e]=void 0)}}const Df=/(?:Once|Passive|Capture)$/;function g0(t){let e;if(Df.test(t)){e={};let s;for(;s=t.match(Df);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zr(t.slice(2)),e]}let xu=0;const y0=Promise.resolve(),v0=()=>xu||(y0.then(()=>xu=0),xu=Date.now());function _0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ht(w0(s,n.value),e,5,[s])};return n.value=t,n.attached=v0(),n}function w0(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Pf=/^on[a-z]/,b0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?u0(t,s,r):e==="style"?l0(t,n,s):vc(e)?dh(e)||m0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):T0(t,e,s,r))?f0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),d0(t,e,s,r))};function T0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Pf.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Pf.test(e)&&Ve(n)?!1:e in t}const Gn="transition",ai="animation",ty={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E0=rt({},gE.props,ty),Ns=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lf=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function I0(t){const e={};for(const V in t)V in ty||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=C0(r),y=g&&g[0],I=g&&g[1],{onBeforeEnter:S,onEnter:_,onEnterCancelled:b,onLeave:D,onLeaveCancelled:M,onBeforeAppear:K=S,onAppear:j=_,onAppearCancelled:R=b}=e,J=(V,Ee,ke)=>{Yn(V,Ee?l:a),Yn(V,Ee?u:o),ke&&ke()},te=(V,Ee)=>{V._isLeaving=!1,Yn(V,h),Yn(V,p),Yn(V,d),Ee&&Ee()},he=V=>(Ee,ke)=>{const ze=V?j:_,Me=()=>J(Ee,V,ke);Ns(ze,[Ee,Me]),Mf(()=>{Yn(Ee,V?c:i),Rn(Ee,V?l:a),Lf(ze)||Uf(Ee,s,y,Me)})};return rt(e,{onBeforeEnter(V){Ns(S,[V]),Rn(V,i),Rn(V,o)},onBeforeAppear(V){Ns(K,[V]),Rn(V,c),Rn(V,u)},onEnter:he(!1),onAppear:he(!0),onLeave(V,Ee){V._isLeaving=!0;const ke=()=>te(V,Ee);Rn(V,h),sy(),Rn(V,d),Mf(()=>{V._isLeaving&&(Yn(V,h),Rn(V,p),Lf(D)||Uf(V,s,I,ke))}),Ns(D,[V,ke])},onEnterCancelled(V){J(V,!1),Ns(b,[V])},onAppearCancelled(V){J(V,!0),Ns(R,[V])},onLeaveCancelled(V){te(V),Ns(M,[V])}})}function C0(t){if(t==null)return null;if(Re(t))return[Du(t.enter),Du(t.leave)];{const e=Du(t);return[e,e]}}function Du(t){return sg(t)}function Rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Yn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S0=0;function Uf(t,e,n,s){const r=t._endId=++S0,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ny(t,e);if(!o)return s();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function ny(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),r=s(`${Gn}Delay`),i=s(`${Gn}Duration`),o=Ff(r,i),a=s(`${ai}Delay`),c=s(`${ai}Duration`),u=Ff(a,c);let l=null,h=0,d=0;e===Gn?o>0&&(l=Gn,h=o,d=i.length):e===ai?u>0&&(l=ai,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Gn:ai:null,d=l?l===Gn?i.length:c.length:0);const p=l===Gn&&/\b(transform|all)(,|$)/.test(s(`${Gn}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:p}}function Ff(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Bf(n)+Bf(t[s])))}function Bf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function sy(){return document.body.offsetHeight}const ry=new WeakMap,iy=new WeakMap,oy={name:"TransitionGroup",props:rt({},E0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=xc(),s=Og();let r,i;return Lg(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!x0(r[0].el,n.vnode.el,o))return;r.forEach(R0),r.forEach(N0);const a=r.filter(O0);sy(),a.forEach(c=>{const u=c.el,l=u.style;Rn(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,Yn(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=ye(t),a=I0(o);let c=o.tag||at;r=i,i=e.default?kh(e.default()):[];for(let u=0;u<i.length;u++){const l=i[u];l.key!=null&&Vi(l,$i(l,a,s,n))}if(r)for(let u=0;u<r.length;u++){const l=r[u];Vi(l,$i(l,a,s,n)),ry.set(l,l.el.getBoundingClientRect())}return Je(c,null,i)}}},A0=t=>delete t.mode;oy.props;const k0=oy;function R0(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function N0(t){iy.set(t,t.el.getBoundingClientRect())}function O0(t){const e=ry.get(t),n=iy.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function x0(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=ny(s);return r.removeChild(s),i}const xa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>da(e,n):e};function D0(t){t.target.composing=!0}function $f(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const uM={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=xa(r);const i=s||r.props&&r.props.type==="number";Ls(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Aa(a)),t._assign(a)}),n&&Ls(t,"change",()=>{t.value=t.value.trim()}),e||(Ls(t,"compositionstart",D0),Ls(t,"compositionend",$f),Ls(t,"change",$f))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=xa(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Aa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},lM={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=_c(e);Ls(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Aa(Da(o)):Da(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=xa(s)},mounted(t,{value:e}){Vf(t,e)},beforeUpdate(t,e,n){t._assign=xa(n)},updated(t,{value:e}){Vf(t,e)}};function Vf(t,e){const n=t.multiple;if(!(n&&!X(e)&&!_c(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Da(i);if(n)X(e)?i.selected=rT(e,o)>-1:i.selected=e.has(o);else if(yc(Da(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Da(t){return"_value"in t?t._value:t.value}const P0=["ctrl","shift","alt","meta"],L0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>P0.some(n=>t[`${n}Key`]&&!e.includes(n))},M0=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=L0[e[r]];if(i&&i(n,e))return}return t(n,...s)},hM={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ci(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ci(t,!0),s.enter(t)):s.leave(t,()=>{ci(t,!1)}):ci(t,e))},beforeUnmount(t,{value:e}){ci(t,e)}};function ci(t,e){t.style.display=e?t._vod:"none"}const U0=rt({patchProp:b0},c0);let jf;function F0(){return jf||(jf=VE(U0))}const ay=(...t)=>{const e=F0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=B0(s);if(!r)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function B0(t){return Ve(t)?document.querySelector(t):t}var $0=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let cy;const Pc=t=>cy=t,uy=Symbol();function _l(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ii;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ii||(Ii={}));function V0(){const t=ig(!0),e=t.run(()=>Th({}));let n=[],s=[];const r=Dr({install(i){Pc(r),r._a=i,i.provide(uy,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!$0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const ly=()=>{};function qf(t,e,n,s=ly){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&og()&&fT(r),r}function mr(t,...e){t.slice().forEach(n=>{n(...e)})}function wl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];_l(r)&&_l(s)&&t.hasOwnProperty(n)&&!We(s)&&!cs(s)?t[n]=wl(r,s):t[n]=s}return t}const j0=Symbol();function q0(t){return!_l(t)||!t.hasOwnProperty(j0)}const{assign:Jn}=Object;function H0(t){return!!(We(t)&&t.effect)}function z0(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const l=zT(n.state.value[t]);return Jn(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Dr(Dt(()=>{Pc(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=hy(t,u,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{Jn(d,h)})},c}function hy(t,e,n={},s,r,i){let o;const a=Jn({actions:{}},n),c={deep:!0};let u,l,h=Dr([]),d=Dr([]),p;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),Th({});let y;function I(j){let R;u=l=!1,typeof j=="function"?(j(s.state.value[t]),R={type:Ii.patchFunction,storeId:t,events:p}):(wl(s.state.value[t],j),R={type:Ii.patchObject,payload:j,storeId:t,events:p});const J=y=Symbol();Ec().then(()=>{y===J&&(u=!0)}),l=!0,mr(h,R,s.state.value[t])}const S=ly;function _(){o.stop(),h=[],d=[],s._s.delete(t)}function b(j,R){return function(){Pc(s);const J=Array.from(arguments),te=[],he=[];function V(ze){te.push(ze)}function Ee(ze){he.push(ze)}mr(d,{args:J,name:j,store:M,after:V,onError:Ee});let ke;try{ke=R.apply(this&&this.$id===t?this:M,J)}catch(ze){throw mr(he,ze),ze}return ke instanceof Promise?ke.then(ze=>(mr(te,ze),ze)).catch(ze=>(mr(he,ze),Promise.reject(ze))):(mr(te,ke),ke)}}const D={_p:s,$id:t,$onAction:qf.bind(null,d),$patch:I,$reset:S,$subscribe(j,R={}){const J=qf(h,j,R.detached,()=>te()),te=o.run(()=>vi(()=>s.state.value[t],he=>{(R.flush==="sync"?l:u)&&j({storeId:t,type:Ii.direct,events:p},he)},Jn({},c,R)));return J},$dispose:_},M=Xr(D);s._s.set(t,M);const K=s._e.run(()=>(o=ig(),o.run(()=>e())));for(const j in K){const R=K[j];if(We(R)&&!H0(R)||cs(R))i||(g&&q0(R)&&(We(R)?R.value=g[j]:wl(R,g[j])),s.state.value[t][j]=R);else if(typeof R=="function"){const J=b(j,R);K[j]=J,a.actions[j]=R}}return Jn(M,K),Jn(ye(M),K),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:j=>{I(R=>{Jn(R,j)})}}),s._p.forEach(j=>{Jn(M,o.run(()=>j({store:M,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(M.$state,g),u=!0,l=!0,M}function K0(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const u=xc();return a=a||u&&sn(uy,null),a&&Pc(a),a=cy,a._s.has(s)||(i?hy(s,e,r,a):z0(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yr=typeof window<"u";function W0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function Pu(t,e){const n={};for(const s in e){const r=e[s];n[s]=on(r)?r.map(t):t(r)}return n}const Ci=()=>{},on=Array.isArray,G0=/\/$/,Z0=t=>t.replace(G0,"");function Lu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=J0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Q0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Y0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Mr(e.matched[s],n.matched[r])&&dy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!X0(t[n],e[n]))return!1;return!0}function X0(t,e){return on(t)?zf(t,e):on(e)?zf(e,t):t===e}function zf(t,e){return on(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function J0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Hi;(function(t){t.pop="pop",t.push="push"})(Hi||(Hi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function eI(t){if(!t)if(yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Z0(t)}const tI=/^[^#]+#/;function nI(t,e){return t.replace(tI,"#")+e}function sI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Lc=()=>({left:window.pageXOffset,top:window.pageYOffset});function rI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=sI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Kf(t,e){return(history.state?history.state.position-e:-1)+t}const bl=new Map;function iI(t,e){bl.set(t,e)}function oI(t){const e=bl.get(t);return bl.delete(t),e}let aI=()=>location.protocol+"//"+location.host;function fy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Hf(c,"")}return Hf(n,t)+s+r}function cI(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=fy(t,location),g=n.value,y=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}I=y?d.position-y.position:0}else s(p);r.forEach(S=>{S(n.value,g,{delta:I,type:Hi.pop,direction:I?I>0?Si.forward:Si.back:Si.unknown})})};function c(){o=n.value}function u(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(Ce({},d.state,{scroll:Lc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Wf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Lc():null}}function uI(t){const{history:e,location:n}=window,s={value:fy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:aI()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=Ce({},e.state,Wf(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=Ce({},r.value,e.state,{forward:c,scroll:Lc()});i(l.current,l,!0);const h=Ce({},Wf(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function lI(t){t=eI(t);const e=uI(t),n=cI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ce({location:"",base:t,go:s,createHref:nI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hI(t){return typeof t=="string"||t&&typeof t=="object"}function py(t){return typeof t=="string"||typeof t=="symbol"}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},my=Symbol("");var Gf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gf||(Gf={}));function Ur(t,e){return Ce(new Error,{type:t,[my]:!0},e)}function kn(t,e){return t instanceof Error&&my in t&&(e==null||!!(t.type&e))}const Zf="[^/]+?",dI={sensitive:!1,strict:!1,start:!0,end:!0},fI=/[.+*?^${}()[\]/\\]/g;function pI(t,e){const n=Ce({},dI,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(fI,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:y,optional:I,regexp:S}=d;i.push({name:g,repeatable:y,optional:I});const _=S||Zf;if(_!==Zf){p+=10;try{new RegExp(`(${_})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+D.message)}}let b=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(b=I&&u.length<2?`(?:/${b})`:"/"+b),I&&(b+="?"),r+=b,p+=20,I&&(p+=-8),y&&(p+=-20),_===".*"&&(p+=-50)}l.push(p)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:y,optional:I}=p,S=g in u?u[g]:"";if(on(S)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=on(S)?S.join("/"):S;if(!_)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=_}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function mI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=mI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Qf(s))return 1;if(Qf(r))return-1}return r.length-s.length}function Qf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yI={type:0,value:""},vI=/[a-zA-Z0-9_]/;function _I(t){if(!t)return[[]];if(t==="/")return[[yI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:vI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function wI(t,e,n){const s=pI(_I(t.path),n),r=Ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function bI(t,e){const n=[],s=new Map;e=Jf({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const p=!d,g=TI(l);g.aliasOf=d&&d.record;const y=Jf(e,l),I=[g];if("alias"in l){const b=typeof l.alias=="string"?[l.alias]:l.alias;for(const D of b)I.push(Ce({},g,{components:d?d.record.components:g.components,path:D,aliasOf:d?d.record:g}))}let S,_;for(const b of I){const{path:D}=b;if(h&&D[0]!=="/"){const M=h.record.path,K=M[M.length-1]==="/"?"":"/";b.path=h.record.path+(D&&K+D)}if(S=wI(b,h,y),d?d.alias.push(S):(_=_||S,_!==S&&_.alias.push(S),p&&l.name&&!Xf(S)&&o(l.name)),g.children){const M=g.children;for(let K=0;K<M.length;K++)i(M[K],S,d&&d.children[K])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return _?()=>{o(_)}:Ci}function o(l){if(py(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&gI(l,n[h])>=0&&(l.record.path!==n[h].record.path||!gy(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Xf(l)&&s.set(l.record.name,l)}function u(l,h){let d,p={},g,y;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw Ur(1,{location:l});y=d.record.name,p=Ce(Yf(h.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),l.params&&Yf(l.params,d.keys.map(_=>_.name))),g=d.stringify(p)}else if("path"in l)g=l.path,d=n.find(_=>_.re.test(g)),d&&(p=d.parse(g),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw Ur(1,{location:l,currentLocation:h});y=d.record.name,p=Ce({},h.params,l.params),g=d.stringify(p)}const I=[];let S=d;for(;S;)I.unshift(S.record),S=S.parent;return{name:y,path:g,params:p,matched:I,meta:II(I)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Yf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function TI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:EI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function EI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function II(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function Jf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function gy(t,e){return e.children.some(n=>n===t||gy(t,n))}const yy=/#/g,CI=/&/g,SI=/\//g,AI=/=/g,kI=/\?/g,vy=/\+/g,RI=/%5B/g,NI=/%5D/g,_y=/%5E/g,OI=/%60/g,wy=/%7B/g,xI=/%7C/g,by=/%7D/g,DI=/%20/g;function Lh(t){return encodeURI(""+t).replace(xI,"|").replace(RI,"[").replace(NI,"]")}function PI(t){return Lh(t).replace(wy,"{").replace(by,"}").replace(_y,"^")}function Tl(t){return Lh(t).replace(vy,"%2B").replace(DI,"+").replace(yy,"%23").replace(CI,"%26").replace(OI,"`").replace(wy,"{").replace(by,"}").replace(_y,"^")}function LI(t){return Tl(t).replace(AI,"%3D")}function MI(t){return Lh(t).replace(yy,"%23").replace(kI,"%3F")}function UI(t){return t==null?"":MI(t).replace(SI,"%2F")}function Pa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(vy," "),o=i.indexOf("="),a=Pa(o<0?i:i.slice(0,o)),c=o<0?null:Pa(i.slice(o+1));if(a in e){let u=e[a];on(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ep(t){let e="";for(let n in t){const s=t[n];if(n=LI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(s)?s.map(i=>i&&Tl(i)):[s&&Tl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=on(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const $I=Symbol(""),tp=Symbol(""),Mh=Symbol(""),Ty=Symbol(""),El=Symbol("");function ui(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function es(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ur(4,{from:n,to:e})):h instanceof Error?a(h):hI(h)?a(Ur(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Mu(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(VI(a)){const u=(a.__vccOpts||a)[e];u&&r.push(es(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=W0(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&es(d,n,s,i,o)()}))}}return r}function VI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function np(t){const e=sn(Mh),n=sn(Ty),s=Dt(()=>e.resolve(us(t.to))),r=Dt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Mr.bind(null,l));if(d>-1)return d;const p=sp(c[u-2]);return u>1&&sp(l)===p&&h[h.length-1].path!==p?h.findIndex(Mr.bind(null,c[u-2])):d}),i=Dt(()=>r.value>-1&&zI(n.params,s.value.params)),o=Dt(()=>r.value>-1&&r.value===n.matched.length-1&&dy(n.params,s.value.params));function a(c={}){return HI(c)?e[us(t.replace)?"replace":"push"](us(t.to)).catch(Ci):Promise.resolve()}return{route:s,href:Dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const jI=An({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:np,setup(t,{slots:e}){const n=Xr(np(t)),{options:s}=sn(Mh),r=Dt(()=>({[rp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[rp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ey("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),qI=jI;function HI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!on(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function sp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rp=(t,e,n)=>t??e??n,KI=An({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=sn(El),r=Dt(()=>t.route||s.value),i=sn(tp,0),o=Dt(()=>{let u=us(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Dt(()=>r.value.matched[o.value]);fa(tp,Dt(()=>o.value+1)),fa($I,a),fa(El,r);const c=Th();return vi(()=>[c.value,a.value,t.name],([u,l,h],[d,p,g])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!Mr(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return ip(n.default,{Component:d,route:u});const p=h.props[l],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,I=ey(d,Ce({},g,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return ip(n.default,{Component:I,route:u})||I}}});function ip(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ey=KI;function WI(t){const e=bI(t.routes,t),n=t.parseQuery||FI,s=t.stringifyQuery||ep,r=t.history,i=ui(),o=ui(),a=ui(),c=jT(Zn);let u=Zn;yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Pu.bind(null,E=>""+E),h=Pu.bind(null,UI),d=Pu.bind(null,Pa);function p(E,B){let L,G;return py(E)?(L=e.getRecordMatcher(E),G=B):G=E,e.addRoute(G,L)}function g(E){const B=e.getRecordMatcher(E);B&&e.removeRoute(B)}function y(){return e.getRoutes().map(E=>E.record)}function I(E){return!!e.getRecordMatcher(E)}function S(E,B){if(B=Ce({},B||c.value),typeof E=="string"){const f=Lu(n,E,B.path),m=e.resolve({path:f.path},B),v=r.createHref(f.fullPath);return Ce(f,m,{params:d(m.params),hash:Pa(f.hash),redirectedFrom:void 0,href:v})}let L;if("path"in E)L=Ce({},E,{path:Lu(n,E.path,B.path).path});else{const f=Ce({},E.params);for(const m in f)f[m]==null&&delete f[m];L=Ce({},E,{params:h(E.params)}),B.params=h(B.params)}const G=e.resolve(L,B),_e=E.hash||"";G.params=l(d(G.params));const Ue=Q0(s,Ce({},E,{hash:PI(_e),path:G.path})),fe=r.createHref(Ue);return Ce({fullPath:Ue,hash:_e,query:s===ep?BI(E.query):E.query||{}},G,{redirectedFrom:void 0,href:fe})}function _(E){return typeof E=="string"?Lu(n,E,c.value.path):Ce({},E)}function b(E,B){if(u!==E)return Ur(8,{from:B,to:E})}function D(E){return j(E)}function M(E){return D(Ce(_(E),{replace:!0}))}function K(E){const B=E.matched[E.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let G=typeof L=="function"?L(E):L;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=_(G):{path:G},G.params={}),Ce({query:E.query,hash:E.hash,params:"path"in G?{}:E.params},G)}}function j(E,B){const L=u=S(E),G=c.value,_e=E.state,Ue=E.force,fe=E.replace===!0,f=K(L);if(f)return j(Ce(_(f),{state:typeof f=="object"?Ce({},_e,f.state):_e,force:Ue,replace:fe}),B||L);const m=L;m.redirectedFrom=B;let v;return!Ue&&Y0(s,G,L)&&(v=Ur(16,{to:m,from:G}),As(G,G,!0,!1)),(v?Promise.resolve(v):J(m,G)).catch(w=>kn(w)?kn(w,2)?w:Zt(w):Ne(w,m,G)).then(w=>{if(w){if(kn(w,2))return j(Ce({replace:fe},_(w.to),{state:typeof w.to=="object"?Ce({},_e,w.to.state):_e,force:Ue}),B||m)}else w=he(m,G,!0,fe,_e);return te(m,G,w),w})}function R(E,B){const L=b(E,B);return L?Promise.reject(L):Promise.resolve()}function J(E,B){let L;const[G,_e,Ue]=GI(E,B);L=Mu(G.reverse(),"beforeRouteLeave",E,B);for(const f of G)f.leaveGuards.forEach(m=>{L.push(es(m,E,B))});const fe=R.bind(null,E,B);return L.push(fe),gr(L).then(()=>{L=[];for(const f of i.list())L.push(es(f,E,B));return L.push(fe),gr(L)}).then(()=>{L=Mu(_e,"beforeRouteUpdate",E,B);for(const f of _e)f.updateGuards.forEach(m=>{L.push(es(m,E,B))});return L.push(fe),gr(L)}).then(()=>{L=[];for(const f of E.matched)if(f.beforeEnter&&!B.matched.includes(f))if(on(f.beforeEnter))for(const m of f.beforeEnter)L.push(es(m,E,B));else L.push(es(f.beforeEnter,E,B));return L.push(fe),gr(L)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),L=Mu(Ue,"beforeRouteEnter",E,B),L.push(fe),gr(L))).then(()=>{L=[];for(const f of o.list())L.push(es(f,E,B));return L.push(fe),gr(L)}).catch(f=>kn(f,8)?f:Promise.reject(f))}function te(E,B,L){for(const G of a.list())G(E,B,L)}function he(E,B,L,G,_e){const Ue=b(E,B);if(Ue)return Ue;const fe=B===Zn,f=yr?history.state:{};L&&(G||fe?r.replace(E.fullPath,Ce({scroll:fe&&f&&f.scroll},_e)):r.push(E.fullPath,_e)),c.value=E,As(E,B,L,fe),Zt()}let V;function Ee(){V||(V=r.listen((E,B,L)=>{if(!Ko.listening)return;const G=S(E),_e=K(G);if(_e){j(Ce(_e,{replace:!0}),G).catch(Ci);return}u=G;const Ue=c.value;yr&&iI(Kf(Ue.fullPath,L.delta),Lc()),J(G,Ue).catch(fe=>kn(fe,12)?fe:kn(fe,2)?(j(fe.to,G).then(f=>{kn(f,20)&&!L.delta&&L.type===Hi.pop&&r.go(-1,!1)}).catch(Ci),Promise.reject()):(L.delta&&r.go(-L.delta,!1),Ne(fe,G,Ue))).then(fe=>{fe=fe||he(G,Ue,!1),fe&&(L.delta&&!kn(fe,8)?r.go(-L.delta,!1):L.type===Hi.pop&&kn(fe,20)&&r.go(-1,!1)),te(G,Ue,fe)}).catch(Ci)}))}let ke=ui(),ze=ui(),Me;function Ne(E,B,L){Zt(E);const G=ze.list();return G.length?G.forEach(_e=>_e(E,B,L)):console.error(E),Promise.reject(E)}function Se(){return Me&&c.value!==Zn?Promise.resolve():new Promise((E,B)=>{ke.add([E,B])})}function Zt(E){return Me||(Me=!E,Ee(),ke.list().forEach(([B,L])=>E?L(E):B()),ke.reset()),E}function As(E,B,L,G){const{scrollBehavior:_e}=t;if(!yr||!_e)return Promise.resolve();const Ue=!L&&oI(Kf(E.fullPath,0))||(G||!L)&&history.state&&history.state.scroll||null;return Ec().then(()=>_e(E,B,Ue)).then(fe=>fe&&rI(fe)).catch(fe=>Ne(fe,E,B))}const Qt=E=>r.go(E);let Ct;const fr=new Set,Ko={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:I,getRoutes:y,resolve:S,options:t,push:D,replace:M,go:Qt,back:()=>Qt(-1),forward:()=>Qt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ze.add,isReady:Se,install(E){const B=this;E.component("RouterLink",qI),E.component("RouterView",Ey),E.config.globalProperties.$router=B,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>us(c)}),yr&&!Ct&&c.value===Zn&&(Ct=!0,D(r.location).catch(_e=>{}));const L={};for(const _e in Zn)L[_e]=Dt(()=>c.value[_e]);E.provide(Mh,B),E.provide(Ty,Xr(L)),E.provide(El,c);const G=E.unmount;fr.add(E),E.unmount=function(){fr.delete(E),fr.size<1&&(u=Zn,V&&V(),V=null,c.value=Zn,Ct=!1,Me=!1),G()}}};return Ko}function gr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function GI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Mr(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Mr(u,c))||r.push(c))}return[n,s,r]}const ZI=t=>(tE("data-v-029362bf"),t=t(),nE(),t),QI=ZI(()=>Ts("div",{id:"modal"},null,-1)),YI=An({__name:"App",setup(t){return(e,n)=>(Be(),jt(at,null,[Je(us(Ey)),QI],64))}});const XI=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},JI=XI(YI,[["__scopeId","data-v-029362bf"]]),eC="modulepreload",tC=function(t){return"/"+t},op={},ea=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=tC(i),i in op)return;op[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":eC,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Iy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},nC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const g=u<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},sC=function(t){const e=Iy(t);return Cy.encodeByteArray(e,!0)},La=function(t){return sC(t).replace(/\./g,"")},Sy=function(t){try{return Cy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iC=()=>rC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sy(t[1]);return e&&JSON.parse(e)},Mc=()=>{try{return iC()||oC()||aC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ay=t=>{var e,n;return(n=(e=Mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ky=t=>{const e=Ay(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cC=()=>{var t;return(t=Mc())===null||t===void 0?void 0:t.config},Ry=t=>{var e;return(e=Mc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ny(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[La(JSON.stringify(n)),La(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function hC(){var t;const e=(t=Mc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xy(){try{return typeof indexedDB=="object"}catch{return!1}}function Dy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function pC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="FirebaseError";class Gt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mC,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?gC(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Gt(r,a,s)}}function gC(t,e){return t.replace(yC,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const yC=/\{\$([^}]+)}/g;function vC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ap(i)&&ap(o)){if(!zi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ap(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _C(t,e){const n=new wC(t,e);return n.subscribe.bind(n)}class wC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bC(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Uu),r.error===void 0&&(r.error=Uu),r.complete===void 0&&(r.complete=Uu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uu(){}/**
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
 */const TC=1e3,EC=2,IC=4*60*60*1e3,CC=.5;function cp(t,e=TC,n=EC){const s=e*Math.pow(n,t),r=Math.round(CC*s*(Math.random()-.5)*2);return Math.min(IC,s+r)}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Wt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xs="[DEFAULT]";/**
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
 */class SC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new uC;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kC(e))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xs){return this.instances.has(e)}getOptions(e=xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:AC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xs){return this.component?this.component.multipleInstances?e:xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AC(t){return t===xs?void 0:t}function kC(t){return t.instantiationMode==="EAGER"}/**
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
 */class RC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const NC={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},OC=be.INFO,xC={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},DC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=xC[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=OC,this._logHandler=DC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const PC=(t,e)=>e.some(n=>t instanceof n);let up,lp;function LC(){return up||(up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Py=new WeakMap,Il=new WeakMap,Ly=new WeakMap,Fu=new WeakMap,Uh=new WeakMap;function UC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Py.set(n,t)}).catch(()=>{}),Uh.set(e,t),e}function FC(t){if(Il.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Il.set(t,e)}let Cl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Il.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ly.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BC(t){Cl=t(Cl)}function $C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bu(this),e,...n);return Ly.set(s,e.sort?e.sort():[e]),hs(s)}:MC().includes(t)?function(...e){return t.apply(Bu(this),e),hs(Py.get(this))}:function(...e){return hs(t.apply(Bu(this),e))}}function VC(t){return typeof t=="function"?$C(t):(t instanceof IDBTransaction&&FC(t),PC(t,LC())?new Proxy(t,Cl):t)}function hs(t){if(t instanceof IDBRequest)return UC(t);if(Fu.has(t))return Fu.get(t);const e=VC(t);return e!==t&&(Fu.set(t,e),Uh.set(e,t)),e}const Bu=t=>Uh.get(t);function My(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=hs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(hs(o.result),c.oldVersion,c.newVersion,hs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const jC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],$u=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($u.get(e))return $u.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=qC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||jC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return $u.set(e,i),i}BC(t=>({...t,get:(e,n,s)=>hp(e,n)||t.get(e,n,s),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));/**
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
 */class HC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sl="@firebase/app",dp="0.9.3";/**
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
 */const Ys=new Uc("@firebase/app"),KC="@firebase/app-compat",WC="@firebase/analytics-compat",GC="@firebase/analytics",ZC="@firebase/app-check-compat",QC="@firebase/app-check",YC="@firebase/auth",XC="@firebase/auth-compat",JC="@firebase/database",eS="@firebase/database-compat",tS="@firebase/functions",nS="@firebase/functions-compat",sS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",oS="@firebase/messaging-compat",aS="@firebase/performance",cS="@firebase/performance-compat",uS="@firebase/remote-config",lS="@firebase/remote-config-compat",hS="@firebase/storage",dS="@firebase/storage-compat",fS="@firebase/firestore",pS="@firebase/firestore-compat",mS="firebase",gS="9.17.1";/**
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
 */const Al="[DEFAULT]",yS={[Sl]:"fire-core",[KC]:"fire-core-compat",[GC]:"fire-analytics",[WC]:"fire-analytics-compat",[QC]:"fire-app-check",[ZC]:"fire-app-check-compat",[YC]:"fire-auth",[XC]:"fire-auth-compat",[JC]:"fire-rtdb",[eS]:"fire-rtdb-compat",[tS]:"fire-fn",[nS]:"fire-fn-compat",[sS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[oS]:"fire-fcm-compat",[aS]:"fire-perf",[cS]:"fire-perf-compat",[uS]:"fire-rc",[lS]:"fire-rc-compat",[hS]:"fire-gcs",[dS]:"fire-gcs-compat",[fS]:"fire-fst",[pS]:"fire-fst-compat","fire-js":"fire-js",[mS]:"fire-js-all"};/**
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
 */const Ma=new Map,kl=new Map;function vS(t,e){try{t.container.addComponent(e)}catch(n){Ys.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(kl.has(e))return Ys.debug(`There were multiple attempts to register component ${e}.`),!1;kl.set(e,t);for(const n of Ma.values())vS(n,t);return!0}function Es(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _S={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ds=new ar("app","Firebase",_S);/**
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
 */class wS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const Jr=gS;function Uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Al,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ds.create("bad-app-name",{appName:String(r)});if(n||(n=cC()),!n)throw ds.create("no-options");const i=Ma.get(r);if(i){if(zi(n,i.options)&&zi(s,i.config))return i;throw ds.create("duplicate-app",{appName:r})}const o=new RC(r);for(const c of kl.values())o.addComponent(c);const a=new wS(n,s,o);return Ma.set(r,a),a}function Fc(t=Al){const e=Ma.get(t);if(!e&&t===Al)return Uy();if(!e)throw ds.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let r=(s=yS[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ys.warn(a.join(" "));return}an(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bS="firebase-heartbeat-database",TS=1,Ki="firebase-heartbeat-store";let Vu=null;function Fy(){return Vu||(Vu=My(bS,TS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ki)}}}).catch(t=>{throw ds.create("idb-open",{originalErrorMessage:t.message})})),Vu}async function ES(t){try{return(await Fy()).transaction(Ki).objectStore(Ki).get(By(t))}catch(e){if(e instanceof Gt)Ys.warn(e.message);else{const n=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ys.warn(n.message)}}}async function fp(t,e){try{const s=(await Fy()).transaction(Ki,"readwrite");return await s.objectStore(Ki).put(e,By(t)),s.done}catch(n){if(n instanceof Gt)Ys.warn(n.message);else{const s=ds.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ys.warn(s.message)}}}function By(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IS=1024,CS=30*24*60*60*1e3;class SS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=CS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pp(),{heartbeatsToSend:n,unsentEntries:s}=AS(this._heartbeatsCache.heartbeats),r=La(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pp(){return new Date().toISOString().substring(0,10)}function AS(t,e=IS){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),mp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xy()?Dy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ES(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mp(t){return La(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RS(t){an(new Wt("platform-logger",e=>new HC(e),"PRIVATE")),an(new Wt("heartbeat",e=>new SS(e),"PRIVATE")),Rt(Sl,dp,t),Rt(Sl,dp,"esm2017"),Rt("fire-js","")}RS("");var NS="firebase",OS="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(NS,OS,"app");function Fh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function $y(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xS=$y,Vy=new ar("auth","Firebase",$y());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new Uc("@firebase/auth");function ga(t,...e){gp.logLevel<=be.ERROR&&gp.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw Bh(t,...e)}function vn(t,...e){return Bh(t,...e)}function jy(t,e,n){const s=Object.assign(Object.assign({},xS()),{[e]:n});return new ar("auth","Firebase",s).create(e,{appName:t.name})}function DS(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&En(t,"argument-error"),jy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vy.create(t,...e)}function se(t,e,...n){if(!t)throw Bh(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ga(e),new Error(e)}function Bn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new Map;function xn(t){Bn(t instanceof Function,"Expected a class definition");let e=yp.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e){const n=Es(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(zi(i,e??{}))return r;En(r,"already-initialized")}return n.initialize({options:e})}function LS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MS(){return vp()==="http:"||vp()==="https:"}function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MS()||Oy()||"connection"in navigator)?navigator.onLine:!0}function FS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=lC()||dC()}get(){return US()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=new Co(3e4,6e4);function VS(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bc(t,e,n,s,r={}){return Hy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Io(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),qy.fetch()(zy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Hy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},BS),e);try{const r=new qS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ta(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jy(t,l,u);En(t,l)}}catch(r){if(r instanceof Gt)throw r;En(t,"network-request-failed")}}async function jS(t,e,n,s,r={}){const i=await Bc(t,e,n,s,r);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zy(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?$h(t.config,r):`${t.config.apiScheme}://${r}`}class qS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(vn(this.auth,"network-request-failed")),$S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=vn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e){return Bc(t,"POST","/v1/accounts:delete",e)}async function zS(t,e){return Bc(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KS(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=Vh(s);se(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ai(ju(r.auth_time)),issuedAtTime:Ai(ju(r.iat)),expirationTime:Ai(ju(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function Vh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ga("JWT malformed, contained fewer than 3 sections"),null;try{const r=Sy(n);return r?JSON.parse(r):(ga("Failed to decode base64 JWT payload"),null)}catch(r){return ga("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function WS(t){const e=Vh(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Gt&&GS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function GS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ua(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Wi(t,zS(n,{idToken:s}));se(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?XS(i.providerUserInfo):[],a=YS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ky(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function QS(t){const e=$e(t);await Ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function XS(t){return t.map(e=>{var{providerId:n}=e,s=Fh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e){const n=await Hy(t,{},async()=>{const s=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=zy(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):WS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await JS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Gi;return s&&(se(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(se(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ks{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ky(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KS(this,e)}reload(){return QS(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ks(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ua(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wi(this,HS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:b,emailVerified:D,isAnonymous:M,providerData:K,stsTokenManager:j}=n;se(b&&j,e,"internal-error");const R=Gi.fromJSON(this.name,j);se(typeof b=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),se(typeof D=="boolean",e,"internal-error"),se(typeof M=="boolean",e,"internal-error"),Qn(p,e.name),Qn(g,e.name),Qn(y,e.name),Qn(I,e.name),Qn(S,e.name),Qn(_,e.name);const J=new Ks({uid:b,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:M,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:R,createdAt:S,lastLoginAt:_});return K&&Array.isArray(K)&&(J.providerData=K.map(te=>Object.assign({},te))),I&&(J._redirectEventId=I),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new Gi;r.updateFromServerResponse(n);const i=new Ks({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ua(i),i}}/**
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
 */class Wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wy.type="NONE";const _p=Wy;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Sr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ya(this.userKey,r.apiKey,i),this.fullPersistenceKey=ya("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ks._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Sr(xn(_p),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||xn(_p);const o=ya(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Ks._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Sr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Sr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Jy(e))return"Webos";if(jh(e))return"Safari";if((e.includes("chrome/")||Zy(e))&&!e.includes("edge/"))return"Chrome";if(Yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gy(t=yt()){return/firefox\//i.test(t)}function jh(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zy(t=yt()){return/crios\//i.test(t)}function Qy(t=yt()){return/iemobile/i.test(t)}function Yy(t=yt()){return/android/i.test(t)}function Xy(t=yt()){return/blackberry/i.test(t)}function Jy(t=yt()){return/webos/i.test(t)}function $c(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eA(t=yt()){var e;return $c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tA(){return fC()&&document.documentMode===10}function ev(t=yt()){return $c(t)||Yy(t)||Jy(t)||Xy(t)||/windows phone/i.test(t)||Qy(t)}function nA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t,e=[]){let n;switch(t){case"Browser":n=wp(yt());break;case"Worker":n=`${wp(yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${s}`}/**
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
 */class sA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bp(this),this.idTokenSubscription=new bp(this),this.beforeStateQueue=new sA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ua(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Vc(t){return $e(t)}class bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=_C(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iA(t,e,n){const s=Vc(t);se(s._canInitEmulator,s,"emulator-config-failed"),se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=nv(e),{host:o,port:a}=oA(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||aA()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oA(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Tp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Tp(o)}}}function Tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e){return jS(t,"POST","/v1/accounts:signInWithIdp",VS(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="http://localhost";class Xs extends sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Fh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ar(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:cA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class So extends qh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends So{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";ts.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xs._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.GOOGLE_SIGN_IN_METHOD="google.com";ns.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends So{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.GITHUB_SIGN_IN_METHOD="github.com";ss.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends So{constructor(){super("twitter.com")}static credential(e,n){return Xs._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rs.credential(n,s)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ks._fromIdTokenResponse(e,s,r),o=Ep(s);return new Fr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ep(s);return new Fr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Gt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Fa(e,n,s,r)}}function rv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fa._fromErrorAndOperation(t,i,e,s):i})}async function uA(t,e,n=!1){const s=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",s)}/**
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
 */async function lA(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Wi(t,rv(s,r,e,t),n);se(i.idToken,s,"internal-error");const o=Vh(i.idToken);se(o,s,"internal-error");const{sub:a}=o;return se(t.uid===a,s,"user-mismatch"),Fr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e,n=!1){const s="signIn",r=await rv(t,s,e),i=await Fr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function dA(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function fA(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function pA(t,e,n,s){return $e(t).onAuthStateChanged(e,n,s)}function dM(t){return $e(t).signOut()}const Ba="__sak";/**
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
 */class iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){const t=yt();return jh(t)||$c(t)}const gA=1e3,yA=10;class ov extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mA()&&nA(),this.fallbackToPolling=ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);tA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yA):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ov.type="LOCAL";const vA=ov;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}av.type="SESSION";const cv=av;/**
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
 */function _A(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new jc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await _A(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Hh("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function bA(t){_n().location.href=t}/**
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
 */function uv(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function TA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IA(){return uv()?self:null}/**
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
 */const lv="firebaseLocalStorageDb",CA=1,$a="firebaseLocalStorage",hv="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qc(t,e){return t.transaction([$a],e?"readwrite":"readonly").objectStore($a)}function SA(){const t=indexedDB.deleteDatabase(lv);return new Ao(t).toPromise()}function Nl(){const t=indexedDB.open(lv,CA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($a,{keyPath:hv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($a)?e(s):(s.close(),await SA(),e(await Nl()))})})}async function Ip(t,e,n){const s=qc(t,!0).put({[hv]:e,value:n});return new Ao(s).toPromise()}async function AA(t,e){const n=qc(t,!1).get(e),s=await new Ao(n).toPromise();return s===void 0?null:s.value}function Cp(t,e){const n=qc(t,!0).delete(e);return new Ao(n).toPromise()}const kA=800,RA=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>RA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(IA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TA(),!this.activeServiceWorker)return;this.sender=new wA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await Ip(e,Ba,"1"),await Cp(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ip(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>AA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=qc(r,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const NA=dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xA(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=vn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",OA().appendChild(s)})}function DA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Co(3e4,6e4);/**
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
 */function fv(t,e){return e?xn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zh extends sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PA(t){return hA(t.auth,new zh(t),t.bypassAuthState)}function LA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),lA(n,new zh(t),t.bypassAuthState)}async function MA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),uA(n,new zh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PA;case"linkViaPopup":case"linkViaRedirect":return MA;case"reauthViaPopup":case"reauthViaRedirect":return LA;default:En(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new Co(2e3,1e4);async function fM(t,e,n){const s=Vc(t);DS(t,e,qh);const r=fv(s,n);return new Us(s,"signInViaPopup",e,r).executeNotNull()}class Us extends pv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Hh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,UA.get())};e()}}Us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="pendingRedirect",va=new Map;class BA extends pv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const s=await $A(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $A(t,e){const n=qA(e),s=jA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function VA(t,e){va.set(t._key(),e)}function jA(t){return xn(t._redirectPersistence)}function qA(t){return ya(FA,t.config.apiKey,t.name)}async function HA(t,e,n=!1){const s=Vc(t),r=fv(s,e),o=await new BA(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!mv(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sp(e))}saveEventToCache(e){this.cachedEventUids.add(Sp(e)),this.lastProcessedEventTime=Date.now()}}function Sp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e={}){return Bc(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QA=/^https?/;async function YA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GA(t);for(const n of e)try{if(XA(n))return}catch{}En(t,"unauthorized-domain")}function XA(t){const e=Rl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!QA.test(n))return!1;if(ZA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const JA=new Co(3e4,6e4);function Ap(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ek(t){return new Promise((e,n)=>{var s,r,i;function o(){Ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ap(),n(vn(t,"network-request-failed"))},timeout:JA.get()})}if(!((r=(s=_n().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const a=DA("iframefcb");return _n()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},xA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _a=null,e})}let _a=null;function tk(t){return _a=_a||ek(t),_a}/**
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
 */const nk=new Co(5e3,15e3),sk="__/auth/iframe",rk="emulator/auth/iframe",ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ak(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$h(e,rk):`https://${t.config.authDomain}/${sk}`,s={apiKey:e.apiKey,appName:t.name,v:Jr},r=ok.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Io(s).slice(1)}`}async function ck(t){const e=await tk(t),n=_n().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:ak(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ik,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=_n().setTimeout(()=>{i(o)},nk.get());function c(){_n().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const uk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lk=500,hk=600,dk="_blank",fk="http://localhost";class kp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pk(t,e,n,s=lk,r=hk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},uk),{width:s.toString(),height:r.toString(),top:i,left:o}),u=yt().toLowerCase();n&&(a=Zy(u)?dk:n),Gy(u)&&(e=e||fk,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(eA(u)&&a!=="_self")return mk(e||"",a),new kp(null);const h=window.open(e||"",a,l);se(h,t,"popup-blocked");try{h.focus()}catch{}return new kp(h)}function mk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const gk="__/auth/handler",yk="emulator/auth/handler";function Rp(t,e,n,s,r,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Jr,eventId:r};if(e instanceof qh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof So){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${vk(t)}?${Io(a).slice(1)}`}function vk({config:t}){return t.emulator?$h(t,yk):`https://${t.authDomain}/${gk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="webStorageSupport";class _k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=HA,this._overrideRedirectResult=VA}async _openPopup(e,n,s,r){var i;Bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Rp(e,n,s,Rl(),r);return pk(e,o,Hh())}async _openRedirect(e,n,s,r){return await this._originValidation(e),bA(Rp(e,n,s,Rl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Bn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ck(e),s=new KA(e);return n.register("authEvent",r=>(se(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qu,{type:qu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qu];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ev()||jh()||$c()}}const wk=_k;var Np="@firebase/auth",Op="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ek(t){an(new Wt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{se(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),se(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tv(t)},l=new rA(a,c,u);return LS(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),an(new Wt("auth-internal",e=>{const n=Vc(e.getProvider("auth").getImmediate());return(s=>new bk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Np,Op,Tk(t)),Rt(Np,Op,"esm2017")}/**
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
 */const Ik=5*60,Ck=Ry("authIdTokenMaxAge")||Ik;let xp=null;const Sk=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ck)return;const r=n==null?void 0:n.token;xp!==r&&(xp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ak(t=Fc()){const e=Es(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PS(t,{popupRedirectResolver:wk,persistence:[NA,vA,cv]}),s=Ry("authTokenSyncURL");if(s){const i=Sk(s);fA(n,i,()=>i(n.currentUser)),dA(n,o=>i(o))}const r=Ay("auth");return r&&iA(n,`http://${r}`),n}Ek("Browser");const gv="@firebase/installations",Kh="0.6.3";/**
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
 */const yv=1e4,vv=`w:${Kh}`,_v="FIS_v2",kk="https://firebaseinstallations.googleapis.com/v1",Rk=60*60*1e3,Nk="installations",Ok="Installations";/**
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
 */const xk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Js=new ar(Nk,Ok,xk);function wv(t){return t instanceof Gt&&t.code.includes("request-failed")}/**
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
 */function bv({projectId:t}){return`${kk}/projects/${t}/installations`}function Tv(t){return{token:t.token,requestStatus:2,expiresIn:Pk(t.expiresIn),creationTime:Date.now()}}async function Ev(t,e){const s=(await e.json()).error;return Js.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Iv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Dk(t,{refreshToken:e}){const n=Iv(t);return n.append("Authorization",Lk(e)),n}async function Cv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Pk(t){return Number(t.replace("s","000"))}function Lk(t){return`${_v} ${t}`}/**
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
 */async function Mk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=bv(t),r=Iv(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:_v,appId:t.appId,sdkVersion:vv},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Cv(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Tv(u.authToken)}}else throw await Ev("Create Installation",c)}/**
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
 */function Sv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Uk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Fk=/^[cdef][\w-]{21}$/,Ol="";function Bk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$k(t);return Fk.test(n)?n:Ol}catch{return Ol}}function $k(t){return Uk(t).substr(0,22)}/**
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
 */function Hc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Av=new Map;function kv(t,e){const n=Hc(t);Rv(n,e),Vk(n,e)}function Rv(t,e){const n=Av.get(t);if(n)for(const s of n)s(e)}function Vk(t,e){const n=jk();n&&n.postMessage({key:t,fid:e}),qk()}let Fs=null;function jk(){return!Fs&&"BroadcastChannel"in self&&(Fs=new BroadcastChannel("[Firebase] FID Change"),Fs.onmessage=t=>{Rv(t.data.key,t.data.fid)}),Fs}function qk(){Av.size===0&&Fs&&(Fs.close(),Fs=null)}/**
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
 */const Hk="firebase-installations-database",zk=1,er="firebase-installations-store";let Hu=null;function Wh(){return Hu||(Hu=My(Hk,zk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(er)}}})),Hu}async function Va(t,e){const n=Hc(t),r=(await Wh()).transaction(er,"readwrite"),i=r.objectStore(er),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&kv(t,e.fid),e}async function Nv(t){const e=Hc(t),s=(await Wh()).transaction(er,"readwrite");await s.objectStore(er).delete(e),await s.done}async function zc(t,e){const n=Hc(t),r=(await Wh()).transaction(er,"readwrite"),i=r.objectStore(er),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&kv(t,a.fid),a}/**
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
 */async function Gh(t){let e;const n=await zc(t.appConfig,s=>{const r=Kk(s),i=Wk(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Ol?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Kk(t){const e=t||{fid:Bk(),registrationStatus:0};return Ov(e)}function Wk(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Js.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Gk(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zk(t)}:{installationEntry:e}}async function Gk(t,e){try{const n=await Mk(t,e);return Va(t.appConfig,n)}catch(n){throw wv(n)&&n.customData.serverCode===409?await Nv(t.appConfig):await Va(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Zk(t){let e=await Dp(t.appConfig);for(;e.registrationStatus===1;)await Sv(100),e=await Dp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Gh(t);return s||n}return e}function Dp(t){return zc(t,e=>{if(!e)throw Js.create("installation-not-found");return Ov(e)})}function Ov(t){return Qk(t)?{fid:t.fid,registrationStatus:0}:t}function Qk(t){return t.registrationStatus===1&&t.registrationTime+yv<Date.now()}/**
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
 */async function Yk({appConfig:t,heartbeatServiceProvider:e},n){const s=Xk(t,n),r=Dk(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:vv,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Cv(()=>fetch(s,a));if(c.ok){const u=await c.json();return Tv(u)}else throw await Ev("Generate Auth Token",c)}function Xk(t,{fid:e}){return`${bv(t)}/${e}/authTokens:generate`}/**
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
 */async function Zh(t,e=!1){let n;const s=await zc(t.appConfig,i=>{if(!xv(i))throw Js.create("not-registered");const o=i.authToken;if(!e&&tR(o))return i;if(o.requestStatus===1)return n=Jk(t,e),i;{if(!navigator.onLine)throw Js.create("app-offline");const a=sR(i);return n=eR(t,a),a}});return n?await n:s.authToken}async function Jk(t,e){let n=await Pp(t.appConfig);for(;n.authToken.requestStatus===1;)await Sv(100),n=await Pp(t.appConfig);const s=n.authToken;return s.requestStatus===0?Zh(t,e):s}function Pp(t){return zc(t,e=>{if(!xv(e))throw Js.create("not-registered");const n=e.authToken;return rR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eR(t,e){try{const n=await Yk(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Va(t.appConfig,s),n}catch(n){if(wv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nv(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Va(t.appConfig,s)}throw n}}function xv(t){return t!==void 0&&t.registrationStatus===2}function tR(t){return t.requestStatus===2&&!nR(t)}function nR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Rk}function sR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function rR(t){return t.requestStatus===1&&t.requestTime+yv<Date.now()}/**
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
 */async function iR(t){const e=t,{installationEntry:n,registrationPromise:s}=await Gh(e);return s?s.catch(console.error):Zh(e).catch(console.error),n.fid}/**
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
 */async function oR(t,e=!1){const n=t;return await aR(n),(await Zh(n,e)).token}async function aR(t){const{registrationPromise:e}=await Gh(t);e&&await e}/**
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
 */function cR(t){if(!t||!t.options)throw zu("App Configuration");if(!t.name)throw zu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function zu(t){return Js.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="installations",uR="installations-internal",lR=t=>{const e=t.getProvider("app").getImmediate(),n=cR(e),s=Es(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},hR=t=>{const e=t.getProvider("app").getImmediate(),n=Es(e,Dv).getImmediate();return{getId:()=>iR(n),getToken:r=>oR(n,r)}};function dR(){an(new Wt(Dv,lR,"PUBLIC")),an(new Wt(uR,hR,"PRIVATE"))}dR();Rt(gv,Kh);Rt(gv,Kh,"esm2017");/**
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
 */const ja="analytics",fR="firebase_id",pR="origin",mR=60*1e3,gR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pv="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ft=new Uc("@firebase/analytics");/**
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
 */function Lv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yR(t,e){const n=document.createElement("script");n.src=`${Pv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function vR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _R(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Lv(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){Ft.error(a)}t("config",r,i)}async function wR(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Lv(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ft.error(i)}}function bR(t,e,n,s){async function r(i,o,a){try{i==="event"?await wR(t,e,n,o,a):i==="config"?await _R(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ft.error(c)}}return r}function TR(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=bR(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function ER(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Pv)&&n.src.includes(t))return n;return null}/**
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
 */const IR={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},zt=new ar("analytics","Analytics",IR);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=30,SR=1e3;class AR{constructor(e={},n=SR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Mv=new AR;function kR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RR(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:kR(s)},i=gR.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function NR(t,e=Mv,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw zt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new DR;return setTimeout(async()=>{a.abort()},n!==void 0?n:mR),Uv({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Uv(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Mv){var i;const{appId:o,measurementId:a}=t;try{await OR(s,e)}catch(c){if(a)return Ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await RR(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!xR(u)){if(r.deleteThrottleMetadata(o),a)return Ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?cp(n,r.intervalMillis,CR):cp(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),Ft.debug(`Calling attemptFetch again in ${l} millis`),Uv(t,h,s,r)}}function OR(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xR(t){if(!(t instanceof Gt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class DR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function PR(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(){if(xy())try{await Dy()}catch(t){return Ft.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ft.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MR(t,e,n,s,r,i,o){var a;const c=NR(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ft.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ft.error(p)),e.push(c);const u=LR().then(p=>{if(p)return s.getId()}),[l,h]=await Promise.all([c,u]);ER(i)||yR(i,l.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[pR]="firebase",d.update=!0,h!=null&&(d[fR]=h),r("config",l.measurementId,d),l.measurementId}/**
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
 */class UR{constructor(e){this.app=e}_delete(){return delete ki[this.app.options.appId],Promise.resolve()}}let ki={},Lp=[];const Mp={};let Ku="dataLayer",FR="gtag",Up,Fv,Fp=!1;function BR(){const t=[];if(Oy()&&t.push("This is a browser extension environment."),pC()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});Ft.warn(n.message)}}function $R(t,e,n){BR();const s=t.options.appId;if(!s)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(ki[s]!=null)throw zt.create("already-exists",{id:s});if(!Fp){vR(Ku);const{wrappedGtag:i,gtagCore:o}=TR(ki,Lp,Mp,Ku,FR);Fv=i,Up=o,Fp=!0}return ki[s]=MR(t,Lp,Mp,e,Up,Ku,n),new UR(t)}function VR(t=Fc()){t=$e(t);const e=Es(t,ja);return e.isInitialized()?e.getImmediate():jR(t)}function jR(t,e={}){const n=Es(t,ja);if(n.isInitialized()){const r=n.getImmediate();if(zi(e,n.getOptions()))return r;throw zt.create("already-initialized")}return n.initialize({options:e})}function qR(t,e,n,s){t=$e(t),PR(Fv,ki[t.app.options.appId],e,n,s).catch(r=>Ft.error(r))}const Bp="@firebase/analytics",$p="0.9.3";function HR(){an(new Wt(ja,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return $R(s,r,n)},"PUBLIC")),an(new Wt("analytics-internal",t,"PRIVATE")),Rt(Bp,$p),Rt(Bp,$p,"esm2017");function t(e){try{const n=e.getProvider(ja).getImmediate();return{logEvent:(s,r,i)=>qR(n,s,r,i)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}HR();var zR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Qh=Qh||{},re=zR||self;function qa(){}function Kc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KR(t){return Object.prototype.hasOwnProperty.call(t,Wu)&&t[Wu]||(t[Wu]=++WR)}var Wu="closure_uid_"+(1e9*Math.random()>>>0),WR=0;function GR(t,e,n){return t.call.apply(t.bind,arguments)}function ZR(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=GR:mt=ZR,mt.apply(null,arguments)}function na(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Is(){this.s=this.s,this.o=this.o}var QR=0;Is.prototype.s=!1;Is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),QR!=0)&&KR(this)};Is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Vp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kc(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var YR=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",qa,e),re.removeEventListener("test",qa,e)}catch{}return t}();function Ha(t){return/^[\s\xa0]*$/.test(t)}var jp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Gu(t,e){return t<e?-1:t>e?1:0}function Wc(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return Wc().indexOf(t)!=-1}function Xh(t){return Xh[" "](t),t}Xh[" "]=qa;function XR(t){var e=tN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var JR=mn("Opera"),Br=mn("Trident")||mn("MSIE"),$v=mn("Edge"),xl=$v||Br,Vv=mn("Gecko")&&!(Wc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),eN=Wc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function jv(){var t=re.document;return t?t.documentMode:void 0}var za;e:{var Zu="",Qu=function(){var t=Wc();if(Vv)return/rv:([^\);]+)(\)|;)/.exec(t);if($v)return/Edge\/([\d\.]+)/.exec(t);if(Br)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eN)return/WebKit\/(\S+)/.exec(t);if(JR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qu&&(Zu=Qu?Qu[1]:""),Br){var Yu=jv();if(Yu!=null&&Yu>parseFloat(Zu)){za=String(Yu);break e}}za=Zu}var tN={};function nN(){return XR(function(){let t=0;const e=jp(String(za)).split("."),n=jp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Gu(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Gu(r[2].length==0,i[2].length==0)||Gu(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Dl;if(re.document&&Br){var qp=jv();Dl=qp||parseInt(za,10)||void 0}else Dl=void 0;var sN=Dl;function Zi(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vv){e:{try{Xh(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zi.X.h.call(this)}}lt(Zi,gt);var rN={2:"touch",3:"pen",4:"mouse"};Zi.prototype.h=function(){Zi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ro="closure_listenable_"+(1e6*Math.random()|0),iN=0;function oN(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++iN,this.ba=this.ea=!1}function Gc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qv(t){const e={};for(const n in t)e[n]=t[n];return e}const Hp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hv(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Hp.length;i++)n=Hp[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Zc(t){this.src=t,this.g={},this.h=0}Zc.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ll(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new oN(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Pl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Bv(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Gc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ll(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ed="closure_lm_"+(1e6*Math.random()|0),Xu={};function zv(t,e,n,s,r){if(s&&s.once)return Wv(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)zv(t,e[i],n,s,r);return null}return n=sd(n),t&&t[Ro]?t.N(e,n,ko(s)?!!s.capture:!!s,r):Kv(t,e,n,!1,s,r)}function Kv(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ko(r)?!!r.capture:!!r,a=nd(t);if(a||(t[ed]=a=new Zc(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=aN(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)YR||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Zv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aN(){function t(n){return e.call(t.src,t.listener,n)}const e=cN;return t}function Wv(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wv(t,e[i],n,s,r);return null}return n=sd(n),t&&t[Ro]?t.O(e,n,ko(s)?!!s.capture:!!s,r):Kv(t,e,n,!0,s,r)}function Gv(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Gv(t,e[i],n,s,r);else s=ko(s)?!!s.capture:!!s,n=sd(n),t&&t[Ro]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ll(i,n,s,r),-1<n&&(Gc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=nd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ll(e,n,s,r)),(n=-1<t?e[t]:null)&&td(n))}function td(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ro])Pl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=nd(e))?(Pl(n,t),n.h==0&&(n.src=null,e[ed]=null)):Gc(t)}}}function Zv(t){return t in Xu?Xu[t]:Xu[t]="on"+t}function cN(t,e){if(t.ba)t=!0;else{e=new Zi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&td(t),t=n.call(s,e)}return t}function nd(t){return t=t[ed],t instanceof Zc?t:null}var Ju="__closure_events_fn_"+(1e9*Math.random()>>>0);function sd(t){return typeof t=="function"?t:(t[Ju]||(t[Ju]=function(e){return t.handleEvent(e)}),t[Ju])}function it(){Is.call(this),this.i=new Zc(this),this.P=this,this.I=null}lt(it,Is);it.prototype[Ro]=!0;it.prototype.removeEventListener=function(t,e,n,s){Gv(this,t,e,n,s)};function ut(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var r=e;e=new gt(s,t),Hv(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=sa(o,s,!0,e)&&r}if(o=e.g=t,r=sa(o,s,!0,e)&&r,r=sa(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=sa(o,s,!1,e)&&r}it.prototype.M=function(){if(it.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Gc(n[s]);delete t.g[e],t.h--}}this.I=null};it.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};it.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function sa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Pl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var rd=re.JSON.stringify;function uN(){var t=Xv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lN{constructor(){this.h=this.g=null}add(e,n){const s=Qv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Qv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hN,t=>t.reset());class hN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dN(t){re.setTimeout(()=>{throw t},0)}function Yv(t,e){Ml||fN(),Ul||(Ml(),Ul=!0),Xv.add(t,e)}var Ml;function fN(){var t=re.Promise.resolve(void 0);Ml=function(){t.then(pN)}}var Ul=!1,Xv=new lN;function pN(){for(var t;t=uN();){try{t.h.call(t.g)}catch(n){dN(n)}var e=Qv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ul=!1}function Qc(t,e){it.call(this),this.h=t||1,this.g=e||re,this.j=mt(this.lb,this),this.l=Date.now()}lt(Qc,it);z=Qc.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&(id(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function id(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Qc.X.M.call(this),id(this),delete this.g};function od(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Jv(t){t.g=od(()=>{t.g=null,t.i&&(t.i=!1,Jv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mN extends Is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jv(this)}M(){super.M(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(t){Is.call(this),this.h=t,this.g={}}lt(Qi,Is);var zp=[];function e_(t,e,n,s){Array.isArray(n)||(n&&(zp[0]=n.toString()),n=zp);for(var r=0;r<n.length;r++){var i=zv(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function t_(t){Jh(t.g,function(e,n){this.g.hasOwnProperty(n)&&td(e)},t),t.g={}}Qi.prototype.M=function(){Qi.X.M.call(this),t_(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yc(){this.g=!0}Yc.prototype.Aa=function(){this.g=!1};function gN(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function yN(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function br(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_N(t,n)+(s?" "+s:"")})}function vN(t,e){t.info(function(){return"TIMEOUT: "+e})}Yc.prototype.info=function(){};function _N(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return rd(n)}catch{return e}}var cr={},Kp=null;function Xc(){return Kp=Kp||new it}cr.Pa="serverreachability";function n_(t){gt.call(this,cr.Pa,t)}lt(n_,gt);function Yi(t){const e=Xc();ut(e,new n_(e))}cr.STAT_EVENT="statevent";function s_(t,e){gt.call(this,cr.STAT_EVENT,t),this.stat=e}lt(s_,gt);function Tt(t){const e=Xc();ut(e,new s_(e,t))}cr.Qa="timingevent";function r_(t,e){gt.call(this,cr.Qa,t),this.size=e}lt(r_,gt);function No(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Jc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},i_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ad(){}ad.prototype.h=null;function Wp(t){return t.h||(t.h=t.i())}function o_(){}var Oo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function cd(){gt.call(this,"d")}lt(cd,gt);function ud(){gt.call(this,"c")}lt(ud,gt);var Fl;function eu(){}lt(eu,ad);eu.prototype.g=function(){return new XMLHttpRequest};eu.prototype.i=function(){return{}};Fl=new eu;function xo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Qi(this),this.O=wN,t=xl?125:void 0,this.T=new Qc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new a_}function a_(){this.i=null,this.g="",this.h=!1}var wN=45e3,Bl={},Ka={};z=xo.prototype;z.setTimeout=function(t){this.O=t};function $l(t,e,n){t.K=1,t.v=nu($n(e)),t.s=n,t.P=!0,c_(t,null)}function c_(t,e){t.F=Date.now(),Do(t),t.A=$n(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),g_(n.i,"t",s),t.C=0,n=t.l.H,t.h=new a_,t.g=U_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new mN(mt(t.La,t,t.g),t.N)),e_(t.S,t.g,"readystatechange",t.ib),e=t.H?qv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Yi(),gN(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&Dn(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const l=Dn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||xl||this.g&&(this.h.h||this.g.fa()||Yp(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Yi(3):Yi(2)),tu(this);var n=this.g.aa();this.Y=n;t:if(u_(this)){var s=Yp(this.g);t="";var r=s.length,i=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bs(this),Ri(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yN(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var u=a;break t}}u=null}if(n=u)br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vl(this,n);else{this.i=!1,this.o=3,Tt(12),Bs(this),Ri(this);break e}}this.P?(l_(this,l,o),xl&&this.i&&l==3&&(e_(this.S,this.T,"tick",this.hb),this.T.start())):(br(this.j,this.m,o,null),Vl(this,o)),l==4&&Bs(this),this.i&&!this.I&&(l==4?D_(this.l,this):(this.i=!1,Do(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),Bs(this),Ri(this)}}}catch{}finally{}};function u_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function l_(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=bN(t,n),r==Ka){e==4&&(t.o=4,Tt(14),s=!1),br(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Bl){t.o=4,Tt(15),br(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else br(t.j,t.m,r,null),Vl(t,r);u_(t)&&r!=Ka&&r!=Bl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gd(e),e.K=!0,Tt(11))):(br(t.j,t.m,n,"[Invalid Chunked Response]"),Bs(t),Ri(t))}z.hb=function(){if(this.g){var t=Dn(this.g),e=this.g.fa();this.C<e.length&&(tu(this),l_(this,t,e),this.i&&t!=4&&Do(this))}};function bN(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ka:(n=Number(e.substring(n,s)),isNaN(n)?Bl:(s+=1,s+n>e.length?Ka:(e=e.substr(s,n),t.C=s+n,e)))}z.cancel=function(){this.I=!0,Bs(this)};function Do(t){t.V=Date.now()+t.O,h_(t,t.O)}function h_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=No(mt(t.gb,t),e)}function tu(t){t.B&&(re.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vN(this.j,this.A),this.K!=2&&(Yi(),Tt(17)),Bs(this),this.o=2,Ri(this)):h_(this,this.V-t)};function Ri(t){t.l.G==0||t.I||D_(t.l,t)}function Bs(t){tu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,id(t.T),t_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jl(n.h,t))){if(!t.J&&jl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Za(n),iu(n);else break e;md(n),Tt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=No(mt(n.cb,n),6e3));if(1>=__(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else $s(n,11)}else if((t.J||n.g==t)&&Za(n),!Ha(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ld(i,i.h),i.h=null))}if(s.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Le(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=M_(s,s.H?s.ka:null,s.V),o.J){w_(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(tu(a),Do(a)),s.g=o}else O_(s);0<n.i.length&&ou(n)}else u[0]!="stop"&&u[0]!="close"||$s(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?$s(n,7):pd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Yi(4)}catch{}}function TN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function EN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function d_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=EN(t),s=TN(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var f_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ws(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ws){this.h=e!==void 0?e:t.h,Wa(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l,e=t.i;var n=new Xi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gp(this,n),this.o=t.o}else t&&(n=String(t).match(f_))?(this.h=!!e,Wa(this,n[1]||"",!0),this.s=pi(n[2]||""),this.g=pi(n[3]||"",!0),Ga(this,n[4]),this.l=pi(n[5]||"",!0),Gp(this,n[6]||"",!0),this.o=pi(n[7]||"")):(this.h=!!e,this.i=new Xi(null,this.h))}Ws.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mi(e,Zp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(mi(e,Zp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(mi(n,n.charAt(0)=="/"?AN:SN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mi(n,RN)),t.join("")};function $n(t){return new Ws(t)}function Wa(t,e,n){t.j=n?pi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gp(t,e,n){e instanceof Xi?(t.i=e,NN(t.i,t.h)):(n||(e=mi(e,kN)),t.i=new Xi(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function nu(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,CN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function CN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zp=/[#\/\?@]/g,SN=/[#\?:]/g,AN=/[#\?]/g,kN=/[#\?@]/g,RN=/#/g;function Xi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&IN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=Xi.prototype;z.add=function(t,e){Cs(this),this.i=null,t=ei(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function p_(t,e){Cs(t),e=ei(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function m_(t,e){return Cs(t),e=ei(t,e),t.g.has(e)}z.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};z.oa=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};z.W=function(t){Cs(this);let e=[];if(typeof t=="string")m_(this,t)&&(e=e.concat(this.g.get(ei(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Cs(this),this.i=null,t=ei(this,t),m_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function g_(t,e,n){p_(t,e),0<n.length&&(t.i=null,t.g.set(ei(t,e),Yh(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ei(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NN(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(p_(this,s),g_(this,r,n))},t)),t.j=e}var ON=class{constructor(e,n){this.h=e,this.g=n}};function y_(t){this.l=t||xN,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ga&&re.g.Ga()&&re.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xN=10;function v_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function __(t){return t.h?1:t.g?t.g.size:0}function jl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ld(t,e){t.g?t.g.add(e):t.h=e}function w_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}y_.prototype.cancel=function(){if(this.i=b_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function b_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yh(t.i)}function hd(){}hd.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)};hd.prototype.parse=function(t){return re.JSON.parse(t,void 0)};function DN(){this.g=new hd}function PN(t,e,n){const s=n||"";try{d_(t,function(r,i){let o=r;ko(r)&&(o=rd(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function LN(t,e){const n=new Yc;if(re.Image){const s=new Image;s.onload=na(ra,n,s,"TestLoadImage: loaded",!0,e),s.onerror=na(ra,n,s,"TestLoadImage: error",!1,e),s.onabort=na(ra,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=na(ra,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ra(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Po(t){this.l=t.ac||null,this.j=t.jb||!1}lt(Po,ad);Po.prototype.g=function(){return new su(this.l,this.j)};Po.prototype.i=function(t){return function(){return t}}({});function su(t,e){it.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=dd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(su,it);var dd=0;z=su.prototype;z.open=function(t,e){if(this.readyState!=dd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ji(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||re).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lo(this)),this.readyState=dd};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;T_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function T_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Lo(this):Ji(this),this.readyState==3&&T_(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Lo(this))};z.Ua=function(t){this.g&&(this.response=t,Lo(this))};z.ga=function(){this.g&&Lo(this)};function Lo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ji(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ji(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MN=re.JSON.parse;function je(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=E_,this.K=this.L=!1}lt(je,it);var E_="",UN=/^https?$/i,FN=["POST","PUT"];z=je.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fl.g(),this.C=this.u?Wp(this.u):Wp(Fl),this.g.onreadystatechange=mt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Qp(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=re.FormData&&t instanceof re.FormData,!(0<=Bv(FN,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{S_(this),0<this.B&&((this.K=BN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.qa,this)):this.A=od(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qp(this,i)}};function BN(t){return Br&&nN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof Qh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function Qp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,I_(t),ru(t)}function I_(t){t.D||(t.D=!0,ut(t,"complete"),ut(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),ru(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ru(this,!0)),je.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?C_(this):this.fb())};z.fb=function(){C_(this)};function C_(t){if(t.h&&typeof Qh<"u"&&(!t.C[1]||Dn(t)!=4||t.aa()!=2)){if(t.v&&Dn(t)==4)od(t.Ha,0,t);else if(ut(t,"readystatechange"),Dn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(f_)[1]||null;if(!r&&re.self&&re.self.location){var i=re.self.location.protocol;r=i.substr(0,i.length-1)}s=!UN.test(r?r.toLowerCase():"")}n=s}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var o=2<Dn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",I_(t)}}finally{ru(t)}}}}function ru(t,e){if(t.g){S_(t);const n=t.g,s=t.C[0]?qa:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=s}catch{}}}function S_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function Dn(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MN(e)}};function Yp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case E_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function A_(t){let e="";return Jh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function fd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=A_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function k_(t){this.Ca=0,this.i=[],this.j=new Yc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=li("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=li("baseRetryDelayMs",5e3,t),this.bb=li("retryDelaySeedMs",1e4,t),this.$a=li("forwardChannelMaxRetries",2,t),this.ta=li("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new y_(t&&t.concurrentRequestLimit),this.Fa=new DN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=k_.prototype;z.ma=8;z.G=1;function pd(t){if(R_(t),t.G==3){var e=t.U++,n=$n(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Mo(t,n),e=new xo(t,t.j,e,void 0),e.K=2,e.v=nu($n(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=U_(e.l,null),e.g.da(e.v)),e.F=Date.now(),Do(e)}L_(t)}function iu(t){t.g&&(gd(t),t.g.cancel(),t.g=null)}function R_(t){iu(t),t.u&&(re.clearTimeout(t.u),t.u=null),Za(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function ou(t){v_(t.h)||t.m||(t.m=!0,Yv(t.Ja,t),t.C=0)}function $N(t,e){return __(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=No(mt(t.Ja,t,e),P_(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new xo(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=qv(i),Hv(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=N_(this,r,e),n=$n(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Mo(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(A_(i)))+"&"+e:this.o&&fd(n,this.o,i)),ld(this.h,r),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),r.Z=!0,$l(r,n,null)):$l(r,n,e),this.G=2}}else this.G==3&&(t?Xp(this,t):this.i.length==0||v_(this.h)||Xp(this))};function Xp(t,e){var n;e?n=e.m:n=t.U++;const s=$n(t.F);Le(s,"SID",t.I),Le(s,"RID",n),Le(s,"AID",t.T),Mo(t,s),t.o&&t.s&&fd(s,t.o,t.s),n=new xo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=N_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ld(t.h,n),$l(n,s,e)}function Mo(t,e){t.ia&&Jh(t.ia,function(n,s){Le(e,s,n)}),t.l&&d_({},function(n,s){Le(e,s,n)})}function N_(t,e,n){n=Math.min(t.i.length,n);var s=t.l?mt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{PN(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function O_(t){t.g||t.u||(t.Z=1,Yv(t.Ia,t),t.A=0)}function md(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=No(mt(t.Ia,t),P_(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,x_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=No(mt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Tt(10),iu(this),x_(this))};function gd(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function x_(t){t.g=new xo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=$n(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Mo(t,e),t.o&&t.s&&fd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=nu($n(e)),n.s=null,n.P=!0,c_(n,t)}z.cb=function(){this.v!=null&&(this.v=null,iu(this),md(this),Tt(19))};function Za(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function D_(t,e){var n=null;if(t.g==e){Za(t),gd(t),t.g=null;var s=2}else if(jl(t.h,e))n=e.D,w_(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Xc(),ut(s,new r_(s,n)),ou(t)}else O_(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&$N(t,e)||s==2&&md(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:$s(t,5);break;case 4:$s(t,10);break;case 3:$s(t,6);break;default:$s(t,2)}}}function P_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function $s(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=mt(t.kb,t);n||(n=new Ws("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Wa(n,"https"),nu(n)),LN(n.toString(),s)}else Tt(2);t.G=0,t.l&&t.l.va(e),L_(t),R_(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function L_(t){if(t.G=0,t.la=[],t.l){const e=b_(t.h);(e.length!=0||t.i.length!=0)&&(Vp(t.la,e),Vp(t.la,t.i),t.h.i.length=0,Yh(t.i),t.i.length=0),t.l.ua()}}function M_(t,e,n){var s=n instanceof Ws?$n(n):new Ws(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ga(s,s.m);else{var r=re.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ws(null,void 0);s&&Wa(i,s),e&&(i.g=e),r&&Ga(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Le(s,n,e),Le(s,"VER",t.ma),Mo(t,s),s}function U_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new Po({jb:!0})):new je(t.ra),e.Ka(t.H),e}function F_(){}z=F_.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function Qa(){if(Br&&!(10<=Number(sN)))throw Error("Environmental error: no available transport.")}Qa.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){it.call(this),this.g=new k_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ti(this)}lt(Bt,it);Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=M_(t,null,t.V),ou(t)};Bt.prototype.close=function(){pd(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rd(t),t=n);e.i.push(new ON(e.ab++,t)),e.G==3&&ou(e)};Bt.prototype.M=function(){this.g.l=null,delete this.j,pd(this.g),delete this.g,Bt.X.M.call(this)};function B_(t){cd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(B_,cd);function $_(){ud.call(this),this.status=1}lt($_,ud);function ti(t){this.g=t}lt(ti,F_);ti.prototype.xa=function(){ut(this.g,"a")};ti.prototype.wa=function(t){ut(this.g,new B_(t))};ti.prototype.va=function(t){ut(this.g,new $_)};ti.prototype.ua=function(){ut(this.g,"b")};Qa.prototype.createWebChannel=Qa.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Jc.NO_ERROR=0;Jc.TIMEOUT=8;Jc.HTTP_ERROR=6;i_.COMPLETE="complete";o_.EventType=Oo;Oo.OPEN="a";Oo.CLOSE="b";Oo.ERROR="c";Oo.MESSAGE="d";it.prototype.listen=it.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var VN=function(){return new Qa},jN=function(){return Xc()},el=Jc,qN=i_,HN=cr,Jp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},zN=Po,ia=o_,KN=je;const em="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Uc("@firebase/firestore");function tm(){return tr.logLevel}function W(t,...e){if(tr.logLevel<=be.DEBUG){const n=e.map(yd);tr.debug(`Firestore (${ni}): ${t}`,...n)}}function Vn(t,...e){if(tr.logLevel<=be.ERROR){const n=e.map(yd);tr.error(`Firestore (${ni}): ${t}`,...n)}}function ql(t,...e){if(tr.logLevel<=be.WARN){const n=e.map(yd);tr.warn(`Firestore (${ni}): ${t}`,...n)}}function yd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function xe(t,e){t||ne()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class GN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZN{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new V_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new ht(e)}}class QN{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(xe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class YN{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new QN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.A=n.token,new XN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=eO(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Ie(t,e){return t<e?-1:t>e?1:0}function $r(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new et(0,0))}static max(){return new ae(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(),s===void 0?s=e.length-n:s>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof eo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends eo{construct(e,n,s){return new Pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const tO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends eo{construct(e,n,s){return new pt(e,n,s)}static isValidIdentifier(e){return tO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Pe.fromString(e))}static fromName(e){return new Z(Pe.fromString(e).popFirst(5))}static empty(){return new Z(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Pe(e.slice()))}}function nO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ae.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new ys(r,Z.empty(),e)}function sO(t){return new ys(t.readTime,t.key,-1)}class ys{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ys(ae.min(),Z.empty(),-1)}static max(){return new ys(ae.max(),Z.empty(),-1)}}function rO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==iO)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(r=>r?k.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new k((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new k((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}vd.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class to{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){return t==null}function Ya(t){return t===0&&1/t==-1/0}function cO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const uO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(t){if(xe(!!t),typeof t=="string"){let e=0;const n=uO.exec(t);if(xe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function z_(t){const e=t.mapValue.fields.__previous_value__;return H_(e)?z_(e):e}function no(t){const e=vs(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?H_(t)?4:lO(t)?9007199254740991:10:ne()}function In(t,e){if(t===e)return!0;const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=vs(s.timestampValue),o=vs(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Vr(s.bytesValue).isEqual(Vr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Qe(s.geoPointValue.latitude)===Qe(r.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Qe(s.integerValue)===Qe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Qe(s.doubleValue),o=Qe(r.doubleValue);return i===o?Ya(i)===Ya(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return $r(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(nm(i)!==nm(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!In(i[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function so(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function jr(t,e){if(t===e)return 0;const n=nr(t),s=nr(e);if(n!==s)return Ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Qe(r.integerValue||r.doubleValue),a=Qe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return sm(t.timestampValue,e.timestampValue);case 4:return sm(no(t),no(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Vr(r),a=Vr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=Ie(o[c],a[c]);if(u!==0)return u}return Ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Ie(Qe(r.latitude),Qe(i.latitude));return o!==0?o:Ie(Qe(r.longitude),Qe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=jr(o[c],a[c]);if(u)return u}return Ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===oa.mapValue&&i===oa.mapValue)return 0;if(r===oa.mapValue)return 1;if(i===oa.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=Ie(a[l],u[l]);if(h!==0)return h;const d=jr(o[a[l]],c[u[l]]);if(d!==0)return d}return Ie(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=vs(t),s=vs(e),r=Ie(n.seconds,s.seconds);return r!==0?r:Ie(n.nanos,s.nanos)}function qr(t){return Hl(t)}function Hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=vs(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Hl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Hl(s.fields[a])}`;return i+"}"}(t.mapValue):ne();var e,n}function rm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zl(t){return!!t&&"integerValue"in t}function _d(t){return!!t&&"arrayValue"in t}function im(t){return!!t&&"nullValue"in t}function om(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wa(t){return!!t&&"mapValue"in t}function Ni(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ur(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ni(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ni(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xa{constructor(e,n){this.position=e,this.inclusive=n}}function am(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Z.comparator(Z.fromName(o.referenceValue),n.key):s=jr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function cm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class K_{}class Ye extends K_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new dO(e,n,s):n==="array-contains"?new mO(e,s):n==="in"?new gO(e,s):n==="not-in"?new yO(e,s):n==="array-contains-any"?new vO(e,s):new Ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new fO(e,s):new pO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jr(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class cn extends K_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new cn(e,n)}matches(e){return W_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function W_(t){return t.op==="and"}function G_(t){return hO(t)&&W_(t)}function hO(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Kl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+qr(t.value);if(G_(t))return t.filters.map(e=>Kl(e)).join(",");{const e=t.filters.map(n=>Kl(n)).join(",");return`${t.op}(${e})`}}function Z_(t,e){return t instanceof Ye?function(n,s){return s instanceof Ye&&n.op===s.op&&n.field.isEqual(s.field)&&In(n.value,s.value)}(t,e):t instanceof cn?function(n,s){return s instanceof cn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Z_(i,s.filters[o]),!0):!1}(t,e):void ne()}function Q_(t){return t instanceof Ye?function(e){return`${e.field.canonicalString()} ${e.op} ${qr(e.value)}`}(t):t instanceof cn?function(e){return e.op.toString()+" {"+e.getFilters().map(Q_).join(" ,")+"}"}(t):"Filter"}class dO extends Ye{constructor(e,n,s){super(e,n,s),this.key=Z.fromName(s.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class fO extends Ye{constructor(e,n){super(e,"in",n),this.keys=Y_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pO extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Y_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Y_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Z.fromName(s.referenceValue))}class mO extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _d(n)&&so(n.arrayValue,this.value)}}class gO extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class yO extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!so(this.value.arrayValue,n)}}class vO extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_d(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>so(this.value.arrayValue,s))}}/**
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
 */class kr{constructor(e,n="asc"){this.field=e,this.dir=n}}function _O(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ot.RED,this.left=r??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ot(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new um(this.data.getIterator())}getIteratorFrom(e){return new um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new tt(pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $r(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(n)}setAll(e){let n=pt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ni(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];wa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ur(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new At(Ni(this.value))}}function X_(t){const e=[];return ur(t.fields,(n,s)=>{const r=new pt([n]);if(wa(s)){const i=X_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new dt(e,0,ae.min(),ae.min(),ae.min(),At.empty(),0)}static newFoundDocument(e,n,s,r){return new dt(e,1,n,ae.min(),s,r,0)}static newNoDocument(e,n){return new dt(e,2,n,ae.min(),ae.min(),At.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ae.min(),ae.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wO{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function lm(t,e=null,n=[],s=[],r=null,i=null,o=null){return new wO(t,e,n,s,r,i,o)}function wd(t){const e=ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Kl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qr(s)).join(",")),e.ft=n}return e.ft}function bd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_O(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cm(t.startAt,e.startAt)&&cm(t.endAt,e.endAt)}function Wl(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function bO(t,e,n,s,r,i,o,a){return new si(t,e,n,s,r,i,o,a)}function Td(t){return new si(t)}function hm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ed(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function cu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function J_(t){return t.collectionGroup!==null}function Rr(t){const e=ue(t);if(e.dt===null){e.dt=[];const n=cu(e),s=Ed(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new kr(n)),e.dt.push(new kr(pt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new kr(pt.keyField(),i))}}}return e.dt}function jn(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=lm(e.path,e.collectionGroup,Rr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Rr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new kr(i.field,o))}const s=e.endAt?new Xa(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Xa(e.startAt.position,e.startAt.inclusive):null;e._t=lm(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Gl(t,e){e.getFirstInequalityField(),cu(t);const n=t.filters.concat([e]);return new si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zl(t,e,n){return new si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uu(t,e){return bd(jn(t),jn(e))&&t.limitType===e.limitType}function ew(t){return`${wd(jn(t))}|lt:${t.limitType}`}function Ql(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Q_(s)).join(", ")}]`),au(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qr(s)).join(",")),`Target(${n})`}(jn(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Z.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Rr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=am(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Rr(n),s)||n.endAt&&!function(r,i,o){const a=am(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Rr(n),s))}(t,e)}function TO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tw(t){return(e,n)=>{let s=!1;for(const r of Rr(t)){const i=EO(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function EO(t,e,n){const s=t.field.isKeyField()?Z.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?jr(a,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ya(e)?"-0":e}}function sw(t){return{integerValue:""+t}}function IO(t,e){return cO(e)?sw(e):nw(t,e)}/**
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
 */class hu{constructor(){this._=void 0}}function CO(t,e,n){return t instanceof Ja?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ro?iw(t,e):t instanceof io?ow(t,e):function(s,r){const i=rw(s,r),o=dm(i)+dm(s.gt);return zl(i)&&zl(s.gt)?sw(o):nw(s.yt,o)}(t,e)}function SO(t,e,n){return t instanceof ro?iw(t,e):t instanceof io?ow(t,e):n}function rw(t,e){return t instanceof ec?zl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ja extends hu{}class ro extends hu{constructor(e){super(),this.elements=e}}function iw(t,e){const n=aw(e);for(const s of t.elements)n.some(r=>In(r,s))||n.push(s);return{arrayValue:{values:n}}}class io extends hu{constructor(e){super(),this.elements=e}}function ow(t,e){let n=aw(e);for(const s of t.elements)n=n.filter(r=>!In(r,s));return{arrayValue:{values:n}}}class ec extends hu{constructor(e,n){super(),this.yt=e,this.gt=n}}function dm(t){return Qe(t.integerValue||t.doubleValue)}function aw(t){return _d(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AO(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ro&&s instanceof ro||n instanceof io&&s instanceof io?$r(n.elements,s.elements,In):n instanceof ec&&s instanceof ec?In(n.gt,s.gt):n instanceof Ja&&s instanceof Ja}(t.transform,e.transform)}class kO{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class du{}function cw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Id(t.key,Kt.none()):new Bo(t.key,t.data,Kt.none());{const n=t.data,s=At.empty();let r=new tt(pt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ss(t.key,s,new Mt(r.toArray()),Kt.none())}}function RO(t,e,n){t instanceof Bo?function(s,r,i){const o=s.value.clone(),a=pm(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,r,i){if(!ba(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=pm(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(uw(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,s){return t instanceof Bo?function(r,i,o,a){if(!ba(r.precondition,i))return o;const c=r.value.clone(),u=mm(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(r,i,o,a){if(!ba(r.precondition,i))return o;const c=mm(r.fieldTransforms,a,i),u=i.data;return u.setAll(uw(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return ba(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function NO(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=rw(s.transform,r||null);i!=null&&(n===null&&(n=At.empty()),n.set(s.field,i))}return n||null}function fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$r(n,s,(r,i)=>AO(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends du{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ss extends du{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pm(t,e,n){const s=new Map;xe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,SO(o,a,n[r]))}return s}function mm(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,CO(i,o,e))}return s}class Id extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OO extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,ve;function DO(t){switch(t){default:return ne();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function lw(t){if(t===void 0)return Vn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ze.OK:return T.OK;case Ze.CANCELLED:return T.CANCELLED;case Ze.UNKNOWN:return T.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return T.INTERNAL;case Ze.UNAVAILABLE:return T.UNAVAILABLE;case Ze.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ze.NOT_FOUND:return T.NOT_FOUND;case Ze.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ze.ABORTED:return T.ABORTED;case Ze.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ze.DATA_LOSS:return T.DATA_LOSS;default:return ne()}}(ve=Ze||(Ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return q_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=new nt(Z.comparator);function qn(){return PO}const hw=new nt(Z.comparator);function gi(...t){let e=hw;for(const n of t)e=e.insert(n.key,n);return e}function dw(t){let e=hw;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Vs(){return xi()}function fw(){return xi()}function xi(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const LO=new nt(Z.comparator),MO=new tt(Z.comparator);function ge(...t){let e=MO;for(const n of t)e=e.add(n);return e}const UO=new tt(Ie);function pw(){return UO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new fu(ae.min(),r,pw(),qn(),ge())}}class $o{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new $o(s,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class mw{constructor(e,n){this.targetId=e,this.Et=n}}class gw{constructor(e,n,s=vt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class gm{constructor(){this.At=0,this.Rt=vm(),this.bt=vt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ge(),n=ge(),s=ge();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ne()}}),new $o(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=vm()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class FO{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=qn(),this.qt=ym(),this.Ut=new tt(Ie)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Wl(i))if(s===0){const o=new Z(i.path);this.Qt(n,o,dt.newNoDocument(o,ae.min()))}else xe(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Wl(a.target)){const c=new Z(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,dt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ge();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new fu(e,n,this.Ut,this.Lt,s);return this.Lt=qn(),this.qt=ym(),this.Ut=new tt(Ie),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new gm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new tt(Ie),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new gm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function ym(){return new nt(Z.comparator)}function vm(){return new nt(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$O=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VO=(()=>({and:"AND",or:"OR"}))();class jO{constructor(e,n){this.databaseId=e,this.wt=n}}function tc(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yw(t,e){return t.wt?e.toBase64():e.toUint8Array()}function qO(t,e){return tc(t,e.toTimestamp())}function wn(t){return xe(!!t),ae.fromTimestamp(function(e){const n=vs(e);return new et(n.seconds,n.nanos)}(t))}function Cd(t,e){return function(n){return new Pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vw(t){const e=Pe.fromString(t);return xe(Tw(e)),e}function Yl(t,e){return Cd(t.databaseId,e.path)}function tl(t,e){const n=vw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(_w(n))}function Xl(t,e){return Cd(t.databaseId,e)}function HO(t){const e=vw(t);return e.length===4?Pe.emptyPath():_w(e)}function Jl(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _w(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _m(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function zO(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(xe(u===void 0||typeof u=="string"),vt.fromBase64String(u||"")):(xe(u===void 0||u instanceof Uint8Array),vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:lw(c.code);return new $(u,c.message||"")}(o);n=new gw(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=tl(t,s.document.name),i=wn(s.document.updateTime),o=s.document.createTime?wn(s.document.createTime):ae.min(),a=new At({mapValue:{fields:s.document.fields}}),c=dt.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Ta(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=tl(t,s.document),i=s.readTime?wn(s.readTime):ae.min(),o=dt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ta([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=tl(t,s.document),i=s.removedTargetIds||[];n=new Ta([],i,r,null)}else{if(!("filter"in e))return ne();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new xO(r),o=s.targetId;n=new mw(o,i)}}return n}function KO(t,e){let n;if(e instanceof Bo)n={update:_m(t,e.key,e.value)};else if(e instanceof Id)n={delete:Yl(t,e.key)};else if(e instanceof Ss)n={update:_m(t,e.key,e.data),updateMask:tx(e.fieldMask)};else{if(!(e instanceof OO))return ne();n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ja)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ro)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof io)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ec)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw ne()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:qO(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ne()}(t,e.precondition)),n}function WO(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?wn(s.updateTime):wn(r);return i.isEqual(ae.min())&&(i=wn(r)),new kO(i,s.transformResults||[])}(n,e))):[]}function GO(t,e){return{documents:[Xl(t,e.path)]}}function ZO(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Xl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return bw(cn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:vr(l.field),direction:XO(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||au(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function QO(t){let e=HO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){xe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=ww(l);return h instanceof cn&&G_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new kr(_r(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,au(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Xa(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Xa(d,h)}(n.endAt)),bO(e,r,o,i,a,"F",c,u)}function YO(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ww(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_r(e.unaryFilter.field);return Ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_r(e.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_r(e.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_r(e.unaryFilter.field);return Ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(e){return Ye.create(_r(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return cn.create(e.compositeFilter.filters.map(n=>ww(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ne()}}(e.compositeFilter.op))}(t):ne()}function XO(t){return BO[t]}function JO(t){return $O[t]}function ex(t){return VO[t]}function vr(t){return{fieldPath:t.canonicalString()}}function _r(t){return pt.fromServerFormat(t.fieldPath)}function bw(t){return t instanceof Ye?function(e){if(e.op==="=="){if(om(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NAN"}};if(im(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(om(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NOT_NAN"}};if(im(e.value))return{unaryFilter:{field:vr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vr(e.field),op:JO(e.op),value:e.value}}}(t):t instanceof cn?function(e){const n=e.getFilters().map(s=>bw(s));return n.length===1?n[0]:{compositeFilter:{op:ex(e.op),filters:n}}}(t):ne()}function tx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&RO(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Oi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Oi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=fw();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=cw(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&$r(this.mutations,e.mutations,(n,s)=>fm(n,s))&&$r(this.baseMutations,e.baseMutations,(n,s)=>fm(n,s))}}class Sd{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){xe(e.mutations.length===s.length);let r=LO;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Sd(e,n,s,r)}}/**
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
 */class sx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Gs{constructor(e,n,s,r,i=ae.min(),o=ae.min(),a=vt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.ie=e}}function ix(t){const e=QO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zl(e,e.limit,"L"):e}/**
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
 */class ox{constructor(){this.Je=new ax}addToCollectionParentIndex(e,n){return this.Je.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(ys.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class ax{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new tt(Pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new tt(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Hr(0)}static vn(){return new Hr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ux{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Oi(s.mutation,r,Mt.empty(),et.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ge()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ge()){const r=Vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=gi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ge()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=qn();const o=xi(),a=xi();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Ss)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Oi(l.mutation,u,l.mutation.getFieldMask(),et.now())):o.set(u.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new ux(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=xi();let r=new nt((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Mt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ge()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=fw();l.forEach(d=>{if(!i.has(d)){const p=cw(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):k.resolve(Vs());let a=-1,c=i;return o.next(u=>k.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?k.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ge())).next(l=>({batchId:a,changes:dw(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(s=>{let r=gi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=gi();return this.indexManager.getCollectionParents(e,r).next(o=>k.forEach(o,a=>{const c=function(u,l){return new si(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,dt.newInvalidDocument(u)))});let o=gi();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Oi(u.mutation,c,Mt.empty(),et.now()),lu(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:wn(s.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ix(s.bundledQuery),readTime:wn(s.readTime)}}(n)),k.resolve()}}/**
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
 */class dx{constructor(){this.overlays=new nt(Z.comparator),this.es=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Vs();return k.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const r=Vs(),i=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return k.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new nt((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Vs(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Vs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return k.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sx(n,s));let i=this.es.get(n);i===void 0&&(i=ge(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.ns=new tt(st.ss),this.rs=new tt(st.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new st(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new st(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new Z(new Pe([])),s=new st(n,e),r=new st(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Z(new Pe([])),s=new st(n,e),r=new st(n,e+1);let i=ge();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class st{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Z.comparator(e.key,n.key)||Ie(e._s,n._s)}static os(e,n){return Ie(e._s,n._s)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new tt(st.ss)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nx(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new st(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new st(n,0),r=new st(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new tt(Ie);return n.forEach(r=>{const i=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),k.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Z.isDocumentKey(i)||(i=i.child(""));const o=new st(new Z(i),0);let a=new tt(Ie);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),k.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){xe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return k.forEach(n.mutations,r=>{const i=new st(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new st(n,0),r=this.gs.firstAfterOrEqual(s);return k.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.Es=e,this.docs=new nt(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let s=qn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():dt.newInvalidDocument(r))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=qn();const o=n.path,a=new Z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||rO(sO(l),s)<=0||(r.has(l.key)||lu(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ne()}As(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new mx(this)}getSize(e){return k.resolve(this.size)}}class mx extends cx{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.persistence=e,this.Rs=new ri(n=>wd(n),bd),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ad,this.targetCount=0,this.vs=Hr.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),k.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Hr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Dn(n),k.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),k.waitFor(i).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new vd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new gx(this),this.indexManager=new ox,this.remoteDocumentCache=function(s){return new px(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new rx(n),this.Ns=new hx(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new fx(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){W("MemoryPersistence","Starting transaction:",e);const r=new vx(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return k.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class vx extends oO{constructor(e){super(),this.currentSequenceNumber=e}}class kd{constructor(e){this.persistence=e,this.Fs=new Ad,this.$s=null}static Bs(e){return new kd(e)}get Ls(){if(this.$s)return this.$s;throw ne()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,s=>{const r=Z.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ge(),r=ge();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Rd(e,n.fromCache,s,r)}}/**
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
 */class _x{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(hm(n))return k.resolve(null);let s=jn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Zl(n,null,"F"),s=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ge(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Zl(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return hm(n)||r.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(tm()<=be.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ql(n)),this.Bi(e,o,n,nO(r,-1)))})}Fi(e,n){let s=new tt(tw(e));return n.forEach((r,i)=>{lu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return tm()<=be.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ql(n)),this.Ni.getDocumentsMatchingQuery(e,n,ys.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new nt(Ie),this.Ui=new ri(i=>wd(i),bd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lx(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function bx(t,e,n,s){return new wx(t,e,n,s)}async function Ew(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ge();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Tx(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=k.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const y=c.docVersions.get(p);xe(y!==null),g.version.compareTo(y)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ge();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Iw(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ex(t,e){const n=ue(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(vt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(g,y,I){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=qn(),u=ge();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ix(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(ae.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Ix(t,e,n){let s=ge(),r=ge();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=qn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Cx(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Sx(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,k.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Gs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function eh(t,e,n){const s=ue(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Fo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function wm(t,e,n){const s=ue(t);let r=ae.min(),i=ge();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=ue(a),h=l.Ui.get(u);return h!==void 0?k.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,jn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ae.min(),n?i:ge())).next(a=>(Ax(s,TO(e),a),{documents:a,Hi:i})))}function Ax(t,e,n){let s=t.Ki.get(e)||ae.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class bm{constructor(){this.activeTargetIds=pw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kx{constructor(){this.Lr=new bm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new bm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Rx{Ur(e){}shutdown(){}}/**
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
 */class Tm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);W("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(W("RestConnection","Received: ",c),c),c=>{throw ql("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ni,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=Nx[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new KN;a.setWithCredentials(!0),a.listenOnce(qN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case el.NO_ERROR:const u=a.getResponseJson();W("Connection","XHR received:",JSON.stringify(u)),i(u);break;case el.TIMEOUT:W("Connection",'RPC "'+e+'" timed out'),o(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case el.HTTP_ERROR:const l=a.getStatus();if(W("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(d.status);o(new $(p,d.message))}else o(new $(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(T.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{W("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=VN(),o=jN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zN({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");W("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Ox({Hr:g=>{h?W("Connection","Not sending because WebChannel is closed:",g):(l||(W("Connection","Opening WebChannel transport."),u.open(),l=!0),W("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,y,I)=>{g.listen(y,S=>{try{I(S)}catch(_){setTimeout(()=>{throw _},0)}})};return p(u,ia.EventType.OPEN,()=>{h||W("Connection","WebChannel transport opened.")}),p(u,ia.EventType.CLOSE,()=>{h||(h=!0,W("Connection","WebChannel transport closed"),d.io())}),p(u,ia.EventType.ERROR,g=>{h||(h=!0,ql("Connection","WebChannel transport errored:",g),d.io(new $(T.UNAVAILABLE,"The operation could not be completed")))}),p(u,ia.EventType.MESSAGE,g=>{var y;if(!h){const I=g.data[0];xe(!!I);const S=I,_=S.error||((y=S[0])===null||y===void 0?void 0:y.error);if(_){W("Connection","WebChannel received error:",_);const b=_.status;let D=function(K){const j=Ze[K];if(j!==void 0)return lw(j)}(b),M=_.message;D===void 0&&(D=T.INTERNAL,M="Unknown error status: "+b+" with message "+_.message),h=!0,d.io(new $(D,M)),u.close()}else W("Connection","WebChannel received:",I),d.ro(I)}}),p(o,HN.STAT_EVENT,g=>{g.stat===Jp.PROXY?W("Connection","Detected buffering proxy"):g.stat===Jp.NOPROXY&&W("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function nl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return new jO(t,!0)}class Cw{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&W("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Cw(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new $(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dx extends Sw{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=zO(this.yt,e),s=function(r){if(!("targetChange"in r))return ae.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?wn(i.readTime):ae.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Jl(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Wl(a)?{documents:GO(r,a)}:{query:ZO(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=yw(r,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=tc(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=YO(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Jl(this.yt),n.removeTarget=e,this.Bo(n)}}class Px extends Sw{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=WO(e.writeResults,e.commitTime),s=wn(e.commitTime);return this.listener.Zo(s,n)}return xe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Jl(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>KO(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(T.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Mx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Vn(n),this.ou=!1):W("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{lr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ue(a);c._u.add(4),await Vo(c),c.gu.set("Unknown"),c._u.delete(4),await mu(c)}(this))})}),this.gu=new Mx(s,r)}}async function mu(t){if(lr(t))for(const e of t.wu)await e(!0)}async function Vo(t){for(const e of t.wu)await e(!1)}function Aw(t,e){const n=ue(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),xd(n)?Od(n):ii(n).ko()&&Nd(n,e))}function kw(t,e){const n=ue(t),s=ii(n);n.du.delete(e),s.ko()&&Rw(n,e),n.du.size===0&&(s.ko()?s.Fo():lr(n)&&n.gu.set("Unknown"))}function Nd(t,e){t.yu.Ot(e.targetId),ii(t).zo(e)}function Rw(t,e){t.yu.Ot(e),ii(t).Ho(e)}function Od(t){t.yu=new FO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ii(t).start(),t.gu.uu()}function xd(t){return lr(t)&&!ii(t).No()&&t.du.size>0}function lr(t){return ue(t)._u.size===0}function Nw(t){t.yu=void 0}async function Fx(t){t.du.forEach((e,n)=>{Nd(t,e)})}async function Bx(t,e){Nw(t),xd(t)?(t.gu.hu(e),Od(t)):t.gu.set("Unknown")}async function $x(t,e,n){if(t.gu.set("Online"),e instanceof gw&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await nc(t,s)}else if(e instanceof Ta?t.yu.Kt(e):e instanceof mw?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ae.min()))try{const s=await Iw(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(vt.EMPTY_BYTE_STRING,c.snapshotVersion)),Rw(r,a);const u=new Gs(c.target,a,1,c.sequenceNumber);Nd(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){W("RemoteStore","Failed to raise snapshot:",s),await nc(t,s)}}async function nc(t,e,n){if(!Fo(e))throw e;t._u.add(1),await Vo(t),t.gu.set("Offline"),n||(n=()=>Iw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await mu(t)})}function Ow(t,e){return e().catch(n=>nc(t,n,e))}async function gu(t){const e=ue(t),n=_s(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Vx(e);)try{const r=await Cx(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,jx(e,r)}catch(r){await nc(e,r)}xw(e)&&Dw(e)}function Vx(t){return lr(t)&&t.fu.length<10}function jx(t,e){t.fu.push(e);const n=_s(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function xw(t){return lr(t)&&!_s(t).No()&&t.fu.length>0}function Dw(t){_s(t).start()}async function qx(t){_s(t).eu()}async function Hx(t){const e=_s(t);for(const n of t.fu)e.Xo(n.mutations)}async function zx(t,e,n){const s=t.fu.shift(),r=Sd.from(s,e,n);await Ow(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await gu(t)}async function Kx(t,e){e&&_s(t).Yo&&await async function(n,s){if(r=s.code,DO(r)&&r!==T.ABORTED){const i=n.fu.shift();_s(n).Mo(),await Ow(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gu(n)}var r}(t,e),xw(t)&&Dw(t)}async function Em(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const s=lr(n);n._u.add(3),await Vo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await mu(n)}async function Wx(t,e){const n=ue(t);e?(n._u.delete(2),await mu(n)):e||(n._u.add(2),await Vo(n),n.gu.set("Unknown"))}function ii(t){return t.pu||(t.pu=function(e,n,s){const r=ue(e);return r.su(),new Dx(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Fx.bind(null,t),Zr:Bx.bind(null,t),Wo:$x.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),xd(t)?Od(t):t.gu.set("Unknown")):(await t.pu.stop(),Nw(t))})),t.pu}function _s(t){return t.Iu||(t.Iu=function(e,n,s){const r=ue(e);return r.su(),new Px(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:qx.bind(null,t),Zr:Kx.bind(null,t),tu:Hx.bind(null,t),Zo:zx.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await gu(t)):(await t.Iu.stop(),t.fu.length>0&&(W("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Dd(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pd(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Fo(t))return new $(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Z.comparator(n.key,s.key):(n,s)=>Z.comparator(n.key,s.key),this.keyedMap=gi(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Nr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.Tu=new nt(Z.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ne():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class zr{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zr(e,n,Nr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.Au=void 0,this.listeners=[]}}class Zx{constructor(){this.queries=new ri(e=>ew(e),uu),this.onlineState="Unknown",this.Ru=new Set}}async function Pw(t,e){const n=ue(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Gx),r)try{i.Au=await n.onListen(s)}catch(o){const a=Pd(o,`Initialization of query '${Ql(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ld(n)}async function Lw(t,e){const n=ue(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Qx(t,e){const n=ue(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ld(n)}function Yx(t,e,n){const s=ue(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ld(t){t.Ru.forEach(e=>{e.next()})}class Mw{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new zr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.key=e}}class Fw{constructor(e){this.key=e}}class Xx{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ge(),this.mutatedKeys=ge(),this.Gu=tw(e),this.Qu=new Nr(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Im,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=lu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?g!==y&&(s.track({type:3,doc:p}),I=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),I=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),I=!0):d&&!p&&(s.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new zr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Im,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ge(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Fw(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Uw(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ge();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return zr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Jx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class e1{constructor(e){this.key=e,this.nc=!1}}class t1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ri(a=>ew(a),uu),this.rc=new Map,this.oc=new Set,this.uc=new nt(Z.comparator),this.cc=new Map,this.ac=new Ad,this.hc={},this.lc=new Map,this.fc=Hr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function n1(t,e){const n=d1(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Sx(n.localStore,jn(e));n.isPrimaryClient&&Aw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await s1(n,e,s,a==="current",o.resumeToken)}return r}async function s1(t,e,n,s,r){t._c=(h,d,p)=>async function(g,y,I,S){let _=y.view.Wu(I);_.$i&&(_=await wm(g.localStore,y.query,!1).then(({documents:M})=>y.view.Wu(M,_)));const b=S&&S.targetChanges.get(y.targetId),D=y.view.applyChanges(_,g.isPrimaryClient,b);return Sm(g,y.targetId,D.Xu),D.snapshot}(t,h,d,p);const i=await wm(t.localStore,e,!0),o=new Xx(e,i.Hi),a=o.Wu(i.documents),c=$o.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Sm(t,n,u.Xu);const l=new Jx(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function r1(t,e){const n=ue(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!uu(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await eh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),kw(n.remoteStore,s.targetId),th(n,s.targetId)}).catch(Uo)):(th(n,s.targetId),await eh(n.localStore,s.targetId,!0))}async function i1(t,e,n){const s=f1(t);try{const r=await function(i,o){const a=ue(i),c=et.now(),u=o.reduce((d,p)=>d.add(p.key),ge());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=qn(),g=ge();return a.Gi.getEntries(d,u).next(y=>{p=y,p.forEach((I,S)=>{S.isValidDocument()||(g=g.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{l=y;const I=[];for(const S of o){const _=NO(S,l.get(S.key).overlayedDocument);_!=null&&I.push(new Ss(S.key,_,X_(_.value.mapValue),Kt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:dw(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new nt(Ie)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await jo(s,r.changes),await gu(s.remoteStore)}catch(r){const i=Pd(r,"Failed to persist write");n.reject(i)}}async function Bw(t,e){const n=ue(t);try{const s=await Ex(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(xe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?xe(o.nc):r.removedDocuments.size>0&&(xe(o.nc),o.nc=!1))}),await jo(n,s,e)}catch(s){await Uo(s)}}function Cm(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ue(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Ld(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function o1(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new nt(Z.comparator);o=o.insert(i,dt.newNoDocument(i,ae.min()));const a=ge().add(i),c=new fu(ae.min(),new Map,new tt(Ie),o,a);await Bw(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Md(s)}else await eh(s.localStore,e,!1).then(()=>th(s,e,n)).catch(Uo)}async function a1(t,e){const n=ue(t),s=e.batch.batchId;try{const r=await Tx(n.localStore,e);Vw(n,s,null),$w(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await jo(n,r)}catch(r){await Uo(r)}}async function c1(t,e,n){const s=ue(t);try{const r=await function(i,o){const a=ue(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(xe(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Vw(s,e,n),$w(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await jo(s,r)}catch(r){await Uo(r)}}function $w(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Vw(t,e,n){const s=ue(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function th(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||jw(t,s)})}function jw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(kw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Md(t))}function Sm(t,e,n){for(const s of n)s instanceof Uw?(t.ac.addReference(s.key,e),u1(t,s)):s instanceof Fw?(W("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||jw(t,s.key)):ne()}function u1(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(W("SyncEngine","New document in limbo: "+n),t.oc.add(s),Md(t))}function Md(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Z(Pe.fromString(e)),s=t.fc.next();t.cc.set(s,new e1(n)),t.uc=t.uc.insert(n,s),Aw(t.remoteStore,new Gs(jn(Td(n.path)),s,2,vd.at))}}async function jo(t,e,n){const s=ue(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Rd.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>k.forEach(c,h=>k.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>k.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Fo(l))throw l;W("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,g)}}}(s.localStore,i))}async function l1(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const s=await Ew(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new $(T.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await jo(n,s.ji)}}function h1(t,e){const n=ue(t),s=n.cc.get(e);if(s&&s.nc)return ge().add(s.key);{let r=ge();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function d1(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=h1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o1.bind(null,e),e.sc.Wo=Qx.bind(null,e.eventManager),e.sc.wc=Yx.bind(null,e.eventManager),e}function f1(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c1.bind(null,e),e}class p1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=pu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return bx(this.persistence,new _x,e.initialUser,this.yt)}yc(e){return new yx(kd.Bs,this.yt)}gc(e){return new kx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class m1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=l1.bind(null,this.syncEngine),await Wx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Zx}createDatastore(e){const n=pu(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new xx(r));var r;return function(i,o,a,c){return new Lx(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Cm(this.syncEngine,a,0),o=Tm.C()?new Tm:new Rx,new Ux(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new t1(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);W("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Vo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function g1(t,e,n,s){if(e===!0&&s===!0)throw new $(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Am(t){if(!Z.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function km(t){if(Z.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yu(t);throw new $(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new Map;class Nm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,g1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WN;switch(n.type){case"gapi":const s=n.client;return new YN(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rm.get(e);n&&(W("ComponentProvider","Removing Datastore"),Rm.delete(e),n.terminate())}(this),Promise.resolve()}}function y1(t,e,n,s={}){var r;const i=(t=un(t,vu))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ql("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ht.MOCK_USER;else{o=Ny(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new $(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ht(c)}t._authCredentials=new GN(new V_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class hr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class fs extends hr{constructor(e,n,s){super(e,n,Td(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new Z(e))}withConverter(e){return new fs(this.firestore,e,this._path)}}function v1(t,e,...n){if(t=$e(t),qw("collection","path",e),t instanceof vu){const s=Pe.fromString(e,...n);return km(s),new fs(t,null,s)}{if(!(t instanceof Et||t instanceof fs))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return km(s),new fs(t.firestore,null,s)}}function sc(t,e,...n){if(t=$e(t),arguments.length===1&&(e=j_.R()),qw("doc","path",e),t instanceof vu){const s=Pe.fromString(e,...n);return Am(s),new Et(t,null,new Z(s))}{if(!(t instanceof Et||t instanceof fs))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Am(s),new Et(t.firestore,t instanceof fs?t.converter:null,new Z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ht.UNAUTHENTICATED,this.clientId=j_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Pd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function w1(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ew(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function b1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await T1(t);W("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Em(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Em(e.remoteStore,i)),t.onlineComponents=e}async function T1(t){return t.offlineComponents||(W("FirestoreClient","Using default OfflineComponentProvider"),await w1(t,new p1)),t.offlineComponents}async function zw(t){return t.onlineComponents||(W("FirestoreClient","Using default OnlineComponentProvider"),await b1(t,new m1)),t.onlineComponents}function E1(t){return zw(t).then(e=>e.syncEngine)}async function Kw(t){const e=await zw(t),n=e.eventManager;return n.onListen=n1.bind(null,e.syncEngine),n.onUnlisten=r1.bind(null,e.syncEngine),n}function I1(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Hw({next:h=>{i.enqueueAndForget(()=>Lw(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new $(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new $(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Mw(Td(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Pw(r,l)}(await Kw(t),t.asyncQueue,e,n,s)),s.promise}function C1(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Hw({next:h=>{i.enqueueAndForget(()=>Lw(r,l)),h.fromCache&&a.source==="server"?c.reject(new $(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Mw(o,u,{includeMetadataChanges:!0,Nu:!0});return Pw(r,l)}(await Kw(t),t.asyncQueue,e,n,s)),s.promise}class S1{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Cw(this,"async_queue_retry"),this.Wc=()=>{const n=nl();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=nl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=nl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Pn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Fo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Vn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Dd.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&ne()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class dr extends vu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new S1,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ww(this),this._firestoreClient.terminate()}}function A1(t,e){const n=typeof t=="object"?t:Fc(),s=typeof t=="string"?t:e||"(default)",r=Es(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ky("firestore");i&&y1(r,...i)}return r}function Ud(t){return t._firestoreClient||Ww(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ww(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new aO(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _1(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kr(vt.fromBase64String(e))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kr(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=/^__.*__$/;class R1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class Gw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Zw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class $d{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new $d(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return rc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Zw(this.sa)&&k1.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class N1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||pu(e)}da(e,n,s,r=!1){return new $d({sa:e,methodName:n,fa:s,path:pt.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function wu(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new N1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qw(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Vd("Data must be an object, but it was:",o,s);const a=Yw(s,o);let c,u;if(i.merge)c=new Mt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=nh(e,h,n);if(!o.contains(d))throw new $(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Jw(l,d)||l.push(d)}c=new Mt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new R1(new At(a),c,u)}class bu extends Fd{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bu}}function O1(t,e,n,s){const r=t.da(1,e,n);Vd("Data must be an object, but it was:",r,s);const i=[],o=At.empty();ur(s,(c,u)=>{const l=jd(e,c,n);u=$e(u);const h=r.ca(l);if(u instanceof bu)i.push(l);else{const d=qo(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Mt(i);return new Gw(o,a,r.fieldTransforms)}function x1(t,e,n,s,r,i){const o=t.da(1,e,n),a=[nh(e,s,n)],c=[r];if(i.length%2!=0)throw new $(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(nh(e,i[d])),c.push(i[d+1]);const u=[],l=At.empty();for(let d=a.length-1;d>=0;--d)if(!Jw(u,a[d])){const p=a[d];let g=c[d];g=$e(g);const y=o.ca(p);if(g instanceof bu)u.push(p);else{const I=qo(g,y);I!=null&&(u.push(p),l.set(p,I))}}const h=new Mt(u);return new Gw(l,h,o.fieldTransforms)}function D1(t,e,n,s=!1){return qo(n,t.da(s?4:3,e))}function qo(t,e){if(Xw(t=$e(t)))return Vd("Unsupported field value:",e,t),Yw(t,e);if(t instanceof Fd)return function(n,s){if(!Zw(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=qo(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return IO(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=et.fromDate(n);return{timestampValue:tc(s.yt,r)}}if(n instanceof et){const r=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tc(s.yt,r)}}if(n instanceof Bd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kr)return{bytesValue:yw(s.yt,n._byteString)};if(n instanceof Et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Cd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${yu(n)}`)}(t,e)}function Yw(t,e){const n={};return q_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(t,(s,r)=>{const i=qo(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Xw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Bd||t instanceof Kr||t instanceof Et||t instanceof Fd)}function Vd(t,e,n){if(!Xw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=yu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function nh(t,e,n){if((e=$e(e))instanceof _u)return e._internalPath;if(typeof e=="string")return jd(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const P1=new RegExp("[~\\*/\\[\\]]");function jd(t,e,n){if(e.search(P1)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _u(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(T.INVALID_ARGUMENT,a+t+c)}function Jw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new L1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class L1 extends eb{data(){return super.data()}}function qd(t,e){return typeof e=="string"?jd(t,e):e instanceof _u?e._internalPath:e._delegate._internalPath}class Hd{}class tb extends Hd{}function mM(t,e,...n){let s=[];e instanceof Hd&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Kd).length,o=r.filter(a=>a instanceof zd).length;if(i>1||i>0&&o>0)throw new $(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class zd extends tb{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new zd(e,n,s)}_apply(e){const n=this._parse(e);return nb(e._query,n),new hr(e.firestore,e.converter,Gl(e._query,n))}_parse(e){const n=wu(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){xm(l,u);const d=[];for(const p of l)d.push(Om(a,r,p));h={arrayValue:{values:d}}}else h=Om(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||xm(l,u),h=D1(o,i,l,u==="in"||u==="not-in");return Ye.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Kd extends Hd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Kd(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)nb(i,a),i=Gl(i,a)}(e._query,n),new hr(e.firestore,e.converter,Gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wd extends tb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wd(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new $(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new kr(r,i);return function(a,c){if(Ed(a)===null){const u=cu(a);u!==null&&sb(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new hr(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new si(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function gM(t,e="asc"){const n=e,s=qd("orderBy",t);return Wd._create(s,n)}function Om(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new $(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!J_(e)&&n.indexOf("/")!==-1)throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Pe.fromString(n));if(!Z.isDocumentKey(s))throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return rm(t,new Z(s))}if(n instanceof Et)return rm(t,n._key);throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yu(n)}.`)}function xm(t,e){if(!Array.isArray(t)||t.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new $(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function nb(t,e){if(e.isInequality()){const s=cu(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new $(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Ed(t);i!==null&&sb(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sb(t,e,n){if(!n.isEqual(e))throw new $(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class M1{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){const s={};return ur(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Bd(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=z_(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=vs(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Pe.fromString(e);xe(Tw(s));const r=new to(s.get(1),s.get(3)),i=new Z(s.popFirst(5));return r.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ib extends eb{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(qd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ea extends ib{data(e={}){return super.data(e)}}class U1{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new yi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ea(this._firestore,this._userDataWriter,s.key,s,new yi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ea(s._firestore,s._userDataWriter,o.doc.key,o.doc,new yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ea(s._firestore,s._userDataWriter,o.doc.key,o.doc,new yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:F1(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function F1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){t=un(t,Et);const e=un(t.firestore,dr);return I1(Ud(e),t._key).then(n=>V1(e,t,n))}class ob extends M1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function yM(t){t=un(t,hr);const e=un(t.firestore,dr),n=Ud(e),s=new ob(e);return C1(n,t._query,{source:"server"}).then(r=>new U1(e,s,t,r))}function B1(t,e,n){t=un(t,Et);const s=un(t.firestore,dr),r=rb(t.converter,e,n);return Tu(s,[Qw(wu(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Kt.none())])}function $1(t,e,n,...s){t=un(t,Et);const r=un(t.firestore,dr),i=wu(r);let o;return o=typeof(e=$e(e))=="string"||e instanceof _u?x1(i,"updateDoc",t._key,e,n,s):O1(i,"updateDoc",t._key,e),Tu(r,[o.toMutation(t._key,Kt.exists(!0))])}function vM(t){return Tu(un(t.firestore,dr),[new Id(t._key,Kt.none())])}function _M(t,e){const n=un(t.firestore,dr),s=sc(t),r=rb(t.converter,e);return Tu(n,[Qw(wu(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Kt.exists(!1))]).then(()=>s)}function Tu(t,e){return function(n,s){const r=new Pn;return n.asyncQueue.enqueueAndForget(async()=>i1(await E1(n),s,r)),r.promise}(Ud(t),e)}function V1(t,e,n){const s=n.docs.get(e._key),r=new ob(t);return new ib(t,r,e._key,s,new yi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ni=n})(Jr),an(new Wt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new dr(new ZN(n.getProvider("auth-internal")),new JN(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Rt(em,"3.8.3",t),Rt(em,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebasestorage.googleapis.com",cb="storageBucket",j1=2*60*1e3,q1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Gt{constructor(e,n,s=0){super(sl(e),`Firebase Storage: ${n} (${sl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function sl(t){return"storage/"+t}function Gd(){const t="An unknown error occurred, please check the error payload for server response.";return new He(qe.UNKNOWN,t)}function H1(t){return new He(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function z1(t){return new He(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function K1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(qe.UNAUTHENTICATED,t)}function W1(){return new He(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function G1(t){return new He(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Z1(){return new He(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Q1(){return new He(qe.CANCELED,"User canceled the upload/download.")}function Y1(t){return new He(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function X1(t){return new He(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function J1(){return new He(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cb+"' property when initializing the app?")}function eD(){return new He(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tD(){return new He(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nD(t){return new He(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sh(t){return new He(qe.INVALID_ARGUMENT,t)}function ub(){return new He(qe.APP_DELETED,"The Firebase app was deleted.")}function sD(t){return new He(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Di(t,e){return new He(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function hi(t){throw new He(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(s.path==="")return s;throw X1(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},y=n===ab?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",S=new RegExp(`^https?://${y}/${r}/${I}`,"i"),b=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<b.length;D++){const M=b[D],K=M.regex.exec(e);if(K){const j=K[M.indices.bucket];let R=K[M.indices.path];R||(R=""),s=new Ut(j,R),M.postModify(s);break}}if(s==null)throw Y1(e);return s}}class rD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){r=setTimeout(()=>{r=null,t(p,c())},I)}function d(){i&&clearTimeout(i)}function p(I,...S){if(u){d();return}if(I){d(),l.call(null,I,...S);return}if(c()||o){d(),l.call(null,I,...S);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let g=!1;function y(I){g||(g=!0,d(),!u&&(r!==null?(I||(a=2),clearTimeout(r),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function oD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t){return t!==void 0}function cD(t){return typeof t=="object"&&!Array.isArray(t)}function Zd(t){return typeof t=="string"||t instanceof String}function Pm(t){return Qd()&&t instanceof Blob}function Qd(){return typeof Blob<"u"&&!hC()}function Lm(t,e,n,s){if(s<e)throw sh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw sh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function lb(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zs||(Zs={}));/**
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
 */function uD(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ca(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Zs.NO_ERROR,c=i.getStatus();if(!a||uD(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===Zs.ABORT;s(!1,new ca(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ca(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());aD(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Gd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?ub():Q1();o(c)}else{const c=Z1();o(c)}};this.canceled_?n(!1,new ca(!1,null,!0)):this.backoffId_=iD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ca{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function hD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mD(t,e,n,s,r,i,o=!0){const a=lb(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return fD(u,e),hD(u,n),dD(u,i),pD(u,s),new lD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yD(...t){const e=gD();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Qd())return new Blob(t);throw new He(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _D(t){if(typeof atob>"u")throw nD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rl{constructor(e,n){this.data=e,this.contentType=n||null}}function wD(t,e){switch(t){case yn.RAW:return new rl(hb(e));case yn.BASE64:case yn.BASE64URL:return new rl(db(t,e));case yn.DATA_URL:return new rl(TD(e),ED(e))}throw Gd()}function hb(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function bD(t){let e;try{e=decodeURIComponent(t)}catch{throw Di(yn.DATA_URL,"Malformed data URL.")}return hb(e)}function db(t,e){switch(t){case yn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Di(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Di(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_D(e)}catch(r){throw r.message.includes("polyfill")?r:Di(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class fb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Di(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=ID(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function TD(t){const e=new fb(t);return e.base64?db(yn.BASE64,e.rest):bD(e.rest)}function ED(t){return new fb(t).contentType}function ID(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){let s=0,r="";Pm(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Pm(this.data_)){const s=this.data_,r=vD(s,e,n);return r===null?null:new is(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new is(s,!0)}}static getBlob(...e){if(Qd()){const n=e.map(s=>s instanceof is?s.data_:s);return new is(yD.apply(null,n))}else{const n=e.map(o=>Zd(o)?wD(yn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new is(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){let e;try{e=JSON.parse(t)}catch{return null}return cD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SD(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function mb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e){return e}class wt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||AD}}let ua=null;function kD(t){return!Zd(t)||t.length<2?t:mb(t)}function gb(){if(ua)return ua;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return kD(o)}const n=new wt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new wt("size");return r.xform=s,t.push(r),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),ua=t,ua}function RD(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Ut(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ND(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return RD(s,t),s}function yb(t,e,n){const s=pb(e);return s===null?null:ND(t,s,n)}function OD(t,e,n,s){const r=pb(e);if(r===null||!Zd(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Yd(d,n,s),g=lb({alt:"media",token:u});return p+g})[0]}function xD(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class vb{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){if(!t)throw Gd()}function DD(t,e){function n(s,r){const i=yb(t,r,e);return _b(i!==null),i}return n}function PD(t,e){function n(s,r){const i=yb(t,r,e);return _b(i!==null),OD(i,r,t.host,t._protocol)}return n}function wb(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=W1():r=K1():n.getStatus()===402?r=z1(t.bucket):n.getStatus()===403?r=G1(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function LD(t){const e=wb(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=H1(t.path)),i.serverResponse=r.serverResponse,i}return n}function MD(t,e,n){const s=e.fullServerUrl(),r=Yd(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new vb(r,i,PD(t,n),o);return a.errorHandler=LD(e),a}function UD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function FD(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=UD(null,e)),s}function BD(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let D=0;D<2;D++)b=b+Math.random().toString().slice(2);return b}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=FD(e,s,r),l=xD(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=is.getBlob(h,s,d);if(p===null)throw eD();const g={name:u.fullPath},y=Yd(i,t.host,t._protocol),I="POST",S=t.maxUploadRetryTime,_=new vb(y,I,DD(t,n),S);return _.urlParams=g,_.headers=o,_.body=p.uploadData(),_.errorHandler=wb(e),_}class $D{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw hi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VD extends $D{initXhr(){this.xhr_.responseType="text"}}function bb(){return new VD}/**
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
 */class sr{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sr(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mb(this._location.path)}get storage(){return this._service}get parent(){const e=CD(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new sr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sD(e)}}function jD(t,e,n){t._throwIfRoot("uploadBytes");const s=BD(t.storage,t._location,gb(),new is(e,!0),n);return t.storage.makeRequestWithTokens(s,bb).then(r=>({metadata:r,ref:t}))}function qD(t){t._throwIfRoot("getDownloadURL");const e=MD(t.storage,t._location,gb());return t.storage.makeRequestWithTokens(e,bb).then(n=>{if(n===null)throw tD();return n})}function HD(t,e){const n=SD(t._location.path,e),s=new Ut(t._location.bucket,n);return new sr(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){return/^[A-Za-z]+:\/\//.test(t)}function KD(t,e){return new sr(t,e)}function Tb(t,e){if(t instanceof Xd){const n=t;if(n._bucket==null)throw J1();const s=new sr(n,n._bucket);return e!=null?Tb(s,e):s}else return e!==void 0?HD(t,e):t}function WD(t,e){if(e&&zD(e)){if(t instanceof Xd)return KD(t,e);throw sh("To use ref(service, url), the first argument must be a Storage instance.")}else return Tb(t,e)}function Mm(t,e){const n=e==null?void 0:e[cb];return n==null?null:Ut.makeFromBucketSpec(n,t)}function GD(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Ny(r,t.app.options.projectId))}class Xd{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ab,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=j1,this._maxUploadRetryTime=q1,this._requests=new Set,r!=null?this._bucket=Ut.makeFromBucketSpec(r,this._host):this._bucket=Mm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=Mm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new rD(ub());{const o=mD(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Um="@firebase/storage",Fm="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="storage";function wM(t,e,n){return t=$e(t),jD(t,e,n)}function bM(t){return t=$e(t),qD(t)}function ZD(t,e){return t=$e(t),WD(t,e)}function QD(t=Fc(),e){t=$e(t);const s=Es(t,Eb).getImmediate({identifier:e}),r=ky("storage");return r&&YD(s,...r),s}function YD(t,e,n,s={}){GD(t,e,n,s)}function XD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Xd(n,s,r,e,Jr)}function JD(){an(new Wt(Eb,XD,"PUBLIC").setMultipleInstances(!0)),Rt(Um,Fm,""),Rt(Um,Fm,"esm2017")}JD();const eP={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d",measurementId:"G-0EWRT6BT1Y"},Eu=Uy(eP);VR(Eu);const ic=A1(Eu),qt=Ak(Eu),Jd="profiles",Bm=()=>{if(!qt.currentUser)throw new Error("Auth required");return sc(ic,Jd,qt.currentUser.uid)},tP=t=>v1(ic,Jd,t,"timeline"),TM=()=>{if(!qt.currentUser)throw new Error("Auth required");return tP(qt.currentUser.uid)},EM=t=>ZD(QD(Eu),t),nP=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],rh=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,ih=t=>t[rh(0,t.length-1)],$m=t=>{const e=[];for(let n=0;n<t;n++)e.push(ih(nP));return e.join(" ")},sP=t=>{const e=t.slice(1);return e?`#${(Number(`0x1${e}`)^16777215).toString(16).substr(1).toUpperCase()}`:""},rP=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}],iP="/assets/undraw_online_resume_re_ru7s-458e1bd5.svg",oP={Instagram:{link:""},Facebook:{link:""},YouTube:{link:""},Spotify:{link:""},Twitter:{link:""},GitHub:{link:""},LinkedIn:{link:""},TikTok:{link:""}},aP=()=>{const{author:t,quotes:e}=ih(rP);return`"${ih(e)}"    - ${t}`},cP=t=>{if(!t)throw new Error("Unauthorized profile creation attempt");return{userUid:t.uid,displayName:(t==null?void 0:t.displayName)??"",coverImg:iP,photoURL:(t==null?void 0:t.photoURL)??"",bgColor:"#FFE5E5",fontColor:"#000000",fontFamily:"merienda",shortBio:`${$m(rh(1,3))} What/Where ${$m(rh(1,3))}`,longBio:aP(),socialLinks:oP}};var Te;(function(t){t.assertEqual=r=>r;function e(r){}t.assertIs=e;function n(r){throw new Error}t.assertNever=n,t.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},t.getValidEnumValues=r=>{const i=t.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of i)o[a]=r[a];return t.objectValues(o)},t.objectValues=r=>t.objectKeys(r).map(function(i){return r[i]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},t.find=(r,i)=>{for(const o of r)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=s,t.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(Te||(Te={}));const F=Te.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),os=t=>{switch(typeof t){case"undefined":return F.undefined;case"string":return F.string;case"number":return isNaN(t)?F.nan:F.number;case"boolean":return F.boolean;case"function":return F.function;case"bigint":return F.bigint;case"symbol":return F.symbol;case"object":return Array.isArray(t)?F.array:t===null?F.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?F.promise:typeof Map<"u"&&t instanceof Map?F.map:typeof Set<"u"&&t instanceof Set?F.set:typeof Date<"u"&&t instanceof Date?F.date:F.object;default:return F.unknown}},x=Te.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),uP=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Ln extends Error{constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(n(o));else{let a=s,c=0;for(;c<o.path.length;){const u=o.path[c];c===o.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(o))):a[u]=a[u]||{_errors:[]},a=a[u],c++}}};return r(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,Te.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},s=[];for(const r of this.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(e(r))):s.push(e(r));return{formErrors:s,fieldErrors:n}}get formErrors(){return this.flatten()}}Ln.create=t=>new Ln(t);const oo=(t,e)=>{let n;switch(t.code){case x.invalid_type:t.received===F.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case x.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Te.jsonStringifyReplacer)}`;break;case x.unrecognized_keys:n=`Unrecognized key(s) in object: ${Te.joinValues(t.keys,", ")}`;break;case x.invalid_union:n="Invalid input";break;case x.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Te.joinValues(t.options)}`;break;case x.invalid_enum_value:n=`Invalid enum value. Expected ${Te.joinValues(t.options)}, received '${t.received}'`;break;case x.invalid_arguments:n="Invalid function arguments";break;case x.invalid_return_type:n="Invalid function return type";break;case x.invalid_date:n="Invalid date";break;case x.invalid_string:typeof t.validation=="object"?"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Te.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case x.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(t.minimum)}`:n="Invalid input";break;case x.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(t.maximum)}`:n="Invalid input";break;case x.custom:n="Invalid input";break;case x.invalid_intersection_types:n="Intersection results could not be merged";break;case x.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case x.not_finite:n="Number must be finite";break;default:n=e.defaultError,Te.assertNever(t)}return{message:n}};let Ib=oo;function lP(t){Ib=t}function oc(){return Ib}const ac=t=>{const{data:e,path:n,errorMaps:s,issueData:r}=t,i=[...n,...r.path||[]],o={...r,path:i};let a="";const c=s.filter(u=>!!u).slice().reverse();for(const u of c)a=u(o,{data:e,defaultError:a}).message;return{...r,path:i,message:r.message||a}},hP=[];function H(t,e){const n=ac({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,oc(),oo].filter(s=>!!s)});t.common.issues.push(n)}class It{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const s=[];for(const r of n){if(r.status==="aborted")return oe;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,n){const s=[];for(const r of n)s.push({key:await r.key,value:await r.value});return It.mergeObjectSync(e,s)}static mergeObjectSync(e,n){const s={};for(const r of n){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return oe;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const oe=Object.freeze({status:"aborted"}),Cb=t=>({status:"dirty",value:t}),_t=t=>({status:"valid",value:t}),oh=t=>t.status==="aborted",ah=t=>t.status==="dirty",cc=t=>t.status==="valid",uc=t=>typeof Promise<"u"&&t instanceof Promise;var pe;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(pe||(pe={}));class Cn{constructor(e,n,s,r){this.parent=e,this.data=n,this._path=s,this._key=r}get path(){return this._path.concat(this._key)}}const Vm=(t,e)=>{if(cc(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,error:new Ln(t.common.issues)}};function le(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:s,description:r}=t;if(e&&(n||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:s??a.defaultError}:{message:n??a.defaultError},description:r}}class de{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return os(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:os(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new It,ctx:{common:e.parent.common,data:e.data,parsedType:os(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(uc(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const s=this.safeParse(e,n);if(s.success)return s.data;throw s.error}safeParse(e,n){var s;const r={common:{issues:[],async:(s=n==null?void 0:n.async)!==null&&s!==void 0?s:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:os(e)},i=this._parseSync({data:e,path:r.path,parent:r});return Vm(r,i)}async parseAsync(e,n){const s=await this.safeParseAsync(e,n);if(s.success)return s.data;throw s.error}async safeParseAsync(e,n){const s={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:os(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(uc(r)?r:Promise.resolve(r));return Vm(s,i)}refine(e,n){const s=r=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(r):n;return this._refinement((r,i)=>{const o=e(r),a=()=>i.addIssue({code:x.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof n=="function"?n(s,r):n),!1))}_refinement(e){return new ln({schema:this,typeName:ee.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Mn.create(this,this._def)}nullable(){return or.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return rn.create(this,this._def)}promise(){return Gr.create(this,this._def)}or(e){return ho.create([this,e],this._def)}and(e){return fo.create(this,e,this._def)}transform(e){return new ln({...le(this._def),schema:this,typeName:ee.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new vo({...le(this._def),innerType:this,defaultValue:n,typeName:ee.ZodDefault})}brand(){return new Ab({typeName:ee.ZodBranded,type:this,...le(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new pc({...le(this._def),innerType:this,catchValue:n,typeName:ee.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Ho.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const dP=/^c[^\s-]{8,}$/i,fP=/^[a-z][a-z0-9]*$/,pP=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,mP=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/,gP=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class Hn extends de{constructor(){super(...arguments),this._regex=(e,n,s)=>this.refinement(r=>e.test(r),{validation:n,code:x.invalid_string,...pe.errToObj(s)}),this.nonempty=e=>this.min(1,pe.errToObj(e)),this.trim=()=>new Hn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==F.string){const i=this._getOrReturnCtx(e);return H(i,{code:x.invalid_type,expected:F.string,received:i.parsedType}),oe}const s=new It;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:x.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:x.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?H(r,{code:x.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&H(r,{code:x.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")mP.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"email",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")pP.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"uuid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")dP.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"cuid",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")fP.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"cuid2",code:x.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),H(r,{validation:"url",code:x.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"regex",code:x.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),H(r,{code:x.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),H(r,{code:x.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?gP(i).test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{code:x.invalid_string,validation:"datetime",message:i.message}),s.dirty()):Te.assertNever(i);return{status:s.value,value:e.data}}_addCheck(e){return new Hn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...pe.errToObj(e)})}url(e){return this._addCheck({kind:"url",...pe.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...pe.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...pe.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...pe.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...pe.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...pe.errToObj(n)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...pe.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...pe.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...pe.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...pe.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...pe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Hn.create=t=>{var e;return new Hn({checks:[],typeName:ee.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...le(t)})};function yP(t,e){const n=(t.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=n>s?n:s,i=parseInt(t.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return i%o/Math.pow(10,r)}class ws extends de{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==F.number){const i=this._getOrReturnCtx(e);return H(i,{code:x.invalid_type,expected:F.number,received:i.parsedType}),oe}let s;const r=new It;for(const i of this._def.checks)i.kind==="int"?Te.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),H(s,{code:x.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),H(s,{code:x.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),H(s,{code:x.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?yP(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),H(s,{code:x.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),H(s,{code:x.not_finite,message:i.message}),r.dirty()):Te.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,pe.toString(n))}gt(e,n){return this.setLimit("min",e,!1,pe.toString(n))}lte(e,n){return this.setLimit("max",e,!0,pe.toString(n))}lt(e,n){return this.setLimit("max",e,!1,pe.toString(n))}setLimit(e,n,s,r){return new ws({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:pe.toString(r)}]})}_addCheck(e){return new ws({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:pe.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:pe.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:pe.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:pe.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:pe.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:pe.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:pe.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Te.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(n===null||s.value>n)&&(n=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(n)&&Number.isFinite(e)}}ws.create=t=>new ws({checks:[],typeName:ee.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...le(t)});class ao extends de{_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==F.bigint){const s=this._getOrReturnCtx(e);return H(s,{code:x.invalid_type,expected:F.bigint,received:s.parsedType}),oe}return _t(e.data)}}ao.create=t=>{var e;return new ao({typeName:ee.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...le(t)})};class co extends de{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==F.boolean){const s=this._getOrReturnCtx(e);return H(s,{code:x.invalid_type,expected:F.boolean,received:s.parsedType}),oe}return _t(e.data)}}co.create=t=>new co({typeName:ee.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...le(t)});class rr extends de{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==F.date){const i=this._getOrReturnCtx(e);return H(i,{code:x.invalid_type,expected:F.date,received:i.parsedType}),oe}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return H(i,{code:x.invalid_date}),oe}const s=new It;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:x.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:x.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):Te.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new rr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:pe.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:pe.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}rr.create=t=>new rr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:ee.ZodDate,...le(t)});class lc extends de{_parse(e){if(this._getType(e)!==F.symbol){const s=this._getOrReturnCtx(e);return H(s,{code:x.invalid_type,expected:F.symbol,received:s.parsedType}),oe}return _t(e.data)}}lc.create=t=>new lc({typeName:ee.ZodSymbol,...le(t)});class uo extends de{_parse(e){if(this._getType(e)!==F.undefined){const s=this._getOrReturnCtx(e);return H(s,{code:x.invalid_type,expected:F.undefined,received:s.parsedType}),oe}return _t(e.data)}}uo.create=t=>new uo({typeName:ee.ZodUndefined,...le(t)});class lo extends de{_parse(e){if(this._getType(e)!==F.null){const s=this._getOrReturnCtx(e);return H(s,{code:x.invalid_type,expected:F.null,received:s.parsedType}),oe}return _t(e.data)}}lo.create=t=>new lo({typeName:ee.ZodNull,...le(t)});class Wr extends de{constructor(){super(...arguments),this._any=!0}_parse(e){return _t(e.data)}}Wr.create=t=>new Wr({typeName:ee.ZodAny,...le(t)});class Qs extends de{constructor(){super(...arguments),this._unknown=!0}_parse(e){return _t(e.data)}}Qs.create=t=>new Qs({typeName:ee.ZodUnknown,...le(t)});class zn extends de{_parse(e){const n=this._getOrReturnCtx(e);return H(n,{code:x.invalid_type,expected:F.never,received:n.parsedType}),oe}}zn.create=t=>new zn({typeName:ee.ZodNever,...le(t)});class hc extends de{_parse(e){if(this._getType(e)!==F.undefined){const s=this._getOrReturnCtx(e);return H(s,{code:x.invalid_type,expected:F.void,received:s.parsedType}),oe}return _t(e.data)}}hc.create=t=>new hc({typeName:ee.ZodVoid,...le(t)});class rn extends de{_parse(e){const{ctx:n,status:s}=this._processInputParams(e),r=this._def;if(n.parsedType!==F.array)return H(n,{code:x.invalid_type,expected:F.array,received:n.parsedType}),oe;if(r.exactLength!==null){const o=n.data.length>r.exactLength.value,a=n.data.length<r.exactLength.value;(o||a)&&(H(n,{code:o?x.too_big:x.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&n.data.length<r.minLength.value&&(H(n,{code:x.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&n.data.length>r.maxLength.value&&(H(n,{code:x.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new Cn(n,o,n.path,a)))).then(o=>It.mergeArray(s,o));const i=[...n.data].map((o,a)=>r.type._parseSync(new Cn(n,o,n.path,a)));return It.mergeArray(s,i)}get element(){return this._def.type}min(e,n){return new rn({...this._def,minLength:{value:e,message:pe.toString(n)}})}max(e,n){return new rn({...this._def,maxLength:{value:e,message:pe.toString(n)}})}length(e,n){return new rn({...this._def,exactLength:{value:e,message:pe.toString(n)}})}nonempty(e){return this.min(1,e)}}rn.create=(t,e)=>new rn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ee.ZodArray,...le(e)});var dc;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(dc||(dc={}));function wr(t){if(t instanceof Fe){const e={};for(const n in t.shape){const s=t.shape[n];e[n]=Mn.create(wr(s))}return new Fe({...t._def,shape:()=>e})}else return t instanceof rn?rn.create(wr(t.element)):t instanceof Mn?Mn.create(wr(t.unwrap())):t instanceof or?or.create(wr(t.unwrap())):t instanceof Sn?Sn.create(t.items.map(e=>wr(e))):t}class Fe extends de{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Te.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==F.object){const u=this._getOrReturnCtx(e);return H(u,{code:x.invalid_type,expected:F.object,received:u.parsedType}),oe}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof zn&&this._def.unknownKeys==="strip"))for(const u in r.data)o.includes(u)||a.push(u);const c=[];for(const u of o){const l=i[u],h=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new Cn(r,h,r.path,u)),alwaysSet:u in r.data})}if(this._def.catchall instanceof zn){const u=this._def.unknownKeys;if(u==="passthrough")for(const l of a)c.push({key:{status:"valid",value:l},value:{status:"valid",value:r.data[l]}});else if(u==="strict")a.length>0&&(H(r,{code:x.unrecognized_keys,keys:a}),s.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const l of a){const h=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new Cn(r,h,r.path,l)),alwaysSet:l in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const u=[];for(const l of c){const h=await l.key;u.push({key:h,value:await l.value,alwaysSet:l.alwaysSet})}return u}).then(u=>It.mergeObjectSync(s,u)):It.mergeObjectSync(s,c)}get shape(){return this._def.shape()}strict(e){return pe.errToObj,new Fe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,s)=>{var r,i,o,a;const c=(o=(i=(r=this._def).errorMap)===null||i===void 0?void 0:i.call(r,n,s).message)!==null&&o!==void 0?o:s.defaultError;return n.code==="unrecognized_keys"?{message:(a=pe.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Fe({...this._def,unknownKeys:"strip"})}passthrough(){return new Fe({...this._def,unknownKeys:"passthrough"})}extend(e){return new Fe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Fe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>dc.mergeShapes(this._def.shape(),e._def.shape()),typeName:ee.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Fe({...this._def,catchall:e})}pick(e){const n={};return Te.objectKeys(e).forEach(s=>{e[s]&&this.shape[s]&&(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}omit(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{e[s]||(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}deepPartial(){return wr(this)}partial(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{const r=this.shape[s];e&&!e[s]?n[s]=r:n[s]=r.optional()}),new Fe({...this._def,shape:()=>n})}required(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{if(e&&!e[s])n[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof Mn;)i=i._def.innerType;n[s]=i}}),new Fe({...this._def,shape:()=>n})}keyof(){return Sb(Te.objectKeys(this.shape))}}Fe.create=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strip",catchall:zn.create(),typeName:ee.ZodObject,...le(e)});Fe.strictCreate=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strict",catchall:zn.create(),typeName:ee.ZodObject,...le(e)});Fe.lazycreate=(t,e)=>new Fe({shape:t,unknownKeys:"strip",catchall:zn.create(),typeName:ee.ZodObject,...le(e)});class ho extends de{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.options;function r(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new Ln(a.ctx.common.issues));return H(n,{code:x.invalid_union,unionErrors:o}),oe}if(n.common.async)return Promise.all(s.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const c of s){const u={...n,common:{...n.common,issues:[]},parent:null},l=c._parseSync({data:n.data,path:n.path,parent:u});if(l.status==="valid")return l;l.status==="dirty"&&!i&&(i={result:l,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new Ln(c));return H(n,{code:x.invalid_union,unionErrors:a}),oe}}get options(){return this._def.options}}ho.create=(t,e)=>new ho({options:t,typeName:ee.ZodUnion,...le(e)});const Ia=t=>t instanceof mo?Ia(t.schema):t instanceof ln?Ia(t.innerType()):t instanceof go?[t.value]:t instanceof bs?t.options:t instanceof yo?Object.keys(t.enum):t instanceof vo?Ia(t._def.innerType):t instanceof uo?[void 0]:t instanceof lo?[null]:null;class Iu extends de{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==F.object)return H(n,{code:x.invalid_type,expected:F.object,received:n.parsedType}),oe;const s=this.discriminator,r=n.data[s],i=this.optionsMap.get(r);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(H(n,{code:x.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),oe)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,s){const r=new Map;for(const i of n){const o=Ia(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,i)}}return new Iu({typeName:ee.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:r,...le(s)})}}function ch(t,e){const n=os(t),s=os(e);if(t===e)return{valid:!0,data:t};if(n===F.object&&s===F.object){const r=Te.objectKeys(e),i=Te.objectKeys(t).filter(a=>r.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=ch(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===F.array&&s===F.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=ch(o,a);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return n===F.date&&s===F.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class fo extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=(i,o)=>{if(oh(i)||oh(o))return oe;const a=ch(i.value,o.value);return a.valid?((ah(i)||ah(o))&&n.dirty(),{status:n.value,value:a.data}):(H(s,{code:x.invalid_intersection_types}),oe)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}fo.create=(t,e,n)=>new fo({left:t,right:e,typeName:ee.ZodIntersection,...le(n)});class Sn extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.array)return H(s,{code:x.invalid_type,expected:F.array,received:s.parsedType}),oe;if(s.data.length<this._def.items.length)return H(s,{code:x.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),oe;!this._def.rest&&s.data.length>this._def.items.length&&(H(s,{code:x.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...s.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new Cn(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>It.mergeArray(n,o)):It.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new Sn({...this._def,rest:e})}}Sn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Sn({items:t,typeName:ee.ZodTuple,rest:null,...le(e)})};class po extends de{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.object)return H(s,{code:x.invalid_type,expected:F.object,received:s.parsedType}),oe;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in s.data)r.push({key:i._parse(new Cn(s,a,s.path,a)),value:o._parse(new Cn(s,s.data[a],s.path,a))});return s.common.async?It.mergeObjectAsync(n,r):It.mergeObjectSync(n,r)}get element(){return this._def.valueType}static create(e,n,s){return n instanceof de?new po({keyType:e,valueType:n,typeName:ee.ZodRecord,...le(s)}):new po({keyType:Hn.create(),valueType:e,typeName:ee.ZodRecord,...le(n)})}}class fc extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.map)return H(s,{code:x.invalid_type,expected:F.map,received:s.parsedType}),oe;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,c],u)=>({key:r._parse(new Cn(s,a,s.path,[u,"key"])),value:i._parse(new Cn(s,c,s.path,[u,"value"]))}));if(s.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const u=await c.key,l=await c.value;if(u.status==="aborted"||l.status==="aborted")return oe;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const u=c.key,l=c.value;if(u.status==="aborted"||l.status==="aborted")return oe;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}}}}fc.create=(t,e,n)=>new fc({valueType:e,keyType:t,typeName:ee.ZodMap,...le(n)});class ir extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.set)return H(s,{code:x.invalid_type,expected:F.set,received:s.parsedType}),oe;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(H(s,{code:x.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),n.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(H(s,{code:x.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const u=new Set;for(const l of c){if(l.status==="aborted")return oe;l.status==="dirty"&&n.dirty(),u.add(l.value)}return{status:n.value,value:u}}const a=[...s.data.values()].map((c,u)=>i._parse(new Cn(s,c,s.path,u)));return s.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new ir({...this._def,minSize:{value:e,message:pe.toString(n)}})}max(e,n){return new ir({...this._def,maxSize:{value:e,message:pe.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}ir.create=(t,e)=>new ir({valueType:t,minSize:null,maxSize:null,typeName:ee.ZodSet,...le(e)});class Or extends de{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==F.function)return H(n,{code:x.invalid_type,expected:F.function,received:n.parsedType}),oe;function s(a,c){return ac({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,oc(),oo].filter(u=>!!u),issueData:{code:x.invalid_arguments,argumentsError:c}})}function r(a,c){return ac({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,oc(),oo].filter(u=>!!u),issueData:{code:x.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof Gr?_t(async(...a)=>{const c=new Ln([]),u=await this._def.args.parseAsync(a,i).catch(d=>{throw c.addIssue(s(a,d)),c}),l=await o(...u);return await this._def.returns._def.type.parseAsync(l,i).catch(d=>{throw c.addIssue(r(l,d)),c})}):_t((...a)=>{const c=this._def.args.safeParse(a,i);if(!c.success)throw new Ln([s(a,c.error)]);const u=o(...c.data),l=this._def.returns.safeParse(u,i);if(!l.success)throw new Ln([r(u,l.error)]);return l.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Or({...this._def,args:Sn.create(e).rest(Qs.create())})}returns(e){return new Or({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,s){return new Or({args:e||Sn.create([]).rest(Qs.create()),returns:n||Qs.create(),typeName:ee.ZodFunction,...le(s)})}}class mo extends de{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}mo.create=(t,e)=>new mo({getter:t,typeName:ee.ZodLazy,...le(e)});class go extends de{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return H(n,{received:n.data,code:x.invalid_literal,expected:this._def.value}),oe}return{status:"valid",value:e.data}}get value(){return this._def.value}}go.create=(t,e)=>new go({value:t,typeName:ee.ZodLiteral,...le(e)});function Sb(t,e){return new bs({values:t,typeName:ee.ZodEnum,...le(e)})}class bs extends de{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),s=this._def.values;return H(n,{expected:Te.joinValues(s),received:n.parsedType,code:x.invalid_type}),oe}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),s=this._def.values;return H(n,{received:n.data,code:x.invalid_enum_value,options:s}),oe}return _t(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return bs.create(e)}exclude(e){return bs.create(this.options.filter(n=>!e.includes(n)))}}bs.create=Sb;class yo extends de{_parse(e){const n=Te.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==F.string&&s.parsedType!==F.number){const r=Te.objectValues(n);return H(s,{expected:Te.joinValues(r),received:s.parsedType,code:x.invalid_type}),oe}if(n.indexOf(e.data)===-1){const r=Te.objectValues(n);return H(s,{received:s.data,code:x.invalid_enum_value,options:r}),oe}return _t(e.data)}get enum(){return this._def.values}}yo.create=(t,e)=>new yo({values:t,typeName:ee.ZodNativeEnum,...le(e)});class Gr extends de{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==F.promise&&n.common.async===!1)return H(n,{code:x.invalid_type,expected:F.promise,received:n.parsedType}),oe;const s=n.parsedType===F.promise?n.data:Promise.resolve(n.data);return _t(s.then(r=>this._def.type.parseAsync(r,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Gr.create=(t,e)=>new Gr({type:t,typeName:ee.ZodPromise,...le(e)});class ln extends de{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ee.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=this._def.effect||null;if(r.type==="preprocess"){const o=r.transform(s.data);return s.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:s.path,parent:s})):this._def.schema._parseSync({data:o,path:s.path,parent:s})}const i={addIssue:o=>{H(s,o),o.fatal?n.abort():n.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="refinement"){const o=a=>{const c=r.refinement(a,i);if(s.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?oe:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?oe:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!cc(o))return o;const a=r.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>cc(o)?Promise.resolve(r.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);Te.assertNever(r)}}ln.create=(t,e,n)=>new ln({schema:t,typeName:ee.ZodEffects,effect:e,...le(n)});ln.createWithPreprocess=(t,e,n)=>new ln({schema:e,effect:{type:"preprocess",transform:t},typeName:ee.ZodEffects,...le(n)});class Mn extends de{_parse(e){return this._getType(e)===F.undefined?_t(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Mn.create=(t,e)=>new Mn({innerType:t,typeName:ee.ZodOptional,...le(e)});class or extends de{_parse(e){return this._getType(e)===F.null?_t(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}or.create=(t,e)=>new or({innerType:t,typeName:ee.ZodNullable,...le(e)});class vo extends de{_parse(e){const{ctx:n}=this._processInputParams(e);let s=n.data;return n.parsedType===F.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}vo.create=(t,e)=>new vo({innerType:t,typeName:ee.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...le(e)});class pc extends de{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n,common:{...n.common,issues:[]}}});return uc(s)?s.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue()})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue()}}removeCatch(){return this._def.innerType}}pc.create=(t,e)=>new pc({innerType:t,typeName:ee.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...le(e)});class mc extends de{_parse(e){if(this._getType(e)!==F.nan){const s=this._getOrReturnCtx(e);return H(s,{code:x.invalid_type,expected:F.nan,received:s.parsedType}),oe}return{status:"valid",value:e.data}}}mc.create=t=>new mc({typeName:ee.ZodNaN,...le(t)});const vP=Symbol("zod_brand");class Ab extends de{_parse(e){const{ctx:n}=this._processInputParams(e),s=n.data;return this._def.type._parse({data:s,path:n.path,parent:n})}unwrap(){return this._def.type}}class Ho extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?oe:i.status==="dirty"?(n.dirty(),Cb(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?oe:r.status==="dirty"?(n.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,n){return new Ho({in:e,out:n,typeName:ee.ZodPipeline})}}const kb=(t,e={},n)=>t?Wr.create().superRefine((s,r)=>{if(!t(s)){const i=typeof e=="function"?e(s):e,o=typeof i=="string"?{message:i}:i;r.addIssue({code:"custom",...o,fatal:n})}}):Wr.create(),_P={object:Fe.lazycreate};var ee;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(ee||(ee={}));const wP=(t,e={message:`Input not instance of ${t.name}`})=>kb(n=>n instanceof t,e,!0),Rb=Hn.create,Nb=ws.create,bP=mc.create,TP=ao.create,Ob=co.create,EP=rr.create,IP=lc.create,CP=uo.create,SP=lo.create,AP=Wr.create,kP=Qs.create,RP=zn.create,NP=hc.create,OP=rn.create,xP=Fe.create,DP=Fe.strictCreate,PP=ho.create,LP=Iu.create,MP=fo.create,UP=Sn.create,FP=po.create,BP=fc.create,$P=ir.create,VP=Or.create,jP=mo.create,qP=go.create,HP=bs.create,zP=yo.create,KP=Gr.create,jm=ln.create,WP=Mn.create,GP=or.create,ZP=ln.createWithPreprocess,QP=Ho.create,YP=()=>Rb().optional(),XP=()=>Nb().optional(),JP=()=>Ob().optional(),eL={string:t=>Hn.create({...t,coerce:!0}),number:t=>ws.create({...t,coerce:!0}),boolean:t=>co.create({...t,coerce:!0}),bigint:t=>ao.create({...t,coerce:!0}),date:t=>rr.create({...t,coerce:!0})},tL=oe;var Xe=Object.freeze({__proto__:null,defaultErrorMap:oo,setErrorMap:lP,getErrorMap:oc,makeIssue:ac,EMPTY_PATH:hP,addIssueToContext:H,ParseStatus:It,INVALID:oe,DIRTY:Cb,OK:_t,isAborted:oh,isDirty:ah,isValid:cc,isAsync:uc,get util(){return Te},ZodParsedType:F,getParsedType:os,ZodType:de,ZodString:Hn,ZodNumber:ws,ZodBigInt:ao,ZodBoolean:co,ZodDate:rr,ZodSymbol:lc,ZodUndefined:uo,ZodNull:lo,ZodAny:Wr,ZodUnknown:Qs,ZodNever:zn,ZodVoid:hc,ZodArray:rn,get objectUtil(){return dc},ZodObject:Fe,ZodUnion:ho,ZodDiscriminatedUnion:Iu,ZodIntersection:fo,ZodTuple:Sn,ZodRecord:po,ZodMap:fc,ZodSet:ir,ZodFunction:Or,ZodLazy:mo,ZodLiteral:go,ZodEnum:bs,ZodNativeEnum:yo,ZodPromise:Gr,ZodEffects:ln,ZodTransformer:ln,ZodOptional:Mn,ZodNullable:or,ZodDefault:vo,ZodCatch:pc,ZodNaN:mc,BRAND:vP,ZodBranded:Ab,ZodPipeline:Ho,custom:kb,Schema:de,ZodSchema:de,late:_P,get ZodFirstPartyTypeKind(){return ee},coerce:eL,any:AP,array:OP,bigint:TP,boolean:Ob,date:EP,discriminatedUnion:LP,effect:jm,enum:HP,function:VP,instanceof:wP,intersection:MP,lazy:jP,literal:qP,map:BP,nan:bP,nativeEnum:zP,never:RP,null:SP,nullable:GP,number:Nb,object:xP,oboolean:JP,onumber:XP,optional:WP,ostring:YP,pipeline:QP,preprocess:ZP,promise:KP,record:FP,set:$P,strictObject:DP,string:Rb,symbol:IP,transformer:jm,tuple:UP,undefined:CP,union:PP,unknown:kP,void:NP,NEVER:tL,ZodIssueCode:x,quotelessJson:uP,ZodError:Ln});const nL=Xe.enum(["Unknown","Facebook","Instagram","YouTube","Spotify","Twitter","LinkedIn","GitHub","TikTok"]),sL=Xe.object({link:Xe.string()}),qm=Xe.object({userUid:Xe.string(),userUri:Xe.string().optional(),displayName:Xe.string(),photoURL:Xe.string(),coverImg:Xe.string(),shortBio:Xe.string(),bgColor:Xe.string(),fontColor:Xe.string().optional(),fontFamily:Xe.string().optional(),longBio:Xe.string(),socialLinks:Xe.record(nL,sL)});var rL=Object.defineProperty,Hm=Object.getOwnPropertySymbols,iL=Object.prototype.hasOwnProperty,oL=Object.prototype.propertyIsEnumerable,zm=(t,e,n)=>e in t?rL(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xb=(t,e)=>{for(var n in e||(e={}))iL.call(e,n)&&zm(t,n,e[n]);if(Hm)for(var n of Hm(e))oL.call(e,n)&&zm(t,n,e[n]);return t},Cu=t=>typeof t=="function",Su=t=>typeof t=="string",Db=t=>Su(t)&&t.trim().length>0,aL=t=>typeof t=="number",js=t=>typeof t>"u",_o=t=>typeof t=="object"&&t!==null,cL=t=>bn(t,"tag")&&Db(t.tag),Pb=t=>window.TouchEvent&&t instanceof TouchEvent,Lb=t=>bn(t,"component")&&Mb(t.component),uL=t=>Cu(t)||_o(t),Mb=t=>!js(t)&&(Su(t)||uL(t)||Lb(t)),Km=t=>_o(t)&&["height","width","right","left","top","bottom"].every(e=>aL(t[e])),bn=(t,e)=>(_o(t)||Cu(t))&&e in t,lL=(t=>()=>t++)(0);function il(t){return Pb(t)?t.targetTouches[0].clientX:t.clientX}function Wm(t){return Pb(t)?t.targetTouches[0].clientY:t.clientY}var hL=t=>{js(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},zo=t=>Lb(t)?zo(t.component):cL(t)?An({render(){return t}}):typeof t=="string"?t:ye(us(t)),dL=t=>{if(typeof t=="string")return t;const e=bn(t,"props")&&_o(t.props)?t.props:{},n=bn(t,"listeners")&&_o(t.listeners)?t.listeners:{};return{component:zo(t),props:e,listeners:n}},fL=()=>typeof window<"u",ef=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},pL=t=>["on","off","emit"].every(e=>bn(t,e)&&Cu(t[e])),Pt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Pt||(Pt={}));var gc;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(gc||(gc={}));var Lt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Lt||(Lt={}));var tn="Vue-Toastification",Jt={type:{type:String,default:Pt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Ub={type:Jt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Ca={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Jt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},uh={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Fb={transition:{type:[Object,String],default:`${tn}__bounce`}},mL={position:{type:String,default:gc.TOP_RIGHT},draggable:Jt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Jt.trueBoolean,pauseOnHover:Jt.trueBoolean,closeOnClick:Jt.trueBoolean,timeout:uh.timeout,hideProgressBar:uh.hideProgressBar,toastClassName:Jt.classNames,bodyClassName:Jt.classNames,icon:Ub.customIcon,closeButton:Ca.component,closeButtonClassName:Ca.classNames,showCloseButtonOnHover:Ca.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new ef}},gL={id:{type:[String,Number],required:!0,default:0},type:Jt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},yL={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Jt.trueBoolean,maxToasts:{type:Number,default:20},transition:Fb.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Jt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Un={CORE_TOAST:mL,TOAST:gL,CONTAINER:yL,PROGRESS_BAR:uh,ICON:Ub,TRANSITION:Fb,CLOSE_BUTTON:Ca},Bb=An({name:"VtProgressBar",props:Un.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${tn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function vL(t,e){return Be(),jt("div",{style:wo(t.style),class:ps(t.cpClass)},null,6)}Bb.render=vL;var _L=Bb,$b=An({name:"VtCloseButton",props:Un.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?zo(this.component):"button"},classes(){const t=[`${tn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),wL=Nc(" × ");function bL(t,e){return Be(),gn(Nh(t.buttonComponent),Oc({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Eo(()=>[wL]),_:1},16,["aria-label","class"])}$b.render=bL;var TL=$b,Vb={},EL={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},IL=Ts("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),CL=[IL];function SL(t,e){return Be(),jt("svg",EL,CL)}Vb.render=SL;var AL=Vb,jb={},kL={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},RL=Ts("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),NL=[RL];function OL(t,e){return Be(),jt("svg",kL,NL)}jb.render=OL;var Gm=jb,qb={},xL={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},DL=Ts("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),PL=[DL];function LL(t,e){return Be(),jt("svg",xL,PL)}qb.render=LL;var ML=qb,Hb={},UL={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},FL=Ts("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),BL=[FL];function $L(t,e){return Be(),jt("svg",UL,BL)}Hb.render=$L;var VL=Hb,zb=An({name:"VtIcon",props:Un.ICON,computed:{customIconChildren(){return bn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Su(this.customIcon)?this.trimValue(this.customIcon):bn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return bn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Mb(this.customIcon)?zo(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Pt.DEFAULT]:Gm,[Pt.INFO]:Gm,[Pt.SUCCESS]:AL,[Pt.ERROR]:VL,[Pt.WARNING]:ML}[this.type]},iconClasses(){const t=[`${tn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Db(t)?t.trim():e}}});function jL(t,e){return Be(),gn(Nh(t.component),{class:ps(t.iconClasses)},{default:Eo(()=>[Nc(Xm(t.customIconChildren),1)]),_:1},8,["class"])}zb.render=jL;var qL=zb,Kb=An({name:"VtToast",components:{ProgressBar:_L,CloseButton:TL,Icon:qL},inheritAttrs:!1,props:Object.assign({},Un.CORE_TOAST,Un.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${tn}__toast`,`${tn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${tn}__toast--rtl`),t},bodyClasses(){return[`${tn}__toast-${Su(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Km(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:bn,getVueComponentFromObj:zo,closeToast(){this.eventBus.emit(Lt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:il(t),y:Wm(t)},this.dragStart=il(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:il(t),y:Wm(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Km(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),HL=["role"];function zL(t,e){const n=wi("Icon"),s=wi("CloseButton"),r=wi("ProgressBar");return Be(),jt("div",{class:ps(t.classes),style:wo(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(Be(),gn(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Nu("v-if",!0),Ts("div",{role:t.accessibility.toastRole||"alert",class:ps(t.bodyClasses)},[typeof t.content=="string"?(Be(),jt(at,{key:0},[Nc(Xm(t.content),1)],2112)):(Be(),gn(Nh(t.getVueComponentFromObj(t.content)),Oc({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},AE(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,HL),t.closeButton?(Be(),gn(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:M0(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Nu("v-if",!0),t.timeout?(Be(),gn(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Nu("v-if",!0)],38)}Kb.render=zL;var KL=Kb,Wb=An({name:"VtTransition",props:Un.TRANSITION,emits:["leave"],methods:{hasProp:bn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function WL(t,e){return Be(),gn(k0,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Eo(()=>[SE(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Wb.render=WL;var GL=Wb,Gb=An({name:"VueToastification",devtools:{hide:!0},components:{Toast:KL,VtTransition:GL},props:Object.assign({},Un.CORE_TOAST,Un.CONTAINER,Un.TRANSITION),data(){return{count:0,positions:Object.values(gc),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Lt.ADD,this.addToast),t.on(Lt.CLEAR,this.clearToasts),t.on(Lt.DISMISS,this.dismissToast),t.on(Lt.UPDATE,this.updateToast),t.on(Lt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){Cu(t)&&(t=await t()),hL(this.$el),t.appendChild(this.$el)},setToast(t){js(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=dL(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!js(e)&&!js(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){js(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${tn}__container`,t].concat(this.defaults.containerClassName)}}});function ZL(t,e){const n=wi("Toast"),s=wi("VtTransition");return Be(),jt("div",null,[(Be(!0),jt(at,null,_f(t.positions,r=>(Be(),jt("div",{key:r},[Je(s,{transition:t.defaults.transition,class:ps(t.getClasses(r))},{default:Eo(()=>[(Be(!0),jt(at,null,_f(t.getPositionToasts(r),i=>(Be(),gn(n,Oc({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}Gb.render=ZL;var QL=Gb,Zm=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new ef;e&&Ec(()=>{const i=ay(QL,xb({},t)),o=i.mount(document.createElement("div")),a=t.onMounted;if(js(a)||a(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${tn}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const a=Object.assign({},{id:lL(),type:Pt.DEFAULT},o,{content:i});return n.emit(Lt.ADD,a),a.id};s.clear=()=>n.emit(Lt.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Lt.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Lt.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const u=Object.assign({},a,{content:o});n.emit(Lt.UPDATE,{id:i,options:u,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Pt.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Pt.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Pt.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Pt.WARNING})),s},YL=()=>{const t=()=>console.warn(`[${tn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function lh(t){return fL()?pL(t)?Zm({eventBus:t},!1):Zm(t,!0):YL()}var Zb=Symbol("VueToastification"),Qb=new ef,XL=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=lh(xb({eventBus:Qb},e));t.provide(Zb,n)},JL=t=>{if(t)return lh(t);const e=xc()?sn(Zb,void 0):void 0;return e||lh(Qb)},eM=XL;const di=JL(),Qm=K0("profile",{state:()=>({profile:null}),getters:{isOwnProfile({profile:t}){var e,n;return(e=qt.currentUser)!=null&&e.uid?((n=qt.currentUser)==null?void 0:n.uid)===(t==null?void 0:t.userUid):!1},invertedBgColor:({profile:t})=>t!=null&&t.bgColor?sP(t.bgColor):"black"},actions:{updateProfile(t){if(!this.profile||!this.isOwnProfile)throw new Error("Unathorized");const e=Object.keys(t).reduce((n,s)=>JSON.stringify(t[s])===JSON.stringify(this.profile?this.profile[s]:void 0)?n:{...n,[s]:t[s]},{});this.profile={...this.profile,...t},!(Object.keys(e).length<1)&&$1(Bm(),e).then(()=>di("Changes saved")).catch(()=>di("Error saving changes"))},async loadProfile(t){try{const e=sc(ic,Jd,t),n=await Dm(e);if(!n.exists()){this.profile=null;return}this.profile=qm.parse(n.data())}catch{di("Error loading profile"),this.profile=null}},async loadPNS(t){const e=sc(ic,"ib_dns",t),n=await Dm(e);if(!n.exists()){this.profile=null;return}const{uid:s}=n.data();if(!s){this.profile=null;return}return this.loadProfile(s)},async createOwnProfile(){var t;try{if(!((t=qt.currentUser)!=null&&t.uid))return;const e=qm.parse(cP(qt.currentUser));await B1(Bm(),e),this.profile=e,di("Profile created");return}catch{di("Error creating profile")}}}}),qs=WI({history:lI("/"),routes:[{path:"/",name:"Login",component:()=>ea(()=>import("./Login-e56224bf.js"),["assets/Login-e56224bf.js","assets/Login-793940d9.css"]),beforeEnter:async(t,e,n)=>{var s;(s=qt.currentUser)!=null&&s.uid&&(await qs.replace(`/u/${qt.currentUser.uid}`),window.location.reload()),n()}},{path:"/u/:profileUid",name:"Profile",props:!1,component:()=>ea(()=>import("./Profile-4db35e64.js"),["assets/Profile-4db35e64.js","assets/Profile-0d93f356.css"]),beforeEnter:async(t,e,n)=>{var i,o,a;const s=Qm(),r=t.params.profileUid;await s.loadProfile(r),s.profile||(r===((i=qt.currentUser)==null?void 0:i.uid)?await s.createOwnProfile():await qs.replace("/404")),(o=s.profile)!=null&&o.userUri&&await qs.replace(`/profile/${(a=s.profile)==null?void 0:a.userUri}`),n()}},{path:"/profile/:profileURI",name:"PNS Profile",props:!1,component:()=>ea(()=>import("./Profile-4db35e64.js"),["assets/Profile-4db35e64.js","assets/Profile-0d93f356.css"]),beforeEnter:async(t,e,n)=>{var i;const s=Qm(),r=t.params.profileURI;r!==((i=s.profile)==null?void 0:i.userUri)&&await s.loadPNS(r),s.profile||await qs.replace("/404"),n()}},{path:"/:pathMatch(.*)",name:"Error404",component:()=>ea(()=>import("./Error404-f1a37e42.js"),["assets/Error404-f1a37e42.js","assets/Error404-4d995ba2.css"])}]});const tM=Xe.object({uid:Xe.string(),displayName:Xe.string().nullable(),photoURL:Xe.string().nullable()}).nullable(),nM=V0(),sM={timeout:2e3,maxToasts:2};let ol;pA(qt,t=>{const e=tM.parse(t);ol?e!=null&&e.uid?qs.replace(`/u/${e.uid}`):qs.replace("/"):(ol=ay(JI),ol.use(qs).use(nM).use(eM,sM).mount("#app"))});export{vi as $,SE as A,EM as B,wM as C,bM as D,Dt as E,ts as F,ns as G,_f as H,Nc as I,Eo as J,ps as K,wi as L,oM as M,uM as N,hM as O,Xe as P,M0 as Q,og as R,nL as S,rs as T,fT as U,xc as V,Ec as W,iM as X,JL as Y,tP as Z,XI as _,Be as a,yM as a0,mM as a1,gM as a2,_M as a3,TM as a4,Pt as a5,vM as a6,rM as a7,lM as a8,Ts as b,jt as c,An as d,cM as e,qt as f,ih as g,nE as h,ey as i,Qm as j,gn as k,Je as l,Nu as m,wo as n,Pg as o,tE as p,rP as q,Th as r,fM as s,Xm as t,us as u,aM as v,at as w,dM as x,qs as y,Oc as z};
