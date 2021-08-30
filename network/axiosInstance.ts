import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "content-type": "application/json",
  },
});

export default axiosInstance;
