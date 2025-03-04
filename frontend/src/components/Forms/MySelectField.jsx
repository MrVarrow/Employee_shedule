import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const MySelectField = ({ label, value, onChange, options, width }) => {
  return (
    <TextField
          id="outlined-select-currency"
          select
          label={label}
          value={value}
          onChange={onChange}
          fullWidth
          margin="normal"
          sx={{ width: width || '100%' // Ensure width is applied correctly

      }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} >
              {option}
            </MenuItem>
          ))}
        </TextField>
  );
};

export default MySelectField;