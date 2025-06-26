import { useState, useEffect, createContext, useContext } from "react";
const RecipeContext = createContext();
export const useRecipeContext = () => useContext(RecipeContext);


//will provide the recipe context to the components wrapped inside it
export const RecipeProvider = ({children}) => {
    const [favorites, setFavorites] = useState(() => {
      const stored = localStorage.getItem("fav");
      try {
        return stored ? JSON.parse(stored) : [];
      } catch (err) {
        console.error("Failed to parse localStorage favs:", err);
        return [];
      }
    });

    useEffect(()=>{
        const storedFavs = localStorage.getItem("fav")
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem("fav",JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (recipe) => {
        setFavorites(prev=>[...prev,recipe])
    }

    // const addToFavorites = (recipe) => {
    //   if (!recipe || !recipe.id) {
    //     console.warn("Invalid recipe object:", recipe);
    //     return;
    //   }

    //   setFavorites((prev) => {
    //     const alreadyExists = prev.some((r) => r.id === recipe.id);
    //     if (alreadyExists) {
    //       console.log("Recipe already in favorites:", recipe.id);
    //       return prev;
    //     }

    //     const updated = [...prev, recipe];
    //     //console.log("Adding to favorites:");
    //     return updated;
    //   });
    // };

    const removeFromFavorites = (recipeId) => {
        setFavorites(prev=>prev.filter(recipe=>recipe.id!==recipeId))
    }

    const isFavorite = (recipeId)=>{
        return favorites.some(recipe=>recipe.id === recipeId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <RecipeContext.Provider value={value}>
        {children}
    </RecipeContext.Provider>
}