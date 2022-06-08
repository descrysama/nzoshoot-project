import { useEffect, useState } from "react";
import { CheckAuth } from "./CheckAuth";
import { Navigate } from 'react-router-dom';



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