"use client";

import React, { Suspense, useState } from "react";
import LoadingCard from "@/components/Loading/LoadingCard";
import EachUtils from "@/components/EachUtils";
import PopularAnimeLayout from "@/components/layouts/Popular/PopularAnimeLayout";
import { getPopular } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import Link from "next/link";

const CardAnime = React.lazy(() => import("@/components/CardAnime"));

const PopulerAnime = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular-anime", endPoint], // queryKey dinamis mengikuti `endPoint`
    queryFn: () => getPopular(endPoint, "anime"), // queryFn sebagai fungsi
  });

  const onTabChange = (item: string) => {
    setEndPoint(item === "Movie" ? "movie" : "tv");
  };

  return (
    <PopularAnimeLayout onTabChange={onTabChange}>
      <EachUtils
        loading={isLoading} // gunakan `isLoading` dari `useQuery`
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
