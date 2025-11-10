import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import Amit_Kumar_Ratrey from '../../Photos/Student/Amit Kumar Ratrey.jpeg';
import Anuj_Grover from '../../Photos/Student/Anuj Grover.jpeg';
import Anushree_Vardish from '../../Photos/Student/Anushree Vardish.jpeg';
import Ashutosh_Singh from '../../Photos/Student/Ashutosh Singh.jpeg';
import Belal_Iqbal from '../../Photos/Student/Belal Iqbal.jpeg';
import Manish_Tikyani from '../../Photos/Student/Manish Tikyani.jpeg';
import Mohammad_Umar_Salim from '../../Photos/Student/Mohammad Umar Salim.jpeg';
import Prashasti from '../../Photos/Student/Prashasti.jpeg';
import Sadia_Naaz from '../../Photos/Student/Sadia Naaz.jpeg';
import Sonia_Bondwal from '../../Photos/Student/Sonia Bondwal.jpeg';
import main_3 from '../../Photos/main_3.jpeg';

// import Dr_Anuj_Grover from '../../Photos/Professor/Dr. Anuj Grover.jpeg';
import Dr_AV_Subramanyam from '../../Photos/Professor/Dr. AV Subramanyam.jpeg';
import Dr_Pravesh_Biyani from '../../Photos/Professor/Dr. Pravesh Biyani.jpeg';
import Dr_Ranjan_Bose from '../../Photos/Professor/Dr. Ranjan Bose.jpeg';
import Dr_Ranjitha_Prasad from '../../Photos/Professor/Dr. Ranjitha Prasad.jpeg';
import Dr_Shobha_Sundar_Ram from '../../Photos/Professor/Dr. Shobha Sundar Ram.jpeg';
import Dr_Sujey_Deb from '../../Photos/Professor/Dr. Sujey Deb.jpeg';
import Dr_Sumit_J_Darak from '../../Photos/Professor/Dr. Sumit J Darak.jpeg';


const team = {
  director: {
    name: 'Dr. Anuj Grover',
    description: 'Leading research in VLSI circuits and low-power systems',
    avatar: Anuj_Grover,
  },
  faculty: [
    { name: 'Dr. A V Subramanyam', avatar: Dr_AV_Subramanyam },
    { name: 'Dr. Pravesh Biyani', avatar: Dr_Pravesh_Biyani },
    { name: 'Dr. Ranjan Bose', avatar: Dr_Ranjan_Bose },
    { name: 'Dr. Ranjitha Prasad', avatar: Dr_Ranjitha_Prasad },
    { name: 'Dr. Shobha Sundar Ram', avatar: Dr_Shobha_Sundar_Ram },
    { name: 'Dr. Sujay Deb', avatar: Dr_Sujey_Deb },
    { name: 'Dr. Sumit J Darak', avatar: Dr_Sumit_J_Darak },
  ],
  students: [
    { name: 'Amit Kumar Ratrey', avatar: Amit_Kumar_Ratrey },
    { name: 'Anushree Vardish', avatar: Anushree_Vardish },
    { name: 'Ashutosh Singh', avatar: Ashutosh_Singh },
    { name: 'Belal Iqbal', avatar: Belal_Iqbal },
    { name: 'Manish Tikyani', avatar: Manish_Tikyani },
    { name: 'Md. Umar Salim', avatar: Mohammad_Umar_Salim },
    { name: 'Prashasti', avatar: Prashasti },
    { name: 'Sadia Naaz', avatar: Sadia_Naaz },
    { name: 'Sonia Bondwal', avatar: Sonia_Bondwal },
  ],
};


const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '75vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'left', // Align text to the left
        }}
      >
        <Box sx={{ width: '100%', height: '75vh', backgroundImage: `url(${main_3})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }} />
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 37, 64, 0.7)', zIndex: -1 }} />
        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
            <Typography variant="overline" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
                VLSI CIRCUITS & SYSTEMS LAB — IIIT-DELHI
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', maxWidth: '800px' }}>
                About The VICAS Lab
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, maxWidth: '600px', color: 'rgba(255, 255, 255, 0.9)' }}>
                We are a dedicated team of researchers and students passionate about advancing the frontiers of VLSI technology to build more efficient and reliable electronic systems for the future.
            </Typography>
        </Container>
      </Box>


      {/* Our Team Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Our Team
        </Typography>

        {/* Director */}
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Card sx={{ maxWidth: 500, width: '100%', textAlign: 'center', p: 3, borderRadius: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <Avatar alt={team.director.name} src={team.director.avatar} sx={{ width: 120, height: 120, margin: '0 auto 16px' }} />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>{team.director.name}</Typography>
              <Typography sx={{ mb: 1, color: 'secondary.main', fontWeight: 'medium' }}>{team.director.title}</Typography>
              <Typography variant="body2" color="text.secondary">{team.director.description}</Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Faculty & Research Staff */}
        <Typography variant="h4" component="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mt: 8, mb: 4 }}>
          Faculty & Research Staff
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {team.faculty.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: 'center', p: 2, borderRadius: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.05)', width: '20vw' }}>
                <Avatar alt={member.name} src={member.avatar} sx={{ width: 100, height: 100, margin: '0 auto 16px' }} />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>{member.name}</Typography>
                  <Typography color="text.secondary">{member.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Students & Research Assistants */}
        <Typography variant="h4" component="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mt: 8, mb: 4 }}>
          Students & Research Assistants
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {team.students.map((member, index) => (
            <Grid item xs={12} sm={4} md={2.4} key={index}>
              <Card sx={{ textAlign: 'center', p: 2, borderRadius: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.05)', height: '100%', width: '20vw' }}>
                <Avatar alt={member.name} src={member.avatar} sx={{ width: 90, height: 90, margin: '0 auto 16px' }} />
                <CardContent sx={{p: 1}}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{member.name}</Typography>
                  <Typography color="text.secondary" variant="body2">{member.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;