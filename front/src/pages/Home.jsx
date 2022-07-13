import logo from '../assets/images_content/nzoshoot_logo.png';
import puma from '../assets/images_content/puma.png';
import nestenn from '../assets/images_content/nestenn.png';
import ldlc from '../assets/images_content/ldlc.png';
import professionnal from '../assets/images_content/nzoshoot.webp';
import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";
import * as ServiceWebsite from "../services/ServiceWebsite";
import 'animate.css';
import { useEffect, useState } from 'react';

const Home = ({isAuth}) => {

    // variables qui seront définies par la requete GET à la table params

    const [slogan, setSlogan] = useState('');
    const [aboutme, setAboutme] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        ServiceWebsite.FetchParams().then(res => {
            // on défini les variables grace à la fonction useState qui permet le cicle de vie de ces dernières.
            setSlogan(res.data.params[0].slogan)
            setAboutme(res.data.params[0].about_me)
            setPhone(res.data.params[0].phone_number)
            setEmail(res.data.params[0].email)
        })
    }, [])
    
    return (
        <>
        {/* Je passe un paramètre à la navBar isAuth qui vaut soit true ou bien false afin de savoir si on est connecté ou non et qui provient lui même de App.js. */}
        <Navbar isAuth={isAuth} />
        <div className="d-flex flex-direction-column align-items-center">
            <section className='d-flex' id='home-section'>
                <div className="w-50 left-content flex-direction-column animate__animated animate__fadeInLeft" id='left-content'>
                    <img src={logo} alt="logo nzoshoot" style={{margin: "30px"}}/>
                    <h2>NZOSHOOT</h2>
                    <h3>{slogan}</h3>
                    <ul id="social-links" className='d-flex justify-content-center align-items-center'>
                        <a  className="social-links" href='https://twitter.com/NzoShoot'><i className="fa-brands fa-twitter fa-sm white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.tiktok.com/@nzoshoot_'><i className="fa-brands fa-tiktok fa-sm white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.youtube.com/channel/UCgtjeRpS3ixwNK-gZrST-Hw'><i className="fa-brands fa-youtube fa-sm white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.instagram.com/nzoshoot/'><i className="fa-brands fa-instagram fa-sm white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.facebook.com/NzoShoot-111207490246730'><i className="fa-brands fa-facebook-f fa-sm white-icon m-2"></i></a>
                    </ul>
                </div>
                <div className="w-50 right-content animate__animated animate__fadeInRight" id='right-content'></div>
            </section>
            <section className='d-flex justify-content-center' id="about-section">
                <div id="about-section-1" style={{width: '80%'}} className='d-flex align-items-center justify-content-center'>
                    <div className='p-4 d-flex flex-direction-column p-2 w-75'>
                        <h3 style={{marginBottom: '30px', textAlign: 'left'}}><span style={{color: 'rgb(255, 255, 0)'}}>|</span> A propos de moi</h3>
                        <p style={{lineHeight: '2rem'}}>{aboutme}</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img id="img-pro" src={professionnal} alt="nzoshoot professionnel"/>
                    </div>
                </div>
            </section>
            <section className='d-flex flex-direction-column justify-content-center align-items-center' id="testimonials-section">
                <h3 style={{margin: '30px', color: 'white', fontWeight: 'normal'}}><span style={{color: 'rgb(255, 255, 0)'}}>|</span> Ils m'ont fait confiance</h3>
                <div className='d-flex justify-content-center align-items-center brand-ribbon'>
                    <img src={puma} width="250px" alt="" />
                    <img src={ldlc} width="250px" alt="" />
                    <img src={nestenn} width="250px" alt="" />
                </div>
            </section>
        </div>
        {/* Pareil ici, les paramètres email et phone sont passés ils proviennent aussi de la table params.  */}
        <Footer email={email} phone={phone}/>
        </>
    )
}

export default Home;