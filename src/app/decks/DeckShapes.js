import PropTypes from 'prop-types';

export const cardShape = PropTypes.shape({
  apiName: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cmc: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const deckShape = PropTypes.shape({
  date: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  seat: PropTypes.number.isRequired,
  wins: PropTypes.number,
  losses: PropTypes.number,
  stLotus: PropTypes.number,
  decklist: PropTypes.arrayOf(cardShape).isRequired,
  sideboard: PropTypes.arrayOf(cardShape).isRequired,
});
