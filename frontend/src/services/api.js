import axios from "axios";

const api = axios.create({
  baseURL: "https://hotel-management-system-1-0zhm.onrender.com/api",
});

// 🔐 Attach JWT token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
