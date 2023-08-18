import "./index.css"
import ItemCount from "../ItemCount"
<<<<<<< HEAD
import { useState, useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

function ItemDetail ({producto}) {
    const [cantAdd, setCantAdd] = useState('')
    const {addItem} = useContext(CartContext)
    function onAdd (cant) {
        if (cant > 0){
            addItem(producto, cant)
        }
        setCantAdd(cant)
=======

function ItemDetail ({producto}) {
    function onAdd (cant) {
        if (cant > 0){
            console.log(`compraste ${cant} objeto/s`)
        }
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
    }
    return (
        <div className="container contDetails">
            <div className="row g-3 mt-5">
                <div className="col-6 m-0">
                    <div className="imgContainer d-flex align-items-center">
                        <img className="img-fluid" src={producto.img} alt={producto.nombrre}/>
                    </div>
                </div>
                <div className="col-6 d-flex flex-column justify-content-between m-0 detailsCont infoContainer">
                    <div>
                        <h1>{producto.nombre}</h1>
                        <h2>AR$ {producto.precio}</h2>
                    </div>
                    <div>
                        <p className="detailsDesc mt-4 mb-5">{producto.desc}</p>
                    </div>
<<<<<<< HEAD
                    { cantAdd === '' ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                    : <Link className='aggBtn' to='/cart'>CARRITO</Link> }
=======
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
                </div>
            </div>
        </div>
    )
}
export default ItemDetail