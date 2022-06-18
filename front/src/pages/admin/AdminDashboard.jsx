import AdminNavbar from "../../components/admin/adminNavbarComponent";
import * as ServiceWebsite from "../../services/ServiceWebsite";
import { useState, useEffect } from "react";

const AdminDashboard = () => {

    const [loading, setLoading] = useState(true);
    const [slogan, setSlogan] = useState('');
    const [aboutme, setAboutme] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        ServiceWebsite.FetchParams().then(res => {
            setSlogan(res.data.params[0].slogan)
            setAboutme(res.data.params[0].about_me)
            setPhone(res.data.params[0].phone_number)
            setEmail(res.data.params[0].email)
        });
        setLoading(false)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        ServiceWebsite.UpdateParams(slogan, aboutme, phone, email).then(res => {
            setError(res.data);
            console.log(res.data);
            setRequest(false);
        })
        setRequest(true)
    }

    return(
        <>
            <AdminNavbar/>
            <div className="d-flex justify-content-center align-items-center container animate__animated animate__fadeIn p-2">
                {loading ? 
                    <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i>
                :
                <>
                    <h3 className="m-2" style={{color: 'white'}}>Bienvenue dans votre espace de gestion de contenu !</h3>
                    <div className="d-flex flex-direction-column justify-content-center align-items-center">
                        {request == true ? <i className="fa-solid fa-spinner fa-2xl white-icon animate__animated animate__infinite animate__rotateOut m-2"></i> : null}
                        {error ? <p className={error.status == false ? "error-badge" : "success-badge"}>{error.text}</p> : null}
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="slogan">Slogan :</label>
                            <input className="form-input" name="slogan" type="text" placeholder="Un photographe passionné" value={slogan} onChange={(e) => setSlogan(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="about_me">Text à propos de moi :</label>
                            <textarea className="form-textarea" name="about_me" id="about_me" cols="30" rows="10" value={aboutme} onChange={(e) => setAboutme(e.target.value)}></textarea>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="phone_number">Numero de téléphone :</label>
                            <input className="form-input" name="phone_number" type="text" placeholder="06.23.30.35.57" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="email">Adresse Email :</label>
                            <input className="form-input" name="email" type="text" placeholder="nzoshoot@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <input type="submit" className="yellowbutton"/>
                    </form>
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default AdminDashboard;