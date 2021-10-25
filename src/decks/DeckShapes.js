import PropTypes from 'prop-types';

export const cardShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cmc: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
});
