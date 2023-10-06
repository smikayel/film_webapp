import { useState } from "react";
import { Chip } from "../../shared/chip/chip";
import { Results } from "../../shared/result";
import { SearchBar } from "../../shared/search";
import { Title } from "../../shared/title";

const chips = [
  {
    name: "Movie",
    iconSrc: "/icons/movie.svg",
  },
  {
    name: "TV Shows",
    iconSrc: "/icons/tv.svg",
  },
];

export function Section() {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="flex flex-col flex-grow h-full bg-gray-950 items-center justify-center">
      <div className="h-full flex flex-col items-center justify-center">
        <Title />
        <div className="px-8">
          <SearchBar setValue={setSearchKeyword} />
        </div>
        <div className="flex flex-row gap-10 p-4">
          {chips.map((chip) => (
            <Chip name={chip.name} icon={chip.iconSrc} key={chip.name} />
          ))}
        </div>
      </div>
      {searchKeyword && <Results searchKeyword={searchKeyword} />}
    </div>
  );
}
