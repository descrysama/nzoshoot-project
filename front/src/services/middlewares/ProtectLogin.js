import { useEffect, useState } from "react";
import { CheckAuth } from "./CheckAuth";
import { Navigate } from 'react-router-dom';



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