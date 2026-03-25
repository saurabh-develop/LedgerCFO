export default function SummaryCards({ tasks }) {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const overdue = tasks.filter(
    (t) => t.status === "Pending" && new Date(t.due_date) < new Date(),
  ).length;

  return (
    <div className="flex gap-4 p-4">
      <div className="bg-white p-4 shadow rounded w-32">Total: {total}</div>
      <div className="bg-yellow-100 p-4 shadow rounded w-32">
        Pending: {pending}
      </div>
      <div className="bg-red-100 p-4 shadow rounded w-32">
        Overdue: {overdue}
      </div>
    </div>
  );
}
