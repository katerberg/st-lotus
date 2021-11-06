import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function ArticlePreview({link, image, text, date, heading, author}) {
  const history = useHistory();
  const handleClick = useCallback(() => history.push(link), [history, link]);
  return (
    <Card>
      <CardMedia
        alt={`image preview for ${heading}`}
        component="img"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography component="h2"
          gutterBottom
          variant="h5"
        >
          {heading}
        </Typography>
        <Typography
          color="text.secondary"
          variant="subtitle1"
        >{`Written by: ${author} on ${new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(date)}`}</Typography>
        <Typography color="text.secondary"
          variant="subtitle1"
        >{}</Typography>
        <Typography color="text.secondary"
          variant="body2"
        >{`${text}...`}</Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          onClick={handleClick}
          size="large"
        >{'Read'}</Button>
      </CardActions>
    </Card>
  );
}

ArticlePreview.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
