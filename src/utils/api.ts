import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'https://api.argento.com', // Update with your Railway API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getMarketData = async () => {
  const response = await api.get('/market-data');
  return response.data;
};

export const getPortfolio = async () => {
  const response = await api.get('/portfolio');
  return response.data;
};

export default api;