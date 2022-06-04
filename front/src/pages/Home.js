import nzoshoot from '../assets/images_content/nzoshoot.png'
import logo from '../assets/images_content/nzoshoot_logo.png'
import 'animate.css';

const Home = () => {
    return (
        <div className="d-flex justify-content-center">
            <section className='d-flex' id='home-section'>
                <div className="w-50 left-content flex-direction-column animate__animated animate__fadeIn">
                    <img src={logo} alt="logo nzoshoot" style={{margin: "30px"}}/>
                    <h2>NZOSHOOT</h2>
                    <h3>Photographe passionné</h3>
                    <ul>
                        <a  className="social-links" href='https://twitter.com/NzoShoot'><i className="fa-brands fa-twitter fa-lg white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.tiktok.com/@nzoshoot_'><i className="fa-brands fa-tiktok fa-lg white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.youtube.com/channel/UCgtjeRpS3ixwNK-gZrST-Hw'><i className="fa-brands fa-youtube fa-lg white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.instagram.com/nzoshoot/'><i className="fa-brands fa-instagram fa-lg white-icon m-2"></i></a>
                        <a  className="social-links" href='https://www.facebook.com/NzoShoot-111207490246730'><i className="fa-brands fa-facebook-f fa-lg white-icon m-2"></i></a>
                    </ul>
                </div>
                <div className="w-50 right-content animate__animated animate__fadeIn">
                    
                </div>
            </section>
            
        </div>
    )
}

export default Home;