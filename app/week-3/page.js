import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-4 bg-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
} 