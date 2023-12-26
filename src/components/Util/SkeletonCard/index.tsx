import React from "react";
import { Card, Image, Skeleton } from "@nextui-org/react";

export default function SkeletonCard() {
  return (
    <Card
      className="space-y-5 p-4 flex flex-col justify-between h-full"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <Image
          src="https://nextui.org/images/hero-card-complete.jpeg"
          className="object-cover h-auto w-full"
        />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="rounded-2xl">
          <div className="h-10 w-10 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
