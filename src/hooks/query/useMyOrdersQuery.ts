import { useInfiniteQuery } from "@tanstack/react-query";
import getMyOrders from "@/api/my/getMyOrders";

const useMyOrdersQuery = (pageSize: number, queryKey: string) => {
  return useInfiniteQuery({
    queryKey: ["myOrders", queryKey],
    queryFn: ({ pageParam }) => getMyOrders(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage } = lastPage.page;
      const { totalPages } = lastPage.page;
      if (currentPage < totalPages) {
        return currentPage + 1;
      }
      // 마지막 페이지면 undefined 반환
      return undefined;
    },

    refetchOnMount: false,
  });
};

export default useMyOrdersQuery;
