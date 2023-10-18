'use client'
import type { Metadata } from 'next'
import './globals.css'
import '@fontsource/roboto';
import Topbar from '@/topbar/Topbar';
import Box from '@mui/material/Box';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';


const theme = responsiveFontSizes(createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        color: '#00E',
      },
    },
  },
  palette: {
    primary: {
      light: '#c1ffff',
      main: '#8dd8f8',
      dark: '#59a7c5',
      contrastText: '#000',
    },
    secondary: {
      light: '#e1aa6d',
      main: '#ad7b40',
      dark: '#7a4f15',
      contrastText: '#fff',
    },
  },
}));


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>St Lotus</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Topbar/>
            <Box sx={{marginTop: '58px'}}>
              {children}
            </Box>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
