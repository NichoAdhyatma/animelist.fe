import { get } from "@/libs/fetcher";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { AnimeResponse } from "@/type/animeResponse";

const Page = async ({
  params: { keyword },
}: {
  params: { keyword: string };
}) => {
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await get<AnimeResponse>(`/anime?q=${decodedKeyword}`);

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
