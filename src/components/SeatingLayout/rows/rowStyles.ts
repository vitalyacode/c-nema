import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      height: '45px',
      display: 'flex',
      justifyContent: 'center',
    },
  })
)

export default useRowStyles
