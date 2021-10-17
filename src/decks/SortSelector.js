import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


export default function SortSelector({onChange, value}) {
  const handleChange = useCallback(e => onChange(e.target.value), []);
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{'Sort By'}</InputLabel>
      <Select
        id="demo-simple-select"
        label="Age"
        labelId="demo-simple-select-label"
        onChange={handleChange}
        value={value}
      >
        <MenuItem value="pick">{'Pick Order'}</MenuItem>
        <MenuItem value="cmc">{'Mana Value'}</MenuItem>
        <MenuItem value="color">{'Color'}</MenuItem>
      </Select>
    </FormControl>
  );
}

SortSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
