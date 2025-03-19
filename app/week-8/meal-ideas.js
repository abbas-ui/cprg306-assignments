"use client"; // Required for using hooks in Next.js

import { useEffect, useState } from "react";

// Function to fetch meal ideas from TheMealDB API
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // UseEffect to call loadMealIdeas when the ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}