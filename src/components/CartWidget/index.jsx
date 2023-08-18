import { useContext } from 'react';
import './index.css';
import { CartContext } from '../../context/CartContext';

function CartWidget () {
    const { cartQuantity } = useContext(CartContext)
    return(
        <button className='d-flex align-items-center'>
            <i className='fa-solid fa-cart-shopping'></i>
            { cartQuantity() > 0 && <p id="contador">{cartQuantity()}</p> }
        </button>
    )
}

export default CartWidget;