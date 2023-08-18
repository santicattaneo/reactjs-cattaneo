<<<<<<< HEAD
import { useContext } from 'react';
import './index.css';
import { CartContext } from '../../context/CartContext';

function CartWidget () {
    const { cartQuantity } = useContext(CartContext)
    return(
        <button className='d-flex align-items-center'>
            <i className='fa-solid fa-cart-shopping'></i>
            { cartQuantity() > 0 && <p id="contador">{cartQuantity()}</p> }
=======
import './index.css';

function CartWidget () {
    return(
        <button className='d-flex align-items-center'>
            <i className='fa-solid fa-cart-shopping'></i>
            <p id="contador">0</p>
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
        </button>
    )
}

export default CartWidget;