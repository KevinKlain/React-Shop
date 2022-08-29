


const Product = (props) => {

    return(
        <div>
            <h3>{props.title}</h3>
            <img src={props.image}/>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default Product;