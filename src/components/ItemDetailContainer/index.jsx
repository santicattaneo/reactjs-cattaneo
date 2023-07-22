import { useEffect, useState } from "react"
import "./index.css"
import { getItem } from "../../mock/data"
import ItemDetail from "../ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer () {
    
    const [producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getItem(id)
        .then((res) => setProducto(res))
    }, [])
    
    return (
        <ItemDetail producto={producto}/>
    )
}
export default ItemDetailContainer