import { authUserSession } from "@/libs/auth";
import { AnimeType } from "@/type/anime";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";

export default async function CardAnime({
  mal_id,
  title,
  src,
}: {
  mal_id: number;
  title: string;
  src: string;
}) {
  return (
    <Card
      radius="lg"
      className="border-none"
      isFooterBlurred
      isHoverable
      as={Link}
      href={`/anime/${mal_id}`}
      isPressable
    >
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={src}
      />

      <CardFooter className="before:bg-white/10 bg-black/50 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] flex gap-4 shadow-small ml-1 z-10">
        <p className="text-tiny sm:text-sm text-center text-white w-full">
          {title}
        </p>
      </CardFooter>
    </Card>
  );
}
