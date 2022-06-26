import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme.palette.background.default)
  return createStyles({
    filmCardWrapper: {
      display: 'flex',
      minWidth: '100%',
      width: '100%',
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
    },
    plot: {
      maxHeight: '65px',
      overflow: 'hidden',
    },
    shadow: {
      position: 'absolute',
      // backgroundColor: 'rgba(0,0,0,0)',
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
