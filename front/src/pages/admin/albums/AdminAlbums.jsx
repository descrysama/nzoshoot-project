import { useEffect, useState } from "react";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../../services/ServiceAlbum";
import { Link } from "react-router-dom";

const AdminAlbums = () => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ServiceAlbum.FetchAllAlbums().then(res => {
            setAlbums(res)
            setLoading(false)
        });
    }, [])

    const HandleSubmit = (albumid) => {
        console.log(albumid);
        ServiceAlbum.DeleteAlbum(albumid).then(() => {
            console.log(albumid);
            setAlbums(albums.filter(album => album.id !== albumid));
        })
    }


    return(
        <>
            <AdminNavbar/>
            <div className="d-flex flex-direction-column justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                {loading ? 
                    <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                :
                <>
                    <Link to="create" className="yellowbutton"><i className="fa-solid fa-folder-plus"></i></Link>
                    {albums.map((item, key) => (
                        <div className="d-flex admin-album-card align-items-center" key={key} style={{margin: "10px"}}>
                            <img style={{margin: '0.5rem'}} src={`${process.env.REACT_APP_IMAGE}`+ item.cover_path} alt={item.name} width="120px"/>
                            <p className="album-info" style={{margin: '0.5rem'}}>{item.name}, {item.place}</p>
                            <ul>
                                <li onClick={() => HandleSubmit(item.id)} className="yellowbutton"><i className="fa-solid fa-trash-can"></i></li>
                                <Link to={`${item.id}`} className="yellowbutton"><i className="fa-solid fa-pen-to-square"></i></Link>
                            </ul>
                        </div>
                    ))}
                </>
                }
            </div>
        </>
    )
}

export default AdminAlbums 