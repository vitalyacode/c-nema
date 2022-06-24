import { IFilmList } from '../../../src/types'

// id: string
//   title: string
//   image: string
//   runtimeMins: string
//   plot: string
//   genres: string

export const sanitizeFilms = ({ items }: IFilmList) => {
  const sanitizedFilms = items.map((film) => {
    const { id, title, image, runtimeMins, plot, genres } = film
    return { id, title, image, runtimeMins, plot, genres }
  })
  return sanitizedFilms
}
