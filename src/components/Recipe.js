import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

//material-ui (MOdal)
function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

//***Component**
const Recipe = ({ recipe }) => {
  //configuration of modal "material-ui"
  const [modalStyle] = useState(getModalStyle)
  //open o clouse Modal
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const { idDrink, strDrink, strDrinkThumb } = recipe

  //extrat value to context
  const { inforecipe, setIdRecipe, setRecipe } = useContext(ModalContext)
//   console.log(inforecipe)

  //for to see recipe
  const handleOnClick = () => {
    setIdRecipe(idDrink)
    handleOpen()
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header"> {strDrink}</h2>
        <img className="card-img-top" src={strDrinkThumb} alt={strDrink} />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleOnClick}
          >
            See Recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null)
              setRecipe({})
              handleClose()
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{inforecipe.strDrink}</h2>
              <h3 className="mt-4">Instruction</h3>
              <p> 
                  {inforecipe.strInstructions}
              </p>
              <img className="img-fluid my-4" src={inforecipe.strDrinkThumb} alt={inforecipe.srcDrink} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Recipe
