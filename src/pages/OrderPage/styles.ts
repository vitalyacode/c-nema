import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: 'center',
    },
    stepContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  })
)

export default useStyles
