"use client";

import { addCollectionAnime } from "@/libs/fetcher";
import { CollectionResponse } from "@/type/collection";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function CollectionButton({
  anime_mal_id,
  user_email,
  isCollected,
}: {
  anime_mal_id: number;
  user_email: string;
  isCollected: boolean;
}) {
  const [isCreated, setIsCreated] = useState<boolean>(isCollected);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnClick = async () => {
    setIsLoading(true);

    const data = { anime_mal_id, user_email };

    const collection: CollectionResponse = await addCollectionAnime(data);

    setIsCreated(collection.isCreated);

    setIsLoading(false);
  };
  return (
    <>
      {isCreated ? (
        <Button isDisabled color="success" variant="flat">
          Collected
        </Button>
      ) : (
        <Button
          isDisabled={isCreated}
          isLoading={isLoading}
          onPress={handleOnClick}
          startContent={!isLoading && <IoMdAdd />}
          color="warning"
          variant="flat"
        >
          {isLoading ? "Loading..." : "Collection"}
        </Button>
      )}
    </>
  );
}
