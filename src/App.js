import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/product";
import axios from 'axios';

const App = () => {

const [products, setProducts] = useState([])
useEffect(() => {
  axios.get('https://fakestoreapi.com/products')
  .then(response => setProducts(response.data));
},[])

  return (
    <div>
    <Navbar />
    {products.map( item => 
      
        <Product
        title={item.title}
        image={item.image}
        description={item.description}
        price={item.price}
           />
      
    )}
    </div>
  );

}

export default App;
