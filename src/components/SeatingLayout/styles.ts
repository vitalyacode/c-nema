import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      position: 'relative',
      marginTop: '20px',
    },
    preloaderContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '9999',
    },
    displayNone: {
      display: 'none',
    },
    displayFlex: {
      display: 'flex',
    },
    layoutWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    selectedSeatsAndButtonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    },
    selectedSeatsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
)

export default useStyles
