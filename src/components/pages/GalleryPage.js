import React, { useState } from 'react';
import { Container, Typography, Box, Button, ImageList, ImageListItem } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import Img1 from '../../Photos/General/1.jpeg';
import Img2 from '../../Photos/General/2.jpeg';
import Img3 from '../../Photos/General/3.jpeg';
import Img4 from '../../Photos/General/4.jpeg';
import Img5 from '../../Photos/General/5.jpeg';
import Img6 from '../../Photos/General/6.jpeg';

const allImages = [
  { img: Img1, album: 'Conferences' },
  { img: Img2, album: 'Lab Events' },
  { img: Img3, album: 'Conferences' },
  { img: Img4, album: 'Lab Events' },
  { img: Img5, album: 'Conferences' },
  { img: Img6, album: 'Lab Events' },
];


const GalleryPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' ? allImages : allImages.filter(img => img.album === filter);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Photo Gallery
      </Typography>
      <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant={filter === 'All' ? 'contained' : 'outlined'} onClick={() => setFilter('All')}>All</Button>
        <Button variant={filter === 'Conferences' ? 'contained' : 'outlined'} onClick={() => setFilter('Conferences')}>Conferences</Button>
        <Button variant={filter === 'Lab Events' ? 'contained' : 'outlined'} onClick={() => setFilter('Lab Events')}>Lab Events</Button>
      </Box>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {filteredImages.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default GalleryPage;
