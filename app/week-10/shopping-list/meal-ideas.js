"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const loadMealIdeas = async () => {
            if (ingredient) {
                const fetchedMeals = await fetchMealIdeas(ingredient);
                setMeals(fetchedMeals);
            }
        };
        loadMealIdeas();
    }, [ingredient]);


    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}  className="flex items-center space-x-4">
                        <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}