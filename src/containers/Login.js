import React, { useState } from "react"
import Header from "../components/Header"
import { useHistory } from "react-router-dom"
import axios from "axios"
import Footer from "../components/Footer"
import "./styles/Login.scss"

const Login = () => {
  const [form, setForm] = useState()
  const [message, setMessage] = useState()
  const history = useHistory()
  const proxy = "https://thingproxy.freeboard.io/fetch/"
  const url = "http://challenge-react.alkemy.org"


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if(typeof form.email == "undefined") {
      setMessage("Invalid email")
    } else if(!form.password) {
      setMessage("Invalid password")
    } else if(form.email !== "challenge@alkemy.org" || form.password !== "react") {
      setMessage("Wrong email or password")
    } else if(form.email === "challenge@alkemy.org" && form.password === "react") {
      setMessage("Logged")
      axios.post(proxy+url, JSON.stringify(form), {
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          localStorage.setItem("token" ,res.data.token)
          history.push("/")
        })
        .catch(err => {
          alert("Login error")
        })
    }
  }

  return(
    <>
      <Header isLogin/>
      <main className="Container">
        <div className="Black-filter"></div>
        <div className="Form__container">
          <form onSubmit={handleSubmit}>
            <div>
              <input onChange={handleChange} required type="email" name="email" placeholder="Email"/>
              <input onChange={handleChange} required type="password" name="password" placeholder="Password"/>
              <div className="Button__wrapper">
                <span className={message == "Logged" ? "Error-message login" : "Error-message"}>{message}</span>
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Login