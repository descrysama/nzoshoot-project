import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../../services/ServiceAlbum";
import { useLocation } from "react-router-dom";

const AdminAddPhoto = () => {

    const [images, setImages] = useState([]);
    const [postImages, setpostImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [request, setRequest] = useState(false);
    const [RemoveAnimation, setRemoveAnimation] = useState(false);
    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        ServiceAlbum.FetchAllImages(id).then(res => {
            setImages(res)
            setLoading(false)
        });
    }, [])

    const RemoveHandler = (imageid) => {
        ServiceAlbum.DeleteImage(imageid).then(() => {
            setImages(images.filter(image => image.id !== imageid));
            setRemoveAnimation(false);
        })
        setRemoveAnimation(imageid);
    }

    const handleSubmit = () => {
        ServiceAlbum.addImages(postImages).then(res => {
            setError(res.data);
            setRequest(false);
        })
        setRequest(true);
        setpostImages('');
    }

    return(
        <>
            <AdminNavbar/>
            <div className="animate__animated animate__fadeIn p-2">
                <div className="d-flex align-items-center flex-direction-column" style={{justifyContent: 'space-around'}}>
                {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
                {request == false ? null : <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>}
                    <input type="file" className="yellowbutton" multiple onChange={() => handleSubmit()}/><i ></i>
                    <Link to="/ns-nimda/albums"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
                </div>
                <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                
                    {loading ?
                        <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                    :
                    <>
                        {images.length > 0 ?
                        images.map((item, key) => (
                            <div key={key} className={RemoveAnimation == item.id ? "animate__bounceOut" : null} style={{margin: "10px", textAlign: 'center', width: '8em'}}>
                                <img src={`${process.env.REACT_APP_IMAGE}`+ item.image_path} alt={item.description} width="80%"/>
                                <p className="album-info" style={{margin: "2px"}}>{item.description}</p>
                                <li onClick={() => RemoveHandler(item.id)} className="yellowbutton"><i className="fa-solid fa-trash-can"></i></li>
                            </div>
                        )):
                        <h3 className="m-2" style={{color: 'white'}}>Aucune image...</h3>}
                        
                    </>}
                    
                </div>
            </div>
        </>
    )
}

export default AdminAddPhoto; 