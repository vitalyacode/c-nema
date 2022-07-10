import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    seatBox: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: '1 / 1',
      borderRadius: '7px',
      boxSizing: 'border-box',
      '&:hover': {
        border: '2px solid white',
      },
    },
    seatIcon: {
      width: '70%',
      aspectRatio: '1 / 1',
      borderRadius: '7px',
      transition: '0.1s',
    },
    vacant: {
      backgroundColor: theme.palette.primary.main,
    },
    taken: {
      backgroundColor: theme.palette.action.disabled,
    },
    selected: {
      backgroundColor: '#8cd124',
      transform: 'scale(1.1)',
    },
    boxEnabled: {
      cursor: 'pointer',
    },
    boxDisabled: {
      cursor: 'not-allowed !important',
      border: 'none !important',
    },
  })
)

export default useStyles
