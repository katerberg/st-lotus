import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[800],
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    color: theme.palette.common.white,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  icon: {
  },
  link: {
    textAlign: 'center',
  },
}));

export default function Archives() {
  const classes = useStyles();
  const link = 'https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit?usp=sharing';

  return (
    <Box className={classes.container}>
      <Container>
        <Typography className={classes.title}
          variant="h2"
        >{'Previous Draft Picks'}</Typography>
        <Box className={classes.link}>
          <Button
            color="primary"
            href={link}
            startIcon={<FontAwesomeIcon className={classes.icon}
              icon={faFile}
                       />}
            variant="outlined"
          >
            {'Written history of our drafts'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
