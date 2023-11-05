'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd12 from '@/app/decks/decklists/vrd12Decklists.json';
import ManaCost from '@/common/mana-cost/ManaCost';

export default function StLotus12() {
  return (
        <StLotusDecks decks={vrd12} number={12}>
          <Typography paragraph>
            Mason showed up with a target on his back in a field that was deeply hoping to hold him back from his fourth win. Mike pushed him into play-off match after being the only player in the field to take him down in regular matches, but Mason clinched the play-offs showing why <ManaCost manaCost="{B}" /><ManaCost manaCost="{G}" /> removal might be the best in the format.
          </Typography>
        </StLotusDecks>
  );
}
