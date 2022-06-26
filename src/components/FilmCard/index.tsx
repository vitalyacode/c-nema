import { Box, Paper, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'
import useGlobalStyles from 'src/globalStyles'
import { MyLink } from '../MyLink'
import useStyles from './styles'

type FilmCardProps = {
  id: string
  title: string
  genres: string
  image: string
  plot: string
}

export const FilmCard: React.FC<FilmCardProps> = ({
  id,
  title,
  genres,
  image,
  plot,
}) => {
  const styles = useStyles()
  const globalStyles = useGlobalStyles()
  return (
    <Box
      className={`${styles.filmCardWrapper}`}
      component={MyLink}
      to={`/film/${id}`}
    >
      <Box component="img" src={image} />
      <Box className={styles.filmInfoWrapper}>
        <Typography className={styles.title} component="h4" variant="h4">
          {title}
        </Typography>
        <Box className={styles.shadowWrapper}>
          <Box className={styles.shadow}></Box>
          <Typography className={styles.plot} component="p">
            {plot}
          </Typography>
        </Box>
        <Typography>Genres: {genres}</Typography>
      </Box>
    </Box>
  )
}
