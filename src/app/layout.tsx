'use client'
import './globals.css'
import React from 'react';
import '@fontsource/roboto';
import Topbar from '@/topbar/Topbar';
import Box from '@mui/material/Box';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import ReactGA from 'react-ga';

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
  ReactGA.initialize('UA-208899645-1');
  // window.ga('set', 'page', window.location.pathname + window.location.search + window.location.hash);
  // window.ga('send', 'pageview');

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
