export default interface MovieType {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
  }