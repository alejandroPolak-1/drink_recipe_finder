import React, {useContext} from 'react';
import Recipe from './Recipe'
import { RecipesContext } from '../context/RecipesContext'

const RecipesList = () => {

    //extract Recipes
    const { recipes }= useContext(RecipesContext)

    return (<div className="row">
        {recipes.map(recipe =>(
                <Recipe key={recipe.idDrink} recipe={recipe} />
        ))}
    </div>  );
}
 
export default RecipesList;