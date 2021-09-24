import './Footer.css';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import youtube from './img/youtube.png';

function Footer() {
    return(
        <div className="wrap">
            <div className="social">
                <div className="social-num">
                    <p>Контакты: 8-955-85-85-88</p>
                </div>
                <div className="social-img">
                    <a href="#1"><img src={facebook} alt="" /></a>
                    <a href="#2"><img src={instagram} alt="" /></a>
                    <a href="#3"><img src={twitter} alt="" /></a>
                    <a href="#4"><img src={youtube} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;