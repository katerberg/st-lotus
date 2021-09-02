import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import Topbar from './Topbar';
import {ThemeProvider} from '@material-ui/core';

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
//#8dd8f8
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Topbar/>
        <Router>
          <Routes />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
