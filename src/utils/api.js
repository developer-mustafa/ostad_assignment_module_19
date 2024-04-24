import axios from "axios";

const api = axios.create({
  baseURL: "https://ostad-assignment-module-19server-developermustafas-projects.vercel.app/api",
});

export default api;
