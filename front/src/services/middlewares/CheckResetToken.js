import { useEffect, useState,  } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import * as ServiceUser from '../ServiceUser';


const CheckResetToken = ({children}) => {

    const [token, setToken] = useState()
    let location = useLocation();
    let url = location.pathname.split('/');

    useEffect(() => {
        ServiceUser.CheckToken(url[url.length-1]).then((res) => {
            setToken(res.data.status)
        })
    }, [])

    if (token === false) {
        return <Navigate to="/" replace />;
    } else if (token === true){
        return children;
    }



}

export default CheckResetToken;