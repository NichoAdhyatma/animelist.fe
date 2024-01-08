import { get } from "@/libs/fetcher";
import { SingleAnimeResponse } from "@/type/animeResponse";
import { Image } from "@nextui-org/react";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import BackButton from "@/components/Util/BackButton";
import CollectionButton from "@/components/CollectionButton";
import AnimeBadges from "@/components/AnimeBadges";
import { authUserSession } from "@/libs/auth";
import prismaSingleton from "@/libs/prisma";
import CommentBox from "@/components/Comment/CommentBox";
import CommentInput from "@/components/Comment/CommentInput";
import Header from "@/components/Util/Header";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data } = await get<SingleAnimeResponse>(`/anime/${id}`);

  const user = await authUserSession();

  const collection = await prismaSingleton.collection.findFirst({
    where: { user_email: user?.email ?? "", anime_mal_id: Number(id) },
  });

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <BackButton />

        <div className="flex gap-4 items-center">
          {user && (
            <CollectionButton
              collection_id={collection?.id ?? 0}
              anime={data}
              user_email={user?.email ?? ""}
              isCollected={Boolean(collection)}
            />
          )}

          <VideoPlayer videoId={data.trailer.youtube_id} />
        </div>
      </div>

      <p className="my-4 text-2xl font-semibold text-center">{data.title}</p>

      <AnimeBadges data={data} />

      <div className="flex gap-6 items-start flex-wrap sm:flex-nowrap justify-center lg:justify-start">
        <Image
          src={data.images.webp.image_url}
          className="w-full object-cover"
          alt="Anime Image"
        />

        <div className="max-w-4xl flex flex-col justify-center gap-4 w-full">
          <p className="text-tiny sm:text-sm">{data.synopsis} </p>
        </div>
      </div>

      <div className="my-4">
        <Header title="Comments" />
        {user && (
          <CommentInput
            anime_mal_id={id}
            anime_title={data.title}
            username={user?.name ?? ""}
            user_email={user?.email ?? ""}
          />
        )}
      </div>

      <CommentBox anime_mal_id={id} />
    </div>
  );
}
