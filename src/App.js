import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import './App.scss';

function App() {
  return (
    <div className="App"
      id="wrapper"
    >
      <Router>
        <div className="container-fluid">
          <div className="view-frame">
            <Routes />
          </div>
          <footer>
            <a href="http://creativecommons.org/licenses/by-sa/4.0/"
              rel="license"
            >
              <img alt="Creative Commons License"
                src="./cc.png"
                style={{borderWidth: 0}}
              />
            </a>
            <p>{'This work is licensed under a '}<a href="http://creativecommons.org/licenses/by-sa/4.0/"
              rel="license"
                                                 >{'Creative Commons Attribution-ShareAlike 4.0 International License'}</a>{'.'}</p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
