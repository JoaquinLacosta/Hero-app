import { useState, useEffect } from "react"
import axios from "axios"

const useHeroes = (api) => {
  const [heroes, setHeroes] = useState()
  useEffect(() => {
    axios.get(api)
      .then(data => {
        if(data.status == 200) {
          setHeroes(data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [api])

  return heroes
}

export default useHeroes