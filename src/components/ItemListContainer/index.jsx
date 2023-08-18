import './index.css';
import ItemList from '../ItemList';
import { getProducts } from '../../mock/data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
=======
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a

function ItemListContainer () {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()
<<<<<<< HEAD
    // useEffect(() => {
    //     getProducts()
    //     .then((res) => {
    //         if (categoriaId){
    //             setProductos(res.filter((item) => item.categoria === categoriaId))
    //         } else {
    //             setProductos(res)
    //         }
    //     })
    // }, [categoriaId])
    useEffect(()=>{
        const coleccionProductos = categoriaId ? query(collection(db, "productos"), where("categoria","==",categoriaId)) : collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res) => {
            const list = res.docs.map((producto)=>{
                return {
                    id:producto.id,
                    ...producto.data()
                }
            })
            setProductos(list)
        })
        .catch((error)=>console.log(error))
=======
    useEffect(() => {
        getProducts()
        .then((res) => {
            if (categoriaId){
                setProductos(res.filter((item) => item.categoria === categoriaId))
            } else {
                setProductos(res)
            }
        })
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
    }, [categoriaId])
    return(
        <>
            <div className="container mt-5 mb-5">
                <ItemList productos={productos} />
            </div>
        </>
    )
}

export default ItemListContainer;