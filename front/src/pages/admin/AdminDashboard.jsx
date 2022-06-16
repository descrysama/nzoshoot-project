import AdminNavbar from "../../components/admin/adminNavbarComponent";
import * as ServiceAlbum from "../../services/ServiceAlbum";
import * as ServiceWebsite from "../../services/ServiceWebsite";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

    const [loading, setLoading] = useState(true);
    const [slogan, setSlogan] = useState('');
    const [aboutme, setAboutme] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const RequestFunction = async() => {
            await ServiceWebsite.FetchParams().then(res => {
                setSlogan(res.params[0].slogan)
                setAboutme(res.params[0].about_me)
                setPhone(res.params[0].phone_number)
                setEmail(res.params[0].email)
            });
            setLoading(false)
        }
        RequestFunction();
    }, [])

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
                        {/* <table>
                            <thead>
                                <tr>
                                    <td>Nom</td>
                                    <td>Email</td>
                                    <td>Téléphone</td>
                                    <td>Message</td>
                                    <td>Détails</td>
                                    <td>Supprimer</td>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, key) => (
                                    <tr key={key} className={removeAnimation == contact.id ? "animate__bounceOut" : null}>
                                        <td>{contact.name ? contact.name : '-'}</td>
                                        <td>{contact.email ? contact.email : '-'}</td>
                                        <td>{contact.phone_number ? contact.phone_number : '-'}</td>
                                        <td className="text-overflow">{contact.message ? contact.message : '-'}</td>
                                        <td><Link to="/ns-nimda/contact" state={{SingleContact: contact}} className="yellowbutton"><i className="fa-solid fa-eye"></i> Detail</Link></td>
                                        <td><li onClick={() => RemoveHandler(contact.id)} className="yellowbutton"><i className="fa-solid fa-trash"></i></li></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> */}
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="slogan">Slogan :</label>
                            <input className="form-input" name="slogan" type="text" placeholder="Un photographe passionné" value={slogan} onChange={(e) => setSlogan(e.target.value)}/>
                        </div>
                        <input type="submit" className="yellowbutton" />
                    </form>

                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="about_me">Text à propos de moi :</label>
                            <textarea className="form-textarea" name="about_me" id="about_me" cols="30" rows="10" value={aboutme} onChange={(e) => setAboutme(e.target.value)}></textarea>
                        </div>
                        <input type="submit" className="yellowbutton" />
                    </form>

                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="phone_number">Numero de téléphone :</label>
                            <input className="form-input" name="phone_number" type="text" placeholder="06.23.30.35.57" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <input type="submit" className="yellowbutton" />
                    </form>

                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="email">Adresse Email :</label>
                            <input className="form-input" name="email" type="text" placeholder="nzoshoot@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <input type="submit" className="yellowbutton" />
                    </form>
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default AdminDashboard;