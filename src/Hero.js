import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroBox: {
    position: 'relative',
  },
  hero: {
    width: '100vw',
    minHeight: '300px',
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '10px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
    padding: '10px',
    borderRadius: '10px',
    border: '5px solid',
    borderColor: theme.palette.common.white,
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <img className={classes.hero}
        src={`${process.env.PUBLIC_URL}/hero.png`}
      />
      <Typography className={classes.heroText}
        variant="h1"
      >{'Vintage.'}<br/>{'Rotisserie.'}<br />{'Draft.'}</Typography>
    </Box>
  );
}
