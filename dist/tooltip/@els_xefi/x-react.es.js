/* empty css                   */
import { j as o } from "../../jsx-runtime-B6kdoens.js";
import * as g from "react";
import * as t from "@radix-ui/react-tooltip";
import { cn as s } from "../../utils/@els_xefi/x-react.es.js";
const h = t.Provider, T = t.Root, j = t.Trigger, n = g.forwardRef(({ className: e, sideOffset: i = 4, ...r }, a) => /* @__PURE__ */ o.jsx(
  t.Content,
  {
    ref: a,
    className: s(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: i,
    ...r
  }
));
n.displayName = t.Content.displayName;
const z = ({
  trigger: e,
  content: i,
  triggerAsChild: r = !1,
  delayDuration: a = 300,
  side: m = "top",
  align: l = "center",
  classNames: d = {},
  open: p,
  onOpenChange: c,
  sideOffset: f,
  ...x
}) => /* @__PURE__ */ o.jsx(h, { children: /* @__PURE__ */ o.jsxs(
  T,
  {
    delayDuration: a,
    open: p,
    onOpenChange: c,
    ...x,
    children: [
      /* @__PURE__ */ o.jsx(j, { asChild: r, className: d.trigger, children: e }),
      /* @__PURE__ */ o.jsx(
        n,
        {
          align: l,
          className: s("z-50", d.content),
          side: m,
          sideOffset: f,
          children: i
        }
      )
    ]
  }
) });
export {
  z as Tooltip
};
