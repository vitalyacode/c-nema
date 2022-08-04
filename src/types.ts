export interface IFilm {
  id: string
  title: string
  image: string
  runtimeMins: string
  plot: string
  genres: string
  starList: Star[]
}

export interface IFilmWithImages extends IFilm {
  images: string[]
}

export interface ICommonSeatProperties {
  selectedSeats: Seat[]
  handleSelect: CallableFunction
}

export interface IUserCredentials {
  firstName: string
  lastName: string
  email: string
}

export type Star = {
  id: string
  name: string
}

export type ImageArray = {
  images: string[]
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

export type OrderTicketsData = {
  filmId: string
  seatIds: string[]
  userCredentials: IUserCredentials
}

export type SeatingLayoutType = {
  id: string
  selectedSeats: Seat[]
  setSelectedSeats: CallableFunction
}
