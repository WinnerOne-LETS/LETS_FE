"use client";

import type { Page } from "@/app/types";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useParams } from "next/navigation";
import getBestPackages from "@/api/home/getBestPackages";
import getThemeDetail from "@/api/theme/getThemeDetail";
import ThemeDetail from "./_component/ThemeDetail";
import BestThemeDetail from "./_component/BestThemeDetail";

interface Props {
  data: InfiniteData<any, unknown> | undefined;
  page: Page;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  hasNextPage: boolean;
  isFetching: boolean;
}

const ThemePage = async ({
  data,
  fetchNextPage,
  isFetching,
  hasNextPage,
}: Props) => {
  const { id } = useParams();
  const queryClient = new QueryClient();
  if (Number(id) === 0) {
    await queryClient.prefetchQuery({
      queryKey: ["best-theme-info", id.toString()],
      queryFn: () => getBestPackages(1, 10),
    });
  } else {
    await queryClient.prefetchQuery({
      queryKey: ["theme-info", id.toString()],
      queryFn: () => getThemeDetail(Number(id), "departure_date", 1, 10),
    });
  }
  const dehydrateState = dehydrate(queryClient);

  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader theme="main" back />
      <HydrationBoundary state={dehydrateState}>
        {Number(id) === 0 ? (
          <BestThemeDetail />
        ) : (
          <ThemeDetail
            data={data}
            isFetching={isFetching}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        )}
      </HydrationBoundary>
    </section>
  );
};

export default ThemePage;
