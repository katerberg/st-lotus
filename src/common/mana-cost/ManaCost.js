import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/system';
import symbols from './symbols.json';

const StyledImage = styled('img')({
  verticalAlign: 'middle',
});

export default function ManaCost({manaCost, height = '1rem'}) {
  const manaSymbols = manaCost.split('}').filter(n => n).map(symbol => {
    if (symbol === '{M') {
      return "/mana-cost/gold.svg";
    }
    if (symbol === '{L') {
      return "/mana-cost/land.svg";
    }
    return symbols[`${symbol}}`];
  });
  return (
    <>
      {manaSymbols.map((manaSymbol, i) => <StyledImage alt="mana symbol"
        key={i}
        sx={{height}}
        src={manaSymbol}
                                          />)}
    </>
  );
}

ManaCost.propTypes = {
  manaCost: PropTypes.string.isRequired,
};
