import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HowToPlay from './HowToPlay';

function Routes() {
  return (
    <Switch>
      <Route exact path="/how-to-play">
        <HowToPlay />
      </Route>
    </Switch>
  );
}

export default Routes;
