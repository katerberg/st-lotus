'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd9 from '@/app/decks/decklists/vrd9Decklists.json';

export default function StLotus9() {
  return (
        <StLotusDecks decks={vrd9} number={9}>
          <Typography paragraph>
            {
              'Mason Lange solidified his position as winningest drafter ever with his third victory on the back of powerful blue cards in a field that largely eschewed blue. There were many multi-colored decks that fought over mana (including two lands-style decks) leaving lots of blue value on the table. It looked like Dan was going to tie it up with the best Storm deck we have seen, but he was narrowly defeated in their late match-up.'
            }
          </Typography>
        </StLotusDecks>
  );
}
