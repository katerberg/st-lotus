import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import React, {useCallback, useState} from 'react';
import Button from '@mui/material/Button';
import useCardPairings from '../hooks/useCardPairings';
import Synergy from './Synergy';
import {Alert, AlertTitle} from '@mui/material';

export default function Synergies({card}) {
  const {synergies} = useCardPairings(card);
  const [visibleCards, setVisibleCards] = useState(6);

  const handleSeeMore = useCallback(() => {
    setVisibleCards(visibleCards + 6);
  }, [visibleCards, setVisibleCards]);

  return (
    <>
      <Typography color="white"
        sx={{marginTop: 4}}
        variant="h2"
      >{'Often Drafted With'}</Typography>
      {!synergies.length &&
        <Alert severity="info"
          sx={{marginTop: 2}}
          variant="filled"
        >
            <AlertTitle>{'Not enough data'}</AlertTitle>
          </Alert>}
      {!!synergies.length && <Grid
        alignItems="center"
        container
        flexDirection="row"
        justifyContent="center"
        wrap="wrap"
                             >
            {synergies.slice(0, visibleCards).map(p => <Synergy card={p.card}
              key={p.card}
                                                       />)}
        <Button
          color="primary"
          onClick={handleSeeMore}
          size="large"
          variant="contained"
        >
          See more
        </Button>
      </Grid>}
    </>
  );
}

Synergies.propTypes = {
  card: PropTypes.string.isRequired,
};
