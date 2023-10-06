import { IFilm } from "../verticalCard/card.interface";

export interface ISearchResults {
  founded: number;
  from: number;
  to: number;
  films: IFilm[];
  next: string | null;
  previous: string | null;
}

export interface setResultInterface {
  founded: number;
  from: number;
  to: number;
  films: never[];
  next: null;
  previous: null;
}

export interface IPagination {
  searchResult: ISearchResults;
  setResultsState: React.Dispatch<React.SetStateAction<setResultInterface>>;
  setFoundedResults: (
    results: any,
    setResults: React.Dispatch<React.SetStateAction<setResultInterface>>
  ) => void;
}
