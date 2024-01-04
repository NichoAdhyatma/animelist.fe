import { get } from "@/api/fetcher";
import { SingleAnimeResponse } from "@/type/animeResponse";
import { Chip, Image, ScrollShadow } from "@nextui-org/react";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRankingStar, FaList } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import VideoPlayer from "@/components/Util/VideoPlayer";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data } = await get<SingleAnimeResponse>(`/anime/${id}`);

  return (
    <>
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

      <div className="flex gap-4 items-start flex-wrap sm:flex-nowrap justify-center lg:justify-start">
        <Image
          src={data.images.webp.image_url}
          className="w-full h-full object-cover"
          alt="Anime Image"
        />

        <div className="max-w-4xl w-full">
          <p className=" text-sm">{data.synopsis} </p>
        </div>
        
        <div>
          <VideoPlayer videoId={data.trailer.youtube_id} />
        </div>
      </div>
    </>
  );
}
