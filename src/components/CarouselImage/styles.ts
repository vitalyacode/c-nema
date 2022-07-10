import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imagePreviewItem: {
      width: '100%',
      objectFit: 'cover',
      height: '700px',
    },
  })
)

export default useStyles
