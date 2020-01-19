import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import Sidebar from './sidebar';
import './App.scss';

function App() {
  return (
    <div className="App"
      id="wrapper"
    >
      <Router>
        <Sidebar />
        <div className="container-fluid">
          <div className="view-frame">
            <Routes />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
