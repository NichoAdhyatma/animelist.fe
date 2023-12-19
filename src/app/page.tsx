import CardAnime from "@/components/CardAnime";
import CardGridLayout from "@/layout/CardGridLayout";
import { AnimeType } from "@/type/anime";

const getAnimes = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return response.json();
};

const Home = async () => {
  const animes = await getAnimes();

  return (
    <CardGridLayout>
      {animes.data.map((anime: AnimeType) => (
        <CardAnime
          key={anime.mal_id}
          id={anime.mal_id}
          title={anime.title}
          src={anime.images.webp.large_image_url}
        />
      ))}
    </CardGridLayout>
  );
};

export default Home;
