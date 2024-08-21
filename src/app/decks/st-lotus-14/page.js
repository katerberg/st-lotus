'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd14 from '@/app/decks/decklists/vrd14Decklists.json';

export default function StLotus14() {
  return (
        <StLotusDecks decks={vrd14} number={14}>
          <Typography paragraph>
            Daniel Magnin had quite the chip on his shoulder when he showed up for his second, and managed to demonstrate that he is a fast learner by taking down the whole thing after a three-way tie with a 5-2 record. Initiative has long been a top-tier strategy, but Dan’s list might have found the ideal form of the strategy, regularly seizing it on turn two and then pressuring life totals until he ended the game.
          </Typography>
        </StLotusDecks>
  );
}
