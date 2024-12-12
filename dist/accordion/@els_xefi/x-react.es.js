/* empty css                   */
import { j as o } from "../../jsx-runtime-B6kdoens.js";
import { A as g, a as A, b as c, c as f } from "../../accordion-CQ-93Czi.js";
import { cn as d } from "../../utils/@els_xefi/x-react.es.js";
const E = ({
  classNames: r,
  items: h,
  renderContent: x,
  renderHeader: j
}) => /* @__PURE__ */ o.jsx("div", { className: d(r == null ? void 0 : r.container), children: h.map(({ title: n, description: p, value: i, content: t, className: b }) => /* @__PURE__ */ o.jsx(
  g,
  {
    collapsible: !0,
    className: d(
      "w-full rounded-md bg-card-light dark:bg-card",
      r == null ? void 0 : r.item,
      b
    ),
    type: "single",
    children: /* @__PURE__ */ o.jsxs(
      A,
      {
        className: d("border border-border rounded-md"),
        value: i,
        children: [
          /* @__PURE__ */ o.jsx(c, { className: d("pr-3 pl-1", r == null ? void 0 : r.title), children: j ? j({ title: n, description: p, value: i, content: t }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            n(),
            p && /* @__PURE__ */ o.jsx("div", { className: r == null ? void 0 : r.description, children: p() })
          ] }) }),
          /* @__PURE__ */ o.jsx(
            f,
            {
              className: d("mt-1 px-4 py-2", r == null ? void 0 : r.content),
              children: x ? x({ title: n, value: i, content: t }) : t()
            }
          )
        ]
      }
    )
  },
  i
)) });
export {
  E as Accordion
};
