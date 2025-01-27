import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.0.42:8040/",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);

export const get = (url, params = {}) => {
  return axiosInstance.get(url, { params });
};

export const post = (url, data) => {
  return axiosInstance.post(url, data);
};
