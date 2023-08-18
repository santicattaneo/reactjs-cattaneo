<<<<<<< HEAD
import { Link, NavLink} from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
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
<<<<<<< HEAD
                <NavLink className='navlink' to='/cart'><CartWidget/></NavLink>
=======
                <CartWidget/>
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
            </div>
        </nav>
    )
}

export default NavBar;