import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Card from './Card';
import {cardShape} from './DeckShapes';

export default function DeckSection({cards, title, sort}) {
  const getPrefix = useCallback((card) => {
    if (sort === 'pick') {
      return card.pickOrder;
    }
    return '';
  }, [sort]);

  const sortByName = useCallback((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }, []);

  const sortedCards = useMemo(() => {
    if (sort === 'cmc') {
      return [...cards].sort((a, b) => {
        if (a.cmc < b.cmc) {
          return -1;
        }
        if (a.cmc > b.cmc) {
          return 1;
        }
        return sortByName(a, b);
      });
    }
    return cards;
  }, [sort, cards, sortByName]);

  return (
    <>
      <Typography paragraph>{title}</Typography>
      <List component="nav">
        {sortedCards.map((card) => <React.Fragment key={card.name}>
            <Card card={card}
              prefix={`${getPrefix(card)}`}
            />
            <Divider />
          </React.Fragment>)}
      </List>
    </>
  );
}

DeckSection.propTypes = {
  cards: PropTypes.arrayOf(cardShape).isRequired,
  title: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};
