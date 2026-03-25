import { useEffect, useState } from "react";
import ClientList from "./pages/ClientList";
import TaskList from "./pages/TaskList";
import TaskFilters from "./components/TaskFilters";
import AddTaskForm from "./components/AddTaskForm";
import SummaryCards from "./components/SummaryCards";
import useDebounce from "./hooks/useDebounce";
import {
  getClients,
  getTasks,
  createTask,
  updateTask,
  createClient,
} from "./services/api";

export default function App() {
  const [clients, setClients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getClients().then((res) => setClients(res.data));
  }, []);

  useEffect(() => {
    if (!selected) return;

    const params = {};

    if (debouncedSearch) params.search = debouncedSearch;
    if (status) params.status = status;
    if (category) params.category = category;
    if (sort) params.sort = sort;

    console.log("FILTER PARAMS:", params);

    getTasks(selected._id, params).then((res) => setTasks(res.data));
  }, [selected, debouncedSearch, status, category, sort]);

  const handleAdd = async (data) => {
    await createTask(data);
    const res = await getTasks(selected._id);
    setTasks(res.data);
  };

  const handleAddClient = async (data) => {
    await createClient(data);
    const res = await getClients();
    setClients(res.data);
  };

  const handleStatus = async (id, status) => {
    await updateTask(id, status);
    const res = await getTasks(selected._id);
    setTasks(res.data);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <ClientList
        clients={clients}
        selected={selected}
        onSelect={setSelected}
        onAddClient={handleAddClient}
      />

      <div className="flex-1 flex flex-col">
        <TaskFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        <SummaryCards tasks={tasks} />

        <TaskList tasks={tasks} onStatusChange={handleStatus} />

        {selected && <AddTaskForm clientId={selected._id} onAdd={handleAdd} />}
      </div>
    </div>
  );
}
