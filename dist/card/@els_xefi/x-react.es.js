/* empty css                   */
import { j as t } from "../../jsx-runtime-B6kdoens.js";
import { forwardRef as m } from "react";
import { cn as f } from "../../utils/@els_xefi/x-react.es.js";
import { C as p, a as h, b as j, c as C } from "../../card-Dei9xlT8.js";
const x = m(
  ({ height: e = 100, width: d = 150, className: n, ...o }, i) => /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: i,
      className: f(
        "relative overflow-hidden transition-transform duration-300 ease-in-out transform",
        n
      ),
      "data-testid": "card-image",
      style: { height: e, width: d },
      ...o
    }
  )
);
x.displayName = "CardImage";
const g = ({
  className: e,
  width: d,
  height: n,
  clickable: o = !1,
  children: i
}) => /* @__PURE__ */ t.jsx(
  C,
  {
    className: f(
      "relative flex flex-col border rounded-sm transition-transform duration-300 ease-in-out",
      {
        "cursor-pointer hover:shadow-lg": o
      },
      e
    ),
    "data-testid": "custom-card",
    style: { width: d, height: n },
    children: i
  }
), b = ({
  title: e,
  image: d,
  className: n,
  footer: o,
  clickable: i = !1,
  heightImage: u = 200,
  width: a = 300,
  classNames: r,
  children: l
}) => /* @__PURE__ */ t.jsxs(
  g,
  {
    className: `overflow-hidden ${n}`,
    clickable: i,
    width: a,
    children: [
      /* @__PURE__ */ t.jsx(
        x,
        {
          className: `rounded-t-md ${r == null ? void 0 : r.image}`,
          height: u,
          width: a,
          children: d
        }
      ),
      /* @__PURE__ */ t.jsx(p, { className: `mt-2 px-4 ${r == null ? void 0 : r.title}`, children: /* @__PURE__ */ t.jsx("h2", { className: "text-lg font-semibold", children: e }) }),
      /* @__PURE__ */ t.jsx(h, { className: `mt-2 px-4 ${r == null ? void 0 : r.content}`, children: l }),
      o && /* @__PURE__ */ t.jsx(
        j,
        {
          className: `flex w-full justify-end px-4 py-2 ${r == null ? void 0 : r.footer}`,
          children: o
        }
      )
    ]
  }
);
export {
  b as Card
};
