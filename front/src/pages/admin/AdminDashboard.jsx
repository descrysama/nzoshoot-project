import AdminNavbar from "../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../services/ServiceAlbum";
import * as ServiceContact from "../../services/ServiceContact";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [removeAnimation, setRemoveAnimation] = useState(false);

    useEffect(() => {
        const RequestFunction = async() => {
            await ServiceContact.FetchAllMessages().then(res => {
                setContacts(res)
            });
            setLoading(false)
        }
        RequestFunction();
    }, [])

    const RemoveHandler = (contactid) => {
        ServiceContact.DeleteMessage(contactid).then(() => {
            setContacts(contacts.filter(contact => contact.id !== contactid));
            setRemoveAnimation(false);
        })
        setRemoveAnimation(contactid);
    }

    return(
        <>
            <AdminNavbar/>
            <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                {loading ? 
                    <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                :
                <>
                    <h3 className="m-2" style={{color: 'white'}}>Bienvenue dans votre espace de gestion de contenu !</h3>
                    <div className="d-flex justify-content-center align-items-center">
                        <table>
                            <thead>
                                <tr>
                                    <td>Nom</td>
                                    <td>Email</td>
                                    <td>Téléphone</td>
                                    <td>Message</td>
                                    <td>Détails</td>
                                    <td>Supprimer</td>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, key) => (
                                    <tr key={key} className={removeAnimation == contact.id ? "animate__bounceOut" : null}>
                                        <td>{contact.name ? contact.name : '-'}</td>
                                        <td>{contact.email ? contact.email : '-'}</td>
                                        <td>{contact.phone_number ? contact.phone_number : '-'}</td>
                                        <td className="text-overflow">{contact.message ? contact.message : '-'}</td>
                                        <td><Link to="/ns-nimda/contact" state={{SingleContact: contact}} className="yellowbutton"><i className="fa-solid fa-eye"></i> Detail</Link></td>
                                        <td><li onClick={() => RemoveHandler(contact.id)} className="yellowbutton"><i className="fa-solid fa-trash"></i></li></td>
                                    </tr>
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