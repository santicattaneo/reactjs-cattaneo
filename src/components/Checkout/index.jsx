import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Link } from 'react-router-dom'
import './index.css'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState("")
    const [orderId, setOrderId]=useState("")
    const {cart, total, clear } = useContext(CartContext)
    function datosUser (e) {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    function finalizarCompra (e) {
        e.preventDefault()
        let order = {
            user,
            item:cart,
            total:total(),
            date:serverTimestamp()
        }
        const ventas = collection(db, "orders")
        addDoc(ventas,order)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=>console.log(error))
    }
    return (
        <div>
            {orderId !== "" ? 
            <div className='container mt-5 finishCont'>
                <h2>ORDEN REALIZADA</h2>
                <p className='mb-4'>ID: {orderId.toUpperCase()}</p>
                <Link className='btnFinish' to="/">IR AL CATALOGO</Link>
            </div>
            :
            <div className='container mt-5'>
                <h1>TERMINAR COMPRA</h1>
                <form onSubmit={finalizarCompra}>
                    <div className='row mt-4'>
                        <div className='col-6 d-flex flex-column'>
                            <label className='mb-2'>Nombre y Apellido</label>
                            <input type="text" onChange={datosUser} placeholder='Nombre y Apellido' name='nombre' required/>
                        </div>
                        <div className='col-6 d-flex flex-column'>
                            <label className='mb-2'>Telefono</label>
                            <input type="number" onChange={datosUser} placeholder='Telefono' name='telefono' required/>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6 d-flex flex-column'>
                            <label className='mb-2'>Mail</label>
                            <input type="email" onChange={datosUser} placeholder='ejemplo@ejemplo.com' name='mail' required/>
                        </div>
                        <div className='col-6 d-flex flex-column'>
                            <label className='mb-2'>Repetir mail</label>
                            <input type="email" onChange={((e)=>setValidateEmail(e.target.value))} placeholder='ejemplo@ejemplo.com' name='mail' required/>
                        </div>
                    </div>
                    <button className="mt-4" type='submit' disabled={validateEmail !== user.mail}>GENERAR ORDEN</button>
                </form>
            </div>
            }
        </div>
    )
}

export default Checkout