'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import StLotusDecks from '@/app/decks/StLotusDecks';
import ManaCost from '@/common/mana-cost/ManaCost';
import vrd6 from '@/app/decks/decklists/vrd6Decklists.json';

export default function StLotus6() {
  return (
        <StLotusDecks decks={vrd6} number={6}>
          <Typography paragraph>
            {
              'Mason Lange won the event with a strategy often spurned at these events: playing creatures and turning them sideways. Although opening with his traditional strategy of early discard, he quickly pivoted off of '
            }
            <ManaCost manaCost="{B}" />
            {' cards and into the open slot of aggressive '}
            <ManaCost manaCost="{G}" />
            {
              ' creatures. His use of Elvish Clan-Caller allowed for him to try out the “Self-tutoring” rule to great effect, and he won a close finals against John Ryan who was on an incredibly consistent Reanimator deck that had a powerful back-up plan of Pack Rat. This was the first draft where “draft-matters” cards did not have an effect, which allowed for other strategies to prosper.'
            }
          </Typography>
        </StLotusDecks>
  );
}
