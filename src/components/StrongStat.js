import React, { useContext } from "react"
import AppContext from "../context/AppContext"
import "./styles/StrongStat.scss"

const StrongStat = () => {
  const { sumAllStats } = useContext(AppContext)
  const orderedStats = sumAllStats.sort((a, b) => b.value - a.value)
  return(
    <div className="Stats__powerful">
      <h2>Your teampower are based on: {orderedStats[0].name.toUpperCase()}</h2>
    </div>
  )
}

export default StrongStat
