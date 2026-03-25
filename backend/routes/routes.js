import express from "express";
import { addCLients, getClients } from "../controllers/client.controllers.js";
import {
  createTask,
  getTasksByClient,
  updateTaskStatus,
} from "../controllers/task.controllers.js";

const router = express.Router();

router.get("/clients", getClients);
router.get("/tasks/:clientId", getTasksByClient);
router.post("/tasks", createTask);
router.patch("/tasks/:id", updateTaskStatus);
router.post("/addClients", addCLients);

export default router;
