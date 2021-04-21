import React, { useContext } from "react"
import "./styles/Header.scss"
import { Link } from "react-router-dom"
import AppContext from "../context/AppContext"

const Header = ({ isLogin, isTeam }) => {
  const { state } = useContext(AppContext)
  const hasUser = Object.keys(state.User).length
  return(
    <header className="Header">
      <div className="Header__title">
        <h2 className="Header__title-item">
        <Link to="/">Heroes App</Link>
        </h2>
      </div>
      <nav className="Header__nav">
        <ul className="Nav__list">
          <li className={isTeam ? "Nav__list-item selected" : "Nav__list-item"}>
            <Link to="/team">Team</Link>
          </li>
          <li className={isLogin ? "Nav__list-item selected" : "Nav__list-item"}>
            <Link to="/login">{!hasUser ? "Login" : "LogOut"}</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header