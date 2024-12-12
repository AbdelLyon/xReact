import { useQuery as useReactQuery } from "@tanstack/react-query";

import { Query } from "./types";

export const useQuery = <DataResponse, PayloadRequest>({
  queryKey,
  request,
  search,
  enabled,
}: Query<DataResponse, PayloadRequest>) => {
  const query = useReactQuery({
    queryKey,
    queryFn: () =>
      request({
        search: search as Partial<PayloadRequest>,
      }),
    enabled,
  });

  return {
    ...query,
  };
};
