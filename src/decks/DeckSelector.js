/* eslint-disable no-console */
import React, {useEffect, useState, useCallback} from 'react';
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
  zIndex: 1200,
  top: '56px',
  width: '100%',
  left: '0',
});

export default function DeckSelector({decks, references}) {
  const [selectedDeck, setSelectedDeck] = useState('');

  const handleScroll = useCallback(() => {
    if (!references?.length) {
      return;
    }
    const i = references
      // eslint-disable-next-line no-extra-parens
      .map((wrapper) => (wrapper ? wrapper?.ref?.current.getBoundingClientRect().top : 0))
      .findIndex(distance => distance > 100);
    setSelectedDeck(references[i - 1 < 0 ? references.length - 1 : i - 1]?.ref?.current);
  }, [references]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleChange = useCallback((e) => {
    e.target.value.scrollIntoView({block: 'start', behavior: 'smooth'});
    setSelectedDeck(e.target.value);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  return (
      <Zoom appear={false}
        direction="down"
        in={trigger}
      >
        <FloatingBox>
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
                >{`${deck.genre} - ${deck.player}`}</MenuItem>,
              )}
            </Select>
          </FormControl>
        </FloatingBox>
      </Zoom>
  );
}

DeckSelector.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string.isRequired,
    player: PropTypes.string.isRequired,
  })).isRequired,
  references: PropTypes.arrayOf(PropTypes.shape({
    ref: PropTypes.shape({
      current: PropTypes.object,
    }),
  })).isRequired,
};
