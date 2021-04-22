import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StrongStat from "../components/StrongStat"
import CharacterCard from "../components/CharacterCard"
import StatsList from "../components/StatsList"
import "./styles/Home.scss"
import AppContext from "../context/AppContext"


const Home = () => {
  const { state, Team } = useContext(AppContext)
  // if(!Object.keys(state.User).length) {
  //   return <Redirect to="/login" />
  // } 
    return <>
      <Header/>
        <main className="Container">
          <div className="Black-filter"></div>
          <StrongStat />
          <div className="Character__grid">{
            Team.team.map(item => {
              return <CharacterCard {...item} key={item.id} isTeam/>
            })
          }</div>
          <StatsList />
        </main>
      <Footer />
    </>
}

export default Home