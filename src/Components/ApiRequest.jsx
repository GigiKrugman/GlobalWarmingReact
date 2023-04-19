import axios from "axios";

const api = axios.create({ baseURL: "https://global-warming.org/api" });

export default api;
