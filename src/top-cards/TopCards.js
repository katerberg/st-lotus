import React, {useCallback, useState} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SpacedHeader from '../common/SpacedHeader';
import Grid from '@mui/material/Grid';
import useTopCardStats from '../hooks/useTopCardStats';
import TopCard from './TopCard';
import {Button} from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/system';

const LOCAL_STORAGE_KEY = 'top-cards-selections';

const ListItem = styled('li')(({theme}) => ({
  margin: theme.spacing(0.5),
}));

export default function TopCards() {
  const topCards = useTopCardStats();
  const cards = topCards.stats;
  const [currentSelections, setCurrentSelections] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
  const clearSelections = useCallback(() => {
    setCurrentSelections([]);
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  const handleSelect = useCallback((cardName) => {
    const newSelections = [...currentSelections, cardName];
    setCurrentSelections(newSelections);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSelections));
  }, [currentSelections]);

  const removeSelection = useCallback((selection) => {
    const newSelections = currentSelections.filter(c => c !== selection);
    setCurrentSelections(newSelections);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSelections));
  }, [currentSelections]);


  return (
    <>
      <Container maxWidth="lg" sx={{marginBottom: 6}}>
        <SpacedHeader
          component="h1"
          sx={{marginTop: 10}}
          variant="h2"
        >Top VRD Cards</SpacedHeader>
        <Typography paragraph>These are the current cards in the order they’re drafted. Every draft will be different, but this is the aggregate rating of the cards</Typography>
      {currentSelections.length > 0 && <Paper
        component="ul"
        sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        maxWidth: '600px',
        height: '60px',
        overflow: 'auto',
      }}
                                       >
        <Button onClick={clearSelections} sx={{maxHeight: '36px'}} variant="contained">Clear all</Button>
        {currentSelections.map((selection) => (
            <ListItem key={selection}>
              <Chip
                label={selection}
                onDelete={() => removeSelection(selection)}
              />
            </ListItem>
          ))}
      </Paper>}
      </Container>


      <Grid container
        justifyContent="space-around"
      >
        {cards.filter(c => !currentSelections.includes(c.card)).slice(0, 100).map(c => <TopCard
          averageRound={c.averageRound}
          key={c.card}
          name={c.card}
          numberAvailable={c.numberAvailable}
          numberTaken={c.numberTaken}
          onSelect={handleSelect}
          overallPick={c.overallPick + 1}
                                                                                       />)}
      </Grid>
    </>
  );
}
