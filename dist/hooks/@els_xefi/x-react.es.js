import { useQuery as o, useMutation as s } from "@tanstack/react-query";
import { useInfiniteQuery as p, useQueryClient as x } from "@tanstack/react-query";
import { u as c } from "../../useInfiniteScroll-C2mAZS0K.js";
import { u as q } from "../../useTheme-ery4R1ul.js";
import { u as M } from "../../useToast-DD3_Ts5P.js";
import { useInView as T } from "react-intersection-observer";
const a = ({
  queryKey: e,
  request: u,
  search: r,
  enabled: t
}) => ({
  ...o({
    queryKey: e,
    queryFn: () => u({
      search: r
    }),
    enabled: t
  })
}), m = ({
  request: e,
  options: u
}) => s({
  mutationFn: (r) => e(r),
  ...u
});
export {
  T as useInView,
  p as useInfiniteQuery,
  c as useInfiniteScroll,
  m as useMutation,
  a as useQuery,
  x as useQueryClient,
  q as useTheme,
  M as useToast
};
