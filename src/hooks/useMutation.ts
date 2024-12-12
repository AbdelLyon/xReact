import {
  useMutation as useReactMutation,
  UseMutationResult,
} from "@tanstack/react-query";

export interface Mutation<DataResponse, PayloadRequest> {
  request: (variables: PayloadRequest) => Promise<DataResponse>;
  options?: {
    onSuccess?: (data: DataResponse) => void;
    onError?: (error: unknown) => void;
    onSettled?: (data: DataResponse | undefined, error: unknown | null) => void;
  };
}

export const useMutation = <DataResponse, PayloadRequest>({
  request,
  options,
}: Mutation<DataResponse, PayloadRequest>): UseMutationResult<
  DataResponse,
  unknown,
  PayloadRequest,
  unknown
> => {
  return useReactMutation({
    mutationFn: (variables: PayloadRequest) => request(variables),
    ...options,
  });
};
