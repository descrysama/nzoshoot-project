import { useEffect, useState } from "react";
import { CheckAuth } from "./CheckAuth";
import { Navigate } from 'react-router-dom';


// Fais un method post avec le token stocké dans le localStorage 
// et retourne l'enfant si il le client est connecté sinon il redirige à l'accueil.
const ProtectedRoute = ({children}) => {

    const [logged, setLogged] = useState()
    
    useEffect(() => {
        CheckAuth().then(res => setLogged(res.status));
    }, [])

    if (logged === false) {
        return <Navigate to="/" replace />;
    } else if (logged === true){
        return children;
    }



}

export default ProtectedRoute;