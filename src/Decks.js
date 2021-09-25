import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '60px',
  },
}));

export default function Decks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography
          variant="h1"
        >{'Decks'}</Typography>
    </div>
  );
}
