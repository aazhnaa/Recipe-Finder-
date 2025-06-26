const API_KEY="22547f39d7d54c0b8dfac71f71042789";
const BASE_URL="https://api.spoonacular.com/recipes";

// export const getRandomRecipes = async() =>{
//     const res = await fetch('/recipes.json')
//     const data = await res.json();
//     return data.recipes;
// }

export const getRandomRecipes = async () => {
    const res = await fetch(`${BASE_URL}/random?apiKey=${API_KEY}&number=6`)
    const data = await res.json();
    console.log(data);
    return data.recipes;
}

export const searchRecipes = async (query) => {   
    const res = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(query)}&number=6`);
    console.log(encodeURIComponent(query));
    const data = await res.json();
    return data.results;
}

export const getRecipeById = async(recipeId) =>{
    const res = await fetch(`${BASE_URL}/${recipeId}/information?apiKey=${API_KEY}`);
    const data = await res.json();
    return data;
}