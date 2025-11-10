import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const navButtonStyles = {
    position: 'relative',
    px: { xs: 1, sm: 2 },
    py: { xs: 1, sm: 1.5 },
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        height: '3px',
        bottom: 0,
        left: 0,
        backgroundColor: 'primary.main',
        transformOrigin: 'bottom right',
        transition: 'transform 0.25s ease-out',
    },
    '&:hover::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
    },
};

const Header = () => {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navItems to remove 'Home' as it's now handled by the logo
  const navItems = [
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Research', path: '/research' },
    { text: 'News & Achievements', path: '/news' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Contact Us', path: '/contact' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Mobile Hamburger Menu (Moved to the far left) */}
        <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, mr: 1 }} // mr adds some margin to the right
        >
            <MenuIcon />
        </IconButton>

        {/* Left: Logo & Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 } }}>
          <Typography variant="h6" noWrap component={Link} to="/" sx={{ textDecoration: 'none', color: 'black', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            VICAS Lab
          </Typography>
        </Box>

        {/* Center: Main Navigation Links */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            position: 'relative',
            mx: { xs: 2, sm: 4 },
          }}
        >
          {/* Removed the "Home" button from here */}
          <Button color="primary" component={Link} to="/about" sx={navButtonStyles}>About</Button>
          <Button color="primary" component={Link} to="/projects" sx={navButtonStyles}>Projects</Button>
          <Button color="primary" component={Link} to="/research" sx={navButtonStyles}>Research</Button>
          <Button color="primary" component={Link} to="/news" sx={navButtonStyles}>News & Achievements</Button>
          <Button color="primary" component={Link} to="/gallery" sx={navButtonStyles}>Gallery</Button>
        </Box>

        {/* Right: Contact Us CTA (Desktop) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/contact"
                sx={{
                    display: { xs: 'none', md: 'inline-flex' },
                    borderRadius: '50px',
                    px: { xs: 2, sm: 3 },
                    py: { xs: 0.75, sm: 1 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
            >
            Contact Us
            </Button>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              VICAS Lab
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerClose}
                  sx={{
                    textAlign: 'center',
                    py: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(10, 37, 64, 0.05)',
                    }
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: item.text === 'Contact Us' ? 600 : 400,
                        color: item.text === 'Contact Us' ? 'primary.main' : 'text.primary',
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;