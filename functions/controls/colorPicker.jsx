import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';


function ColorPicker() {
  return (
  
  <div>
        <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        </FormControl>
  </div>
  
  );
}

export default ColorPicker;
