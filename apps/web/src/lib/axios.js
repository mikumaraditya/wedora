import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

let inMemoryToken = null;

export function setAccessToken(token) {
  inMemoryToken = token;
}

export function getAccessToken() {
  return inMemoryToken;
}

apiClient.interceptors.request.use(
  config => {
    if (inMemoryToken) {
      config.headers.Authorization = `Bearer ${inMemoryToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
