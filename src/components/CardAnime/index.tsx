"use client";

import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

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
      onPress={() => console.log(id)}
      isPressable
    >
      <Image alt={title} className="object-cover" src={src} width={400} />

      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md text-white P-4">{title}</p>
      </CardFooter>
    </Card>
  );
}
