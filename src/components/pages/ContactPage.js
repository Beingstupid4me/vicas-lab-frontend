import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
            Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{mb: 5}}>
            We are located at IIIT-Delhi. Please use the information below to get in touch with us.
        </Typography>
    </Container>
  );
};

export default ContactPage;
