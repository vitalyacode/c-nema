import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography, Box } from '@mui/material'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h3" color="inherit" component="h3">
            C-nema
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
