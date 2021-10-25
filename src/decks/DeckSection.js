import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Card from './Card';
import {cardShape} from './DeckShapes';

export default function DeckSection({cards, title, sort}) {

  const getPrefix = (card, sort) => {
    let prefix;
    if (sort === 'pick') {
      prefix = card.pickOrder;
    }
    if (sort === 'cmc') {
      prefix = card.cmc;
    }
    if (sort === 'color') {
      if (card.colors.length === 1) {
        [prefix] = card.colors;
      } else if (card.colors.length === 0) {
        prefix = 'C';
      } else {
        prefix = 'M';
      }
    }
    return prefix;
  };

  return (
    <>
      <Typography paragraph>{title}</Typography>
      <List component="nav">
        {cards.map((card) => <React.Fragment key={card.name}>
            <Card card={card}
              prefix={`${getPrefix(card, sort)}`}
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
