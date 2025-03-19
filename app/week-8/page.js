"use client"; // Required for using hooks in Next.js

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to handle item selection
  const handleItemSelect = (itemName) => {
    // Clean up the item name (remove size, emoji, etc.)
    const cleanedItemName = itemName
      .split(",")[0]
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "")
      .trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={(newItem) => setItems([...items, newItem])} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 p-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
} 