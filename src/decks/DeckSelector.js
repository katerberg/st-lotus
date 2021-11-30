import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {styled} from '@mui/system';
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

export default function DeckSelector({decks, references}) {
  const [selectedDeck, setSelectedDeck] = useState('');
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  const handleChange = useCallback((e) => {
    e.target.value.scrollIntoView({block: 'center', behavior: 'smooth'});
    setSelectedDeck(e.target.value);
  }, []);

  return (
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
              {decks.map((deck, i) =>
                <MenuItem key={deck.player}
                  value={references[i]?.ref?.current}
                >{deck.player}</MenuItem>,
              )}
            </Select>
          </FormControl>
        </FloatingBox>
      </Zoom>
  );
}

DeckSelector.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    player: PropTypes.string.isRequired,
  })).isRequired,
  references: PropTypes.arrayOf(PropTypes.shape({
    ref: PropTypes.shape({
      current: PropTypes.object,
    }),
  })).isRequired,
};
