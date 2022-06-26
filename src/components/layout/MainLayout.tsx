import { Container } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { Header } from 'src/components/Header'
import useStyles from './styles'

export const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.boba}>
        <Header />
        <Container component="main" maxWidth="md">
          {children}
        </Container>
      </Box>
    </>
  )
}
