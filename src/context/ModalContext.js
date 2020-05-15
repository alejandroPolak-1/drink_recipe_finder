import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

//create Context
export const ModalContext = createContext()

const ModalProvider = (props) => {
//State of Provider, save, leder submit
const [idrecipe, setIdRecipe] = useState(null)

const [recipe, setRecipe] = useState({})

//Once we have a recipe, leter click in card, consult API por id
useEffect(() =>{
        const getRecipe= async () =>{
            // it doesn't call if don't have a Id
            if(!idrecipe) return;

            const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`

                const result= await axios.get(url)
                setRecipe(result.data.drinks[0])
        }
        getRecipe()
}, [idrecipe])


    return (
        <ModalContext.Provider
        value ={{
            setIdRecipe

        }}
        >
            {props.children}
        </ModalContext.Provider>
      );
}
 
export default ModalProvider;