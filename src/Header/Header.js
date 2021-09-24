import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './img/Logo.jpg';

function Header() {
    return(
        <div className="wrap">
            <div className="header">
                <div className="header-card">    
                    <Link to="/">Коротко о главном</Link>
                    <Link to="/One">Записаться</Link>
                    <Link to="/Two">Мои проекты</Link>
                    <Link to="/Chat">Еще не рабочий чат((((</Link>
                </div>   
                    <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Header;