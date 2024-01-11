"use client";

import { addComment } from "@/libs/fetcher";
import { CommentRequest } from "@/type/comment";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import RatingInput from "../Rating";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}: {
  anime_mal_id: number;
  anime_title: string;
  user_email: string;
  username: string;
}) {
  const [comment, setComment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const router = useRouter();

  const handleSendComment = async (e: any) => {
    setIsLoading(true);

    const commentRequest: CommentRequest = {
      anime_mal_id: Number(anime_mal_id),
      anime_title,
      user_email,
      username,
      comment,
      rating: Number(rating) ?? 0,
      createdAt: new Date(Date.now()),
    };

    const commentResponse = await addComment(commentRequest);

    if (commentResponse.isCreated) {
      setComment("");

      router.refresh();
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

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
        onClick={handleSendComment}
        startContent={!isLoading && <BsFillSendFill />}
      >
        Comment
      </Button>
    </>
  );
}
