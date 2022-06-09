import AdminNavbar from "../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../services/ServiceAlbum";
import * as ServiceContact from "../../services/ServiceContact";
import { useState, useEffect } from "react";


const AdminDashboard = () => {

    const [albums, setAlbums] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const RequestFunction = async() => {
            await ServiceAlbum.FetchAllAlbums().then(res => {
                setAlbums(res)
            });
            await ServiceContact.FetchAllMessages().then(res => {
                setContacts(res)
            });
            setLoading(false)
        }
        RequestFunction();
    }, [])

    return(
        <>
            <AdminNavbar/>
            <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                {loading ? 
                    <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                :
                <>
                    <div className="d-flex justify-content-center align-items-center container">
                        <div className="admin-card m-2">
                            <h5>{albums.length < 2 ? 'Album : ' : 'Albums : '}{albums.length}</h5>
                        </div>
                        <div className="admin-card m-2">
                            <h5>Messages Clients : {contacts.length}</h5>
                        </div>
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default AdminDashboard;