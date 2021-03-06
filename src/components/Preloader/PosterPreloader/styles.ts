import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    posterPreloaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
)

export default useStyles
