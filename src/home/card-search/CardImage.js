import Skeleton from '@mui/material/Skeleton';
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

export default function CardImage({loadingImage, cardImage, cardBackFaceImage, onImageLoad}) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    setFlipped(false);
  }, [setFlipped, cardImage]);

  return <Box sx={{position: 'relative'}}>
    {loadingImage && <Skeleton color="white"
      height="557px"
      sx={{maxWidth: '400px', bgcolor: 'grey.500', borderRadius: '10px'}}
      variant="rectangular"
      width="90%"
                     />
    }
    <CardFace alt="Card Image"
      onLoad={onImageLoad}
      src={flipped ? cardBackFaceImage : cardImage}
      sx={{height: loadingImage ? 0 : 'auto', opacity: loadingImage ? 0 : 1}}
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
  loadingImage: PropTypes.bool.isRequired,
  cardImage: PropTypes.string,
  cardBackFaceImage: PropTypes.string,
  onImageLoad: PropTypes.func.isRequired,
};
