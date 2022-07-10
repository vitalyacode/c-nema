import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'
import useGlobalStyles from 'src/globalStyles'
import { IFilmWithImages } from 'src/types'
import { imdbImageFormats } from 'src/utils/constants'
import { convertImageUrl } from 'src/utils/convertImageUrl'
import { CarouselImage } from '../CarouselImage'
import { Poster } from '../Poster'
import useStyles from './styles'

// type FilmFullInfoProps = IFilmWithImages & {
//   setIsPosterLoaded: CallableFunction
// }

export const FilmFullInfo: React.FC<IFilmWithImages> = ({
  id,
  title,
  genres,
  image,
  plot,
  images,
  starList,
}) => {
  const biggerImage = convertImageUrl(image, imdbImageFormats.big)
  const styles = useStyles()
  const globalStyles = useGlobalStyles()
  return (
    <Box className={styles.contentWrapper}>
      <Box className={styles.previewAndInfoContainer}>
        <Box className={styles.posterContainer}>
          <Poster component="img" src={biggerImage} className={styles.poster} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box className={styles.textContentWrapper}>
            <Typography component="h2" variant="h2">
              {title}
            </Typography>
            <Typography fontSize="inherit">{plot}</Typography>
            <Typography fontSize="inherit">Genres: {genres}</Typography>
            <Typography fontSize="inherit">
              Starring: {starList.map((star) => star.name).join(', ')}
            </Typography>
          </Box>
          <Box className={styles.buyButtonWrapper}>
            <Link to={`/order/${id}`} className={globalStyles.linkStyle}>
              <Button variant="contained" sx={{ fontSize: '25px' }}>
                Order tickets
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Carousel className={styles.previewImagesContainer} indicators={false}>
        {images.map((imageUrl) => (
          <CarouselImage image={imageUrl} key={imageUrl} />
        ))}
      </Carousel>
    </Box>
  )
}
