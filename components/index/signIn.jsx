import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router'
import Footer from '../footer'
import { default as NextLink } from 'next/link'

const theme = createTheme({
    palette: {
        primary: {
          main: '#FF0000',
        },
    }
  });

export default function SignIn() {

const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const creds = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    
    const data = {
      email: creds.get('email'),
      password: creds.get('password')
    }
    
    await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      if(data.message == 'success') {
        router.push('/home')
      } else {
        console.log("Invalid Login")
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Grid container spacing={2}>
                <Grid item> 
                    <Typography component="h1" variant="h5">
                    IOT Controller
                    </Typography>
                </Grid >
                <Grid item> 
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                </Grid >
            </Grid>
            
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NextLink href='/#' passhref>
                  <Link href="" variant="body2">
                    Forgot password?
                  </Link>
                </NextLink>
              </Grid>
              <Grid item>
                <NextLink href='/signUp' passhref>
                  <Link href="" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer></Footer>
      </Container>
    </ThemeProvider>
  );
}