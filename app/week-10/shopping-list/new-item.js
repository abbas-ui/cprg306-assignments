"use client";
import { useState } from 'react';
export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
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
      const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };
      return (
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-12">
          <h2 className="text-2xl font-bold text-black mb-6">Add New Item</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4"> 
            <label className="flex flex-col">
              <span className="font-semibold text-black">Item Name:</span>
              <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="border p-2 text-black rounded-lg w-full"
              />
            </label>


            <div className="flex items-center space-x-6">
              <button
              type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className="px-5 py-3 bg-blue-500 text-white rounded-xl disabled:bg-gray-400"
              >
                -
              </button>
              <span className="text-2xl font-semibold">{quantity}</span>
              <button
              type="button"
                onClick={increment}
                disabled={quantity === 20}
                className="px-5 py-3 bg-blue-500 text-white rounded-xl disabled:bg-gray-400"
              >
                +
              </button>
            </div>
            <label className="flex flex-col">
              <span className="text-black font-semibold">Category:</span>
              <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  className="border text-black p-2 rounded-lg w-full"
              >
                <option value="" disabled>Select a category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </label>
              <button 
                  type="submit" 
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                  Add Item
              </button>
          </form>
        </div>
      );
}