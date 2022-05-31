
import "./Login.css"
import { useState, useContext } from 'react'
import { contexto } from '../App'
import { useNavigate } from "react-router-dom"


const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const {setUser, setLoged} = useContext(contexto)

  const navigate = useNavigate()

  return (
   
      <div className='login_container'>
        <div className="card-login">
        <div className='title-container'>
          <h1>USER LOGIN</h1>
          </div>
          <form className='form'>
              <div className='inputs'>
                <div className="data-container">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" value={email} id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="data-container">
                  <label htmlFor="password">password</label>
                  <input type="password" value={password} id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
              </div>
              <div  className='buttons'>
                <button type="submit" className='submit-buttom' onClick={(e)=>{
                  e.preventDefault()
                   setUser(email)
                   setLoged(true)
                   setPassword("")
                   setEmail("")
                   navigate("/")}
                  
                   }>submit</button>
                
              </div>
          </form>
          </div>
      </div>
   
  )
}

export default Login