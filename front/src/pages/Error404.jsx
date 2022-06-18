import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceWebsite from "../services/ServiceWebsite";
import { useEffect, useState } from "react";

const Error404 = () => {

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        ServiceWebsite.FetchParams().then(res => {
            setPhone(res.data.params[0].phone_number)
            setEmail(res.data.params[0].email)
        })
    }, [])

    return(
        <>
        <Navbar />
        <div className="d-flex flex-direction-column align-items-center p-2">
            <h2 style={{color: 'white'}}>Erreur 404 : Page non trouvée !</h2>
            <a href="/" style={{borderBottom: '1px solid white'}}>Retourner à l'accueil ?</a>
        </div>
        <Footer email={email} phone={phone}/>
        </>
    )
}

export default Error404;