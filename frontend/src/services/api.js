import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8001/api",
});

export const getClients = () => API.get("/clients");

export const getTasks = (clientId, params = {}) =>
  API.get(`/tasks/${clientId}`, { params });

export const createTask = (data) => API.post("/tasks", data);

export const updateTask = (id, status) => API.patch(`/tasks/${id}`, { status });
