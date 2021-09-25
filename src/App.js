import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import Topbar from './topbar/Topbar';

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      light: '#c1ffff',
      main: '#8dd8f8',
      dark: '#59a7c5',
      contrastText: '#fff',
    },
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Topbar/>
          <Routes />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
