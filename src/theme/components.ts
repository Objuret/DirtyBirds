// This file defines the component styles for the application using a custom theme. 
// It includes overrides for various Material-UI components to achieve a consistent look and feel throughout the application.
// The styles are designed to reflect the vintage, rustic feel of the Spike! magazine theme.
// The component styles are used in conjunction with the theme provider to apply the styles globally across the application.
// The styles are defined using the MUI system, allowing for easy customization and theming.

import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'url("/textures/parchment.png")',
        boxShadow: '0 0.125rem 0.5rem rgba(0, 0, 0, 0.15)',
        borderRadius: '0.25rem',
        border: '1px solid', // Border width in px is standard
        borderColor: 'primary.main',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '0.125rem',
        textTransform: 'none',
        fontWeight: 700,
      },
      containedPrimary: {
        boxShadow: '0 0.125rem 0.25rem rgba(139, 0, 0, 0.25)',
      },
    },
  },
};

export default components;