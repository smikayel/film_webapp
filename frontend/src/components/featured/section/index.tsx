import { Chip } from "../../shared/chip/chip";
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
  return (
    <div className="flex flex-col items-center justify-center bg-gray-950">
      <div className="flex flex-col items-center justify-center">
        <Title />
        <SearchBar />
        <div className="flex flex-row gap-10 p-4">
          {chips.map((chip) => (
            <Chip name={chip.name} icon={chip.iconSrc} key={chip.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
