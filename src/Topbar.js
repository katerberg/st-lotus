import React from 'react';
import {styled} from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StyledImg = styled('img')(({theme}) => ({
  marginRight: theme.spacing(1),
}));

export default function Topbar() {
  return <AppBar position="fixed">
    <Toolbar>
      <StyledImg
        alt="St Lotus logo"
        height="50px"
        src={`${process.env.PUBLIC_URL}/favicon-152.png`}
        width="50px"
      />
      <Typography color="textPrimary"
        sx={{flexGrow: 1}}
        variant="h4"
      >
        {'St Lotus'}
      </Typography>
    </Toolbar>
  </AppBar>;
}
