import Task from "../models/Task.js";

export const getTasksByClient = async (req, res) => {
  try {
    const tasks = await Task.find({ client_id: req.params.clientId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
