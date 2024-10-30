"use client";

import React, { Suspense, useState } from "react";
import LoadingCard from "@/components/Loading/LoadingCard";
import PopularMangaLayout from "@/components/layouts/Popular/PopularMangaLayout";
import EachUtils from "@/components/EachUtils";
import { getPopular } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const CardManga = React.lazy(() => import("@/components/CardManga"));

const PopulerManga = () => {
  const [endPoint, setEndPoint] = useState("manga");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular-manga", endPoint], // queryKey dinamis mengikuti `endPoint`
    queryFn: () => getPopular(endPoint, "manga"), // queryFn sebagai fungsi
  });

  const onTabChange = (item: string) => {
    setEndPoint(item === "Manga" ? "manga" : "novel");
  };

  return (
    <PopularMangaLayout onTabChange={onTabChange}>
      <EachUtils
        loading={isLoading}
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
