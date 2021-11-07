import React, {useRef, useState} from 'react';
import {cardShape} from './DeckShapes';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import {styled} from '@mui/system';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ManaCost from '../common/mana-cost/ManaCost';

const StyledImage = styled('img')({
  width: '300px',
  height: '429px',
  marginBottom: '-6px',
});

const CardName = styled('span')({
  flexGrow: 1,
});

export default function Card({card, prefix}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef();

  const handleTooltipClose = () => {
    setAnchorEl(null);
  };

  const handleTooltipOpen = (e) => {
    setAnchorEl(e.target);
  };

  return (
    <>
    <ListItem button
      onClick={handleTooltipOpen}
      ref={ref}
      sx={{width: '100%'}}
    >
      <Typography sx={{flexGrow: 1}}>
        <CardName>{prefix !== undefined ? `${prefix} ` : ''}{card.name}</CardName>
      </Typography>
      <ManaCost manaCost={card.manaCost} />
    </ListItem>
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
    </>
  );
}

Card.propTypes = {
  card: cardShape.isRequired,
  prefix: PropTypes.string,
};
