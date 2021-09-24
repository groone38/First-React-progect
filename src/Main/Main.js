import './Main.css';
import stud2 from './img/stud2.jpg';
import card1 from './img/card1.jpg';
import card2 from './img/card2.jpeg';
import card3 from './img/card3.jpg';

function Main() {
    return(
        <div className="wrap">
            <div className="main">
                <img src={stud2} alt="" />
                <div className="main-block">
                    <div className="block-text">
                        <h2>Коротко о главном</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                    <div className="card-block">
                        <div className="card">
                            <img src={card1} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <a href="#1" className="card-btn">Learn more</a>
                        </div>
                        <div className="card">
                            <img src={card2} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <a href="#1" className="card-btn">Learn more</a>
                        </div>
                        <div className="card">
                            <img src={card3} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <a href="#1" className="card-btn">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;