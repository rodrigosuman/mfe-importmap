import y from "react";
var l = {}, R = {
  get exports() {
    return l;
  },
  set exports(r) {
    l = r;
  }
}, o = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f;
function b() {
  if (f)
    return o;
  f = 1;
  var r = y, u = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, h = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, e, m) {
    var t, a = {}, p = null, d = null;
    m !== void 0 && (p = "" + m), e.key !== void 0 && (p = "" + e.key), e.ref !== void 0 && (d = e.ref);
    for (t in e)
      x.call(e, t) && !v.hasOwnProperty(t) && (a[t] = e[t]);
    if (s && s.defaultProps)
      for (t in e = s.defaultProps, e)
        a[t] === void 0 && (a[t] = e[t]);
    return { $$typeof: u, type: s, key: p, ref: d, props: a, _owner: h.current };
  }
  return o.Fragment = _, o.jsx = c, o.jsxs = c, o;
}
(function(r) {
  r.exports = b();
})(R);
const n = l.jsx, i = l.jsxs, O = ({ onSubmit: r }) => /* @__PURE__ */ i(
  "form",
  {
    className: "d-flex align-center",
    onSubmit: (u) => {
      u.preventDefault(), r?.({
        data: /* @__PURE__ */ new Date(),
        localidade: "teste",
        pessoas: 10
      });
    },
    children: [
      /* @__PURE__ */ i("fieldset", { children: [
        /* @__PURE__ */ i("div", { className: "form-item", children: [
          /* @__PURE__ */ n("label", { htmlFor: "input-date", children: "Data" }),
          /* @__PURE__ */ n("input", { type: "date", name: "date", id: "input-date" })
        ] }),
        /* @__PURE__ */ i("div", { className: "form-item", children: [
          /* @__PURE__ */ n("label", { htmlFor: "input-local", children: "Local" }),
          /* @__PURE__ */ n("input", { name: "local", id: "input-local" })
        ] }),
        /* @__PURE__ */ i("div", { className: "form-item", children: [
          /* @__PURE__ */ n("label", { htmlFor: "input-pessoas", children: "Pessoas" }),
          /* @__PURE__ */ n("input", { type: "number", name: "pessoas", id: "input-pessoas" })
        ] })
      ] }),
      /* @__PURE__ */ n("button", { type: "submit", children: "Buscar" })
    ]
  }
);
export {
  O as Motor
};
