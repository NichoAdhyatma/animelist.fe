import { AnimeType, RecommendationAnimeType } from "@/type/anime";
import { PaginationType } from "@/type/pagination";

export type AnimeResponse = {
  data: AnimeType[],
  pagination: PaginationType
}

export type SingleAnimeResponse = {
  data: AnimeType
}

export type RecommendationAnimeResponse = {
  data: RecommendationAnimeType[],
  pagination: PaginationType
}