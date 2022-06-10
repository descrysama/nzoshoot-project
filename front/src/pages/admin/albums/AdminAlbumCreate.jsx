import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../../services/ServiceAlbum";

const AdminAlbumCreate = () => {

    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [cover, setCover] = useState('');
    const [error, setError] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        ServiceAlbum.createAlbum(name, place, cover[0]).then(res => {
            setError(res.data);
            console.log(res)
        })
    }

    return(
        <>
            <AdminNavbar/>
            <div className="d-flex flex-direction-column align-items-center animate__animated animate__fadeIn">
                <h3 className="m-2" style={{color: 'white'}}>Ajouter un album :</h3>
                {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Nom <span style={{color: 'red'}}>*</span> : </label>
                        <input className="form-input" name="name" type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Voyage"/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="place">Lieu :</label>
                        <input className="form-input" name="place" type="text"  value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Tenerife"/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="cover_path">Cover <span style={{color: 'red'}}>*</span> : </label>
                        <input className="form-input" name="cover_path" type="file" onChange={(e) => setCover(e.target.files)} />
                    </div>
                    <input className="yellowbutton" type="submit" value='Envoyer'/>
                </form>
                <Link to="/ns-nimda/albums"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
            </div>
        </>
    )
}

export default AdminAlbumCreate; 