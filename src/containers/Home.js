import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AppContext from "../context/AppContext"


const Home = () => {
  const { state } = useContext(AppContext)
  // if(!Object.keys(state.User).length) {
  //   return <Redirect to="/login" />
  // } 
    return <>
      <Header isHome/>
      <Footer />
    </>
}

export default Home