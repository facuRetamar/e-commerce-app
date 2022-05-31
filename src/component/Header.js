import "./header.css"

import { BsBasket2 } from "react-icons/bs"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../App"

const Header = () => {

  
  const {item, loged, user } = useContext(contexto)





  return (
      <div className="container-header">
       
    <div className="header">
        <Link to="/" className="link">
        <BsBasket2 className="icon-logo"/>
        <p>UrStore</p>
        </Link>
        
        
        <div className="login">
          {loged ? <p >hello, <br/> {user} </p> :  <Link to="/login" className="login-link">
                                      <h2 className="log_in">log in</h2>
                                    </Link>}
            
           
        </div>
   
        <div className="shopping-cart">
            <Link to="/checkout" className="link-cart-icon">
              <AiOutlineShoppingCart className="cart-icon"/>
              {item.length}
              </Link>
          
        </div>
       
    </div>
    </div>
  )
}

export default Header