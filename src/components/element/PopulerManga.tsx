"use client";

import useFetch from "@/hooks/useFetch";
import React, { Suspense, useState } from "react";
import LoadingCard from "@/components/Loading/LoadingCard";
import PopularMangaLayout from "@/components/layouts/Popular/PopularMangaLayout";
import EachUtils from "@/components/EachUtils";
const CardManga = React.lazy(() => import("@/components/CardManga"));

const PopulerManga = () => {
  const [endPoint, setEndPoint] = useState("manga");

  const { data, loading }: { data: any; loading: boolean } = useFetch(
    `/top/manga?limit=14&type=${endPoint}`
  );

  const onTabChange = (item: string) => {
    setEndPoint(item === "Manga" ? "manga" : "novel");
  };

  return (
    <PopularMangaLayout onTabChange={onTabChange}>
      <EachUtils
        loading={loading}
        of={data?.data ?? []}
        render={(item, index) => (
          <Suspense key={index} fallback={<LoadingCard />}>
            <CardManga data={item} />
          </Suspense>
        )}
      />
    </PopularMangaLayout>
  );
};

export default PopulerManga;
