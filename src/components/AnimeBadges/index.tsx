import { AnimeType } from "@/type/anime";
import { Chip, ScrollShadow } from "@nextui-org/react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRankingStar, FaList } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";

export default function AnimeBadges({ data }: { data: AnimeType }) {
  return (
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
  );
}
