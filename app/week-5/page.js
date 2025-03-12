import NewItem from "./new-item.js";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <NewItem />
      </div>
    </div>
  );
} 