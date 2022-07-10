import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { filmsService } from 'src/api/filmsService'
import { FilmCardList } from 'src/components/FilmCardList'
import { IFilm } from 'src/types'
import useStyles from './styles'

const LandingPage: React.FC = () => {
  const [films, setFilms] = useState<IFilm[]>([])
  const styles = useStyles()
  useEffect(() => {
    const fetchFilms = async () => {
      const filmsData = await filmsService.getInTheaters()
      setFilms(filmsData)
    }
    fetchFilms().catch(console.error)
  }, [])
  return (
    <>
      <Typography variant="h2" component="h2">
        Currently in theatre
      </Typography>
      <Box className={styles.filmsWrapper}>
        <FilmCardList films={films} />
      </Box>
    </>
  )
}

export default LandingPage
