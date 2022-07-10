import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout/MainLayout'
import FilmPage from './pages/FilmPage'
import LandingPage from './pages/LandingPage'
import OrderPage from './pages/OrderPage'
import { theme } from './utils/themeCreator'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/film/:id" element={<FilmPage />}></Route>
              <Route path="/order/:id" element={<OrderPage />}></Route>
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
