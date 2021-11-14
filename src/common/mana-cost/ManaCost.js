import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/system';
import symbols from './symbols.json';
import gold from './gold.svg';
import land from './land.svg';

const StyledImage = styled('img')({
  height: '1rem',
  verticalAlign: 'middle',
});

export default function ManaCost({manaCost}) {
  const manaSymbols = manaCost.split('}').filter(n => n).map(symbol => {
    if (symbol === '{M') {
      return gold;
    }
    if (symbol === '{L') {
      return land;
    }
    return symbols[`${symbol}}`];
  });
  return (
    <>
      {manaSymbols.map((manaSymbol, i) => <StyledImage alt={`${manaSymbol[1]} icon`}
        key={i}
        src={manaSymbol}
                                          />)}
    </>
  );
}

ManaCost.propTypes = {
  manaCost: PropTypes.string.isRequired,
};
