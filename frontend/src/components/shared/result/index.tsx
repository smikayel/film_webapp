import { useEffect, useState } from "react";
import { Paginateion } from "../Paginateion";
import { NotFound } from "../notFound";
import { IResults } from "./results.interface";
import filmServiceInstance from "../../../services/filmsService";
import { Loading } from "../loading";
import { setResultInterface } from "../Paginateion/pagination.interface";

export const setFoundedResults = (
  results: any,
  setResults: React.Dispatch<React.SetStateAction<setResultInterface>>
) => {
  const getPageQuery = (urlString: string) => {
    const url = new URL(urlString);
    const page = url.searchParams.get("page");
    return parseInt(page as string, 10);
  };

  const nextPage = results.next ? getPageQuery(results.next) : null;
  const from = nextPage
    ? (nextPage - 2) * 20
    : Math.floor(results.count / 20) * 20;
  const to = nextPage ? Math.min(from + 20, results.count) : results.count;

  setResults({
    founded: results.count,
    from,
    to,
    films: results.results,
    next: results.next,
    previous: results.previous,
  });
};

export function Results({ searchKeyword }: IResults) {
  const [searchResult, setSearchResult] = useState({
    founded: 0,
    from: 0,
    to: 0,
    films: [],
    next: null,
    previous: null,
  });

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchKeyword) return;
    setLoading(true);
    const getFilms = async (searchKeyword: string) => {
      const films = await filmServiceInstance.searchFilm(searchKeyword);
      setFoundedResults(films, setSearchResult);
      setLoading(false);
    };
    getFilms(searchKeyword);
  }, [searchKeyword]);

  return (
    <div className="w-full flex justify-center items-center p-4">
      {isLoading && <Loading />}
      {!searchResult.founded ? (
        <NotFound searchKeyword={searchKeyword} />
      ) : (
        <Paginateion
          searchResult={searchResult}
          setResultsState={setSearchResult}
          setFoundedResults={setFoundedResults}
        />
      )}
    </div>
  );
}
