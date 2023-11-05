'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import ManaCost from '@/common/mana-cost/ManaCost';
import vrd5 from '@/app/decks/decklists/vrd5Decklists.json';

export default function StLotus5() {
  return (
        <StLotusDecks decks={vrd5} number={5}>
          <Typography paragraph>
            {
              'John Ryan Hamilton took down the “Queen of VRD”, Elaine Cao, using her own technology against her. Having seen the power of Arcane Savant in the previous draft, he prioritized Aether Searcher over all else, which he was able to use to result in a '
            }
            <ManaCost manaCost="{7}" />
            {
              ' mana Emrakul, the Aeons Torn. To make matters worse for the rest of the field, he also drafted Tinker for a duplicate, cheaper copy. He used these all to great effect in a controlling shell that let him win the tournament with arguably the best deck in VRD history. Elaine’s innovative and controlling Kess deck could not keep up in finals, despite having a great day as well.'
            }
          </Typography>
        </StLotusDecks>
  );
}

