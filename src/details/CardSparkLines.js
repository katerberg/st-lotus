import {Grid} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import {SparklinesReferenceLine, Sparklines, SparklinesCurve} from 'react-sparklines';

export default function CardSparkLines({drafts}) {
  const defaultMaxPick = 46;
  const maxOfPicks = Math.max(...drafts.filter(d => d.pick).map(d => d.pick / 8));
  const max = defaultMaxPick > maxOfPicks ? defaultMaxPick : maxOfPicks;
  const translatedDrafts = drafts.map(d => (d.pick ? (max - d.pick / 8) : 0));

  return (
    <Grid container
      sx={{
        maxWidth: '250px',
        marginLeft: {
          xs: 'auto',
          md: 0,
        },
        marginRight: {
          xs: 'auto',
          md: 0,
        },
        marginBottom: '20px',
        height: '60px',
        overflow: 'hidden',
      }}
    >
    <Sparklines data={drafts.map(d => (d.pick ? (max - d.pick / 8) : 0))} max={Math.max(...translatedDrafts)} min={Math.min(...translatedDrafts.filter(d => d))} style={{width: '100%'}}>
      <SparklinesCurve style={{stroke: '#8dd8f8', fill: '#ffffff', fillOpacity: 0.8}} />
      <SparklinesReferenceLine type="avg"/>
    </Sparklines>
  </Grid>
  );
}

CardSparkLines.propTypes = {
  drafts: PropTypes.arrayOf(PropTypes.shape({pick: PropTypes.number})),
};
