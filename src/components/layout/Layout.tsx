import { ReactNode } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import PageContainer from './PageContainer';
import theme from '../../theme/';

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
