// Description: This component handles the navigation bar for the application.
// It includes a responsive drawer for mobile devices and a horizontal navigation bar for larger screens.
// The navigation items are defined in an array and rendered dynamically.
// The component uses Material-UI for styling and layout, and React Router for navigation.
// This component is designed to be reusable and can be easily integrated into different parts of the application.

import { useState } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  Button
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Rules', path: '/rules' },
  { name: 'Tournaments', path: '/tournaments' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              textAlign: 'center',
              '&:hover': {
                backgroundColor: 'rgba(139, 0, 0, 0.08)',
              },
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{
                fontFamily: '"Merriweather", serif',
                fontWeight: 700,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            sx={{
              '& .MuiDrawer-paper': { width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: 'flex' }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={RouterLink}
              to={item.path}
              sx={{ 
                color: 'text.primary',
                mx: 1,
                fontFamily: '"Merriweather", serif',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: 'rgba(139, 0, 0, 0.08)',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      )}
    </>
  );
}