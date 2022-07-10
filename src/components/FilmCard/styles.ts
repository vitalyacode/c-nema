import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    filmCardWrapper: {
      display: 'flex',
      minWidth: '100%',
      padding: '20px',
      boxSizing: 'border-box',
    },
    filmInfoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      width: '100%',
      gap: '10px',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.9rem !important',
    },
    plot: {
      display: '-webkit-box',
      overflow: 'hidden',
      lineClamp: 2,
      '-webkit-box-orient': 'vertical',
    },
    shadow: {
      position: 'absolute',
      background: `linear-gradient(to right, rgba(255,255,255,0) 0%, ${theme.palette.background.default})`,
      height: '20px',
      width: '20%',
      bottom: 0,
      right: 0,
    },
    shadowWrapper: {
      position: 'relative',
    },
  })
})
export default useStyles
