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
                <h1>Add a box</h1>
            </Grid>
            <Grid item xs={6}>
                <p>
                
                    Box Name: 
                    <br></br>
                    <input type="Text" name="boxName" id = "boxName" /> 
                    <br></br><br></br>

                    Box Location 
                    <br></br>
                    <input type="Text" name="boxLocation" id = "boxLocation" /> 
                    <br></br>

                   


                </p>
            </Grid>
            
            <Grid item xs={8}>
                <Button variant="contained" onClick={reserve}>Add box</Button>
            </Grid>
        </Grid>

        <Grid container spacing={2}>

            <Grid item xs={6}>
                <h1>Add device to box</h1>
            </Grid>
        </Grid>

    </div>
    )
}

export default GettingStarted;
