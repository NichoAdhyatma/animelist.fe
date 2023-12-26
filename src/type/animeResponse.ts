import { AnimeType } from "@/type/anime";
import { PaginationType } from "@/type/pagination";

export type AnimeResponse = {
  data: AnimeType[],
  pagination: PaginationType
}

export type SingleAnimeResponse = {
  data: AnimeType
}