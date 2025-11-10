import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import main_1 from '../../Photos/main_1.jpeg';
import main_2 from '../../Photos/main_2.jpeg';
import main_3 from '../../Photos/main_3.jpeg';
import main_4 from '../../Photos/main_4.jpeg';

import Dr_Anuj_Grover from '../../Photos/Professor/Dr. Anuj Grover.jpeg';

// Placeholder data
const teamMembers = [
  { name: 'Dr. A', title: 'Professor' },
  { name: 'Dr. B', title: 'Associate Professor' },
  { name: 'Student C', title: 'PhD Scholar' },
  { name: 'Student D', title: 'M.Tech Student' },
  { name: 'Student E', title: 'B.Tech Student' },
  { name: 'Student F', title: 'PhD Scholar' },
];

const projects = [
  { title: 'Project 1', description: 'A brief description of project 1.' },
  { title: 'Project 2', description: 'A brief description of project 2.' },
  { title: 'Project 3', description: 'A brief description of project 3.' },
];

const publications = [
    { title: 'Publication 1', authors: 'Author A, Author B', journal: 'Journal of VLSI, 2023' },
    { title: 'Publication 2', authors: 'Author C, Author D', journal: 'IEEE Transactions on Circuits and Systems, 2023' },
    { title: 'Publication 3', authors: 'Author E, Author F', journal: 'Conference on Advanced Research, 2023' },
];

const news = [
    { title: 'News 1', date: '2023-10-26', summary: 'Lab wins best paper award.' },
    { title: 'News 2', date: '2023-10-20', summary: 'New research grant received.' },
    { title: 'News 3', date: '2023-09-15', summary: 'Workshop on VLSI Design announced.' },
];

const galleryImages = [main_1, main_2, main_3, main_4];


const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        dotsClass: "slick-dots slick-thumb",
    };

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
        <Slider {...sliderSettings} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}>
            {galleryImages.map((img, index) => (
                <Box key={index} sx={{ width: '100%', height: '75vh', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            ))}
        </Slider>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 37, 64, 0.7)', zIndex: -1 }} />
        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
            <Typography variant="overline" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
                VLSI CIRCUITS & SYSTEMS LAB — IIIT-DELHI
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', maxWidth: '800px' }}>
                Advancing Ultra Low-Power VLSI, In-Memory Compute, and Reliable Systems
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, maxWidth: '600px', color: 'rgba(255, 255, 255, 0.9)' }}>
                The VICAS Lab researches next-generation circuits and architectures for efficient edge computing—spanning low-power SRAM, aging-aware design, and resilient systems.
            </Typography>
            <Box>
                <Button variant="contained" size="large" sx={{ mr: 2 }}>Explore Research Areas</Button>
                <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>View Projects</Button>
            </Box>
        </Container>
      </Box>

        {/* Welcome and Lead Professor Section */}
        <Box sx={{ py: 4, backgroundColor: '#f7f9fc' }}>
          <Container maxWidth="lg">
            <Grid container direction="column" spacing={5} alignItems="center">
              
              {/* Left Column: Welcome Text */}
              <Grid item xs={12} sm={7}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Welcome to the VICAS-LAB
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Welcome to the VLSI Circuits and Systems (VICAS) Lab at IIIT Delhi, a pioneering research facility dedicated to advancing the frontiers of Ultra Low Power In-Memory Compute for edge computing and machine learning applications. Situated in A-613 of the R&D block, the VICAS Lab is at the forefront of innovation, focusing on critical areas such as safety and security in hardware, as well as error resilient and energy-efficient systems. Under the expert guidance of Dr. Anuj Grover, our lab is committed to developing cutting-edge technologies that meet the ever-growing demands of modern computational systems, ensuring both high performance and robust security. Join us as we explore groundbreaking solutions that are set to shape the future of computing.
                </Typography>
              </Grid>

              {/* Right Column: Professor's Details */}
              <Grid item xs={12} sm={5}>
                <Card sx={{ p: 2, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <img 
                        src={Dr_Anuj_Grover} 
                        alt="Dr. Anuj Grover" 
                        style={{ 
                          width: '150px', 
                          height: '150px', 
                          borderRadius: '50%', 
                          objectFit: 'cover',
                          marginBottom: '16px' 
                        }} 
                      />
                      <Typography variant="h5" component="div">
                        Dr. Anuj Grover
                      </Typography>
                      <Typography color="text.secondary">
                        Associate Professor
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Department:</strong> Electronics and Communication Engineering, IIIT Delhi
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Address:</strong> Okhla Industrial Estate, Phase III, New Delhi - 110020
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Phone:</strong> 011 2690 7494
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Email:</strong> anuj@iiitd.ac.in
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Web:</strong> <a href="https://bit.ly/anuj-grover" target="_blank" rel="noopener noreferrer">https://bit.ly/anuj-grover</a>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>YouTube:</strong> <a href="https://www.youtube.com/c/anujg1" target="_blank" rel="noopener noreferrer">https://youtube.com/c/anujg1</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
            </Grid>
          </Container>
        </Box>
        
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Featured Projects */}
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom align="center">Featured Projects</Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button variant="outlined">View All Projects</Button>
          </Box>
        </Box>


        {/* Latest Publications */}
        <Box sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom align="center">Latest Publications</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {publications.map((pub, index) => (
                    <Grid item xs={12} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{pub.title}</Typography>
                                <Typography variant="body2" color="textSecondary">{pub.authors}</Typography>
                                <Typography variant="body2" color="textSecondary">{pub.journal}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box textAlign="center" sx={{ mt: 4 }}>
                <Button variant="outlined">Explore All Publications</Button>
            </Box>
        </Box>

        {/* Recent News */}
        <Box sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom align="center">Recent News</Typography>
            <Slider {...{...sliderSettings, slidesToShow: 3, fade: false, autoplay: false, dots: true}}>
                {news.map((item, index) => (
                    <Box key={index} sx={{ p: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2" color="textSecondary">{item.date}</Typography>
                                <Typography variant="body1" sx={{mt: 1}}>{item.summary}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
            <Box textAlign="center" sx={{ mt: 4 }}>
                <Button variant="outlined">See All News</Button>
            </Box>
        </Box>

        {/* Gallery Preview */}
        <Box sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom align="center">Gallery Preview</Typography>
            <Slider {...{...sliderSettings, slidesToShow: 2, fade: false, autoplay: false, dots: true}}>
                {galleryImages.slice(0, 4).map((img, index) => (
                    <Box key={index} sx={{ p: 1 }}>
                        <img src={img} alt={`Gallery item ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </Box>
                ))}
            </Slider>
            <Box textAlign="center" sx={{ mt: 4 }}>
                <Button variant="outlined">Visit the Gallery</Button>
            </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default HomePage;
