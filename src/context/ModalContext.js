import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

//create Context
export const ModalContext = createContext()

const ModalProvider = (props) => {
//State of Provider, save, leder submit
const [idrecipe, setIdRecipe] = useState(null)

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