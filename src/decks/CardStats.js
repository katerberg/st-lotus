import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import {cardShape} from './DeckShapes';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {config} from '../common/config';

export default function CardStats({card}) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    axios.get(`${config.API_CARD_URL}${encodeURIComponent(card.apiName)}`).then(({data}) => {
      setStats(data);
    }).catch(() => {
      setStats(null);
    });
  }, [card]);

  return (
    <Grid
      container
      direction="column"
      sx={{paddingLeft: '20px'}}
    >
      {stats && <>
        <Typography>
          {`Taken in ${stats.numberTaken} of ${stats.numberOfDrafts} drafts`}
        </Typography>
        <Typography>
          {`Usually taken in round ${stats.averageRound}`}
        </Typography>
      </>
      }
    </Grid>
  );
}

CardStats.propTypes = {
  card: cardShape.isRequired,
};
