import { j as o } from "./jsx-runtime-B6kdoens.js";
import { a as i, b as p, c as n } from "./popover-DBcyieFX.js";
import { cn as t } from "./utils/@els_xefi/x-react.es.js";
const P = ({
  classNames: r,
  trigger: e,
  children: d
}) => /* @__PURE__ */ o.jsxs(i, { children: [
  /* @__PURE__ */ o.jsx(
    p,
    {
      asChild: !0,
      className: t("border border-border rounded-md", r == null ? void 0 : r.trigger),
      children: /* @__PURE__ */ o.jsx("div", { children: e })
    }
  ),
  /* @__PURE__ */ o.jsx(n, { className: t("mt-1 z-50", r == null ? void 0 : r.popover), children: d })
] });
export {
  P
};
