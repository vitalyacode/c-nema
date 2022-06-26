import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { getInTheaters } from 'src/api/filmsService'
import { FilmCardList } from 'src/components/FilmCardList'
import { db } from 'src/firebase-config'
import { IFilm } from 'src/types'
import useStyles from './styles'

const LandingPage: React.FC = () => {
  const [films, setFilms] = useState<IFilm[]>([])
  const styles = useStyles()
  useEffect(() => {
    const fetchFilms = async () => {
      const filmsData = await getInTheaters()
      setFilms(filmsData)
    }
    fetchFilms().catch(console.error)
  }, [])
  return (
    <>
      <Typography variant="h2" color="primary" component="h2">
        Currently in theatre
      </Typography>
      <Box className={styles.filmsWrapper}>
        <FilmCardList films={films} />
      </Box>
    </>
  )
}

export default LandingPage
