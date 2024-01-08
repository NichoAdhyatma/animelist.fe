import BackButton from "@/components/Util/BackButton";
import Header from "@/components/Util/Header";
import { authUserSession } from "@/libs/auth";
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import React from "react";

export default async function Page() {
  const user = await authUserSession();
  const comments = await prisma?.comment.findMany({
    where: {
      user_email: user?.email ?? "",
    },
  });
  return (
    <div>
      <BackButton />

      <Header title="My Comment" />

      <div className="grid gird-cols-1 gap-4">
        {comments?.map((comment, index) => (
          <Card as={Link} href={`/anime/${comment.anime_mal_id}`}>
            <CardHeader>{comment.anime_title}</CardHeader>
            <CardBody>{comment.comment}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
