"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/Header";
import { Pagination } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { AnimeResponse } from "@/type/animeResponse";
import { get } from "@/libs/fetcher";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<AnimeResponse | undefined>(
    undefined
  );

  const fetchTopAnime = async () => {
    const topAnime = await get<AnimeResponse>(`/top/anime?page=${page}`);
    setTopAnime(topAnime);
  };

  useEffect(() => {
    fetchTopAnime();
  }, [page]);

  const countTotalPage = (total: number, per_page: number) =>
    Math.ceil(total / per_page);

  return (
    <>
      <Header title="All Top Anime" />
      <AnimeList api={topAnime?.data} />

      <Pagination
        initialPage={page}
        onChange={setPage}
        total={countTotalPage(topAnime?.pagination.items.total ?? 25, 25)}
        variant="light"
        color="primary"
        className="mt-4"
        boundaries={3}
      />
    </>
  );
}
