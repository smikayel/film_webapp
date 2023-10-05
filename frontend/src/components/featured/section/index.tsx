import { Chip } from "../../shared/chip/chip";
import { InlineCard } from "../../shared/inlineCard";
import { SearchBar } from "../../shared/search";
import { Title } from "../../shared/title";
import { Card } from "../../shared/verticalCard";

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

const mockFilm = {
  id: 0,
  title: "KING KONG",
  image: "https://via.placeholder.com/224x332",
  director: "string",
  genres: "Action, Adventure, Drama",
  duration: 187,
  score: "",
  rating: 7.62,
  overview: "string",
  year: 2005,
  actors: "string",
};

export function Section() {
  return (
    <div className="flex-1 h-full bg-gray-950 ">
      <InlineCard film={mockFilm} />
      <div className=" h-full flex flex-col items-center justify-center">
        <Title />
        <div className="px-8">
          <SearchBar />
        </div>
        <div className="flex flex-row gap-10 p-4">
          {chips.map((chip) => (
            <Chip name={chip.name} icon={chip.iconSrc} key={chip.name} />
          ))}
        </div>
      </div>
      <Card film={mockFilm} />
    </div>
  );
}
