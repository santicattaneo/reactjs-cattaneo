import { Link } from "react-router-dom"
import "./index.css"

function Item ({item}) {
    return (
        <>
            <div className="col-3 cardContainer">
                <div className="cardContent h-100">
                    <div className="cardImgContainer">
                        <img className="cardImg" src={item.img}/>
                    </div>
                    <div className="cardInfo">
                        <h2>{item.nombre}</h2>
                        <p className="precio">AR$ {item.precio}</p>
                        <Link to={`/item/${item.id}`} className="detailsBtn">DETALLES</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item