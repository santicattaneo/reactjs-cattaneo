import './index.css';
import ItemList from '../ItemList';
import { getProducts } from '../../mock/data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer () {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()
    useEffect(() => {
        getProducts()
        .then((res) => {
            if (categoriaId){
                setProductos(res.filter((item) => item.categoria === categoriaId))
            } else {
                setProductos(res)
            }
        })
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