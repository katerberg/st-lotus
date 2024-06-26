'use client'

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from '@mui/material';

export default function CountDown() {
  const nextDate = useMemo(() => new Date('2024-05-04T15:30:00.000Z'), []); //https://www.timestamp-converter.com/
  const calculateTimeLeft = useCallback(() => {
    const difference = nextDate - new Date();

    let timeLeft = {};
    const oneHour = 1000 * 60 * 60;
    const oneDay= 1000 * 60 * 60*24;
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / oneDay),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else if (difference < -12 * oneHour) {
      return 'yesterday';
    }

    return timeLeft;
  }, [nextDate]);

  const [timeLeft, setTimeLeft] = useState('yesterday');

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [setTimeLeft, calculateTimeLeft]);

  const getTwoDigitNumber = useCallback(
    (number) => new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(number),
    [],
  );

  if (timeLeft === 'yesterday') {
    return null;
  }

  if (!Object.keys(calculateTimeLeft()).length) {
    return (
      <Grid
        container
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
        >
          <Link href="https://twitch.tv/stlotusmtg">{'Tune in today!'}</Link>
        </Typography>
      </Grid>
    );
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        {Object.keys(timeLeft).map((time) => (
          <Grid item justifyContent="center" key={time}>
            <Typography color="text.secondary" variant="h1">
              {getTwoDigitNumber(timeLeft[time])}
              {time !== 'seconds' ? ':' : ''}
            </Typography>
            <Typography color="text.secondary" sx={{textAlign: 'center'}}>
              {time}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography
        color="text.secondary"
        sx={{
          paddingTop: 2,
          textAlign: 'center',
        }}
        variant="h4"
      >
        {'until our next event on'}
      </Typography>
      <Typography
        sx={{
          paddingTop: 4,
          paddingBottom: 8,
          textAlign: 'center',
        }}
        variant="h2"
      >
        {new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(nextDate)}
      </Typography>
    </>
  );
}
