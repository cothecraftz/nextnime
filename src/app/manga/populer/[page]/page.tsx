import Pagination from "@/components/ui/Pagination";
import LoadingCard from "@/components/Loading/LoadingCard";
import { getDataResponse } from "@/utils/api";
import React, { Suspense } from "react";
const CardManga = React.lazy(() => import("@/components/CardManga"));

const PopulerPage = async (props: { params: Promise<{ page: string }> }) => {
  const params = await props.params;
  const data = await getDataResponse(`/top/manga?page=${params.page}`);

  return (
    <section className="wrapper">
      <div>
        <h1 className="mb-4 text-xl font-semibold">Populers Manga #{params.page}</h1>
        <div className="grid-card">
          {data?.data?.map((item: any, i: number) => (
            <Suspense key={i} fallback={<LoadingCard />}>
              <CardManga data={item} />
            </Suspense>
          ))}
        </div>
        <Pagination page={params.page} lastPagination={data?.pagination?.last_visible_page} />
      </div>
    </section>
  );
};

export default PopulerPage;
