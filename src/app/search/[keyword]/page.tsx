import { getAnime } from "@/api/getAnime";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";

const Page = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnime(`/anime?q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Search result for ${decodedKeyword}`} />
        <AnimeList api={searchAnime.data} />
      </section>
    </>
  );
};

export default Page;
