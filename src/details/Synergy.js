import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import React, {useCallback} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useHistory} from 'react-router-dom';
import useCardStats from '../hooks/useCardStats';
import CardImage from '../common/CardImage';

export default function Synergy({card}) {
  const history = useHistory();
  const {cardImage, cardBackFaceImage} = useCardStats(card);

  const handleDetailsPress = useCallback(() => history.push(`/details/${card}`), [history, card]);

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
          />
          <Box>
            <Button
              color="secondary"
              onClick={handleDetailsPress}
              size="large"
            >{'See Details'}</Button>
          </Box>
    </Grid>
  );
}


Synergy.propTypes = {
  card: PropTypes.string.isRequired,
};
