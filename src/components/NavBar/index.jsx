import { Link, NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget'
import './index.css';

function NavBar () {
    return(
        <nav>
            <div className='container d-flex align-items-center justify-content-between'>
                <Link to='/'><img src="../../src/assets/logo.svg" alt="logotipo"/></Link>
                <ul className='d-flex'>
                    <li><Link className='navbarLink' to='/'>TODO</Link></li>
                    <li><Link className='navbarLink' to='/categoria/auriculares'>AURICULARES</Link></li>
                    <li><Link className='navbarLink' to='/categoria/teclados'>TECLADOS</Link></li>
                    <li><Link className='navbarLink' to='/categoria/mouses'>MOUSES</Link></li>
                </ul>
                <NavLink className='navlink' to='/cart'><CartWidget/></NavLink>
            </div>
        </nav>
    )
}

export default NavBar;