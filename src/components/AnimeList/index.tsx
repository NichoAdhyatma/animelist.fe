import { AnimeType } from "@/type/anime";
import React from "react";
import CardAnime from "../Util/CardAnime";
import CardGridLayout from "../CardGridLayout";

export default function AnimeList({ api }: { api: AnimeType[] | undefined }) {
  return (
    <CardGridLayout>
      {api?.map((anime: AnimeType) => (
        <CardAnime
          key={anime.mal_id}
          id={anime.mal_id}
          title={anime.title}
          src={anime.images.webp.large_image_url}
        />
      ))}
    </CardGridLayout>
  );
}
