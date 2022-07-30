import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    },
    button: {
      fontSize: '1.2em !important',
      padding: '5px 40px !important',
    },
  })
)

export default useStyles
