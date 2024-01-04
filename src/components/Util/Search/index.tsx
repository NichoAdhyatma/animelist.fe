import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import SearchIcon from "./SearchIcon";
import { AnimeType } from "@/type/anime";
import { get } from "@/libs/fetcher";
import { useRouter } from "next-nprogress-bar";
import { KeyboardEvent } from "react";
import { AnimeResponse } from "@/type/animeResponse";
import { useAsyncList } from "react-stately";
import { generateRandomId } from "@/helper/randomId";

export default function SearchComponent() {
  const router = useRouter();

  const animeList = useAsyncList<AnimeType>({
    async load({ signal, filterText }) {
      if (filterText === "")
        return {
          items: [],
        };

      let { data } = await get<AnimeResponse>(`/anime?q=${filterText}`, {
        signal: signal,
      });

      return {
        items: data,
      };
    },
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && animeList.filterText.trim() !== "") {
      event.preventDefault();
      router.push(`/search/${animeList.filterText}`);
    }
  };

  return (
    <Autocomplete
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
      menuTrigger="input"
    >
      {(item) => (
        <AutocompleteItem
          key={generateRandomId(8)}
          textValue={item.title}
          onPress={() => router.push(`/anime/${item.mal_id}`)}
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
                <span className="text-tiny text-default-400">
                  {item.type} {item.year}
                </span>
              </div>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
