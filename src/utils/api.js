import axios from "axios";

const api = axios.create({
  baseURL: "https://food-crud-1-server.vercel.app",
});

export default api;
