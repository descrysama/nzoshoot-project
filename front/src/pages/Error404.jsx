import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";

const Error404 = () => {
    return(
        
        <>
        <Navbar />
        <div className="d-flex flex-direction-column align-items-center p-2">
            <h2 style={{color: 'white'}}>Erreur 404 : Page non trouvée !</h2>
            <a href="/">Retourner à l'accueil ?</a>
        </div>
        <Footer />
        </>
    )
}

export default Error404;