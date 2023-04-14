var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye() {
  this.__data__ = [], this.size = 0;
}
var Xe = Ye;
function Ze(e, t) {
  return e === t || e !== e && t !== t;
}
var we = Ze, Qe = we;
function et(e, t) {
  for (var r = e.length; r--; )
    if (Qe(e[r][0], t))
      return r;
  return -1;
}
var M = et, tt = M, rt = Array.prototype, at = rt.splice;
function nt(e) {
  var t = this.__data__, r = tt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : at.call(t, r, 1), --this.size, !0;
}
var ot = nt, st = M;
function it(e) {
  var t = this.__data__, r = st(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var ct = it, ut = M;
function ft(e) {
  return ut(this.__data__, e) > -1;
}
var vt = ft, lt = M;
function gt(e, t) {
  var r = this.__data__, a = lt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var pt = gt, $t = Xe, yt = ot, bt = ct, ht = vt, _t = pt;
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_.prototype.clear = $t;
_.prototype.delete = yt;
_.prototype.get = bt;
_.prototype.has = ht;
_.prototype.set = _t;
var D = _, dt = D;
function Tt() {
  this.__data__ = new dt(), this.size = 0;
}
var jt = Tt;
function At(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var St = At;
function mt(e) {
  return this.__data__.get(e);
}
var Ot = mt;
function Ct(e) {
  return this.__data__.has(e);
}
var wt = Ct, It = typeof P == "object" && P && P.Object === Object && P, Ie = It, Pt = Ie, xt = typeof self == "object" && self && self.Object === Object && self, Et = Pt || xt || Function("return this")(), l = Et, Mt = l, Dt = Mt.Symbol, k = Dt, ae = k, Pe = Object.prototype, Lt = Pe.hasOwnProperty, Ft = Pe.toString, m = ae ? ae.toStringTag : void 0;
function Gt(e) {
  var t = Lt.call(e, m), r = e[m];
  try {
    e[m] = void 0;
    var a = !0;
  } catch {
  }
  var o = Ft.call(e);
  return a && (t ? e[m] = r : delete e[m]), o;
}
var Bt = Gt, Ut = Object.prototype, Kt = Ut.toString;
function Nt(e) {
  return Kt.call(e);
}
var Ht = Nt, ne = k, Vt = Bt, Rt = Ht, kt = "[object Null]", zt = "[object Undefined]", oe = ne ? ne.toStringTag : void 0;
function Wt(e) {
  return e == null ? e === void 0 ? zt : kt : oe && oe in Object(e) ? Vt(e) : Rt(e);
}
var L = Wt;
function qt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var C = qt, Jt = L, Yt = C, Xt = "[object AsyncFunction]", Zt = "[object Function]", Qt = "[object GeneratorFunction]", er = "[object Proxy]";
function tr(e) {
  if (!Yt(e))
    return !1;
  var t = Jt(e);
  return t == Zt || t == Qt || t == Xt || t == er;
}
var xe = tr, rr = l, ar = rr["__core-js_shared__"], nr = ar, U = nr, se = function() {
  var e = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function or(e) {
  return !!se && se in e;
}
var sr = or, ir = Function.prototype, cr = ir.toString;
function ur(e) {
  if (e != null) {
    try {
      return cr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ee = ur, fr = xe, vr = sr, lr = C, gr = Ee, pr = /[\\^$.*+?()[\]{}|]/g, $r = /^\[object .+?Constructor\]$/, yr = Function.prototype, br = Object.prototype, hr = yr.toString, _r = br.hasOwnProperty, dr = RegExp(
  "^" + hr.call(_r).replace(pr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tr(e) {
  if (!lr(e) || vr(e))
    return !1;
  var t = fr(e) ? dr : $r;
  return t.test(gr(e));
}
var jr = Tr;
function Ar(e, t) {
  return e == null ? void 0 : e[t];
}
var Sr = Ar, mr = jr, Or = Sr;
function Cr(e, t) {
  var r = Or(e, t);
  return mr(r) ? r : void 0;
}
var b = Cr, wr = b, Ir = l, Pr = wr(Ir, "Map"), z = Pr, xr = b, Er = xr(Object, "create"), F = Er, ie = F;
function Mr() {
  this.__data__ = ie ? ie(null) : {}, this.size = 0;
}
var Dr = Mr;
function Lr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Fr = Lr, Gr = F, Br = "__lodash_hash_undefined__", Ur = Object.prototype, Kr = Ur.hasOwnProperty;
function Nr(e) {
  var t = this.__data__;
  if (Gr) {
    var r = t[e];
    return r === Br ? void 0 : r;
  }
  return Kr.call(t, e) ? t[e] : void 0;
}
var Hr = Nr, Vr = F, Rr = Object.prototype, kr = Rr.hasOwnProperty;
function zr(e) {
  var t = this.__data__;
  return Vr ? t[e] !== void 0 : kr.call(t, e);
}
var Wr = zr, qr = F, Jr = "__lodash_hash_undefined__";
function Yr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = qr && t === void 0 ? Jr : t, this;
}
var Xr = Yr, Zr = Dr, Qr = Fr, ea = Hr, ta = Wr, ra = Xr;
function d(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
d.prototype.clear = Zr;
d.prototype.delete = Qr;
d.prototype.get = ea;
d.prototype.has = ta;
d.prototype.set = ra;
var aa = d, ce = aa, na = D, oa = z;
function sa() {
  this.size = 0, this.__data__ = {
    hash: new ce(),
    map: new (oa || na)(),
    string: new ce()
  };
}
var ia = sa;
function ca(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var ua = ca, fa = ua;
function va(e, t) {
  var r = e.__data__;
  return fa(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var G = va, la = G;
function ga(e) {
  var t = la(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var pa = ga, $a = G;
function ya(e) {
  return $a(this, e).get(e);
}
var ba = ya, ha = G;
function _a(e) {
  return ha(this, e).has(e);
}
var da = _a, Ta = G;
function ja(e, t) {
  var r = Ta(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var Aa = ja, Sa = ia, ma = pa, Oa = ba, Ca = da, wa = Aa;
function T(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
T.prototype.clear = Sa;
T.prototype.delete = ma;
T.prototype.get = Oa;
T.prototype.has = Ca;
T.prototype.set = wa;
var Ia = T, Pa = D, xa = z, Ea = Ia, Ma = 200;
function Da(e, t) {
  var r = this.__data__;
  if (r instanceof Pa) {
    var a = r.__data__;
    if (!xa || a.length < Ma - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ea(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var La = Da, Fa = D, Ga = jt, Ba = St, Ua = Ot, Ka = wt, Na = La;
function j(e) {
  var t = this.__data__ = new Fa(e);
  this.size = t.size;
}
j.prototype.clear = Ga;
j.prototype.delete = Ba;
j.prototype.get = Ua;
j.prototype.has = Ka;
j.prototype.set = Na;
var Ha = j;
function Va(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ra = Va, ka = b, za = function() {
  try {
    var e = ka(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wa = za, ue = Wa;
function qa(e, t, r) {
  t == "__proto__" && ue ? ue(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Me = qa, Ja = Me, Ya = we, Xa = Object.prototype, Za = Xa.hasOwnProperty;
function Qa(e, t, r) {
  var a = e[t];
  (!(Za.call(e, t) && Ya(a, r)) || r === void 0 && !(t in e)) && Ja(e, t, r);
}
var De = Qa, en = De, tn = Me;
function rn(e, t, r, a) {
  var o = !r;
  r || (r = {});
  for (var n = -1, s = t.length; ++n < s; ) {
    var c = t[n], v = a ? a(r[c], e[c], c, r, e) : void 0;
    v === void 0 && (v = e[c]), o ? tn(r, c, v) : en(r, c, v);
  }
  return r;
}
var B = rn;
function an(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var nn = an;
function on(e) {
  return e != null && typeof e == "object";
}
var w = on, sn = L, cn = w, un = "[object Arguments]";
function fn(e) {
  return cn(e) && sn(e) == un;
}
var vn = fn, fe = vn, ln = w, Le = Object.prototype, gn = Le.hasOwnProperty, pn = Le.propertyIsEnumerable, $n = fe(function() {
  return arguments;
}()) ? fe : function(e) {
  return ln(e) && gn.call(e, "callee") && !pn.call(e, "callee");
}, yn = $n, bn = Array.isArray, W = bn, O = {}, hn = {
  get exports() {
    return O;
  },
  set exports(e) {
    O = e;
  }
};
function _n() {
  return !1;
}
var dn = _n;
(function(e, t) {
  var r = l, a = dn, o = t && !t.nodeType && t, n = o && !0 && e && !e.nodeType && e, s = n && n.exports === o, c = s ? r.Buffer : void 0, v = c ? c.isBuffer : void 0, f = v || a;
  e.exports = f;
})(hn, O);
var Tn = 9007199254740991, jn = /^(?:0|[1-9]\d*)$/;
function An(e, t) {
  var r = typeof e;
  return t = t ?? Tn, !!t && (r == "number" || r != "symbol" && jn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Sn = An, mn = 9007199254740991;
function On(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mn;
}
var Fe = On, Cn = L, wn = Fe, In = w, Pn = "[object Arguments]", xn = "[object Array]", En = "[object Boolean]", Mn = "[object Date]", Dn = "[object Error]", Ln = "[object Function]", Fn = "[object Map]", Gn = "[object Number]", Bn = "[object Object]", Un = "[object RegExp]", Kn = "[object Set]", Nn = "[object String]", Hn = "[object WeakMap]", Vn = "[object ArrayBuffer]", Rn = "[object DataView]", kn = "[object Float32Array]", zn = "[object Float64Array]", Wn = "[object Int8Array]", qn = "[object Int16Array]", Jn = "[object Int32Array]", Yn = "[object Uint8Array]", Xn = "[object Uint8ClampedArray]", Zn = "[object Uint16Array]", Qn = "[object Uint32Array]", u = {};
u[kn] = u[zn] = u[Wn] = u[qn] = u[Jn] = u[Yn] = u[Xn] = u[Zn] = u[Qn] = !0;
u[Pn] = u[xn] = u[Vn] = u[En] = u[Rn] = u[Mn] = u[Dn] = u[Ln] = u[Fn] = u[Gn] = u[Bn] = u[Un] = u[Kn] = u[Nn] = u[Hn] = !1;
function eo(e) {
  return In(e) && wn(e.length) && !!u[Cn(e)];
}
var to = eo;
function ro(e) {
  return function(t) {
    return e(t);
  };
}
var q = ro, h = {}, ao = {
  get exports() {
    return h;
  },
  set exports(e) {
    h = e;
  }
};
(function(e, t) {
  var r = Ie, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, n = o && o.exports === a, s = n && r.process, c = function() {
    try {
      var v = o && o.require && o.require("util").types;
      return v || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(ao, h);
var no = to, oo = q, ve = h, le = ve && ve.isTypedArray, so = le ? oo(le) : no, io = so, co = nn, uo = yn, fo = W, vo = O, lo = Sn, go = io, po = Object.prototype, $o = po.hasOwnProperty;
function yo(e, t) {
  var r = fo(e), a = !r && uo(e), o = !r && !a && vo(e), n = !r && !a && !o && go(e), s = r || a || o || n, c = s ? co(e.length, String) : [], v = c.length;
  for (var f in e)
    (t || $o.call(e, f)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    lo(f, v))) && c.push(f);
  return c;
}
var Ge = yo, bo = Object.prototype;
function ho(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || bo;
  return e === r;
}
var J = ho;
function _o(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Be = _o, To = Be, jo = To(Object.keys, Object), Ao = jo, So = J, mo = Ao, Oo = Object.prototype, Co = Oo.hasOwnProperty;
function wo(e) {
  if (!So(e))
    return mo(e);
  var t = [];
  for (var r in Object(e))
    Co.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Io = wo, Po = xe, xo = Fe;
function Eo(e) {
  return e != null && xo(e.length) && !Po(e);
}
var Ue = Eo, Mo = Ge, Do = Io, Lo = Ue;
function Fo(e) {
  return Lo(e) ? Mo(e) : Do(e);
}
var Y = Fo, Go = B, Bo = Y;
function Uo(e, t) {
  return e && Go(t, Bo(t), e);
}
var Ko = Uo;
function No(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ho = No, Vo = C, Ro = J, ko = Ho, zo = Object.prototype, Wo = zo.hasOwnProperty;
function qo(e) {
  if (!Vo(e))
    return ko(e);
  var t = Ro(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !Wo.call(e, a)) || r.push(a);
  return r;
}
var Jo = qo, Yo = Ge, Xo = Jo, Zo = Ue;
function Qo(e) {
  return Zo(e) ? Yo(e, !0) : Xo(e);
}
var X = Qo, es = B, ts = X;
function rs(e, t) {
  return e && es(t, ts(t), e);
}
var as = rs, E = {}, ns = {
  get exports() {
    return E;
  },
  set exports(e) {
    E = e;
  }
};
(function(e, t) {
  var r = l, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, n = o && o.exports === a, s = n ? r.Buffer : void 0, c = s ? s.allocUnsafe : void 0;
  function v(f, I) {
    if (I)
      return f.slice();
    var g = f.length, S = c ? c(g) : new f.constructor(g);
    return f.copy(S), S;
  }
  e.exports = v;
})(ns, E);
function os(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var ss = os;
function is(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, o = 0, n = []; ++r < a; ) {
    var s = e[r];
    t(s, r, e) && (n[o++] = s);
  }
  return n;
}
var cs = is;
function us() {
  return [];
}
var Ke = us, fs = cs, vs = Ke, ls = Object.prototype, gs = ls.propertyIsEnumerable, ge = Object.getOwnPropertySymbols, ps = ge ? function(e) {
  return e == null ? [] : (e = Object(e), fs(ge(e), function(t) {
    return gs.call(e, t);
  }));
} : vs, Z = ps, $s = B, ys = Z;
function bs(e, t) {
  return $s(e, ys(e), t);
}
var hs = bs;
function _s(e, t) {
  for (var r = -1, a = t.length, o = e.length; ++r < a; )
    e[o + r] = t[r];
  return e;
}
var Ne = _s, ds = Be, Ts = ds(Object.getPrototypeOf, Object), He = Ts, js = Ne, As = He, Ss = Z, ms = Ke, Os = Object.getOwnPropertySymbols, Cs = Os ? function(e) {
  for (var t = []; e; )
    js(t, Ss(e)), e = As(e);
  return t;
} : ms, Ve = Cs, ws = B, Is = Ve;
function Ps(e, t) {
  return ws(e, Is(e), t);
}
var xs = Ps, Es = Ne, Ms = W;
function Ds(e, t, r) {
  var a = t(e);
  return Ms(e) ? a : Es(a, r(e));
}
var Re = Ds, Ls = Re, Fs = Z, Gs = Y;
function Bs(e) {
  return Ls(e, Gs, Fs);
}
var Us = Bs, Ks = Re, Ns = Ve, Hs = X;
function Vs(e) {
  return Ks(e, Hs, Ns);
}
var Rs = Vs, ks = b, zs = l, Ws = ks(zs, "DataView"), qs = Ws, Js = b, Ys = l, Xs = Js(Ys, "Promise"), Zs = Xs, Qs = b, ei = l, ti = Qs(ei, "Set"), ri = ti, ai = b, ni = l, oi = ai(ni, "WeakMap"), si = oi, K = qs, N = z, H = Zs, V = ri, R = si, ke = L, A = Ee, pe = "[object Map]", ii = "[object Object]", $e = "[object Promise]", ye = "[object Set]", be = "[object WeakMap]", he = "[object DataView]", ci = A(K), ui = A(N), fi = A(H), vi = A(V), li = A(R), y = ke;
(K && y(new K(new ArrayBuffer(1))) != he || N && y(new N()) != pe || H && y(H.resolve()) != $e || V && y(new V()) != ye || R && y(new R()) != be) && (y = function(e) {
  var t = ke(e), r = t == ii ? e.constructor : void 0, a = r ? A(r) : "";
  if (a)
    switch (a) {
      case ci:
        return he;
      case ui:
        return pe;
      case fi:
        return $e;
      case vi:
        return ye;
      case li:
        return be;
    }
  return t;
});
var Q = y, gi = Object.prototype, pi = gi.hasOwnProperty;
function $i(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && pi.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var yi = $i, bi = l, hi = bi.Uint8Array, _i = hi, _e = _i;
function di(e) {
  var t = new e.constructor(e.byteLength);
  return new _e(t).set(new _e(e)), t;
}
var ee = di, Ti = ee;
function ji(e, t) {
  var r = t ? Ti(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Ai = ji, Si = /\w*$/;
function mi(e) {
  var t = new e.constructor(e.source, Si.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Oi = mi, de = k, Te = de ? de.prototype : void 0, je = Te ? Te.valueOf : void 0;
function Ci(e) {
  return je ? Object(je.call(e)) : {};
}
var wi = Ci, Ii = ee;
function Pi(e, t) {
  var r = t ? Ii(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var xi = Pi, Ei = ee, Mi = Ai, Di = Oi, Li = wi, Fi = xi, Gi = "[object Boolean]", Bi = "[object Date]", Ui = "[object Map]", Ki = "[object Number]", Ni = "[object RegExp]", Hi = "[object Set]", Vi = "[object String]", Ri = "[object Symbol]", ki = "[object ArrayBuffer]", zi = "[object DataView]", Wi = "[object Float32Array]", qi = "[object Float64Array]", Ji = "[object Int8Array]", Yi = "[object Int16Array]", Xi = "[object Int32Array]", Zi = "[object Uint8Array]", Qi = "[object Uint8ClampedArray]", ec = "[object Uint16Array]", tc = "[object Uint32Array]";
function rc(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case ki:
      return Ei(e);
    case Gi:
    case Bi:
      return new a(+e);
    case zi:
      return Mi(e, r);
    case Wi:
    case qi:
    case Ji:
    case Yi:
    case Xi:
    case Zi:
    case Qi:
    case ec:
    case tc:
      return Fi(e, r);
    case Ui:
      return new a();
    case Ki:
    case Vi:
      return new a(e);
    case Ni:
      return Di(e);
    case Hi:
      return new a();
    case Ri:
      return Li(e);
  }
}
var ac = rc, nc = C, Ae = Object.create, oc = function() {
  function e() {
  }
  return function(t) {
    if (!nc(t))
      return {};
    if (Ae)
      return Ae(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), sc = oc, ic = sc, cc = He, uc = J;
function fc(e) {
  return typeof e.constructor == "function" && !uc(e) ? ic(cc(e)) : {};
}
var vc = fc, lc = Q, gc = w, pc = "[object Map]";
function $c(e) {
  return gc(e) && lc(e) == pc;
}
var yc = $c, bc = yc, hc = q, Se = h, me = Se && Se.isMap, _c = me ? hc(me) : bc, dc = _c, Tc = Q, jc = w, Ac = "[object Set]";
function Sc(e) {
  return jc(e) && Tc(e) == Ac;
}
var mc = Sc, Oc = mc, Cc = q, Oe = h, Ce = Oe && Oe.isSet, wc = Ce ? Cc(Ce) : Oc, Ic = wc, Pc = Ha, xc = Ra, Ec = De, Mc = Ko, Dc = as, Lc = E, Fc = ss, Gc = hs, Bc = xs, Uc = Us, Kc = Rs, Nc = Q, Hc = yi, Vc = ac, Rc = vc, kc = W, zc = O, Wc = dc, qc = C, Jc = Ic, Yc = Y, Xc = X, Zc = 1, Qc = 2, eu = 4, ze = "[object Arguments]", tu = "[object Array]", ru = "[object Boolean]", au = "[object Date]", nu = "[object Error]", We = "[object Function]", ou = "[object GeneratorFunction]", su = "[object Map]", iu = "[object Number]", qe = "[object Object]", cu = "[object RegExp]", uu = "[object Set]", fu = "[object String]", vu = "[object Symbol]", lu = "[object WeakMap]", gu = "[object ArrayBuffer]", pu = "[object DataView]", $u = "[object Float32Array]", yu = "[object Float64Array]", bu = "[object Int8Array]", hu = "[object Int16Array]", _u = "[object Int32Array]", du = "[object Uint8Array]", Tu = "[object Uint8ClampedArray]", ju = "[object Uint16Array]", Au = "[object Uint32Array]", i = {};
i[ze] = i[tu] = i[gu] = i[pu] = i[ru] = i[au] = i[$u] = i[yu] = i[bu] = i[hu] = i[_u] = i[su] = i[iu] = i[qe] = i[cu] = i[uu] = i[fu] = i[vu] = i[du] = i[Tu] = i[ju] = i[Au] = !0;
i[nu] = i[We] = i[lu] = !1;
function x(e, t, r, a, o, n) {
  var s, c = t & Zc, v = t & Qc, f = t & eu;
  if (r && (s = o ? r(e, a, o, n) : r(e)), s !== void 0)
    return s;
  if (!qc(e))
    return e;
  var I = kc(e);
  if (I) {
    if (s = Hc(e), !c)
      return Fc(e, s);
  } else {
    var g = Nc(e), S = g == We || g == ou;
    if (zc(e))
      return Lc(e, c);
    if (g == qe || g == ze || S && !o) {
      if (s = v || S ? {} : Rc(e), !c)
        return v ? Bc(e, Dc(s, e)) : Gc(e, Mc(s, e));
    } else {
      if (!i[g])
        return o ? e : {};
      s = Vc(e, g, c);
    }
  }
  n || (n = new Pc());
  var te = n.get(e);
  if (te)
    return te;
  n.set(e, s), Jc(e) ? e.forEach(function(p) {
    s.add(x(p, t, r, p, e, n));
  }) : Wc(e) && e.forEach(function(p, $) {
    s.set($, x(p, t, r, $, e, n));
  });
  var Je = f ? v ? Kc : Uc : v ? Xc : Yc, re = I ? void 0 : Je(e);
  return xc(re || e, function(p, $) {
    re && ($ = p, p = e[$]), Ec(s, $, x(p, t, r, $, e, n));
  }), s;
}
var Su = x, mu = Su, Ou = 1, Cu = 4;
function wu(e) {
  return mu(e, Ou | Cu);
}
var Iu = wu;
class xu {
  constructor(t, r) {
    r = r || { envParams: {} }, this.fnString = t, this.fn = Pu(t), this.userParamsSchema = {}, this.result = [], this.envParams = r.envParams;
  }
  runOne(t, r = 1e4) {
    return new Promise((a) => {
      const o = setTimeout(() => {
        a({
          data: null,
          code: 1,
          msg: "timeout",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: t
        });
      }, r);
      this.fn(this.envParams, t).then((n) => {
        clearTimeout(o), a({
          data: n,
          code: 0,
          msg: "success",
          isSuccess: !0,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: t
        });
      }).catch((n) => {
        clearTimeout(o), a({
          data: n,
          code: (n == null ? void 0 : n.code) || 1,
          msg: (n == null ? void 0 : n.message) || "error",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: t
        });
      });
    });
  }
  async run(t) {
    const r = [], { allUserParams: a = [], concurrency: o = 1 } = t;
    for (let n = 0; n < a.length; n = n + o) {
      const s = await Promise.all(
        a.slice(n, n + o).map((c) => this.runOne(Iu(c), t.timeout))
      );
      r.push(...s);
    }
    return this.result.push(...r), r;
  }
}
const Pu = (e) => Function(`return ${e}`)(), Eu = () => {
}, Mu = (e, t) => e + t;
export {
  xu as Crawler,
  Mu as add,
  Eu as createCrawler,
  Pu as turnFnStringToFn
};
//# sourceMappingURL=index.es.js.map
