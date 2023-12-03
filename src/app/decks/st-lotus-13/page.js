'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd13 from '@/app/decks/decklists/vrd13Decklists.json';

export default function StLotus13() {
  return (
        <StLotusDecks decks={vrd13} number={13}>
          <Typography paragraph>
            Adam arrived at his first VRD with nothing but ideas, but walked out with a trophy. He leveraged a glut of fast colorless mana into a proactive artifact strategy with various combos, including Salvagers, Time Vault, Turn 1 Balance, and Thopter-Sword. He managed to dance around the hate and end up with an uncontested 6-1 victory for his first event.
          </Typography>
        </StLotusDecks>
  );
}
