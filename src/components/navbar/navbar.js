import './Navbar.css'
import Input from '../Input/Input';

const Navbar = () => {
    
    return(
        <div>
            <nav className='nav'>
                <h1>FancyShop</h1>
                <ul className='link-list'>
                    <li>Womens's</li>
                    <li>Men's</li>
                    <li>Child's</li>
                    <li>Sport</li>
                </ul>
                <div>
                    <Input 
                    
                    type={"text"}
                    placeholder={"Search product name ..."}
                    />
                    <button>View Cart</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar; 
