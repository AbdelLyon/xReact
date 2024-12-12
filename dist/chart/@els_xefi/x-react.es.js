/* empty css                   */
import { j as c } from "../../jsx-runtime-B6kdoens.js";
import { Chart as s, CategoryScale as C, LinearScale as f, Title as h, Tooltip as u, Legend as p, RadialLinearScale as E, BarElement as g, ArcElement as x, PointElement as L, LineElement as R, BarController as j, DoughnutController as k, ScatterController as A, PolarAreaController as B } from "chart.js";
import { useRef as P, useCallback as S } from "react";
import { getElementAtEvent as T, Chart as $ } from "react-chartjs-2";
s.register(
  C,
  f,
  h,
  u,
  p,
  E,
  g,
  x,
  L,
  R,
  j,
  k,
  A,
  B
);
const q = ({
  type: o,
  data: n,
  options: a,
  getElementSelected: r,
  ...l
}) => {
  const t = P(null), i = S(
    (m) => {
      if (t.current) {
        const e = T(t.current, m);
        e.length && r && r(e);
      }
    },
    [r]
  );
  return /* @__PURE__ */ c.jsx(
    $,
    {
      ref: t,
      data: n,
      options: a,
      type: o,
      onClick: i,
      ...l
    }
  );
};
export {
  q as Chart
};
