import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images_content/nzoshoot_logo.png';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            }).then(res => {
                if (res.data.status === true) {
                    setError({
                        status: true,
                        text: 'Connexion réussie, redirection...'
                    })
                    localStorage.setItem('session_token', res.data.user.session_token);
                    navigate('/admin/dashboard');
                } else {
                    setError({
                        status: false,
                        text: 'Email et/ou mot depasse incorrect.'
                    })
                }
            })
        } else {
            setError({
                status: false,
                text: 'Email et/ou mot depasse incorrect.'
            })
        }
    };




    return(
        <div className="d-flex flex-direction-column align-items-center justify-content-center animate__animated animate__fadeIn p-2" style={{height: '100vh'}}>
            <img src={logo} alt="logo nzshoot" width="120px"/>
            <h4 style={{color: 'white'}}>Gestion de contenu</h4>
            {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
            <form onSubmit={(e) => handleSubmit(e)} className="d-block align-items-center justify-content-center">
                
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="name">Email :</label>
                    <input className="form-input" name="email" type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nzshoot@gmail.com"/>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="name">Mot de passe :</label>
                    <input className="form-input" name="email" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe"/>
                </div>
                <input className="yellowbutton" style={{margin: '0px'}} type="submit" value='Envoyer'/>
            </form>
            
        </div>
    )
}

export default Login;