import '../index.css';
import logo from '../assets/images_content/nzoshoot_logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({isAuth}) => {

    const [checked, setChecked] = useState(false);

    return(
        <div className='d-flex justify-content-center'>
            <nav>
                <input type="checkbox" id="check" checked={checked} onChange={() => setChecked(!checked)}/>
                <label htmlFor="check" className='checkbtn'>
                    <i className='fas fa-bars'></i>
                </label>
                <img className='logo' src={logo} alt="" />
                <ul>
                    <li><Link onClick={() => setChecked(false)} to='/'>Accueil</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/galerie'>Galerie</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/tarifs'>Tarifs</Link></li>
                    <Link to="/contactez-moi" className='yellowbutton'>Contactez-moi</Link>
                    {isAuth == true ? <Link to="/ns-nimda/dashboard" className='redbutton'>Admin</Link> : null}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;