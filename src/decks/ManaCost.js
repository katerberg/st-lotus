import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/system';
import symbols from './symbols.json';

const StyledImage = styled('img')({
  height: '1rem',
  verticalAlign: 'middle',
});

export default function ManaCost({manaCost}) {
  const manaSymbols = manaCost.split('}').map(symbol => symbols[`${symbol}}`]);
  return (
    <>
      {manaSymbols.map((manaSymbol, i) => <StyledImage key={i}
        src={manaSymbol}
                                          />)}
    </>
  );
}

ManaCost.propTypes = {
  manaCost: PropTypes.string.isRequired,
};
