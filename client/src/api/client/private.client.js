import axios from "axios";
import queryString from "query-string";

const baseURL = "http://192.168.1.46:3000/api/v1";

const privateClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

privateClient.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("actkn")}`;
  return config;
});

privateClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error.response.data;
  }
);

export default privateClient;
