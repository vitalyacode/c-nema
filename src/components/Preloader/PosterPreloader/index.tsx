import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import useStyles from './styles'

type PosterPreloaderProps = React.ComponentProps<typeof CircularProgress> & {
  isVisible: boolean
}

export const PosterPreloader: React.FC<PosterPreloaderProps> = (props) => {
  const styles = useStyles()
  const { isVisible, ...restProps } = props
  return (
    <Box
      sx={{
        height: '500px',
        width: '320px',
      }}
      className={`${styles.posterPreloaderContainer} ${props.className}`}
    >
      <CircularProgress {...restProps} />
    </Box>
  )
}
