import CartWidget from '../CartWidget'
import './index.css';

function NavBar () {
    return(
        <nav>
            <div className='container d-flex align-items-center justify-content-between'>
                <img src="../../src/assets/logo.svg" alt="logotipo"/>
                <ul className='d-flex'>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">TIENDA</a></li>
                    <li><a href="#">NOSOTROS</a></li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;