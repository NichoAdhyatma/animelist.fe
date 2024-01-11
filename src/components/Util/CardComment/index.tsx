import { CommentRequest } from "@/type/comment";
import { Card, CardBody, CardFooter, CardHeader, Link } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import React from "react";

export default function CardComment({
  index,
  comment,
}: {
  index: number;
  comment: CommentRequest;
}) {
  return (
    <Card as={Link} href={`/anime/${comment.anime_mal_id}`} key={index} isBlurred  isHoverable className="border-1">
      <CardHeader>{comment.username}</CardHeader>
      <CardBody className="py-0"><p>{comment.comment}</p> <div>Rating : {comment.rating}</div></CardBody>
      <CardFooter className="gap-4 justify-end text-tiny">
        {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
      </CardFooter>
    </Card>
  );
}
