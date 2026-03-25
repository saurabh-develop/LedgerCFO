export default function TaskFilters({
  search,
  setSearch,
  status,
  setStatus,
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="flex gap-3 p-4 bg-gray-50 border-b">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="border p-2 rounded w-1/3"
      />

      <select
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Category</option>
        <option value="Tax">Tax</option>
        <option value="Compliance">Compliance</option>
      </select>

      <select
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Sort</option>
        <option value="due_asc">Due ↑</option>
        <option value="due_desc">Due ↓</option>
      </select>
    </div>
  );
}
