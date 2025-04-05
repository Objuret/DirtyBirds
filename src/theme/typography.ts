// This file defines the typography styles for the application using a custom theme.
export const typography = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Merriweather", "Times New Roman", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontFamily: '"Merriweather", "Times New Roman", serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
    },
    // Add other typography styles as needed
  };
  
  export default typography;