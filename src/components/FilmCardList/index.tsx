import { Grid } from '@mui/material'
import * as React from 'react'
import { IFilm } from 'src/types'
import { FilmCard } from '../FilmCard'

type FilmCardListProps = {
  films: IFilm[]
}

export const FilmCardList: React.FC<FilmCardListProps> = ({ films }) => {
  return (
    <Grid container spacing={5}>
      {films.map((film: IFilm) => (
        <Grid item key={film.id} xs={12} md={6}>
          <FilmCard {...film} />
        </Grid>
      ))}
    </Grid>
  )
}
