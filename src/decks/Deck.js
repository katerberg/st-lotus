import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {cardShape} from './DeckShapes';
import DeckSection from './DeckSection';
import SortSelector from './SortSelector';
import {sortByCmc, sortByColor} from './Sorting';

export default function Deck({deck}) {
  const [sort, setSort] = useState('color');

  const decklistSections = useMemo(() => {
    if (sort === 'cmc') {
      return sortByCmc(deck.decklist);
    }
    if (sort === 'color') {
      return sortByColor(deck.decklist);
    }
    return [{title: '', cards: deck.decklist}];
  }, [deck, sort]);

  const handleSortChange = (value) => {
    setSort(value);
  };

  return (
    <>
      <Typography variant="h3">{deck.genre}</Typography>
      <Typography>{`${deck.player}`}{deck.wins !== undefined && deck.losses !== undefined ? ` (${deck.wins}-${deck.losses})` : ''}</Typography>
      <Typography>{deck.date}</Typography>
      <hr/>
      <SortSelector onChange={handleSortChange}
        value={sort}
      />
      {decklistSections.map(ds => <DeckSection cards={ds.cards}
        key={ds.title}
        sort={sort}
        title={ds.title}
                                  />)}
    </>
  );
}

Deck.propTypes = {
  deck: PropTypes.shape({
    date: PropTypes.string.isRequired,
    player: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    wins: PropTypes.number,
    losses: PropTypes.number,
    stLotus: PropTypes.number,
    decklist: PropTypes.arrayOf(cardShape).isRequired,
  }).isRequired,
};
