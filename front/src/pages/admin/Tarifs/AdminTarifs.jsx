import AdminNavbar from "../../../components/admin/adminNavbarComponent";
import * as ServiceTarifs from "../../../services/ServiceTarifs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const AdminTarifs = () => {

    const [loading, setLoading] = useState(true);
    const [tarifs, setTarifs] = useState([]);

    useEffect(() => {
        ServiceTarifs.FetchAllPrices().then(res => {
            setTarifs(res)
            setLoading(false)
        })
    }, [])

    const RemoveHandler = (tarifid) => {
        
        ServiceTarifs.DeleteTarif(tarifid).then(() => {
            setTarifs(tarifs.filter(tarif => tarif.id !== tarifid));
            console.log(tarifs)
        })
    }

    return(
        <>
            <AdminNavbar/>
            <div className="d-flex flex-direction-column justify-content-center align-items-center p-2">
                <Link to="create" className="yellowbutton"><i className="fa-solid fa-folder-plus"></i></Link>
                <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                    
                    {loading ? 
                        <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                    :
                    <>
                        {tarifs.map((item, key) => (
                            <div className="pricing-card" key={key} style={{margin: "10px"}}>
                                <h3 style={{color: 'rgb(255, 255, 0)', margin: "0.5em"}}>{item.name}</h3>
                                <ul>
                                    <li onClick={() => RemoveHandler(item.id)} className="yellowbutton"><i className="fa-solid fa-trash-can"></i></li>
                                    <Link to={`edit/${item.id}`} state={{ tarif: item }} className="yellowbutton"><i className="fa-solid fa-pen-to-square"></i></Link>
                                </ul>
                            </div>
                        ))}
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default AdminTarifs;