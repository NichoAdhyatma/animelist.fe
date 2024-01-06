import BackButton from "@/components/Util/BackButton";
import CardAnime from "@/components/Util/CardAnime";
import CardGridLayout from "@/components/Util/CardGridLayout";
import React from "react";

export default function Page() {
  return (
    <div>
      <BackButton />
      
      <h3 className="text-xl my-4 font-semibold">My Collection</h3>
      <CardGridLayout>
        <CardAnime
          id={1}
          title="Anime"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
        <CardAnime
          id={1}
          title="Anime"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
        <CardAnime
          id={1}
          title="Anime"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
        <CardAnime
          id={1}
          title="Anime"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
        <CardAnime
          id={1}
          title="Anime"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
        <CardAnime
          id={1}
          title="Anime"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardGridLayout>
    </div>
  );
}
