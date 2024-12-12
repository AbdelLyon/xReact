import { clsx as c } from "clsx";
import { twMerge as n } from "tailwind-merge";
function p(...e) {
  return n(c(e));
}
const h = (e) => (e == null ? void 0 : e.charAt(0).toUpperCase()) + (e == null ? void 0 : e.slice(1)), l = (...e) => e == null ? void 0 : e.filter(Boolean).join(" "), m = (e, o) => e == null ? void 0 : e.startsWith(o), C = (e, o) => e == null ? void 0 : e.endsWith(o), W = (e) => e == null ? void 0 : e.toLowerCase(), f = (e) => e == null ? void 0 : e.toUpperCase(), w = (e) => e == null ? void 0 : e.trim(), L = (e) => e == null ? void 0 : e.split("").reverse().join("");
export {
  h as capitalizeFirstLetter,
  p as cn,
  l as concatenateWithSpace,
  C as endsWith,
  L as reverse,
  m as startsWith,
  W as toLowerCase,
  f as toUpperCase,
  w as trim
};
