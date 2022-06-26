import { useEffect, useState } from "react";
import { CheckAuth } from "./CheckAuth";
import { Navigate } from 'react-router-dom';


// Fais un method post avec le token stocké dans le localStorage et attend une reponse true ou false pour savoir si le client est connecté ou non.
const ProtectLogin = ({children}) => {

    const [logged, setLogged] = useState()
    
    useEffect(() => {
        CheckAuth().then(res => setLogged(res.status));
    }, [])

    if (logged === false) {
        return children;
        
    } else if (logged === true){
        return <Navigate to="/ns-nimda/dashboard" replace />;
    }



}

export default ProtectLogin;