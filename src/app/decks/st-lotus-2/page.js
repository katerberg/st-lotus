'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd2 from '@/app/decks/decklists/vrd2Decklists.json';
import ManaCost from '@/common/mana-cost/ManaCost';

export default function StLotus2() {
  return (
    <StLotusDecks decks={vrd2} number={2}>
      <Typography paragraph>
        {
          'In a field full of decks that all performed well, Daniel Zielinski took first place by drafting fast '
        }
        <ManaCost manaCost="{U}" />
        {
          ' interaction early, and then surprising the table by picking up Infect cards in round 22. This strategy has gained popularity and is now used in many shells, including Painter/Grindstone, Twin, and even attempts at Storm. Stephen notably pushed the envelope by taking Karn and Narset incredibly early, which has since become almost standard. Elaine, in her Nicol Bolas tribute-deck, found her niche with Grixis or Esper control decks.'
        }
      </Typography>
    </StLotusDecks>
  );
}
