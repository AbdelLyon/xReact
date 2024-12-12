/* empty css                   */
import { j as e } from "../../jsx-runtime-B6kdoens.js";
import { a as x } from "../../useToast-DD3_Ts5P.js";
import * as a from "react";
import * as s from "@radix-ui/react-toast";
import { cva as g } from "class-variance-authority";
import { X as v } from "lucide-react";
import { cn as i } from "../../utils/@els_xefi/x-react.es.js";
const b = s.Provider, n = a.forwardRef(({ className: o, ...r }, t) => /* @__PURE__ */ e.jsx(
  s.Viewport,
  {
    ref: t,
    className: i(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      o
    ),
    ...r
  }
));
n.displayName = s.Viewport.displayName;
const h = g(
  "group pointer-events-auto relative flex w-full border-border items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        error: "destructive group bg-primary text-destructive-foreground",
        success: "destructive group bg-green-600 text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), c = a.forwardRef(({ className: o, variant: r, ...t }, d) => /* @__PURE__ */ e.jsx(
  s.Root,
  {
    ref: d,
    className: i(h({ variant: r }), o),
    ...t
  }
));
c.displayName = s.Root.displayName;
const w = a.forwardRef(({ className: o, ...r }, t) => /* @__PURE__ */ e.jsx(
  s.Action,
  {
    ref: t,
    className: i(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      o
    ),
    ...r
  }
));
w.displayName = s.Action.displayName;
const l = a.forwardRef(({ className: o, ...r }, t) => /* @__PURE__ */ e.jsx(
  s.Close,
  {
    ref: t,
    className: i(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      o
    ),
    "toast-close": "",
    ...r,
    children: /* @__PURE__ */ e.jsx(v, { className: "size-4" })
  }
));
l.displayName = s.Close.displayName;
const u = a.forwardRef(({ className: o, ...r }, t) => /* @__PURE__ */ e.jsx(
  s.Title,
  {
    ref: t,
    className: i("text-sm font-semibold", o),
    ...r
  }
));
u.displayName = s.Title.displayName;
const p = a.forwardRef(({ className: o, ...r }, t) => /* @__PURE__ */ e.jsx(
  s.Description,
  {
    ref: t,
    className: i("text-sm opacity-90", o),
    ...r
  }
));
p.displayName = s.Description.displayName;
function k() {
  const { toasts: o } = x();
  return /* @__PURE__ */ e.jsxs(b, { children: [
    o.map(
      ({ id: r, title: t, description: d, action: m, ...f }) => /* @__PURE__ */ e.jsxs(c, { ...f, className: "relative", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-1", children: [
          t && /* @__PURE__ */ e.jsx(u, { children: t }),
          d && /* @__PURE__ */ e.jsx(p, { children: d })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-1 right-1", children: m }),
        /* @__PURE__ */ e.jsx(l, {})
      ] }, r)
    ),
    /* @__PURE__ */ e.jsx(n, {})
  ] });
}
export {
  k as Toaster
};
