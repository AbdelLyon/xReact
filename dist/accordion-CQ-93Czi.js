import { j as a } from "./jsx-runtime-B6kdoens.js";
import * as i from "react";
import * as e from "@radix-ui/react-accordion";
import { ChevronDown as c } from "lucide-react";
import { cn as n } from "./utils/@els_xefi/x-react.es.js";
const N = e.Root, m = i.forwardRef(({ className: o, ...r }, t) => /* @__PURE__ */ a.jsx(
  e.Item,
  {
    ref: t,
    className: n("border-b border-border", o),
    ...r
  }
));
m.displayName = "AccordionItem";
const d = i.forwardRef(({ className: o, children: r, ...t }, s) => /* @__PURE__ */ a.jsx(e.Header, { className: "relative flex", children: /* @__PURE__ */ a.jsxs(
  e.Trigger,
  {
    ref: s,
    className: n(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
      o
    ),
    ...t,
    children: [
      r,
      /* @__PURE__ */ a.jsx(c, { className: "-mt-5 size-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
d.displayName = e.Trigger.displayName;
const l = i.forwardRef(({ className: o, children: r, ...t }, s) => /* @__PURE__ */ a.jsx(
  e.Content,
  {
    ref: s,
    className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all",
    ...t,
    children: /* @__PURE__ */ a.jsx("div", { className: n("pb-4 pt-0", o), children: r })
  }
));
l.displayName = e.Content.displayName;
export {
  N as A,
  m as a,
  d as b,
  l as c
};
