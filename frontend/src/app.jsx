
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      {}
      <CssBaseline />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;