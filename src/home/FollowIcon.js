import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function FollowIcon({icon, label, link}) {
  return (
    <Grid item
      md={3}
      sx={{textAlign: 'center'}}
      xs={12}
    >
      <IconButton aria-label={label}
        href={link}
        sx={{
          fontSize: '3em',
          backgroundColor: 'primary.main',
          padding: '0.8em',
          margin: '0.5em',
          borderRadius: '50%',
        }}
      >
        <FontAwesomeIcon icon={icon}/>
      </IconButton>
    </Grid>
  );
}

FollowIcon.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    icon: PropTypes.array.isRequired,
  }).isRequired,
};
