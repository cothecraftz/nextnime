import CardAnime from "@/components/CardAnime";
import { getNestedDataResponse, reproduce } from "@/utils/api";
import { Suspense } from "react";
import LoadingCard from "@/components/Loading/LoadingCard";
import RecomendationLayout from "@/components/layouts/Recomendation/RecomendationLayout";
import EachUtils from "@/components/EachUtils";

const RecomendationAnime = async () => {
  const data: any = await getNestedDataResponse("/recommendations/anime", "entry");
  const result: object[] = reproduce(data, 7);

  return (
    <RecomendationLayout link="/anime/recomendations/1">
      <EachUtils
        of={result ?? []}
        render={(item: any, index) => (
          <Suspense key={index} fallback={<LoadingCard />}>
            <CardAnime data={item} />
          </Suspense>
        )}
      />
    </RecomendationLayout>
  );
};

export default RecomendationAnime;
