// This component renders the Dirty Birds logo.
// It uses the Material-UI Box component to display the logo image with customizable size.
// The logo is set to be responsive, maintaining its aspect ratio based on the specified size prop.
// The default size is set to 'medium', which can be overridden by passing a different size prop.

import { Box } from '@mui/material';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ size = 'medium' }: LogoProps) {
  const sizes = {
    small: 40,
    medium: 60,
    large: 100,
  };
  
  return (
    <Box
      component="img"
      src="..\..\DirtyBirdsLogo.svg" // Add your Dirty Birds logo here
      alt="Dirty Birds"
      sx={{
        height: sizes[size],
        width: 'auto',
      }}
    />
  );
}