/* eslint-disable no-console */
import React, {useEffect, useState, createRef} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SpacedHeader from '../common/SpacedHeader';
import Deck from './Deck';
import decklists from './processedDecklists.json';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {styled} from '@mui/system';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const FloatingBox = styled(Box)({
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  position: 'fixed',
  paddingTop: '8px',
  background: 'white',
  zIndex: 10000,
  top: '56px',
  width: '100%',
  left: '0',
});

export default function StLotus7Decks() {
  const [selectedDeck, setSelectedDeck] = useState('');
  const [refList, setRefList] = useState([]);
  useEffect(() => {
    setRefList(decklists.map((deck) => ({ref: createRef(), deck})));
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 500,
  });

  const handleChange = (e) => {
    //eslint-disable-next-line
    e.target.value.scrollIntoView({block: 'center', behavior: 'smooth'});
    setSelectedDeck(e.target.value);
  };

  console.log(refList[0]?.current);
  return (
    <Container maxWidth="md">
      <SpacedHeader
        component="h1"
        sx={{marginTop: 10}}
        variant="h2"
      >{'St Lotus 7'}</SpacedHeader>
      <Zoom appear={false}
        direction="down"
        in={trigger}
      >
        <FloatingBox
          sx={{}}
        >
          <FormControl fullWidth>
            <InputLabel>{'Deck'}</InputLabel>
            <Select
              label="Deck"
              onChange={handleChange}
              value={selectedDeck}
            >
              {decklists.map((deck, i) =>
                <MenuItem key={deck.player}
                  value={refList[i]?.ref?.current}
                >{deck.player}</MenuItem>,
              )}
            </Select>
          </FormControl>
        </FloatingBox>
      </Zoom>
      <Typography paragraph>{'Brandon Curry took the tournament with a planeswalker heavy deck. He managed to squeak out a win against Eric Levine’s Eldrazi and Taxes list. This draft really showed the power of continuous board-control and prioritizing mana fixing incredibly early. Often we see combo decks get attempted in really high numbers, but the consistency of a bunch of planeswalkers, consistent mana, and good controlling elements got Brandon his first VRD win.'}</Typography>
      {decklists.map((deck, i) => <Deck deck={deck}
        key={i}
        ref={refList[i]?.ref}
                                  />)}
    </Container>
  );
}
