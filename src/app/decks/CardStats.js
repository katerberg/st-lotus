import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {cardShape} from './DeckShapes';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {config} from '@/common/config';

export default function CardStats({card}) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    axios
      .get(`${config.API_CARD_URL}${encodeURIComponent(card.apiName)}?premier`)
      .then(({data}) => {
        setStats(data);
      })
      .catch(() => {
        setStats(null);
      });
  }, [card]);

  return (
    <Grid container direction="column" sx={{paddingLeft: '20px', paddingRight: '20px'}}>
      <Stack>
        <Typography>
          {stats ? (
            `Taken in ${stats.numberTaken} of ${stats.numberAvailable} drafts`
          ) : (
            <Skeleton variant="text" />
          )}
        </Typography>
        <Typography>
          {stats ? `Usually taken in round ${stats.averageRound}` : <Skeleton variant="text" />}
        </Typography>
      </Stack>
    </Grid>
  );
}

CardStats.propTypes = {
  card: cardShape.isRequired,
};
