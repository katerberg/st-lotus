'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd15 from '@/app/decks/decklists/vrd15Decklists.json';

export default function StLotus15() {
  return (
        <StLotusDecks decks={vrd15} number={15}>
          <Typography paragraph>
            Dan Zielinski took down the whole thing in an undisputed 6-1 with the bogeyman of the format: RW Initiative. This time, he ran it into Naya for powerful walkers, but the core aggressive strategy remained intact. Even with Cody on a very similar strategy, the pool appears deep enough to share between two of the top three decks. Brandon rounded out the field with a “Good Soup” deck of artifact combos.
          </Typography>
        </StLotusDecks>
  );
}
