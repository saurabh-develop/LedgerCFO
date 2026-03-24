import express from "express";
import { getClients } from "../controllers/client.controllers";
import {
  createTask,
  getTasksByClient,
  updateTaskStatus,
} from "../controllers/task.controllers";

const router = express.Router();

router.get("/clients", getClients);
router.get("/tasks/:clientId", getTasksByClient);
router.post("/tasks", createTask);
router.patch("/tasks/:id", updateTaskStatus);

export default router;
