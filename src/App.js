import React from 'react';
import ReactGA from 'react-ga';
import {
  HashRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import {createBrowserHistory} from 'history';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Topbar from './topbar/Topbar';

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

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  const {hash, pathname, search} = location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // This is required when navigating from a different page so that
    // The element is rendered on the page before trying to getElementById.
    setTimeout(
      () => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
        window.ga('set', 'page', pathname + search);
        window.ga('send', 'pageview');
      },
      0,
    );
  }
});


function App() {
  ReactGA.initialize('UA-208899645-1');
  window.ga('set', 'page', window.location.pathname + window.location.search);
  window.ga('send', 'pageview');

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Topbar/>
          <Box sx={{marginTop: '58px'}}>
            <Routes />
          </Box>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
