import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const publications = [
  { year: 2023, topic: 'Low-Power', author: 'Dr. A', title: 'A Novel Low-Power SRAM', journal: 'Journal of VLSI' },
  { year: 2023, topic: 'High-Speed', author: 'Dr. B', title: 'A 1GS/s ADC Design', journal: 'IEEE TCAS-I' },
  { year: 2022, topic: 'AI Hardware', author: 'Dr. A', title: 'Accelerator for CNNs', journal: 'JSSC' },
  { year: 2022, topic: 'Low-Power', author: 'Dr. B', title: 'Sub-threshold Logic Design', journal: 'Journal of VLSI' },
  // Add more publications
];

const ResearchPage = () => {
  const [year, setYear] = useState('');
  const [topic, setTopic] = useState('');
  const [author, setAuthor] = useState('');

  const filteredPublications = publications.filter(p => 
    (year ? p.year === year : true) &&
    (topic ? p.topic === topic : true) &&
    (author ? p.author === author : true)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Research & Publications
      </Typography>

      <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <FormControl sx={{minWidth: 120}}>
          <InputLabel>Year</InputLabel>
          <Select value={year} label="Year" onChange={e => setYear(e.target.value)}>
            <MenuItem value=""><em>All</em></MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{minWidth: 120}}>
          <InputLabel>Topic</InputLabel>
          <Select value={topic} label="Topic" onChange={e => setTopic(e.target.value)}>
            <MenuItem value=""><em>All</em></MenuItem>
            <MenuItem value="Low-Power">Low-Power</MenuItem>
            <MenuItem value="High-Speed">High-Speed</MenuItem>
            <MenuItem value="AI Hardware">AI Hardware</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{minWidth: 120}}>
          <InputLabel>Author</InputLabel>
          <Select value={author} label="Author" onChange={e => setAuthor(e.target.value)}>
            <MenuItem value=""><em>All</em></MenuItem>
            <MenuItem value="Dr. A">Dr. A</MenuItem>
            <MenuItem value="Dr. B">Dr. B</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2}>
        {filteredPublications.map((pub, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{pub.title}</Typography>
                <Typography variant="body2" color="text.secondary">By {pub.author} - {pub.year}</Typography>
                <Typography variant="body2"><em>{pub.journal}</em></Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResearchPage;
