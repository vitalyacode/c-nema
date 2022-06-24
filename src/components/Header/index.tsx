import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography, Box } from '@mui/material'
import RequestButton from '../RequestButton'
import { getInTheaters } from 'src/api/filmsService'
import { db } from 'src/firebase-config'
import { doc, setDoc } from 'firebase/firestore'

export const Header: React.FC = () => {
  const imdbQuery = async () => {
    const films = await getInTheaters()
    await setDoc(doc(db, 'films', 'InTheatres'), {
      films,
    })
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
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
