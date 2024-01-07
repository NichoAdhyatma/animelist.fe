export type CollectionResponse = {
  status: number,
  isCreated: boolean
}

export type CollectionRequest = {
  anime_mal_id: number,
  anime_title?: string,
  anime_image?: string,
  user_email: string
}
