import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Decks() {
  return (
    <Grid item
      md={3}
      sx={{marginTop: '60px'}}
      xs={12}
    >
        <Typography
          variant="h1"
        >{'Decks'}</Typography>
    </Grid>
  );
}
