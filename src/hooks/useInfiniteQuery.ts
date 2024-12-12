import { useInfiniteQuery as useInfiniteReactQuery } from "@tanstack/react-query";

import { Query } from "./types";

export const useInfiniteQuery = <Data, Request>({
  queryKey,
  request,
  search,
  enabled,
}: Query<Data, Request>) => {
  const query = useInfiniteReactQuery({
    queryKey,
    queryFn: ({ pageParam }) =>
      request({
        search: {
          ...search,
          ...(pageParam && { page: pageParam }),
        } as Partial<Request>,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages, pageParam = 10) => {
      const nextPage = pages.length * pageParam + 1;

      if (lastPage.length < pageParam) return undefined;

      return nextPage;
    },
    enabled,
  });

  const flattenedData = query.data?.pages.flatMap((data) => data) ?? [];

  return {
    ...query,
    data: flattenedData,
  };
};
