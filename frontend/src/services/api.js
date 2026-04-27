import axios from "axios";

let API = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

export default API;
