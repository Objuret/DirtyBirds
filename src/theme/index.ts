// src/theme/index.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

const createSpacing = (factor: number) => `${0.25 * factor}rem`;


let theme = createTheme({
  palette,
  typography,
  components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: createSpacing,
});

// Make fonts responsive
theme = responsiveFontSizes(theme);

export default theme;