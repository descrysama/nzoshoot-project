import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../../services/ServiceAlbum";
import { useLocation } from "react-router-dom";

const AdminAddPhoto = () => {

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

    const RemoveHandler = (albumid) => {
        
    }

    return(
        <>
            <AdminNavbar/>
            <div className="animate__animated animate__fadeIn p-2">
                <div className="d-flex align-items-center flex-direction-column" style={{justifyContent: 'space-around'}}>
                    <input type="file" className="yellowbutton" multiple/><i ></i>
                    <Link to="/ns-nimda/albums"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
                </div>
                <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                
                    {loading ?
                        <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                    :
                    <>
                        {images.map((item, key) => (
                            <div key={key} className="d-flex flex-direction-column justify-content-center align-items-center album-card col-lg" style={{margin: "10px", textAlign: 'center', width: '8em'}}>
                                <img src={`${process.env.REACT_APP_IMAGE}/`+ item.image_path} alt={item.description} width="80%"/>
                                <p className="album-info" style={{margin: "2px"}}>{item.description}</p>
                                <li onClick={() => RemoveHandler(item.id)} className="yellowbutton"><i className="fa-solid fa-trash-can"></i></li>
                            </div>
                        ))}
                        
                    </>}
                    
                </div>
            </div>
        </>
    )
}

export default AdminAddPhoto; 