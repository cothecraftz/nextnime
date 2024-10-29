"use client";

import React, { Suspense, useState } from "react";
import useFetch from "@/hooks/useFetch";
import LoadingCard from "@/components/Loading/LoadingCard";
import EachUtils from "@/components/EachUtils";
import PopularAnimeLayout from "@/components/layouts/Popular/PopularAnimeLayout";
const CardAnime = React.lazy(() => import("@/components/CardAnime"));

const PopulerAnime = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading }: { data: any; loading: boolean } = useFetch(
    `/top/anime?limit=14&type=${endPoint}`
  );

  const onTabChange = (item: string) => {
    setEndPoint(item === "Movie" ? "movie" : "tv");
  };

  return (
    <PopularAnimeLayout onTabChange={onTabChange}>
      <EachUtils
        loading={loading}
        of={data?.data ?? []}
        render={(item, index) => (
          <Suspense key={index} fallback={<LoadingCard />}>
            <CardAnime data={item} />
          </Suspense>
        )}
      />
    </PopularAnimeLayout>
  );
};

export default PopulerAnime;
