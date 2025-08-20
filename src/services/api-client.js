import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://phimart-server-five.vercel.app/api/v1",
});

export default apiClient;
