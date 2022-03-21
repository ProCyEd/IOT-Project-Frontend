import * as React from 'react';
import Switch from '@mui/material/Switch';


export default function BasicSwitche({name}) {
  return (
    <div>
        <h3>
            {name}
        </h3>
        <Switch/>
    </div>
  );
}
