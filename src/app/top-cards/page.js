'use client'

import React, {useCallback, useState} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SpacedHeader from '@/common/SpacedHeader';
import Grid from '@mui/material/Grid';
import useTopCardStats from '@/hooks/useTopCardStats';
import TopCard from './TopCard';
import { ToggleButton, ToggleButtonGroup, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import useDraftCsv from '@/hooks/useDraftCsv';
import { useSearchParams } from 'next/navigation'
import ManaCost from '@/common/mana-cost/ManaCost';
import DraftEntry from '@/common/DraftEntry';

const LOCAL_STORAGE_KEY = 'top-cards-draft';

export default function TopCards() {
  const searchParams = useSearchParams()
  const [colors, setColors] = useState(searchParams.getAll('color'))
  const topCards = useTopCardStats(colors);
  const cards = topCards.stats;
  const [csvLink, setCsvLink] = useState('');
  const theme = useTheme();
  const matchesUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const iconSize = matchesUpSm ? '3rem': '2rem';

  const {picks} = useDraftCsv(csvLink)

  const isCardUnpicked = useCallback((cardName) => { // Handle Brazen Borrower
    return !picks.some(pick => pick === cardName || cardName?.match(new RegExp('^' + pick + ' //', 'i')));
  }, [picks]);

  const handleColorsChange = (a, passedColors) => {
    //bgruw is the filter order required by the API
    const order = 'bgruw';
    let colors;

    if (a.currentTarget.value === 'c') {
      colors = ['c'];
    } else {
      colors = passedColors.filter(color => color !== 'c');
    }

    window.history.replaceState(null, '', `/top-cards${colors.length ? '?' : ''}${colors.sort((a, b) => order.indexOf(a) - order.indexOf(b)).map(color => `color=${color}`).join('&')}`);
    setColors(colors);
  }

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
        <DraftEntry localStorageKey={LOCAL_STORAGE_KEY} onDraftCsvChange={setCsvLink} />

        <Grid container
          justifyContent="flex-start"
        >
          <Typography variant="h6" sx={{alignContent: 'center', marginRight: '1rem'}}>Colors:</Typography>
          <ToggleButtonGroup
            onChange={handleColorsChange}
            value={colors}
          >
            <ToggleButton value="w" aria-label="white">
              <ManaCost height={iconSize} manaCost="{W}"/>
            </ToggleButton>
            <ToggleButton value="u" aria-label="blue">
              <ManaCost height={iconSize} manaCost="{U}"/>
            </ToggleButton>
            <ToggleButton value="b" aria-label="black">
              <ManaCost height={iconSize} manaCost="{B}"/>
            </ToggleButton>
            <ToggleButton value="r" aria-label="red">
              <ManaCost height={iconSize} manaCost="{R}"/>
            </ToggleButton>
            <ToggleButton value="g" aria-label="green">
              <ManaCost height={iconSize} manaCost="{G}"/>
            </ToggleButton>
            <ToggleButton value="c" aria-label="colorless">
              <ManaCost height={iconSize} manaCost="{C}"/>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
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
