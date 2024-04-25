import axios from "axios";

const api = axios.create({
  baseURL: "https://foodcrudserver-1qt6xwwyp-developermustafas-projects.vercel.app/api",
});

export default api;
