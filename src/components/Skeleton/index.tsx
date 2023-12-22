import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonComponent() {
  return (
    <Card
      className="space-y-5 p-4 flex flex-col justify-between h-full"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="w-[400px] h-[400px] rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="rounded-2xl">
          <div className="h-10 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
