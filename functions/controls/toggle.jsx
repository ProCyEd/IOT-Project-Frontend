import React, {useState, useEffect} from 'react';
import Switch from'@mui/material/Switch'
import Alert from '@mui/material/Alert'

export default function Toggle({name}) {

    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(false)

    useEffect(async () => {

        const message = (checked ? 'on' : 'off')

        const data = {
            message: message
        }

        await fetch('http://localhost:3000/api/rabbitMQ/internalTesting', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log(data.response)
            console.log("enabled")
            setDisabled(false)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, [checked]);
    

    async function handleChange() {
        setDisabled(!disabled)
        setChecked(!checked)
    }

    function determineAlert() {
        if(!checked && !disabled) {
            return <Alert severity="error">Off</Alert>
        } else if(disabled) {
            return <Alert severity="warning">Sending Request</Alert>
        } else {
            return <Alert severity="success">On</Alert>
        }
    }

    return (
        <>
            <div>{name}</div>
            <Switch checked={checked} onChange={handleChange} disabled={disabled}/>
            {determineAlert()}
        </>
    )
}