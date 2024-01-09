import { AnimeType } from "@/type/anime";
import React from "react";
import CardAnime from "../Util/CardAnime";
import CardGridLayout from "../Util/CardGridLayout";

export default function AnimeList({ api }: { api: AnimeType[] | undefined }) {
  return (
    <CardGridLayout>
      {api?.map((anime: AnimeType, index: number) => (
        <CardAnime
          key={index}
          anime={anime}
        />
      ))}
    </CardGridLayout>
  );
}
