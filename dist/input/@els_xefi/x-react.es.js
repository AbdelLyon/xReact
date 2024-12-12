/* empty css                   */
import { I as O, a as I, b as P, c as R, R as y, d as G } from "../../radio-group-DsOz3mUC.js";
import { C as E, e as M, S as V, T as q } from "../../radio-group-DsOz3mUC.js";
import { j as r } from "../../jsx-runtime-B6kdoens.js";
import { cn as v } from "../../utils/@els_xefi/x-react.es.js";
function N({
  maxLength: t = 6,
  groupSize: e = 3,
  separator: s = !0,
  onChange: l,
  onComplete: c,
  defaultValue: n = "",
  disabled: u = !1,
  label: j,
  classNames: a = {},
  ...h
}) {
  const d = Math.ceil(t / e), p = Array.from({ length: d }, (o, i) => {
    const m = i * e, b = Array.from({ length: e }, (w, T) => {
      const f = m + T;
      return f < t ? /* @__PURE__ */ r.jsx(O, { className: a.slot, index: f }, f) : null;
    }).filter(Boolean), $ = /* @__PURE__ */ r.jsx(I, { className: a.group, children: b }, `group-${i}`);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      $,
      i < d - 1 && s && /* @__PURE__ */ r.jsx(
        P,
        {
          className: a.separator,
          children: s
        },
        `sep-${i}`
      )
    ] }, `fragment-${i}`);
  }), x = (o) => {
    l == null || l(o), o.length === t && (c == null || c(o));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: a.root, children: [
    j && /* @__PURE__ */ r.jsx("label", { className: v("block mb-1", a.label), children: j }),
    /* @__PURE__ */ r.jsx(
      R,
      {
        className: a.input,
        defaultValue: n,
        disabled: u,
        maxLength: t,
        onChange: x,
        ...h,
        children: p
      }
    )
  ] });
}
function _({
  options: t,
  defaultValue: e,
  name: s,
  onChange: l,
  className: c = ""
}) {
  return /* @__PURE__ */ r.jsx(
    y,
    {
      className: c,
      defaultValue: e,
      name: s,
      onValueChange: l,
      children: t.map((n, u) => /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: `flex w-max items-center space-x-2 ${t.length === 1 ? "justify-start" : "justify-between"}`,
          children: [
            /* @__PURE__ */ r.jsx(G, { id: `${s}-${u}`, value: n.value }),
            /* @__PURE__ */ r.jsx("label", { htmlFor: `${s}-${u}`, children: n.label })
          ]
        },
        n.value
      ))
    }
  );
}
export {
  E as Checkbox,
  M as Input,
  N as InputOTP,
  _ as Radio,
  V as Switch,
  q as Textarea
};
