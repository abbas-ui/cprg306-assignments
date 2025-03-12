import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-600">
        Shopping List
      </h1>
      <div className="p-4 border-gray-200">
        <ItemList />
      </div>
    </main>
  );
} 