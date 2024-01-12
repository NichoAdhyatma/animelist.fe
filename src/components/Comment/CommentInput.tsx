"use client";

import { addComment, updateComment } from "@/libs/fetcher";
import { CommentRequest } from "@/type/comment";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import RatingInput from "../Rating";

interface CommentInputProps {
  props: CommentRequest;
  isCreate?: boolean;
  onClose?: () => void;
}

export default function CommentInput({
  props,
  isCreate = true,
  onClose = () => {},
}: CommentInputProps) {
  const [comment, setComment] = useState<string>(props.comment);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<number | undefined>(props?.rating);
  const router = useRouter();

  const handleSendComment = async () => {
    setIsLoading(true);

    const commentRequest: CommentRequest = {
      id: props.id,
      anime_mal_id: Number(props.anime_mal_id),
      anime_title: props.anime_title,
      user_email: props.user_email,
      username: props.username,
      comment,
      rating: Number(rating),
    };

    const commentResponse = isCreate
      ? await addComment(commentRequest)
      : await updateComment(commentRequest);

    await new Promise((resolve) => setTimeout(resolve, 500));

    onClose();

    if (commentResponse.isCreated) {
      router.refresh();
    }

    setIsLoading(false);
  };

  return (
    <>
      <RatingInput rating={rating ?? 0} setRating={setRating} />

      <Textarea
        label="Comment"
        value={comment}
        placeholder="Type ur comment here..."
        description="*Fill comment (min 3 char) and rating to submit"
        maxLength={255}
        variant="bordered"
        onValueChange={setComment}
      />

      <Button
        color="primary"
        className="my-2"
        isLoading={isLoading}
        isDisabled={comment.length < 3 || !Boolean(rating)}
        onPress={handleSendComment}
        startContent={!isLoading && <BsFillSendFill />}
      >
        Comment
      </Button>
    </>
  );
}
