"use client";

import { Card, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";

export default function CardAnime({
  id,
  title,
  src,
}: {
  id: number;
  title: string;
  src: string;
}) {
  const router = useRouter();

  return (
    <Card
      radius="lg"
      className="border-none w-full mx-auto"
      isFooterBlurred
      isHoverable
      onPress={() => {
        router.push(`/${id}`);
      }}
      isPressable
    >
      <Image alt={title} className="object-cover h-auto w-full" src={src} />

      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny sm:text-medium text-center text-white p-2 w-full">{title}</p>
      </CardFooter>
    </Card>
  );
}
