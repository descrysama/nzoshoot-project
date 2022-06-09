import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceAlbum from '../services/ServiceAlbum';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Galerie = () => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ServiceAlbum.FetchAllAlbums().then(res => {
            setAlbums(res)
            setLoading(false)
        });
    }, [])

    return(
        <>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            {loading ? 
            <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
            :
            albums.map((item, key) => (
                <div key={key} className="album-card col-lg" style={{margin: "10px"}}>
                    <Link to={"/album/" + item.id}><img src={`${process.env.REACT_APP_IMAGE}`+ item.cover_path} alt={item.name} width="300px"/></Link>
                    <p className="album-info">{item.name}, {item.place}</p>
                </div>
            ))
            }
        </div>
        <Footer />
        </>
        
    )
}

export default Galerie;