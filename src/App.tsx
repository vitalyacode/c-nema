import { ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { TestPage } from './pages/TestPage'
import { theme } from './utils/themeCreator'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<TestPage />}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
