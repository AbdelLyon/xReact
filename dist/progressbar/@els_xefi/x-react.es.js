/* empty css                   */
import { j as l } from "../../jsx-runtime-B6kdoens.js";
import * as w from "react";
import { useState as b, useMemo as y, useEffect as $ } from "react";
import * as m from "@radix-ui/react-progress";
import { cn as g } from "../../utils/@els_xefi/x-react.es.js";
const h = w.forwardRef(({ className: o, value: s, ...a }, n) => /* @__PURE__ */ l.jsx(
  m.Root,
  {
    ref: n,
    className: g(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      o
    ),
    ...a,
    children: /* @__PURE__ */ l.jsx(
      m.Indicator,
      {
        className: "size-full flex-1 transition-all",
        style: {
          ...a.style,
          transform: `translateX(-${100 - (s ?? 0)}%)`
        }
      }
    )
  }
));
h.displayName = m.Root.displayName;
function R({
  segments: o,
  animate: s = !1,
  animationDuration: a = 500,
  maxValue: n
  // Add maxValue to destructured props
}) {
  const [p, i] = b([]), v = o.reduce((e, r) => e + r.value, 0), u = n !== void 0 ? n : v, t = y(() => o.map((e) => ({
    ...e,
    percentage: e.value / u * 100
  })), [o, u]);
  return $(() => {
    if (s) {
      i(new Array(t.length).fill(0));
      const e = t.map((r, f) => setTimeout(() => {
        i((d) => {
          const c = [...d];
          return c[f] = r.percentage, c;
        });
      }));
      return () => e.forEach((r) => clearTimeout(r));
    } else
      i(t.map((e) => e.percentage));
  }, [u, o, s, t]), /* @__PURE__ */ l.jsx("div", { className: "w-full", children: /* @__PURE__ */ l.jsx("div", { className: "relative h-4 w-full overflow-hidden rounded-full border border-border bg-gray-200", children: t.map((e, r) => {
    const f = t.slice(0, r).reduce((d, c) => d + c.percentage, 0);
    return /* @__PURE__ */ l.jsx(
      h,
      {
        className: g("absolute h-full rounded-none "),
        style: {
          left: `${f}%`,
          width: s ? `${p[r]}%` : `${e.percentage}%`,
          backgroundColor: e.color,
          transition: s ? `width ${a}ms ease-in` : "none"
        },
        value: p[r]
      },
      `progress-bar-${e.color}-${r}`
    );
  }) }) });
}
export {
  R as Progress
};
