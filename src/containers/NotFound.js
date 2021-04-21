import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import useHeroes from "../hooks/useHeroes"


const NotFound = () => {
  const { state } = useContext(AppContext)
  const xd = "i"
  const heroes = useHeroes(`https://superheroapi.com/api/4323813290981998/search/${xd}`)
  console.log(heroes)
  return <h1>Not Found</h1>
}

export default NotFound