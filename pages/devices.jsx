import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TopBar from '../components/dashboard/topBar';
import Copyright from '../components/copyright';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Checkout from "../components/devices/checkout";
import EnhancedTable from '../components/devices/deviceTableOne';
import DeviceBuilder from "../functions/deviceBuilder";

const mdTheme = createTheme({
    palette: {
        primary: {
          main: '#FF0000',
        },
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
      >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

async function toggle(type) {

    var data;

    if(type){
        data = {
            message: "on"
        }
    } else {
        data = {
            message: "off"
        }
    }

    await fetch('http://localhost:3000/api/rabbitMQ/publishTest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.response)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}



export default function Devices(){

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>

                <CssBaseline />

                {/* Navigaiton */}
                <TopBar></TopBar>

                <Box
                    component="main"
                    sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>


                        <h1>Select box to view</h1> 

                        <select id = "myList" onchange = "showTable()" >  
                        <option> Box 1 </option>  
                        <option> Light </option>  
                        <option> Webcam </option>  
                        <option> Fan </option>  
                        </select>  

                        <br></br><br></br>

                        <select id = "myList" onchange = "" >  
                        <option> Box 2 </option>  
                        <option> Light </option>  
                        <option> Webcam </option>  
                        <option> Fan </option>  
                        </select>  

                        <br></br><br></br>

                        <select id = "myList" onchange = "" >  
                        <option> Box 3 </option>  
                        <option> Light </option>  
                        <option> Webcam </option>  
                        <option> Fan </option>  
                        </select> 
                        {/* Copyright */}
                        <Copyright></Copyright>

                    </Container>
                </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}

function showTable() {

<div></div> 


}