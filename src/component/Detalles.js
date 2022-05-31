import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { contexto } from "../App"
import { v4 as uuid } from "uuid"
import "./Detalles.css"
import ScaleLoader from "react-spinners/ScaleLoader";
import Header from './Header'
import Footer from './Footer'


const Detalles = () => {
  const identificador = uuid()
  const smallId = identificador.slice(0,8)

  let navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  let parametro = useParams()
 
  const [productoIndividual, setProductoIndividual] = useState([])
  const [recomendado, setRecomendado] = useState([])
  const { setItem, arrayDeProductos, loged} = useContext(contexto)
  

  useEffect(()=>{
    setLoading(true)
    
  
    axios.get(`https://fakestoreapi.com/products/${parametro.id}`)
        .then(data => {
          setProductoIndividual(data.data)
        } )
        .catch(err => console.log(err))
       .finally(() => setLoading(false))
       console.log(productoIndividual)
  }, [parametro]  )



 const mostrarCategorias = () => {
  setRecomendado(arrayDeProductos.filter(i => i.category === productoIndividual.category && i.id !== productoIndividual.id))
  
  }

  useEffect(()=>{
    mostrarCategorias()
    console.log(recomendado)
  }, [productoIndividual])


  return (
    
    loading ?  
    <div className='loading-screen'>
      <h1>Hold on a moment while the data is being fetched</h1>
    <ScaleLoader color={"#36D7B7"} loading={loading} size={100} />
     </div>
    : 

    <div className='container'>
        <Header />
        <div className='main-product'>
          <div className="image-container">
           <img src={productoIndividual.image} alt={productoIndividual.title} className="imagen"/>
          </div>
        <div className="info-container">
        <p className='product-title'>{productoIndividual.title} </p>
       
        <p className='product-description'>{productoIndividual.description} </p>
       
       
        <p className='product-price'>{"price: $" + productoIndividual.price} </p>
       
       <button className="boton-agregar" onClick={ ()=>{
          loged ?   setItem(prev => {
            return [...prev, {title: productoIndividual.title,
                               id: productoIndividual.id, 
                             price: productoIndividual.price,
                              smallId: smallId,
                              image: productoIndividual.image
                             } ]
         }) : navigate(`/modal`)
              
        

         
         }}>Add to cart</button>
        </div>
        </div>
         <div className='recomendado-container'>
           <div className="titulo-container">
              <h2 className='recomendado-titulo'>Other items you might want to see</h2>
           </div>
        <div className='carousel'>
         
          {recomendado.map(i=> {
            return <div key={i.title} className="recomendado-card">
           <h2 key={i.title} className="recomendado-nombre">{i.title} </h2> 
            <div className='recomendado-image-container'>
              <img src={i.image} alt={i.title} className='recomendado-image' onClick={()=>{navigate(`/${i.id}`)} } />
            </div>
           
           </div>})}
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Detalles

/*36D7B7*/