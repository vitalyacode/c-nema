export interface IFilm {
  id: string
  title: string
  image: string
  runtimeMins: string
  plot: string
  genres: string
}

export interface IFilmList {
  items: IFilm[]
}
