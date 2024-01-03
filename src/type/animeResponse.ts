import { AnimeType } from "@/type/anime";
import { PaginationType } from "@/type/pagination";
import { User } from "./user";

export type AnimeResponse = {
  data: AnimeType[],
  pagination: PaginationType
}

export type SingleAnimeResponse = {
  data: AnimeType
}

export type RecommendationAnimeResponse = {
  data: {
    mal_id: string,
    entry: AnimeType[],
    content: string,
    user: User
  }[],
  pagination: {
    last_visible_page: number,
    has_next_page: boolean,
  }
}