export default function TaskList({ tasks, onStatusChange }) {
  const today = new Date();

  return (
    <div className="p-4 space-y-3">
      {tasks.map((task) => {
        const overdue =
          task.status === "Pending" && new Date(task.due_date) < today;

        const isCompleted = task.status === "Completed";

        return (
          <div
            key={task._id}
            className={`p-4 rounded-lg border shadow-sm transition
              ${
                overdue
                  ? "bg-red-100 border-red-400"
                  : isCompleted
                    ? "bg-green-50 border-green-300"
                    : "bg-white"
              }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              {/* Title */}
              <h3
                className={`font-semibold ${
                  isCompleted ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </h3>

              {/* Status Badge */}
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium
                  ${
                    isCompleted
                      ? "bg-green-200 text-green-800"
                      : overdue
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                  }`}
              >
                {isCompleted ? "Completed" : overdue ? "Overdue" : "Pending"}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-1">{task.description}</p>

            {/* Meta Info */}
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
              <span>{task.category}</span>
              <span>Due: {new Date(task.due_date).toDateString()}</span>
            </div>

            {/* Action Button */}
            <div className="mt-3">
              <button
                disabled={isCompleted}
                onClick={() =>
                  onStatusChange(
                    task._id,
                    isCompleted ? "Pending" : "Completed",
                  )
                }
                className={`px-3 py-1 rounded text-sm
                  ${
                    isCompleted
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
              >
                {isCompleted ? "Completed" : "Mark as Done"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
