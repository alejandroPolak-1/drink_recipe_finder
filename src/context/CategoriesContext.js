import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

//Create the Context
export const CategoriesContext = createContext()

//Privider is where the functions and states meet
const CategoriesProvider= (props) => {

//create state of Context
const [categories, setCategories] = useState([])

//ejecute the call to api
useEffect(() => {
    const getCategories = async() =>{
        const url= 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

        const categories= await axios.get(url)
        setCategories(categories.data.drinks)
    }
    getCategories()
},[])

return(
    <CategoriesContext.Provider
    value={{ categories }}
    >
        {props.children}
    </CategoriesContext.Provider>
)
}

export default CategoriesProvider