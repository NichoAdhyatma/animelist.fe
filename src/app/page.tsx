import { get } from "@/api/fetcher";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { AnimeResponse } from "@/type/animeResponse";
const { exec } = require('child_process');



const Page = async () => {
  const topAnime = await get<AnimeResponse>("/top/anime?limit=8");

  return (
    <>
      <section>
        <Header title="Top Anime" linkLabel="See All" href="/topAnime" />
        <AnimeList api={topAnime.data} />
      </section>

      <section className="mt-6">
        <Header title="New Anime" linkLabel="See More" />
        <AnimeList api={topAnime.data} />
      </section>
    </>
  );
};

export default Page;
