import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {genericHashLink} from 'react-router-hash-link';

const ListLink = genericHashLink(ListItem);

export default function MenuItem({text, onClick, link, icon}) {
  return <ListLink button
    onClick={onClick}
    to={link}
         >
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText color="textPrimary"
      primary={text}
    />
  </ListLink>;
}


MenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
