import type { AxiosInstance } from "axios";
import axios from "axios";

const APIENDPOINT: Record<string, string> = {
  user: "user",
  product: "product",
};
export type APIENDPOINT = (typeof APIENDPOINT)[keyof typeof APIENDPOINT];

const BASE_URL = import.meta.env.VITE_API_UR;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
