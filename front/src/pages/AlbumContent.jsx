import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceAlbum from '../services/ServiceAlbum';
import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';


const AlbumContent = ({isAuth}) => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { id } = location.state;
    

    useEffect(() => {
        ServiceAlbum.FetchAllImages(id).then(res => {
            setImages(res)
            setLoading(false)
        });
    }, [])

    return(
        <>
        <Navbar isAuth={isAuth}/>
        <div className="d-flex justify-content-center align-items-center m-2">
            <Link to="/galerie"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
        </div>
        <div className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn p-2">
            {loading ? 
            <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
            :
            images <= 0 ?
            <div className="d-flex flex-direction-column align-items-center p-2">
                <h2 style={{color: 'white'}}>Erreur 500 : Images non trouvées !</h2>
            </div>
            :
           <>
             <div>
                {images.map((item, key) => (
                key % 2 == 0 ?
                <div key={key} className="d-flex flex-direction-column justify-content-center align-items-center col-lg" style={{marginBottom: "10%", textAlign: 'center'}}>
                    {item.type == 'image' ? 
                    <img style={{pointerEvents :'none'}} src={`${process.env.REACT_APP_IMAGE}`+ item.image_path} alt={item.description} width="80%"/>
                    :
                    <video controls width="80%">
                        <source src={`${process.env.REACT_APP_IMAGE}`+ item.image_path} type="video/mp4" />
                    </video>
                    }
                </div>
                :
                null
                ))}
            </div>
            <div>
                {images.map((item, key) => (
                key % 2 != 0 ?
                <div key={key} className="d-flex flex-direction-column justify-content-center align-items-center col-lg" style={{marginBottom: "10%", textAlign: 'center'}}>
                    {item.type == 'image' ? 
                    <img style={{pointerEvents :'none'}} src={`${process.env.REACT_APP_IMAGE}`+ item.image_path} alt={item.description} width="80%"/>
                    :
                    <video controls width="80%">
                        <source src={`${process.env.REACT_APP_IMAGE}`+ item.image_path} type="video/mp4" />
                    </video>
                    }
                </div>
                :
                null
                ))}
            </div>
           </>
            }

        </div>
        <Footer />
        </>
        
    )
}

export default AlbumContent;