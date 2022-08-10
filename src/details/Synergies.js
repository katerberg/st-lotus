import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import React from 'react';
import useCardPairings from '../hooks/useCardPairings';
import Synergy from './Synergy';
import {Alert, AlertTitle} from '@mui/material';

export default function Synergies({card}) {
  const {synergies} = useCardPairings(card);

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
            {synergies.slice(0, 6).map(p => <Synergy card={p.card}
              key={p.card}
                                            />)}
      </Grid>}
    </>
  );
}

Synergies.propTypes = {
  card: PropTypes.string.isRequired,
};
