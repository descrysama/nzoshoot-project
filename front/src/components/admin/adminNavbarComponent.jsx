import '../../index.css';
import logo from '../../assets/images_content/nzoshoot_logo.png';
import { Link,  Navigate } from 'react-router-dom';
import { useState } from 'react';

const AdminNavbar = () => {

    const [checked, setChecked] = useState(false);

    const logOut = () => {
        localStorage.removeItem('session_token');
    }

    return(
        <div className='d-flex justify-content-center animate__animated animate__fadeIn'>
            <nav>
                <input type="checkbox" id="check" checked={checked} onChange={() => setChecked(!checked)}/>
                <label htmlFor="check" className='checkbtn'>
                    <i className='fas fa-bars'></i>
                </label>
                <img className='logo' src={logo} alt="" />
                <ul>
                    <li><Link onClick={() => setChecked(false)} to='/admin/dashboard'>Accueil</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/admin/albums'>Albums</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/admin/tarifs'>Tarifs</Link></li>
                    <Link to="/admin/login" onClick={() => logOut()} className='yellowbutton'>Deconnexion</Link>
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavbar;