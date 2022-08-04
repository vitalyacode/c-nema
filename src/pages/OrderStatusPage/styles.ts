import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textContainer: {
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: '150px !important',
      height: '150px  !important',
    },
  })
)

export default useStyles
