import AdminNavbar from "../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../services/ServiceAlbum";
import * as ServiceContact from "../../services/ServiceContact";
import { useState, useEffect } from "react";


const AdminDashboard = () => {

    const [albums, setAlbums] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
                    <div className="d-flex justify-content-center align-items-center">
                        <table>
                            <thead>
                                <tr>
                                    <td>Nom</td>
                                    <td>Email</td>
                                    <td>Téléphone</td>
                                    <td>Message</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(contact => (
                                    <>
                                        <tr>
                                            <td>{contact.name ? contact.name : '-'}</td>
                                            <td>{contact.email ? contact.email : '-'}</td>
                                            <td>{contact.phone_number ? contact.phone_number : '-'}</td>
                                            <td className="text-overflow">{contact.message ? contact.message : '-'}</td>
                                            <td><li className="yellowbutton"><i class="fa-solid fa-folder-open"></i></li></td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default AdminDashboard;