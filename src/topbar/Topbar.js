'use client'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useCallback, useState} from 'react';
import {styled} from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './Menu';
import NextLink from 'next/link';

const StyledImg = styled('img')(({theme}) => ({
  marginRight: theme.spacing(1),
}));

const StyledLink = styled(NextLink)(() => ({
  flexGrow: 1,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
}));

export default function Topbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = useCallback(() => setIsDrawerOpen(false), []);
  const handleDrawerOpen = useCallback(() => setIsDrawerOpen(true), []);

  return <AppBar position="fixed">
    <Toolbar>
      <StyledLink
        href="/"
      >
        <StyledImg
          alt="St Lotus logo"
          height="50px"
          src={`/favicon-152.png`}
          width="50px"
        />
        <Typography color="textPrimary"
          variant="h4"
        >
          {'St Lotus'}
        </Typography>
      </StyledLink>
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
