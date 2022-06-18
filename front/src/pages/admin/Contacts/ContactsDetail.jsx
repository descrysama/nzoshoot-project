import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import { useLocation, Link } from "react-router-dom";

const ContactDetail = () => {

    const location = useLocation();
    const { SingleContact } = location.state;

    return(
        <>
            <AdminNavbar/>
            <div className="d-flex flex-direction-column justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                {/* <a href={`mailto:${SingleContact.email}`}>Répondre</a> */}
                <div className="contact-card">
                   
                    <h4 style={{marginBottom: '30px'}}>{SingleContact.name ? SingleContact.name : '-'} | {SingleContact.email ? SingleContact.email : '-'} | {SingleContact.phone_number ? SingleContact.phone_number : '-'}</h4>
                    <p>{SingleContact.message}</p>
                </div>
                <Link to="/ns-nimda/dashboard"><i className="fa-solid fa-arrow-left-long white-icon fa-lg"></i> Retour</Link>
            </div>
        </>
    )
}

export default ContactDetail;