import { AnimeType } from "@/type/anime";

export const randomizeData = (array: AnimeType[], size: number): AnimeType[] => {

  const shuffled = array.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, size);
};