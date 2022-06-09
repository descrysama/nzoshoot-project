import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceAlbum from '../services/ServiceAlbum';
import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';


const AlbumContent = () => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    let location = useLocation();
    

    useEffect(() => {
        ServiceAlbum.FetchAllImages(location.pathname).then(res => {
            setImages(res)
            setLoading(false)
        });
    }, [])

    return(
        <>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center m-2">
            <Link to="/galerie"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
        </div>
        <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            {loading ? 
            <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
            :
            images <= 0 ?
            <div className="d-flex flex-direction-column align-items-center p-2">
                <h2 style={{color: 'white'}}>Erreur 500 : Images non trouvées !</h2>
            </div>
            :
            images.map((item, key) => (
                <div key={key} className="d-flex flex-direction-column justify-content-center align-items-center col-lg" style={{margin: "10px", textAlign: 'center'}}>
                    <img src={`${process.env.REACT_APP_IMAGE}`+ item.image_path} alt={item.description} width="80%"/>
                    <p className="album-info m-2">{item.description}</p>
                </div>
            ))
            }

        </div>
        <Footer />
        </>
        
    )
}

export default AlbumContent;