import { AnimeType } from "@/type/anime";
import { Chip, ScrollShadow, Tooltip } from "@nextui-org/react";
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
      <Tooltip placement="bottom" content="Score Rating">
        <Chip
          startContent={<TiStarFullOutline />}
          variant="faded"
          className="cursor-pointer"
        >
          {data.score}
        </Chip>
      </Tooltip>

      <Tooltip placement="bottom" content="Episode">
        <Chip
          startContent={<FaList />}
          variant="faded"
          className="cursor-pointer"
        >
          {data.episodes}
        </Chip>
      </Tooltip>

      <Tooltip placement="bottom" content="Rank">
        <Chip
          startContent={<FaRankingStar />}
          variant="faded"
          className="cursor-pointer"
        >
          {data.rank}
        </Chip>
      </Tooltip>

      <Tooltip placement="bottom" content="Member">
        <Chip
          startContent={<BsFillPeopleFill />}
          variant="faded"
          className="cursor-pointer"
        >
          {data.members}
        </Chip>
      </Tooltip>
    </ScrollShadow>
  );
}
