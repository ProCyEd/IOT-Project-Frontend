import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({name, options}) {
  return (
    <FormControl>
        <h3>{name}</h3>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
        >
        {options.map((p, index) => (
            <FormControlLabel value={p.option} control={<Radio />} label={p.option} />
        ))}
         </RadioGroup>
    </FormControl>
  );
}
