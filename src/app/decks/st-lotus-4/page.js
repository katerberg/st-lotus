'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd4 from '@/app/decks/decklists/vrd4Decklists.json';

export default function StLotus4() {
  return (
        <StLotusDecks decks={vrd4} number={4}>
          <Typography paragraph>
            {
              'Elaine Cao became the first (and at the time only) player to win two VRDs, and managed to do it in back-to-back tournaments, largely with the same base of cards. The innovation that she brought to the table this time was the addition of “draft-matters” cards when she took Arcane Savant. In combination with Kindred Charge, it provided a one-card combo that took her to finals victory against Brandon Curry. Brandon piloted a Pikula-style Esper interaction deck. It was his first to demonstrate the power of Pentad Prism, which has since become a mainstay of VRDs, even outside of St Lotus.'
            }
          </Typography>
        </StLotusDecks>
  );
}
