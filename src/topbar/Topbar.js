import React, {useCallback, useState} from 'react';
import {styled} from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from './Menu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const StyledImg = styled('img')(({theme}) => ({
  marginRight: theme.spacing(1),
}));

export default function Topbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = useCallback(() => setIsDrawerOpen(false), []);
  const handleDrawerOpen = useCallback(() => setIsDrawerOpen(true), []);

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
      <IconButton
        aria-label="menu"
        edge="start"
        onClick={handleDrawerOpen}
        size="large"
        sx={{color: 'common.black'}}
      >
            <MenuIcon />
          </IconButton>
    </Toolbar>
    <Menu isOpen={isDrawerOpen}
      onClose={handleDrawerClose}
    />
  </AppBar>;
}
