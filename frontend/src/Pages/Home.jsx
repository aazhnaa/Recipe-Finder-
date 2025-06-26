import React, { useEffect, useState } from 'react'
import RecipeCard from '../Components/RecipeCard'
import { getRandomRecipes, searchRecipes } from '../services/api';
import { FiLoader } from "react-icons/fi";



const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const loadRecipes = async()=>{
            try {
                const randomRecipes = await getRandomRecipes();
                setRecipes(randomRecipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setError("Failed to load recipes. Please try again later.");
            }
            finally{
                setLoading(false);
            }
        }
        loadRecipes();
        
    },[])
    //console.log(recipes);
    const handleSearch = async(e)=>{
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;
        setLoading(true);
        try {
          const searchResults = await searchRecipes(searchQuery);
          setRecipes(searchResults);
          setError(null);
        } catch (error) {
          console.error("Error searching recipes:", error);
          setError("Failed to search recipes. Please try again later.");
        }        
        finally{
          setLoading(false);
        }
        setSearchQuery("")
    }
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <form
          className="p-6 justify-center items-center flex flex-col w-full"
          onSubmit={handleSearch}
        >
          <div className="w-full flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Search recipe"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input p-4 w-1/3 rounded-lg"
            />
            <button
              type="submit"
              className="btn bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-900"
            >
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 p-6 ">
          {loading ? (
            <div className='w-full h-full flex flex-col justify-center items-center'> <FiLoader className='animate spin-10'/></div>
          ) : (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home
