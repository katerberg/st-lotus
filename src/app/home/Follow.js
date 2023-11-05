import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FollowIcon from './FollowIcon';
import {faDiscord, faYoutube, faTwitch} from '@fortawesome/free-brands-svg-icons';

export default function Follow() {

  return (
    <>
      <Typography
        sx={{
          paddingTop: 2,
          textAlign: 'center',
        }}
        variant="h2"
      >{'Follow Us'}</Typography>
      <Grid container
        sx={{
          marginTop: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: (theme) => theme.breakpoints.values.md,
          marginBottom: 10,
          justifyContent: 'center',
        }}
      >
        <FollowIcon icon={faYoutube}
          label="Youtube"
          link="https://www.youtube.com/channel/UCpwS9X2A-5pmo1txhyD7eoA"
        />
        <FollowIcon icon={faTwitch}
          label="Twitch"
          link="https://www.twitch.tv/stlotusmtg"
        />
        <FollowIcon icon={faDiscord}
          label="Discord"
          link="https://discord.gg/nxBPYXn"
        />
      </Grid>
    </>
  );
}
