export default function TaskList({ tasks, onStatusChange }) {
  const today = new Date();

  return (
    <div className="p-4 space-y-2">
      {tasks.map((task) => {
        const overdue =
          task.status === "Pending" && new Date(task.due_date) < today;

        return (
          <div
            key={task._id}
            className={`p-4 rounded border shadow-sm 
            ${overdue ? "bg-red-100 border-red-400" : "bg-white"}`}
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{task.title}</h3>
              <button
                className="text-blue-600"
                onClick={() => onStatusChange(task._id, "Completed")}
              >
                Mark Done
              </button>
            </div>

            <p className="text-sm">{task.category}</p>
            <p className="text-xs text-gray-500">
              Due: {new Date(task.due_date).toDateString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
