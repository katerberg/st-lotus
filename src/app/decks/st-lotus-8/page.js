'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd8 from '@/app/decks/decklists/vrd8Decklists.json';

export default function StLotus8() {
  return (
        <StLotusDecks decks={vrd8} number={8}>
          <Typography paragraph>
            {
              'Mason Lange came back and tied the record of two VRD championships with a blue tempo deck (with some white), featuring flash creatures and many of the best cards ever printed. Managing to snag both Time Walk and Ancestral, this list has all sorts of stack-based interaction, while still putting pressure on life totals with ninjas and ETB flash creatures. Blue went slightly undervalued in this field, with two nearly mono-blue lists emerging as a result.'
            }
          </Typography>
        </StLotusDecks>
  );
}
