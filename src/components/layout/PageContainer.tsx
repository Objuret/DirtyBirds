// Project: D&D Beyond Clone
// Description: This is a clone of the D&D Beyond website, created as a personal project to learn and practice React, TypeScript, and Material-UI. The project includes features such as character creation, spell management, and campaign tracking. The design is inspired by the D&D Beyond website, with a focus on usability and accessibility. The project is built using React Router for navigation and Material-UI for styling and layout.
// The project is structured to be easily maintainable and extensible, allowing for future updates and additions. The code is organized into components, with a focus on reusability and separation of concerns. The project includes a custom theme to match the D&D aesthetic, with a focus on typography and color scheme. The project is designed to be responsive and works well on both desktop and mobile devices.
// The project is hosted on GitHub and includes a README file with instructions for setup and usage. The project is a work in progress and may include additional features and improvements in the future.
// License: MIT
import { ReactNode } from 'react';
import { Container, Box, Paper } from '@mui/material';

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  withPaper?: boolean;
}

export default function PageContainer({ 
  children, 
  maxWidth = 'lg', 
  withPaper = true 
}: PageContainerProps) {
  return (
    <Container maxWidth={maxWidth} sx={{ py: 4 }}>
      {withPaper ? (
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            position: 'relative',
            backgroundImage: 'url("/textures/parchment.png")',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '4px',
              border: '1px solid rgba(139, 0, 0, 0.23)',
              pointerEvents: 'none',
            },
          }}
        >
          {children}
        </Paper>
      ) : (
        <Box>{children}</Box>
      )}
    </Container>
  );
}