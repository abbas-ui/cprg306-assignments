"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import { getItems, addItem } from "../_services/shopping-list-service";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context"; 
export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth(); 

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { ...newItem, id: newItemId }]);
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim().replace(/\p{Emoji}/gu, "");
    setSelectedItemName(cleanedName);
  };

  const loadItems = async () => {
    if (user && user.uid) { 
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    if (user && user.uid) { 
      loadItems();
    }
  }, [user]);

  return (
    <main className="bg-black p-8">
      <div>
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}