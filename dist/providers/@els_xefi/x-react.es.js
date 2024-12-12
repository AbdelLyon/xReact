/* empty css                   */
import { j as t } from "../../jsx-runtime-B6kdoens.js";
import { ThemeProvider as i } from "next-themes";
import { QueryClient as s, QueryClientProvider as n } from "@tanstack/react-query";
import { useState as m } from "react";
import { ReactQueryDevtools as c } from "@tanstack/react-query-devtools";
import { NextUIProvider as d } from "@nextui-org/react";
const f = ({ children: r, ...e }) => /* @__PURE__ */ t.jsx(i, { ...e, children: r }), j = ({
  children: r,
  config: e
}) => {
  const [o] = m(
    () => new s({
      ...e
    })
  );
  return /* @__PURE__ */ t.jsxs(n, { client: o, children: [
    r,
    /* @__PURE__ */ t.jsx(c, { initialIsOpen: !1 })
  ] });
}, h = (r) => {
  const { children: e, ...o } = r;
  return /* @__PURE__ */ t.jsx(d, { ...o, children: e });
};
export {
  h as NextUIProvider,
  j as ReactQueryProvider,
  f as ThemeProvider
};
