import React, {useCallback, useMemo, useState} from 'react';
import Divider from '@mui/material/Divider';
import {deckShape} from './DeckShapes';
import {styled} from '@mui/system';
import Masonry from '@mui/lab/Masonry';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeckSection from './DeckSection';
import SortSelector from './SortSelector';
import {sortByCmc, sortByColor} from './Sorting';

const Subtitle = styled(Typography)({
  marginLeft: '1rem',
});

function Deck({deck}, ref) {
  const [sort, setSort] = useState('color');

  const decklistSections = useMemo(() => {
    if (sort === 'cmc') {
      return sortByCmc(deck.decklist);
    }
    if (sort === 'color') {
      return sortByColor(deck.decklist);
    }
    return [{title: '', cards: deck.decklist.concat(deck.sideboard).sort((c1, c2) => c1.pickOrder - c2.pickOrder)}];
  }, [deck, sort]);

  const sideboardSections = useMemo(() => {
    if (sort === 'cmc') {
      return sortByCmc(deck.sideboard);
    }
    if (sort === 'color') {
      return sortByColor(deck.sideboard);
    }
    return null;
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
    <Grid container
      ref={ref}
      sx={{paddingTop: 12}}
    >
      <Grid flexGrow={1}
        item
      >
        <Typography variant="h3">{deck.genre}</Typography>
        <Subtitle>{`${deck.player}`}{deck.wins !== undefined && deck.losses !== undefined ? ` (${deck.wins}-${deck.losses})` : ''}</Subtitle>
        <Subtitle>{deck.date}</Subtitle>
        <Subtitle>{`Seat: ${deck.seat}`}</Subtitle>
      </Grid>
      <Grid item
        sx={{display: 'flex', alignItems: 'end'}}
      >
        <SortSelector onChange={handleSortChange}
          value={sort}
        />
        </Grid>
      </Grid>
      <hr/>
      <Masonry columns={getColumns()}
        sx={{marginTop: '20px'}}
      >
        {decklistSections.map(ds => <DeckSection cards={ds.cards}
          key={ds.title}
          sort={sort}
          title={ds.title}
                                    />)}
      </Masonry>
      {sideboardSections && sideboardSections.length !== 0 && <>
      <Typography variant="h4">{'Sideboard'}</Typography>
      <Divider />
      <Grid sx={{background: '#eee', borderBottomRightRadius: '8px', borderBottomLeftRadius: '8px', paddingTop: '20px', paddingBottom: '20px'}}>
        <Masonry columns={getColumns()}
          sx={{marginTop: '20px'}}
        >
          {sideboardSections.map(ds => <DeckSection cards={ds.cards}
            key={ds.title}
            sort={sort}
                                       />)}
        </Masonry>
      </Grid>
      </>}
    </>
  );
}

export default React.forwardRef(Deck);

Deck.propTypes = {
  deck: deckShape.isRequired,
};
