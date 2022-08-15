import React from 'react';
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const StyledIFrame = styled('iframe')({
  display: 'block',
  margin: '0 auto',
  borderStyle: 'none',
  maxWidth: '100%',
});

export default function PreviewVideo() {

  return (
    <Box sx={{
      backgroundColor: 'grey.800',
      width: '100%',
      marginTop: '-6px',
      paddingTop: 2,
      paddingBottom: 2,
    }}
    >
      <Container>
      <Typography sx={{
        color: 'common.white',
        textAlign: 'center',
        marginBottom: 2,
      }}
        variant="h2"
      >{'Most Recent Event'}</Typography>
      <StyledIFrame allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="315"
        src="https://www.youtube.com/embed/czg0KQC4A7c"
        title="YouTube video player"
        width="560"
      />
      </Container>
    </Box>
  );
}
