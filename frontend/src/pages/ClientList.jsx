export default function ClientList({ clients, selected, onSelect }) {
  return (
    <div className="w-1/4 border-r bg-white">
      <h2 className="p-4 font-semibold">Clients</h2>
      {clients.map((c) => (
        <div
          key={c._id}
          onClick={() => onSelect(c)}
          className={`p-3 cursor-pointer 
            ${selected?._id === c._id ? "bg-blue-100" : "hover:bg-gray-100"}`}
        >
          {c.company_name}
        </div>
      ))}
    </div>
  );
}
