import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography, Box } from '@mui/material'
import RequestButton from '../RequestButton'
import useStyles from './styles'
import { getFunctions, httpsCallable } from 'firebase/functions'

export const Header: React.FC = () => {
  const styles = useStyles()
  const functions = getFunctions()
  const updateFilms = httpsCallable(functions, 'updateFilms')
  const imdbQuery = async () => {
    const response = await updateFilms({ bruh: 'yo' })
    console.log(response.data)
  }
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.header}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-around' }}>
          <Typography variant="h3" color="inherit" component="h3">
            C-nema
          </Typography>
          <RequestButton fn={imdbQuery} label={'Re-request'} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
