import { useState, useEffect } from "react";
import Products from "../Products/Products";
import axios from 'axios';
import './Homepage.css';

const Homepage = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data));
    },[])

    

  return (
    <div className="homepage">
        
        {products.map( item => 
      
            <Products
            title={item.title}
            image={item.image}
            alt={item.title}
            category={item.category}
            price={item.price}
           />
      
        )}
    </div>
  );

}

export default Homepage;