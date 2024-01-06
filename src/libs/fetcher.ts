import { AnimeType, RecommendationAnimeType } from "@/type/anime";
import { RecommendationAnimeResponse } from "@/type/animeResponse";
import { redirect } from "next/navigation";

export const get = async <T>(path: string, { signal }: { signal?: AbortSignal } = {}): Promise<T> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
      { cache: "force-cache", signal: signal }
    );

    if (!response.ok) {
      redirect("/");
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
