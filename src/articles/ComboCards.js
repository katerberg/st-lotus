import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SpacedHeader from '../common/SpacedHeader';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/system';

const CardText = styled(Typography)(({theme}) => ({
  whiteSpace: 'nowrap',
  display: 'inline-block',
  [theme.breakpoints.up('md')]: {
    margin: '0 20px',
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

const CardContainer = styled(Grid)(({theme}) => ({
  maxWidth: '199px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '260px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '390px',
  },
}));

const CardImage = styled('img')({
  maxWidth: '100%',
});

export default function ComboCards({children, title, cards}) {
  return (
    <Grid sx={{marginBottom: 4}}>
      <SpacedHeader
        component="h3"
        sx={{marginTop: 2}}
        variant="h4"
      >{title}</SpacedHeader>
      <Grid container
        justifyContent="space-around"
      >
        {cards.map(c => <CardContainer
          item
          key={c.name}
                        >
            <CardImage alt={`${c.name} magic card`}
              src={c.imageLink}
            />
            <Grid sx={{marginLeft: '20px'}}>
              <CardText color="text.secondary"
                variant="subtitle1"
              >{`Picked ${c.pickCount} of ${c.numberOfDrafts} drafts`}</CardText>
              <CardText color="text.secondary"
                variant="subtitle1"
              >{`Average pick round ${c.averageRound}`}</CardText>
            </Grid>
          </CardContainer>,
        )}
      </Grid>
      <Grid container
        justifyContent="center"
        sx={{margin: '0 auto', maxWidth: '780px'}}
      >
        <Paper sx={{marginTop: 3, padding: 2}}>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
}

ComboCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    pickCount: PropTypes.number.isRequired,
    numberOfDrafts: PropTypes.number.isRequired,
    averageRound: PropTypes.number.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
