"use client";

import { addComment } from "@/libs/fetcher";
import { CommentRequest } from "@/type/comment";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

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
  const router = useRouter();

  const handleSendComment = async (e: any) => {
    setIsLoading(true);

    const commentRequest: CommentRequest = {
      anime_mal_id: Number(anime_mal_id),
      anime_title,
      user_email,
      username,
      comment,
      createdAt: new Date(Date.now()),
    };

    const commentResponse = await addComment(commentRequest);

    if (commentResponse.isCreated) {
      setComment("");

      router.refresh();
    }

    setIsLoading(false);
  };

  return (
    <>
      <Textarea
        label="Comment"
        value={comment}
        placeholder="Type ur comment here..."
        description="Comment wisely"
        maxLength={255}
        variant="bordered"
        onValueChange={setComment}
      />

      <Button
        color="primary"
        size={"sm"}
        isLoading={isLoading}
        isDisabled={!Boolean(comment)}
        onClick={handleSendComment}
        startContent={!isLoading && <BsFillSendFill />}
      >
        Comment
      </Button>
    </>
  );
}
