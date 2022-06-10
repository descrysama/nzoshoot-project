import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../../services/ServiceAlbum";

const AdminAlbumEdit = ({album}) => {


    return(
        <>
            <AdminNavbar/>
            <div className="d-flex flex-direction-column align-items-center animate__animated animate__fadeIn">
                <h3 className="m-2" style={{color: 'white'}}>Editer l'album :</h3>
                <h1>{album.name}</h1>
                <h1>{album.place}</h1>
                <img style={{margin: '0.5rem'}} src={`${process.env.REACT_APP_IMAGE}`+ album.cover_path} alt={album.name} width="120px"/>
                <Link to="/ns-nimda/albums"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
            </div>
        </>
    )
}

export default AdminAlbumEdit; 