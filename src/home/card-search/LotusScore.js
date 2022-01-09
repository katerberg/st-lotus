import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {styled} from '@mui/system';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';

const StatTypography = styled(Typography)({
  margin: '0 8px',
  display: 'inline-block',
});

export default function LotusScore({lotusScore}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid alignItems="center"
      container
      justifyContent={{md: 'start', xs: 'center'}}
      sx={{
      marginBottom: {xs: 0, sm: '20px'},
    }}
    >
      <Typography
        color="white"
        sx={{display: 'inline-block'}}
      >
        <Button endIcon={<InfoIcon />}
          onClick={handleClick}
        >
          {'Lotus Score'}
        </Button>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
        <Typography sx={{p: 2}}>
          {'A card’s Lotus Score is a value between 0 and 100.'}
        </Typography>
        <Typography sx={{p: 2}}>
          {'It is a single value that indicates how and when a card is taken in the history of VRD.'}
        </Typography>
      </Popover>
      </Typography>
      <StatTypography
        color="primary"
        component="p"
        variant="h3"
      >{Math.round(lotusScore * 10) / 10}</StatTypography>
    </Grid>
  );
}

LotusScore.propTypes = {
  lotusScore: PropTypes.number,
};
