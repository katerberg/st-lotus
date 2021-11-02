import React, {useCallback} from 'react';
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

  return (
    <>
      <Typography paragraph>{title}</Typography>
      <List component="nav">
        {cards.map((card) => <React.Fragment key={card.name}>
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
