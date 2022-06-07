import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceTarifs from '../services/ServiceTarifs';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Galerie = () => {

    const [tarifs, setTarifs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ServiceTarifs.FetchAllPrices().then(res => {
            setTarifs(res)
            setLoading(false)
        });
    }, [])

    return(
        <>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
            {loading ? 
            <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
            :
            tarifs.map((item, key) => (
                <div key={key} className="pricing-card col-lg" style={{margin: "10px"}}>
                    <h3 className="pricing-title" style={{color: 'rgb(255, 255, 0)'}}>{item.name}</h3>
                    <p className="pricing-attribute">{item.time}</p>
                    <p className="pricing-attribute">{item.description}</p>
                    <p className="pricing-attribute">{item.photos}</p>
                    <div style={{borderBottom: '1px solid rgba(255, 255, 255, 0.3)'}}></div>
                    <p className="pricing-title" style={{color: 'white', fontStyle: 'italic'}}>{item.plan_price}€</p>
                </div>
            ))
            }
        </div>
        <Footer />
        </>
        
    )
}

export default Galerie;