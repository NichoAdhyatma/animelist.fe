import { RecommendationAnimeResponse } from "@/type/animeResponse";

export const get = async <T>(path: string, { signal }: { signal?: AbortSignal } = {}): Promise<T> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
      { cache: "force-cache", signal: signal }
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json() as T;

    return responseData;

  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getNestedAnimeResponse = async (path: string) => {
  const response = await get<RecommendationAnimeResponse>(path);

  return response.data.flatMap(item => item.entry);
}
