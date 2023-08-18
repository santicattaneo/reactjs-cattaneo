import { useEffect, useState } from "react"
import "./index.css"
import { getItem } from "../../mock/data"
import ItemDetail from "../ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

function ItemDetailContainer () {
    
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    // useEffect(() => {
    //     getItem(id)
    //     .then((res) => setProducto(res))
    // }, [])
    useEffect(()=>{
        const collectionProd = collection(db, 'productos')
        const referenciaDoc = doc(collectionProd, id)
        getDoc(referenciaDoc)
        .then((res)=>setProducto({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
    }, [])
    return (
        <ItemDetail producto={producto}/>
    )
}
export default ItemDetailContainer