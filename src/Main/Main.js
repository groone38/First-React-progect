import { BrowserRouter as Router, Link } from "react-router-dom";
import './Main.css';
import Arrow from './img/Arrow.svg';
import micro from './img/micro.jpg';
import Data from './data.json';

function Main() {
    return(
        <div className="wrap">
            <div className="main">
                <div className="main__block">
                    <div className="block__text">
                        <h1>Студия звукозаписи</h1>
                        <p>Студия звукозаписи в Краснодаре. Записывайтесь уже сейчас</p>
                    </div>
                    <div className="block__link">
                        <Link to="/One" className="link__text">
                            Записаться
                            <img src={Arrow} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="main__img">
                    <img src={micro} alt="" />
                </div>
            </div>
            <div>
                <div className="card">
                    {Data.map(e => {
                        return (
                            <div key={e.id} className="card__block">
                                <img src={e.img} alt="" />
                                <p>{e.info}</p>
                                <p>{e.drum}</p>
                                <p>{e.bass}</p>
                                <p>{e.guitar}</p>
                            </div>
                        )
                    }) }
                    {/* <img src={card1} alt="" />
                    <p>Инструменты на студии: </p>
                    <p>Установка, crash, ride, hi-hat, педаль</p>
                    <p>Бас (Fender)</p>
                    <p>Гитара (Gibson)</p>
                    <p>Keybord (Korg)</p> */}
                </div>
                {/* <div className="card__block">
                    <img src={card2} alt="" />
                    <p>Инструменты на студии: </p>
                    <p>Установка, crash, ride, hi-hat, педаль</p>
                    <p>Бас (Fender)</p>
                    <p>Гитара (Gibson)</p>
                    <p>Keybord (Korg)</p>
                </div>
                <div className="card__block">
                    <img src={card3} alt="" />
                    <p>Инструменты на студии: </p>
                    <p>Установка, crash, ride, hi-hat, педаль</p>
                    <p>Бас (Fender)</p>
                    <p>Гитара (Gibson)</p>
                    <p>Keybord (Korg)</p>
                </div> */}
            </div>
        </div>
    )
}

export default Main;