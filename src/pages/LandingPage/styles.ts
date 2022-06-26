import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filmsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      paddingTop: '40px',
    },
  })
)

export default useStyles
