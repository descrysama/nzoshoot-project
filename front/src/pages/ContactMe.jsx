import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";

const ContactMe = () => {
    return(
        
        <>
        <Navbar />
        <div className="d-flex flex-direction-column align-items-center justify-content-center p-2" style={{textAlign: 'center'}}>
            <h2 style={{color: 'white'}}>Contactez-moi</h2>
            <form>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="name">NOM Prenom <span style={{color: 'rgb(255, 255, 0)'}}>(pas obligatoire) :</span></label>
                    <input className="form-input" type="text" placeholder="nzoshoot@gmail.com"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="email">Adresse Email :</label>
                    <input className="form-input" type="email" placeholder="nzoshoot@gmail.com"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="name">Numero de téléphone <span style={{color: 'rgb(255, 255, 0)'}}>(pas obligatoire) :</span></label>
                    <input className="form-input" type="text" placeholder="06.06.06.06.06"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-label" htmlFor="email">Message :</label>
                    <textarea className="form-textarea" name="message" id="message" cols="30" rows="10" placeholder="Une demande personnalisée sympathique..."></textarea>
                </div>
                <input className="yellowbutton" type="submit" value='Envoyer'/>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default ContactMe;