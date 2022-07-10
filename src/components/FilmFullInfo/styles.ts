import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    previewImagesContainer: {
      width: '100%',
      height: '100%',
    },
    previewAndInfoContainer: {
      height: '500px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '30px',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    textContentWrapper: {
      fontSize: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      overflowY: 'scroll',
      listStyle: 'none',
      height: '80%',
    },
    posterContainer: {
      maxHeight: '500px',
      width: '320px',
    },
    poster: {
      objectFit: 'cover',
      height: '100%',
      maxWidth: '320px',
    },
    buyButtonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: '1',
    },
  })
)

export default useStyles
