/* empty css                   */
import { j as e } from "../../jsx-runtime-B6kdoens.js";
import { forwardRef as b, memo as w, useCallback as g, useState as T, useEffect as M, useMemo as S } from "react";
import { useInView as q } from "react-intersection-observer";
import { cn as i } from "../../utils/@els_xefi/x-react.es.js";
import { a as z, c as D, b as J, A as K } from "../../accordion-CQ-93Czi.js";
import { C as I } from "../../radio-group-DsOz3mUC.js";
import { ChevronUp as O, ChevronDown as P, Loader2 as Q } from "lucide-react";
import "@tanstack/react-query";
import { u as W } from "../../useInfiniteScroll-C2mAZS0K.js";
import "next-themes";
const X = b(
  ({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx("div", { className: "relative w-full overflow-auto rounded-t-md", children: /* @__PURE__ */ e.jsx(
    "table",
    {
      ref: t,
      className: i("w-full caption-bottom text-sm", s),
      ...a
    }
  ) })
);
X.displayName = "Table";
const Y = b(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx("thead", { ref: t, className: i("[&_tr]:border-b", s), ...a }));
Y.displayName = "TableHeader";
const Z = b(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  "tbody",
  {
    ref: t,
    className: i("[&_tr:last-child]:border-0", s),
    ...a
  }
));
Z.displayName = "TableBody";
const R = b(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  "tfoot",
  {
    ref: t,
    className: i(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      s
    ),
    ...a
  }
));
R.displayName = "TableFooter";
const C = b(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  "tr",
  {
    ref: t,
    className: i(
      "border-b transition-colors hover:bg-hover data-[state=selected]:bg-muted",
      s
    ),
    ...a
  }
));
C.displayName = "TableRow";
const ee = b(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  "th",
  {
    ref: t,
    className: i(
      "h-12 px-4 bg-background dark:bg-card text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      s
    ),
    ...a
  }
));
ee.displayName = "TableHead";
const se = b(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  "td",
  {
    ref: t,
    className: i("p-4 align-middle [&:has([role=checkbox])]:pr-0", s),
    ...a
  }
));
se.displayName = "TableCell";
const ae = b(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  "caption",
  {
    ref: t,
    className: i("mt-4 text-sm text-muted-foreground", s),
    ...a
  }
));
ae.displayName = "TableCaption";
const te = ({
  columns: s,
  index: a
}) => /* @__PURE__ */ e.jsxs(
  z,
  {
    className: "w-full border-b last:border-b-0",
    value: `skeleton-${a}`,
    children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex h-14 w-full items-center px-4", children: [
        /* @__PURE__ */ e.jsx("div", { className: "mr-2 size-4 animate-pulse rounded-sm bg-border dark:bg-card" }),
        " ",
        s.map((t, o) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: i("flex-1", t.className),
            children: /* @__PURE__ */ e.jsx("div", { className: "h-4 w-3/4 animate-pulse rounded bg-border dark:bg-card" })
          },
          `skeleton-cell-${a}-${o}`
        )),
        /* @__PURE__ */ e.jsx("div", { className: "size-4 animate-pulse rounded-sm bg-border dark:bg-card" })
      ] }),
      /* @__PURE__ */ e.jsx(D, { className: "h-4 w-full bg-border dark:bg-card", children: /* @__PURE__ */ e.jsx("div", { className: "mt-2 h-4 w-1/2 animate-pulse rounded bg-border dark:bg-card" }) })
    ]
  },
  `skeleton-${a}`
), B = w(
  ({
    row: s,
    columns: a,
    isChecked: t,
    onCheckboxChange: o,
    children: r,
    observerRef: x,
    checkboxSelection: l,
    onAccordionClick: n,
    accordionContent: f
  }) => {
    const j = (d, c) => d.cell ? d.cell(c, d) : d.field !== void 0 ? c[d.field] : void 0, h = g(() => {
      n == null || n(s);
    }, [n, s]);
    return /* @__PURE__ */ e.jsxs(
      z,
      {
        ref: x,
        className: "w-full last:border-b-0",
        value: String(s.id),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative flex h-14 w-full items-center px-4", children: [
            l && /* @__PURE__ */ e.jsx(
              I,
              {
                checked: t,
                className: "mr-2",
                onCheckedChange: () => o(s)
              }
            ),
            a.map((d) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: i("flex-1 text-left", d.className),
                children: j(d, s)
              },
              `cell-${s.id}-${String(d.field)}`
            )),
            (f || r) && /* @__PURE__ */ e.jsx(
              J,
              {
                className: "absolute right-4 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center",
                onClick: h
              }
            )
          ] }),
          (f || r) && /* @__PURE__ */ e.jsx(D, { className: "rounded-t px-2 shadow", children: f || r })
        ]
      }
    );
  }
);
B.displayName = "Body";
const V = w(
  ({
    columns: s,
    isAllChecked: a,
    onSelectAll: t,
    checkboxSelection: o,
    sortConfig: r,
    onSort: x
  }) => /* @__PURE__ */ e.jsx(
    z,
    {
      className: "bg-card-light flex h-14 w-full items-center rounded-t-md px-4 py-3 dark:bg-card",
      value: "header",
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex h-14 w-full items-center", children: [
        o && /* @__PURE__ */ e.jsx(
          I,
          {
            checked: a,
            className: "mr-2 dark:border-white/5",
            onCheckedChange: t
          }
        ),
        s.map((l) => /* @__PURE__ */ e.jsx(
          "button",
          {
            className: i(
              "flex-1 font-semibold text-left flex items-center justify-between gap-2",
              l.className
            ),
            onClick: () => l.sortable && l.field && x(
              l.field,
              r.direction === "asc" ? "desc" : "asc"
            ),
            children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e.jsx("p", { className: "grow opacity-80", children: l.header }),
              l.sortable && l.field && /* @__PURE__ */ e.jsxs("div", { className: "relative size-4 shrink-0", children: [
                /* @__PURE__ */ e.jsx(
                  O,
                  {
                    className: i(
                      "absolute -top-1 transition-opacity duration-200",
                      r.key === l.field && r.direction === "asc" ? "opacity-80" : "opacity-30"
                    ),
                    size: 15
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  P,
                  {
                    className: i(
                      "absolute top-1 transition-opacity duration-200",
                      r.key === l.field && r.direction === "desc" ? "opacity-80" : "opacity-30"
                    ),
                    size: 15
                  }
                )
              ] })
            ] })
          },
          `header-${String(l.field)}`
        ))
      ] })
    }
  )
);
V.displayName = "Header";
const le = () => /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0 left-0 top-1 flex size-full items-center justify-center backdrop-blur-[1px]", children: /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-2 right-0 z-10 flex w-full justify-center text-center text-primary", children: /* @__PURE__ */ e.jsx(Q, { className: "animate-spin font-extrabold" }) }) });
function re(s, a, t) {
  const [o, r] = T(/* @__PURE__ */ new Set()), [x, l] = T(!1), [n, f] = T({
    key: null,
    direction: "asc"
  });
  M(() => {
    l(o.size === s.length);
  }, [o, s]);
  const j = g(
    (c) => {
      r((p) => {
        const m = new Set(p), u = Array.from(m).find(
          (k) => k.id === c.id
        );
        return u ? m.delete(u) : m.add(c), a == null || a(Array.from(m)), m;
      });
    },
    [a]
  ), h = g(
    (c) => {
      c ? (r(new Set(s)), a == null || a(s)) : (r(/* @__PURE__ */ new Set()), a == null || a([]));
    },
    [s, a]
  ), d = g(
    (c, p) => {
      f((m) => {
        const u = m.key === c && m.direction === "asc" ? "desc" : "asc";
        return t == null || t(c, p), { key: c, direction: u };
      });
    },
    [t]
  );
  return {
    checkedRows: o,
    isAllChecked: x,
    sortConfig: n,
    handleCheckboxChange: j,
    handleSelectAll: h,
    handleSort: d
  };
}
function Ne({
  rows: s,
  columns: a,
  caption: t,
  className: o,
  footerContent: r,
  isLoading: x,
  skeletonRows: l = 10,
  onCheckedRowsChange: n,
  children: f,
  onFetchPage: j,
  isFetching: h,
  checkboxSelection: d = !0,
  onSort: c,
  onAccordionClick: p,
  accordionContent: m
}) {
  const { ref: u, inView: k } = q();
  W(k, j);
  const {
    checkedRows: A,
    isAllChecked: U,
    sortConfig: _,
    handleCheckboxChange: $,
    handleSelectAll: E,
    handleSort: F
  } = re(s, n, c), y = S(() => a, [a]), G = S(
    () => Array(l).fill(null).map((N, v) => /* @__PURE__ */ e.jsx(
      te,
      {
        columns: y,
        index: v
      },
      `skeleton-row-${crypto.randomUUID()}`
    )),
    [l, y]
  ), L = S(
    () => s.map((N, v) => {
      const H = m ? m(N) : null;
      return /* @__PURE__ */ e.jsx(
        B,
        {
          accordionContent: H,
          checkboxSelection: d,
          columns: y,
          i: v,
          isChecked: A.has(N),
          observerRef: v === s.length - 1 ? u : void 0,
          row: N,
          rows: s,
          onAccordionClick: p,
          onCheckboxChange: () => $(N),
          children: H || f
        },
        N.id
      );
    }),
    [
      s,
      y,
      A,
      $,
      u,
      d,
      p,
      m
    ]
  );
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: i(
        "bg-white dark:bg-background border border-border relative rounded-t-md shadow-lg overflow-auto",
        o
      ),
      children: [
        t && /* @__PURE__ */ e.jsx("div", { className: "p-4 text-center text-lg font-semibold", children: t }),
        /* @__PURE__ */ e.jsxs(K, { collapsible: !0, className: "relative w-full", type: "single", children: [
          /* @__PURE__ */ e.jsx(
            V,
            {
              checkboxSelection: d,
              columns: y,
              isAllChecked: U,
              sortConfig: _,
              onSelectAll: E,
              onSort: F
            }
          ),
          x ? G : L,
          h && /* @__PURE__ */ e.jsx(le, {})
        ] }),
        r && /* @__PURE__ */ e.jsx("div", { className: "border-t border-border p-4", children: r })
      ]
    }
  );
}
export {
  Ne as DataGrid
};
