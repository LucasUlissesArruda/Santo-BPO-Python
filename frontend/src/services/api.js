
import axios from 'axios';

const api = axios.create({

  baseURL: 'http://127.0.0.1:8000/api',
});


export const login = async (username, password) => {
  try {
    
    const response = await api.post('/token/', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error; 
  }
};

export default api;