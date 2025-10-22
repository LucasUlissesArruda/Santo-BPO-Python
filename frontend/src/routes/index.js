
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext';


const DashboardPage = () => <h1>Dashboard - Bem-vindo!</h1>;

export const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {user ? (
          <Route path="/" element={<DashboardPage />} />
        ) : (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </Router>
  );
};