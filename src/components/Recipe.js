import React, {useContext} from 'react'
import { ModalContext } from '../context/ModalContext'

const Recipe = ({ recipe }) => {
  const { idDrink, strDrink, strDrinkThumb } = recipe

  //extrat value to context
const { setIdRecipe } = useContext(ModalContext)

//for to see recipe
const handleOnClick = () =>{
    setIdRecipe(idDrink)
}

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header"> {strDrink}</h2>
        <img
          className="card-img-top"
          src={strDrinkThumb} 
          alt={strDrink}
        />
        
        <div className="card-body">
            <button 
            type="button"
            className="btn btn-primary"
            onClick={handleOnClick}
            >
                See Recipe
            </button>
        </div>
      </div>
    </div>
  )
}

export default Recipe
