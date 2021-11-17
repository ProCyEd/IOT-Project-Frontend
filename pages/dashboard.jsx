import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/chart';
import Deposits from '../components/deposits';
import Orders from '../components/orders';
import StickyHeadTable from '../components/table';
import TopBar from '../components/topBar';
import Copyright from '../components/copyright';

  

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
              <Grid container spacing={3}>
                {/* Table */}
                <Grid item xs ={12} md={8} lg={9}>
                  <Paper
                  sx={{
                    p: 2, 
                    display: 'flex',
                    flexDirection: 'column',
                    height: '240',
                  }}
                  >                    
                  <StickyHeadTable/>

                  </Paper>
                </Grid>
              
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >

                    
                    <Chart />
                  </Paper>
                </Grid>


                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Deposits />
                  </Paper>
                </Grid>


                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                  </Paper>
                </Grid>
              </Grid>

              {/* Copyright */}

					<Copyright></Copyright>

            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
  

  export default function Dashboard() {
    return <DashboardContent />;
  }