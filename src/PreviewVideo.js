import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[800],
    width: '100%',
    marginTop: '-6px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    color: theme.palette.common.white,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  iframe: {
    display: 'block',
    margin: '0 auto',
    borderStyle: 'none',
    maxWidth: '100%',
  },
}));

export default function PreviewVideo() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
      <Typography className={classes.title}
        variant="h2"
      >{'Latest Event'}</Typography>
      <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={classes.iframe}
        frameBorder="0"
        height="315"
        src="https://www.youtube-nocookie.com/embed/0xWVzm6QtoE"
        title="YouTube video player"
        width="560"
      />
      </Container>
    </Box>
  );
}
