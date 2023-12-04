import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function DetailsButton({card}) {
  const router = useRouter()

  const handleDetailsPress = useCallback(() => router.push(`/details?card=${encodeURIComponent(card)}`), [router, card]);

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
