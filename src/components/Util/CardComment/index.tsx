import RatingInput from "@/components/Rating";
import { CommentInputProps, CommentRequest } from "@/type/comment";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import CommentDropdownAction from "./CommentDropdownAction";

export default function CardComment({
  index,
  comment,
  props,
}: {
  index?: number;
  comment: CommentRequest;
  props?: CommentInputProps;
}) {
  return (
    <Card
      key={index}
      isBlurred
      isHoverable={false}
      isPressable={false}
      className="border-1"
    >
      <CardHeader className="flex justify-between">
        <p className="font-semibold text-lg">{comment.username}</p>

        <CommentDropdownAction comment={comment} />
      </CardHeader>
      <CardBody className="py-0">
        <div>
          <p>{comment.comment}</p>

          <div>
            <RatingInput readOnly rating={comment.rating} />
          </div>
        </div>
      </CardBody>
      <CardFooter className="gap-4 justify-end text-tiny">
        {formatDistanceToNow(comment.createdAt ?? new Date(Date.now()), {
          addSuffix: true,
        })}
      </CardFooter>
    </Card>
  );
}
