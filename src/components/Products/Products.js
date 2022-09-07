import './Products.css';

const Products = (props) => {

    return(
        <div className='products'>
            <img src={props.image}/>
            <div className='description'>
                <h3>{props.title}</h3>
                <p>{props.category}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Products;