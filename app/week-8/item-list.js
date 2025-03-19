"use client"; // Required for using hooks in Next.js

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 p-2 ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}