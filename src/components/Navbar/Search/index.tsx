"use client";

import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Link,
} from "@nextui-org/react";
import SearchIcon from "./SearchIcon";
import { useAsyncList } from "@react-stately/data";
import { AnimeType } from "@/type/anime";
import { getAnime } from "@/api/getAnime";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

export default function SearchComponent() {
  const router = useRouter();

  const animeList = useAsyncList<AnimeType>({
    async load({ signal, filterText }) {
      let res = await getAnime(
        filterText ? `/anime?q=${filterText}` : `/top/anime?limit=10`,
        { signal }
      );

      return {
        items: res.data,
      };
    },
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      router.push(`/search/${animeList.filterText}`);
    }
  };

  return (
    <Autocomplete
      allowsCustomValue={true}
      isDisabled={animeList.items.length === 0}
      classNames={{
        base: "max-w-lg w-full",
        listboxWrapper: "max-h-[320px]",
        selectorButton: "text-default-500",
      }}
      inputProps={{
        classNames: {
          input: "ml-1",
          inputWrapper: "h-[48px]",
        },
      }}
      listboxProps={{
        hideSelectedIcon: true,
        itemClasses: {
          base: [
            "rounded-medium",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "dark:data-[hover=true]:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[hover=true]:bg-default-200",
            "data-[selectable=true]:focus:bg-default-100",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      aria-label="Search Result"
      placeholder="Search Anime"
      popoverProps={{
        offset: 10,
        classNames: {
          base: "rounded-large",
          content: "p-1 border-small border-default-100 bg-background",
        },
      }}
      startContent={
        <SearchIcon className="text-default-400" strokeWidth={2.5} size={20} />
      }
      radius="full"
      variant="bordered"
      items={animeList.items}
      inputValue={animeList.filterText}
      isLoading={animeList.isLoading}
      onInputChange={animeList.setFilterText}
      onKeyDown={handleKeyDown}
    >
      {(item) => (
        <AutocompleteItem
          key={item.mal_id}
          textValue={item.title}
          as={Link}
          href={`/${item.mal_id}`}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Avatar
                alt={item.title}
                className="flex-shrink-0"
                size="sm"
                src={item.images.webp.image_url}
              />
              <div className="flex flex-col">
                <span className="text-small">{item.title}</span>
                <span className="text-tiny text-default-400">{item.title}</span>
              </div>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
