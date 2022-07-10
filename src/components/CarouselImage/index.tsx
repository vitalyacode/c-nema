import { Box } from '@mui/system'
import useStyles from './styles'

type CarouselImageProps = {
  image: string
}

export const CarouselImage: React.FC<CarouselImageProps> = ({ image }) => {
  const styles = useStyles()
  return (
    <Box component="img" src={image} className={styles.imagePreviewItem}></Box>
  )
}
