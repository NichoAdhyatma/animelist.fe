import { UserType } from "./user"

export type AnimeType = {
  mal_id: number,
  url: string,
  title: string,
  images: {
    jpg: {
      image_url: string,
      large_image_url: string
    }
    webp: {
      image_url: string,
      large_image_url: string
    }
  },
  type: string,
  year: number,
  synopsis: string,
  score: number,
  rank: number,
  episodes: number,
  members: number,
  trailer: {
    youtube_id: string
  }
}

export type RecommendationAnimeType = {
  mal_id: string,
  entry: AnimeType[],
  content: string,
  user: UserType
}