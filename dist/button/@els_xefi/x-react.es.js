/* empty css                   */
import { j as n } from "../../jsx-runtime-B6kdoens.js";
import { Button as m } from "@nextui-org/react";
import { cn as s } from "../../utils/@els_xefi/x-react.es.js";
const g = ({
  variant: x = "solid",
  fullWidth: j = !1,
  isLoading: p = !1,
  isDisabled: b = !1,
  startContent: a,
  endContent: r,
  className: d = "",
  LinkComponent: o,
  customStyles: e = {
    base: "",
    beforeContent: "",
    afterContent: "",
    content: ""
  },
  href: t,
  children: u,
  target: l,
  rel: N,
  ...c
}) => {
  const i = s(
    "transition-all font-normal dark:bg-opacity-90",
    j && "w-full",
    p && "opacity-50 cursor-not-allowed",
    e.base,
    d
  ), f = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    a && /* @__PURE__ */ n.jsx("span", { className: s("mr-2", e.beforeContent), children: a }),
    /* @__PURE__ */ n.jsx("span", { className: e.content, children: u }),
    r && /* @__PURE__ */ n.jsx("span", { className: s("ml-2", e.afterContent), children: r })
  ] });
  return t && o ? /* @__PURE__ */ n.jsx(
    m,
    {
      ...c,
      as: o,
      className: i,
      href: t,
      rel: l === "_blank" ? "noopener noreferrer" : N,
      target: l,
      variant: x,
      children: /* @__PURE__ */ n.jsx(f, {})
    }
  ) : /* @__PURE__ */ n.jsx(m, { ...c, className: i, isDisabled: b, children: /* @__PURE__ */ n.jsx(f, {}) });
};
export {
  g as Button
};
