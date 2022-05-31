import React from 'react'
import "./Footer.css"


const Footer = () => {
    const año = new Date
    const year = año.getFullYear()
  return (
    <div className='footer-container'>
       <div className='UL-container'>
           <ul className='UL'>
               <li>terms and conditions</li>
               <li>work with us</li>
               <li>insurance information</li>
               <li>FAQ</li>
            </ul>
        </div>
        <h2 className='rights-reserved'>all rights reserved © - {year} </h2>
    </div>
  )
}

export default Footer