"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  
  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]);
  };
  
  return (
    <main className="p-4 bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-600">Shopping List</h1>
      <div className="mb-6 p-4 bg-white shadow-md rounded-md">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="p-4 border-gray-200">
        <ItemList items={items} />
      </div>
    </main>
  );
}