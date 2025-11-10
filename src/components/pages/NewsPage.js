import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Masonry } from '@mui/lab';


const newsItems = [
  { date: '2023-10-26', title: 'Best Paper Award', content: 'Our paper on low-power design won the best paper award at the IEEE VLSI Conference.' },
  { date: '2023-09-15', title: 'New Grant Received', content: 'The lab has been awarded a new grant to research next-generation AI accelerators.' },
  { date: '2023-08-01', title: 'Student Defends PhD', content: 'Congratulations to Student C for successfully defending their PhD thesis.' },
  // Add more news items
];

const NewsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        News & Achievements
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
            {newsItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
                <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{item.date}</Typography>
                    <Typography variant="body1">{item.content}</Typography>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default NewsPage;
