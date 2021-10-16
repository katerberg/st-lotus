import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Card({card}) {
  return (
      <Typography><Link href={card.uri}>{card.name}</Link></Typography>
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
