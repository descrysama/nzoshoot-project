import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceAlbum from '../services/ServiceAlbum';
import { useEffect, useState } from "react";


const Galerie = () => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ServiceAlbum.FetchAll().then(res => {
            console.log(res)
            setAlbums(res)
            setLoading(false)
        });
    }, [])

    return(
        <>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            {loading ? 
            <i class="fa-solid fa-spinner fa-2xl white-icon m-2"></i>
            :
            albums.map((item, key) => (
                <div key={key} className="album-card col-lg" style={{margin: "10px"}}>
                    <a href={"/album/" + item.id}><img src={item.cover_path} alt={item.name} width="250px"/></a>
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