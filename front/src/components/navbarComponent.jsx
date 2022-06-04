import '../index.css';
import logo from '../assets/images_content/nzoshoot_logo.png';

const Navbar = () => {

    return(
        <div className='d-flex justify-content-center'>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className='checkbtn'>
                    <i className='fas fa-bars'></i>
                </label>
                <img className='logo' src={logo} alt="" />
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Galerie</a></li>
                    <li><a href="#">Formules</a></li>
                    <a className='yellowbutton' href="">Contactez-moi</a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;