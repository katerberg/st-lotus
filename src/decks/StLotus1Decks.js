import React, {useEffect, useState, createRef} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SpacedHeader from '../common/SpacedHeader';
import Deck from './Deck';
import decks from './vrd1Decklists.json';
import DeckSelector from './DeckSelector';

export default function StLotus7Decks() {
  const [refList, setRefList] = useState([]);


  useEffect(() => {
    setRefList(decks.map((deck) => ({ref: createRef(), deck})));
  }, []);

  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'St Lotus 1'}</SpacedHeader>
      <Typography paragraph>{'Naveen beat me.'}</Typography>
      <DeckSelector decks={decks}
        references={refList}
      />
      {decks.map((deck, i) => <Deck deck={deck}
        key={i}
        ref={refList[i]?.ref}
                              />)}
    </Container>
  );
}
