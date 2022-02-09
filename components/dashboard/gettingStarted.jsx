import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function GettingStarted() {

    async function reserve() {

        const data = {
            message: "Testing"
        }

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
        })  
        .catch((error) => {
            console.error('Error:', error);
        });
        }


  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <h1>Getting Started</h1>
            </Grid>
            <Grid item xs={4}>
                <></>
            </Grid>
            <Grid item xs={4}>
                <h3>Select a Box to start experimenting</h3>
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" onClick={reserve}>Get Started Here</Button>
            </Grid>
        </Grid>
    </div>
    )
}

export default GettingStarted;
