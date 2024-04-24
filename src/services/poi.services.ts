const POI_URL = import.meta.env.VITE_POI_URL;
const POI_TOKEN = import.meta.env.VITE_POI_TOKEN;
import axios from "axios";
import { Order } from "../types";

const http = axios.create({
  baseURL: POI_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${POI_TOKEN}`,
  },
});

const httpForm = axios.create({
  baseURL: POI_URL,
  headers: {
    "Content-type": "multipart/form-data",
    Authorization: `Bearer ${POI_TOKEN}`,
  },
});

export async function getMaterials() {
  return http.get("/materials").then((response) => response.data.data);
}
export async function createNewOrder(order: Partial<Order>) {
  return http.post("/orders", order).then((response) => response.data.data);
}
export function uploadOrderItemFile(orderId: number, file: File) {
  const formData = new FormData();
  formData.append("file", file);
  return httpForm.post(`/orderItems/${orderId}/uploadFile`, formData).then((response) => response.data.data);
}
