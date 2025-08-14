import axios from "axios";

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: process.env.BACKEND_API_URL || "http://localhost:4000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    // Add authorization token if available
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional) - for handling token expiration, etc.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default api;
