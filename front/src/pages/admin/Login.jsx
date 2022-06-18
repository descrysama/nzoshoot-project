import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ServiceUser from '../../services/ServiceUser';
import logo from '../../assets/images_content/nzoshoot_logo.png';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        ServiceUser.Login(email, password).then(res => {
            setError(res.data);
            localStorage.setItem('session_token', res.data.user.session_token);
            navigate('/ns-nimda/dashboard');
        })
    };




    return(
        <div className="d-flex flex-direction-column align-items-center justify-content-center animate__animated animate__fadeIn p-2" style={{height: '100vh'}}>
            <Link to='/'><img src={logo} alt="logo nzshoot" width="120px"/></Link>
            <h4 style={{color: 'white'}}>Connexion</h4>
            {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
            <form onSubmit={(e) => handleSubmit(e)} className="d-block align-items-center justify-content-center">
                
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="name">Email :</label>
                    <input className="form-input" name="email" type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nzshoot@gmail.com"/>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="name">Mot de passe :</label>
                    <input className="form-input" name="password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe"/>
                </div>
                <div className="form-group">
                <Link style={{ fontSize: '16px', marginBottom: '20px' }} to="/ns-nimda/resetpassword">Mot de passe oublié ?</Link>
                <input className="yellowbutton" style={{margin: '0px'}} type="submit" value='Envoyer'/>
                </div>
            </form>
            
        </div>
    )
}

export default Login;