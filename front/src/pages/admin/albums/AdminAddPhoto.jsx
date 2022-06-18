import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../../services/ServiceAlbum";
import { useLocation } from "react-router-dom";

const AdminAddPhoto = () => {

    const [images, setImages] = useState([]);
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
    }, [request])

    const RemoveHandler = (imageid) => {
        ServiceAlbum.DeleteImage(imageid).then(() => {
            setImages(images.filter(image => image.id !== imageid));
            setRemoveAnimation(false);
        })
        setRemoveAnimation(imageid);
    }

    const handleSubmit = async(e) => {
        setRequest(true);
        for(let i = 0; i < e.target.files.length; i++) {
            await ServiceAlbum.addImages(e.target.files[i], id).then(res => {
                console.log(res)
                setError(res.data);
                if(i == e.target.files.length) {
                    setRequest(false);
                }
            })
        }
        setRequest(false);
    }

    return(
        <>
            <AdminNavbar/>
            <div className="animate__animated animate__fadeIn p-2">
                <div className="d-flex align-items-center flex-direction-column" style={{justifyContent: 'space-around'}}>
                {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
                    <input type="file" className="yellowbutton" multiple onChange={(e) => handleSubmit(e)}/>
                    <Link to="/ns-nimda/albums"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
                    {request == false ? null : <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>}
                </div>
                <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                
                    {loading ?
                        <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                    :
                    <>
                        {images.length > 0 ?
                        images.map((item, key) => (
                            <div key={key} className={RemoveAnimation == item.id ? "animate__bounceOut" : null} style={{margin: "30px", textAlign: 'center', width: '8em'}}>
                                <div style={{backgroundImage: `url(${item.type == 'image' ? process.env.REACT_APP_IMAGE + item.image_path : process.env.REACT_APP_DEFAULT_IMG})`, width: '240px', height:'240px', backgroundSize: 'cover'}}>
                                </div>
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