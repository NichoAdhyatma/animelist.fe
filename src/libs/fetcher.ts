import { AnimeType, RecommendationAnimeType } from "@/type/anime";
import { RecommendationAnimeResponse } from "@/type/animeResponse";
import { CollectionRequest, CollectionResponse } from "@/type/collection";
import { redirect } from "next/navigation";

export const get = async <T>(path: string, { signal }: { signal?: AbortSignal } = {}): Promise<T> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
      { cache: "force-cache", signal: signal }
    );

    if (!response.ok) {
      redirect("/404")
    }

    const responseData = await response.json() as T;

    return responseData;

  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getNestedAnimeResponse = async (
  path: string,
  { objectProperty }: { objectProperty: keyof RecommendationAnimeType }
): Promise<AnimeType[]> => {

  const response = await get<RecommendationAnimeResponse>(path);

  return response.data.flatMap((item: RecommendationAnimeType) => item[objectProperty] as AnimeType[]);
}

export const addCollectionAnime = async (
  data: CollectionRequest
): Promise<CollectionResponse> => {
  const response: Response = await fetch("/api/v1/collection", { method: "POST", body: JSON.stringify(data) })

  if (!response.ok) {
    return {
      status: response.status,
      isCreated: false
    }
  }

  return await response.json() as CollectionResponse;
}

export const removeCollectionAnime = async (id: number) => {
  const response: Response = await fetch("/api/v1/collection", { method: "DELETE", body: JSON.stringify({ id }) })

  if (!response.ok) {
    return {
      status: response.status,
      isCreated: true
    }
  }

  return await response.json() as CollectionResponse;
}
