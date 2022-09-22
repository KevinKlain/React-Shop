import './Products.css';
import { Link } from 'react';

const Products = (props) => {

    return(
        <Link to={`/products/${props.id}`}>
        <div className='products'>
            <img src={props.image} alt={props.title}/>
            <div className='description'>
                <h3>{props.title}</h3>
                <p>{props.category}</p>
                <p>{props.price}</p>
            </div>
        </div>
        </Link>
    )
}

export default Products;