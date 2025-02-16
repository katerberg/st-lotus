import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import Grid from '@mui/material/Grid';
import useCardImage from '@/hooks/useCardImage';
import NextLink from 'next/link';
import {toTitleCase} from '@/common/textHelpers';

const CardText = styled(Typography)(() => ({
  whiteSpace: 'nowrap',
  display: 'inline-block',
}));

const CardContainer = styled(Grid)(({theme}) => ({
  maxWidth: '199px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '260px',
  },
}));

const CardImageContainer = styled(Grid)({
  position: 'relative',
  '&:hover .text-overlay': {
    display: 'flex',
  },
});

const CardOverlay = styled(Grid)(({theme}) => ({
  display: 'none',
  color: theme.palette.primary.main,
  backgroundColor: 'rgba(0,0,0,0.3)',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  margin: 'auto',
  width: '100%',
  height: 'calc(100% - 6px)',
  top: 0,
  borderRadius: '10px',
}));

const CardImage = styled('img')({
  maxWidth: '100%',
});

export default function TopCard({name, overallPick, averageRound, numberTaken, numberAvailable}) {
  const {loadingImage, cardImage} = useCardImage(name);

  if (loadingImage) {
    return null;
  }

  return (<CardContainer
    item
    key={name}
          >
            <NextLink rel="noopener noreferrer" target="_blank" href={`/details?card=${name}`}>
              <Typography
                noWrap
                variant="h5"
              >
                {toTitleCase(name)}
              </Typography>
              <CardImageContainer>
                <CardImage alt={`${name} magic card`}
                  src={cardImage}
                />
                <CardOverlay
                  className="text-overlay"
                >
                  <Typography component="span" variant="h1">
                    {overallPick}
                  </Typography>
                </CardOverlay>
              </CardImageContainer>
            </NextLink>
            <Grid container flexDirection="row">
              <Grid container item sx={{paddingLeft: 2}} xs={12}>
                {numberTaken ?
                <>
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
            </Grid>
          </CardContainer>
  );
}

TopCard.propTypes = {
  name: PropTypes.string.isRequired,
  overallPick: PropTypes.number.isRequired,
  averageRound: PropTypes.number.isRequired,
  numberTaken: PropTypes.number.isRequired,
  numberAvailable: PropTypes.number.isRequired,
};

