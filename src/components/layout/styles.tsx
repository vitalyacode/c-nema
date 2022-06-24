// import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    boba: {
      backgroundColor: theme.palette.background.default,
      height: 'auto !important',
      minHeight: '100%',
    },
  })
})

export default useStyles
