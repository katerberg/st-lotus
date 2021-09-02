import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FollowIcon from './FollowIcon';
import {faDiscord, faYoutube, faTwitter, faTwitch} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function Follow() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}
      container
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
      <FollowIcon icon={faTwitter}
        label="Twitter"
        link="https://www.twitter.com/stlotusmtg"
      />
    </Grid>
  );
}
