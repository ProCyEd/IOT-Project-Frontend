import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert'


function ColorPicker() {

    function checkHEX(hex) {
        const result = /^#[0-9A-F]{6}$/i.test(hex)
        if(result) {
            setColorText(hex)
            setVisible('hidden')
        } else {
            setVisible('visible')
        }
    }

    const [hex, setHex] = useState('');
    const [colorText, setColorText] = useState('#000000')
    const [visible, setVisible] = useState('hidden')

  return (
    <div>
            <div>Bulb Color</div>
            <OutlinedInput placeholder="Please enter a HEX Value" value={hex} onChange={(event)=> setHex(event.target.value)}/>
            <Button variant="contained" onClick={() => checkHEX(hex)}>Submit</Button>
            <Alert style={{visibility: visible}} severity="error">Not a Hex Value! Please input a different color.</Alert>
            <h1 style={{color: colorText }}>Color Test</h1>
    </div>
  
  );
}

export default ColorPicker;
