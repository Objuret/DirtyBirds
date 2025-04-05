// Project: Dirty Birds
// Description: This is the footer component for the Dirty Birds website. It includes links to various sections of the site, contact information, and social media links. The footer is styled using Material-UI components and is responsive to different screen sizes.
// The design reflects the vintage, rustic feel of the Spike! magazine theme.
// The footer is integrated into the main application layout and is designed to be reusable across different pages of the site.
// The component uses Material-UI for styling and layout, and React Router for navigation.
// The footer is styled to match the overall theme of the application, with a focus on usability and accessibility.
// The footer is designed to be visually appealing and easy to navigate, with clear links and contact information.
// The component is structured to be easily maintainable and extensible, allowing for future updates and additions.

import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: 'secondary.contrastText',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="secondary.contrastText" gutterBottom>
              About
            </Typography>
            <Link component={RouterLink} to="/about" color="inherit">
              About Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="secondary.contrastText" gutterBottom>
              Events
            </Typography>
            <Link component={RouterLink} to="/events" color="inherit">
              Upcoming Events
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="secondary.contrastText" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: info@dirtybirds.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="secondary.contrastText" gutterBottom>
              Follow Us
            </Typography>
            {/* Add social media icons here */}
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Dirty Birds. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}