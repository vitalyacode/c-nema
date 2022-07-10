// id: string
//   title: string
//   image: string
//   runtimeMins: string
//   plot: string
//   genres: string

import { IFilm, IFilmList } from '../../types'

export const sanitizeFilms = ({ items }: IFilmList): IFilm[] => {
  const sanitizedFilms = items.map((film) => {
    const { id, title, image, runtimeMins, plot, genres, starList } = film
    return { id, title, image, runtimeMins, plot, genres, starList }
  })
  return sanitizedFilms
}
