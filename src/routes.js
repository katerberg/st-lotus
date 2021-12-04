import React from 'react';
import PlaneswalkersInVrd from './articles/PlaneswalkersInVrd';
import CombosInVrd from './articles/CombosInVrd';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import HowToPlay from './HowToPlay';
import StLotus1Decks from './decks/StLotus1Decks';
import StLotus7Decks from './decks/StLotus7Decks';
import Rulings from './rulings/Rulings';
import Articles from './articles/Articles';

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
          path="/decks/st-lotus-1"
        >
          <StLotus1Decks />
        </Route>
        <Route
          exact
          path="/decks/st-lotus-7"
        >
          <StLotus7Decks />
        </Route>
        <Route
          exact
          path="/rulings"
        >
          <Rulings />
        </Route>
        <Route
          exact
          path="/articles"
        >
          <Articles />
        </Route>
        <Route
          exact
          path="/articles/2021-11-06/Planeswalkers in VRD"
        >
          <PlaneswalkersInVrd />
        </Route>
        <Route
          exact
          path="/articles/2021-11-25/Combos in VRD"
        >
          <CombosInVrd />
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
