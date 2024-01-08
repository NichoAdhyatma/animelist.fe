import prismaSingleton from "@/libs/prisma";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";

export default async function CommentBox({
  anime_mal_id,
}: {
  anime_mal_id: number;
}) {
  const comments = await prismaSingleton.comment.findMany({
    where: { anime_mal_id: Number(anime_mal_id) },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, index) => (
        <Card key={index}>
          <CardHeader>{comment.username}</CardHeader>
          <CardBody>{comment.comment}</CardBody>
          <CardFooter className="gap-4 justify-end text-tiny">
            {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
