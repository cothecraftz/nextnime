import PopulerManga from "@/components/element/PopulerManga";
import RecomendationManga from "@/components/element/RecomendationManga";

export default function MangaPage() {
  return (
    <section className="wrapper">
      <PopulerManga />
      <RecomendationManga />
    </section>
  );
}
