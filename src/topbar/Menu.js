import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GavelIcon from '@mui/icons-material/Gavel';
import MenuItem from './MenuItem';

export default function Menu({isOpen, onClose}) {
  return <Drawer
    anchor="right"
    onClose={onClose}
    open={isOpen}
         >
    <List>
      <MenuItem icon={<HomeIcon />}
        link= "/"
        onClick={onClose}
        text="Home"
      />
      <MenuItem icon={<AssignmentIcon />}
        link="/how-to-play"
        onClick={onClose}
        text="How To Play"
      />
      <MenuItem icon={<GavelIcon />}
        link="/rulings"
        onClick={onClose}
        text="Rulings"
      />
    </List>
  </Drawer>;
}


Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
