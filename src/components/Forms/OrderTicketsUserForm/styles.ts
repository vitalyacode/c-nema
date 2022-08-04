import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '250px',
    },
    errorInputContainer: {
      position: 'relative',
    },
    errorMessage: {
      position: 'absolute',
      fontSize: '11px !important',
      color: '#B00',
      top: '-10px',
      whiteSpace: 'nowrap',
    },
    formContainer: {
      height: 'fit-content',
    },
  })
)

export default useStyles
