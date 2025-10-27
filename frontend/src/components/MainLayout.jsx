
import React from 'react';
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const drawerWidth = 240;

function MainLayout({ children }) {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    // O sistema de rotas irá redirecionar para /login automaticamente
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: (theme) => theme.shadows[2] 
        }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            Santo BPO
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            backgroundColor: '#fdfdfd',
            borderRight: '1px solid #eee'
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/clientes')}>
                <ListItemText primary="Clientes" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;