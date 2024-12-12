import { useEffect } from "react";

export const useInfiniteScroll = (
  inView: boolean,
  onFetchPage: (() => void) | undefined,
) => {
  useEffect(() => {
    if (inView && onFetchPage) {
      onFetchPage();
    }
  }, [inView, onFetchPage]);
};
