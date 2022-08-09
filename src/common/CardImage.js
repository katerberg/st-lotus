import {styled} from '@mui/system';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import {Box} from '@mui/material';

const CardFace = styled('img')({
  maxWidth: '400px',
  borderRadius: '19px',
  textAlign: 'center',
  width: '90%',
});

export default function CardImage({cardImage, cardBackFaceImage}) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    setFlipped(false);
  }, [setFlipped, cardImage]);

  return <Box sx={{position: 'relative'}}>
    <CardFace alt="Card Image"
      src={flipped ? cardBackFaceImage : cardImage}
      sx={{height: 'auto', opacity: 1}}
    />
    {cardBackFaceImage && <IconButton aria-label="flip"
      color="primary"
      onClick={handleFlip}
      size="large"
      sx={{position: 'absolute', right: 'calc(50% - 150px)', top: '160px'}}
                          >
      <ThreeSixtyIcon sx={{fontSize: '96px'}} />
    </IconButton>
    }
  </Box>;
}

CardImage.propTypes = {
  cardImage: PropTypes.string,
  cardBackFaceImage: PropTypes.string,
};
