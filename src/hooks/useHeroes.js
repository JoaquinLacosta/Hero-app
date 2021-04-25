import { useState, useEffect } from "react"
import axios from "axios"

const useHeroes = (api) => {
  const [heroes, setHeroes] = useState()
  useEffect(() => {
    axios({
      url: api,
      method: "GET"
    })
      .then(data => {
        if(data.status == 200) {
          setHeroes(data.data)
        }
      })
      .catch(err => {
        alert("Error calling api")
      })
  }, [api])

  return heroes
}

export default useHeroes