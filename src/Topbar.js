import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography} from '@material-ui/core';

export default function Topbar() {
  return <AppBar><Toolbar><Typography color="textPrimary">{'St Lotus'}</Typography></Toolbar></AppBar>;
}
