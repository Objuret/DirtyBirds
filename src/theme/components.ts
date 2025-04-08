// This file defines the component styles for the application using a custom theme. 
// It includes overrides for various Material-UI components to achieve a consistent look and feel throughout the application.
// The styles are designed to reflect the vintage, rustic feel of the Spike! magazine theme.
// The component styles are used in conjunction with the theme provider to apply the styles globally across the application.
// The styles are defined using the MUI system, allowing for easy customization and theming.

// src/theme/components.ts
import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'url("../assets/images/backgrounds/papir.png")',
        boxShadow: '0 0.125rem 0.5rem ${theme.palette.secondary.dark}40',
        borderRadius: '0.25rem',
        border: '1px solid',
        borderColor: 'primary.main',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({theme}) => ({
        borderRadius: '0.125rem',
        textTransform: 'none',
        fontWeight: 700,
        boxShadow: `0 0.125rem 0.25rem ${theme.palette.primary.main}40`,
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '0.25rem',
        border: `1px solid ${theme.palette.primary.main}40`,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: `0 4px 10px ${theme.palette.secondary.main}40`,
        },
        overflow: 'hidden',
      }),
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '16px',
        '&:last-child': {
          paddingBottom: '16px',
        }
      },
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `1px solid ${theme.palette.primary.main}20`,
      }),
    },
  },
};

export default components;