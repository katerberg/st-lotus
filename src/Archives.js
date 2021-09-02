import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {faFileExcel} from '@fortawesome/free-regular-svg-icons';
import IconButton from '@material-ui/core/IconButton';
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
    color: theme.palette.primary.main,
    fontSize: '3em',
  },
  description: {
    display: 'inline-block',
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
        >{'Archives'}</Typography>
        <IconButton aria-label="Google Sheets"
          href={link}
        >
          <FontAwesomeIcon className={classes.icon}
            icon={faFileExcel}
          />
        </IconButton>
        <Typography
          className={classes.description}
        >
          <Link
            href={link}
          >{'See a written history of our drafts as well as many other groups here'}</Link>
        </Typography>
      </Container>
    </Box>
  );
}
