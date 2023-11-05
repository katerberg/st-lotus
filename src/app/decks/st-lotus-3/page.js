'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import ManaCost from '@/common/mana-cost/ManaCost';
import vrd3 from '@/app/decks/decklists/vrd3Decklists.json';

export default function StLotus3() {
  return (
        <StLotusDecks decks={vrd3} number={3}>
          <Typography paragraph>
            {
              'Elaine Cao took Stephen’s innovative planeswalker approach to the format and turned the knob to 11. She ended up drafting seven walkers along with plenty of stack-based interaction and solid interaction, which has since become her trademark. She ended up defeating an otherwise very evenly matched field full of '
            }
            <ManaCost manaCost="{U}" />
            {' decks.'}
          </Typography>
        </StLotusDecks>
  );
}
