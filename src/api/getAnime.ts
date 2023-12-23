import { AnimeResponse } from "@/type/animeResponse";

export const getAnime = async (path: string, { signal }: { signal?: AbortSignal } = {}): Promise<AnimeResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
      { cache: "force-cache", signal }
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const json = await response.json() as AnimeResponse;
    return json;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};
