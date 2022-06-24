import React from 'react'
import {
  ThemeProvider as ThemeProviderBase,
  StyledEngineProvider,
} from '@mui/material/styles'
import { themeOptions } from './themeCreator'

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProviderBase theme={themeOptions}>{children}</ThemeProviderBase>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
