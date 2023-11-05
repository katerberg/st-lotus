'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd10 from '@/app/decks/decklists/vrd10Decklists.json';

export default function StLotus10() {
  return (
        <StLotusDecks decks={vrd10} number={10}>
          <Typography paragraph>
            {
              'Andrew Swift took down his first event by skillfully piloting a Blue-White control deck full of many of the standard slots, but with some spicy additions made possible by a robust mana-base. Among the two splash colors is the ability to play Comet, Stellar Pup, which dug him out of games where he had stabilized the board but needed something to get him out of the doghouse as his opponents nipped at his heels for a follow-up play.'
            }
          </Typography>
        </StLotusDecks>
  );
}
