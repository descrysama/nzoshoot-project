import axios from "axios";
import { useState, useParams } from "react";
import { Link } from "react-router-dom";
import * as ServiceUser from '../../services/ServiceUser';
import logo from '../../assets/images_content/nzoshoot_logo.png';

const ResetPassword = () => {

    const [error, setError] = useState();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        ServiceUser.ResetPassword(email).then(res => {
            console.log(res)
            setError(res.data);
            setEmail('');
        })
    };




    return(
            <div className="d-flex flex-direction-column align-items-center justify-content-center animate__animated animate__fadeIn p-2" style={{height: '100vh'}}>
                <img src={logo} alt="logo nzshoot" width="120px"/>
                <h4 style={{color: 'white'}}>Reinitialiser le mot de passe</h4>
                {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
                <form onSubmit={(e) => handleSubmit(e)} className="d-block align-items-center justify-content-center">
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Email :</label>
                        <input className="form-input" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="email@email.com"/>
                    </div>
                    <div className="form-group">
                        <Link style={{ fontSize: '16px', marginBottom: '20px' }} to="/ns-nimda/login">Retour à la connexion</Link>
                        <input className="yellowbutton" style={{margin: '0px'}} type="submit" value='Envoyer'/>
                    </div>
                </form>
            </div>
    )
}

export default ResetPassword;