import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from './MenuItem';

export default function Menu({isOpen, onClose}) {
  return <Drawer
    anchor="right"
    onClose={onClose}
    open={isOpen}
         >
    <List>
      <MenuItem icon={<HomeIcon />}
        link= "/#home"
        onClick={onClose}
        text="Home"
      />
      <MenuItem icon={<NotificationsIcon />}
        link="/#follow"
        onClick={onClose}
        text="Follow"
      />
    </List>
  </Drawer>;
}


Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
