import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagePreloaderContainer: {
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
)

export default useStyles
