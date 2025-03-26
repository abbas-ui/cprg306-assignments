"use client"
import { useState } from 'react';
import Item from "./item";



function ItemList( {items, onItemSelect} ) {

    const [sortBy, setSortBy] = useState("name");

    const sortSetName = () => {
        setSortBy("name");
    }

    const sortSetCategory = () => {
        setSortBy("category");
    }

    const sortSetQuantity = () => {
        setSortBy("quantity");
    }

    let itemsCopy = [...items];

    itemsCopy.sort((a, b) => {
        const nameA = a[sortBy];
        const nameB = b[sortBy];
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        });
    
        return (
            <div>
                {itemsCopy.map((item, index) => (
                    <Item key={index} item={item} onItemSelect={onItemSelect} />
                ))}
            </div>
        );
    }