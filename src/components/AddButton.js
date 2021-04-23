import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import "./styles/AddButton.scss"

const AddButton = (props) => {
  const { state, addVillain } = useContext(AppContext)
  const { Heroes, Villains } = state
  const { alignment } = props.biography
  const isHero = alignment === "good"
  const fullHeroes = Object.keys(Heroes).length === 3
  const fullVillains = Object.keys(Villains).length === 3

  return (
    <>
    {
      isHero ? <button onClick={props.onClick} disabled={fullHeroes} className="Character__buttons-add">{ fullHeroes ? "You cannot add more heroes" : "Add hero" }</button>
      : <button onClick={props.onClick} disabled={fullVillains} className="Character__buttons-add">{ fullVillains ? "You cannot add more villains" : "Add villain" }</button>
    }
  </>
  )
}

export default AddButton