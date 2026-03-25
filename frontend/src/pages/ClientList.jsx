import { useState } from "react";

export default function ClientList({
  clients,
  selected,
  onSelect,
  onAddClient,
}) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [entityType, setEntityType] = useState("");

  const handleSubmit = () => {
    if (!name) return;

    onAddClient({
      company_name: name,
      country,
      entity_type: entityType,
    });

    setName("");
    setCountry("");
    setEntityType("");
    setShowForm(false);
  };

  return (
    <div className="w-1/4 bg-white border-r flex flex-col">
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Clients</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
        >
          + Add
        </button>
      </div>

      {showForm && (
        <div className="p-4 border-b bg-gray-50 rounded-md m-3 shadow-sm space-y-3">
          <input
            placeholder="Company Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            placeholder="Entity Type (e.g. Pvt Ltd)"
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
            className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm"
            >
              Save
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        {clients.length === 0 && (
          <p className="p-4 text-sm text-gray-500">No clients yet</p>
        )}

        {clients.map((c) => (
          <div
            key={c._id}
            onClick={() => onSelect(c)}
            className={`p-3 mx-2 my-1 rounded-md cursor-pointer transition
              ${
                selected?._id === c._id
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "hover:bg-gray-100"
              }`}
          >
            <p className="text-sm">{c.company_name}</p>
            <p className="text-xs text-gray-500">
              {c.country || "—"} • {c.entity_type || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
