import React from 'react';
import PlaneswalkersInVrd from './articles/PlaneswalkersInVrd';
import CombosInVrd from './articles/CombosInVrd';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import HowToPlay from './HowToPlay';
import vrd1 from './decks/decklists/vrd1Decklists.json';
import vrd2 from './decks/decklists/vrd2Decklists.json';
import vrd3 from './decks/decklists/vrd3Decklists.json';
import vrd4 from './decks/decklists/vrd4Decklists.json';
import vrd5 from './decks/decklists/vrd5Decklists.json';
import vrd6 from './decks/decklists/vrd6Decklists.json';
import vrd7 from './decks/decklists/vrd7Decklists.json';
import StLotusDecks from './decks/StLotusDecks';
import Rulings from './rulings/Rulings';
import Typography from '@mui/material/Typography';
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
          <StLotusDecks decks={vrd1}
            number={1}
          >
            <Typography paragraph>{'Write'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-2"
        >
          <StLotusDecks decks={vrd2}
            number={2}
          >
            <Typography paragraph>{'Write'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-3"
        >
          <StLotusDecks decks={vrd3}
            number={3}
          >
            <Typography paragraph>{'Write'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-4"
        >
          <StLotusDecks decks={vrd4}
            number={4}
          >
            <Typography paragraph>{'Write'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-5"
        >
          <StLotusDecks decks={vrd5}
            number={5}
          >
            <Typography paragraph>{'Write'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-6"
        >
          <StLotusDecks decks={vrd6}
            number={6}
          >
            <Typography paragraph>{'Write'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-7"
        >
          <StLotusDecks decks={vrd7}
            number={7}
          >
            <Typography paragraph>{'Brandon Curry took the tournament with a planeswalker heavy deck. He managed to squeak out a win against Eric Levine’s Eldrazi and Taxes list. This draft really showed the power of continuous board-control and prioritizing mana fixing incredibly early. Often we see combo decks get attempted in really high numbers, but the consistency of a bunch of planeswalkers, consistent mana, and good controlling elements got Brandon his first VRD win.'}</Typography>
          </StLotusDecks>
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
