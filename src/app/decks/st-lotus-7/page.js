'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd7 from '@/app/decks/decklists/vrd7Decklists.json';

export default function StLotus7() {
  return (
        <StLotusDecks decks={vrd7} number={7}>
          <Typography paragraph>
            {
              'Brandon Curry took the tournament with a planeswalker heavy deck. He managed to squeak out a win against Eric Levine’s Eldrazi and Taxes list. This draft really showed the power of continuous board-control and prioritizing mana fixing incredibly early. Often we see combo decks get attempted in really high numbers, but the consistency of a bunch of planeswalkers, consistent mana, and good controlling elements got Brandon his first VRD win.'
            }
          </Typography>
        </StLotusDecks>
  );
}
