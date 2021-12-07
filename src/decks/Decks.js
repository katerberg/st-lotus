import React from 'react';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Grid from '@mui/material/Grid';

export default function Decks() {
  const decks = [
    {number: 1, art: 'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/d/7da23b15-dfb8-4267-9b33-d7a4c035c434.jpg?1562863289'},
    {number: 2, art: 'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/b/8b94f4c6-b518-43b3-be52-e889d1f3ea38.jpg?1562879525'},
    {number: 3, art: 'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/b/3bfcbeab-7a1e-4dcf-99bf-98f42c2b6a6f.jpg?1562285424'},
    {number: 4, art: 'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/e/0e7466e5-9443-4b38-a7e9-e0d615a35667.jpg?1576381686'},
    {number: 5, art: ''},
    {number: 6, art: ''},
    {number: 7, art: ''},
  ];
  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'St Lotus Decks'}</SpacedHeader>
      <Grid container>
        {decks.map(deck =>
        <Grid
          item
          key={deck.number}
          md={6}
          xs={12}
        >
            <div>{deck.number}</div>
        </Grid>,
        )}
      </Grid>
    </Container>
  );
}
