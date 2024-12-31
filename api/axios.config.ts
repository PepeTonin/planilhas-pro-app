import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL_MAIN_API;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
