import {styled} from '@mui/system';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import {Box, Skeleton} from '@mui/material';

const CardFace = styled('img')({
  maxWidth: '400px',
  borderRadius: '19px',
  textAlign: 'center',
  width: '90%',
});

export default function CardImage({cardImage, cardBackFaceImage, loading}) {
  const [flipped, setFlipped] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    setImageLoading(true);
  }, [cardImage]);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  useEffect(() => {
    setFlipped(false);
  }, [setFlipped, cardImage]);

  return <Box sx={{width: '100%', textAlign: 'center', position: 'relative'}}>
        {(loading || imageLoading) && <Skeleton color="white"
          height="557px"
          sx={{maxWidth: '400px', bgcolor: 'grey.500', borderRadius: '10px', marginLeft: 'auto', marginRight: 'auto'}}
          variant="rectangular"
          width="90%"
                                      />
    }
    {!loading && <CardFace alt="Card Image"
      onLoad={handleImageLoad}
      src={flipped ? cardBackFaceImage : cardImage}
      sx={{height: loading ? 0 : 'auto', opacity: loading ? 0 : 1}}
                 />}
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
  loading: PropTypes.bool.isRequired,
  cardImage: PropTypes.string,
  cardBackFaceImage: PropTypes.string,
};
