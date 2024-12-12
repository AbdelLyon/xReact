import { j as s } from "./jsx-runtime-B6kdoens.js";
import * as d from "react";
import { cn as o } from "./utils/@els_xefi/x-react.es.js";
const t = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: o(
      "rounded-lg border border-border bg-white dark:bg-background text-card-foreground shadow-sm",
      a
    ),
    ...e
  }
));
t.displayName = "Card";
const i = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: o("flex flex-col space-y-1.5 p-4", a),
    ...e
  }
));
i.displayName = "CardHeader";
const m = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: o(
      "text-2xl font-semibold leading-none tracking-tight",
      a
    ),
    ...e
  }
));
m.displayName = "CardTitle";
const n = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "p",
  {
    ref: r,
    className: o("text-sm text-muted-foreground", a),
    ...e
  }
));
n.displayName = "CardDescription";
const c = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx("div", { ref: r, className: o("p-4 pt-0", a), ...e }));
c.displayName = "CardContent";
const l = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: o("flex items-center p-4 pt-0", a),
    ...e
  }
));
l.displayName = "CardFooter";
export {
  m as C,
  c as a,
  l as b,
  t as c,
  i as d,
  n as e
};
