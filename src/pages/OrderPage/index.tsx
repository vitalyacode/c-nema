import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { filmsService } from 'src/api/filmsService'
import { PagePreloader } from 'src/components/Preloader/PagePreloader'
import { SeatingLayout } from 'src/components/SeatingLayout'
import { IFilm } from 'src/types'
import useStyles from './styles'

const OrderPage: React.FC = () => {
  const params = useParams()
  const styles = useStyles()
  const id = params.id as string
  const [film, setFilm] = useState<IFilm>()
  const [filmNotFound, setFilmNotFound] = useState<boolean>(false)

  useEffect(() => {
    const fetchFilmAndImages = async () => {
      try {
        const resolvedPromises = await Promise.all([filmsService.getById(id)])
        if (!resolvedPromises[0]) throw new Error('Could not find film')
        setFilm(resolvedPromises[0])
      } catch (err) {
        setFilmNotFound(true)
      }
    }
    id && fetchFilmAndImages()
  }, [id])

  if (filmNotFound) {
    return <div>Something went wrong</div>
  }

  return (
    <>
      {film ? (
        <Box>
          <Typography variant="h2" component="h2" className={styles.title}>
            {film.title}
          </Typography>
          <SeatingLayout id={id} />
        </Box>
      ) : (
        <PagePreloader />
      )}
    </>
  )
}

export default OrderPage
