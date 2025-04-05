// This file defines the Header component for the application.
// The Header component is designed to be responsive and includes a logo and navigation links.
// It uses Material-UI for styling and layout, and is integrated into the main application layout.
// The component is styled to reflect the vintage, rustic feel of the Spike! magazine theme.

import { Box, AppBar, Toolbar, Container, useTheme } from '@mui/material';
import Logo from '../common/Logo';
import Navigation from '../common/Navigation';

export default function Header() {
  const theme = useTheme();
  
  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0}
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Box>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
}