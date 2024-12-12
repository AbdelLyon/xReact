/* empty css                   */
import { j as r } from "../../jsx-runtime-B6kdoens.js";
import { Autocomplete as A, AutocompleteItem as b } from "@nextui-org/react";
import { cn as h } from "../../utils/@els_xefi/x-react.es.js";
function k({
  items: p,
  labelKey: n = "label",
  valueKey: c = "key",
  descriptionKey: u = "description",
  autocompleteProps: i,
  itemRenderer: e,
  onSelectionChange: m,
  defaultSelectedKey: d,
  placeholder: l = "Search...",
  label: x,
  description: f,
  classNames: t
}) {
  const j = (o) => /* @__PURE__ */ r.jsx(
    b,
    {
      description: o[u] || void 0,
      children: o[n]
    },
    o[c]
  );
  return /* @__PURE__ */ r.jsx(
    A,
    {
      className: "max-w-xs",
      classNames: {
        popoverContent: h("bg-background", t == null ? void 0 : t.popoverContent),
        ...t
      },
      defaultItems: p,
      defaultSelectedKey: d,
      description: f,
      label: x,
      placeholder: l,
      onSelectionChange: m,
      ...i,
      children: (o) => e ? e(o) : j(o)
    }
  );
}
export {
  k as Autocomplete
};
