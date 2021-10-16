import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from './Card';

export default function Deck({deck}) {
  return (
    <>
      <Typography>{deck.date}</Typography>
      {deck.decklist.map((card) => <Card card={card}
        key={card.name}
                                   />)}
    </>
  );
}

Deck.propTypes = {
  deck: PropTypes.shape({
    date: PropTypes.string.isRequired,
    decklist: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      cmc: PropTypes.number.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  }).isRequired,
};
