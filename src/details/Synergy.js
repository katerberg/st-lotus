import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import React from 'react';
import useCardStats from '../hooks/useCardStats';
import CardImage from '../common/CardImage';
import DetailsButton from './DetailsButton';

export default function Synergy({card}) {
  const {loadingStats, cardImage, cardBackFaceImage} = useCardStats(card);


  return (
    <Grid
      alignItems="center"
      container
      flexDirection="column"
      sx={{
        width: '300px',
        backgroundColor: 'grey.800',
        marginTop: '-6px',
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
          <CardImage
            cardBackFaceImage={cardBackFaceImage}
            cardImage={cardImage}
            loading={loadingStats}
          />
          <DetailsButton card={card} />
    </Grid>
  );
}

Synergy.propTypes = {
  card: PropTypes.string.isRequired,
};
