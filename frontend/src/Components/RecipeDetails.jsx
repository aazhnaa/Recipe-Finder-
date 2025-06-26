import React, { useEffect, useState } from 'react';
import { FaBowlFood } from "react-icons/fa6";
import { getRecipeById } from '../services/api.js';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const {id} = useParams(); 
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const res = await getRecipeById(id);
        setRecipe(res); // Use only the first recipe
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    loadRecipes();
  }, [id]);

//   const summary = recipe.summary || "No summary available.";
//     const plainSummary = getPlainText(summary);

  // While loading
  if (!recipe) return <div className="p-6 text-xl">Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col gap-4 p-6">
      <h1 className="text-4xl font-bold text-start">{recipe.title}</h1>

      <div className="flex justify-center items-center w-full">
        <img
          src={recipe.image}
          className="object-cover rounded-lg"
          alt={recipe.title}
        />
      </div>

      <h2 className="text-2xl text-red-950 font-bold">
        Ready in:{" "}
        <span className="text-xl font-normal text-black">
          {recipe.readyInMinutes}
        </span>{" "}
        minutes
      </h2>

      <h2 className="text-2xl text-red-950 font-bold">
        Servings:{" "}
        <span className="text-xl font-normal text-black">
          {recipe.servings}
        </span>
      </h2>

      

      <div className="w-3/4 mx-auto gap-4 flex flex-col">
      <h2 className="text-2xl text-red-950 font-bold">Summary:</h2>
      <div
        className="text-base text-black"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />
        <ul className="text-2xl text-red-950 font-bold">
          Ingredients
          <li className="text-xl font-normal text-black">
            {recipe.extendedIngredients?.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaBowlFood className="text-red-950" />
                <span>{ingredient.aisle}</span>
              </div>
            ))}
          </li>
        </ul>

        <ul className="text-2xl text-red-950 ">
          Instructions
          <li className="text-xl font-normal text-black">
            {recipe.analyzedInstructions[0]?.steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-2">
                
                <span className='font-bold flex gap-2 items-center'>Step {step.number}</span>
                <span>{step.step}</span>
              </div>
            ))}
          </li>        
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
