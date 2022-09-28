import './Cart.css';

const Cart = (props) => {

    return(
        <div>
            <h1>Cart</h1>
            {props.cartProducts.map( item => (
                <div>
                    <h1>{item.title}</h1>
                    <img src = {item.image} />
                    <p>{item.price}</p>
                </div>
            ))};
            
        </div>

    );
}

export default Cart;