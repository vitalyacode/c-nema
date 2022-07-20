import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography, Box } from '@mui/material'
// import RequestButton from '../RequestButton'
import useStyles from './styles'
import useGlobalStyles from '../../globalStyles'
import { getFunctions, httpsCallable } from 'firebase/functions'
import app from 'src/firebase-config'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  const styles = useStyles()
  const globalStyles = useGlobalStyles()
  const functions = getFunctions(app, 'europe-central2')
  const updateFilms = httpsCallable(functions, 'updateFilms')
  const imdbQuery = async () => {
    await updateFilms({ bruh: 'yo' })
  }
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.header}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-around' }}>
          <Link to="/" className={globalStyles.linkStyle}>
            <Typography variant="h3" component="h3">
              C-nema
            </Typography>
          </Link>
          {/* <RequestButton fn={imdbQuery} label={'Re-request'} /> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
