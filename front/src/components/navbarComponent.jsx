import '../index.css';
import logo from '../assets/images_content/nzoshoot_logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {

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
                    <button className='yellowbutton'>Contactez-moi</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;