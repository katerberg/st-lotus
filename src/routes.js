import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import HowToPlay from './HowToPlay';
import Decks from './decks/Decks';
import Rulings from './rulings/Rulings';

function Routes() {
  return (
      <Switch>
        <Route
          exact
          path="/how-to-play"
        >
          <HowToPlay />
        </Route>
        <Route
          exact
          path="/decks"
        >
          <Decks />
        </Route>
        <Route
          exact
          path="/rulings"
        >
          <Rulings />
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
