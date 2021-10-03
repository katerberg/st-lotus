import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import Button from '@mui/material/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Archives() {
  const link = 'https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=6604930';

  return (
    <Box
      sx={{
      backgroundColor: 'grey.800',
      width: '100%',
      paddingTop: 2,
      paddingBottom: 2,
    }}
    >
      <Container>
        <Typography
          sx={{
            color: 'common.white',
            textAlign: 'center',
            marginBottom: 2,
          }}
          variant="h2"
        >{'Previous Draft Picks'}</Typography>
        <Box sx={{textAlign: 'center'}}>
          <Button
            color="primary"
            href={link}
            startIcon={<FontAwesomeIcon
              icon={faFile}
                       />}
            variant="outlined"
          >
            {'Written history of our drafts'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
