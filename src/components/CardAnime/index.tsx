import { Card, CardFooter, Image, Link } from "@nextui-org/react";

export default function CardAnime({
  id,
  title,
  src,
}: {
  id: number;
  title: string;
  src: string;
}) {
  return (
    <Card
      radius="lg"
      className="border-none w-fit mx-auto"
      isFooterBlurred
      isHoverable
      as={Link}
      href={`/${id}`}
      isPressable
    >
      <Image alt={title} className="object-cover h-auto w-full" src={src} />

      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md text-center text-white p-2 w-full">{title}</p>
      </CardFooter>
    </Card>
  );
}
