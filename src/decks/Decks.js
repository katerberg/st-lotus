import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SpacedHeader from '../common/SpacedHeader';
import Deck from './Deck';
import decklists from './processedDecklists.json';


export default function Decks() {
  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'Decks'}</SpacedHeader>
      <Typography paragraph>{'Rotisserie Draft, a structure borrowed from fantasy baseball, is one of the most skill-intensive and interesting ways to draft in Magic: the Gathering. Instead of opening booster packs, you take some defined group of cards, like a full set of a particular expansion or a cube, and draft those! In our Vintage Rotisserie Drafts, which we call “VRDs”, we draft from a pretty large group of cards - every card that’s legal to play in Vintage!'}</Typography>
      {decklists.map((deck, i) => <Deck deck={deck}
        key={i}
                                  />)}
    </Container>
  );
}
