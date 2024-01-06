import { get } from "@/libs/fetcher";
import { SingleAnimeResponse } from "@/type/animeResponse";
import { Chip, Image, ScrollShadow } from "@nextui-org/react";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRankingStar, FaList } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import VideoPlayer from "@/components/Util/VideoPlayer";
import BackButton from "@/components/Util/BackButton";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data } = await get<SingleAnimeResponse>(`/anime/${id}`);

  return (
    <>
      <BackButton />

      <p className="my-4 text-2xl font-semibold">{data.title}</p>

      <ScrollShadow
        orientation="horizontal"
        size={10}
        hideScrollBar={true}
        className="my-4 flex items-center gap-4 overflow-x-scroll"
      >
        <Chip startContent={<TiStarFullOutline />} variant="faded">
          {data.score}
        </Chip>

        <Chip startContent={<FaList />} variant="faded">
          {data.episodes}
        </Chip>

        <Chip startContent={<FaRankingStar />} variant="faded">
          {data.rank}
        </Chip>

        <Chip startContent={<BsFillPeopleFill />} variant="faded">
          {data.members}
        </Chip>
      </ScrollShadow>

      <div className="flex gap-4 items-start flex-wrap sm:flex-nowrap justify-center lg:justify-start p-2">
        <Image
          src={data.images.webp.image_url}
          className="w-full object-cover"
          alt="Anime Image"
        />

        <div className="max-w-4xl flex flex-col justify-center gap-4 w-full">
          <p className="text-tiny sm:text-sm">{data.synopsis} </p>

          <VideoPlayer videoId={data.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
}
