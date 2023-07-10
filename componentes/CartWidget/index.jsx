import './index.css';

function CartWidget () {
    return(
        <button className='d-flex align-items-center'>
            <i class="fa-solid fa-cart-shopping"></i>
            <p id="contador">0</p>
        </button>
    )
}

export default CartWidget;