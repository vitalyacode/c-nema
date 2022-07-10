import { createTheme, ThemeOptions } from '@mui/material'

export const themeOptions: ThemeOptions = {
  // palette: {
  //   // mode: 'dark',
  //   primary: {
  //     main: '#fcfcfc',
  //     contrastText: 'rgba(17,17,17,0.87)',
  //     dark: '#535353',
  //     light: 'rgba(74,74,74,0.98)',
  //   },
  //   secondary: {
  //     main: '#a7a7a7',
  //     light: '#ffffff',
  //     dark: '#676767',
  //     contrastText: 'rgba(74,74,74,0.87)',
  //   },
  //   background: {
  //     default: '#171717',
  //     paper: '#252525',
  //   },
  //   text: {
  //     primary: '#ffffff',
  //     secondary: 'rgba(250,246,246,0.54)',
  //     disabled: 'rgba(0,0,0,0.29)',
  //   },
  //   divider: 'rgba(0,0,0,0.27)',
  // },
  palette: {
    mode: 'dark',
  },
}

export const theme = createTheme(themeOptions)
