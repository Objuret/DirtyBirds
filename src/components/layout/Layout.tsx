 // Project: Next.js 13 with TypeScript, MUI, and Tailwind CSS Boilerplate
// Description: This is a boilerplate project for Next.js 13 using TypeScript, Material-UI (MUI), and Tailwind CSS. It includes a custom theme for MUI, a layout component, and a page container component. The project is designed to be easily extendable and maintainable, with a focus on best practices and modern web development techniques.
import { ReactNode } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageContainer from '../components/layout/PageContainer';
import theme from '../theme';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: 'url("/textures/subtle-background.png")',
        }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <PageContainer>{children}</PageContainer>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
