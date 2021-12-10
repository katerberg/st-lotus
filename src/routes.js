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
import Decks from './decks/Decks';
import Rulings from './rulings/Rulings';
import Typography from '@mui/material/Typography';
import Articles from './articles/Articles';
import ManaCost from './common/mana-cost/ManaCost';
import YourFirstVrd from './articles/YourFirstVrd';

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
          path="/decks/st-lotus-1"
        >
          <StLotusDecks decks={vrd1}
            number={1}
          >
            <Typography paragraph>{'The first streamed VRD since Shotgun Lotus shut down nearly four years earlier. All of us were first time drafters and had so much to learn. Naveen Balaji ended up teaching us the power of Time Vault and Tinker in decks that have other combos to back it up. Sadly this draft VOD has been lost to the sands of time.'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-2"
        >
          <StLotusDecks decks={vrd2}
            number={2}
          >
            <Typography paragraph>{'In a field full of decks that all performed well, Daniel Zielinski took first place by drafting fast '}<ManaCost manaCost="{U}" />{' interaction early, and then surprising the table by picking up Infect cards in round 22. This strategy has gained popularity and is now used in many shells, including Painter/Grindstone, Twin, and even attempts at Storm. Stephen notably pushed the envelope by taking Karn and Narset incredibly early, which has since become almost standard. Elaine, in her Nicol Bolas tribute-deck, found her niche with Grixis or Esper control decks.'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-3"
        >
          <StLotusDecks decks={vrd3}
            number={3}
          >
            <Typography paragraph>{'Elaine Cao took Stephen’s innovative planeswalker approach to the format and turned the knob to 11. She ended up drafting seven walkers along with plenty of stack-based interaction and solid interaction, which has since become her trademark. She ended up defeating an otherwise very evenly matched field full of '}<ManaCost manaCost="{U}" />{' decks.'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-4"
        >
          <StLotusDecks decks={vrd4}
            number={4}
          >
            <Typography paragraph>{'Elaine Cao became the first (and only) player to win two VRDs, and managed to do it in back-to-back tournaments, largely with the same base of cards. The innovation that she brought to the table this time was the addition of “draft-matters” cards when she took Arcane Savant. In combination with Kindred Charge, it provided a one-card combo that took her to finals victory against Brandon Curry. Brandon piloted a Pikula-style Esper interaction deck. It was his first to demonstrate the power of Pentad Prism, which has since become a mainstay of VRDs, even outside of St Lotus.'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-5"
        >
          <StLotusDecks decks={vrd5}
            number={5}
          >
            <Typography paragraph>{'John Ryan Hamilton took down the “Queen of VRD”, Elaine Cao, using her own technology against her. Having seen the power of Arcane Savant in the previous draft, he prioritized Aether Searcher over all else, which he was able to use to result in a '}<ManaCost manaCost="{6}" />{' mana Emrakul, the Aeons Torn. To make matters worse for the rest of the field, he also drafted Tinker for a duplicate, cheaper copy. He used these all to great effect in a controlling shell that let him win the tournament with arguably the best deck in VRD history. Elaine’s innovative and controlling Kess deck could not keep up in finals, despite having a great day as well.'}</Typography>
          </StLotusDecks>
        </Route>
        <Route
          exact
          path="/decks/st-lotus-6"
        >
          <StLotusDecks decks={vrd6}
            number={6}
          >
            <Typography paragraph>{'Mason Lange won the event with a strategy often spurned at these events: playing creatures and turning them sideways. Although opening with his traditional strategy of early discard, he quickly pivoted off of '}<ManaCost manaCost="{B}" />{' cards and into the open slot of aggressive '}<ManaCost manaCost="{G}" />{' creatures. His use of Elvish Clan-Caller allowed for him to try out the “Self-tutoring” rule to great effect, and he won a close finals against John Ryan who was on an incredibly consistent Reanimator deck that had a powerful back-up plan of Pack Rat. This was the first draft where “draft-matters” cards did not have an effect, which allowed for other strategies to prosper.'}</Typography>
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
          exact
          path="/articles/2021-12-09/Your First VRD"
        >
          <YourFirstVrd />
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
