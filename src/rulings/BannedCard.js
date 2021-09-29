import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';


export default function BannedCard({name, link}) {
  return <li key={name}><Typography><Link href={link}>{name}</Link></Typography></li>;
}

BannedCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
