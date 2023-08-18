import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem'
import './index.css'

const Cart = () => {
    const {cart, clear, total} = useContext(CartContext)
    return (
    <div>
        {cart.length ? 
        <div className='container mt-5'>
            <p className='total'>TOTAL: AR$ {total()}</p>
            <div className='mt-3'>
                {cart.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
            <div className='btnContainer'>
                <Link to="/checkout"className='btnCheckOut me-3'>TERMINAR COMPRA</Link>
                <button className='btnVaciar' onClick={clear}>VACIAR CARRITO</button>
            </div>
        </div>
        :
        <div className='container'>
            <div className='content mt-5 d-flex flex-column align-items-center'>
                <h1>TU CARRITO  ESTA VACIO</h1>
                <Link className='toHome' to='/'>IR AL CATALOGO</Link>
            </div>
        </div>}
    </div>
    )
}

export default Cart