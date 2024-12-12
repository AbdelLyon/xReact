/* empty css                   */
import { j as l } from "../../jsx-runtime-B6kdoens.js";
import { forwardRef as m } from "react";
import { cn as s } from "../../utils/@els_xefi/x-react.es.js";
const c = m(
  ({
    title: t,
    isLoading: o = !1,
    tag: r = "h1",
    loading: e,
    className: i,
    ...a
  }, n) => o && e ? e() : /* @__PURE__ */ l.jsx(
    r,
    {
      ref: n,
      className: s(
        "text-xl scroll-m-20 font-bold tracking-tight",
        i
      ),
      ...a,
      children: t
    }
  )
);
c.displayName = "Title";
const d = m(
  ({ className: t, children: o, ...r }, e) => /* @__PURE__ */ l.jsx(
    "blockquote",
    {
      ref: e,
      className: s("mt-6 border-l-2 pl-6 italic", t),
      ...r,
      children: o
    }
  )
);
d.displayName = "Blockquote";
const p = m(
  ({ className: t, children: o, ...r }, e) => /* @__PURE__ */ l.jsx(
    "code",
    {
      ref: e,
      className: s(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        t
      ),
      ...r,
      children: o
    }
  )
);
p.displayName = "InlineCode";
export {
  d as Blockquote,
  p as InlineCode,
  c as Title
};
