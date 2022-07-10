import { Box, Link, Typography, Paper } from '@mui/material'
import * as React from 'react'
import useStyles from './styles'
import { Link as DOMLink } from 'react-router-dom'

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

  return (
    <Paper className={styles.filmCardWrapper}>
      <DOMLink to={`/film/${id}`}>
        <Box component="img" src={image} sx={{ display: 'flex' }} />
      </DOMLink>
      <Box className={styles.filmInfoWrapper}>
        <Link component={DOMLink} to={`/film/${id}`} underline="hover">
          <Typography className={styles.title} component="h4" variant="h4">
            {title}
          </Typography>
        </Link>
        <Typography className={styles.plot} component="p">
          {plot}
        </Typography>
        <Typography component="p">Genres: {genres}</Typography>
      </Box>
    </Paper>
  )
}
