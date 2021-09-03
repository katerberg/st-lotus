import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FollowIcon from './FollowIcon';
import {faDiscord, faYoutube, faTwitter, faTwitch} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  followGrid: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: theme.breakpoints.values.md,
    marginBottom: theme.spacing(10),
  },
  title: {
    paddingTop: theme.spacing(2),
    textAlign: 'center',
  },
}));
export default function Follow() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}
        variant="h2"
      >{'Follow Us'}</Typography>
      <Grid className={classes.followGrid}
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
    </>
  );
}
