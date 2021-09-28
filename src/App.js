import React from 'react';
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
      contrastText: '#fff',
    },
  },
}));

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  const {hash} = location;
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
      },
      0
    );
  }
});


function App() {
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
