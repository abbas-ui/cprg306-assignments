"use client"
import { useState,useEffect } from 'react';




async function fetchMealIdeas( ingredient ) {


    let apiEnd = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='+ingredient;
    try {
        const response = await fetch(apiEnd);
        const data = await response.json();
        console.log(data.meals);
        return data.meals;
    } catch (error) {
        console.error("Error:", error);
    }
};

export function LoadMealIdeas( {ingredient} ) {

    const [meals,setMeals] = useState([]);
    console.log('Finding recipes for: '+ingredient);

    useEffect(() => {
        async function loadMealIdeasAsync() {
          const mealData = await fetchMealIdeas(ingredient);
          setMeals(mealData);
        }
    
        loadMealIdeasAsync();

    },[ingredient]);


    if (ingredient == 'defualt') {
        return(
            <div className="p-4 m-4 w-auto border rounded-lg bg-gray-900">
                <p className="text-lg text-gray-200 font-semibold">Select an item to see recipes.</p>
            </div>
        )
    }else{

        if (!meals || meals.length === 0) {

        return (
            <div className="p-4 m-4 w-auto border rounded-lg bg-gray-900">
                <p className="text-lg text-gray-200 font-semibold">No Recipes found for {ingredient}</p>
            </div>
        );

        }else{
            return (
                <div className="p-4 m-4 w-auto border rounded-lg bg-gray-900">
                    <p className="text-lg text-gray-200 font-semibold">Recipes ideas for {ingredient}</p>
                    <ul className='list-disc m-4'>
                        {meals.map((meal,index) => (
                            <li className="text-gray-200" key={meals[index].idMeal}>{meals[index].strMeal}</li>
                        ))}
                    </ul>
                </div>
            );
        }
        
    }
}