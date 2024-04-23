const POI_URL = "https://w2pcommunity.tpv7q9c17jna6.eu-west-3.cs.amazonlightsail.com/api";
const POI_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlUb2tlbklkIjoyNzEsInVzZXJJZCI6MTg0LCJlbWFpbCI6InNob3dyb29tZGVtb0BlZmkuY29tIiwiY29tcGFueUlkIjoiMzgxNzRiNzAtMTQ5My00YmFjLTliYzItNDQ4NjZjNjhjM2JlIiwiaWF0IjoxNzEzODAzMjIxfQ.53gKDXkoiQsWgsAWkeDeokjxCqDo_cvUzL1vVoL3Aek";
import axios from "axios";

const http = axios.create({
  baseURL: POI_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${POI_TOKEN}`,
  },
});
export async function getMaterials() {
  return await http.get("/materials").then((response) => response.data.data);
}
