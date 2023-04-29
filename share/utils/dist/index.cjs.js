"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function Yt(){this.__data__=[],this.size=0}function jt(t,e){return t===e||t!==t&&e!==e}function F(t,e){for(var r=t.length;r--;)if(jt(t[r][0],e))return r;return-1}var Jt=Array.prototype,Xt=Jt.splice;function Zt(t){var e=this.__data__,r=F(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Xt.call(e,r,1),--this.size,!0}function Qt(t){var e=this.__data__,r=F(e,t);return r<0?void 0:e[r][1]}function kt(t){return F(this.__data__,t)>-1}function te(t,e){var r=this.__data__,n=F(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function p(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}p.prototype.clear=Yt;p.prototype.delete=Zt;p.prototype.get=Qt;p.prototype.has=kt;p.prototype.set=te;function ee(){this.__data__=new p,this.size=0}function re(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function ne(t){return this.__data__.get(t)}function ae(t){return this.__data__.has(t)}var oe=typeof global=="object"&&global&&global.Object===Object&&global;const mt=oe;var ie=typeof self=="object"&&self&&self.Object===Object&&self,se=mt||ie||Function("return this")();const l=se;var ce=l.Symbol;const v=ce;var wt=Object.prototype,ue=wt.hasOwnProperty,fe=wt.toString,A=v?v.toStringTag:void 0;function ge(t){var e=ue.call(t,A),r=t[A];try{t[A]=void 0;var n=!0}catch{}var c=fe.call(t);return n&&(e?t[A]=r:delete t[A]),c}var le=Object.prototype,pe=le.toString;function he(t){return pe.call(t)}var be="[object Null]",de="[object Undefined]",tt=v?v.toStringTag:void 0;function C(t){return t==null?t===void 0?de:be:tt&&tt in Object(t)?ge(t):he(t)}function I(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ye="[object AsyncFunction]",Te="[object Function]",$e="[object GeneratorFunction]",_e="[object Proxy]";function At(t){if(!I(t))return!1;var e=C(t);return e==Te||e==$e||e==ye||e==_e}var ve=l["__core-js_shared__"];const U=ve;var et=function(){var t=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function je(t){return!!et&&et in t}var me=Function.prototype,we=me.toString;function T(t){if(t!=null){try{return we.call(t)}catch{}try{return t+""}catch{}}return""}var Ae=/[\\^$.*+?()[\]{}|]/g,Se=/^\[object .+?Constructor\]$/,Oe=Function.prototype,Pe=Object.prototype,Ce=Oe.toString,Ie=Pe.hasOwnProperty,xe=RegExp("^"+Ce.call(Ie).replace(Ae,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ee(t){if(!I(t)||je(t))return!1;var e=At(t)?xe:Se;return e.test(T(t))}function Fe(t,e){return t==null?void 0:t[e]}function $(t,e){var r=Fe(t,e);return Ee(r)?r:void 0}var Me=$(l,"Map");const O=Me;var De=$(Object,"create");const P=De;function Ue(){this.__data__=P?P(null):{},this.size=0}function Be(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Le="__lodash_hash_undefined__",Ge=Object.prototype,Ne=Ge.hasOwnProperty;function Re(t){var e=this.__data__;if(P){var r=e[t];return r===Le?void 0:r}return Ne.call(e,t)?e[t]:void 0}var ze=Object.prototype,Ke=ze.hasOwnProperty;function He(t){var e=this.__data__;return P?e[t]!==void 0:Ke.call(e,t)}var Ve="__lodash_hash_undefined__";function We(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=P&&e===void 0?Ve:e,this}function y(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}y.prototype.clear=Ue;y.prototype.delete=Be;y.prototype.get=Re;y.prototype.has=He;y.prototype.set=We;function qe(){this.size=0,this.__data__={hash:new y,map:new(O||p),string:new y}}function Ye(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function M(t,e){var r=t.__data__;return Ye(e)?r[typeof e=="string"?"string":"hash"]:r.map}function Je(t){var e=M(this,t).delete(t);return this.size-=e?1:0,e}function Xe(t){return M(this,t).get(t)}function Ze(t){return M(this,t).has(t)}function Qe(t,e){var r=M(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function m(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}m.prototype.clear=qe;m.prototype.delete=Je;m.prototype.get=Xe;m.prototype.has=Ze;m.prototype.set=Qe;var ke=200;function tr(t,e){var r=this.__data__;if(r instanceof p){var n=r.__data__;if(!O||n.length<ke-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new m(n)}return r.set(t,e),this.size=r.size,this}function w(t){var e=this.__data__=new p(t);this.size=e.size}w.prototype.clear=ee;w.prototype.delete=re;w.prototype.get=ne;w.prototype.has=ae;w.prototype.set=tr;function er(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var rr=function(){try{var t=$(Object,"defineProperty");return t({},"",{}),t}catch{}}();const rt=rr;function St(t,e,r){e=="__proto__"&&rt?rt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var nr=Object.prototype,ar=nr.hasOwnProperty;function Ot(t,e,r){var n=t[e];(!(ar.call(t,e)&&jt(n,r))||r===void 0&&!(e in t))&&St(t,e,r)}function D(t,e,r,n){var c=!r;r||(r={});for(var a=-1,o=e.length;++a<o;){var u=e[a],f=n?n(r[u],t[u],u,r,t):void 0;f===void 0&&(f=t[u]),c?St(r,u,f):Ot(r,u,f)}return r}function or(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function x(t){return t!=null&&typeof t=="object"}var ir="[object Arguments]";function nt(t){return x(t)&&C(t)==ir}var Pt=Object.prototype,sr=Pt.hasOwnProperty,cr=Pt.propertyIsEnumerable,ur=nt(function(){return arguments}())?nt:function(t){return x(t)&&sr.call(t,"callee")&&!cr.call(t,"callee")};const fr=ur;var gr=Array.isArray;const z=gr;function lr(){return!1}var Ct=typeof exports=="object"&&exports&&!exports.nodeType&&exports,at=Ct&&typeof module=="object"&&module&&!module.nodeType&&module,pr=at&&at.exports===Ct,ot=pr?l.Buffer:void 0,hr=ot?ot.isBuffer:void 0,br=hr||lr;const It=br;var dr=9007199254740991,yr=/^(?:0|[1-9]\d*)$/;function Tr(t,e){var r=typeof t;return e=e??dr,!!e&&(r=="number"||r!="symbol"&&yr.test(t))&&t>-1&&t%1==0&&t<e}var $r=9007199254740991;function xt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=$r}var _r="[object Arguments]",vr="[object Array]",jr="[object Boolean]",mr="[object Date]",wr="[object Error]",Ar="[object Function]",Sr="[object Map]",Or="[object Number]",Pr="[object Object]",Cr="[object RegExp]",Ir="[object Set]",xr="[object String]",Er="[object WeakMap]",Fr="[object ArrayBuffer]",Mr="[object DataView]",Dr="[object Float32Array]",Ur="[object Float64Array]",Br="[object Int8Array]",Lr="[object Int16Array]",Gr="[object Int32Array]",Nr="[object Uint8Array]",Rr="[object Uint8ClampedArray]",zr="[object Uint16Array]",Kr="[object Uint32Array]",s={};s[Dr]=s[Ur]=s[Br]=s[Lr]=s[Gr]=s[Nr]=s[Rr]=s[zr]=s[Kr]=!0;s[_r]=s[vr]=s[Fr]=s[jr]=s[Mr]=s[mr]=s[wr]=s[Ar]=s[Sr]=s[Or]=s[Pr]=s[Cr]=s[Ir]=s[xr]=s[Er]=!1;function Hr(t){return x(t)&&xt(t.length)&&!!s[C(t)]}function K(t){return function(e){return t(e)}}var Et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,S=Et&&typeof module=="object"&&module&&!module.nodeType&&module,Vr=S&&S.exports===Et,B=Vr&&mt.process,Wr=function(){try{var t=S&&S.require&&S.require("util").types;return t||B&&B.binding&&B.binding("util")}catch{}}();const j=Wr;var it=j&&j.isTypedArray,qr=it?K(it):Hr;const Yr=qr;var Jr=Object.prototype,Xr=Jr.hasOwnProperty;function Ft(t,e){var r=z(t),n=!r&&fr(t),c=!r&&!n&&It(t),a=!r&&!n&&!c&&Yr(t),o=r||n||c||a,u=o?or(t.length,String):[],f=u.length;for(var g in t)(e||Xr.call(t,g))&&!(o&&(g=="length"||c&&(g=="offset"||g=="parent")||a&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||Tr(g,f)))&&u.push(g);return u}var Zr=Object.prototype;function H(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Zr;return t===r}function Mt(t,e){return function(r){return t(e(r))}}var Qr=Mt(Object.keys,Object);const kr=Qr;var tn=Object.prototype,en=tn.hasOwnProperty;function rn(t){if(!H(t))return kr(t);var e=[];for(var r in Object(t))en.call(t,r)&&r!="constructor"&&e.push(r);return e}function Dt(t){return t!=null&&xt(t.length)&&!At(t)}function V(t){return Dt(t)?Ft(t):rn(t)}function nn(t,e){return t&&D(e,V(e),t)}function an(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var on=Object.prototype,sn=on.hasOwnProperty;function cn(t){if(!I(t))return an(t);var e=H(t),r=[];for(var n in t)n=="constructor"&&(e||!sn.call(t,n))||r.push(n);return r}function W(t){return Dt(t)?Ft(t,!0):cn(t)}function un(t,e){return t&&D(e,W(e),t)}var Ut=typeof exports=="object"&&exports&&!exports.nodeType&&exports,st=Ut&&typeof module=="object"&&module&&!module.nodeType&&module,fn=st&&st.exports===Ut,ct=fn?l.Buffer:void 0,ut=ct?ct.allocUnsafe:void 0;function gn(t,e){if(e)return t.slice();var r=t.length,n=ut?ut(r):new t.constructor(r);return t.copy(n),n}function ln(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function pn(t,e){for(var r=-1,n=t==null?0:t.length,c=0,a=[];++r<n;){var o=t[r];e(o,r,t)&&(a[c++]=o)}return a}function Bt(){return[]}var hn=Object.prototype,bn=hn.propertyIsEnumerable,ft=Object.getOwnPropertySymbols,dn=ft?function(t){return t==null?[]:(t=Object(t),pn(ft(t),function(e){return bn.call(t,e)}))}:Bt;const q=dn;function yn(t,e){return D(t,q(t),e)}function Lt(t,e){for(var r=-1,n=e.length,c=t.length;++r<n;)t[c+r]=e[r];return t}var Tn=Mt(Object.getPrototypeOf,Object);const Gt=Tn;var $n=Object.getOwnPropertySymbols,_n=$n?function(t){for(var e=[];t;)Lt(e,q(t)),t=Gt(t);return e}:Bt;const Nt=_n;function vn(t,e){return D(t,Nt(t),e)}function Rt(t,e,r){var n=e(t);return z(t)?n:Lt(n,r(t))}function jn(t){return Rt(t,V,q)}function mn(t){return Rt(t,W,Nt)}var wn=$(l,"DataView");const L=wn;var An=$(l,"Promise");const G=An;var Sn=$(l,"Set");const N=Sn;var On=$(l,"WeakMap");const R=On;var gt="[object Map]",Pn="[object Object]",lt="[object Promise]",pt="[object Set]",ht="[object WeakMap]",bt="[object DataView]",Cn=T(L),In=T(O),xn=T(G),En=T(N),Fn=T(R),d=C;(L&&d(new L(new ArrayBuffer(1)))!=bt||O&&d(new O)!=gt||G&&d(G.resolve())!=lt||N&&d(new N)!=pt||R&&d(new R)!=ht)&&(d=function(t){var e=C(t),r=e==Pn?t.constructor:void 0,n=r?T(r):"";if(n)switch(n){case Cn:return bt;case In:return gt;case xn:return lt;case En:return pt;case Fn:return ht}return e});const Y=d;var Mn=Object.prototype,Dn=Mn.hasOwnProperty;function Un(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Dn.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var Bn=l.Uint8Array;const dt=Bn;function J(t){var e=new t.constructor(t.byteLength);return new dt(e).set(new dt(t)),e}function Ln(t,e){var r=e?J(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Gn=/\w*$/;function Nn(t){var e=new t.constructor(t.source,Gn.exec(t));return e.lastIndex=t.lastIndex,e}var yt=v?v.prototype:void 0,Tt=yt?yt.valueOf:void 0;function Rn(t){return Tt?Object(Tt.call(t)):{}}function zn(t,e){var r=e?J(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Kn="[object Boolean]",Hn="[object Date]",Vn="[object Map]",Wn="[object Number]",qn="[object RegExp]",Yn="[object Set]",Jn="[object String]",Xn="[object Symbol]",Zn="[object ArrayBuffer]",Qn="[object DataView]",kn="[object Float32Array]",ta="[object Float64Array]",ea="[object Int8Array]",ra="[object Int16Array]",na="[object Int32Array]",aa="[object Uint8Array]",oa="[object Uint8ClampedArray]",ia="[object Uint16Array]",sa="[object Uint32Array]";function ca(t,e,r){var n=t.constructor;switch(e){case Zn:return J(t);case Kn:case Hn:return new n(+t);case Qn:return Ln(t,r);case kn:case ta:case ea:case ra:case na:case aa:case oa:case ia:case sa:return zn(t,r);case Vn:return new n;case Wn:case Jn:return new n(t);case qn:return Nn(t);case Yn:return new n;case Xn:return Rn(t)}}var $t=Object.create,ua=function(){function t(){}return function(e){if(!I(e))return{};if($t)return $t(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const fa=ua;function ga(t){return typeof t.constructor=="function"&&!H(t)?fa(Gt(t)):{}}var la="[object Map]";function pa(t){return x(t)&&Y(t)==la}var _t=j&&j.isMap,ha=_t?K(_t):pa;const ba=ha;var da="[object Set]";function ya(t){return x(t)&&Y(t)==da}var vt=j&&j.isSet,Ta=vt?K(vt):ya;const $a=Ta;var _a=1,va=2,ja=4,zt="[object Arguments]",ma="[object Array]",wa="[object Boolean]",Aa="[object Date]",Sa="[object Error]",Kt="[object Function]",Oa="[object GeneratorFunction]",Pa="[object Map]",Ca="[object Number]",Ht="[object Object]",Ia="[object RegExp]",xa="[object Set]",Ea="[object String]",Fa="[object Symbol]",Ma="[object WeakMap]",Da="[object ArrayBuffer]",Ua="[object DataView]",Ba="[object Float32Array]",La="[object Float64Array]",Ga="[object Int8Array]",Na="[object Int16Array]",Ra="[object Int32Array]",za="[object Uint8Array]",Ka="[object Uint8ClampedArray]",Ha="[object Uint16Array]",Va="[object Uint32Array]",i={};i[zt]=i[ma]=i[Da]=i[Ua]=i[wa]=i[Aa]=i[Ba]=i[La]=i[Ga]=i[Na]=i[Ra]=i[Pa]=i[Ca]=i[Ht]=i[Ia]=i[xa]=i[Ea]=i[Fa]=i[za]=i[Ka]=i[Ha]=i[Va]=!0;i[Sa]=i[Kt]=i[Ma]=!1;function E(t,e,r,n,c,a){var o,u=e&_a,f=e&va,g=e&ja;if(r&&(o=c?r(t,n,c,a):r(t)),o!==void 0)return o;if(!I(t))return t;var X=z(t);if(X){if(o=Un(t),!u)return ln(t,o)}else{var _=Y(t),Z=_==Kt||_==Oa;if(It(t))return gn(t,u);if(_==Ht||_==zt||Z&&!c){if(o=f||Z?{}:ga(t),!u)return f?vn(t,un(o,t)):yn(t,nn(o,t))}else{if(!i[_])return c?t:{};o=ca(t,_,u)}}a||(a=new w);var Q=a.get(t);if(Q)return Q;a.set(t,o),$a(t)?t.forEach(function(h){o.add(E(h,e,r,h,t,a))}):ba(t)&&t.forEach(function(h,b){o.set(b,E(h,e,r,b,t,a))});var qt=g?f?mn:jn:f?W:V,k=X?void 0:qt(t);return er(k||t,function(h,b){k&&(b=h,h=t[b]),Ot(o,b,E(h,e,r,b,t,a))}),o}var Wa=1,qa=4;function Vt(t){return E(t,Wa|qa)}class Ya{constructor(e,r){r=r||{envParams:{}},this.fnString=e,this.fn=Wt(e),this.userParamsSchema={},this.result=[],this.envParams=r.envParams}runOne(e,r=1e4){return new Promise(n=>{const c=setTimeout(()=>{n({data:null,code:1,msg:"timeout",isSuccess:!1,date:new Date().getTime(),userParams:e})},r);this.fn(this.envParams,e).then(a=>{clearTimeout(c),n({data:a,code:0,msg:"success",isSuccess:!0,date:new Date().getTime(),userParams:e})}).catch(a=>{clearTimeout(c),n({data:a,code:(a==null?void 0:a.code)||1,msg:(a==null?void 0:a.message)||"error",isSuccess:!1,date:new Date().getTime(),userParams:e})})})}async run(e){const r=[],{allUserParams:n=[],concurrency:c=1}=e;for(let a=0;a<n.length;a=a+c){const o=await Promise.all(n.slice(a,a+c).map(u=>this.runOne(Vt(u),e.timeout)));r.push(...o)}return this.result.push(...r),r}}const Wt=t=>Function(`return ${t}`)(),Ja=t=>{const{rawParams:e,range:r}=t,{start:n,end:c}=r,a=[];for(let o=n;o<=c;o++){const u=Vt(e);u.page=o,a.push(u)}return a},Xa=t=>/^(async\s+)?function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(t),Za=t=>/^async\s*function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(t),Qa=(t,e)=>t+e;exports.Crawler=Ya;exports.add=Qa;exports.generateParams=Ja;exports.isAsyncFunctionString=Za;exports.isFunctionString=Xa;exports.turnFnStringToFn=Wt;
//# sourceMappingURL=index.cjs.js.map