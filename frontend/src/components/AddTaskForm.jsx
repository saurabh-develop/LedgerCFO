import { useState } from "react";

export default function AddTaskForm({ clientId, onAdd }) {
  const [form, setForm] = useState({
    title: "",
    due_date: "",
    category: "",
  });

  const submit = (e) => {
    e.preventDefault();
    onAdd({ ...form, client_id: clientId });
  };

  return (
    <form onSubmit={submit} className="p-4 flex gap-2 border-t">
      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="border p-2 rounded"
      />

      <input
        type="date"
        onChange={(e) => setForm({ ...form, due_date: e.target.value })}
        className="border p-2 rounded"
      />

      <button className="bg-blue-600 text-white px-4 rounded">Add</button>
    </form>
  );
}
