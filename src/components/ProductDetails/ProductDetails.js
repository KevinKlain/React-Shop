import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = (props) => {

    const [selectedProduct, setSelectedProduct] = useState();
    const { id } = useParams();

        useEffect( () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setSelectedProduct(response?.data) )
    }, []);

    return(
        <div>
            <h1>{selectedProduct?.title}</h1>
            <img src={selectedProduct?.image}/>
            <p>{selectedProduct?.price}</p>
            <p>{selectedProduct?.description}</p>
            <button onClick={() => props.addToCart(selectedProduct)}>Add to cart</button>
        </div>
    );
}

export default ProductDetails; 