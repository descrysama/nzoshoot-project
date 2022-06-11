import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../../services/ServiceAlbum";


const AdminAlbumEdit = () => {

    // valeurs avant l'execution de la page
    const [album, setAlbum] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    

    // valeurs à POST après l'execution de la page

    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [cover, setCover] = useState();
    //

    let location = useLocation();
    let url = location.pathname.split('/');
    const [error, setError] = useState(false);

    useEffect(() => {
        ServiceAlbum.fetchAlbum(url[url.length - 1]).then(res => {
            setAlbum(res.data);
            setName(res.data.name);
            setPlace(res.data.place);
        })
        // ServiceAlbum.fetchAlbumImages(location.length - 1).then(res => {
        //     setImages(res.data);
        // })
        setLoading(false);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        ServiceAlbum.updateAlbum(url[url.length - 1], name, place, cover).then(res => {
            console.log(res)
        })
    }
    
    return(
        <>
        <AdminNavbar/>
        <div className="d-flex flex-direction-column justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            {loading ? 
                <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
            :
            <form onSubmit={(e) => handleSubmit(e)}>
                <img style={{margin: '0.5rem'}} src={`${process.env.REACT_APP_IMAGE}`+ album.cover_path} alt={album.name} width="120px"/>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="name">Nom <span style={{color: 'red'}}>*</span> : </label>
                    <input className="form-input" name="name" type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Voyage"/>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="name">Nom <span style={{color: 'red'}}>*</span> : </label>
                    <input className="form-input" name="place" type="text"  value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Voyage"/>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="name">Nom <span style={{color: 'red'}}>*</span> : </label>
                    <input className="form-input" name="cover_path" type="file" onChange={(e) => setCover(e.target.files[0])} />
                </div>
                <input className="yellowbutton" type="submit" value='Envoyer'/>
            </form>
            }
            <Link to="/ns-nimda/albums"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
        </div>
        </>
    )
}

export default AdminAlbumEdit; 