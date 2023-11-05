import PropTypes from 'prop-types';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

export default function DeckPreview({date, image, number, text}) {
  return (
    <Card sx={{margin: '20px'}}>
      <CardMedia
        alt={`image preview for St Lotus ${number}`}
        component="img"
        height="300"
        image={image}
      />
      <CardContent>
        <Typography component="h2"
          gutterBottom
          variant="h5"
        >
          {`St Lotus ${number}`}
        </Typography>
        <Typography
          color="text.secondary"
          variant="subtitle1"
        >{new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(date)}</Typography>
        <Typography color="text.secondary"
          variant="subtitle1"
        >{}</Typography>
        <Typography color="text.secondary"
          variant="body2"
        >{`${text}...`}</Typography>
      </CardContent>
      <CardActions>
         <NextLink href={`/decks/st-lotus-${number}`}>
          <Button
            color="secondary"
            size="large"
          >{'Read'}</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
}

DeckPreview.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
