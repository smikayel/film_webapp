import { Paginateion } from "../Paginateion";
import { NotFound } from "../notFound";
import { IResults } from "./results.interface";

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

export function Results({ searchKeyword }: IResults) {
  const searchResult = { founded: 1, from: 1, to: 1, films: [mockFilm] };

  return (
    <div className="w-full flex justify-center items-center p-4">
      {!searchResult.founded ? (
        <NotFound searchKeyword={searchKeyword} />
      ) : (
        <Paginateion searchResult={searchResult} />
      )}
    </div>
  );
}
