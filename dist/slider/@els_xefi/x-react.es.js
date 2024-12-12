/* empty css                   */
import { j as e } from "../../jsx-runtime-B6kdoens.js";
import * as g from "react";
import { useState as h, useEffect as j } from "react";
import * as a from "@radix-ui/react-slider";
import { cn as f } from "../../utils/@els_xefi/x-react.es.js";
const b = g.forwardRef(({ className: o, ...r }, s) => /* @__PURE__ */ e.jsx(
  a.Root,
  {
    ref: s,
    className: f(
      "relative flex w-full touch-none select-none items-center",
      o
    ),
    ...r,
    children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(a.Track, { className: "bg-card-light relative h-2 w-full grow overflow-hidden rounded-full dark:bg-secondary", children: /* @__PURE__ */ e.jsx(a.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ e.jsx(a.Thumb, { className: "focus-visible:ring-ring block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" }),
      /* @__PURE__ */ e.jsx(a.Thumb, { className: "focus-visible:ring-ring block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" }),
      r.children
    ] })
  }
));
b.displayName = a.Root.displayName;
function w({
  className: o,
  onChange: r,
  values: s = {
    min: 0,
    max: 0
  },
  max: i = 100,
  min: l = 0,
  step: u = 1,
  showTooltips: m,
  ...x
}) {
  const [t, n] = h(s);
  j(() => {
    n(s);
  }, [s]);
  const p = (d) => {
    const c = {
      min: d[0],
      max: d[1]
    };
    n(c), r == null || r(c);
  };
  return /* @__PURE__ */ e.jsx(
    b,
    {
      className: f("w-full mt-10 relative", o),
      max: i,
      min: l,
      step: u,
      value: [t.min, t.max],
      onValueChange: p,
      ...x,
      children: m && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute -top-9 left-0 -translate-x-1/2",
            style: {
              left: `${(t.min - l) / (i - l) * 100}%`
            },
            children: /* @__PURE__ */ e.jsx("div", { className: "rounded-sm bg-black/80 px-2 py-1 text-xs text-white after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-x-transparent after:border-b-transparent after:border-t-black/80 after:content-['']", children: t.min })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute -top-9 right-0 translate-x-1/2",
            style: {
              right: `${100 - (t.max - l) / (i - l) * 100}%`
            },
            children: /* @__PURE__ */ e.jsx("div", { className: "rounded-sm bg-black/80 px-2 py-1 text-xs text-white after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-x-transparent after:border-b-transparent after:border-t-black/80 after:content-['']", children: t.max })
          }
        )
      ] })
    }
  );
}
export {
  w as Slider
};
