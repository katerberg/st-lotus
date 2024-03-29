import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Card from './Card';
import {cardShape} from './DeckShapes';
import {Box} from '@mui/system';
import ManaCost from '@/common/mana-cost/ManaCost';

export default function DeckSection({cards, title, sort}) {
  const getPrefix = useCallback((card) => {
    if (sort === 'pick') {
      return `${card.pickOrder}: `;
    }
    return '';
  }, [sort]);

  return (
    <Box>
      {title && <Box sx={{
          '> img': {height: '2rem'},
          textAlign: 'center',
        }}
                >
        <ManaCost manaCost={`{${title}}`} />
      </Box>}
      <List component="nav">
        {cards.map((card) => <React.Fragment key={card.displayName}>
            <Card card={card}
              prefix={`${getPrefix(card)}`}
            />
            <Divider />
          </React.Fragment>)}
      </List>
    </Box>
  );
}

DeckSection.propTypes = {
  cards: PropTypes.arrayOf(cardShape).isRequired,
  title: PropTypes.string,
  sort: PropTypes.string.isRequired,
};
