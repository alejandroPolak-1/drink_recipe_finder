import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipesContext = createContext()

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([])
  const [searchrecipes, setSearchRecipes] = useState({
    name: '',
    category: '',
  })
  //state save consult
  const [consult, setConsult] = useState(false)
  //make search state variables available
  const { name, category } = searchrecipes

  //get Recipes
  useEffect(() => {
    //conditional: for get recipe leter submit
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`

        const recipesResult = await axios.get(url)
        // console.log(recipes.data.drinks)
        setRecipes(recipesResult.data.drinks)
      }
      getRecipes()
    }
  }, [category, consult, name, searchrecipes])

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setSearchRecipes,
        setConsult,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider
