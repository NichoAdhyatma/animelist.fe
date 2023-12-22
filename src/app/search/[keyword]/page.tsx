import { getAnime } from "@/api/getAnime";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = params;

  const searchAnime = await getAnime(`/anime?q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`Search result for ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
