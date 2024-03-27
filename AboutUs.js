import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to HR Manager Development, your trusted partner in human resources management.
        </Typography>
        <Typography variant="body1" paragraph>
          At HR Manager Development, we are committed to providing innovative solutions to meet the HR needs of your organization.
          Our team of experts is dedicated to creating tools and systems that streamline HR processes, enhance employee engagement, and drive organizational success.
        </Typography>
        <Typography variant="body1" paragraph>
          We believe in the power of effective HR management to transform workplaces and foster a positive and inclusive culture. Our mission is to empower HR professionals and organizations with the tools they need to thrive in the ever-evolving world of human resources.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing HR Manager Development. We look forward to being a part of your journey towards HR excellence.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
