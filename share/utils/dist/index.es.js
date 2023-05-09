function Wt() {
  this.__data__ = [], this.size = 0;
}
function jt(t, e) {
  return t === e || t !== t && e !== e;
}
function F(t, e) {
  for (var r = t.length; r--; )
    if (jt(t[r][0], e))
      return r;
  return -1;
}
var Jt = Array.prototype, Yt = Jt.splice;
function Zt(t) {
  var e = this.__data__, r = F(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Yt.call(e, r, 1), --this.size, !0;
}
function Xt(t) {
  var e = this.__data__, r = F(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Qt(t) {
  return F(this.__data__, t) > -1;
}
function kt(t, e) {
  var r = this.__data__, n = F(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function g(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
g.prototype.clear = Wt;
g.prototype.delete = Zt;
g.prototype.get = Xt;
g.prototype.has = Qt;
g.prototype.set = kt;
function te() {
  this.__data__ = new g(), this.size = 0;
}
function ee(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function re(t) {
  return this.__data__.get(t);
}
function ne(t) {
  return this.__data__.has(t);
}
var ae = typeof global == "object" && global && global.Object === Object && global;
const mt = ae;
var oe = typeof self == "object" && self && self.Object === Object && self, se = mt || oe || Function("return this")();
const l = se;
var ie = l.Symbol;
const v = ie;
var At = Object.prototype, ce = At.hasOwnProperty, ue = At.toString, w = v ? v.toStringTag : void 0;
function fe(t) {
  var e = ce.call(t, w), r = t[w];
  try {
    t[w] = void 0;
    var n = !0;
  } catch {
  }
  var c = ue.call(t);
  return n && (e ? t[w] = r : delete t[w]), c;
}
var pe = Object.prototype, le = pe.toString;
function ge(t) {
  return le.call(t);
}
var he = "[object Null]", de = "[object Undefined]", tt = v ? v.toStringTag : void 0;
function x(t) {
  return t == null ? t === void 0 ? de : he : tt && tt in Object(t) ? fe(t) : ge(t);
}
function C(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var be = "[object AsyncFunction]", ye = "[object Function]", $e = "[object GeneratorFunction]", Te = "[object Proxy]";
function wt(t) {
  if (!C(t))
    return !1;
  var e = x(t);
  return e == ye || e == $e || e == be || e == Te;
}
var _e = l["__core-js_shared__"];
const U = _e;
var et = function() {
  var t = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function ve(t) {
  return !!et && et in t;
}
var je = Function.prototype, me = je.toString;
function $(t) {
  if (t != null) {
    try {
      return me.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ae = /[\\^$.*+?()[\]{}|]/g, we = /^\[object .+?Constructor\]$/, Se = Function.prototype, Oe = Object.prototype, Pe = Se.toString, xe = Oe.hasOwnProperty, Ce = RegExp(
  "^" + Pe.call(xe).replace(Ae, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ie(t) {
  if (!C(t) || ve(t))
    return !1;
  var e = wt(t) ? Ce : we;
  return e.test($(t));
}
function Ee(t, e) {
  return t == null ? void 0 : t[e];
}
function T(t, e) {
  var r = Ee(t, e);
  return Ie(r) ? r : void 0;
}
var Fe = T(l, "Map");
const O = Fe;
var Me = T(Object, "create");
const P = Me;
function De() {
  this.__data__ = P ? P(null) : {}, this.size = 0;
}
function Ue(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Be = "__lodash_hash_undefined__", Le = Object.prototype, Ne = Le.hasOwnProperty;
function Ge(t) {
  var e = this.__data__;
  if (P) {
    var r = e[t];
    return r === Be ? void 0 : r;
  }
  return Ne.call(e, t) ? e[t] : void 0;
}
var ze = Object.prototype, Re = ze.hasOwnProperty;
function Ke(t) {
  var e = this.__data__;
  return P ? e[t] !== void 0 : Re.call(e, t);
}
var He = "__lodash_hash_undefined__";
function Ve(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = P && e === void 0 ? He : e, this;
}
function y(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = De;
y.prototype.delete = Ue;
y.prototype.get = Ge;
y.prototype.has = Ke;
y.prototype.set = Ve;
function qe() {
  this.size = 0, this.__data__ = {
    hash: new y(),
    map: new (O || g)(),
    string: new y()
  };
}
function We(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function M(t, e) {
  var r = t.__data__;
  return We(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Je(t) {
  var e = M(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Ye(t) {
  return M(this, t).get(t);
}
function Ze(t) {
  return M(this, t).has(t);
}
function Xe(t, e) {
  var r = M(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function m(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = qe;
m.prototype.delete = Je;
m.prototype.get = Ye;
m.prototype.has = Ze;
m.prototype.set = Xe;
var Qe = 200;
function ke(t, e) {
  var r = this.__data__;
  if (r instanceof g) {
    var n = r.__data__;
    if (!O || n.length < Qe - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new m(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function A(t) {
  var e = this.__data__ = new g(t);
  this.size = e.size;
}
A.prototype.clear = te;
A.prototype.delete = ee;
A.prototype.get = re;
A.prototype.has = ne;
A.prototype.set = ke;
function tr(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
var er = function() {
  try {
    var t = T(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const rt = er;
function St(t, e, r) {
  e == "__proto__" && rt ? rt(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
var rr = Object.prototype, nr = rr.hasOwnProperty;
function Ot(t, e, r) {
  var n = t[e];
  (!(nr.call(t, e) && jt(n, r)) || r === void 0 && !(e in t)) && St(t, e, r);
}
function D(t, e, r, n) {
  var c = !r;
  r || (r = {});
  for (var a = -1, o = e.length; ++a < o; ) {
    var u = e[a], f = n ? n(r[u], t[u], u, r, t) : void 0;
    f === void 0 && (f = t[u]), c ? St(r, u, f) : Ot(r, u, f);
  }
  return r;
}
function ar(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
function I(t) {
  return t != null && typeof t == "object";
}
var or = "[object Arguments]";
function nt(t) {
  return I(t) && x(t) == or;
}
var Pt = Object.prototype, sr = Pt.hasOwnProperty, ir = Pt.propertyIsEnumerable, cr = nt(function() {
  return arguments;
}()) ? nt : function(t) {
  return I(t) && sr.call(t, "callee") && !ir.call(t, "callee");
};
const ur = cr;
var fr = Array.isArray;
const R = fr;
function pr() {
  return !1;
}
var xt = typeof exports == "object" && exports && !exports.nodeType && exports, at = xt && typeof module == "object" && module && !module.nodeType && module, lr = at && at.exports === xt, ot = lr ? l.Buffer : void 0, gr = ot ? ot.isBuffer : void 0, hr = gr || pr;
const Ct = hr;
var dr = 9007199254740991, br = /^(?:0|[1-9]\d*)$/;
function yr(t, e) {
  var r = typeof t;
  return e = e ?? dr, !!e && (r == "number" || r != "symbol" && br.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var $r = 9007199254740991;
function It(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= $r;
}
var Tr = "[object Arguments]", _r = "[object Array]", vr = "[object Boolean]", jr = "[object Date]", mr = "[object Error]", Ar = "[object Function]", wr = "[object Map]", Sr = "[object Number]", Or = "[object Object]", Pr = "[object RegExp]", xr = "[object Set]", Cr = "[object String]", Ir = "[object WeakMap]", Er = "[object ArrayBuffer]", Fr = "[object DataView]", Mr = "[object Float32Array]", Dr = "[object Float64Array]", Ur = "[object Int8Array]", Br = "[object Int16Array]", Lr = "[object Int32Array]", Nr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", zr = "[object Uint16Array]", Rr = "[object Uint32Array]", i = {};
i[Mr] = i[Dr] = i[Ur] = i[Br] = i[Lr] = i[Nr] = i[Gr] = i[zr] = i[Rr] = !0;
i[Tr] = i[_r] = i[Er] = i[vr] = i[Fr] = i[jr] = i[mr] = i[Ar] = i[wr] = i[Sr] = i[Or] = i[Pr] = i[xr] = i[Cr] = i[Ir] = !1;
function Kr(t) {
  return I(t) && It(t.length) && !!i[x(t)];
}
function K(t) {
  return function(e) {
    return t(e);
  };
}
var Et = typeof exports == "object" && exports && !exports.nodeType && exports, S = Et && typeof module == "object" && module && !module.nodeType && module, Hr = S && S.exports === Et, B = Hr && mt.process, Vr = function() {
  try {
    var t = S && S.require && S.require("util").types;
    return t || B && B.binding && B.binding("util");
  } catch {
  }
}();
const j = Vr;
var st = j && j.isTypedArray, qr = st ? K(st) : Kr;
const Wr = qr;
var Jr = Object.prototype, Yr = Jr.hasOwnProperty;
function Ft(t, e) {
  var r = R(t), n = !r && ur(t), c = !r && !n && Ct(t), a = !r && !n && !c && Wr(t), o = r || n || c || a, u = o ? ar(t.length, String) : [], f = u.length;
  for (var p in t)
    (e || Yr.call(t, p)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    c && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    yr(p, f))) && u.push(p);
  return u;
}
var Zr = Object.prototype;
function H(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Zr;
  return t === r;
}
function Mt(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Xr = Mt(Object.keys, Object);
const Qr = Xr;
var kr = Object.prototype, tn = kr.hasOwnProperty;
function en(t) {
  if (!H(t))
    return Qr(t);
  var e = [];
  for (var r in Object(t))
    tn.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function Dt(t) {
  return t != null && It(t.length) && !wt(t);
}
function V(t) {
  return Dt(t) ? Ft(t) : en(t);
}
function rn(t, e) {
  return t && D(e, V(e), t);
}
function nn(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var an = Object.prototype, on = an.hasOwnProperty;
function sn(t) {
  if (!C(t))
    return nn(t);
  var e = H(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !on.call(t, n)) || r.push(n);
  return r;
}
function q(t) {
  return Dt(t) ? Ft(t, !0) : sn(t);
}
function cn(t, e) {
  return t && D(e, q(e), t);
}
var Ut = typeof exports == "object" && exports && !exports.nodeType && exports, it = Ut && typeof module == "object" && module && !module.nodeType && module, un = it && it.exports === Ut, ct = un ? l.Buffer : void 0, ut = ct ? ct.allocUnsafe : void 0;
function fn(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = ut ? ut(r) : new t.constructor(r);
  return t.copy(n), n;
}
function pn(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
function ln(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, c = 0, a = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (a[c++] = o);
  }
  return a;
}
function Bt() {
  return [];
}
var gn = Object.prototype, hn = gn.propertyIsEnumerable, ft = Object.getOwnPropertySymbols, dn = ft ? function(t) {
  return t == null ? [] : (t = Object(t), ln(ft(t), function(e) {
    return hn.call(t, e);
  }));
} : Bt;
const W = dn;
function bn(t, e) {
  return D(t, W(t), e);
}
function Lt(t, e) {
  for (var r = -1, n = e.length, c = t.length; ++r < n; )
    t[c + r] = e[r];
  return t;
}
var yn = Mt(Object.getPrototypeOf, Object);
const Nt = yn;
var $n = Object.getOwnPropertySymbols, Tn = $n ? function(t) {
  for (var e = []; t; )
    Lt(e, W(t)), t = Nt(t);
  return e;
} : Bt;
const Gt = Tn;
function _n(t, e) {
  return D(t, Gt(t), e);
}
function zt(t, e, r) {
  var n = e(t);
  return R(t) ? n : Lt(n, r(t));
}
function vn(t) {
  return zt(t, V, W);
}
function jn(t) {
  return zt(t, q, Gt);
}
var mn = T(l, "DataView");
const L = mn;
var An = T(l, "Promise");
const N = An;
var wn = T(l, "Set");
const G = wn;
var Sn = T(l, "WeakMap");
const z = Sn;
var pt = "[object Map]", On = "[object Object]", lt = "[object Promise]", gt = "[object Set]", ht = "[object WeakMap]", dt = "[object DataView]", Pn = $(L), xn = $(O), Cn = $(N), In = $(G), En = $(z), b = x;
(L && b(new L(new ArrayBuffer(1))) != dt || O && b(new O()) != pt || N && b(N.resolve()) != lt || G && b(new G()) != gt || z && b(new z()) != ht) && (b = function(t) {
  var e = x(t), r = e == On ? t.constructor : void 0, n = r ? $(r) : "";
  if (n)
    switch (n) {
      case Pn:
        return dt;
      case xn:
        return pt;
      case Cn:
        return lt;
      case In:
        return gt;
      case En:
        return ht;
    }
  return e;
});
const J = b;
var Fn = Object.prototype, Mn = Fn.hasOwnProperty;
function Dn(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && Mn.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var Un = l.Uint8Array;
const bt = Un;
function Y(t) {
  var e = new t.constructor(t.byteLength);
  return new bt(e).set(new bt(t)), e;
}
function Bn(t, e) {
  var r = e ? Y(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Ln = /\w*$/;
function Nn(t) {
  var e = new t.constructor(t.source, Ln.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var yt = v ? v.prototype : void 0, $t = yt ? yt.valueOf : void 0;
function Gn(t) {
  return $t ? Object($t.call(t)) : {};
}
function zn(t, e) {
  var r = e ? Y(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Rn = "[object Boolean]", Kn = "[object Date]", Hn = "[object Map]", Vn = "[object Number]", qn = "[object RegExp]", Wn = "[object Set]", Jn = "[object String]", Yn = "[object Symbol]", Zn = "[object ArrayBuffer]", Xn = "[object DataView]", Qn = "[object Float32Array]", kn = "[object Float64Array]", ta = "[object Int8Array]", ea = "[object Int16Array]", ra = "[object Int32Array]", na = "[object Uint8Array]", aa = "[object Uint8ClampedArray]", oa = "[object Uint16Array]", sa = "[object Uint32Array]";
function ia(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case Zn:
      return Y(t);
    case Rn:
    case Kn:
      return new n(+t);
    case Xn:
      return Bn(t, r);
    case Qn:
    case kn:
    case ta:
    case ea:
    case ra:
    case na:
    case aa:
    case oa:
    case sa:
      return zn(t, r);
    case Hn:
      return new n();
    case Vn:
    case Jn:
      return new n(t);
    case qn:
      return Nn(t);
    case Wn:
      return new n();
    case Yn:
      return Gn(t);
  }
}
var Tt = Object.create, ca = function() {
  function t() {
  }
  return function(e) {
    if (!C(e))
      return {};
    if (Tt)
      return Tt(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
const ua = ca;
function fa(t) {
  return typeof t.constructor == "function" && !H(t) ? ua(Nt(t)) : {};
}
var pa = "[object Map]";
function la(t) {
  return I(t) && J(t) == pa;
}
var _t = j && j.isMap, ga = _t ? K(_t) : la;
const ha = ga;
var da = "[object Set]";
function ba(t) {
  return I(t) && J(t) == da;
}
var vt = j && j.isSet, ya = vt ? K(vt) : ba;
const $a = ya;
var Ta = 1, _a = 2, va = 4, Rt = "[object Arguments]", ja = "[object Array]", ma = "[object Boolean]", Aa = "[object Date]", wa = "[object Error]", Kt = "[object Function]", Sa = "[object GeneratorFunction]", Oa = "[object Map]", Pa = "[object Number]", Ht = "[object Object]", xa = "[object RegExp]", Ca = "[object Set]", Ia = "[object String]", Ea = "[object Symbol]", Fa = "[object WeakMap]", Ma = "[object ArrayBuffer]", Da = "[object DataView]", Ua = "[object Float32Array]", Ba = "[object Float64Array]", La = "[object Int8Array]", Na = "[object Int16Array]", Ga = "[object Int32Array]", za = "[object Uint8Array]", Ra = "[object Uint8ClampedArray]", Ka = "[object Uint16Array]", Ha = "[object Uint32Array]", s = {};
s[Rt] = s[ja] = s[Ma] = s[Da] = s[ma] = s[Aa] = s[Ua] = s[Ba] = s[La] = s[Na] = s[Ga] = s[Oa] = s[Pa] = s[Ht] = s[xa] = s[Ca] = s[Ia] = s[Ea] = s[za] = s[Ra] = s[Ka] = s[Ha] = !0;
s[wa] = s[Kt] = s[Fa] = !1;
function E(t, e, r, n, c, a) {
  var o, u = e & Ta, f = e & _a, p = e & va;
  if (r && (o = c ? r(t, n, c, a) : r(t)), o !== void 0)
    return o;
  if (!C(t))
    return t;
  var Z = R(t);
  if (Z) {
    if (o = Dn(t), !u)
      return pn(t, o);
  } else {
    var _ = J(t), X = _ == Kt || _ == Sa;
    if (Ct(t))
      return fn(t, u);
    if (_ == Ht || _ == Rt || X && !c) {
      if (o = f || X ? {} : fa(t), !u)
        return f ? _n(t, cn(o, t)) : bn(t, rn(o, t));
    } else {
      if (!s[_])
        return c ? t : {};
      o = ia(t, _, u);
    }
  }
  a || (a = new A());
  var Q = a.get(t);
  if (Q)
    return Q;
  a.set(t, o), $a(t) ? t.forEach(function(h) {
    o.add(E(h, e, r, h, t, a));
  }) : ha(t) && t.forEach(function(h, d) {
    o.set(d, E(h, e, r, d, t, a));
  });
  var qt = p ? f ? jn : vn : f ? q : V, k = Z ? void 0 : qt(t);
  return tr(k || t, function(h, d) {
    k && (d = h, h = t[d]), Ot(o, d, E(h, e, r, d, t, a));
  }), o;
}
var Va = 1, qa = 4;
function Vt(t) {
  return E(t, Va | qa);
}
class Ja {
  constructor(e, r) {
    r = r || { envParams: {} }, this.fnString = e, this.fn = Wa(e), this.userParamsSchema = JSON.stringify({}), this.result = [], this.envParams = r.envParams;
  }
  runOne(e, r = 1e4) {
    return new Promise((n) => {
      const c = setTimeout(() => {
        n({
          data: null,
          code: 1,
          msg: "timeout",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: e
        });
      }, r);
      this.fn(this.envParams, e).then((a) => {
        clearTimeout(c), n({
          data: a,
          code: 0,
          msg: "success",
          isSuccess: !0,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: e
        });
      }).catch((a) => {
        clearTimeout(c), n({
          data: a,
          code: (a == null ? void 0 : a.code) || 1,
          msg: (a == null ? void 0 : a.message) || "error",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: e
        });
      });
    });
  }
  async run(e) {
    const r = [], { allUserParams: n = [], concurrency: c = 1 } = e;
    for (let a = 0; a < n.length; a = a + c) {
      const o = await Promise.all(
        n.slice(a, a + c).map((u) => this.runOne(Vt(u), e.timeout))
      );
      r.push(...o);
    }
    return this.result.push(...r), r;
  }
}
const Wa = (t) => Function(`return ${t}`)(), Ya = (t) => {
  const { rawParams: e, range: r } = t, { start: n, end: c } = r, a = [];
  for (let o = n; o <= c; o++) {
    const u = Vt(e);
    u.page = o, a.push(u);
  }
  return a;
}, Za = {
  name: "xx爬虫",
  description: "爬取xx网站的xx数据",
  fn: `async function fn(env, user) {
    
}`,
  userParamsSchema: JSON.stringify(
    {
      title: "微博搜索",
      description: "A simple form example.",
      type: "object",
      required: ["q"],
      properties: {
        q: {
          type: "string",
          title: "查询的字段"
        }
      }
    },
    null,
    2
  )
}, Xa = (t) => /^(async\s+)?function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(t), Qa = (t) => /^async\s*function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(t), ka = (t) => /^[a-zA-Z0-9_-]{4,16}$/.test(t), to = (t) => /^[a-zA-Z0-9_-]{6,16}$/.test(t), eo = (t, e) => t + e;
export {
  Ja as Crawler,
  eo as add,
  to as checkPassword,
  ka as checkUserName,
  Za as defaultCrawlerSchema,
  Ya as generateParams,
  Qa as isAsyncFunctionString,
  Xa as isFunctionString,
  Wa as turnFnStringToFn
};
//# sourceMappingURL=index.es.js.map
