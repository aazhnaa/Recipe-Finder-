import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import { RecipeProvider } from './Contexts/RecipeContext.jsx';
import { Routes, Route } from 'react-router-dom'
import RecipeDetails from './Components/RecipeDetails.jsx'
import Test from './Components/Test.jsx'
const App = () => {
  return (
    <>
      <RecipeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </RecipeProvider>
    </>
  );
}

export default App
