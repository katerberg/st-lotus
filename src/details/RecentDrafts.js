import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import {getDraftTitle} from './DraftUtils';

export default function RecentDrafts({drafts}) {
  if (!drafts) {
    return null;
  }
  const orderedDrafts = drafts.sort((d1, d2) => (d1.occurrence < d2.occurrence ? 1 : -1));
  return (
    <Grid alignItems="flex-start" container flexDirection="column">
      {orderedDrafts.filter(d => d.pick).map((draft) => (
      <Typography
        color="white"
        key={draft.gid}
        sx={{marginRight: 5}}
        variant="subtitle1"
      >
        <Link
          color="primary"
          href={`https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=${draft.gid}`}
        >
          {getDraftTitle(draft)} &mdash; Round {Math.ceil(draft.pick / 8)}
        </Link>
        </Typography>
      ))}
    </Grid>
  );
}

RecentDrafts.propTypes = {
  drafts: PropTypes.arrayOf(PropTypes.shape({
    occurrence: PropTypes.string.isRequired,
    draft: PropTypes.string.isRequired,
    gid: PropTypes.string.isRequired,
    pick: PropTypes.number,
  })),
};
