import React, {createContext, useState} from 'react';

//Create the Context
export const CategoriesContext = createContext()

//Privider is where the functions and states meet
const CategoriesProvider= (props) => {

//create state of Context
const [example, setExample] = useState("Hello, How are you?")

return(
    <CategoriesContext.Provider
    value={{ example }}
    >
        {props.children}
    </CategoriesContext.Provider>
)
}

export default CategoriesProvider