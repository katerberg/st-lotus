import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';

export default function DetailsButton({card}) {
  const history = useHistory();

  const handleDetailsPress = useCallback(() => history.push(`/details/${encodeURIComponent(card)}`), [history, card]);

  return (
    <Button
      color="primary"
      onClick={handleDetailsPress}
      size="large"
    >{'See Details'}</Button>
  );
}

DetailsButton.propTypes = {
  card: PropTypes.string.isRequired,
};
