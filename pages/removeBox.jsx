import React from 'react'
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
  
  function removeBox() {

    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

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

             <h1>Select a box to delete</h1> 

               <br></br>
               <input type="checkbox" id="box1Delete" Accept/> Box 1
               <br></br>

               <input type="checkbox" id="box1Delete" Accept/> Box 2
               <br></br>

               <input type="checkbox" id="box1Delete" Accept/> Box 3
               <br></br>

               <input type="submit" name="submit" value="Submit for deletion"></input>
              {/* Copyright */}
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  function Dashboard() {
    return <DashboardContent />;
  }

  // export default withAuth(Dashboard)
  export default removeBox;