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


import EnhancedTable from '../components/devices/deviceTableOne';

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



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));



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

        <Box sx={{ width: '100%' }}>

            {/* Tab labels and organizaiton */}

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Catagory One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>

            

            {/* Tab Content */}
            <TabPanel value={value} index={0}>
                <Box sx={{flexFrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <Item>
                                <EnhancedTable></EnhancedTable>
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>2</Item>
                        </Grid>
                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Hello World Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Hello World Three
            </TabPanel>


        </Box>

        {/* Copyright */}
        <Copyright></Copyright>

    </Container>
</Box>
</Box>
            </ThemeProvider>
        </div>
    )
}