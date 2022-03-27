import React, {useCallback, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from '@mui/material';

export default function CountDown() {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date('2022-08-13T13:44:00.000Z') - new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60),
      };
    }

    return timeLeft;
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getTwoDigitNumber = useCallback(number => new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(number), []);

  if (!Object.keys(calculateTimeLeft()).length) {
    return <Grid container
      direction="row"

      justifyContent="center"
      sx={{
          paddingTop: 2,
          paddingBottom: 2,
      }}
           >
      <Typography
        sx={{
          paddingTop: 4,
          paddingBottom: 8,
          textAlign: 'center',
        }}
        variant="h2"
      ><Link href="https://twitch.tv/stlotusmtg">{'Tune in today!'}</Link></Typography>
      </Grid>;

  }

  return (
    <>
      <Grid container
        direction="row"

        justifyContent="center"
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
      }}
      >
        {Object.keys(timeLeft).map(time => <Grid item
          justifyContent="center"
          key={time}
                                           >
          <Typography
            color="text.secondary"
            variant="h1"
          >{getTwoDigitNumber(timeLeft[time])}{time !== 'seconds' ? ':' : ''}</Typography>
          <Typography
            color="text.secondary"
            sx={{textAlign: 'center'}}
          >{time}</Typography>
                                           </Grid>)}
      </Grid>
      <Typography
        color="text.secondary"
        sx={{
          paddingTop: 2,
          textAlign: 'center',
        }}
        variant="h4"
      >{'until our next event on'}</Typography>
      <Typography
        sx={{
          paddingTop: 4,
          paddingBottom: 8,
          textAlign: 'center',
        }}
        variant="h2"
      >{'March 26, 2022'}</Typography>
    </>
  );
}
