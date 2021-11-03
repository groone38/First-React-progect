import './Footer.css';
import instagram from './img/instagram.png';
import vkontakte from './img/vkontakte.png';
import youtube from './img/youtube.png';

function Footer() {
    return(
        <div className="color">
            <div className="wrap">
                <footer className="footer">
                    <div className="footer__text">
                        <h1>Связаться с нами</h1>
                    </div>
                    <div className="footer__num">
                        <p>Контакты: 8-955-85-85-88</p>
                    </div>
                    <div className="footer__social">
                        <a href="#1"><img src={instagram} alt="" /></a>
                        <a href="#2"><img src={youtube} alt="" /></a>
                        <a href="#3"><img src={vkontakte} alt="" /></a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;