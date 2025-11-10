import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: "4rem 0 1.5rem",
        backgroundColor: "#ffffff",
        borderTop: "0.0625rem solid #eaeaea",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ marginBottom: "3rem" }}>
          {/* Address */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#333333",
                marginBottom: "1.5rem !important",
                fontWeight: "600 !important",
              }}
            >
              Address
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666666",
                lineHeight: 1.6,
              }}
            >
              VLSI Circuits and Systems Lab
              <br />
              Indraprastha Institute of Information Technology, Delhi
              <br />
              Okhla Industrial Estate, Phase III
              <br />
              New Delhi - 110020
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#333333",
                marginBottom: "1.5rem !important",
                fontWeight: "600 !important",
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                "& a": {
                  color: "#666666",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                },
                "& a:hover": {
                  color: "#333333",
                },
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/research">Research</Link>
              <Link href="/projects">Projects</Link>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#333333",
                marginBottom: "1.5rem !important",
                fontWeight: "600 !important",
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                color: "#666666",
              }}
            >
              <Typography variant="body2">Email: anuj@iiitd.ac.in</Typography>
              <Typography variant="body2">Phone: +91-11-26907494</Typography>
              <Typography variant="body2">Web: <Link href="https://bit.ly/anuj-grover" target="_blank" rel="noopener">https://bit.ly/anuj-grover</Link></Typography>
            </Box>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#333333",
                marginBottom: "1.5rem !important",
                fontWeight: "600 !important",
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <IconButton
                href="#"
                aria-label="Facebook"
                sx={{
                  color: "#666666 !important",
                  "&:hover": { color: "#333333 !important" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="#"
                aria-label="Twitter"
                sx={{
                  color: "#666666 !important",
                  "&:hover": { color: "#333333 !important" },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="#"
                aria-label="LinkedIn"
                sx={{
                  color: "#666666 !important",
                  "&:hover": { color: "#333333 !important" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.2159678137273!2d77.2734967345629!3d28.545202986298268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1756955691731!5m2!1sen!2sin" width="220" height="250" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>

        <Divider />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              textAlign: "center",
            },
          }}
        >
          <Typography variant="body2" sx={{ color: "#666666" }}>
            © 2025 VLSI Circuits and Systems Lab. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1.5rem",
              "@media (max-width: 600px)": {
                justifyContent: "center",
              },
            }}
          >
            <Typography variant="body2" sx={{ color: "#666666" }}>
              Developed by: <Link sx={{ color: "#009494", textDecoration: 'none' }} href="#">Kothari and Jha</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;