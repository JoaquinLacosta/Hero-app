import React, { useState } from "react"
import useHeroes from "../hooks/useHeroes"
import { ImSearch } from "react-icons/im"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CharacterCard from "../components/CharacterCard"
import "./styles/Heroes.scss"

const Heroes = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState()
  const heroes = useHeroes(`https://superheroapi.com/api/4323813290981998/search/${search}`)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setResults(heroes.results)
  }

  return(
    <>
      <Header isHeroes/>
      <main className="Container">
        <div className="Black-filter"></div>
        <div className="Input__container">
          <form onSubmit={handleSubmit}>
            <div>
            <input placeholder="Search your favorite hero or villain!" onChange={handleChange} type="text" name="heroname" value={search}/>
            <button type="submit"><i>{ImSearch()}</i></button>
            </div>
          </form>
          {
            typeof results == "undefined" ? null
            : <div className="Character__grid">
                {results.map(item => <CharacterCard key={item.id} {...item}/>)}
              </div>
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Heroes