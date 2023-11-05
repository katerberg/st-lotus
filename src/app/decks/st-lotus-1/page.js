'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd1 from '@/app/decks/decklists/vrd1Decklists.json';

export default function StLotus1() {
  return (
        <StLotusDecks decks={vrd1} number={1}>
          <Typography paragraph>
            The first streamed VRD since Shotgun Lotus shut down nearly four years earlier. All of us were first time drafters and had so much to learn. Naveen Balaji ended up teaching us the power of Time Vault and Tinker in decks that have other combos to back it up. Sadly this draft VOD has been lost to the sands of time.
          </Typography>
        </StLotusDecks>
  );
}
