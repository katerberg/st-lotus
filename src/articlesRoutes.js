import React from 'react';
import {
  Route,
} from 'react-router-dom';
import HowToPlay from './HowToPlay';

function ArticlesRoutes() {
  return (
    <>
      <Route
        exact
        path="/articles/2021-11-06/Planeswalkers in VRD"
      >
        <HowToPlay />
      </Route>
    </>
  );
}

export default ArticlesRoutes;
