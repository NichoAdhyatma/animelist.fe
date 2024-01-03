import { get, getNestedAnimeResponse } from "@/api/fetcher";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { AnimeResponse } from "@/type/animeResponse";

const Page = async () => {
  const topAnime = await get<AnimeResponse>("/top/anime?limit=8");
  const recomendationAnime = await getNestedAnimeResponse(
    "/recommendations/anime"
  );

  return (
    <>
      <section>
        <Header title="Top Anime" linkLabel="See All" href="/topAnime" />
        <AnimeList api={topAnime.data} />
      </section>

      <section className="mt-10">
        <Header title="Rekomendasi Anime" />
        <AnimeList api={recomendationAnime.slice(0, 4)} />
      </section>
    </>
  );
};

export default Page;
