import axios from "axios";

const API_BASE_URL = "https://ihdtaolmhmbosoqsmlgb.supabase.co/rest/v1/";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZHRhb2xtaG1ib3NvcXNtbGdiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDQyMjcyNCwiZXhwIjoyMDU1OTk4NzI0fQ.m4Uwh1MfNkYqSPHD5k2qrfRMOAYHwE76RDvexu3eOjg"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "apikey": API_KEY,
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
