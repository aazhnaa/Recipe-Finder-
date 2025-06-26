import React from 'react'
import { useRecipeContext } from '../Contexts/RecipeContext.jsx'
import RecipeCard from '../Components/RecipeCard.jsx';
const Favorites = () => {
  const {favorites} = useRecipeContext();
  // const storedFavs = localStorage.getItem("fav")
  // const favorites = JSON.parse(storedFavs) || []
  // console.log(favorites);
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-bold mb-4">Your favorite recipes </h1>
          {favorites.length > 0 ? (
          <div className="grid grid-cols-3 grid-rows-2 gap-4 p-6 ">
            {favorites.map((recipe)=>(
              <RecipeCard key={recipe.id} recipe={recipe}/>
            ))}
          </div>
      ) : (
        <p className='text-lg font-bold text-red-950'>No favorites yet!  </p>
      )}
        </div>
    </>
  );
}

export default Favorites
