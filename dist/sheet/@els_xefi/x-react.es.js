/* empty css                   */
import { j as e } from "../../jsx-runtime-B6kdoens.js";
import * as i from "react";
import * as o from "@radix-ui/react-dialog";
import { cva as h } from "class-variance-authority";
import { X as u } from "lucide-react";
import { cn as d } from "../../utils/@els_xefi/x-react.es.js";
const b = o.Root, g = o.Trigger, R = o.Close, x = o.Portal, l = i.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ e.jsx(
  o.Overlay,
  {
    className: d(
      "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t,
    ref: s
  }
));
l.displayName = o.Overlay.displayName;
const y = h(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right: "inset-y-0 right-0 h-full  w-3/4 border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), c = i.forwardRef(({ side: a = "right", className: t, children: s, ...r }, n) => /* @__PURE__ */ e.jsxs(x, { children: [
  /* @__PURE__ */ e.jsx(l, {}),
  /* @__PURE__ */ e.jsxs(
    o.Content,
    {
      ref: n,
      className: d(y({ side: a }), t),
      ...r,
      children: [
        s,
        /* @__PURE__ */ e.jsxs(o.Close, { className: "focus:ring-ring absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ e.jsx(u, { className: "size-4" }),
          /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
c.displayName = o.Content.displayName;
const m = i.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ e.jsx(
  o.Title,
  {
    ref: s,
    className: d("text-lg font-semibold text-foreground", a),
    ...t
  }
));
m.displayName = o.Title.displayName;
const j = i.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ e.jsx(
  o.Description,
  {
    ref: s,
    className: d("text-sm text-muted-foreground", a),
    ...t
  }
));
j.displayName = o.Description.displayName;
const T = ({
  trigger: a,
  classNames: t,
  children: s,
  title: r,
  direction: n = "right",
  open: p,
  onOpenChange: f
}) => /* @__PURE__ */ e.jsxs(b, { open: p, onOpenChange: f, children: [
  /* @__PURE__ */ e.jsx(g, { asChild: !0, className: t == null ? void 0 : t.trigger, children: a }),
  /* @__PURE__ */ e.jsxs(c, { className: t == null ? void 0 : t.content, side: n, children: [
    r && /* @__PURE__ */ e.jsx(m, { className: " absolute top-2", children: r }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-4", children: s })
  ] })
] });
export {
  R as SheetClose,
  T as SheetSide
};
