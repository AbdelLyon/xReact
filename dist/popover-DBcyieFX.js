import { j as o } from "./jsx-runtime-B6kdoens.js";
import * as i from "react";
import * as t from "@radix-ui/react-popover";
import { cn as n } from "./utils/@els_xefi/x-react.es.js";
const c = t.Root, f = t.Trigger, g = t.Close, m = i.forwardRef(({ className: e, align: a = "center", sideOffset: r = 4, ...s }, d) => /* @__PURE__ */ o.jsx(t.Portal, { children: /* @__PURE__ */ o.jsx(
  t.Content,
  {
    ref: d,
    align: a,
    className: n(
      "z-20 rounded-md border border-border bg-white dark:bg-card text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    "data-testid": "select-element",
    sideOffset: r,
    ...s
  }
) }));
m.displayName = t.Content.displayName;
export {
  g as P,
  c as a,
  f as b,
  m as c
};
