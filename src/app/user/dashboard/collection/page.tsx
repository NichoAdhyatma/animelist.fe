import BackButton from "@/components/Util/BackButton";
import CardAnime from "@/components/Util/CardAnime";
import CardGridLayout from "@/components/Util/CardGridLayout";
import Header from "@/components/Util/Header";
import { authUserSession } from "@/libs/auth";
import prismaSingleton from "@/libs/prisma";
import { Button, Link } from "@nextui-org/react";
import React from "react";

export default async function Page() {
  const user = await authUserSession();
  const collections = await prismaSingleton.collection.findMany({
    where: { user_email: user?.email ?? "" },
  });

  return (
    <div>
      <BackButton />

      <Header title="My Collection" />
      {collections.length > 0 ? (
        <CardGridLayout>
          {collections.map((collection, index) => (
            <CardAnime
              key={index}
              id={collection.anime_mal_id}
              title={collection.anime_title ?? "Anime Title"}
              src={
                collection.anime_image ??
                "https://nextui.org/images/hero-card-complete.jpeg"
              }
            />
          ))}
        </CardGridLayout>
      ) : (
        <div className="flex flex-col gap-4 justify-center h-[50vh] items-center">
          <p>No Collection...</p>
          <Button variant="ghost" as={Link} href="/topAnime">
            Add New Collection
          </Button>
        </div>
      )}
    </div>
  );
}
