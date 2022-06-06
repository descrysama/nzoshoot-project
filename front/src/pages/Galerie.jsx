import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceAlbum from '../services/ServiceAlbum';
import { useEffect, useState } from "react";


const Galerie = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        ServiceAlbum.FetchAll().then(res => {
            console.log(res)
            setAlbums(res)
        });
    }, [])

    return(
        <>
        <Navbar />
        <div className="d-flex flex-direction-column align-items-center p-2">
        {albums.map((item, key) => (
            <div key={key} className="album-card">
                <p className="album-info">{item.name}, {item.place}</p>
            </div>
        ))}
        </div>
        <Footer />
        </>
        
    )
}

export default Galerie;