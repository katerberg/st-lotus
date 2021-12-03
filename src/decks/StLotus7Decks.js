import React, {useEffect, useState, createRef} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SpacedHeader from '../common/SpacedHeader';
import Deck from './Deck';
import decklists from './processedDecklists.json';
import DeckSelector from './DeckSelector';

export default function StLotus7Decks() {
  const [refList, setRefList] = useState([]);

  useEffect(() => {
    setRefList(decklists.map((deck) => ({ref: createRef(), deck})));
  }, []);

  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'St Lotus 7'}</SpacedHeader>
      <Typography paragraph>{'Brandon Curry took the tournament with a planeswalker heavy deck. He managed to squeak out a win against Eric Levine’s Eldrazi and Taxes list. This draft really showed the power of continuous board-control and prioritizing mana fixing incredibly early. Often we see combo decks get attempted in really high numbers, but the consistency of a bunch of planeswalkers, consistent mana, and good controlling elements got Brandon his first VRD win.'}</Typography>
      <DeckSelector decks={decklists}
        references={refList}
      />
      {decklists.map((deck, i) => <Deck deck={deck}
        key={i}
        ref={refList[i]?.ref}
                                  />)}
    </Container>
  );
}