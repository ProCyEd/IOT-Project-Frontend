import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function GettingStarted() {
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
                <Button variant="contained">Get Started Here</Button>
            </Grid>
        </Grid>
    </div>
    )
}

export default GettingStarted;
