import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Modal.css"

const Modal = () => {

  const navigate = useNavigate()
  return (
    <div className='overlay'>
        <div className='modal-card'>
            <h2>you need to be loged in to purchase</h2>
            <div className="modal-buttons-containers">
            <Link to="/login" className='login-link'>
            <button className='login-button' >go to log-in</button>
            </Link>
            <button className='cancel-button' onClick={()=> navigate(-1)} >cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal