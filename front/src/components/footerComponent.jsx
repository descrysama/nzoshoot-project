import logo from '../assets/images_content/nzoshoot_logo.png';

const Footer = () => {
    return (
        <footer className="d-flex animate__animated animate__fadeIn" style={{justifyContent: 'space-around', backgroundColor: '#121212', padding: '18px 18px 18px 18px'}}>
            <div className="w-50" style={{textAlign:'center', color: 'white', justifyContent: 'center'}}>
                <div className="d-flex flex-direction-column align-items-center justify-content-center" style={{padding: '10px'}}>
                    <img src={logo} width="120px" alt="logo nzoshoot" style={{padding: '20px'}} />
                    <p style={{marginBottom: '5px'}}>nzoshoot@gmail.com</p>
                    <p style={{marginBottom: '5px'}}>06.23.30.35.57</p>
                </div>
            </div>
            <div className="w-50 d-flex flex-direction-column align-items-center" style={{textAlign:'center', color: 'white', justifyContent: 'center'}}>
                <ul>
                    <a  className="social-links" href='https://twitter.com/NzoShoot'><i className="fa-brands fa-twitter fa-lg white-icon m-2"></i></a>
                    <a  className="social-links" href='https://www.tiktok.com/@nzoshoot_'><i className="fa-brands fa-tiktok fa-lg white-icon m-2"></i></a>
                    <a  className="social-links" href='https://www.youtube.com/channel/UCgtjeRpS3ixwNK-gZrST-Hw'><i className="fa-brands fa-youtube fa-lg white-icon m-2"></i></a>
                    <a  className="social-links" href='https://www.instagram.com/nzoshoot/'><i className="fa-brands fa-instagram fa-lg white-icon m-2"></i></a>
                    <a  className="social-links" href='https://www.facebook.com/NzoShoot-111207490246730'><i className="fa-brands fa-facebook-f fa-lg white-icon m-2"></i></a>
                </ul>
                <p style={{marginBottom: '5px'}}>Suivez moi sur mes reseaux</p>
            </div>
        </footer>
    )
}

export default Footer;