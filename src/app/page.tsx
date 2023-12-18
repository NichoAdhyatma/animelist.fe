import { AnimeType } from "./type/anime";
import CardComponent from "./components/Card";
import CardGridLayout from "./layout/CardGridLayout";
import { Suspense } from "react";

const getAnimes = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`,
    { cache: "force-cache", next: { revalidate: 60 } }
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  return response.json();
}

const Home = async () => {
  const animes = await getAnimes();

  return (
      <CardGridLayout>
        {animes.data.map((anime: AnimeType) => (
          <CardComponent
            key={anime.mal_id}
            title={anime.title}
            src={anime.images.webp.large_image_url}
          />
        ))}
      </CardGridLayout>
  );
};

export default Home;
