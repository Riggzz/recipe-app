import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AdBanner from './AdBanner'
import RecipeCard from '../../elements/RecipeCard'
import axios from 'axios'
import './search.css'




const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([]) 
  const [search, setSearch] = useState("");

  const getRecipes = () => {
  
    axios
    .get('https://recipes.devmountain.com/recipes')
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
  }
  
  useEffect(() => {
    getRecipes()
  },[])
  
const recipeDisplay = recipes
  .filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = search.toLowerCase()
    return title.includes(searchParams)
  }).map((recipe, index) => {
    return <RecipeCard recipe={recipe} key={recipe.recipe_id}/>
  })

  return (
    <div>
      <AdBanner />
      <RecipeCard />
    <div>
      <img className='search_icon' src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png'/>
      <input 
        className='search_bar'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search recipes...'></input>
    </div>
      {recipeDisplay}
    </div>
  )
}

export default HomeScreen