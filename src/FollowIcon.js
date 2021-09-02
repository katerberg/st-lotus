import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '3em',
    backgroundColor: theme.palette.primary.main,
    padding: '1em',
    borderRadius: '50%',
  },
}));

export default function FollowIcon({icon, label, link}) {
  const classes = useStyles();
  return (
      <Grid className={classes.root}
        item
        md={3}
        xs={12}
      >
        <IconButton aria-label={label}
          href={link}
        >
          <FontAwesomeIcon className={classes.icon}
            icon={icon}
          />
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
