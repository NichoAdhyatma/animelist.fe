import { getAnime } from "@/api/getAnime";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const topAnime = await getAnime("/top/anime?limit=8");

  return (
    <>
      <section>
        <Header title="Top Anime" />
        <AnimeList api={topAnime} />
      </section>

      <section className="mt-6">
        <Header title="New Anime" linkLabel="See More" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
