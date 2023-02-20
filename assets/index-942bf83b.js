(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Gl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function lo(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ve(s)?eb(s):lo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ve(t))return t;if(Re(t))return t}}const Xw=/;(?![^(]*\))/g,Yw=/:([^]+)/,Jw=/\/\*.*?\*\//gs;function eb(t){const e={};return t.replace(Jw,"").split(Xw).forEach(n=>{if(n){const s=n.split(Yw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function hs(t){let e="";if(Ve(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=hs(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nb=Gl(tb);function Cm(t){return!!t||t===""}function sb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=cc(t[s],e[s]);return n}function cc(t,e){if(t===e)return!0;let n=$d(t),s=$d(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Si(t),s=Si(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?sb(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!cc(t[o],e[o]))return!1}}return String(t)===String(e)}function rb(t,e){return t.findIndex(n=>cc(n,e))}const Sm=t=>Ve(t)?t:t==null?"":Y(t)||Re(t)&&(t.toString===Am||!ce(t.toString))?JSON.stringify(t,km,2):String(t),km=(t,e)=>e&&e.__v_isRef?km(t,e.value):yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:lc(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!Y(e)&&!Rm(e)?String(e):e,De={},gr=[],Xt=()=>{},ib=()=>!1,ob=/^on[^a-z]/,uc=t=>ob.test(t),Zl=t=>t.startsWith("onUpdate:"),rt=Object.assign,Ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ab=Object.prototype.hasOwnProperty,we=(t,e)=>ab.call(t,e),Y=Array.isArray,yr=t=>ho(t)==="[object Map]",lc=t=>ho(t)==="[object Set]",$d=t=>ho(t)==="[object Date]",ce=t=>typeof t=="function",Ve=t=>typeof t=="string",Si=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Xl=t=>Re(t)&&ce(t.then)&&ce(t.catch),Am=Object.prototype.toString,ho=t=>Am.call(t),cb=t=>ho(t).slice(8,-1),Rm=t=>ho(t)==="[object Object]",Yl=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sa=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ub=/-(\w)/g,yn=hc(t=>t.replace(ub,(e,n)=>n?n.toUpperCase():"")),lb=/\B([A-Z])/g,jr=hc(t=>t.replace(lb,"-$1").toLowerCase()),dc=hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ra=hc(t=>t?`on${dc(t)}`:""),ki=(t,e)=>!Object.is(t,e),ia=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},va=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_a=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Nm=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let jd;const hb=()=>jd||(jd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class xm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Om(t){return new xm(t)}function db(t,e=xt){e&&e.active&&e.effects.push(t)}function Dm(){return xt}function fb(t){xt&&xt.cleanups.push(t)}const Jl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pm=t=>(t.w&ds)>0,Lm=t=>(t.n&ds)>0,pb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ds},mb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Pm(r)&&!Lm(r)?r.delete(t):e[n++]=r,r.w&=~ds,r.n&=~ds}e.length=n}},wa=new WeakMap;let oi=0,ds=1;const zu=30;let Zt;const $s=Symbol(""),Ku=Symbol("");class eh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,db(this,s)}run(){if(!this.active)return this.fn();let e=Zt,n=ss;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,ss=!0,ds=1<<++oi,oi<=zu?pb(this):qd(this),this.fn()}finally{oi<=zu&&mb(this),ds=1<<--oi,Zt=this.parent,ss=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(qd(this),this.onStop&&this.onStop(),this.active=!1)}}function qd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ss=!0;const Mm=[];function qr(){Mm.push(ss),ss=!1}function Hr(){const t=Mm.pop();ss=t===void 0?!0:t}function Rt(t,e,n){if(ss&&Zt){let s=wa.get(t);s||wa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Jl()),Um(r)}}function Um(t,e){let n=!1;oi<=zu?Lm(t)||(t.n|=ds,n=!Pm(t)):n=!t.has(Zt),n&&(t.add(Zt),Zt.deps.push(t))}function Pn(t,e,n,s,r,i){const o=wa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Yl(n)&&a.push(o.get("length")):(a.push(o.get($s)),yr(t)&&a.push(o.get(Ku)));break;case"delete":Y(t)||(a.push(o.get($s)),yr(t)&&a.push(o.get(Ku)));break;case"set":yr(t)&&a.push(o.get($s));break}if(a.length===1)a[0]&&Wu(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Wu(Jl(c))}}function Wu(t,e){const n=Y(t)?t:[...t];for(const s of n)s.computed&&Hd(s);for(const s of n)s.computed||Hd(s)}function Hd(t,e){(t!==Zt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function gb(t,e){var n;return(n=wa.get(t))===null||n===void 0?void 0:n.get(e)}const yb=Gl("__proto__,__v_isRef,__isVue"),Fm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Si)),vb=th(),_b=th(!1,!0),wb=th(!0),zd=bb();function bb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ye(this);for(let i=0,o=this.length;i<o;i++)Rt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qr();const s=ye(this)[e].apply(this,n);return Hr(),s}}),t}function Tb(t){const e=ye(this);return Rt(e,"has",t),e.hasOwnProperty(t)}function th(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Fb:qm:e?jm:$m).get(s))return s;const o=Y(s);if(!t){if(o&&we(zd,r))return Reflect.get(zd,r,i);if(r==="hasOwnProperty")return Tb}const a=Reflect.get(s,r,i);return(Si(r)?Fm.has(r):yb(r))||(t||Rt(s,"get",r),e)?a:Ke(a)?o&&Yl(r)?a:a.value:Re(a)?t?Hm(a):zr(a):a}}const Eb=Bm(),Ib=Bm(!0);function Bm(t=!1){return function(n,s,r,i){let o=n[s];if(Sr(o)&&Ke(o)&&!Ke(r))return!1;if(!t&&(!ba(r)&&!Sr(r)&&(o=ye(o),r=ye(r)),!Y(n)&&Ke(o)&&!Ke(r)))return o.value=r,!0;const a=Y(n)&&Yl(s)?Number(s)<n.length:we(n,s),c=Reflect.set(n,s,r,i);return n===ye(i)&&(a?ki(r,o)&&Pn(n,"set",s,r):Pn(n,"add",s,r)),c}}function Cb(t,e){const n=we(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Pn(t,"delete",e,void 0),s}function Sb(t,e){const n=Reflect.has(t,e);return(!Si(e)||!Fm.has(e))&&Rt(t,"has",e),n}function kb(t){return Rt(t,"iterate",Y(t)?"length":$s),Reflect.ownKeys(t)}const Vm={get:vb,set:Eb,deleteProperty:Cb,has:Sb,ownKeys:kb},Ab={get:wb,set(t,e){return!0},deleteProperty(t,e){return!0}},Rb=rt({},Vm,{get:_b,set:Ib}),nh=t=>t,fc=t=>Reflect.getPrototypeOf(t);function Vo(t,e,n=!1,s=!1){t=t.__v_raw;const r=ye(t),i=ye(e);n||(e!==i&&Rt(r,"get",e),Rt(r,"get",i));const{has:o}=fc(r),a=s?nh:n?ih:Ai;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function $o(t,e=!1){const n=this.__v_raw,s=ye(n),r=ye(t);return e||(t!==r&&Rt(s,"has",t),Rt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function jo(t,e=!1){return t=t.__v_raw,!e&&Rt(ye(t),"iterate",$s),Reflect.get(t,"size",t)}function Kd(t){t=ye(t);const e=ye(this);return fc(e).has.call(e,t)||(e.add(t),Pn(e,"add",t,t)),this}function Wd(t,e){e=ye(e);const n=ye(this),{has:s,get:r}=fc(n);let i=s.call(n,t);i||(t=ye(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ki(e,o)&&Pn(n,"set",t,e):Pn(n,"add",t,e),this}function Gd(t){const e=ye(this),{has:n,get:s}=fc(e);let r=n.call(e,t);r||(t=ye(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Pn(e,"delete",t,void 0),i}function Zd(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&Pn(t,"clear",void 0,void 0),n}function qo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ye(o),c=e?nh:t?ih:Ai;return!t&&Rt(a,"iterate",$s),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Ho(t,e,n){return function(...s){const r=this.__v_raw,i=ye(r),o=yr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?nh:e?ih:Ai;return!e&&Rt(i,"iterate",c?Ku:$s),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function qn(t){return function(...e){return t==="delete"?!1:this}}function Nb(){const t={get(i){return Vo(this,i)},get size(){return jo(this)},has:$o,add:Kd,set:Wd,delete:Gd,clear:Zd,forEach:qo(!1,!1)},e={get(i){return Vo(this,i,!1,!0)},get size(){return jo(this)},has:$o,add:Kd,set:Wd,delete:Gd,clear:Zd,forEach:qo(!1,!0)},n={get(i){return Vo(this,i,!0)},get size(){return jo(this,!0)},has(i){return $o.call(this,i,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:qo(!0,!1)},s={get(i){return Vo(this,i,!0,!0)},get size(){return jo(this,!0)},has(i){return $o.call(this,i,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ho(i,!1,!1),n[i]=Ho(i,!0,!1),e[i]=Ho(i,!1,!0),s[i]=Ho(i,!0,!0)}),[t,n,e,s]}const[xb,Ob,Db,Pb]=Nb();function sh(t,e){const n=e?t?Pb:Db:t?Ob:xb;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(we(n,r)&&r in s?n:s,r,i)}const Lb={get:sh(!1,!1)},Mb={get:sh(!1,!0)},Ub={get:sh(!0,!1)},$m=new WeakMap,jm=new WeakMap,qm=new WeakMap,Fb=new WeakMap;function Bb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vb(t){return t.__v_skip||!Object.isExtensible(t)?0:Bb(cb(t))}function zr(t){return Sr(t)?t:rh(t,!1,Vm,Lb,$m)}function $b(t){return rh(t,!1,Rb,Mb,jm)}function Hm(t){return rh(t,!0,Ab,Ub,qm)}function rh(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Vb(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function rs(t){return Sr(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Sr(t){return!!(t&&t.__v_isReadonly)}function ba(t){return!!(t&&t.__v_isShallow)}function zm(t){return rs(t)||Sr(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function kr(t){return va(t,"__v_skip",!0),t}const Ai=t=>Re(t)?zr(t):t,ih=t=>Re(t)?Hm(t):t;function Km(t){ss&&Zt&&(t=ye(t),Um(t.dep||(t.dep=Jl())))}function Wm(t,e){t=ye(t);const n=t.dep;n&&Wu(n)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function oh(t){return Gm(t,!1)}function jb(t){return Gm(t,!0)}function Gm(t,e){return Ke(t)?t:new qb(t,e)}class qb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:Ai(e)}get value(){return Km(this),this._value}set value(e){const n=this.__v_isShallow||ba(e)||Sr(e);e=n?e:ye(e),ki(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ai(e),Wm(this))}}function is(t){return Ke(t)?t.value:t}const Hb={get:(t,e,n)=>is(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Zm(t){return rs(t)?t:new Proxy(t,Hb)}function zb(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=Wb(t,n);return e}class Kb{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gb(ye(this._object),this._key)}}function Wb(t,e,n){const s=t[e];return Ke(s)?s:new Kb(t,e,n)}var Qm;class Gb{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qm]=!1,this._dirty=!0,this.effect=new eh(e,()=>{this._dirty||(this._dirty=!0,Wm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ye(this);return Km(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qm="__v_isReadonly";function Zb(t,e,n=!1){let s,r;const i=ce(t);return i?(s=t,r=Xt):(s=t.get,r=t.set),new Gb(s,r,i||!r,n)}function os(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){fo(i,e,n)}return r}function jt(t,e,n,s){if(ce(t)){const i=os(t,e,n,s);return i&&Xl(i)&&i.catch(o=>{fo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(jt(t[i],e,n,s));return r}function fo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){os(c,null,10,[t,o,a]);return}}Qb(t,n,r,s)}function Qb(t,e,n,s=!0){console.error(t)}let Ri=!1,Gu=!1;const ft=[];let an=0;const vr=[];let Sn=null,xs=0;const Xm=Promise.resolve();let ah=null;function pc(t){const e=ah||Xm;return t?e.then(this?t.bind(this):t):e}function Xb(t){let e=an+1,n=ft.length;for(;e<n;){const s=e+n>>>1;Ni(ft[s])<t?e=s+1:n=s}return e}function ch(t){(!ft.length||!ft.includes(t,Ri&&t.allowRecurse?an+1:an))&&(t.id==null?ft.push(t):ft.splice(Xb(t.id),0,t),Ym())}function Ym(){!Ri&&!Gu&&(Gu=!0,ah=Xm.then(tg))}function Yb(t){const e=ft.indexOf(t);e>an&&ft.splice(e,1)}function Jm(t){Y(t)?vr.push(...t):(!Sn||!Sn.includes(t,t.allowRecurse?xs+1:xs))&&vr.push(t),Ym()}function Qd(t,e=Ri?an+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function eg(t){if(vr.length){const e=[...new Set(vr)];if(vr.length=0,Sn){Sn.push(...e);return}for(Sn=e,Sn.sort((n,s)=>Ni(n)-Ni(s)),xs=0;xs<Sn.length;xs++)Sn[xs]();Sn=null,xs=0}}const Ni=t=>t.id==null?1/0:t.id,Jb=(t,e)=>{const n=Ni(t)-Ni(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tg(t){Gu=!1,Ri=!0,ft.sort(Jb);const e=Xt;try{for(an=0;an<ft.length;an++){const n=ft[an];n&&n.active!==!1&&os(n,null,14)}}finally{an=0,ft.length=0,eg(),Ri=!1,ah=null,(ft.length||vr.length)&&tg()}}function eT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||De;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||De;d&&(r=n.map(p=>Ve(p)?p.trim():p)),h&&(r=n.map(_a))}let a,c=s[a=ra(e)]||s[a=ra(yn(e))];!c&&i&&(c=s[a=ra(jr(e))]),c&&jt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(u,t,6,r)}}function ng(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ce(t)){const c=u=>{const l=ng(u,e,!0);l&&(a=!0,rt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&s.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):rt(o,i),Re(t)&&s.set(t,o),o)}function mc(t,e){return!t||!uc(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,jr(e))||we(t,e))}let ct=null,gc=null;function Ta(t){const e=ct;return ct=t,gc=t&&t.type.__scopeId||null,e}function tT(t){gc=t}function nT(){gc=null}function po(t,e=ct,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&lf(-1);const i=Ta(e);let o;try{o=t(...r)}finally{Ta(i),s._d&&lf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fu(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:y}=t;let I,S;const _=Ta(t);try{if(n.shapeFlag&4){const D=r||s;I=Wt(l.call(D,D,h,i,p,d,g)),S=c}else{const D=e;I=Wt(D.length>1?D(i,{attrs:c,slots:a,emit:u}):D(i,null)),S=e.props?c:rT(c)}}catch(D){gi.length=0,fo(D,t,1),I=st(At)}let b=I;if(S&&y!==!1){const D=Object.keys(S),{shapeFlag:M}=b;D.length&&M&7&&(o&&D.some(Zl)&&(S=iT(S,o)),b=fs(b,S))}return n.dirs&&(b=fs(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),I=b,Ta(_),I}function sT(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Pi(s)){if(s.type!==At||s.children==="v-if"){if(e)return;e=s}}else return}return e}const rT=t=>{let e;for(const n in t)(n==="class"||n==="style"||uc(n))&&((e||(e={}))[n]=t[n]);return e},iT=(t,e)=>{const n={};for(const s in t)(!Zl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function oT(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xd(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!mc(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xd(s,o,u):!0:!!o;return!1}function Xd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!mc(n,i))return!0}return!1}function uh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const aT=t=>t.__isSuspense,cT={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){t==null?uT(e,n,s,r,i,o,a,c,u):lT(t,e,n,s,r,o,a,c,u)},hydrate:hT,create:lh,normalize:dT},$D=cT;function xi(t,e){const n=t.props&&t.props[e];ce(n)&&n()}function uT(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=t.suspense=lh(t,r,s,e,h,n,i,o,a,c);u(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(xi(t,"onPending"),xi(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),_r(d,t.ssFallback)):d.resolve()}function lT(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:I,isHydrating:S}=h;if(y)h.pendingBranch=d,cn(d,y)?(c(y,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():I&&(c(g,p,n,s,r,null,i,o,a),_r(h,p))):(h.pendingId++,S?(h.isHydrating=!1,h.activeBranch=y):u(y,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),I?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(g,p,n,s,r,null,i,o,a),_r(h,p))):g&&cn(d,g)?(c(g,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(g&&cn(d,g))c(g,d,n,s,r,h,i,o,a),_r(h,d);else if(xi(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:_,pendingId:b}=h;_>0?setTimeout(()=>{h.pendingId===b&&h.fallback(p)},_):_===0&&h.fallback(p)}}function lh(t,e,n,s,r,i,o,a,c,u,l=!1){const{p:h,m:d,um:p,n:g,o:{parentNode:y,remove:I}}=u,S=t.props?Nm(t.props.timeout):void 0,_={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:D,activeBranch:M,pendingBranch:K,pendingId:j,effects:R,parentComponent:J,container:te}=_;if(_.isHydrating)_.isHydrating=!1;else if(!b){const Ee=M&&K.transition&&K.transition.mode==="out-in";Ee&&(M.transition.afterLeave=()=>{j===_.pendingId&&d(K,te,Ae,0)});let{anchor:Ae}=_;M&&(Ae=g(M),p(M,J,_,!0)),Ee||d(K,te,Ae,0)}_r(_,K),_.pendingBranch=null,_.isInFallback=!1;let he=_.parent,$=!1;for(;he;){if(he.pendingBranch){he.effects.push(...R),$=!0;break}he=he.parent}$||Jm(R),_.effects=[],xi(D,"onResolve")},fallback(b){if(!_.pendingBranch)return;const{vnode:D,activeBranch:M,parentComponent:K,container:j,isSVG:R}=_;xi(D,"onFallback");const J=g(M),te=()=>{_.isInFallback&&(h(null,b,j,J,K,null,R,a,c),_r(_,b))},he=b.transition&&b.transition.mode==="out-in";he&&(M.transition.afterLeave=te),_.isInFallback=!0,p(M,K,null,!0),he||te()},move(b,D,M){_.activeBranch&&d(_.activeBranch,b,D,M),_.container=b},next(){return _.activeBranch&&g(_.activeBranch)},registerDep(b,D){const M=!!_.pendingBranch;M&&_.deps++;const K=b.vnode.el;b.asyncDep.catch(j=>{fo(j,b,0)}).then(j=>{if(b.isUnmounted||_.isUnmounted||_.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:R}=b;tl(b,j,!1),K&&(R.el=K);const J=!K&&b.subTree.el;D(b,R,y(K||b.subTree.el),K?null:g(b.subTree),_,o,c),J&&I(J),uh(b,R.el),M&&--_.deps===0&&_.resolve()})},unmount(b,D){_.isUnmounted=!0,_.activeBranch&&p(_.activeBranch,n,b,D),_.pendingBranch&&p(_.pendingBranch,n,b,D)}};return _}function hT(t,e,n,s,r,i,o,a,c){const u=e.suspense=lh(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(),l}function dT(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Yd(s?n.default:n),t.ssFallback=s?Yd(n.fallback):st(At)}function Yd(t){let e;if(ce(t)){const n=Ar&&t._c;n&&(t._d=!1,Be()),t=t(),n&&(t._d=!0,e=Bt,Tg())}return Y(t)&&(t=sT(t)),t=Wt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fT(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Jm(t)}function _r(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,uh(s,r))}function oa(t,e){if(ze){let n=ze.provides;const s=ze.parent&&ze.parent.provides;s===n&&(n=ze.provides=Object.create(s)),n[t]=e}}function Yt(t,e,n=!1){const s=ze||ct;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ce(e)?e.call(s.proxy):e}}function jD(t,e){return hh(t,null,e)}const zo={};function hi(t,e,n){return hh(t,e,n)}function hh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=De){const a=Dm()===(ze==null?void 0:ze.scope)?ze:null;let c,u=!1,l=!1;if(Ke(t)?(c=()=>t.value,u=ba(t)):rs(t)?(c=()=>t,s=!0):Y(t)?(l=!0,u=t.some(b=>rs(b)||ba(b)),c=()=>t.map(b=>{if(Ke(b))return b.value;if(rs(b))return Ps(b);if(ce(b))return os(b,a,2)})):ce(t)?e?c=()=>os(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),jt(t,a,3,[d])}:c=Xt,e&&s){const b=c;c=()=>Ps(b())}let h,d=b=>{h=S.onStop=()=>{os(b,a,4)}},p;if(Li)if(d=Xt,e?n&&jt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const b=iE();p=b.__watcherHandles||(b.__watcherHandles=[])}else return Xt;let g=l?new Array(t.length).fill(zo):zo;const y=()=>{if(S.active)if(e){const b=S.run();(s||u||(l?b.some((D,M)=>ki(D,g[M])):ki(b,g)))&&(h&&h(),jt(e,a,3,[b,g===zo?void 0:l&&g[0]===zo?[]:g,d]),g=b)}else S.run()};y.allowRecurse=!!e;let I;r==="sync"?I=y:r==="post"?I=()=>St(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),I=()=>ch(y));const S=new eh(c,I);e?n?y():g=S.run():r==="post"?St(S.run.bind(S),a&&a.suspense):S.run();const _=()=>{S.stop(),a&&a.scope&&Ql(a.scope.effects,S)};return p&&p.push(_),_}function pT(t,e,n){const s=this.proxy,r=Ve(t)?t.includes(".")?sg(s,t):()=>s[t]:t.bind(s,s);let i;ce(e)?i=e:(i=e.handler,n=e);const o=ze;ps(this);const a=hh(r,i.bind(s),n);return o?ps(o):as(),a}function sg(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ps(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))Ps(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Ps(t[n],e);else if(lc(t)||yr(t))t.forEach(n=>{Ps(n,e)});else if(Rm(t))for(const n in t)Ps(t[n],e);return t}function rg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ag(()=>{t.isMounted=!0}),ug(()=>{t.isUnmounting=!0}),t}const Ft=[Function,Array],mT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},setup(t,{slots:e}){const n=mo(),s=rg();let r;return()=>{const i=e.default&&dh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==At){o=y;break}}const a=ye(t),{mode:c}=a;if(s.isLeaving)return pu(o);const u=Jd(o);if(!u)return pu(o);const l=Oi(u,a,s,n);Di(u,l);const h=n.subTree,d=h&&Jd(h);let p=!1;const{getTransitionKey:g}=u.type;if(g){const y=g();r===void 0?r=y:y!==r&&(r=y,p=!0)}if(d&&d.type!==At&&(!cn(u,d)||p)){const y=Oi(d,a,s,n);if(Di(d,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},pu(o);c==="in-out"&&u.type!==At&&(y.delayLeave=(I,S,_)=>{const b=ig(s,d);b[String(d.key)]=d,I._leaveCb=()=>{S(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=_})}return o}}},gT=mT;function ig(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Oi(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:y,onAppear:I,onAfterAppear:S,onAppearCancelled:_}=e,b=String(t.key),D=ig(n,t),M=(R,J)=>{R&&jt(R,s,9,J)},K=(R,J)=>{const te=J[1];M(R,J),Y(R)?R.every(he=>he.length<=1)&&te():R.length<=1&&te()},j={mode:i,persisted:o,beforeEnter(R){let J=a;if(!n.isMounted)if(r)J=y||a;else return;R._leaveCb&&R._leaveCb(!0);const te=D[b];te&&cn(t,te)&&te.el._leaveCb&&te.el._leaveCb(),M(J,[R])},enter(R){let J=c,te=u,he=l;if(!n.isMounted)if(r)J=I||c,te=S||u,he=_||l;else return;let $=!1;const Ee=R._enterCb=Ae=>{$||($=!0,Ae?M(he,[R]):M(te,[R]),j.delayedLeave&&j.delayedLeave(),R._enterCb=void 0)};J?K(J,[R,Ee]):Ee()},leave(R,J){const te=String(t.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return J();M(h,[R]);let he=!1;const $=R._leaveCb=Ee=>{he||(he=!0,J(),Ee?M(g,[R]):M(p,[R]),R._leaveCb=void 0,D[te]===t&&delete D[te])};D[te]=t,d?K(d,[R,$]):$()},clone(R){return Oi(R,e,n,s)}};return j}function pu(t){if(yc(t))return t=fs(t),t.children=null,t}function Jd(t){return yc(t)?t.children?t.children[0]:void 0:t}function Di(t,e){t.shapeFlag&6&&t.component?Di(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&r++,s=s.concat(dh(o.children,e,a))):(e||o.type!==At)&&s.push(a!=null?fs(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Tn(t){return ce(t)?{setup:t,name:t.name}:t}const di=t=>!!t.type.__asyncLoader,yc=t=>t.type.__isKeepAlive;function yT(t,e){og(t,"a",e)}function vT(t,e){og(t,"da",e)}function og(t,e,n=ze){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)yc(r.parent.vnode)&&_T(s,e,n,r),r=r.parent}}function _T(t,e,n,s){const r=vc(e,t,s,!0);lg(()=>{Ql(s[e],r)},n)}function vc(t,e,n=ze,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qr(),ps(n);const a=jt(e,n,t,o);return as(),Hr(),a});return s?r.unshift(i):r.push(i),i}}const jn=t=>(e,n=ze)=>(!Li||t==="sp")&&vc(t,(...s)=>e(...s),n),wT=jn("bm"),ag=jn("m"),bT=jn("bu"),cg=jn("u"),ug=jn("bum"),lg=jn("um"),TT=jn("sp"),ET=jn("rtg"),IT=jn("rtc");function CT(t,e=ze){vc("ec",t,e)}function qD(t,e){const n=ct;if(n===null)return t;const s=Ec(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=De]=e[i];o&&(ce(o)&&(o={mounted:o,updated:o}),o.deep&&Ps(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Ss(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(qr(),jt(c,n,8,[t.el,a,t,e]),Hr())}}const fh="components";function fi(t,e){return dg(fh,t,!0,e)||t}const hg=Symbol();function ph(t){return Ve(t)?dg(fh,t,!1)||t:t||hg}function dg(t,e,n=!0,s=!1){const r=ct||ze;if(r){const i=r.type;if(t===fh){const a=nE(i,!1);if(a&&(a===e||a===yn(e)||a===dc(yn(e))))return i}const o=ef(r[t]||i[t],e)||ef(r.appContext[t],e);return!o&&s?i:o}}function ef(t,e){return t&&(t[e]||t[yn(e)]||t[dc(yn(e))])}function tf(t,e,n,s){let r;const i=n&&n[s];if(Y(t)||Ve(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function ST(t,e,n={},s,r){if(ct.isCE||ct.parent&&di(ct.parent)&&ct.parent.isCE)return e!=="default"&&(n.name=e),st("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Be();const o=i&&fg(i(n)),a=ln(at,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function fg(t){return t.some(e=>Pi(e)?!(e.type===At||e.type===at&&!fg(e.children)):!0)?t:null}function kT(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:ra(s)]=t[s];return n}const Zu=t=>t?Cg(t)?Ec(t)||t.proxy:Zu(t.parent):null,pi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zu(t.parent),$root:t=>Zu(t.root),$emit:t=>t.emit,$options:t=>mh(t),$forceUpdate:t=>t.f||(t.f=()=>ch(t.update)),$nextTick:t=>t.n||(t.n=pc.bind(t.proxy)),$watch:t=>pT.bind(t)}),mu=(t,e)=>t!==De&&!t.__isScriptSetup&&we(t,e),AT={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(mu(s,e))return o[e]=1,s[e];if(r!==De&&we(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&we(u,e))return o[e]=3,i[e];if(n!==De&&we(n,e))return o[e]=4,n[e];Qu&&(o[e]=0)}}const l=pi[e];let h,d;if(l)return e==="$attrs"&&Rt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&we(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,we(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return mu(r,e)?(r[e]=n,!0):s!==De&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==De&&we(t,o)||mu(e,o)||(a=i[0])&&we(a,o)||we(s,o)||we(pi,o)||we(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Qu=!0;function RT(t){const e=mh(t),n=t.proxy,s=t.ctx;Qu=!1,e.beforeCreate&&nf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:y,deactivated:I,beforeDestroy:S,beforeUnmount:_,destroyed:b,unmounted:D,render:M,renderTracked:K,renderTriggered:j,errorCaptured:R,serverPrefetch:J,expose:te,inheritAttrs:he,components:$,directives:Ee,filters:Ae}=e;if(u&&NT(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ne in o){const Se=o[Ne];ce(Se)&&(s[Ne]=Se.bind(n))}if(r){const Ne=r.call(n,n);Re(Ne)&&(t.data=zr(Ne))}if(Qu=!0,i)for(const Ne in i){const Se=i[Ne],Ht=ce(Se)?Se.bind(n,n):ce(Se.get)?Se.get.bind(n,n):Xt,Cs=!ce(Se)&&ce(Se.set)?Se.set.bind(n):Xt,zt=Ot({get:Ht,set:Cs});Object.defineProperty(s,Ne,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Ct=>zt.value=Ct})}if(a)for(const Ne in a)pg(a[Ne],s,n,Ne);if(c){const Ne=ce(c)?c.call(n):c;Reflect.ownKeys(Ne).forEach(Se=>{oa(Se,Ne[Se])})}l&&nf(l,t,"c");function Me(Ne,Se){Y(Se)?Se.forEach(Ht=>Ne(Ht.bind(n))):Se&&Ne(Se.bind(n))}if(Me(wT,h),Me(ag,d),Me(bT,p),Me(cg,g),Me(yT,y),Me(vT,I),Me(CT,R),Me(IT,K),Me(ET,j),Me(ug,_),Me(lg,D),Me(TT,J),Y(te))if(te.length){const Ne=t.exposed||(t.exposed={});te.forEach(Se=>{Object.defineProperty(Ne,Se,{get:()=>n[Se],set:Ht=>n[Se]=Ht})})}else t.exposed||(t.exposed={});M&&t.render===Xt&&(t.render=M),he!=null&&(t.inheritAttrs=he),$&&(t.components=$),Ee&&(t.directives=Ee)}function NT(t,e,n=Xt,s=!1){Y(t)&&(t=Xu(t));for(const r in t){const i=t[r];let o;Re(i)?"default"in i?o=Yt(i.from||r,i.default,!0):o=Yt(i.from||r):o=Yt(i),Ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function nf(t,e,n){jt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pg(t,e,n,s){const r=s.includes(".")?sg(n,s):()=>n[s];if(Ve(t)){const i=e[t];ce(i)&&hi(r,i)}else if(ce(t))hi(r,t.bind(n));else if(Re(t))if(Y(t))t.forEach(i=>pg(i,e,n,s));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&hi(r,i,t)}}function mh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Ea(c,u,o,!0)),Ea(c,e,o)),Re(e)&&i.set(e,c),c}function Ea(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ea(t,i,n,!0),r&&r.forEach(o=>Ea(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=xT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xT={data:sf,props:Rs,emits:Rs,methods:Rs,computed:Rs,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Rs,directives:Rs,watch:DT,provide:sf,inject:OT};function sf(t,e){return e?t?function(){return rt(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function OT(t,e){return Rs(Xu(t),Xu(e))}function Xu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Rs(t,e){return t?rt(rt(Object.create(null),t),e):e}function DT(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function PT(t,e,n,s=!1){const r={},i={};va(i,wc,1),t.propsDefaults=Object.create(null),mg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:$b(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function LT(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ye(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(mc(t.emitsOptions,d))continue;const p=e[d];if(c)if(we(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const g=yn(d);r[g]=Yu(c,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{mg(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!we(e,h)&&((l=jr(h))===h||!we(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Yu(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!we(e,h))&&(delete i[h],u=!0)}u&&Pn(t,"set","$attrs")}function mg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(sa(c))continue;const u=e[c];let l;r&&we(r,l=yn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:mc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ye(n),u=a||De;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Yu(r,c,h,u[h],t,!we(u,h))}}return o}function Yu(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ce(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(ps(r),s=u[n]=c.call(null,e),as())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===jr(n))&&(s=!0))}return s}function gg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ce(t)){const l=h=>{c=!0;const[d,p]=gg(h,e,!0);rt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Re(t)&&s.set(t,gr),gr;if(Y(i))for(let l=0;l<i.length;l++){const h=yn(i[l]);rf(h)&&(o[h]=De)}else if(i)for(const l in i){const h=yn(l);if(rf(h)){const d=i[l],p=o[h]=Y(d)||ce(d)?{type:d}:Object.assign({},d);if(p){const g=cf(Boolean,p.type),y=cf(String,p.type);p[0]=g>-1,p[1]=y<0||g<y,(g>-1||we(p,"default"))&&a.push(h)}}}const u=[o,a];return Re(t)&&s.set(t,u),u}function rf(t){return t[0]!=="$"}function of(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function af(t,e){return of(t)===of(e)}function cf(t,e){return Y(e)?e.findIndex(n=>af(n,t)):ce(e)&&af(e,t)?0:-1}const yg=t=>t[0]==="_"||t==="$stable",gh=t=>Y(t)?t.map(Wt):[Wt(t)],MT=(t,e,n)=>{if(e._n)return e;const s=po((...r)=>gh(e(...r)),n);return s._c=!1,s},vg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(yg(r))continue;const i=t[r];if(ce(i))e[r]=MT(r,i,s);else if(i!=null){const o=gh(i);e[r]=()=>o}}},_g=(t,e)=>{const n=gh(e);t.slots.default=()=>n},UT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),va(e,"_",n)):vg(e,t.slots={})}else t.slots={},e&&_g(t,e);va(t.slots,wc,1)},FT=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=De;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(rt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,vg(e,r)),o=e}else e&&(_g(t,e),o={default:1});if(i)for(const a in r)!yg(a)&&!(a in o)&&delete r[a]};function wg(){return{app:null,config:{isNativeTag:ib,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BT=0;function VT(t,e){return function(s,r=null){ce(s)||(s=Object.assign({},s)),r!=null&&!Re(r)&&(r=null);const i=wg(),o=new Set;let a=!1;const c=i.app={_uid:BT++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:oE,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(c,...l)):ce(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=st(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Ec(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ju(t,e,n,s,r=!1){if(Y(t)){t.forEach((d,p)=>Ju(d,e&&(Y(e)?e[p]:e),n,s,r));return}if(di(s)&&!r)return;const i=s.shapeFlag&4?Ec(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ve(u)?(l[u]=null,we(h,u)&&(h[u]=null)):Ke(u)&&(u.value=null)),ce(c))os(c,a,12,[o,l]);else{const d=Ve(c),p=Ke(c);if(d||p){const g=()=>{if(t.f){const y=d?we(h,c)?h[c]:l[c]:c.value;r?Y(y)&&Ql(y,i):Y(y)?y.includes(i)||y.push(i):d?(l[c]=[i],we(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,we(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,St(g,n)):g()}}}const St=fT;function $T(t){return jT(t)}function jT(t,e){const n=hb();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=Xt,insertStaticContent:g}=t,y=(f,m,v,w=null,C=null,x=null,U=!1,N=null,P=!!m.dynamicChildren)=>{if(f===m)return;f&&!cn(f,m)&&(w=L(f),Ct(f,C,x,!0),f=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:k,ref:Q,shapeFlag:q}=m;switch(k){case _c:I(f,m,v,w);break;case At:S(f,m,v,w);break;case gu:f==null&&_(m,v,w,U);break;case at:$(f,m,v,w,C,x,U,N,P);break;default:q&1?M(f,m,v,w,C,x,U,N,P):q&6?Ee(f,m,v,w,C,x,U,N,P):(q&64||q&128)&&k.process(f,m,v,w,C,x,U,N,P,_e)}Q!=null&&C&&Ju(Q,f&&f.ref,x,m||f,!m)},I=(f,m,v,w)=>{if(f==null)s(m.el=a(m.children),v,w);else{const C=m.el=f.el;m.children!==f.children&&u(C,m.children)}},S=(f,m,v,w)=>{f==null?s(m.el=c(m.children||""),v,w):m.el=f.el},_=(f,m,v,w)=>{[f.el,f.anchor]=g(f.children,m,v,w,f.el,f.anchor)},b=({el:f,anchor:m},v,w)=>{let C;for(;f&&f!==m;)C=d(f),s(f,v,w),f=C;s(m,v,w)},D=({el:f,anchor:m})=>{let v;for(;f&&f!==m;)v=d(f),r(f),f=v;r(m)},M=(f,m,v,w,C,x,U,N,P)=>{U=U||m.type==="svg",f==null?K(m,v,w,C,x,U,N,P):J(f,m,C,x,U,N,P)},K=(f,m,v,w,C,x,U,N)=>{let P,k;const{type:Q,props:q,shapeFlag:X,transition:ie,dirs:me}=f;if(P=f.el=o(f.type,x,q&&q.is,q),X&8?l(P,f.children):X&16&&R(f.children,P,null,w,C,x&&Q!=="foreignObject",U,N),me&&Ss(f,null,w,"created"),j(P,f,f.scopeId,U,w),q){for(const ke in q)ke!=="value"&&!sa(ke)&&i(P,ke,null,q[ke],x,f.children,w,C,B);"value"in q&&i(P,"value",null,q.value),(k=q.onVnodeBeforeMount)&&on(k,w,f)}me&&Ss(f,null,w,"beforeMount");const xe=(!C||C&&!C.pendingBranch)&&ie&&!ie.persisted;xe&&ie.beforeEnter(P),s(P,m,v),((k=q&&q.onVnodeMounted)||xe||me)&&St(()=>{k&&on(k,w,f),xe&&ie.enter(P),me&&Ss(f,null,w,"mounted")},C)},j=(f,m,v,w,C)=>{if(v&&p(f,v),w)for(let x=0;x<w.length;x++)p(f,w[x]);if(C){let x=C.subTree;if(m===x){const U=C.vnode;j(f,U,U.scopeId,U.slotScopeIds,C.parent)}}},R=(f,m,v,w,C,x,U,N,P=0)=>{for(let k=P;k<f.length;k++){const Q=f[k]=N?Gn(f[k]):Wt(f[k]);y(null,Q,m,v,w,C,x,U,N)}},J=(f,m,v,w,C,x,U)=>{const N=m.el=f.el;let{patchFlag:P,dynamicChildren:k,dirs:Q}=m;P|=f.patchFlag&16;const q=f.props||De,X=m.props||De;let ie;v&&ks(v,!1),(ie=X.onVnodeBeforeUpdate)&&on(ie,v,m,f),Q&&Ss(m,f,v,"beforeUpdate"),v&&ks(v,!0);const me=C&&m.type!=="foreignObject";if(k?te(f.dynamicChildren,k,N,v,w,me,x):U||Se(f,m,N,null,v,w,me,x,!1),P>0){if(P&16)he(N,m,q,X,v,w,C);else if(P&2&&q.class!==X.class&&i(N,"class",null,X.class,C),P&4&&i(N,"style",q.style,X.style,C),P&8){const xe=m.dynamicProps;for(let ke=0;ke<xe.length;ke++){const Ge=xe[ke],Kt=q[Ge],cr=X[Ge];(cr!==Kt||Ge==="value")&&i(N,Ge,Kt,cr,C,f.children,v,w,B)}}P&1&&f.children!==m.children&&l(N,m.children)}else!U&&k==null&&he(N,m,q,X,v,w,C);((ie=X.onVnodeUpdated)||Q)&&St(()=>{ie&&on(ie,v,m,f),Q&&Ss(m,f,v,"updated")},w)},te=(f,m,v,w,C,x,U)=>{for(let N=0;N<m.length;N++){const P=f[N],k=m[N],Q=P.el&&(P.type===at||!cn(P,k)||P.shapeFlag&70)?h(P.el):v;y(P,k,Q,null,w,C,x,U,!0)}},he=(f,m,v,w,C,x,U)=>{if(v!==w){if(v!==De)for(const N in v)!sa(N)&&!(N in w)&&i(f,N,v[N],null,U,m.children,C,x,B);for(const N in w){if(sa(N))continue;const P=w[N],k=v[N];P!==k&&N!=="value"&&i(f,N,k,P,U,m.children,C,x,B)}"value"in w&&i(f,"value",v.value,w.value)}},$=(f,m,v,w,C,x,U,N,P)=>{const k=m.el=f?f.el:a(""),Q=m.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:ie}=m;ie&&(N=N?N.concat(ie):ie),f==null?(s(k,v,w),s(Q,v,w),R(m.children,v,Q,C,x,U,N,P)):q>0&&q&64&&X&&f.dynamicChildren?(te(f.dynamicChildren,X,v,C,x,U,N),(m.key!=null||C&&m===C.subTree)&&yh(f,m,!0)):Se(f,m,v,Q,C,x,U,N,P)},Ee=(f,m,v,w,C,x,U,N,P)=>{m.slotScopeIds=N,f==null?m.shapeFlag&512?C.ctx.activate(m,v,w,U,P):Ae(m,v,w,C,x,U,P):He(f,m,P)},Ae=(f,m,v,w,C,x,U)=>{const N=f.component=XT(f,w,C);if(yc(f)&&(N.ctx.renderer=_e),YT(N),N.asyncDep){if(C&&C.registerDep(N,Me),!f.el){const P=N.subTree=st(At);S(null,P,m,v)}return}Me(N,f,m,v,C,x,U)},He=(f,m,v)=>{const w=m.component=f.component;if(oT(f,m,v))if(w.asyncDep&&!w.asyncResolved){Ne(w,m,v);return}else w.next=m,Yb(w.update),w.update();else m.el=f.el,w.vnode=m},Me=(f,m,v,w,C,x,U)=>{const N=()=>{if(f.isMounted){let{next:Q,bu:q,u:X,parent:ie,vnode:me}=f,xe=Q,ke;ks(f,!1),Q?(Q.el=me.el,Ne(f,Q,U)):Q=me,q&&ia(q),(ke=Q.props&&Q.props.onVnodeBeforeUpdate)&&on(ke,ie,Q,me),ks(f,!0);const Ge=fu(f),Kt=f.subTree;f.subTree=Ge,y(Kt,Ge,h(Kt.el),L(Kt),f,C,x),Q.el=Ge.el,xe===null&&uh(f,Ge.el),X&&St(X,C),(ke=Q.props&&Q.props.onVnodeUpdated)&&St(()=>on(ke,ie,Q,me),C)}else{let Q;const{el:q,props:X}=m,{bm:ie,m:me,parent:xe}=f,ke=di(m);if(ks(f,!1),ie&&ia(ie),!ke&&(Q=X&&X.onVnodeBeforeMount)&&on(Q,xe,m),ks(f,!0),q&&fe){const Ge=()=>{f.subTree=fu(f),fe(q,f.subTree,f,C,null)};ke?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ge()):Ge()}else{const Ge=f.subTree=fu(f);y(null,Ge,v,w,f,C,x),m.el=Ge.el}if(me&&St(me,C),!ke&&(Q=X&&X.onVnodeMounted)){const Ge=m;St(()=>on(Q,xe,Ge),C)}(m.shapeFlag&256||xe&&di(xe.vnode)&&xe.vnode.shapeFlag&256)&&f.a&&St(f.a,C),f.isMounted=!0,m=v=w=null}},P=f.effect=new eh(N,()=>ch(k),f.scope),k=f.update=()=>P.run();k.id=f.uid,ks(f,!0),k()},Ne=(f,m,v)=>{m.component=f;const w=f.vnode.props;f.vnode=m,f.next=null,LT(f,m.props,w,v),FT(f,m.children,v),qr(),Qd(),Hr()},Se=(f,m,v,w,C,x,U,N,P=!1)=>{const k=f&&f.children,Q=f?f.shapeFlag:0,q=m.children,{patchFlag:X,shapeFlag:ie}=m;if(X>0){if(X&128){Cs(k,q,v,w,C,x,U,N,P);return}else if(X&256){Ht(k,q,v,w,C,x,U,N,P);return}}ie&8?(Q&16&&B(k,C,x),q!==k&&l(v,q)):Q&16?ie&16?Cs(k,q,v,w,C,x,U,N,P):B(k,C,x,!0):(Q&8&&l(v,""),ie&16&&R(q,v,w,C,x,U,N,P))},Ht=(f,m,v,w,C,x,U,N,P)=>{f=f||gr,m=m||gr;const k=f.length,Q=m.length,q=Math.min(k,Q);let X;for(X=0;X<q;X++){const ie=m[X]=P?Gn(m[X]):Wt(m[X]);y(f[X],ie,v,null,C,x,U,N,P)}k>Q?B(f,C,x,!0,!1,q):R(m,v,w,C,x,U,N,P,q)},Cs=(f,m,v,w,C,x,U,N,P)=>{let k=0;const Q=m.length;let q=f.length-1,X=Q-1;for(;k<=q&&k<=X;){const ie=f[k],me=m[k]=P?Gn(m[k]):Wt(m[k]);if(cn(ie,me))y(ie,me,v,null,C,x,U,N,P);else break;k++}for(;k<=q&&k<=X;){const ie=f[q],me=m[X]=P?Gn(m[X]):Wt(m[X]);if(cn(ie,me))y(ie,me,v,null,C,x,U,N,P);else break;q--,X--}if(k>q){if(k<=X){const ie=X+1,me=ie<Q?m[ie].el:w;for(;k<=X;)y(null,m[k]=P?Gn(m[k]):Wt(m[k]),v,me,C,x,U,N,P),k++}}else if(k>X)for(;k<=q;)Ct(f[k],C,x,!0),k++;else{const ie=k,me=k,xe=new Map;for(k=me;k<=X;k++){const Nt=m[k]=P?Gn(m[k]):Wt(m[k]);Nt.key!=null&&xe.set(Nt.key,k)}let ke,Ge=0;const Kt=X-me+1;let cr=!1,Fd=0;const Jr=new Array(Kt);for(k=0;k<Kt;k++)Jr[k]=0;for(k=ie;k<=q;k++){const Nt=f[k];if(Ge>=Kt){Ct(Nt,C,x,!0);continue}let rn;if(Nt.key!=null)rn=xe.get(Nt.key);else for(ke=me;ke<=X;ke++)if(Jr[ke-me]===0&&cn(Nt,m[ke])){rn=ke;break}rn===void 0?Ct(Nt,C,x,!0):(Jr[rn-me]=k+1,rn>=Fd?Fd=rn:cr=!0,y(Nt,m[rn],v,null,C,x,U,N,P),Ge++)}const Bd=cr?qT(Jr):gr;for(ke=Bd.length-1,k=Kt-1;k>=0;k--){const Nt=me+k,rn=m[Nt],Vd=Nt+1<Q?m[Nt+1].el:w;Jr[k]===0?y(null,rn,v,Vd,C,x,U,N,P):cr&&(ke<0||k!==Bd[ke]?zt(rn,v,Vd,2):ke--)}}},zt=(f,m,v,w,C=null)=>{const{el:x,type:U,transition:N,children:P,shapeFlag:k}=f;if(k&6){zt(f.component.subTree,m,v,w);return}if(k&128){f.suspense.move(m,v,w);return}if(k&64){U.move(f,m,v,_e);return}if(U===at){s(x,m,v);for(let q=0;q<P.length;q++)zt(P[q],m,v,w);s(f.anchor,m,v);return}if(U===gu){b(f,m,v);return}if(w!==2&&k&1&&N)if(w===0)N.beforeEnter(x),s(x,m,v),St(()=>N.enter(x),C);else{const{leave:q,delayLeave:X,afterLeave:ie}=N,me=()=>s(x,m,v),xe=()=>{q(x,()=>{me(),ie&&ie()})};X?X(x,me,xe):xe()}else s(x,m,v)},Ct=(f,m,v,w=!1,C=!1)=>{const{type:x,props:U,ref:N,children:P,dynamicChildren:k,shapeFlag:Q,patchFlag:q,dirs:X}=f;if(N!=null&&Ju(N,null,v,f,!0),Q&256){m.ctx.deactivate(f);return}const ie=Q&1&&X,me=!di(f);let xe;if(me&&(xe=U&&U.onVnodeBeforeUnmount)&&on(xe,m,f),Q&6)E(f.component,v,w);else{if(Q&128){f.suspense.unmount(v,w);return}ie&&Ss(f,null,m,"beforeUnmount"),Q&64?f.type.remove(f,m,v,C,_e,w):k&&(x!==at||q>0&&q&64)?B(k,m,v,!1,!0):(x===at&&q&384||!C&&Q&16)&&B(P,m,v),w&&ar(f)}(me&&(xe=U&&U.onVnodeUnmounted)||ie)&&St(()=>{xe&&on(xe,m,f),ie&&Ss(f,null,m,"unmounted")},v)},ar=f=>{const{type:m,el:v,anchor:w,transition:C}=f;if(m===at){Bo(v,w);return}if(m===gu){D(f);return}const x=()=>{r(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:U,delayLeave:N}=C,P=()=>U(v,x);N?N(f.el,x,P):P()}else x()},Bo=(f,m)=>{let v;for(;f!==m;)v=d(f),r(f),f=v;r(m)},E=(f,m,v)=>{const{bum:w,scope:C,update:x,subTree:U,um:N}=f;w&&ia(w),C.stop(),x&&(x.active=!1,Ct(U,f,m,v)),N&&St(N,m),St(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},B=(f,m,v,w=!1,C=!1,x=0)=>{for(let U=x;U<f.length;U++)Ct(f[U],m,v,w,C)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),G=(f,m,v)=>{f==null?m._vnode&&Ct(m._vnode,null,null,!0):y(m._vnode||null,f,m,null,null,null,v),Qd(),eg(),m._vnode=f},_e={p:y,um:Ct,m:zt,r:ar,mt:Ae,mc:R,pc:Se,pbc:te,n:L,o:t};let Ue,fe;return e&&([Ue,fe]=e(_e)),{render:G,hydrate:Ue,createApp:VT(G,Ue)}}function ks({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yh(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Gn(r[i]),a.el=o.el),n||yh(o,a)),a.type===_c&&(a.el=o.el)}}function qT(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const HT=t=>t.__isTeleport,mi=t=>t&&(t.disabled||t.disabled===""),uf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,el=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},zT={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:p,querySelector:g,createText:y,createComment:I}}=u,S=mi(e.props);let{shapeFlag:_,children:b,dynamicChildren:D}=e;if(t==null){const M=e.el=y(""),K=e.anchor=y("");p(M,n,s),p(K,n,s);const j=e.target=el(e.props,g),R=e.targetAnchor=y("");j&&(p(R,j),o=o||uf(j));const J=(te,he)=>{_&16&&l(b,te,he,r,i,o,a,c)};S?J(n,K):j&&J(j,R)}else{e.el=t.el;const M=e.anchor=t.anchor,K=e.target=t.target,j=e.targetAnchor=t.targetAnchor,R=mi(t.props),J=R?n:K,te=R?M:j;if(o=o||uf(K),D?(d(t.dynamicChildren,D,J,r,i,o,a),yh(t,e,!0)):c||h(t,e,J,te,r,i,o,a,!1),S)R||Ko(e,n,M,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const he=e.target=el(e.props,g);he&&Ko(e,he,null,u,0)}else R&&Ko(e,K,j,u,1)}bg(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=t;if(h&&i(l),(o||!mi(d))&&(i(u),a&16))for(let p=0;p<c.length;p++){const g=c[p];r(g,e,n,!0,!!g.dynamicChildren)}},move:Ko,hydrate:KT};function Ko(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=i===2;if(h&&s(o,e,n),(!h||mi(l))&&c&16)for(let d=0;d<u.length;d++)r(u[d],e,n,2);h&&s(a,e,n)}function KT(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=el(e.props,c);if(l){const h=l._lpa||l.firstChild;if(e.shapeFlag&16)if(mi(e.props))e.anchor=u(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(h,e,l,n,s,r,i)}bg(e)}return e.anchor&&o(e.anchor)}const HD=zT;function bg(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const at=Symbol(void 0),_c=Symbol(void 0),At=Symbol(void 0),gu=Symbol(void 0),gi=[];let Bt=null;function Be(t=!1){gi.push(Bt=t?null:[])}function Tg(){gi.pop(),Bt=gi[gi.length-1]||null}let Ar=1;function lf(t){Ar+=t}function Eg(t){return t.dynamicChildren=Ar>0?Bt||gr:null,Tg(),Ar>0&&Bt&&Bt.push(t),t}function Vt(t,e,n,s,r,i){return Eg(bs(t,e,n,s,r,i,!0))}function ln(t,e,n,s,r){return Eg(st(t,e,n,s,r,!0))}function Pi(t){return t?t.__v_isVNode===!0:!1}function cn(t,e){return t.type===e.type&&t.key===e.key}const wc="__vInternal",Ig=({key:t})=>t??null,aa=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||Ke(t)||ce(t)?{i:ct,r:t,k:e,f:!!n}:t:null;function bs(t,e=null,n=null,s=0,r=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ig(e),ref:e&&aa(e),scopeId:gc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ct};return a?(vh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Ar>0&&!o&&Bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Bt.push(c),c}const st=WT;function WT(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===hg)&&(t=At),Pi(t)){const a=fs(t,e,!0);return n&&vh(a,n),Ar>0&&!i&&Bt&&(a.shapeFlag&6?Bt[Bt.indexOf(t)]=a:Bt.push(a)),a.patchFlag|=-2,a}if(sE(t)&&(t=t.__vccOpts),e){e=GT(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=hs(a)),Re(c)&&(zm(c)&&!Y(c)&&(c=rt({},c)),e.style=lo(c))}const o=Ve(t)?1:aT(t)?128:HT(t)?64:Re(t)?4:ce(t)?2:0;return bs(t,e,n,s,r,o,i,!0)}function GT(t){return t?zm(t)||wc in t?rt({},t):t:null}function fs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Tc(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ig(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(aa(e)):[r,aa(e)]:aa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function bc(t=" ",e=0){return st(_c,null,t,e)}function yu(t="",e=!1){return e?(Be(),ln(At,null,t)):st(At,null,t)}function Wt(t){return t==null||typeof t=="boolean"?st(At):Y(t)?st(at,null,t.slice()):typeof t=="object"?Gn(t):st(_c,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fs(t)}function vh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),vh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(wc in e)?e._ctx=ct:r===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),s&64?(n=16,e=[bc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tc(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=hs([e.class,s.class]));else if(r==="style")e.style=lo([e.style,s.style]);else if(uc(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function on(t,e,n,s=null){jt(t,e,7,[n,s])}const ZT=wg();let QT=0;function XT(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ZT,i={uid:QT++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gg(s,r),emitsOptions:ng(s,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:s.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=eT.bind(null,i),t.ce&&t.ce(i),i}let ze=null;const mo=()=>ze||ct,ps=t=>{ze=t,t.scope.on()},as=()=>{ze&&ze.scope.off(),ze=null};function Cg(t){return t.vnode.shapeFlag&4}let Li=!1;function YT(t,e=!1){Li=e;const{props:n,children:s}=t.vnode,r=Cg(t);PT(t,n,r,e),UT(t,s);const i=r?JT(t,e):void 0;return Li=!1,i}function JT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kr(new Proxy(t.ctx,AT));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?tE(t):null;ps(t),qr();const i=os(s,t,0,[t.props,r]);if(Hr(),as(),Xl(i)){if(i.then(as,as),e)return i.then(o=>{tl(t,o,e)}).catch(o=>{fo(o,t,0)});t.asyncDep=i}else tl(t,i,e)}else Sg(t,e)}function tl(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Zm(e)),Sg(t,n)}let hf;function Sg(t,e,n){const s=t.type;if(!t.render){if(!e&&hf&&!s.render){const r=s.template||mh(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=rt(rt({isCustomElement:i,delimiters:a},o),c);s.render=hf(r,u)}}t.render=s.render||Xt}ps(t),qr(),RT(t),Hr(),as()}function eE(t){return new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}})}function tE(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=eE(t))},slots:t.slots,emit:t.emit,expose:e}}function Ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zm(kr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)},has(e,n){return n in e||n in pi}}))}function nE(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function sE(t){return ce(t)&&"__vccOpts"in t}const Ot=(t,e)=>Zb(t,e,Li);function zD(t){const e=mo();let n=t();return as(),Xl(n)&&(n=n.catch(s=>{throw ps(e),s})),[n,()=>ps(e)]}function kg(t,e,n){const s=arguments.length;return s===2?Re(e)&&!Y(e)?Pi(e)?st(t,null,[e]):st(t,e):st(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Pi(n)&&(n=[n]),st(t,e,n))}const rE=Symbol(""),iE=()=>Yt(rE),oE="3.2.47",aE="http://www.w3.org/2000/svg",Os=typeof document<"u"?document:null,df=Os&&Os.createElement("template"),cE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Os.createElementNS(aE,t):Os.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Os.createTextNode(t),createComment:t=>Os.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Os.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{df.innerHTML=s?`<svg>${t}</svg>`:t;const a=df.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uE(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lE(t,e,n){const s=t.style,r=Ve(n);if(n&&!r){if(e&&!Ve(e))for(const i in e)n[i]==null&&nl(s,i,"");for(const i in n)nl(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ff=/\s*!important$/;function nl(t,e,n){if(Y(n))n.forEach(s=>nl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hE(t,e);ff.test(n)?t.setProperty(jr(s),n.replace(ff,""),"important"):t[s]=n}}const pf=["Webkit","Moz","ms"],vu={};function hE(t,e){const n=vu[e];if(n)return n;let s=yn(e);if(s!=="filter"&&s in t)return vu[e]=s;s=dc(s);for(let r=0;r<pf.length;r++){const i=pf[r]+s;if(i in t)return vu[e]=i}return e}const mf="http://www.w3.org/1999/xlink";function dE(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mf,e.slice(6,e.length)):t.setAttributeNS(mf,e,n);else{const i=nb(e);n==null||i&&!Cm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fE(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Cm(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ds(t,e,n,s){t.addEventListener(e,n,s)}function pE(t,e,n,s){t.removeEventListener(e,n,s)}function mE(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=gE(e);if(s){const u=i[e]=_E(s,r);Ds(t,a,u,c)}else o&&(pE(t,a,o,c),i[e]=void 0)}}const gf=/(?:Once|Passive|Capture)$/;function gE(t){let e;if(gf.test(t)){e={};let s;for(;s=t.match(gf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jr(t.slice(2)),e]}let _u=0;const yE=Promise.resolve(),vE=()=>_u||(yE.then(()=>_u=0),_u=Date.now());function _E(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(wE(s,n.value),e,5,[s])};return n.value=t,n.attached=vE(),n}function wE(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const yf=/^on[a-z]/,bE=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?uE(t,s,r):e==="style"?lE(t,n,s):uc(e)?Zl(e)||mE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):TE(t,e,s,r))?fE(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dE(t,e,s,r))};function TE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&yf.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||yf.test(e)&&Ve(n)?!1:e in t}const Hn="transition",ei="animation",Ag={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},EE=rt({},gT.props,Ag),As=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},vf=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function IE(t){const e={};for(const $ in t)$ in Ag||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=CE(r),y=g&&g[0],I=g&&g[1],{onBeforeEnter:S,onEnter:_,onEnterCancelled:b,onLeave:D,onLeaveCancelled:M,onBeforeAppear:K=S,onAppear:j=_,onAppearCancelled:R=b}=e,J=($,Ee,Ae)=>{Wn($,Ee?l:a),Wn($,Ee?u:o),Ae&&Ae()},te=($,Ee)=>{$._isLeaving=!1,Wn($,h),Wn($,p),Wn($,d),Ee&&Ee()},he=$=>(Ee,Ae)=>{const He=$?j:_,Me=()=>J(Ee,$,Ae);As(He,[Ee,Me]),_f(()=>{Wn(Ee,$?c:i),Cn(Ee,$?l:a),vf(He)||wf(Ee,s,y,Me)})};return rt(e,{onBeforeEnter($){As(S,[$]),Cn($,i),Cn($,o)},onBeforeAppear($){As(K,[$]),Cn($,c),Cn($,u)},onEnter:he(!1),onAppear:he(!0),onLeave($,Ee){$._isLeaving=!0;const Ae=()=>te($,Ee);Cn($,h),Ng(),Cn($,d),_f(()=>{$._isLeaving&&(Wn($,h),Cn($,p),vf(D)||wf($,s,I,Ae))}),As(D,[$,Ae])},onEnterCancelled($){J($,!1),As(b,[$])},onAppearCancelled($){J($,!0),As(R,[$])},onLeaveCancelled($){te($),As(M,[$])}})}function CE(t){if(t==null)return null;if(Re(t))return[wu(t.enter),wu(t.leave)];{const e=wu(t);return[e,e]}}function wu(t){return Nm(t)}function Cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Wn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function _f(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let SE=0;function wf(t,e,n,s){const r=t._endId=++SE,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Rg(t,e);if(!o)return s();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function Rg(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),r=s(`${Hn}Delay`),i=s(`${Hn}Duration`),o=bf(r,i),a=s(`${ei}Delay`),c=s(`${ei}Duration`),u=bf(a,c);let l=null,h=0,d=0;e===Hn?o>0&&(l=Hn,h=o,d=i.length):e===ei?u>0&&(l=ei,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Hn:ei:null,d=l?l===Hn?i.length:c.length:0);const p=l===Hn&&/\b(transform|all)(,|$)/.test(s(`${Hn}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:p}}function bf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Tf(n)+Tf(t[s])))}function Tf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ng(){return document.body.offsetHeight}const xg=new WeakMap,Og=new WeakMap,Dg={name:"TransitionGroup",props:rt({},EE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=mo(),s=rg();let r,i;return cg(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!OE(r[0].el,n.vnode.el,o))return;r.forEach(RE),r.forEach(NE);const a=r.filter(xE);Ng(),a.forEach(c=>{const u=c.el,l=u.style;Cn(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,Wn(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=ye(t),a=IE(o);let c=o.tag||at;r=i,i=e.default?dh(e.default()):[];for(let u=0;u<i.length;u++){const l=i[u];l.key!=null&&Di(l,Oi(l,a,s,n))}if(r)for(let u=0;u<r.length;u++){const l=r[u];Di(l,Oi(l,a,s,n)),xg.set(l,l.el.getBoundingClientRect())}return st(c,null,i)}}},kE=t=>delete t.mode;Dg.props;const AE=Dg;function RE(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function NE(t){Og.set(t,t.el.getBoundingClientRect())}function xE(t){const e=xg.get(t),n=Og.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function OE(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Rg(s);return r.removeChild(s),i}const Ia=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>ia(e,n):e};function DE(t){t.target.composing=!0}function Ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const KD={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ia(r);const i=s||r.props&&r.props.type==="number";Ds(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=_a(a)),t._assign(a)}),n&&Ds(t,"change",()=>{t.value=t.value.trim()}),e||(Ds(t,"compositionstart",DE),Ds(t,"compositionend",Ef),Ds(t,"change",Ef))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ia(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&_a(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},WD={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=lc(e);Ds(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?_a(Ca(o)):Ca(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ia(s)},mounted(t,{value:e}){If(t,e)},beforeUpdate(t,e,n){t._assign=Ia(n)},updated(t,{value:e}){If(t,e)}};function If(t,e){const n=t.multiple;if(!(n&&!Y(e)&&!lc(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Ca(i);if(n)Y(e)?i.selected=rb(e,o)>-1:i.selected=e.has(o);else if(cc(Ca(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ca(t){return"_value"in t?t._value:t.value}const PE=["ctrl","shift","alt","meta"],LE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>PE.some(n=>t[`${n}Key`]&&!e.includes(n))},ME=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=LE[e[r]];if(i&&i(n,e))return}return t(n,...s)},GD={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ti(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ti(t,!0),s.enter(t)):s.leave(t,()=>{ti(t,!1)}):ti(t,e))},beforeUnmount(t,{value:e}){ti(t,e)}};function ti(t,e){t.style.display=e?t._vod:"none"}const UE=rt({patchProp:bE},cE);let Cf;function FE(){return Cf||(Cf=$T(UE))}const Pg=(...t)=>{const e=FE().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=BE(s);if(!r)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function BE(t){return Ve(t)?document.querySelector(t):t}var VE=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Lg;const Ic=t=>Lg=t,Mg=Symbol();function sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yi||(yi={}));function $E(){const t=Om(!0),e=t.run(()=>oh({}));let n=[],s=[];const r=kr({install(i){Ic(r),r._a=i,i.provide(Mg,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!VE?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Ug=()=>{};function Sf(t,e,n,s=Ug){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Dm()&&fb(r),r}function ur(t,...e){t.slice().forEach(n=>{n(...e)})}function rl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];sl(r)&&sl(s)&&t.hasOwnProperty(n)&&!Ke(s)&&!rs(s)?t[n]=rl(r,s):t[n]=s}return t}const jE=Symbol();function qE(t){return!sl(t)||!t.hasOwnProperty(jE)}const{assign:Zn}=Object;function HE(t){return!!(Ke(t)&&t.effect)}function zE(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const l=zb(n.state.value[t]);return Zn(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=kr(Ot(()=>{Ic(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Fg(t,u,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{Zn(d,h)})},c}function Fg(t,e,n={},s,r,i){let o;const a=Zn({actions:{}},n),c={deep:!0};let u,l,h=kr([]),d=kr([]),p;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),oh({});let y;function I(j){let R;u=l=!1,typeof j=="function"?(j(s.state.value[t]),R={type:yi.patchFunction,storeId:t,events:p}):(rl(s.state.value[t],j),R={type:yi.patchObject,payload:j,storeId:t,events:p});const J=y=Symbol();pc().then(()=>{y===J&&(u=!0)}),l=!0,ur(h,R,s.state.value[t])}const S=Ug;function _(){o.stop(),h=[],d=[],s._s.delete(t)}function b(j,R){return function(){Ic(s);const J=Array.from(arguments),te=[],he=[];function $(He){te.push(He)}function Ee(He){he.push(He)}ur(d,{args:J,name:j,store:M,after:$,onError:Ee});let Ae;try{Ae=R.apply(this&&this.$id===t?this:M,J)}catch(He){throw ur(he,He),He}return Ae instanceof Promise?Ae.then(He=>(ur(te,He),He)).catch(He=>(ur(he,He),Promise.reject(He))):(ur(te,Ae),Ae)}}const D={_p:s,$id:t,$onAction:Sf.bind(null,d),$patch:I,$reset:S,$subscribe(j,R={}){const J=Sf(h,j,R.detached,()=>te()),te=o.run(()=>hi(()=>s.state.value[t],he=>{(R.flush==="sync"?l:u)&&j({storeId:t,type:yi.direct,events:p},he)},Zn({},c,R)));return J},$dispose:_},M=zr(D);s._s.set(t,M);const K=s._e.run(()=>(o=Om(),o.run(()=>e())));for(const j in K){const R=K[j];if(Ke(R)&&!HE(R)||rs(R))i||(g&&qE(R)&&(Ke(R)?R.value=g[j]:rl(R,g[j])),s.state.value[t][j]=R);else if(typeof R=="function"){const J=b(j,R);K[j]=J,a.actions[j]=R}}return Zn(M,K),Zn(ye(M),K),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:j=>{I(R=>{Zn(R,j)})}}),s._p.forEach(j=>{Zn(M,o.run(()=>j({store:M,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(M.$state,g),u=!0,l=!0,M}function KE(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const u=mo();return a=a||u&&Yt(Mg,null),a&&Ic(a),a=Lg,a._s.has(s)||(i?Fg(s,e,r,a):zE(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const hr=typeof window<"u";function WE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function bu(t,e){const n={};for(const s in e){const r=e[s];n[s]=en(r)?r.map(t):t(r)}return n}const vi=()=>{},en=Array.isArray,GE=/\/$/,ZE=t=>t.replace(GE,"");function Tu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=JE(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function QE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XE(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Rr(e.matched[s],n.matched[r])&&Bg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!YE(t[n],e[n]))return!1;return!0}function YE(t,e){return en(t)?Af(t,e):en(e)?Af(e,t):t===e}function Af(t,e){return en(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function JE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Mi;(function(t){t.pop="pop",t.push="push"})(Mi||(Mi={}));var _i;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_i||(_i={}));function e0(t){if(!t)if(hr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZE(t)}const t0=/^[^#]+#/;function n0(t,e){return t.replace(t0,"#")+e}function s0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Cc=()=>({left:window.pageXOffset,top:window.pageYOffset});function r0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=s0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rf(t,e){return(history.state?history.state.position-e:-1)+t}const il=new Map;function i0(t,e){il.set(t,e)}function o0(t){const e=il.get(t);return il.delete(t),e}let a0=()=>location.protocol+"//"+location.host;function Vg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),kf(c,"")}return kf(n,t)+s+r}function c0(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Vg(t,location),g=n.value,y=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}I=y?d.position-y.position:0}else s(p);r.forEach(S=>{S(n.value,g,{delta:I,type:Mi.pop,direction:I?I>0?_i.forward:_i.back:_i.unknown})})};function c(){o=n.value}function u(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(Ce({},d.state,{scroll:Cc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Nf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Cc():null}}function u0(t){const{history:e,location:n}=window,s={value:Vg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:a0()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=Ce({},e.state,Nf(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=Ce({},r.value,e.state,{forward:c,scroll:Cc()});i(l.current,l,!0);const h=Ce({},Nf(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function l0(t){t=e0(t);const e=u0(t),n=c0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ce({location:"",base:t,go:s,createHref:n0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function h0(t){return typeof t=="string"||t&&typeof t=="object"}function $g(t){return typeof t=="string"||typeof t=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jg=Symbol("");var xf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xf||(xf={}));function Nr(t,e){return Ce(new Error,{type:t,[jg]:!0},e)}function In(t,e){return t instanceof Error&&jg in t&&(e==null||!!(t.type&e))}const Of="[^/]+?",d0={sensitive:!1,strict:!1,start:!0,end:!0},f0=/[.+*?^${}()[\]/\\]/g;function p0(t,e){const n=Ce({},d0,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(f0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:y,optional:I,regexp:S}=d;i.push({name:g,repeatable:y,optional:I});const _=S||Of;if(_!==Of){p+=10;try{new RegExp(`(${_})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+D.message)}}let b=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(b=I&&u.length<2?`(?:/${b})`:"/"+b),I&&(b+="?"),r+=b,p+=20,I&&(p+=-8),y&&(p+=-20),_===".*"&&(p+=-50)}l.push(p)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:y,optional:I}=p,S=g in u?u[g]:"";if(en(S)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=en(S)?S.join("/"):S;if(!_)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=_}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function m0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function g0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=m0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Df(s))return 1;if(Df(r))return-1}return r.length-s.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y0={type:0,value:""},v0=/[a-zA-Z0-9_]/;function _0(t){if(!t)return[[]];if(t==="/")return[[y0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:v0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function w0(t,e,n){const s=p0(_0(t.path),n),r=Ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function b0(t,e){const n=[],s=new Map;e=Mf({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const p=!d,g=T0(l);g.aliasOf=d&&d.record;const y=Mf(e,l),I=[g];if("alias"in l){const b=typeof l.alias=="string"?[l.alias]:l.alias;for(const D of b)I.push(Ce({},g,{components:d?d.record.components:g.components,path:D,aliasOf:d?d.record:g}))}let S,_;for(const b of I){const{path:D}=b;if(h&&D[0]!=="/"){const M=h.record.path,K=M[M.length-1]==="/"?"":"/";b.path=h.record.path+(D&&K+D)}if(S=w0(b,h,y),d?d.alias.push(S):(_=_||S,_!==S&&_.alias.push(S),p&&l.name&&!Lf(S)&&o(l.name)),g.children){const M=g.children;for(let K=0;K<M.length;K++)i(M[K],S,d&&d.children[K])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return _?()=>{o(_)}:vi}function o(l){if($g(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&g0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!qg(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Lf(l)&&s.set(l.record.name,l)}function u(l,h){let d,p={},g,y;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw Nr(1,{location:l});y=d.record.name,p=Ce(Pf(h.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),l.params&&Pf(l.params,d.keys.map(_=>_.name))),g=d.stringify(p)}else if("path"in l)g=l.path,d=n.find(_=>_.re.test(g)),d&&(p=d.parse(g),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw Nr(1,{location:l,currentLocation:h});y=d.record.name,p=Ce({},h.params,l.params),g=d.stringify(p)}const I=[];let S=d;for(;S;)I.unshift(S.record),S=S.parent;return{name:y,path:g,params:p,matched:I,meta:I0(I)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Pf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function T0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:E0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function E0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function I0(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function Mf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function qg(t,e){return e.children.some(n=>n===t||qg(t,n))}const Hg=/#/g,C0=/&/g,S0=/\//g,k0=/=/g,A0=/\?/g,zg=/\+/g,R0=/%5B/g,N0=/%5D/g,Kg=/%5E/g,x0=/%60/g,Wg=/%7B/g,O0=/%7C/g,Gg=/%7D/g,D0=/%20/g;function _h(t){return encodeURI(""+t).replace(O0,"|").replace(R0,"[").replace(N0,"]")}function P0(t){return _h(t).replace(Wg,"{").replace(Gg,"}").replace(Kg,"^")}function ol(t){return _h(t).replace(zg,"%2B").replace(D0,"+").replace(Hg,"%23").replace(C0,"%26").replace(x0,"`").replace(Wg,"{").replace(Gg,"}").replace(Kg,"^")}function L0(t){return ol(t).replace(k0,"%3D")}function M0(t){return _h(t).replace(Hg,"%23").replace(A0,"%3F")}function U0(t){return t==null?"":M0(t).replace(S0,"%2F")}function Sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function F0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(zg," "),o=i.indexOf("="),a=Sa(o<0?i:i.slice(0,o)),c=o<0?null:Sa(i.slice(o+1));if(a in e){let u=e[a];en(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Uf(t){let e="";for(let n in t){const s=t[n];if(n=L0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(s)?s.map(i=>i&&ol(i)):[s&&ol(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function B0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=en(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const V0=Symbol(""),Ff=Symbol(""),wh=Symbol(""),Zg=Symbol(""),al=Symbol("");function ni(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Qn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Nr(4,{from:n,to:e})):h instanceof Error?a(h):h0(h)?a(Nr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Eu(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if($0(a)){const u=(a.__vccOpts||a)[e];u&&r.push(Qn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=WE(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Qn(d,n,s,i,o)()}))}}return r}function $0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bf(t){const e=Yt(wh),n=Yt(Zg),s=Ot(()=>e.resolve(is(t.to))),r=Ot(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Rr.bind(null,l));if(d>-1)return d;const p=Vf(c[u-2]);return u>1&&Vf(l)===p&&h[h.length-1].path!==p?h.findIndex(Rr.bind(null,c[u-2])):d}),i=Ot(()=>r.value>-1&&z0(n.params,s.value.params)),o=Ot(()=>r.value>-1&&r.value===n.matched.length-1&&Bg(n.params,s.value.params));function a(c={}){return H0(c)?e[is(t.replace)?"replace":"push"](is(t.to)).catch(vi):Promise.resolve()}return{route:s,href:Ot(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const j0=Tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bf,setup(t,{slots:e}){const n=zr(Bf(t)),{options:s}=Yt(wh),r=Ot(()=>({[$f(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[$f(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),q0=j0;function H0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!en(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $f=(t,e,n)=>t??e??n,K0=Tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Yt(al),r=Ot(()=>t.route||s.value),i=Yt(Ff,0),o=Ot(()=>{let u=is(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Ot(()=>r.value.matched[o.value]);oa(Ff,Ot(()=>o.value+1)),oa(V0,a),oa(al,r);const c=oh();return hi(()=>[c.value,a.value,t.name],([u,l,h],[d,p,g])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!Rr(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return jf(n.default,{Component:d,route:u});const p=h.props[l],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,I=kg(d,Ce({},g,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return jf(n.default,{Component:I,route:u})||I}}});function jf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qg=K0;function W0(t){const e=b0(t.routes,t),n=t.parseQuery||F0,s=t.stringifyQuery||Uf,r=t.history,i=ni(),o=ni(),a=ni(),c=jb(zn);let u=zn;hr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=bu.bind(null,E=>""+E),h=bu.bind(null,U0),d=bu.bind(null,Sa);function p(E,B){let L,G;return $g(E)?(L=e.getRecordMatcher(E),G=B):G=E,e.addRoute(G,L)}function g(E){const B=e.getRecordMatcher(E);B&&e.removeRoute(B)}function y(){return e.getRoutes().map(E=>E.record)}function I(E){return!!e.getRecordMatcher(E)}function S(E,B){if(B=Ce({},B||c.value),typeof E=="string"){const f=Tu(n,E,B.path),m=e.resolve({path:f.path},B),v=r.createHref(f.fullPath);return Ce(f,m,{params:d(m.params),hash:Sa(f.hash),redirectedFrom:void 0,href:v})}let L;if("path"in E)L=Ce({},E,{path:Tu(n,E.path,B.path).path});else{const f=Ce({},E.params);for(const m in f)f[m]==null&&delete f[m];L=Ce({},E,{params:h(E.params)}),B.params=h(B.params)}const G=e.resolve(L,B),_e=E.hash||"";G.params=l(d(G.params));const Ue=QE(s,Ce({},E,{hash:P0(_e),path:G.path})),fe=r.createHref(Ue);return Ce({fullPath:Ue,hash:_e,query:s===Uf?B0(E.query):E.query||{}},G,{redirectedFrom:void 0,href:fe})}function _(E){return typeof E=="string"?Tu(n,E,c.value.path):Ce({},E)}function b(E,B){if(u!==E)return Nr(8,{from:B,to:E})}function D(E){return j(E)}function M(E){return D(Ce(_(E),{replace:!0}))}function K(E){const B=E.matched[E.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let G=typeof L=="function"?L(E):L;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=_(G):{path:G},G.params={}),Ce({query:E.query,hash:E.hash,params:"path"in G?{}:E.params},G)}}function j(E,B){const L=u=S(E),G=c.value,_e=E.state,Ue=E.force,fe=E.replace===!0,f=K(L);if(f)return j(Ce(_(f),{state:typeof f=="object"?Ce({},_e,f.state):_e,force:Ue,replace:fe}),B||L);const m=L;m.redirectedFrom=B;let v;return!Ue&&XE(s,G,L)&&(v=Nr(16,{to:m,from:G}),Cs(G,G,!0,!1)),(v?Promise.resolve(v):J(m,G)).catch(w=>In(w)?In(w,2)?w:Ht(w):Ne(w,m,G)).then(w=>{if(w){if(In(w,2))return j(Ce({replace:fe},_(w.to),{state:typeof w.to=="object"?Ce({},_e,w.to.state):_e,force:Ue}),B||m)}else w=he(m,G,!0,fe,_e);return te(m,G,w),w})}function R(E,B){const L=b(E,B);return L?Promise.reject(L):Promise.resolve()}function J(E,B){let L;const[G,_e,Ue]=G0(E,B);L=Eu(G.reverse(),"beforeRouteLeave",E,B);for(const f of G)f.leaveGuards.forEach(m=>{L.push(Qn(m,E,B))});const fe=R.bind(null,E,B);return L.push(fe),lr(L).then(()=>{L=[];for(const f of i.list())L.push(Qn(f,E,B));return L.push(fe),lr(L)}).then(()=>{L=Eu(_e,"beforeRouteUpdate",E,B);for(const f of _e)f.updateGuards.forEach(m=>{L.push(Qn(m,E,B))});return L.push(fe),lr(L)}).then(()=>{L=[];for(const f of E.matched)if(f.beforeEnter&&!B.matched.includes(f))if(en(f.beforeEnter))for(const m of f.beforeEnter)L.push(Qn(m,E,B));else L.push(Qn(f.beforeEnter,E,B));return L.push(fe),lr(L)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),L=Eu(Ue,"beforeRouteEnter",E,B),L.push(fe),lr(L))).then(()=>{L=[];for(const f of o.list())L.push(Qn(f,E,B));return L.push(fe),lr(L)}).catch(f=>In(f,8)?f:Promise.reject(f))}function te(E,B,L){for(const G of a.list())G(E,B,L)}function he(E,B,L,G,_e){const Ue=b(E,B);if(Ue)return Ue;const fe=B===zn,f=hr?history.state:{};L&&(G||fe?r.replace(E.fullPath,Ce({scroll:fe&&f&&f.scroll},_e)):r.push(E.fullPath,_e)),c.value=E,Cs(E,B,L,fe),Ht()}let $;function Ee(){$||($=r.listen((E,B,L)=>{if(!Bo.listening)return;const G=S(E),_e=K(G);if(_e){j(Ce(_e,{replace:!0}),G).catch(vi);return}u=G;const Ue=c.value;hr&&i0(Rf(Ue.fullPath,L.delta),Cc()),J(G,Ue).catch(fe=>In(fe,12)?fe:In(fe,2)?(j(fe.to,G).then(f=>{In(f,20)&&!L.delta&&L.type===Mi.pop&&r.go(-1,!1)}).catch(vi),Promise.reject()):(L.delta&&r.go(-L.delta,!1),Ne(fe,G,Ue))).then(fe=>{fe=fe||he(G,Ue,!1),fe&&(L.delta&&!In(fe,8)?r.go(-L.delta,!1):L.type===Mi.pop&&In(fe,20)&&r.go(-1,!1)),te(G,Ue,fe)}).catch(vi)}))}let Ae=ni(),He=ni(),Me;function Ne(E,B,L){Ht(E);const G=He.list();return G.length?G.forEach(_e=>_e(E,B,L)):console.error(E),Promise.reject(E)}function Se(){return Me&&c.value!==zn?Promise.resolve():new Promise((E,B)=>{Ae.add([E,B])})}function Ht(E){return Me||(Me=!E,Ee(),Ae.list().forEach(([B,L])=>E?L(E):B()),Ae.reset()),E}function Cs(E,B,L,G){const{scrollBehavior:_e}=t;if(!hr||!_e)return Promise.resolve();const Ue=!L&&o0(Rf(E.fullPath,0))||(G||!L)&&history.state&&history.state.scroll||null;return pc().then(()=>_e(E,B,Ue)).then(fe=>fe&&r0(fe)).catch(fe=>Ne(fe,E,B))}const zt=E=>r.go(E);let Ct;const ar=new Set,Bo={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:I,getRoutes:y,resolve:S,options:t,push:D,replace:M,go:zt,back:()=>zt(-1),forward:()=>zt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:He.add,isReady:Se,install(E){const B=this;E.component("RouterLink",q0),E.component("RouterView",Qg),E.config.globalProperties.$router=B,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>is(c)}),hr&&!Ct&&c.value===zn&&(Ct=!0,D(r.location).catch(_e=>{}));const L={};for(const _e in zn)L[_e]=Ot(()=>c.value[_e]);E.provide(wh,B),E.provide(Zg,zr(L)),E.provide(al,c);const G=E.unmount;ar.add(E),E.unmount=function(){ar.delete(E),ar.size<1&&(u=zn,$&&$(),$=null,c.value=zn,Ct=!1,Me=!1),G()}}};return Bo}function lr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function G0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Rr(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Rr(u,c))||r.push(c))}return[n,s,r]}const Z0=t=>(tT("data-v-029362bf"),t=t(),nT(),t),Q0=Z0(()=>bs("div",{id:"modal"},null,-1)),X0=Tn({__name:"App",setup(t){return(e,n)=>(Be(),Vt(at,null,[st(is(Qg)),Q0],64))}});const Y0=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},J0=Y0(X0,[["__scopeId","data-v-029362bf"]]),eI="modulepreload",tI=function(t){return"/"+t},qf={},Wo=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=tI(i),i in qf)return;qf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":eI,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},nI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const g=u<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},sI=function(t){const e=Xg(t);return Yg.encodeByteArray(e,!0)},ka=function(t){return sI(t).replace(/\./g,"")},Jg=function(t){try{return Yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,oI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jg(t[1]);return e&&JSON.parse(e)},Sc=()=>{try{return iI()||oI()||aI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ey=t=>{var e,n;return(n=(e=Sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ty=t=>{const e=ey(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cI=()=>{var t;return(t=Sc())===null||t===void 0?void 0:t.config},ny=t=>{var e;return(e=Sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function sy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ka(JSON.stringify(n)),ka(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function hI(){var t;const e=(t=Sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pI(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mI(){try{return typeof indexedDB=="object"}catch{return!1}}function gI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yI,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,go.prototype.create)}}class go{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?vI(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new En(r,a,s)}}function vI(t,e){return t.replace(_I,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const _I=/\{\$([^}]+)}/g;function wI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Hf(i)&&Hf(o)){if(!Aa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Hf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bI(t,e){const n=new TI(t,e);return n.subscribe.bind(n)}class TI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");EI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Iu),r.error===void 0&&(r.error=Iu),r.complete===void 0&&(r.complete=Iu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Iu(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class ms{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new uI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SI(e))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ns){return this.instances.has(e)}getOptions(e=Ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:CI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ns){return this.component?this.component.multipleInstances?e:Ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CI(t){return t===Ns?void 0:t}function SI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const AI={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},RI=be.INFO,NI={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},xI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=NI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bh{constructor(e){this.name=e,this._logLevel=RI,this._logHandler=xI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const OI=(t,e)=>e.some(n=>t instanceof n);let zf,Kf;function DI(){return zf||(zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PI(){return Kf||(Kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ry=new WeakMap,cl=new WeakMap,iy=new WeakMap,Cu=new WeakMap,Th=new WeakMap;function LI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ry.set(n,t)}).catch(()=>{}),Th.set(e,t),e}function MI(t){if(cl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cl.set(t,e)}let ul={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UI(t){ul=t(ul)}function FI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Su(this),e,...n);return iy.set(s,e.sort?e.sort():[e]),cs(s)}:PI().includes(t)?function(...e){return t.apply(Su(this),e),cs(ry.get(this))}:function(...e){return cs(t.apply(Su(this),e))}}function BI(t){return typeof t=="function"?FI(t):(t instanceof IDBTransaction&&MI(t),OI(t,DI())?new Proxy(t,ul):t)}function cs(t){if(t instanceof IDBRequest)return LI(t);if(Cu.has(t))return Cu.get(t);const e=BI(t);return e!==t&&(Cu.set(t,e),Th.set(e,t)),e}const Su=t=>Th.get(t);function VI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=cs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(cs(o.result),c.oldVersion,c.newVersion,cs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const $I=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],ku=new Map;function Wf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ku.get(e))return ku.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=jI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||$I.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ku.set(e,i),i}UI(t=>({...t,get:(e,n,s)=>Wf(e,n)||t.get(e,n,s),has:(e,n)=>!!Wf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ll="@firebase/app",Gf="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new bh("@firebase/app"),zI="@firebase/app-compat",KI="@firebase/analytics-compat",WI="@firebase/analytics",GI="@firebase/app-check-compat",ZI="@firebase/app-check",QI="@firebase/auth",XI="@firebase/auth-compat",YI="@firebase/database",JI="@firebase/database-compat",eC="@firebase/functions",tC="@firebase/functions-compat",nC="@firebase/installations",sC="@firebase/installations-compat",rC="@firebase/messaging",iC="@firebase/messaging-compat",oC="@firebase/performance",aC="@firebase/performance-compat",cC="@firebase/remote-config",uC="@firebase/remote-config-compat",lC="@firebase/storage",hC="@firebase/storage-compat",dC="@firebase/firestore",fC="@firebase/firestore-compat",pC="firebase",mC="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="[DEFAULT]",gC={[ll]:"fire-core",[zI]:"fire-core-compat",[WI]:"fire-analytics",[KI]:"fire-analytics-compat",[ZI]:"fire-app-check",[GI]:"fire-app-check-compat",[QI]:"fire-auth",[XI]:"fire-auth-compat",[YI]:"fire-rtdb",[JI]:"fire-rtdb-compat",[eC]:"fire-fn",[tC]:"fire-fn-compat",[nC]:"fire-iid",[sC]:"fire-iid-compat",[rC]:"fire-fcm",[iC]:"fire-fcm-compat",[oC]:"fire-perf",[aC]:"fire-perf-compat",[cC]:"fire-rc",[uC]:"fire-rc-compat",[lC]:"fire-gcs",[hC]:"fire-gcs-compat",[dC]:"fire-fst",[fC]:"fire-fst-compat","fire-js":"fire-js",[pC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map,dl=new Map;function yC(t,e){try{t.container.addComponent(e)}catch(n){Ws.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(dl.has(e))return Ws.debug(`There were multiple attempts to register component ${e}.`),!1;dl.set(e,t);for(const n of Ra.values())yC(n,t);return!0}function kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},us=new go("app","Firebase",vC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=mC;function oy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw us.create("bad-app-name",{appName:String(r)});if(n||(n=cI()),!n)throw us.create("no-options");const i=Ra.get(r);if(i){if(Aa(n,i.options)&&Aa(s,i.config))return i;throw us.create("duplicate-app",{appName:r})}const o=new kI(r);for(const c of dl.values())o.addComponent(c);const a=new _C(n,s,o);return Ra.set(r,a),a}function Eh(t=hl){const e=Ra.get(t);if(!e&&t===hl)return oy();if(!e)throw us.create("no-app",{appName:t});return e}function dn(t,e,n){var s;let r=(s=gC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ws.warn(a.join(" "));return}Gs(new ms(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wC="firebase-heartbeat-database",bC=1,Ui="firebase-heartbeat-store";let Au=null;function ay(){return Au||(Au=VI(wC,bC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}}).catch(t=>{throw us.create("idb-open",{originalErrorMessage:t.message})})),Au}async function TC(t){try{return(await ay()).transaction(Ui).objectStore(Ui).get(cy(t))}catch(e){if(e instanceof En)Ws.warn(e.message);else{const n=us.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ws.warn(n.message)}}}async function Zf(t,e){try{const s=(await ay()).transaction(Ui,"readwrite");return await s.objectStore(Ui).put(e,cy(t)),s.done}catch(n){if(n instanceof En)Ws.warn(n.message);else{const s=us.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ws.warn(s.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const EC=1024,IC=30*24*60*60*1e3;class CC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=IC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qf(),{heartbeatsToSend:n,unsentEntries:s}=SC(this._heartbeatsCache.heartbeats),r=ka(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Qf(){return new Date().toISOString().substring(0,10)}function SC(t,e=EC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Xf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mI()?gI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xf(t){return ka(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){Gs(new ms("platform-logger",e=>new qI(e),"PRIVATE")),Gs(new ms("heartbeat",e=>new CC(e),"PRIVATE")),dn(ll,Gf,t),dn(ll,Gf,"esm2017"),dn("fire-js","")}AC("");var RC="firebase",NC="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(RC,NC,"app");function Ih(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function uy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xC=uy,ly=new go("auth","Firebase",uy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new bh("@firebase/auth");function ca(t,...e){Yf.logLevel<=be.ERROR&&Yf.error(`Auth (${Kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,...e){throw Ch(t,...e)}function fn(t,...e){return Ch(t,...e)}function hy(t,e,n){const s=Object.assign(Object.assign({},xC()),{[e]:n});return new go("auth","Firebase",s).create(e,{appName:t.name})}function OC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&vn(t,"argument-error"),hy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ch(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ly.create(t,...e)}function se(t,e,...n){if(!t)throw Ch(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ca(e),new Error(e)}function Ln(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Map;function An(t){Ln(t instanceof Function,"Expected a class definition");let e=Jf.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t,e){const n=kc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Aa(i,e??{}))return r;vn(r,"already-initialized")}return n.initialize({options:e})}function PC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LC(){return ep()==="http:"||ep()==="https:"}function ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LC()||dI()||"connection"in navigator)?navigator.onLine:!0}function UC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=lI()||fI()}get(){return MC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=new vo(3e4,6e4);function VC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ac(t,e,n,s,r={}){return fy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=yo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dy.fetch()(py(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function fy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},FC),e);try{const r=new jC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Go(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Go(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Go(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hy(t,l,u);vn(t,l)}}catch(r){if(r instanceof En)throw r;vn(t,"network-request-failed")}}async function $C(t,e,n,s,r={}){const i=await Ac(t,e,n,s,r);return"mfaPendingCredential"in i&&vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function py(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Sh(t.config,r):`${t.config.apiScheme}://${r}`}class jC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),BC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=fn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return Ac(t,"POST","/v1/accounts:delete",e)}async function HC(t,e){return Ac(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zC(t,e=!1){const n=We(t),s=await n.getIdToken(e),r=kh(s);se(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:wi(Ru(r.auth_time)),issuedAtTime:wi(Ru(r.iat)),expirationTime:wi(Ru(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ru(t){return Number(t)*1e3}function kh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const r=Jg(n);return r?JSON.parse(r):(ca("Failed to decode base64 JWT payload"),null)}catch(r){return ca("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function KC(t){const e=kh(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof En&&WC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function WC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Fi(t,HC(n,{idToken:s}));se(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?XC(i.providerUserInfo):[],a=QC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new my(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function ZC(t){const e=We(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function XC(t){return t.map(e=>{var{providerId:n}=e,s=Ih(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){const n=await fy(t,{},async()=>{const s=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=py(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await YC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Bi;return s&&(se(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(se(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class js{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ih(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new my(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zC(this,e)}reload(){return ZC(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new js(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fi(this,qC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:b,emailVerified:D,isAnonymous:M,providerData:K,stsTokenManager:j}=n;se(b&&j,e,"internal-error");const R=Bi.fromJSON(this.name,j);se(typeof b=="string",e,"internal-error"),Kn(h,e.name),Kn(d,e.name),se(typeof D=="boolean",e,"internal-error"),se(typeof M=="boolean",e,"internal-error"),Kn(p,e.name),Kn(g,e.name),Kn(y,e.name),Kn(I,e.name),Kn(S,e.name),Kn(_,e.name);const J=new js({uid:b,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:M,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:R,createdAt:S,lastLoginAt:_});return K&&Array.isArray(K)&&(J.providerData=K.map(te=>Object.assign({},te))),I&&(J._redirectEventId=I),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new Bi;r.updateFromServerResponse(n);const i=new js({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Na(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gy.type="NONE";const tp=gy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e,n){return`firebase:${t}:${e}:${n}`}class wr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ua(this.userKey,r.apiKey,i),this.fullPersistenceKey=ua("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?js._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wr(An(tp),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||An(tp);const o=ua(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=js._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new wr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Ty(e))return"Webos";if(Ah(e))return"Safari";if((e.includes("chrome/")||vy(e))&&!e.includes("edge/"))return"Chrome";if(wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function yy(t=yt()){return/firefox\//i.test(t)}function Ah(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vy(t=yt()){return/crios\//i.test(t)}function _y(t=yt()){return/iemobile/i.test(t)}function wy(t=yt()){return/android/i.test(t)}function by(t=yt()){return/blackberry/i.test(t)}function Ty(t=yt()){return/webos/i.test(t)}function Rc(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JC(t=yt()){var e;return Rc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eS(){return pI()&&document.documentMode===10}function Ey(t=yt()){return Rc(t)||wy(t)||Ty(t)||by(t)||/windows phone/i.test(t)||_y(t)}function tS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t,e=[]){let n;switch(t){case"Browser":n=np(yt());break;case"Worker":n=`${np(yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${s}`}/**
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
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ly,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await wr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new go("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Nc(t){return We(t)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=bI(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rS(t,e,n){const s=Nc(t);se(s._canInitEmulator,s,"emulator-config-failed"),se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Cy(e),{host:o,port:a}=iS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||oS()}function Cy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iS(t){const e=Cy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:rp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:rp(o)}}}function rp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(t,e){return $C(t,"POST","/v1/accounts:signInWithIdp",VC(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="http://localhost";class Zs extends Sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ih(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return br(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,br(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,br(e,n)}buildRequest(){const e={requestUri:aS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends _o{constructor(){super("facebook.com")}static credential(e){return Zs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends _o{constructor(){super("github.com")}static credential(e){return Zs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends _o{constructor(){super("twitter.com")}static credential(e,n){return Zs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return es.credential(n,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await js._fromIdTokenResponse(e,s,r),o=ip(s);return new xr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ip(s);return new xr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ip(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends En{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,xa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new xa(e,n,s,r)}}function ky(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(t,i,e,s):i})}async function cS(t,e,n=!1){const s=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Fi(t,ky(s,r,e,t),n);se(i.idToken,s,"internal-error");const o=kh(i.idToken);se(o,s,"internal-error");const{sub:a}=o;return se(t.uid===a,s,"user-mismatch"),xr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e,n=!1){const s="signIn",r=await ky(t,s,e),i=await xr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function hS(t,e,n,s){return We(t).onIdTokenChanged(e,n,s)}function dS(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function fS(t,e,n,s){return We(t).onAuthStateChanged(e,n,s)}function ZD(t){return We(t).signOut()}const Oa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){const t=yt();return Ah(t)||Rc(t)}const mS=1e3,gS=10;class Ry extends Ay{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pS()&&tS(),this.fallbackToPolling=Ey(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);eS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,gS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ry.type="LOCAL";const yS=Ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny extends Ay{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ny.type="SESSION";const xy=Ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new xc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await vS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Nh("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function wS(t){pn().location.href=t}/**
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
 */function Oy(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function bS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ES(){return Oy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="firebaseLocalStorageDb",IS=1,Da="firebaseLocalStorage",Py="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oc(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function CS(){const t=indexedDB.deleteDatabase(Dy);return new wo(t).toPromise()}function pl(){const t=indexedDB.open(Dy,IS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Da,{keyPath:Py})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Da)?e(s):(s.close(),await CS(),e(await pl()))})})}async function op(t,e,n){const s=Oc(t,!0).put({[Py]:e,value:n});return new wo(s).toPromise()}async function SS(t,e){const n=Oc(t,!1).get(e),s=await new wo(n).toPromise();return s===void 0?null:s.value}function ap(t,e){const n=Oc(t,!0).delete(e);return new wo(n).toPromise()}const kS=800,AS=3;class Ly{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(ES()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bS(),!this.activeServiceWorker)return;this.sender=new _S(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pl();return await op(e,Oa,"1"),await ap(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>op(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>SS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oc(r,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ly.type="LOCAL";const RS=Ly;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=fn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",NS().appendChild(s)})}function OS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new vo(3e4,6e4);/**
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
 */function My(t,e){return e?An(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends Sy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DS(t){return lS(t.auth,new xh(t),t.bypassAuthState)}function PS(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),uS(n,new xh(t),t.bypassAuthState)}async function LS(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),cS(n,new xh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DS;case"linkViaPopup":case"linkViaRedirect":return LS;case"reauthViaPopup":case"reauthViaRedirect":return PS;default:vn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=new vo(2e3,1e4);async function QD(t,e,n){const s=Nc(t);OC(t,e,Rh);const r=My(s,n);return new Ls(s,"signInViaPopup",e,r).executeNotNull()}class Ls extends Uy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MS.get())};e()}}Ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="pendingRedirect",la=new Map;class FS extends Uy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const s=await BS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BS(t,e){const n=jS(e),s=$S(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function VS(t,e){la.set(t._key(),e)}function $S(t){return An(t._redirectPersistence)}function jS(t){return ua(US,t.config.apiKey,t.name)}async function qS(t,e,n=!1){const s=Nc(t),r=My(s,e),o=await new FS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=10*60*1e3;class zS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Fy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HS&&this.cachedEventUids.clear(),this.cachedEventUids.has(cp(e))}saveEventToCache(e){this.cachedEventUids.add(cp(e)),this.lastProcessedEventTime=Date.now()}}function cp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e={}){return Ac(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZS=/^https?/;async function QS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WS(t);for(const n of e)try{if(XS(n))return}catch{}vn(t,"unauthorized-domain")}function XS(t){const e=fl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ZS.test(n))return!1;if(GS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const YS=new vo(3e4,6e4);function up(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JS(t){return new Promise((e,n)=>{var s,r,i;function o(){up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{up(),n(fn(t,"network-request-failed"))},timeout:YS.get()})}if(!((r=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const a=OS("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},xS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ha=null,e})}let ha=null;function ek(t){return ha=ha||JS(t),ha}/**
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
 */const tk=new vo(5e3,15e3),nk="__/auth/iframe",sk="emulator/auth/iframe",rk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ik=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ok(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sh(e,sk):`https://${t.config.authDomain}/${nk}`,s={apiKey:e.apiKey,appName:t.name,v:Kr},r=ik.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${yo(s).slice(1)}`}async function ak(t){const e=await ek(t),n=pn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:ok(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=pn().setTimeout(()=>{i(o)},tk.get());function c(){pn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ck={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uk=500,lk=600,hk="_blank",dk="http://localhost";class lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fk(t,e,n,s=uk,r=lk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ck),{width:s.toString(),height:r.toString(),top:i,left:o}),u=yt().toLowerCase();n&&(a=vy(u)?hk:n),yy(u)&&(e=e||dk,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(JC(u)&&a!=="_self")return pk(e||"",a),new lp(null);const h=window.open(e||"",a,l);se(h,t,"popup-blocked");try{h.focus()}catch{}return new lp(h)}function pk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mk="__/auth/handler",gk="emulator/auth/handler";function hp(t,e,n,s,r,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Kr,eventId:r};if(e instanceof Rh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof _o){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${yk(t)}?${yo(a).slice(1)}`}function yk({config:t}){return t.emulator?Sh(t,gk):`https://${t.authDomain}/${mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="webStorageSupport";class vk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xy,this._completeRedirectFn=qS,this._overrideRedirectResult=VS}async _openPopup(e,n,s,r){var i;Ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=hp(e,n,s,fl(),r);return fk(e,o,Nh())}async _openRedirect(e,n,s,r){return await this._originValidation(e),wS(hp(e,n,s,fl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Ln(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ak(e),s=new zS(e);return n.register("authEvent",r=>(se(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nu,{type:Nu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Nu];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ey()||Ah()||Rc()}}const _k=vk;var dp="@firebase/auth",fp="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tk(t){Gs(new ms("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{se(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),se(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iy(t)},l=new sS(a,c,u);return PC(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gs(new ms("auth-internal",e=>{const n=Nc(e.getProvider("auth").getImmediate());return(s=>new wk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(dp,fp,bk(t)),dn(dp,fp,"esm2017")}/**
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
 */const Ek=5*60,Ik=ny("authIdTokenMaxAge")||Ek;let pp=null;const Ck=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ik)return;const r=n==null?void 0:n.token;pp!==r&&(pp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Sk(t=Eh()){const e=kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DC(t,{popupRedirectResolver:_k,persistence:[RS,yS,xy]}),s=ny("authTokenSyncURL");if(s){const i=Ck(s);dS(n,i,()=>i(n.currentUser)),hS(n,o=>i(o))}const r=ey("auth");return r&&rS(n,`http://${r}`),n}Tk("Browser");var kk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Oh=Oh||{},re=kk||self;function Pa(){}function Dc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ak(t){return Object.prototype.hasOwnProperty.call(t,xu)&&t[xu]||(t[xu]=++Rk)}var xu="closure_uid_"+(1e9*Math.random()>>>0),Rk=0;function Nk(t,e,n){return t.call.apply(t.bind,arguments)}function xk(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=Nk:mt=xk,mt.apply(null,arguments)}function Zo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ts(){this.s=this.s,this.o=this.o}var Ok=0;Ts.prototype.s=!1;Ts.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ok!=0)&&Ak(this)};Ts.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const By=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function mp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Dc(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Dk=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",Pa,e),re.removeEventListener("test",Pa,e)}catch{}return t}();function La(t){return/^[\s\xa0]*$/.test(t)}var gp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ou(t,e){return t<e?-1:t>e?1:0}function Pc(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return Pc().indexOf(t)!=-1}function Ph(t){return Ph[" "](t),t}Ph[" "]=Pa;function Pk(t){var e=Uk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Lk=un("Opera"),Or=un("Trident")||un("MSIE"),Vy=un("Edge"),ml=Vy||Or,$y=un("Gecko")&&!(Pc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),Mk=Pc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function jy(){var t=re.document;return t?t.documentMode:void 0}var Ma;e:{var Du="",Pu=function(){var t=Pc();if($y)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vy)return/Edge\/([\d\.]+)/.exec(t);if(Or)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Mk)return/WebKit\/(\S+)/.exec(t);if(Lk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pu&&(Du=Pu?Pu[1]:""),Or){var Lu=jy();if(Lu!=null&&Lu>parseFloat(Du)){Ma=String(Lu);break e}}Ma=Du}var Uk={};function Fk(){return Pk(function(){let t=0;const e=gp(String(Ma)).split("."),n=gp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ou(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ou(r[2].length==0,i[2].length==0)||Ou(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var gl;if(re.document&&Or){var yp=jy();gl=yp||parseInt(Ma,10)||void 0}else gl=void 0;var Bk=gl;function Vi(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($y){e:{try{Ph(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Vk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vi.X.h.call(this)}}lt(Vi,gt);var Vk={2:"touch",3:"pen",4:"mouse"};Vi.prototype.h=function(){Vi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var To="closure_listenable_"+(1e6*Math.random()|0),$k=0;function jk(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++$k,this.ba=this.ea=!1}function Lc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Lh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qy(t){const e={};for(const n in t)e[n]=t[n];return e}const vp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hy(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vp.length;i++)n=vp[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Mc(t){this.src=t,this.g={},this.h=0}Mc.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=vl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new jk(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function yl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=By(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Lc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Mh="closure_lm_"+(1e6*Math.random()|0),Mu={};function zy(t,e,n,s,r){if(s&&s.once)return Wy(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)zy(t,e[i],n,s,r);return null}return n=Bh(n),t&&t[To]?t.N(e,n,bo(s)?!!s.capture:!!s,r):Ky(t,e,n,!1,s,r)}function Ky(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=bo(r)?!!r.capture:!!r,a=Fh(t);if(a||(t[Mh]=a=new Mc(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=qk(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Dk||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Zy(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qk(){function t(n){return e.call(t.src,t.listener,n)}const e=Hk;return t}function Wy(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wy(t,e[i],n,s,r);return null}return n=Bh(n),t&&t[To]?t.O(e,n,bo(s)?!!s.capture:!!s,r):Ky(t,e,n,!0,s,r)}function Gy(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Gy(t,e[i],n,s,r);else s=bo(s)?!!s.capture:!!s,n=Bh(n),t&&t[To]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=vl(i,n,s,r),-1<n&&(Lc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vl(e,n,s,r)),(n=-1<t?e[t]:null)&&Uh(n))}function Uh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[To])yl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zy(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Fh(e))?(yl(n,t),n.h==0&&(n.src=null,e[Mh]=null)):Lc(t)}}}function Zy(t){return t in Mu?Mu[t]:Mu[t]="on"+t}function Hk(t,e){if(t.ba)t=!0;else{e=new Vi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Uh(t),t=n.call(s,e)}return t}function Fh(t){return t=t[Mh],t instanceof Mc?t:null}var Uu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bh(t){return typeof t=="function"?t:(t[Uu]||(t[Uu]=function(e){return t.handleEvent(e)}),t[Uu])}function it(){Ts.call(this),this.i=new Mc(this),this.P=this,this.I=null}lt(it,Ts);it.prototype[To]=!0;it.prototype.removeEventListener=function(t,e,n,s){Gy(this,t,e,n,s)};function ut(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var r=e;e=new gt(s,t),Hy(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Qo(o,s,!0,e)&&r}if(o=e.g=t,r=Qo(o,s,!0,e)&&r,r=Qo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Qo(o,s,!1,e)&&r}it.prototype.M=function(){if(it.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Lc(n[s]);delete t.g[e],t.h--}}this.I=null};it.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};it.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&yl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Vh=re.JSON.stringify;function zk(){var t=Yy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Kk{constructor(){this.h=this.g=null}add(e,n){const s=Qy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Qy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Wk,t=>t.reset());class Wk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gk(t){re.setTimeout(()=>{throw t},0)}function Xy(t,e){_l||Zk(),wl||(_l(),wl=!0),Yy.add(t,e)}var _l;function Zk(){var t=re.Promise.resolve(void 0);_l=function(){t.then(Qk)}}var wl=!1,Yy=new Kk;function Qk(){for(var t;t=zk();){try{t.h.call(t.g)}catch(n){Gk(n)}var e=Qy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wl=!1}function Uc(t,e){it.call(this),this.h=t||1,this.g=e||re,this.j=mt(this.lb,this),this.l=Date.now()}lt(Uc,it);z=Uc.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&($h(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $h(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Uc.X.M.call(this),$h(this),delete this.g};function jh(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Jy(t){t.g=jh(()=>{t.g=null,t.i&&(t.i=!1,Jy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Xk extends Ts{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jy(this)}M(){super.M(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(t){Ts.call(this),this.h=t,this.g={}}lt($i,Ts);var _p=[];function ev(t,e,n,s){Array.isArray(n)||(n&&(_p[0]=n.toString()),n=_p);for(var r=0;r<n.length;r++){var i=zy(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function tv(t){Lh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Uh(e)},t),t.g={}}$i.prototype.M=function(){$i.X.M.call(this),tv(this)};$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fc(){this.g=!0}Fc.prototype.Aa=function(){this.g=!1};function Yk(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Jk(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function mr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tA(t,n)+(s?" "+s:"")})}function eA(t,e){t.info(function(){return"TIMEOUT: "+e})}Fc.prototype.info=function(){};function tA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Vh(n)}catch{return e}}var nr={},wp=null;function Bc(){return wp=wp||new it}nr.Pa="serverreachability";function nv(t){gt.call(this,nr.Pa,t)}lt(nv,gt);function ji(t){const e=Bc();ut(e,new nv(e))}nr.STAT_EVENT="statevent";function sv(t,e){gt.call(this,nr.STAT_EVENT,t),this.stat=e}lt(sv,gt);function Tt(t){const e=Bc();ut(e,new sv(e,t))}nr.Qa="timingevent";function rv(t,e){gt.call(this,nr.Qa,t),this.size=e}lt(rv,gt);function Eo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Vc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},iv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function qh(){}qh.prototype.h=null;function bp(t){return t.h||(t.h=t.i())}function ov(){}var Io={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Hh(){gt.call(this,"d")}lt(Hh,gt);function zh(){gt.call(this,"c")}lt(zh,gt);var bl;function $c(){}lt($c,qh);$c.prototype.g=function(){return new XMLHttpRequest};$c.prototype.i=function(){return{}};bl=new $c;function Co(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new $i(this),this.O=nA,t=ml?125:void 0,this.T=new Uc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new av}function av(){this.i=null,this.g="",this.h=!1}var nA=45e3,Tl={},Ua={};z=Co.prototype;z.setTimeout=function(t){this.O=t};function El(t,e,n){t.K=1,t.v=qc(Mn(e)),t.s=n,t.P=!0,cv(t,null)}function cv(t,e){t.F=Date.now(),So(t),t.A=Mn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),gv(n.i,"t",s),t.C=0,n=t.l.H,t.h=new av,t.g=Uv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Xk(mt(t.La,t,t.g),t.N)),ev(t.S,t.g,"readystatechange",t.ib),e=t.H?qy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ji(),Yk(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&Rn(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const l=Rn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ml||this.g&&(this.h.h||this.g.fa()||Cp(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ji(3):ji(2)),jc(this);var n=this.g.aa();this.Y=n;t:if(uv(this)){var s=Cp(this.g);t="";var r=s.length,i=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ms(this),bi(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Jk(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!La(a)){var u=a;break t}}u=null}if(n=u)mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Il(this,n);else{this.i=!1,this.o=3,Tt(12),Ms(this),bi(this);break e}}this.P?(lv(this,l,o),ml&&this.i&&l==3&&(ev(this.S,this.T,"tick",this.hb),this.T.start())):(mr(this.j,this.m,o,null),Il(this,o)),l==4&&Ms(this),this.i&&!this.I&&(l==4?Dv(this.l,this):(this.i=!1,So(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),Ms(this),bi(this)}}}catch{}finally{}};function uv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function lv(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=sA(t,n),r==Ua){e==4&&(t.o=4,Tt(14),s=!1),mr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Tl){t.o=4,Tt(15),mr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else mr(t.j,t.m,r,null),Il(t,r);uv(t)&&r!=Ua&&r!=Tl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yh(e),e.K=!0,Tt(11))):(mr(t.j,t.m,n,"[Invalid Chunked Response]"),Ms(t),bi(t))}z.hb=function(){if(this.g){var t=Rn(this.g),e=this.g.fa();this.C<e.length&&(jc(this),lv(this,t,e),this.i&&t!=4&&So(this))}};function sA(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ua:(n=Number(e.substring(n,s)),isNaN(n)?Tl:(s+=1,s+n>e.length?Ua:(e=e.substr(s,n),t.C=s+n,e)))}z.cancel=function(){this.I=!0,Ms(this)};function So(t){t.V=Date.now()+t.O,hv(t,t.O)}function hv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Eo(mt(t.gb,t),e)}function jc(t){t.B&&(re.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(eA(this.j,this.A),this.K!=2&&(ji(),Tt(17)),Ms(this),this.o=2,bi(this)):hv(this,this.V-t)};function bi(t){t.l.G==0||t.I||Dv(t.l,t)}function Ms(t){jc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$h(t.T),tv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Il(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Cl(n.h,t))){if(!t.J&&Cl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Va(n),Kc(n);else break e;Xh(n),Tt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Eo(mt(n.cb,n),6e3));if(1>=_v(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Us(n,11)}else if((t.J||n.g==t)&&Va(n),!La(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Kh(i,i.h),i.h=null))}if(s.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Le(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Mv(s,s.H?s.ka:null,s.V),o.J){wv(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(jc(a),So(a)),s.g=o}else xv(s);0<n.i.length&&Wc(n)}else u[0]!="stop"&&u[0]!="close"||Us(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Us(n,7):Qh(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ji(4)}catch{}}function rA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Dc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function iA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Dc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function dv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Dc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=iA(t),s=rA(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var fv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qs){this.h=e!==void 0?e:t.h,Fa(this,t.j),this.s=t.s,this.g=t.g,Ba(this,t.m),this.l=t.l,e=t.i;var n=new qi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tp(this,n),this.o=t.o}else t&&(n=String(t).match(fv))?(this.h=!!e,Fa(this,n[1]||"",!0),this.s=ai(n[2]||""),this.g=ai(n[3]||"",!0),Ba(this,n[4]),this.l=ai(n[5]||"",!0),Tp(this,n[6]||"",!0),this.o=ai(n[7]||"")):(this.h=!!e,this.i=new qi(null,this.h))}qs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ci(e,Ep,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ci(e,Ep,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ci(n,n.charAt(0)=="/"?uA:cA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ci(n,hA)),t.join("")};function Mn(t){return new qs(t)}function Fa(t,e,n){t.j=n?ai(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ba(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tp(t,e,n){e instanceof qi?(t.i=e,dA(t.i,t.h)):(n||(e=ci(e,lA)),t.i=new qi(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function qc(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ai(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ci(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,aA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function aA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ep=/[#\/\?@]/g,cA=/[#\?:]/g,uA=/[#\?]/g,lA=/[#\?@]/g,hA=/#/g;function qi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Es(t){t.g||(t.g=new Map,t.h=0,t.i&&oA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=qi.prototype;z.add=function(t,e){Es(this),this.i=null,t=Wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pv(t,e){Es(t),e=Wr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function mv(t,e){return Es(t),e=Wr(t,e),t.g.has(e)}z.forEach=function(t,e){Es(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};z.oa=function(){Es(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};z.W=function(t){Es(this);let e=[];if(typeof t=="string")mv(this,t)&&(e=e.concat(this.g.get(Wr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Es(this),this.i=null,t=Wr(this,t),mv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function gv(t,e,n){pv(t,e),0<n.length&&(t.i=null,t.g.set(Wr(t,e),Dh(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dA(t,e){e&&!t.j&&(Es(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(pv(this,s),gv(this,r,n))},t)),t.j=e}var fA=class{constructor(e,n){this.h=e,this.g=n}};function yv(t){this.l=t||pA,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ga&&re.g.Ga()&&re.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pA=10;function vv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _v(t){return t.h?1:t.g?t.g.size:0}function Cl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Kh(t,e){t.g?t.g.add(e):t.h=e}function wv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yv.prototype.cancel=function(){if(this.i=bv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dh(t.i)}function Wh(){}Wh.prototype.stringify=function(t){return re.JSON.stringify(t,void 0)};Wh.prototype.parse=function(t){return re.JSON.parse(t,void 0)};function mA(){this.g=new Wh}function gA(t,e,n){const s=n||"";try{dv(t,function(r,i){let o=r;bo(r)&&(o=Vh(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function yA(t,e){const n=new Fc;if(re.Image){const s=new Image;s.onload=Zo(Xo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zo(Xo,n,s,"TestLoadImage: error",!1,e),s.onabort=Zo(Xo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zo(Xo,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Xo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ko(t){this.l=t.ac||null,this.j=t.jb||!1}lt(ko,qh);ko.prototype.g=function(){return new Hc(this.l,this.j)};ko.prototype.i=function(t){return function(){return t}}({});function Hc(t,e){it.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Hc,it);var Gh=0;z=Hc.prototype;z.open=function(t,e){if(this.readyState!=Gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hi(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||re).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=Gh};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Tv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ao(this):Hi(this),this.readyState==3&&Tv(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Ao(this))};z.Ua=function(t){this.g&&(this.response=t,Ao(this))};z.ga=function(){this.g&&Ao(this)};function Ao(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hi(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Hi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vA=re.JSON.parse;function $e(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ev,this.K=this.L=!1}lt($e,it);var Ev="",_A=/^https?$/i,wA=["POST","PUT"];z=$e.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bl.g(),this.C=this.u?bp(this.u):bp(bl),this.g.onreadystatechange=mt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ip(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=re.FormData&&t instanceof re.FormData,!(0<=By(wA,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Sv(this),0<this.B&&((this.K=bA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.qa,this)):this.A=jh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ip(this,i)}};function bA(t){return Or&&Fk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof Oh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function Ip(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Iv(t),zc(t)}function Iv(t){t.D||(t.D=!0,ut(t,"complete"),ut(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),zc(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zc(this,!0)),$e.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?Cv(this):this.fb())};z.fb=function(){Cv(this)};function Cv(t){if(t.h&&typeof Oh<"u"&&(!t.C[1]||Rn(t)!=4||t.aa()!=2)){if(t.v&&Rn(t)==4)jh(t.Ha,0,t);else if(ut(t,"readystatechange"),Rn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(fv)[1]||null;if(!r&&re.self&&re.self.location){var i=re.self.location.protocol;r=i.substr(0,i.length-1)}s=!_A.test(r?r.toLowerCase():"")}n=s}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var o=2<Rn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Iv(t)}}finally{zc(t)}}}}function zc(t,e){if(t.g){Sv(t);const n=t.g,s=t.C[0]?Pa:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=s}catch{}}}function Sv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}function Rn(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vA(e)}};function Cp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ev:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kv(t){let e="";return Lh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Zh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=kv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function si(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Av(t){this.Ca=0,this.i=[],this.j=new Fc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=si("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=si("baseRetryDelayMs",5e3,t),this.bb=si("retryDelaySeedMs",1e4,t),this.$a=si("forwardChannelMaxRetries",2,t),this.ta=si("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new yv(t&&t.concurrentRequestLimit),this.Fa=new mA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=Av.prototype;z.ma=8;z.G=1;function Qh(t){if(Rv(t),t.G==3){var e=t.U++,n=Mn(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Ro(t,n),e=new Co(t,t.j,e,void 0),e.K=2,e.v=qc(Mn(n)),n=!1,re.navigator&&re.navigator.sendBeacon&&(n=re.navigator.sendBeacon(e.v.toString(),"")),!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uv(e.l,null),e.g.da(e.v)),e.F=Date.now(),So(e)}Lv(t)}function Kc(t){t.g&&(Yh(t),t.g.cancel(),t.g=null)}function Rv(t){Kc(t),t.u&&(re.clearTimeout(t.u),t.u=null),Va(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Wc(t){vv(t.h)||t.m||(t.m=!0,Xy(t.Ja,t),t.C=0)}function TA(t,e){return _v(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Eo(mt(t.Ja,t,e),Pv(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Co(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=qy(i),Hy(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nv(this,r,e),n=Mn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Ro(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(kv(i)))+"&"+e:this.o&&Zh(n,this.o,i)),Kh(this.h,r),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),r.Z=!0,El(r,n,null)):El(r,n,e),this.G=2}}else this.G==3&&(t?Sp(this,t):this.i.length==0||vv(this.h)||Sp(this))};function Sp(t,e){var n;e?n=e.m:n=t.U++;const s=Mn(t.F);Le(s,"SID",t.I),Le(s,"RID",n),Le(s,"AID",t.T),Ro(t,s),t.o&&t.s&&Zh(s,t.o,t.s),n=new Co(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Nv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Kh(t.h,n),El(n,s,e)}function Ro(t,e){t.ia&&Lh(t.ia,function(n,s){Le(e,s,n)}),t.l&&dv({},function(n,s){Le(e,s,n)})}function Nv(t,e,n){n=Math.min(t.i.length,n);var s=t.l?mt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{gA(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function xv(t){t.g||t.u||(t.Z=1,Xy(t.Ia,t),t.A=0)}function Xh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Eo(mt(t.Ia,t),Pv(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,Ov(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Eo(mt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Tt(10),Kc(this),Ov(this))};function Yh(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function Ov(t){t.g=new Co(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mn(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Ro(t,e),t.o&&t.s&&Zh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=qc(Mn(e)),n.s=null,n.P=!0,cv(n,t)}z.cb=function(){this.v!=null&&(this.v=null,Kc(this),Xh(this),Tt(19))};function Va(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function Dv(t,e){var n=null;if(t.g==e){Va(t),Yh(t),t.g=null;var s=2}else if(Cl(t.h,e))n=e.D,wv(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Bc(),ut(s,new rv(s,n)),Wc(t)}else xv(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&TA(t,e)||s==2&&Xh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Us(t,5);break;case 4:Us(t,10);break;case 3:Us(t,6);break;default:Us(t,2)}}}function Pv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Us(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=mt(t.kb,t);n||(n=new qs("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Fa(n,"https"),qc(n)),yA(n.toString(),s)}else Tt(2);t.G=0,t.l&&t.l.va(e),Lv(t),Rv(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Lv(t){if(t.G=0,t.la=[],t.l){const e=bv(t.h);(e.length!=0||t.i.length!=0)&&(mp(t.la,e),mp(t.la,t.i),t.h.i.length=0,Dh(t.i),t.i.length=0),t.l.ua()}}function Mv(t,e,n){var s=n instanceof qs?Mn(n):new qs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ba(s,s.m);else{var r=re.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new qs(null,void 0);s&&Fa(i,s),e&&(i.g=e),r&&Ba(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Le(s,n,e),Le(s,"VER",t.ma),Ro(t,s),s}function Uv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new $e(new ko({jb:!0})):new $e(t.ra),e.Ka(t.H),e}function Fv(){}z=Fv.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function $a(){if(Or&&!(10<=Number(Bk)))throw Error("Environmental error: no available transport.")}$a.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){it.call(this),this.g=new Av(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!La(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!La(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gr(this)}lt(Ut,it);Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Mv(t,null,t.V),Wc(t)};Ut.prototype.close=function(){Qh(this.g)};Ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vh(t),t=n);e.i.push(new fA(e.ab++,t)),e.G==3&&Wc(e)};Ut.prototype.M=function(){this.g.l=null,delete this.j,Qh(this.g),delete this.g,Ut.X.M.call(this)};function Bv(t){Hh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(Bv,Hh);function Vv(){zh.call(this),this.status=1}lt(Vv,zh);function Gr(t){this.g=t}lt(Gr,Fv);Gr.prototype.xa=function(){ut(this.g,"a")};Gr.prototype.wa=function(t){ut(this.g,new Bv(t))};Gr.prototype.va=function(t){ut(this.g,new Vv)};Gr.prototype.ua=function(){ut(this.g,"b")};$a.prototype.createWebChannel=$a.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Vc.NO_ERROR=0;Vc.TIMEOUT=8;Vc.HTTP_ERROR=6;iv.COMPLETE="complete";ov.EventType=Io;Io.OPEN="a";Io.CLOSE="b";Io.ERROR="c";Io.MESSAGE="d";it.prototype.listen=it.prototype.N;$e.prototype.listenOnce=$e.prototype.O;$e.prototype.getLastError=$e.prototype.Oa;$e.prototype.getLastErrorCode=$e.prototype.Ea;$e.prototype.getStatus=$e.prototype.aa;$e.prototype.getResponseJson=$e.prototype.Sa;$e.prototype.getResponseText=$e.prototype.fa;$e.prototype.send=$e.prototype.da;$e.prototype.setWithCredentials=$e.prototype.Ka;var EA=function(){return new $a},IA=function(){return Bc()},Fu=Vc,CA=iv,SA=nr,kp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kA=ko,Yo=ov,AA=$e;const Ap="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Zr="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new bh("@firebase/firestore");function Rp(){return Qs.logLevel}function W(t,...e){if(Qs.logLevel<=be.DEBUG){const n=e.map(Jh);Qs.debug(`Firestore (${Zr}): ${t}`,...n)}}function Un(t,...e){if(Qs.logLevel<=be.ERROR){const n=e.map(Jh);Qs.error(`Firestore (${Zr}): ${t}`,...n)}}function Sl(t,...e){if(Qs.logLevel<=be.WARN){const n=e.map(Jh);Qs.warn(`Firestore (${Zr}): ${t}`,...n)}}function Jh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function Oe(t,e){t||ne()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class NA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xA{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Oe(typeof s.accessToken=="string"),new $v(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new ht(e)}}class OA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class DA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new OA(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LA{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.A=n.token,new PA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=MA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Ie(t,e){return t<e?-1:t>e?1:0}function Dr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Je(0,0))}static max(){return new ae(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(),s===void 0?s=e.length-n:s>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return zi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends zi{construct(e,n,s){return new Pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const UA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends zi{construct(e,n,s){return new pt(e,n,s)}static isValidIdentifier(e){return UA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new V(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new V(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new V(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Pe.fromString(e))}static fromName(e){return new Z(Pe.fromString(e).popFirst(5))}static empty(){return new Z(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Pe(e.slice()))}}function FA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ae.fromTimestamp(s===1e9?new Je(n+1,0):new Je(n,s));return new gs(r,Z.empty(),e)}function BA(t){return new gs(t.readTime,t.key,-1)}class gs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new gs(ae.min(),Z.empty(),-1)}static max(){return new gs(ae.max(),Z.empty(),-1)}}function VA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==$A)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function xo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ed{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ed.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ki&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t){return t==null}function ja(t){return t===0&&1/t==-1/0}function HA(t){return typeof t=="number"&&Number.isInteger(t)&&!ja(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const zA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ys(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=zA.exec(t);if(Oe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zv(t){const e=t.mapValue.fields.__previous_value__;return Hv(e)?zv(e):e}function Wi(t){const e=ys(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hv(t)?4:KA(t)?9007199254740991:10:ne()}function _n(t,e){if(t===e)return!0;const n=Xs(t);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=ys(s.timestampValue),o=ys(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Pr(s.bytesValue).isEqual(Pr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Qe(s.geoPointValue.latitude)===Qe(r.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Qe(s.integerValue)===Qe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Qe(s.doubleValue),o=Qe(r.doubleValue);return i===o?ja(i)===ja(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Dr(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Np(i)!==Np(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!_n(i[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function Gi(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Lr(t,e){if(t===e)return 0;const n=Xs(t),s=Xs(e);if(n!==s)return Ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Qe(r.integerValue||r.doubleValue),a=Qe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return xp(t.timestampValue,e.timestampValue);case 4:return xp(Wi(t),Wi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Pr(r),a=Pr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=Ie(o[c],a[c]);if(u!==0)return u}return Ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Ie(Qe(r.latitude),Qe(i.latitude));return o!==0?o:Ie(Qe(r.longitude),Qe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Lr(o[c],a[c]);if(u)return u}return Ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Jo.mapValue&&i===Jo.mapValue)return 0;if(r===Jo.mapValue)return 1;if(i===Jo.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=Ie(a[l],u[l]);if(h!==0)return h;const d=Lr(o[a[l]],c[u[l]]);if(d!==0)return d}return Ie(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=ys(t),s=ys(e),r=Ie(n.seconds,s.seconds);return r!==0?r:Ie(n.nanos,s.nanos)}function Mr(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=ys(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=kl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${kl(s.fields[a])}`;return i+"}"}(t.mapValue):ne();var e,n}function Op(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Al(t){return!!t&&"integerValue"in t}function td(t){return!!t&&"arrayValue"in t}function Dp(t){return!!t&&"nullValue"in t}function Pp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function da(t){return!!t&&"mapValue"in t}function Ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ti(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qa{constructor(e,n){this.position=e,this.inclusive=n}}function Lp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Z.comparator(Z.fromName(o.referenceValue),n.key):s=Lr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Kv{}class Xe extends Kv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new GA(e,n,s):n==="array-contains"?new XA(e,s):n==="in"?new YA(e,s):n==="not-in"?new JA(e,s):n==="array-contains-any"?new eR(e,s):new Xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ZA(e,s):new QA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Lr(n,this.value)):n!==null&&Xs(this.value)===Xs(n)&&this.matchesComparison(Lr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tn extends Kv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new tn(e,n)}matches(e){return Wv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Wv(t){return t.op==="and"}function Gv(t){return WA(t)&&Wv(t)}function WA(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Rl(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Mr(t.value);if(Gv(t))return t.filters.map(e=>Rl(e)).join(",");{const e=t.filters.map(n=>Rl(n)).join(",");return`${t.op}(${e})`}}function Zv(t,e){return t instanceof Xe?function(n,s){return s instanceof Xe&&n.op===s.op&&n.field.isEqual(s.field)&&_n(n.value,s.value)}(t,e):t instanceof tn?function(n,s){return s instanceof tn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Zv(i,s.filters[o]),!0):!1}(t,e):void ne()}function Qv(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Mr(e.value)}`}(t):t instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(Qv).join(" ,")+"}"}(t):"Filter"}class GA extends Xe{constructor(e,n,s){super(e,n,s),this.key=Z.fromName(s.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class ZA extends Xe{constructor(e,n){super(e,"in",n),this.keys=Xv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QA extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Xv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Z.fromName(s.referenceValue))}class XA extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return td(n)&&Gi(n.arrayValue,this.value)}}class YA extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gi(this.value.arrayValue,n)}}class JA extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gi(this.value.arrayValue,n)}}class eR extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!td(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Gi(this.value.arrayValue,s))}}/**
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
 */class Tr{constructor(e,n="asc"){this.field=e,this.dir=n}}function tR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ea(this.root,e,this.comparator,!0)}}class ea{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ot.RED,this.left=r??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ot(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Up(this.data.getIterator())}getIteratorFrom(e){return new Up(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Up{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new et(pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=pt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ti(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];da(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){sr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new kt(Ti(this.value))}}function Yv(t){const e=[];return sr(t.fields,(n,s)=>{const r=new pt([n]);if(da(s)){const i=Yv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new dt(e,0,ae.min(),ae.min(),ae.min(),kt.empty(),0)}static newFoundDocument(e,n,s,r){return new dt(e,1,n,ae.min(),s,r,0)}static newNoDocument(e,n){return new dt(e,2,n,ae.min(),ae.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ae.min(),ae.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Fp(t,e=null,n=[],s=[],r=null,i=null,o=null){return new nR(t,e,n,s,r,i,o)}function nd(t){const e=ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Rl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Mr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Mr(s)).join(",")),e.ft=n}return e.ft}function sd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mp(t.startAt,e.startAt)&&Mp(t.endAt,e.endAt)}function Nl(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function sR(t,e,n,s,r,i,o,a){return new Qr(t,e,n,s,r,i,o,a)}function rd(t){return new Qr(t)}function Bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function id(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Jv(t){return t.collectionGroup!==null}function Er(t){const e=ue(t);if(e.dt===null){e.dt=[];const n=Zc(e),s=id(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Tr(n)),e.dt.push(new Tr(pt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Tr(pt.keyField(),i))}}}return e.dt}function Fn(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=Fp(e.path,e.collectionGroup,Er(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Er(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Tr(i.field,o))}const s=e.endAt?new qa(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qa(e.startAt.position,e.startAt.inclusive):null;e._t=Fp(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function xl(t,e){e.getFirstInequalityField(),Zc(t);const n=t.filters.concat([e]);return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ol(t,e,n){return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qc(t,e){return sd(Fn(t),Fn(e))&&t.limitType===e.limitType}function e_(t){return`${nd(Fn(t))}|lt:${t.limitType}`}function Dl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Qv(s)).join(", ")}]`),Gc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Mr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Mr(s)).join(",")),`Target(${n})`}(Fn(t))}; limitType=${t.limitType})`}function Xc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Z.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Er(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Lp(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Er(n),s)||n.endAt&&!function(r,i,o){const a=Lp(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Er(n),s))}(t,e)}function rR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function t_(t){return(e,n)=>{let s=!1;for(const r of Er(t)){const i=iR(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function iR(t,e,n){const s=t.field.isKeyField()?Z.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Lr(a,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ja(e)?"-0":e}}function s_(t){return{integerValue:""+t}}function oR(t,e){return HA(e)?s_(e):n_(t,e)}/**
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
 */class Yc{constructor(){this._=void 0}}function aR(t,e,n){return t instanceof Ha?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Zi?i_(t,e):t instanceof Qi?o_(t,e):function(s,r){const i=r_(s,r),o=Vp(i)+Vp(s.gt);return Al(i)&&Al(s.gt)?s_(o):n_(s.yt,o)}(t,e)}function cR(t,e,n){return t instanceof Zi?i_(t,e):t instanceof Qi?o_(t,e):n}function r_(t,e){return t instanceof za?Al(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ha extends Yc{}class Zi extends Yc{constructor(e){super(),this.elements=e}}function i_(t,e){const n=a_(e);for(const s of t.elements)n.some(r=>_n(r,s))||n.push(s);return{arrayValue:{values:n}}}class Qi extends Yc{constructor(e){super(),this.elements=e}}function o_(t,e){let n=a_(e);for(const s of t.elements)n=n.filter(r=>!_n(r,s));return{arrayValue:{values:n}}}class za extends Yc{constructor(e,n){super(),this.yt=e,this.gt=n}}function Vp(t){return Qe(t.integerValue||t.doubleValue)}function a_(t){return td(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uR(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Zi&&s instanceof Zi||n instanceof Qi&&s instanceof Qi?Dr(n.elements,s.elements,_n):n instanceof za&&s instanceof za?_n(n.gt,s.gt):n instanceof Ha&&s instanceof Ha}(t.transform,e.transform)}class lR{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jc{}function c_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new od(t.key,qt.none()):new Oo(t.key,t.data,qt.none());{const n=t.data,s=kt.empty();let r=new et(pt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Is(t.key,s,new Lt(r.toArray()),qt.none())}}function hR(t,e,n){t instanceof Oo?function(s,r,i){const o=s.value.clone(),a=jp(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Is?function(s,r,i){if(!fa(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=jp(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(u_(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ei(t,e,n,s){return t instanceof Oo?function(r,i,o,a){if(!fa(r.precondition,i))return o;const c=r.value.clone(),u=qp(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Is?function(r,i,o,a){if(!fa(r.precondition,i))return o;const c=qp(r.fieldTransforms,a,i),u=i.data;return u.setAll(u_(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return fa(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function dR(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=r_(s.transform,r||null);i!=null&&(n===null&&(n=kt.empty()),n.set(s.field,i))}return n||null}function $p(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Dr(n,s,(r,i)=>uR(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends Jc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Is extends Jc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function u_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function jp(t,e,n){const s=new Map;Oe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,cR(o,a,n[r]))}return s}function qp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,aR(i,o,e))}return s}class od extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fR extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,ve;function mR(t){switch(t){default:return ne();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function l_(t){if(t===void 0)return Un("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ze.OK:return T.OK;case Ze.CANCELLED:return T.CANCELLED;case Ze.UNKNOWN:return T.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return T.INTERNAL;case Ze.UNAVAILABLE:return T.UNAVAILABLE;case Ze.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ze.NOT_FOUND:return T.NOT_FOUND;case Ze.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ze.ABORTED:return T.ABORTED;case Ze.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ze.DATA_LOSS:return T.DATA_LOSS;default:return ne()}}(ve=Ze||(Ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return qv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new tt(Z.comparator);function Bn(){return gR}const h_=new tt(Z.comparator);function ui(...t){let e=h_;for(const n of t)e=e.insert(n.key,n);return e}function d_(t){let e=h_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fs(){return Ii()}function f_(){return Ii()}function Ii(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const yR=new tt(Z.comparator),vR=new et(Z.comparator);function ge(...t){let e=vR;for(const n of t)e=e.add(n);return e}const _R=new et(Ie);function p_(){return _R}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new eu(ae.min(),r,p_(),Bn(),ge())}}class Do{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Do(s,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class m_{constructor(e,n){this.targetId=e,this.Et=n}}class g_{constructor(e,n,s=vt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Hp{constructor(){this.At=0,this.Rt=Kp(),this.bt=vt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ge(),n=ge(),s=ge();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ne()}}),new Do(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Kp()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class wR{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Bn(),this.qt=zp(),this.Ut=new et(Ie)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Nl(i))if(s===0){const o=new Z(i.path);this.Qt(n,o,dt.newNoDocument(o,ae.min()))}else Oe(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Nl(a.target)){const c=new Z(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,dt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ge();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new eu(e,n,this.Ut,this.Lt,s);return this.Lt=Bn(),this.qt=zp(),this.Ut=new et(Ie),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Hp,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new et(Ie),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Hp),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function zp(){return new tt(Z.comparator)}function Kp(){return new tt(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),TR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ER=(()=>({and:"AND",or:"OR"}))();class IR{constructor(e,n){this.databaseId=e,this.wt=n}}function Ka(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(t,e){return t.wt?e.toBase64():e.toUint8Array()}function CR(t,e){return Ka(t,e.toTimestamp())}function mn(t){return Oe(!!t),ae.fromTimestamp(function(e){const n=ys(e);return new Je(n.seconds,n.nanos)}(t))}function ad(t,e){return function(n){return new Pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function v_(t){const e=Pe.fromString(t);return Oe(T_(e)),e}function Pl(t,e){return ad(t.databaseId,e.path)}function Bu(t,e){const n=v_(e);if(n.get(1)!==t.databaseId.projectId)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(__(n))}function Ll(t,e){return ad(t.databaseId,e)}function SR(t){const e=v_(t);return e.length===4?Pe.emptyPath():__(e)}function Ml(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function __(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wp(t,e,n){return{name:Pl(t,e),fields:n.value.mapValue.fields}}function kR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(Oe(u===void 0||typeof u=="string"),vt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:l_(c.code);return new V(u,c.message||"")}(o);n=new g_(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Bu(t,s.document.name),i=mn(s.document.updateTime),o=s.document.createTime?mn(s.document.createTime):ae.min(),a=new kt({mapValue:{fields:s.document.fields}}),c=dt.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new pa(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Bu(t,s.document),i=s.readTime?mn(s.readTime):ae.min(),o=dt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new pa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Bu(t,s.document),i=s.removedTargetIds||[];n=new pa([],i,r,null)}else{if(!("filter"in e))return ne();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new pR(r),o=s.targetId;n=new m_(o,i)}}return n}function AR(t,e){let n;if(e instanceof Oo)n={update:Wp(t,e.key,e.value)};else if(e instanceof od)n={delete:Pl(t,e.key)};else if(e instanceof Is)n={update:Wp(t,e.key,e.data),updateMask:UR(e.fieldMask)};else{if(!(e instanceof fR))return ne();n={verify:Pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ha)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Zi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof za)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw ne()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:CR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ne()}(t,e.precondition)),n}function RR(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?mn(s.updateTime):mn(r);return i.isEqual(ae.min())&&(i=mn(r)),new lR(i,s.transformResults||[])}(n,e))):[]}function NR(t,e){return{documents:[Ll(t,e.path)]}}function xR(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ll(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ll(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return b_(tn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:dr(l.field),direction:PR(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Gc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function OR(t){let e=SR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Oe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=w_(l);return h instanceof tn&&Gv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Tr(fr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Gc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new qa(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new qa(d,h)}(n.endAt)),sR(e,r,o,i,a,"F",c,u)}function DR(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function w_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fr(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=fr(e.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fr(e.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fr(e.unaryFilter.field);return Xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(fr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(n=>w_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ne()}}(e.compositeFilter.op))}(t):ne()}function PR(t){return bR[t]}function LR(t){return TR[t]}function MR(t){return ER[t]}function dr(t){return{fieldPath:t.canonicalString()}}function fr(t){return pt.fromServerFormat(t.fieldPath)}function b_(t){return t instanceof Xe?function(e){if(e.op==="=="){if(Pp(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NAN"}};if(Dp(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pp(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NOT_NAN"}};if(Dp(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(e.field),op:LR(e.op),value:e.value}}}(t):t instanceof tn?function(e){const n=e.getFilters().map(s=>b_(s));return n.length===1?n[0]:{compositeFilter:{op:MR(e.op),filters:n}}}(t):ne()}function UR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function T_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&hR(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ei(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ei(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=f_();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=c_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,(n,s)=>$p(n,s))&&Dr(this.baseMutations,e.baseMutations,(n,s)=>$p(n,s))}}class cd{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Oe(e.mutations.length===s.length);let r=yR;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new cd(e,n,s,r)}}/**
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
 */class BR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hs{constructor(e,n,s,r,i=ae.min(),o=ae.min(),a=vt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.ie=e}}function $R(t){const e=OR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ol(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.Je=new qR}addToCollectionParentIndex(e,n){return this.Je.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(gs.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(gs.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class qR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new et(Pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new et(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ur(0)}static vn(){return new Ur(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ei(s.mutation,r,Lt.empty(),Je.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ge()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ge()){const r=Fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ui();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ge()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Bn();const o=Ii(),a=Ii();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Is)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ei(l.mutation,u,l.mutation.getFieldMask(),Je.now())):o.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new zR(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ii();let r=new tt((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Lt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ge()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=f_();l.forEach(d=>{if(!i.has(d)){const p=c_(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(Fs());let a=-1,c=i;return o.next(u=>A.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?A.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ge())).next(l=>({batchId:a,changes:d_(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(s=>{let r=ui();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ui();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(u,l){return new Qr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,dt.newInvalidDocument(u)))});let o=ui();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Ei(u.mutation,c,Lt.empty(),Je.now()),Xc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:mn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:$R(s.bundledQuery),readTime:mn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class GR{constructor(){this.overlays=new tt(Z.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fs();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=Fs(),i=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new tt((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Fs(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Fs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return A.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new BR(n,s));let i=this.es.get(n);i===void 0&&(i=ge(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.ns=new et(nt.ss),this.rs=new et(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new nt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new Z(new Pe([])),s=new nt(n,e),r=new nt(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Z(new Pe([])),s=new nt(n,e),r=new nt(n,e+1);let i=ge();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Z.comparator(e.key,n.key)||Ie(e._s,n._s)}static os(e,n){return Ie(e._s,n._s)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new et(nt.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FR(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new nt(n,0),r=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new et(Ie);return n.forEach(r=>{const i=new nt(r,0),o=new nt(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),A.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Z.isDocumentKey(i)||(i=i.child(""));const o=new nt(new Z(i),0);let a=new et(Ie);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return A.forEach(n.mutations,r=>{const i=new nt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new nt(n,0),r=this.gs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.Es=e,this.docs=new tt(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let s=Bn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():dt.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Bn();const o=n.path,a=new Z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||VA(BA(l),s)<=0||(r.has(l.key)||Xc(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ne()}As(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new XR(this)}getSize(e){return A.resolve(this.size)}}class XR extends HR{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.persistence=e,this.Rs=new Xr(n=>nd(n),sd),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ud,this.targetCount=0,this.vs=Ur.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ur(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ed(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new YR(this),this.indexManager=new jR,this.remoteDocumentCache=function(s){return new QR(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new VR(n),this.Ns=new WR(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new ZR(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){W("MemoryPersistence","Starting transaction:",e);const r=new eN(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return A.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class eN extends jA{constructor(e){super(),this.currentSequenceNumber=e}}class ld{constructor(e){this.persistence=e,this.Fs=new ud,this.$s=null}static Bs(e){return new ld(e)}get Ls(){if(this.$s)return this.$s;throw ne()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,s=>{const r=Z.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ge(),r=ge();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hd(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Bp(n))return A.resolve(null);let s=Fn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ol(n,null,"F"),s=Fn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ge(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Ol(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Bp(n)||r.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Rp()<=be.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dl(n)),this.Bi(e,o,n,FA(r,-1)))})}Fi(e,n){let s=new et(t_(e));return n.forEach((r,i)=>{Xc(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Rp()<=be.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Dl(n)),this.Ni.getDocumentsMatchingQuery(e,n,gs.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new tt(Ie),this.Ui=new Xr(i=>nd(i),sd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function sN(t,e,n,s){return new nN(t,e,n,s)}async function E_(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ge();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function rN(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const y=c.docVersions.get(p);Oe(y!==null),g.version.compareTo(y)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ge();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function I_(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=ue(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(vt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(g,y,I){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=Bn(),u=ge();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(oN(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(ae.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function oN(t,e,n){let s=ge(),r=ge();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Bn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function aN(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function cN(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Hs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Ul(t,e,n){const s=ue(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!xo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Gp(t,e,n){const s=ue(t);let r=ae.min(),i=ge();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=ue(a),h=l.Ui.get(u);return h!==void 0?A.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Fn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ae.min(),n?i:ge())).next(a=>(uN(s,rR(e),a),{documents:a,Hi:i})))}function uN(t,e,n){let s=t.Ki.get(e)||ae.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Zp{constructor(){this.activeTargetIds=p_()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lN{constructor(){this.Lr=new Zp,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Zp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);W("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(W("RestConnection","Received: ",c),c),c=>{throw Sl("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=dN[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new AA;a.setWithCredentials(!0),a.listenOnce(CA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fu.NO_ERROR:const u=a.getResponseJson();W("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Fu.TIMEOUT:W("Connection",'RPC "'+e+'" timed out'),o(new V(T.DEADLINE_EXCEEDED,"Request time out"));break;case Fu.HTTP_ERROR:const l=a.getStatus();if(W("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(d.status);o(new V(p,d.message))}else o(new V(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(T.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{W("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=EA(),o=IA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new kA({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");W("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new fN({Hr:g=>{h?W("Connection","Not sending because WebChannel is closed:",g):(l||(W("Connection","Opening WebChannel transport."),u.open(),l=!0),W("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,y,I)=>{g.listen(y,S=>{try{I(S)}catch(_){setTimeout(()=>{throw _},0)}})};return p(u,Yo.EventType.OPEN,()=>{h||W("Connection","WebChannel transport opened.")}),p(u,Yo.EventType.CLOSE,()=>{h||(h=!0,W("Connection","WebChannel transport closed"),d.io())}),p(u,Yo.EventType.ERROR,g=>{h||(h=!0,Sl("Connection","WebChannel transport errored:",g),d.io(new V(T.UNAVAILABLE,"The operation could not be completed")))}),p(u,Yo.EventType.MESSAGE,g=>{var y;if(!h){const I=g.data[0];Oe(!!I);const S=I,_=S.error||((y=S[0])===null||y===void 0?void 0:y.error);if(_){W("Connection","WebChannel received error:",_);const b=_.status;let D=function(K){const j=Ze[K];if(j!==void 0)return l_(j)}(b),M=_.message;D===void 0&&(D=T.INTERNAL,M="Unknown error status: "+b+" with message "+_.message),h=!0,d.io(new V(D,M)),u.close()}else W("Connection","WebChannel received:",I),d.ro(I)}}),p(o,SA.STAT_EVENT,g=>{g.stat===kp.PROXY?W("Connection","Detected buffering proxy"):g.stat===kp.NOPROXY&&W("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Vu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){return new IR(t,!0)}class C_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&W("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new C_(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new V(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mN extends S_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=kR(this.yt,e),s=function(r){if(!("targetChange"in r))return ae.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?mn(i.readTime):ae.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Ml(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Nl(a)?{documents:NR(r,a)}:{query:xR(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=y_(r,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=Ka(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=DR(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Ml(this.yt),n.removeTarget=e,this.Bo(n)}}class gN extends S_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=RR(e.writeResults,e.commitTime),s=mn(e.commitTime);return this.listener.Zo(s,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ml(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>AR(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(T.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class vN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Un(n),this.ou=!1):W("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{rr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ue(a);c._u.add(4),await Po(c),c.gu.set("Unknown"),c._u.delete(4),await nu(c)}(this))})}),this.gu=new vN(s,r)}}async function nu(t){if(rr(t))for(const e of t.wu)await e(!0)}async function Po(t){for(const e of t.wu)await e(!1)}function k_(t,e){const n=ue(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),pd(n)?fd(n):Yr(n).ko()&&dd(n,e))}function A_(t,e){const n=ue(t),s=Yr(n);n.du.delete(e),s.ko()&&R_(n,e),n.du.size===0&&(s.ko()?s.Fo():rr(n)&&n.gu.set("Unknown"))}function dd(t,e){t.yu.Ot(e.targetId),Yr(t).zo(e)}function R_(t,e){t.yu.Ot(e),Yr(t).Ho(e)}function fd(t){t.yu=new wR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Yr(t).start(),t.gu.uu()}function pd(t){return rr(t)&&!Yr(t).No()&&t.du.size>0}function rr(t){return ue(t)._u.size===0}function N_(t){t.yu=void 0}async function wN(t){t.du.forEach((e,n)=>{dd(t,e)})}async function bN(t,e){N_(t),pd(t)?(t.gu.hu(e),fd(t)):t.gu.set("Unknown")}async function TN(t,e,n){if(t.gu.set("Online"),e instanceof g_&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wa(t,s)}else if(e instanceof pa?t.yu.Kt(e):e instanceof m_?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ae.min()))try{const s=await I_(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(vt.EMPTY_BYTE_STRING,c.snapshotVersion)),R_(r,a);const u=new Hs(c.target,a,1,c.sequenceNumber);dd(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){W("RemoteStore","Failed to raise snapshot:",s),await Wa(t,s)}}async function Wa(t,e,n){if(!xo(e))throw e;t._u.add(1),await Po(t),t.gu.set("Offline"),n||(n=()=>I_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await nu(t)})}function x_(t,e){return e().catch(n=>Wa(t,n,e))}async function su(t){const e=ue(t),n=vs(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;EN(e);)try{const r=await aN(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,IN(e,r)}catch(r){await Wa(e,r)}O_(e)&&D_(e)}function EN(t){return rr(t)&&t.fu.length<10}function IN(t,e){t.fu.push(e);const n=vs(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function O_(t){return rr(t)&&!vs(t).No()&&t.fu.length>0}function D_(t){vs(t).start()}async function CN(t){vs(t).eu()}async function SN(t){const e=vs(t);for(const n of t.fu)e.Xo(n.mutations)}async function kN(t,e,n){const s=t.fu.shift(),r=cd.from(s,e,n);await x_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await su(t)}async function AN(t,e){e&&vs(t).Yo&&await async function(n,s){if(r=s.code,mR(r)&&r!==T.ABORTED){const i=n.fu.shift();vs(n).Mo(),await x_(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await su(n)}var r}(t,e),O_(t)&&D_(t)}async function Xp(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const s=rr(n);n._u.add(3),await Po(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await nu(n)}async function RN(t,e){const n=ue(t);e?(n._u.delete(2),await nu(n)):e||(n._u.add(2),await Po(n),n.gu.set("Unknown"))}function Yr(t){return t.pu||(t.pu=function(e,n,s){const r=ue(e);return r.su(),new mN(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:wN.bind(null,t),Zr:bN.bind(null,t),Wo:TN.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),pd(t)?fd(t):t.gu.set("Unknown")):(await t.pu.stop(),N_(t))})),t.pu}function vs(t){return t.Iu||(t.Iu=function(e,n,s){const r=ue(e);return r.su(),new gN(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:CN.bind(null,t),Zr:AN.bind(null,t),tu:SN.bind(null,t),Zo:kN.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await su(t)):(await t.Iu.stop(),t.fu.length>0&&(W("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new md(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gd(t,e){if(Un("AsyncQueue",`${e}: ${t}`),xo(t))return new V(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Z.comparator(n.key,s.key):(n,s)=>Z.comparator(n.key,s.key),this.keyedMap=ui(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ir;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.Tu=new tt(Z.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ne():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Fr{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fr(e,n,Ir.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.Au=void 0,this.listeners=[]}}class xN{constructor(){this.queries=new Xr(e=>e_(e),Qc),this.onlineState="Unknown",this.Ru=new Set}}async function P_(t,e){const n=ue(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new NN),r)try{i.Au=await n.onListen(s)}catch(o){const a=gd(o,`Initialization of query '${Dl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&yd(n)}async function L_(t,e){const n=ue(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ON(t,e){const n=ue(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&yd(n)}function DN(t,e,n){const s=ue(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function yd(t){t.Ru.forEach(e=>{e.next()})}class M_{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Fr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.key=e}}class F_{constructor(e){this.key=e}}class PN{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ge(),this.mutatedKeys=ge(),this.Gu=t_(e),this.Qu=new Ir(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Yp,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=Xc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?g!==y&&(s.track({type:3,doc:p}),I=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),I=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),I=!0):d&&!p&&(s.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Fr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Yp,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ge(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new F_(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new U_(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ge();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Fr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class LN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class MN{constructor(e){this.key=e,this.nc=!1}}class UN{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Xr(a=>e_(a),Qc),this.rc=new Map,this.oc=new Set,this.uc=new tt(Z.comparator),this.cc=new Map,this.ac=new ud,this.hc={},this.lc=new Map,this.fc=Ur.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function FN(t,e){const n=GN(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await cN(n.localStore,Fn(e));n.isPrimaryClient&&k_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await BN(n,e,s,a==="current",o.resumeToken)}return r}async function BN(t,e,n,s,r){t._c=(h,d,p)=>async function(g,y,I,S){let _=y.view.Wu(I);_.$i&&(_=await Gp(g.localStore,y.query,!1).then(({documents:M})=>y.view.Wu(M,_)));const b=S&&S.targetChanges.get(y.targetId),D=y.view.applyChanges(_,g.isPrimaryClient,b);return em(g,y.targetId,D.Xu),D.snapshot}(t,h,d,p);const i=await Gp(t.localStore,e,!0),o=new PN(e,i.Hi),a=o.Wu(i.documents),c=Do.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);em(t,n,u.Xu);const l=new LN(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function VN(t,e){const n=ue(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Qc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ul(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),A_(n.remoteStore,s.targetId),Fl(n,s.targetId)}).catch(No)):(Fl(n,s.targetId),await Ul(n.localStore,s.targetId,!0))}async function $N(t,e,n){const s=ZN(t);try{const r=await function(i,o){const a=ue(i),c=Je.now(),u=o.reduce((d,p)=>d.add(p.key),ge());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Bn(),g=ge();return a.Gi.getEntries(d,u).next(y=>{p=y,p.forEach((I,S)=>{S.isValidDocument()||(g=g.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{l=y;const I=[];for(const S of o){const _=dR(S,l.get(S.key).overlayedDocument);_!=null&&I.push(new Is(S.key,_,Yv(_.value.mapValue),qt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:d_(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new tt(Ie)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Lo(s,r.changes),await su(s.remoteStore)}catch(r){const i=gd(r,"Failed to persist write");n.reject(i)}}async function B_(t,e){const n=ue(t);try{const s=await iN(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Oe(o.nc):r.removedDocuments.size>0&&(Oe(o.nc),o.nc=!1))}),await Lo(n,s,e)}catch(s){await No(s)}}function Jp(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ue(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&yd(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jN(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new tt(Z.comparator);o=o.insert(i,dt.newNoDocument(i,ae.min()));const a=ge().add(i),c=new eu(ae.min(),new Map,new et(Ie),o,a);await B_(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),vd(s)}else await Ul(s.localStore,e,!1).then(()=>Fl(s,e,n)).catch(No)}async function qN(t,e){const n=ue(t),s=e.batch.batchId;try{const r=await rN(n.localStore,e);$_(n,s,null),V_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Lo(n,r)}catch(r){await No(r)}}async function HN(t,e,n){const s=ue(t);try{const r=await function(i,o){const a=ue(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Oe(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);$_(s,e,n),V_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Lo(s,r)}catch(r){await No(r)}}function V_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function $_(t,e,n){const s=ue(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||j_(t,s)})}function j_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(A_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),vd(t))}function em(t,e,n){for(const s of n)s instanceof U_?(t.ac.addReference(s.key,e),zN(t,s)):s instanceof F_?(W("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||j_(t,s.key)):ne()}function zN(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(W("SyncEngine","New document in limbo: "+n),t.oc.add(s),vd(t))}function vd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Z(Pe.fromString(e)),s=t.fc.next();t.cc.set(s,new MN(n)),t.uc=t.uc.insert(n,s),k_(t.remoteStore,new Hs(Fn(rd(n.path)),s,2,ed.at))}}async function Lo(t,e,n){const s=ue(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=hd.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(c,h=>A.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>A.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!xo(l))throw l;W("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,g)}}}(s.localStore,i))}async function KN(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const s=await E_(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new V(T.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Lo(n,s.ji)}}function WN(t,e){const n=ue(t),s=n.cc.get(e);if(s&&s.nc)return ge().add(s.key);{let r=ge();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function GN(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jN.bind(null,e),e.sc.Wo=ON.bind(null,e.eventManager),e.sc.wc=DN.bind(null,e.eventManager),e}function ZN(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HN.bind(null,e),e}class QN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=tu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return sN(this.persistence,new tN,e.initialUser,this.yt)}yc(e){return new JR(ld.Bs,this.yt)}gc(e){return new lN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=KN.bind(null,this.syncEngine),await RN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xN}createDatastore(e){const n=tu(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new pN(r));var r;return function(i,o,a,c){return new yN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Jp(this.syncEngine,a,0),o=Qp.C()?new Qp:new hN,new _N(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new UN(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);W("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Po(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,e,n){if(!n)throw new V(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YN(t,e,n,s){if(e===!0&&s===!0)throw new V(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tm(t){if(!Z.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nm(t){if(Z.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ru(t);throw new V(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=new Map;class rm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new RA;switch(n.type){case"gapi":const s=n.client;return new DA(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sm.get(e);n&&(W("ComponentProvider","Removing Datastore"),sm.delete(e),n.terminate())}(this),Promise.resolve()}}function JN(t,e,n,s={}){var r;const i=(t=nn(t,iu))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Sl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ht.MOCK_USER;else{o=sy(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new V(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ht(c)}t._authCredentials=new NA(new $v(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class ir{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class ls extends ir{constructor(e,n,s){super(e,n,rd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new Z(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function ex(t,e,...n){if(t=We(t),q_("collection","path",e),t instanceof iu){const s=Pe.fromString(e,...n);return nm(s),new ls(t,null,s)}{if(!(t instanceof Et||t instanceof ls))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return nm(s),new ls(t.firestore,null,s)}}function Ga(t,e,...n){if(t=We(t),arguments.length===1&&(e=jv.R()),q_("doc","path",e),t instanceof iu){const s=Pe.fromString(e,...n);return tm(s),new Et(t,null,new Z(s))}{if(!(t instanceof Et||t instanceof ls))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return tm(s),new Et(t.firestore,t instanceof ls?t.converter:null,new Z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class H_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ht.UNAUTHENTICATED,this.clientId=jv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=gd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function nx(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await E_(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function sx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rx(t);W("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Xp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xp(e.remoteStore,i)),t.onlineComponents=e}async function rx(t){return t.offlineComponents||(W("FirestoreClient","Using default OfflineComponentProvider"),await nx(t,new QN)),t.offlineComponents}async function z_(t){return t.onlineComponents||(W("FirestoreClient","Using default OnlineComponentProvider"),await sx(t,new XN)),t.onlineComponents}function ix(t){return z_(t).then(e=>e.syncEngine)}async function K_(t){const e=await z_(t),n=e.eventManager;return n.onListen=FN.bind(null,e.syncEngine),n.onUnlisten=VN.bind(null,e.syncEngine),n}function ox(t,e,n={}){const s=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new H_({next:h=>{i.enqueueAndForget(()=>L_(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new V(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new V(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new M_(rd(o.path),u,{includeMetadataChanges:!0,Nu:!0});return P_(r,l)}(await K_(t),t.asyncQueue,e,n,s)),s.promise}function ax(t,e,n={}){const s=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new H_({next:h=>{i.enqueueAndForget(()=>L_(r,l)),h.fromCache&&a.source==="server"?c.reject(new V(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new M_(o,u,{includeMetadataChanges:!0,Nu:!0});return P_(r,l)}(await K_(t),t.asyncQueue,e,n,s)),s.promise}class cx{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new C_(this,"async_queue_retry"),this.Wc=()=>{const n=Vu();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Nn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!xo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Un("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=md.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&ne()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class or extends iu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new cx,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||W_(this),this._firestoreClient.terminate()}}function ux(t,e){const n=typeof t=="object"?t:Eh(),s=typeof t=="string"?t:e||"(default)",r=kc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ty("firestore");i&&JN(r,...i)}return r}function _d(t){return t._firestoreClient||W_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function W_(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new qA(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tx(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Br(vt.fromBase64String(e))}catch(n){throw new V(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Br(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/^__.*__$/;class hx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}class G_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Td{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Td(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Za(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Z_(this.sa)&&lx.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class dx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||tu(e)}da(e,n,s,r=!1){return new Td({sa:e,methodName:n,fa:s,path:pt.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function au(t){const e=t._freezeSettings(),n=tu(t._databaseId);return new dx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Q_(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Ed("Data must be an object, but it was:",o,s);const a=X_(s,o);let c,u;if(i.merge)c=new Lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Bl(e,h,n);if(!o.contains(d))throw new V(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);J_(l,d)||l.push(d)}c=new Lt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new hx(new kt(a),c,u)}class cu extends wd{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cu}}function fx(t,e,n,s){const r=t.da(1,e,n);Ed("Data must be an object, but it was:",r,s);const i=[],o=kt.empty();sr(s,(c,u)=>{const l=Id(e,c,n);u=We(u);const h=r.ca(l);if(u instanceof cu)i.push(l);else{const d=Mo(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Lt(i);return new G_(o,a,r.fieldTransforms)}function px(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Bl(e,s,n)],c=[r];if(i.length%2!=0)throw new V(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Bl(e,i[d])),c.push(i[d+1]);const u=[],l=kt.empty();for(let d=a.length-1;d>=0;--d)if(!J_(u,a[d])){const p=a[d];let g=c[d];g=We(g);const y=o.ca(p);if(g instanceof cu)u.push(p);else{const I=Mo(g,y);I!=null&&(u.push(p),l.set(p,I))}}const h=new Lt(u);return new G_(l,h,o.fieldTransforms)}function mx(t,e,n,s=!1){return Mo(n,t.da(s?4:3,e))}function Mo(t,e){if(Y_(t=We(t)))return Ed("Unsupported field value:",e,t),X_(t,e);if(t instanceof wd)return function(n,s){if(!Z_(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Mo(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=We(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return oR(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Je.fromDate(n);return{timestampValue:Ka(s.yt,r)}}if(n instanceof Je){const r=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ka(s.yt,r)}}if(n instanceof bd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Br)return{bytesValue:y_(s.yt,n._byteString)};if(n instanceof Et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ad(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ru(n)}`)}(t,e)}function X_(t,e){const n={};return qv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,(s,r)=>{const i=Mo(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Y_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof bd||t instanceof Br||t instanceof Et||t instanceof wd)}function Ed(t,e,n){if(!Y_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ru(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Bl(t,e,n){if((e=We(e))instanceof ou)return e._internalPath;if(typeof e=="string")return Id(t,e);throw Za("Field path arguments must be of type string or ",t,!1,void 0,n)}const gx=new RegExp("[~\\*/\\[\\]]");function Id(t,e,n){if(e.search(gx)>=0)throw Za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ou(...e.split("."))._internalPath}catch{throw Za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Za(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new V(T.INVALID_ARGUMENT,a+t+c)}function J_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yx extends ew{data(){return super.data()}}function Cd(t,e){return typeof e=="string"?Id(t,e):e instanceof ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sd{}class tw extends Sd{}function YD(t,e,...n){let s=[];e instanceof Sd&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Ad).length,o=r.filter(a=>a instanceof kd).length;if(i>1||i>0&&o>0)throw new V(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class kd extends tw{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new kd(e,n,s)}_apply(e){const n=this._parse(e);return nw(e._query,n),new ir(e.firestore,e.converter,xl(e._query,n))}_parse(e){const n=au(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new V(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){om(l,u);const d=[];for(const p of l)d.push(im(a,r,p));h={arrayValue:{values:d}}}else h=im(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||om(l,u),h=mx(o,i,l,u==="in"||u==="not-in");return Xe.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ad extends Sd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ad(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)nw(i,a),i=xl(i,a)}(e._query,n),new ir(e.firestore,e.converter,xl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rd extends tw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rd(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new V(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Tr(r,i);return function(a,c){if(id(a)===null){const u=Zc(a);u!==null&&sw(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Qr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function JD(t,e="asc"){const n=e,s=Cd("orderBy",t);return Rd._create(s,n)}function im(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new V(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jv(e)&&n.indexOf("/")!==-1)throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Pe.fromString(n));if(!Z.isDocumentKey(s))throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Op(t,new Z(s))}if(n instanceof Et)return Op(t,n._key);throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ru(n)}.`)}function om(t,e){if(!Array.isArray(t)||t.length===0)throw new V(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new V(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function nw(t,e){if(e.isInequality()){const s=Zc(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new V(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=id(t);i!==null&&sw(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sw(t,e,n){if(!n.isEqual(e))throw new V(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _x{convertValue(e,n="none"){switch(Xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){const s={};return sr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new bd(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zv(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=ys(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Pe.fromString(e);Oe(T_(s));const r=new Ki(s.get(1),s.get(3)),i=new Z(s.popFirst(5));return r.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iw extends ew{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Cd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ma extends iw{data(e={}){return super.data(e)}}class wx{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new li(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ma(this._firestore,this._userDataWriter,s.key,s,new li(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ma(s._firestore,s._userDataWriter,o.doc.key,o.doc,new li(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ma(s._firestore,s._userDataWriter,o.doc.key,o.doc,new li(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:bx(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){t=nn(t,Et);const e=nn(t.firestore,or);return ox(_d(e),t._key).then(n=>Ix(e,t,n))}class ow extends _x{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function eP(t){t=nn(t,ir);const e=nn(t.firestore,or),n=_d(e),s=new ow(e);return vx(t._query),ax(n,t._query).then(r=>new wx(e,s,t,r))}function Tx(t,e,n){t=nn(t,Et);const s=nn(t.firestore,or),r=rw(t.converter,e,n);return uu(s,[Q_(au(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,qt.none())])}function Ex(t,e,n,...s){t=nn(t,Et);const r=nn(t.firestore,or),i=au(r);let o;return o=typeof(e=We(e))=="string"||e instanceof ou?px(i,"updateDoc",t._key,e,n,s):fx(i,"updateDoc",t._key,e),uu(r,[o.toMutation(t._key,qt.exists(!0))])}function tP(t){return uu(nn(t.firestore,or),[new od(t._key,qt.none())])}function nP(t,e){const n=nn(t.firestore,or),s=Ga(t),r=rw(t.converter,e);return uu(n,[Q_(au(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,qt.exists(!1))]).then(()=>s)}function uu(t,e){return function(n,s){const r=new Nn;return n.asyncQueue.enqueueAndForget(async()=>$N(await ix(n),s,r)),r.promise}(_d(t),e)}function Ix(t,e,n){const s=n.docs.get(e._key),r=new ow(t);return new iw(t,r,e._key,s,new li(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Zr=n})(Kr),Gs(new ms("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new or(new xA(n.getProvider("auth-internal")),new LA(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),dn(Ap,"3.8.3",t),dn(Ap,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="firebasestorage.googleapis.com",cw="storageBucket",Cx=2*60*1e3,Sx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends En{constructor(e,n,s=0){super($u(e),`Firebase Storage: ${n} (${$u(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function $u(t){return"storage/"+t}function Nd(){const t="An unknown error occurred, please check the error payload for server response.";return new qe(je.UNKNOWN,t)}function kx(t){return new qe(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ax(t){return new qe(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Rx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe(je.UNAUTHENTICATED,t)}function Nx(){return new qe(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xx(t){return new qe(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ox(){return new qe(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Dx(){return new qe(je.CANCELED,"User canceled the upload/download.")}function Px(t){return new qe(je.INVALID_URL,"Invalid URL '"+t+"'.")}function Lx(t){return new qe(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Mx(){return new qe(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cw+"' property when initializing the app?")}function Ux(){return new qe(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Fx(){return new qe(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Bx(t){return new qe(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vl(t){return new qe(je.INVALID_ARGUMENT,t)}function uw(){return new qe(je.APP_DELETED,"The Firebase app was deleted.")}function Vx(t){return new qe(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ci(t,e){return new qe(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ri(t){throw new qe(je.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(s.path==="")return s;throw Lx(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},y=n===aw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",S=new RegExp(`^https?://${y}/${r}/${I}`,"i"),b=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<b.length;D++){const M=b[D],K=M.regex.exec(e);if(K){const j=K[M.indices.bucket];let R=K[M.indices.path];R||(R=""),s=new Mt(j,R),M.postModify(s);break}}if(s==null)throw Px(e);return s}}class $x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){r=setTimeout(()=>{r=null,t(p,c())},I)}function d(){i&&clearTimeout(i)}function p(I,...S){if(u){d();return}if(I){d(),l.call(null,I,...S);return}if(c()||o){d(),l.call(null,I,...S);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let g=!1;function y(I){g||(g=!0,d(),!u&&(r!==null?(I||(a=2),clearTimeout(r),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function qx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t){return t!==void 0}function zx(t){return typeof t=="object"&&!Array.isArray(t)}function xd(t){return typeof t=="string"||t instanceof String}function cm(t){return Od()&&t instanceof Blob}function Od(){return typeof Blob<"u"&&!hI()}function um(t,e,n,s){if(s<e)throw Vl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Vl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function lw(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Kx(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ta(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===zs.NO_ERROR,c=i.getStatus();if(!a||Kx(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===zs.ABORT;s(!1,new ta(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ta(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Hx(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Nd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?uw():Dx();o(c)}else{const c=Ox();o(c)}};this.canceled_?n(!1,new ta(!1,null,!0)):this.backoffId_=jx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ta{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Gx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Zx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Xx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Yx(t,e,n,s,r,i,o=!0){const a=lw(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return Qx(u,e),Gx(u,n),Zx(u,i),Xx(u,s),new Wx(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function e1(...t){const e=Jx();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Od())return new Blob(t);throw new qe(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function t1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function n1(t){if(typeof atob>"u")throw Bx("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ju{constructor(e,n){this.data=e,this.contentType=n||null}}function s1(t,e){switch(t){case hn.RAW:return new ju(hw(e));case hn.BASE64:case hn.BASE64URL:return new ju(dw(t,e));case hn.DATA_URL:return new ju(i1(e),o1(e))}throw Nd()}function hw(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function r1(t){let e;try{e=decodeURIComponent(t)}catch{throw Ci(hn.DATA_URL,"Malformed data URL.")}return hw(e)}function dw(t,e){switch(t){case hn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Ci(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Ci(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=n1(e)}catch(r){throw r.message.includes("polyfill")?r:Ci(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class fw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ci(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=a1(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function i1(t){const e=new fw(t);return e.base64?dw(hn.BASE64,e.rest):r1(e.rest)}function o1(t){return new fw(t).contentType}function a1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){let s=0,r="";cm(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(cm(this.data_)){const s=this.data_,r=t1(s,e,n);return r===null?null:new ts(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ts(s,!0)}}static getBlob(...e){if(Od()){const n=e.map(s=>s instanceof ts?s.data_:s);return new ts(e1.apply(null,n))}else{const n=e.map(o=>xd(o)?s1(hn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new ts(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){let e;try{e=JSON.parse(t)}catch{return null}return zx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function u1(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function mw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e){return e}class wt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||l1}}let na=null;function h1(t){return!xd(t)||t.length<2?t:mw(t)}function gw(){if(na)return na;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return h1(o)}const n=new wt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new wt("size");return r.xform=s,t.push(r),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),na=t,na}function d1(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Mt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function f1(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return d1(s,t),s}function yw(t,e,n){const s=pw(e);return s===null?null:f1(t,s,n)}function p1(t,e,n,s){const r=pw(e);if(r===null||!xd(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Dd(d,n,s),g=lw({alt:"media",token:u});return p+g})[0]}function m1(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class vw{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){if(!t)throw Nd()}function g1(t,e){function n(s,r){const i=yw(t,r,e);return _w(i!==null),i}return n}function y1(t,e){function n(s,r){const i=yw(t,r,e);return _w(i!==null),p1(i,r,t.host,t._protocol)}return n}function ww(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Nx():r=Rx():n.getStatus()===402?r=Ax(t.bucket):n.getStatus()===403?r=xx(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function v1(t){const e=ww(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=kx(t.path)),i.serverResponse=r.serverResponse,i}return n}function _1(t,e,n){const s=e.fullServerUrl(),r=Dd(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new vw(r,i,y1(t,n),o);return a.errorHandler=v1(e),a}function w1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function b1(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=w1(null,e)),s}function T1(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let D=0;D<2;D++)b=b+Math.random().toString().slice(2);return b}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=b1(e,s,r),l=m1(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=ts.getBlob(h,s,d);if(p===null)throw Ux();const g={name:u.fullPath},y=Dd(i,t.host,t._protocol),I="POST",S=t.maxUploadRetryTime,_=new vw(y,I,g1(t,n),S);return _.urlParams=g,_.headers=o,_.body=p.uploadData(),_.errorHandler=ww(e),_}class E1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw ri("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ri("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ri("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ri("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ri("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class I1 extends E1{initXhr(){this.xhr_.responseType="text"}}function bw(){return new I1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ys(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mw(this._location.path)}get storage(){return this._service}get parent(){const e=c1(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Ys(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Vx(e)}}function C1(t,e,n){t._throwIfRoot("uploadBytes");const s=T1(t.storage,t._location,gw(),new ts(e,!0),n);return t.storage.makeRequestWithTokens(s,bw).then(r=>({metadata:r,ref:t}))}function S1(t){t._throwIfRoot("getDownloadURL");const e=_1(t.storage,t._location,gw());return t.storage.makeRequestWithTokens(e,bw).then(n=>{if(n===null)throw Fx();return n})}function k1(t,e){const n=u1(t._location.path,e),s=new Mt(t._location.bucket,n);return new Ys(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){return/^[A-Za-z]+:\/\//.test(t)}function R1(t,e){return new Ys(t,e)}function Tw(t,e){if(t instanceof Pd){const n=t;if(n._bucket==null)throw Mx();const s=new Ys(n,n._bucket);return e!=null?Tw(s,e):s}else return e!==void 0?k1(t,e):t}function N1(t,e){if(e&&A1(e)){if(t instanceof Pd)return R1(t,e);throw Vl("To use ref(service, url), the first argument must be a Storage instance.")}else return Tw(t,e)}function lm(t,e){const n=e==null?void 0:e[cw];return n==null?null:Mt.makeFromBucketSpec(n,t)}function x1(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:sy(r,t.app.options.projectId))}class Pd{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=aw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cx,this._maxUploadRetryTime=Sx,this._requests=new Set,r!=null?this._bucket=Mt.makeFromBucketSpec(r,this._host):this._bucket=lm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=lm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){um("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){um("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ys(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new $x(uw());{const o=Yx(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const hm="@firebase/storage",dm="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="storage";function sP(t,e,n){return t=We(t),C1(t,e,n)}function rP(t){return t=We(t),S1(t)}function O1(t,e){return t=We(t),N1(t,e)}function D1(t=Eh(),e){t=We(t);const s=kc(t,Ew).getImmediate({identifier:e}),r=ty("storage");return r&&P1(s,...r),s}function P1(t,e,n,s={}){x1(t,e,n,s)}function L1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Pd(n,s,r,e,Kr)}function M1(){Gs(new ms(Ew,L1,"PUBLIC").setMultipleInstances(!0)),dn(hm,dm,""),dn(hm,dm,"esm2017")}M1();const U1={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d"},Ld=oy(U1),Qa=ux(Ld),$t=Sk(Ld),Md="profiles",fm=()=>{if(!$t.currentUser)throw new Error("Auth required");return Ga(Qa,Md,$t.currentUser.uid)},F1=t=>ex(Qa,Md,t,"timeline"),iP=()=>{if(!$t.currentUser)throw new Error("Auth required");return F1($t.currentUser.uid)},oP=t=>O1(D1(Ld),t),B1=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],$l=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,jl=t=>t[$l(0,t.length-1)],pm=t=>{const e=[];for(let n=0;n<t;n++)e.push(jl(B1));return e.join(" ")},V1=t=>{const e=t.slice(1);return e?`#${(Number(`0x1${e}`)^16777215).toString(16).substr(1).toUpperCase()}`:""},$1=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}],j1="/assets/undraw_online_resume_re_ru7s-458e1bd5.svg",q1={Instagram:{link:""},Facebook:{link:""},YouTube:{link:""},Spotify:{link:""},Twitter:{link:""},GitHub:{link:""},LinkedIn:{link:""},TikTok:{link:""}},H1=()=>{const{author:t,quotes:e}=jl($1);return`"${jl(e)}"    - ${t}`},z1=t=>{if(!t)throw new Error("Unauthorized profile creation attempt");return{userUid:t.uid,displayName:(t==null?void 0:t.displayName)??"",coverImg:j1,photoURL:(t==null?void 0:t.photoURL)??"",bgColor:"#FFE5E5",fontColor:"#000000",fontFamily:"merienda",shortBio:`${pm($l(1,3))} What/Where ${pm($l(1,3))}`,longBio:H1(),socialLinks:q1}};var Te;(function(t){t.assertEqual=r=>r;function e(r){}t.assertIs=e;function n(r){throw new Error}t.assertNever=n,t.arrayToEnum=r=>{const i={};for(const o of r)i[o]=o;return i},t.getValidEnumValues=r=>{const i=t.objectKeys(r).filter(a=>typeof r[r[a]]!="number"),o={};for(const a of i)o[a]=r[a];return t.objectValues(o)},t.objectValues=r=>t.objectKeys(r).map(function(i){return r[i]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const i=[];for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&i.push(o);return i},t.find=(r,i)=>{for(const o of r)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function s(r,i=" | "){return r.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=s,t.jsonStringifyReplacer=(r,i)=>typeof i=="bigint"?i.toString():i})(Te||(Te={}));const F=Te.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ns=t=>{switch(typeof t){case"undefined":return F.undefined;case"string":return F.string;case"number":return isNaN(t)?F.nan:F.number;case"boolean":return F.boolean;case"function":return F.function;case"bigint":return F.bigint;case"symbol":return F.symbol;case"object":return Array.isArray(t)?F.array:t===null?F.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?F.promise:typeof Map<"u"&&t instanceof Map?F.map:typeof Set<"u"&&t instanceof Set?F.set:typeof Date<"u"&&t instanceof Date?F.date:F.object;default:return F.unknown}},O=Te.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),K1=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class xn extends Error{constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},s={_errors:[]},r=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)s._errors.push(n(o));else{let a=s,c=0;for(;c<o.path.length;){const u=o.path[c];c===o.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(o))):a[u]=a[u]||{_errors:[]},a=a[u],c++}}};return r(this),s}toString(){return this.message}get message(){return JSON.stringify(this.issues,Te.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},s=[];for(const r of this.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(e(r))):s.push(e(r));return{formErrors:s,fieldErrors:n}}get formErrors(){return this.flatten()}}xn.create=t=>new xn(t);const Xi=(t,e)=>{let n;switch(t.code){case O.invalid_type:t.received===F.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case O.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Te.jsonStringifyReplacer)}`;break;case O.unrecognized_keys:n=`Unrecognized key(s) in object: ${Te.joinValues(t.keys,", ")}`;break;case O.invalid_union:n="Invalid input";break;case O.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Te.joinValues(t.options)}`;break;case O.invalid_enum_value:n=`Invalid enum value. Expected ${Te.joinValues(t.options)}, received '${t.received}'`;break;case O.invalid_arguments:n="Invalid function arguments";break;case O.invalid_return_type:n="Invalid function return type";break;case O.invalid_date:n="Invalid date";break;case O.invalid_string:typeof t.validation=="object"?"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Te.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case O.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(t.minimum)}`:n="Invalid input";break;case O.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(t.maximum)}`:n="Invalid input";break;case O.custom:n="Invalid input";break;case O.invalid_intersection_types:n="Intersection results could not be merged";break;case O.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case O.not_finite:n="Number must be finite";break;default:n=e.defaultError,Te.assertNever(t)}return{message:n}};let Iw=Xi;function W1(t){Iw=t}function Xa(){return Iw}const Ya=t=>{const{data:e,path:n,errorMaps:s,issueData:r}=t,i=[...n,...r.path||[]],o={...r,path:i};let a="";const c=s.filter(u=>!!u).slice().reverse();for(const u of c)a=u(o,{data:e,defaultError:a}).message;return{...r,path:i,message:r.message||a}},G1=[];function H(t,e){const n=Ya({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Xa(),Xi].filter(s=>!!s)});t.common.issues.push(n)}class It{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const s=[];for(const r of n){if(r.status==="aborted")return oe;r.status==="dirty"&&e.dirty(),s.push(r.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,n){const s=[];for(const r of n)s.push({key:await r.key,value:await r.value});return It.mergeObjectSync(e,s)}static mergeObjectSync(e,n){const s={};for(const r of n){const{key:i,value:o}=r;if(i.status==="aborted"||o.status==="aborted")return oe;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),(typeof o.value<"u"||r.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}}const oe=Object.freeze({status:"aborted"}),Cw=t=>({status:"dirty",value:t}),_t=t=>({status:"valid",value:t}),ql=t=>t.status==="aborted",Hl=t=>t.status==="dirty",Ja=t=>t.status==="valid",ec=t=>typeof Promise<"u"&&t instanceof Promise;var pe;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(pe||(pe={}));class wn{constructor(e,n,s,r){this.parent=e,this.data=n,this._path=s,this._key=r}get path(){return this._path.concat(this._key)}}const mm=(t,e)=>{if(Ja(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,error:new xn(t.common.issues)}};function le(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:s,description:r}=t;if(e&&(n||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:s??a.defaultError}:{message:n??a.defaultError},description:r}}class de{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return ns(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:ns(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new It,ctx:{common:e.parent.common,data:e.data,parsedType:ns(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(ec(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const s=this.safeParse(e,n);if(s.success)return s.data;throw s.error}safeParse(e,n){var s;const r={common:{issues:[],async:(s=n==null?void 0:n.async)!==null&&s!==void 0?s:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ns(e)},i=this._parseSync({data:e,path:r.path,parent:r});return mm(r,i)}async parseAsync(e,n){const s=await this.safeParseAsync(e,n);if(s.success)return s.data;throw s.error}async safeParseAsync(e,n){const s={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ns(e)},r=this._parse({data:e,path:s.path,parent:s}),i=await(ec(r)?r:Promise.resolve(r));return mm(s,i)}refine(e,n){const s=r=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(r):n;return this._refinement((r,i)=>{const o=e(r),a=()=>i.addIssue({code:O.custom,...s(r)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((s,r)=>e(s)?!0:(r.addIssue(typeof n=="function"?n(s,r):n),!1))}_refinement(e){return new sn({schema:this,typeName:ee.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return On.create(this,this._def)}nullable(){return tr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Jt.create(this,this._def)}promise(){return $r.create(this,this._def)}or(e){return no.create([this,e],this._def)}and(e){return so.create(this,e,this._def)}transform(e){return new sn({...le(this._def),schema:this,typeName:ee.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new co({...le(this._def),innerType:this,defaultValue:n,typeName:ee.ZodDefault})}brand(){return new kw({typeName:ee.ZodBranded,type:this,...le(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new ic({...le(this._def),innerType:this,catchValue:n,typeName:ee.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Uo.create(this,e)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Z1=/^c[^\s-]{8,}$/i,Q1=/^[a-z][a-z0-9]*$/,X1=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Y1=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/,J1=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class Vn extends de{constructor(){super(...arguments),this._regex=(e,n,s)=>this.refinement(r=>e.test(r),{validation:n,code:O.invalid_string,...pe.errToObj(s)}),this.nonempty=e=>this.min(1,pe.errToObj(e)),this.trim=()=>new Vn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==F.string){const i=this._getOrReturnCtx(e);return H(i,{code:O.invalid_type,expected:F.string,received:i.parsedType}),oe}const s=new It;let r;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:O.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:O.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(r=this._getOrReturnCtx(e,r),o?H(r,{code:O.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&H(r,{code:O.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")Y1.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"email",code:O.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")X1.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"uuid",code:O.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")Z1.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"cuid",code:O.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")Q1.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"cuid2",code:O.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),H(r,{validation:"url",code:O.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{validation:"regex",code:O.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="startsWith"?e.data.startsWith(i.value)||(r=this._getOrReturnCtx(e,r),H(r,{code:O.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(r=this._getOrReturnCtx(e,r),H(r,{code:O.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?J1(i).test(e.data)||(r=this._getOrReturnCtx(e,r),H(r,{code:O.invalid_string,validation:"datetime",message:i.message}),s.dirty()):Te.assertNever(i);return{status:s.value,value:e.data}}_addCheck(e){return new Vn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...pe.errToObj(e)})}url(e){return this._addCheck({kind:"url",...pe.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...pe.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...pe.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...pe.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...pe.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...pe.errToObj(n)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...pe.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...pe.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...pe.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...pe.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...pe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Vn.create=t=>{var e;return new Vn({checks:[],typeName:ee.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...le(t)})};function eO(t,e){const n=(t.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,r=n>s?n:s,i=parseInt(t.toFixed(r).replace(".","")),o=parseInt(e.toFixed(r).replace(".",""));return i%o/Math.pow(10,r)}class _s extends de{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==F.number){const i=this._getOrReturnCtx(e);return H(i,{code:O.invalid_type,expected:F.number,received:i.parsedType}),oe}let s;const r=new It;for(const i of this._def.checks)i.kind==="int"?Te.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),H(s,{code:O.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),H(s,{code:O.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),H(s,{code:O.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):i.kind==="multipleOf"?eO(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),H(s,{code:O.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),H(s,{code:O.not_finite,message:i.message}),r.dirty()):Te.assertNever(i);return{status:r.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,pe.toString(n))}gt(e,n){return this.setLimit("min",e,!1,pe.toString(n))}lte(e,n){return this.setLimit("max",e,!0,pe.toString(n))}lt(e,n){return this.setLimit("max",e,!1,pe.toString(n))}setLimit(e,n,s,r){return new _s({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:s,message:pe.toString(r)}]})}_addCheck(e){return new _s({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:pe.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:pe.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:pe.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:pe.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:pe.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:pe.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:pe.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Te.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(n===null||s.value>n)&&(n=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(n)&&Number.isFinite(e)}}_s.create=t=>new _s({checks:[],typeName:ee.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...le(t)});class Yi extends de{_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==F.bigint){const s=this._getOrReturnCtx(e);return H(s,{code:O.invalid_type,expected:F.bigint,received:s.parsedType}),oe}return _t(e.data)}}Yi.create=t=>{var e;return new Yi({typeName:ee.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...le(t)})};class Ji extends de{_parse(e){if(this._def.coerce&&(e.data=Boolean(e.data)),this._getType(e)!==F.boolean){const s=this._getOrReturnCtx(e);return H(s,{code:O.invalid_type,expected:F.boolean,received:s.parsedType}),oe}return _t(e.data)}}Ji.create=t=>new Ji({typeName:ee.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...le(t)});class Js extends de{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==F.date){const i=this._getOrReturnCtx(e);return H(i,{code:O.invalid_type,expected:F.date,received:i.parsedType}),oe}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return H(i,{code:O.invalid_date}),oe}const s=new It;let r;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:O.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(r=this._getOrReturnCtx(e,r),H(r,{code:O.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):Te.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Js({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:pe.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:pe.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Js.create=t=>new Js({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:ee.ZodDate,...le(t)});class tc extends de{_parse(e){if(this._getType(e)!==F.symbol){const s=this._getOrReturnCtx(e);return H(s,{code:O.invalid_type,expected:F.symbol,received:s.parsedType}),oe}return _t(e.data)}}tc.create=t=>new tc({typeName:ee.ZodSymbol,...le(t)});class eo extends de{_parse(e){if(this._getType(e)!==F.undefined){const s=this._getOrReturnCtx(e);return H(s,{code:O.invalid_type,expected:F.undefined,received:s.parsedType}),oe}return _t(e.data)}}eo.create=t=>new eo({typeName:ee.ZodUndefined,...le(t)});class to extends de{_parse(e){if(this._getType(e)!==F.null){const s=this._getOrReturnCtx(e);return H(s,{code:O.invalid_type,expected:F.null,received:s.parsedType}),oe}return _t(e.data)}}to.create=t=>new to({typeName:ee.ZodNull,...le(t)});class Vr extends de{constructor(){super(...arguments),this._any=!0}_parse(e){return _t(e.data)}}Vr.create=t=>new Vr({typeName:ee.ZodAny,...le(t)});class Ks extends de{constructor(){super(...arguments),this._unknown=!0}_parse(e){return _t(e.data)}}Ks.create=t=>new Ks({typeName:ee.ZodUnknown,...le(t)});class $n extends de{_parse(e){const n=this._getOrReturnCtx(e);return H(n,{code:O.invalid_type,expected:F.never,received:n.parsedType}),oe}}$n.create=t=>new $n({typeName:ee.ZodNever,...le(t)});class nc extends de{_parse(e){if(this._getType(e)!==F.undefined){const s=this._getOrReturnCtx(e);return H(s,{code:O.invalid_type,expected:F.void,received:s.parsedType}),oe}return _t(e.data)}}nc.create=t=>new nc({typeName:ee.ZodVoid,...le(t)});class Jt extends de{_parse(e){const{ctx:n,status:s}=this._processInputParams(e),r=this._def;if(n.parsedType!==F.array)return H(n,{code:O.invalid_type,expected:F.array,received:n.parsedType}),oe;if(r.exactLength!==null){const o=n.data.length>r.exactLength.value,a=n.data.length<r.exactLength.value;(o||a)&&(H(n,{code:o?O.too_big:O.too_small,minimum:a?r.exactLength.value:void 0,maximum:o?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),s.dirty())}if(r.minLength!==null&&n.data.length<r.minLength.value&&(H(n,{code:O.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),s.dirty()),r.maxLength!==null&&n.data.length>r.maxLength.value&&(H(n,{code:O.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),s.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>r.type._parseAsync(new wn(n,o,n.path,a)))).then(o=>It.mergeArray(s,o));const i=[...n.data].map((o,a)=>r.type._parseSync(new wn(n,o,n.path,a)));return It.mergeArray(s,i)}get element(){return this._def.type}min(e,n){return new Jt({...this._def,minLength:{value:e,message:pe.toString(n)}})}max(e,n){return new Jt({...this._def,maxLength:{value:e,message:pe.toString(n)}})}length(e,n){return new Jt({...this._def,exactLength:{value:e,message:pe.toString(n)}})}nonempty(e){return this.min(1,e)}}Jt.create=(t,e)=>new Jt({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ee.ZodArray,...le(e)});var sc;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(sc||(sc={}));function pr(t){if(t instanceof Fe){const e={};for(const n in t.shape){const s=t.shape[n];e[n]=On.create(pr(s))}return new Fe({...t._def,shape:()=>e})}else return t instanceof Jt?Jt.create(pr(t.element)):t instanceof On?On.create(pr(t.unwrap())):t instanceof tr?tr.create(pr(t.unwrap())):t instanceof bn?bn.create(t.items.map(e=>pr(e))):t}class Fe extends de{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Te.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==F.object){const u=this._getOrReturnCtx(e);return H(u,{code:O.invalid_type,expected:F.object,received:u.parsedType}),oe}const{status:s,ctx:r}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof $n&&this._def.unknownKeys==="strip"))for(const u in r.data)o.includes(u)||a.push(u);const c=[];for(const u of o){const l=i[u],h=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new wn(r,h,r.path,u)),alwaysSet:u in r.data})}if(this._def.catchall instanceof $n){const u=this._def.unknownKeys;if(u==="passthrough")for(const l of a)c.push({key:{status:"valid",value:l},value:{status:"valid",value:r.data[l]}});else if(u==="strict")a.length>0&&(H(r,{code:O.unrecognized_keys,keys:a}),s.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const l of a){const h=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new wn(r,h,r.path,l)),alwaysSet:l in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const u=[];for(const l of c){const h=await l.key;u.push({key:h,value:await l.value,alwaysSet:l.alwaysSet})}return u}).then(u=>It.mergeObjectSync(s,u)):It.mergeObjectSync(s,c)}get shape(){return this._def.shape()}strict(e){return pe.errToObj,new Fe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,s)=>{var r,i,o,a;const c=(o=(i=(r=this._def).errorMap)===null||i===void 0?void 0:i.call(r,n,s).message)!==null&&o!==void 0?o:s.defaultError;return n.code==="unrecognized_keys"?{message:(a=pe.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Fe({...this._def,unknownKeys:"strip"})}passthrough(){return new Fe({...this._def,unknownKeys:"passthrough"})}extend(e){return new Fe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Fe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>sc.mergeShapes(this._def.shape(),e._def.shape()),typeName:ee.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Fe({...this._def,catchall:e})}pick(e){const n={};return Te.objectKeys(e).forEach(s=>{e[s]&&this.shape[s]&&(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}omit(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{e[s]||(n[s]=this.shape[s])}),new Fe({...this._def,shape:()=>n})}deepPartial(){return pr(this)}partial(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{const r=this.shape[s];e&&!e[s]?n[s]=r:n[s]=r.optional()}),new Fe({...this._def,shape:()=>n})}required(e){const n={};return Te.objectKeys(this.shape).forEach(s=>{if(e&&!e[s])n[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof On;)i=i._def.innerType;n[s]=i}}),new Fe({...this._def,shape:()=>n})}keyof(){return Sw(Te.objectKeys(this.shape))}}Fe.create=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strip",catchall:$n.create(),typeName:ee.ZodObject,...le(e)});Fe.strictCreate=(t,e)=>new Fe({shape:()=>t,unknownKeys:"strict",catchall:$n.create(),typeName:ee.ZodObject,...le(e)});Fe.lazycreate=(t,e)=>new Fe({shape:t,unknownKeys:"strip",catchall:$n.create(),typeName:ee.ZodObject,...le(e)});class no extends de{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.options;function r(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new xn(a.ctx.common.issues));return H(n,{code:O.invalid_union,unionErrors:o}),oe}if(n.common.async)return Promise.all(s.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(r);{let i;const o=[];for(const c of s){const u={...n,common:{...n.common,issues:[]},parent:null},l=c._parseSync({data:n.data,path:n.path,parent:u});if(l.status==="valid")return l;l.status==="dirty"&&!i&&(i={result:l,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new xn(c));return H(n,{code:O.invalid_union,unionErrors:a}),oe}}get options(){return this._def.options}}no.create=(t,e)=>new no({options:t,typeName:ee.ZodUnion,...le(e)});const ga=t=>t instanceof io?ga(t.schema):t instanceof sn?ga(t.innerType()):t instanceof oo?[t.value]:t instanceof ws?t.options:t instanceof ao?Object.keys(t.enum):t instanceof co?ga(t._def.innerType):t instanceof eo?[void 0]:t instanceof to?[null]:null;class lu extends de{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==F.object)return H(n,{code:O.invalid_type,expected:F.object,received:n.parsedType}),oe;const s=this.discriminator,r=n.data[s],i=this.optionsMap.get(r);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(H(n,{code:O.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),oe)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,s){const r=new Map;for(const i of n){const o=ga(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(r.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);r.set(a,i)}}return new lu({typeName:ee.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:r,...le(s)})}}function zl(t,e){const n=ns(t),s=ns(e);if(t===e)return{valid:!0,data:t};if(n===F.object&&s===F.object){const r=Te.objectKeys(e),i=Te.objectKeys(t).filter(a=>r.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=zl(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===F.array&&s===F.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=zl(o,a);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return n===F.date&&s===F.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class so extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=(i,o)=>{if(ql(i)||ql(o))return oe;const a=zl(i.value,o.value);return a.valid?((Hl(i)||Hl(o))&&n.dirty(),{status:n.value,value:a.data}):(H(s,{code:O.invalid_intersection_types}),oe)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>r(i,o)):r(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}}so.create=(t,e,n)=>new so({left:t,right:e,typeName:ee.ZodIntersection,...le(n)});class bn extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.array)return H(s,{code:O.invalid_type,expected:F.array,received:s.parsedType}),oe;if(s.data.length<this._def.items.length)return H(s,{code:O.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),oe;!this._def.rest&&s.data.length>this._def.items.length&&(H(s,{code:O.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...s.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new wn(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>It.mergeArray(n,o)):It.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new bn({...this._def,rest:e})}}bn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new bn({items:t,typeName:ee.ZodTuple,rest:null,...le(e)})};class ro extends de{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.object)return H(s,{code:O.invalid_type,expected:F.object,received:s.parsedType}),oe;const r=[],i=this._def.keyType,o=this._def.valueType;for(const a in s.data)r.push({key:i._parse(new wn(s,a,s.path,a)),value:o._parse(new wn(s,s.data[a],s.path,a))});return s.common.async?It.mergeObjectAsync(n,r):It.mergeObjectSync(n,r)}get element(){return this._def.valueType}static create(e,n,s){return n instanceof de?new ro({keyType:e,valueType:n,typeName:ee.ZodRecord,...le(s)}):new ro({keyType:Vn.create(),valueType:e,typeName:ee.ZodRecord,...le(n)})}}class rc extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.map)return H(s,{code:O.invalid_type,expected:F.map,received:s.parsedType}),oe;const r=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,c],u)=>({key:r._parse(new wn(s,a,s.path,[u,"key"])),value:i._parse(new wn(s,c,s.path,[u,"value"]))}));if(s.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const u=await c.key,l=await c.value;if(u.status==="aborted"||l.status==="aborted")return oe;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const u=c.key,l=c.value;if(u.status==="aborted"||l.status==="aborted")return oe;(u.status==="dirty"||l.status==="dirty")&&n.dirty(),a.set(u.value,l.value)}return{status:n.value,value:a}}}}rc.create=(t,e,n)=>new rc({valueType:e,keyType:t,typeName:ee.ZodMap,...le(n)});class er extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.parsedType!==F.set)return H(s,{code:O.invalid_type,expected:F.set,received:s.parsedType}),oe;const r=this._def;r.minSize!==null&&s.data.size<r.minSize.value&&(H(s,{code:O.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),n.dirty()),r.maxSize!==null&&s.data.size>r.maxSize.value&&(H(s,{code:O.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const u=new Set;for(const l of c){if(l.status==="aborted")return oe;l.status==="dirty"&&n.dirty(),u.add(l.value)}return{status:n.value,value:u}}const a=[...s.data.values()].map((c,u)=>i._parse(new wn(s,c,s.path,u)));return s.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new er({...this._def,minSize:{value:e,message:pe.toString(n)}})}max(e,n){return new er({...this._def,maxSize:{value:e,message:pe.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}er.create=(t,e)=>new er({valueType:t,minSize:null,maxSize:null,typeName:ee.ZodSet,...le(e)});class Cr extends de{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==F.function)return H(n,{code:O.invalid_type,expected:F.function,received:n.parsedType}),oe;function s(a,c){return Ya({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Xa(),Xi].filter(u=>!!u),issueData:{code:O.invalid_arguments,argumentsError:c}})}function r(a,c){return Ya({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Xa(),Xi].filter(u=>!!u),issueData:{code:O.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof $r?_t(async(...a)=>{const c=new xn([]),u=await this._def.args.parseAsync(a,i).catch(d=>{throw c.addIssue(s(a,d)),c}),l=await o(...u);return await this._def.returns._def.type.parseAsync(l,i).catch(d=>{throw c.addIssue(r(l,d)),c})}):_t((...a)=>{const c=this._def.args.safeParse(a,i);if(!c.success)throw new xn([s(a,c.error)]);const u=o(...c.data),l=this._def.returns.safeParse(u,i);if(!l.success)throw new xn([r(u,l.error)]);return l.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Cr({...this._def,args:bn.create(e).rest(Ks.create())})}returns(e){return new Cr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,s){return new Cr({args:e||bn.create([]).rest(Ks.create()),returns:n||Ks.create(),typeName:ee.ZodFunction,...le(s)})}}class io extends de{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}io.create=(t,e)=>new io({getter:t,typeName:ee.ZodLazy,...le(e)});class oo extends de{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return H(n,{received:n.data,code:O.invalid_literal,expected:this._def.value}),oe}return{status:"valid",value:e.data}}get value(){return this._def.value}}oo.create=(t,e)=>new oo({value:t,typeName:ee.ZodLiteral,...le(e)});function Sw(t,e){return new ws({values:t,typeName:ee.ZodEnum,...le(e)})}class ws extends de{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),s=this._def.values;return H(n,{expected:Te.joinValues(s),received:n.parsedType,code:O.invalid_type}),oe}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),s=this._def.values;return H(n,{received:n.data,code:O.invalid_enum_value,options:s}),oe}return _t(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return ws.create(e)}exclude(e){return ws.create(this.options.filter(n=>!e.includes(n)))}}ws.create=Sw;class ao extends de{_parse(e){const n=Te.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==F.string&&s.parsedType!==F.number){const r=Te.objectValues(n);return H(s,{expected:Te.joinValues(r),received:s.parsedType,code:O.invalid_type}),oe}if(n.indexOf(e.data)===-1){const r=Te.objectValues(n);return H(s,{received:s.data,code:O.invalid_enum_value,options:r}),oe}return _t(e.data)}get enum(){return this._def.values}}ao.create=(t,e)=>new ao({values:t,typeName:ee.ZodNativeEnum,...le(e)});class $r extends de{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==F.promise&&n.common.async===!1)return H(n,{code:O.invalid_type,expected:F.promise,received:n.parsedType}),oe;const s=n.parsedType===F.promise?n.data:Promise.resolve(n.data);return _t(s.then(r=>this._def.type.parseAsync(r,{path:n.path,errorMap:n.common.contextualErrorMap})))}}$r.create=(t,e)=>new $r({type:t,typeName:ee.ZodPromise,...le(e)});class sn extends de{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ee.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:s}=this._processInputParams(e),r=this._def.effect||null;if(r.type==="preprocess"){const o=r.transform(s.data);return s.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:s.path,parent:s})):this._def.schema._parseSync({data:o,path:s.path,parent:s})}const i={addIssue:o=>{H(s,o),o.fatal?n.abort():n.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="refinement"){const o=a=>{const c=r.refinement(a,i);if(s.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){const a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?oe:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?oe:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(r.type==="transform")if(s.common.async===!1){const o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!Ja(o))return o;const a=r.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>Ja(o)?Promise.resolve(r.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);Te.assertNever(r)}}sn.create=(t,e,n)=>new sn({schema:t,typeName:ee.ZodEffects,effect:e,...le(n)});sn.createWithPreprocess=(t,e,n)=>new sn({schema:e,effect:{type:"preprocess",transform:t},typeName:ee.ZodEffects,...le(n)});class On extends de{_parse(e){return this._getType(e)===F.undefined?_t(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}On.create=(t,e)=>new On({innerType:t,typeName:ee.ZodOptional,...le(e)});class tr extends de{_parse(e){return this._getType(e)===F.null?_t(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tr.create=(t,e)=>new tr({innerType:t,typeName:ee.ZodNullable,...le(e)});class co extends de{_parse(e){const{ctx:n}=this._processInputParams(e);let s=n.data;return n.parsedType===F.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}co.create=(t,e)=>new co({innerType:t,typeName:ee.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...le(e)});class ic extends de{_parse(e){const{ctx:n}=this._processInputParams(e),s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n,common:{...n.common,issues:[]}}});return ec(s)?s.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue()})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue()}}removeCatch(){return this._def.innerType}}ic.create=(t,e)=>new ic({innerType:t,typeName:ee.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...le(e)});class oc extends de{_parse(e){if(this._getType(e)!==F.nan){const s=this._getOrReturnCtx(e);return H(s,{code:O.invalid_type,expected:F.nan,received:s.parsedType}),oe}return{status:"valid",value:e.data}}}oc.create=t=>new oc({typeName:ee.ZodNaN,...le(t)});const tO=Symbol("zod_brand");class kw extends de{_parse(e){const{ctx:n}=this._processInputParams(e),s=n.data;return this._def.type._parse({data:s,path:n.path,parent:n})}unwrap(){return this._def.type}}class Uo extends de{_parse(e){const{status:n,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?oe:i.status==="dirty"?(n.dirty(),Cw(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{const r=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return r.status==="aborted"?oe:r.status==="dirty"?(n.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:s.path,parent:s})}}static create(e,n){return new Uo({in:e,out:n,typeName:ee.ZodPipeline})}}const Aw=(t,e={},n)=>t?Vr.create().superRefine((s,r)=>{if(!t(s)){const i=typeof e=="function"?e(s):e,o=typeof i=="string"?{message:i}:i;r.addIssue({code:"custom",...o,fatal:n})}}):Vr.create(),nO={object:Fe.lazycreate};var ee;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline"})(ee||(ee={}));const sO=(t,e={message:`Input not instance of ${t.name}`})=>Aw(n=>n instanceof t,e,!0),Rw=Vn.create,Nw=_s.create,rO=oc.create,iO=Yi.create,xw=Ji.create,oO=Js.create,aO=tc.create,cO=eo.create,uO=to.create,lO=Vr.create,hO=Ks.create,dO=$n.create,fO=nc.create,pO=Jt.create,mO=Fe.create,gO=Fe.strictCreate,yO=no.create,vO=lu.create,_O=so.create,wO=bn.create,bO=ro.create,TO=rc.create,EO=er.create,IO=Cr.create,CO=io.create,SO=oo.create,kO=ws.create,AO=ao.create,RO=$r.create,gm=sn.create,NO=On.create,xO=tr.create,OO=sn.createWithPreprocess,DO=Uo.create,PO=()=>Rw().optional(),LO=()=>Nw().optional(),MO=()=>xw().optional(),UO={string:t=>Vn.create({...t,coerce:!0}),number:t=>_s.create({...t,coerce:!0}),boolean:t=>Ji.create({...t,coerce:!0}),bigint:t=>Yi.create({...t,coerce:!0}),date:t=>Js.create({...t,coerce:!0})},FO=oe;var Ye=Object.freeze({__proto__:null,defaultErrorMap:Xi,setErrorMap:W1,getErrorMap:Xa,makeIssue:Ya,EMPTY_PATH:G1,addIssueToContext:H,ParseStatus:It,INVALID:oe,DIRTY:Cw,OK:_t,isAborted:ql,isDirty:Hl,isValid:Ja,isAsync:ec,get util(){return Te},ZodParsedType:F,getParsedType:ns,ZodType:de,ZodString:Vn,ZodNumber:_s,ZodBigInt:Yi,ZodBoolean:Ji,ZodDate:Js,ZodSymbol:tc,ZodUndefined:eo,ZodNull:to,ZodAny:Vr,ZodUnknown:Ks,ZodNever:$n,ZodVoid:nc,ZodArray:Jt,get objectUtil(){return sc},ZodObject:Fe,ZodUnion:no,ZodDiscriminatedUnion:lu,ZodIntersection:so,ZodTuple:bn,ZodRecord:ro,ZodMap:rc,ZodSet:er,ZodFunction:Cr,ZodLazy:io,ZodLiteral:oo,ZodEnum:ws,ZodNativeEnum:ao,ZodPromise:$r,ZodEffects:sn,ZodTransformer:sn,ZodOptional:On,ZodNullable:tr,ZodDefault:co,ZodCatch:ic,ZodNaN:oc,BRAND:tO,ZodBranded:kw,ZodPipeline:Uo,custom:Aw,Schema:de,ZodSchema:de,late:nO,get ZodFirstPartyTypeKind(){return ee},coerce:UO,any:lO,array:pO,bigint:iO,boolean:xw,date:oO,discriminatedUnion:vO,effect:gm,enum:kO,function:IO,instanceof:sO,intersection:_O,lazy:CO,literal:SO,map:TO,nan:rO,nativeEnum:AO,never:dO,null:uO,nullable:xO,number:Nw,object:mO,oboolean:MO,onumber:LO,optional:NO,ostring:PO,pipeline:DO,preprocess:OO,promise:RO,record:bO,set:EO,strictObject:gO,string:Rw,symbol:aO,transformer:gm,tuple:wO,undefined:cO,union:yO,unknown:hO,void:fO,NEVER:FO,ZodIssueCode:O,quotelessJson:K1,ZodError:xn});const BO=Ye.enum(["Unknown","Facebook","Instagram","YouTube","Spotify","Twitter","LinkedIn","GitHub","TikTok"]),VO=Ye.object({link:Ye.string()}),ym=Ye.object({userUid:Ye.string(),userUri:Ye.string().optional(),displayName:Ye.string(),photoURL:Ye.string(),coverImg:Ye.string(),shortBio:Ye.string(),bgColor:Ye.string(),fontColor:Ye.string().optional(),fontFamily:Ye.string().optional(),longBio:Ye.string(),socialLinks:Ye.record(BO,VO)});var $O=Object.defineProperty,vm=Object.getOwnPropertySymbols,jO=Object.prototype.hasOwnProperty,qO=Object.prototype.propertyIsEnumerable,_m=(t,e,n)=>e in t?$O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ow=(t,e)=>{for(var n in e||(e={}))jO.call(e,n)&&_m(t,n,e[n]);if(vm)for(var n of vm(e))qO.call(e,n)&&_m(t,n,e[n]);return t},hu=t=>typeof t=="function",du=t=>typeof t=="string",Dw=t=>du(t)&&t.trim().length>0,HO=t=>typeof t=="number",Bs=t=>typeof t>"u",uo=t=>typeof t=="object"&&t!==null,zO=t=>gn(t,"tag")&&Dw(t.tag),Pw=t=>window.TouchEvent&&t instanceof TouchEvent,Lw=t=>gn(t,"component")&&Mw(t.component),KO=t=>hu(t)||uo(t),Mw=t=>!Bs(t)&&(du(t)||KO(t)||Lw(t)),wm=t=>uo(t)&&["height","width","right","left","top","bottom"].every(e=>HO(t[e])),gn=(t,e)=>(uo(t)||hu(t))&&e in t,WO=(t=>()=>t++)(0);function qu(t){return Pw(t)?t.targetTouches[0].clientX:t.clientX}function bm(t){return Pw(t)?t.targetTouches[0].clientY:t.clientY}var GO=t=>{Bs(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},Fo=t=>Lw(t)?Fo(t.component):zO(t)?Tn({render(){return t}}):typeof t=="string"?t:ye(is(t)),ZO=t=>{if(typeof t=="string")return t;const e=gn(t,"props")&&uo(t.props)?t.props:{},n=gn(t,"listeners")&&uo(t.listeners)?t.listeners:{};return{component:Fo(t),props:e,listeners:n}},QO=()=>typeof window<"u",Ud=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},XO=t=>["on","off","emit"].every(e=>gn(t,e)&&hu(t[e])),Dt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Dt||(Dt={}));var ac;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(ac||(ac={}));var Pt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Pt||(Pt={}));var Qt="Vue-Toastification",Gt={type:{type:String,default:Dt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Uw={type:Gt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},ya={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Gt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Kl={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Fw={transition:{type:[Object,String],default:`${Qt}__bounce`}},YO={position:{type:String,default:ac.TOP_RIGHT},draggable:Gt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Gt.trueBoolean,pauseOnHover:Gt.trueBoolean,closeOnClick:Gt.trueBoolean,timeout:Kl.timeout,hideProgressBar:Kl.hideProgressBar,toastClassName:Gt.classNames,bodyClassName:Gt.classNames,icon:Uw.customIcon,closeButton:ya.component,closeButtonClassName:ya.classNames,showCloseButtonOnHover:ya.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new Ud}},JO={id:{type:[String,Number],required:!0,default:0},type:Gt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},eD={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Gt.trueBoolean,maxToasts:{type:Number,default:20},transition:Fw.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Gt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Dn={CORE_TOAST:YO,TOAST:JO,CONTAINER:eD,PROGRESS_BAR:Kl,ICON:Uw,TRANSITION:Fw,CLOSE_BUTTON:ya},Bw=Tn({name:"VtProgressBar",props:Dn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Qt}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function tD(t,e){return Be(),Vt("div",{style:lo(t.style),class:hs(t.cpClass)},null,6)}Bw.render=tD;var nD=Bw,Vw=Tn({name:"VtCloseButton",props:Dn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Fo(this.component):"button"},classes(){const t=[`${Qt}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),sD=bc(" × ");function rD(t,e){return Be(),ln(ph(t.buttonComponent),Tc({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:po(()=>[sD]),_:1},16,["aria-label","class"])}Vw.render=rD;var iD=Vw,$w={},oD={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},aD=bs("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),cD=[aD];function uD(t,e){return Be(),Vt("svg",oD,cD)}$w.render=uD;var lD=$w,jw={},hD={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},dD=bs("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),fD=[dD];function pD(t,e){return Be(),Vt("svg",hD,fD)}jw.render=pD;var Tm=jw,qw={},mD={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},gD=bs("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),yD=[gD];function vD(t,e){return Be(),Vt("svg",mD,yD)}qw.render=vD;var _D=qw,Hw={},wD={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},bD=bs("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),TD=[bD];function ED(t,e){return Be(),Vt("svg",wD,TD)}Hw.render=ED;var ID=Hw,zw=Tn({name:"VtIcon",props:Dn.ICON,computed:{customIconChildren(){return gn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return du(this.customIcon)?this.trimValue(this.customIcon):gn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return gn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Mw(this.customIcon)?Fo(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Dt.DEFAULT]:Tm,[Dt.INFO]:Tm,[Dt.SUCCESS]:lD,[Dt.ERROR]:ID,[Dt.WARNING]:_D}[this.type]},iconClasses(){const t=[`${Qt}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Dw(t)?t.trim():e}}});function CD(t,e){return Be(),ln(ph(t.component),{class:hs(t.iconClasses)},{default:po(()=>[bc(Sm(t.customIconChildren),1)]),_:1},8,["class"])}zw.render=CD;var SD=zw,Kw=Tn({name:"VtToast",components:{ProgressBar:nD,CloseButton:iD,Icon:SD},inheritAttrs:!1,props:Object.assign({},Dn.CORE_TOAST,Dn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${Qt}__toast`,`${Qt}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${Qt}__toast--rtl`),t},bodyClasses(){return[`${Qt}__toast-${du(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return wm(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:gn,getVueComponentFromObj:Fo,closeToast(){this.eventBus.emit(Pt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:qu(t),y:bm(t)},this.dragStart=qu(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:qu(t),y:bm(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,wm(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),kD=["role"];function AD(t,e){const n=fi("Icon"),s=fi("CloseButton"),r=fi("ProgressBar");return Be(),Vt("div",{class:hs(t.classes),style:lo(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(Be(),ln(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):yu("v-if",!0),bs("div",{role:t.accessibility.toastRole||"alert",class:hs(t.bodyClasses)},[typeof t.content=="string"?(Be(),Vt(at,{key:0},[bc(Sm(t.content),1)],2112)):(Be(),ln(ph(t.getVueComponentFromObj(t.content)),Tc({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},kT(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,kD),t.closeButton?(Be(),ln(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:ME(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):yu("v-if",!0),t.timeout?(Be(),ln(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):yu("v-if",!0)],38)}Kw.render=AD;var RD=Kw,Ww=Tn({name:"VtTransition",props:Dn.TRANSITION,emits:["leave"],methods:{hasProp:gn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function ND(t,e){return Be(),ln(AE,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:po(()=>[ST(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Ww.render=ND;var xD=Ww,Gw=Tn({name:"VueToastification",devtools:{hide:!0},components:{Toast:RD,VtTransition:xD},props:Object.assign({},Dn.CORE_TOAST,Dn.CONTAINER,Dn.TRANSITION),data(){return{count:0,positions:Object.values(ac),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Pt.ADD,this.addToast),t.on(Pt.CLEAR,this.clearToasts),t.on(Pt.DISMISS,this.dismissToast),t.on(Pt.UPDATE,this.updateToast),t.on(Pt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){hu(t)&&(t=await t()),GO(this.$el),t.appendChild(this.$el)},setToast(t){Bs(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=ZO(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!Bs(e)&&!Bs(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){Bs(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${Qt}__container`,t].concat(this.defaults.containerClassName)}}});function OD(t,e){const n=fi("Toast"),s=fi("VtTransition");return Be(),Vt("div",null,[(Be(!0),Vt(at,null,tf(t.positions,r=>(Be(),Vt("div",{key:r},[st(s,{transition:t.defaults.transition,class:hs(t.getClasses(r))},{default:po(()=>[(Be(!0),Vt(at,null,tf(t.getPositionToasts(r),i=>(Be(),ln(n,Tc({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}Gw.render=OD;var DD=Gw,Em=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new Ud;e&&pc(()=>{const i=Pg(DD,Ow({},t)),o=i.mount(document.createElement("div")),a=t.onMounted;if(Bs(a)||a(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${Qt}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const a=Object.assign({},{id:WO(),type:Dt.DEFAULT},o,{content:i});return n.emit(Pt.ADD,a),a.id};s.clear=()=>n.emit(Pt.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Pt.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Pt.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const u=Object.assign({},a,{content:o});n.emit(Pt.UPDATE,{id:i,options:u,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Dt.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Dt.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Dt.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Dt.WARNING})),s},PD=()=>{const t=()=>console.warn(`[${Qt}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function Wl(t){return QO()?XO(t)?Em({eventBus:t},!1):Em(t,!0):PD()}var Zw=Symbol("VueToastification"),Qw=new Ud,LD=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=Wl(Ow({eventBus:Qw},e));t.provide(Zw,n)},MD=t=>{if(t)return Wl(t);const e=mo()?Yt(Zw,void 0):void 0;return e||Wl(Qw)},UD=LD;const ii=MD(),Im=KE("profile",{state:()=>({profile:null}),getters:{isOwnProfile({profile:t}){var e,n;return(e=$t.currentUser)!=null&&e.uid?((n=$t.currentUser)==null?void 0:n.uid)===(t==null?void 0:t.userUid):!1},invertedBgColor:({profile:t})=>t!=null&&t.bgColor?V1(t.bgColor):"black"},actions:{updateProfile(t){if(!this.profile||!this.isOwnProfile)throw new Error("Unathorized");const e=Object.keys(t).reduce((n,s)=>JSON.stringify(t[s])===JSON.stringify(this.profile?this.profile[s]:void 0)?n:{...n,[s]:t[s]},{});this.profile={...this.profile,...t},!(Object.keys(e).length<1)&&Ex(fm(),e).then(()=>ii("Changes saved")).catch(()=>ii("Error saving changes"))},async loadProfile(t){try{const e=Ga(Qa,Md,t),n=await am(e);if(!n.exists()){this.profile=null;return}this.profile=ym.parse(n.data())}catch{ii("Error loading profile"),this.profile=null}},async loadPNS(t){const e=Ga(Qa,"ib_dns",t),n=await am(e);if(!n.exists()){this.profile=null;return}const{uid:s}=n.data();if(!s){this.profile=null;return}return this.loadProfile(s)},async createOwnProfile(){var t;try{if(!((t=$t.currentUser)!=null&&t.uid))return;const e=ym.parse(z1($t.currentUser));await Tx(fm(),e),this.profile=e,ii("Profile created");return}catch{ii("Error creating profile")}}}}),Vs=W0({history:l0("/"),routes:[{path:"/",name:"Login",component:()=>Wo(()=>import("./Login-ca83ef89.js"),["assets/Login-ca83ef89.js","assets/Login-63bcfcd5.css"]),beforeEnter:async(t,e,n)=>{var s;(s=$t.currentUser)!=null&&s.uid&&await Vs.replace(`/u/${$t.currentUser.uid}`),n()}},{path:"/u/:profileUid",name:"Profile",props:!1,component:()=>Wo(()=>import("./Profile-205f8732.js"),["assets/Profile-205f8732.js","assets/Profile-367877a2.css"]),beforeEnter:async(t,e,n)=>{var i,o,a;const s=Im(),r=t.params.profileUid;await s.loadProfile(r),s.profile||(r===((i=$t.currentUser)==null?void 0:i.uid)?await s.createOwnProfile():await Vs.replace("/404")),(o=s.profile)!=null&&o.userUri&&await Vs.replace(`/profile/${(a=s.profile)==null?void 0:a.userUri}`),n()}},{path:"/profile/:profileURI",name:"PNS Profile",props:!1,component:()=>Wo(()=>import("./Profile-205f8732.js"),["assets/Profile-205f8732.js","assets/Profile-367877a2.css"]),beforeEnter:async(t,e,n)=>{var i;const s=Im(),r=t.params.profileURI;r!==((i=s.profile)==null?void 0:i.userUri)&&await s.loadPNS(r),s.profile||await Vs.replace("/404"),n()}},{path:"/:pathMatch(.*)",name:"Error404",component:()=>Wo(()=>import("./Error404-cd7c470e.js"),["assets/Error404-cd7c470e.js","assets/Error404-4d995ba2.css"])}]});const FD=Ye.object({uid:Ye.string(),displayName:Ye.string().nullable(),photoURL:Ye.string().nullable()}).nullable(),BD=$E(),VD={timeout:2e3,maxToasts:2};let Hu;fS($t,t=>{const e=FD.parse(t);Hu?e!=null&&e.uid?Vs.replace(`/u/${e.uid}`):Vs.replace("/"):(Hu=Pg(J0),Hu.use(Vs).use(BD).use(UD,VD).mount("#app"))});export{hi as $,oP as A,sP as B,rP as C,Ot as D,tf as E,Xn as F,Yn as G,bc as H,po as I,hs as J,fi as K,qD as L,KD as M,GD as N,Ye as O,ME as P,Dm as Q,fb as R,BO as S,es as T,mo as U,pc as V,jD as W,MD as X,F1 as Y,zD as Z,Y0 as _,Be as a,eP as a0,YD as a1,JD as a2,nP as a3,iP as a4,tP as a5,$D as a6,WD as a7,bs as b,Vt as c,Tn as d,$t as e,nT as f,jl as g,kg as h,Im as i,ln as j,st as k,yu as l,HD as m,lo as n,ag as o,tT as p,$1 as q,oh as r,QD as s,Sm as t,is as u,at as v,ZD as w,Vs as x,Tc as y,ST as z};
