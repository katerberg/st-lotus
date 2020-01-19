import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home';
import Rules from './rules';

function Routes() {
  return (
      <Switch>
        <Route
          exact
          path="/rules"
        >
          <Rules />
        </Route>
        <Route
          path="/"
        >
          <Home />
        </Route>
      </Switch>
  );
}

export default Routes;
