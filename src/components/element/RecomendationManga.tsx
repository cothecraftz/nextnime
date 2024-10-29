import { getNestedDataResponse, reproduce } from "@/utils/api";
import CardManga from "@/components/CardManga";
import { Suspense } from "react";
import LoadingCard from "@/components/Loading/LoadingCard";
import RecomendationLayout from "@/components/layouts/Recomendation/RecomendationLayout";
import EachUtils from "@/components/EachUtils";

const RecomendationManga = async () => {
  const data: any = await getNestedDataResponse("/recommendations/manga", "entry");
  const result: object[] = reproduce(data, 7);

  return (
    <RecomendationLayout link="/manga/recomendations/1">
      <EachUtils
        of={result ?? []}
        render={(item: any, index) => (
          <Suspense key={index} fallback={<LoadingCard />}>
            <CardManga key={index} data={item} />
          </Suspense>
        )}
      />
    </RecomendationLayout>
  );
};

export default RecomendationManga;
