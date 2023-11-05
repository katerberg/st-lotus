'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import vrd11 from '@/app/decks/decklists/vrd11Decklists.json';

export default function StLotus11() {
  return (
        <StLotusDecks decks={vrd11} number={11}>
          <Typography paragraph>
            A newcomer to VRD, but an expert Legacy-enthusiast, managed to win the whole thing with a nearly undefeated record. Michael Reed piloted a Consultation list jam-packed with tutors through a field that eschewed counterspells and black cards at their own detriment. He slid a Breach combo into the list as a back-up and ended with something close to the platonic ideal of a tutor-based combo deck.
          </Typography>
        </StLotusDecks>
  );
}
