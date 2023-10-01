import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useCardImage from '../hooks/useCardImage';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box';
import {toTitleCase} from '../common/textHelpers.js';

export default function BulkSearchResult({card}) {
  const {loadingImage, cardImage} = useCardImage(card.card);
  return (
    <ListItem alignItems="flex-start">
      {!loadingImage && <ListItemAvatar>
        <Link rel="noopener noreferrer" target="_blank" to={`/details/${card.card}`}>
          <Box
            alt={`${card.card} card image`}
            component="img"
            src={cardImage}
            sx={{
              height: 40,
            }}
          />
        </Link>
      </ListItemAvatar>}
      <ListItemText
        primary={
          <Link rel="noopener noreferrer" target="_blank" to={`/details/${card.card}`}>
            {toTitleCase(card.card)}
          </Link>
        }
        secondary={
          <>
            <Typography
              color="text.primary"
              component="span"
              sx={{display: 'inline'}}
              variant="body2"
            >
              {`Average Round: ${card.averageRound || 'never drafted'}`}
            </Typography>
            {card.averageRound && ` — ${card.numberTaken} taken of ${card.numberAvailable} available resulting in Lotus Score of ${Math.floor(card.lotusScore * 10) / 10}`}
          </>
        }
      />
    </ListItem>
  );
}

BulkSearchResult.propTypes = {
  card: PropTypes.shape({
    card: PropTypes.string.isRequired,
    averageRound: PropTypes.number.isRequired,
    average: PropTypes.number.isRequired,
    numberAvailable: PropTypes.number.isRequired,
    numberTaken: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    lotusScore: PropTypes.number.isRequired,
  }).isRequired,
};
