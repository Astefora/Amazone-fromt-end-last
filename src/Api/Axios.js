
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazone-api-deploy1.onrender.com",
});

export { axiosInstance };