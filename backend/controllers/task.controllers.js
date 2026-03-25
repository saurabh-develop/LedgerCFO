import Task from "../models/Task.js";

export const getTasksByClient = async (req, res) => {
  try {
    const { search, status, category, sort } = req.query;

    let query = {
      client_id: req.params.clientId,
    };

    // 🔍 Search (title + description)
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // 📌 Status filter
    if (status) {
      query.status = status;
    }

    // 📂 Category filter
    if (category) {
      query.category = category;
    }

    // 🔽 Sorting
    let sortOption = {};

    if (sort === "due_asc") {
      sortOption.due_date = 1;
    }

    if (sort === "due_desc") {
      sortOption.due_date = -1;
    }

    const tasks = await Task.find(query).sort(sortOption);

    res.json(tasks);
  } catch (err) {
    console.error(err);
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
