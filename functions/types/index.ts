export type Star = {
  id: string
  name: string
}

export interface IFilm {
  id: string
  title: string
  image: string
  runtimeMins: string
  plot: string
  genres: string
  starList: Star[]
}

export interface IFilmList {
  items: IFilm[]
}

export interface ImageItem {
  title: string
  image: string
}

export type FullFilm = {
  data: IFilm
}

export type Seat = {
  id: string
  isFree: boolean
  row: number
  column: number
}

export type LayoutObject = {
  [key: string]: Seat[]
}

export interface IUserCredentials {
  firstName: string
  lastName: string
  email: string
}

export type OrderTicketsData = {
  filmId: string
  seatIds: string[]
  userCredentials: IUserCredentials
}

export type PdfData = {
  film: IFilm
  takenSeats: Seat[]
  userCredentials: IUserCredentials
}
