"use client";

import { addCollectionAnime, removeCollectionAnime } from "@/libs/fetcher";
import { CollectionResponse } from "@/type/collection";
import { Button } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { IoMdAdd, IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function CollectionButton({
  collection_id,
  anime_mal_id,
  user_email,
  isCollected,
}: {
  collection_id: number;
  anime_mal_id: number;
  user_email: string;
  isCollected: boolean;
}) {
  const [isCreated, setIsCreated] = useState<boolean>(isCollected);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleOnClick = async (action: string) => {
    setIsLoading(true);

    let response: CollectionResponse;

    const data = { anime_mal_id, user_email };

    switch (action) {
      case "add":
        response = await addCollectionAnime(data);

        setIsCreated(response.isCreated);

        break;

      case "remove":
        response = await removeCollectionAnime(collection_id);

        setIsCreated(response.isCreated);

        break;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsLoading(false);

    router.refresh();
  };

  return (
    <>
      {isCreated ? (
        <Button
          color="success"
          variant="flat"
          startContent={!isLoading && <IoMdCheckmarkCircleOutline />}
          isLoading={isLoading}
          onPress={() => handleOnClick("remove")}
        >
          {isLoading ? "Loading..." : "Collected"}
        </Button>
      ) : (
        <Button
          isDisabled={isCreated}
          isLoading={isLoading}
          onPress={() => handleOnClick("add")}
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
