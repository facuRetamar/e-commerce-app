import "./Producto.css"
import { contexto } from "../App"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"

const Producto = (  ) => {
  


  const { setItem, arrayDeProductos, loged} = useContext(contexto)
  const identificador = uuid()
  const smallId = identificador.slice(0,8)
  const navigate = useNavigate()


  

  return (
    <div className="producto">
    
      {arrayDeProductos.map( product=>{
        return <div key={product.id} className={"product-card"} >
           <div className="data-container">
        <Link to={`${product.id}`} className="link-imagen">
        <img src={product.image} alt="" className="imagen"/>
      </Link>
          <h3 className="nombre">{product.title} </h3>
          <div className="data-producto">
            <p className="precio"> {"price: $" + product.price} </p>
           
           <p>{"rating: " + product.rating.rate} </p>
         
          </div>
      </div>
      <div className="contenedor-boton">
        <button className="boton-agregar" onClick={ ()=>{
            loged ? 
          setItem(prev => {
            return [...prev, {title: product.title,
                               id: product.id, 
                              rating:product.rating.rate,
                             price: product.price,
                              smallId: smallId,
                              image: product.image
                             } ]
         }) : navigate(`/modal`)
         
         }}>agregar al carrito</button>
        </div>


      </div>
      } )
      
      
      }
      
 



    </div>
  )
}

export default Producto