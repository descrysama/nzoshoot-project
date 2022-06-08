import '../../index.css';
import logo from '../../assets/images_content/nzoshoot_logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminNavbar = () => {

    const [checked, setChecked] = useState(false);

    const logOut = () => {
        localStorage.removeItem('session_token');
    }

    return(
        <div className='d-flex justify-content-center'>
            <nav>
                <input type="checkbox" id="check" checked={checked} onChange={() => setChecked(!checked)}/>
                <label htmlFor="check" className='checkbtn'>
                    <i className='fas fa-bars'></i>
                </label>
                <img className='logo' src={logo} alt="logo" />
                <ul>
                    <li><Link onClick={() => setChecked(false)} to='/ns-nimda/dashboard'>Accueil</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/ns-nimda/albums'>Albums</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/ns-nimda/tarifs'>Tarifs</Link></li>
                    <Link to="/ns-nimda/login" onClick={() => logOut()} className='yellowbutton'>Deconnexion</Link>
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavbar;