import { useState } from "react";

export default function AddTaskForm({ clientId, onAdd }) {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    due_date: "",
    priority: "Medium",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.category || !form.due_date) {
      alert("Please fill all required fields");
      return;
    }

    onAdd({
      ...form,
      client_id: clientId,
    });

    setForm({
      title: "",
      description: "",
      category: "",
      due_date: "",
      priority: "Medium",
    });

    setShow(false);
  };

  return (
    <div className="border-t p-4 bg-white">
      {/* Button */}
      <button
        onClick={() => setShow(!show)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        + Add Task
      </button>

      {/* Form */}
      {show && (
        <form
          onSubmit={submit}
          className="mt-4 bg-gray-50 p-5 rounded-lg shadow-sm space-y-4"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Task Title</label>
            <input
              id="title"
              placeholder="Enter task title"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter task description"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Row */}
          <div className="flex gap-4">
            {/* Category */}
            <div className="w-1/3">
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                id="category"
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
              >
                <option value="">Select</option>
                <option value="Tax">Tax</option>
                <option value="Compliance">Compliance</option>
                <option value="Filing">Filing</option>
              </select>
            </div>

            {/* Due Date */}
            <div className="w-1/3">
              <label className="block text-sm font-medium mb-1">Due Date</label>
              <input
                id="due_date"
                type="date"
                value={form.due_date}
                onChange={(e) => handleChange("due_date", e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            {/* Priority */}
            <div className="w-1/3">
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select
                id="priority"
                value={form.priority}
                onChange={(e) => handleChange("priority", e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md">
              Save Task
            </button>

            <button
              type="button"
              onClick={() => setShow(false)}
              className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
