"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(){this.__data__=[],this.size=0}var Ze=Xe;function Qe(e,t){return e===t||e!==e&&t!==t}var we=Qe,et=we;function tt(e,t){for(var r=e.length;r--;)if(et(e[r][0],t))return r;return-1}var M=tt,rt=M,at=Array.prototype,nt=at.splice;function ot(e){var t=this.__data__,r=rt(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():nt.call(t,r,1),--this.size,!0}var st=ot,it=M;function ct(e){var t=this.__data__,r=it(t,e);return r<0?void 0:t[r][1]}var ut=ct,ft=M;function vt(e){return ft(this.__data__,e)>-1}var lt=vt,gt=M;function pt(e,t){var r=this.__data__,a=gt(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var $t=pt,yt=Ze,bt=st,ht=ut,_t=lt,dt=$t;function _(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}_.prototype.clear=yt;_.prototype.delete=bt;_.prototype.get=ht;_.prototype.has=_t;_.prototype.set=dt;var D=_,Tt=D;function jt(){this.__data__=new Tt,this.size=0}var At=jt;function St(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var mt=St;function Ot(e){return this.__data__.get(e)}var Ct=Ot;function wt(e){return this.__data__.has(e)}var It=wt,Pt=typeof P=="object"&&P&&P.Object===Object&&P,Ie=Pt,xt=Ie,Et=typeof self=="object"&&self&&self.Object===Object&&self,Mt=xt||Et||Function("return this")(),l=Mt,Dt=l,Ft=Dt.Symbol,k=Ft,ae=k,Pe=Object.prototype,Lt=Pe.hasOwnProperty,Gt=Pe.toString,m=ae?ae.toStringTag:void 0;function Bt(e){var t=Lt.call(e,m),r=e[m];try{e[m]=void 0;var a=!0}catch{}var o=Gt.call(e);return a&&(t?e[m]=r:delete e[m]),o}var Ut=Bt,Kt=Object.prototype,Nt=Kt.toString;function Ht(e){return Nt.call(e)}var Vt=Ht,ne=k,Rt=Ut,kt=Vt,zt="[object Null]",Wt="[object Undefined]",oe=ne?ne.toStringTag:void 0;function qt(e){return e==null?e===void 0?Wt:zt:oe&&oe in Object(e)?Rt(e):kt(e)}var F=qt;function Jt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var C=Jt,Yt=F,Xt=C,Zt="[object AsyncFunction]",Qt="[object Function]",er="[object GeneratorFunction]",tr="[object Proxy]";function rr(e){if(!Xt(e))return!1;var t=Yt(e);return t==Qt||t==er||t==Zt||t==tr}var xe=rr,ar=l,nr=ar["__core-js_shared__"],or=nr,U=or,se=function(){var e=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function sr(e){return!!se&&se in e}var ir=sr,cr=Function.prototype,ur=cr.toString;function fr(e){if(e!=null){try{return ur.call(e)}catch{}try{return e+""}catch{}}return""}var Ee=fr,vr=xe,lr=ir,gr=C,pr=Ee,$r=/[\\^$.*+?()[\]{}|]/g,yr=/^\[object .+?Constructor\]$/,br=Function.prototype,hr=Object.prototype,_r=br.toString,dr=hr.hasOwnProperty,Tr=RegExp("^"+_r.call(dr).replace($r,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function jr(e){if(!gr(e)||lr(e))return!1;var t=vr(e)?Tr:yr;return t.test(pr(e))}var Ar=jr;function Sr(e,t){return e==null?void 0:e[t]}var mr=Sr,Or=Ar,Cr=mr;function wr(e,t){var r=Cr(e,t);return Or(r)?r:void 0}var b=wr,Ir=b,Pr=l,xr=Ir(Pr,"Map"),z=xr,Er=b,Mr=Er(Object,"create"),L=Mr,ie=L;function Dr(){this.__data__=ie?ie(null):{},this.size=0}var Fr=Dr;function Lr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Gr=Lr,Br=L,Ur="__lodash_hash_undefined__",Kr=Object.prototype,Nr=Kr.hasOwnProperty;function Hr(e){var t=this.__data__;if(Br){var r=t[e];return r===Ur?void 0:r}return Nr.call(t,e)?t[e]:void 0}var Vr=Hr,Rr=L,kr=Object.prototype,zr=kr.hasOwnProperty;function Wr(e){var t=this.__data__;return Rr?t[e]!==void 0:zr.call(t,e)}var qr=Wr,Jr=L,Yr="__lodash_hash_undefined__";function Xr(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Jr&&t===void 0?Yr:t,this}var Zr=Xr,Qr=Fr,ea=Gr,ta=Vr,ra=qr,aa=Zr;function d(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}d.prototype.clear=Qr;d.prototype.delete=ea;d.prototype.get=ta;d.prototype.has=ra;d.prototype.set=aa;var na=d,ce=na,oa=D,sa=z;function ia(){this.size=0,this.__data__={hash:new ce,map:new(sa||oa),string:new ce}}var ca=ia;function ua(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var fa=ua,va=fa;function la(e,t){var r=e.__data__;return va(t)?r[typeof t=="string"?"string":"hash"]:r.map}var G=la,ga=G;function pa(e){var t=ga(this,e).delete(e);return this.size-=t?1:0,t}var $a=pa,ya=G;function ba(e){return ya(this,e).get(e)}var ha=ba,_a=G;function da(e){return _a(this,e).has(e)}var Ta=da,ja=G;function Aa(e,t){var r=ja(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var Sa=Aa,ma=ca,Oa=$a,Ca=ha,wa=Ta,Ia=Sa;function T(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}T.prototype.clear=ma;T.prototype.delete=Oa;T.prototype.get=Ca;T.prototype.has=wa;T.prototype.set=Ia;var Pa=T,xa=D,Ea=z,Ma=Pa,Da=200;function Fa(e,t){var r=this.__data__;if(r instanceof xa){var a=r.__data__;if(!Ea||a.length<Da-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ma(a)}return r.set(e,t),this.size=r.size,this}var La=Fa,Ga=D,Ba=At,Ua=mt,Ka=Ct,Na=It,Ha=La;function j(e){var t=this.__data__=new Ga(e);this.size=t.size}j.prototype.clear=Ba;j.prototype.delete=Ua;j.prototype.get=Ka;j.prototype.has=Na;j.prototype.set=Ha;var Va=j;function Ra(e,t){for(var r=-1,a=e==null?0:e.length;++r<a&&t(e[r],r,e)!==!1;);return e}var ka=Ra,za=b,Wa=function(){try{var e=za(Object,"defineProperty");return e({},"",{}),e}catch{}}(),qa=Wa,ue=qa;function Ja(e,t,r){t=="__proto__"&&ue?ue(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Me=Ja,Ya=Me,Xa=we,Za=Object.prototype,Qa=Za.hasOwnProperty;function en(e,t,r){var a=e[t];(!(Qa.call(e,t)&&Xa(a,r))||r===void 0&&!(t in e))&&Ya(e,t,r)}var De=en,tn=De,rn=Me;function an(e,t,r,a){var o=!r;r||(r={});for(var n=-1,s=t.length;++n<s;){var c=t[n],v=a?a(r[c],e[c],c,r,e):void 0;v===void 0&&(v=e[c]),o?rn(r,c,v):tn(r,c,v)}return r}var B=an;function nn(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var on=nn;function sn(e){return e!=null&&typeof e=="object"}var w=sn,cn=F,un=w,fn="[object Arguments]";function vn(e){return un(e)&&cn(e)==fn}var ln=vn,fe=ln,gn=w,Fe=Object.prototype,pn=Fe.hasOwnProperty,$n=Fe.propertyIsEnumerable,yn=fe(function(){return arguments}())?fe:function(e){return gn(e)&&pn.call(e,"callee")&&!$n.call(e,"callee")},bn=yn,hn=Array.isArray,W=hn,O={},_n={get exports(){return O},set exports(e){O=e}};function dn(){return!1}var Tn=dn;(function(e,t){var r=l,a=Tn,o=t&&!t.nodeType&&t,n=o&&!0&&e&&!e.nodeType&&e,s=n&&n.exports===o,c=s?r.Buffer:void 0,v=c?c.isBuffer:void 0,f=v||a;e.exports=f})(_n,O);var jn=9007199254740991,An=/^(?:0|[1-9]\d*)$/;function Sn(e,t){var r=typeof e;return t=t??jn,!!t&&(r=="number"||r!="symbol"&&An.test(e))&&e>-1&&e%1==0&&e<t}var mn=Sn,On=9007199254740991;function Cn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=On}var Le=Cn,wn=F,In=Le,Pn=w,xn="[object Arguments]",En="[object Array]",Mn="[object Boolean]",Dn="[object Date]",Fn="[object Error]",Ln="[object Function]",Gn="[object Map]",Bn="[object Number]",Un="[object Object]",Kn="[object RegExp]",Nn="[object Set]",Hn="[object String]",Vn="[object WeakMap]",Rn="[object ArrayBuffer]",kn="[object DataView]",zn="[object Float32Array]",Wn="[object Float64Array]",qn="[object Int8Array]",Jn="[object Int16Array]",Yn="[object Int32Array]",Xn="[object Uint8Array]",Zn="[object Uint8ClampedArray]",Qn="[object Uint16Array]",eo="[object Uint32Array]",u={};u[zn]=u[Wn]=u[qn]=u[Jn]=u[Yn]=u[Xn]=u[Zn]=u[Qn]=u[eo]=!0;u[xn]=u[En]=u[Rn]=u[Mn]=u[kn]=u[Dn]=u[Fn]=u[Ln]=u[Gn]=u[Bn]=u[Un]=u[Kn]=u[Nn]=u[Hn]=u[Vn]=!1;function to(e){return Pn(e)&&In(e.length)&&!!u[wn(e)]}var ro=to;function ao(e){return function(t){return e(t)}}var q=ao,h={},no={get exports(){return h},set exports(e){h=e}};(function(e,t){var r=Ie,a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,n=o&&o.exports===a,s=n&&r.process,c=function(){try{var v=o&&o.require&&o.require("util").types;return v||s&&s.binding&&s.binding("util")}catch{}}();e.exports=c})(no,h);var oo=ro,so=q,ve=h,le=ve&&ve.isTypedArray,io=le?so(le):oo,co=io,uo=on,fo=bn,vo=W,lo=O,go=mn,po=co,$o=Object.prototype,yo=$o.hasOwnProperty;function bo(e,t){var r=vo(e),a=!r&&fo(e),o=!r&&!a&&lo(e),n=!r&&!a&&!o&&po(e),s=r||a||o||n,c=s?uo(e.length,String):[],v=c.length;for(var f in e)(t||yo.call(e,f))&&!(s&&(f=="length"||o&&(f=="offset"||f=="parent")||n&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||go(f,v)))&&c.push(f);return c}var Ge=bo,ho=Object.prototype;function _o(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ho;return e===r}var J=_o;function To(e,t){return function(r){return e(t(r))}}var Be=To,jo=Be,Ao=jo(Object.keys,Object),So=Ao,mo=J,Oo=So,Co=Object.prototype,wo=Co.hasOwnProperty;function Io(e){if(!mo(e))return Oo(e);var t=[];for(var r in Object(e))wo.call(e,r)&&r!="constructor"&&t.push(r);return t}var Po=Io,xo=xe,Eo=Le;function Mo(e){return e!=null&&Eo(e.length)&&!xo(e)}var Ue=Mo,Do=Ge,Fo=Po,Lo=Ue;function Go(e){return Lo(e)?Do(e):Fo(e)}var Y=Go,Bo=B,Uo=Y;function Ko(e,t){return e&&Bo(t,Uo(t),e)}var No=Ko;function Ho(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Vo=Ho,Ro=C,ko=J,zo=Vo,Wo=Object.prototype,qo=Wo.hasOwnProperty;function Jo(e){if(!Ro(e))return zo(e);var t=ko(e),r=[];for(var a in e)a=="constructor"&&(t||!qo.call(e,a))||r.push(a);return r}var Yo=Jo,Xo=Ge,Zo=Yo,Qo=Ue;function es(e){return Qo(e)?Xo(e,!0):Zo(e)}var X=es,ts=B,rs=X;function as(e,t){return e&&ts(t,rs(t),e)}var ns=as,E={},os={get exports(){return E},set exports(e){E=e}};(function(e,t){var r=l,a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,n=o&&o.exports===a,s=n?r.Buffer:void 0,c=s?s.allocUnsafe:void 0;function v(f,I){if(I)return f.slice();var g=f.length,S=c?c(g):new f.constructor(g);return f.copy(S),S}e.exports=v})(os,E);function ss(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}var is=ss;function cs(e,t){for(var r=-1,a=e==null?0:e.length,o=0,n=[];++r<a;){var s=e[r];t(s,r,e)&&(n[o++]=s)}return n}var us=cs;function fs(){return[]}var Ke=fs,vs=us,ls=Ke,gs=Object.prototype,ps=gs.propertyIsEnumerable,ge=Object.getOwnPropertySymbols,$s=ge?function(e){return e==null?[]:(e=Object(e),vs(ge(e),function(t){return ps.call(e,t)}))}:ls,Z=$s,ys=B,bs=Z;function hs(e,t){return ys(e,bs(e),t)}var _s=hs;function ds(e,t){for(var r=-1,a=t.length,o=e.length;++r<a;)e[o+r]=t[r];return e}var Ne=ds,Ts=Be,js=Ts(Object.getPrototypeOf,Object),He=js,As=Ne,Ss=He,ms=Z,Os=Ke,Cs=Object.getOwnPropertySymbols,ws=Cs?function(e){for(var t=[];e;)As(t,ms(e)),e=Ss(e);return t}:Os,Ve=ws,Is=B,Ps=Ve;function xs(e,t){return Is(e,Ps(e),t)}var Es=xs,Ms=Ne,Ds=W;function Fs(e,t,r){var a=t(e);return Ds(e)?a:Ms(a,r(e))}var Re=Fs,Ls=Re,Gs=Z,Bs=Y;function Us(e){return Ls(e,Bs,Gs)}var Ks=Us,Ns=Re,Hs=Ve,Vs=X;function Rs(e){return Ns(e,Vs,Hs)}var ks=Rs,zs=b,Ws=l,qs=zs(Ws,"DataView"),Js=qs,Ys=b,Xs=l,Zs=Ys(Xs,"Promise"),Qs=Zs,ei=b,ti=l,ri=ei(ti,"Set"),ai=ri,ni=b,oi=l,si=ni(oi,"WeakMap"),ii=si,K=Js,N=z,H=Qs,V=ai,R=ii,ke=F,A=Ee,pe="[object Map]",ci="[object Object]",$e="[object Promise]",ye="[object Set]",be="[object WeakMap]",he="[object DataView]",ui=A(K),fi=A(N),vi=A(H),li=A(V),gi=A(R),y=ke;(K&&y(new K(new ArrayBuffer(1)))!=he||N&&y(new N)!=pe||H&&y(H.resolve())!=$e||V&&y(new V)!=ye||R&&y(new R)!=be)&&(y=function(e){var t=ke(e),r=t==ci?e.constructor:void 0,a=r?A(r):"";if(a)switch(a){case ui:return he;case fi:return pe;case vi:return $e;case li:return ye;case gi:return be}return t});var Q=y,pi=Object.prototype,$i=pi.hasOwnProperty;function yi(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&$i.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var bi=yi,hi=l,_i=hi.Uint8Array,di=_i,_e=di;function Ti(e){var t=new e.constructor(e.byteLength);return new _e(t).set(new _e(e)),t}var ee=Ti,ji=ee;function Ai(e,t){var r=t?ji(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Si=Ai,mi=/\w*$/;function Oi(e){var t=new e.constructor(e.source,mi.exec(e));return t.lastIndex=e.lastIndex,t}var Ci=Oi,de=k,Te=de?de.prototype:void 0,je=Te?Te.valueOf:void 0;function wi(e){return je?Object(je.call(e)):{}}var Ii=wi,Pi=ee;function xi(e,t){var r=t?Pi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Ei=xi,Mi=ee,Di=Si,Fi=Ci,Li=Ii,Gi=Ei,Bi="[object Boolean]",Ui="[object Date]",Ki="[object Map]",Ni="[object Number]",Hi="[object RegExp]",Vi="[object Set]",Ri="[object String]",ki="[object Symbol]",zi="[object ArrayBuffer]",Wi="[object DataView]",qi="[object Float32Array]",Ji="[object Float64Array]",Yi="[object Int8Array]",Xi="[object Int16Array]",Zi="[object Int32Array]",Qi="[object Uint8Array]",ec="[object Uint8ClampedArray]",tc="[object Uint16Array]",rc="[object Uint32Array]";function ac(e,t,r){var a=e.constructor;switch(t){case zi:return Mi(e);case Bi:case Ui:return new a(+e);case Wi:return Di(e,r);case qi:case Ji:case Yi:case Xi:case Zi:case Qi:case ec:case tc:case rc:return Gi(e,r);case Ki:return new a;case Ni:case Ri:return new a(e);case Hi:return Fi(e);case Vi:return new a;case ki:return Li(e)}}var nc=ac,oc=C,Ae=Object.create,sc=function(){function e(){}return function(t){if(!oc(t))return{};if(Ae)return Ae(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),ic=sc,cc=ic,uc=He,fc=J;function vc(e){return typeof e.constructor=="function"&&!fc(e)?cc(uc(e)):{}}var lc=vc,gc=Q,pc=w,$c="[object Map]";function yc(e){return pc(e)&&gc(e)==$c}var bc=yc,hc=bc,_c=q,Se=h,me=Se&&Se.isMap,dc=me?_c(me):hc,Tc=dc,jc=Q,Ac=w,Sc="[object Set]";function mc(e){return Ac(e)&&jc(e)==Sc}var Oc=mc,Cc=Oc,wc=q,Oe=h,Ce=Oe&&Oe.isSet,Ic=Ce?wc(Ce):Cc,Pc=Ic,xc=Va,Ec=ka,Mc=De,Dc=No,Fc=ns,Lc=E,Gc=is,Bc=_s,Uc=Es,Kc=Ks,Nc=ks,Hc=Q,Vc=bi,Rc=nc,kc=lc,zc=W,Wc=O,qc=Tc,Jc=C,Yc=Pc,Xc=Y,Zc=X,Qc=1,eu=2,tu=4,ze="[object Arguments]",ru="[object Array]",au="[object Boolean]",nu="[object Date]",ou="[object Error]",We="[object Function]",su="[object GeneratorFunction]",iu="[object Map]",cu="[object Number]",qe="[object Object]",uu="[object RegExp]",fu="[object Set]",vu="[object String]",lu="[object Symbol]",gu="[object WeakMap]",pu="[object ArrayBuffer]",$u="[object DataView]",yu="[object Float32Array]",bu="[object Float64Array]",hu="[object Int8Array]",_u="[object Int16Array]",du="[object Int32Array]",Tu="[object Uint8Array]",ju="[object Uint8ClampedArray]",Au="[object Uint16Array]",Su="[object Uint32Array]",i={};i[ze]=i[ru]=i[pu]=i[$u]=i[au]=i[nu]=i[yu]=i[bu]=i[hu]=i[_u]=i[du]=i[iu]=i[cu]=i[qe]=i[uu]=i[fu]=i[vu]=i[lu]=i[Tu]=i[ju]=i[Au]=i[Su]=!0;i[ou]=i[We]=i[gu]=!1;function x(e,t,r,a,o,n){var s,c=t&Qc,v=t&eu,f=t&tu;if(r&&(s=o?r(e,a,o,n):r(e)),s!==void 0)return s;if(!Jc(e))return e;var I=zc(e);if(I){if(s=Vc(e),!c)return Gc(e,s)}else{var g=Hc(e),S=g==We||g==su;if(Wc(e))return Lc(e,c);if(g==qe||g==ze||S&&!o){if(s=v||S?{}:kc(e),!c)return v?Uc(e,Fc(s,e)):Bc(e,Dc(s,e))}else{if(!i[g])return o?e:{};s=Rc(e,g,c)}}n||(n=new xc);var te=n.get(e);if(te)return te;n.set(e,s),Yc(e)?e.forEach(function(p){s.add(x(p,t,r,p,e,n))}):qc(e)&&e.forEach(function(p,$){s.set($,x(p,t,r,$,e,n))});var Ye=f?v?Nc:Kc:v?Zc:Xc,re=I?void 0:Ye(e);return Ec(re||e,function(p,$){re&&($=p,p=e[$]),Mc(s,$,x(p,t,r,$,e,n))}),s}var mu=x,Ou=mu,Cu=1,wu=4;function Iu(e){return Ou(e,Cu|wu)}var Pu=Iu;class xu{constructor(t,r){r=r||{envParams:{}},this.fnString=t,this.fn=Je(t),this.userParamsSchema={},this.result=[],this.envParams=r.envParams}runOne(t,r=1e4){return new Promise(a=>{const o=setTimeout(()=>{a({data:null,code:1,msg:"timeout",isSuccess:!1,date:new Date().getTime(),userParams:t})},r);this.fn(this.envParams,t).then(n=>{clearTimeout(o),a({data:n,code:0,msg:"success",isSuccess:!0,date:new Date().getTime(),userParams:t})}).catch(n=>{clearTimeout(o),a({data:n,code:(n==null?void 0:n.code)||1,msg:(n==null?void 0:n.message)||"error",isSuccess:!1,date:new Date().getTime(),userParams:t})})})}async run(t){const r=[],{allUserParams:a=[],concurrency:o=1}=t;for(let n=0;n<a.length;n=n+o){const s=await Promise.all(a.slice(n,n+o).map(c=>this.runOne(Pu(c),t.timeout)));r.push(...s)}return this.result.push(...r),r}}const Je=e=>Function(`return ${e}`)(),Eu=()=>{},Mu=(e,t)=>e+t;exports.Crawler=xu;exports.add=Mu;exports.createCrawler=Eu;exports.turnFnStringToFn=Je;
//# sourceMappingURL=index.cjs.js.map
