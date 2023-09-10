
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import Grid from '@mui/material/Grid';
import useCardImage from '../hooks/useCardImage';


const CardText = styled(Typography)(({theme}) => ({
  whiteSpace: 'nowrap',
  display: 'inline-block',
  [theme.breakpoints.up('md')]: {
    margin: '0 20px',
    '&:first-of-type': {
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
}));

const CardImage = styled('img')({
  maxWidth: '100%',
});

export default function TopCard({name, averageRound, numberTaken, numberAvailable}) {
  const {loadingImage, cardImage} = useCardImage(name);
  if (loadingImage) {
    return null;
  }

  // eslint-disable-next-line no-console
  console.log(cardImage);
  return (<CardContainer
    item
    key={name}
          >
            <CardImage alt={`${name} magic card`}
              src={cardImage}
            />
            <Grid container
              sx={{marginLeft: '20px'}}
            >
              {numberTaken ? <>
                  <CardText color="text.secondary"
                    variant="subtitle1"
                  >{`Picked ${numberTaken} of ${numberAvailable} drafts`}</CardText>
                  <CardText color="text.secondary"
                    variant="subtitle1"
                  >{`Average pick round ${averageRound}`}</CardText>
                </> :
              <Typography color="text.secondary"
                variant="subtitle1"
              >{'Unpicked'}</Typography>}
            </Grid>
          </CardContainer>
  );
}

TopCard.propTypes = {
  name: PropTypes.string.isRequired,
  averageRound: PropTypes.number.isRequired,
  numberTaken: PropTypes.number.isRequired,
  numberAvailable: PropTypes.number.isRequired,
};

