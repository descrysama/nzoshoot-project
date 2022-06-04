import nzoshoot from '../assets/images_content/nzoshoot.png'
import logo from '../assets/images_content/nzoshoot_logo.png'
import professionnal from '../assets/images_content/nzoshoot.webp'
import 'animate.css';

const Home = () => {
    return (
        <div className="d-flex flex-direction-column align-items-center">
            <section className='d-flex' id='home-section'>
                <div className="w-50 left-content flex-direction-column animate__animated animate__fadeIn" id='left-content'>
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
                <div className="w-50 right-content animate__animated animate__fadeIn" id='right-content'></div>
            </section>
            <section className='d-flex justify-content-center' id="about-section">
                <div id="about-section-1" style={{width: '80%'}} className='d-flex align-items-center justify-content-center'>
                    <div className='p-4 d-flex flex-direction-column justify-content-center align-items-center p-2'>
                        <h3><span style={{color: 'rgb(255, 255, 0)', margin: '10px'}}>|</span> A propos de moi</h3>
                        <p>
                        Photographe polyvalent qui vit pour capturer des moments uniques avec mon style caractéristique. 
                        J'ai commencé mon aventure photographique en 2018 et j'ai rapidement embrassé les éléments fondamentaux qui font une bonne photo : l'éclairage, l'équilibre, la composition et l'utilisation de la perspective.
                        J'aime capturer des moments poignants et profonds avec une touche de créativité. 
                        Et offre mes services personnalisés exceptionnels à chacun de mes clients, alors prenez contact sans tarder pour réserver votre session.
                        </p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img id="img-pro" src={professionnal}/>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    )
}

export default Home;