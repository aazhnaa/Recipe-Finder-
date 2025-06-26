import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useRecipeContext } from "../Contexts/RecipeContext.jsx";
import { getPlainText } from "../lib/utils.js";
import {NavLink} from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const {isFavorite, addToFavorites, removeFromFavorites } = useRecipeContext();

  const isFav =  isFavorite(recipe.id);

  
  const handleShowMore = () => setIsMore(!isMore);

  function handleChangeFavorite(e) {
    e.preventDefault();
    if (isFav) removeFromFavorites(recipe.id);
    else addToFavorites(recipe);
  };

  const summary = recipe.summary || "No summary available.";
  const plainSummary = getPlainText(summary);

  return (
    <div className="max-w-sm max-h-sm p-2 rounded-lg overflow-hidden shadow-lg bg-white m-4 flex flex-col items-center">
      <button
        className="relative top-2 right-40 z-10"
        onClick={handleChangeFavorite}
      >
        <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-all duration-300">
          {isFavorite(recipe.id) ? (
            <FaHeart className="w-8 h-8 text-red-500" />
          ) : (
            <FaRegHeart className="w-8 h-8" />
          )}
        </div>
      </button>

      <img
        className="w-fit h-fit object-cover"
        src={recipe.image}
        alt="Recipe"
      />

      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{recipe.title}</p>

        <div className="text-gray-700 text-base">
          <span>{plainSummary.slice(0, 100)}...</span>{" "}
              <NavLink
                to={`/recipe/${recipe.id}`}
                onClick={handleShowMore}
                className="text-blue-700 hover:underline hover:text-blue-800"
              >
                More
              </NavLink>         
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
