import axios, { AxiosInstance, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:9000", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        localStorage.removeItem("token"); 
        if (typeof window !== "undefined") {
          window.location.href = "/"; 
        }
        return Promise.reject(new Error("Unauthorized - Please sign in again"));
      }

      const message = error.response.data?.error || "An error occurred";
      return Promise.reject(new Error(message));
    }

    return Promise.reject(new Error("Network error - Please try again later"));
  }
);

export default api;