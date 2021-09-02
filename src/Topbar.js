import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    height: '50px',
  },
}));

export default function Topbar() {
  const classes = useStyles();
  return <AppBar><Toolbar>
    <img
      className={classes.icon}
      src={`${process.env.PUBLIC_URL}/favicon-152.png`}
    />
    <Typography color="textPrimary"
      variant="h4"
    >{'St Lotus'}</Typography>
                          </Toolbar></AppBar>;
}
