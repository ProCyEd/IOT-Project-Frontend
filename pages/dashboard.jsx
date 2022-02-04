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
  
  function DashboardContent() {

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

              <GettingStarted></GettingStarted>

              {/* Copyright */}

					<Copyright></Copyright>

            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
  

  function Dashboard() {
    return <DashboardContent />;
  }

  export default withAuth(Dashboard)