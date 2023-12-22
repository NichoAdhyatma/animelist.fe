export const getAnime = async (path: string, { signal }: { signal?: AbortSignal } = {}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`,
    { cache: "force-cache", signal }
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return response.json();
};
