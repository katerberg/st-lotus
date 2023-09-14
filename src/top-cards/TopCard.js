
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import Grid from '@mui/material/Grid';
import useCardImage from '../hooks/useCardImage';
import {Checkbox, FormControlLabel, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';


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

const CardImage = styled('img')({
  maxWidth: '100%',
});

export default function TopCard({name, averageRound, numberTaken, numberAvailable, onSelect}) {
  const {loadingImage, cardImage} = useCardImage(name);
  const theme = useTheme();
  const matchesUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const handleSelect = useCallback(() => {
    onSelect(name);
  }, [name, onSelect]);

  if (loadingImage) {
    return null;
  }

  return (<CardContainer
    item
    key={name}
          >
            <CardImage alt={`${name} magic card`}
              src={cardImage}
            />
            <Grid container flexDirection="row">
              <Grid container item sm={8} sx={{paddingLeft: 2}} xs={12}>
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
              <Grid item sm={4} xs={12}>
                <FormControlLabel
                  control={<Checkbox
                    onClick={handleSelect}
                           />}
                  label="Filter"
                  labelPlacement={matchesUpSm ? 'top' : 'start'}
                />
              </Grid>
            </Grid>
          </CardContainer>
  );
}

TopCard.propTypes = {
  name: PropTypes.string.isRequired,
  averageRound: PropTypes.number.isRequired,
  numberTaken: PropTypes.number.isRequired,
  numberAvailable: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

