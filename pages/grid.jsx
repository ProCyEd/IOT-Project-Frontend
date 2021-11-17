import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Contaienr from '@mui/material/Container';

export default function ExampleGrid(){
    return(
        <Contaienr>
            <Grid display="flex" container spacing={3}>
                <Grid item xs={8}>
                    <Paper
                        sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 250,
                        }}
                    >

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper
                        sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 250,
                        }}
                    >

                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 250,
                        }}
                    >
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 250,
                        }}
                    >
                    </Paper>
                </Grid>
            </Grid>
        </Contaienr>
    )
}