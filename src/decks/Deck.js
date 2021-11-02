import React, {useCallback, useMemo, useState} from 'react';
import {styled} from '@mui/system';
import Masonry from '@mui/lab/Masonry';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {cardShape} from './DeckShapes';
import DeckSection from './DeckSection';
import SortSelector from './SortSelector';
import {sortByCmc, sortByColor} from './Sorting';


const Subtitle = styled(Typography)({
  marginLeft: '1rem',
});

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

  const getColumns = useCallback(() => {
    if (sort === 'pick' || decklistSections.length === 1) {
      return 1;
    }
    if (decklistSections.length === 2) {
      return {xs: 1, sm: 2};
    }
    return {xs: 1, sm: 2, md: 3};
  }, [sort, decklistSections]);
  const handleSortChange = (value) => {
    setSort(value);
  };

  return (
    <>
      <Typography variant="h3">{deck.genre}</Typography>
      <Subtitle>{`${deck.player}`}{deck.wins !== undefined && deck.losses !== undefined ? ` (${deck.wins}-${deck.losses})` : ''}</Subtitle>
      <Subtitle>{deck.date}</Subtitle>
      <hr/>
      <SortSelector onChange={handleSortChange}
        value={sort}
      />
      <Masonry columns={getColumns()}>
        {decklistSections.map(ds => <DeckSection cards={ds.cards}
          key={ds.title}
          sort={sort}
          title={ds.title}
                                    />)}
      </Masonry>
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
