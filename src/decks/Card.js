import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {styled} from '@mui/system';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

const StyledImage = styled('img')({
  width: '300px',
  height: '429px',
  marginBottom: '-6px',
});

const StyledCardName = styled(Typography)({
  cursor: 'pointer',
  display: 'block',
});

export default function Card({card}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef();

  const handleTooltipClose = () => {
    setAnchorEl(null);
  };

  const handleTooltipOpen = (e) => {
    setAnchorEl(e.target);
  };

  return (
    <div ref={ref}>
      <StyledCardName onClick={handleTooltipOpen}>{card.name}</StyledCardName>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
        container={ref.current}
        onClick={handleTooltipClose}
        onClose={handleTooltipClose}
        open={Boolean(anchorEl)}
        transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
      >
          <Link href={card.uri}
            rel="noreferrer"
            sx={{display: 'block'}}
            target="_blank"
          >
            <Button
              sx={{width: '100%'}}
              variant="contained"
            >{'See in Scryfall'}</Button>
          </Link>
          <StyledImage src={card.image} />
      </Popover>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cmc: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
