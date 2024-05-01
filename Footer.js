import React from 'react';
import { Paper, Typography, Container, Grid, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import './Footer.css';

const Footer = () => {
  return (
    
    <Paper elevation={3} style={{ padding: '20px', position: 'fixed', bottom: 0,left :0, width: '100vw' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>

          <Grid item xs={12} md={4}>
            <Typography variant="h6">Contact Information</Typography>
            <Typography variant="body2" color="textSecondary">
              <EmailIcon /> hr@example.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <PhoneIcon /> +1 (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Follow Us</Typography>
            <IconButton href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">

              <LinkedInIcon />
              LinkedIn
            </IconButton>
            </Grid >
            <Grid item xs={12} md={4}>
            <Typography variant="h6">About us</Typography>
            <IconButton href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <GoogleIcon />
            </IconButton>
            
            <IconButton href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </IconButton>
          </Grid>
          
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
