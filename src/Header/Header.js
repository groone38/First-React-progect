import { Link } from 'react-router-dom';
import './Header.css';
import instagram from './img/instagram.png';
import vkontakte from './img/vkontakte.png';
import youtube from './img/youtube.png';

function Header() {
    return(
    <div className="color">
        <div className="wrap">
            <div className="header">
                    <div className="logo">
                        <p>RSKSTUD</p>
                    </div>    
                <div className="header-card">
                    <Link to="/">Главная</Link>
                    <Link to="/One">Запись</Link>
                    <Link to="/Two">Мои проекты</Link>
                </div>   
                <div className="social">
                    <ul>
                        <li><a href="#"><img src={instagram} alt="" /></a></li>
                        <li><a href="#"><img src={youtube} alt="" /></a></li>
                        <li><a href="#"><img src={vkontakte} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;