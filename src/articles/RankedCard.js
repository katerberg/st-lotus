import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';

const SubSectionHeader = styled(Typography)({
  marginTop: '20px',
  marginBottom: '20px',
});

const CardImage = styled('img')({
  maxWidth: '400px',
});

export default function RankedCard({averageRound, availableDrafts, ranking, timesTaken, cardName, link, losses, wins}) {
  return (
    <>
      <SubSectionHeader
        component="h3"
        variant="h4"
      >{`${ranking ? `${ranking}. ` : ''}${cardName}`}</SubSectionHeader>
      <Grid container>
        <Grid item>
          <CardImage src={link} />
        </Grid>
        <Grid item
          sx={{marginLeft: '20px', marginBottom: '20px'}}
        >
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >{`Average round picked: ${averageRound}`}</Typography>
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >{`${wins} wins and ${losses} losses`}</Typography>
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >{`Picked ${timesTaken} time${timesTaken !== 1 ? 's' : ''} out of ${availableDrafts} available`}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

RankedCard.propTypes = {
  availableDrafts: PropTypes.number.isRequired,
  averageRound: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  losses: PropTypes.number.isRequired,
  timesTaken: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
  ranking: PropTypes.number,
};
