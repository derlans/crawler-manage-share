function Rn(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Pn } = Object.prototype, { getPrototypeOf: ur } = Object, cr = ((t) => (e) => {
  const r = Pn.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), X = (t) => (t = t.toLowerCase(), (e) => cr(e) === t), Et = (t) => (e) => typeof e === t, { isArray: Ne } = Array, We = Et("undefined");
function Di(t) {
  return t !== null && !We(t) && t.constructor !== null && !We(t.constructor) && ae(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const jn = X("ArrayBuffer");
function Ci(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && jn(t.buffer), e;
}
const Mi = Et("string"), ae = Et("function"), Ln = Et("number"), lr = (t) => t !== null && typeof t == "object", Ai = (t) => t === !0 || t === !1, lt = (t) => {
  if (cr(t) !== "object")
    return !1;
  const e = ur(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Ii = X("Date"), Fi = X("File"), ki = X("Blob"), $i = X("FileList"), Ri = (t) => lr(t) && ae(t.pipe), Pi = (t) => {
  const e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Pn.call(t) === e || ae(t.toString) && t.toString() === e);
}, ji = X("URLSearchParams"), Li = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ye(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, s;
  if (typeof t != "object" && (t = [t]), Ne(t))
    for (n = 0, s = t.length; n < s; n++)
      e.call(null, t[n], n, t);
  else {
    const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let a;
    for (n = 0; n < i; n++)
      a = o[n], e.call(null, t[a], a, t);
  }
}
function Vn(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], e === s.toLowerCase())
      return s;
  return null;
}
const Un = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), zn = (t) => !We(t) && t !== Un;
function Jt() {
  const { caseless: t } = zn(this) && this || {}, e = {}, r = (n, s) => {
    const o = t && Vn(e, s) || s;
    lt(e[o]) && lt(n) ? e[o] = Jt(e[o], n) : lt(n) ? e[o] = Jt({}, n) : Ne(n) ? e[o] = n.slice() : e[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Ye(arguments[n], r);
  return e;
}
const Vi = (t, e, r, { allOwnKeys: n } = {}) => (Ye(e, (s, o) => {
  r && ae(s) ? t[o] = Rn(s, r) : t[o] = s;
}, { allOwnKeys: n }), t), Ui = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), zi = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Hi = (t, e, r, n) => {
  let s, o, i;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = r !== !1 && ur(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, qi = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Zi = (t) => {
  if (!t)
    return null;
  if (Ne(t))
    return t;
  let e = t.length;
  if (!Ln(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Bi = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && ur(Uint8Array)), Wi = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, Ji = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Gi = X("HTMLFormElement"), Yi = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Mr = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Ki = X("RegExp"), Hn = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Ye(r, (s, o) => {
    e(s, o, t) !== !1 && (n[o] = s);
  }), Object.defineProperties(t, n);
}, Qi = (t) => {
  Hn(t, (e, r) => {
    if (ae(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (ae(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Xi = (t, e) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return Ne(t) ? n(t) : n(String(t).split(e)), r;
}, eo = () => {
}, to = (t, e) => (t = +t, Number.isFinite(t) ? t : e), kt = "abcdefghijklmnopqrstuvwxyz", Ar = "0123456789", qn = {
  DIGIT: Ar,
  ALPHA: kt,
  ALPHA_DIGIT: kt + kt.toUpperCase() + Ar
}, ro = (t = 16, e = qn.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function no(t) {
  return !!(t && ae(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const so = (t) => {
  const e = new Array(10), r = (n, s) => {
    if (lr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[s] = n;
        const o = Ne(n) ? [] : {};
        return Ye(n, (i, a) => {
          const c = r(i, s + 1);
          !We(c) && (o[a] = c);
        }), e[s] = void 0, o;
      }
    }
    return n;
  };
  return r(t, 0);
}, f = {
  isArray: Ne,
  isArrayBuffer: jn,
  isBuffer: Di,
  isFormData: Pi,
  isArrayBufferView: Ci,
  isString: Mi,
  isNumber: Ln,
  isBoolean: Ai,
  isObject: lr,
  isPlainObject: lt,
  isUndefined: We,
  isDate: Ii,
  isFile: Fi,
  isBlob: ki,
  isRegExp: Ki,
  isFunction: ae,
  isStream: Ri,
  isURLSearchParams: ji,
  isTypedArray: Bi,
  isFileList: $i,
  forEach: Ye,
  merge: Jt,
  extend: Vi,
  trim: Li,
  stripBOM: Ui,
  inherits: zi,
  toFlatObject: Hi,
  kindOf: cr,
  kindOfTest: X,
  endsWith: qi,
  toArray: Zi,
  forEachEntry: Wi,
  matchAll: Ji,
  isHTMLForm: Gi,
  hasOwnProperty: Mr,
  hasOwnProp: Mr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hn,
  freezeMethods: Qi,
  toObjectSet: Xi,
  toCamelCase: Yi,
  noop: eo,
  toFiniteNumber: to,
  findKey: Vn,
  global: Un,
  isContextDefined: zn,
  ALPHABET: qn,
  generateString: ro,
  isSpecCompliantForm: no,
  toJSONObject: so
};
function x(t, e, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
f.inherits(x, Error, {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Zn = x.prototype, Bn = {};
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
].forEach((t) => {
  Bn[t] = { value: t };
});
Object.defineProperties(x, Bn);
Object.defineProperty(Zn, "isAxiosError", { value: !0 });
x.from = (t, e, r, n, s, o) => {
  const i = Object.create(Zn);
  return f.toFlatObject(t, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), x.call(i, t.message, e, r, n, s), i.cause = t, i.name = t.name, o && Object.assign(i, o), i;
};
const io = null;
function Gt(t) {
  return f.isPlainObject(t) || f.isArray(t);
}
function Wn(t) {
  return f.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ir(t, e, r) {
  return t ? t.concat(e).map(function(s, o) {
    return s = Wn(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : e;
}
function oo(t) {
  return f.isArray(t) && !t.some(Gt);
}
const ao = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function vt(t, e, r) {
  if (!f.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, S) {
    return !f.isUndefined(S[w]);
  });
  const n = r.metaTokens, s = r.visitor || l, o = r.dots, i = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(e);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (f.isDate(d))
      return d.toISOString();
    if (!c && f.isBlob(d))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(d) || f.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, w, S) {
    let T = d;
    if (d && !S && typeof d == "object") {
      if (f.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), d = JSON.stringify(d);
      else if (f.isArray(d) && oo(d) || (f.isFileList(d) || f.endsWith(w, "[]")) && (T = f.toArray(d)))
        return w = Wn(w), T.forEach(function(A, j) {
          !(f.isUndefined(A) || A === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ir([w], j, o) : i === null ? w : w + "[]",
            u(A)
          );
        }), !1;
    }
    return Gt(d) ? !0 : (e.append(Ir(S, w, o), u(d)), !1);
  }
  const m = [], g = Object.assign(ao, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Gt
  });
  function h(d, w) {
    if (!f.isUndefined(d)) {
      if (m.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      m.push(d), f.forEach(d, function(T, _) {
        (!(f.isUndefined(T) || T === null) && s.call(
          e,
          T,
          f.isString(_) ? _.trim() : _,
          w,
          g
        )) === !0 && h(T, w ? w.concat(_) : [_]);
      }), m.pop();
    }
  }
  if (!f.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
}
function Fr(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function fr(t, e) {
  this._pairs = [], t && vt(t, this, e);
}
const Jn = fr.prototype;
Jn.append = function(e, r) {
  this._pairs.push([e, r]);
};
Jn.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Fr);
  } : Fr;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function uo(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gn(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || uo, s = r && r.serialize;
  let o;
  if (s ? o = s(e, r) : o = f.isURLSearchParams(e) ? e.toString() : new fr(e, r).toString(n), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class co {
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
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
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
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    f.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const kr = co, Yn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, lo = typeof URLSearchParams < "u" ? URLSearchParams : fr, fo = typeof FormData < "u" ? FormData : null, ho = typeof Blob < "u" ? Blob : null, mo = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), po = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), J = {
  isBrowser: !0,
  classes: {
    URLSearchParams: lo,
    FormData: fo,
    Blob: ho
  },
  isStandardBrowserEnv: mo,
  isStandardBrowserWebWorkerEnv: po,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function yo(t, e) {
  return vt(t, new J.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return J.isNode && f.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function go(t) {
  return f.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function wo(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], e[o] = t[o];
  return e;
}
function Kn(t) {
  function e(r, n, s, o) {
    let i = r[o++];
    const a = Number.isFinite(+i), c = o >= r.length;
    return i = !i && f.isArray(s) ? s.length : i, c ? (f.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !a) : ((!s[i] || !f.isObject(s[i])) && (s[i] = []), e(r, n, s[i], o) && f.isArray(s[i]) && (s[i] = wo(s[i])), !a);
  }
  if (f.isFormData(t) && f.isFunction(t.entries)) {
    const r = {};
    return f.forEachEntry(t, (n, s) => {
      e(go(n), s, r, 0);
    }), r;
  }
  return null;
}
const To = {
  "Content-Type": void 0
};
function Oo(t, e, r) {
  if (f.isString(t))
    try {
      return (e || JSON.parse)(t), f.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const _t = {
  transitional: Yn,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = f.isObject(e);
    if (o && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
      return s && s ? JSON.stringify(Kn(e)) : e;
    if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e))
      return e;
    if (f.isArrayBufferView(e))
      return e.buffer;
    if (f.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return yo(e, this.formSerializer).toString();
      if ((a = f.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return vt(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), Oo(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || _t.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (e && f.isString(e) && (n && !this.responseType || s)) {
      const i = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? x.from(a, x.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
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
    FormData: J.classes.FormData,
    Blob: J.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
f.forEach(["delete", "get", "head"], function(e) {
  _t.headers[e] = {};
});
f.forEach(["post", "put", "patch"], function(e) {
  _t.headers[e] = f.merge(To);
});
const dr = _t, So = f.toObjectSet([
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
]), bo = (t) => {
  const e = {};
  let r, n, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || e[r] && So[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, $r = Symbol("internals");
function Re(t) {
  return t && String(t).trim().toLowerCase();
}
function ft(t) {
  return t === !1 || t == null ? t : f.isArray(t) ? t.map(ft) : String(t);
}
function Eo(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const vo = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function $t(t, e, r, n, s) {
  if (f.isFunction(n))
    return n.call(this, e, r);
  if (s && (e = r), !!f.isString(e)) {
    if (f.isString(n))
      return e.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(e);
  }
}
function _o(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function xo(t, e) {
  const r = f.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(s, o, i) {
        return this[n].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
class xt {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const s = this;
    function o(a, c, u) {
      const l = Re(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const m = f.findKey(s, l);
      (!m || s[m] === void 0 || u === !0 || u === void 0 && s[m] !== !1) && (s[m || c] = ft(a));
    }
    const i = (a, c) => f.forEach(a, (u, l) => o(u, l, c));
    return f.isPlainObject(e) || e instanceof this.constructor ? i(e, r) : f.isString(e) && (e = e.trim()) && !vo(e) ? i(bo(e), r) : e != null && o(r, e, n), this;
  }
  get(e, r) {
    if (e = Re(e), e) {
      const n = f.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Eo(s);
        if (f.isFunction(r))
          return r.call(this, s, n);
        if (f.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = Re(e), e) {
      const n = f.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || $t(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let s = !1;
    function o(i) {
      if (i = Re(i), i) {
        const a = f.findKey(n, i);
        a && (!r || $t(n, n[a], a, r)) && (delete n[a], s = !0);
      }
    }
    return f.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!e || $t(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const r = this, n = {};
    return f.forEach(this, (s, o) => {
      const i = f.findKey(n, o);
      if (i) {
        r[i] = ft(s), delete r[o];
        return;
      }
      const a = e ? _o(o) : String(o).trim();
      a !== o && delete r[o], r[a] = ft(s), n[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = e && f.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(e) {
    const n = (this[$r] = this[$r] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Re(i);
      n[a] || (xo(s, i), n[a] = !0);
    }
    return f.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.freezeMethods(xt.prototype);
f.freezeMethods(xt);
const Q = xt;
function Rt(t, e) {
  const r = this || dr, n = e || r, s = Q.from(n.headers);
  let o = n.data;
  return f.forEach(t, function(a) {
    o = a.call(r, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Qn(t) {
  return !!(t && t.__CANCEL__);
}
function Ke(t, e, r) {
  x.call(this, t ?? "canceled", x.ERR_CANCELED, e, r), this.name = "CanceledError";
}
f.inherits(Ke, x, {
  __CANCEL__: !0
});
function No(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new x(
    "Request failed with status code " + r.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Do = J.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, s, o, i, a) {
        const c = [];
        c.push(r + "=" + encodeURIComponent(n)), f.isNumber(s) && c.push("expires=" + new Date(s).toGMTString()), f.isString(o) && c.push("path=" + o), f.isString(i) && c.push("domain=" + i), a === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function Co(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Mo(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Xn(t, e) {
  return t && !Co(e) ? Mo(t, e) : e;
}
const Ao = J.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(o) {
      let i = o;
      return e && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
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
    return n = s(window.location.href), function(i) {
      const a = f.isString(i) ? s(i) : i;
      return a.protocol === n.protocol && a.host === n.host;
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
function Io(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Fo(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const u = Date.now(), l = n[o];
    i || (i = u), r[s] = c, n[s] = u;
    let m = o, g = 0;
    for (; m !== s; )
      g += r[m++], m = m % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), u - i < e)
      return;
    const h = l && u - l;
    return h ? Math.round(g * 1e3 / h) : void 0;
  };
}
function Rr(t, e) {
  let r = 0;
  const n = Fo(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, a = o - r, c = n(a), u = o <= i;
    r = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && i && u ? (i - o) / c : void 0,
      event: s
    };
    l[e ? "download" : "upload"] = !0, t(l);
  };
}
const ko = typeof XMLHttpRequest < "u", $o = ko && function(t) {
  return new Promise(function(r, n) {
    let s = t.data;
    const o = Q.from(t.headers).normalize(), i = t.responseType;
    let a;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(a), t.signal && t.signal.removeEventListener("abort", a);
    }
    f.isFormData(s) && (J.isStandardBrowserEnv || J.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let u = new XMLHttpRequest();
    if (t.auth) {
      const h = t.auth.username || "", d = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(h + ":" + d));
    }
    const l = Xn(t.baseURL, t.url);
    u.open(t.method.toUpperCase(), Gn(l, t.params, t.paramsSerializer), !0), u.timeout = t.timeout;
    function m() {
      if (!u)
        return;
      const h = Q.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), w = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: t,
        request: u
      };
      No(function(T) {
        r(T), c();
      }, function(T) {
        n(T), c();
      }, w), u = null;
    }
    if ("onloadend" in u ? u.onloadend = m : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, u.onabort = function() {
      u && (n(new x("Request aborted", x.ECONNABORTED, t, u)), u = null);
    }, u.onerror = function() {
      n(new x("Network Error", x.ERR_NETWORK, t, u)), u = null;
    }, u.ontimeout = function() {
      let d = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const w = t.transitional || Yn;
      t.timeoutErrorMessage && (d = t.timeoutErrorMessage), n(new x(
        d,
        w.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        t,
        u
      )), u = null;
    }, J.isStandardBrowserEnv) {
      const h = (t.withCredentials || Ao(l)) && t.xsrfCookieName && Do.read(t.xsrfCookieName);
      h && o.set(t.xsrfHeaderName, h);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in u && f.forEach(o.toJSON(), function(d, w) {
      u.setRequestHeader(w, d);
    }), f.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials), i && i !== "json" && (u.responseType = t.responseType), typeof t.onDownloadProgress == "function" && u.addEventListener("progress", Rr(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Rr(t.onUploadProgress)), (t.cancelToken || t.signal) && (a = (h) => {
      u && (n(!h || h.type ? new Ke(null, t, u) : h), u.abort(), u = null);
    }, t.cancelToken && t.cancelToken.subscribe(a), t.signal && (t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
    const g = Io(l);
    if (g && J.protocols.indexOf(g) === -1) {
      n(new x("Unsupported protocol " + g + ":", x.ERR_BAD_REQUEST, t));
      return;
    }
    u.send(s || null);
  });
}, dt = {
  http: io,
  xhr: $o
};
f.forEach(dt, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ro = {
  getAdapter: (t) => {
    t = f.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    for (let s = 0; s < e && (r = t[s], !(n = f.isString(r) ? dt[r.toLowerCase()] : r)); s++)
      ;
    if (!n)
      throw n === !1 ? new x(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        f.hasOwnProp(dt, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!f.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: dt
};
function Pt(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ke(null, t);
}
function Pr(t) {
  return Pt(t), t.headers = Q.from(t.headers), t.data = Rt.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ro.getAdapter(t.adapter || dr.adapter)(t).then(function(n) {
    return Pt(t), n.data = Rt.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Q.from(n.headers), n;
  }, function(n) {
    return Qn(n) || (Pt(t), n && n.response && (n.response.data = Rt.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Q.from(n.response.headers))), Promise.reject(n);
  });
}
const jr = (t) => t instanceof Q ? t.toJSON() : t;
function Ee(t, e) {
  e = e || {};
  const r = {};
  function n(u, l, m) {
    return f.isPlainObject(u) && f.isPlainObject(l) ? f.merge.call({ caseless: m }, u, l) : f.isPlainObject(l) ? f.merge({}, l) : f.isArray(l) ? l.slice() : l;
  }
  function s(u, l, m) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(u))
        return n(void 0, u, m);
    } else
      return n(u, l, m);
  }
  function o(u, l) {
    if (!f.isUndefined(l))
      return n(void 0, l);
  }
  function i(u, l) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, l);
  }
  function a(u, l, m) {
    if (m in e)
      return n(u, l);
    if (m in t)
      return n(void 0, u);
  }
  const c = {
    url: o,
    method: o,
    data: o,
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
    validateStatus: a,
    headers: (u, l) => s(jr(u), jr(l), !0)
  };
  return f.forEach(Object.keys(t).concat(Object.keys(e)), function(l) {
    const m = c[l] || s, g = m(t[l], e[l], l);
    f.isUndefined(g) && m !== a || (r[l] = g);
  }), r;
}
const es = "1.3.5", hr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  hr[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Lr = {};
hr.transitional = function(e, r, n) {
  function s(o, i) {
    return "[Axios v" + es + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, a) => {
    if (e === !1)
      throw new x(
        s(i, " has been removed" + (r ? " in " + r : "")),
        x.ERR_DEPRECATED
      );
    return r && !Lr[i] && (Lr[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(o, i, a) : !0;
  };
};
function Po(t, e, r) {
  if (typeof t != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], i = e[o];
    if (i) {
      const a = t[o], c = a === void 0 || i(a, o, t);
      if (c !== !0)
        throw new x("option " + o + " must be " + c, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new x("Unknown option " + o, x.ERR_BAD_OPTION);
  }
}
const Yt = {
  assertOptions: Po,
  validators: hr
}, re = Yt.validators;
class gt {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new kr(),
      response: new kr()
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
  request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Ee(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && Yt.assertOptions(n, {
      silentJSONParsing: re.transitional(re.boolean),
      forcedJSONParsing: re.transitional(re.boolean),
      clarifyTimeoutError: re.transitional(re.boolean)
    }, !1), s != null && (f.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Yt.assertOptions(s, {
      encode: re.function,
      serialize: re.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && f.merge(
      o.common,
      o[r.method]
    ), i && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), r.headers = Q.concat(i, o);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(r) === !1 || (c = c && w.synchronous, a.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let l, m = 0, g;
    if (!c) {
      const d = [Pr.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, u), g = d.length, l = Promise.resolve(r); m < g; )
        l = l.then(d[m++], d[m++]);
      return l;
    }
    g = a.length;
    let h = r;
    for (m = 0; m < g; ) {
      const d = a[m++], w = a[m++];
      try {
        h = d(h);
      } catch (S) {
        w.call(this, S);
        break;
      }
    }
    try {
      l = Pr.call(this, h);
    } catch (d) {
      return Promise.reject(d);
    }
    for (m = 0, g = u.length; m < g; )
      l = l.then(u[m++], u[m++]);
    return l;
  }
  getUri(e) {
    e = Ee(this.defaults, e);
    const r = Xn(e.baseURL, e.url);
    return Gn(r, e.params, e.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(e) {
  gt.prototype[e] = function(r, n) {
    return this.request(Ee(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(o, i, a) {
      return this.request(Ee(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  gt.prototype[e] = r(), gt.prototype[e + "Form"] = r(!0);
});
const ht = gt;
class mr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        n.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, e(function(o, i, a) {
      n.reason || (n.reason = new Ke(o, i, a), r(n.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new mr(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
const jo = mr;
function Lo(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Vo(t) {
  return f.isObject(t) && t.isAxiosError === !0;
}
const Kt = {
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
Object.entries(Kt).forEach(([t, e]) => {
  Kt[e] = t;
});
const Uo = Kt;
function ts(t) {
  const e = new ht(t), r = Rn(ht.prototype.request, e);
  return f.extend(r, ht.prototype, e, { allOwnKeys: !0 }), f.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(s) {
    return ts(Ee(t, s));
  }, r;
}
const $ = ts(dr);
$.Axios = ht;
$.CanceledError = Ke;
$.CancelToken = jo;
$.isCancel = Qn;
$.VERSION = es;
$.toFormData = vt;
$.AxiosError = x;
$.Cancel = $.CanceledError;
$.all = function(e) {
  return Promise.all(e);
};
$.spread = Lo;
$.isAxiosError = Vo;
$.mergeConfig = Ee;
$.AxiosHeaders = Q;
$.formToJSON = (t) => Kn(f.isHTMLForm(t) ? new FormData(t) : t);
$.HttpStatusCode = Uo;
$.default = $;
const zo = $;
function Ho() {
  this.__data__ = [], this.size = 0;
}
function rs(t, e) {
  return t === e || t !== t && e !== e;
}
function Nt(t, e) {
  for (var r = t.length; r--; )
    if (rs(t[r][0], e))
      return r;
  return -1;
}
var qo = Array.prototype, Zo = qo.splice;
function Bo(t) {
  var e = this.__data__, r = Nt(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Zo.call(e, r, 1), --this.size, !0;
}
function Wo(t) {
  var e = this.__data__, r = Nt(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Jo(t) {
  return Nt(this.__data__, t) > -1;
}
function Go(t, e) {
  var r = this.__data__, n = Nt(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function ee(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
ee.prototype.clear = Ho;
ee.prototype.delete = Bo;
ee.prototype.get = Wo;
ee.prototype.has = Jo;
ee.prototype.set = Go;
function Yo() {
  this.__data__ = new ee(), this.size = 0;
}
function Ko(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Qo(t) {
  return this.__data__.get(t);
}
function Xo(t) {
  return this.__data__.has(t);
}
var ea = typeof global == "object" && global && global.Object === Object && global;
const ns = ea;
var ta = typeof self == "object" && self && self.Object === Object && self, ra = ns || ta || Function("return this")();
const Y = ra;
var na = Y.Symbol;
const ve = na;
var ss = Object.prototype, sa = ss.hasOwnProperty, ia = ss.toString, Pe = ve ? ve.toStringTag : void 0;
function oa(t) {
  var e = sa.call(t, Pe), r = t[Pe];
  try {
    t[Pe] = void 0;
    var n = !0;
  } catch {
  }
  var s = ia.call(t);
  return n && (e ? t[Pe] = r : delete t[Pe]), s;
}
var aa = Object.prototype, ua = aa.toString;
function ca(t) {
  return ua.call(t);
}
var la = "[object Null]", fa = "[object Undefined]", Vr = ve ? ve.toStringTag : void 0;
function Qe(t) {
  return t == null ? t === void 0 ? fa : la : Vr && Vr in Object(t) ? oa(t) : ca(t);
}
function Xe(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var da = "[object AsyncFunction]", ha = "[object Function]", ma = "[object GeneratorFunction]", pa = "[object Proxy]";
function is(t) {
  if (!Xe(t))
    return !1;
  var e = Qe(t);
  return e == ha || e == ma || e == da || e == pa;
}
var ya = Y["__core-js_shared__"];
const jt = ya;
var Ur = function() {
  var t = /[^.]+$/.exec(jt && jt.keys && jt.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function ga(t) {
  return !!Ur && Ur in t;
}
var wa = Function.prototype, Ta = wa.toString;
function ge(t) {
  if (t != null) {
    try {
      return Ta.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Oa = /[\\^$.*+?()[\]{}|]/g, Sa = /^\[object .+?Constructor\]$/, ba = Function.prototype, Ea = Object.prototype, va = ba.toString, _a = Ea.hasOwnProperty, xa = RegExp(
  "^" + va.call(_a).replace(Oa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Na(t) {
  if (!Xe(t) || ga(t))
    return !1;
  var e = is(t) ? xa : Sa;
  return e.test(ge(t));
}
function Da(t, e) {
  return t == null ? void 0 : t[e];
}
function we(t, e) {
  var r = Da(t, e);
  return Na(r) ? r : void 0;
}
var Ca = we(Y, "Map");
const Je = Ca;
var Ma = we(Object, "create");
const Ge = Ma;
function Aa() {
  this.__data__ = Ge ? Ge(null) : {}, this.size = 0;
}
function Ia(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Fa = "__lodash_hash_undefined__", ka = Object.prototype, $a = ka.hasOwnProperty;
function Ra(t) {
  var e = this.__data__;
  if (Ge) {
    var r = e[t];
    return r === Fa ? void 0 : r;
  }
  return $a.call(e, t) ? e[t] : void 0;
}
var Pa = Object.prototype, ja = Pa.hasOwnProperty;
function La(t) {
  var e = this.__data__;
  return Ge ? e[t] !== void 0 : ja.call(e, t);
}
var Va = "__lodash_hash_undefined__";
function Ua(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = Ge && e === void 0 ? Va : e, this;
}
function ye(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
ye.prototype.clear = Aa;
ye.prototype.delete = Ia;
ye.prototype.get = Ra;
ye.prototype.has = La;
ye.prototype.set = Ua;
function za() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (Je || ee)(),
    string: new ye()
  };
}
function Ha(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Dt(t, e) {
  var r = t.__data__;
  return Ha(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function qa(t) {
  var e = Dt(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Za(t) {
  return Dt(this, t).get(t);
}
function Ba(t) {
  return Dt(this, t).has(t);
}
function Wa(t, e) {
  var r = Dt(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function De(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
De.prototype.clear = za;
De.prototype.delete = qa;
De.prototype.get = Za;
De.prototype.has = Ba;
De.prototype.set = Wa;
var Ja = 200;
function Ga(t, e) {
  var r = this.__data__;
  if (r instanceof ee) {
    var n = r.__data__;
    if (!Je || n.length < Ja - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new De(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function Ce(t) {
  var e = this.__data__ = new ee(t);
  this.size = e.size;
}
Ce.prototype.clear = Yo;
Ce.prototype.delete = Ko;
Ce.prototype.get = Qo;
Ce.prototype.has = Xo;
Ce.prototype.set = Ga;
function Ya(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
var Ka = function() {
  try {
    var t = we(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const zr = Ka;
function os(t, e, r) {
  e == "__proto__" && zr ? zr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
var Qa = Object.prototype, Xa = Qa.hasOwnProperty;
function as(t, e, r) {
  var n = t[e];
  (!(Xa.call(t, e) && rs(n, r)) || r === void 0 && !(e in t)) && os(t, e, r);
}
function Ct(t, e, r, n) {
  var s = !r;
  r || (r = {});
  for (var o = -1, i = e.length; ++o < i; ) {
    var a = e[o], c = n ? n(r[a], t[a], a, r, t) : void 0;
    c === void 0 && (c = t[a]), s ? os(r, a, c) : as(r, a, c);
  }
  return r;
}
function eu(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
function et(t) {
  return t != null && typeof t == "object";
}
var tu = "[object Arguments]";
function Hr(t) {
  return et(t) && Qe(t) == tu;
}
var us = Object.prototype, ru = us.hasOwnProperty, nu = us.propertyIsEnumerable, su = Hr(function() {
  return arguments;
}()) ? Hr : function(t) {
  return et(t) && ru.call(t, "callee") && !nu.call(t, "callee");
};
const iu = su;
var ou = Array.isArray;
const pr = ou;
function au() {
  return !1;
}
var cs = typeof exports == "object" && exports && !exports.nodeType && exports, qr = cs && typeof module == "object" && module && !module.nodeType && module, uu = qr && qr.exports === cs, Zr = uu ? Y.Buffer : void 0, cu = Zr ? Zr.isBuffer : void 0, lu = cu || au;
const ls = lu;
var fu = 9007199254740991, du = /^(?:0|[1-9]\d*)$/;
function hu(t, e) {
  var r = typeof t;
  return e = e ?? fu, !!e && (r == "number" || r != "symbol" && du.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var mu = 9007199254740991;
function fs(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= mu;
}
var pu = "[object Arguments]", yu = "[object Array]", gu = "[object Boolean]", wu = "[object Date]", Tu = "[object Error]", Ou = "[object Function]", Su = "[object Map]", bu = "[object Number]", Eu = "[object Object]", vu = "[object RegExp]", _u = "[object Set]", xu = "[object String]", Nu = "[object WeakMap]", Du = "[object ArrayBuffer]", Cu = "[object DataView]", Mu = "[object Float32Array]", Au = "[object Float64Array]", Iu = "[object Int8Array]", Fu = "[object Int16Array]", ku = "[object Int32Array]", $u = "[object Uint8Array]", Ru = "[object Uint8ClampedArray]", Pu = "[object Uint16Array]", ju = "[object Uint32Array]", C = {};
C[Mu] = C[Au] = C[Iu] = C[Fu] = C[ku] = C[$u] = C[Ru] = C[Pu] = C[ju] = !0;
C[pu] = C[yu] = C[Du] = C[gu] = C[Cu] = C[wu] = C[Tu] = C[Ou] = C[Su] = C[bu] = C[Eu] = C[vu] = C[_u] = C[xu] = C[Nu] = !1;
function Lu(t) {
  return et(t) && fs(t.length) && !!C[Qe(t)];
}
function yr(t) {
  return function(e) {
    return t(e);
  };
}
var ds = typeof exports == "object" && exports && !exports.nodeType && exports, qe = ds && typeof module == "object" && module && !module.nodeType && module, Vu = qe && qe.exports === ds, Lt = Vu && ns.process, Uu = function() {
  try {
    var t = qe && qe.require && qe.require("util").types;
    return t || Lt && Lt.binding && Lt.binding("util");
  } catch {
  }
}();
const _e = Uu;
var Br = _e && _e.isTypedArray, zu = Br ? yr(Br) : Lu;
const Hu = zu;
var qu = Object.prototype, Zu = qu.hasOwnProperty;
function hs(t, e) {
  var r = pr(t), n = !r && iu(t), s = !r && !n && ls(t), o = !r && !n && !s && Hu(t), i = r || n || s || o, a = i ? eu(t.length, String) : [], c = a.length;
  for (var u in t)
    (e || Zu.call(t, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    hu(u, c))) && a.push(u);
  return a;
}
var Bu = Object.prototype;
function gr(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Bu;
  return t === r;
}
function ms(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Wu = ms(Object.keys, Object);
const Ju = Wu;
var Gu = Object.prototype, Yu = Gu.hasOwnProperty;
function Ku(t) {
  if (!gr(t))
    return Ju(t);
  var e = [];
  for (var r in Object(t))
    Yu.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function ps(t) {
  return t != null && fs(t.length) && !is(t);
}
function wr(t) {
  return ps(t) ? hs(t) : Ku(t);
}
function Qu(t, e) {
  return t && Ct(e, wr(e), t);
}
function Xu(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var ec = Object.prototype, tc = ec.hasOwnProperty;
function rc(t) {
  if (!Xe(t))
    return Xu(t);
  var e = gr(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !tc.call(t, n)) || r.push(n);
  return r;
}
function Tr(t) {
  return ps(t) ? hs(t, !0) : rc(t);
}
function nc(t, e) {
  return t && Ct(e, Tr(e), t);
}
var ys = typeof exports == "object" && exports && !exports.nodeType && exports, Wr = ys && typeof module == "object" && module && !module.nodeType && module, sc = Wr && Wr.exports === ys, Jr = sc ? Y.Buffer : void 0, Gr = Jr ? Jr.allocUnsafe : void 0;
function ic(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = Gr ? Gr(r) : new t.constructor(r);
  return t.copy(n), n;
}
function oc(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
function ac(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, o = []; ++r < n; ) {
    var i = t[r];
    e(i, r, t) && (o[s++] = i);
  }
  return o;
}
function gs() {
  return [];
}
var uc = Object.prototype, cc = uc.propertyIsEnumerable, Yr = Object.getOwnPropertySymbols, lc = Yr ? function(t) {
  return t == null ? [] : (t = Object(t), ac(Yr(t), function(e) {
    return cc.call(t, e);
  }));
} : gs;
const Or = lc;
function fc(t, e) {
  return Ct(t, Or(t), e);
}
function ws(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
var dc = ms(Object.getPrototypeOf, Object);
const Ts = dc;
var hc = Object.getOwnPropertySymbols, mc = hc ? function(t) {
  for (var e = []; t; )
    ws(e, Or(t)), t = Ts(t);
  return e;
} : gs;
const Os = mc;
function pc(t, e) {
  return Ct(t, Os(t), e);
}
function Ss(t, e, r) {
  var n = e(t);
  return pr(t) ? n : ws(n, r(t));
}
function yc(t) {
  return Ss(t, wr, Or);
}
function gc(t) {
  return Ss(t, Tr, Os);
}
var wc = we(Y, "DataView");
const Qt = wc;
var Tc = we(Y, "Promise");
const Xt = Tc;
var Oc = we(Y, "Set");
const er = Oc;
var Sc = we(Y, "WeakMap");
const tr = Sc;
var Kr = "[object Map]", bc = "[object Object]", Qr = "[object Promise]", Xr = "[object Set]", en = "[object WeakMap]", tn = "[object DataView]", Ec = ge(Qt), vc = ge(Je), _c = ge(Xt), xc = ge(er), Nc = ge(tr), fe = Qe;
(Qt && fe(new Qt(new ArrayBuffer(1))) != tn || Je && fe(new Je()) != Kr || Xt && fe(Xt.resolve()) != Qr || er && fe(new er()) != Xr || tr && fe(new tr()) != en) && (fe = function(t) {
  var e = Qe(t), r = e == bc ? t.constructor : void 0, n = r ? ge(r) : "";
  if (n)
    switch (n) {
      case Ec:
        return tn;
      case vc:
        return Kr;
      case _c:
        return Qr;
      case xc:
        return Xr;
      case Nc:
        return en;
    }
  return e;
});
const Sr = fe;
var Dc = Object.prototype, Cc = Dc.hasOwnProperty;
function Mc(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && Cc.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var Ac = Y.Uint8Array;
const rn = Ac;
function br(t) {
  var e = new t.constructor(t.byteLength);
  return new rn(e).set(new rn(t)), e;
}
function Ic(t, e) {
  var r = e ? br(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Fc = /\w*$/;
function kc(t) {
  var e = new t.constructor(t.source, Fc.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var nn = ve ? ve.prototype : void 0, sn = nn ? nn.valueOf : void 0;
function $c(t) {
  return sn ? Object(sn.call(t)) : {};
}
function Rc(t, e) {
  var r = e ? br(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Pc = "[object Boolean]", jc = "[object Date]", Lc = "[object Map]", Vc = "[object Number]", Uc = "[object RegExp]", zc = "[object Set]", Hc = "[object String]", qc = "[object Symbol]", Zc = "[object ArrayBuffer]", Bc = "[object DataView]", Wc = "[object Float32Array]", Jc = "[object Float64Array]", Gc = "[object Int8Array]", Yc = "[object Int16Array]", Kc = "[object Int32Array]", Qc = "[object Uint8Array]", Xc = "[object Uint8ClampedArray]", el = "[object Uint16Array]", tl = "[object Uint32Array]";
function rl(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case Zc:
      return br(t);
    case Pc:
    case jc:
      return new n(+t);
    case Bc:
      return Ic(t, r);
    case Wc:
    case Jc:
    case Gc:
    case Yc:
    case Kc:
    case Qc:
    case Xc:
    case el:
    case tl:
      return Rc(t, r);
    case Lc:
      return new n();
    case Vc:
    case Hc:
      return new n(t);
    case Uc:
      return kc(t);
    case zc:
      return new n();
    case qc:
      return $c(t);
  }
}
var on = Object.create, nl = function() {
  function t() {
  }
  return function(e) {
    if (!Xe(e))
      return {};
    if (on)
      return on(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
const sl = nl;
function il(t) {
  return typeof t.constructor == "function" && !gr(t) ? sl(Ts(t)) : {};
}
var ol = "[object Map]";
function al(t) {
  return et(t) && Sr(t) == ol;
}
var an = _e && _e.isMap, ul = an ? yr(an) : al;
const cl = ul;
var ll = "[object Set]";
function fl(t) {
  return et(t) && Sr(t) == ll;
}
var un = _e && _e.isSet, dl = un ? yr(un) : fl;
const hl = dl;
var ml = 1, pl = 2, yl = 4, bs = "[object Arguments]", gl = "[object Array]", wl = "[object Boolean]", Tl = "[object Date]", Ol = "[object Error]", Es = "[object Function]", Sl = "[object GeneratorFunction]", bl = "[object Map]", El = "[object Number]", vs = "[object Object]", vl = "[object RegExp]", _l = "[object Set]", xl = "[object String]", Nl = "[object Symbol]", Dl = "[object WeakMap]", Cl = "[object ArrayBuffer]", Ml = "[object DataView]", Al = "[object Float32Array]", Il = "[object Float64Array]", Fl = "[object Int8Array]", kl = "[object Int16Array]", $l = "[object Int32Array]", Rl = "[object Uint8Array]", Pl = "[object Uint8ClampedArray]", jl = "[object Uint16Array]", Ll = "[object Uint32Array]", D = {};
D[bs] = D[gl] = D[Cl] = D[Ml] = D[wl] = D[Tl] = D[Al] = D[Il] = D[Fl] = D[kl] = D[$l] = D[bl] = D[El] = D[vs] = D[vl] = D[_l] = D[xl] = D[Nl] = D[Rl] = D[Pl] = D[jl] = D[Ll] = !0;
D[Ol] = D[Es] = D[Dl] = !1;
function mt(t, e, r, n, s, o) {
  var i, a = e & ml, c = e & pl, u = e & yl;
  if (r && (i = s ? r(t, n, s, o) : r(t)), i !== void 0)
    return i;
  if (!Xe(t))
    return t;
  var l = pr(t);
  if (l) {
    if (i = Mc(t), !a)
      return oc(t, i);
  } else {
    var m = Sr(t), g = m == Es || m == Sl;
    if (ls(t))
      return ic(t, a);
    if (m == vs || m == bs || g && !s) {
      if (i = c || g ? {} : il(t), !a)
        return c ? pc(t, nc(i, t)) : fc(t, Qu(i, t));
    } else {
      if (!D[m])
        return s ? t : {};
      i = rl(t, m, a);
    }
  }
  o || (o = new Ce());
  var h = o.get(t);
  if (h)
    return h;
  o.set(t, i), hl(t) ? t.forEach(function(S) {
    i.add(mt(S, e, r, S, t, o));
  }) : cl(t) && t.forEach(function(S, T) {
    i.set(T, mt(S, e, r, T, t, o));
  });
  var d = u ? c ? gc : yc : c ? Tr : wr, w = l ? void 0 : d(t);
  return Ya(w || t, function(S, T) {
    w && (T = S, S = t[T]), as(i, T, mt(S, e, r, T, t, o));
  }), i;
}
var Vl = 1, Ul = 4;
function _s(t) {
  return mt(t, Vl | Ul);
}
class sh {
  constructor(e, r) {
    r = r || { envParams: { axios: zo } }, this.fnString = e, this.fn = zl(e), this.userParamsSchema = JSON.stringify({}), this.result = [], this.envParams = r.envParams;
  }
  runOne(e, r = 1e4) {
    const n = Date.now();
    return new Promise((s) => {
      const o = setTimeout(() => {
        s({
          data: null,
          code: 1,
          msg: "timeout",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: e,
          executionTime: r
        });
      }, r);
      this.fn(this.envParams, e).then((i) => {
        clearTimeout(o), s({
          data: i,
          code: 0,
          msg: "success",
          isSuccess: !0,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: e,
          executionTime: Date.now() - n
        });
      }).catch((i) => {
        clearTimeout(o), s({
          data: i,
          code: (i == null ? void 0 : i.code) || 1,
          msg: (i == null ? void 0 : i.message) || "error",
          isSuccess: !1,
          date: (/* @__PURE__ */ new Date()).getTime(),
          userParams: e,
          executionTime: Date.now() - n
        });
      });
    });
  }
  async run(e, r) {
    const n = [], { allUserParams: s = [], concurrency: o = 1 } = e;
    for (let i = 0; i < s.length; i = i + o) {
      const a = await Promise.all(
        s.slice(i, i + o).map((c) => this.runOne(_s(c), e.timeout))
      );
      r && r(a), n.push(...a);
    }
    return this.result.push(...n), n;
  }
  resultCount() {
    return this.result.length;
  }
  successCount() {
    return this.result.filter((e) => e.isSuccess).length;
  }
  failCount() {
    return this.result.filter((e) => !e.isSuccess).length;
  }
  resultSize() {
    return JSON.stringify(this.result).length;
  }
}
const zl = (t) => Function(`return ${t}`)(), ih = (t) => {
  const { params1: e, params2: r, commonParams: n } = t, s = [];
  for (let o = 0; o < e.length; o++)
    for (let i = 0; i < r.length; i++)
      s.push({
        ...n,
        ...e[o],
        ...r[i]
      });
  return s;
}, oh = (t, e) => {
  const { start: r, end: n } = e, s = [];
  for (let o = r; o <= n; o++) {
    const i = _s(t);
    i.page = o, s.push(i);
  }
  return s;
}, Hl = {
  name: "xx爬虫",
  description: "爬取xx网站的xx数据",
  code: `async function fn(env, user) {
    
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
  ),
  language: "javascript"
}, ql = {
  name: "xx爬虫",
  description: "爬取xx网站的xx数据",
  code: `# encoding:utf-8
import requests
import re
def deepSearchJSON(jsonObj, key):
    results = []
    def search(obj):
        for prop in obj:
            if prop == key:
                results.append(re.sub('[^一-龥]', '', str(obj[prop])))
            elif isinstance(obj[prop], dict):
                search(obj[prop])
            elif isinstance(obj[prop], list):
                for item in obj[prop]:
                    if isinstance(item, dict):
                        search(item)
    search(jsonObj)
    return results

def fn(q, page):
    url = 'https://m.weibo.cn/api/container/getIndex'
    params = {
        'containerid': '100103type=1&q=' + q,
        'page_type': 'searchall',
        'page': page
    }

    response = requests.get(url, params=params)
    response_json = response.json()
    return  deepSearchJSON(response_json['data'], 'text')

# 调用爬虫函数
data = fn(params.get('q'),params.get('page'))
  `,
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
  ),
  language: "python"
}, ah = {
  javascript: Hl,
  python: ql
};
function Zl(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      if (this instanceof n) {
        var s = [null];
        s.push.apply(s, arguments);
        var o = Function.bind.apply(e, s);
        return new o();
      }
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
class Te extends Error {
}
class Bl extends Te {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class Wl extends Te {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Jl extends Te {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Ue extends Te {
}
class xs extends Te {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class z extends Te {
}
class ne extends Te {
  constructor() {
    super("Zone is an abstract class");
  }
}
const p = "numeric", W = "short", L = "long", wt = {
  year: p,
  month: p,
  day: p
}, Ns = {
  year: p,
  month: W,
  day: p
}, Gl = {
  year: p,
  month: W,
  day: p,
  weekday: W
}, Ds = {
  year: p,
  month: L,
  day: p
}, Cs = {
  year: p,
  month: L,
  day: p,
  weekday: L
}, Ms = {
  hour: p,
  minute: p
}, As = {
  hour: p,
  minute: p,
  second: p
}, Is = {
  hour: p,
  minute: p,
  second: p,
  timeZoneName: W
}, Fs = {
  hour: p,
  minute: p,
  second: p,
  timeZoneName: L
}, ks = {
  hour: p,
  minute: p,
  hourCycle: "h23"
}, $s = {
  hour: p,
  minute: p,
  second: p,
  hourCycle: "h23"
}, Rs = {
  hour: p,
  minute: p,
  second: p,
  hourCycle: "h23",
  timeZoneName: W
}, Ps = {
  hour: p,
  minute: p,
  second: p,
  hourCycle: "h23",
  timeZoneName: L
}, js = {
  year: p,
  month: p,
  day: p,
  hour: p,
  minute: p
}, Ls = {
  year: p,
  month: p,
  day: p,
  hour: p,
  minute: p,
  second: p
}, Vs = {
  year: p,
  month: W,
  day: p,
  hour: p,
  minute: p
}, Us = {
  year: p,
  month: W,
  day: p,
  hour: p,
  minute: p,
  second: p
}, Yl = {
  year: p,
  month: W,
  day: p,
  weekday: W,
  hour: p,
  minute: p
}, zs = {
  year: p,
  month: L,
  day: p,
  hour: p,
  minute: p,
  timeZoneName: W
}, Hs = {
  year: p,
  month: L,
  day: p,
  hour: p,
  minute: p,
  second: p,
  timeZoneName: W
}, qs = {
  year: p,
  month: L,
  day: p,
  weekday: L,
  hour: p,
  minute: p,
  timeZoneName: L
}, Zs = {
  year: p,
  month: L,
  day: p,
  weekday: L,
  hour: p,
  minute: p,
  second: p,
  timeZoneName: L
};
class Me {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ne();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ne();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ne();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, r) {
    throw new ne();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, r) {
    throw new ne();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new ne();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new ne();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ne();
  }
}
let Vt = null;
class tt extends Me {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Vt === null && (Vt = new tt()), Vt;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, {
    format: r,
    locale: n
  }) {
    return Js(e, r, n);
  }
  /** @override **/
  formatOffset(e, r) {
    return Be(this.offset(e), r);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let pt = {};
function Kl(t) {
  return pt[t] || (pt[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), pt[t];
}
const Ql = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Xl(t, e) {
  const r = t.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, s, o, i, a, c, u, l] = n;
  return [i, s, o, a, c, u, l];
}
function ef(t, e) {
  const r = t.formatToParts(e), n = [];
  for (let s = 0; s < r.length; s++) {
    const {
      type: o,
      value: i
    } = r[s], a = Ql[o];
    o === "era" ? n[a] = i : E(a) || (n[a] = parseInt(i, 10));
  }
  return n;
}
let it = {};
class G extends Me {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return it[e] || (it[e] = new G(e)), it[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    it = {}, pt = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: e
      }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = G.isValidZone(e);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, {
    format: r,
    locale: n
  }) {
    return Js(e, r, n, this.name);
  }
  /** @override **/
  formatOffset(e, r) {
    return Be(this.offset(e), r);
  }
  /** @override **/
  offset(e) {
    const r = new Date(e);
    if (isNaN(r))
      return NaN;
    const n = Kl(this.name);
    let [s, o, i, a, c, u, l] = n.formatToParts ? ef(n, r) : Xl(n, r);
    a === "BC" && (s = -Math.abs(s) + 1);
    const g = _r({
      year: s,
      month: o,
      day: i,
      hour: c === 24 ? 0 : c,
      minute: u,
      second: l,
      millisecond: 0
    });
    let h = +r;
    const d = h % 1e3;
    return h -= d >= 0 ? d : 1e3 + d, (g - h) / (60 * 1e3);
  }
  /** @override **/
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let cn = {};
function tf(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = cn[r];
  return n || (n = new Intl.ListFormat(t, e), cn[r] = n), n;
}
let rr = {};
function nr(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = rr[r];
  return n || (n = new Intl.DateTimeFormat(t, e), rr[r] = n), n;
}
let sr = {};
function rf(t, e = {}) {
  const r = JSON.stringify([t, e]);
  let n = sr[r];
  return n || (n = new Intl.NumberFormat(t, e), sr[r] = n), n;
}
let ir = {};
function nf(t, e = {}) {
  const {
    base: r,
    ...n
  } = e, s = JSON.stringify([t, n]);
  let o = ir[s];
  return o || (o = new Intl.RelativeTimeFormat(t, e), ir[s] = o), o;
}
let ze = null;
function sf() {
  return ze || (ze = new Intl.DateTimeFormat().resolvedOptions().locale, ze);
}
function of(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const r = t.indexOf("-u-");
  if (r === -1)
    return [t];
  {
    let n, s;
    try {
      n = nr(t).resolvedOptions(), s = t;
    } catch {
      const c = t.substring(0, r);
      n = nr(c).resolvedOptions(), s = c;
    }
    const {
      numberingSystem: o,
      calendar: i
    } = n;
    return [s, o, i];
  }
}
function af(t, e, r) {
  return (r || e) && (t.includes("-u-") || (t += "-u"), r && (t += `-ca-${r}`), e && (t += `-nu-${e}`)), t;
}
function uf(t) {
  const e = [];
  for (let r = 1; r <= 12; r++) {
    const n = b.utc(2016, r, 1);
    e.push(t(n));
  }
  return e;
}
function cf(t) {
  const e = [];
  for (let r = 1; r <= 7; r++) {
    const n = b.utc(2016, 11, 13 + r);
    e.push(t(n));
  }
  return e;
}
function ot(t, e, r, n, s) {
  const o = t.listingMode(r);
  return o === "error" ? null : o === "en" ? n(e) : s(e);
}
function lf(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class ff {
  constructor(e, r, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const {
      padTo: s,
      floor: o,
      ...i
    } = n;
    if (!r || Object.keys(i).length > 0) {
      const a = {
        useGrouping: !1,
        ...n
      };
      n.padTo > 0 && (a.minimumIntegerDigits = n.padTo), this.inf = rf(e, a);
    }
  }
  format(e) {
    if (this.inf) {
      const r = this.floor ? Math.floor(e) : e;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(e) : vr(e, 3);
      return k(r, this.padTo);
    }
  }
}
class df {
  constructor(e, r, n) {
    this.opts = n, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const i = -1 * (e.offset / 60), a = i >= 0 ? `Etc/GMT+${i}` : `Etc/GMT${i}`;
      e.offset !== 0 && G.create(a).valid ? (s = a, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({
        minutes: e.offset
      }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({
        minutes: e.offset
      }), this.originalZone = e.zone);
    const o = {
      ...this.opts
    };
    o.timeZone = o.timeZone || s, this.dtf = nr(r, o);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({
      value: e
    }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((r) => {
      if (r.type === "timeZoneName") {
        const n = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...r,
          value: n
        };
      } else
        return r;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class hf {
  constructor(e, r, n) {
    this.opts = {
      style: "long",
      ...n
    }, !r && Ws() && (this.rtf = nf(e, n));
  }
  format(e, r) {
    return this.rtf ? this.rtf.format(e, r) : Cf(r, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, r) {
    return this.rtf ? this.rtf.formatToParts(e, r) : [];
  }
}
class M {
  static fromOpts(e) {
    return M.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
  }
  static create(e, r, n, s = !1) {
    const o = e || F.defaultLocale, i = o || (s ? "en-US" : sf()), a = r || F.defaultNumberingSystem, c = n || F.defaultOutputCalendar;
    return new M(i, a, c, o);
  }
  static resetCache() {
    ze = null, rr = {}, sr = {}, ir = {};
  }
  static fromObject({
    locale: e,
    numberingSystem: r,
    outputCalendar: n
  } = {}) {
    return M.create(e, r, n);
  }
  constructor(e, r, n, s) {
    const [o, i, a] = of(e);
    this.locale = o, this.numberingSystem = r || i || null, this.outputCalendar = n || a || null, this.intl = af(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
      format: {},
      standalone: {}
    }, this.monthsCache = {
      format: {},
      standalone: {}
    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = lf(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && r ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : M.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, e.defaultToEN || !1);
  }
  redefaultToEN(e = {}) {
    return this.clone({
      ...e,
      defaultToEN: !0
    });
  }
  redefaultToSystem(e = {}) {
    return this.clone({
      ...e,
      defaultToEN: !1
    });
  }
  months(e, r = !1, n = !0) {
    return ot(this, e, n, Ks, () => {
      const s = r ? {
        month: e,
        day: "numeric"
      } : {
        month: e
      }, o = r ? "format" : "standalone";
      return this.monthsCache[o][e] || (this.monthsCache[o][e] = uf((i) => this.extract(i, s, "month"))), this.monthsCache[o][e];
    });
  }
  weekdays(e, r = !1, n = !0) {
    return ot(this, e, n, ei, () => {
      const s = r ? {
        weekday: e,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: e
      }, o = r ? "format" : "standalone";
      return this.weekdaysCache[o][e] || (this.weekdaysCache[o][e] = cf((i) => this.extract(i, s, "weekday"))), this.weekdaysCache[o][e];
    });
  }
  meridiems(e = !0) {
    return ot(this, void 0, e, () => ti, () => {
      if (!this.meridiemCache) {
        const r = {
          hour: "numeric",
          hourCycle: "h12"
        };
        this.meridiemCache = [b.utc(2016, 11, 13, 9), b.utc(2016, 11, 13, 19)].map((n) => this.extract(n, r, "dayperiod"));
      }
      return this.meridiemCache;
    });
  }
  eras(e, r = !0) {
    return ot(this, e, r, ri, () => {
      const n = {
        era: e
      };
      return this.eraCache[e] || (this.eraCache[e] = [b.utc(-40, 1, 1), b.utc(2017, 1, 1)].map((s) => this.extract(s, n, "era"))), this.eraCache[e];
    });
  }
  extract(e, r, n) {
    const s = this.dtFormatter(e, r), o = s.formatToParts(), i = o.find((a) => a.type.toLowerCase() === n);
    return i ? i.value : null;
  }
  numberFormatter(e = {}) {
    return new ff(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, r = {}) {
    return new df(e, this.intl, r);
  }
  relFormatter(e = {}) {
    return new hf(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return tf(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let Ut = null;
class P extends Me {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ut === null && (Ut = new P(0)), Ut;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? P.utcInstance : new P(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const r = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r)
        return new P(At(r[1], r[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Be(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Be(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, r) {
    return Be(this.fixed, r);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class Bs extends Me {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function oe(t, e) {
  if (E(t) || t === null)
    return e;
  if (t instanceof Me)
    return t;
  if (mf(t)) {
    const r = t.toLowerCase();
    return r === "default" ? e : r === "local" || r === "system" ? tt.instance : r === "utc" || r === "gmt" ? P.utcInstance : P.parseSpecifier(r) || G.create(t);
  } else
    return me(t) ? P.instance(t) : typeof t == "object" && t.offset && typeof t.offset == "number" ? t : new Bs(t);
}
let ln = () => Date.now(), fn = "system", dn = null, hn = null, mn = null, pn = 60, yn;
class F {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return ln;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    ln = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    fn = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return oe(fn, tt.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return dn;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    dn = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return hn;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    hn = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return mn;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    mn = e;
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return pn;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
   */
  static set twoDigitCutoffYear(e) {
    pn = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return yn;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    yn = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    M.resetCache(), G.resetCache();
  }
}
function E(t) {
  return typeof t > "u";
}
function me(t) {
  return typeof t == "number";
}
function Mt(t) {
  return typeof t == "number" && t % 1 === 0;
}
function mf(t) {
  return typeof t == "string";
}
function pf(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Ws() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function yf(t) {
  return Array.isArray(t) ? t : [t];
}
function gn(t, e, r) {
  if (t.length !== 0)
    return t.reduce((n, s) => {
      const o = [e(s), s];
      return n && r(n[0], o[0]) === n[0] ? n : o;
    }, null)[1];
}
function gf(t, e) {
  return e.reduce((r, n) => (r[n] = t[n], r), {});
}
function xe(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function K(t, e, r) {
  return Mt(t) && t >= e && t <= r;
}
function wf(t, e) {
  return t - e * Math.floor(t / e);
}
function k(t, e = 2) {
  const r = t < 0;
  let n;
  return r ? n = "-" + ("" + -t).padStart(e, "0") : n = ("" + t).padStart(e, "0"), n;
}
function ie(t) {
  if (!(E(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function ce(t) {
  if (!(E(t) || t === null || t === ""))
    return parseFloat(t);
}
function Er(t) {
  if (!(E(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function vr(t, e, r = !1) {
  const n = 10 ** e;
  return (r ? Math.trunc : Math.round)(t * n) / n;
}
function rt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Ze(t) {
  return rt(t) ? 366 : 365;
}
function Tt(t, e) {
  const r = wf(e - 1, 12) + 1, n = t + (e - r) / 12;
  return r === 2 ? rt(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
}
function _r(t) {
  let e = Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, t.second, t.millisecond);
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function Ot(t) {
  const e = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7, r = t - 1, n = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7;
  return e === 4 || n === 3 ? 53 : 52;
}
function or(t) {
  return t > 99 ? t : t > F.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Js(t, e, r, n = null) {
  const s = new Date(t), o = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (o.timeZone = n);
  const i = {
    timeZoneName: e,
    ...o
  }, a = new Intl.DateTimeFormat(r, i).formatToParts(s).find((c) => c.type.toLowerCase() === "timezonename");
  return a ? a.value : null;
}
function At(t, e) {
  let r = parseInt(t, 10);
  Number.isNaN(r) && (r = 0);
  const n = parseInt(e, 10) || 0, s = r < 0 || Object.is(r, -0) ? -n : n;
  return r * 60 + s;
}
function Gs(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new z(`Invalid unit value ${t}`);
  return e;
}
function St(t, e) {
  const r = {};
  for (const n in t)
    if (xe(t, n)) {
      const s = t[n];
      if (s == null)
        continue;
      r[e(n)] = Gs(s);
    }
  return r;
}
function Be(t, e) {
  const r = Math.trunc(Math.abs(t / 60)), n = Math.trunc(Math.abs(t % 60)), s = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${k(r, 2)}:${k(n, 2)}`;
    case "narrow":
      return `${s}${r}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${s}${k(r, 2)}${k(n, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function It(t) {
  return gf(t, ["hour", "minute", "second", "millisecond"]);
}
const Tf = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Ys = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Of = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Ks(t) {
  switch (t) {
    case "narrow":
      return [...Of];
    case "short":
      return [...Ys];
    case "long":
      return [...Tf];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Qs = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Xs = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Sf = ["M", "T", "W", "T", "F", "S", "S"];
function ei(t) {
  switch (t) {
    case "narrow":
      return [...Sf];
    case "short":
      return [...Xs];
    case "long":
      return [...Qs];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const ti = ["AM", "PM"], bf = ["Before Christ", "Anno Domini"], Ef = ["BC", "AD"], vf = ["B", "A"];
function ri(t) {
  switch (t) {
    case "narrow":
      return [...vf];
    case "short":
      return [...Ef];
    case "long":
      return [...bf];
    default:
      return null;
  }
}
function _f(t) {
  return ti[t.hour < 12 ? 0 : 1];
}
function xf(t, e) {
  return ei(e)[t.weekday - 1];
}
function Nf(t, e) {
  return Ks(e)[t.month - 1];
}
function Df(t, e) {
  return ri(e)[t.year < 0 ? 0 : 1];
}
function Cf(t, e, r = "always", n = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, o = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (r === "auto" && o) {
    const m = t === "days";
    switch (e) {
      case 1:
        return m ? "tomorrow" : `next ${s[t][0]}`;
      case -1:
        return m ? "yesterday" : `last ${s[t][0]}`;
      case 0:
        return m ? "today" : `this ${s[t][0]}`;
    }
  }
  const i = Object.is(e, -0) || e < 0, a = Math.abs(e), c = a === 1, u = s[t], l = n ? c ? u[1] : u[2] || u[1] : c ? s[t][0] : t;
  return i ? `${a} ${l} ago` : `in ${a} ${l}`;
}
function wn(t, e) {
  let r = "";
  for (const n of t)
    n.literal ? r += n.val : r += e(n.val);
  return r;
}
const Mf = {
  D: wt,
  DD: Ns,
  DDD: Ds,
  DDDD: Cs,
  t: Ms,
  tt: As,
  ttt: Is,
  tttt: Fs,
  T: ks,
  TT: $s,
  TTT: Rs,
  TTTT: Ps,
  f: js,
  ff: Vs,
  fff: zs,
  ffff: qs,
  F: Ls,
  FF: Us,
  FFF: Hs,
  FFFF: Zs
};
class R {
  static create(e, r = {}) {
    return new R(e, r);
  }
  static parseFormat(e) {
    let r = null, n = "", s = !1;
    const o = [];
    for (let i = 0; i < e.length; i++) {
      const a = e.charAt(i);
      a === "'" ? (n.length > 0 && o.push({
        literal: s || /^\s+$/.test(n),
        val: n
      }), r = null, n = "", s = !s) : s || a === r ? n += a : (n.length > 0 && o.push({
        literal: /^\s+$/.test(n),
        val: n
      }), n = a, r = a);
    }
    return n.length > 0 && o.push({
      literal: s || /^\s+$/.test(n),
      val: n
    }), o;
  }
  static macroTokenToFormatOpts(e) {
    return Mf[e];
  }
  constructor(e, r) {
    this.opts = r, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, r) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, {
      ...this.opts,
      ...r
    }).format();
  }
  formatDateTime(e, r = {}) {
    return this.loc.dtFormatter(e, {
      ...this.opts,
      ...r
    }).format();
  }
  formatDateTimeParts(e, r = {}) {
    return this.loc.dtFormatter(e, {
      ...this.opts,
      ...r
    }).formatToParts();
  }
  formatInterval(e, r = {}) {
    return this.loc.dtFormatter(e.start, {
      ...this.opts,
      ...r
    }).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, r = {}) {
    return this.loc.dtFormatter(e, {
      ...this.opts,
      ...r
    }).resolvedOptions();
  }
  num(e, r = 0) {
    if (this.opts.forceSimple)
      return k(e, r);
    const n = {
      ...this.opts
    };
    return r > 0 && (n.padTo = r), this.loc.numberFormatter(n).format(e);
  }
  formatDateTimeFromString(e, r) {
    const n = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", o = (h, d) => this.loc.extract(e, h, d), i = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", a = () => n ? _f(e) : o({
      hour: "numeric",
      hourCycle: "h12"
    }, "dayperiod"), c = (h, d) => n ? Nf(e, h) : o(d ? {
      month: h
    } : {
      month: h,
      day: "numeric"
    }, "month"), u = (h, d) => n ? xf(e, h) : o(d ? {
      weekday: h
    } : {
      weekday: h,
      month: "long",
      day: "numeric"
    }, "weekday"), l = (h) => {
      const d = R.macroTokenToFormatOpts(h);
      return d ? this.formatWithSystemDefault(e, d) : h;
    }, m = (h) => n ? Df(e, h) : o({
      era: h
    }, "era"), g = (h) => {
      switch (h) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return i({
            format: "narrow",
            allowZ: this.opts.allowZ
          });
        case "ZZ":
          return i({
            format: "short",
            allowZ: this.opts.allowZ
          });
        case "ZZZ":
          return i({
            format: "techie",
            allowZ: this.opts.allowZ
          });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, {
            format: "short",
            locale: this.loc.locale
          });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, {
            format: "long",
            locale: this.loc.locale
          });
        case "z":
          return e.zoneName;
        case "a":
          return a();
        case "d":
          return s ? o({
            day: "numeric"
          }, "day") : this.num(e.day);
        case "dd":
          return s ? o({
            day: "2-digit"
          }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return s ? o({
            month: "numeric",
            day: "numeric"
          }, "month") : this.num(e.month);
        case "LL":
          return s ? o({
            month: "2-digit",
            day: "numeric"
          }, "month") : this.num(e.month, 2);
        case "LLL":
          return c("short", !0);
        case "LLLL":
          return c("long", !0);
        case "LLLLL":
          return c("narrow", !0);
        case "M":
          return s ? o({
            month: "numeric"
          }, "month") : this.num(e.month);
        case "MM":
          return s ? o({
            month: "2-digit"
          }, "month") : this.num(e.month, 2);
        case "MMM":
          return c("short", !1);
        case "MMMM":
          return c("long", !1);
        case "MMMMM":
          return c("narrow", !1);
        case "y":
          return s ? o({
            year: "numeric"
          }, "year") : this.num(e.year);
        case "yy":
          return s ? o({
            year: "2-digit"
          }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? o({
            year: "numeric"
          }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return s ? o({
            year: "numeric"
          }, "year") : this.num(e.year, 6);
        case "G":
          return m("short");
        case "GG":
          return m("long");
        case "GGGGG":
          return m("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return l(h);
      }
    };
    return wn(R.parseFormat(r), g);
  }
  formatDurationFromString(e, r) {
    const n = (c) => {
      switch (c[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, s = (c) => (u) => {
      const l = n(u);
      return l ? this.num(c.get(l), u.length) : u;
    }, o = R.parseFormat(r), i = o.reduce((c, {
      literal: u,
      val: l
    }) => u ? c : c.concat(l), []), a = e.shiftTo(...i.map(n).filter((c) => c));
    return wn(o, s(a));
  }
}
class B {
  constructor(e, r) {
    this.reason = e, this.explanation = r;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const ni = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Ae(...t) {
  const e = t.reduce((r, n) => r + n.source, "");
  return RegExp(`^${e}$`);
}
function Ie(...t) {
  return (e) => t.reduce(([r, n, s], o) => {
    const [i, a, c] = o(e, s);
    return [{
      ...r,
      ...i
    }, a || n, c];
  }, [{}, null, 1]).slice(0, 2);
}
function Fe(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [r, n] of e) {
    const s = r.exec(t);
    if (s)
      return n(s);
  }
  return [null, null];
}
function si(...t) {
  return (e, r) => {
    const n = {};
    let s;
    for (s = 0; s < t.length; s++)
      n[t[s]] = ie(e[r + s]);
    return [n, null, r + s];
  };
}
const ii = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Af = `(?:${ii.source}?(?:\\[(${ni.source})\\])?)?`, xr = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, oi = RegExp(`${xr.source}${Af}`), Nr = RegExp(`(?:T${oi.source})?`), If = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ff = /(\d{4})-?W(\d\d)(?:-?(\d))?/, kf = /(\d{4})-?(\d{3})/, $f = si("weekYear", "weekNumber", "weekDay"), Rf = si("year", "ordinal"), Pf = /(\d{4})-(\d\d)-(\d\d)/, ai = RegExp(`${xr.source} ?(?:${ii.source}|(${ni.source}))?`), jf = RegExp(`(?: ${ai.source})?`);
function be(t, e, r) {
  const n = t[e];
  return E(n) ? r : ie(n);
}
function Lf(t, e) {
  return [{
    year: be(t, e),
    month: be(t, e + 1, 1),
    day: be(t, e + 2, 1)
  }, null, e + 3];
}
function ke(t, e) {
  return [{
    hours: be(t, e, 0),
    minutes: be(t, e + 1, 0),
    seconds: be(t, e + 2, 0),
    milliseconds: Er(t[e + 3])
  }, null, e + 4];
}
function nt(t, e) {
  const r = !t[e] && !t[e + 1], n = At(t[e + 1], t[e + 2]), s = r ? null : P.instance(n);
  return [{}, s, e + 3];
}
function st(t, e) {
  const r = t[e] ? G.create(t[e]) : null;
  return [{}, r, e + 1];
}
const Vf = RegExp(`^T?${xr.source}$`), Uf = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function zf(t) {
  const [e, r, n, s, o, i, a, c, u] = t, l = e[0] === "-", m = c && c[0] === "-", g = (h, d = !1) => h !== void 0 && (d || h && l) ? -h : h;
  return [{
    years: g(ce(r)),
    months: g(ce(n)),
    weeks: g(ce(s)),
    days: g(ce(o)),
    hours: g(ce(i)),
    minutes: g(ce(a)),
    seconds: g(ce(c), c === "-0"),
    milliseconds: g(Er(u), m)
  }];
}
const Hf = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Dr(t, e, r, n, s, o, i) {
  const a = {
    year: e.length === 2 ? or(ie(e)) : ie(e),
    month: Ys.indexOf(r) + 1,
    day: ie(n),
    hour: ie(s),
    minute: ie(o)
  };
  return i && (a.second = ie(i)), t && (a.weekday = t.length > 3 ? Qs.indexOf(t) + 1 : Xs.indexOf(t) + 1), a;
}
const qf = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Zf(t) {
  const [, e, r, n, s, o, i, a, c, u, l, m] = t, g = Dr(e, s, n, r, o, i, a);
  let h;
  return c ? h = Hf[c] : u ? h = 0 : h = At(l, m), [g, new P(h)];
}
function Bf(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Wf = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Jf = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Gf = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Tn(t) {
  const [, e, r, n, s, o, i, a] = t;
  return [Dr(e, s, n, r, o, i, a), P.utcInstance];
}
function Yf(t) {
  const [, e, r, n, s, o, i, a] = t;
  return [Dr(e, a, r, n, s, o, i), P.utcInstance];
}
const Kf = Ae(If, Nr), Qf = Ae(Ff, Nr), Xf = Ae(kf, Nr), ed = Ae(oi), ui = Ie(Lf, ke, nt, st), td = Ie($f, ke, nt, st), rd = Ie(Rf, ke, nt, st), nd = Ie(ke, nt, st);
function sd(t) {
  return Fe(t, [Kf, ui], [Qf, td], [Xf, rd], [ed, nd]);
}
function id(t) {
  return Fe(Bf(t), [qf, Zf]);
}
function od(t) {
  return Fe(t, [Wf, Tn], [Jf, Tn], [Gf, Yf]);
}
function ad(t) {
  return Fe(t, [Uf, zf]);
}
const ud = Ie(ke);
function cd(t) {
  return Fe(t, [Vf, ud]);
}
const ld = Ae(Pf, jf), fd = Ae(ai), dd = Ie(ke, nt, st);
function hd(t) {
  return Fe(t, [ld, ui], [fd, dd]);
}
const md = "Invalid Duration", ci = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1e3
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1e3
  },
  seconds: {
    milliseconds: 1e3
  }
}, pd = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...ci
}, U = 146097 / 400, Oe = 146097 / 4800, yd = {
  years: {
    quarters: 4,
    months: 12,
    weeks: U / 7,
    days: U,
    hours: U * 24,
    minutes: U * 24 * 60,
    seconds: U * 24 * 60 * 60,
    milliseconds: U * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: U / 28,
    days: U / 4,
    hours: U * 24 / 4,
    minutes: U * 24 * 60 / 4,
    seconds: U * 24 * 60 * 60 / 4,
    milliseconds: U * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Oe / 7,
    days: Oe,
    hours: Oe * 24,
    minutes: Oe * 24 * 60,
    seconds: Oe * 24 * 60 * 60,
    milliseconds: Oe * 24 * 60 * 60 * 1e3
  },
  ...ci
}, de = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], gd = de.slice(0).reverse();
function se(t, e, r = !1) {
  const n = {
    values: r ? e.values : {
      ...t.values,
      ...e.values || {}
    },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new v(n);
}
function wd(t) {
  return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function li(t, e, r, n, s) {
  const o = t[s][r], i = e[r] / o, a = Math.sign(i) === Math.sign(n[s]), c = !a && n[s] !== 0 && Math.abs(i) <= 1 ? wd(i) : Math.trunc(i);
  n[s] += c, e[r] -= c * o;
}
function Td(t, e) {
  gd.reduce((r, n) => E(e[n]) ? r : (r && li(t, e, r, e, n), n), null);
}
function Od(t) {
  const e = {};
  for (const [r, n] of Object.entries(t))
    n !== 0 && (e[r] = n);
  return e;
}
class v {
  /**
   * @private
   */
  constructor(e) {
    const r = e.conversionAccuracy === "longterm" || !1;
    let n = r ? yd : pd;
    e.matrix && (n = e.matrix), this.values = e.values, this.loc = e.loc || M.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = n, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, r) {
    return v.fromObject({
      milliseconds: e
    }, r);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, r = {}) {
    if (e == null || typeof e != "object")
      throw new z(`Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`);
    return new v({
      values: St(e, v.normalizeUnit),
      loc: M.fromObject(r),
      conversionAccuracy: r.conversionAccuracy,
      matrix: r.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (me(e))
      return v.fromMillis(e);
    if (v.isDuration(e))
      return e;
    if (typeof e == "object")
      return v.fromObject(e);
    throw new z(`Unknown duration argument ${e} of type ${typeof e}`);
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, r) {
    const [n] = ad(e);
    return n ? v.fromObject(n, r) : v.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, r) {
    const [n] = cd(e);
    return n ? v.fromObject(n, r) : v.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new z("need to specify a reason the Duration is invalid");
    const n = e instanceof B ? e : new B(e, r);
    if (F.throwOnInvalid)
      throw new Jl(n);
    return new v({
      invalid: n
    });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const r = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!r)
      throw new xs(e);
    return r;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, r = {}) {
    const n = {
      ...r,
      floor: r.round !== !1 && r.floor !== !1
    };
    return this.isValid ? R.create(this.loc, n).formatDurationFromString(this, e) : md;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    const r = de.map((n) => {
      const s = this.values[n];
      return E(s) ? null : this.loc.numberFormatter({
        style: "unit",
        unitDisplay: "long",
        ...e,
        unit: n.slice(0, -1)
      }).format(s);
    }).filter((n) => n);
    return this.loc.listFormatter({
      type: "conjunction",
      style: e.listStyle || "narrow",
      ...e
    }).format(r);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? {
      ...this.values
    } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += vr(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const r = this.toMillis();
    if (r < 0 || r >= 864e5)
      return null;
    e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e
    };
    const n = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let s = e.format === "basic" ? "hhmm" : "hh:mm";
    (!e.suppressSeconds || n.seconds !== 0 || n.milliseconds !== 0) && (s += e.format === "basic" ? "ss" : ":ss", (!e.suppressMilliseconds || n.milliseconds !== 0) && (s += ".SSS"));
    let o = n.toFormat(s);
    return e.includePrefix && (o = "T" + o), o;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const r = v.fromDurationLike(e), n = {};
    for (const s of de)
      (xe(r.values, s) || xe(this.values, s)) && (n[s] = r.get(s) + this.get(s));
    return se(this, {
      values: n
    }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const r = v.fromDurationLike(e);
    return this.plus(r.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const r = {};
    for (const n of Object.keys(this.values))
      r[n] = Gs(e(this.values[n], n));
    return se(this, {
      values: r
    }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[v.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const r = {
      ...this.values,
      ...St(e, v.normalizeUnit)
    };
    return se(this, {
      values: r
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({
    locale: e,
    numberingSystem: r,
    conversionAccuracy: n,
    matrix: s
  } = {}) {
    const i = {
      loc: this.loc.clone({
        locale: e,
        numberingSystem: r
      }),
      matrix: s,
      conversionAccuracy: n
    };
    return se(this, i);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return Td(this.matrix, e), se(this, {
      values: e
    }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = Od(this.normalize().shiftToAll().toObject());
    return se(this, {
      values: e
    }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((i) => v.normalizeUnit(i));
    const r = {}, n = {}, s = this.toObject();
    let o;
    for (const i of de)
      if (e.indexOf(i) >= 0) {
        o = i;
        let a = 0;
        for (const u in n)
          a += this.matrix[u][i] * n[u], n[u] = 0;
        me(s[i]) && (a += s[i]);
        const c = Math.trunc(a);
        r[i] = c, n[i] = (a * 1e3 - c * 1e3) / 1e3;
        for (const u in s)
          de.indexOf(u) > de.indexOf(i) && li(this.matrix, s, u, r, i);
      } else
        me(s[i]) && (n[i] = s[i]);
    for (const i in n)
      n[i] !== 0 && (r[o] += i === o ? n[i] : n[i] / this.matrix[o][i]);
    return se(this, {
      values: r
    }, !0).normalize();
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const r of Object.keys(this.values))
      e[r] = this.values[r] === 0 ? 0 : -this.values[r];
    return se(this, {
      values: e
    }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function r(n, s) {
      return n === void 0 || n === 0 ? s === void 0 || s === 0 : n === s;
    }
    for (const n of de)
      if (!r(this.values[n], e.values[n]))
        return !1;
    return !0;
  }
}
const Se = "Invalid Interval";
function Sd(t, e) {
  return !t || !t.isValid ? I.invalid("missing or invalid start") : !e || !e.isValid ? I.invalid("missing or invalid end") : e < t ? I.invalid("end before start", `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`) : null;
}
class I {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new z("need to specify a reason the Interval is invalid");
    const n = e instanceof B ? e : new B(e, r);
    if (F.throwOnInvalid)
      throw new Wl(n);
    return new I({
      invalid: n
    });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, r) {
    const n = Ve(e), s = Ve(r), o = Sd(n, s);
    return o ?? new I({
      start: n,
      end: s
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, r) {
    const n = v.fromDurationLike(r), s = Ve(e);
    return I.fromDateTimes(s, s.plus(n));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, r) {
    const n = v.fromDurationLike(r), s = Ve(e);
    return I.fromDateTimes(s.minus(n), s);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, r) {
    const [n, s] = (e || "").split("/", 2);
    if (n && s) {
      let o, i;
      try {
        o = b.fromISO(n, r), i = o.isValid;
      } catch {
        i = !1;
      }
      let a, c;
      try {
        a = b.fromISO(s, r), c = a.isValid;
      } catch {
        c = !1;
      }
      if (i && c)
        return I.fromDateTimes(o, a);
      if (i) {
        const u = v.fromISO(s, r);
        if (u.isValid)
          return I.after(o, u);
      } else if (c) {
        const u = v.fromISO(n, r);
        if (u.isValid)
          return I.before(a, u);
      }
    }
    return I.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(e = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const r = this.start.startOf(e), n = this.end.startOf(e);
    return Math.floor(n.diff(r, e).get(e)) + (n.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({
    start: e,
    end: r
  } = {}) {
    return this.isValid ? I.fromDateTimes(e || this.s, r || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const r = e.map(Ve).filter((i) => this.contains(i)).sort(), n = [];
    let {
      s
    } = this, o = 0;
    for (; s < this.e; ) {
      const i = r[o] || this.e, a = +i > +this.e ? this.e : i;
      n.push(I.fromDateTimes(s, a)), s = a, o += 1;
    }
    return n;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const r = v.fromDurationLike(e);
    if (!this.isValid || !r.isValid || r.as("milliseconds") === 0)
      return [];
    let {
      s: n
    } = this, s = 1, o;
    const i = [];
    for (; n < this.e; ) {
      const a = this.start.plus(r.mapUnits((c) => c * s));
      o = +a > +this.e ? this.e : a, i.push(I.fromDateTimes(n, o)), n = o, s += 1;
    }
    return i;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid)
      return this;
    const r = this.s > e.s ? this.s : e.s, n = this.e < e.e ? this.e : e.e;
    return r >= n ? null : I.fromDateTimes(r, n);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid)
      return this;
    const r = this.s < e.s ? this.s : e.s, n = this.e > e.e ? this.e : e.e;
    return I.fromDateTimes(r, n);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [r, n] = e.sort((s, o) => s.s - o.s).reduce(([s, o], i) => o ? o.overlaps(i) || o.abutsStart(i) ? [s, o.union(i)] : [s.concat([o]), i] : [s, i], [[], null]);
    return n && r.push(n), r;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let r = null, n = 0;
    const s = [], o = e.map((c) => [{
      time: c.s,
      type: "s"
    }, {
      time: c.e,
      type: "e"
    }]), i = Array.prototype.concat(...o), a = i.sort((c, u) => c.time - u.time);
    for (const c of a)
      n += c.type === "s" ? 1 : -1, n === 1 ? r = c.time : (r && +r != +c.time && s.push(I.fromDateTimes(r, c.time)), r = null);
    return I.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return I.xor([this].concat(e)).map((r) => this.intersection(r)).filter((r) => r && !r.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Se;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = wt, r = {}) {
    return this.isValid ? R.create(this.s.loc.clone(r), e).formatInterval(this) : Se;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Se;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Se;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Se;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, {
    separator: r = " – "
  } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${r}${this.e.toFormat(e)}` : Se;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, r) {
    return this.isValid ? this.e.diff(this.s, e, r) : v.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return I.fromDateTimes(e(this.s), e(this.e));
  }
}
class He {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = F.defaultZone) {
    const r = b.now().setZone(e).set({
      month: 12
    });
    return !e.isUniversal && r.offset !== r.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return G.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return oe(e, F.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", {
    locale: r = null,
    numberingSystem: n = null,
    locObj: s = null,
    outputCalendar: o = "gregory"
  } = {}) {
    return (s || M.create(r, n, o)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", {
    locale: r = null,
    numberingSystem: n = null,
    locObj: s = null,
    outputCalendar: o = "gregory"
  } = {}) {
    return (s || M.create(r, n, o)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", {
    locale: r = null,
    numberingSystem: n = null,
    locObj: s = null
  } = {}) {
    return (s || M.create(r, n, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", {
    locale: r = null,
    numberingSystem: n = null,
    locObj: s = null
  } = {}) {
    return (s || M.create(r, n, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({
    locale: e = null
  } = {}) {
    return M.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", {
    locale: r = null
  } = {}) {
    return M.create(r, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return {
      relative: Ws()
    };
  }
}
function On(t, e) {
  const r = (s) => s.toUTC(0, {
    keepLocalTime: !0
  }).startOf("day").valueOf(), n = r(e) - r(t);
  return Math.floor(v.fromMillis(n).as("days"));
}
function bd(t, e, r) {
  const n = [["years", (c, u) => u.year - c.year], ["quarters", (c, u) => u.quarter - c.quarter + (u.year - c.year) * 4], ["months", (c, u) => u.month - c.month + (u.year - c.year) * 12], ["weeks", (c, u) => {
    const l = On(c, u);
    return (l - l % 7) / 7;
  }], ["days", On]], s = {}, o = t;
  let i, a;
  for (const [c, u] of n)
    r.indexOf(c) >= 0 && (i = c, s[c] = u(t, e), a = o.plus(s), a > e ? (s[c]--, t = o.plus(s)) : t = a);
  return [t, s, a, i];
}
function Ed(t, e, r, n) {
  let [s, o, i, a] = bd(t, e, r);
  const c = e - s, u = r.filter((m) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(m) >= 0);
  u.length === 0 && (i < e && (i = s.plus({
    [a]: 1
  })), i !== s && (o[a] = (o[a] || 0) + c / (i - s)));
  const l = v.fromObject(o, n);
  return u.length > 0 ? v.fromMillis(c, n).shiftTo(...u).plus(l) : l;
}
const Cr = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, Sn = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, vd = Cr.hanidec.replace(/[\[|\]]/g, "").split("");
function _d(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let r = 0; r < t.length; r++) {
      const n = t.charCodeAt(r);
      if (t[r].search(Cr.hanidec) !== -1)
        e += vd.indexOf(t[r]);
      else
        for (const s in Sn) {
          const [o, i] = Sn[s];
          n >= o && n <= i && (e += n - o);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function q({
  numberingSystem: t
}, e = "") {
  return new RegExp(`${Cr[t || "latn"]}${e}`);
}
const xd = "missing Intl.DateTimeFormat.formatToParts support";
function N(t, e = (r) => r) {
  return {
    regex: t,
    deser: ([r]) => e(_d(r))
  };
}
const Nd = String.fromCharCode(160), fi = `[ ${Nd}]`, di = new RegExp(fi, "g");
function Dd(t) {
  return t.replace(/\./g, "\\.?").replace(di, fi);
}
function bn(t) {
  return t.replace(/\./g, "").replace(di, " ").toLowerCase();
}
function Z(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(Dd).join("|")),
    deser: ([r]) => t.findIndex((n) => bn(r) === bn(n)) + e
  };
}
function En(t, e) {
  return {
    regex: t,
    deser: ([, r, n]) => At(r, n),
    groups: e
  };
}
function at(t) {
  return {
    regex: t,
    deser: ([e]) => e
  };
}
function Cd(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Md(t, e) {
  const r = q(e), n = q(e, "{2}"), s = q(e, "{3}"), o = q(e, "{4}"), i = q(e, "{6}"), a = q(e, "{1,2}"), c = q(e, "{1,3}"), u = q(e, "{1,6}"), l = q(e, "{1,9}"), m = q(e, "{2,4}"), g = q(e, "{4,6}"), h = (S) => ({
    regex: RegExp(Cd(S.val)),
    deser: ([T]) => T,
    literal: !0
  }), w = ((S) => {
    if (t.literal)
      return h(S);
    switch (S.val) {
      case "G":
        return Z(e.eras("short", !1), 0);
      case "GG":
        return Z(e.eras("long", !1), 0);
      case "y":
        return N(u);
      case "yy":
        return N(m, or);
      case "yyyy":
        return N(o);
      case "yyyyy":
        return N(g);
      case "yyyyyy":
        return N(i);
      case "M":
        return N(a);
      case "MM":
        return N(n);
      case "MMM":
        return Z(e.months("short", !0, !1), 1);
      case "MMMM":
        return Z(e.months("long", !0, !1), 1);
      case "L":
        return N(a);
      case "LL":
        return N(n);
      case "LLL":
        return Z(e.months("short", !1, !1), 1);
      case "LLLL":
        return Z(e.months("long", !1, !1), 1);
      case "d":
        return N(a);
      case "dd":
        return N(n);
      case "o":
        return N(c);
      case "ooo":
        return N(s);
      case "HH":
        return N(n);
      case "H":
        return N(a);
      case "hh":
        return N(n);
      case "h":
        return N(a);
      case "mm":
        return N(n);
      case "m":
        return N(a);
      case "q":
        return N(a);
      case "qq":
        return N(n);
      case "s":
        return N(a);
      case "ss":
        return N(n);
      case "S":
        return N(c);
      case "SSS":
        return N(s);
      case "u":
        return at(l);
      case "uu":
        return at(a);
      case "uuu":
        return N(r);
      case "a":
        return Z(e.meridiems(), 0);
      case "kkkk":
        return N(o);
      case "kk":
        return N(m, or);
      case "W":
        return N(a);
      case "WW":
        return N(n);
      case "E":
      case "c":
        return N(r);
      case "EEE":
        return Z(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return Z(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return Z(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return Z(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return En(new RegExp(`([+-]${a.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return En(new RegExp(`([+-]${a.source})(${n.source})?`), 2);
      case "z":
        return at(/[a-z_+-/]{1,256}?/i);
      case " ":
        return at(/[^\S\n\r]/);
      default:
        return h(S);
    }
  })(t) || {
    invalidReason: xd
  };
  return w.token = t, w;
}
const Ad = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function Id(t, e) {
  const {
    type: r,
    value: n
  } = t;
  if (r === "literal") {
    const i = /^\s+$/.test(n);
    return {
      literal: !i,
      val: i ? " " : n
    };
  }
  const s = e[r];
  let o = Ad[r];
  if (typeof o == "object" && (o = o[s]), o)
    return {
      literal: !1,
      val: o
    };
}
function Fd(t) {
  return [`^${t.map((r) => r.regex).reduce((r, n) => `${r}(${n.source})`, "")}$`, t];
}
function kd(t, e, r) {
  const n = t.match(e);
  if (n) {
    const s = {};
    let o = 1;
    for (const i in r)
      if (xe(r, i)) {
        const a = r[i], c = a.groups ? a.groups + 1 : 1;
        !a.literal && a.token && (s[a.token.val[0]] = a.deser(n.slice(o, o + c))), o += c;
      }
    return [n, s];
  } else
    return [n, {}];
}
function $d(t) {
  const e = (o) => {
    switch (o) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let r = null, n;
  return E(t.z) || (r = G.create(t.z)), E(t.Z) || (r || (r = new P(t.Z)), n = t.Z), E(t.q) || (t.M = (t.q - 1) * 3 + 1), E(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), E(t.u) || (t.S = Er(t.u)), [Object.keys(t).reduce((o, i) => {
    const a = e(i);
    return a && (o[a] = t[i]), o;
  }, {}), r, n];
}
let zt = null;
function Rd() {
  return zt || (zt = b.fromMillis(1555555555555)), zt;
}
function Pd(t, e) {
  if (t.literal)
    return t;
  const r = R.macroTokenToFormatOpts(t.val), n = pi(r, e);
  return n == null || n.includes(void 0) ? t : n;
}
function hi(t, e) {
  return Array.prototype.concat(...t.map((r) => Pd(r, e)));
}
function mi(t, e, r) {
  const n = hi(R.parseFormat(r), t), s = n.map((i) => Md(i, t)), o = s.find((i) => i.invalidReason);
  if (o)
    return {
      input: e,
      tokens: n,
      invalidReason: o.invalidReason
    };
  {
    const [i, a] = Fd(s), c = RegExp(i, "i"), [u, l] = kd(e, c, a), [m, g, h] = l ? $d(l) : [null, null, void 0];
    if (xe(l, "a") && xe(l, "H"))
      throw new Ue("Can't include meridiem when specifying 24-hour format");
    return {
      input: e,
      tokens: n,
      regex: c,
      rawMatches: u,
      matches: l,
      result: m,
      zone: g,
      specificOffset: h
    };
  }
}
function jd(t, e, r) {
  const {
    result: n,
    zone: s,
    specificOffset: o,
    invalidReason: i
  } = mi(t, e, r);
  return [n, s, o, i];
}
function pi(t, e) {
  return t ? R.create(e, t).formatDateTimeParts(Rd()).map((s) => Id(s, t)) : null;
}
const yi = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], gi = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function H(t, e) {
  return new B("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`);
}
function wi(t, e, r) {
  const n = new Date(Date.UTC(t, e - 1, r));
  t < 100 && t >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const s = n.getUTCDay();
  return s === 0 ? 7 : s;
}
function Ti(t, e, r) {
  return r + (rt(t) ? gi : yi)[e - 1];
}
function Oi(t, e) {
  const r = rt(t) ? gi : yi, n = r.findIndex((o) => o < e), s = e - r[n];
  return {
    month: n + 1,
    day: s
  };
}
function ar(t) {
  const {
    year: e,
    month: r,
    day: n
  } = t, s = Ti(e, r, n), o = wi(e, r, n);
  let i = Math.floor((s - o + 10) / 7), a;
  return i < 1 ? (a = e - 1, i = Ot(a)) : i > Ot(e) ? (a = e + 1, i = 1) : a = e, {
    weekYear: a,
    weekNumber: i,
    weekday: o,
    ...It(t)
  };
}
function vn(t) {
  const {
    weekYear: e,
    weekNumber: r,
    weekday: n
  } = t, s = wi(e, 1, 4), o = Ze(e);
  let i = r * 7 + n - s - 3, a;
  i < 1 ? (a = e - 1, i += Ze(a)) : i > o ? (a = e + 1, i -= Ze(e)) : a = e;
  const {
    month: c,
    day: u
  } = Oi(a, i);
  return {
    year: a,
    month: c,
    day: u,
    ...It(t)
  };
}
function Ht(t) {
  const {
    year: e,
    month: r,
    day: n
  } = t, s = Ti(e, r, n);
  return {
    year: e,
    ordinal: s,
    ...It(t)
  };
}
function _n(t) {
  const {
    year: e,
    ordinal: r
  } = t, {
    month: n,
    day: s
  } = Oi(e, r);
  return {
    year: e,
    month: n,
    day: s,
    ...It(t)
  };
}
function Ld(t) {
  const e = Mt(t.weekYear), r = K(t.weekNumber, 1, Ot(t.weekYear)), n = K(t.weekday, 1, 7);
  return e ? r ? n ? !1 : H("weekday", t.weekday) : H("week", t.week) : H("weekYear", t.weekYear);
}
function Vd(t) {
  const e = Mt(t.year), r = K(t.ordinal, 1, Ze(t.year));
  return e ? r ? !1 : H("ordinal", t.ordinal) : H("year", t.year);
}
function Si(t) {
  const e = Mt(t.year), r = K(t.month, 1, 12), n = K(t.day, 1, Tt(t.year, t.month));
  return e ? r ? n ? !1 : H("day", t.day) : H("month", t.month) : H("year", t.year);
}
function bi(t) {
  const {
    hour: e,
    minute: r,
    second: n,
    millisecond: s
  } = t, o = K(e, 0, 23) || e === 24 && r === 0 && n === 0 && s === 0, i = K(r, 0, 59), a = K(n, 0, 59), c = K(s, 0, 999);
  return o ? i ? a ? c ? !1 : H("millisecond", s) : H("second", n) : H("minute", r) : H("hour", e);
}
const qt = "Invalid DateTime", xn = 864e13;
function ut(t) {
  return new B("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Zt(t) {
  return t.weekData === null && (t.weekData = ar(t.c)), t.weekData;
}
function je(t, e) {
  const r = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new b({
    ...r,
    ...e,
    old: r
  });
}
function Ei(t, e, r) {
  let n = t - e * 60 * 1e3;
  const s = r.offset(n);
  if (e === s)
    return [n, e];
  n -= (s - e) * 60 * 1e3;
  const o = r.offset(n);
  return s === o ? [n, s] : [t - Math.min(s, o) * 60 * 1e3, Math.max(s, o)];
}
function Nn(t, e) {
  t += e * 60 * 1e3;
  const r = new Date(t);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds()
  };
}
function yt(t, e, r) {
  return Ei(_r(t), e, r);
}
function Dn(t, e) {
  const r = t.o, n = t.c.year + Math.trunc(e.years), s = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, o = {
    ...t.c,
    year: n,
    month: s,
    day: Math.min(t.c.day, Tt(n, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, i = v.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), a = _r(o);
  let [c, u] = Ei(a, r, t.zone);
  return i !== 0 && (c += i, u = t.zone.offset(c)), {
    ts: c,
    o: u
  };
}
function Le(t, e, r, n, s, o) {
  const {
    setZone: i,
    zone: a
  } = r;
  if (t && Object.keys(t).length !== 0 || e) {
    const c = e || a, u = b.fromObject(t, {
      ...r,
      zone: c,
      specificOffset: o
    });
    return i ? u : u.setZone(a);
  } else
    return b.invalid(new B("unparsable", `the input "${s}" can't be parsed as ${n}`));
}
function ct(t, e, r = !0) {
  return t.isValid ? R.create(M.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Bt(t, e) {
  const r = t.c.year > 9999 || t.c.year < 0;
  let n = "";
  return r && t.c.year >= 0 && (n += "+"), n += k(t.c.year, r ? 6 : 4), e ? (n += "-", n += k(t.c.month), n += "-", n += k(t.c.day)) : (n += k(t.c.month), n += k(t.c.day)), n;
}
function Cn(t, e, r, n, s, o) {
  let i = k(t.c.hour);
  return e ? (i += ":", i += k(t.c.minute), (t.c.second !== 0 || !r) && (i += ":")) : i += k(t.c.minute), (t.c.second !== 0 || !r) && (i += k(t.c.second), (t.c.millisecond !== 0 || !n) && (i += ".", i += k(t.c.millisecond, 3))), s && (t.isOffsetFixed && t.offset === 0 && !o ? i += "Z" : t.o < 0 ? (i += "-", i += k(Math.trunc(-t.o / 60)), i += ":", i += k(Math.trunc(-t.o % 60))) : (i += "+", i += k(Math.trunc(t.o / 60)), i += ":", i += k(Math.trunc(t.o % 60)))), o && (i += "[" + t.zone.ianaName + "]"), i;
}
const vi = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ud = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, zd = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, _i = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Hd = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], qd = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Mn(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e)
    throw new xs(t);
  return e;
}
function An(t, e) {
  const r = oe(e.zone, F.defaultZone), n = M.fromObject(e), s = F.now();
  let o, i;
  if (E(t.year))
    o = s;
  else {
    for (const u of _i)
      E(t[u]) && (t[u] = vi[u]);
    const a = Si(t) || bi(t);
    if (a)
      return b.invalid(a);
    const c = r.offset(s);
    [o, i] = yt(t, c, r);
  }
  return new b({
    ts: o,
    zone: r,
    loc: n,
    o: i
  });
}
function In(t, e, r) {
  const n = E(r.round) ? !0 : r.round, s = (i, a) => (i = vr(i, n || r.calendary ? 0 : 2, !0), e.loc.clone(r).relFormatter(r).format(i, a)), o = (i) => r.calendary ? e.hasSame(t, i) ? 0 : e.startOf(i).diff(t.startOf(i), i).get(i) : e.diff(t, i).get(i);
  if (r.unit)
    return s(o(r.unit), r.unit);
  for (const i of r.units) {
    const a = o(i);
    if (Math.abs(a) >= 1)
      return s(a, i);
  }
  return s(t > e ? -0 : 0, r.units[r.units.length - 1]);
}
function Fn(t) {
  let e = {}, r;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], r = Array.from(t).slice(0, t.length - 1)) : r = Array.from(t), [e, r];
}
class b {
  /**
   * @access private
   */
  constructor(e) {
    const r = e.zone || F.defaultZone;
    let n = e.invalid || (Number.isNaN(e.ts) ? new B("invalid input") : null) || (r.isValid ? null : ut(r));
    this.ts = E(e.ts) ? F.now() : e.ts;
    let s = null, o = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(r))
        [s, o] = [e.old.c, e.old.o];
      else {
        const a = r.offset(this.ts);
        s = Nn(this.ts, a), n = Number.isNaN(s.year) ? new B("invalid input") : null, s = n ? null : s, o = n ? null : a;
      }
    this._zone = r, this.loc = e.loc || M.create(), this.invalid = n, this.weekData = null, this.c = s, this.o = o, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new b({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, r] = Fn(arguments), [n, s, o, i, a, c, u] = r;
    return An({
      year: n,
      month: s,
      day: o,
      hour: i,
      minute: a,
      second: c,
      millisecond: u
    }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, r] = Fn(arguments), [n, s, o, i, a, c, u] = r;
    return e.zone = P.utcInstance, An({
      year: n,
      month: s,
      day: o,
      hour: i,
      minute: a,
      second: c,
      millisecond: u
    }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, r = {}) {
    const n = pf(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return b.invalid("invalid input");
    const s = oe(r.zone, F.defaultZone);
    return s.isValid ? new b({
      ts: n,
      zone: s,
      loc: M.fromObject(r)
    }) : b.invalid(ut(s));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, r = {}) {
    if (me(e))
      return e < -xn || e > xn ? b.invalid("Timestamp out of range") : new b({
        ts: e,
        zone: oe(r.zone, F.defaultZone),
        loc: M.fromObject(r)
      });
    throw new z(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`);
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, r = {}) {
    if (me(e))
      return new b({
        ts: e * 1e3,
        zone: oe(r.zone, F.defaultZone),
        loc: M.fromObject(r)
      });
    throw new z("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(e, r = {}) {
    e = e || {};
    const n = oe(r.zone, F.defaultZone);
    if (!n.isValid)
      return b.invalid(ut(n));
    const s = F.now(), o = E(r.specificOffset) ? n.offset(s) : r.specificOffset, i = St(e, Mn), a = !E(i.ordinal), c = !E(i.year), u = !E(i.month) || !E(i.day), l = c || u, m = i.weekYear || i.weekNumber, g = M.fromObject(r);
    if ((l || a) && m)
      throw new Ue("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (u && a)
      throw new Ue("Can't mix ordinal dates with month/day");
    const h = m || i.weekday && !l;
    let d, w, S = Nn(s, o);
    h ? (d = Hd, w = Ud, S = ar(S)) : a ? (d = qd, w = zd, S = Ht(S)) : (d = _i, w = vi);
    let T = !1;
    for (const $e of d) {
      const Ni = i[$e];
      E(Ni) ? T ? i[$e] = w[$e] : i[$e] = S[$e] : T = !0;
    }
    const _ = h ? Ld(i) : a ? Vd(i) : Si(i), A = _ || bi(i);
    if (A)
      return b.invalid(A);
    const j = h ? vn(i) : a ? _n(i) : i, [te, xi] = yt(j, o, n), Ft = new b({
      ts: te,
      zone: n,
      o: xi,
      loc: g
    });
    return i.weekday && l && e.weekday !== Ft.weekday ? b.invalid("mismatched weekday", `you can't specify both a weekday of ${i.weekday} and a date of ${Ft.toISO()}`) : Ft;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, r = {}) {
    const [n, s] = sd(e);
    return Le(n, s, r, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, r = {}) {
    const [n, s] = id(e);
    return Le(n, s, r, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, r = {}) {
    const [n, s] = od(e);
    return Le(n, s, r, "HTTP", r);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, r, n = {}) {
    if (E(e) || E(r))
      throw new z("fromFormat requires an input string and a format");
    const {
      locale: s = null,
      numberingSystem: o = null
    } = n, i = M.fromOpts({
      locale: s,
      numberingSystem: o,
      defaultToEN: !0
    }), [a, c, u, l] = jd(i, e, r);
    return l ? b.invalid(l) : Le(a, c, n, `format ${r}`, e, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, r, n = {}) {
    return b.fromFormat(e, r, n);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, r = {}) {
    const [n, s] = hd(e);
    return Le(n, s, r, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, r = null) {
    if (!e)
      throw new z("need to specify a reason the DateTime is invalid");
    const n = e instanceof B ? e : new B(e, r);
    if (F.throwOnInvalid)
      throw new Bl(n);
    return new b({
      invalid: n
    });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, r = {}) {
    const n = pi(e, M.fromObject(r));
    return n ? n.map((s) => s ? s.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, r = {}) {
    return hi(R.parseFormat(e), M.fromObject(r)).map((s) => s.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Zt(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Zt(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Zt(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Ht(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? He.months("short", {
      locObj: this.loc
    })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? He.months("long", {
      locObj: this.loc
    })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? He.weekdays("short", {
      locObj: this.loc
    })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? He.weekdays("long", {
      locObj: this.loc
    })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({
      month: 1,
      day: 1
    }).offset || this.offset > this.set({
      month: 5
    }).offset;
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return rt(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Tt(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Ze(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ot(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const {
      locale: r,
      numberingSystem: n,
      calendar: s
    } = R.create(this.loc.clone(e), e).resolvedOptions(this);
    return {
      locale: r,
      numberingSystem: n,
      outputCalendar: s
    };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, r = {}) {
    return this.setZone(P.instance(e), r);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(F.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, {
    keepLocalTime: r = !1,
    keepCalendarTime: n = !1
  } = {}) {
    if (e = oe(e, F.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (r || n) {
        const o = e.offset(this.ts), i = this.toObject();
        [s] = yt(i, o, e);
      }
      return je(this, {
        ts: s,
        zone: e
      });
    } else
      return b.invalid(ut(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({
    locale: e,
    numberingSystem: r,
    outputCalendar: n
  } = {}) {
    const s = this.loc.clone({
      locale: e,
      numberingSystem: r,
      outputCalendar: n
    });
    return je(this, {
      loc: s
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({
      locale: e
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const r = St(e, Mn), n = !E(r.weekYear) || !E(r.weekNumber) || !E(r.weekday), s = !E(r.ordinal), o = !E(r.year), i = !E(r.month) || !E(r.day), a = o || i, c = r.weekYear || r.weekNumber;
    if ((a || s) && c)
      throw new Ue("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (i && s)
      throw new Ue("Can't mix ordinal dates with month/day");
    let u;
    n ? u = vn({
      ...ar(this.c),
      ...r
    }) : E(r.ordinal) ? (u = {
      ...this.toObject(),
      ...r
    }, E(r.day) && (u.day = Math.min(Tt(u.year, u.month), u.day))) : u = _n({
      ...Ht(this.c),
      ...r
    });
    const [l, m] = yt(u, this.o, this.zone);
    return je(this, {
      ts: l,
      o: m
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const r = v.fromDurationLike(e);
    return je(this, Dn(this, r));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const r = v.fromDurationLike(e).negate();
    return je(this, Dn(this, r));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e) {
    if (!this.isValid)
      return this;
    const r = {}, n = v.normalizeUnit(e);
    switch (n) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (n === "weeks" && (r.weekday = 1), n === "quarters") {
      const s = Math.ceil(this.month / 3);
      r.month = (s - 1) * 3 + 1;
    }
    return this.set(r);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e) {
    return this.isValid ? this.plus({
      [e]: 1
    }).startOf(e).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, r = {}) {
    return this.isValid ? R.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, e) : qt;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = wt, r = {}) {
    return this.isValid ? R.create(this.loc.clone(r), e).formatDateTime(this) : qt;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? R.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: r = !1,
    suppressMilliseconds: n = !1,
    includeOffset: s = !0,
    extendedZone: o = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const i = e === "extended";
    let a = Bt(this, i);
    return a += "T", a += Cn(this, i, r, n, s, o), a;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({
    format: e = "extended"
  } = {}) {
    return this.isValid ? Bt(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return ct(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: r = !1,
    includeOffset: n = !0,
    includePrefix: s = !1,
    extendedZone: o = !1,
    format: i = "extended"
  } = {}) {
    return this.isValid ? (s ? "T" : "") + Cn(this, i === "extended", r, e, n, o) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return ct(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return ct(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? Bt(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({
    includeOffset: e = !0,
    includeZone: r = !1,
    includeOffsetSpace: n = !0
  } = {}) {
    let s = "HH:mm:ss.SSS";
    return (r || e) && (n && (s += " "), r ? s += "z" : e && (s += "ZZ")), ct(this, s, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : qt;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const r = {
      ...this.c
    };
    return e.includeConfig && (r.outputCalendar = this.outputCalendar, r.numberingSystem = this.loc.numberingSystem, r.locale = this.loc.locale), r;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, r = "milliseconds", n = {}) {
    if (!this.isValid || !e.isValid)
      return v.invalid("created by diffing an invalid DateTime");
    const s = {
      locale: this.locale,
      numberingSystem: this.numberingSystem,
      ...n
    }, o = yf(r).map(v.normalizeUnit), i = e.valueOf() > this.valueOf(), a = i ? this : e, c = i ? e : this, u = Ed(a, c, o, s);
    return i ? u.negate() : u;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", r = {}) {
    return this.diff(b.now(), e, r);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? I.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, r) {
    if (!this.isValid)
      return !1;
    const n = e.valueOf(), s = this.setZone(e.zone, {
      keepLocalTime: !0
    });
    return s.startOf(r) <= n && n <= s.endOf(r);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const r = e.base || b.fromObject({}, {
      zone: this.zone
    }), n = e.padding ? this < r ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], o = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, o = void 0), In(r, this.plus(n), {
      ...e,
      numeric: "always",
      units: s,
      unit: o
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? In(e.base || b.fromObject({}, {
      zone: this.zone
    }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(b.isDateTime))
      throw new z("min requires all arguments be DateTimes");
    return gn(e, (r) => r.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(b.isDateTime))
      throw new z("max requires all arguments be DateTimes");
    return gn(e, (r) => r.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, r, n = {}) {
    const {
      locale: s = null,
      numberingSystem: o = null
    } = n, i = M.fromOpts({
      locale: s,
      numberingSystem: o,
      defaultToEN: !0
    });
    return mi(i, e, r);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, r, n = {}) {
    return b.fromFormatExplain(e, r, n);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return wt;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Ns;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Gl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Ds;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Cs;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Ms;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return As;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Is;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Fs;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return ks;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return $s;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Rs;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Ps;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return js;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Ls;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Vs;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Us;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Yl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return zs;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Hs;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return qs;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Zs;
  }
}
function Ve(t) {
  if (b.isDateTime(t))
    return t;
  if (t && t.valueOf && me(t.valueOf()))
    return b.fromJSDate(t);
  if (t && typeof t == "object")
    return b.fromObject(t);
  throw new z(`Unknown datetime argument: ${t}, of type ${typeof t}`);
}
const Zd = "3.3.0";
V.DateTime = b;
V.Duration = v;
V.FixedOffsetZone = P;
V.IANAZone = G;
V.Info = He;
V.Interval = I;
V.InvalidZone = Bs;
V.Settings = F;
V.SystemZone = tt;
V.VERSION = Zd;
V.Zone = Me;
var le = V;
O.prototype.addYear = function() {
  this._date = this._date.plus({ years: 1 });
};
O.prototype.addMonth = function() {
  this._date = this._date.plus({ months: 1 }).startOf("month");
};
O.prototype.addDay = function() {
  this._date = this._date.plus({ days: 1 }).startOf("day");
};
O.prototype.addHour = function() {
  var t = this._date;
  this._date = this._date.plus({ hours: 1 }).startOf("hour"), this._date <= t && (this._date = this._date.plus({ hours: 1 }));
};
O.prototype.addMinute = function() {
  var t = this._date;
  this._date = this._date.plus({ minutes: 1 }).startOf("minute"), this._date < t && (this._date = this._date.plus({ hours: 1 }));
};
O.prototype.addSecond = function() {
  var t = this._date;
  this._date = this._date.plus({ seconds: 1 }).startOf("second"), this._date < t && (this._date = this._date.plus({ hours: 1 }));
};
O.prototype.subtractYear = function() {
  this._date = this._date.minus({ years: 1 });
};
O.prototype.subtractMonth = function() {
  this._date = this._date.minus({ months: 1 }).endOf("month").startOf("second");
};
O.prototype.subtractDay = function() {
  this._date = this._date.minus({ days: 1 }).endOf("day").startOf("second");
};
O.prototype.subtractHour = function() {
  var t = this._date;
  this._date = this._date.minus({ hours: 1 }).endOf("hour").startOf("second"), this._date >= t && (this._date = this._date.minus({ hours: 1 }));
};
O.prototype.subtractMinute = function() {
  var t = this._date;
  this._date = this._date.minus({ minutes: 1 }).endOf("minute").startOf("second"), this._date > t && (this._date = this._date.minus({ hours: 1 }));
};
O.prototype.subtractSecond = function() {
  var t = this._date;
  this._date = this._date.minus({ seconds: 1 }).startOf("second"), this._date > t && (this._date = this._date.minus({ hours: 1 }));
};
O.prototype.getDate = function() {
  return this._date.day;
};
O.prototype.getFullYear = function() {
  return this._date.year;
};
O.prototype.getDay = function() {
  var t = this._date.weekday;
  return t == 7 ? 0 : t;
};
O.prototype.getMonth = function() {
  return this._date.month - 1;
};
O.prototype.getHours = function() {
  return this._date.hour;
};
O.prototype.getMinutes = function() {
  return this._date.minute;
};
O.prototype.getSeconds = function() {
  return this._date.second;
};
O.prototype.getMilliseconds = function() {
  return this._date.millisecond;
};
O.prototype.getTime = function() {
  return this._date.valueOf();
};
O.prototype.getUTCDate = function() {
  return this._getUTC().day;
};
O.prototype.getUTCFullYear = function() {
  return this._getUTC().year;
};
O.prototype.getUTCDay = function() {
  var t = this._getUTC().weekday;
  return t == 7 ? 0 : t;
};
O.prototype.getUTCMonth = function() {
  return this._getUTC().month - 1;
};
O.prototype.getUTCHours = function() {
  return this._getUTC().hour;
};
O.prototype.getUTCMinutes = function() {
  return this._getUTC().minute;
};
O.prototype.getUTCSeconds = function() {
  return this._getUTC().second;
};
O.prototype.toISOString = function() {
  return this._date.toUTC().toISO();
};
O.prototype.toJSON = function() {
  return this._date.toJSON();
};
O.prototype.setDate = function(t) {
  this._date = this._date.set({ day: t });
};
O.prototype.setFullYear = function(t) {
  this._date = this._date.set({ year: t });
};
O.prototype.setDay = function(t) {
  this._date = this._date.set({ weekday: t });
};
O.prototype.setMonth = function(t) {
  this._date = this._date.set({ month: t + 1 });
};
O.prototype.setHours = function(t) {
  this._date = this._date.set({ hour: t });
};
O.prototype.setMinutes = function(t) {
  this._date = this._date.set({ minute: t });
};
O.prototype.setSeconds = function(t) {
  this._date = this._date.set({ second: t });
};
O.prototype.setMilliseconds = function(t) {
  this._date = this._date.set({ millisecond: t });
};
O.prototype._getUTC = function() {
  return this._date.toUTC();
};
O.prototype.toString = function() {
  return this.toDate().toString();
};
O.prototype.toDate = function() {
  return this._date.toJSDate();
};
O.prototype.isLastDayOfMonth = function() {
  var t = this._date.plus({ days: 1 }).startOf("day");
  return this._date.month !== t.month;
};
O.prototype.isLastWeekdayOfMonth = function() {
  var t = this._date.plus({ days: 7 }).startOf("day");
  return this._date.month !== t.month;
};
function O(t, e) {
  var r = { zone: e };
  if (t ? t instanceof O ? this._date = t._date : t instanceof Date ? this._date = le.DateTime.fromJSDate(t, r) : typeof t == "number" ? this._date = le.DateTime.fromMillis(t, r) : typeof t == "string" && (this._date = le.DateTime.fromISO(t, r), this._date.isValid || (this._date = le.DateTime.fromRFC2822(t, r)), this._date.isValid || (this._date = le.DateTime.fromSQL(t, r)), this._date.isValid || (this._date = le.DateTime.fromFormat(t, "EEE, d MMM yyyy HH:mm:ss", r))) : this._date = le.DateTime.local(), !this._date || !this._date.isValid)
    throw new Error("CronDate: unhandled timestamp: " + JSON.stringify(t));
  e && e !== this._date.zoneName && (this._date = this._date.setZone(e));
}
var Bd = O;
function he(t) {
  return {
    start: t,
    count: 1
  };
}
function kn(t, e) {
  t.end = e, t.step = e - t.start, t.count = 2;
}
function Wt(t, e, r) {
  e && (e.count === 2 ? (t.push(he(e.start)), t.push(he(e.end))) : t.push(e)), r && t.push(r);
}
function Wd(t) {
  for (var e = [], r = void 0, n = 0; n < t.length; n++) {
    var s = t[n];
    typeof s != "number" ? (Wt(e, r, he(s)), r = void 0) : r ? r.count === 1 ? kn(r, s) : r.step === s - r.end ? (r.count++, r.end = s) : r.count === 2 ? (e.push(he(r.start)), r = he(r.end), kn(r, s)) : (Wt(e, r), r = he(s)) : r = he(s);
  }
  return Wt(e, r), e;
}
var Jd = Wd, Gd = Jd;
function Yd(t, e, r) {
  var n = Gd(t);
  if (n.length === 1) {
    var s = n[0], o = s.step;
    if (o === 1 && s.start === e && s.end === r)
      return "*";
    if (o !== 1 && s.start === e && s.end === r - o + 1)
      return "*/" + o;
  }
  for (var i = [], a = 0, c = n.length; a < c; ++a) {
    var u = n[a];
    if (u.count === 1) {
      i.push(u.start);
      continue;
    }
    var o = u.step;
    if (u.step === 1) {
      i.push(u.start + "-" + u.end);
      continue;
    }
    var l = u.start == 0 ? u.count - 1 : u.count;
    u.step * l > u.end ? i = i.concat(
      Array.from({ length: u.end - u.start + 1 }).map(function(g, h) {
        var d = u.start + h;
        return (d - u.start) % u.step === 0 ? d : null;
      }).filter(function(g) {
        return g != null;
      })
    ) : u.end === r - u.step + 1 ? i.push(u.start + "/" + u.step) : i.push(u.start + "-" + u.end + "/" + u.step);
  }
  return i.join(",");
}
var Kd = Yd, pe = Bd, Qd = Kd, $n = 1e4;
function y(t, e) {
  this._options = e, this._utc = e.utc || !1, this._tz = this._utc ? "UTC" : e.tz, this._currentDate = new pe(e.currentDate, this._tz), this._startDate = e.startDate ? new pe(e.startDate, this._tz) : null, this._endDate = e.endDate ? new pe(e.endDate, this._tz) : null, this._isIterator = e.iterator || !1, this._hasIterated = !1, this._nthDayOfWeek = e.nthDayOfWeek || 0, this.fields = y._freezeFields(t);
}
y.map = ["second", "minute", "hour", "dayOfMonth", "month", "dayOfWeek"];
y.predefined = {
  "@yearly": "0 0 1 1 *",
  "@monthly": "0 0 1 * *",
  "@weekly": "0 0 * * 0",
  "@daily": "0 0 * * *",
  "@hourly": "0 * * * *"
};
y.constraints = [
  { min: 0, max: 59, chars: [] },
  // Second
  { min: 0, max: 59, chars: [] },
  // Minute
  { min: 0, max: 23, chars: [] },
  // Hour
  { min: 1, max: 31, chars: ["L"] },
  // Day of month
  { min: 1, max: 12, chars: [] },
  // Month
  { min: 0, max: 7, chars: ["L"] }
  // Day of week
];
y.daysInMonth = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
y.aliases = {
  month: {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12
  },
  dayOfWeek: {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
  }
};
y.parseDefaults = ["0", "*", "*", "*", "*", "*"];
y.standardValidCharacters = /^[,*\d/-]+$/;
y.dayOfWeekValidCharacters = /^[?,*\dL#/-]+$/;
y.dayOfMonthValidCharacters = /^[?,*\dL/-]+$/;
y.validCharacters = {
  second: y.standardValidCharacters,
  minute: y.standardValidCharacters,
  hour: y.standardValidCharacters,
  dayOfMonth: y.dayOfMonthValidCharacters,
  month: y.standardValidCharacters,
  dayOfWeek: y.dayOfWeekValidCharacters
};
y._isValidConstraintChar = function(e, r) {
  return typeof r != "string" ? !1 : e.chars.some(function(n) {
    return r.indexOf(n) > -1;
  });
};
y._parseField = function(e, r, n) {
  switch (e) {
    case "month":
    case "dayOfWeek":
      var s = y.aliases[e];
      r = r.replace(/[a-z]{3}/gi, function(c) {
        if (c = c.toLowerCase(), typeof s[c] < "u")
          return s[c];
        throw new Error('Validation error, cannot resolve alias "' + c + '"');
      });
      break;
  }
  if (!y.validCharacters[e].test(r))
    throw new Error("Invalid characters, got value: " + r);
  r.indexOf("*") !== -1 ? r = r.replace(/\*/g, n.min + "-" + n.max) : r.indexOf("?") !== -1 && (r = r.replace(/\?/g, n.min + "-" + n.max));
  function o(c) {
    var u = [];
    function l(d) {
      if (d instanceof Array)
        for (var w = 0, S = d.length; w < S; w++) {
          var T = d[w];
          if (y._isValidConstraintChar(n, T)) {
            u.push(T);
            continue;
          }
          if (typeof T != "number" || Number.isNaN(T) || T < n.min || T > n.max)
            throw new Error(
              "Constraint error, got value " + T + " expected range " + n.min + "-" + n.max
            );
          u.push(T);
        }
      else {
        if (y._isValidConstraintChar(n, d)) {
          u.push(d);
          return;
        }
        var _ = +d;
        if (Number.isNaN(_) || _ < n.min || _ > n.max)
          throw new Error(
            "Constraint error, got value " + d + " expected range " + n.min + "-" + n.max
          );
        e === "dayOfWeek" && (_ = _ % 7), u.push(_);
      }
    }
    var m = c.split(",");
    if (!m.every(function(d) {
      return d.length > 0;
    }))
      throw new Error("Invalid list value format");
    if (m.length > 1)
      for (var g = 0, h = m.length; g < h; g++)
        l(i(m[g]));
    else
      l(i(c));
    return u.sort(y._sortCompareFn), u;
  }
  function i(c) {
    var u = 1, l = c.split("/");
    if (l.length > 2)
      throw new Error("Invalid repeat: " + c);
    return l.length > 1 ? (l[0] == +l[0] && (l = [l[0] + "-" + n.max, l[1]]), a(l[0], l[l.length - 1])) : a(c, u);
  }
  function a(c, u) {
    var l = [], m = c.split("-");
    if (m.length > 1) {
      if (m.length < 2)
        return +c;
      if (!m[0].length) {
        if (!m[1].length)
          throw new Error("Invalid range: " + c);
        return +c;
      }
      var g = +m[0], h = +m[1];
      if (Number.isNaN(g) || Number.isNaN(h) || g < n.min || h > n.max)
        throw new Error(
          "Constraint error, got range " + g + "-" + h + " expected range " + n.min + "-" + n.max
        );
      if (g > h)
        throw new Error("Invalid range: " + c);
      var d = +u;
      if (Number.isNaN(d) || d <= 0)
        throw new Error("Constraint error, cannot repeat at every " + d + " time.");
      e === "dayOfWeek" && h % 7 === 0 && l.push(0);
      for (var w = g, S = h; w <= S; w++) {
        var T = l.indexOf(w) !== -1;
        !T && d > 0 && d % u === 0 ? (d = 1, l.push(w)) : d++;
      }
      return l;
    }
    return Number.isNaN(+c) ? c : +c;
  }
  return o(r);
};
y._sortCompareFn = function(t, e) {
  var r = typeof t == "number", n = typeof e == "number";
  return r && n ? t - e : !r && n ? 1 : r && !n ? -1 : t.localeCompare(e);
};
y._handleMaxDaysInMonth = function(t) {
  if (t.month.length === 1) {
    var e = y.daysInMonth[t.month[0] - 1];
    if (t.dayOfMonth[0] > e)
      throw new Error("Invalid explicit day of month definition");
    return t.dayOfMonth.filter(function(r) {
      return r === "L" ? !0 : r <= e;
    }).sort(y._sortCompareFn);
  }
};
y._freezeFields = function(t) {
  for (var e = 0, r = y.map.length; e < r; ++e) {
    var n = y.map[e], s = t[n];
    t[n] = Object.freeze(s);
  }
  return Object.freeze(t);
};
y.prototype._applyTimezoneShift = function(t, e, r) {
  if (r === "Month" || r === "Day") {
    var n = t.getTime();
    t[e + r]();
    var s = t.getTime();
    n === s && (t.getMinutes() === 0 && t.getSeconds() === 0 ? t.addHour() : t.getMinutes() === 59 && t.getSeconds() === 59 && t.subtractHour());
  } else {
    var o = t.getHours();
    t[e + r]();
    var i = t.getHours(), a = i - o;
    a === 2 ? this.fields.hour.length !== 24 && (this._dstStart = i) : a === 0 && t.getMinutes() === 0 && t.getSeconds() === 0 && this.fields.hour.length !== 24 && (this._dstEnd = i);
  }
};
y.prototype._findSchedule = function(e) {
  function r(T, _) {
    for (var A = 0, j = _.length; A < j; A++)
      if (_[A] >= T)
        return _[A] === T;
    return _[0] === T;
  }
  function n(T, _) {
    if (_ < 6) {
      if (T.getDate() < 8 && _ === 1)
        return !0;
      var A = T.getDate() % 7 ? 1 : 0, j = T.getDate() - T.getDate() % 7, te = Math.floor(j / 7) + A;
      return te === _;
    }
    return !1;
  }
  function s(T) {
    return T.length > 0 && T.some(function(_) {
      return typeof _ == "string" && _.indexOf("L") >= 0;
    });
  }
  e = e || !1;
  var o = e ? "subtract" : "add", i = new pe(this._currentDate, this._tz), a = this._startDate, c = this._endDate, u = i.getTime(), l = 0;
  function m(T) {
    return T.some(function(_) {
      if (!s([_]))
        return !1;
      var A = Number.parseInt(_[0]) % 7;
      if (Number.isNaN(A))
        throw new Error("Invalid last weekday of the month expression: " + _);
      return i.getDay() === A && i.isLastWeekdayOfMonth();
    });
  }
  for (; l < $n; ) {
    if (l++, e) {
      if (a && i.getTime() - a.getTime() < 0)
        throw new Error("Out of the timespan range");
    } else if (c && c.getTime() - i.getTime() < 0)
      throw new Error("Out of the timespan range");
    var g = r(i.getDate(), this.fields.dayOfMonth);
    s(this.fields.dayOfMonth) && (g = g || i.isLastDayOfMonth());
    var h = r(i.getDay(), this.fields.dayOfWeek);
    s(this.fields.dayOfWeek) && (h = h || m(this.fields.dayOfWeek));
    var d = this.fields.dayOfMonth.length >= y.daysInMonth[i.getMonth()], w = this.fields.dayOfWeek.length === y.constraints[5].max - y.constraints[5].min + 1, S = i.getHours();
    if (!g && (!h || w)) {
      this._applyTimezoneShift(i, o, "Day");
      continue;
    }
    if (!d && w && !g) {
      this._applyTimezoneShift(i, o, "Day");
      continue;
    }
    if (d && !w && !h) {
      this._applyTimezoneShift(i, o, "Day");
      continue;
    }
    if (this._nthDayOfWeek > 0 && !n(i, this._nthDayOfWeek)) {
      this._applyTimezoneShift(i, o, "Day");
      continue;
    }
    if (!r(i.getMonth() + 1, this.fields.month)) {
      this._applyTimezoneShift(i, o, "Month");
      continue;
    }
    if (r(S, this.fields.hour)) {
      if (this._dstEnd === S && !e) {
        this._dstEnd = null, this._applyTimezoneShift(i, "add", "Hour");
        continue;
      }
    } else if (this._dstStart !== S) {
      this._dstStart = null, this._applyTimezoneShift(i, o, "Hour");
      continue;
    } else if (!r(S - 1, this.fields.hour)) {
      i[o + "Hour"]();
      continue;
    }
    if (!r(i.getMinutes(), this.fields.minute)) {
      this._applyTimezoneShift(i, o, "Minute");
      continue;
    }
    if (!r(i.getSeconds(), this.fields.second)) {
      this._applyTimezoneShift(i, o, "Second");
      continue;
    }
    if (u === i.getTime()) {
      o === "add" || i.getMilliseconds() === 0 ? this._applyTimezoneShift(i, o, "Second") : i.setMilliseconds(0);
      continue;
    }
    break;
  }
  if (l >= $n)
    throw new Error("Invalid expression, loop limit exceeded");
  return this._currentDate = new pe(i, this._tz), this._hasIterated = !0, i;
};
y.prototype.next = function() {
  var e = this._findSchedule();
  return this._isIterator ? {
    value: e,
    done: !this.hasNext()
  } : e;
};
y.prototype.prev = function() {
  var e = this._findSchedule(!0);
  return this._isIterator ? {
    value: e,
    done: !this.hasPrev()
  } : e;
};
y.prototype.hasNext = function() {
  var t = this._currentDate, e = this._hasIterated;
  try {
    return this._findSchedule(), !0;
  } catch {
    return !1;
  } finally {
    this._currentDate = t, this._hasIterated = e;
  }
};
y.prototype.hasPrev = function() {
  var t = this._currentDate, e = this._hasIterated;
  try {
    return this._findSchedule(!0), !0;
  } catch {
    return !1;
  } finally {
    this._currentDate = t, this._hasIterated = e;
  }
};
y.prototype.iterate = function(e, r) {
  var n = [];
  if (e >= 0)
    for (var s = 0, o = e; s < o; s++)
      try {
        var i = this.next();
        n.push(i), r && r(i, s);
      } catch {
        break;
      }
  else
    for (var s = 0, o = e; s > o; s--)
      try {
        var i = this.prev();
        n.push(i), r && r(i, s);
      } catch {
        break;
      }
  return n;
};
y.prototype.reset = function(e) {
  this._currentDate = new pe(e || this._options.currentDate);
};
y.prototype.stringify = function(e) {
  for (var r = [], n = e ? 0 : 1, s = y.map.length; n < s; ++n) {
    var o = y.map[n], i = this.fields[o], a = y.constraints[n];
    o === "dayOfMonth" && this.fields.month.length === 1 ? a = { min: 1, max: y.daysInMonth[this.fields.month[0] - 1] } : o === "dayOfWeek" && (a = { min: 0, max: 6 }, i = i[i.length - 1] === 7 ? i.slice(0, -1) : i), r.push(Qd(i, a.min, a.max));
  }
  return r.join(" ");
};
y.parse = function(e, r) {
  var n = this;
  typeof r == "function" && (r = {});
  function s(o, i) {
    i || (i = {}), typeof i.currentDate > "u" && (i.currentDate = new pe(void 0, n._tz)), y.predefined[o] && (o = y.predefined[o]);
    var a = [], c = (o + "").trim().split(/\s+/);
    if (c.length > 6)
      throw new Error("Invalid cron expression");
    for (var u = y.map.length - c.length, l = 0, m = y.map.length; l < m; ++l) {
      var g = y.map[l], h = c[c.length > m ? l : l - u];
      if (l < u || !h)
        a.push(
          y._parseField(
            g,
            y.parseDefaults[l],
            y.constraints[l]
          )
        );
      else {
        var d = g === "dayOfWeek" ? _(h) : h;
        a.push(
          y._parseField(
            g,
            d,
            y.constraints[l]
          )
        );
      }
    }
    for (var w = {}, l = 0, m = y.map.length; l < m; l++) {
      var S = y.map[l];
      w[S] = a[l];
    }
    var T = y._handleMaxDaysInMonth(w);
    return w.dayOfMonth = T || w.dayOfMonth, new y(w, i);
    function _(A) {
      var j = A.split("#");
      if (j.length > 1) {
        var te = +j[j.length - 1];
        if (/,/.test(A))
          throw new Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");
        if (/\//.test(A))
          throw new Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");
        if (/-/.test(A))
          throw new Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");
        if (j.length > 2 || Number.isNaN(te) || te < 1 || te > 5)
          throw new Error("Constraint error, invalid dayOfWeek occurrence number (#)");
        return i.nthDayOfWeek = te, j[0];
      }
      return A;
    }
  }
  return s(e, r);
};
y.fieldsToExpression = function(e, r) {
  function n(g, h, d) {
    if (!h)
      throw new Error("Validation error, Field " + g + " is missing");
    if (h.length === 0)
      throw new Error("Validation error, Field " + g + " contains no values");
    for (var w = 0, S = h.length; w < S; w++) {
      var T = h[w];
      if (!y._isValidConstraintChar(d, T) && (typeof T != "number" || Number.isNaN(T) || T < d.min || T > d.max))
        throw new Error(
          "Constraint error, got value " + T + " expected range " + d.min + "-" + d.max
        );
    }
  }
  for (var s = {}, o = 0, i = y.map.length; o < i; ++o) {
    var a = y.map[o], c = e[a];
    n(
      a,
      c,
      y.constraints[o]
    );
    for (var u = [], l = -1; ++l < c.length; )
      u[l] = c[l];
    if (c = u.sort(y._sortCompareFn).filter(function(g, h, d) {
      return !h || g !== d[h - 1];
    }), c.length !== u.length)
      throw new Error("Validation error, Field " + a + " contains duplicate values");
    s[a] = c;
  }
  var m = y._handleMaxDaysInMonth(s);
  return s.dayOfMonth = m || s.dayOfMonth, new y(s, r || {});
};
var Xd = y;
const eh = {}, th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eh
}, Symbol.toStringTag, { value: "Module" })), rh = /* @__PURE__ */ Zl(th);
var bt = Xd;
function ue() {
}
ue._parseEntry = function(e) {
  var r = e.split(" ");
  if (r.length === 6)
    return {
      interval: bt.parse(e)
    };
  if (r.length > 6)
    return {
      interval: bt.parse(
        r.slice(0, 6).join(" ")
      ),
      command: r.slice(6, r.length)
    };
  throw new Error("Invalid entry: " + e);
};
ue.parseExpression = function(e, r) {
  return bt.parse(e, r);
};
ue.fieldsToExpression = function(e, r) {
  return bt.fieldsToExpression(e, r);
};
ue.parseString = function(e) {
  for (var r = e.split(`
`), n = {
    variables: {},
    expressions: [],
    errors: {}
  }, s = 0, o = r.length; s < o; s++) {
    var i = r[s], a = null, c = i.trim();
    if (c.length > 0) {
      if (c.match(/^#/))
        continue;
      if (a = c.match(/^(.*)=(.*)$/))
        n.variables[a[1]] = a[2];
      else {
        var u = null;
        try {
          u = ue._parseEntry("0 " + c), n.expressions.push(u.interval);
        } catch (l) {
          n.errors[c] = l;
        }
      }
    }
  }
  return n;
};
ue.parseFile = function(e, r) {
  rh.readFile(e, function(n, s) {
    if (n) {
      r(n);
      return;
    }
    return r(null, ue.parseString(s.toString()));
  });
};
var nh = ue;
const uh = (t) => /^(async\s+)?function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(t), ch = (t) => /^async\s*function\s*\w*\s*\([\w\s,]*\)\s*\{[\s\S]*\}$/.test(t), lh = (t) => {
  if (!t)
    return !1;
  try {
    const e = nh.parseExpression(t);
    console.log("interval", e);
    const r = e.next().toDate();
    return console.log("nextDate", r), !0;
  } catch (e) {
    return console.log("err", e), !1;
  }
}, fh = (t) => /^[a-zA-Z0-9_-]{4,16}$/.test(t), dh = (t) => /^[a-zA-Z0-9_-]{6,16}$/.test(t), hh = (t, e) => t + e;
export {
  sh as Crawler,
  hh as add,
  dh as checkPassword,
  fh as checkUserName,
  Hl as defaultCrawlerSchema,
  ah as defaultCrawlerSchemaMap,
  ql as defaultCrawlerSchemaPython,
  ih as generateParams,
  oh as generateParamsByRange,
  ch as isAsyncFunctionString,
  lh as isCron,
  uh as isFunctionString,
  zl as turnFnStringToFn
};
//# sourceMappingURL=index.es.js.map
