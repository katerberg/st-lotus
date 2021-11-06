import React from 'react';
import {
  Route,
} from 'react-router-dom';
import PlaneswalkersInVrd from './articles/PlaneswalkersInVrd';

function ArticlesRoutes() {
  return (
    <>
      <Route
        exact
        path="/articles/2021-11-06/Planeswalkers in VRD"
      >
        <PlaneswalkersInVrd />
      </Route>
    </>
  );
}

export default ArticlesRoutes;
