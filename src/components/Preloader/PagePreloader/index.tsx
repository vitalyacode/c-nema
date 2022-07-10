import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import useStyles from './styles'

export const PagePreloader = () => {
  const styles = useStyles()
  return (
    <Box className={styles.pagePreloaderContainer}>
      <CircularProgress size={100} />
    </Box>
  )
}
