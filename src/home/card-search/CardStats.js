import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/system';
import Skeleton from '@mui/material/Skeleton';
import {Box, Typography} from '@mui/material';
import LotusScore from './LotusScore';
import CardSparkLines from '../../details/CardSparkLines';

const StatTypography = styled(Typography)({
  margin: '0 8px',
  display: 'inline-block',
});

export default function CardStats({drafts, loading, numberTaken, numberOfDrafts, averageRound, lotusScore}) {
  const unpicked = !numberTaken || !numberOfDrafts || !averageRound;

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
      {loading && <Box sx={{marginLeft: '5%', width: '90%'}}>
        <Typography variant="h3" ><Skeleton sx={{bgcolor: 'grey.500'}} /></Typography>
        <Typography variant="h3" ><Skeleton sx={{bgcolor: 'grey.500'}} /></Typography>
      </Box>}
      {!loading && <>
        {unpicked && <Box
          sx={{
            marginBottom: {xs: 0, sm: '20px'},
          }}
                     >
            <Typography
              color="white"
              variant="subtitle1"
            >{'Unpicked so far.'}</Typography>
        </Box>}
        {!unpicked && <>
          <LotusScore lotusScore={lotusScore} />
          <Box>
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
            >{numberTaken > numberOfDrafts ? numberTaken : numberOfDrafts}
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
          {drafts?.length && <CardSparkLines drafts={drafts} />}
          </>}
      </>}
    </Grid>
  );
}

CardStats.propTypes = {
  numberTaken: PropTypes.number,
  numberOfDrafts: PropTypes.number,
  averageRound: PropTypes.number,
  lotusScore: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  drafts: PropTypes.arrayOf(PropTypes.shape({pick: PropTypes.number})),
};
