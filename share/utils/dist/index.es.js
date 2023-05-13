function wt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Tt } = Object.prototype, { getPrototypeOf: je } = Object, Pe = ((e) => (t) => {
  const r = Tt.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => Pe(t) === e), se = (e) => (t) => typeof t === e, { isArray: L } = Array, k = se("undefined");
function lr(e) {
  return e !== null && !k(e) && e.constructor !== null && !k(e.constructor) && $(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const St = j("ArrayBuffer");
function fr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && St(e.buffer), t;
}
const dr = se("string"), $ = se("function"), Et = se("number"), xe = (e) => e !== null && typeof e == "object", pr = (e) => e === !0 || e === !1, Q = (e) => {
  if (Pe(e) !== "object")
    return !1;
  const t = je(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, hr = j("Date"), mr = j("File"), yr = j("Blob"), br = j("FileList"), gr = (e) => xe(e) && $(e.pipe), wr = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Tt.call(e) === t || $(e.toString) && e.toString() === t);
}, Tr = j("URLSearchParams"), Sr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function G(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), L(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let c;
    for (n = 0; n < i; n++)
      c = s[n], t.call(null, e[c], c, e);
  }
}
function Ot(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const At = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), _t = (e) => !k(e) && e !== At;
function ge() {
  const { caseless: e } = _t(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && Ot(t, o) || o;
    Q(t[s]) && Q(n) ? t[s] = ge(t[s], n) : Q(n) ? t[s] = ge({}, n) : L(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && G(arguments[n], r);
  return t;
}
const Er = (e, t, r, { allOwnKeys: n } = {}) => (G(t, (o, s) => {
  r && $(o) ? e[s] = wt(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), Or = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ar = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, _r = (e, t, r, n) => {
  let o, s, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = r !== !1 && je(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, jr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Pr = (e) => {
  if (!e)
    return null;
  if (L(e))
    return e;
  let t = e.length;
  if (!Et(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, xr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && je(Uint8Array)), $r = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Rr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Cr = j("HTMLFormElement"), vr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), He = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Nr = j("RegExp"), jt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  G(r, (o, s) => {
    t(o, s, e) !== !1 && (n[s] = o);
  }), Object.defineProperties(e, n);
}, Fr = (e) => {
  jt(e, (t, r) => {
    if ($(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if ($(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Dr = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return L(e) ? n(e) : n(String(e).split(t)), r;
}, Br = () => {
}, Ur = (e, t) => (e = +e, Number.isFinite(e) ? e : t), de = "abcdefghijklmnopqrstuvwxyz", ze = "0123456789", Pt = {
  DIGIT: ze,
  ALPHA: de,
  ALPHA_DIGIT: de + de.toUpperCase() + ze
}, Lr = (e = 16, t = Pt.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Ir(e) {
  return !!(e && $(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Mr = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (xe(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = L(n) ? [] : {};
        return G(n, (i, c) => {
          const l = r(i, o + 1);
          !k(l) && (s[c] = l);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, a = {
  isArray: L,
  isArrayBuffer: St,
  isBuffer: lr,
  isFormData: wr,
  isArrayBufferView: fr,
  isString: dr,
  isNumber: Et,
  isBoolean: pr,
  isObject: xe,
  isPlainObject: Q,
  isUndefined: k,
  isDate: hr,
  isFile: mr,
  isBlob: yr,
  isRegExp: Nr,
  isFunction: $,
  isStream: gr,
  isURLSearchParams: Tr,
  isTypedArray: xr,
  isFileList: br,
  forEach: G,
  merge: ge,
  extend: Er,
  trim: Sr,
  stripBOM: Or,
  inherits: Ar,
  toFlatObject: _r,
  kindOf: Pe,
  kindOfTest: j,
  endsWith: jr,
  toArray: Pr,
  forEachEntry: $r,
  matchAll: Rr,
  isHTMLForm: Cr,
  hasOwnProperty: He,
  hasOwnProp: He,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jt,
  freezeMethods: Fr,
  toObjectSet: Dr,
  toCamelCase: vr,
  noop: Br,
  toFiniteNumber: Ur,
  findKey: Ot,
  global: At,
  isContextDefined: _t,
  ALPHABET: Pt,
  generateString: Lr,
  isSpecCompliantForm: Ir,
  toJSONObject: Mr
};
function m(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const xt = m.prototype, $t = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  $t[e] = { value: e };
});
Object.defineProperties(m, $t);
Object.defineProperty(xt, "isAxiosError", { value: !0 });
m.from = (e, t, r, n, o, s) => {
  const i = Object.create(xt);
  return a.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, r, n, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Hr = null;
function we(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Rt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qe(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Rt(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function zr(e) {
  return a.isArray(e) && !e.some(we);
}
const qr = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ie(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, E) {
    return !a.isUndefined(E[h]);
  });
  const n = r.metaTokens, o = r.visitor || f, s = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (a.isDate(d))
      return d.toISOString();
    if (!l && a.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? l && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function f(d, h, E) {
    let T = d;
    if (d && !E && typeof d == "object") {
      if (a.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && zr(d) || (a.isFileList(d) || a.endsWith(h, "[]")) && (T = a.toArray(d)))
        return h = Rt(h), T.forEach(function(Z, ur) {
          !(a.isUndefined(Z) || Z === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? qe([h], ur, s) : i === null ? h : h + "[]",
            u(Z)
          );
        }), !1;
    }
    return we(d) ? !0 : (t.append(qe(E, h, s), u(d)), !1);
  }
  const p = [], w = Object.assign(qr, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: we
  });
  function y(d, h) {
    if (!a.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(d), a.forEach(d, function(T, F) {
        (!(a.isUndefined(T) || T === null) && o.call(
          t,
          T,
          a.isString(F) ? F.trim() : F,
          h,
          w
        )) === !0 && y(T, h ? h.concat(F) : [F]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function ke(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function $e(e, t) {
  this._pairs = [], e && ie(e, this, t);
}
const Ct = $e.prototype;
Ct.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ct.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ke);
  } : ke;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function kr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function vt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || kr, o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = a.isURLSearchParams(t) ? t.toString() : new $e(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Jr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Je = Jr, Nt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vr = typeof URLSearchParams < "u" ? URLSearchParams : $e, Gr = typeof FormData < "u" ? FormData : null, Kr = typeof Blob < "u" ? Blob : null, Wr = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Xr = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), O = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vr,
    FormData: Gr,
    Blob: Kr
  },
  isStandardBrowserEnv: Wr,
  isStandardBrowserWebWorkerEnv: Xr,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Yr(e, t) {
  return ie(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return O.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zr(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Qr(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Ft(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    const c = Number.isFinite(+i), l = s >= r.length;
    return i = !i && a.isArray(o) ? o.length : i, l ? (a.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !c) : ((!o[i] || !a.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && a.isArray(o[i]) && (o[i] = Qr(o[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {};
    return a.forEachEntry(e, (n, o) => {
      t(Zr(n), o, r, 0);
    }), r;
  }
  return null;
}
const en = {
  "Content-Type": void 0
};
function tn(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ae = {
  transitional: Nt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = a.isObject(t);
    if (s && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return o && o ? JSON.stringify(Ft(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Yr(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ie(
          c ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), tn(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ae.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && a.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(t) {
  ae.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  ae.headers[t] = a.merge(en);
});
const Re = ae, rn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), nn = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && rn[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ve = Symbol("internals");
function H(e) {
  return e && String(e).trim().toLowerCase();
}
function ee(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ee) : String(e);
}
function on(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const sn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pe(e, t, r, n, o) {
  if (a.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!a.isString(t)) {
    if (a.isString(n))
      return t.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(t);
  }
}
function an(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function cn(e, t) {
  const r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class ce {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(c, l, u) {
      const f = H(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(o, f);
      (!p || o[p] === void 0 || u === !0 || u === void 0 && o[p] !== !1) && (o[p || l] = ee(c));
    }
    const i = (c, l) => a.forEach(c, (u, f) => s(u, f, l));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : a.isString(t) && (t = t.trim()) && !sn(t) ? i(nn(t), r) : t != null && s(r, t, n), this;
  }
  get(t, r) {
    if (t = H(t), t) {
      const n = a.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return on(o);
        if (a.isFunction(r))
          return r.call(this, o, n);
        if (a.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = H(t), t) {
      const n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || pe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = H(i), i) {
        const c = a.findKey(n, i);
        c && (!r || pe(n, n[c], c, r)) && (delete n[c], o = !0);
      }
    }
    return a.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || pe(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return a.forEach(this, (o, s) => {
      const i = a.findKey(n, s);
      if (i) {
        r[i] = ee(o), delete r[s];
        return;
      }
      const c = t ? an(s) : String(s).trim();
      c !== s && delete r[s], r[c] = ee(o), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && a.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Ve] = this[Ve] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const c = H(i);
      n[c] || (cn(o, i), n[c] = !0);
    }
    return a.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(ce.prototype);
a.freezeMethods(ce);
const _ = ce;
function he(e, t) {
  const r = this || Re, n = t || r, o = _.from(n.headers);
  let s = n.data;
  return a.forEach(e, function(c) {
    s = c.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Dt(e) {
  return !!(e && e.__CANCEL__);
}
function K(e, t, r) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(K, m, {
  __CANCEL__: !0
});
function un(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new m(
    "Request failed with status code " + r.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const ln = O.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, s, i, c) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), a.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), a.isString(s) && l.push("path=" + s), a.isString(i) && l.push("domain=" + i), c === !0 && l.push("secure"), document.cookie = l.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function fn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function dn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bt(e, t) {
  return e && !fn(t) ? dn(e, t) : t;
}
const pn = O.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(s) {
      let i = s;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(i) {
      const c = a.isString(i) ? o(i) : i;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function hn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function mn(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), f = n[s];
    i || (i = u), r[o] = l, n[o] = u;
    let p = s, w = 0;
    for (; p !== o; )
      w += r[p++], p = p % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const y = f && u - f;
    return y ? Math.round(w * 1e3 / y) : void 0;
  };
}
function Ge(e, t) {
  let r = 0;
  const n = mn(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, c = s - r, l = n(c), u = s <= i;
    r = s;
    const f = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && i && u ? (i - s) / l : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const yn = typeof XMLHttpRequest < "u", bn = yn && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const s = _.from(e.headers).normalize(), i = e.responseType;
    let c;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(o) && (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(y + ":" + d));
    }
    const f = Bt(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), vt(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function p() {
      if (!u)
        return;
      const y = _.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), h = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      un(function(T) {
        r(T), l();
      }, function(T) {
        n(T), l();
      }, h), u = null;
    }
    if ("onloadend" in u ? u.onloadend = p : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, u.onabort = function() {
      u && (n(new m("Request aborted", m.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new m("Network Error", m.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || Nt;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), n(new m(
        d,
        h.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, O.isStandardBrowserEnv) {
      const y = (e.withCredentials || pn(f)) && e.xsrfCookieName && ln.read(e.xsrfCookieName);
      y && s.set(e.xsrfHeaderName, y);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in u && a.forEach(s.toJSON(), function(d, h) {
      u.setRequestHeader(h, d);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Ge(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Ge(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (y) => {
      u && (n(!y || y.type ? new K(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const w = hn(f);
    if (w && O.protocols.indexOf(w) === -1) {
      n(new m("Unsupported protocol " + w + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, te = {
  http: Hr,
  xhr: bn
};
a.forEach(te, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const gn = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = a.isString(r) ? te[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new m(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(te, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!a.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: te
};
function me(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new K(null, e);
}
function Ke(e) {
  return me(e), e.headers = _.from(e.headers), e.data = he.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gn.getAdapter(e.adapter || Re.adapter)(e).then(function(n) {
    return me(e), n.data = he.call(
      e,
      e.transformResponse,
      n
    ), n.headers = _.from(n.headers), n;
  }, function(n) {
    return Dt(n) || (me(e), n && n.response && (n.response.data = he.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = _.from(n.response.headers))), Promise.reject(n);
  });
}
const We = (e) => e instanceof _ ? e.toJSON() : e;
function D(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, p) {
    return a.isPlainObject(u) && a.isPlainObject(f) ? a.merge.call({ caseless: p }, u, f) : a.isPlainObject(f) ? a.merge({}, f) : a.isArray(f) ? f.slice() : f;
  }
  function o(u, f, p) {
    if (a.isUndefined(f)) {
      if (!a.isUndefined(u))
        return n(void 0, u, p);
    } else
      return n(u, f, p);
  }
  function s(u, f) {
    if (!a.isUndefined(f))
      return n(void 0, f);
  }
  function i(u, f) {
    if (a.isUndefined(f)) {
      if (!a.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, f);
  }
  function c(u, f, p) {
    if (p in t)
      return n(u, f);
    if (p in e)
      return n(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, f) => o(We(u), We(f), !0)
  };
  return a.forEach(Object.keys(e).concat(Object.keys(t)), function(f) {
    const p = l[f] || o, w = p(e[f], t[f], f);
    a.isUndefined(w) && p !== c || (r[f] = w);
  }), r;
}
const Ut = "1.3.5", Ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ce[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Xe = {};
Ce.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Ut + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, c) => {
    if (t === !1)
      throw new m(
        o(i, " has been removed" + (r ? " in " + r : "")),
        m.ERR_DEPRECATED
      );
    return r && !Xe[i] && (Xe[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, c) : !0;
  };
};
function wn(e, t, r) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const c = e[s], l = c === void 0 || i(c, s, e);
      if (l !== !0)
        throw new m("option " + s + " must be " + l, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new m("Unknown option " + s, m.ERR_BAD_OPTION);
  }
}
const Te = {
  assertOptions: wn,
  validators: Ce
}, x = Te.validators;
class oe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Je(),
      response: new Je()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = D(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && Te.assertOptions(n, {
      silentJSONParsing: x.transitional(x.boolean),
      forcedJSONParsing: x.transitional(x.boolean),
      clarifyTimeoutError: x.transitional(x.boolean)
    }, !1), o != null && (a.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Te.assertOptions(o, {
      encode: x.function,
      serialize: x.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && a.merge(
      s.common,
      s[r.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete s[d];
      }
    ), r.headers = _.concat(i, s);
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (l = l && h.synchronous, c.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let f, p = 0, w;
    if (!l) {
      const d = [Ke.bind(this), void 0];
      for (d.unshift.apply(d, c), d.push.apply(d, u), w = d.length, f = Promise.resolve(r); p < w; )
        f = f.then(d[p++], d[p++]);
      return f;
    }
    w = c.length;
    let y = r;
    for (p = 0; p < w; ) {
      const d = c[p++], h = c[p++];
      try {
        y = d(y);
      } catch (E) {
        h.call(this, E);
        break;
      }
    }
    try {
      f = Ke.call(this, y);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, w = u.length; p < w; )
      f = f.then(u[p++], u[p++]);
    return f;
  }
  getUri(t) {
    t = D(this.defaults, t);
    const r = Bt(t.baseURL, t.url);
    return vt(r, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  oe.prototype[t] = function(r, n) {
    return this.request(D(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, c) {
      return this.request(D(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  oe.prototype[t] = r(), oe.prototype[t + "Form"] = r(!0);
});
const re = oe;
class ve {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((c) => {
        n.subscribe(c), s = c;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, c) {
      n.reason || (n.reason = new K(s, i, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ve(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Tn = ve;
function Sn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function En(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Se = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Se).forEach(([e, t]) => {
  Se[t] = e;
});
const On = Se;
function Lt(e) {
  const t = new re(e), r = wt(re.prototype.request, t);
  return a.extend(r, re.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Lt(D(e, o));
  }, r;
}
const S = Lt(Re);
S.Axios = re;
S.CanceledError = K;
S.CancelToken = Tn;
S.isCancel = Dt;
S.VERSION = Ut;
S.toFormData = ie;
S.AxiosError = m;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = Sn;
S.isAxiosError = En;
S.mergeConfig = D;
S.AxiosHeaders = _;
S.formToJSON = (e) => Ft(a.isHTMLForm(e) ? new FormData(e) : e);
S.HttpStatusCode = On;
S.default = S;
const An = S;
function _n() {
  this.__data__ = [], this.size = 0;
}
function It(e, t) {
  return e === t || e !== e && t !== t;
}
function ue(e, t) {
  for (var r = e.length; r--; )
    if (It(e[r][0], t))
      return r;
  return -1;
}
var jn = Array.prototype, Pn = jn.splice;
function xn(e) {
  var t = this.__data__, r = ue(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Pn.call(t, r, 1), --this.size, !0;
}
function $n(e) {
  var t = this.__data__, r = ue(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Rn(e) {
  return ue(this.__data__, e) > -1;
}
function Cn(e, t) {
  var r = this.__data__, n = ue(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
P.prototype.clear = _n;
P.prototype.delete = xn;
P.prototype.get = $n;
P.prototype.has = Rn;
P.prototype.set = Cn;
function vn() {
  this.__data__ = new P(), this.size = 0;
}
function Nn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Fn(e) {
  return this.__data__.get(e);
}
function Dn(e) {
  return this.__data__.has(e);
}
var Bn = typeof global == "object" && global && global.Object === Object && global;
const Mt = Bn;
var Un = typeof self == "object" && self && self.Object === Object && self, Ln = Mt || Un || Function("return this")();
const A = Ln;
var In = A.Symbol;
const B = In;
var Ht = Object.prototype, Mn = Ht.hasOwnProperty, Hn = Ht.toString, z = B ? B.toStringTag : void 0;
function zn(e) {
  var t = Mn.call(e, z), r = e[z];
  try {
    e[z] = void 0;
    var n = !0;
  } catch {
  }
  var o = Hn.call(e);
  return n && (t ? e[z] = r : delete e[z]), o;
}
var qn = Object.prototype, kn = qn.toString;
function Jn(e) {
  return kn.call(e);
}
var Vn = "[object Null]", Gn = "[object Undefined]", Ye = B ? B.toStringTag : void 0;
function W(e) {
  return e == null ? e === void 0 ? Gn : Vn : Ye && Ye in Object(e) ? zn(e) : Jn(e);
}
function X(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Kn = "[object AsyncFunction]", Wn = "[object Function]", Xn = "[object GeneratorFunction]", Yn = "[object Proxy]";
function zt(e) {
  if (!X(e))
    return !1;
  var t = W(e);
  return t == Wn || t == Xn || t == Kn || t == Yn;
}
var Zn = A["__core-js_shared__"];
const ye = Zn;
var Ze = function() {
  var e = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qn(e) {
  return !!Ze && Ze in e;
}
var eo = Function.prototype, to = eo.toString;
function v(e) {
  if (e != null) {
    try {
      return to.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ro = /[\\^$.*+?()[\]{}|]/g, no = /^\[object .+?Constructor\]$/, oo = Function.prototype, so = Object.prototype, io = oo.toString, ao = so.hasOwnProperty, co = RegExp(
  "^" + io.call(ao).replace(ro, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function uo(e) {
  if (!X(e) || Qn(e))
    return !1;
  var t = zt(e) ? co : no;
  return t.test(v(e));
}
function lo(e, t) {
  return e == null ? void 0 : e[t];
}
function N(e, t) {
  var r = lo(e, t);
  return uo(r) ? r : void 0;
}
var fo = N(A, "Map");
const J = fo;
var po = N(Object, "create");
const V = po;
function ho() {
  this.__data__ = V ? V(null) : {}, this.size = 0;
}
function mo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var yo = "__lodash_hash_undefined__", bo = Object.prototype, go = bo.hasOwnProperty;
function wo(e) {
  var t = this.__data__;
  if (V) {
    var r = t[e];
    return r === yo ? void 0 : r;
  }
  return go.call(t, e) ? t[e] : void 0;
}
var To = Object.prototype, So = To.hasOwnProperty;
function Eo(e) {
  var t = this.__data__;
  return V ? t[e] !== void 0 : So.call(t, e);
}
var Oo = "__lodash_hash_undefined__";
function Ao(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = V && t === void 0 ? Oo : t, this;
}
function C(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
C.prototype.clear = ho;
C.prototype.delete = mo;
C.prototype.get = wo;
C.prototype.has = Eo;
C.prototype.set = Ao;
function _o() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (J || P)(),
    string: new C()
  };
}
function jo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function le(e, t) {
  var r = e.__data__;
  return jo(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Po(e) {
  var t = le(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xo(e) {
  return le(this, e).get(e);
}
function $o(e) {
  return le(this, e).has(e);
}
function Ro(e, t) {
  var r = le(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function I(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
I.prototype.clear = _o;
I.prototype.delete = Po;
I.prototype.get = xo;
I.prototype.has = $o;
I.prototype.set = Ro;
var Co = 200;
function vo(e, t) {
  var r = this.__data__;
  if (r instanceof P) {
    var n = r.__data__;
    if (!J || n.length < Co - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new I(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function M(e) {
  var t = this.__data__ = new P(e);
  this.size = t.size;
}
M.prototype.clear = vn;
M.prototype.delete = Nn;
M.prototype.get = Fn;
M.prototype.has = Dn;
M.prototype.set = vo;
function No(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Fo = function() {
  try {
    var e = N(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Qe = Fo;
function qt(e, t, r) {
  t == "__proto__" && Qe ? Qe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Do = Object.prototype, Bo = Do.hasOwnProperty;
function kt(e, t, r) {
  var n = e[t];
  (!(Bo.call(e, t) && It(n, r)) || r === void 0 && !(t in e)) && qt(e, t, r);
}
function fe(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var c = t[s], l = n ? n(r[c], e[c], c, r, e) : void 0;
    l === void 0 && (l = e[c]), o ? qt(r, c, l) : kt(r, c, l);
  }
  return r;
}
function Uo(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
function Y(e) {
  return e != null && typeof e == "object";
}
var Lo = "[object Arguments]";
function et(e) {
  return Y(e) && W(e) == Lo;
}
var Jt = Object.prototype, Io = Jt.hasOwnProperty, Mo = Jt.propertyIsEnumerable, Ho = et(function() {
  return arguments;
}()) ? et : function(e) {
  return Y(e) && Io.call(e, "callee") && !Mo.call(e, "callee");
};
const zo = Ho;
var qo = Array.isArray;
const Ne = qo;
function ko() {
  return !1;
}
var Vt = typeof exports == "object" && exports && !exports.nodeType && exports, tt = Vt && typeof module == "object" && module && !module.nodeType && module, Jo = tt && tt.exports === Vt, rt = Jo ? A.Buffer : void 0, Vo = rt ? rt.isBuffer : void 0, Go = Vo || ko;
const Gt = Go;
var Ko = 9007199254740991, Wo = /^(?:0|[1-9]\d*)$/;
function Xo(e, t) {
  var r = typeof e;
  return t = t ?? Ko, !!t && (r == "number" || r != "symbol" && Wo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Yo = 9007199254740991;
function Kt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yo;
}
var Zo = "[object Arguments]", Qo = "[object Array]", es = "[object Boolean]", ts = "[object Date]", rs = "[object Error]", ns = "[object Function]", os = "[object Map]", ss = "[object Number]", is = "[object Object]", as = "[object RegExp]", cs = "[object Set]", us = "[object String]", ls = "[object WeakMap]", fs = "[object ArrayBuffer]", ds = "[object DataView]", ps = "[object Float32Array]", hs = "[object Float64Array]", ms = "[object Int8Array]", ys = "[object Int16Array]", bs = "[object Int32Array]", gs = "[object Uint8Array]", ws = "[object Uint8ClampedArray]", Ts = "[object Uint16Array]", Ss = "[object Uint32Array]", g = {};
g[ps] = g[hs] = g[ms] = g[ys] = g[bs] = g[gs] = g[ws] = g[Ts] = g[Ss] = !0;
g[Zo] = g[Qo] = g[fs] = g[es] = g[ds] = g[ts] = g[rs] = g[ns] = g[os] = g[ss] = g[is] = g[as] = g[cs] = g[us] = g[ls] = !1;
function Es(e) {
  return Y(e) && Kt(e.length) && !!g[W(e)];
}
function Fe(e) {
  return function(t) {
    return e(t);
  };
}
var Wt = typeof exports == "object" && exports && !exports.nodeType && exports, q = Wt && typeof module == "object" && module && !module.nodeType && module, Os = q && q.exports === Wt, be = Os && Mt.process, As = function() {
  try {
    var e = q && q.require && q.require("util").types;
    return e || be && be.binding && be.binding("util");
  } catch {
  }
}();
const U = As;
var nt = U && U.isTypedArray, _s = nt ? Fe(nt) : Es;
const js = _s;
var Ps = Object.prototype, xs = Ps.hasOwnProperty;
function Xt(e, t) {
  var r = Ne(e), n = !r && zo(e), o = !r && !n && Gt(e), s = !r && !n && !o && js(e), i = r || n || o || s, c = i ? Uo(e.length, String) : [], l = c.length;
  for (var u in e)
    (t || xs.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Xo(u, l))) && c.push(u);
  return c;
}
var $s = Object.prototype;
function De(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || $s;
  return e === r;
}
function Yt(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Rs = Yt(Object.keys, Object);
const Cs = Rs;
var vs = Object.prototype, Ns = vs.hasOwnProperty;
function Fs(e) {
  if (!De(e))
    return Cs(e);
  var t = [];
  for (var r in Object(e))
    Ns.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Zt(e) {
  return e != null && Kt(e.length) && !zt(e);
}
function Be(e) {
  return Zt(e) ? Xt(e) : Fs(e);
}
function Ds(e, t) {
  return e && fe(t, Be(t), e);
}
function Bs(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Us = Object.prototype, Ls = Us.hasOwnProperty;
function Is(e) {
  if (!X(e))
    return Bs(e);
  var t = De(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ls.call(e, n)) || r.push(n);
  return r;
}
function Ue(e) {
  return Zt(e) ? Xt(e, !0) : Is(e);
}
function Ms(e, t) {
  return e && fe(t, Ue(t), e);
}
var Qt = typeof exports == "object" && exports && !exports.nodeType && exports, ot = Qt && typeof module == "object" && module && !module.nodeType && module, Hs = ot && ot.exports === Qt, st = Hs ? A.Buffer : void 0, it = st ? st.allocUnsafe : void 0;
function zs(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = it ? it(r) : new e.constructor(r);
  return e.copy(n), n;
}
function qs(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function ks(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[o++] = i);
  }
  return s;
}
function er() {
  return [];
}
var Js = Object.prototype, Vs = Js.propertyIsEnumerable, at = Object.getOwnPropertySymbols, Gs = at ? function(e) {
  return e == null ? [] : (e = Object(e), ks(at(e), function(t) {
    return Vs.call(e, t);
  }));
} : er;
const Le = Gs;
function Ks(e, t) {
  return fe(e, Le(e), t);
}
function tr(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Ws = Yt(Object.getPrototypeOf, Object);
const rr = Ws;
var Xs = Object.getOwnPropertySymbols, Ys = Xs ? function(e) {
  for (var t = []; e; )
    tr(t, Le(e)), e = rr(e);
  return t;
} : er;
const nr = Ys;
function Zs(e, t) {
  return fe(e, nr(e), t);
}
function or(e, t, r) {
  var n = t(e);
  return Ne(e) ? n : tr(n, r(e));
}
function Qs(e) {
  return or(e, Be, Le);
}
function ei(e) {
  return or(e, Ue, nr);
}
var ti = N(A, "DataView");
const Ee = ti;
var ri = N(A, "Promise");
const Oe = ri;
var ni = N(A, "Set");
const Ae = ni;
var oi = N(A, "WeakMap");
const _e = oi;
var ct = "[object Map]", si = "[object Object]", ut = "[object Promise]", lt = "[object Set]", ft = "[object WeakMap]", dt = "[object DataView]", ii = v(Ee), ai = v(J), ci = v(Oe), ui = v(Ae), li = v(_e), R = W;
(Ee && R(new Ee(new ArrayBuffer(1))) != dt || J && R(new J()) != ct || Oe && R(Oe.resolve()) != ut || Ae && R(new Ae()) != lt || _e && R(new _e()) != ft) && (R = function(e) {
  var t = W(e), r = t == si ? e.constructor : void 0, n = r ? v(r) : "";
  if (n)
    switch (n) {
      case ii:
        return dt;
      case ai:
        return ct;
      case ci:
        return ut;
      case ui:
        return lt;
      case li:
        return ft;
    }
  return t;
});
const Ie = R;
var fi = Object.prototype, di = fi.hasOwnProperty;
function pi(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && di.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var hi = A.Uint8Array;
const pt = hi;
function Me(e) {
  var t = new e.constructor(e.byteLength);
  return new pt(t).set(new pt(e)), t;
}
function mi(e, t) {
  var r = t ? Me(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var yi = /\w*$/;
function bi(e) {
  var t = new e.constructor(e.source, yi.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ht = B ? B.prototype : void 0, mt = ht ? ht.valueOf : void 0;
function gi(e) {
  return mt ? Object(mt.call(e)) : {};
}
function wi(e, t) {
  var r = t ? Me(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Ti = "[object Boolean]", Si = "[object Date]", Ei = "[object Map]", Oi = "[object Number]", Ai = "[object RegExp]", _i = "[object Set]", ji = "[object String]", Pi = "[object Symbol]", xi = "[object ArrayBuffer]", $i = "[object DataView]", Ri = "[object Float32Array]", Ci = "[object Float64Array]", vi = "[object Int8Array]", Ni = "[object Int16Array]", Fi = "[object Int32Array]", Di = "[object Uint8Array]", Bi = "[object Uint8ClampedArray]", Ui = "[object Uint16Array]", Li = "[object Uint32Array]";
function Ii(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case xi:
      return Me(e);
    case Ti:
    case Si:
      return new n(+e);
    case $i:
      return mi(e, r);
    case Ri:
    case Ci:
    case vi:
    case Ni:
    case Fi:
    case Di:
    case Bi:
    case Ui:
    case Li:
      return wi(e, r);
    case Ei:
      return new n();
    case Oi:
    case ji:
      return new n(e);
    case Ai:
      return bi(e);
    case _i:
      return new n();
    case Pi:
      return gi(e);
  }
}
var yt = Object.create, Mi = function() {
  function e() {
  }
  return function(t) {
    if (!X(t))
      return {};
    if (yt)
      return yt(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const Hi = Mi;
function zi(e) {
  return typeof e.constructor == "function" && !De(e) ? Hi(rr(e)) : {};
}
var qi = "[object Map]";
function ki(e) {
  return Y(e) && Ie(e) == qi;
}
var bt = U && U.isMap, Ji = bt ? Fe(bt) : ki;
const Vi = Ji;
var Gi = "[object Set]";
function Ki(e) {
  return Y(e) && Ie(e) == Gi;
}
var gt = U && U.isSet, Wi = gt ? Fe(gt) : Ki;
const Xi = Wi;
var Yi = 1, Zi = 2, Qi = 4, sr = "[object Arguments]", ea = "[object Array]", ta = "[object Boolean]", ra = "[object Date]", na = "[object Error]", ir = "[object Function]", oa = "[object GeneratorFunction]", sa = "[object Map]", ia = "[object Number]", ar = "[object Object]", aa = "[object RegExp]", ca = "[object Set]", ua = "[object String]", la = "[object Symbol]", fa = "[object WeakMap]", da = "[object ArrayBuffer]", pa = "[object DataView]", ha = "[object Float32Array]", ma = "[object Float64Array]", ya = "[object Int8Array]", ba = "[object Int16Array]", ga = "[object Int32Array]", wa = "[object Uint8Array]", Ta = "[object Uint8ClampedArray]", Sa = "[object Uint16Array]", Ea = "[object Uint32Array]", b = {};
b[sr] = b[ea] = b[da] = b[pa] = b[ta] = b[ra] = b[ha] = b[ma] = b[ya] = b[ba] = b[ga] = b[sa] = b[ia] = b[ar] = b[aa] = b[ca] = b[ua] = b[la] = b[wa] = b[Ta] = b[Sa] = b[Ea] = !0;
b[na] = b[ir] = b[fa] = !1;
function ne(e, t, r, n, o, s) {
  var i, c = t & Yi, l = t & Zi, u = t & Qi;
  if (r && (i = o ? r(e, n, o, s) : r(e)), i !== void 0)
    return i;
  if (!X(e))
    return e;
  var f = Ne(e);
  if (f) {
    if (i = pi(e), !c)
      return qs(e, i);
  } else {
    var p = Ie(e), w = p == ir || p == oa;
    if (Gt(e))
      return zs(e, c);
    if (p == ar || p == sr || w && !o) {
      if (i = l || w ? {} : zi(e), !c)
        return l ? Zs(e, Ms(i, e)) : Ks(e, Ds(i, e));
    } else {
      if (!b[p])
        return o ? e : {};
      i = Ii(e, p, c);
    }
  }
  s || (s = new M());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, i), Xi(e) ? e.forEach(function(E) {
    i.add(ne(E, t, r, E, e, s));
  }) : Vi(e) && e.forEach(function(E, T) {
    i.set(T, ne(E, t, r, T, e, s));
  });
  var d = u ? l ? ei : Qs : l ? Ue : Be, h = f ? void 0 : d(e);
  return No(h || e, function(E, T) {
    h && (T = E, E = e[T]), kt(i, T, ne(E, t, r, T, e, s));
  }), i;
}
var Oa = 1, Aa = 4;
function cr(e) {
  return ne(e, Oa | Aa);
}
class ja {
  constructor(t, r) {
    r = r || { envParams: { axios: An } }, this.fnString = t, this.fn = _a(t), this.userParamsSchema = JSON.stringify({}), this.result = [], this.envParams = r.envParams;
  }
  runOne(t, r = 1e4) {
    return new Promise((n) => {
      const o = setTimeout(() => {
        n({
          data: null,
          code: 1,
          msg: "timeout",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: t
        });
      }, r);
      this.fn(this.envParams, t).then((s) => {
        clearTimeout(o), n({
          data: s,
          code: 0,
          msg: "success",
          isSuccess: !0,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: t
        });
      }).catch((s) => {
        clearTimeout(o), n({
          data: s,
          code: (s == null ? void 0 : s.code) || 1,
          msg: (s == null ? void 0 : s.message) || "error",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: t
        });
      });
    });
  }
  async run(t, r) {
    const n = [], { allUserParams: o = [], concurrency: s = 1 } = t;
    for (let i = 0; i < o.length; i = i + s) {
      const c = await Promise.all(
        o.slice(i, i + s).map((l) => this.runOne(cr(l), t.timeout))
      );
      r && r(c), n.push(...c);
    }
    return this.result.push(...n), n;
  }
  resultCount() {
    return this.result.length;
  }
  successCount() {
    return this.result.filter((t) => t.isSuccess).length;
  }
  failCount() {
    return this.result.filter((t) => !t.isSuccess).length;
  }
  resultSize() {
    return JSON.stringify(this.result).length;
  }
}
const _a = (e) => Function(`return ${e}`)(), Pa = (e) => {
  const { params1: t, params2: r, commonParams: n } = e, o = [];
  for (let s = 0; s < t.length; s++)
    for (let i = 0; i < r.length; i++)
      o.push({
        ...n,
        ...t[s],
        ...r[i]
      });
  return o;
}, xa = (e, t) => {
  const { start: r, end: n } = t, o = [];
  for (let s = r; s <= n; s++) {
    const i = cr(e);
    i.page = s, o.push(i);
  }
  return o;
}, $a = {
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
}, Ra = (e) => /^(async\s+)?function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(e), Ca = (e) => /^async\s*function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(e), va = (e) => /^[a-zA-Z0-9_-]{4,16}$/.test(e), Na = (e) => /^[a-zA-Z0-9_-]{6,16}$/.test(e), Fa = (e, t) => e + t;
export {
  ja as Crawler,
  Fa as add,
  Na as checkPassword,
  va as checkUserName,
  $a as defaultCrawlerSchema,
  Pa as generateParams,
  xa as generateParamsByRange,
  Ca as isAsyncFunctionString,
  Ra as isFunctionString,
  _a as turnFnStringToFn
};
//# sourceMappingURL=index.es.js.map
