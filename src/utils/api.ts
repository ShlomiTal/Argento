import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://argento-backend-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getMarketData = async () => {
  const response = await api.get('/market');
  return response.data;
};

export const getPortfolio = async () => {
  const response = await api.get('/portfolio');
  return response.data;
};

export const postTrade = async (trade: { symbol: string; amount: number }) => {
  const response = await api.post('/trade', trade);
  return response.data;
};

export default api;