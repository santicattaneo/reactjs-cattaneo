import React, { useContext } from 'react';
import './index.css';
import { CartContext } from '../../context/CartContext';

const CartItem = ({item}) => {
    const { deleteItem } =useContext(CartContext)
    return (
        <div className='row mt-3 cardItemCart d-flex align-items-center'>
            <div className='col-1'>
                <img className='img-fluid' src={item.img} alt={item.nombre}/>
            </div>
            <div className='col-4'>
                <p>{item.nombre}</p>
            </div>
            <div className='col-3'>
                <p>{item.quantity}</p>
            </div>
            <div className='col-3'>
                <p>AR$ {item.precio}</p>
            </div>
            <div className='col-1'>
                <button onClick={()=>deleteItem(item.id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem