import React from 'react';
import {styled} from '@mui/system';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

export default function MenuItem({text, onClick, link, icon}) {
  return <StyledLink style={{textDecoration: 'none'}}
    to={link}
         >
    <ListItem button
      onClick={onClick}
      to={link}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText color="textPrimary"
        primary={text}
      />
    </ListItem>
  </StyledLink>;
}


MenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
