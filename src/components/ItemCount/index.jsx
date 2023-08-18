import React, { useEffect, useState } from "react"
import "./index.css"

function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)
    function aumentar () {
        if (count >= 0){
            if (count < stock){
                setCount(count+1)
            }
        }
    }
    function disminuir() {
        if (count > 0){
            setCount(count-1)
        }
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <button className="btnCount" onClick={disminuir}>-</button>
                <span>{count}</span>
                <button className="btnCount" onClick={aumentar}>+</button>
            </div>
            <button className="aggBtn mt-3" onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</button>
        </div>
    )
}
export default ItemCount