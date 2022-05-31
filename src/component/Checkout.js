import "./Checkout.css"
import { useContext } from "react"
import { contexto } from "../App"
import Header from "./Header"
import Footer from "./Footer"



const Checkout = () => {

  const { item, setItem} = useContext(contexto)


function total(item){
  return item?.reduce((saldo, it)=> it.price + saldo, 0 )
}


function eliminar(smallId){
  setItem(prev => {
    return prev.filter(prod => prod.smallId !== smallId)
  })
 
}
console.log(item)

  return (
    <div> 
      <Header />
    
    <div className="checkout">
     
        <div className="lado-izquierdo">
          <h2>your shopping list</h2> 
         {item.length === 0 && <h3 className="empty-cart-alert">is now empty</h3>}
      
      <div className="items-container">
      {item.map((it)=>{
        return <div key={it.smallId} className="checkout-item-box">
           <img src={it.image} alt="it.nombre" className="imagen-checkout"/>
           <div className="checkout-data-box">    
             <h1>{it.title} </h1>
             <div className="checkout-stats">
              <p className="price">{"price: $" + it.price} </p>
             
             </div>
             <button onClick={()=> eliminar(it.smallId)} className="delete-buttom">DELETE</button></div>
            </div>
      } )}
      </div>
      </div>


      
      <div className="lado-derecho">
          <div className="subtotal-box">
              <p>subtotal ({item.length} items) : <span>${total(item)} </span></p>
              
              <button className="boton-checkout">proceed to checkout</button>
          </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Checkout