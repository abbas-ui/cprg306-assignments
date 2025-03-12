"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const updateQuantity = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity >= 1 && newQuantity <= 20 ? newQuantity : prevQuantity;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    const newItem = { name, quantity, category };

    
    onAddItem(newItem);

    
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block font-medium">Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        
        <div>
          <label className="block font-medium">Quantity</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => updateQuantity(-1)}
              disabled={quantity === 1}
              className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
            >
              -
            </button>
            <span className="px-4 py-2 border rounded-md">{quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(1)}
              disabled={quantity === 20}
              className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
            >
              +
            </button>
          </div>
        </div>

        
        <div>
          <label className="block font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}