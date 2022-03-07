import React, {useState, useEffect} from 'react';
import Switch from'@mui/material/Switch'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

export default function Toggle({name}) {

    const [disabled, setDisabled] = useState(false)
    const [status, setStatus] = useState('Off')

    async function buttonControl(msg) {
        
        setDisabled(true)
        const data = {
            message: msg
        }
        setStatus('send')

        await fetch('http://localhost:3001/control/publish', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                /* 'Access-Control-Allow-Origin': 'http://localhost:3001/api/reservation',
                'Access-Control-Allow-Credentials': true, */
            },
                body: JSON.stringify(data),
            })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            if(data.msg == 'True') {
                setStatus(data.status)
                console.log("enabled")
                setDisabled(false)
            } else {
                setStatus('off')
                alert("Request Timeout")
                setDisabled(false)
            }
            
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    function determineAlert() {
        if(status == 'Off') {
            return <Alert severity="error">Off</Alert>
        } else if(status == 'send') {
            return <Alert severity="warning">Sending Request</Alert>
        } else {
            return <Alert severity="success">On</Alert>
        }
    }

    return (
        <>
            <div>{name}</div>
            <Button variant={'outlined'} disabled={disabled} onClick={() => buttonControl("On")}>On</Button>
            <Button variant={'outlined'} disabled={disabled} onClick={() => buttonControl("Off")}>Off</Button>
            {determineAlert()}
        </>
    )
}