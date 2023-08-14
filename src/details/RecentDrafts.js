import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import {getDraftTitle} from './DraftUtils';
import {useTheme} from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';

export default function RecentDrafts({drafts}) {
  const theme = useTheme();
  const largerThanSmall = useMediaQuery(theme.breakpoints.up('md'));
  if (!drafts) {
    return null;
  }
  const orderedDrafts = drafts.sort((d1, d2) => (d1.occurrence < d2.occurrence ? 1 : -1));
  return (
    <Grid alignItems="flex-start" container direction="row">
      <Grid item lg={6} md={4} xs={0}/>
      <Grid container direction={largerThanSmall ? 'column' : 'row'} item justifyContent="flex-start" lg={6} md={8} xs={12}>
        {orderedDrafts.filter(d => d.pick).map((draft) => (
          <Grid item key={draft.gid} md={12} xs={6}>
            <Typography
              color="white"
              sx={{display: 'block', textAlign: {xs: 'center', md: 'left'}}}
              variant="subtitle1"
            >
              <Link
                color="primary"
                href={`https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=${draft.gid}`}
                target="_blank"
              >
                {getDraftTitle(draft)} &mdash; Round {Math.ceil(draft.pick / 8)}
              </Link>
              </Typography>
          </Grid>
        ))}
      </Grid>
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
