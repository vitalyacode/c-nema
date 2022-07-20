import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import useStyles from './styles'

export const Preloader = () => {
  const styles = useStyles()
  return (
    <Box className={styles.main}>
      <CircularProgress size={100} />
    </Box>
  )
}
