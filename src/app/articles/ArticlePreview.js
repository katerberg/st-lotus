import PropTypes from 'prop-types';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

export default function ArticlePreview({link, image, text, date, heading, author}) {
  return (
    <Card sx={{margin: '20px'}}>
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
          variant="body2"
        >{`${text}...`}</Typography>
      </CardContent>
      <CardActions>
        <NextLink href={link}>
          <Button
            color="secondary"
            size="large"
          >{'Read'}</Button>
        </NextLink>
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
