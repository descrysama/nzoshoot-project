import { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import * as ServiceUser from '../../services/ServiceUser';
import logo from '../../assets/images_content/nzoshoot_logo.png';
import { useEffect } from "react";

const ResetPassForm = () => {

    const [error, setError] = useState();
    const [password, setPassword] = useState('');
    const [repeatpassword, setRepeatPassword] = useState('');
    let location = useLocation();
    let url = location.pathname.split('/');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === repeatpassword) {
            ServiceUser.ChangePassword(password, url[url.length-1]).then(res => {
                console.log(res)
                setError(res.data)
                if(res.data.status == true) {
                    <Navigate replace to="/ns-nimda/login" />
                }
            })
        } else {
            setError({
                status: false,
                text: "Les mots de passe ne correspondent pas",
            })
        }
    };




    return(
            <div className="d-flex flex-direction-column align-items-center justify-content-center animate__animated animate__fadeIn p-2" style={{height: '100vh'}}>
                <img src={logo} alt="logo nzshoot" width="120px"/>
                <h4 style={{color: 'white'}}></h4>
                {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
                <form onSubmit={(e) => handleSubmit(e)} className="d-block align-items-center justify-content-center">
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Mot de passe :</label>
                        <input className="form-input" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="mot de passe"/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Retappez le mot de passe :</label>
                        <input className="form-input" name="repeat_password" value={repeatpassword} onChange={(e) => setRepeatPassword(e.target.value)}  type="password" placeholder="repeter mot de passe"/>
                    </div>
                    <div className="form-group">
                        <Link style={{ fontSize: '16px', marginBottom: '20px' }} to="/ns-nimda/login">Retour à la connexion</Link>
                        <input className="yellowbutton" style={{margin: '0px'}} type="submit" value='Envoyer'/>
                    </div>
                </form>
            </div>   
    )
}

export default ResetPassForm;