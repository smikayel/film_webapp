export interface IFilm {
  id: number;
  title: string;
  image: string;
  director: string;
  genres: string;
  duration: number;
  score: string;
  rating: number;
  overview: string;
  year: number;
  actors: string;
}

export interface ICard {
  film: IFilm;
}
