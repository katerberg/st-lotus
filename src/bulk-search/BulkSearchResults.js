import React from 'react';
import PropTypes from 'prop-types';
import BulkSearchResult from './BulkSearchResult';
import List from '@mui/material/List';

export default function BulkSearchResults({cards}) {
  return (
    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
      {cards.map(card => <BulkSearchResult card={card} key={card.card} />)}
    </List>
  );
}

BulkSearchResults.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    card: PropTypes.string.isRequired,
    averageRound: PropTypes.number.isRequired,
    average: PropTypes.number.isRequired,
    numberAvailable: PropTypes.number.isRequired,
    numberTaken: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    lotusScore: PropTypes.number.isRequired,
  })).isRequired,
};
