import { useState, useEffect } from "react"
import axios from "axios"

const useHeroes = (api) => {
  const [heroes, setHeroes] = useState()
  useEffect(() => {
    axios.get(api)
      .then(data => setHeroes(data))
  }, [api])

  return heroes
}

export default useHeroes