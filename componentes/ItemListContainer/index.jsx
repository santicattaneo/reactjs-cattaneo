import './index.css';

function ItemListContainer (props) {
    return(
        <>
            <div className='container d-flex flex-column align-items-center bienvenida'>
                <h1>BIENVENIDO A LA TIENDA {props.usuario}</h1>
                <div className='d-flex align-items-center'>
                    <i class="fa-solid fa-arrow-down"></i>
                    <p>VAMOS A COMPRAR</p>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;