import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TopBar from '../components/dashboard/topBar';
import Copyright from '../components/copyright';
import withAuth from '../components/auth/checkPerms';
import GettingStarted from '../components/dashboard/gettingStarted';
import { default as NextLink } from 'next/link'

const mdTheme = createTheme({
    palette: {
        primary: {
          main: '#FF0000',
        },
    }
  });

function addBox() {


  
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <h1>Add a box</h1>
            </Grid>
            <Grid item xs={8}>
                <p>
                
                    Box Name: 
                    <br></br>
                    <input type="Text" name="boxName" id = "boxName"  /> 
                    <br></br><br></br>

                    Box Location 
                    <br></br>
                    <input type="Text" name="boxLocation" id = "boxLocation" /> 
                    <br></br>
                    <br></br>

                    <Grid item xs={6}>
                        <h1>Add device to box</h1>
                    </Grid>
                    <br></br>
                    <br></br>
                    <input type="checkbox" id="lightCheck" Accept/> Light IP: 
                    <input type="Text" name="lightText" id = "lightText" /> 
                    <br></br>
                    <br></br>
                    <input type="checkbox" id="webcamCheck" Accept/> Webcam IP: 
                    <input type="Text" name="webcamText" id = "webcamText" /> 
                    <br></br>
                    <br></br>
                    <input type="checkbox" id="smartoutletCheck" Accept/> Smart outlet IP: 
                    <input type="Text" name="smartoutletText" id = "smartoutletText" /> 
                    <br></br>
                    <br></br>
                    <input type="checkbox" id="smartStripCheck" Accept/> Smart strip IP: 
                    <input type="Text" name="smartStripText" id = "smartStripText" /> 
                </p>
            </Grid>
            
            <Grid item xs={8}>
                <Button variant="contained" onClick={addBox}>Add box</Button>
            </Grid>
        </Grid>

    </div>
   
    )
}

export default addBox;
