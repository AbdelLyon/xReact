/* empty css                   */
import { j as t } from "../../jsx-runtime-B6kdoens.js";
import * as c from "react";
import { Children as v, isValidElement as x } from "react";
import { c as b, d as j, C as T, e as y, a as C } from "../../card-Dei9xlT8.js";
import * as n from "@radix-ui/react-tabs";
import { cva as h } from "class-variance-authority";
import { cn as o } from "../../utils/@els_xefi/x-react.es.js";
const N = n.Root, f = c.forwardRef(({ className: s, ...i }, e) => /* @__PURE__ */ t.jsx(
  n.List,
  {
    ref: e,
    className: o(
      "inline-flex h-10 rounded-md bg-white dark:bg-background p-1 text-muted-foreground",
      s
    ),
    ...i
  }
));
f.displayName = n.List.displayName;
const w = h(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary",
        button: "rounded-sm data-[state=active]:bg-card-light data-[state=active]:dark:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), m = c.forwardRef(({ className: s, variant: i, ...e }, d) => /* @__PURE__ */ t.jsx(
  n.Trigger,
  {
    ref: d,
    className: o(w({ variant: i, className: s })),
    ...e
  }
));
m.displayName = n.Trigger.displayName;
const l = c.forwardRef(({ className: s, ...i }, e) => /* @__PURE__ */ t.jsx(
  n.Content,
  {
    ref: e,
    className: o(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      s
    ),
    ...i
  }
));
l.displayName = n.Content.displayName;
function H({
  defaultTab: s,
  tabs: i,
  classNames: e = {},
  children: d,
  variant: u,
  onValueChange: p
}) {
  return /* @__PURE__ */ t.jsxs(
    N,
    {
      className: e.root,
      defaultValue: s,
      onValueChange: p,
      children: [
        /* @__PURE__ */ t.jsx(f, { className: o("flex w-max gap-2", e.tabsList), children: i.map((r) => /* @__PURE__ */ t.jsx(
          m,
          {
            className: e.tabsTrigger,
            value: r.value,
            variant: u,
            children: r.titleTrigger
          },
          r.value
        )) }),
        v.map(d, (r) => {
          if (x(r) && r.type === l) {
            const a = i.find((g) => g.value === r.props.value);
            return /* @__PURE__ */ t.jsx(l, { value: r.props.value, children: /* @__PURE__ */ t.jsxs(b, { className: e.card, children: [
              ((a == null ? void 0 : a.title) || (a == null ? void 0 : a.description)) && /* @__PURE__ */ t.jsxs(j, { className: e.cardHeader, children: [
                (a == null ? void 0 : a.title) && /* @__PURE__ */ t.jsx(T, { className: e.cardTitle, children: a.title }),
                (a == null ? void 0 : a.description) && /* @__PURE__ */ t.jsx(y, { className: e.cardDescription, children: a.description })
              ] }),
              /* @__PURE__ */ t.jsx(
                C,
                {
                  className: o("space-y-2", e.cardContent),
                  children: r
                }
              )
            ] }) }, r.props.value);
          }
          return null;
        })
      ]
    }
  );
}
export {
  H as Tabs,
  l as TabsContent
};
