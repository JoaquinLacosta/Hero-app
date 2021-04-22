import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import { Link } from "react-router-dom"
import "./styles/CharacterCard.scss"

const CharacterCard = (props) => {
  const { removeHero } = useContext(AppContext)

  const handleRemove = (id) => () => {
    removeHero(id)
  }

  return(
    <div className="Character__card">
      <div className="Image__wrapper" style={{backgroundImage: `url(${props.image.url})`}}>
      </div>
      <div className="Character__data-wrapper">
        <ul className="Character__data-list">
          <li className="Data__list-item">Name: {props.name}</li>
          <li className="Data__list-item">Intelligence: {props.powerstats.intelligence}</li>
          <li className="Data__list-item">Strength: {props.powerstats.strength}</li>
          <li className="Data__list-item">Speed: {props.powerstats.speed}</li>
          <li className="Data__list-item">Durability: {props.powerstats.durability}</li>
          <li className="Data__list-item">Power: {props.powerstats.power}</li>
          <li className="Data__list-item">Combat: {props.powerstats.combat}</li>
        </ul>
        <div className="Character__buttons">
          {
            props.isTeam ? <button onClick={handleRemove(props.id)} className="Character__buttons-remove">Remove from team</button>
            : <button onClick={handleRemove(props.id)} className="Character__buttons-remove">Add to team</button>
          }
          
          <Link to={`/${props.id}`} className="Details__button">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard