import React from 'react'

const DetalleComponent = () => {
  return (
    <div>
    {recomendado.map(i=> {
      return <div key={i.title} >
     <h2 key={i.title} >{i.category} </h2> 
      
      <img src={i.image} alt="" onClick={()=>{navigate(`/${i.id}`)} } />
      
      <p>{i.id} </p>
     </div>})}
  </div>
  )
}

export default DetalleComponent