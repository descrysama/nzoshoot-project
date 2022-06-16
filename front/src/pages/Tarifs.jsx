import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceTarifs from '../services/ServiceTarifs';
import * as ServiceWebsite from "../services/ServiceWebsite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Galerie = ({isAuth}) => {

    const [tarifs, setTarifs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        ServiceTarifs.FetchAllPrices().then(res => {
            setTarifs(res)
            setLoading(false)
        });
        
        ServiceWebsite.FetchParams().then(res => {
            setPhone(res.data.params[0].phone_number)
            setEmail(res.data.params[0].email)
        })
    }, [])

    return(
        <>
        <Navbar isAuth={isAuth}/>
        <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            {loading == false ? <h3 className="m-2" style={{color: 'white'}}>{tarifs.length > 0 ? null : "Aucun tarif pour le moment..."}</h3> : null}
            {loading ? 
            <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
            :
            <div className="d-flex justify-content-center align-items-center container">
                {tarifs.map((item, key) => (
                <div key={key} className="pricing-card col-lg" style={{margin: "10px"}}>
                    <h3 className="pricing-title" style={{color: 'rgb(255, 255, 0)', margin: "10px"}}>{item.name}</h3>
                    <p className="pricing-attribute">{item.time}</p>
                    <p className="pricing-attribute">{item.description}</p>
                    <p className="pricing-attribute">{item.photos}</p>
                    <div style={{borderBottom: '1px solid rgba(255, 255, 255, 0.3)'}}></div>
                    <p className="pricing-title" style={{color: 'white', fontStyle: 'italic'}}>{item.plan_price}€</p>
                </div>
                ))}
            </div>
            }
        </div>
        <Footer email={email} phone={phone}/>
        </>
        
    )
}

export default Galerie;