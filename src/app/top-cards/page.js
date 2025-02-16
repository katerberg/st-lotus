'use client'

import React, {useCallback, useMemo, useState} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SpacedHeader from '@/common/SpacedHeader';
import Grid from '@mui/material/Grid';
import useTopCardStats from '@/hooks/useTopCardStats';
import TopCard from './TopCard';
import { TextField} from '@mui/material';
import {docsLinkToCsv} from '@/common/textHelpers';
import useDraftCsv from '@/hooks/useDraftCsv';
import { useSearchParams } from 'next/navigation'


export default function TopCards() {
  const searchParams = useSearchParams()
  const colorsFilter = useMemo(() => searchParams.getAll('color'), [searchParams]);
  const topCards = useTopCardStats(colorsFilter);
  const cards = topCards.stats;
  const [followingDraft, setFollowingDraft] = useState('');

  const {picks} = useDraftCsv(docsLinkToCsv(followingDraft))

  const isCardUnpicked = useCallback((cardName) => { // Handle Brazen Borrower
    return !picks.some(pick => pick === cardName || cardName?.match(new RegExp('^' + pick + ' //', 'i')));
  }, [picks]);

  return (
    <>
      <Container maxWidth="lg" sx={{marginBottom: 6}}>
        <SpacedHeader
          component="h1"
          sx={{marginTop: 10}}
          variant="h2"
        >Top VRD Cards</SpacedHeader>
        <Typography paragraph>These are the current cards in the order they’re drafted. Every draft will be different, but this is the aggregate rating of the cards.</Typography>
        <Typography paragraph>If you are participating in a draft, you can provide your draft URL and have this page track which cards have not yet been taken, or just select the cards as they are picked to filter them out.</Typography>
      <TextField 
        sx={{mt: 1}}
        fullWidth
        label="Draft link to follow" 
        variant="standard" 
        helperText="Example: https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=1008615612"
        onChange={e => setFollowingDraft(e.target.value)}
      />
      </Container>


      <Grid container
        justifyContent="space-around"
      >
        {cards.filter(c => isCardUnpicked(c.card)).slice(0, 100).map(c => <TopCard
          averageRound={c.averageRound}
          key={c.card}
          name={c.card}
          numberAvailable={c.numberAvailable}
          numberTaken={c.numberTaken}
          overallPick={c.overallPick + 1}
                                                                                       />)}
      </Grid>
    </>
  );
}
