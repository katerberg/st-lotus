import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Grid from '@mui/material/Grid';
import useTopCardStats from '../hooks/useTopCardStats';
import TopCard from './TopCard';

export default function TopCards() {
  const topCards = useTopCardStats();
  // eslint-disable-next-line no-console
  console.log(topCards.stats);
  const cards = topCards.stats;
  return (
    <>
      <Container maxWidth="lg">
        <SpacedHeader
          component="h1"
          sx={{marginTop: 10}}
          variant="h2"
        >Top VRD Cards</SpacedHeader>
        <Typography paragraph>These are the current cards in the order they’re drafted. Every draft will be different, but this is the aggregate rating of the cards</Typography>
      </Container>

      <Grid container
        justifyContent="space-around"
      >
        {cards.map(c => <TopCard averageRound={c.averageRound} key={c.card} name={c.card} numberAvailable={c.numberAvailable} numberTaken={c.numberTaken}/>)}
      </Grid>
    </>
  );
}
