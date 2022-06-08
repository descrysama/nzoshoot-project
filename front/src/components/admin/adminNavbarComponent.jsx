import '../../index.css';
import logo from '../../assets/images_content/nzoshoot_logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminNavbar = () => {

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
                    <li><Link onClick={() => setChecked(false)} to='/admin/dashboard'>Accueil</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/admin/album'>Albums</Link></li>
                    <li><Link onClick={() => setChecked(false)} to='/admin/tarifs'>Tarifs</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavbar;