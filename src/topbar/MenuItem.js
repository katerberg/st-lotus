import React from 'react';
import {styled} from '@mui/system';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import NextLink from 'next/link';

const linkStyles = ({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
});

const StyledLink = styled(NextLink)(linkStyles);
const StyledExternalLink = styled('a')(linkStyles);

export default function MenuItem({text, onClick, link, icon, external = false}) {
  const content = (
    <ListItem button
      onClick={onClick}
      to={link}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText color="textPrimary"
        primary={
          external ? (
            <Box component="span"
              sx={{alignItems: 'center', display: 'inline-flex', gap: 0.75}}
            >
              {text}
              <OpenInNewIcon sx={{fontSize: '1rem'}} />
            </Box>
          ) : text
        }
      />
    </ListItem>
  );

  if (external) {
    return (
      <StyledExternalLink href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </StyledExternalLink>
    );
  }

  return (
    <StyledLink href={link}
      style={{textDecoration: 'none'}}
    >
      {content}
    </StyledLink>
  );
}


MenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  external: PropTypes.bool,
};
