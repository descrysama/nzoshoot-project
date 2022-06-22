import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceWebsite from "../services/ServiceWebsite";
import * as ServiceContact from "../services/ServiceContact";
import { useState, useEffect } from "react";
import axios from 'axios';

const ContactMe = ({isAuth}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailfooter, setEmailFooter] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState();

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }


    const [captcha, setCaptcha] = useState({
        first: getRandomInt(50),
        second: getRandomInt(50)
    });
    const [result, setResult] = useState('');

    useEffect(() => {
        ServiceWebsite.FetchParams().then(res => {
            setPhone(res.data.params[0].phone_number)
            setEmailFooter(res.data.params[0].email)
        })
    }, [])

    const ResetValues = () => {
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setCaptcha({
            first: getRandomInt(50),
            second: getRandomInt(50)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && message) {
            if (result == captcha.first + captcha.second) {
                ServiceContact.SendForm(name, email, phoneNumber, message).then(res => {
                    setError(res.data)
                })
                ResetValues();
            } else {
                setError({
                    status: false,
                    text: 'Captcha incorrect.'
                })
            }
        } else {
            setError({
                status: false,
                text: 'Veuillez verifier le formulaire. Email et message obligatoires.'
            })
        }
    }


    return(
        <>
        <Navbar isAuth={isAuth}/>
        <div className="d-flex flex-direction-column align-items-center justify-content-center animate__animated animate__fadeIn p-2" style={{textAlign: 'center'}}>
            <h2 style={{color: 'white'}}>Contactez-moi</h2>
            {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="name">NOM Prenom :</label>
                    <input className="form-input" name="name" type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Nzo Shoot"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="email">Adresse Email <span style={{color: 'red'}}>*</span> :</label>
                    <input className="form-input" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nzoshoot@gmail.com"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="phone_number">Numero de téléphone :</label>
                    <input className="form-input" name="phone_number" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="06.06.06.06.06"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="message">Message <span style={{color: 'red'}}>*</span> :</label>
                    <textarea className="form-textarea" name="message" value={message} onChange={(e) => setMessage(e.target.value)} id="message" cols="30" rows="10" placeholder="Une demande personnalisée sympathique..."></textarea>
                </div>
                <div className="form-group m-2">
                    <label className="form-label noselect" style={{fontSize: '25px'}} htmlFor="captcha">{captcha.first} + {captcha.second} = <span style={{color: 'red'}}>*</span></label>
                    <input className="form-input" name="captcha" type="text" value={result} onChange={(e) => setResult(e.target.value)} placeholder="20"/>
                </div>
                <input className="yellowbutton" type="submit" value='Envoyer'/>
            </form>
        </div>
        <Footer email={emailfooter} phone={phone}/>
        </>
    )
}

export default ContactMe;