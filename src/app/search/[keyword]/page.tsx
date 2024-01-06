import { get } from "@/libs/fetcher";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Util/Header";
import { AnimeResponse } from "@/type/animeResponse";
import BackButton from "@/components/Util/BackButton";

const Page = async ({
  params: { keyword },
}: {
  params: { keyword: string };
}) => {
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await get<AnimeResponse>(`/anime?q=${decodedKeyword}`);

  return (
    <>
      <BackButton />
      <section>
        <Header title={`Search result for ${decodedKeyword}`} />
        <AnimeList api={searchAnime.data} />
      </section>
    </>
  );
};

export default Page;
