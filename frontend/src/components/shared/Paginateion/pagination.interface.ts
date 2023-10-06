import { IFilm } from "../verticalCard/card.interface";

export interface ISearchResults {
  founded: number;
  from: number;
  to: number;
  films: IFilm[];
}

export interface IPagination {
  searchResult: ISearchResults;
}
