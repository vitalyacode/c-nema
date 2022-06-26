import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkStyle: {
      textDecoration: 'inherit',
      color: 'inherit',
    },
  })
)

export default useGlobalStyles
