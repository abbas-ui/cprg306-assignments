"use client";
import { useState } from 'react';
import Item from "./item";

export default function ItemList({items,onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = () => { return [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.category.localeCompare(b.category);
  });
};
  
  return (
    <div>
      <div className="mb-4 ml-100 flex  justify-center items-center gap-2">
      <button className={"p-2 rounded " + (sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200")} onClick={() => setSortBy("name")}>Sort by Name</button>
      <button className={"p-2 rounded " + (sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200")} onClick={() => setSortBy("category")}>Sort by Category</button>
      </div>
      <ul className="space-y-4 max-w-lg mx-auto">
        {sortedItems().map(item => <Item key={item.id} {...item}  onSelect={onItemSelect} />)}
      </ul>
    </div>
  );
}