import React, {useEffect, useState, createRef} from 'react';
import {deckShape} from './DeckShapes';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import SpacedHeader from '@/common/SpacedHeader';
import Deck from './Deck';
import DeckSelector from './DeckSelector';

export default function StLotusDecks({number, children, decks}) {
  const [refList, setRefList] = useState([]);

  useEffect(() => {
    setRefList(decks.map((deck) => ({ref: createRef(), deck})));
  }, [decks]);

  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{`St Lotus ${number}`}</SpacedHeader>
      {children}
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


StLotusDecks.propTypes = {
  number: PropTypes.number.isRequired,
  decks: PropTypes.arrayOf(deckShape).isRequired,
  children: PropTypes.node.isRequired,
};
