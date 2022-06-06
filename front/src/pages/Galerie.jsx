import Navbar from "../components/navbarComponent";
import Footer from "../components/footerComponent";

const Galerie = () => {
    return(
        
        <>
        <Navbar />
        <div className="d-flex flex-direction-column align-items-center p-2">
            <h2 style={{color: 'white'}}>Galerie</h2>
        </div>
        <Footer />
        </>
        
    )
}

export default Galerie;