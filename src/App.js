import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


const App = () => {

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (productsToAdd) => {
    
    setCartProducts([...setCartProducts, productsToAdd]) 
     
  }

  return(
  <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/products' element={<Homepage />} />
      <Route exact path='/products/:id' element={<ProductDetails addToCart = {addToCart}/>}/> 
      <Route exact path='/cart' element={<Cart cartProducts = {cartProducts}/>}/>
      <Route exact path='/contact' element={<Contact />}/>
      <Route exact path='*' element={<Navigate to='/' replace />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  </div>

  );
}

export default App; 


  
