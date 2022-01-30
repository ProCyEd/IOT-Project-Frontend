import React from 'react';
import Slider from '@mui/material/Slider'

export default function Mover({name}) {
    return <>
        <div>{name}</div>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </> 
  
}
