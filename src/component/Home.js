import "./Home.css"
import Producto from "./Producto"
import Header from "./Header"
import Footer from "./Footer"




const Home = () => {


  

  return (
    <div className="home">
      <Header />
       <div className="home_container">
        <Producto />
       </div>
       <Footer />
    </div>
  )
}

export default Home

//https://fakestoreapi.com/products

