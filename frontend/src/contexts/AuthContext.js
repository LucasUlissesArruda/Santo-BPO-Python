
import React, { createContext, useState, useContext } from 'react';
import { login as loginService } from '...\frontend\src\servcies\api.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const data = await loginService(username, password);

      localStorage.setItem('authToken', JSON.stringify(data));
      setUser({ username }); 
      return true;
    } catch (error) {
      console.error("Falha no login");
      return false;
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const value = { user, onLogin: handleLogin, onLogout: handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};