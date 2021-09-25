import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Menu({isOpen, onClose}) {
  return <Drawer
    anchor="right"
    onClose={onClose}
    open={isOpen}
         >
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) =>
        <ListItem button
          key={text}
        >
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      )}
    </List>
  </Drawer>;
}


Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
