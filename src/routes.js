import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import Rules from './rules';
import Decks from './Decks';

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
          exact
          path="/decks"
        >
          <Decks />
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
