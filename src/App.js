import { createContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import {Routes, Route} from "react-router-dom"
import Checkout from "./component/Checkout";
import Home from "./component/Home";
import Login from "./component/Login";
import Detalles from "./component/Detalles";
import ScaleLoader from "react-spinners/ScaleLoader";
import Modal from "./component/Modal";


export const contexto = createContext()


function App() {
  const [user, setUser] = useState("")
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(false)
  const [productoIndividual, setProductoIndividual] = useState([])
  const [arrayDeProductos, setArrayDeProductos] = useState([])
  const [loged, setLoged] = useState(false)

  useEffect(()=>{
    
    setLoading(true)

    axios.get("https://fakestoreapi.com/products")
        .then(respuesta => {
          setArrayDeProductos(respuesta.data)
         
        } )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
        console.log(arrayDeProductos)
  }, []  )

  





  return (

    loading ?  
    <div className='loading-screen'>
       <h1>Hold on a moment while the data is being fetch</h1>
    <ScaleLoader color={"#36D7B7"} loading={loading} size={100} />
     </div> : 


    <contexto.Provider value={{ item, setItem,
                                arrayDeProductos, setArrayDeProductos,
                                productoIndividual, setProductoIndividual,
                                loged, setLoged,
                                user, setUser}}>
      
    <div className="App">
    
  
    <Routes>
     <Route path="/" element={<Home />}/>
      <Route path="/checkout" element={<Checkout /> }  />
      <Route path="/login" element={<Login /> }  />
      <Route path="/:id" element={<Detalles/>}  />
      <Route path="/modal" element={<Modal />} />
      
    </Routes>
 
    
     
    </div>
    
    </contexto.Provider>
  );
}

export default App;
