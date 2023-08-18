import { useEffect, useState } from "react"
import "./index.css"
import { getItem } from "../../mock/data"
import ItemDetail from "../ItemDetail"
import { useParams } from "react-router-dom"
<<<<<<< HEAD
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
=======
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a

function ItemDetailContainer () {
    
    const [producto, setProducto] = useState({})
    const { id } = useParams()
<<<<<<< HEAD
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
=======

    useEffect(() => {
        getItem(id)
        .then((res) => setProducto(res))
    }, [])
    
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
    return (
        <ItemDetail producto={producto}/>
    )
}
export default ItemDetailContainer