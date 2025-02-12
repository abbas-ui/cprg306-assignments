"use client";
import { useState } from 'react';

export default function NewItem() {
  
  const [quantity, setQuantity] = useState(1);

  
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}