"use client";

import React, { useEffect, useState } from "react";
import { get } from "@/libs/fetcher";
import { Pagination } from "@nextui-org/react";
import { AnimeResponse } from "@/type/animeResponse";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Util/Header";
import BackButton from "@/components/Util/BackButton";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<AnimeResponse>();

  const fetchTopAnime = async () => {
    const topAnime = await get<AnimeResponse>(`/top/anime?page=${page}`);
    setTopAnime(topAnime);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchTopAnime();
  }, [page]);

  const countTotalPage = (total: number, per_page: number) =>
    Math.ceil(total / per_page);

  return (
    <>
      <BackButton />

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
