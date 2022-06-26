import { Box } from '@mui/material'
import * as React from 'react'
import { IFilmList, IFilm } from 'src/types'
import { FilmCard } from '../FilmCard'

export const FilmCardList: React.FC<IFilmList> = ({ films }) => {
  return (
    <>
      {films.map((film: IFilm) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </>
  )
}
