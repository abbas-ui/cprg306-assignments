"use client"
import { use, useState } from "react";

export function NewItemCounter( {onAddItem} ) {



    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const Item = ( itemID, itemName, itemQuantity, itemCategory ) => {
        const ID = itemID;
        const Name = itemName;
        const Quantity = itemQuantity;
        const Category = itemCategory;
        return ({Name, Quantity, Category});
    };

    const add = () => {
        if (quantity < 20 ){
            setQuantity(quantity + 1);
        }else{
            alert("Can't add past 20");
        }
    };

    const sub = () => {
        if (quantity > 1 ){
            setQuantity(quantity - 1);
        }else{
            alert("Can't subtract past 1");
        }
    };

    // Handle form reset
    const resetForm = () => {
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    // Handle submit form
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form
        const newItem = { // Create new item and set values
            id: (Math.random()*10).toString(36).replace('.', ''),
            name: name,
            quantity: quantity,
            category: category,
        }
        onAddItem(newItem);
        console.log(JSON.stringify(newItem)); // Simple stringify output to console
        //alert("Name: " + newItem.Name + "\nQuantity: " + newItem.Quantity + "\nCategory: " + newItem.Category + "\nID: " + newItem.ID); // Nicer formatted output for the user in an alert
        resetForm();
    };

    return (
        <div className="flex flex row justify-around">
            <div className='flex flex-col justify-center p-5 bg-gray-900 rounded-lg border mb-10'>
                    <form action="/submit" method="post" className='flex flex-col w-screen-1/2 h-screen-1/2 items-center' onSubmit={handleSubmit}>
                        <div className="flex flex-row justify-around">
                            <div className='flex flex-col justify-center'>
                                <label className='p-2 my-2 mx-auto border rounded-lg bg-gray-900' htmlFor="name">Name</label>
                                    <input value={name} type="text" name="formName" required className='my-2 w-32 text-center text-black' onChange={e => setName(e.target.value)}/>
                                <label className='p-2 my-2 mx-auto border rounded-lg bg-gray-900' htmlFor="category">Category</label>
                                    <select value={category} className='my-2 w-32 text-center text-black' name="formCategory" onChange={e => setCategory(e.target.value)}>
                                        <option value="produce">Produce</option>
                                        <option value="dairy">Dairy</option>
                                        <option value="bakery">Bakery</option>
                                        <option value="meat">Meat</option>
                                        <option value="frozen foods">Frozen Foods</option>
                                        <option value="canned goods">Canned Goods</option>
                                        <option value="dry goods">Dry Goods</option>
                                        <option value="beverages">Beverages</option>
                                        <option value="snacks">Snacks</option>
                                        <option value="household">Household</option>
                                        <option value="other">Other</option>
                                    </select>
                            </div>
                    
                            <div className="flex flex-col w-screen-1/2 h-screen-1/2 justify-center items-center">
                                <p className="p-4 my-8 mx-auto border rounded-lg bg-gray-900 text-center">Quantity: {quantity}</p>
                                <div className="flex flex-row w-64 justify-around">
                                    <button type="button" className="p-4 my-2 mx-auto border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={add} disabled={quantity>=20}>Add +</button>
                                    <button type="button" className="p-4 my-2 mx-auto border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={sub} disabled={quantity<=1}>Sub -</button>
                                </div>
                            </div>
                        
                            <button className='p-2 my-20 mx-auto border rounded-lg bg-green-900 hover:bg-green-800' type="submit">Submit</button>
                        </div>
                    </form>
            </div>
        </div>
    );

};