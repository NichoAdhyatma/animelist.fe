import { AnimeType } from "@/type/anime";
import React from "react";
import CardAnime from "../CardAnime";
import CardGridLayout from "../CardGridLayout";

export default function AnimeList({ api }: { api: any }) {
  return (
    <CardGridLayout>
      {api.data.map((anime: AnimeType) => (
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
