// services/api.js
import axios from 'axios';

const api = axios.create({
  // A URL base da API Django. A porta padrão é 8000.
  baseURL: 'http://127.0.0.1:8000/api',
});

// Função para fazer o login na API
export const login = async (username, password) => {
  try {
    // Envia os dados para a rota /token/ do back-end
    const response = await api.post('/token/', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error; // Lança o erro para ser tratado na página de login
  }
};

export default api;