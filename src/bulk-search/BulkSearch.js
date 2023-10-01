import React, {useCallback, useState} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import {config} from '../common/config';
import SpacedHeader from '../common/SpacedHeader';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import BulkSearchResults from './BulkSearchResults';

export default function BulkSearch() {
  const [deck, setDeck] = useState(
    [
      'Ancient Tomb',
      'Bonecrusher Giant // Stomp',
      'Prismatic Vista',
      'Prismatic Ending',
      'Swords to Plowshares',
      'Solitude',
      'Thalia, Guardian of Thraben',
      'Fury',
      'Unholy Heat',
      'Marsh Flats',
      'Reality Smasher',
      'Laelia, the Blade Reforged',
      'Crucible of Worlds',
      'Badlands',
      'Ob Nixilis, the Adversary',
      'Embercleave',
      'Plateau',
      'Cavern of Souls',
      'Meltdown',
      'Robber of the Rich',
      'Professional Face-Breaker',
      'Trinisphere',
      'Sunbaked Canyon',
      'Sulfurous Springs',
      'Engineered Explosives',
      'Spirit of the Labyrinth',
      'Aven Mindcensor',
      'Flame Blitz',
      'Chalice of the Void',
      'Thought-Knot Seer',
      'Unlicensed Hearse',
      'Battlefield Forge',
      'Matter Reshaper',
      'Rugged Prairie',
      'Talisman of Conviction',
      'Containment Priest',
      'Eldrazi Displacer',
      'Eternal Scourge',
      'Eldrazi temple',
      'Maddening Hex',
      'Ulamog, the Infinite Gyre',
      'Ajani Vengeant',
      'Savai Triome',
    ],
  );
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleDeckChange = useCallback((e) => {
    setDeck(e.target.value.split('\n').map(c => c.trim()).filter(c => c));
  }, [setDeck]);
  const handleSubmit = useCallback(() => {
    setResponse(null);
    setError(null);
    axios.post(
      config.API_DECK_URL,
      deck,
    ).then(response => {
      setResponse(response.data);
    }).catch(error => {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Unknown error occurred. Please submit a bug report with the request!');
      }
    });
  }, [deck]);

  return (
    <Container maxWidth="lg">
      <SpacedHeader component="h1" sx={{marginTop: 10}} variant="h2">
        Deck Builder
      </SpacedHeader>
      <Typography paragraph>
        There is a lot of data from previous drafts, and it can be overwhelming to understand where cards should be picked. Every draft is different, and picks should move dramatically based on what your opponents are drafting, but having a guide to know rough positioning can be helpful. Add all the cards you want below (each on their own line) and this will give you a rough positioning of when they should be taken.
      </Typography>
      <Box sx={{marginBottom: 6}}>
      <TextField
        defaultValue={deck.join('\n')}
        label="Deck"
        multiline
        onChange={handleDeckChange}
        rows={6}
        sx={{width: '100%', marginBottom: 4}}
      />
      {error && <Alert severity="error">{error}</Alert>}
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
      >
        <Button endIcon={<SendIcon />} onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Grid>
      {response && <BulkSearchResults cards={response} />}
      </Box>
    </Container>
  );
}