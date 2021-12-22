import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/system';
import {Box, Typography} from '@mui/material';

const StatTypography = styled(Typography)({
  margin: '0 8px',
  display: 'inline-block',
});

export default function CardStats({numberTaken, numberOfDrafts, averageRound}) {
  return (
    <Grid container
      flexDirection="column"
      sx={{
      textAlign: {
        xs: 'center',
        md: 'left',
      },
    }}
    >
      <Box sx={{
        marginBottom: {xs: 0, sm: '20px'},
    }}>
        <Typography color="white"
          sx={{display: 'inline-block'}}
        >{'Picked in '}</Typography>
        <StatTypography
          color="white"
          component="p"
          variant="h3"
        >{numberTaken}</StatTypography>
        <Typography
          color="white"
          sx={{display: 'inline-block'}}
        >{' of '}</Typography>
        <StatTypography
          color="white"
          component="p"
          variant="h3"
        >{numberOfDrafts}
        </StatTypography>
        <Typography
          color="white"
          sx={{display: 'inline-block'}}
        >
          {'drafts'}</Typography>
      </Box>
      <Box>
        <Typography
          color="white"
          sx={{display: 'inline-block'}}
        >{'usually in round '}</Typography>
        <StatTypography
          color="primary"
          component="p"
          variant="h3"
        >{averageRound}</StatTypography>
      </Box>
    </Grid>
  );
}

CardStats.propTypes = {
  numberTaken: PropTypes.number.isRequired,
  numberOfDrafts: PropTypes.number.isRequired,
  averageRound: PropTypes.number.isRequired,
};
