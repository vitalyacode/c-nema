import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkStyle: {
      textDecoration: 'inherit',
      color: 'inherit',
    },
    all: {
      '&::-webkit-scrollbar': {
        width: '0.3em',
      },

      '&::-webkit-scrollbar-thumb': {
        borderRadius: '5px',
        backgroundColor: `${theme.palette.primary.main}`,
      },
    },
  })
)

export default useGlobalStyles
