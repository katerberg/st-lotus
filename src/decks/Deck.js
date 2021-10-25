import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {cardShape} from './DeckShapes';
import DeckSection from './DeckSection';
import SortSelector from './SortSelector';

export default function Deck({deck}) {
  const [sort, setSort] = useState('color');

  const getColorType = (card) => {
    if (card.colors.length === 0) {
      if (card.type.includes('Land')) {
        return 'L';
      }
      return 'C';
    }
    if (card.colors.length > 1) {
      return 'M';
    }
    return card.colors[0];
  };

  const decklistSections = useMemo(() => {
    if (sort === 'cmc') {
      const grouped = deck.decklist.reduce((a, c) => {
        const newAccumulator = {...a};
        if (newAccumulator[c.cmc] === undefined) {
          newAccumulator[c.cmc] = [];
        }
        newAccumulator[c.cmc].push(c);
        return newAccumulator;
      }, {});
      return Object.entries(grouped).map(([cmc, cards]) => ({title: cmc, cards}));
    }
    if (sort === 'color') {
      const grouped = deck.decklist.reduce((a, c) => {
        const newAccumulator = {...a};
        const colorType = getColorType(c);
        if (newAccumulator[colorType] === undefined) {
          newAccumulator[colorType] = [];
        }
        newAccumulator[colorType].push(c);
        return newAccumulator;
      }, {});
      return Object.entries(grouped).map(([colorType, cards]) => ({title: colorType, cards}));
      // Return [...deck.decklist].sort((a, b) => sortByName(a, b));
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
