// routes/index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage.jsx';
import ClientesPage from '../pages/ClientesPage.jsx'; // Importe a nova página
import MainLayout from '../components/MainLayout.jsx'; // Importe o layout
import { useAuth } from '../contexts/AuthContext';

// Componente para proteger as rotas
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const isAuthenticated = user || localStorage.getItem('authToken');

  return isAuthenticated ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" />;
};

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Rota Protegida: /clientes */}
        <Route 
          path="/clientes" 
          element={
            <PrivateRoute>
              <ClientesPage />
            </PrivateRoute>
          } 
        />

        {/* Rota Padrão: qualquer outra URL redireciona para /clientes */}
        <Route path="*" element={<Navigate to="/clientes" />} />
      </Routes>
    </Router>
  );
};