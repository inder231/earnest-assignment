import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api"

export const baseAPI = axios.create({ baseURL: API_URL })