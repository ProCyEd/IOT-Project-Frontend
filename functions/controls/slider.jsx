import React, {useState} from 'react';
import Slider from '@mui/material/Slider'

export default function Mover({name}) {

    const [brightness, setBrightness] = useState(50);

    function handleChange(event, newValue) {
        setBrightness(newValue)
    }

    return <>
        <div>{name}</div>
        <Slider value={brightness} onChange={handleChange} aria-label="Default" valueLabelDisplay="auto" />
    </> 
  
}
