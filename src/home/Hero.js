import React from 'react';
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HeroImage = styled('img')({
  width: '100%',
  minHeight: '300px',
});

export default function Hero() {
  return (
    <Box sx={{position: 'relative'}}>
      <picture>
        <source media="(max-width: 999px)"
          srcSet={`${process.env.PUBLIC_URL}/hero1000.png`}
        />
        <source media="(max-width: 1199px)"
          srcSet={`${process.env.PUBLIC_URL}/hero1200.png`}
        />
        <source media="(min-width: 1200px)"
          srcSet={`${process.env.PUBLIC_URL}/hero.png`}
        />
        <HeroImage
          alt="Players sitting around a table with computers drafting cards"
          src={`${process.env.PUBLIC_URL}/hero.png`}
        />
      </picture>
      <Typography sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '10px',
        color: 'common.white',
        backgroundColor: 'common.black',
        padding: '10px',
        borderRadius: '10px',
        border: '5px solid',
        borderColor: 'common.white',
      }}
        variant="h1"
      >{'Vintage.'}<br/>{'Rotisserie.'}<br />{'Draft.'}</Typography>
    </Box>
  );
}
