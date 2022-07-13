import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceAlbum from '../services/ServiceAlbum';
import * as ServiceWebsite from "../services/ServiceWebsite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Galerie = ({isAuth}) => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // le service recuperant tout les albums.
        ServiceAlbum.FetchAllAlbums().then(res => {
            setAlbums(res) // ici on defini la variable album
            setLoading(false) // puis on set le loading sur false (ce qui permet d'afficher le else de la condition de la view à la ligne 32).
        });
        ServiceWebsite.FetchParams().then(res => {
            setPhone(res.data.params[0].phone_number)
            setEmail(res.data.params[0].email)
        })
    }, [])

    return(
        <>
        <Navbar isAuth={isAuth}/>
        <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            {loading == false && albums.length <= 0 ? <h3 className="m-2" style={{color: 'white'}}>"Aucun album pour le moment..."</h3> : null}
            {loading ? 
            <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
            :
            albums.map((item, key) => (
                <div key={key} className="album-card col-lg" style={{margin: "10px"}}>
                    <Link to={"/album/" + item.id} state={{id: item.id}}><div className="album-image" style={{backgroundImage: `url(${process.env.REACT_APP_IMAGE}${item.cover_path})`, backgroundSize: '100%'}}></div></Link>
                    <p className="album-info">{item.name} {item.place ? ',' + item.place: null}</p>
                </div>
            ))
            }
        </div>
        <Footer email={email} phone={phone}/>
        </>
        
    )
}

export default Galerie;