import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceTarifs from "../../../services/ServiceTarifs";


const AdminTarifsEdit = () => {

    const [error, setError] = useState(false);
    const [request, setRequest] = useState(false);
    const { tarif } = useLocation().state;



    const [name, setName] = useState(tarif.name);
    const [time, setTime] = useState(tarif.time ? tarif.time : '');
    const [description, setDescription] = useState(tarif.description ? tarif.photos : '');
    const [photos, setPhotos] = useState(tarif.photos ? tarif.photos : '');
    const [price, setPrice] = useState(tarif.plan_price);

    const handleSubmit = (e) => {
    e.preventDefault();
    ServiceTarifs.UpdateTarif(tarif.id, name, time, description, photos, price).then(res => {
        setError(res.data.text);
        setRequest(false);
    })
    setRequest(true);

    }
    
    return(
        <>
        <AdminNavbar/>
        <div className="d-flex flex-direction-column justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            <h2 style={{color: 'white'}}>Formule : {tarif.name}</h2>
                {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error}</p> : null}
                {request == false ? null : <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Nom : </label>
                        <input className="form-input" name="name" type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Voyage"/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Temps passer pour la prestation : </label>
                        <input className="form-input" name="time" type="text"  value={time} onChange={(e) => setTime(e.target.value)} placeholder="Voyage"/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Description : </label>
                        <input className="form-input" name="description" type="text"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Voyage"/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Nombre de photos : </label>
                        <input className="form-input" name="photos" type="text"  value={photos} onChange={(e) => setPhotos(e.target.value)} placeholder="Voyage"/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Prix de la formule : </label>
                        <input className="form-input" name="price" type="text"  value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Voyage"/>
                    </div>
                    <input className="yellowbutton" type="submit" value='Envoyer'/>
                </form>
            <Link to="/ns-nimda/tarifs"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
        </div>
        </>
    )
}

export default AdminTarifsEdit; 