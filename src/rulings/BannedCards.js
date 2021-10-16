import React from 'react';
import Grid from '@mui/material/Grid';
import BannedCard from './BannedCard';
import {styled} from '@mui/system';
import bannedCards from './bannedCards.json';


const StyledList = styled('ul')({
  marginTop: 0,
  marginBottom: 0,
});

export default function BannedCards() {
  return <Grid container>
    <Grid item
      md={4}
      xs={12}
    >
      <StyledList>
        {bannedCards.slice(0, Math.floor(bannedCards.length / 3))
        .map(card => <BannedCard
          key={card.name}
          link={card.link}
          name={card.name}
                     />)
        }
      </StyledList>
    </Grid>
    <Grid item
      md={4}
      xs={12}
    >
      <StyledList>
        {bannedCards.slice(Math.floor(bannedCards.length / 3), Math.floor(2 * bannedCards.length / 3))
        .map(card => <BannedCard
          key={card.name}
          link={card.link}
          name={card.name}
                     />)
        }
      </StyledList>
    </Grid>
    <Grid item
      md={4}
      xs={12}
    >
      <StyledList>
        {bannedCards.slice(Math.floor(2 * bannedCards.length / 3), bannedCards.length)
        .map(card => <BannedCard
          key={card.name}
          link={card.link}
          name={card.name}
                     />)
        }
      </StyledList>
    </Grid>
  </Grid>;
}
