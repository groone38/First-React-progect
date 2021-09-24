import './Two.css';
import raskol from './img/raskol.jpg';
import rebbit from './img/rebbit.jpg';
import tsygan from './img/tsygan.jpg';

function Two() {
    return(
        <div className="wrap">
            <h2>Мои проекты</h2>
            <div className="two">
                <div className="two-card">
                    <img src={raskol} alt="" />
                    <p>
                        <b>Раскол:</b> lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <a href="#1" className="card-btn">Learn more</a>
                </div>
                <div className="two-card">
                    <img src={rebbit} alt="" />
                    <p>
                       <b>Rebbit fucked horse:</b> lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <a href="#1" className="card-btn">Learn more</a>
                </div>
                <div className="two-card">
                    <img src={tsygan} alt="" />
                    <p>
                       <b>Tsygan:</b> lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <a href="#1" className="card-btn">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Two;