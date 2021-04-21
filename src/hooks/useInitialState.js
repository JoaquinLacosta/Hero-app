import { useState } from "react"
import initialState from "../initialState"

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  
  const setUser = (data) => {
    setState({
      ...state,
      User: data
    })
  }

  return {
    state,
    setUser
  }
}

export default useInitialState