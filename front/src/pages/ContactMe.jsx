import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceWebsite from "../services/ServiceWebsite";
import * as ServiceContact from "../services/ServiceContact";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const ContactMe = ({isAuth}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailfooter, setEmailFooter] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState();
    const [token, setToken] = useState();


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
    }

    const handleSubmit = async() => {

        if (token) {
            if (email && message) {
                ServiceContact.SendForm(name, email, phoneNumber, message).then(res => {
                    setError(res.data)
                })
                window.grecaptcha.reset();
                ResetValues();
            } else {
                setError({
                    status: false,
                    text: 'Veuillez verifier le formulaire. Email et message obligatoires.'
                })
            }
        } else {
            setError({
                status: false,
                text: 'Captcha incorrect.'
            })
        }
    }


    return(
        <>
        <Navbar isAuth={isAuth}/>
        <div className="d-flex flex-direction-column align-items-center justify-content-center animate__animated animate__fadeIn p-2" style={{textAlign: 'center'}}>
            <h2 style={{color: 'white'}}>Contactez-moi</h2>
            {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
            <div className="form-size">
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="name">NOM Prenom :</label>
                    <input className="form-input" name="name" type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="email">Adresse Email <span style={{color: 'red'}}>*</span> :</label>
                    <input className="form-input" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="phone_number">Numero de téléphone :</label>
                    <input className="form-input" name="phone_number" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="message">Message <span style={{color: 'red'}}>*</span> :</label>
                    <textarea className="form-textarea" name="message" value={message} onChange={(e) => setMessage(e.target.value)} id="message" cols="30" rows="10" ></textarea>
                </div>
                <div className="form-group m-2 d-flex justify-content-center align-items-center">
                    <ReCAPTCHA
                        sitekey="6LdoN-kgAAAAAJFouJ7X3sElM08kXg1Xj92bWXCv"
                        onChange={(token) => setToken(token)}
                    />
                </div>
                <input className="yellowbutton" type="button" onClick={(e) => handleSubmit(e)} value='Envoyer'/>
            </div>

        </div>
        <Footer email={emailfooter} phone={phone}/>
        </>
    )
}

export default ContactMe;